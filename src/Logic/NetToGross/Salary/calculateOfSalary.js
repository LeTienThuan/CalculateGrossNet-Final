export const calculateNetSalaryBasedNetToGross = (income) => {
    const {incomeVND, incomeUSD, exchangeRate} = income;
    return incomeVND + (incomeUSD * exchangeRate);
}
export const calculateGrossSalaryBasedNetToGross = (insurance, incomeBeforeTax, grossAssume, minimumSalary, area) => {
    const {
        isChooseOtherInput,
        socialInsurancePercent,
        healthInsurancePercent
    } = insurance;
    let {unemploymentInsurancePercent} = insurance;
    if (isChooseOtherInput) return grossAssume;
    switch (area) {
        case '1':
            if ((unemploymentInsurancePercent === 1 || unemploymentInsurancePercent === -1) && grossAssume < 88400000) {
                if (grossAssume < minimumSalary * 20) {
                    return grossAssume;
                } else {
                    const socialInsurance = (socialInsurancePercent / 100) * minimumSalary * 20;
                    const healthInsurance = (healthInsurancePercent / 100) * minimumSalary * 20;
                    return (+((incomeBeforeTax + socialInsurance + healthInsurance) / (1 - (unemploymentInsurancePercent / 100))).toFixed(0));
                }
            }
            if ((unemploymentInsurancePercent === 1 || unemploymentInsurancePercent === -1) && grossAssume > 88400000) {
                if (grossAssume > minimumSalary * 20) {
                    const socialInsurance = (socialInsurancePercent / 100) * minimumSalary * 20;
                    const healthInsurance = (healthInsurancePercent / 100) * minimumSalary * 20;
                    return (incomeBeforeTax + socialInsurance + healthInsurance + 884000);
                } else {
                    return (+((incomeBeforeTax + 884000) / (1 - ((socialInsurancePercent / 100) + (healthInsurancePercent / 100)))).toFixed(0))
                }
            }
            if (unemploymentInsurancePercent !== 1 && unemploymentInsurancePercent !== -1 && grossAssume < 88400000) {
                if (grossAssume > minimumSalary * 20) {
                    const socialInsurance = (socialInsurancePercent / 100) * minimumSalary * 20;
                    const healthInsurance = (healthInsurancePercent / 100) * minimumSalary * 20;
                    return (+((incomeBeforeTax + socialInsurance + healthInsurance) / (1 - (unemploymentInsurancePercent / 100))).toFixed(0));
                } else {
                    return grossAssume
                }
            }
            if (unemploymentInsurancePercent !== 1 && unemploymentInsurancePercent !== -1 && grossAssume > 88400000) {
                if (grossAssume > minimumSalary * 20) {
                    const socialInsurance = (socialInsurancePercent / 100) * minimumSalary * 20;
                    const healthInsurance = (healthInsurancePercent / 100) * minimumSalary * 20;
                    unemploymentInsurancePercent /= 100;
                    return (incomeBeforeTax + socialInsurance + healthInsurance + (88400000 * unemploymentInsurancePercent));
                } else {
                    unemploymentInsurancePercent /= 100;
                    const socialInsurance = (+socialInsurancePercent / 100);
                    const healthInsurance = (+healthInsurancePercent / 100);
                    return (incomeBeforeTax + (88400000 * unemploymentInsurancePercent)) / (1 - (socialInsurance + healthInsurance));
                }
            }
            break;
        case '2':
            if ((unemploymentInsurancePercent === 1 || unemploymentInsurancePercent === -1) && grossAssume < 78400000) {
                if (grossAssume < minimumSalary * 20) {
                    return grossAssume;
                } else {
                    const socialInsurance = (socialInsurancePercent / 100) * minimumSalary * 20;
                    const healthInsurance = (healthInsurancePercent / 100) * minimumSalary * 20;
                    return (+((incomeBeforeTax + socialInsurance + healthInsurance) / (1 - (+unemploymentInsurancePercent / 100))).toFixed(0));
                }
            }
            if ((unemploymentInsurancePercent === 1 || unemploymentInsurancePercent === -1) && grossAssume > 784000000) {
                if (grossAssume > minimumSalary * 20) {
                    const socialInsurance = (socialInsurancePercent / 100) * minimumSalary * 20;
                    const healthInsurance = (healthInsurancePercent / 100) * minimumSalary * 20;
                    return (incomeBeforeTax + socialInsurance + healthInsurance + 784000);
                } else {
                    return (+((incomeBeforeTax + 784000) / (1 - ((socialInsurancePercent / 100) + (healthInsurancePercent / 100)))).toFixed(0))
                }
            }
            if (unemploymentInsurancePercent !== 1 && unemploymentInsurancePercent !== -1 && grossAssume < 784000000) {
                if (grossAssume > minimumSalary * 20) {
                    const socialInsurance = (socialInsurancePercent / 100) * minimumSalary * 20;
                    const healthInsurance = (healthInsurancePercent / 100) * minimumSalary * 20;
                    return (+((incomeBeforeTax + socialInsurance + healthInsurance) / (1 - (unemploymentInsurancePercent / 100))).toFixed(0));
                } else {
                    return grossAssume
                }
            }
            if (unemploymentInsurancePercent !== 1 && unemploymentInsurancePercent !== -1 && grossAssume > 784000000) {
                if (grossAssume > minimumSalary * 20) {
                    const socialInsurance = (socialInsurancePercent / 100) * minimumSalary * 20;
                    const healthInsurance = (healthInsurancePercent / 100) * minimumSalary * 20;
                    unemploymentInsurancePercent /= 100;
                    return (incomeBeforeTax + socialInsurance + healthInsurance + (784000000 * (unemploymentInsurancePercent)));
                } else {
                    unemploymentInsurancePercent /= 100;
                    const socialInsurance = (socialInsurancePercent / 100);
                    const healthInsurance = (healthInsurancePercent / 100);
                    return (incomeBeforeTax + (784000000 * unemploymentInsurancePercent)) / (1 - (socialInsurance + healthInsurance));
                }
            }
            break;
        case '3':
            if ((unemploymentInsurancePercent === 1 || unemploymentInsurancePercent === -1) && grossAssume < 68600000) {
                if (grossAssume < minimumSalary * 20) {
                    return grossAssume;
                } else {
                    const socialInsurance = (socialInsurancePercent / 100) * minimumSalary * 20;
                    const healthInsurance = (healthInsurancePercent / 100) * minimumSalary * 20;
                    return (+((incomeBeforeTax + socialInsurance + healthInsurance) / (1 - (unemploymentInsurancePercent / 100))).toFixed(0));
                }
            }
            if ((unemploymentInsurancePercent === 1 || unemploymentInsurancePercent === -1) && grossAssume > 68600000) {
                if (grossAssume > minimumSalary * 20) {
                    const socialInsurance = (socialInsurancePercent / 100) * minimumSalary * 20;
                    const healthInsurance = (healthInsurancePercent / 100) * minimumSalary * 20;
                    return (incomeBeforeTax + socialInsurance + healthInsurance + 686000);
                } else {
                    return (+((incomeBeforeTax + 686000) / (1 - ((socialInsurancePercent / 100) + (healthInsurancePercent / 100)))).toFixed(0))
                }
            }
            if (unemploymentInsurancePercent !== 1 && unemploymentInsurancePercent !== -1 && grossAssume < 68600000) {
                if (grossAssume > minimumSalary * 20) {
                    const socialInsurance = (socialInsurancePercent / 100) * minimumSalary * 20;
                    const healthInsurance = (healthInsurancePercent / 100) * minimumSalary * 20;
                    return (+((incomeBeforeTax + socialInsurance + healthInsurance) / (1 - (unemploymentInsurancePercent / 100))).toFixed(0));
                } else {
                    return grossAssume
                }
            }
            if (unemploymentInsurancePercent !== 1 && unemploymentInsurancePercent !== -1 && grossAssume > 68600000) {
                if (grossAssume > minimumSalary * 20) {
                    const socialInsurance = (socialInsurancePercent / 100) * minimumSalary * 20;
                    const healthInsurance = (healthInsurancePercent / 100) * minimumSalary * 20;
                    unemploymentInsurancePercent /= 100;
                    return incomeBeforeTax + socialInsurance + healthInsurance + (68600000 * unemploymentInsurancePercent);
                } else {
                    unemploymentInsurancePercent /= 100;
                    const socialInsurance = (socialInsurancePercent / 100);
                    const healthInsurance = (healthInsurancePercent / 100);
                    return (incomeBeforeTax + (68600000 * unemploymentInsurancePercent)) / (1 - (socialInsurance + healthInsurance));
                }
            }
            break;
        case '4':
            if ((unemploymentInsurancePercent === 1 || unemploymentInsurancePercent === -1) && grossAssume < 61400000) {
                if (grossAssume < minimumSalary * 20) {
                    return grossAssume;
                } else {
                    const socialInsurance = (socialInsurancePercent / 100) * minimumSalary * 20;
                    const healthInsurance = (healthInsurancePercent / 100) * minimumSalary * 20;
                    return (+((incomeBeforeTax + socialInsurance + healthInsurance) / (1 - (unemploymentInsurancePercent / 100))).toFixed(0));
                }
            }
            if ((unemploymentInsurancePercent === 1 || unemploymentInsurancePercent === -1) && grossAssume > 61400000) {
                if (grossAssume > minimumSalary * 20) {
                    const socialInsurance = (socialInsurancePercent / 100) * minimumSalary * 20;
                    const healthInsurance = (healthInsurancePercent / 100) * minimumSalary * 20;
                    return (incomeBeforeTax + socialInsurance + healthInsurance + 614000);
                } else {
                    return (+((incomeBeforeTax + 614000) / (1 - ((+socialInsurancePercent / 100) + (healthInsurancePercent / 100)))).toFixed(0))
                }
            }
            if (unemploymentInsurancePercent !== 1 && unemploymentInsurancePercent !== -1 && grossAssume < 61400000) {
                if (grossAssume > (minimumSalary * 20)) {
                    const socialInsurance = (socialInsurancePercent / 100) * minimumSalary * 20;
                    const healthInsurance = (healthInsurancePercent / 100) * minimumSalary * 20;
                    return (+((incomeBeforeTax + socialInsurance + healthInsurance) / (1 - (unemploymentInsurancePercent / 100))).toFixed(0));
                } else {
                    return grossAssume
                }
            }
            if (unemploymentInsurancePercent !== 1 && unemploymentInsurancePercent !== -1 && grossAssume > 61400000) {
                if (grossAssume > minimumSalary * 20) {
                    const socialInsurance = (socialInsurancePercent / 100) * minimumSalary * 20;
                    const healthInsurance = (healthInsurancePercent / 100) * minimumSalary * 20;
                    unemploymentInsurancePercent /= 100;
                    return incomeBeforeTax + socialInsurance + healthInsurance + (61400000 * unemploymentInsurancePercent);
                } else {
                    unemploymentInsurancePercent /= 100;
                    const socialInsurance = (socialInsurancePercent / 100);
                    const healthInsurance = (healthInsurancePercent / 100);
                    return (+((incomeBeforeTax + (61400000 * unemploymentInsurancePercent)) / (1 - (socialInsurance + healthInsurance))).toFixed(0));
                }
            }
            break;
        default:
            break;
    }

}