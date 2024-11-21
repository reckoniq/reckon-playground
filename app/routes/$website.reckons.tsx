import { Link, Outlet, useLoaderData } from "@remix-run/react";
import { data } from "../data/data";
import { columns } from "~/components/reckons/columns";
import { DataTable } from "~/components/reckons/data-table";

export const loader = async () => {
  return data;
};

export default function Reckons() {
  const data = useLoaderData<typeof loader>();
  
  return (
    <div className="flex w-full h-screen ">
      <div className="w-full p-4">
        <DataTable columns={columns} data={data} />
      </div>
      <Outlet />
    </div>
  );
}
