import { generateStars } from "@/lib/helper";
import { Star } from "lucide-react";

const HalfStar = ({ size = 16 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className="stroke-amber-400"
  >
    <defs>
      <linearGradient id="half">
        <stop offset="50%" stopColor="#fbbf24" />
        <stop offset="50%" stopColor="transparent" />
      </linearGradient>
    </defs>
    <path
      fill="url(#half)"
      d="M12 2l2.9 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 7.1-1.01L12 2z"
    />
  </svg>
);

type Props = {
  rating: number;
  size?: number;
};

export const RatingStars = ({ rating, size = 16 }: Props) => {
  const stars = generateStars(rating);

  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-0.5" aria-hidden="true">
        {stars.map((star) => {
          if (star.type === "full") {
            return (
              <Star
                key={star.id}
                size={size}
                className="fill-amber-400 stroke-amber-400"
              />
            );
          }

          if (star.type === "half") {
            return <HalfStar key={star.id} size={size} />;
          }

          return (
            <Star key={star.id} size={size} className="stroke-amber-400" />
          );
        })}
      </div>

      <span className="sr-only">Rating {rating} dari 5</span>
    </div>
  );
};
