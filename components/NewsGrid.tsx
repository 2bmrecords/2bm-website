import Image from "next/image";
import Link from "next/link";
import FadeIn from "./FadeIn";
import { useState } from "react";

export interface NewsItem {
    id: string;
    title: string;
    description: string;
    category: string;
    date: string; // ISO date string or formatted date
    imageUrl: string;
}

interface NewsGridProps {
    items: NewsItem[];
}

export default function NewsGrid({ items }: NewsGridProps) {
    if (items.length === 0) {
        return (
            <div className="w-full py-20 text-center text-neutral-500">
                <p>No news items found matching your criteria.</p>
            </div>
        );
    }

    const [showAll, setShowAll] = useState(false);
    const INITIAL_DISPLAY_COUNT = 3;

    // Only apply the limit if we haven't clicked "show all"
    const visibleItems = showAll ? items : items.slice(0, INITIAL_DISPLAY_COUNT);
    const hasMore = items.length > INITIAL_DISPLAY_COUNT;

    return (
        <div className="flex flex-col items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 font-sans w-full">
                {visibleItems.map((item, index) => (
                    <FadeIn key={item.id} delay={index * 0.1} className="h-full">
                        <Link href={`/news/${item.id}`} className="group cursor-pointer flex flex-col h-full transform transition-transform duration-300 hover:-translate-y-1">
                            <article className="flex flex-col h-full h-full bg-transparent">
                                <div className="relative aspect-[16/9] mb-6 overflow-hidden rounded-lg border border-neutral-100 shadow-sm group-hover:shadow-md transition-shadow">
                                    <Image
                                        src={item.imageUrl}
                                        alt={item.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    {/* Overlay for hover effect */}
                                    <div className="absolute inset-0 bg-brand-blue/0 group-hover:bg-brand-blue/10 transition-colors duration-300" />
                                </div>

                                <div className="flex flex-col flex-grow">
                                    <div className="flex items-center gap-2 text-xs font-bold tracking-wider uppercase mb-3 text-neutral-500">
                                        <span className="text-brand-blue">{item.category}</span>
                                        <span>•</span>
                                        <span>{new Date(item.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                                    </div>

                                    <h3 className="text-xl font-bold text-black mb-3 leading-tight group-hover:text-brand-blue transition-colors">
                                        {item.title}
                                    </h3>

                                    <p className="text-neutral-600 text-sm leading-relaxed line-clamp-3 mb-4 flex-grow">
                                        {item.description}
                                    </p>

                                    <div className="mt-auto pt-4 border-t border-neutral-100">
                                        <span className="text-sm font-bold text-black group-hover:text-brand-blue transition-colors flex items-center gap-2">
                                            Read More
                                            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                                        </span>
                                    </div>
                                </div>
                            </article>
                        </Link>
                    </FadeIn>
                ))}
            </div>

            {hasMore && !showAll && (
                <FadeIn delay={0.2} className="mt-16 text-center">
                    <button
                        onClick={() => setShowAll(true)}
                        className="group flex flex-col items-center gap-2 text-neutral-400 hover:text-black transition-colors"
                    >
                        <span className="text-sm font-bold tracking-widest uppercase">Show More</span>
                        <div className="p-3 rounded-full border border-neutral-200 group-hover:border-black transition-colors">
                            <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                            </svg>
                        </div>
                    </button>
                </FadeIn>
            )}
        </div>
    );
}
