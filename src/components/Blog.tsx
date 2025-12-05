import { getAllContent } from "@/lib/api";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Blog() {
    const posts = getAllContent("blog", [
        "title",
        "date",
        "excerpt",
        "coverImage",
        "slug",
    ]);

    return (
        <section id="blog" className="py-20 bg-secondary/30">
            <div className="container mx-auto px-6">
                <div className="flex justify-between items-end mb-16">
                    <div>
                        <h2 className="text-accent font-medium tracking-widest mb-2 uppercase">
                            Thoughts
                        </h2>
                        <h3 className="text-3xl md:text-4xl font-bold text-white">
                            Latest Articles
                        </h3>
                    </div>
                    <Link
                        href="#"
                        className="hidden md:flex items-center gap-2 text-accent hover:text-white transition-colors"
                    >
                        View all posts <ArrowRight size={16} />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {posts.map((post, index) => (
                        <article
                            key={index}
                            className="flex flex-col md:flex-row gap-6 items-start group"
                        >
                            <div className="w-full md:w-48 h-32 bg-slate-800 rounded-lg overflow-hidden shrink-0 relative">
                                {post.coverImage ? (
                                    <Image
                                        src={post.coverImage as string}
                                        alt={post.title as string}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                ) : (
                                    <div className="absolute inset-0 flex items-center justify-center text-slate-600 bg-slate-900">
                                        <span className="text-xs text-center px-2">No Image</span>
                                    </div>
                                )}
                            </div>

                            <div>
                                <div className="flex items-center gap-3 text-sm text-slate-500 mb-2">
                                    <span>{post.date}</span>
                                    <span className="w-1 h-1 bg-slate-500 rounded-full" />
                                    <span>Blog</span>
                                </div>

                                <h4 className="text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
                                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                                </h4>

                                <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-2">
                                    {post.excerpt}
                                </p>

                                <Link
                                    href={`/blog/${post.slug}`}
                                    className="inline-flex items-center gap-1 text-sm text-accent font-medium hover:gap-2 transition-all"
                                >
                                    Read more <ArrowRight size={14} />
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="mt-10 md:hidden text-center">
                    <Link
                        href="#"
                        className="inline-flex items-center gap-2 text-accent hover:text-white transition-colors"
                    >
                        View all posts <ArrowRight size={16} />
                    </Link>
                </div>
            </div>
        </section>
    );
}
