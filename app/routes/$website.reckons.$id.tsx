import { Link, useLoaderData, useNavigate } from "@remix-run/react";
import { data } from "../data/data";
import { ChevronLeft, ChevronRight, X, ExternalLink } from "lucide-react";
import { Button } from "~/components/ui/button";
import { useEffect } from "react";
import { Badge } from "~/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "~/components/ui/card";
import { ResizableHandle, ResizablePanel } from "~/components/ui/resizable";
import { toast } from "sonner";

export const loader = async ({params}: {params: {id: string}}) => {
  const currentIndex = data.findIndex((item) => item.id === parseInt(params.id));
  
  if (currentIndex === -1) {
    throw new Response("Not Found", { status: 404 });
  }
  
  return {
    reckon: data[currentIndex],
    prevId: currentIndex > 0 ? data[currentIndex - 1].id : null,
    nextId: currentIndex < data.length - 1 ? data[currentIndex + 1].id : null
  };
};

export default function ReckonDetail() {
  const { reckon, prevId, nextId } = useLoaderData<typeof loader>();
  const navigate = useNavigate();


  const createTask = () => {
    console.log('create task clicked');
    toast.success("Create task", {
      
      action: {
        label: "Go to task",
        onClick: () => console.log("Undo"),
      },
    })
  }

  // Update keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft' && prevId) {
        navigate(`../${prevId}`);
      } else if (e.key === 'ArrowRight' && nextId) {
        navigate(`../${nextId}`);
      } else if (e.key.toLowerCase() === 'i') {
        // Handle ignore action
        console.log('Ignore clicked');
      } else if (e.key.toLowerCase() === 't') {
        // Handle add task action
        createTask();
        console.log('Add task clicked');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [prevId, nextId, navigate]);

  return (
    <>
     <ResizableHandle withHandle />
     <ResizablePanel className="pl-12"><div className="w-full animate-[slideIn_0.3s_ease-out] [&:not(:target)]:animate-[slideOut_0.3s_ease-out]  relative">
      
      <Card className="m-0 border-none">
        <CardHeader>
        <div className="flex justify-between mt-4">
      {prevId && (
        <Button asChild variant="outline">
          <Link to={`../${prevId}`}>
            
            Previous
            <kbd className="ml-2 hidden sm:inline-flex h-5 items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100">
              ←
            </kbd>
          </Link>
        </Button>
      )}
      
      <Button asChild variant="outline" >
        <a href="../reckons">
          <X />
          Close
        </a>
      </Button>
      {nextId && (
        <Button asChild variant="outline">
          <Link to={`../${nextId}`}>
            Next
            
            <kbd className="ml-2 hidden sm:inline-flex h-5 items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100">
              →
            </kbd>
          </Link>
        </Button>
      )}
    </div>
        <div className="flex justify-end">
    
      </div>
          
        </CardHeader>
        
        <CardContent>
        <div>
      <img src={reckon.imageUrl} className="rounded" alt="Reckon" />
    </div>
    <div className="text-lg text-bold mt-6">
      Found on <a href={reckon.pageUrl} className="underline inline-flex items-center gap-1">
        {reckon.pageUrl}
        <ExternalLink className="h-4 w-4" />
      </a>
    </div>
    <p className="text-md mt-2 ">Alt tag: "A really descriotive alt tag"</p>
    {reckon.tag.length > 0 && (
      <div className="flex flex-wrap gap-2 mt-4">
        {reckon.tag.map((tag) => (
          <Badge variant="destructive" key={tag}>{tag}</Badge>
        ))}
      </div>
    )}
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button className="gap-2">
            Ignore
            <kbd className=" text-black hidden sm:inline-flex h-5 items-center rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100">
              I
            </kbd>
          </Button>
          <Button className="gap-2" onClick={createTask}>
            Add Task
            <kbd className=" text-black hidden sm:inline-flex h-5 items-center rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100">
              T
            </kbd>
          </Button>
        </CardFooter>
      </Card>
    
    
  </div></ResizablePanel>
    </>
    
  );
}
