import { useContext, useState } from "react";
import React from "react";
import axios from "axios";
const table = {
  sports: 21,
  history: 23,
  politics: 24,
};

const baseurl = "https://opentdb.com/api.php?";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [waiting, setwaiting] = useState(true);
  const [loading, setloading] = useState(true);
  const [questions, setQuestions] = useState([]);
  const [correct, setCorrect] = useState(0);
  const [modalIsOpen, setmodal] = useState(false);
  const [quiz, setQuiz] = useState({
    amount: 10,
    category: "sports",
    difficulty: "easy",
  });

  const [index, setIndex] = useState(0);
  // console.log(quiz);
  console.log(questions);

  const fetchQuestions = async (url) => {
    setloading(true);
    setwaiting(false);
    const response = await axios(url).catch((err) => console.log(err));
    if (response) {
      // console.log(response);

      setQuestions(response.data.results);

      setloading(false);
      setwaiting(false);
    } else {
      setloading(true);
    }
  };

  const nextQuestion = () => {
    setIndex((oldindex) => {
      const index = oldindex + 1;
      if (index > questions.length - 1) {
        openMOdal();
        return 0;
      } else {
        return index;
      }
    });

    const openMOdal = () => {
      setmodal(true);
    };
  };

  const closeModal = () => {
    setwaiting(true);
    setCorrect(0);
    setmodal(false);
  };
  const checkAnswer = (value) => {
    if (value) {
      setCorrect((oldeCorrect) => oldeCorrect + 1);
    }
    nextQuestion();
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setQuiz({ ...quiz, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { amount, category, difficulty } = quiz;
    const url = `${baseurl}amount=${amount}&category=${table[category]}&difficulty=${difficulty}&type=multiple`;

    fetchQuestions(url);
  };
  // if(questions){
  // const ran = Math.floor(Math.random()*)
  // }

  return (
    <AppContext.Provider
      value={{
        waiting,
        correct,
        loading,
        modalIsOpen,
        questions,
        handleChange,
        handleSubmit,
        quiz,

        index,
        nextQuestion,
        checkAnswer,
        closeModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContaxt = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };
