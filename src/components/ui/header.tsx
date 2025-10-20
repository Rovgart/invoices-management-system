"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "./button";
import fakturekLogo from "../../../public/fakturek-logo.png";
import { useAuthUIStore } from "@/store/auth-store";
function Header() {
  const { openModal } = useAuthUIStore();
  const toggleModalHandler = () => {
    console.log("Opened");
    openModal("login-modal");
  };
  const headerRef = useRef(null);
  const sentinelRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const intersectionCallback = (entries: IntersectionObserverEntry[]) => {
    const [entry] = entries;
    setIsScrolled(!entry.isIntersecting);
  };

  const intersectionOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };
  const sentinel = sentinelRef.current;
  useEffect(() => {
    const observer = new IntersectionObserver(
      intersectionCallback,
      intersectionOptions,
    );
    if (sentinel) observer.observe(sentinel);

    return () => {
      if (sentinel) observer.unobserve(sentinel);
    };
  }, [sentinelRef, intersectionOptions]);

  return (
    <>
      <div ref={sentinelRef} />
      <header
        ref={headerRef}
        className={cn(
          "flex items-center justify-between z-50 min-h-[64px] transition-all duration-300 p-6",
          isScrolled
            ? "fixed top-0 w-full bg-accent-foreground  text-black shadow-md shadow-accent"
            : "bg-transparent",
        )}
      >
        <div className="flex items-center">
          <picture className=" max-w-[192px]  ">
            <Image
              className="size-full object-cover"
              src={fakturekLogo}
              alt="Vercel Logo"
            />
          </picture>
        </div>

        <div className="flex items-center gap-4">
          <Button
            onClick={() => openModal("login-modal")}
            variant={`${isScrolled ? "secondary" : "default"}`}
          >
            Logowanie
          </Button>
          <Button
            onClick={() => openModal("register-modal")}
            variant={`${isScrolled ? "secondary" : "default"}`}
          >
            Załóż konto
          </Button>
        </div>
      </header>
    </>
  );
}

export default Header;
