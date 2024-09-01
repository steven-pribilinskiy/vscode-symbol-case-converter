export function toScreamingCase(text: string): string {
  return text
      .replace(/([a-z])([A-Z])/g, '$-1_$2')
      .replace(/[\s-]/g, '_')
      .toUpperCase();
}
