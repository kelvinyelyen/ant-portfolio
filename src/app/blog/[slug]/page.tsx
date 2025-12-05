import { getContentBySlug, getAllContent } from "@/lib/api";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";

export default async function BlogPost({ params }: { params: { slug: string } }) {
    const post = getContentBySlug("blog", params.slug, [
        "title",
        "date",
        "slug",
        "author",
        "content",
        "coverImage",
    ]);

    if (!post) {
        return (
            <div className="min-h-screen bg-primary flex items-center justify-center text-white">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">404</h1>
                    <p className="mb-8">Post not found</p>
                    <Link href="/" className="text-accent hover:underline">Return Home</Link>
                </div>
            </div>
        )
    }

    return (
        <main className="min-h-screen bg-primary text-white selection:bg-accent selection:text-primary">
            <Navbar />

            <article className="pt-32 pb-20">
                <div className="container mx-auto px-6 max-w-4xl">
                    <Link
                        href="/#blog"
                        className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-8"
                    >
                        <ArrowLeft size={20} /> Back to Blog
                    </Link>

                    <header className="mb-12">
                        <div className="flex items-center gap-4 text-sm text-slate-400 mb-6">
                            <span>{post.date}</span>
                            <span className="w-1 h-1 bg-slate-500 rounded-full" />
                            <span>{(post.author as any).name}</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
                            {post.title}
                        </h1>
                        {post.coverImage && (
                            <div className="relative w-full h-[400px] bg-slate-800 rounded-2xl overflow-hidden mb-12 shadow-2xl">
                                <Image
                                    src={post.coverImage}
                                    alt={post.title}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        )}
                    </header>

                    <div className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-a:text-accent prose-strong:text-white">
                        <ReactMarkdown>{post.content}</ReactMarkdown>
                    </div>
                </div>
            </article>

            <Contact />
        </main>
    );
}

export async function generateStaticParams() {
    const posts = getAllContent("blog", ["slug"]);

    return posts.map((post) => ({
        slug: post.slug,
    }));
}
