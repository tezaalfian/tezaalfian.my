import ToggleTheme from "./toggle-theme";
import { cn } from "@/lib/utils";
import NavBar from "./navbar";

export default function Header() {
    return (
        <header className={cn("border-t-4 border-t-primary shadow z-10 bg-background sticky top-0")}>
            <div className="max-w-screen-lg flex justify-between py-3 px-4 mx-auto items-center">
                <NavBar />
                <ToggleTheme />
            </div>
        </header>
    );
}