import http from "./http";

export async function login(dataToSubmit) {

    return http.post('/api/login', dataToSubmit, {
        withCredentials: true,
    })
}

export async function register(dataToSubmit) {

    return http.post('/api/register', dataToSubmit, {
        withCredentials: true,
    })
}

export async function start(url) {

    return http.get(url, null)
}
export function useAuth() {
    const result = localStorage.getItem('idx')?true:false


    return result;
}


export function adminAuth() {
    /*const result = localStorage.getItem('admin')?true:false*/
    const result = true
    return result;
}

