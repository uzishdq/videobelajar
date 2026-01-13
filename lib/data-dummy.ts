export interface Course {
  id: string;
  img: string;
  title: string;
  desc: string;
  instructor: string;
  job: string;
  rating: number;
  reviews: number;
  price: string;
  category: string;
}

export const DataCourses: Course[] = [
  {
    id: "course-1",
    img: "https://static.vecteezy.com/system/resources/previews/070/677/567/non_2x/financial-analyst-working-on-laptop-with-graphs-and-calculator-analyzing-market-data-for-investment-decisions-photo.jpeg",
    title: "Big 4 Auditor: Dasar-Dasar Financial Analysis",
    desc: "Pelajari teknik analisis laporan keuangan dari auditor Big 4, cocok untuk pemula yang ingin karir di finance.",
    instructor: "Jenna Ortega",
    job: "Senior Accountant di Gojek",
    rating: 3.5,
    reviews: 86,
    price: "300K",
    category: "bisnis",
  },
  {
    id: "course-2",
    img: "https://static.vecteezy.com/system/resources/previews/067/396/613/non_2x/male-financial-analyst-works-late-at-a-brick-wall-office-desk-reviewing-documents-and-stock-data-on-his-laptop-the-night-setting-creates-a-focused-workspace-for-analyzing-financial-trends-photo.jpg",
    title: "Financial Analyst Professional dari Big 4",
    desc: "Transformasi karir dengan materi mendalam tentang forecasting dan valuation dari praktisi berpengalaman.",
    instructor: "Jenna Ortega",
    job: "Senior Accountant di Gojek",
    rating: 3.5,
    reviews: 86,
    price: "300K",
    category: "bisnis",
  },
  {
    id: "course-3",
    img: "https://images.stockcake.com/public/1/c/6/1c6d2ee5-6183-4e1c-a497-dec4d19862c3_large/financial-analysis-setup-stockcake.jpg",
    title: "Big 4 Auditor: Analisis Laporan Keuangan Lanjutan",
    desc: "Kuasai audit internal dan eksternal dengan studi kasus real dari perusahaan besar.",
    instructor: "Jenna Ortega",
    job: "Senior Accountant di Gojek",
    rating: 3.5,
    reviews: 86,
    price: "300K",
    category: "pengembangan",
  },
  {
    id: "course-4",
    img: "https://images.pexels.com/photos/3183186/pexels-photo-3183186.jpeg",
    title: "Financial Modeling untuk Pemula",
    desc: "Belajar membuat model keuangan yang akurat dan berguna untuk pengambilan keputusan.",
    instructor: "Michael B. Jordan",
    job: "Financial Consultant di Tokopedia",
    rating: 3.5,
    reviews: 86,
    price: "300K",
    category: "pengembangan",
  },
  {
    id: "course-5",
    img: "https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg",
    title: "Analisis Risiko Investasi",
    desc: "Pelajari cara menilai risiko dan peluang investasi menggunakan metode profesional.",
    instructor: "Sofia Vergara",
    job: "Investment Manager di Mandiri",
    rating: 3.5,
    reviews: 86,
    price: "300K",
    category: "bisnis",
  },
  {
    id: "course-6",
    img: "https://images.pexels.com/photos/4386394/pexels-photo-4386394.jpeg",
    title: "Forecasting & Budgeting Perusahaan",
    desc: "Belajar menyusun anggaran dan proyeksi perusahaan dengan metode profesional.",
    instructor: "Tom Holland",
    job: "Financial Analyst di Shopee",
    rating: 3.5,
    reviews: 86,
    price: "300K",
    category: "pengembangan",
  },
  {
    id: "course-7",
    img: "https://images.pexels.com/photos/4386397/pexels-photo-4386397.jpeg",
    title: "Strategi Pajak untuk Perusahaan",
    desc: "Pelajari pengelolaan pajak perusahaan agar efisien dan sesuai regulasi.",
    instructor: "Robert Downey Jr.",
    job: "Tax Consultant di KPMG",
    rating: 3.5,
    reviews: 86,
    price: "300K",
    category: "pengembangan",
  },
  {
    id: "course-8",
    img: "https://images.pexels.com/photos/4386401/pexels-photo-4386401.jpeg",
    title: "Financial Dashboard & Data Visualization",
    desc: "Belajar membuat dashboard keuangan interaktif untuk manajemen keputusan.",
    instructor: "Leonardo DiCaprio",
    job: "Data Analyst di Bukalapak",
    rating: 3.5,
    reviews: 86,
    price: "300K",
    category: "pengembangan",
  },
  {
    id: "course-9",
    img: "https://images.pexels.com/photos/4386405/pexels-photo-4386405.jpeg",
    title: "Advanced Financial Reporting & Analysis",
    desc: "Pelajari teknik lanjutan analisis laporan keuangan untuk profesional.",
    instructor: "Will Smith",
    job: "CFO di Grab",
    rating: 3.5,
    reviews: 86,
    price: "300K",
    category: "pengembangan",
  },
];
