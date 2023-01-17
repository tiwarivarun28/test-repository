import React from "react";
import styles from "./Cart.module.css";
import { CartCard } from "./CartCard";
export const CartContent = ({ cart, handleremove }) => {
  const handleremove_ = (id_) => {
    handleremove(id_);
  };
  return (
    <React.Fragment>
      <div className={styles.header}>
        <div>
          <img src="https://tse2.mm.bing.net/th?id=OIP.DU3kqJmwpKSmWtoJLcwdSAHaHa&pid=Api&P=0&w=153&h=153" />
        </div>
        <div className={styles.user}>
          <div className={styles.username}>Sudhanshu Singh</div>
          <div className={styles.userdetail}>+919453544064</div>
          <div className={styles.userdetail}>sudhanshu.singh2710@gmail.com</div>
        </div>
        <div className={styles.total}>
          <div className={styles.total_}>Total Dined</div>
          <div className={styles.total_val}>{cart.items.length}</div>
        </div>
      </div>
      <div className={styles.cartContainer}>
        <div className={styles.container}>
          <div className={styles.cartcardcontainer}>
            <div className={styles.upcoming}>Upcoming Reservations</div>
            <div>
              {cart.items.map((elem) => (
                <CartCard
                  key={elem.date.id}
                  elem={elem}
                  handleremove={handleremove_}
                />
              ))}
            </div>
          </div>
          <div className={styles.cartinforight}>
            <div className={styles.card1}>
              <div className={styles.total}>
                <div className={styles.total_}>Total Savings</div>
                <div className={styles.total_val}>0</div>
              </div>
              <p>
                *This is an approximate amount based on your total no of
                bookings and discounts applicable on the restaurant.
              </p>
            </div>
            <div className={styles.card2}>
              <div>Dineout Pay</div>
              <p>
                Download the Dineout App and pay the restaurant bill through
                Dineout Pay to earn 20% Cashback (upto ₹ 250). Download the app
                here
              </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
