"use client";

import clsx from "clsx";
import Link from "next/link";
import { useState } from "react";

import listLink from "@/libs/listLink";

export default function Nav() {
  const [isActive, setIsActive] = useState(false);

  return (
    <header
      className={clsx(
        "sticky bg-white/95 backdrop-blur-sm",
        "top-0 left-0 z-[9999]",
        "w-full h-16",
        "flex items-center"
      )}
    >
      <div className="container">
        <div className="flex items-center justify-between relative">
          <div className="px-4">
            <Link
              href="#home"
              className={clsx("text-lg font-bold", "block", "text-primary")}
            >
              Indra. S
            </Link>
          </div>
          <div className="flex items-center px-4">
            <button
              id="hamburger"
              onClick={() => setIsActive((prev) => !prev)}
              className={clsx("block", "absolute right-4", "outline-none")}
            >
              {[1, 2, 3].map((item) => (
                <span
                  key={item}
                  className={clsx(
                    "w-[30px] h-[2px] block",
                    "bg-accent-200 my-2",
                    "transition duration-300 ease-in-out",
                    item === 1 && "origin-top-left",
                    item === 3 && "origin-bottom-left",
                    item === 1 && isActive && "rotate-45",
                    item === 3 && isActive && "-rotate-45",
                    item === 2 && isActive && "scale-0",
                    "lg:hidden"
                  )}
                />
              ))}
            </button>
            <nav
              className={clsx(
                "fixed top-16 left-0",
                "h-screen w-1/2 py-5 shadow-lg",
                "bg-white/80 backdrop-blur-sm",
                "flex justify-center",
                "font-medium tracking-wider",
                "transition duration-300 ease-in-out",
                !isActive && "-translate-x-full",
                "lg:static lg:h-auto lg:w-full lg:block lg:translate-x-0 lg:bg-transparent lg:shadow-none"
              )}
            >
              <ul
                className={clsx(
                  "flex flex-col space-y-5",
                  "lg:flex-row lg:space-y-0 lg:space-x-2"
                )}
              >
                {listLink.map((link) => (
                  <li key={link.id}>
                    <Link
                      className={clsx(
                        "transition duration-200 ease-in-out",
                        "block px-7 py-2 rounded",
                        "hover:bg-primary hover:text-accent-100",
                        "lg:hover:bg-transparent lg:hover:text-primary lg:px-5"
                      )}
                      href={`/#${link.id}`}
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
