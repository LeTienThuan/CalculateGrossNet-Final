import classes from "../Result/Result.module.css"

export const formatterMoney = (location, currency, minimumFractionDigits, amount) => {
    return new Intl.NumberFormat(location, {
        style: 'currency',
        currency: currency,
        minimumFractionDigits: minimumFractionDigits || 0
    }).format(amount);
}
const Result = (props) => {
    const {grossSalaryVND, netSalaryVND, grossSalaryUSD, netSalaryUSD} = props;

    return (
        <div className={classes.result}>
            <b>GROSS</b> : {formatterMoney('vi-VN', 'VND', 0, grossSalaryVND)} (VND)
            ≈ {formatterMoney('en-US', 'USD', 2, grossSalaryUSD)} (USD)
            <br/>
            <b>NET</b> : {formatterMoney('vi-VN', 'VND', 0, netSalaryVND)} (VND)
            ≈ {formatterMoney('en-US', 'USD', 2, netSalaryUSD)} (USD)
        </div>
    );
};

export default Result;