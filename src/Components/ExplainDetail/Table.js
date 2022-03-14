import {formatterMoneyVND} from "../Result/Result";
import classesGeneral from '../CSS/General.module.css'
import classes from './Table.module.css'

const Table = (props) => {
    const {dataWarehouse} = props;
    return (<table className={classes['data-list']}>
                <tbody>
                {dataWarehouse.map((data, index) => {
                    return (<tr key={index} className={data.isGrayBackground && classes.rownote}>
                        <th>
                            {data.title}<br/>
                            {index === dataWarehouse.length - 1 ?
                                <span className={classes['fw-normal']}>{data.explainTitle}</span> : ''}
                        </th>
                        <td className={classesGeneral['w-100']}>{formatterMoneyVND(data.content)}</td>
                    </tr>)
                })}
                </tbody>
            </table>)
}
export default Table