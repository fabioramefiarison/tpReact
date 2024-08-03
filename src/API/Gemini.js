import { GoogleGenerativeAI } from "@google/generative-ai";

// Lire la clé API depuis les variables d'environnement
const apiKey = process.env.REACT_APP_GEMINI_API_KEY;

if (!apiKey) {
  throw new Error("erreur sur l'API (il faut appliquer .env");
}

const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

async function run(prompt) {
  const chatSession = model.startChat({
    generationConfig,
    history: [],
  });

  try {
    const result = await chatSession.sendMessage(prompt);
    return result.response.text(); // Retourner la réponse textuelle
  } catch (error) {
    console.error("Error during API call:", error);
    return "Pas de connexion internet"; // Retourner un message d'erreur
  }
}

export default run;
