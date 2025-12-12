import Link from 'next/link';
import Image from 'next/image';
import { groq } from 'next-sanity';
import { sanity } from '../../lib/sanity';
import FadeIn from "@/components/FadeIn";

// Define the Artist type based on the schema
interface Artist {
    _id: string;
    name: string;
    slug: { current: string };
    photo: any; // We'll use a helper or just basic image handling if needed, but for now 'any' or specific Sanity image type
    imageUrl?: string; // We might want to fetch the URL directly or use a builder
}

// Helper to get image URL (basic version, ideally use @sanity/image-url)
// For now, we'll assume we can get the URL via projection or use a placeholder if complex
const query = groq`*[_type == "artist"]{
  _id,
  name,
  slug,
  "imageUrl": photo.asset->url
}`;

export const revalidate = 60; // Revalidate every 60 seconds

export default async function ArtistsPage() {
    const artists: Artist[] = await sanity.fetch(query);

    return (
        <div className="min-h-screen bg-white pt-12 pb-24">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <FadeIn className="mb-16">
                    <h1 className="h1 mb-4">Roster</h1>
                    <p className="sub max-w-2xl">
                        The voices defining the next generation of sound.
                    </p>
                </FadeIn>

                {artists.length === 0 ? (
                    <div className="p-12 border border-dashed border-neutral-200 rounded-2xl text-center">
                        <p className="sub">No artists found. Add some in Sanity Studio!</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                        {artists.map((artist, index) => (
                            <FadeIn key={artist._id} delay={index * 0.1}>
                                <Link
                                    href={`/artists/${artist.slug.current}`}
                                    className="group block"
                                >
                                    <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-neutral-100 mb-6">
                                        {artist.imageUrl ? (
                                            <Image
                                                src={artist.imageUrl}
                                                alt={artist.name}
                                                fill
                                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                            />
                                        ) : (
                                            <div className="absolute inset-0 flex items-center justify-center text-neutral-400">
                                                No Image
                                            </div>
                                        )}
                                    </div>

                                    <h2 className="text-2xl font-semibold tracking-tight group-hover:text-brand-blue transition-colors">
                                        {artist.name}
                                    </h2>
                                </Link>
                            </FadeIn>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}