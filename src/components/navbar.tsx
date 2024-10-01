'use client';

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menus = [
    { name: "Home", href: "/" },
    { name: "Work", href: "/work" },
    { name: "Project", href: "/project" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
];
export default function NavBar() {
    const pathname = usePathname();
    const segment = pathname.split("/")[1];
    return (
        <nav className="flex items-center gap-x-5">
            {menus.map((menu) => (
                <Link
                    className={cn(
                        "py-2 transition hover:text-primary",
                        menu.href === `/${segment}` && "text-primary/85"
                    )}
                    key={menu.name}
                    href={menu.href}>
                    {menu.name}
                </Link>
            ))}
        </nav>
    )
}