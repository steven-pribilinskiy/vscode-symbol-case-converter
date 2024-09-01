export function toKebabCase(word: string): string {
    return word.toLowerCase().replace(/\s+/g, '-');
}