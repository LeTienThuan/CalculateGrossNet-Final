import {calculateConvertedIncome} from "../Salary/calculateConvertedIncome";
import {calculateTaxableIncomeBasedNetToGross} from "./TaxableIncome/calculateOfTaxableIncome";
import {calculatePersonalIncomeTax} from "../../GrossToNet/Tax/PersonalIncomeTax/calculateOfPersonalIncomeTax";

export const calculateTaxBasedNetToGross = (netSalary, familyAllowances) => {
    const {personal, dependant, numberOfDependant} = familyAllowances;

    const convertedIncome = calculateConvertedIncome(netSalary, personal, dependant, numberOfDependant);
    const taxableIncome = (+calculateTaxableIncomeBasedNetToGross(convertedIncome).toFixed(0));
    let incomeBeforeTax = (+taxableIncome) + (+personal) + (dependant * numberOfDependant);
    if (taxableIncome === 0){
        incomeBeforeTax = netSalary;
    }
    const personalIncomeTax = calculatePersonalIncomeTax(taxableIncome);

    return {taxableIncome, incomeBeforeTax, personalIncomeTax};
}