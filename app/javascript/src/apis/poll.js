import axios from "axios";

const list = () => axios.get("/polls");
const pollList = () => {
  return list();
};

const poll = (id) => axios.get(`/polls/${id}`);
const singlePoll = (id) => {
  return poll(id);
};
const dataPoll = (payload) => axios.post("/votes", payload);
const createPoll = (payload) => {
  return dataPoll(payload);
};

/*const vote = (payload) => axios.post("/votes", payload);
const vote = (payload) => {
  return vote(payload);
};
*/
export { pollList, singlePoll, createPoll };
