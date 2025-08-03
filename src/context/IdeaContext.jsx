import { createContext, useState, useContext, useEffect } from 'react';

// Create context
const IdeaContext = createContext();

// Custom hook
export const useIdeaContext = () => useContext(IdeaContext);

// Provider
export const IdeaProvider = ({ children }) => {
  const [ideas, setIdeas] = useState(() => {
    const stored = localStorage.getItem('ideabox-ideas');
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem('ideabox-ideas', JSON.stringify(ideas));
  }, [ideas]);

  const addIdea = (idea) => setIdeas((prev) => [...prev, { id: Date.now(), ...idea }]);

  return (
    <IdeaContext.Provider value={{ ideas, addIdea }}>
      {children}
    </IdeaContext.Provider>
  );
};
