import questions from "../questions";
import "../custom.css";
import { useState } from "react";
export default function Quiz() {
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    let myForm = document.getElementById("quiz");
    let tempScore = 0;
    questions.forEach((question) => {
      let search = `ques${questions.indexOf(question)}`;
      let userValue = myForm.elements[search].value;
      if (userValue === question.correct) {
        tempScore += 1;
      }
    });
    setScore(tempScore);
    setShowScore(true);
    myForm.reset();
  };
  const handleReset = () => {
    setScore(0);
    setShowScore(false);
  };

  return (
    <div className="container">
      <h3>Choose the correct options:</h3>
      <h5>Each correct score gives you 1 point.</h5>
      <form id="quiz">
        {questions.map((question, index) => (
          <section
            key={index}
            className={
              "container section " +
              (index % 2 !== 0 ? "section-off-white" : "")
            }
          >
            <div className="container">
              <p>{question.question}</p>
              {Object.keys(question.options).map((option, key) => {
                const myOption = question.options[option];
                return (
                  <div key={key}>
                    {option}
                    <input
                      type="radio"
                      id={option}
                      name={`ques${questions.indexOf(question)}`}
                      value={option}
                    />
                    <label htmlFor={myOption}>{myOption}</label>
                    <br />
                  </div>
                );
              })}
            </div>
          </section>
        ))}
        <button
          className="link link-primary check"
          type="submit"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
      {showScore && (
        <>
          <div className="container container-center">
            Your Score is: {score}
          </div>
          <button className="link link-secondary" onClick={handleReset}>
            Play Again
          </button>
        </>
      )}
    </div>
  );
}
