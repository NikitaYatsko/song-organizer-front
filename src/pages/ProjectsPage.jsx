import { useEffect, useState } from "react";
import {
    createProject,
    deleteProject,
    getProjects,
    updateProjectStatus,
} from "@/features/projects/api/projects.js";
import { Button } from "@/components/ui/button.jsx";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card.jsx";
import { Input } from "@/components/ui/input.jsx";
import { Label } from "@/components/ui/label.jsx";

const statuses = [
    "IDEA",
    "IN_PROGRESS",
    "MIXING",
    "MASTERING",
    "DONE",
];

export function ProjectsPage() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [projectName, setProjectName] = useState("");
    const [status, setStatus] = useState("IDEA");
    const [deadline, setDeadline] = useState("");
    const [error, setError] = useState("");

    async function loadProjects() {
        setLoading(true);
        setError("");

        try {
            setProjects(await getProjects());
        } catch {
            setError("Не удалось загрузить проекты");
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        loadProjects();
    }, []);

    async function handleSubmit(event) {
        event.preventDefault();

        try {
            await createProject({
                projectName,
                status,
                deadline: deadline || null,
            });

            setProjectName("");
            setStatus("IDEA");
            setDeadline("");
            await loadProjects();
        } catch {
            setError("Не удалось создать проект");
        }
    }

    async function handleDelete(id) {
        try {
            await deleteProject(id);
            setProjects((current) =>
                current.filter((project) => project.id !== id)
            );
        } catch {
            setError("Не удалось удалить проект");
        }
    }

    async function handleStatusChange(id, nextStatus) {
        try {
            const updatedProject = await updateProjectStatus(id, nextStatus);

            setProjects((current) =>
                current.map((project) =>
                    project.id === id
                        ? { ...project, ...updatedProject }
                        : project
                )
            );
        } catch {
            setError("Не удалось обновить статус проекта");
        }
    }

    return (
        <main className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8">
            <div className="mx-auto max-w-6xl space-y-8">
                <header className="relative overflow-hidden rounded-2xl border border-border bg-card px-6 py-8 shadow-sm sm:px-8">
                    <div className="absolute -right-16 -top-20 size-48 rounded-full bg-primary/15 blur-3xl" />
                    <div className="absolute -bottom-24 left-1/3 size-48 rounded-full bg-accent/10 blur-3xl" />

                    <div className="relative">
                        <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-primary">
                            Song organizer
                        </p>
                        <h1 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
                            Your projects
                        </h1>
                        <p className="mt-2 max-w-xl text-muted-foreground">
                            Organize your tracks, follow their progress, and
                            keep every deadline in one place.
                        </p>
                    </div>
                </header>

                <div className="grid gap-6 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
                    <Card className="h-fit border-border shadow-sm">
                        <CardHeader>
                            <CardTitle>Create a project</CardTitle>
                            <CardDescription>
                                Start a new track and define its first deadline.
                            </CardDescription>
                        </CardHeader>

                        <CardContent>
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="space-y-2">
                                    <Label htmlFor="projectName">
                                        Project name
                                    </Label>
                                    <Input
                                        id="projectName"
                                        placeholder="My new track"
                                        value={projectName}
                                        onChange={(event) =>
                                            setProjectName(event.target.value)
                                        }
                                        required
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="projectStatus">
                                        Status
                                    </Label>
                                    <select
                                        id="projectStatus"
                                        className="h-8 w-full rounded-lg border border-input bg-transparent px-2.5 text-sm outline-none transition-colors focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 dark:bg-input/30"
                                        value={status}
                                        onChange={(event) =>
                                            setStatus(event.target.value)
                                        }
                                    >
                                        {statuses.map((projectStatus) => (
                                            <option
                                                key={projectStatus}
                                                value={projectStatus}
                                            >
                                                {projectStatus}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="deadline">Deadline</Label>
                                    <Input
                                        id="deadline"
                                        type="datetime-local"
                                        value={deadline}
                                        onChange={(event) =>
                                            setDeadline(event.target.value)
                                        }
                                    />
                                </div>

                                <Button type="submit" className="w-full">
                                    Create project
                                </Button>
                            </form>
                        </CardContent>
                    </Card>

                    <section className="space-y-4">
                        <div className="flex items-end justify-between gap-4">
                            <div>
                                <h2 className="text-xl font-semibold tracking-tight">
                                    All projects
                                </h2>
                                <p className="text-sm text-muted-foreground">
                                    {projects.length}{" "}
                                    {projects.length === 1
                                        ? "project"
                                        : "projects"}
                                </p>
                            </div>
                        </div>

                        {error && (
                            <div className="rounded-xl border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive">
                                {error}
                            </div>
                        )}

                        {loading && (
                            <Card className="border-border shadow-sm">
                                <CardContent className="py-10 text-center text-sm text-muted-foreground">
                                    Loading projects...
                                </CardContent>
                            </Card>
                        )}

                        {!loading && !error && projects.length === 0 && (
                            <Card className="border-dashed border-border shadow-sm">
                                <CardContent className="py-12 text-center">
                                    <p className="font-medium">
                                        No projects yet
                                    </p>
                                    <p className="mt-1 text-sm text-muted-foreground">
                                        Create your first track project using
                                        the form.
                                    </p>
                                </CardContent>
                            </Card>
                        )}

                        {!loading && projects.length > 0 && (
                            <div className="grid gap-4">
                                {projects.map((project) => (
                                    <Card
                                        key={project.id}
                                        className="border-border shadow-sm transition-shadow hover:shadow-md"
                                    >
                                        <CardContent className="flex flex-col gap-5 p-5 sm:flex-row sm:items-center sm:justify-between">
                                            <div className="min-w-0">
                                                <h3 className="truncate font-semibold">
                                                    {project.projectName}
                                                </h3>
                                                <p className="mt-1 text-sm text-muted-foreground">
                                                    Deadline:{" "}
                                                    {project.deadline || "—"}
                                                </p>
                                            </div>

                                            <div className="flex flex-col gap-3 sm:items-end">
                                                <select
                                                    aria-label={`Status for ${project.projectName}`}
                                                    className="h-8 rounded-lg border border-input bg-transparent px-2.5 text-sm outline-none transition-colors focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 dark:bg-input/30"
                                                    value={project.status}
                                                    onChange={(event) =>
                                                        handleStatusChange(
                                                            project.id,
                                                            event.target.value
                                                        )
                                                    }
                                                >
                                                    {statuses.map(
                                                        (projectStatus) => (
                                                            <option
                                                                key={
                                                                    projectStatus
                                                                }
                                                                value={
                                                                    projectStatus
                                                                }
                                                            >
                                                                {projectStatus}
                                                            </option>
                                                        )
                                                    )}
                                                </select>

                                                <Button
                                                    type="button"
                                                    variant="destructive"
                                                    size="sm"
                                                    onClick={() =>
                                                        handleDelete(project.id)
                                                    }
                                                >
                                                    Delete
                                                </Button>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        )}
                    </section>
                </div>
            </div>
        </main>
    );
}
