"use client";

import Image from "next/image";
import logo from "../public/black-logo.png";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Navbar() {
  const Links = [
    { name: "About us", link: "/about" },
    {
      name: "Products",
      link: "/products",
    },
    {
      name: "Contacts",
      link: "/contacts",
    },
    {
      name: "Login",
      link: "/login",
    },
  ];

  const path = usePathname();

  return (
    <div className="w-full flex justify-between items-center h-20 shadow-md border-b-light-blue">
      <div className="w-40 pl-12 ">
        <Link href={"/"}>
          <Image src={logo} alt="zepping logo" />
        </Link>
      </div>
      <div>
        <ul className="flex flex-row items-center justify-center">
          {Links.map((link) => (
            <li
              key={link.name}
              className={`mr-10 font-bold hover:text-light-blue ${
                path === link.link ? "text-light-blue" : ""
              }`}
            >
              <Link href={link.link}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default Navbar;
