import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginPage } from "@/pages/login/index.jsx";

export function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<LoginPage />} />
            </Routes>
        </BrowserRouter>
    );
}