import React from "react";
import AdminHomePage from '../pages/AdminHomePage'
import ApplicationFormPage from '../pages/ApplicationFormPage'
import LoginPage from '../pages/LoginPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'



 const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<AdminHomePage />} />
                <Route path={'form'} element={<ApplicationFormPage />} />
                <Route path={'login'} element={<LoginPage />} />
            </Routes>

        </BrowserRouter>
    )
}

export default Router