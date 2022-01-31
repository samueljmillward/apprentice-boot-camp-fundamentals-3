const { FuelType } = require('../fuel-type');
const { TaxCalculator } = require('../tax-calculator');

/**
* @deprecated
*/
let DefaultTaxCalculator = class DefaultTaxCalculator extends TaxCalculator {
  constructor() {
    super();
  }
  calculateTax(vehicle) {
    const co2 = vehicle.co2Emissions;
    const fuelType = vehicle.fuelType;

    if (fuelType == FuelType.PETROL) {
        if (co2 <= 0) return 0;
        else if (co2 <= 50) return 10
        else if (co2 <= 75) return 25
        else if (co2 <= 90) return 105
        else if (co2 <= 100) return 125
        else if (co2 <= 110) return 145
        else if (co2 <= 130) return 165
        else if (co2 <= 150) return 205
        else if (co2 <= 170) return 515
        else if (co2 <= 190) return 830
        else if (co2 <= 225) return 1240
        else if (co2 <= 255) return 1760
        else return 2070
    } else if (fuelType == FuelType.ALTERNATIVE_FUEL) {
        if (co2 <= 50) return 0;
        else if (co2 <= 75) return 15
        else if (co2 <= 90) return 95
        else if (co2 <= 100) return 115
        else if (co2 <= 110) return 135
        else if (co2 <= 130) return 155
        else if (co2 <= 150) return 195
        else if (co2 <= 170) return 505
        else if (co2 <= 190) return 820
        else if (co2 <= 225) return 1230
        else if (co2 <= 255) return 1750
        else return 2060
    } else if (fuelType == FuelType.ELECTRIC) {
        return 0
    }

}
}

module.exports = {
  DefaultTaxCalculator: DefaultTaxCalculator
}