// pages/api/chat.ts
import type { NextApiRequest, NextApiResponse } from "next";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // Server-only key
});

interface Message {
  from: "user" | "bot";
  text: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ reply: "Method not allowed" });
  }

  const { messages }: { messages: Message[] } = req.body;

  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ reply: "Invalid messages array" });
  }

  try {
    const prompt = messages
      .map((m) => `${m.from === "user" ? "User" : "Bot"}: ${m.text}`)
      .join("\n");

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
      max_tokens: 150,
    });

    const reply = response.choices?.[0]?.message?.content?.trim() || "Sorry, I didn't get that.";

    res.status(200).json({ reply });
  } catch (err) {
    console.error("OpenAI Error:", err);
    res.status(500).json({ reply: "Something went wrong" });
  }
}
