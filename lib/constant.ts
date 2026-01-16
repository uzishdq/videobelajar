export const ROUTES = {
  PUBLIC: {
    INDEX: "/",
    LOGIN: "/login",
    REGISTER: "/register",
    FORGOT_PASSWORD: "/forgot-password",
  },
  AUTH: {
    COURSES: {
      INDEX: "/courses",
      DETAIL: "/courses/detail-course",
    },
    PROFILE: {
      INDEX: "/profile",
      KELAS: "/kelas",
      PESANAN: "/pesanan",
    },
  },
};

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
      { label: "Digital & Teknologi", href: "/category/digital-teknologi" },
      { label: "Pemasaran", href: "/category/pemasaran" },
      { label: "Manajemen Bisnis", href: "/category/manajemen-bisnis" },
      { label: "Pengembangan Diri", href: "/category/pengembangan-diri" },
      { label: "Desain", href: "/category/desain" },
    ],
  },
  {
    key: "perusahaan",
    title: "Perusahaan",
    links: [
      { label: "Tentang Kami", href: "/company/tentang-kami" },
      { label: "FAQ", href: "/company/faq" },
      { label: "Kebijakan Privasi", href: "/company/kebijakan-privasi" },
      { label: "Ketentuan Layanan", href: "/company/ketentuan-layanan" },
      { label: "Bantuan", href: "/company/bantuan" },
    ],
  },
  {
    key: "komunitas",
    title: "Komunitas",
    links: [
      { label: "Tips Sukses", href: "/comunity/tips-sukses" },
      { label: "Blog", href: "/comunity/blog" },
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
