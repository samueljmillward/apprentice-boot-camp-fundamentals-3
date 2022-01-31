const { TaxCalculator } = require('./tax-calculator');

let DefaultTaxCalculator = class DefaultTaxCalculator extends TaxCalculator {
  constructor() {
    super();
  }

  calculateTax(vehicle) {
    const co2 = vehicle.co2Emissions;

    return co2 == 0 ? 0
        : co2 <= 50 ? 10 
        : co2 <= 75 ? 25 
        : co2 <= 90 ? 105
        : co2 <= 100 ? 125
        : co2 <= 110 ? 145
        : co2 <= 130 ? 165
        : co2 <= 150 ? 205
        : co2 <= 170 ? 515
        : co2 <= 190 ? 830
        : co2 <= 225 ? 1240
        : co2 <= 255 ? 1760
        : co2 >= 256 ? 2070
        : null
  }
}

module.exports = {
  DefaultTaxCalculator: DefaultTaxCalculator
}