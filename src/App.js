import { useState } from "react";
import InputInfor from "./Components/InputInfor/InputInfor";
import GroupButton from "./Components/Button/GroupButton";
import DetailDescriptionTable from "./Components/ExplainDetail/DetailDescriptionTable";
import "./App.css";
import Result from "./Components/Result/Result";
import { defaultInputValue } from "./DefaultValue/defaultInputValue";
import { defaultResultDetailValue } from "./DefaultValue/defaultResultDetailValue";
import { convertGrossToNet } from "./Logic/GrossToNet/Salary/convertGrossToNet";
import { convertNetToGross } from "./Logic/NetToGross/Salary/convertNetToGross";
import classes from "./Components/CSS/General.module.css";
import { getInsurancePercent } from "./Logic/GeneralFunction/getInsurance";

function App() {
  const [salaryValue, setSalaryValue] = useState(defaultInputValue);
  const [resultDetail, setResultDetail] = useState(defaultResultDetailValue);

  const { insurance } = salaryValue;
  const { overallResult } = resultDetail;
  const insurancePercent = getInsurancePercent(insurance);

  const updateIncome = (incomeValue) => {
    setSalaryValue({ ...salaryValue, income: incomeValue });
  };
  const updateInsurance = (insuranceValue) => {
    setSalaryValue({ ...salaryValue, insurance: insuranceValue });
  };
  const updateArea = (areaValue) => {
    setSalaryValue({ ...salaryValue, area: areaValue });
  };
  const updateFamilyAllowances = (familyAllowances) => {
    setSalaryValue({ ...salaryValue, familyAllowances: familyAllowances });
  };

  const calculateGrossToNet = () => {
    const newResult = convertGrossToNet(salaryValue, resultDetail);
    setResultDetail(newResult);
  };
  const calculateNetToGross = () => {
    const newResult = convertNetToGross(salaryValue, resultDetail);
    setResultDetail(newResult);
  };

  return (
    <>
      <p className={classes.heading}>
        Tính lương Gross sang NET và ngược lại (cập nhật 1/1/2020)
      </p>
      <div className="app">
        <InputInfor
          salaryValue={salaryValue}
          onUpdateIncome={updateIncome}
          onUpdateInsurance={updateInsurance}
          onUpdateArea={updateArea}
          onUpdateFamilyAllowances={updateFamilyAllowances}
        />
        <GroupButton
          onConvertGrossToNet={calculateGrossToNet}
          onConvertNetToGross={calculateNetToGross}
        />
        <Result overallResult={overallResult} />
        <DetailDescriptionTable
          result={resultDetail}
          insurancePercent={insurancePercent}
        />
      </div>
    </>
  );
}

export default App;
