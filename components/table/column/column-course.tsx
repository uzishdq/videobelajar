"use client";

import { EditDeleteCourseForm } from "@/components/form/course-form";
import FormDialog from "@/components/form/form-dialog";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Course } from "@/lib/data-dummy";
import { formatToIDR, truncateText } from "@/lib/helper";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";

export const columnCourse: ColumnDef<Course>[] = [
  {
    id: "rowNumber",
    header: "No",
    enableHiding: false,
    cell: ({ row }) => <div className="capitalize">{row.index + 1}</div>,
  },
  {
    accessorKey: "title",
    header: "Title",
    enableHiding: false,
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("title")}</div>
    ),
  },
  {
    accessorKey: "desc",
    header: "Description",
    cell: ({ row }) => (
      <div className="capitalize">{truncateText(row.getValue("desc"), 50)}</div>
    ),
  },
  {
    accessorKey: "price",
    header: "Price",
    cell: ({ row }) => (
      <div className="capitalize">{formatToIDR(row.getValue("price"))}</div>
    ),
  },
  {
    id: "actions",
    header: "Opsi",
    enableHiding: false,
    cell: ({ row }) => {
      const dataRows = row.original;
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="h-8 w-8 p-0">
              <span className="sr-only">Open Menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="space-y-1">
            <DropdownMenuLabel className="text-center">Opsi</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild onSelect={(e) => e.preventDefault()}>
              <DialogEdit value={dataRows} />
            </DropdownMenuItem>
            <DropdownMenuItem asChild onSelect={(e) => e.preventDefault()}>
              <DialogDelete value={dataRows} />
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

type TDialog = {
  value: Course;
};

function DialogEdit({ value }: Readonly<TDialog>) {
  return (
    <FormDialog
      type="edit"
      title="Edit Course"
      description="Edit data course, lalu klik Update untuk mengonfirmasi."
    >
      <EditDeleteCourseForm data={value} mode="update" />
    </FormDialog>
  );
}

function DialogDelete({ value }: Readonly<TDialog>) {
  return (
    <FormDialog type="delete" title="Delete Course">
      <EditDeleteCourseForm data={value} mode="delete" />
    </FormDialog>
  );
}
