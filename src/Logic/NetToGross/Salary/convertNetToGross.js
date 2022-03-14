import {calculateNetSalaryBasedNetToGross} from "./calculateOfSalary";
import {
    calculateDetailRangePersonalIncomeTax
} from "../../GrossToNet/Tax/PersonalIncomeTax/calculateOfPersonalIncomeTax";
import {calculateReduction} from "../../GrossToNet/Reduction/calculateOfReduction";
import {
    calculateTotalSalaryEmployerPay, convertResultToUSD
} from "../../GrossToNet/Salary/calculateOfSalary";
import {calculateTaxBasedNetToGross} from "../Tax/calculateTaxBasedNetToGross";
import {
    calculateInsurance, calculateInsuranceEmployerPlay,
    calculatePercentInsuranceEmployerPay, getInsurancePercent
} from "../../GrossToNet/Insurance/calculateGeneralInsurance";
import {calculateGross} from "./calculateGross";

export const convertNetToGross = (salaryValue, resultDetail) => {
    const {area, income, insurance, familyAllowances} = salaryValue;
    const {minimumSalary} = insurance;
    const {exchangeRate} = income;
    const defaultDetailPersonalIncomeTax = resultDetail.detailPersonalIncomeTax;
    const insurancePercent = getInsurancePercent(insurance);

    const netSalary = calculateNetSalaryBasedNetToGross(income);
    const tax = calculateTaxBasedNetToGross(netSalary, familyAllowances);
    const {incomeBeforeTax, taxableIncome} = tax;

    const grossSalary = calculateGross(incomeBeforeTax, minimumSalary, insurance, area);
    const insuranceValue = calculateInsurance(grossSalary, salaryValue);
    const reduction = calculateReduction(familyAllowances);

    const insurancePercentEmployerPay = calculatePercentInsuranceEmployerPay(insurancePercent);
    const insuranceEmployerPay = calculateInsuranceEmployerPlay(grossSalary, salaryValue, insurancePercentEmployerPay);
    const total = calculateTotalSalaryEmployerPay(grossSalary, insuranceEmployerPay);

    const salaryUSD = convertResultToUSD(grossSalary, netSalary, exchangeRate);
    const detailPersonalIncomeTax = calculateDetailRangePersonalIncomeTax(taxableIncome, defaultDetailPersonalIncomeTax);

    const detailExplain = {grossSalary, ...insuranceValue, ...tax, ...reduction, netSalary}
    const employerPay = {grossSalary, ...insuranceEmployerPay, ...insurancePercentEmployerPay, total}
    const overallResult = {grossSalaryVND: grossSalary, netSalaryVND: netSalary, ...salaryUSD}

    return {...resultDetail, detailExplain, employerPay, detailPersonalIncomeTax, overallResult};
}