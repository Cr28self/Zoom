import {BrowserRouter, Routes, Route, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import AppRouter from "./routes/AppRouter";

import Header from "./components/common/Header";
import SideNav from "./components/common/SideNav";
import Footer from "./components/common/Footer";


function App() {
    const access = localStorage.getItem('user');

    const history = useNavigate();
    const [user, setUser] = useState('');


    useEffect(() => {
        if (access !== '' || access !== 'undefined') {
            setUser(access);
        }
    }, [access])

    return (

        <>
            <Header currentUser={user}/>
            {/* //class="sb-sidenav-toggled" ==> 메뉴 집어넣음 */}


            <div id="layoutSidenav">
                {access ? <SideNav/> : " "}

                <div id="layoutSidenav_content">


                    <AppRouter/>

                    <Footer/>

                </div>
            </div>
        </>


    )


}

export default App;
