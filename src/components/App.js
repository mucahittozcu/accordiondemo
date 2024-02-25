"use client"
import Question from "./Question";
// import "./App.css";
import { useState } from "react";
import data from "./Data";

function App() {
  const [questions, setQuestions] = useState(data);

  return (
    <div className="container">
      <h1>Sıkça Sorulan Sorular</h1>
      <section className="info">
        {questions.map((question) => {
          return <Question 
          key={question.id}
           question={question.question}
           answer={question.answer}
           />;
        })}
      </section>
    </div>
  );
}

export default App;