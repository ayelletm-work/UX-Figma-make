export function titleCase(value: string) {
  return value.replace(/\w\S*/g, (str) => str.charAt(0).toUpperCase() + str.substring(1).toLowerCase());
}
