import React, { useState, useEffect } from "react";
import { singlePoll } from "apis/poll";
import PageLoader from "../PageLoader";
import { createVote } from "apis/poll";
import { getFromLocalStorage } from "../../helpers/storage";
import Logger from "js-logger";

const Poll = ({ match }) => {
  const id = match.params.id;
  const userId = getFromLocalStorage("userId");
  const [title, setTile] = useState([]);
  const [options, setOptions] = useState([]);
  const [votes, setVotes] = useState([]);
  const [selected, setSelected] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchPoll = async (id) => {
    try {
      const { data } = await singlePoll(id);
      setTile(data.poll);
      setOptions(data.options);
      setVotes(data.votes);
      setLoading(false);
      console.log(data.votes);
    } catch (error) {
      Logger.error(error);
    }
  };

  const isVoted = votes.find((vote) => vote.user_id == userId);
  const votesCountPercentage = (option_id) => {
    const votesOneOption = votes.filter((vote) => vote.option_id == option_id);
    const percentage = (votesOneOption.length / votes.length) * 100;
    return percentage;
  };

  const selectedHandler = (id) => {
    setSelected(id);
  };

  const newVote = async (poll_id, option_id) => {
    const vote = {
      poll_id,
      option_id,
    };
    let voteDone = await createVote({ vote });
    fetchPoll(id);
  };

  const submitHandler = (poll_id = id, option_id) => {
    newVote(poll_id, option_id);
  };

  useEffect(() => {
    fetchPoll(id);
  }, []);

  if (loading) {
    return <PageLoader />;
  }
  return (
    <div className="w-1/3 mx-auto shadow-2xl rounded-2xl py-6 mt-10">
      <h1 className="pb-4 px-6 text-xl font-bold border-b text-bb-purple">
        {title.value}
      </h1>
      <ul className="mb-6 mt-3 px-6">
        {options?.map((option) => (
          <li
            isDisabled={isVoted}
            onClick={isVoted ? null : () => selectedHandler(option.id)}
            key={option.id}
            option={option}
            className={
              "cursor-pointer flex justify-between text-lg font-semibold p-3 mt-2 border-2 rounded-full border-blue-300 " +
              (selected == option.id ? "bg-blue-600 text-blue-200" : "")
            }
          >
            <p className="">{option.value}</p>
            {isVoted ? <p>{votesCountPercentage(option.id) + "%"}</p> : ""}
          </li>
        ))}
      </ul>
      {isVoted ? (
        <h3 className="text-center text-blue-400 text-2xl">
          Thanks for Voting!
          <span className="text-center">🎉</span>
        </h3>
      ) : (
        <button
          type="submit"
          onClick={() => submitHandler(id, selected)}
          className="w-full mx-auto my-0 p-3 mt-4 bg-indigo-600 text-white rounded shadow"
        >
          Submit
        </button>
      )}
    </div>
  );
};

export default Poll;
