export function toSnakeCase(word: string): string {
    return word.toLowerCase().replace(/\s+/g, '_');
}