export const capitalizeWord = (word: string) => {
  const wordsArray = word.split("_");

  const capitalizedWords = wordsArray.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );

  return capitalizedWords.join(" ");
};
