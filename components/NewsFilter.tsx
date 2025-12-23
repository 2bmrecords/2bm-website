"use client";

import { motion } from "framer-motion";

interface NewsFilterProps {
    categories: string[];
    selectedCategory: string | null;
    onSelectCategory: (category: string | null) => void;
    sortOrder: "newest" | "oldest";
    onSortChange: (order: "newest" | "oldest") => void;
    searchQuery: string;
    onSearchChange: (query: string) => void;
}

export default function NewsFilter({
    categories,
    selectedCategory,
    onSelectCategory,
    sortOrder,
    onSortChange,
    searchQuery,
    onSearchChange,
}: NewsFilterProps) {
    return (
        <div className="w-full flex flex-col md:flex-row items-end md:items-center justify-between gap-8 mb-16 border-b border-neutral-200 pb-0">
            {/* Categories (Tabs) */}
            <div className="w-full md:w-auto overflow-x-auto no-scrollbar">
                <div className="flex items-center gap-8 relative">
                    {/* ALL NEWS TAB */}
                    <button
                        onClick={() => onSelectCategory(null)}
                        className={`relative pb-4 text-sm font-bold uppercase tracking-wider transition-colors duration-300 ${selectedCategory === null ? "text-black" : "text-neutral-400 hover:text-black"
                            }`}
                    >
                        All News
                        {selectedCategory === null && (
                            <motion.div
                                layoutId="activeTab"
                                className="absolute bottom-0 left-0 right-0 h-0.5 bg-black"
                                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                            />
                        )}
                    </button>

                    {/* CATEGORY TABS */}
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => onSelectCategory(category)}
                            className={`relative pb-4 text-sm font-bold uppercase tracking-wider transition-colors duration-300 ${selectedCategory === category ? "text-black" : "text-neutral-400 hover:text-black"
                                }`}
                        >
                            {category}
                            {selectedCategory === category && (
                                <motion.div
                                    layoutId="activeTab"
                                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-black"
                                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                />
                            )}
                        </button>
                    ))}
                </div>
            </div>

            {/* Controls (Search & Sort) */}
            <div className="flex items-center gap-4 w-full md:w-auto pb-4">
                {/* Search */}
                <div className="relative flex-grow md:flex-grow-0 md:w-64">
                    <input
                        type="text"
                        placeholder="Search news..."
                        value={searchQuery}
                        onChange={(e) => onSearchChange(e.target.value)}
                        className="w-full pl-0 pr-4 py-2 border-b border-neutral-200 focus:border-black focus:outline-none text-sm transition-colors bg-transparent placeholder-neutral-400"
                    />
                    <svg
                        className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                    </svg>
                </div>

                {/* Sort Dropdown (Simple) */}
                <div className="relative">
                    <select
                        value={sortOrder}
                        onChange={(e) => onSortChange(e.target.value as "newest" | "oldest")}
                        className="pl-4 pr-8 py-2 border-none bg-transparent text-sm font-bold uppercase tracking-wider focus:outline-none cursor-pointer text-neutral-500 hover:text-black transition-colors appearance-none"
                    >
                        <option value="newest">Newest</option>
                        <option value="oldest">Oldest</option>
                    </select>
                    {/* Tiny custom arrow */}
                    <div className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2">
                        <svg className="w-3 h-3 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                    </div>
                </div>
            </div>
        </div>
    );
}
