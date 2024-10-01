import Link from "next/link";
import ToggleTheme from "./toggle-theme";
import { cn } from "@/lib/utils";

const menus = [
    { name: "Home", href: "/" },
    { name: "Work", href: "/work" },
    { name: "Project", href: "/project" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
];

export default function Header() {
    return (
        <header className={cn("border-t-4 border-t-primary shadow z-10 bg-background sticky top-0")}>
            <div className="max-w-screen-lg flex justify-between py-3 px-4 mx-auto items-center">
                <nav className="flex items-center gap-x-5">
                    {menus.map((menu) => (
                        <Link className="py-2 transition hover:text-primary" key={menu.name} href={menu.href}>{menu.name}</Link>
                    ))}
                </nav>
                <ToggleTheme />
            </div>
        </header>
    );
}