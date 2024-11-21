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
export default function New() {
  return (
    <div className="min-h-screen flex items-center flex-col gap-20 justify-center">
      <h1 className="text-4xl font-bold">Add your first website to scan</h1>
      
            <div className="grid gap-2 w-[400px]">
              <Label htmlFor="email">Website URL</Label>
              <Input
              className="w-full"
                id="email"
                type="email"
                placeholder="e.g www.spark.co.nz"
                required
              />
              <Link to={`/competitors`}>
              <Button type="submit" className="w-full" >
                
                Scan website for reckons
                </Button>
                </Link>
            </div>
       
            
            
              
            
            
        
      
    </div>
  )
}
