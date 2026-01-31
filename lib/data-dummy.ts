export const tabs = [
  { label: "Semua Kelas", value: "all" },
  { label: "Pemasaran", value: "pemasaran" },
  { label: "Desain", value: "desain" },
  { label: "Pengembangan Diri", value: "pengembangan" },
  { label: "Bisnis", value: "bisnis" },
];

export interface Course {
  id: string;
  img: string;
  title: string;
  desc: string;
  instructor: string;
  job: string;
  rating: number;
  reviews: number;
  price: number;
  category: string;
}

export const dataCourses2: Course[] = [
  {
    id: "course-1",
    img: "https://picsum.photos/seed/finance-1/600/400",
    title: "Big 4 Auditor: Dasar Financial Analysis",
    desc: "Pelajari dasar analisis laporan keuangan langsung dari perspektif auditor Big 4.",
    instructor: "Jenna Ortega",
    job: "Senior Accountant · Gojek",
    rating: 4.3,
    reviews: 128,
    price: 300000,
    category: "bisnis",
  },
  {
    id: "course-2",
    img: "https://picsum.photos/seed/finance-2/600/400",
    title: "Financial Analyst Professional",
    desc: "Materi mendalam tentang forecasting, valuation, dan financial decision making.",
    instructor: "Jenna Ortega",
    job: "Senior Accountant · Gojek",
    rating: 4.5,
    reviews: 96,
    price: 350000,
    category: "bisnis",
  },
  {
    id: "course-3",
    img: "https://picsum.photos/seed/finance-3/600/400",
    title: "Audit & Financial Reporting Lanjutan",
    desc: "Studi kasus audit internal dan eksternal perusahaan skala besar.",
    instructor: "Michael B. Jordan",
    job: "Audit Manager · PwC",
    rating: 4.2,
    reviews: 74,
    price: 320000,
    category: "pengembangan",
  },
];

export const tabsMyClass = [
  { label: "Semua Kelas", value: "all" },
  { label: "Sedang Berjalan", value: "berjalan" },
  { label: "Selesai", value: "selesai" },
];

export interface MyClass {
  id: string;
  img: string;
  title: string;
  desc: string;
  instructor: string;
  job: string;
  classDetail: {
    modulStart: number;
    modulEnd: number;
    progress: number;
    status: "selesai" | "berjalan";
  };
}

export const myClassDummy: MyClass[] = [
  {
    id: "b7b9a7b0-7d1a-4a4c-9e4a-6c7f0f4d1a11",
    img: "https://picsum.photos/seed/react/400/250",
    title: "React Fundamental",
    desc: "Belajar dasar React dari nol hingga memahami konsep component, props, dan state.",
    instructor: "Andi Pratama",
    job: "Frontend Engineer",
    classDetail: {
      modulStart: 12,
      modulEnd: 12,
      progress: 100,
      status: "selesai",
    },
  },
  {
    id: "d2c1a8f4-1a44-4f8b-8c6b-1e8c9a3f2b21",
    img: "https://picsum.photos/seed/nextjs/400/250",
    title: "Next.js App Router",
    desc: "Membangun aplikasi modern menggunakan Next.js App Router dan Server Components.",
    instructor: "Budi Santoso",
    job: "Fullstack Developer",
    classDetail: {
      modulStart: 3,
      modulEnd: 15,
      progress: 40,
      status: "berjalan",
    },
  },
  {
    id: "a9e3c7d2-5c0f-4b6e-9f5a-3b2a9e1c4d31",
    img: "https://picsum.photos/seed/typescript/400/250",
    title: "TypeScript for Web Developer",
    desc: "Memahami TypeScript untuk meningkatkan kualitas dan keamanan kode JavaScript.",
    instructor: "Citra Lestari",
    job: "Software Engineer",
    classDetail: {
      modulStart: 5,
      modulEnd: 10,
      progress: 55,
      status: "berjalan",
    },
  },
  {
    id: "f4d6a2c9-3b7e-4d1c-8a9f-0e2b6a5d7c41",
    img: "https://picsum.photos/seed/backend/400/250",
    title: "Backend API dengan Node.js",
    desc: "Membangun REST API menggunakan Node.js, Express, dan best practice backend.",
    instructor: "Dedi Kurniawan",
    job: "Backend Engineer",
    classDetail: {
      modulStart: 2,
      modulEnd: 14,
      progress: 25,
      status: "berjalan",
    },
  },
];

export const tabsMyOrder = [
  { label: "Semua Pesanan", value: "all" },
  { label: "Menunggu", value: "menunggu" },
  { label: "Berhasil", value: "berhasil" },
  { label: "Gagal", value: "gagal" },
];

export interface MyOrder {
  id: string;
  noInvoice: string;
  tanggal: Date;
  harga: number;
  totalHarga: number;
  status: "berhasil" | "gagal" | "menunggu";
  img: string;
  title: string;
}

export const myOrderDummy: MyOrder[] = [
  {
    id: "b7b9a7b0-7d1a-4a4c-9e4a-6c7f0f4d1a11",
    noInvoice: "INV-2026-001",
    tanggal: new Date("2026-01-10T09:30:00"),
    harga: 350000,
    totalHarga: 350000,
    status: "berhasil",
    img: "https://picsum.photos/seed/react/400/250",
    title: "React Fundamental",
  },
  {
    id: "a9e3c7d2-5c0f-4b6e-9f5a-3b2a9e1c4d31",
    noInvoice: "INV-2026-003",
    tanggal: new Date("2026-01-15T10:45:00"),
    harga: 300000,
    totalHarga: 300000,
    status: "berhasil",
    img: "https://picsum.photos/seed/typescript/400/250",
    title: "TypeScript for Web Developer",
  },
  {
    id: "f4d6a2c9-3b7e-4d1c-8a9f-0e2b6a5d7c41",
    noInvoice: "INV-2026-004",
    tanggal: new Date("2026-01-18T16:05:00"),
    harga: 400000,
    totalHarga: 0,
    status: "gagal",
    img: "https://picsum.photos/seed/backend/400/250",
    title: "Backend API dengan Node.js",
  },
  {
    id: "d2c1a8f4-1a44-4f8b-8c6b-1e8c9a3f2b21",
    noInvoice: "INV-2026-005",
    tanggal: new Date("2026-01-20T11:20:00"),
    harga: 450000,
    totalHarga: 450000,
    status: "menunggu",
    img: "https://picsum.photos/seed/nextjs/400/250",
    title: "Next.js App Router",
  },
];

export type User = {
  id: string;
  email: string;
  phone: string;
  name: string;
  position: string;
  job: string;
  role: "STUDENT" | "INSTRUCTOR";
};

export type Category = {
  id: string;
  name: string;
};

export type Reviews = {
  id: string;
  rating: number;
  comment: string;
};

export type Courses = {
  id: string;
  title: string;
  desc: string;
  img: string;
  instructor: User[];
  category: Category;
  reviews: Reviews[];
  price: number;
};

export type APIResponse<T> =
  | {
      ok: true;
      data: T;
      message: string;
      meta?: {
        page: number;
        limit: number;
        total: number;
        totalPages: number;
      };
    }
  | { ok: false; data: null; message: string };
