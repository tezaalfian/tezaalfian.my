import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import React from "react";

const contacts = [
    {
        href: "https://x.com/tezaalfian",
        icon: <Twitter size={24} />,
    },
    {
        href: "https://www.linkedin.com/in/teza-alfian/",
        icon: <Linkedin size={24} />,
    },
    {
        href: "https://github.com/tezaalfian",
        icon: <Github size={24} />,
    },
]

export default function Contact() {
    return (
        <div className="flex gap-x-2">
            {contacts.map((item, index) => (
                <Button asChild size="icon" variant="ghost" key={`link-${index}`}>
                    <Link href={item.href} target="_blank">
                        {item.icon}
                    </Link>
                </Button>
            ))}
        </div>
    )
}