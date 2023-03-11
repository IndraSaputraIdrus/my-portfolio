import Link from "next/link";
import clsx from "clsx";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

const listIcon = [
  { id: "instagram", link: "#", icon: <AiFillInstagram /> },
  { id: "facebook", link: "#", icon: <FaFacebookF /> },
  { id: "twitter", link: "#", icon: <FaTwitter /> },
  { id: "github", link: "#", icon: <FiGithub /> },
];

export default function Icons() {
  return (
    <div className="flex items-center space-x-3">
      {listIcon.map((link) => (
        <Link
          key={link.id}
          href={link.link}
          target="_blank"
          className={clsx(
            "w-9 h-9",
            "text-xl text-secondary-100",
            "rounded-full border border-secondary-100",
            "flex items-center justify-center",
            "transition duration-300 ease-in-out",
            "hover:bg-primary hover:shadow-lg"
          )}
        >
          {link.icon}
        </Link>
      ))}
    </div>
  );
}
