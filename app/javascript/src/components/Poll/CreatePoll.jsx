import React from "react";
const CreatePoll = () => {
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className="">
      <form onSubmit={(e) => submitHandler(e)}>
        <label htmlFor="question">Question</label>
        <input placeholder="Enter You Question?"></input>
      </form>
    </div>
  );
};

export default CreatePoll;
