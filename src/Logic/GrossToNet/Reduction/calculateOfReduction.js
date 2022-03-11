export const calculateReductionPersonal = (familyAllowances) => {
    const {personal} = familyAllowances;
    return personal;
}
export  const calculateReductionDependant = (familyAllowances) => {
    const {dependant, numberOfDependant} = familyAllowances;
    return dependant * numberOfDependant;
}
export  const calculateReduction = (familyAllowances) =>{
    const reductionPersonal = calculateReductionPersonal(familyAllowances);
    const reductionDependant = calculateReductionDependant(familyAllowances);
    return {reductionPersonal, reductionDependant};
}