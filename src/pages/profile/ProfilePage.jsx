import {useEffect, useState} from "react";
import {getCurrentUser} from "@/entities/user/api/users.js";
import {Header} from "@/widgets/header/ui/Header.jsx";
import {ProfileCard} from "@/widgets/profile-card/ui/ProfileCard.jsx";

export function ProfilePage() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        getCurrentUser().then(setUser);
    }, []);

    if (!user) {
        return null;
    }

    return (
        <>
            <Header />

            <main className="mx-auto max-w-6xl p-6">
                <ProfileCard user={user} />
            </main>
        </>
    );
}