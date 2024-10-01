import { getProjects, getWorks } from "@/lib/api";
import Image from "next/image";
import Link from "next/link";
import ProjectCard from "./project-card";
import Contact from "./contact";

export default async function Page() {
    const works = await getWorks();
    const projects = await getProjects({ limit: "4" });
    return (
        <>
            <section className="max-w-xl mt-5 mb-16">
                <Image src="/me.svg" alt="Teza Alfian" width="72" height="72" className="mb-5" />
                <h1 className="text-4xl font-bold">Teza Alfian</h1>
                <h2 className="text-xl text-muted-foreground mb-5">Software Engineer</h2>
                <p className="text-muted-foreground mb-5">
                    I&apos;m a software engineer that&apos;s passionate about developing software solutions, focused more on web development.
                </p>
                <Contact />
            </section>
            <section className="lg:grid lg:grid-cols-5 lg:gap-8">
                <div className="mb-12 lg:order-2 col-span-2">
                    <h3 className="font-bold text-lg mb-5">Work Experience</h3>
                    {works.data.map((item) => (
                        <Link key={item.documentId} className="py-3 px-4 -mx-4 hover:bg-primary/5 rounded-md flex flex-col" href={`/work#${item.documentId}`}>
                            <div className="flex justify-between">
                                <h4>{item.title}</h4>
                                <p className="text-muted-foreground">{item.startDate} - {item.endDate}</p>
                            </div>
                            <p className="text-muted-foreground">{item.company}</p>
                        </Link>
                    ))}
                </div>
                <div className="col-span-3">
                    <h3 className="font-bold text-lg mb-5">Projects</h3>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-4">
                        {projects.data.map((item) => (
                            <ProjectCard key={item.id} data={item} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}