import {API_BASE_URL} from "@/shared/api-base-url.js";

export async function createProject(project) {
    const response = await fetch(API_BASE_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(project),
    });

    if (!response.ok) {
        throw new Error(response.statusText);
    }

    return response.json();
}

export async function getProjects() {
    const response = await fetch(API_BASE_URL);

    if (!response.ok) {
        throw new Error(response.statusText);
    }

    return response.json();
}

export async function updateProjectStatus(id, status) {
    const response = await fetch(`${API_BASE_URL}/${id}/status`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            status,
        }),
    });

    if (!response.ok) {
        throw new Error(response.statusText);
    }

    return response.json();
}

export async function getProjectById(id) {
    const response = await fetch(`${API_BASE_URL}/${id}`);

    if (!response.ok) {
        throw new Error(response.statusText);
    }

    return response.json();
}

export async function deleteProject(id) {
    const response = await fetch(`${API_BASE_URL}/${id}`, {
        method: "DELETE",
    });

    if (!response.ok) {
        throw new Error(response.statusText);
    }
}