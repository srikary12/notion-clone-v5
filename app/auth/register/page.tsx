import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { register } from "module"
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

function Register() {
    return (
        <Card className="w-auto">
            <CardHeader>
                <CardTitle>Register</CardTitle>
            </CardHeader>
            <CardContent>
                <form>
                    <div className="flex flex-row space-x-4">
                        <Button variant="secondary">
                        <FcGoogle className="mr-2"/>
                            Register via Google
                        </Button>
                        <Button variant="secondary">
                        <FaGithub className="mr-2"/>
                            Register via Gitbub
                        </Button>
                    </div>
                </form>
            </CardContent>
        </Card>
    )
}

export default Register;