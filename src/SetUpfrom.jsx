import React from "react";
import "./styles/setupform.css";
import { useGlobalContaxt } from "./Context";
const SetUpfrom = () => {
  const { quiz, handleChange, handleSubmit } = useGlobalContaxt();
  return (
    <div className="set-up-form">
      <h2> Set Your Quiz</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-block">
          <label htmlFor="amount">Number of Questions</label>
          <input
            type="number"
            max={20}
            id="amount"
            name="amount"
            min={3}
            value={quiz.amount}
            onChange={handleChange}
          ></input>
        </div>
        <div className="form-block">
          <label htmlFor="category"> Select Category</label>
          <select
            name="category"
            id="category"
            value={quiz.category}
            onChange={handleChange}
          >
            <option value="sports">Sports</option>
            <option value="history">History</option>
            <option value="politics">Politics</option>
          </select>
        </div>
        <div className="form-block">
          <label htmlFor="difficulty"> Select Difficulty</label>

          <select
            name="difficulty"
            id="difficulty"
            value={quiz.difficulty}
            onChange={handleChange}
          >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>

        <button id="set-quiz" type="submit">
          {" "}
          Start Quiz
        </button>
      </form>
    </div>
  );
};

export default SetUpfrom;
