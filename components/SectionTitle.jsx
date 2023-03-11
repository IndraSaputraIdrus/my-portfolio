import clsx from "clsx";

export default function SectionTitle({ children }) {
  return (
    <h4 className={clsx("font-bold uppercase", "text-primary text-lg", "mb-3")}>
      {children}
    </h4>
  );
}
