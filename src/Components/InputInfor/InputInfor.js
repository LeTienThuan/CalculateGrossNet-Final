import Income from "./Income";
import Insurance from "./Insurance";
import Area from "./Area";
import FamilyAllowances from "./FamilyAllowances";

const InputInfor = (props) => {
    const {onUpdateData, salaryValue} = props;
    const {income, insurance, familyAllowances, area} = salaryValue;

    return (
        <>
            <Income income={income}
                    onUpdateData={onUpdateData}
            />
            <Insurance insurance={insurance}
                       onUpdateData={onUpdateData}
            />
            <Area area={area}
                  onUpdateData={onUpdateData}
            />
            <FamilyAllowances familyAllowances={familyAllowances}
                              onUpdateData={onUpdateData}
            />
        </>
    );
}

export default InputInfor;
