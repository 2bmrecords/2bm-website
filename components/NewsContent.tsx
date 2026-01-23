"use client";

import Link from "next/link";

interface NewsContentProps {
    paragraphs: string[];
}

export default function NewsContent({ paragraphs }: NewsContentProps) {
    const renderParagraph = (text: string) => {
        // Create clickable links for Spotify and Apple Music
        const parts = text.split(/(Spotify|Apple Music)/g);
        
        return parts.map((part, index) => {
            if (part === "Spotify") {
                return (
                    <a
                        key={index}
                        href="https://open.spotify.com/search/concrete%20vinyl"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-brand-blue hover:underline transition-colors cursor-pointer"
                    >
                        {part}
                    </a>
                );
            }
            if (part === "Apple Music") {
                return (
                    <a
                        key={index}
                        href="https://music.apple.com/search?term=concrete%20vinyl"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-brand-blue hover:underline transition-colors cursor-pointer"
                    >
                        {part}
                    </a>
                );
            }
            return part;
        });
    };

    return (
        <div className="prose prose-lg max-w-none prose-neutral">
            {paragraphs.map((paragraph, index) => (
                <p key={index} className="mb-6 text-lg leading-relaxed text-neutral-800">
                    {renderParagraph(paragraph)}
                </p>
            ))}
        </div>
    );
}
