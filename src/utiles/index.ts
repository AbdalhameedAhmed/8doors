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

export function toSubDomain(subDomain: string, path: string) {
  let domain = process.env.NEXT_PUBLIC_WEB_DOMAIN;
  console.log(domain);

  return `http://${subDomain && subDomain + '.'}${domain}/${path}`;
}

export function removeQueryParams(url: string) {
  const index = url.indexOf('?');

  if (index === -1) {
    return url;
  }

  return url.substring(0, index);
}

export function capitalizeFirstLetter(inputString: string) {
  return (
    inputString?.length > 0 ?
    inputString?.charAt(0).toUpperCase() + inputString.slice(1):""
  );
}
