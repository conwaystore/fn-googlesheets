function mask(number, format) {
  'use strict';

  var ptrn = format || [];
  var src = number.toString();
  var mask = ptrn.length > 0 ? ptrn.slice(0) : '';
  var replaceWith = 0;

  var result = mask.replace(/\d+/, number).replace(/\W/g, replaceWith);

  if (mask == '')
    return number;
  else if (src.length <= 1)
    return result;
  else {
    if (isNaN(new Number(ptrn.slice(0, 1))))
      return result.substring((result.length - mask.length));

    return result.substring(mask.length, 0);
  }
}