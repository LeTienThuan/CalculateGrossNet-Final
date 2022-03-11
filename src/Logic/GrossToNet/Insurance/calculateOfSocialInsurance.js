export const calculateSocialInsurance = (grossSalary, salaryValue) => {
    const {
        isChooseOtherInput,
        minimumSalary,
        specificInsuranceAmount,
        socialInsurancePercent
    } = salaryValue.insurance

    if (isChooseOtherInput) {
        if (specificInsuranceAmount < minimumSalary * 20) {
            return (socialInsurancePercent / 100) * specificInsuranceAmount;
        } else {
            return (socialInsurancePercent / 100) * minimumSalary * 20;
        }
    } else {
        if (grossSalary < minimumSalary * 20) {
            return (socialInsurancePercent / 100) * grossSalary;
        } else {
            return (socialInsurancePercent / 100) * minimumSalary * 20;
        }
    }
}
export const calculateSocialInsurancePercentEmployerPay = (socialInsurancePercent) => {
    return 17.5 + (8 - socialInsurancePercent);
}
export const calculateSocialInsuranceEmployerPay = (grossSalary, minimumSalary, socialInsurancePercentEmployerPay, insurance) => {
    const {isChooseOtherInput, specificInsuranceAmount} = insurance;

    if (isChooseOtherInput) {
        if (specificInsuranceAmount > minimumSalary * 20) {
            return minimumSalary * 20 * (socialInsurancePercentEmployerPay / 100);
        } else {
            return specificInsuranceAmount * (socialInsurancePercentEmployerPay / 100);
        }
    }
    if (grossSalary > (minimumSalary * 20)) {
        return (minimumSalary * 20) * (socialInsurancePercentEmployerPay / 100);
    } else {
        return grossSalary * (socialInsurancePercentEmployerPay / 100)
    }
}





