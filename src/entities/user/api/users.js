import {tokenStorage} from "@/features/login/helper/token-storage.js";
import {API_BASE_URL} from "@/shared/api-base-url.js";

export async function getCurrentUser() {
    const response = await fetch(`${API_BASE_URL}/api/me`, {
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

export async function uploadProfilePhoto(file) {
    const formData = new FormData();

    formData.append("file", file);

    const response = await fetch(`${API_BASE_URL}/api/me/profile-photo`, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${tokenStorage.get()}`,
        },
        body: formData,
    });

    if (!response.ok) {
        throw new Error("Failed to upload profile photo");
    }
}