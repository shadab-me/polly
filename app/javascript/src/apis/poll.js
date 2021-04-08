import axios from "axios";

const list = () => axios.get("/polls");
const pollList = () => {
  return list();
};

export default pollList;
