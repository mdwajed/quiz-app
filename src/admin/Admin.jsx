import React from "react";
import Dashboard from "./Dashboard";
import Haeder from "./Haeder";
import Quizzes from "./Quizzes";

const Admin = () => {
  return (
    <div className="bg-gray-100 h-screen flex w-full">
      <Dashboard />
      <main className="flex-grow p-10">
        <Haeder />
        <Quizzes />
      </main>
    </div>
  );
};

export default Admin;
