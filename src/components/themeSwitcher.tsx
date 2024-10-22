// app/components/ThemeSwitcher.tsx
"use client";

import { Button } from "@nextui-org/react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [icon, setIcon] = useState("Moon");

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

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
