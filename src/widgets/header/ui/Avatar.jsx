import {
    Avatar,
    AvatarFallback,
    AvatarImage
} from "@/components/ui/avatar.jsx";

export function AvatarBlock() {
    return (
        <Avatar className="size-10 cursor-pointer">
            <AvatarImage
                src="https://github.com/shadcn.png"
                alt="User avatar"
            />
            <AvatarFallback>CN</AvatarFallback>
        </Avatar>
    );
}