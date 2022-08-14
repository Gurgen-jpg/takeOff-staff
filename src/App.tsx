import React from 'react';
import s from './app.module.css';
import {useAppDispatch, useAppSelector} from "./bll/store";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {path} from './pages/pagesPath';
import {Register} from "./pages/register/Register";
import {Login} from "./pages/login/Login";
import {Notes} from "./pages/note/Notes";
import {appStatus} from "./bll/appReducerTypes";
import {ErrorSnackBar} from "./components/ErrorSnackBar";
import {Navbar} from "./components/navbar/Navbar";


function App() {


    const initialized = useAppSelector(state => state.app.initialized)


    return (
        <BrowserRouter>
            <div className={s.container}>
                <ErrorSnackBar/>
                <Navbar/>
                <Routes>
                    <Route path={path.REGISTER} element={<Register/>}/>
                    <Route path={path.LOGIN} element={<Login/>}/>
                    {initialized && <Route path={path.MAIN} element={<Notes/>}/>}
                </Routes>


            </div>
        </BrowserRouter>
    );
}

export default App;
