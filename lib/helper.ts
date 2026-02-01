function clampRating(rating: number, max: number = 5) {
  return Math.min(Math.max(rating, 0), max);
}

export type StarType = "full" | "half" | "empty";

const getStarType = (rating: number, value: number): StarType => {
  if (rating >= value) {
    return "full";
  }

  if (rating >= value - 0.5) {
    return "half";
  }

  return "empty";
};

export function generateStars(rating: number, max: number = 5) {
  const safeRating = clampRating(rating, max);

  return Array.from({ length: max }, (_, i) => {
    const value = i + 1;

    return {
      id: `star-${value}`,
      type: getStarType(safeRating, value),
    };
  });
}

export function formatToIDR(value: number): string {
  const result = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(value);

  return result;
}

export function handleRupiahNumberChange(
  field: { onChange: (value: number | null) => void },
  e: React.ChangeEvent<HTMLInputElement>,
) {
  const raw = e.target.value.replaceAll(/\D/g, "");

  field.onChange(raw === "" ? null : Number(raw));
}

export const isPathActive = (pathname: string, target: string) => {
  if (target === "/") return pathname === "/";

  return pathname === target || pathname.startsWith(`${target}/`);
};

export function formatTanggalID(date: Date) {
  return new Intl.DateTimeFormat("id-ID", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
}

export function truncateText(text: string, maxLength = 120): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + "...";
}
