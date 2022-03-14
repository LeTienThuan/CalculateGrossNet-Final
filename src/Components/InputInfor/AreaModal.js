import React from "react";
import ReactDOM from "react-dom";
import classes from "./AreaModal.module.css";

const Backdrop = (props) => {
   const {isShow} = props;

  return(
      <>
          {isShow && <div className={classes.backdrop}/>}
      </>
  )
};
const ModalOverlay = (props) => {
  const {isShow, onExitModal} = props;

  return (
      <>
        {isShow &&  <div className={classes["area-modal"]}>
          <div className={classes.header}>
            <span className={classes.title}>Mức lương tối thiểu vùng 2017</span>
            <button className={classes["exit-modal"]}
                    type="button"
                    onClick={onExitModal}>
              <span>X</span>
            </button>
          </div>
          <div className={classes.content}>
        <span>
          <b>- Vùng I: </b> 4.420.000 đồng/tháng
        </span>
            <br/>
            <span>
          <b>- Vùng II:</b> 3.920.000 đồng/tháng
        </span>
            <br/>
            <span>
          <b>- Vùng III:</b> 3.430.000 đồng/tháng
        </span>
            <br/>
            <span>
          <b>- Vùng IV:</b> 3.070.000 đồng/tháng
        </span>
            <br/>
            <br/>
            <span>
          <b>- Vùng 1:</b> Hà Nội, Quảng Ninh, Đà Nẵng, Tp.HCM, Bình Dương, Đồng
          Nai, Vũng Tàu.
        </span>
            <br/>
            <span>
          <b>- Vùng 2:</b> Hải Phòng, Vĩnh Phúc, Thái Nguyên, Khánh Hoà, Bình
          Phước, Tây Ninh, Long An, An Giang, Cần Thơ, Cà Mau.
        </span>
            <br/>
            <span>
          <b>- Vùng 3:</b> Hà Tây, Bắc Ninh, Hải Dương, Hưng Yên, Huế, Bình
          Định, Gia Lai, Đắc Lắc, Lâm Đồng, Ninh Thuận, Bình Thuận, ĐồngTháp,
          Tiền Giang, Vĩnh Long, Bến Tre, Kiên Giang, Hậu Giang, Sóc Trăng, Bạc
          Liêu.
        </span>
            <br/>
            <span>
          <b>- Vùng 4:</b> Là các tỉnh còn lại
        </span>
          </div>
        </div>}
      </>

  );
};


const AreaModal = (props) => {

  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop isShow={props.isShow}/>,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay isShow={props.isShow} onExitModal={props.onExitModal} />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};

export default AreaModal;
