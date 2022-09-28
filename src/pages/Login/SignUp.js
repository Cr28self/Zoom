import React, {useState} from "react";
import {signup, today} from "../service/ApiService";
import "./Register.css";
import useInput  from "../hooks/useInput"

const SignUp = () => {
    const Id = useInput('');
    const Password = useInput('');
    const Name = useInput('');
    const ConfirmPassword = useInput('');
    const Gender = useInput('');
    const Birthday = useInput('');
    const Tel = useInput('');
    const Wdate = today();
    const Email = useInput('');
 

    const onSubmitHandler = (event) => {
        // Refresh 방지
        event.preventDefault();
        

        if (Password.value !== ConfirmPassword.value) {
            return alert('비밀번호 확인이 일치하지 않습니다.');
        }

        // let body = { email: Email, name: Name, password: Password, };

        signup({
            id: Id.value,
            name: Name.value,
            password: Password.value,
            gender: Gender.value,
            birthday: Birthday.value,
            tel: Tel.value,
            wdate: Wdate.value,
            email: Email.value
        });
    };

    //회원가입 폼 return
    return (

        <div id="layoutAuthentication">
            <div id="layoutAuthentication_content">
                <main>
                    <div className="container">

                        <div className="input-form-backgroud row">
                            <div className="input-form col-md-12 mx-auto">
                                <h4 className="mb-3">회원가입</h4>
                                <form noValidate="noValidate" onSubmit={onSubmitHandler}>
                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="name">ID</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="id"
                                                placeholder=""
                                                {...Id}
                                                required="required"/>
                                            <div className="invalid-feedback">
                                                아이디를 입력해주세요!
                                            </div>
                                        </div>

                                    </div>

                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="nickname">비밀번호</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="password"
                                                placeholder=""
                                                {...Password}
                                                required="required"/>
                                            <div className="invalid-feedback">
                                                비밀번호를 입력해주세요.
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="nickname">비밀번호 확인</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="confirmPassword"
                                                placeholder=""
                                                {...ConfirmPassword}
                                                required="required"/>
                                            <div className="invalid-feedback">
                                                비밀번호를 입력해주세요.
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="name">이름</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="name"
                                                placeholder=""
                                                {...Name}
                                                required="required"/>
                                            <div className="invalid-feedback">
                                                이름을 입력해주세요.
                                            </div>
                                        </div>

                                        <div className="col-md-3 mb-3">
                                            <label htmlFor="root">성별</label>
                                            <select
                                                className="custom-select d-block w-100"
                                                id="root"
                                                {...Gender}>
                                                <option value=""></option>
                                                <option>남성</option>
                                                <option>여성</option>
                                            </select>
                                            <div className="invalid-feedback">
                                                성별을 선택해주세요.
                                            </div>

                                        </div>

                                        <div className="col-md-3 mb-3">
                                            <label htmlFor="name">생년월일</label>
                                            <input
                                                type="date"
                                                name="Birthday"
                                                {...Birthday}></input>
                                            <div className="invalid-feedback">
                                                생년월일 입력해주세요.
                                            </div>
                                        </div>

                                    </div>

                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="name">전화번호</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="name"
                                                placeholder=""
                                                {...Tel}
                                                required="required"/>
                                            <div className="invalid-feedback">
                                                전화번호를 입력해주세요.
                                            </div>
                                        </div>

                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="address">이메일</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="address"
                                            placeholder="example@naver.com"
                                            {...Email}
                                            required="required"/>
                                        <div className="invalid-feedback">
                                            이메일을 입력해주세요.
                                        </div>
                                    </div>

                                    <div className="mb-4"></div>
                                    <button className="btn btn-primary btn-lg btn-block" type="submit">가입 완료</button>
                                </form>
                            </div>
                        </div>

                    </div>

                </main>
            </div>
        </div>
    );
};

export default SignUp;