import classes from '../CSS/General.module.css';
import {useEffect, useState} from "react";

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
            <span>Cá nhân:
                <input  className={classes['w-70']}
                        type='number'
                        value={personal}
                        onChange={changeFamilyAllowancesValue('personal')}
                /> VND &emsp;
            </span>
            <span>Phụ thuộc:
                <input className={classes['w-70']}
                       type='number'
                       value={dependant}
                       onChange={changeFamilyAllowancesValue('dependant')}
                /> VND &emsp;
            </span>
            <span>Số người phụ thuộc:
                <input className={classes['w-40']}
                       type='number'
                       value={numberOfDependant}
                       onChange={changeFamilyAllowancesValue('numberOfDependant')}
                /> VND &emsp;
            </span>
        </div>
    );
}

export default FamilyAllowances;
