export const calculateIncomeBeforeTax = (grossSalary, socialInsurance, healthInsurance, unemploymentInsurance) => {
    return grossSalary - (socialInsurance + healthInsurance + unemploymentInsurance)
}