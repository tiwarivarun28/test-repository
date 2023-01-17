import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.css";
import styles from "./passportHowToUse.module.css"
export const PassportHowToUse = () => {
	const settings = {
		focusOnSelect: true,
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		speed: 500,
	};
	return (
		<div style={{ margin: "30px auto", width: "100%" }}>
			<h3 className={styles.howToUseHeader}>How To Use Dineout Passport</h3>
			<Slider {...settings}>
				<div>
					<img
						src="https://im1.dineout.co.in/images/uploads/misc/2021/Sep/22/how_to_use_1.png"
						style={{
							width: "90%",
							height: "60vh",
						}}
						alt="step1Img"
					/>
					<div className={styles.textBorderShadow}>
						<div className={styles.steps}>Step 1</div>
						<div className={styles.stepsPara}>
							Walk into a partner restaurant & inform them that
							you are a Dineout Passport member.
						</div>
					</div>
				</div>
				<div>
					<img
						src="https://im1.dineout.co.in/images/uploads/misc/2021/Sep/22/how_to_use_2.png"
						style={{
							width: "90%",
							height: "60vh",
						}}
						alt="step2Img"
					/>
					<div className={styles.textBorderShadow}>
						<div className={styles.steps}>Step 2</div>
						<div className={styles.stepsPara}>
							Click on Pay Bill, and the discount will
							automatically be applied to your total bill amount.
						</div>
					</div>
				</div>
				<div>
					<img
						src="https://im1.dineout.co.in/images/uploads/misc/2021/Sep/22/how_to_use_3.png"
						style={{ width: "90%", height: "60vh" }}
						alt="step3Img"
					/>
					<div className={styles.textBorderShadow}>
						<div className={styles.steps}>Step 3</div>
						<div className={styles.stepsPara}>
							Pay using Dineout Pay & Save up to 40% on bill.
						</div>
					</div>
				</div>
			</Slider>
		</div>
	);
};
