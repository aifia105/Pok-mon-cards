import { Navbar, NavbarContent, Input } from "@nextui-org/react";
import { Search } from "lucide-react";
import Image from "next/image";
import ThemeSwitcher from "./themeSwitcher";

const NavBarComponent = () => {
  return (
    <Navbar isBordered>
      <NavbarContent justify="start" className="w-full">
        <div className="flex items-center">
          <Image src={"/logo.webp"} alt="" width={200} height={200}></Image>
        </div>
        <div className="flex-grow flex justify-center">
          <div className="flex items-center justify-center w-full max-w-[500px]">
            <Input
              classNames={{
                base: "w-full h-12",
                mainWrapper: "h-full",
                input: "text-medium",
                inputWrapper:
                  "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
              }}
              placeholder="Type to search..."
              size="lg"
              startContent={<Search size={20} />}
              type="search"
            />
          </div>
        </div>
        <ThemeSwitcher></ThemeSwitcher>
      </NavbarContent>
    </Navbar>
  );
};

export default NavBarComponent;
