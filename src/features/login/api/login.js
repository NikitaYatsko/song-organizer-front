import {tokenStorage} from "@/features/login/helper/token-storage.js";
import {API_BASE_URL} from "@/shared/api-base-url.js";

export async function login(email, password) {
    const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email: email,
            password: password,
        })
    })
    if (!response.ok) {
        throw new Error(response.statusText)
    }
    const data = await response.json();
    tokenStorage.set(data.token);
    console.log(data);
}