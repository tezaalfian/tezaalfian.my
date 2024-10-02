import fs from 'fs'
import path from 'path'

export type Metadata = {
    title: string
    publishedAt: Date
    summary: string
    image: string
}

function parseFrontmatter(fileContent: string) {
    const frontmatterRegex = /---\s*([\s\S]*?)\s*---/
    const match = frontmatterRegex.exec(fileContent)
    const frontMatterBlock = match![1]
    const content = fileContent.replace(frontmatterRegex, '').trim()
    const frontMatterLines = frontMatterBlock.trim().split('\n')
    const metadata: Partial<Metadata> = {}

    frontMatterLines.forEach((line) => {
        const [key, ...valueArr] = line.split(': ')
        let value = valueArr.join(': ').trim()
        value = value.replace(/^['"](.*)['"]$/, '$1') // Remove quotes
        const keyMetadata = key.trim() as keyof Metadata;
        if (keyMetadata === 'publishedAt') {
            metadata[keyMetadata] = new Date(value)
        } else {
            metadata[keyMetadata] = value
        }
    })

    return { metadata: metadata as Metadata, content }
}

function getMDXFiles(dir: string) {
    return fs.readdirSync(dir).filter((file) => path.extname(file) === '.mdx')
}

function readMDXFile(filePath: string) {
    if (!fs.existsSync(filePath)) {
        return null;
    }

    // Ensure the file is an MDX file (or expected type)
    if (path.extname(filePath) !== '.mdx') {
        return null;
    }
    const rawContent = fs.readFileSync(filePath, 'utf-8')
    return parseFrontmatter(rawContent)
}

function getMDXData(dir: string) {
    const mdxFiles = getMDXFiles(dir)
    const result: { slug: string; metadata: Metadata }[] = [];
    mdxFiles.forEach((file) => {
        const data = readMDXFile(path.join(dir, file))
        if (data) {
            const slug = path.basename(file, path.extname(file))
            result.push({ slug, metadata: data.metadata })
        }
    });
    return result;
}

export function getBlogPosts() {
    return getMDXData(path.join(process.cwd(), 'src', 'blogs'));
}

export function getBlogPost(slug: string) {
    return readMDXFile(path.join(process.cwd(), 'src', 'blogs', `${slug}.mdx`))
}