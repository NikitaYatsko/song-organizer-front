export async function login(email, password) {
    const response = await fetch("http://localhost:8089/api/auth/login", {
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
    console.log(data);

}