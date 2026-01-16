import { ROUTES } from "@/lib/constant";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-6xl font-bold text-primary">404</h1>
      <p className="mt-4 text-lg text-gray-600">
        Halaman yang kamu cari tidak ditemukan
      </p>

      <Link
        href={ROUTES.PUBLIC.INDEX}
        className="mt-6 inline-block bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-hover transition"
      >
        Kembali
      </Link>
    </section>
  );
}
