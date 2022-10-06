import http from "./http";

export async function login({email,password}) {

    return http.post(`/api/member/login?email=${email}&password=${password}`,  {
        withCredentials: true,
    })
}

export async function register(dataToSubmit) {

    return http.post('/api/register', dataToSubmit, {
        withCredentials: true,
    })
}

export async function duplicateId(checkId) {
    return http.get(`/api/member/checkid?id=${checkId}`);
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



