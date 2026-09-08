import type { NextApiRequest, NextApiResponse } from "next";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

interface Message {
  from: "user" | "bot";
  text: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log("🔥 /api/chat called");

  if (req.method !== "POST") {
    return res.status(405).json({
      reply: "Method not allowed",
    });
  }

  if (!process.env.OPENAI_API_KEY) {
    console.error("❌ OPENAI_API_KEY is missing");

    return res.status(500).json({
      reply: "OPENAI_API_KEY is missing",
    });
  }

  try {
    const { messages } = req.body as {
      messages: Message[];
    };

    console.log("📩 Messages received:", messages);

    if (!Array.isArray(messages)) {
      return res.status(400).json({
        reply: "Messages must be an array",
      });
    }

    const openAIMessages = [
      {
        role: "system" as const,
        content:
          "You are Wabot, a helpful WhatsApp business assistant. Keep responses short and professional.",
      },

      ...messages.map((message) => ({
        role: message.from === "user" ? ("user" as const) : ("assistant" as const),
        content: message.text,
      })),
    ];

    console.log("🤖 Sending request to OpenAI...");

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: openAIMessages,
      max_tokens: 200,
      temperature: 0.7,
    });

    const reply =
      response.choices[0]?.message?.content?.trim() ||
      "Sorry, I didn't get that.";

    console.log("✅ OpenAI response:", reply);

    return res.status(200).json({
      reply,
    });
  } catch (error: any) {
    console.error("❌ OpenAI ERROR:", error);

    return res.status(500).json({
      reply:
        error?.message ||
        "Something went wrong while contacting OpenAI.",
    });
  }
}