import {tokenStorage} from "@/features/login/helper/token-storage.js";

export async function getCurrentUser() {
    const response = await fetch("https://juristic-zain-unconvened.ngrok-free.dev/api/users/me", {
            headers: {
                Authorization: `Bearer ${tokenStorage.get("accessToken")}`
            },
        }
    )
    if (!response.ok) {
        throw new Error(response.statusText);
    }

    return response.json();
}