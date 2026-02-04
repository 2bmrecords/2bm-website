const { Jimp } = require('jimp');

async function processImage(inputPath, outputPath) {
    try {
        const image = await Jimp.read(inputPath);

        // We want to fit within 1024x1024
        const TARGET_SIZE = 1024;
        const width = image.bitmap.width;
        const height = image.bitmap.height;

        // Scale factor to fit within the target size
        // Use 75% of the target size for the actual logo to add breathing room
        // This prevents the logo from looking condensed in small browser tabs
        const CONTENT_SIZE = TARGET_SIZE * 0.75;

        let scale = Math.min(CONTENT_SIZE / width, CONTENT_SIZE / height);

        // Resize the image
        image.scale(scale); // Scale preserves aspect ratio

        const newWidth = image.bitmap.width;
        const newHeight = image.bitmap.height;

        // Create canvas
        // new Jimp({ width, height, color }) for v1.6.0
        // 0x00000000 is fully transparent black
        const canvas = new Jimp({ width: TARGET_SIZE, height: TARGET_SIZE, color: 0x00000000 });

        // Composite
        const x = (TARGET_SIZE - newWidth) / 2;
        const y = (TARGET_SIZE - newHeight) / 2;

        canvas.composite(image, x, y);

        await canvas.write(outputPath);
        console.log(`Generated ${outputPath}`);
    } catch (err) {
        console.error(`Error processing ${inputPath}:`, err);
        process.exit(1);
    }
}

async function main() {
    console.log('Generating favicons...');
    // Light Mode -> Needs Dark Logo (2BM_black_transparent.png)
    // This will appear on light backgrounds.
    await processImage('public/2BM_black_transparent.png', 'public/favicon-square-light.png');

    // Dark Mode -> Needs White Logo (2BM_white_transparent.png)
    // This will appear on dark backgrounds.
    await processImage('public/2BM_white_transparent.png', 'public/favicon-square-dark.png');
    console.log('Done.');
}

main();
