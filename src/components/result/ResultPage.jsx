import React from "react";
import logoWhite from "../../assets/logo-white.svg";
import progressIcon from "../../assets/icons/circular-progressbar.svg";

const ResultPage = () => {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <div className="flex min-h-screen overflow-hidden">
        <img
          src={logoWhite}
          alt="Logo"
          className="max-h-11 fixed left-6 top-6 z-50"
        />

        {/* Left Side */}
        <div className="max-h-screen overflow-hidden hidden lg:flex lg:w-1/2 bg-primary flex-col justify-center p-12 relative">
          <div>
            <div className="text-white">
              <h2 className="text-4xl font-bold mb-2">React Hooks Quiz</h2>
              <p>
                A quiz on React hooks like useState, useEffect, and useContext.
              </p>

              <div className="my-6 flex items-center">
                <div className="w-1/2">
                  <div className="flex gap-6 my-6">
                    <div>
                      <p className="font-semibold text-2xl my-0">10</p>
                      <p className="text-gray-300">Questions</p>
                    </div>
                    <div>
                      <p className="font-semibold text-2xl my-0">8</p>
                      <p className="text-gray-300">Correct</p>
                    </div>
                    <div>
                      <p className="font-semibold text-2xl my-0">2</p>
                      <p className="text-gray-300">Wrong</p>
                    </div>
                  </div>

                  <a
                    href="./leaderboard_page.html"
                    className="bg-secondary py-3 rounded-md hover:bg-secondary/90 transition-colors text-lg font-medium underline text-white"
                  >
                    View Leaderboard
                  </a>
                </div>

                <div className="w-1/2 bg-primary/80 rounded-md border border-white/20 flex items-center p-4">
                  <div className="flex-1">
                    <p className="text-2xl font-bold">5/10</p>
                    <p>Your Mark</p>
                  </div>
                  <div>
                    <img src={progressIcon} alt="Progress" className="h-20" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="max-h-screen md:w-1/2 flex items-center justify-center h-full p-8">
          <div className="h-[calc(100vh-50px)] overflow-y-scroll">
            <div className="px-4">
              {/* Question One */}
              <div className="rounded-lg overflow-hidden shadow-sm mb-4">
                <div className="bg-white p-6 !pb-2">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold">
                      1. Which of the following is NOT a binary tree traversal
                      method?
                    </h3>
                  </div>
                  <div className="space-y-2">
                    <label className="flex items-center space-x-3">
                      <input
                        type="radio"
                        name="answer1"
                        className="form-radio text-buzzr-purple"
                        defaultChecked
                      />
                      <span>Inorder</span>
                    </label>
                    <label className="flex items-center space-x-3">
                      <input
                        type="radio"
                        name="answer1"
                        className="form-radio text-buzzr-purple"
                      />
                      <span>Preorder</span>
                    </label>
                    <label className="flex items-center space-x-3">
                      <input
                        type="radio"
                        name="answer1"
                        className="form-radio text-buzzr-purple"
                      />
                      <span>Postorder</span>
                    </label>
                    <label className="flex items-center space-x-3">
                      <input
                        type="radio"
                        name="answer1"
                        className="form-radio text-buzzr-purple"
                      />
                      <span>Crossorder</span>
                    </label>
                  </div>
                </div>
                <div className="flex space-x-4 bg-primary/10 px-6 py-2">
                  <button className="text-red-600 hover:text-red-800 font-medium">
                    Delete
                  </button>
                  <button className="text-primary hover:text-primary/80 font-medium">
                    Edit Question
                  </button>
                </div>
              </div>

              {/* Question Two */}
              <div className="rounded-lg overflow-hidden shadow-sm mb-4">
                <div className="bg-white p-6 !pb-2">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold">
                      2. What is the maximum number of nodes at level 'L' in a
                      binary tree?
                    </h3>
                  </div>
                  <div className="space-y-2">
                    <label className="flex items-center space-x-3">
                      <input
                        type="radio"
                        name="answer2"
                        className="form-radio text-buzzr-purple"
                        defaultChecked
                      />
                      <span>2^L</span>
                    </label>
                    <label className="flex items-center space-x-3">
                      <input
                        type="radio"
                        name="answer2"
                        className="form-radio text-buzzr-purple"
                      />
                      <span>L</span>
                    </label>
                    <label className="flex items-center space-x-3">
                      <input
                        type="radio"
                        name="answer2"
                        className="form-radio text-buzzr-purple"
                      />
                      <span>2^(L-1)</span>
                    </label>
                    <label className="flex items-center space-x-3">
                      <input
                        type="radio"
                        name="answer2"
                        className="form-radio text-buzzr-purple"
                      />
                      <span>2L</span>
                    </label>
                  </div>
                </div>
                <div className="flex space-x-4 bg-primary/10 px-6 py-2">
                  <button className="text-red-600 hover:text-red-800 font-medium">
                    Delete
                  </button>
                  <button className="text-primary hover:text-primary/80 font-medium">
                    Edit Question
                  </button>
                </div>
              </div>

              {/* Question Three */}
              <div className="rounded-lg overflow-hidden shadow-sm mb-4">
                <div className="bg-white p-6 !pb-2">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold">
                      3. What is the height of an empty binary tree?
                    </h3>
                  </div>
                  <div className="space-y-2">
                    <label className="flex items-center space-x-3">
                      <input
                        type="radio"
                        name="answer3"
                        className="form-radio text-buzzr-purple"
                        defaultChecked
                      />
                      <span>0</span>
                    </label>
                    <label className="flex items-center space-x-3">
                      <input
                        type="radio"
                        name="answer3"
                        className="form-radio text-buzzr-purple"
                      />
                      <span>-1</span>
                    </label>
                    <label className="flex items-center space-x-3">
                      <input
                        type="radio"
                        name="answer3"
                        className="form-radio text-buzzr-purple"
                      />
                      <span>1</span>
                    </label>
                    <label className="flex items-center space-x-3">
                      <input
                        type="radio"
                        name="answer3"
                        className="form-radio text-buzzr-purple"
                      />
                      <span>Undefined</span>
                    </label>
                  </div>
                </div>
                <div className="flex space-x-4 bg-primary/10 px-6 py-2">
                  <button className="text-red-600 hover:text-red-800 font-medium">
                    Delete
                  </button>
                  <button className="text-primary hover:text-primary/80 font-medium">
                    Edit Question
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultPage;
