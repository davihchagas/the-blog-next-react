import clsx from "clsx";

export default function HomePage() {
  return (
    <div>
      <h1
        className={clsx(
          "text-xl",
          "font-bold",
          "text-blue-200",
          "hover:text-blue-600",
          "hover:bg-amber-50",
          "transition",
          "duration-300"
        )}
      >
        Texto
      </h1>
    </div>
  );
}
