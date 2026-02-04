import { Course } from "@/lib/data-dummy";
import { getCourses } from "@/server/data/course-data";
import { create } from "zustand";

type Filters = {
  minRating?: number;
  category?: string;
  priceStart?: number;
  priceEnd?: number;
  duration?: string;
  sortBy?: string;
  search?: string;
};

type CourseStore = {
  data: Course[];
  isLoading: boolean;
  error: string | null;
  totalPages: number;

  page: number;
  limit: number;
  filters: Filters;

  fetchCourses: () => Promise<void>;
  setPage: (page: number) => void;
  setLimit: (limit: number) => void;
  setFilters: (filters: Partial<Filters>) => void;
  resetFilters: () => void;
};

export const useCourseStore = create<CourseStore>((set, get) => ({
  data: [],
  isLoading: false,
  error: null,
  totalPages: 0,

  page: 1,
  limit: 10,
  filters: {},

  fetchCourses: async () => {
    const { page, limit, filters } = get();

    set({ isLoading: true, error: null });

    const res = await getCourses({
      page,
      limit,
      ...filters,
    });

    if (!res.ok) {
      set({ isLoading: false, error: res.message });
      return;
    }

    set({
      data: res.data ?? [],
      totalPages: res.meta?.totalPages ?? 0,
      isLoading: false,
    });
  },

  setPage: (page) => {
    set({ page });
    get().fetchCourses();
  },

  setLimit: (limit) => set({ limit }),

  setFilters: (filters) => {
    set((state) => ({
      filters: { ...state.filters, ...filters },
      page: 1,
    }));
    get().fetchCourses();
  },

  resetFilters: () => {
    set({
      filters: {},
      page: 1,
    });
    get().fetchCourses();
  },
}));
