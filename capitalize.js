const capitalize = (str) => {
  if (str.length) {
    const partStr = str.slice(1);
    const stringArray = partStr.split('');
    const newArray = stringArray.map((str) => str.toLowerCase());
    return str[0] + newArray.join('');
  }

  return 'Empty string is not allowed';
};

module.exports = capitalize;