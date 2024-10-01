import { Badge } from "@/components/ui/badge"
import { Project } from "@/lib/api"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"

export default function ProjectCard({
    data,
    fullContent = false
}: {
    data: Project,
    fullContent?: boolean
}) {
    return (
        <Link className="hover:bg-primary/5 p-4 -mx-4 rounded-md" href={data.link ? data.link : '#'} target={data.link ? "_blank" : "_self"}>
            <div className="aspect-video overflow-hidden rounded shadow mb-3 relative">
                <Badge variant="secondary" className="mb-2 absolute top-2 right-2">{data.year}</Badge>
                <Image
                    src={data.imageUrl ?? '/images/fallback.png'}
                    alt={data.title}
                    sizes="100vw"
                    width={500}
                    placeholder="blur"
                    blurDataURL="/images/fallback.png"
                    className="object-cover"
                    height={300}
                />
            </div>
            <h4 className="font-semibold mb-1">{data.title}</h4>
            <p className={cn("text-muted-foreground text-sm mb-2", !fullContent && 'line-clamp-2')}>{data.description}</p>
            {data.tag.map((tag, index) => (
                <Badge key={`tag-${index}`} variant="outline" className="mr-2 mt-2">{tag}</Badge>
            ))}
        </Link>
    )
}