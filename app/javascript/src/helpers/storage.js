const setToLocalStorage = ({ auth_token, userId, email, name }) => {
  localStorage.setItem("authToken", auth_token);
  localStorage.setItem("userId", userId);
  localStorage.setItem("email", email);
  localStorage.setItem("name", name);
};

const getFromLocalStorage = (key) => {
  return localStorage.getItem(key);
};

export { setToLocalStorage, getFromLocalStorage };
