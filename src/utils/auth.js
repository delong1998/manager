export function getToken() {
    return localStorage.getToken('token')
}

export function setToken() {
    localStorage.setItem('token',token)
}

export function isLogined() {
    if(localStorage.getItem('token')){
        return true;
    }
    return false;
}