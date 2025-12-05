import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDirectory = path.join(process.cwd(), "content");

export function getSlugs(type: "blog" | "showcase") {
    const dir = path.join(contentDirectory, type);
    if (!fs.existsSync(dir)) return [];
    return fs.readdirSync(dir);
}

export function getContentBySlug(type: "blog" | "showcase", slug: string, fields: string[] = []) {
    const realSlug = slug.replace(/\.md$/, "");
    const fullPath = path.join(contentDirectory, type, `${realSlug}.md`);

    if (!fs.existsSync(fullPath)) return null;

    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    type Items = {
        [key: string]: string;
    };

    const items: Items = {};

    // Ensure only the minimal needed data is exposed
    fields.forEach((field) => {
        if (field === "slug") {
            items[field] = realSlug;
        }
        if (field === "content") {
            items[field] = content;
        }

        if (typeof data[field] !== "undefined") {
            items[field] = data[field];
        }
    });

    return items;
}

export function getAllContent(type: "blog" | "showcase", fields: string[] = []) {
    const slugs = getSlugs(type);
    const content = slugs
        .map((slug) => getContentBySlug(type, slug, fields))
        .filter((item): item is Record<string, string> => item !== null)
        // sort posts by date in descending order
        .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
    return content;
}
