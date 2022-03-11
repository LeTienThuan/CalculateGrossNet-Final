import classes from './Table.module.css';
import classesGeneral from '../CSS/General.module.css'
import {formatterMoney} from "../Result/Result";

const PersonalIncomTax = (props) => {

    const formatter = formatterMoney;
    const {
        toFiveMillionRange,
        upperFiveToTenMillionRange,
        upperTenToEighteenMillionRange,
        upperEighteenToThirtyTwoMillionRange,
        upperThirtyTwoToFiftyTwoMillionRange,
        upperFiftyTwoToEightyMillionRange,
        upperEightyMillionRange,
    } = props.detailPersonalIncomeTax;

    return (
        <div>
            <p className={classesGeneral.title}>(*) Chi tiết thuế thu nhập cá nhân (VND)</p>
            <table className={classes['data-list']}>
                <tbody>
                <tr className={classes.rownote}>
                    <th>Mức chịu thuế</th>
                    <th>Thuế suất</th>
                    <th>Tiền nộp</th>
                </tr>
                <tr>
                    <td>Đến 5 triệu VND</td>
                    <td>5%</td>
                    <td>{formatter('vi-VN', 'VND', 0, toFiveMillionRange)}</td>
                </tr>
                <tr>
                    <td>Trên 5 triệu VND đến 10 triệu VND</td>
                    <td>10%</td>
                    <td>{formatter('vi-VN', 'VND', 0, upperFiveToTenMillionRange)}</td>
                </tr>
                <tr>
                    <td>Trên 10 triệu VND đến 18 triệu VND</td>
                    <td>15%</td>
                    <td>{formatter('vi-VN', 'VND', 0, upperTenToEighteenMillionRange)}</td>
                </tr>
                <tr>
                    <td>Trên 18 triệu VND đến 32 triệu VND</td>
                    <td>20%</td>
                    <td>{formatter('vi-VN', 'VND', 0, upperEighteenToThirtyTwoMillionRange)}</td>
                </tr>
                <tr>
                    <td>Trên 32 triệu VND đến 52 triệu VND</td>
                    <td>25%</td>
                    <td>{formatter('vi-VN', 'VND', 0, upperThirtyTwoToFiftyTwoMillionRange)}</td>
                </tr>
                <tr>
                    <td>Trên 52 triệu VND đến 80 triệu VND</td>
                    <td>30%</td>
                    <td>{formatter('vi-VN', 'VND', 0, upperFiftyTwoToEightyMillionRange)}</td>
                </tr>
                <tr>
                    <td>Trên 80 triệu VND</td>
                    <td>35%</td>
                    <td>{formatter('vi-VN', 'VND', 0, upperEightyMillionRange)}</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
}

export default PersonalIncomTax;
