import { useRef, useState } from "react";
import { Camera, CalendarDays, Mail } from "lucide-react";

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar.jsx";

import {
    Card,
    CardContent,
} from "@/components/ui/card.jsx";

import { Button } from "@/components/ui/button.jsx";

export function ProfileCard({ user, onPhotoUpload }) {
    const fileInputRef = useRef(null);
    const [preview, setPreview] = useState(null);
    const [uploading, setUploading] = useState(false);

    const getInitials = () => {
        const first = user.firstName?.[0] ?? "";
        const last = user.lastName?.[0] ?? "";

        return `${first}${last}`.toUpperCase() || user.username?.[0]?.toUpperCase();
    };

    const handlePhotoChange = async (event) => {
        const file = event.target.files?.[0];

        if (!file) return;

        setPreview(URL.createObjectURL(file));

        if (!onPhotoUpload) return;

        try {
            setUploading(true);

            await onPhotoUpload(file);
        } finally {
            setUploading(false);
        }
    };

    const createdAt = user.createdAt
        ? new Date(user.createdAt).toLocaleDateString("ru-RU", {
            day: "numeric",
            month: "long",
            year: "numeric",
        })
        : null;

    return (
        <Card className="w-full overflow-hidden border-border/60 shadow-sm">
            {/* Header background */}
            <div className="h-36 bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-700 dark:from-zinc-800 dark:via-zinc-900 dark:to-black" />

            <CardContent className="relative px-6 pb-8">
                {/* Avatar */}
                <div className="-mt-16 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                    <div className="relative w-fit">
                        <Avatar className="h-32 w-32 border-4 border-background shadow-lg">
                            <AvatarImage
                                src={preview || user.imageUrl}
                                alt={user.username}
                                className="object-cover"
                            />

                            <AvatarFallback className="text-3xl font-semibold">
                                {getInitials()}
                            </AvatarFallback>
                        </Avatar>

                        <Button
                            type="button"
                            size="icon"
                            variant="secondary"
                            disabled={uploading}
                            onClick={() => fileInputRef.current?.click()}
                            className="absolute bottom-1 right-1 h-9 w-9 rounded-full shadow-md"
                        >
                            <Camera className="h-4 w-4" />
                        </Button>

                        <input
                            ref={fileInputRef}
                            type="file"
                            accept="image/*"
                            onChange={handlePhotoChange}
                            className="hidden"
                        />
                    </div>

                    <Button variant="outline">
                        Edit profile
                    </Button>
                </div>

                {/* Main info */}
                <div className="mt-5">
                    <div className="flex flex-wrap items-center gap-3">
                        <h1 className="text-3xl font-bold tracking-tight">
                            {user.firstName || user.lastName
                                ? `${user.firstName ?? ""} ${user.lastName ?? ""}`
                                : user.username}
                        </h1>
                    </div>

                    <p className="mt-1 text-muted-foreground">
                        @{user.username}
                    </p>

                    {user.description && (
                        <p className="mt-5 max-w-2xl leading-7 text-foreground/90">
                            {user.description}
                        </p>
                    )}

                    {!user.description && (
                        <p className="mt-5 text-sm italic text-muted-foreground">
                            No description yet.
                        </p>
                    )}

                    {/* Meta */}
                    <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                            <Mail className="h-4 w-4" />

                            <span>{user.email}</span>
                        </div>

                        {createdAt && (
                            <div className="flex items-center gap-2">
                                <CalendarDays className="h-4 w-4" />

                                <span>Joined {createdAt}</span>
                            </div>
                        )}
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}