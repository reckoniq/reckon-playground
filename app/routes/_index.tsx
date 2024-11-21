import { Link } from "@remix-run/react"
import { Button } from "~/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card"
import { Input } from "~/components/ui/input"
import { Label } from "~/components/ui/label"
export default function index() {
  return (
    <div className="min-h-screen flex items-center flex-col gap-20 justify-center">
      <h1 className="text-4xl font-bold">Time to chuck some reckons</h1>
      <Card className="mx-auto w-[400px]">
        <CardHeader>
          <CardTitle className="text-2xl">Sign-up</CardTitle>
          <CardDescription>
            Enter your email below to signup
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <Link to="#" className="ml-auto inline-block text-sm underline">
                  Forgot your password?
                </Link>
              </div>
              <Input id="password" type="password" required />
            </div>
            <Button type="submit" className="w-full">
              Sign-up
            </Button>
            
          </div>
          <div className="mt-4 text-center text-sm">
            Have an account?{" "}
            <Link to="/new" className="underline">
              Sign in
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
