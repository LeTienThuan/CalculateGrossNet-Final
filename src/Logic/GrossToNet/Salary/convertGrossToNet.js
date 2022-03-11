import {
    calculateGrossSalary,
    calculateNetSalary,
    calculateTotalSalaryEmployerPay,
    convertResultToUSD
} from "./calculateOfSalary";
import {calculateReduction} from "../Reduction/calculateOfReduction";
import {
    calculateInsurance,
    calculateInsuranceEmployerPlay,
    calculatePercentInsuranceEmployerPay
} from "../Insurance/calculateGeneralInsurance";
import {calculateTax} from "../Tax/calculateGeneralTax";

export const convertGrossToNet = (salaryValue, resultDetail) => {

    const grossSalary = calculateGrossSalary(salaryValue.income);
    const {insurance, familyAllowances} = salaryValue;
    const {exchangeRate} = salaryValue.income;
    const {minimumSalary, socialInsurancePercent, healthInsurancePercent, unemploymentInsurancePercent} = insurance;
    const {area} = salaryValue;

    const insuranceValue = calculateInsurance(grossSalary, salaryValue);
    const reduction = calculateReduction(familyAllowances);
    const {
        incomeBeforeTax,
        taxableIncome,
        personalIncomeTax,
        detailPersonalIncomeTax
    } = calculateTax(grossSalary, salaryValue, resultDetail);

    const netSalary = calculateNetSalary(incomeBeforeTax, personalIncomeTax);

    const insurancePercentEmployerPay = calculatePercentInsuranceEmployerPay(socialInsurancePercent, healthInsurancePercent, unemploymentInsurancePercent);
    const insuranceEmployerPay = calculateInsuranceEmployerPlay(grossSalary, minimumSalary, insurancePercentEmployerPay,insurance, area);

    const total = calculateTotalSalaryEmployerPay(grossSalary, insuranceEmployerPay);
    const salaryUSD = convertResultToUSD(grossSalary, netSalary, exchangeRate);

    const detailExplain = {
        grossSalary,
        ...insuranceValue,
        incomeBeforeTax,
        ...reduction,
        taxableIncome,
        personalIncomeTax,
        netSalary
    }
    const employerPay = {grossSalary, ...insuranceEmployerPay, ...insurancePercentEmployerPay, total};
    const overallResult = {grossSalaryVND: grossSalary, netSalaryVND: netSalary, ...salaryUSD};

    return {...resultDetail, overallResult, detailExplain, detailPersonalIncomeTax, employerPay};
}