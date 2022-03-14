import React from "react";
import general from '../CSS/General.module.css'

const InputNumber = (props) => {
    const {label, classes, unit, value, field, isDisabled, onChange} = props;
    return (
        <span className={general['me-10']}>
                {label}
            <input className={classes}
                   type='number'
                   value={value}
                   onChange={onChange(field)}
                   disabled={isDisabled}
            />
            {unit}
            </span>
    )

}
export default InputNumber;