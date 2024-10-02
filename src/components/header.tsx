'use client';

import ToggleTheme from "./toggle-theme";
import { cn } from "@/lib/utils";
import NavBar from "./navbar";
import { useEffect, useState } from "react";

export default function Header() {
    const [isScrollingUp, setIsScrollingUp] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY < lastScrollY) {
                setIsScrollingUp(true);
            } else {
                setIsScrollingUp(false);
            }
            setLastScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScrollY]);

    return (
        <header className={cn("border-t-4 border-t-primary shadow z-10 bg-background transition-all", isScrollingUp ? "sticky top-0" : "-translate-y-full")}>
            <div className="max-w-screen-lg flex justify-between py-3 px-4 mx-auto items-center">
                <NavBar />
                <ToggleTheme />
            </div>
        </header>
    );
}