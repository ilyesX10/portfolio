import { GoogleGenAI } from "@google/genai";
import { CONTACT_INFO, EDUCATION_ROADMAP, SKILLS } from "../constants.tsx";
import { Language } from "../types.ts";

const getSystemInstruction = (lang: Language) => `
You are the personal AI assistant for Drouiche Ilyes. Your goal is to represent him professionally.

About Ilyes:
- Full Name: ${CONTACT_INFO.name}
- Age: ${CONTACT_INFO.age}
- Education: Graduated from ${CONTACT_INFO.university} in 2024.
- Skills: ${SKILLS.map(s => s.name).join(', ')}.
- Roadmap: ${EDUCATION_ROADMAP.map(e => `${e.year}: ${e.title.en} at ${e.institution.en}`).join('; ')}.
- Contact: Phone: ${CONTACT_INFO.phone}, Email: ${CONTACT_INFO.email}.

CRITICAL: You MUST respond in the following language: ${lang.toUpperCase()}.
If the language is AR, ensure you use a friendly and professional Arabic tone.
If the language is FR, use a professional French tone.
If the language is EN, use a professional English tone.

Be polite and concise. If someone asks for his CV, tell them they can download it using the "Download CV" button.
`;

export async function chatWithIlyes(prompt: string, lang: Language) {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: getSystemInstruction(lang),
        temperature: 0.7,
      },
    });
    return response.text || "I'm sorry, I couldn't process that.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I am currently offline, but you can contact Ilyes directly via email!";
  }
}