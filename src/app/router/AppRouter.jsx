import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginPage } from "@/pages/LoginPage.jsx";
import { MainPage } from "@/pages/MainPage.jsx";

export function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/" element={<MainPage/>} />
            </Routes>
        </BrowserRouter>
    );
}