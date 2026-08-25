import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {Button} from "@/components/ui/button.jsx";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card.jsx";
import {Input} from "@/components/ui/input.jsx";
import {Label} from "@/components/ui/label.jsx";
import {login} from "@/features/login/api/login.js";

export function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        await login(email, password);
        navigate("/");

    }

    return (
        <Card className="w-full max-w-md">
            <CardHeader>
                <CardTitle>Sign in</CardTitle>

                <CardDescription>
                    Enter your email and password to continue
                </CardDescription>
            </CardHeader>

            <form onSubmit={handleSubmit}>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>

                        <Input
                            id="email"
                            type="email"
                            placeholder="you@example.com"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <div className="flex items-center justify-between">
                            <Label htmlFor="password">Password</Label>

                            <button
                                type="button"
                                className="text-sm text-muted-foreground hover:text-foreground hover:underline"
                            >
                                Forgot password?
                            </button>
                        </div>

                        <Input
                            id="password"
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                            required
                        />
                    </div>
                </CardContent>

                <CardFooter className="mt-6 flex flex-col gap-4">
                    <Button
                        type="submit"
                        className="w-full"
                    >
                        Sign in
                    </Button>

                    <p className="text-sm text-muted-foreground">
                        Don't have an account?{" "}
                        <button
                            type="button"
                            className="font-medium text-foreground hover:underline"
                        >
                            Sign up
                        </button>
                    </p>
                </CardFooter>
            </form>
        </Card>
    );
}