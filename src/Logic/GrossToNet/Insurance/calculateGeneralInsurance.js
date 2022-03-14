import {
    calculateSocialInsurance,
    calculateSocialInsuranceEmployerPay,
    calculateSocialInsurancePercentEmployerPay
} from "./calculateOfSocialInsurance";
import {
    calculateHealthInsurance,
    calculateHealthInsuranceEmployerPay,
    calculateHealthInsurancePercentEmployerPay
} from "./calculateOfHealthInsurance";
import {
    calculateUnemploymentInsurance, calculateUnemploymentInsuranceEmployerPay,
    calculateUnemploymentInsurancePercentEmployerPay
} from "./calculateOfUnemploymentInsurance";

export const calculateInsurance = (grossSalary, salaryValue) => {

    const socialInsurance = calculateSocialInsurance(grossSalary, salaryValue);
    const healthInsurance = calculateHealthInsurance(grossSalary, salaryValue);
    const unemploymentInsurance = calculateUnemploymentInsurance(grossSalary, salaryValue);

    return {socialInsurance, healthInsurance, unemploymentInsurance};
}
export const calculatePercentInsuranceEmployerPay = (insurancePercent) => {
    const {socialInsurancePercent, healthInsurancePercent, unemploymentInsurancePercent} = insurancePercent;

    const socialInsurancePercentEmployerPay = calculateSocialInsurancePercentEmployerPay(socialInsurancePercent);
    const healthInsurancePercentEmployerPay = calculateHealthInsurancePercentEmployerPay(healthInsurancePercent);
    const unemploymentInsurancePercentEmployerPay = calculateUnemploymentInsurancePercentEmployerPay(unemploymentInsurancePercent);

    return {
        socialInsurancePercentEmployerPay,
        healthInsurancePercentEmployerPay,
        unemploymentInsurancePercentEmployerPay
    }
}
export const calculateInsuranceEmployerPlay = (grossSalary, salaryValue, insurancePercentEmployerPay) => {
    const {area, insurance} = salaryValue;
    const {minimumSalary, isChooseOtherInput, specificInsuranceAmount} = insurance;
    const {
        socialInsurancePercentEmployerPay,
        healthInsurancePercentEmployerPay,
        unemploymentInsurancePercentEmployerPay
    } = insurancePercentEmployerPay;

    const socialInsuranceEmployerPay = calculateSocialInsuranceEmployerPay(grossSalary, minimumSalary, socialInsurancePercentEmployerPay, insurance);
    const healthInsuranceEmployerPay = calculateHealthInsuranceEmployerPay(grossSalary, minimumSalary, healthInsurancePercentEmployerPay, insurance);
    let unemploymentInsuranceEmployerPay =
        calculateUnemploymentInsuranceEmployerPay(grossSalary, minimumSalary, unemploymentInsurancePercentEmployerPay, area);
    if (isChooseOtherInput) {
        unemploymentInsuranceEmployerPay =
            calculateUnemploymentInsuranceEmployerPay(specificInsuranceAmount, minimumSalary, unemploymentInsurancePercentEmployerPay, area);
    }
    return {socialInsuranceEmployerPay, healthInsuranceEmployerPay, unemploymentInsuranceEmployerPay};
}
export const getInsurancePercent = (insurance) => {
    const {socialInsurancePercent, healthInsurancePercent, unemploymentInsurancePercent} = insurance;
    return {socialInsurancePercent, healthInsurancePercent, unemploymentInsurancePercent};
}