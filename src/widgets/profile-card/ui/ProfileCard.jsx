import {Card, CardContent} from "@/components/ui/card.jsx";

export function ProfileCard({ user }) {
    return (
        <Card>
            <CardContent>
                <h1>
                    {user.firstName} {user.lastName}
                </h1>

                <p>@{user.username}</p>
                <p>{user.email}</p>
            </CardContent>
        </Card>
    );
}