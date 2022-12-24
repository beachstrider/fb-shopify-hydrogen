import getSymbolFromCurrency from 'currency-symbol-map';

export function getFullCost(cost, code) {
  if (typeof cost === 'undefined') {
    return '';
  } else {
    return `${getSymbolFromCurrency(code)}${Number(cost).toFixed(2)}`;
  }
}
