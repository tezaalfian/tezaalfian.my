import Footer from "@/components/footer";
import Header from "@/components/header";

export default function Layout({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <>
            <Header />
            <main className="py-8 px-4 max-w-screen-lg mx-auto min-h-[calc(100vh-134px)]">
                {children}
            </main>
            <Footer />
        </>
    );
}