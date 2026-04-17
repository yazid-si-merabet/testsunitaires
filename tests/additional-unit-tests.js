// Tests unitaires supplémentaires pour le projet Jeux VideoPS

// Test unitaire 1: Vérification de la fonction de calcul de score
function calculateScore(baseScore, multiplier, bonus) {
    return (baseScore * multiplier) + bonus;
}

const test1 = calculateScore(100, 2, 50);
if (test1 === 250) {
    console.log("Test unitaire 1 (calculateScore): réussi");
} else {
    console.error("Test unitaire 1 (calculateScore): échoué - attendu 250, obtenu", test1);
    process.exit(1);
}

// Test unitaire 2: Vérification de la fonction de validation de position
function isValidPosition(x, y, maxX, maxY) {
    return x >= 0 && x <= maxX && y >= 0 && y <= maxY;
}

const test2 = isValidPosition(5, 10, 800, 600);
if (test2 === true) {
    console.log("Test unitaire 2 (isValidPosition): réussi");
} else {
    console.error("Test unitaire 2 (isValidPosition): échoué - attendu true, obtenu", test2);
    process.exit(1);
}

const test2b = isValidPosition(-5, 10, 800, 600);
if (test2b === false) {
    console.log("Test unitaire 2b (isValidPosition limite négative): réussi");
} else {
    console.error("Test unitaire 2b (isValidPosition limite négative): échoué - attendu false, obtenu", test2b);
    process.exit(1);
}

// Test unitaire 3: Vérification de la fonction de formatage de temps
function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

const test3 = formatTime(125);
if (test3 === "02:05") {
    console.log("Test unitaire 3 (formatTime): réussi");
} else {
    console.error("Test unitaire 3 (formatTime): échoué - attendu 02:05, obtenu", test3);
    process.exit(1);
}

// Test unitaire 4: Vérification de la fonction de calcul de distance
function calculateDistance(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}

const test4 = Math.round(calculateDistance(0, 0, 3, 4));
if (test4 === 5) {
    console.log("Test unitaire 4 (calculateDistance): réussi");
} else {
    console.error("Test unitaire 4 (calculateDistance): échoué - attendu 5, obtenu", test4);
    process.exit(1);
}

// Test unitaire 5: Vérification de la fonction de génération de couleur aléatoire
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const test5 = getRandomColor();
if (test5.startsWith('#') && test5.length === 7) {
    console.log("Test unitaire 5 (getRandomColor): réussi");
} else {
    console.error("Test unitaire 5 (getRandomColor): échoué - format incorrect", test5);
    process.exit(1);
}

console.log("Tous les tests unitaires supplémentaires ont été passés avec succès!");
