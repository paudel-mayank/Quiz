import SetUpfrom from "./SetUpfrom";
import Loading from "./Loading";
import Modal from "./Modal";
import "./App.css";

import { useGlobalContaxt } from "./Context";
function App() {
  const {
    waiting,
    loading,
    questions,
    index,
    correct,
    nextQuestion,
    checkAnswer,
  } = useGlobalContaxt();
  if (waiting) {
    return <SetUpfrom />;
  }
  if (loading) {
    return <Loading />;
  }
  let { correct_answer, incorrect_answers, question } = questions[index];
  // let incorrect_as = ["2", "3", "1"];
  // const coreet_as = ["1"];
  const ran = Math.floor(Math.random() * 4);
  console.log(ran);
  incorrect_answers.splice(ran, 0, correct_answer);
  var answers = incorrect_answers;
  console.log(answers);

  return (
    <main>
      <Modal />
      <span className="score">
        Score: {correct}/{index}
      </span>
      <div className="quiz">
        <div className="question">
          <p>{question}</p>
        </div>
        <div className="answers">
          {answers.map((answer) => {
            return (
              <p
                key={answer}
                onClick={() => checkAnswer(correct_answer === answer)}
                className=" px-2 answer"
              >
                {answer}
              </p>
            );
          })}
        </div>
      </div>
      <button onClick={nextQuestion}> NextQuestion</button>
    </main>
  );
}

export default App;
