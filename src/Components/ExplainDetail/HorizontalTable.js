import classes from "./Table.module.css";
import {formatterMoneyVND} from "../Result/Result";
const HorizontalTable = (props) =>{
    const {dataStore, headings} = props;

    return (
        <table className={classes['data-list']}>
            <tbody>
                <tr className={classes.rownote}>
                    {headings.map((heading, index) => <th key={index}>{heading}</th>)}
                </tr>
                {dataStore.map((data,index) =>{
                    return (
                        <tr key={index}>
                            <td>{data.title}</td>
                            <td>{data.detail}</td>
                            <td>{formatterMoneyVND(data.money)}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}
export default HorizontalTable;