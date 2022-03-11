import classesTable from './Table.module.css';
import classesGeneral from '../CSS/General.module.css'
import classes from './EmployerPay.module.css'
import {formatterMoneyVND} from "../Result/Result";
const EmployerPay = (props) => {

	const formatter = formatterMoneyVND;
	const {employerPay} = props;
	const {
		grossSalary,
		socialInsuranceEmployerPay,
		healthInsuranceEmployerPay,
		unemploymentInsuranceEmployerPay,
		socialInsurancePercentEmployerPay,
		healthInsurancePercentEmployerPay ,
		unemploymentInsurancePercentEmployerPay,
		total
	} = employerPay;
    return (
        <div className={classes.footer}>
            <p className={classesGeneral.title}>Người sử dụng lao động trả (VND)</p>
            <table className={classesTable['data-list']}>
	            <tbody>
                    <tr>
                        <th>Lương GROSS</th>
		                <td>{formatter(grossSalary)}</td>
	                </tr>
	                <tr>
		                <th>Bảo hiểm xã hội ({socialInsurancePercentEmployerPay}%)</th>
		                <td>{formatter(socialInsuranceEmployerPay)}</td>
	                </tr>
	                <tr>
		                <th>Bảo hiểm y tế ({healthInsurancePercentEmployerPay}%)</th>
		                <td>{formatter(healthInsuranceEmployerPay)}</td>
	                </tr>
	                <tr>
		                <th>Bảo hiểm thất nghiệp ({unemploymentInsurancePercentEmployerPay}% - lương tối thiểu vùng)</th>
		                <td>{formatter(unemploymentInsuranceEmployerPay)}</td>
	                </tr>
	                <tr className={classesTable.rownote}>
                        <th>Tổng cộng</th>
		                <td>{formatter(total)}</td>
	                </tr>
                </tbody>
            </table>
        </div>
    );
}

export default EmployerPay;
