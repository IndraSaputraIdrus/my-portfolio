import clsx from "clsx";

export default function SectionSubTitle({ children }) {
  return (
    <h2
      className={clsx("font-bold text-3xl", "mb-5", "max-w-md", "lg:text-4xl")}
    >
      {children}
    </h2>
  );
}
