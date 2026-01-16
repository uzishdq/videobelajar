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

export const dataCourses: Course[] = [
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
  {
    id: "course-4",
    img: "https://picsum.photos/seed/finance-4/600/400",
    title: "Financial Modeling untuk Pemula",
    desc: "Bangun model keuangan praktis untuk analisis dan pengambilan keputusan.",
    instructor: "Sofia Vergara",
    job: "Financial Consultant · Tokopedia",
    rating: 4.6,
    reviews: 142,
    price: 280000,
    category: "pengembangan",
  },
  {
    id: "course-5",
    img: "https://picsum.photos/seed/finance-5/600/400",
    title: "Analisis Risiko Investasi",
    desc: "Evaluasi risiko dan peluang investasi menggunakan metode profesional.",
    instructor: "Tom Holland",
    job: "Investment Analyst · Mandiri",
    rating: 4.4,
    reviews: 89,
    price: 300000,
    category: "bisnis",
  },
  {
    id: "course-6",
    img: "https://picsum.photos/seed/finance-6/600/400",
    title: "Forecasting & Budgeting Perusahaan",
    desc: "Pelajari teknik menyusun anggaran dan proyeksi keuangan perusahaan.",
    instructor: "Robert Downey Jr.",
    job: "FP&A Lead · Shopee",
    rating: 4.1,
    reviews: 63,
    price: 310000,
    category: "pengembangan",
  },
  {
    id: "course-7",
    img: "https://picsum.photos/seed/finance-7/600/400",
    title: "Strategi Pajak Perusahaan",
    desc: "Optimalkan pajak perusahaan dengan pendekatan legal dan efisien.",
    instructor: "Scarlett Johansson",
    job: "Tax Consultant · KPMG",
    rating: 4.2,
    reviews: 58,
    price: 290000,
    category: "pengembangan",
  },
  {
    id: "course-8",
    img: "https://picsum.photos/seed/finance-8/600/400",
    title: "Financial Dashboard & Data Visualization",
    desc: "Buat dashboard keuangan interaktif untuk manajemen dan stakeholder.",
    instructor: "Leonardo DiCaprio",
    job: "Data Analyst · Bukalapak",
    rating: 4.7,
    reviews: 151,
    price: 360000,
    category: "pengembangan",
  },
  {
    id: "course-9",
    img: "https://picsum.photos/seed/finance-9/600/400",
    title: "Advanced Financial Reporting",
    desc: "Teknik lanjutan penyusunan dan analisis laporan keuangan profesional.",
    instructor: "Will Smith",
    job: "CFO · Grab",
    rating: 4.5,
    reviews: 112,
    price: 400000,
    category: "pengembangan",
  },
];

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
