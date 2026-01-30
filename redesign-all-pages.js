const fs = require('fs');
const path = require('path');

// Liste des pages à redesigner
const pagesToRedesign = [
  // Construction Villa (7 restantes)
  '/home/user/egb-occitanie/src/app/construction-villa-blagnac/page.tsx',
  '/home/user/egb-occitanie/src/app/construction-villa-castanet-tolosan/page.tsx',
  '/home/user/egb-occitanie/src/app/construction-villa-colomiers/page.tsx',
  '/home/user/egb-occitanie/src/app/construction-villa-cote-pavee-toulouse/page.tsx',
  '/home/user/egb-occitanie/src/app/construction-villa-lunion/page.tsx',
  '/home/user/egb-occitanie/src/app/construction-villa-ramonville/page.tsx',
  '/home/user/egb-occitanie/src/app/construction-villa-tournefeuille/page.tsx',
  // Rénovation Quartier (11 pages)
  '/home/user/egb-occitanie/src/app/renovation-arnaud-bernard-toulouse/page.tsx',
  '/home/user/egb-occitanie/src/app/renovation-busca-toulouse/page.tsx',
  '/home/user/egb-occitanie/src/app/renovation-capitole-toulouse/page.tsx',
  '/home/user/egb-occitanie/src/app/renovation-compans-caffarelli-toulouse/page.tsx',
  '/home/user/egb-occitanie/src/app/renovation-maison-carmes-toulouse/page.tsx',
  '/home/user/egb-occitanie/src/app/renovation-minimes-toulouse/page.tsx',
  '/home/user/egb-occitanie/src/app/renovation-rangueil-toulouse/page.tsx',
  '/home/user/egb-occitanie/src/app/renovation-saint-aubin-dupuy-toulouse/page.tsx',
  '/home/user/egb-occitanie/src/app/renovation-saint-etienne-toulouse/page.tsx',
  '/home/user/egb-occitanie/src/app/renovation-energetique-toulouse/page.tsx',
  '/home/user/egb-occitanie/src/app/renovation-maison-toulouse/page.tsx',
];

console.log(`🎨 Redesigning ${pagesToRedesign.length} pages...`);
console.log('');

let successCount = 0;
let errorCount = 0;

pagesToRedesign.forEach((filePath, index) => {
  try {
    console.log(`[${index + 1}/${pagesToRedesign.length}] Processing: ${path.basename(path.dirname(filePath))}`);

    let content = fs.readFileSync(filePath, 'utf-8');
    let modified = false;

    // Count removals
    let gradientCount = 0;
    let emojiCount = 0;

    // Remove gradients
    const gradientPatterns = [
      /bg-gradient-to-[a-z]+\s+from-[a-z]+-\d+\s+(?:via-[a-z]+-\d+\s+)?to-[a-z]+-\d+/g,
      /bg-gradient-to-[a-z]+/g,
    ];

    gradientPatterns.forEach(pattern => {
      const matches = content.match(pattern);
      if (matches) {
        gradientCount += matches.length;
        content = content.replace(pattern, 'bg-white');
        modified = true;
      }
    });

    // Remove from/via/to color classes
    const colorDirections = /(from|via|to)-(?:rose|pink|green|teal|emerald|blue|cyan|indigo|purple|violet|orange|amber|yellow|red|gray|slate|stone|white|black)-\d+/g;
    content = content.replace(colorDirections, '');

    // Remove emojis
    const emojiRegex = /[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1F1E0}-\u{1F1FF}\u{1F600}-\u{1F64F}\u{1F680}-\u{1F6FF}\u{1F900}-\u{1F9FF}]/gu;
    const emojiMatches = content.match(emojiRegex);
    if (emojiMatches) {
      emojiCount = emojiMatches.length;
      content = content.replace(emojiRegex, '');
      modified = true;
    }

    // Clean up multiple spaces
    content = content.replace(/  +/g, ' ');
    content = content.replace(/className="\s+"/g, 'className=""');
    content = content.replace(/className="\s+/g, 'className="');
    content = content.replace(/\s+"/g, '"');

    // Replace stone colors with gray
    content = content.replace(/stone-/g, 'gray-');

    // Ensure Playfair font is imported if not already
    if (!content.includes('Playfair_Display')) {
      // Add import after "next/font/google"
      content = content.replace(
        /import\s+\{([^}]+)\}\s+from\s+"next\/font\/google";/,
        'import { $1, Playfair_Display } from "next/font/google";\n\nconst playfair = Playfair_Display({ subsets: ["latin"] });'
      );
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf-8');
      console.log(`  ✓ Removed ${gradientCount} gradients and ${emojiCount} emojis`);
      successCount++;
    } else {
      console.log(`  - No changes needed`);
      successCount++;
    }

  } catch (error) {
    console.error(`  ✗ Error: ${error.message}`);
    errorCount++;
  }

  console.log('');
});

console.log(`\n✅ Redesign complete!`);
console.log(`   Success: ${successCount}/${pagesToRedesign.length}`);
console.log(`   Errors: ${errorCount}`);
