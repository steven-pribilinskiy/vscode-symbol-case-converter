export function toPascalCase(word: string): string {
    return word
        .split(' ')
        .map(w => w.charAt(0).toUpperCase() + w.slice(1))
        .join('');
}