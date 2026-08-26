import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button.jsx";
import { useEffect, useState } from "react";

export function ThemeToggle() {
    const [theme, setTheme] = useState(
        () => localStorage.getItem("theme") || "light"
    );

    useEffect(() => {
        const root = document.documentElement;

        if (theme === "dark") {
            root.classList.add("dark");
        } else {
            root.classList.remove("dark");
        }

        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((current) =>
            current === "light" ? "dark" : "light"
        );
    };

    return (
        <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
        >
            {theme === "light" ? (
                <Moon className="size-5" />
            ) : (
                <Sun className="size-5" />
            )}
        </Button>
    );
}