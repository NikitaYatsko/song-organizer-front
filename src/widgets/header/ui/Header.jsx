import {AvatarBlock} from "@/widgets/header/ui/Avatar.jsx";


export function Header() {
    return (
        <header className="w-full h-[70px] bg-gray-200 flex items-center justify-between">
            <AvatarBlock></AvatarBlock>
            <AvatarBlock></AvatarBlock>
        </header>
    );
}