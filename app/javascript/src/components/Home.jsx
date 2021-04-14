import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { pollList } from "apis/poll";
import { Link } from "react-router-dom";
import PageLoader from "./PageLoader";
import Logger from "js-logger";

function Home() {
  const [polls, setPolls] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPolls = async () => {
    try {
      const { data } = await pollList();
      setPolls(data.polls);
      setLoading(false);
    } catch (error) {
      Logger.ERROR(error);
    }
  };
  useEffect(() => {
    fetchPolls();
  }, []);

  if (loading) {
    return <PageLoader />;
  }
  return (
    <div className="bg-gray-300 mt-10 p-3 pb-10">
      <h1 className="text-4xl text-center font-bold p-5 mt-5 text-blue-900">
        All Polls
      </h1>
      <ul className="w-1/2 mx-auto my-0">
        {polls.map((poll) => (
          <li key={poll.id} className="flex h-full">
            <span className="mt-5 text-blue-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
                />
              </svg>
            </span>
            <Link
              className="mt-3  transition-all ease-out duration-75 bg-gray-200 text-lg text-blue-600 p-4 hover:bg-gray-400  hover:text-white w-full h-full rounded-full"
              to={`/poll/${poll.id}`}
            >
              <span className="text-blue-700">{poll.value}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Home;
