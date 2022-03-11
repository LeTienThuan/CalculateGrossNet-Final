import {useState} from "react";
import InputInfor from "./Components/InputInfor/InputInfor";
import GroupButton from "./Components/Button/GroupButton";
import DetailDescriptionTable from "./Components/ExplainDetail/DetailDescriptionTable";
import "./App.css";
import Result from "./Components/Result/Result";
import {defaultInputValue} from "./DefaultValue/defaultInputValue";
import {defaultResultDetailValue} from "./DefaultValue/defaultResultDetailValue";
import {convertGrossToNet} from "./Logic/GrossToNet/Salary/convertGrossToNet";
import {convertNetToGross} from "./Logic/NetToGross/Salary/convertNetToGross";

function App() {
    const [salaryValue, setSalaryValue] = useState(defaultInputValue);
    const [resultDetail, setResultDetail] = useState(defaultResultDetailValue);
    const {
        socialInsurancePercent,
        healthInsurancePercent,
        unemploymentInsurancePercent
    } = salaryValue.insurance;
    const {
        grossSalaryVND,
        grossSalaryUSD,
        netSalaryVND,
        netSalaryUSD
    } = resultDetail.overallResult;

    const updateIncome = (incomeValue) => {
        setSalaryValue({...salaryValue, income: incomeValue})
    }
    const updateInsurance = (insuranceValue) => {
        setSalaryValue({...salaryValue, insurance: insuranceValue})
    }
    const updateArea = (areaValue) => {
        setSalaryValue({...salaryValue, area: areaValue})
    }
    const updateFamilyAllowances = (familyAllowances) => {
        setSalaryValue({...salaryValue, familyAllowances: familyAllowances})
    }

    const calculateGrossToNet = () => {
        const newResult = convertGrossToNet(salaryValue, resultDetail);
        setResultDetail(newResult);
    }
    const calculateNetToGross = () => {
        const newResult = convertNetToGross(salaryValue, resultDetail);
        setResultDetail(newResult);
    }

    return (
        <div className="app">
            <InputInfor salaryValue={salaryValue}
                        onUpdateIncome={updateIncome}
                        onUpdateInsurance={updateInsurance}
                        onUpdateArea={updateArea}
                        onUpdateFamilyAllowances={updateFamilyAllowances}
            />
            <GroupButton onConvertGrossToNet={calculateGrossToNet}
                         onConvertNetToGross={calculateNetToGross}
            />
            <Result grossSalaryVND={grossSalaryVND}
                    grossSalaryUSD={grossSalaryUSD}
                    netSalaryVND={netSalaryVND}
                    netSalaryUSD={netSalaryUSD}
            />
            <DetailDescriptionTable result={resultDetail}
                                    socialInsurancePercent={socialInsurancePercent}
                                    healthInsurancePercent={healthInsurancePercent}
                                    unemploymentInsurancePercent={unemploymentInsurancePercent}
            />
        </div>
    );
}

export default App;