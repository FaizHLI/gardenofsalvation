import React, { createContext, useState, useContext, useEffect } from "react";

const PromptContext = createContext();

export function PromptProvider({ children }) {
  const [promptNum, setPromptNum] = useState(0);
  const [tokens, setTokens] = useState(0);
  const [recentEarnings, setRecentEarnings] = useState(null);

  // Load data from localStorage on mount
  useEffect(() => {
    const savedPromptNum = localStorage.getItem("promptNum");
    const savedTokens = localStorage.getItem("tokens");
    
    if (savedPromptNum) setPromptNum(parseInt(savedPromptNum));
    if (savedTokens) setTokens(parseInt(savedTokens));
  }, []);

  // Save data to localStorage when it changes
  useEffect(() => {
    localStorage.setItem("promptNum", promptNum);
    localStorage.setItem("tokens", tokens);
  }, [promptNum, tokens]);

  const incrementPromptNum = () => {
    const newPromptNum = promptNum + 1;
    setPromptNum(newPromptNum);
    
    // Calculate tokens earned with fun randomness
    const baseTokens = 15; // Base tokens per prompt
    
    // Random bonus based on:
    // 1. Base chance (70%) to get bonus tokens
    // 2. Prompt number influences bonus chance (more prompts = more experience = better rewards)
    // 3. Random "jackpot" chance for big rewards
    
    const bonusChance = Math.min(0.7 + (newPromptNum * 0.01), 0.95); // Increases with usage but caps at 95%
    const jackpotChance = 0.05; // 5% chance of jackpot
    
    let earnedTokens = baseTokens;
    let bonusMessage = "";
    
    // Regular bonus (1-10 extra tokens)
    if (Math.random() < bonusChance) {
      const bonus = Math.floor(Math.random() * 10) + 1;
      earnedTokens += bonus;
      bonusMessage = `+${bonus} efficiency bonus!`;
    }
    
    // Jackpot chance (25-100 tokens)
    if (Math.random() < jackpotChance) {
      const jackpot = Math.floor(Math.random() * 76) + 25;
      earnedTokens += jackpot;
      bonusMessage = `+${jackpot} ENERGY JACKPOT! 🎉`;
    }
    
    // Set recent earnings with the bonus message for display
    setRecentEarnings({
      amount: earnedTokens,
      message: bonusMessage || "Nice work saving energy!",
      timestamp: Date.now()
    });
    
    setTokens(prevTokens => prevTokens + earnedTokens);
    
    return earnedTokens;
  };

  return (
    <PromptContext.Provider value={{ 
      promptNum, 
      tokens, 
      recentEarnings,
      incrementPromptNum, 
      setTokens, // Expose for purchases
      clearRecentEarnings: () => setRecentEarnings(null)
    }}>
      {children}
    </PromptContext.Provider>
  );
}

export function usePrompt() {
  return useContext(PromptContext);
}