"use client"
import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

export default function Question({ question,answer }) {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <article className="question">
      <header>
        <h4>{question}</h4>
        <button className="btn" onClick={() => setShowDetails((pre)=>!pre)}>
          {showDetails ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {showDetails && <p>{answer}</p>}
    </article>
  );
}