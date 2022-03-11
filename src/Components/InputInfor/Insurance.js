import {useEffect, useState} from 'react'
import classes from '../CSS/General.module.css'

const Insurance = (props) => {

    const [insurance, setInsurance] = useState(props.insurance)
    const {
        isChooseOtherInput,
        specificInsuranceAmount,
        minimumSalary,
        socialInsurancePercent,
        healthInsurancePercent,
        unemploymentInsurancePercent
    } = insurance;

    useEffect(() => {
        props.onUpdateInsurance(insurance)
    }, [insurance])

    const handleOtherRadioButton = () => {
        setInsurance({...insurance, isChooseOtherInput: true});
    }
    const handleInsuranceOnSalaryRadioButton = () => {
        setInsurance({...insurance, isChooseOtherInput: false});
    }

    const changeInsuranceValue = (field) => (event) => {
        setInsurance({...insurance, [field]: (+event.target.value)})
    }


    return <div className={`${classes['fs-13']}`}>
        <p className={classes.title}>Bảo hiểm</p>
        <div>
                    <span>Đóng bảo hiểm: 
                        <input className={classes['ms-15']}
                               type='radio'
                               checked={!isChooseOtherInput}
                               onChange={handleInsuranceOnSalaryRadioButton}

                        /> trên lương chính thức
                        <input className={classes['ms-15']}
                               checked={isChooseOtherInput}
                               onChange={handleOtherRadioButton}
                               type='radio'
                        /> khác
                        <input className={` ${classes['w-70']} 
                                            ${classes['me-8']} 
                                            ${classes['ms-8']}`}

                               type='number'
                               value={specificInsuranceAmount}
                               onChange={changeInsuranceValue('specificInsuranceAmount')}
                               disabled={!isChooseOtherInput}
                        /> VND
                    </span>
        </div>
        <div className={classes['mt-10']}>
            <span className={classes['me-8']}>Lương tối thiểu:
                        <input className={classes['w-70']}
                               type='number'
                               value={minimumSalary}
                               onChange={changeInsuranceValue('minimumSalary')}
                        /> VND
            </span>
            <span>Xã hội:   <input className={classes['w-30']}
                                   type='number'
                                   value={socialInsurancePercent}
                                   onChange={changeInsuranceValue('socialInsurancePercent')}
            /> % &emsp;
            </span>
            <span>Y tế: <input className={classes['w-30']}
                               type='number'
                               value={healthInsurancePercent}
                               onChange={changeInsuranceValue('healthInsurancePercent')}
            /> % &emsp;
                    </span>
            <span>Thất nghiệp: <input className={classes['w-30']}
                                      type='number'
                                      value={unemploymentInsurancePercent}
                                      onChange={changeInsuranceValue('unemploymentInsurancePercent')}
            /> % &emsp;
                    </span>
        </div>
    </div>
}

export default Insurance