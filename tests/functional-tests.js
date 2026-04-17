// Tests fonctionnels supplémentaires pour le projet Jeux VideoPS

// Test fonctionnel 1: Simulation d'une partie complète
function simulateGameplay() {
    let gameState = {
        score: 0,
        lives: 3,
        level: 1,
        enemies: [],
        playerActive: true
    };
    
    // Simulation de 5 tours de jeu
    for (let turn = 1; turn <= 5; turn++) {
        // Simulation de destruction d'ennemis
        gameState.enemies.push(Math.floor(Math.random() * 10));
        gameState.score += 100 * gameState.level;
        
        // Simulation de perte de vie aléatoire
        if (Math.random() < 0.2) {
            gameState.lives--;
        }
        
        // Passage au niveau suivant après 3 tours
        if (turn === 3) {
            gameState.level++;
        }
    }
    
    return gameState;
}

const functionalTest1 = simulateGameplay();
if (functionalTest1.score >= 500 && functionalTest1.level >= 2) {
    console.log("Test fonctionnel 1 (simulation partie complète): réussi");
} else {
    console.error("Test fonctionnel 1 (simulation partie complète): échoué");
    process.exit(1);
}

// Test fonctionnel 2: Test de sauvegarde et chargement de partie
function saveGame(gameData) {
    try {
        const saveString = JSON.stringify(gameData);
        return saveString;
    } catch (error) {
        return null;
    }
}

function loadGame(saveString) {
    try {
        const gameData = JSON.parse(saveString);
        return gameData;
    } catch (error) {
        return null;
    }
}

const testGameData = {
    playerName: "TestPlayer",
    score: 1500,
    timestamp: Date.now(),
    achievements: ["firstWin", "speedRun"]
};

const savedGame = saveGame(testGameData);
const loadedGame = loadGame(savedGame);

if (savedGame && loadedGame && loadedGame.playerName === "TestPlayer" && loadedGame.score === 1500) {
    console.log("Test fonctionnel 2 (sauvegarde/chargement): réussi");
} else {
    console.error("Test fonctionnel 2 (sauvegarde/chargement): échoué");
    process.exit(1);
}

// Test fonctionnel 3: Test du système de classement
class Leaderboard {
    constructor() {
        this.scores = [];
    }
    
    addScore(playerName, score) {
        this.scores.push({ name: playerName, score: score, date: new Date() });
        this.scores.sort((a, b) => b.score - a.score);
        this.scores = this.scores.slice(0, 10); // Garder seulement les 10 meilleurs
    }
    
    getTopScores(limit = 5) {
        return this.scores.slice(0, limit);
    }
    
    isHighScore(score) {
        return this.scores.length < 10 || score > this.scores[this.scores.length - 1].score;
    }
}

const leaderboard = new Leaderboard();
leaderboard.addScore("Alice", 2000);
leaderboard.addScore("Bob", 1500);
leaderboard.addScore("Charlie", 3000);
leaderboard.addScore("Diana", 1800);
leaderboard.addScore("Eve", 2500);

const topScores = leaderboard.getTopScores(3);
const isHighScore = leaderboard.isHighScore(1200);

if (topScores.length === 3 && 
    topScores[0].name === "Charlie" && 
    topScores[0].score === 3000 &&
    isHighScore === false) {
    console.log("Test fonctionnel 3 (système de classement): réussi");
} else {
    console.error("Test fonctionnel 3 (système de classement): échoué");
    process.exit(1);
}

console.log("Tous les tests fonctionnels supplémentaires ont été passés avec succès!");
