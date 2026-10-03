import OpenAI from "openai";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(request) {
  try {
    const { message } = await request.json();

    if (!message || typeof message !== "string" || message.trim().length === 0) {
      return NextResponse.json({ error: "Please enter a message." }, { status: 400 });
    }

    if (message.length > 8000) {
      return NextResponse.json({ error: "Message is too long." }, { status: 400 });
    }

    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { error: "OPENAI_API_KEY is not configured on the server." },
        { status: 500 }
      );
    }

    const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

    const response = await client.responses.create({
      model: process.env.OPENAI_MODEL || "gpt-6-luna",
      instructions:
        "You are AITechWithSandeep AI, a helpful, concise and practical AI assistant. " +
        "Explain technical topics clearly. For automotive cybersecurity questions, give technically accurate, structured answers. " +
        "Do not claim to have performed actions you did not perform.",
      input: [{ role: "user", content: message.trim() }],
    });

    return NextResponse.json({ reply: response.output_text || "I couldn't generate a response." });
  } catch (error) {
    console.error("AI chat error:", error);
    return NextResponse.json({ error: "AI service is temporarily unavailable." }, { status: 500 });
  }
}
