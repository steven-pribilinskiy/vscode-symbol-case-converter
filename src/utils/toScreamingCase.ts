export function toScreamingCase(word: string): string {
  return word
    .replace(/([a-z])([A-Z])/g, '$1_$2')
    .replace(/[\s-]+/g, '_')
    .toUpperCase();
}

export { toScreamingCase as toConstantCase };
