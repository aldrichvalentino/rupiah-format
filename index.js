"use strict";

function formatCurrency(
  number,
  options = {}
) {
  const {
    prefix = "Rp",
    delimiter = ".",
    useSuffix = true,
    customSuffix = ',00',
  } = options;

  let tempNum = String(number)
    .split("")
    .reverse();

  let rupiah = "";

  for (let i = 0; i < tempNum.length; i++) {
    if ((i + 1) % 3 === 0 && i !== tempNum.length - 1) {
      tempNum[i] = `${delimiter}${tempNum[i]}`;
    }
  }

  const suffix = useSuffix ? customSuffix : '';

  rupiah = `${prefix}${tempNum.reverse().join("")}${suffix}`;
  return rupiah;
}

module.exports = formatCurrency;

module.exports.default = formatCurrency;
