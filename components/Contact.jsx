import clsx from "clsx";
import SectionSubTitle from "./SectionSubTitle";
import SectionTitle from "./SectionTitle";

export default function Contact() {
  return (
    <section id="contact" className="py-36">
      <div className="container">
        <div
          className={clsx(
            "max-w-lg mx-auto",
            "px-4 text-center",
            "flex flex-col items-center"
          )}
        >
          <SectionTitle>Contact</SectionTitle>
          <SectionSubTitle>Hubungi Saya</SectionSubTitle>
          <p className="text-secondary-200">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
            facilis.
          </p>
        </div>
        <div
          className={clsx("max-w-xl mx-auto px-4", "my-14", "flex flex-wrap")}
        >
          {["nama", "email"].map((item) => (
            <div key={item} className={clsx("w-full mb-5 lg:w-1/2 lg:px-2")}>
              <label
                htmlFor={item}
                className={clsx(
                  "block capitalize",
                  "text-base font-medium tracking-wider",
                  "text-primary"
                )}
              >
                {item}
              </label>
              <input
                id={item}
                className={clsx(
                  "border-2 border-primary",
                  "block w-full",
                  "px-4 py-2",
                  "mt-1",
                  "rounded-md"
                )}
                type="text"
                placeholder={`masukkan ${item}`}
              />
            </div>
          ))}
          <div className={clsx("w-full", "mb-5 lg:px-2")}>
            <label
              htmlFor="pesan"
              className={clsx(
                "block capitalize",
                "text-base font-medium tracking-wider",
                "text-primary"
              )}
            >
              Pesan
            </label>
            <textarea
              id="pesan"
              placeholder="masukkan pesan"
              className={clsx(
                "w-full h-32",
                "px-4 py-2 mt-1",
                "border-2 border-primary rounded-md"
              )}
            ></textarea>
          </div>
          <button
            className={clsx(
              "block w-1/3 py-2 ml-auto",
              "bg-primary text-accent-100",
              "rounded-md",
              "hover:bg-primary/80"
            )}
          >
            Kirim
          </button>
        </div>
      </div>
    </section>
  );
}
