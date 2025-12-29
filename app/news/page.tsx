"use client";

import { useState, useMemo } from "react";
import NewsFilter from "@/components/NewsFilter";
import NewsGrid from "@/components/NewsGrid";
import FeaturedNews from "@/components/FeaturedNews";
import FadeIn from "@/components/FadeIn";
import { MOCK_NEWS } from "@/lib/news-data";

const CATEGORIES = [
  "Featured",
  "In the News",
  "Innovation",
  "Recorded Music",
  "Community",
];

export default function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<"newest" | "oldest">("newest");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredNews = useMemo(() => {
    let result = [...MOCK_NEWS];

    // Filter by category
    if (selectedCategory) {
      result = result.filter((item) => item.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (item) =>
          item.title.toLowerCase().includes(query) ||
          item.description.toLowerCase().includes(query)
      );
    }

    // Sort
    result.sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return sortOrder === "newest" ? dateB - dateA : dateA - dateB;
    });

    return result;
  }, [selectedCategory, sortOrder, searchQuery]);

  // Determine if we should show the featured section
  // We show it only if there is no search query and no category selected (default view)
  const showFeatured = !selectedCategory && !searchQuery && filteredNews.length > 0;
  const featuredItem = showFeatured ? filteredNews[0] : null;
  const gridItems = showFeatured ? filteredNews.slice(1) : filteredNews;

  return (
    <main className="min-h-screen text-black">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-20">

        {/* Header */}
        <FadeIn className="mb-12 md:mb-20" direction="down">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">NEWS</h1>
          <p className="text-xl text-neutral-600 max-w-2xl">
            The latest updates, press releases, and stories from the 2BM family.
          </p>
        </FadeIn>

        {/* Featured Section */}
        {featuredItem && (
          <FadeIn delay={0.2}>
            <FeaturedNews item={featuredItem} />
          </FadeIn>
        )}

        {/* Filters */}
        <FadeIn delay={0.3} direction="none">
          <NewsFilter
            categories={CATEGORIES}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
            sortOrder={sortOrder}
            onSortChange={setSortOrder}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
          />
        </FadeIn>

        {/* Grid */}
        <NewsGrid items={gridItems} />
      </div>
    </main>
  );
}


