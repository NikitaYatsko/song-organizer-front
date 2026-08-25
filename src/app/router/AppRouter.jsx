import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginPage } from "@/pages/login/index.jsx";
import { RegisterPage } from "@/pages/register/index.jsx";

export function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
            </Routes>
        </BrowserRouter>
    );
}