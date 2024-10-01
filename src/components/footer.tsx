export default function Footer() {
    const year = new Date().getFullYear();
    return <footer className="self-end flex justify-center py-5 w-full text-muted-foreground">
        © {year} Teza Alfian. All Rights Reserved.
    </footer>
}