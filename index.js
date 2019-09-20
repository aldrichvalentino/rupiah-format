"use strict";

/**
 * Function to format a number to Rupiah currency
 * @param {number} number amount of money in integer
 */

function formatCurrency(number) {
  let tempNum = String(number)
    .split("")
    .reverse();
  let rupiah = "";

  for (let i = 0; i < tempNum.length; i++) {
    if ((i + 1) % 3 === 0 && i !== tempNum.length - 1) {
      tempNum[i] = `.${tempNum[i]}`;
    }
  }
  rupiah = `Rp${tempNum.reverse().join("")},00`;
  return rupiah;
}

module.exports = formatCurrency;

module.exports.default = formatCurrency;
