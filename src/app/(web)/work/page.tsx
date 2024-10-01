import { getWorks } from "@/lib/api";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";

export default async function Page() {
    const works = await getWorks();

    return works.data.map((item) => (
        <div id={item.documentId} key={item.documentId} className="mb-8">
            <div className="flex justify-between">
                <h3 className="font-semibold">
                    <Link href={`#${item.documentId}`} className="anchor"></Link>
                    {item.title}
                </h3>
                <p className="text-muted-foreground">{item.startDate} - {item.endDate}</p>
            </div>
            <p className="text-muted-foreground mb-2">{item.company}</p>
            <article className="prose dark:prose-invert max-w-none">
                <MDXRemote source={item.description} />
            </article>
        </div>
    ))
}