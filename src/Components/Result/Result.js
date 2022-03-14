import classes from "../Result/Result.module.css"

export const formatterMoneyVND = (amount) =>
    new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
        minimumFractionDigits: 0
    }).format(amount);

const formatterMoneyUSD = (amount) => new Intl.NumberFormat('en-US', {}).format(amount);

const Result = (props) => {
    const {overallResult} = props
    const {grossSalaryVND, netSalaryVND, grossSalaryUSD, netSalaryUSD} = overallResult;

    return (
        <div className={classes.result}>
            <b>GROSS</b> : {formatterMoneyVND(grossSalaryVND)} (VND)
            ≈ {formatterMoneyUSD(grossSalaryUSD)} (USD)
            <br/>
            <b>NET</b> : {formatterMoneyVND(netSalaryVND)} (VND)
            ≈ {formatterMoneyUSD(netSalaryUSD)} (USD)
        </div>
    );
};

export default Result;