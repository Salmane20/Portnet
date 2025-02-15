import { GoogleGenerativeAI, GenerativeModel } from "@google/generative-ai";

// Your API key should be in an environment variable
const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

// Initialize the Gemini API
const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

// Context for the AI assistant
const SYSTEM_CONTEXT = `Vous êtes un assistant IA spécialisé dans les opérations d'importation et les procédures douanières.

Votre rôle est d'aider les importateurs avec :
- Les procédures d'importation
- La documentation requise
- Les réglementations douanières
- Le suivi des expéditions
- Les tarifs et taxes
- Les certifications et conformités

Instructions de formatage :
- Utilisez **texte** pour mettre en gras les informations importantes
- Utilisez *texte* pour l'italique sur les termes techniques ou spécifiques
- Utilisez des listes à puces pour énumérer les étapes ou les éléments
- Structurez vos réponses avec des sections claires

Règles de réponse :
- Répondez toujours en français de manière professionnelle et précise
- Mettez en gras les points clés et les conclusions importantes
- Mettez en italique les termes techniques ou spécifiques
- Proposez des solutions concrètes et des étapes claires
- Si vous n'êtes pas sûr d'une information, indiquez-le clairement
- Utilisez des listes numérotées pour les étapes séquentielles
- Utilisez des listes à puces pour les énumérations non ordonnées

Exemple de formatage :
**Point important :** Voici une *procédure d'importation* à suivre :
1. Première étape
2. Deuxième étape

Éléments requis :
- Document A
- Document B`;

let model: GenerativeModel;

const initializeChat = () => {
  model = genAI.getGenerativeModel({ model: "gemini-pro" });
};

export const getGeminiResponse = async (prompt: string) => {
  try {
    if (!model) {
      initializeChat();
    }

    const fullPrompt = `${SYSTEM_CONTEXT}\n\nUtilisateur: ${prompt}\n\nAssistant: Laissez-moi vous aider avec cela.\n\n`;
    const result = await model.generateContent(fullPrompt);
    const response = await result.response;
    
    // Format the response for better readability
    let text = response.text();
    text = text.replace(/\n\n\n+/g, '\n\n'); // Remove excessive newlines
    text = text.replace(/^\s*Laissez-moi vous aider avec cela\.\s*/i, ''); // Remove standard intro if present
    
    return text;
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    throw error;
  }
};

// Function to validate if the API key is properly configured
export const validateGeminiConfig = async () => {
  try {
    if (!GEMINI_API_KEY) {
      throw new Error("Clé API Gemini non configurée");
    }
    
    // Test the API with a simple prompt
    const response = await getGeminiResponse("Bonjour");
    return true;
  } catch (error) {
    console.error("Error validating Gemini configuration:", error);
    throw error;
  }
}; 