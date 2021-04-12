import React, { useState, useEffect } from "react";
import { singlePoll } from "apis/poll";

const Poll = ({ match }) => {
  const id = match.params.id;
  const [title, setTile] = useState([]);
  const [options, setOptions] = useState([]);
  const [selected, setSelected] = useState("");
  const fetchPoll = (id) => {
    singlePoll(id).then(({ data }) => {
      setTile(data.poll);
      setOptions(data.options);
    });
  };
  useEffect(() => {
    fetchPoll(id);
  }, []);
  const selectedHandler = (id) => {
    setSelected(id);
  };

  return (
    <div className="w-1/3 mx-auto shadow-2xl rounded-2xl py-6 mt-10">
      <h1 className="pb-4 px-6 text-xl font-bold border-b text-bb-purple">
        {title.value}
      </h1>
      <ul className="mb-6 mt-3 px-6">
        {options?.map((option) => (
          <li
            onClick={() => selectedHandler(option.id)}
            key={option.id}
            option={option}
            className={
              "cursor-pointer text-lg font-semibold p-3 mt-2 border-2 rounded-full border-blue-300 " +
              (selected == option.id ? "bg-blue-600 text-blue-200" : "")
            }
          >
            {option.value}
          </li>
        ))}
      </ul>
      <button
        type="submit"
        className="w-full mx-auto my-0 p-3 mt-4 bg-indigo-600 text-white rounded shadow"
      >
        Submit
      </button>
    </div>
  );
};

export default Poll;
