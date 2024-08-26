import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from "@/components/ui/card"
import { FcGoogle } from "react-icons/fc"
import { FaGithub } from "react-icons/fa"

export default function Login() {
    return (
        <Card className="w-auto">
            <CardHeader>
                <CardTitle>Login</CardTitle>
            </CardHeader>
            <CardContent>
                <form>
                    <div className="flex flex-row space-x-4">
                        <Button variant="secondary">
                            <FcGoogle className="mr-2"/> Login via Google
                        </Button>
                        <Button variant="secondary">
                        <FaGithub className="mr-2"/>
                            Login via Gitbub
                        </Button>
                    </div>
                </form>
            </CardContent>
        </Card>
    )
}
