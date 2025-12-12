"use client";

import Image from "next/image";
import FadeIn from "./FadeIn";

const RELEASES = [
    {
        id: 1,
        artist: "LUNA ECLIPSE",
        title: "MIDNIGHT HORIZON",
        image: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=2070&auto=format&fit=crop",
    },
    {
        id: 2,
        artist: "THE VANGUARD",
        title: "FUTURE ECHOES",
        image: "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&w=2070&auto=format&fit=crop",
    },
    {
        id: 3,
        artist: "SOLARIS",
        title: "GOLDEN HOUR",
        image: "https://images.unsplash.com/photo-1459749411177-3c2ea1f61c10?q=80&w=2070&auto=format&fit=crop",
    },
    {
        id: 4,
        artist: "NEON WAVES",
        title: "SYNTHETIC DREAMS",
        image: "https://images.unsplash.com/photo-1514525253440-b393452e8d26?q=80&w=2070&auto=format&fit=crop",
    },
];

export default function LatestReleases() {
    return (
        <section className="py-24 bg-black text-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <FadeIn className="mb-16 flex items-end justify-between">
                    <div>
                        <h2 className="text-xs font-bold tracking-[0.2em] text-neutral-400 mb-4">
                            NEW ARRIVALS
                        </h2>
                        <h3 className="text-4xl md:text-6xl font-bold tracking-tighter">
                            LATEST RELEASES
                        </h3>
                    </div>
                    <button className="hidden md:block text-sm font-bold tracking-widest hover:text-brand-blue transition-colors">
                        VIEW ALL RELEASES
                    </button>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {RELEASES.map((release, index) => (
                        <FadeIn key={release.id} delay={index * 0.1}>
                            <div className="group cursor-pointer">
                                <div className="relative aspect-square overflow-hidden bg-neutral-900 mb-6">
                                    <Image
                                        src={release.image}
                                        alt={release.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                                    />
                                </div>
                                <h4 className="text-lg font-bold tracking-tight group-hover:text-brand-blue transition-colors">
                                    {release.title}
                                </h4>
                                <p className="text-sm text-neutral-400 tracking-wide">
                                    {release.artist}
                                </p>
                            </div>
                        </FadeIn>
                    ))}
                </div>

                <div className="mt-12 md:hidden text-center">
                    <button className="text-sm font-bold tracking-widest hover:text-brand-blue transition-colors">
                        VIEW ALL RELEASES
                    </button>
                </div>
            </div>
        </section>
    );
}
