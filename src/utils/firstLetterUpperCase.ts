export function firstLetterInUpper(word: string | undefined): string {
  if (typeof word === undefined) return '';
  return typeof word === 'string'
    ? word.charAt(0).toUpperCase() + word.slice(1)
    : '';
}
