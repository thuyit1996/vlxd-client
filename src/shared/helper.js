export function padLeft(str, length, paddingCharacter) {
  str = "" + str;

  while (str.length < length) {
    str = paddingCharacter + str;
  }

  return str;
}