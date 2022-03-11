export const calculateGrossSalary = (income) => {
    const {incomeVND, incomeUSD, exchangeRate} = income;
    return incomeVND + (incomeUSD * exchangeRate);
}
export const calculateNetSalary = (tax) => {
    const {incomeBeforeTax, personalIncomeTax} = tax;
    return incomeBeforeTax - personalIncomeTax;
}
export const convertGrossVNDToUSD = (grossSalaryVND, exchangeRate) => {
    return grossSalaryVND / exchangeRate;
}
export const convertNetVNDtoUSD = (netSalaryVND, exchangeRate) => {
    return netSalaryVND / exchangeRate;
}
export const calculateTotalSalaryEmployerPay = (grossSalary, insuranceEmployerPlay) => {
    const {socialInsuranceEmployerPay, healthInsuranceEmployerPay, unemploymentInsuranceEmployerPay} = insuranceEmployerPlay;
    return grossSalary + socialInsuranceEmployerPay + healthInsuranceEmployerPay + unemploymentInsuranceEmployerPay;
}
export const convertResultToUSD = (grossSalary, netSalary, exchangeRate) => {

    const grossSalaryUSD = convertGrossVNDToUSD(grossSalary, exchangeRate);
    const netSalaryUSD = convertNetVNDtoUSD(netSalary, exchangeRate);

    return {grossSalaryUSD, netSalaryUSD};
}