import { AvatarMenu } from "./AvatarMenu.jsx";
import { ThemeToggle } from "./ThemeToggler.jsx";

export function Header() {
    return (
        <header className="w-full h-[70px] border-b flex items-center justify-between px-6">
            <div className="text-xl font-semibold">
                SongOrganizer
            </div>

            <div className="flex items-center gap-3">
                <ThemeToggle />
                <AvatarMenu />
            </div>
        </header>
    );
}