const setToLocalStorage = (authToken, userId, email) => {
  
  localStorage.setItem("authToken", authToken);
  localStorage.setItem("userId", userId);
  localStorage.setItem("email", email);
};

const getFromLocalStorage = (key) => {
  return localStorage.getItem(key);
};

export { setToLocalStorage, getFromLocalStorage };
