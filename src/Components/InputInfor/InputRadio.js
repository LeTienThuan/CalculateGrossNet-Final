const InputRadio = (props) => {
    const {label, classes, isChecked, onChange, value} = props;

    return (
        <span>
                    <input type='radio'
                           className={classes}
                           checked={isChecked}
                           value={value}
                           onChange={onChange}
                    />
            {label}
                </span>
    )
}
export default InputRadio;