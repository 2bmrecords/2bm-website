import { MOCK_NEWS } from "@/lib/news-data";
import FadeIn from "@/components/FadeIn";
import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

interface NewsDetailPageProps {
    params: {
        id: string;
    };
}

export function generateStaticParams() {
    return MOCK_NEWS.map((item) => ({
        id: item.id,
    }));
}

export default function NewsDetailPage({ params }: NewsDetailPageProps) {
    const newsItem = MOCK_NEWS.find((item) => item.id === params.id);

    if (!newsItem) {
        notFound();
    }

    return (
        <main className="min-h-screen text-black">
            <div className="max-w-4xl mx-auto px-6 md:px-12 py-12 md:py-20">
                <FadeIn direction="down">
                    <Link
                        href="/news"
                        className="inline-flex items-center text-neutral-500 hover:text-black transition-colors mb-8 group"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                        Back to News
                    </Link>
                </FadeIn>

                <article>
                    <FadeIn className="mb-8" delay={0.1}>
                        <div className="flex items-center gap-4 text-sm text-neutral-500 mb-4">
                            <span className="uppercase tracking-wider font-medium text-black">
                                {newsItem.category}
                            </span>
                            <span>•</span>
                            <time dateTime={newsItem.date}>
                                {new Date(newsItem.date).toLocaleDateString("en-US", {
                                    month: "long",
                                    day: "numeric",
                                    year: "numeric",
                                })}
                            </time>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight mb-6">
                            {newsItem.title}
                        </h1>
                    </FadeIn>

                    <FadeIn className="mb-12" delay={0.2}>
                        <div className="relative aspect-video w-full overflow-hidden rounded-sm bg-neutral-100">
                            <Image
                                src={newsItem.imageUrl}
                                alt={newsItem.title}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.3}>
                        <div className="prose prose-lg max-w-none prose-neutral">
                            {newsItem.content.map((paragraph, index) => (
                                <p key={index} className="mb-6 text-lg leading-relaxed text-neutral-800">
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    </FadeIn>
                </article>
            </div>
        </main>
    );
}
