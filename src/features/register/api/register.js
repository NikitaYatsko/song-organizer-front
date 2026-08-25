export async function register({
                                   email, username, password, firstName, lastName,
                               }) {
    const response = await fetch("https://juristic-zain-unconvened.ngrok-free.dev/api/auth/register", {
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