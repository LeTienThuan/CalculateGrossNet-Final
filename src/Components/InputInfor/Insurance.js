import {useEffect, useState} from 'react'
import classes from '../CSS/General.module.css'
import InputRadio from "./InputRadio";
import InputNumber from "./InputNumber";

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
                        <InputRadio classes={classes['ms-15']}
                                    isChecked={!isChooseOtherInput}
                                    label=' trên lương chính thức'
                                    onChange={handleInsuranceOnSalaryRadioButton}
                        />
                        <InputRadio classes={classes['ms-15']}
                                    isChecked={isChooseOtherInput}
                                    label=' khác'
                                    onChange={handleOtherRadioButton}
                        />
                        <InputNumber classes={`${classes['w-70']} ${classes['me-8']} ${classes['ms-8']}`}
                                     value={specificInsuranceAmount}
                                     onChange={changeInsuranceValue}
                                     field='specificInsuranceAmount'
                                     unit='VND'
                                     isDisabled={!isChooseOtherInput}
                        />
                    </span>
        </div>
        <div className={classes['mt-10']}>
            <InputNumber classes={`${classes['w-70']} ${classes['me-8']}`}
                         value={minimumSalary}
                         onChange={changeInsuranceValue}
                         label='Lương tối thiểu: '
                         unit='VND'
            />
            <InputNumber classes={`${classes['w-30']} ${classes['me-8']}`}
                         value={socialInsurancePercent}
                         onChange={changeInsuranceValue}
                         field='socialInsurancePercent'
                         label='Xã hội: '
                         unit=' %'
            />
            <InputNumber classes={`${classes['w-40']} ${classes['me-8']}`}
                         value={healthInsurancePercent}
                         onChange={changeInsuranceValue}
                         field='healthInsurancePercent'
                         label='Y tế: '
                         unit=' %'
            />
            <InputNumber classes={`${classes['w-40']} ${classes['me-8']}`}
                         value={unemploymentInsurancePercent}
                         onChange={changeInsuranceValue}
                         field='unemploymentInsurancePercent'
                         label='Thất nghiệp: '
                         unit=' %'
            />
        </div>
    </div>
}

export default Insurance