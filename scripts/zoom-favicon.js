const fs = require('fs');
const { createCanvas, loadImage } = require('canvas');

async function zoomFavicon() {
    try {
        // Load the original favicon
        const image = await loadImage('public/real favicon.png');

        // The image is 1563x1563, we'll crop it to zoom in on the logo
        // Assuming the logo is centered, we'll crop to remove excess whitespace
        // This will make the logo appear larger in the favicon

        const cropPercent = 0.35; // Remove 35% from each side to zoom in
        const cropAmount = Math.floor(image.width * cropPercent);

        const newSize = image.width - (cropAmount * 2);

        // Create canvas with the new size
        const canvas = createCanvas(newSize, newSize);
        const ctx = canvas.getContext('2d');

        // Draw the cropped portion (zoomed in)
        ctx.drawImage(
            image,
            cropAmount, cropAmount, // Source x, y
            newSize, newSize,        // Source width, height
            0, 0,                    // Destination x, y
            newSize, newSize         // Destination width, height
        );

        // Save the zoomed favicon
        const buffer = canvas.toBuffer('image/png');
        fs.writeFileSync('public/real favicon.png', buffer);

        console.log('✓ Zoomed favicon created successfully');
        console.log(`  Original size: ${image.width}x${image.height}`);
        console.log(`  New size: ${newSize}x${newSize}`);
        console.log(`  Zoom factor: ${(image.width / newSize).toFixed(2)}x`);

    } catch (err) {
        console.error('Error creating zoomed favicon:', err);
        process.exit(1);
    }
}

zoomFavicon();
