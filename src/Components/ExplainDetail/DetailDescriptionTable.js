import {Fragment} from 'react';
import ExplainDetail from './ExplainDetail';
import PersonalIncomTax from './PersonalIncomTax';
import EmployerPay from './EmployerPay';

const DetailDescriptionTable = (props) => {
    const {insurancePercent, result} = props;
    const {detailExplain, detailPersonalIncomeTax, employerPay} = result;

    return (
        <Fragment>
            <ExplainDetail detailExplain={detailExplain}
                           insurancePercent={insurancePercent}
            />
            <PersonalIncomTax detailPersonalIncomeTax={detailPersonalIncomeTax}/>
            <EmployerPay employerPay={employerPay}/>
        </Fragment>
    );
}

export default DetailDescriptionTable;
