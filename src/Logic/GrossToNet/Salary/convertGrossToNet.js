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
    const {insurance, familyAllowances, income, area} = salaryValue;
    const grossSalary = calculateGrossSalary(income);
    const {exchangeRate} = income;
    const {minimumSalary, socialInsurancePercent, healthInsurancePercent, unemploymentInsurancePercent} = insurance;

    const insuranceValue = calculateInsurance(grossSalary, salaryValue);
    const reduction = calculateReduction(familyAllowances);
    const tax = calculateTax(grossSalary, salaryValue, resultDetail);
    const {detailPersonalIncomeTax} = tax;
    const netSalary = calculateNetSalary(tax);

    const insurancePercentEmployerPay = calculatePercentInsuranceEmployerPay(socialInsurancePercent, healthInsurancePercent, unemploymentInsurancePercent);
    const insuranceEmployerPay = calculateInsuranceEmployerPlay(grossSalary, minimumSalary, insurancePercentEmployerPay,insurance, area);

    const total = calculateTotalSalaryEmployerPay(grossSalary, insuranceEmployerPay);
    const salaryUSD = convertResultToUSD(grossSalary, netSalary, exchangeRate);

    const detailExplain = {grossSalary, ...insuranceValue, ...tax, ...reduction, netSalary}
    const employerPay = {grossSalary, ...insuranceEmployerPay, ...insurancePercentEmployerPay, total};
    const overallResult = {grossSalaryVND: grossSalary, netSalaryVND: netSalary, ...salaryUSD};

    return {...resultDetail, overallResult, detailExplain, detailPersonalIncomeTax, employerPay};
}