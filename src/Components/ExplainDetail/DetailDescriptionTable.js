import {Fragment} from 'react';
import ExplainDetail from './ExplainDetail';
import PersonalIncomTax from './PersonalIncomTax';
import EmployerPay from './EmployerPay';

const DetailDescriptionTable = (props) => {
    const {socialInsurancePercent, healthInsurancePercent, unemploymentInsurancePercent, result} = props;
    const {detailExplain, detailPersonalIncomeTax, employerPay} = result;

    return (
        <Fragment>
            <ExplainDetail detailExplain={detailExplain}
                           socialInsurancePercent={socialInsurancePercent}
                           healthInsurancePercent={healthInsurancePercent}
                           unemploymentInsurancePercent={unemploymentInsurancePercent}
            />
            <PersonalIncomTax detailPersonalIncomeTax={detailPersonalIncomeTax}/>
            <EmployerPay employerPay={employerPay}/>
        </Fragment>
    );
}

export default DetailDescriptionTable;
