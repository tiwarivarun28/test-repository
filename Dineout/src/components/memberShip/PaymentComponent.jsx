import React from "react";
import styles from "./paymentComponent.module.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Link, useNavigate } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useState } from "react";
import Modal from "@mui/material/Modal";
import Paper from "@mui/material/Paper";

export const PaymentComponent = () => {
	const [isChecked, setIsChecked] = useState(false);
	const [promo, setPromo] = useState("")
	const handledChecked = () => {
		setIsChecked(!isChecked);
	};
	const navigate = useNavigate();
	let data = JSON.parse(localStorage.getItem("membership"));

	const handleBack = () => {
		navigate("/membershipplans");
	};

	const [open, setOpen] = useState(false);
	const handleOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};
	const handleProceed = () => {
		setOpen(false);
		if (promo === "dineout") {
			localStorage.setItem("promo", JSON.stringify(-100));
		} else {
			localStorage.setItem("promo", JSON.stringify(0));
		}
		setPromo("")
	};

	var rupee = data.rupees
	var rupees = parseInt(rupee);


	var sub = localStorage.getItem("promo")
	var subtract = (parseInt(sub));
	var subAns = rupees + subtract;
	return (
		<div className={styles.payMain}>
			<div className={styles.payCompMain}>
				<div className={styles.payingFor}>
					<ArrowBackIosIcon fontSize="small" onClick={handleBack} />
					<div> PAYING FOR</div>
				</div>

				<div className={styles.purple}>
					<div>{`${data.plan}, ${data.month}`}</div>
					<div className={styles.dpm}>
						Dineout Passport Membership
					</div>
					<div>
						<img
							className={styles.dpmImg}
							src="https://im1.dineout.co.in/images/uploads/misc/2021/Jan/22/dp_2021_jan.png"
							alt=""
						/>
					</div>
				</div>

				<div className={styles.ruppesMain}>
					<div>Amount</div>
					<div>₹ {data.rupees}</div>
				</div>

				<div className={styles.checkboxMain}>
					<div>
						<input
							style={{ backgroundColor: "green" }}
							className={styles.checkboxx}
							checked={isChecked}
							onChange={handledChecked}
							type="checkbox"
						/>
						<label>MyCash + PromoCash</label>
					</div>
					{isChecked && <div className={styles.zero}>₹ {sub}</div>}
				</div>

				<div className={styles.arrowAndDisMain}>
					<div className={styles.imgAndPromo}>
						<img
							className={styles.disImg}
							src="https://im1.dineout.co.in/images/uploads/misc/2021/Jul/30/vector_(1)_(1).png"
							alt=""
						/>
						<div>Apply Promo Code</div>
					</div>
					<div>
						<ArrowForwardIosIcon
							fontSize="small"
							onClick={handleOpen}
						/>
					</div>
				</div>

				<div className={styles.bgWhite}>
					<div className={styles.grandRuppesRoot}>
						<div>Grand Total</div>
						<div>₹ {subAns}</div>
					</div>
					<div className={styles.percentDisAndCasbackMain}>
						<img
							className={styles.percentDis}
							src="https://im1.dineout.co.in/images/uploads/misc/2021/Feb/23/2021_offer_percentage_icon.jpg"
							alt=""
						/>
						<div>
							<span
								style={{ fontWeight: "bold" }}
							>{`₹${data.rupees} Cashback `}</span>
							will be credited Within 24hrs
						</div>
					</div>
					<div>
						<Link to="/bank">
							<div className={styles.bottomPurpleMain}>
								<div
									style={{
										textAlign: "center",
										fontWeight: "bold",
									}}
								>
									PAY ₹{subAns}
								</div>
							</div>
						</Link>
					</div>
				</div>
			</div>

			<Modal open={open}>
				<Paper
					style={{
						height: "35%",
						width: "40%",
						margin: "100px auto",
						outline: "none",
					}}
				>
					<div>
						<div className={styles.xExitDiv}>
							<button
								className={styles.xExit}
								onClick={handleClose}
							>
								x
							</button>
						</div>
						<div className={styles.Applycoup}>Apply Promocode</div>
						<div className={styles.enterPromoCodeDiv}>
							<input
								value={promo}
								onChange={(e) =>
									setPromo(e.currentTarget.value)
								}
								className={styles.enterPromoCode}
								type="text"
								placeholder="ENTER PROMOCODE"
							/>
						</div>
						<div className={styles.willbeadded}>
							Promo code will be added to your account
						</div>
						<div
							style={{
								width: "97%",
								margin: "auto",
								display: "flex",
								justifyContent: "center",
							}}
						>
							<button
								className={styles.proceedBtn}
								onClick={handleProceed}
							>
								PROCEED
							</button>
						</div>
					</div>
				</Paper>
			</Modal>
		</div>
	);
};
