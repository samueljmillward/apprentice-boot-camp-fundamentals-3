const { TaxCalculator } = require('../tax-calculator');

/**
* @deprecated
*/
let DefaultTaxCalculator = class DefaultTaxCalculator extends TaxCalculator {
  constructor() {
    super();
  }
  calculateTax(vehicle) {
    return -1;
  }
}

module.exports = {
  DefaultTaxCalculator: DefaultTaxCalculator
}