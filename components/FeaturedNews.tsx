import Image from "next/image";
import Link from "next/link";
import { NewsItem } from "./NewsGrid";

interface FeaturedNewsProps {
    item: NewsItem;
}

export default function FeaturedNews({ item }: FeaturedNewsProps) {
    return (
        <section className="mb-20">
            <Link href={`/news/${item.id}`} className="group block">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                    {/* Image */}
                    <div className="relative aspect-[16/9] lg:aspect-[4/3] w-full overflow-hidden rounded-2xl">
                        <Image
                            src={item.imageUrl}
                            alt={item.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                            priority
                        />
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                    </div>

                    {/* Content */}
                    <div className="flex flex-col justify-center">
                        <div className="flex items-center gap-3 text-sm font-bold tracking-wider uppercase mb-4 text-brand-blue">
                            <span className="bg-brand-blue/10 px-3 py-1 rounded-full">{item.category}</span>
                            <span className="text-neutral-500">{new Date(item.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                        </div>

                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6 leading-tight group-hover:text-brand-blue transition-colors">
                            {item.title}
                        </h1>

                        <p className="text-lg text-neutral-600 leading-relaxed mb-8 max-w-xl">
                            {item.description}
                        </p>

                        <div className="flex items-center gap-2 text-black font-bold group-hover:translate-x-2 transition-transform duration-300">
                            READ FULL STORY
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                        </div>
                    </div>
                </div>
            </Link>
        </section>
    );
}
