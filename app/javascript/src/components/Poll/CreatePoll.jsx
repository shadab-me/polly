import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const CreatePoll = () => {
  const [pollData, setPollData] = useState({
    question: "",
    option_one: "",
    option_two: "",
    option_three: "",
    option_four: "",
  });
  const poll = {
    value: pollData.question,
    options_attributes: [
      { value: pollData.question_one },
      { value: pollData.question_two },
      { value: pollData.question_three },
      { value: pollData.question_four },
    ],
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("/polls", { poll });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPollData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="container mx-auto p-8 flex">
        <div className="max-w-md w-full mx-auto">
          <h1 className="text-4xl text-center mb-12 font-thin">
            Create New Poll
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="bg-white rounded-lg overflow-hidden shadow-2xl">
              <div className="p-8">
                <div className="mb-5">
                  <label
                    htmlFor="Question"
                    className="block mb-2 3000text-sm font-medium text-gray-600"
                  >
                    Question
                  </label>

                  <input
                    type="text"
                    name="question"
                    className="block w-full p-3 rounded bg-gray-200 border border-transparent focus:outline-none"
                    value={pollData.question}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-5">
                  <label
                    htmlFor="option"
                    className="block mb-2 text-sm font-medium text-gray-600"
                  >
                    Option One
                  </label>

                  <input
                    type="text"
                    name="option_one"
                    className="block w-full p-3 rounded bg-gray-200 border border-transparent focus:outline-none"
                    value={pollData.option_one}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="option"
                    className="block mb-2 text-sm font-medium text-gray-600"
                  >
                    Option Two
                  </label>

                  <input
                    type="text"
                    name="option_two"
                    className="block w-full p-3 rounded bg-gray-200 border border-transparent focus:outline-none"
                    value={pollData.option_two}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="option"
                    className="block mb-2 text-sm font-medium text-gray-600"
                  >
                    Option Three
                  </label>

                  <input
                    type="text"
                    name="option_three"
                    className="block w-full p-3 rounded bg-gray-200 border border-transparent focus:outline-none"
                    value={pollData.option_three}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="option"
                    className="block mb-2 text-sm font-medium text-gray-600"
                  >
                    Option Four
                  </label>

                  <input
                    type="text"
                    name="option_four"
                    className="block w-full p-3 rounded bg-gray-200 border border-transparent focus:outline-none"
                    value={pollData.option_four}
                    onChange={handleChange}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full p-3 mt-4 bg-indigo-700 text-white rounded-lg shadow"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreatePoll;
