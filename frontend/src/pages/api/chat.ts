import type { NextApiRequest, NextApiResponse } from "next";
import OpenAI from "openai";
import type { ChatCompletionMessageParam } from "openai/resources/chat/completions";
 
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});
 
interface Message {
  from: "user" | "bot";
  text: string;
}
 
// ↓ This is the handler function — it starts right here
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // ✅ Key check — added at the very top of the handler
  if (!process.env.OPENAI_API_KEY) {
    console.error("❌ OPENAI_API_KEY is not set");
    return res.status(500).json({ reply: "Missing API key configuration." });
  }
 
  if (req.method !== "POST") {
    return res.status(405).json({ reply: "Method not allowed" });
  }
 
  const { messages }: { messages: Message[] } = req.body;
 
  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ reply: "Invalid messages array" });
  }
 
  try {
    const openAIMessages: ChatCompletionMessageParam[] = [
      {
        role: "system",
        content:
          "You are Wabot, a helpful WhatsApp business assistant. Keep responses short and professional.",
      },
      ...(messages.map((m) => ({
        role: m.from === "user" ? "user" : "assistant",
        content: m.text,
      })) as ChatCompletionMessageParam[]),
    ];
 
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: openAIMessages,
      max_tokens: 200,
      temperature: 0.7,
    });
 
    const reply =
      response.choices?.[0]?.message?.content?.trim() ||
      "Sorry, I didn't get that.";
 
    return res.status(200).json({ reply });
  } catch (error: any) {
    console.error("OpenAI API Error:", error?.message || error);
    return res.status(500).json({
      reply: error?.message ?? "Something went wrong. Please try again.",
    });
  }
}
 