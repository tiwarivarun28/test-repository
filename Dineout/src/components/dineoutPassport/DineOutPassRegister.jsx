import React from "react";
import styles from "./dineOutPassRegister.module.css";

export const DineOutPassRegister = () => {
	return (
		<div>
			<div className={styles.linearBg}>
				<div className={styles.regHDFC}>
					<img
						src="https://im1.dineout.co.in/images/uploads/misc/2021/Jun/7/dp_logo_orange_white.png"
						alt="dineoutReg"
					/>

					<img
						src="https://im1.dineout.co.in/images/uploads/misc/2020/Oct/5/group_25.png"
						alt="dineoutHdfc"
					/>
				</div>
				<div className={styles.usingCreditText}>
					Using an HDFC Bank Credit Card ?
				</div>
				<div className={styles.RegNow}>
					Register now & to get a complimentary* Dineout Passport
					Membership.
        </div>

        <div className={styles.regNowBtnAlign}>
          <button className={styles.regNowBtn}>REGISTER NOW</button> 
        </div>
        <div className={styles.tAndCApply}>T&C Apply</div>
			</div>
		</div>
	);
};
