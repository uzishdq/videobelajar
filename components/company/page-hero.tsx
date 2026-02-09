interface PageHeroProps {
  title: string;
  description: string;
}

export default function PageHero({
  title,
  description,
}: Readonly<PageHeroProps>) {
  return (
    <section className="mb-4">
      <div className="mx-auto px-4 text-center sm:px-6">
        <h1 className="text-3xl font-extrabold  sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        <p className="mx-auto mt-4 max-w-4xl text-base sm:text-lg">
          {description}
        </p>
      </div>
    </section>
  );
}
