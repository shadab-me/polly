import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import pollList from "apis/poll";
import { Link } from "react-router-dom";

function Home() {
  const [polls, setPolls] = useState([]);
  const fetchPolls = () => {
    pollList().then(({ data }) => setPolls(data.polls));
  };
  useEffect(() => {
    fetchPolls();
  }, []);

  return (
    <div className="bg-gray-300 mt-10 p-3">
      <h1 className="text-4xl text-center font-bold p-5 mt-5">All Polls</h1>
      <ul className="w-1/2 mx-auto my-0">
        {polls.map((poll) => (
          <li
            key={poll.id}
            className="p-3 bg-gray-200 text-lg text-blue-600 m-2 rounded-lg"
          >
            <Link to={`/poll/${poll.id}`}>{poll.value}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Home;
