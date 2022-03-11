import classes from './GroupButton.module.css';

const GroupButton = (props) => {
    const {onConvertGrossToNet, onConvertNetToGross} = props;
    return (
        <div className={classes['group-button']}>
            <button onClick={onConvertGrossToNet}>GROSS → NET</button>
            <button onClick={onConvertNetToGross}>NET → GROSS</button>
            <button>Print</button>
        </div>
    );
}

export default GroupButton;
