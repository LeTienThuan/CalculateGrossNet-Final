import classesGeneral from '../CSS/General.module.css'
import HorizontalTable from "./HorizontalTable";

const PersonalIncomeTax = (props) => {

    const {detailPersonalIncomeTax} = props;
    const {
        toFiveMillionRange,
        upperFiveToTenMillionRange,
        upperTenToEighteenMillionRange,
        upperEighteenToThirtyTwoMillionRange,
        upperThirtyTwoToFiftyTwoMillionRange,
        upperFiftyTwoToEightyMillionRange,
        upperEightyMillionRange,
    } = detailPersonalIncomeTax;
    const headings = ['Mức chịu thuế', 'Thuế suất', 'Tiền nộp'];
    const data = [
        {title: 'Đến 5 triệu VND', detail: '5%', money: toFiveMillionRange},
        {title: 'Trên 5 triệu VND đến 10 triệu VND', detail: '10%', money: upperFiveToTenMillionRange},
        {title: 'Trên 10 triệu VND đến 18 triệu VND', detail: '15%', money: upperTenToEighteenMillionRange},
        {title: 'Trên 18 triệu VND đến 32 triệu VND', detail: '20%', money: upperEighteenToThirtyTwoMillionRange},
        {title: 'Trên 32 triệu VND đến 52 triệu VND', detail: '25%', money: upperThirtyTwoToFiftyTwoMillionRange},
        {title: 'Trên 52 triệu VND đến 80 triệu VND', detail: '30%', money: upperFiftyTwoToEightyMillionRange},
        {title: 'Trên 80 triệu VND', detail: '35%', money: upperEightyMillionRange},
    ];
    return (
        <div>
            <p className={classesGeneral.title}>(*) Chi tiết thuế thu nhập cá nhân (VND)</p>
            <HorizontalTable dataStore={data}
                             headings={headings}
            />
        </div>
    );
}

export default PersonalIncomeTax;
