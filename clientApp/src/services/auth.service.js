import http from '../http.common';

const register = (username, email, password) => {

}


const login = (username, password) => {
    var user = {
        email: username,
        userName: username,
        password: password
    }
    http.post("/account/login", user )
    .then((res) => {
        localStorage.setItem("access_token", res.data.access_token);
    });
}
const logout = () => {
    localStorage.setItem("access_token", null);
}
const AuthService = {
    register,
    login
}

export default AuthService;