import {calculateAssumeGross} from "./calculateAssumeGross";
import {calculateGrossSalaryBasedNetToGross} from "./calculateOfSalary";

export const calculateGross = (incomeBeforeTax, minimumSalary, insurance, area) =>{
    const grossAssume = calculateAssumeGross(incomeBeforeTax, minimumSalary, insurance, area);
    return calculateGrossSalaryBasedNetToGross(insurance, incomeBeforeTax, grossAssume, minimumSalary, area);
}