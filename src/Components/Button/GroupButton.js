import classes from './GroupButton.module.css';

const GroupButton = (props) => {
    return (
        <div className={classes['group-button']}>
            <button onClick={props.onConvertGrossToNet}>GROSS → NET</button>
            <button onClick={props.onConvertNetToGross}>NET → GROSS</button>
            <button>Print</button>
        </div>
    );
}

export default GroupButton;
