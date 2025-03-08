import React, { useState } from "react";
import Link from 'next/link';
import ResponseDisplay from '../components/ResponseDisplay';
import { usePrompt } from "../context/PromptContext";

const Home = () => {
  const [question, setQuestion] = useState("");
  const [responseData, setResponseData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { incrementPromptNum } = usePrompt();

  const sendQuery = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/query", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question })
      });

      if (!res.ok) {
        throw new Error("Failed to fetch");
      }

      const data = await res.json();
      setResponseData(data);

      incrementPromptNum();
    } catch (err) {
      setError(err.message);
    }

    setLoading(false);
  };
  return (
    <div className="home-container">
      <div className="top-bar-container">
        <div className="top-bar">
          <Link href = "/stats">
            <button className="water-droplet" >📈</button>
          </Link>
          <Link href = "/fishTank">
            <button className="fish-tank">🐟</button>
          </Link>
        </div>
      </div>
      {/* Main Content */}
      <div className="main-content">
        <div className="title-section">
          <h1>
            <span className="green-text">Optimize</span>
            <span className="orange-text">AI 🌱</span>
            {/* <img src="/images/logo.png" alt="App Logo" className="app-logo" /> */}
          </h1>
          <p className="subtitle">A CLEANER AI MODEL</p>
        </div>
        <div className="input-form">
          <form onSubmit={sendQuery}>
            <input
              type="text"
              className="query-input"
              placeholder="Ask anything"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
            />
            <button type="submit" className="submit-btn" disabled={loading}>
              {loading ? "LOADING..." : "SUBMIT"}
            </button>
          </form>
        </div>
        
        {error && <p className="error-text">{error}</p>}

        
        {responseData && <ResponseDisplay responseData={responseData} />}
        
      </div>
    </div>
  );
};

export default Home;