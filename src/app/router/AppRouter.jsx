import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginPage } from "@/pages/LoginPage.jsx";
import { MainPage } from "@/pages/MainPage.jsx";
import {RegisterPage} from "@/pages/register/index.jsx";
import { ProjectsPage } from "@/pages/ProjectsPage.jsx";

export function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/" element={<ProjectsPage />} />
            </Routes>
        </BrowserRouter>
    );
}