import Header from "../components/common/Header";
import SideNav from "../components/common/SideNav";
import {Route, Routes} from "react-router-dom";
import Main from "../pages/Admin/Dummy/Main";
import Attendance from "../pages/Admin/Dummy/Attendance";
import Learner from "../pages/Admin/Learner/Learner";
import Learner_rewrite from "../pages/Admin/Learner/Learner_rewrite";
import Teacher_rewrite from "../pages/Admin/Teacher/Teacher_rewrite";
import Teacher from "../pages/Admin/Teacher/Teacher";
import Learner_create from "../pages/Admin/Learner/Learner_create";
import Teacher_create from "../pages/Admin/Teacher/Teacher_create";
import Contract from "../pages/Admin/Contract/Contract";
import Contract_create from "../pages/Admin/Contract/Contract_create";
import Contract_rewrite from "../pages/Admin/Contract/Contract_rewrite";
import Footer from "../components/common/Footer";
import NotFound from "../pages/NotFound";
import React, {Fragment} from 'react';
import Login from "../pages/Login/Login";
import NonLoginRoute from "./NonLoginRoute";
import SelectUser from "../pages/Login/SelectUser";
import Register from "../pages/Login/Register";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";


const AppRouter = () => {


    return (

        <Routes>
            <Route path="/login" element={
                <NonLoginRoute>
                    <Login/>
                </NonLoginRoute>}/>
            <Route path="/register">
                <Route path="" element={<NonLoginRoute>
                    <SelectUser/>
                </NonLoginRoute>}/>
                <Route path="learner" element={<NonLoginRoute>
                <Register/>
                </NonLoginRoute>}/>
                <Route path="teacher" element={<NonLoginRoute>
                <Register/>
                </NonLoginRoute>}/>
                </Route>




            {/*    <Route exact path="/" element={<Main user={'Home'}/>}/>

*/}



{/*admin*/}
            <Route path="/">

                <Route path="" element={<AdminRoute><Main/></AdminRoute>}/>

                <Route path="attendance" element={<AdminRoute><Attendance/> </AdminRoute>}/>

                <Route path="learner">
                    <Route path="" element={<AdminRoute><Learner/></AdminRoute>}/>
                        <Route path="rewrite/:id" element={<AdminRoute><Learner_rewrite/></AdminRoute>}/>
                    <Route path="create" element={<AdminRoute><Learner_create/></AdminRoute>}/>
                </Route>
                <Route path="teacher">
                    <Route path="" element={<AdminRoute><Teacher/></AdminRoute>}/>
                    <Route path="rewrite/:id" element={<AdminRoute><Teacher_rewrite/></AdminRoute>}/>
                    <Route path="create" element={<AdminRoute><Teacher_create/></AdminRoute>}/>
                </Route>

                <Route path="contract">
                    <Route path="" element={<AdminRoute><Contract/></AdminRoute>}/>
                    <Route path="rewrite/:teacher_code" element={<AdminRoute><Contract_rewrite/></AdminRoute>}/>
                    <Route path="create" element={<AdminRoute><Contract_create/></AdminRoute>}/>
                </Route>
            </Route>

{/*admin*/}
{/*
            <Route path="/learner">
                <Route path="" element={<PrivateRoute><Main/></PrivateRoute>}/>
                <Route path="*" element={<PrivateRoute><Main/></PrivateRoute>}/>
            </Route>

            <Route path="/teacher">
                <Route path="" element={<PrivateRoute><Main/></PrivateRoute>}/>
                <Route path="*" element={<PrivateRoute><Main/></PrivateRoute>}/>
            </Route>*/}




            <Route path="*" element={<NotFound/>}/>


        </Routes>


    )
}

export default AppRouter;