


const setToken = (...data) => localStorage.setItem("token", data)

const getToken = () => localStorage.getItem("token");

const removeToken = () => localStorage.removeItem("token");