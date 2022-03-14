import {useEffect, useState} from 'react'
import classes from '../CSS/General.module.css'
import InputNumber from "./InputNumber";

const Income = (props) => {

    const [income, setIncome] = useState(props.income);
    const {incomeVND, incomeUSD, exchangeRate} = income;

    useEffect(() => {
        props.onUpdateIncome(income);
    }, [income])

    const changeIncomeValue = (field) => (event) => {
        setIncome({...income, [field]: (+event.target.value)})
    }

    return <div className={classes['fs-13']}>
        <p className={classes.title}>Thu nhập</p>
        <InputNumber label='VND:'
                     classes={`${classes['w-100']} ${classes['me-8']}`}
                     field='incomeVND'
                     value={incomeVND}
                     onChange={changeIncomeValue}
        />
        <InputNumber label='USD:'
                     classes={`${classes['w-60']} ${classes['me-8']}`}
                     field='incomeUSD'
                     value={incomeUSD}
                     onChange={changeIncomeValue}
        />
        <InputNumber label='Tỉ giá: 1 USD = '
                     classes={`${classes['w-60']} ${classes['me-8']}`}
                     field='exchangeRate'
                     value={exchangeRate}
                     unit='VND'
                     onChange={changeIncomeValue}
        />


    </div>
}
export default Income