
import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import * as authApi from "../../api/auth";
import {Navigate} from 'react-router-dom';
import {Button} from "react-bootstrap";


const Login = () => {


    const navigate = useNavigate();
    const [user, setUser] = useState()
    const [id, setId] = useState()
    const [password, setPassword] = useState()


    console.log(user)
    const onChangeId = (e) => {

        setId(e.target.value)
    }

    const onChangePassword = (e) => {

        setPassword(e.target.value)
    }


    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(id)

        let body = {
            user:user,
            id: id,
            password: password
        }

        authApi.login(body)
            .then(response => {
                localStorage.setItem('token',response.accessToken);
                navigate('/');

            })
            .catch((e) => {
                alert('실패')
                window.location.href = "/login"
            })

    }

    const AdminLoginTmp =() =>{

        localStorage.setItem('idx','admin');
        navigate('/')
    }

    return (
        <div id="layoutAuthentication">
            <div id="layoutAuthentication_content">
                <main>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-5">
                                <div className="card shadow-lg border-0 rounded-lg mt-5">


                                    <div className="card-header"><h3
                                        className="text-center font-weight-light my-4">Login</h3></div>
                                    <div className="card-body">


                                        <form noValidate onSubmit={handleSubmit}>


                                            <div className="form-floating mb-3">
                                                <input className="form-control" id="id" type="text"
                                                       placeholder="name@example.com" name="id" onChange={onChangeId}/>
                                                <label htmlFor="inputEmail">ID</label>
                                            </div>
                                            <div className="form-floating mb-3">
                                                <input className="form-control" id="password" type="password"
                                                       placeholder="Password" name="password"
                                                       onChange={onChangePassword}/>
                                                <label htmlFor="inputPassword">비밀번호</label>
                                            </div>


                                            <div className="d-flex align-items-center justify-content-end mt-4 mb-0">

                                                <>
                                                    <input
                                                        type="radio"
                                                        name="gender"
                                                        value="learner"
                                                        onChange={(e)=>{setUser(e.target.value)}}
                                                    />
                                                    학생
                                                    <input
                                                        type="radio"
                                                        name="gender"
                                                        value="teacher"
                                                        onChange={(e)=>{setUser(e.target.value)}}
                                                    />
                                                    교사
                                                </>

                                                <input className="btn btn-primary" type="submit" value="Login"></input>

                                            </div>
                                        </form>


                                    </div>


                                    <div className="card-footer text-center py-3">
                                        <div className="small"><Link to="/register">Sign up</Link></div>
                                    </div>
                                    <Button variant="btn btn-primary" onClick={AdminLoginTmp}>Test Admin Login </Button>


                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};


export default Login;
