"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Badge } from "../ui/badge"
import { Reckon } from "../../data/data"
import { Checkbox } from "../ui/checkbox"
import { Button } from "../ui/button"
import { ArrowUpDown } from "lucide-react"
import { NavLink } from "@remix-run/react"

export const columns: ColumnDef<Reckon>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "imageUrl",
    header: "Image",
    cell: ({ row }) => {
      const imageUrl = row.getValue("imageUrl") as string
      return (
        <NavLink 
          to={`./${row.original.id}`}
          className={({ isActive }) =>
            `block ${isActive ? 'ring-2 ring-primary ring-offset-2 rounded' : ''}`
          }
        >
          <img 
            src={imageUrl} 
            alt="Reckon image" 
            className="w-[200px] h-auto object-cover rounded"
          />
        </NavLink>
      )
    },
    enableSorting: false,
  },
  {
    accessorKey: "pageUrl",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Page
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const pageUrl = row.getValue("pageUrl") as Reckon["pageUrl"]
      return (
        <a href={pageUrl} target="_blank" rel="noopener noreferrer">
          {pageUrl}
        </a>
      )
    },
  },
  {
    accessorKey: "tag",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Tags
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const tags = row.getValue("tag") as Reckon["tag"]
      return (
        <div className="flex flex-wrap gap-1">
          {tags.map((tag) => (
            <Badge key={tag} variant="outline">
              {tag}
            </Badge>
          ))}
        </div>
      )
    },
  },
  {
    accessorKey: "createdAt",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Created
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const date = row.getValue("createdAt") as Date
      return date.toLocaleDateString()
    },
  },
] 