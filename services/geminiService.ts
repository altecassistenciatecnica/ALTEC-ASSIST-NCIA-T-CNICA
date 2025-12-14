import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
// Initialize safe AI instance only if key exists, otherwise handle gracefully in UI
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

const SYSTEM_INSTRUCTION = `
VocÃÂª ÃÂ© o "TÃÂ©cnico Virtual da ALTEC", um assistente especialista em geladeiras.
Seu objetivo ÃÂ© ajudar clientes com dÃÂºvidas bÃÂ¡sicas sobre manutenÃÂ§ÃÂ£o, uso e defeitos.
Diretrizes:
1. Responda de forma curta, amigÃÂ¡vel e direta (mÃÂ¡ximo 2 parÃÂ¡grafos).
2. Se o problema parecer perigoso (choque, cheiro de queimado, vazamento de gÃÂ¡s) ou complexo, recomende IMEDIATAMENTE chamar um tÃÂ©cnico da ALTEC.
3. Use emojis tÃÂ©cnicos (Ã°ÂÂÂ§, Ã¢ÂÂÃ¯Â¸Â, Ã°ÂÂÂ¡) moderadamente.
4. Nunca dÃÂª instruÃÂ§ÃÂµes de reparo complexo que exijam desmontar o motor ou mexer com gÃÂ¡s.
5. Fale sempre em PortuguÃÂªs do Brasil.
`;

export const sendMessageToGemini = async (message: string): Promise<string> => {
  if (!ai) {
    return "Erro de configuraÃÂ§ÃÂ£o: Chave de API nÃÂ£o encontrada. Por favor, contate o administrador.";
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

    return response.text || "Desculpe, nÃÂ£o consegui processar sua resposta no momento.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Estou com dificuldades para conectar ao servidor agora. Tente novamente mais tarde.";
  }
};