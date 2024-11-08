import React from "react";
import QuizeBanner from "./QuizeBanner";
import QuizeCard from "./QuizeCard";
import Footer from "./Footer";
import Navbar from "../quiz-set-entrypage/Navbar";

const ParticipateInQuize = () => {
  return (
    <div className="bg-[#F5F3FF] min-h-screen ">
      <div className="container mx-auto py-3">
        <Navbar />
        <QuizeBanner />
        <QuizeCard />
        <Footer />
      </div>
    </div>
  );
};

export default ParticipateInQuize;
