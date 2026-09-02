import { AvatarBlock } from "./Avatar.jsx";
import { useNavigate } from "react-router-dom";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu.jsx";

import { LogOut, Settings, User } from "lucide-react";

const dropDownMenuItems = [

    {
        logo:<User />,
        text:"My Projects",
        route: "/projects",
    },
    {
        logo:<User />,
        text:"Profile",
        route: "/me",
    },
    {
        logo:<Settings />,
        text:"Settings",
        route: "/settings",
    },
    {
        logo:<LogOut />,
        text:"LogOut",
        route: "/logout",
    },
]

export function AvatarMenu() {
    const navigate = useNavigate();
    return (

        <DropdownMenu>
            <DropdownMenuTrigger className="rounded-full outline-none">
                <AvatarBlock />
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end" className="w-75">
                <DropdownMenuGroup>
                    {dropDownMenuItems.map((item) => {
                        return (
                            <DropdownMenuItem
                                key={item.text}
                                onClick={() =>navigate(item.route)}
                                className="flex items-center gap-2 cursor-pointer"
                            >
                                {item.logo}
                                <span>{item.text}</span>
                            </DropdownMenuItem>
                        );
                    })}
                </DropdownMenuGroup>

            </DropdownMenuContent>
        </DropdownMenu>
    );
}