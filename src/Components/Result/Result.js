import classes from "../Result/Result.module.css"

export const formatterMoneyVND = (amount) => {
    return new Intl.NumberFormat('vi-VN', {
        minimumFractionDigits: 0
    }).format(amount);
}
const formatterMoneyUSD = (amount) => {
    return new Intl.NumberFormat('en-US', {
    }).format(amount);
}
const Result = (props) => {
    const {grossSalaryVND, netSalaryVND, grossSalaryUSD, netSalaryUSD} = props;

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