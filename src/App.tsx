import React from 'react';
import s from './app.module.css';

import {BrowserRouter, Route, Routes} from "react-router-dom";
import {path} from './pages/pagesPath';
import {Register} from "./pages/register/Register";
import {Login} from "./pages/login/Login";
import {Notes} from "./pages/note/Notes";
import {ErrorSnackBar} from "./components/ErrorSnackBar";
import {Navbar} from "./components/navbar/Navbar";


function App() {


    return (
        <BrowserRouter>
            <div className={s.container}>
                <ErrorSnackBar/>
                <Navbar/>
                <Routes>
                    <Route path={path.MAIN} element={<Notes/>}/>
                    <Route path={path.LOGIN} element={<Login/>}/>
                    <Route path={path.REGISTER} element={<Register/>}/>

                </Routes>


            </div>
        </BrowserRouter>
    );
}

export default App;
