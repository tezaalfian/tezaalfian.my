import { z } from "zod";
import { API_URL } from "./env";

const workSchema = z.object({
    data: z.array(
        z.object({
            id: z.number(),
            documentId: z.string(),
            title: z.string(),
            company: z.string(),
            startDate: z.string().transform((date) => {
                const formattedDate = new Date(date);
                return formattedDate.toLocaleString("default", {
                    month: "short",
                    year: "numeric",
                });
            }),
            endDate: z.string().nullable().transform((date) => {
                if (date) {
                    const formattedDate = new Date(date);
                    return formattedDate.toLocaleString("default", {
                        month: "short",
                        year: "numeric",
                    });
                }
                return "Present";
            }),
            description: z.string(),
        })
    )
});

type Work = z.infer<typeof workSchema>;

export async function getWorks(): Promise<Work> {
    try {
        const res = await fetch(`${API_URL}2d5142e78a87f5d9269c56ad3ee3a0f4/raw/works.json`).then((res) => res.json());
        return workSchema.parse(res);
    } catch (error) {
        if (error instanceof z.ZodError) {
            return { data: [] };
        }
        return { data: [] };
    }
}
const projectSchema = z.object({
    id: z.number(),
    documentId: z.string(),
    title: z.string(),
    description: z.string(),
    tag: z.array(z.string()),
    year: z.string(),
    link: z.string().nullable(),
    imageUrl: z.string().nullable(),
});
const projectsSchema = z.object({
    data: z.array(
        projectSchema
    )
})

export type Project = z.infer<typeof projectSchema>;

export async function getProjects(): Promise<z.infer<typeof projectsSchema>> {
    try {
        const res = await fetch(`${API_URL}44a85b19302011814b07f2f1cb4dea15/raw/projects.json`).then((res) => res.json());
        return projectsSchema.parse(res);
    } catch (error) {
        if (error instanceof z.ZodError) {
            return { data: [] };
        }
        return { data: [] };
    }
}