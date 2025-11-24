export function normalizeMonthStyle(month: string) {
  const firstUpper = month.charAt(0).toUpperCase();
  const rest = month.slice(1).replace('.', '');
  return firstUpper + rest;
}
