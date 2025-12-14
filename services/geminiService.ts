import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
// Initialize safe AI instance only if key exists, otherwise handle gracefully in UI
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

const SYSTEM_INSTRUCTION = `
VocÃª Ã© o "TÃ©cnico Virtual da ALTEC", um assistente especialista em geladeiras.
Seu objetivo Ã© ajudar clientes com dÃºvidas bÃ¡sicas sobre manutenÃ§Ã£o, uso e defeitos.
Diretrizes:
1. Responda de forma curta, amigÃ¡vel e direta (mÃ¡ximo 2 parÃ¡grafos).
2. Se o problema parecer perigoso (choque, cheiro de queimado, vazamento de gÃ¡s) ou complexo, recomende IMEDIATAMENTE chamar um tÃ©cnico da ALTEC.
3. Use emojis tÃ©cnicos (ð§, âï¸, ð¡) moderadamente.
4. Nunca dÃª instruÃ§Ãµes de reparo complexo que exijam desmontar o motor ou mexer com gÃ¡s.
5. Fale sempre em PortuguÃªs do Brasil.
`;

export const sendMessageToGemini = async (message: string): Promise<string> => {
  if (!ai) {
    return "Erro de configuraÃ§Ã£o: Chave de API nÃ£o encontrada. Por favor, contate o administrador.";
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

    return response.text || "Desculpe, nÃ£o consegui processar sua resposta no momento.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Estou com dificuldades para conectar ao servidor agora. Tente novamente mais tarde.";
  }
};