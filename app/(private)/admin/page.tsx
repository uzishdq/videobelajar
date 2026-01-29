import { CreateCourseForm } from "@/components/form/course-form";
import FormDialog from "@/components/form/form-dialog";
import FormStatus from "@/components/form/form-status";
import { columnCourse } from "@/components/table/column/column-course";
import TableContainer from "@/components/table/table-container";
import { getCourses } from "@/server/data/course-data";
import React from "react";

interface IAdminPage {
  searchParams: {
    page?: string;
    limit?: string;
    search?: string;
  };
}

export default async function AdminPage({ searchParams }: IAdminPage) {
  const params = await searchParams;

  const response = await getCourses({
    page: Number(params.page) || 1,
    limit: Number(params.limit) || 6,
    search: params.search,
  });

  if (!response.ok) {
    return <FormStatus message={response.message} />;
  }

  return (
    <section className="flex flex-col justify-center w-full max-w-300">
      <TableContainer
        header="Data Course"
        description="Catatan transaksi penjualan"
        searchBy="title"
        labelSearch="Title"
        data={response.data}
        columns={columnCourse}
        meta={response.meta}
      >
        <FormDialog type="create" title="Tambah Course">
          <CreateCourseForm />
        </FormDialog>
      </TableContainer>
    </section>
  );
}
