/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'res.cloudinary.com',
                protocol: 'https',
            }
        ]
    },
    transpilePackages: ['next-mdx-remote'],
};

export default nextConfig;
