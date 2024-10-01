"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { MoonIcon, SunIcon } from "lucide-react";

export default function ToggleTheme() {
    const { theme, setTheme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <Button
            onClick={() => {
                setTheme(theme === "light" || resolvedTheme === "light" ? "dark" : "light");
            }}
            variant="outline"
            size="icon"
        >
            {theme === "dark" || resolvedTheme === "dark" ? <SunIcon size={16} /> : <MoonIcon size={16} />}
        </Button>
    );
}
