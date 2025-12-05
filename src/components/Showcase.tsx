import { getAllContent } from "@/lib/api";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function Showcase() {
    const projects = getAllContent("showcase", [
        "title",
        "date",
        "description",
        "tags",
        "link",
        "image",
    ]);

    return (
        <section id="showcase" className="py-20 bg-primary">
            <div className="container mx-auto px-6">
                <div className="mb-16 text-center">
                    <h2 className="text-accent font-medium tracking-widest mb-2 uppercase">
                        Portfolio
                    </h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-white">
                        Selected Works
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="group relative bg-secondary/40 border border-white/5 rounded-2xl overflow-hidden hover:border-accent/50 transition-all duration-300 hover:-translate-y-1"
                        >
                            <div className="h-48 bg-slate-800 relative overflow-hidden">
                                {project.image ? (
                                    <Image
                                        src={project.image as string}
                                        alt={project.title as string || "Project Image"}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                ) : (
                                    <div className="absolute inset-0 flex items-center justify-center text-slate-600 bg-slate-900">
                                        Project Image
                                    </div>
                                )}
                            </div>

                            <div className="p-6">
                                <div className="flex justify-between items-start mb-4">
                                    <h4 className="text-xl font-bold text-white group-hover:text-accent transition-colors">
                                        {project.title}
                                    </h4>
                                    {project.link && (
                                        <Link
                                            href={project.link as string}
                                            target="_blank"
                                            className="text-slate-400 hover:text-white transition-colors"
                                        >
                                            <ArrowUpRight size={20} />
                                        </Link>
                                    )}
                                </div>

                                <p className="text-slate-400 text-sm mb-6 line-clamp-2">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {project.tags &&
                                        (project.tags as string[]).map((tag: string) => (
                                            <span
                                                key={tag}
                                                className="px-3 py-1 text-xs font-medium text-accent bg-accent/10 rounded-full"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
