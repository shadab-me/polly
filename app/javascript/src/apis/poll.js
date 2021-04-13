import axios from "axios";

const list = () => axios.get("/polls");
const pollList = () => {
  return list();
};

const poll = (id) => axios.get(`/polls/${id}`);
const singlePoll = (id) => {
  return poll(id);
};
const newPoll = (payload) => axios.post("/polls", payload);
const createPoll = (payload) => {
  return newPoll(payload);
};

const newVote = (payload) => axios.post("/votes", payload);

const createVote = (payload) => {
  return newVote(payload);
};

export { pollList, singlePoll, createPoll, createVote };
