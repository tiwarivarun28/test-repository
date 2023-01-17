import { Link } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import { MemberShipContext } from "../../contexts/MemberShipContext";

import styles from "./memberShipPage.module.css";
export const MemberShipPage = () => {
	const member = useContext(MemberShipContext);
	// const navigate = useNavigate();
	let [selectPlan, setSelectPlan] = useState([]);
	let [isClicked, setIsClicked] = useState(false);

	useEffect(() => {
		localStorage.setItem("membership", JSON.stringify(selectPlan));
	}, [selectPlan]);
	const handleOne = (e) => {
		setSelectPlan(member[0]);
		setIsClicked(true);
	};
	const handleTwo = () => {
		setSelectPlan(member[1]);

		setIsClicked(true);
	};
	const handleThree = () => {
		setSelectPlan(member[2]);

		setIsClicked(true);
	};
	return (
		<div className={styles.main}>
			<div className={styles.MemberHeading}>Membership Plans</div>
			<div className={styles.root}>
				<button
					id={styles.btn}
					onClick={handleOne}
					className={styles.imgOuter}
				>
					<img
						className={styles.memberImg}
						src="https://im1.dineout.co.in/images/uploads/misc/2021/Jun/18/all_india.png"
						alt=""
					/>
					<div className={styles.indianPlan}>All Indian Plan</div>
					<div className={styles.cities}>20 Cities 12 Months</div>
					<div className={styles.amount}>₹ 2,399</div>
					<div className={styles.discount}>
						<span
							style={{
								textDecoration: "line-through",
								paddingRight: "5px",
								color: "#999999",
							}}
						>
							₹2,399
						</span>
						20% off
					</div>
				</button>

				<button
					id={styles.btn}
					onClick={handleTwo}
					className={styles.imgOuter}
				>
					<img
						className={styles.memberImg}
						src="https://im1.dineout.co.in/images/uploads/misc/2021/Jun/18/all_india.png"
						alt=""
					/>
					<div className={styles.indianPlan}>All Indian Plan</div>
					<div className={styles.cities}>20 Cities 3 Months</div>
					<div className={styles.amount}>₹ 799</div>
					<div className={styles.discount}>
						<span
							style={{
								textDecoration: "line-through",
								paddingRight: "5px",
								color: "#999999",
							}}
						>
							₹999
						</span>
						20% off
					</div>
				</button>

				<button
					id={styles.btn}
					onClick={handleThree}
					className={styles.imgOuter}
				>
					<img
						className={styles.memberImg}
						src="https://im1.dineout.co.in/images/uploads/misc/2021/Jun/18/all_india.png"
						alt=""
					/>
					<div className={styles.indianPlan}>Mumbai Pack</div>
					<div className={styles.cities}>12 Months</div>
					<div className={styles.amount}>₹ 1,599</div>
					<div className={styles.discount}>
						<span
							style={{
								textDecoration: "line-through",
								paddingRight: "5px",
								color: "#999999",
							}}
						>
							₹1,599
						</span>
						20% off
					</div>
				</button>
			</div>

			
			{isClicked ? (
				<Link to="/paymentpage">
					<div className={styles.browsePlansWhite}>
						<div className={styles.browsePlanRoot}>
							<div className={styles.browsePlanText}>
								PAY ₹{selectPlan.rupees}
							</div>
							<div className={styles.browsePlanStarting}>
								{`${selectPlan.plan}, ${selectPlan.cities}, ${selectPlan.month}`}
							</div>
						</div>
					</div>
				</Link>
			) : (
				<Link to="/membershipplans">
					<div className={styles.browsePlansWhite}>
						<div className={styles.browsePlanRoot}>
							<div className={styles.browsePlanText}>
								PAY ₹2,399
							</div>
							<div className={styles.browsePlanStarting}>
								All India Plan, 20 cities, 12 Months
							</div>
						</div>
					</div>
				</Link>
			)}
		</div>
	);
};
