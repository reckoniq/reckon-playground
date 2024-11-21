import { Link, Outlet, useLoaderData } from "@remix-run/react";
import { data } from "../data/data";
import { columns } from "~/components/reckons/columns";
import { DataTable } from "~/components/reckons/data-table";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Accordion, AccordionItem, AccordionTrigger } from "@radix-ui/react-accordion";
import { AccordionContent } from "~/components/ui/accordion";
import { ChevronDown } from "lucide-react";
import {
  
  ResizablePanel,
  ResizablePanelGroup,
} from "~/components/ui/resizable"
export const loader = async () => {
  return data;
};

export default function Reckons() {
  const data = useLoaderData<typeof loader>();
  
  return (
    <ResizablePanelGroup direction="horizontal" >
      <ResizablePanel className="pl-4 pr-12" defaultSize={60}> 
        
      <Accordion  type="single" collapsible>
        <AccordionItem value="reckons">
        
        <Card>
          <CardHeader className="flex flex-row justify-between items-center align-middle">
            <h2 className="text-lg font-semibold"><AccordionTrigger>Image Review</AccordionTrigger></h2>
            <div className="flex flex-row gap-8">
            <div>Total images to review: {data.length}</div>
            <div>Images with issues: {data.filter(reckon => reckon.tag?.length > 0).length}</div>
            <AccordionTrigger className="[&[data-state=open]>svg]:rotate-180">
              <ChevronDown className="transition-transform duration-200" />
            </AccordionTrigger>
            </div>
          </CardHeader>
          <AccordionContent>
          <CardContent>
            <DataTable columns={columns} data={data} />
          </CardContent>
          </AccordionContent>
        </Card>
          
        </AccordionItem>
        <AccordionItem value="spelling" className="mt-6">
        
        <Card>
          <CardHeader className="flex flex-row justify-between items-center align-middle">
            <h2 className="text-lg font-semibold"><AccordionTrigger>Spelling mistakes</AccordionTrigger></h2>
            <div className="flex flex-row gap-8">
            <div>Total spelling mistakes to review: 10</div>
            
            <AccordionTrigger className="[&[data-state=open]>svg]:rotate-180">
              <ChevronDown className="transition-transform duration-200" />
            </AccordionTrigger>
            </div>
          </CardHeader>
          <AccordionContent className="mt-10">
          <CardContent >
            <DataTable columns={columns} data={data} />
          </CardContent>
          </AccordionContent>
        </Card>
          
        </AccordionItem>
        </Accordion>

        
        
        
      </ResizablePanel>
      <Outlet />
    </ResizablePanelGroup>
  );
}
