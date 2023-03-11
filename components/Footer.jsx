import listLink from "@/libs/listLink";
import clsx from "clsx";
import Link from "next/link";
import Icons from "./Icons";
import { AiFillHeart } from "react-icons/ai";

export default function Footer() {
  return (
    <footer className="pt-20 pb-16 bg-accent-200 text-white">
      <div className="container">
        <div className="px-4">
          <div className="flex flex-wrap border-b border-secondary-200">
            <div className="w-full mb-14">
              <h2
                className={clsx(
                  "uppercase text-3xl font-bold tracking-widest",
                  "mb-3"
                )}
              >
                Indra
              </h2>
              <h3 className={clsx("font-semibold text-2xl", "mb-2")}>
                Hubungi Saya
              </h3>
              <ul className="text-secondary-100 text-base space-y-2">
                <li>indrasaputraidrus@gmail.com</li>
                <li>Makassar</li>
              </ul>
            </div>
            <div className={clsx("w-full", "mb-14")}>
              <h3 className="font-semibold text-2xl mb-2">Tautan</h3>
              <ul className="text-secondary-100 text-base space-y-2">
                {listLink.map((link) => (
                  <li
                    key={link.id}
                    className="transition duration-300 ease-in-out hover:text-primary"
                  >
                    <Link href={`#${link.id}`}>{link.text}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="w-full flex flex-col items-center gap-5">
            <div className="mt-10">
              <Icons />
            </div>
            <p
              className={clsx(
                "w-full text-center text-xs",
                "flex justify-center items-center gap-1"
              )}
            >
              Di buat dengan <AiFillHeart className="text-red-500" /> oleh
              <Link
                className="text-primary hover:text-primary/80"
                href="https://github.com/indrasaputraidrus"
              >
                indra
              </Link>
              menggunakan
              <Link
                className="text-sky-500 hover:text-sky-500/80"
                href="https://tailwindcss.com"
              >
                Tailwindcss
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
