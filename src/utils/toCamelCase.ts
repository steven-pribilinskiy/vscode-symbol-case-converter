export function toCamelCase(word: string): string {
    return word
        .split(' ')
        .map((w, index) => index === 0 ? w.toLowerCase() : w.charAt(0).toUpperCase() + w.slice(1))
        .join('');
}