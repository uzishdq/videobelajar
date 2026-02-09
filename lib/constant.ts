export const ROUTES = {
  BY: "https://uzishdq.vercel.app/",
  PUBLIC: {
    INDEX: "/",
    LOGIN: "/login",
    REGISTER: "/register",
    FORGOT_PASSWORD: "/forgot-password",
    COURSES: {
      INDEX: "/courses",
      DETAIL: (id: string) => `/courses/detail-course/${id}`,
    },
    COMPANY: {
      ABOUT_US: "/company/about-us",
      FAQ: "/company/faq",
      HELP: "/company/help",
      PRIVACY_POLICY: "/company/privacy-policy",
      TERM_SERVICE: "/company/terms-of-service",
    },
    COMMUNITY: {
      BLOG: "/community/blog",
      TIPS: "/community/success-tips",
    },
  },
  AUTH: {
    PROFILE: {
      INDEX: "/profile",
      KELAS: "/kelas",
      PESANAN: "/pesanan",
    },
    ADMIN: {
      INDEX: "/admin",
    },
  },
};

export const HIDDEN_PATHS = [
  ROUTES.PUBLIC.LOGIN,
  ROUTES.PUBLIC.REGISTER,
  ROUTES.PUBLIC.FORGOT_PASSWORD,
];

export const IMG_PUBLIC = {
  LOGO: "/assets/logo.png",
  BG_HERO: "/assets/bg-hero.jpg",
  BG_CTA: "/assets/bg-cta.jpg",
  DEFAULT_PROFILE: "/assets/default-profile.png",
  GOOGLE: "https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg",
};

export type FooterGroupData = {
  key: "kategori" | "perusahaan" | "komunitas";
  title: string;
  links: {
    label: string;
    href: string;
  }[];
};

export const FOOTER_GROUPS: FooterGroupData[] = [
  {
    key: "kategori",
    title: "Kategori",
    links: [
      {
        label: "Digital & Teknologi",
        href: "/courses?page=1&limit=10&category=teknologi",
      },
      {
        label: "Pemasaran",
        href: "/courses?page=1&limit=10&category=pemasaran",
      },
      {
        label: "Manajemen Bisnis",
        href: "/courses?page=1&limit=10&category=bisnis",
      },
      {
        label: "Pengembangan Diri",
        href: "/courses?page=1&limit=10&category=pengembangan",
      },
      { label: "Desain", href: "/courses?page=1&limit=10&category=desain" },
    ],
  },
  {
    key: "perusahaan",
    title: "Perusahaan",
    links: [
      { label: "Tentang Kami", href: ROUTES.PUBLIC.COMPANY.ABOUT_US },
      { label: "FAQ", href: ROUTES.PUBLIC.COMPANY.FAQ },
      {
        label: "Kebijakan Privasi",
        href: ROUTES.PUBLIC.COMPANY.PRIVACY_POLICY,
      },
      { label: "Ketentuan Layanan", href: ROUTES.PUBLIC.COMPANY.TERM_SERVICE },
      { label: "Bantuan", href: ROUTES.PUBLIC.COMPANY.HELP },
    ],
  },
  {
    key: "komunitas",
    title: "Komunitas",
    links: [
      { label: "Tips Sukses", href: ROUTES.PUBLIC.COMMUNITY.TIPS },
      { label: "Blog", href: ROUTES.PUBLIC.COMMUNITY.BLOG },
    ],
  },
];

export const FOOTER_SOCIAL = [
  {
    label: "linkedin",
    link: "https://www.linkedin.com/company/hariesok.id/",
    svg: "https://www.svgrepo.com/show/475661/linkedin-color.svg",
  },
  {
    label: "facebook",
    link: "https://www.facebook.com/hariesok.id/",
    svg: "https://www.svgrepo.com/show/475647/facebook-color.svg",
  },
  {
    label: "instagram",
    link: "https://www.instagram.com/hariesok.id/",
    svg: "https://www.svgrepo.com/show/303154/instagram-2016-logo.svg",
  },
  {
    label: "twitter",
    link: "https://x.com/hariesok.id",
    svg: "https://www.svgrepo.com/show/475689/twitter-color.svg",
  },
];

export const LABEL = {
  INPUT: {
    SUCCESS: {
      SAVED: "Saved successfully.",
      UPDATE: "Updated successfully.",
      DELETE: "Deleted successfully.",
    },
    FAILED: {
      SAVED: "Couldn’t save data.",
      UPDATE: "Couldn’t update data.",
      DELETE: "Couldn’t delete data.",
    },
  },
  SUCCESS: {
    REVALIDATE: "Data is now fresh and updated.",
    DATA_FOUND: "Data found",
    FETCH: "Data fetched successfully",
  },
  ERROR: {
    404: "Page Not Found",
    DATA_NOT_FOUND: "Data not found.",
    INVALID_FIELD: "Invalid input. Please check your data.",
    SERVER: "Something went wrong on our server. Please try again later.",
    NOT_LOGIN: "You need to sign in to continue.",
    UNAUTHORIZED: "You’re not authorized to perform this action.",
  },
};

export const D_INSTRUCTOR = [
  {
    name: "Siti Rahmawati",
    value: "Siti Rahmawati",
  },
  {
    name: "Budi Santoso",
    value: "Budi Santoso",
  },
  {
    name: "Andi Pratama",
    value: "Andi Pratama",
  },
];

export const D_JOB = [
  { name: "Pemasaran", value: "Pemasaran" },
  { name: "Desain", value: "Desain" },
  { name: "Pengembangan Diri", value: "Pengembangan Diri" },
  { name: "Bisnis", value: "bisnis" },
  { name: "Teknologi Informasi", value: "Teknologi Informasi" },
  { name: "Pengembangan Software", value: "Pengembangan Software" },
  { name: "Data & Analitik", value: "Data Analitik" },
  { name: "Keuangan & Akuntansi", value: "Keuangan Akuntansi" },
  { name: "Manajemen Proyek", value: "Manajemen Proyek" },
  { name: "Sumber Daya Manusia", value: "Sumber Daya Manusia" },
  { name: "UI / UX Designer", value: "UI / UX Designer" },
  { name: "Content Creator", value: "Content Creator" },
  { name: "Digital Marketing", value: "Digital Marketing" },
  { name: "Product Management", value: "Product Management" },
];

export const D_CATEGORY = [
  { name: "Digital & Teknologi", value: "teknologi" },
  { name: "Pemasaran", value: "pemasaran" },
  { name: "Desain", value: "desain" },
  { name: "Pengembangan Diri", value: "pengembangan" },
  { name: "Bisnis", value: "bisnis" },
];
