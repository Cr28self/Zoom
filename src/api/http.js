

import axios from "axios";

import {BASE_URL} from './config'


const instance = axios.create({ baseURL: `${process.env.REACT_APP_API_URL}` });


/*

instance.interceptors.request.use(
    function(config){
        const user = localStorage.getItem('user')
        if(!user){
            config.headers["acessToken"] = null;
            config.headers["refreshToken"] = null;
            return config

        }
        const { accessToken,refreshToken } = JSON.parse(user)
        config.headers["accessToken"] = accessToken;
        config.headers["refreshToken"] = refreshToken;
        return config
    }
)
instance.interceptors.response.use(
    function (response) {
        return response
    },
    async function (error) {
        if (error.response && error.response.status === 403) {
            try {
                const originalRequest = error.config;
                const data = await instance.get('auth/refreshtoken')
                if (data) {
                    const {accessToken, refreshToken} = data.data
                    localStorage.removeItem('user')
                    localStorage.setItem('user', JSON.stringify(data.data, ['accessToken', 'refreshToken']))
                    originalRequest.headers['accessToken'] = accessToken;
                    originalRequest.headers['refreshToken'] = refreshToken;
                    return await instance.request(originalRequest);
                }
            } catch (error){
                localStorage.removeItem('user');
                console.log(error);
            }
            return Promise.reject(error)
        }
        return Promise.reject(error)
    }
)
*/



export default instance;
