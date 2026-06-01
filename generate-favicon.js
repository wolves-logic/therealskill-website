const fs = require('fs');

// Create a minimal 32x32 ICO file with a lightning bolt
// We'll create an SVG and use it as the favicon
const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32">
  <rect width="32" height="32" rx="6" fill="#0A0A0F"/>
  <polygon points="18,3 8,18 15,18 14,29 24,14 17,14" fill="#7EE8A2"/>
</svg>`;

fs.writeFileSync('./public/favicon.svg', svgContent);
fs.writeFileSync('./public/icon.svg', svgContent);
console.log('SVG favicon created!');
