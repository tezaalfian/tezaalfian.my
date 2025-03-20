import type { MetadataRoute } from 'next'

export const baseUrl = 'https://tezaalfian.my.id'

export default function sitemap(): MetadataRoute.Sitemap {
    const routes = ["", "/work", "/project", "/blog", "/contact"].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date().toISOString().split("T")[0],
    }));
    return routes;
}