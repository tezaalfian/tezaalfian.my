import { baseUrl } from "@/app/sitemap";
import { CustomMDX } from "@/components/mdx";
import { getBlogPost } from "@/lib/blog";
import { format, formatDistance } from "date-fns";
import Image from "next/image";
import { notFound } from "next/navigation";

export function generateMetadata({ params }: { params: { slug: string } }) {
    const blog = getBlogPost(params.slug);
    if (!blog) {
        return
    }

    const {
        title,
        publishedAt: publishedTime,
        summary: description,
        image,
    } = blog.metadata
    const ogImage = image
        ? image
        : `${baseUrl}/og?title=${encodeURIComponent(title)}`

    return {
        title: `${title} - Teza Alfian`,
        description,
        openGraph: {
            title: `${title} - Teza Alfian`,
            description,
            type: 'article',
            publishedTime,
            url: `${baseUrl}/blog/${params.slug}`,
            images: [
                {
                    url: ogImage,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: `${title} - Teza Alfian`,
            description,
            images: [ogImage],
        },
    }
}

export default function Page({ params }: { params: { slug: string } }) {
    const blog = getBlogPost(params.slug);
    if (!blog) {
        notFound();
    }
    const metadata = blog.metadata;
    return (
        <section className="max-w-screen-md mx-auto">
            <div className="grid gap-2 mb-12">
                <h1 className="text-3xl font-bold">{metadata.title}</h1>
                <p className="text-muted-foreground">
                    Written on {format(metadata.publishedAt, "MMMM dd, yyyy")} ({formatDistance(metadata.publishedAt, new Date(), { addSuffix: true })})
                </p>
                <Image
                    src={metadata.image}
                    alt={metadata.title}
                    width={1200}
                    placeholder="blur"
                    blurDataURL="/images/fallback.png"
                    className="object-cover rounded w-full sm:aspect-[3/1] aspect-video shadow"
                    height={(1200 * 2) / 5}
                />
            </div>
            <div className="prose dark:prose-invert max-w-none">
                <CustomMDX source={blog.content} />
            </div>
        </section>
    )
}