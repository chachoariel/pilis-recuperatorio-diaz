const SERVER_DOMAIN = 'https://the-trivia-api.com/api/questions?categories=history&limit=20&difficulty=medium';

export const getQuestions = async () => {
  try {
    const response = await fetch(`${SERVER_DOMAIN}`);
    return response.json();
  } catch {
    throw new Error('could not fetch color palettes');
  }
};


