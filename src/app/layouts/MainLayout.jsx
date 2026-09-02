import { Outlet } from "react-router-dom";
import { Header } from "@/widgets/header/ui/Header.jsx";

export function MainLayout() {
    return (
        <div className="min-h-screen bg-background">
            <Header />

            <main className="pt-[70px]">
                <Outlet />
            </main>
        </div>
    );
}