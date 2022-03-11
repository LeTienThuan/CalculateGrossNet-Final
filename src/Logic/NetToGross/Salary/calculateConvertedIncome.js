export const calculateConvertedIncome = (netSalary, personal, dependant, numberOfDependant) => {
    if(netSalary - (personal) - (dependant * numberOfDependant) <= 0) return 0;
    return netSalary - (personal) - (dependant * numberOfDependant);
}