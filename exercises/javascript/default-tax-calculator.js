const { TaxCalculator } = require('../tax-calculator');

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