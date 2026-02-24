import i18n from '@/i18n';

export function normalizeMonthStyle(month: string) {
  const firstUpper = month.charAt(0).toUpperCase();
  const rest = month.slice(1).replace('.', '');
  return firstUpper + rest;
}

export function getDateWithoutTZ(date: string) {
  const dateWithoutTZ = new Date(date).toISOString().slice(0, -1);
  return new Date(dateWithoutTZ);
}

export function formatDateToLocale(date: Date, format: Intl.DateTimeFormatOptions) {
  return date.toLocaleDateString(i18n.language, format);
}
