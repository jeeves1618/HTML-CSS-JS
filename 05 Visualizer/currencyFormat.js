"use strict";
export function formatAmount(amount) {
  let amountString = amount.toFixed(2).toString();
  let lengthOfString = amountString.length;
  let amountFormatter = [
    "n",
    "n",
    ".",
    "n",
    "n",
    "n",
    ",",
    "n",
    "n",
    "n",
    ",",
    "n",
    "n",
    "n",
    ",",
    "n",
    "n",
    "n",
    ",",
    "n",
    "n",
    "n",
    ",",
    "n",
    "n",
    "n",
  ];
  let amountFormatterItr = 0;
  let cAmountString = " ";
  let charAtString;

  for (let i = lengthOfString - 1; i >= 0; i--) {
    if (
      amountFormatter[amountFormatterItr] === "n" ||
      amountFormatter[amountFormatterItr] === "."
    ) {
      charAtString = amountString.charAt(i);
    } else {
      charAtString = amountFormatter[amountFormatterItr];
      cAmountString = charAtString + cAmountString;
      charAtString = amountString.charAt(i);
      amountFormatterItr++;
    }
    cAmountString = charAtString + cAmountString;
    amountFormatterItr++;
  }
  cAmountString = "Rs. " + cAmountString;
  return cAmountString;
}
