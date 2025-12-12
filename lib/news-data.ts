export interface NewsItem {
    id: string;
    title: string;
    description: string;
    category: string;
    date: string;
    imageUrl: string;
    content: string[]; // Array of paragraphs for the full article
}

export const MOCK_NEWS: NewsItem[] = [
    {
        id: "1",
        title: "2BM LAUNCHES WEBSITE",
        description: "A public launch showcasing the label's catalog initiatives and global vision.",
        category: "Innovation",
        date: "2025-12-05",
        imageUrl: "/launch_image.png",
        content: [
            "Two Biquitous Music (2BM) is proud to announce the launch of its official website, marking a significant milestone in the label's expansion. The new digital platform serves as a central hub for the label's growing roster of artists, catalog initiatives, and global vision.",
            "As 2BM continues to grow, the website will evolve to include artist content, merchandise, and direct-to-fan experiences. This launch is just the beginning of a new chapter for 2BM."
        ]
    },
    {
        id: "2",
        title: "2BM: SEHAJ ANNOUNCES NEW SINGLE 'CONCRETE VINYL'",
        description: "Rising artist, Sehaj, announces latest project release for January 2026.",
        category: "Recorded Music",
        date: "2025-12-04",
        imageUrl: "/cv rollout.png",
        content: [
            "Sehaj is set to release new music with the announcement of his upcoming single, 'Concrete Vinyl', slated for release in January 2026. This new track promises to be a bold evolution of his sound, blending R&B elements with jazz-influenced melodies.",
            "This release marks a milestone for Two Biquitous Music as the first official addition to the label's catalog. 'Concrete Vinyl' represents the beginning of 2BM's journey in bringing innovative, genre-defying music to audiences and charts worldwide.",
            "Following his previous releases, Sehaj is exploring new production techniques and lyrical themes.",
            "'Concrete Vinyl' will be available on all major streaming platforms this January."
        ]
    },
    {
        id: "3",
        title: "2BM TAKES INITIATIVE WITH SYNC",
        description: "Stepping into the world of film and television, 2BM is growing its sync catalog.",
        category: "Recorded Music",
        date: "2025-11-10",
        imageUrl: "/sync.png",
        content: [
            "Two Biquitous Music (2BM) is making a strategic move into the world of film and television licensing with the expansion of its sync catalog. Recognizing the growing demand for high-quality, diverse music in visual media, the label is curating a specialized library tailored for music supervisors and content creators.",
            "The initiative aims to not only bridge the gap between music and major media productions, but also to seamlessly incorporate global instruments and cultures in mainstream media. By actively developing its catalog for placement in movies, TV shows, commercials, and video games, 2BM is opening up new revenue streams and exposure opportunities for its talent.",
            "The expanded catalog is an ongoing effort, expected to continue growing connect with audiences for years to come. Streamlining its licensing process, the label is also making it easier for supervisors to clear tracks quickly and efficiently.",
            "Working with producers and composers across the globe, 2BM is committed to curating a diverse and innovative catalog that reflects the global music industry.",
            "This initiative underscores the label's commitment to maximizing the potential of its artists' work in an ever-evolving industry landscape."
        ]
    },
    {
        id: "4",
        title: "LADY BABYLON'S RECORDING SESSIONS IN SLIDE STUDIOS BROOKLYN",
        description: "Rising artist, Lady Babylon, records new music in Brooklyn, NY.",
        category: "Recorded Music",
        date: "2025-11-15",
        imageUrl: "/lady babylon.jpeg",
        content: [
            "Lady Babylon has spent some time at the legendary Slide Studios in Brooklyn, NY, deep in recording sessions for her highly anticipated debut project. Known for her ethereal vocals and poetic lyricism, the artist is working on a concept project that pushes the boundaries of her genre.",
            "Slide Studios, famous for hosting multiple influential indie acts in the last few years, provides the perfect foundation for Lady Babylon's creative process.",
            "The sessions were described as 'electric' and 'intense.' Capturing live instrumentation, and experimenting with tape loops, Lady Babylon is creating something special.",
            "Fans can expect a lead single early next year, with the full project to follow. These Brooklyn sessions mark a pivotal moment in Lady Babylon's career, as she refines her artistic identity under 2BM."
        ]
    },
];
