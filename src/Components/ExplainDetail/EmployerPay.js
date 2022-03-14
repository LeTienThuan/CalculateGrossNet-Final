import classesGeneral from '../CSS/General.module.css'
import classes from './EmployerPay.module.css'
import VerticalTable from "./VerticalTable";
const EmployerPay = (props) => {

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
	const data = [
		{title: 'Lương GROSS', content: grossSalary},
		{title: `Bảo hiểm xã hội (${socialInsurancePercentEmployerPay}%)`, content: socialInsuranceEmployerPay},
		{title: `Bảo hiểm y tế (${healthInsurancePercentEmployerPay}%)`, content: healthInsuranceEmployerPay},
		{title: `Bảo hiểm thất nghiệp (${unemploymentInsurancePercentEmployerPay}% - lương tối thiểu vùng)`, content: unemploymentInsuranceEmployerPay},
		{title: 'Tổng cộng', content: total}
	]
    return (
        <div className={classes.footer}>
            <p className={classesGeneral.title}>Người sử dụng lao động trả (VND)</p>
			<VerticalTable dataStore={data}/>
        </div>
    );
}

export default EmployerPay;
