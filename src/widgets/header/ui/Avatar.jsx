import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar.jsx";

export function AvatarBlock(){
    return (
        <Avatar className={"size-10"}>
            <AvatarImage
                src="https://github.com/shadcn.png"
                alt="@shadcn"
                className="grayscale"
            />
            <AvatarFallback>CN</AvatarFallback>
        </Avatar>
    )
}
