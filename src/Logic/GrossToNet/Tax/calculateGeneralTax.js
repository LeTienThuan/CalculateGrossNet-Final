import {calculateIncomeBeforeTax} from "./IncomeBeforeTax/calculateOfIncomeBeforeTax";
import {calculateInsurance} from "../Insurance/calculateGeneralInsurance";
import {calculateTaxableIncome} from "./TaxableIncome/calculateTaxableIncome";
import {calculateReduction} from "../Reduction/calculateOfReduction";
import {
    calculateDetailRangePersonalIncomeTax,
    calculatePersonalIncomeTax
} from "./PersonalIncomeTax/calculateOfPersonalIncomeTax";

export const  calculateTax = (grossSalary, salaryValue, resultDetail) =>{
    const defaultDetailPersonalIncomeTax = resultDetail.detailPersonalIncomeTax;
    const {socialInsurance, healthInsurance, unemploymentInsurance} = calculateInsurance(grossSalary, salaryValue);
    const {reductionPersonal, reductionDependant} = calculateReduction(salaryValue.familyAllowances);

    const incomeBeforeTax = calculateIncomeBeforeTax(grossSalary, socialInsurance, healthInsurance, unemploymentInsurance);
    const taxableIncome = calculateTaxableIncome(incomeBeforeTax, reductionPersonal, reductionDependant);
    const personalIncomeTax = calculatePersonalIncomeTax(taxableIncome);
    const detailPersonalIncomeTax = calculateDetailRangePersonalIncomeTax(taxableIncome, defaultDetailPersonalIncomeTax);

    return {incomeBeforeTax, taxableIncome,personalIncomeTax, detailPersonalIncomeTax};
}