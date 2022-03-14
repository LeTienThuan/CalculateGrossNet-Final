import {Fragment} from 'react';
import ExplainDetail from './ExplainDetail';
import PersonalIncomTax from './PersonalIncomeTax';
import EmployerPay from './EmployerPay';

const DetailDescriptionTable = (props) => {
    const {insurancePercent, result} = props;
    const {detailExplain, detailPersonalIncomeTax, employerPay} = result;

    return (
        <>
            <ExplainDetail detailExplain={detailExplain}
                           insurancePercent={insurancePercent}
            />
            <PersonalIncomTax detailPersonalIncomeTax={detailPersonalIncomeTax}/>
            <EmployerPay employerPay={employerPay}/>
        </>
    );
}

export default DetailDescriptionTable;
