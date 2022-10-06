import React, {useEffect, useState} from "react";

import "./Register.css";
import useInput from "../../hooks/useInput"
import * as authApi from "../../api/auth";
import {useLocation, useNavigate} from "react-router-dom";
import DuplicateBtn from "../../components/common/Button/DuplicateBtn";
import * as boardApi from "../../api/board";

const Register = () => {

    const locationHook  = useLocation();

    const [currentLastUrl, setCurrentLastUrl] = useState(null);

    const [isDuplicated,setIsDuplicated] = useState(false);
    //중복 체크

    const navigate = useNavigate();
    const Id = useInput('');
    const Password = useInput('');
    const Name = useInput('');
    const ConfirmPassword = useInput('');
    const [Gender, setGender] = useState('')
    const Birthday = useInput('');
    const Tel = useInput('');

    const Email = useInput('');

    const onSubmitHandler = async (event) => {
        // Refresh 방지
        event.preventDefault();

        let body = {
            id: Id,
            password: Password,
            name: Name,
            gender: Gender,
            birthday: Birthday,
            tel: Tel,
            email: Email,
        }
        console.log(body)
        await authApi.register(body)
            .then((response) => {
                window.location.href = "/login"
                //성공
            })
            .catch((e) => {
                alert('회원가입 실패!')
                //실패
            })
    };


    const onCheckDuplicateId = () => {
        authApi.duplicateId(Id)
            .then((res)=>{
                setIsDuplicated(res);
            });

    };

    useEffect(() => {
        const splitUrl = locationHook?.pathname?.split('/') ?? null;
        const location =
            splitUrl?.length > 1 ? splitUrl[splitUrl.length - 1] : null;
        setCurrentLastUrl(location);
    }, [locationHook]);


    //회원가입 폼 return
    return (

        <div id="layoutAuthentication">
            <div id="layoutAuthentication_content">
                <main>
                    <div className="container">

                        <div className="input-form-backgroud row">
                            <div className="input-form col-md-12 mx-auto">
                                <h4 className="mb-3">{currentLastUrl} 회원가입</h4>
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
                                        <div className="col-md-6 mb-3">
                                            <br />
                                            <DuplicateBtn check={onCheckDuplicateId}/>
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
                                            <br/>
                                            {/*<select
                                                className="custom-select d-block w-100"
                                                id="root"
                                                {...Gender}>
                                                <option value=""></option>
                                                <option>남성</option>
                                                <option>여성</option>
                                            </select>*/}
                                            <input
                                                type="radio"
                                                name="gender"
                                                value="남"
                                                onChange={(e) => {
                                                    setGender(e.target.value)
                                                }}

                                            />
                                            남
                                            <input
                                                type="radio"
                                                name="gender"
                                                value="여"
                                                onChange={(e) => {
                                                    setGender(e.target.value)
                                                }}

                                            />
                                            여


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

export default Register;