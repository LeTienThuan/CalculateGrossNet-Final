import classes from "../CSS/General.module.css";
import areaImg from "../Image/Area.png";
import {useEffect, useState} from "react";
import AreaModal from "./AreaModal";
import InputRadio from "./InputRadio";

const Area = (props) => {
    const [area, setArea] = useState(props.area);
    const [isShowModal, setIsShowModal] = useState(false);

    useEffect(() => {
        props.onUpdateData('area')(area);
    }, [area]);

    const handleArea = (event) => {
        setArea(event.target.value);
    };
    const handleAreaModalOverlay = () => {
        setIsShowModal(!isShowModal);
    }
    const handleExitModal = () => {
        setIsShowModal(false);
    }

    return (
        <div className={`${classes["mt-10"]} ${classes["fs-13"]}`}>
            <span>
                Vùng: &nbsp;
                <img
                  className={classes["area-icon"]}
                  width="16px"
                  src={areaImg}
                  alt="small-icon"
                  onClick={handleAreaModalOverlay}
                />{" "}
                &nbsp;
                <AreaModal isShow={isShowModal}
                         onExitModal={handleExitModal}
                />
                <InputRadio isChecked={area === "1"}
                              onChange={handleArea}
                              value="1"
                              label=' I'
                />&nbsp;
                <InputRadio isChecked={area === "2"}
                              onChange={handleArea}
                              value="2"
                              label=' II'
                />&nbsp;
                <InputRadio isChecked={area === "3"}
                              onChange={handleArea}
                              value="3"
                              label=' III'
                />&nbsp;
                <InputRadio isChecked={area === "4"}
                              onChange={handleArea}
                              value="4"
                              label=' IV'
                />
          </span>
        </div>
    );
};

export default Area;
