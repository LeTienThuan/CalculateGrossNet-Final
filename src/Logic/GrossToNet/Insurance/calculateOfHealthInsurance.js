export const calculateHealthInsurance = (grossSalary, salaryValue) => {
    const {
        isChooseOtherInput,
        specificInsuranceAmount,
        minimumSalary,
        healthInsurancePercent
    } = salaryValue.insurance;

    if (isChooseOtherInput) {
        if (specificInsuranceAmount < minimumSalary * 20) {
            return (healthInsurancePercent / 100) * specificInsuranceAmount;
        } else {
            return (healthInsurancePercent / 100) * minimumSalary * 20;
        }
    } else {
        if (grossSalary < minimumSalary * 20) {
            return (healthInsurancePercent / 100) * grossSalary;
        } else {
            return (healthInsurancePercent / 100) * minimumSalary * 20;
        }
    }
}
export const calculateHealthInsurancePercentEmployerPay = (healthInsurancePercent) => {
    return 3 + (1.5 - healthInsurancePercent);
}
export const calculateHealthInsuranceEmployerPay = (grossSalary, minimumSalary, healthInsurancePercentEmployerPay, insurance) => {
    const {isChooseOtherInput, specificInsuranceAmount} = insurance;
    if (isChooseOtherInput) {
        if (specificInsuranceAmount > minimumSalary * 20) {
            return minimumSalary * 20 * (healthInsurancePercentEmployerPay / 100);
        } else {
            return specificInsuranceAmount * (healthInsurancePercentEmployerPay / 100);
        }
    }
    if (grossSalary > (minimumSalary * 20)) {
        return (minimumSalary * 20) * (healthInsurancePercentEmployerPay / 100);
    } else {
        return grossSalary * (healthInsurancePercentEmployerPay / 100)
    }
}