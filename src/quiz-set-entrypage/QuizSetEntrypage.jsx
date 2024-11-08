import React from "react";
import Dashboard from "../admin/Dashboard";
import LeftColumn from "./LeftColumn";
import RightColumn from "./RightColumn";
import Navbar from "./Navbar";

const QuizSetEntrypage = () => {
  return (
    <div className="bg-[#F5F3FF] min-h-screen flex">
      <Dashboard />
      <main className="md:flex-grow px-6 sm:px-6 lg:px-8 py-8 ">
        <div className="">
          <Navbar />
          <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-8 lg:gap-10">
            <LeftColumn />
            <RightColumn />
          </div>
        </div>
      </main>
    </div>
  );
};

export default QuizSetEntrypage;
