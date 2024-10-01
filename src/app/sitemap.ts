import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const routes = ["", "/work", "/project", "/blog", "/contact"].map((route) => ({
        url: `https://tezaalfian.my.id${route}`,
        lastModified: new Date().toISOString().split("T")[0],
    }));
    return [...routes];
}