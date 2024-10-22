// app/components/ThemeSwitcher.tsx
"use client";

import { Button } from "@nextui-org/react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useState } from "react";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const [icon, setIcon] = useState("Moon");

  const handleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    setIcon(theme === "light" ? "Sun" : "Moon");
  };

  return (
    <div>
      <Button isIconOnly color="default" onClick={handleTheme}>
        {icon === "Moon" ? <Moon /> : <Sun />}
      </Button>
    </div>
  );
};

export default ThemeSwitcher;
