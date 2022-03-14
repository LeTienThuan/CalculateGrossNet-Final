import classes from '../CSS/General.module.css';
import {useEffect, useState} from "react";
import InputNumber from "./InputNumber";

const FamilyAllowances = (props) => {
    const [familyAllowances, setFamilyAllowances] = useState(props.familyAllowances)
    const {personal, dependant, numberOfDependant} = familyAllowances;

    useEffect(() => {
        props.onUpdateFamilyAllowances(familyAllowances)
    }, [familyAllowances])

    const changeFamilyAllowancesValue = (field) => (event) => {
        setFamilyAllowances({...familyAllowances, [field]: (+event.target.value)})
    }

    return (
        <div className={classes['fs-13']}>
            <p className={classes.title}>Giảm trừ gia cảnh: </p>
            <InputNumber classes={`${classes['w-100']} ${classes['me-8']}`}
                         value={personal}
                         onChange={changeFamilyAllowancesValue}
                         field='personal'
                         label='Cá nhân: '
                         unit=' VND'
            />
            <InputNumber classes={`${classes['w-100']} ${classes['me-8']}`}
                         value={dependant}
                         onChange={changeFamilyAllowancesValue}
                         field='dependant'
                         label='Phụ thuộc: '
                         unit=' VND'
            />
            <InputNumber classes={`${classes['w-40']}`}
                         value={numberOfDependant}
                         onChange={changeFamilyAllowancesValue}
                         field='numberOfDependant'
                         label='Số người phụ thuộc: '
            />
        </div>
    );
}

export default FamilyAllowances;
