
const LOCAL_STORAGE_TOKEN = "token"

export function setToken(token) {
    return localStorage.setItem(LOCAL_STORAGE_TOKEN, token)
}

export function getToken() {
    return localStorage.getItem(LOCAL_STORAGE_TOKEN)
}

export function containsToken() {
    return !!getToken()
}