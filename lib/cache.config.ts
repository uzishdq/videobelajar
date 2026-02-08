export const CACHE_TIMES = {
  STATIC: 86400, // 24 jam - data jarang berubah
  NORMAL: 3600, // 1 jam - data normal
  DYNAMIC: 300, // 5 menit - data sering berubah
  REALTIME: 60, // 1 menit - data realtime
} as const;

export const CACHE_TAGS = {
  COURSES: "courses",
  TRENDING: "trending",
  COURSE_DETAIL: (id: string) => `course-${id}`,
} as const;

export const CACHE_CONFIG = {
  COURSES_LIST: {
    revalidate: CACHE_TIMES.NORMAL,
    tags: [CACHE_TAGS.COURSES],
  } as NextFetchRequestConfig,

  COURSE_DETAIL: (id: string) =>
    ({
      revalidate: CACHE_TIMES.STATIC,
      tags: [CACHE_TAGS.COURSES, CACHE_TAGS.COURSE_DETAIL(id)],
    }) as NextFetchRequestConfig,

  TRENDING_COURSES: {
    revalidate: CACHE_TIMES.DYNAMIC,
    tags: [CACHE_TAGS.COURSES, CACHE_TAGS.TRENDING],
  } as NextFetchRequestConfig,
} as const;
