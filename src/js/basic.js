export default class Validator {
  static validateUsername(name) {
    const nameFormat = /^[a-z]\[w-]\[\.]*[d\d\d]\[a-z]\[w-]$/;
    const maxDigits = /\d{3}/;
    return nameFormat.test(name) && !maxDigits.test(name);
  }
}