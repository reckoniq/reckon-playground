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
export default function Comp() {
  return (
    <div className="min-h-screen flex items-center flex-col gap-16 justify-center">
        <div className="flex flex-col gap-4 items-center">
      <h1 className="text-4xl font-bold">Add some competitor's websites</h1>
      <p className="text-center text-md text-muted-foreground">This helps us create benchmarks and competitive insights for you.</p>
      </div>
      
            <div className="grid gap-4 w-[400px]">
              <Label htmlFor="email">Competitor URls</Label>
              <Input
              className="w-full"
                id="email"
                type="email"
                placeholder="e.g www.spark.co.nz"
                required
              />
              <Input
              className="w-full"
                id="email"
                type="email"
                placeholder="e.g www.spark.co.nz"
                required
              />
              <Input
              className="w-full"
                id="email"
                type="email"
                placeholder="e.g www.spark.co.nz"
                required
              />
              <Input
              className="w-full"
                id="email"
                type="email"
                placeholder="e.g www.spark.co.nz"
                required
              />
              <Input
              className="w-full"
                id="email"
                type="email"
                placeholder="e.g www.spark.co.nz"
                required
              />
              <Link to={`./www.spark.co.nz/reckons`}>
              <Button type="submit" className="w-full" >
                
                Add competitors
                </Button>
                </Link>
                <a href="./www.spark.co.nz/reckons" className="text-sm underline text-center">
                Or skip this step</a>
            </div>
       
            
            
              
            
            
        
      
    </div>
  )
}
