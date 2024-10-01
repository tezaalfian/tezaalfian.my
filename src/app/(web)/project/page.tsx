import { getProjects } from "@/lib/api";
import ProjectCard from "../project-card";

export default async function Page() {
    const projects = await getProjects({ limit: "4" });
    return <section className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-x-8 gap-y-4">
        {projects.data.map((item) => (
            <ProjectCard key={item.id} data={item} fullContent={true} />
        ))}
    </section>
}