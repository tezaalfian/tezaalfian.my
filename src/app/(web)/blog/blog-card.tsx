import { Badge } from "@/components/ui/badge"
import { formatDistance } from "date-fns"
import Image from "next/image"
import Link from "next/link"

export default function BlogCard({
    blog: { title, publishedAt, summary, image, slug }
}: {
    blog: {
        title: string
        publishedAt: Date
        summary: string
        image: string
        slug: string
    }
}) {
    return (
        <Link className="hover:bg-primary/5 p-4 -mx-4 rounded-md" href={`/blog/${slug}`}>
            <div className="aspect-video overflow-hidden rounded shadow mb-3 relative">
                <Badge variant="secondary" className="mb-2 absolute top-2 right-2 bg-secondary/70">{formatDistance(publishedAt, new Date(), { addSuffix: true })}</Badge>
                <Image
                    src={image}
                    alt={title}
                    sizes="100vw"
                    width={500}
                    placeholder="blur"
                    blurDataURL="/images/fallback.png"
                    className="object-cover"
                    height={300}
                />
            </div>
            <h4 className="font-semibold mb-1">{title}</h4>
            <p className="text-muted-foreground text-sm mb-2 line-clamp-2">{summary}</p>
        </Link>
    )
}