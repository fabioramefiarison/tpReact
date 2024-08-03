import React, { createContext, useState } from 'react';
import run from './Gemini';

export const Context = createContext();

function ContextProvider(props) {
  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [previousPrompt, setPreviousPrompt] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");

  const onSent = async () => {
    setLoading(true);
    setShowResult(true);
    setRecentPrompt(input);
    const response = await run(input);
    setResultData(response);
    setLoading(false);
    setInput("");
  };

  const contextValue = {
    input,
    recentPrompt,
    previousPrompt,
    showResult,
    onSent,
    loading, 
    resultData,
    setInput,
    setRecentPrompt,
    setPreviousPrompt,
    setShowResult,
    setLoading,
    setResultData,
  };

  return (
    <Context.Provider value={contextValue}>
      {props.children}
    </Context.Provider>
  );
}

export default ContextProvider;
