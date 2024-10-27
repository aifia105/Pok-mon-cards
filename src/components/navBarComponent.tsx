"use client";
import { Navbar, NavbarContent } from "@nextui-org/react";
import Image from "next/image";
import ThemeSwitcher from "./themeSwitcher";
import NextLink from "next/link";

const NavBarComponent = () => {
  return (
    <Navbar className="z-40" isBordered>
      <NavbarContent justify="start" className="w-full">
        <div className="flex items-center cursor-pointer">
          <NextLink href="/" passHref legacyBehavior>
            <Image src={"/logo.webp"} alt="" width={200} height={200}></Image>
          </NextLink>
        </div>
        <div className="flex-grow flex justify-end">
          <ThemeSwitcher></ThemeSwitcher>
        </div>
      </NavbarContent>
    </Navbar>
  );
};

export default NavBarComponent;
