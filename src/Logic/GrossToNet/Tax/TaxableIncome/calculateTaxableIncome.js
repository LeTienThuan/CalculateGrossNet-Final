export const calculateTaxableIncome = (incomeBeforeTax, reductionPersonal, reductionDependant) => {
    const taxableIncome = incomeBeforeTax - reductionPersonal - reductionDependant;
    if (taxableIncome < 0) return 0;
    else return taxableIncome;
}