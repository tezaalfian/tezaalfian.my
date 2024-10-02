import Link from 'next/link';
import Image from 'next/image';
import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote/rsc';
import { ImageProps } from 'next/image';
import { highlight } from 'sugar-high';
import React, { ReactNode } from 'react';

// Define types for the Table component
interface TableProps {
    data: {
        headers: string[];
        rows: string[][];
    };
}

function Table({ data }: TableProps) {
    const headers = data.headers.map((header, index) => (
        <th key={index}>{header}</th>
    ));
    const rows = data.rows.map((row, index) => (
        <tr key={index}>
            {row.map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
            ))}
        </tr>
    ));

    return (
        <table>
            <thead>
                <tr>{headers}</tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
    );
}

// Define types for CustomLink props
interface CustomLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    href: string;
}

function CustomLink({ href, ...props }: CustomLinkProps) {
    if (href.startsWith('/')) {
        return (
            <Link href={href} {...props}>
                {props.children}
            </Link>
        );
    }

    if (href.startsWith('#')) {
        return <a {...props} />;
    }

    return <a target="_blank" rel="noopener noreferrer" {...props} />;
}


function RoundedImage({ alt, ...props }: ImageProps) {
    return <Image alt={alt} className="rounded-lg" {...props} />;
}

// Define types for Code props
interface CodeProps extends React.HTMLAttributes<HTMLElement> {
    children: string;
}

function Code({ children, ...props }: CodeProps) {
    const codeHTML = highlight(children);
    return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
}

// Utility function to slugify text
function slugify(str: string): string {
    return str
        .toString()
        .toLowerCase()
        .trim()
        .replace(/\s+/g, '-') // Replace spaces with -
        .replace(/&/g, '-and-') // Replace & with 'and'
        .replace(/[^\w\-]+/g, '') // Remove all non-word characters except for -
        .replace(/\-\-+/g, '-'); // Replace multiple - with single -
}

// Create headings with slugified ids
function createHeading(level: number) {
    const Heading = ({ children }: { children: ReactNode }) => {
        const slug = slugify(children?.toString() || '');
        return React.createElement(
            `h${level}`,
            { id: slug },
            [
                React.createElement('a', {
                    href: `#${slug}`,
                    key: `link-${slug}`,
                    className: 'anchor',
                }),
            ],
            children
        );
    };

    Heading.displayName = `Heading${level}`;

    return Heading;
}

const components = {
    h1: createHeading(1),
    h2: createHeading(2),
    h3: createHeading(3),
    h4: createHeading(4),
    h5: createHeading(5),
    h6: createHeading(6),
    Image: RoundedImage,
    a: CustomLink,
    code: Code,
    Table,
};

// Define types for CustomMDX props

export function CustomMDX(props: MDXRemoteProps) {
    return (
        <MDXRemote
            {...props}
            // @ts-expect-error - We need to merge the components prop
            components={{ ...components, ...(props.components || {}) }}
        />
    );
}
