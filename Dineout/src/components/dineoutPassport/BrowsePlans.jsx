import React from "react";
import styles from "./browsePlans.module.css"
import {Link} from "react-router-dom"
export const BrowsePlans = () => {
	return (
		<Link to="/membershipplans">
			<div className={styles.browsePlansWhite}>
				<div className={styles.browsePlanRoot}>
					<div className={styles.browsePlanText}>BROWSE PLANS</div>
					<div className={styles.browsePlanStarting}>
						Plans starting from ₹399
					</div>
				</div>
			</div>
		</Link>
	);
};
