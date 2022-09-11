export const setLogin = () => {
  window.localStorage.setItem("login", true);
};

export const getLogin = () => {
  return window.localStorage.getItem("login");
};
