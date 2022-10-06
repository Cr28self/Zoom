

import axios from "axios";

import {BASE_URL} from './config'


const instance = axios.create({ baseURL: `${BASE_URL}` });



instance.interceptors.request.use(
    function(config){
        const token = localStorage.getItem('token')
        if(!token){
            config.headers["acessToken"] = null;
            config.headers["refreshToken"] = null;
            return config

        }
        const { accessToken,refreshToken } = JSON.parse(token)
        config.headers["accessToken"] = accessToken;
        config.headers["refreshToken"] = refreshToken;
        return config
    }
)
//request하기 전...


//response받기 전..
instance.interceptors.response.use(
    function (response) {
        return response
    },
    async function (error) {
        if (error.response && error.response.status === 403) {
            try {
                const ExpiredToken = localStorage.getItem('token') //만료된 토큰 가져옴
                const { accessToken,refreshToken } = JSON.parse(ExpiredToken)

                const originalRequest = error.config;
                const data = await instance.post('/api/member/reissue',{
                    accessToken: accessToken,
                    refreshToken: refreshToken
                })
                //토큰 재발급 요청


                if (data) {  //재발급 성공
                    const {accessToken, refreshToken} = data;
                    localStorage.setItem(
                        'token',
                        JSON.stringify({ accessToken: accessToken, refreshToken: refreshToken })
                    );
                    originalRequest.headers['accessToken'] = accessToken;
                    originalRequest.headers['refreshToken'] = refreshToken;
                    return await instance.request(originalRequest);
                }
            } catch (error){
                localStorage.removeItem('token');
                console.log(error);
            }
            return Promise.reject(error)
        }
        return Promise.reject(error)
    }
)



export default instance;
