import React from "react";
import styles from "./bestOffers.module.css";
import {Link} from "react-router-dom"
export const BestOffers = () => {
	return (
		<div className={styles.removeTop}>
			<h1 className={styles.BestOffersTitle}>Best Offers</h1>
			<div className={styles.offerCards}>
				<Link to="/">
					<img
						className={styles.offerCardImg}
						src="https://im1.dineout.co.in/images/uploads/misc/2020/Aug/12/10offid.png?tr=tr:n-medium"
						alt="offercard1"
					/>
				</Link>
				<Link to="/">
					<img
						className={styles.offerCardImg}
						src="https://im1.dineout.co.in/images/uploads/misc/2020/Aug/12/20offid.png?tr=tr:n-medium"
						alt="offercard2"
					/>
				</Link>
				<Link to="/">
					<img
						className={styles.offerCardImg}
						src="https://im1.dineout.co.in/images/uploads/misc/2020/Aug/12/15offid.png?tr=tr:n-medium"
						alt="offerCard3"
					/>
				</Link>
            </div>
		</div>
	);
};
