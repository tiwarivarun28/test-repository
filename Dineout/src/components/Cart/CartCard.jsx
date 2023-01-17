import React from "react";
import styles from "./CartCard.module.css";
export const CartCard = (props) => {

  const arrow = ">";
  const handleremove = () => {
    props.handleremove(props.elem.id);
  };
  return (
    <React.Fragment>
      <div className={styles.container}>
        <div>
          <img src={props.elem.data.image} alt="" />
        </div>
        <div>
          <div className={styles.name}>{props.elem.data.name}</div>
          <div className={styles.address}>
            {props.elem.data.area}, {props.elem.data.city}
          </div>
          <div className={styles.time}>
            <span>Today</span>
            <span>{props.elem.time}</span>
          </div>
          <div className={styles.table}>
            <div className={styles.row}>
              <div>Dinner</div>
              <div>Booking ID</div>
              <div>Selected Offer</div>
            </div>
            <div className={styles.row_}>
              <div>1</div>
              <div>DO14775623</div>
              <div>No offer</div>
            </div>
          </div>
        </div>
        <div className={styles.cancelcontainer}>
          <div className={styles.cancel} onClick={handleremove}>
            Cancel
          </div>
          <div className={styles.arr}>{arrow}</div>
        </div>
      </div>
    </React.Fragment>
  );
};
