import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button.jsx";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card.jsx";
import { Input } from "@/components/ui/input.jsx";
import { Label } from "@/components/ui/label.jsx";
import { register } from "@/features/register/api/register.js";

export function RegisterForm() {
    const [form, setForm] = useState({
        email: "",
        username: "",
        password: "",
        firstName: "",
        lastName: "",
    });

    const navigate = useNavigate();

    function handleChange(event) {
        const { name, value } = event.target;
        setForm((current) => ({
            ...current,
            [name]: value,
        }));
    }

    async function handleSubmit(event) {
        event.preventDefault();

        await register(form);
        navigate("/login");
    }

    return (
        <Card className="w-full max-w-md">
            <CardHeader>
                <CardTitle>Create an account</CardTitle>
                <CardDescription>
                    Enter your details to create an account
                </CardDescription>
            </CardHeader>

            <form onSubmit={handleSubmit}>
                <CardContent className="space-y-4">
                    {[
                        ["email", "Email", "email", "you@example.com"],
                        ["username", "Username", "text", "Enter your username"],
                        ["firstName", "First name", "text", "Enter your first name"],
                        ["lastName", "Last name", "text", "Enter your last name"],
                        ["password", "Password", "password", "Enter your password"],
                    ].map(([name, label, type, placeholder]) => (
                        <div className="space-y-2" key={name}>
                            <Label htmlFor={name}>{label}</Label>
                            <Input
                                id={name}
                                name={name}
                                type={type}
                                placeholder={placeholder}
                                value={form[name]}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    ))}
                </CardContent>

                <CardFooter className="mt-6 flex flex-col gap-4">
                    <Button type="submit" className="w-full">
                        Sign up
                    </Button>

                    <p className="text-sm text-muted-foreground">
                        Already have an account{" "}
                        <button
                            type="button"
                            className="font-medium text-foreground hover:underline"
                            onClick={() => navigate("/login")}
                        >
                            Sign in
                        </button>
                    </p>
                </CardFooter>
            </form>
        </Card>
    );
}