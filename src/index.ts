export const wordreplace = (
  str: string,
  wordToReplace: string,
  replacer: string,
): string => {
  const regexp = new RegExp(wordToReplace, 'g');

  return str.replace(regexp, replacer);
};
