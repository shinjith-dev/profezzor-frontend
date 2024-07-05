"use client";
import React from "react";
// import { Sun, MoonStar } from "lucide-react";
import useDarkMode from "@/components/hooks/useDarkMode";
import { IconSun, IconMoon } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";

const ModeSwitch = () => {
  const { change, mode } = useDarkMode();

  const getIcon = () => {
    if (mode === "light") return <IconMoon size={20} className="text-subtle" />;
    return <IconSun size={20} className="text-subtle" />;
  };

  const getNextMode = () => {
    if (mode === "light") return "dark";
    return "light";
  };

  return (
    <Button size="icon" variant='ghost'
      title={`Switch to ${getNextMode()} mode`}
      onClick={() => change(mode === "light")}
      style={{
        transform: `rotate(${mode === "dark" ? "-180deg" : "0deg"})`,
      }}
      className="hover:shadow-spread-xs group rounded-full p-1 transition-all sm:p-2"
    >
      {getIcon()}
    </Button>
  );
};

export default ModeSwitch;
