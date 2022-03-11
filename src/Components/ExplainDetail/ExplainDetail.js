import classes from './Table.module.css'
import classesGeneral from '../CSS/General.module.css'
import {formatterMoney} from "../Result/Result";
const ExplainDetail = (props) => {

	const formatter = formatterMoney;
	const {
		grossSalary,
		socialInsurance,
		healthInsurance,
		unemploymentInsurance,
		incomeBeforeTax,
		reductionPersonal,
		reductionDependant,
		taxableIncome,
		personalIncomeTax,
		netSalary
	} = props.detailExplain;

    return (
        <div>
			<p className={classesGeneral.title}>Diễn giải chi tiết (VND)</p>
            <table className={classes['data-list']}>
	            <tbody><tr className={classes.rownote}>
		                    <th>Lương GROSS</th>
		                    <td className={classesGeneral['w-100']}>
								{formatter('vi-VN', 'VND',0,grossSalary)}
							</td>
	                    </tr>
	                    <tr>
		                    <th>Bảo hiểm xã hội ({props.socialInsurancePercent}%)</th>
		                    <td className={classesGeneral['w-100']}>
								- {formatter('vi-VN', 'VND',0,socialInsurance)}
							</td>
	                    </tr>
	                    <tr>
		                    <th>Bảo hiểm y tế ({props.healthInsurancePercent}%)</th>
							<td className={classesGeneral['w-100']}>
								- {formatter('vi-VN', 'VND',0,healthInsurance)}
							</td>
	                    </tr>
						<tr>
							<th>Bảo hiểm thất nghiệp ({props.unemploymentInsurancePercent}% - lương tối thiểu vùng)</th>
							<td className={classesGeneral['w-100']}>
								- {formatter('vi-VN', 'VND',0,unemploymentInsurance)}
							</td>
						</tr>
						<tr className={classes.rownote}>
							<th>Thu nhập trước thuế</th>
							<td className={classesGeneral['w-100']}>
								 {formatter('vi-VN', 'VND',0,incomeBeforeTax)}
							</td>
						</tr>
						<tr>
							<th>Giảm trừ gia cảnh bản thân</th>
							<td className={classesGeneral['w-100']}>
								- {formatter('vi-VN', 'VND',0,reductionPersonal)}
							</td>
						</tr>
						<tr>
							<th>Giảm trừ gia cảnh người phụ thuộc</th>
							<td className={classesGeneral['w-100']}>
								- {formatter('vi-VN', 'VND',0,reductionDependant)}
							</td>
						</tr>
						<tr className={classes.rownote}>
							<th>Thu nhập chịu thuế</th>
							<td className={classesGeneral['w-100']}>
								{formatter('vi-VN', 'VND',0,taxableIncome)}
							</td>
						</tr>
						<tr>
							<th>Thuế thu nhập cá nhân(*)</th>
							<td className={classesGeneral['w-100']}>
								- {formatter('vi-VN', 'VND',0,personalIncomeTax)}
							</td>
						</tr>
						<tr className={classes.rownote}>
							<td>
								<b>Lương NET</b><br/>
								(Thu nhập trước thuế - Thuế thu nhập cá nhân)
							</td>
							<td className={classesGeneral['w-100']}>
								 {formatter('vi-VN', 'VND',0,netSalary)}
							</td>
						</tr>
				</tbody>
			</table>
        </div>
    );
}

export default ExplainDetail;
