import { existsSync } from 'node:fs';

if (existsSync('./games/spaceword/style.css')) {
    console.log("style.css trouvé");
} else {
    console.error("erreur: style.css manquant");
    process.exit(1);
}

import { readFileSync } from 'node:fs';

const scriptContent = readFileSync('./games/spaceword/script.js', 'utf8');

if (scriptContent.includes('const words') || scriptContent.includes('let words')) {
    console.log("mots détectés dans le script");
} else {
    console.error("erreur: words non trouvé dans script.js");
    process.exit(1);
}

const htmlContent = readFileSync('./games/spaceword/index.html', 'utf8');
if (htmlContent.includes('<input')) {
    console.log(" champ <input> trouvé");
} else {
    console.error("erreur: pas de champ de saisie trouvé dans le HTML");
    process.exit(1);
}