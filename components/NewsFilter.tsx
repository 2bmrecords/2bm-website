"use client";

import { useState } from "react";

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
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-6 mb-12 border-b border-neutral-200 pb-6">
            {/* Categories (Horizontal Scroll) */}
            <div className="w-full md:w-auto overflow-x-auto pb-2 md:pb-0 no-scrollbar">
                <div className="flex items-center gap-3">
                    <button
                        onClick={() => onSelectCategory(null)}
                        className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${selectedCategory === null
                                ? "bg-black text-white border-black"
                                : "bg-white text-neutral-600 border-neutral-200 hover:border-neutral-400"
                            }`}
                    >
                        All News
                    </button>
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => onSelectCategory(category)}
                            className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${selectedCategory === category
                                    ? "bg-black text-white border-black"
                                    : "bg-white text-neutral-600 border-neutral-200 hover:border-neutral-400"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>

            {/* Controls (Search & Sort) */}
            <div className="flex items-center gap-4 w-full md:w-auto">
                {/* Search */}
                <div className="relative flex-grow md:flex-grow-0 md:w-64">
                    <input
                        type="text"
                        placeholder="Search news..."
                        value={searchQuery}
                        onChange={(e) => onSearchChange(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 rounded-full border border-neutral-200 focus:border-black focus:outline-none text-sm transition-colors"
                    />
                    <svg
                        className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400"
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
                <select
                    value={sortOrder}
                    onChange={(e) => onSortChange(e.target.value as "newest" | "oldest")}
                    className="px-4 py-2 rounded-full border border-neutral-200 bg-white text-sm font-medium focus:outline-none focus:border-black cursor-pointer hover:border-neutral-400 transition-colors appearance-none"
                    style={{ backgroundImage: 'none' }} // Remove default arrow if we want custom, but native is fine for now
                >
                    <option value="newest">Newest</option>
                    <option value="oldest">Oldest</option>
                </select>
            </div>
        </div>
    );
}
