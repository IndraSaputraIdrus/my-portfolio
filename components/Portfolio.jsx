"use client";

import clsx from "clsx";
import SectionSubTitle from "./SectionSubTitle";
import SectionTitle from "./SectionTitle";

import listPortfolio from "@/libs/listPortfolio";

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-36 bg-secondary-300">
      <div className="container">
        <div className="w-full px-4 flex flex-col items-center text-center">
          <SectionTitle>Portfolio</SectionTitle>
          <SectionSubTitle>Project Terbaru</SectionSubTitle>
          <p className={clsx("max-w-xl mx-auto", "text-secondary-200")}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
            distinctio accusamus soluta reiciendis ad iusto quae officia
            molestiae consectetur velit?
          </p>
        </div>
        <div
          className={clsx(
            "w-full px-4 mt-14",
            "flex flex-wrap justify-center",
            "lg:w-10/12 lg:mx-auto -p-5"
          )}
        >
          {listPortfolio.map((item) => (
            <div key={item.id} className={clsx("w-full md:w-1/2", "p-5")}>
              <div
                className={clsx(
                  "w-full h-56 block",
                  "rounded-md shadow-md",
                  "overflow-hidden",
                  "object-contain object-center"
                )}
              >
                <img src={item.image} alt={item.title} />
              </div>
              <h3 className={clsx("font-bold text-lg", "mt-2")}>
                {item.title}
              </h3>
              <p className={clsx("text-secondary-200", "text-sm")}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
