import { useEffect, useState } from 'react'
import classes from '../CSS/General.module.css'

const Income = (props) =>{

    const [income, setIncome] = useState(props.income);
    const {incomeVND, incomeUSD, exchangeRate} = income;

    useEffect(()=>{
        props.onUpdateIncome(income);
    },[income])

    const changeIncomeValue = (field) => (event) => {
        setIncome({...income, [field]: (+event.target.value)})
    }

    return  <div className={classes['fs-13']}>
                <p className={classes.title}>Thu nhập</p>
                <span>VND: 
                    <input  className={`${classes['w-100']} 
                                                ${classes['me-8']}`} 
                            type='number'
                            value={incomeVND}
                            onChange={changeIncomeValue('incomeVND')}
                    />
                </span>
                <span>USD: 
                    <input  className={`${classes['w-60']} 
                                        ${classes['me-8']}`} 
                            type='number'
                            value={incomeUSD}
                            onChange={changeIncomeValue('incomeUSD')}
                    />
                </span>
                <span>Tỉ giá: 1 USD = 
                    <input  className={`${classes['w-60']} 
                                        ${classes['me-8']}`} 
                            type='number'
                            value={exchangeRate}
                            onChange={changeIncomeValue('exchangeRate')}
                    /> VND
                </span>
            </div>
}
export default Income