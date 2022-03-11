export const calculateAssumeGross = (incomeBeforeTax, minimumSalary, insurance, area) => {
    const {
        isChooseOtherInput,
        socialInsurancePercent,
        healthInsurancePercent,
        specificInsuranceAmount,
        unemploymentInsurancePercent
    } = insurance;

    if(isChooseOtherInput){
        let socialInsurance = (socialInsurancePercent/100) * minimumSalary * 20;
        let healthInsurance = (healthInsurancePercent/100) * minimumSalary * 20;
        if(specificInsuranceAmount < minimumSalary * 20){
             socialInsurance = (socialInsurancePercent/100) * specificInsuranceAmount;
             healthInsurance = (healthInsurancePercent/100) * specificInsuranceAmount;
        }
        switch (area) {
            case '1':
                if(specificInsuranceAmount < 88400000){
                    const unemploymentInsurance = (unemploymentInsurancePercent/100) * specificInsuranceAmount;
                    return incomeBeforeTax + socialInsurance + healthInsurance + unemploymentInsurance;
                }
                else{
                    const unemploymentInsurance = (unemploymentInsurancePercent/100) * 88400000;
                    return incomeBeforeTax + socialInsurance + healthInsurance + unemploymentInsurance;
                }
            case '2':
                if(specificInsuranceAmount < 78400000){
                    const unemploymentInsurance = (+unemploymentInsurancePercent/100) * (+specificInsuranceAmount);
                    return incomeBeforeTax + socialInsurance + healthInsurance + unemploymentInsurance;
                }
                else{
                    const unemploymentInsurance = (+unemploymentInsurancePercent/100) * 78400000;
                    return incomeBeforeTax + socialInsurance + healthInsurance + unemploymentInsurance;
                }
            case '3':
                if((+specificInsuranceAmount) < 68600000){
                    const unemploymentInsurance = (unemploymentInsurancePercent/100) * specificInsuranceAmount;
                    return incomeBeforeTax + socialInsurance + healthInsurance + unemploymentInsurance;
                }
                else{
                    const unemploymentInsurance = (unemploymentInsurancePercent/100) * 68600000;
                    return incomeBeforeTax + socialInsurance + healthInsurance + unemploymentInsurance;
                }
            case '4':
                if((+specificInsuranceAmount) < 61400000){
                    const unemploymentInsurance = (unemploymentInsurancePercent/100) * specificInsuranceAmount;
                    return incomeBeforeTax + socialInsurance + healthInsurance + unemploymentInsurance;
                }
                else{
                    const unemploymentInsurance = (unemploymentInsurancePercent/100) * 61400000;
                    return incomeBeforeTax + socialInsurance + healthInsurance + unemploymentInsurance;
                }
            default:
                break;
        }
        return incomeBeforeTax ;
    }
    const totalPercent = (socialInsurancePercent + healthInsurancePercent + unemploymentInsurancePercent) / 100;
    return (+(incomeBeforeTax / (1 - totalPercent)).toFixed(0));
}