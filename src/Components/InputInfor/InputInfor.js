import Income from "./Income";
import Insurance from "./Insurance";
import Area from "./Area";
import FamilyAllowances from "./FamilyAllowances";
import classes from '../CSS/General.module.css'

const InputInfor = (props) => {
    const {onUpdateIncome, onUpdateInsurance, onUpdateArea, onUpdateFamilyAllowances, salaryValue} = props;
    const {income, insurance, familyAllowances, area} = salaryValue;

    return (
        <>
            <p className={classes.title}>Tính lương Gross sang NET và ngược lại (cập nhật 1/1/2020)</p>
            <Income income={income}
                    onUpdateIncome={onUpdateIncome}
            />
            <Insurance insurance={insurance}
                       onUpdateInsurance={onUpdateInsurance}
            />
            <Area area={area}
                  onUpdateArea={onUpdateArea}
            />
            <FamilyAllowances familyAllowances={familyAllowances}
                              onUpdateFamilyAllowances={onUpdateFamilyAllowances}
            />
        </>
    );
}

export default InputInfor;
