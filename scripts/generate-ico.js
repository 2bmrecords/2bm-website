const { Jimp } = require('jimp');

async function createIcoFavicon() {
    try {
        // For .ico files, we'll create a smaller version (32x32 is standard for favicons)
        // We'll use the dark logo as the default
        const image = await Jimp.read('public/logo.png');

        const ICO_SIZE = 32;
        const CONTENT_SIZE = ICO_SIZE * 0.75; // 75% for padding

        const width = image.bitmap.width;
        const height = image.bitmap.height;

        let scale = Math.min(CONTENT_SIZE / width, CONTENT_SIZE / height);
        image.scale(scale);

        const newWidth = image.bitmap.width;
        const newHeight = image.bitmap.height;

        // Create transparent canvas
        const canvas = new Jimp({ width: ICO_SIZE, height: ICO_SIZE, color: 0x00000000 });

        // Center the logo
        const x = (ICO_SIZE - newWidth) / 2;
        const y = (ICO_SIZE - newHeight) / 2;

        canvas.composite(image, x, y);

        // Save as PNG (browsers accept PNG as favicon.ico)
        await canvas.write('public/favicon.png');
        console.log('Generated public/favicon.png');
    } catch (err) {
        console.error('Error creating favicon.ico:', err);
        process.exit(1);
    }
}

createIcoFavicon();
