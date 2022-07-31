function capitalize(string) {
  const str = string;
  return str.charAt(0).toUpperCase() + str.slice(1);
}
module.exports = capitalize;
