import classes from '../CSS/General.module.css'
import VerticalTable from "./VerticalTable";

const ExplainDetail = (props) => {

    const {detailExplain, insurancePercent} = props;
    const {socialInsurancePercent, healthInsurancePercent, unemploymentInsurancePercent} = insurancePercent;
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
    } = detailExplain;
    const data = [
        {title: 'Lương GROSS', content: grossSalary, isGrayBackground: true},
        {title: `Bảo hiểm xã hội (${socialInsurancePercent}%)`, content: socialInsurance},
        {title: `Bảo hiểm y tế (${healthInsurancePercent}%)`, content: healthInsurance},
        {
            title: `Bảo hiểm thất nghiệp (${unemploymentInsurancePercent}% - lương tối thiểu vùng)`,
            content: unemploymentInsurance
        },
        {title: 'Thu nhập trước thuế', content: incomeBeforeTax, isGrayBackground: true},
        {title: 'Giảm trừ gia cảnh bản thân', content: reductionPersonal},
        {title: 'Giảm trừ gia cảnh người phụ thuộc', content: reductionDependant},
        {title: 'Thu nhập chịu thuế', content: taxableIncome, isGrayBackground: true},
        {title: 'Thuế thu nhập cá nhân (*)', content: personalIncomeTax},
        {title: 'Lương NET',explainTitle:'(Thu nhập trước thuế - Thuế thu nhập cá nhân)' ,content: netSalary}
    ]
    return (<>
                <p className={classes.title}>Diễn giải chi tiết (VND)</p>
                <VerticalTable dataStore={data}/>
            </>
    );
}

export default ExplainDetail;
