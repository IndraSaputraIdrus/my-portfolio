import clsx from "clsx";
import SectionSubTitle from "./SectionSubTitle";
import SectionTitle from "./SectionTitle";
import Icons from "./Icons";

export default function About() {
  return (
    <section id="about" className="py-36">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full px-4 mb-10 lg:w-1/2">
            <SectionTitle>Tentang Saya</SectionTitle>
            <SectionSubTitle>
              Tertarik pda Front-end web developer
            </SectionSubTitle>
            <p
              className={clsx(
                "font-medium text-base text-secondary-200",
                "max-w-xl",
                "lg:text-lg"
              )}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              voluptatibus incidunt perspiciatis. At exercitationem mollitia
              amet.
            </p>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <h3
              className={clsx(
                "font-semibold text-2xl",
                "mb-4",
                "lg:text-3xl lg:pt-10"
              )}
            >
              Mari berteman
            </h3>
            <p
              className={clsx(
                "font-medium text-base",
                "text-secondary-200",
                "mb-6",
                "lg:text-lg"
              )}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
              provident laboriosam nostrum deleniti quidem sint obcaecati nobis
              maxime suscipit amet!
            </p>
            <Icons />
          </div>
        </div>
      </div>
    </section>
  );
}
