export const tokenStorage = {
    get() {
        return localStorage.getItem("accessToken");
    },

    set(token) {
        localStorage.setItem("accessToken", token);
    },

    remove() {
        localStorage.removeItem("accessToken");
    },
};