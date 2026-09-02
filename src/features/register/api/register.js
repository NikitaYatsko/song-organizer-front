import {API_BASE_URL} from "@/shared/api-base-url.js";

export async function register({
                                   email, username, password, firstName, lastName,
                               }) {
    const response = await fetch(`${API_BASE_URL}/api/auth/register`, {
        method: "POST", headers: {
            "Content-Type": "application/json",
        }, body: JSON.stringify({
            email, username, password, firstName, lastName,
        }),
    });

    if (!response.ok) {
        throw new Error(response.statusText);
    }

    console.log(response)
    return await response.json();
}