import {formatterMoneyVND} from "../Result/Result";
import classesGeneral from '../CSS/General.module.css'
import classes from './Table.module.css'

const VerticalTable = (props) => {
    const {dataStore} = props;
    return (<table className={classes['data-list']}>
                <tbody>
                {dataStore.map((data, index) => {
                const className = (data.isGrayBackground || index === dataStore.length - 1) ? classes.rownote : "";
                    return (<tr key={index} className={className}>
                        <th>
                            {data.title}<br/>
                            {index === dataStore.length - 1 ?
                                <span className={classes['fw-normal']}>{data.explainTitle}</span> : ''}
                        </th>
                        <td className={classesGeneral['w-100']}>{formatterMoneyVND(data.content)}</td>
                    </tr>)
                })}
                </tbody>
            </table>)
}
export default VerticalTable