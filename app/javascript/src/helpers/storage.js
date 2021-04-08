const setToLocalStorage = (authToken, userId) => {
  localStorage.setItem("authToken", authToken);
  localStorage.setItem("userId", userId);
};

const getFromLocalStorage = (key) => {
  return localStorage.getItem(key);
};

export { setToLocalStorage, getFromLocalStorage };
