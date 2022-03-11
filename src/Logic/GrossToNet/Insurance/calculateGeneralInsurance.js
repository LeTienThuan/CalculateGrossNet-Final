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
export const calculatePercentInsuranceEmployerPay = (socialInsurancePercent, healthInsurancePercent,
                                                     unemploymentInsurancePercent) => {

    const socialInsurancePercentEmployerPay = calculateSocialInsurancePercentEmployerPay(socialInsurancePercent);
    const healthInsurancePercentEmployerPay = calculateHealthInsurancePercentEmployerPay(healthInsurancePercent);
    const unemploymentInsurancePercentEmployerPay = calculateUnemploymentInsurancePercentEmployerPay(unemploymentInsurancePercent);

    return {
        socialInsurancePercentEmployerPay,
        healthInsurancePercentEmployerPay,
        unemploymentInsurancePercentEmployerPay
    }
}
export const calculateInsuranceEmployerPlay = (grossSalary, minimumSalary, insurancePercentEmployerPay, insurance, area) => {
    const {isChooseOtherInput, specificInsuranceAmount} = insurance;
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