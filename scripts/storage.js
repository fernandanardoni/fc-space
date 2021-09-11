


const setToken = (...data) => localStorage.setItem("token", data)

const getToken = () => localStorage.getItem("token");

const removeToken = () => localStorage.removeItem("token");


const redirect = () => {
    const data = getToken();
    if(data){
        return true;
    }

    window.location = "index.html";
}