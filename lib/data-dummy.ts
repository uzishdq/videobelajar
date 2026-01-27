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
  | { ok: true; data: T; message: string }
  | { ok: false; data: null; message: string };
