import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.css";
import styles from "./dineOutPassportMember.module.css";

export const DineOutPassportMember = () => {
	const settings = {
		focusOnSelect: true,
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		speed: 500,
	};
	return (
		<div className={styles.memberMain}>
			<div className={styles.memberHeading}>Member Privileges</div>
			<div className={styles.memberOffer}>offer you can't resist</div>
			<div>
				<Slider {...settings}>
					<div>
						<div className={styles.bgImg1Mem1}>
							<div className={styles.cashback}>100% cashback</div>
							<div className={styles.promocode}>
								As PromoCash on purchase of every Dineout
								Passport membership
							</div>
						</div>
					</div>
					<div>
						<div className={styles.bgImg1Mem5}>
							<div className={styles.cashback}>
								Up to 40% Off on Total Bill
							</div>
							<div className={styles.promocode}>
								At 2000+ restaurants
							</div>
						</div>
					</div>
					<div>
						<div className={styles.bgImg1Mem2}>
							<div className={styles.cashback}>1+1 on Buffet</div>
							<div className={styles.promocode}>
								At 200+ Premium Restaurants
							</div>
						</div>
					</div>
					<div>
						<div className={styles.bgImg1Mem3}>
							<div className={styles.cashback}>
								Finest Restaurants and Hotels
							</div>
							<div className={styles.promocode}>
								Curated list of top restaurants across the
								country
							</div>
						</div>
					</div>
					<div>
						<div className={styles.bgImg1Mem4}>
							<div className={styles.cashback}>Dineout Passport Experiences</div>
						</div>
					</div>
				</Slider>
			</div>
		</div>
	);
};
