"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const MenuButton = ({
  isOpen,
  toggle,
}: {
  isOpen: boolean;
  toggle: () => void;
}) => (
  <Button
    onClick={toggle}
    variant="ghost"
    className="fixed top-6 right-14 z-50 p-2 hover:bg-transparent w-16 h-16 flex items-center justify-center"
  >
    <div className="relative w-10 h-10 flex items-center justify-center">
      <span
        className={`absolute h-0.5 w-10 transition-all duration-300 ease-in-out
          ${
            isOpen
              ? "w-8 rotate-45 bg-background"
              : "translate-y-[-6px] bg-primary"
          }`}
      />
      <span
        className={`absolute h-0.5 transition-all duration-300 ease-in-out right-4
          ${
            isOpen
              ? "w-8 -rotate-45 bg-background right-1"
              : "w-6 translate-y-[6px] bg-primary"
          }`}
      />
    </div>
  </Button>
);

const MenuItem = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => (
  <li>
    <Link
      href={href}
      className="text-[24px] font-montserrat font-medium text-background transition-colors duration-300 inline-block py-1"
    >
      {children}
    </Link>
  </li>
);

const FullscreenMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <MenuButton isOpen={isOpen} toggle={toggle} />

      <div
        className={`fixed inset-0 bg-primary z-40 transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="container h-full flex flex-col">
          {/* Large MENU text - adjusted position */}
          <h1 className="text-[260px] font-extrabold text-background leading-none mt-60 -ml-40">
            MENU
          </h1>

          {/* Navigation items - adjusted position */}
          <nav className="flex-1 flex items-center">
            <ul className="space-y-0 -mt-40 ml-72">
              <MenuItem href="/">Home</MenuItem>
              <MenuItem href="/about">About</MenuItem>
              <MenuItem href="/features">Features</MenuItem>
              <MenuItem href="/contact">Contact Us</MenuItem>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default FullscreenMenu;
