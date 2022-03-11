export const calculateUnemploymentInsurance = (grossSalary, salaryValue) => {
    const {area} = salaryValue;
    const {
        isChooseOtherInput,
        specificInsuranceAmount,
        unemploymentInsurancePercent
    } = salaryValue.insurance;

    if (isChooseOtherInput) {
        if (specificInsuranceAmount >= 61400000 && area === '4') {
            if (unemploymentInsurancePercent > 1) {
                return 61400000 * (unemploymentInsurancePercent / 100)
            }
            return 614000;
        }
        if (specificInsuranceAmount >= 68600000 && area === '3') {
            if (unemploymentInsurancePercent > 1) {
                return 68600000 * (unemploymentInsurancePercent / 100)
            }
            return 686000;
        }
        if (specificInsuranceAmount >= 78400000 && area === '2') {
            if (unemploymentInsurancePercent > 1) {
                return 78400000 * (unemploymentInsurancePercent / 100)
            }
            return 784000;
        }
        if (specificInsuranceAmount >= 88400000 && area === '1') {
            if (unemploymentInsurancePercent > 1) {
                return 88400000 * (unemploymentInsurancePercent / 100)
            }
            return 884000;
        }
        return ((unemploymentInsurancePercent / 100) * specificInsuranceAmount)
    } else {
        if (grossSalary >= 61400000 && area === '4') {
            if (unemploymentInsurancePercent > 1) {
                return 61400000 * (unemploymentInsurancePercent / 100);
            }
            return 614000;
        }
        if (grossSalary >= 68600000 && area === '3') {
            if (unemploymentInsurancePercent > 1) {
                return 68600000 * (+unemploymentInsurancePercent / 100);
            }
            return 686000;
        }
        if (grossSalary >= 78400000 && area === '2') {
            if (unemploymentInsurancePercent > 1) {
                return 78400000 * (unemploymentInsurancePercent / 100);
            }
            return 784000;
        }
        if (grossSalary >= 88400000 && area === '1') {
            if (unemploymentInsurancePercent > 1) {
                return 88400000 * (unemploymentInsurancePercent / 100);
            }
            return 884000;
        }
        return ((unemploymentInsurancePercent / 100) * grossSalary)
    }
}
export  const calculateUnemploymentInsurancePercentEmployerPay = (unemploymentInsurancePercent) => {
    return 1 + (1 - unemploymentInsurancePercent);
}
export const calculateUnemploymentInsuranceEmployerPay = (grossSalary, minimumSalary, unemploymentInsurancePercentEmployerPay, area) => {
    switch (area) {
        case "1":
            if (unemploymentInsurancePercentEmployerPay === 1 || unemploymentInsurancePercentEmployerPay === -1) {
                if (grossSalary >= 88400000) return 884000 * unemploymentInsurancePercentEmployerPay;
                else return grossSalary * (unemploymentInsurancePercentEmployerPay / 100);
            }
            if (grossSalary > (minimumSalary * 20) && grossSalary >= 88400000) {
                return (88400000) * (unemploymentInsurancePercentEmployerPay / 100);
            }
            if (grossSalary < (minimumSalary * 20) && grossSalary < 88400000) {
                return grossSalary * (unemploymentInsurancePercentEmployerPay / 100)
            } else {
                if (grossSalary >= 88400000) return 88400000 * (unemploymentInsurancePercentEmployerPay / 100)
                else return grossSalary * (unemploymentInsurancePercentEmployerPay / 100)
            }
        case "2":
            if (unemploymentInsurancePercentEmployerPay === 1 || unemploymentInsurancePercentEmployerPay === -1) {
                if (grossSalary >= 78400000) return 784000 * unemploymentInsurancePercentEmployerPay;
                else return grossSalary * (unemploymentInsurancePercentEmployerPay / 100);
            }
            if (grossSalary > (minimumSalary * 20) && grossSalary >= 78400000) {
                return (78400000) * (unemploymentInsurancePercentEmployerPay / 100);
            }
            if (grossSalary < (minimumSalary * 20) && grossSalary < 78400000) {
                return grossSalary * (unemploymentInsurancePercentEmployerPay / 100)
            } else {
                if (grossSalary >= 78400000) return 78400000 * (unemploymentInsurancePercentEmployerPay / 100)
                else return grossSalary * (unemploymentInsurancePercentEmployerPay / 100)
            }
        case "3":
            if (unemploymentInsurancePercentEmployerPay === 1 || unemploymentInsurancePercentEmployerPay === -1) {
                if (grossSalary >= 68600000) return 686000 * unemploymentInsurancePercentEmployerPay;
                else return grossSalary * (unemploymentInsurancePercentEmployerPay / 100);
            }
            if (grossSalary > (minimumSalary * 20) && grossSalary >= 68600000) {
                return (68600000) * (unemploymentInsurancePercentEmployerPay / 100);
            }
            if (grossSalary < (minimumSalary * 20) && grossSalary < 68600000) {
                return grossSalary * (unemploymentInsurancePercentEmployerPay / 100)
            } else {
                if (grossSalary >= 68600000) return 68600000 * (unemploymentInsurancePercentEmployerPay / 100)
                else return grossSalary * (unemploymentInsurancePercentEmployerPay / 100)
            }
        case "4":
            if (unemploymentInsurancePercentEmployerPay === 1 || unemploymentInsurancePercentEmployerPay === -1) {
                if (grossSalary >= 61400000) return 614000 * unemploymentInsurancePercentEmployerPay;
                else return grossSalary * (unemploymentInsurancePercentEmployerPay / 100);
            }
            if (grossSalary > (minimumSalary * 20) && grossSalary >= 61400000) {
                return (61400000) * (unemploymentInsurancePercentEmployerPay / 100);
            }
            if (grossSalary < (minimumSalary * 20) && grossSalary < 61400000) {
                return grossSalary * (unemploymentInsurancePercentEmployerPay / 100)
            } else {
                if (grossSalary >= 61400000) return 61400000 * (unemploymentInsurancePercentEmployerPay / 100)
                else return grossSalary * (unemploymentInsurancePercentEmployerPay / 100)
            }
        default:
            break;
    }
}