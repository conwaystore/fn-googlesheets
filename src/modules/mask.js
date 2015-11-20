let mask = function (numbers, format) {
  const src = numbers.toString();
  const pattern = format || [];
  const mask = pattern.length > 0 ? pattern.slice(0) : '';
  const replaceWith = 0;

  let result = mask.replace(/\d+/, numbers).replace(/\W/g, replaceWith);

  if (mask == '')
    return numbers;
  else if (src.length <= 1)
    return result;
  else {
    if (isNaN(Number(pattern.slice(0, 1))))
      return result.substring((result.length - mask.length));

    return result.substring(mask.length, 0);
  }
};

module.exports = mask;