export function removeDashAndCapitalize(str:string) {
  return str.split("/").join("").replace(/-(\w)/g, (match, char) => char.toUpperCase());
}

export function extractLastWordFromUrl(url:string) {
  const parts = url.split('/');
  const lastPart = parts[parts.length - 1];
  return lastPart.charAt(0).toUpperCase() + lastPart.slice(1);
}