export function suggestCode(prefix:string): string[] {
  const suggestions = [];
  if(prefix.includes('console')) suggestions.push('console.log("hello")');
  if(prefix.includes('function')) suggestions.push('function name(params) {\n  // ...\n}');
  suggestions.push(prefix + ' // suggested');
  return suggestions;
}
