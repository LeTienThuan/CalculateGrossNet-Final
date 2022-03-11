import classes from '../CSS/General.module.css'
import areaImg from '../Image/Area.png'
import {useEffect, useState} from "react";

const Area = (props) => {
    const [area, setArea] = useState(props.area);

    useEffect(()=>{
        props.onUpdateArea(area);
    },[area])

    const handleArea = (event) => {
        setArea(event.target.value)
    }

    return (
        <div className={`${classes['mt-10']} ${classes['fs-13']}`}>
            <span>Vùng: &nbsp;
                <img width='16px' src={areaImg} alt='small-icon'/> &nbsp;
                <span>
                    <input type='radio'
                           value='1'
                           checked={area === '1'}
                           onChange={handleArea}
                    /> I &nbsp;
                </span>
                <span>
                    <input type='radio'
                           value='2'
                           checked={area === '2'}
                           onChange={handleArea}
                    /> II &nbsp;
                </span>
                <span>
                    <input type='radio'
                           value='3'
                           checked={area === '3'}
                           onChange={handleArea}
                    /> III &nbsp;
                </span>
                <span>
                    <input type='radio'
                           value='4'
                           checked={area === '4'}
                           onChange={handleArea}
                    /> IV &nbsp;
                </span>
            </span>
        </div>
    );
}

export default Area;
