// gameData.js
const rawGameData = [
  {
    category: "mostPlayed",
    game: {
      id: 1,
      name: {
        en: "Space Adventure",
        fr: "Aventure Spatiale"
      },
      description: {
        en: "A thrilling journey through space.",
        fr: "Un voyage passionnant dans l’espace."
      },
      thumbnail: "space_adventure.png"
    }
  },
  {
    category: "mostPlayed",
    game: {
      id: 2,
      name: {
        en: "Math Quest",
        fr: "Quête Mathématique"
      },
      description: {
        en: "Solve puzzles to save the kingdom.",
        fr: "Résolvez des énigmes pour sauver le royaume."
      },
      thumbnail: "math_quest.png"
    }
  }
];

// This function maps the raw data into the selected language (fr, en, etc.)
export function getGameDataByLang(lang = "en") {
  return rawGameData.map((item) => ({
    category: item.category,
    game: {
      id: item.game.id,
      name: item.game.name[lang],
      description: item.game.description[lang],
      thumbnail: item.game.thumbnail
    }
  }));
}
