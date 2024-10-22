import { Navbar, NavbarContent, NavbarBrand, Input } from "@nextui-org/react";
import { Search } from "lucide-react";
import Image from "next/image";
import ThemeSwitcher from "./themeSwitcher";

const NavBarComponent = () => {
  return (
    <Navbar isBordered>
      <NavbarContent justify="start" className="w-full">
        <NavbarBrand>
          <Image src={"/logo.webp"} alt="" width={200} height={200}></Image>
          {/* <p className="hidden text-2xl sm:block font-bold text-inherit">
            Analytics
          </p> */}
        </NavbarBrand>
        <div className="flex-grow flex justify-center">
          <div className="flex items-center justify-center w-full max-w-[500px]">
            <Input
              classNames={{
                base: "w-full h-12", // Increased width and height
                mainWrapper: "h-full",
                input: "text-medium", // Adjusted text size
                inputWrapper:
                  "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
              }}
              placeholder="Type to search..."
              size="lg" // Adjusted size
              startContent={<Search size={20} />} // Adjusted icon size
              type="search"
            />
          </div>
        </div>
        <div>
          <ThemeSwitcher></ThemeSwitcher>
        </div>
      </NavbarContent>
    </Navbar>
  );
};

export default NavBarComponent;
