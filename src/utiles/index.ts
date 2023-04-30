export function removeDashAndCapitalize(str: string) {
  let result = str
    .split('/')
    .join(' ')
    .replace(/-(\w)/g, (match, char) => ' ' + char.toUpperCase())
    .trim();
  return result.charAt(0).toUpperCase() + result.slice(1);
}

export function extractLastWordFromUrl(url: string) {
  const parts = url.split('/');
  const lastPart = parts[parts.length - 1];
  return lastPart.charAt(0).toUpperCase() + lastPart.slice(1);
}
