import sharp from 'sharp';

const inputPath = '/Users/sushantpathak/.gemini/antigravity-ide/brain/760e2076-a800-493e-bda5-42aa1c3b9221/.user_uploaded/media_1793383443109.jpg';
const outputPath = '/Users/sushantpathak/Desktop/LIC WORK/public/images/advisor-sudip-pathak.jpg';
const originalCleanPath = '/Users/sushantpathak/Desktop/LIC WORK/public/images/advisor-sudip-pathak-original.jpg';

async function processPhoto() {
  const metadata = await sharp(inputPath).metadata();
  console.log('Input metadata:', metadata);

  // The original photo is 548x844.
  // The top white bar is from y=0 to y=35.
  // His head is roughly from y=70 to y=380, shoulders to y=650.
  // A clean square crop: width 520, height 520, left 14, top 45.
  
  // 1. Natural real crop - centered on face and shoulders, 100% authentic, zero AI hallucination
  await sharp(inputPath)
    .extract({ left: 14, top: 45, width: 520, height: 520 })
    .resize(600, 600, { fit: 'cover' })
    .modulate({
      brightness: 1.03, // subtle natural brightening
      saturation: 1.02  // natural skin tone
    })
    .sharpen({ sigma: 0.8, m1: 0.5, m2: 2 }) // crisp natural details
    .jpeg({ quality: 95 })
    .toFile(outputPath);

  console.log('Saved natural professional headshot to:', outputPath);

  // Also save a portrait aspect ratio version (4:5) for about section
  await sharp(inputPath)
    .extract({ left: 14, top: 40, width: 520, height: 650 })
    .resize(600, 750, { fit: 'cover' })
    .modulate({
      brightness: 1.03,
      saturation: 1.02
    })
    .sharpen({ sigma: 0.8 })
    .jpeg({ quality: 95 })
    .toFile(originalCleanPath);

  console.log('Saved portrait version to:', originalCleanPath);
}

processPhoto().catch(console.error);
