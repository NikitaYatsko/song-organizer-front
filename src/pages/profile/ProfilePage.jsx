import {useEffect, useState} from "react";

import {ProfileCard} from "@/widgets/profile-card/ui/ProfileCard.jsx";
import {
    getCurrentUser,
    uploadProfilePhoto,
} from "@/entities/user/api/users.js";
import {Header} from "@/widgets/header/ui/Header.jsx";

export function ProfilePage() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        getCurrentUser().then(setUser);
    }, []);

    const handlePhotoUpload = async (file) => {
        await uploadProfilePhoto(file);

        const updatedUser = await getCurrentUser();

        setUser(updatedUser);
    };

    if (!user) {
        return (
            <div className="p-8 text-muted-foreground">
                Loading profile...
            </div>
        );
    }

    return (
        <>
            <Header></Header>
            <main className="mx-auto w-full max-w-5xl px-4 py-10">

                <ProfileCard
                    user={user}
                    onPhotoUpload={handlePhotoUpload}
                />
            </main>
        </>
    );
}