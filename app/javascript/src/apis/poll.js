import axios from "axios";

const list = () => axios.get("/polls");
const pollList = () => {
  return list();
};
const poll = () => axios.get("")
export default pollList;

