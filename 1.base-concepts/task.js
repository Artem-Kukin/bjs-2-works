"use strict";

function solveEquation(a, b, c) {
  let arr = [];
  let d = b ** 2 - 4 * a * c;
  if (d > 0) {
    arr[0] = (-b + Math.sqrt(d)) / (2 * a);
    arr[1] = (-b - Math.sqrt(d)) / (2 * a);
  } else if (d == 0) {
    arr[0] = -b / (2 * a);
  }
  return arr;
}



function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  if (isNaN(percent) || isNaN(contribution) || isNaN(amount)) {
  return false;
}
    let p = percent / 100 / 12;
    let s = amount - contribution;
    let amountPerMonth = s * (p + p / ((1 + p) ** countMonths - 1));
    let totalAmount = amountPerMonth * countMonths;
    return Number(totalAmount.toFixed(2));
}
