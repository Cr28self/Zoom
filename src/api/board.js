import http from "./http";

export const load = (users) => {
    return http.get(`/${users}`);
}; //테이블 데이터 전체 load할때


export const loadUserInfo = (users, id) => {
    return http.get(`/api/${users}?id=${id}`);
};
/*한명의 user데이터 load할때*/


export const editUser = (users, id, formData) => {
    return http.put(`/api/${users}/update`, formData);
};
/*한명의 user데이터 수정할때 ( put )*/


export const create = (users, formData) => {
    return http.post(`/api/${users}/join`, formData);
};
/*
user 추가하는 함수 (post)
*/
export const createContract = (users, formData) => {
    return http.post(`/${users}`, formData )
};


export const deleteUser = (pathname,rowid) =>{

    return http.delete(`/api/${pathname}/delete`,rowid)
}





export const duplicateId = async (users, value, resetFunc) => {
    return http.get(`/api/${users}/${value}`)
        .then(function (res) {
            console.log(res)
            alert("중복된 ID입니다.")
            resetFunc()
            return true;
        })
        .catch(
            function (error) {
                console.log('Err => ', error)
                if (error.request.status === 404) {
                    alert("사용 가능한 ID입니다.");
                    return false;

                } else {
                    console.log(error.request.status)

                }

            }
        );
}
/*
user추가 시 ID 중복체크 확인 함수
*/
