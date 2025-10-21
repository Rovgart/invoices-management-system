"use client";
import Image from "next/image";
import React, { useState } from "react";
import fakturekLogo from "../../../public/fakturek-logo.png";
import Link from "next/link";
import { Input } from "./input";
import { Button } from "./button";
const NAVLINKS = [
  {
    title: "Logowanie",
    href: "/login",
  },
  {
    title: "Rejestracja",
    href: "/register",
  },
  {
    title: "Funkcje",
    href: "/funkcje",
  },
  {
    title: "Cennik",
    href: "/cennik",
  },
  {
    title: "Demo",
    href: "/demo",
  },
  {
    title: "Regulamin",
    href: "/regulamin",
  },
  {
    title: "Polityka prywatności",
    href: "/polityka-prywatnosci",
  },
];
function Footer() {
  const [newsletterValue, setNewsletterValue] = useState("");
  const newsletterChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setNewsletterValue(e.target.value);
  };

  return (
    <footer className="grid md:grid-cols-3 grid-cols-1 md:justify-items-center shadow-xl shadow-accent p-6 gap-8">
      <picture className=" flex max-w-[225px]  self-center justify-center items-center mx-0 m-auto overflow-hidden ">
        <Image src={fakturekLogo} alt="fakturek-logo" className="size-full" />
      </picture>
      <div className="flex flex-col text-base text-muted-foreground  ">
        <ul className="space-y-2">
          {NAVLINKS.map((navlink) => (
            <li key={navlink.title}>
              <Link href={navlink.href}>{navlink.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col md:max-w-xs  gap-6  ">
        <h4 className="font-semibold text-lg text-center">Newsletter</h4>
        <form className="flex  flex-col gap-4">
          <Input value={newsletterValue} onChange={newsletterChangeHandler} />
          <Button className="w-1/2 self-center">Zapisz się</Button>
        </form>
      </div>
    </footer>
  );
}

export default Footer;
