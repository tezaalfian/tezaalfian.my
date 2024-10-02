import { getBlogPosts } from "@/lib/blog";
import BlogCard from "./blog-card";

export default function Page() {
    const blogs = getBlogPosts();
    return (
        <section className="grid lg:grid-cols-3 gap-x-8 gap-y-4">
            {blogs.map((item) => (
                <BlogCard blog={{ ...item.metadata, slug: item.slug }} key={item.slug} />
            ))}
        </section>
    )
}