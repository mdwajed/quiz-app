import React from "react";
import { Icons, Plus } from "../svg/svg";

const Quizzes = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <a href="./quiz_set_page.html" className="group">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 ">
          <div className="text-buzzr-purple mb-4 group-hover:scale-105 transition-all">
            <Plus />
          </div>
          <h3 className="font-bold text-sm mb-2 group-hover:scale-105 transition-all">
            Create a new quiz
          </h3>
          <p className="text-gray-600 text-xs group-hover:scale-105 transition-all">
            Build from the ground up
          </p>
        </div>
      </a>

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 group cursor-pointer">
        <div className="text-buzzr-purple mb-4 group-hover:scale-105 transition-all">
          <Icons />
        </div>
        <h3 className="font-bold text-sm mb-2 group-hover:scale-105 transition-all">
          JavaScript Basics Quiz
        </h3>
        <p className="text-gray-600 text-xs group-hover:scale-105 transition-all">
          Test knowledge of core JavaScript
        </p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 group cursor-pointer">
        <div className="text-buzzr-purple mb-4 group-hover:scale-105 transition-all">
          <Icons />
        </div>
        <h3 className="font-bold text-sm mb-2 group-hover:scale-105 transition-all">
          React Hooks Quiz
        </h3>
        <p className="text-gray-600 text-xs group-hover:scale-105 transition-all">
          Test knowledge of core JavaScript
        </p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 group">
        <div className="text-buzzr-purple mb-4 group-hover:scale-105 transition-all">
          <Icons />
        </div>
        <h3 className="font-bold text-sm mb-2 group-hover:scale-105 transition-all">
          Backend vs. Frontend Quiz
        </h3>
        <p className="text-gray-600 text-xs group-hover:scale-105 transition-all">
          Test knowledge of core JavaScript
        </p>
      </div>
    </div>
  );
};

export default Quizzes;
