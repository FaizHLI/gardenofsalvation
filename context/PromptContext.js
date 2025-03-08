import React, { createContext, useState, useContext, useEffect } from "react";

const PromptContext = createContext();

export function PromptProvider({ children }) {
  const [promptNum, setPromptNum] = useState(0);
  const [tokens, setTokens] = useState(0);
  const [recentEarnings, setRecentEarnings] = useState(null);

  useEffect(() => {
    const savedPromptNum = localStorage.getItem("promptNum");
    const savedTokens = localStorage.getItem("tokens");
    
    if (savedPromptNum) setPromptNum(parseInt(savedPromptNum));
    if (savedTokens) setTokens(parseInt(savedTokens));
  }, []);

  useEffect(() => {
    localStorage.setItem("promptNum", promptNum);
    localStorage.setItem("tokens", tokens);
  }, [promptNum, tokens]);

  const incrementPromptNum = () => {
    const newPromptNum = promptNum + 1;
    setPromptNum(newPromptNum);

    const baseTokens = 15;
    
    const bonusChance = Math.min(0.7 + (newPromptNum * 0.01), 0.95);
    const jackpotChance = 0.05;
    
    let earnedTokens = baseTokens;
    let bonusMessage = "";

    if (Math.random() < bonusChance) {
      const bonus = Math.floor(Math.random() * 10) + 1;
      earnedTokens += bonus;
      bonusMessage = `+${bonus} efficiency bonus!`;
    }

    if (Math.random() < jackpotChance) {
      const jackpot = Math.floor(Math.random() * 76) + 25;
      earnedTokens += jackpot;
      bonusMessage = `+${jackpot} ENERGY JACKPOT! 🎉`;
    }

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
      setTokens,
      clearRecentEarnings: () => setRecentEarnings(null)
    }}>
      {children}
    </PromptContext.Provider>
  );
}

export function usePrompt() {
  return useContext(PromptContext);
}