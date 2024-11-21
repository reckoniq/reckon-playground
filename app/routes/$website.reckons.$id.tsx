import { Link, useLoaderData, useNavigate } from "@remix-run/react";
import { data } from "../data/data";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Button } from "~/components/ui/button";
import { useEffect } from "react";

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

  // Update keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft' && prevId) {
        navigate(`../${prevId}`);
      } else if (e.key === 'ArrowRight' && nextId) {
        navigate(`../${nextId}`);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [prevId, nextId, navigate]);

  return (
    <div className="border-l w-full animate-[slideIn_0.3s_ease-out] [&:not(:target)]:animate-[slideOut_0.3s_ease-out] p-10 relative">
      <div className="flex justify-end">
      <Button asChild variant="outline" className="ml-auto mb-6">
          <a href="/reckons">
            <X />
            Close
          </a>
        </Button>
        </div>
      <div>
        <img src={reckon.imageUrl} className="rounded" />
      </div>
      <div className="flex justify-between mt-4">
        {prevId && (
          <Button asChild variant="outline">
            <Link to={`../${prevId}`}>
              <ChevronLeft />
              Previous
              <kbd className="ml-2 hidden sm:inline-flex h-5 items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100">
                ←
              </kbd>
            </Link>
          </Button>
        )}
        <Button>Ignore</Button>
        <Button>Add Task</Button>
        
        {nextId && (
          <Button asChild variant="outline">
            <Link to={`../${nextId}`}>
              Next
              <ChevronRight />
              <kbd className="ml-2 hidden sm:inline-flex h-5 items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100">
                →
              </kbd>
            </Link>
          </Button>
        )}
      </div>
    </div>
  );
}
