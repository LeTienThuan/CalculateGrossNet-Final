export const getInsurancePercent = (insurance) => {
    const {socialInsurancePercent, healthInsurancePercent, unemploymentInsurancePercent} = insurance;
    return {socialInsurancePercent, healthInsurancePercent, unemploymentInsurancePercent};
}