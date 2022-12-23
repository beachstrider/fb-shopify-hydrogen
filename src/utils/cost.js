import getSymbolFromCurrency from 'currency-symbol-map';

export function getFullCost(cost, code) {
  if (typeof cost === 'undefined') {
    return '';
  }
  return `${getSymbolFromCurrency(code)}${cost}`;
}
