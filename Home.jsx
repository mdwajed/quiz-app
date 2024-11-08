import React from "react";
import Admin from "./src/admin/Admin";
import QuizSetEntrypage from "./src/quiz-set-entrypage/QuizSetEntrypage";
import QuizeSetPage from "./src/quiz-set-page/QuizeSetPage";
import ParticipateInQuize from "./src/participate-in-quize/ParticipateInQuize";
import Leaderboard from "./src/leaderboardPage.jsx/Leaderboard";
import LoginPage from "./src/components/SignInPage";
import SignInPage from "./src/components/SignInPage";
import SignUpPage from "./src/components/SignUpPage";
import QuizPage from "./src/components/quizPage/QuizPage";
import ResultPage from "./src/components/result/ResultPage";

const Home = () => {
  return (
    <div>
      {/* <Admin /> */}
      {/* <QuizSetEntrypage /> */}
      {/* <QuizeSetPage /> */}
      {/* <ParticipateInQuize /> */}
      {/* <Leaderboard /> */}
      {/* <SignInPage/> */}
      {/* <SignUpPage /> */}
      {/* <QuizPage /> */}
      <ResultPage />
    </div>
  );
};

export default Home;
