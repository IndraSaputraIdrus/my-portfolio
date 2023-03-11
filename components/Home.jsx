import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";
import Blob from "./Blob";

export default function Home() {
  return (
    <section id="home" className="pt-20">
      <div className="container">
        <div className="flex flex-wrap">
          <div className={clsx("w-full self-center", "px-4", "lg:w-1/2")}>
            <h1
              className={clsx(
                "text-base font-semibold text-primary",
                "md:text-xl"
              )}
            >
              Halo semua, saya
              <span
                className={clsx(
                  "block font-bold text-accent-200 text-4xl",
                  "mt-1",
                  "md:text-4xl"
                )}
              >
                Indra. S
              </span>
            </h1>
            <h2 className={clsx("text-sm font-medium", "mb-5", "md:text-lg")}>
              Front-end Web Developer
            </h2>
            <p
              className={clsx(
                "text-secondary-200",
                "font-medium leading-relaxed",
                "mb-10",
                "md:text-lg"
              )}
            >
              Saya adalah seseorang yang tertarik dalam dunia web, baik itu
              front-end maupun back-end
            </p>

            <Link
              href="#"
              className={clsx(
                "px-8 py-3",
                "font-base font-semibold",
                "bg-primary text-accent-100",
                "rounded-full",
                "transition duration-300 ease-in-out",
                "hover:shadow-lg hover:opacity-80"
              )}
            >
              Hubungi Saya
            </Link>
          </div>
          <div className={clsx("w-full self-end", "px-4", "lg:w-1/2")}>
            <div className="mt-10 relative overflow-hidden">
              <Image
                src="/MyAvatar.png"
                alt="my avatar"
                width={700}
                height={700}
                priority
                className={clsx("max-w-full w-60", "mx-auto", "lg:w-72")}
              />
              <Blob
                className={clsx(
                  "text-primary",
                  "absolute top-0 left-1/2 -translate-x-1/2 -z-10",
                  "max-w-full w-96",
                  "lg:w-3/4"
                )}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
