'use client';

import { useEffect } from 'react';

export default function DynamicFavicon() {
    useEffect(() => {
        // Function to update favicon based on color scheme
        const updateFavicon = () => {
            const favicon = document.querySelector('link[rel="icon"]') as HTMLLinkElement;

            if (favicon) {
                favicon.href = '/real favicon1.png';
            }
        };

        // Update on mount
        updateFavicon();

        // Listen for color scheme changes
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handler = () => updateFavicon();

        // Modern browsers
        if (mediaQuery.addEventListener) {
            mediaQuery.addEventListener('change', handler);
        } else {
            // Fallback for older browsers
            mediaQuery.addListener(handler);
        }

        return () => {
            if (mediaQuery.removeEventListener) {
                mediaQuery.removeEventListener('change', handler);
            } else {
                mediaQuery.removeListener(handler);
            }
        };
    }, []);

    return null;
}
