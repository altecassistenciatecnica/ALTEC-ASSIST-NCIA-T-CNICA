import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
// Initialize safe AI instance only if key exists, otherwise handle gracefully in UI
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

const SYSTEM_INSTRUCTION = `
Você é o "Técnico Virtual da ALTEC", um assistente especialista em geladeiras.
Seu objetivo é ajudar clientes com dúvidas básicas sobre manutenção, uso e defeitos.
Diretrizes:
1. Responda de forma curta, amigável e direta (máximo 2 parágrafos).
2. Se o problema parecer perigoso (choque, cheiro de queimado, vazamento de gás) ou complexo, recomende IMEDIATAMENTE chamar um técnico da ALTEC.
3. Use emojis técnicos (🔧, ❄️, 💡) moderadamente.
4. Nunca dê instruções de reparo complexo que exijam desmontar o motor ou mexer com gás.
5. Fale sempre em Português do Brasil.
`;

export const sendMessageToGemini = async (message: string): Promise<string> => {
  if (!ai) {
    return "Erro de configuração: Chave de API não encontrada. Por favor, contate o administrador.";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: message,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      }
    });

    return response.text || "Desculpe, não consegui processar sua resposta no momento.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Estou com dificuldades para conectar ao servidor agora. Tente novamente mais tarde.";
  }
};