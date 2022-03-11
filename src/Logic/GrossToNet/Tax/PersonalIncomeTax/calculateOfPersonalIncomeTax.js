export const calculatePersonalIncomeTax = (taxableIncome) => {
    if(taxableIncome === 0){
        return 0;
    }
    if (taxableIncome > 0 && taxableIncome <= 5000000) {
        return taxableIncome * 0.05;
    }
    if (taxableIncome > 5000000 && taxableIncome <= 10000000) {
        return (taxableIncome * 0.1) - 250000;
    }
    if (taxableIncome > 10000000 && taxableIncome <= 18000000) {
        return (taxableIncome * 0.15) - 750000;
    }
    if (taxableIncome > 18000000 && taxableIncome <= 32000000) {
        return (taxableIncome * 0.2) - 1650000;
    }
    if (taxableIncome > 32000000 && taxableIncome <= 52000000) {
        return (taxableIncome * 0.25) - 3250000;
    }
    if (taxableIncome > 52000000 && taxableIncome <= 80000000) {
        return (taxableIncome * 0.3) - 5850000;
    }
    if(taxableIncome > 80000000){
        return (taxableIncome * 0.35) - 9850000;
    }
}
export const calculateDetailRangePersonalIncomeTax = (taxableIncome, detailPersonalIncomeTax) => {
        if (taxableIncome <= 5000000) {
            detailPersonalIncomeTax.toFiveMillionRange = taxableIncome * 0.05;
            detailPersonalIncomeTax.upperFiveToTenMillionRange = 0;
            detailPersonalIncomeTax.upperTenToEighteenMillionRange = 0;
            detailPersonalIncomeTax.upperEighteenToThirtyTwoMillionRange = 0;
            detailPersonalIncomeTax.upperThirtyTwoToFiftyTwoMillionRange = 0;
            detailPersonalIncomeTax.upperFiftyTwoToEightyMillionRange = 0;
            detailPersonalIncomeTax.upperEightyMillionRange = 0;
            return detailPersonalIncomeTax;
        }
        if (taxableIncome > 5000000 && taxableIncome <= 10000000) {
            detailPersonalIncomeTax.toFiveMillionRange = 250000;
            detailPersonalIncomeTax.upperFiveToTenMillionRange = (taxableIncome - 5000000) * 0.1;
            detailPersonalIncomeTax.upperTenToEighteenMillionRange = 0;
            detailPersonalIncomeTax.upperEighteenToThirtyTwoMillionRange = 0;
            detailPersonalIncomeTax.upperThirtyTwoToFiftyTwoMillionRange = 0;
            detailPersonalIncomeTax.upperFiftyTwoToEightyMillionRange = 0;
            detailPersonalIncomeTax.upperEightyMillionRange = 0;
            return detailPersonalIncomeTax;
        }
        if (taxableIncome > 10000000 && taxableIncome <= 18000000) {
            detailPersonalIncomeTax.toFiveMillionRange = 250000;
            detailPersonalIncomeTax.upperFiveToTenMillionRange = 500000;
            detailPersonalIncomeTax.upperTenToEighteenMillionRange = (taxableIncome - 10000000) * 0.15;
            detailPersonalIncomeTax.upperEighteenToThirtyTwoMillionRange = 0;
            detailPersonalIncomeTax.upperThirtyTwoToFiftyTwoMillionRange = 0;
            detailPersonalIncomeTax.upperFiftyTwoToEightyMillionRange = 0;
            detailPersonalIncomeTax.upperEightyMillionRange = 0;
            return detailPersonalIncomeTax
        }
        if (taxableIncome > 18000000 && taxableIncome <= 32000000) {
            detailPersonalIncomeTax.toFiveMillionRange = 250000;
            detailPersonalIncomeTax.upperFiveToTenMillionRange = 500000;
            detailPersonalIncomeTax.upperTenToEighteenMillionRange = 1200000;
            detailPersonalIncomeTax.upperEighteenToThirtyTwoMillionRange = (taxableIncome - 18000000) * 0.2;
            detailPersonalIncomeTax.upperThirtyTwoToFiftyTwoMillionRange = 0;
            detailPersonalIncomeTax.upperFiftyTwoToEightyMillionRange = 0;
            detailPersonalIncomeTax.upperEightyMillionRange = 0;
            return detailPersonalIncomeTax;
        }
        if (taxableIncome > 32000000 && taxableIncome < 52000000) {
            detailPersonalIncomeTax.toFiveMillionRange = 250000;
            detailPersonalIncomeTax.upperFiveToTenMillionRange = 500000;
            detailPersonalIncomeTax.upperTenToEighteenMillionRange = 1200000;
            detailPersonalIncomeTax.upperEighteenToThirtyTwoMillionRange = 2800000;
            detailPersonalIncomeTax.upperThirtyTwoToFiftyTwoMillionRange = (taxableIncome - 32000000) * 0.25;
            detailPersonalIncomeTax.upperFiftyTwoToEightyMillionRange = 0;
            detailPersonalIncomeTax.upperEightyMillionRange = 0;
            return detailPersonalIncomeTax;
        }
        if (taxableIncome > 52000000 && taxableIncome <= 80000000) {
            detailPersonalIncomeTax.toFiveMillionRange = 250000;
            detailPersonalIncomeTax.upperFiveToTenMillionRange = 500000;
            detailPersonalIncomeTax.upperTenToEighteenMillionRange = 1200000;
            detailPersonalIncomeTax.upperEighteenToThirtyTwoMillionRange = 2800000;
            detailPersonalIncomeTax.upperThirtyTwoToFiftyTwoMillionRange = 5000000;
            detailPersonalIncomeTax.upperFiftyTwoToEightyMillionRange = (taxableIncome - 52000000) * 0.3;
            detailPersonalIncomeTax.upperEightyMillionRange = 0;
            return detailPersonalIncomeTax;
        }
        detailPersonalIncomeTax.toFiveMillionRange = 250000;
        detailPersonalIncomeTax.upperFiveToTenMillionRange = 500000;
        detailPersonalIncomeTax.upperTenToEighteenMillionRange = 1200000;
        detailPersonalIncomeTax.upperEighteenToThirtyTwoMillionRange = 2800000;
        detailPersonalIncomeTax.upperThirtyTwoToFiftyTwoMillionRange = 5000000;
        detailPersonalIncomeTax.upperFiftyTwoToEightyMillionRange = 8400000;
        detailPersonalIncomeTax.upperEightyMillionRange = (taxableIncome - 80000000) * 0.35;
        return detailPersonalIncomeTax;
}