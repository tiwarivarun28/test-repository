import React, { useContext } from "react";
import { FeaturedResContext } from "../../contexts/FeaturedResContext";
import styles from "./popularAroundYou.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../dineoutPassport/carousel.css";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
export const PopularAroundYou = () => {
	const finestRestaurants = useContext(FeaturedResContext);
	const data = finestRestaurants.filter((elem) => {
		return elem.happyHours === true;
	});
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 3.5,
		slidesToScroll: 3,
	};

	return (
		<div style={{marginBottom: "30px"}}>
			<div className={styles.popularHeading}>Popular around you</div>
			<div className={styles.popularMain}>
				<Slider {...settings}>
					{data.map((elem) => {
						return (
							<div key={elem.id}>
								<div
									className={styles.bg}
									style={{
										backgroundImage: `url(${elem.image})`,
										height: "190px",
										width: "95%",
										backgroundPosition: "center",
										backgroundSize: "cover",
										backgroundRepeat: "no-repeat",
										borderRadius: "8px",
										margin: "auto",
									}}
								>
									<div
										className={styles.rating}
									>{`★ ${elem.rating}`}</div>
									<div className={styles.name}>
										{`${elem.name} |`}
									</div>
									<div
										className={styles.addArea}
									>{`${elem.address} ${elem.area}`}</div>
									<div className={styles.logoDpAndText}>
										<div>
											<img
												className={styles.dp}
												src="https://im1.dineout.co.in/images/uploads/misc/2020/Sep/3/activedp.png"
												alt=""
											/>
										</div>
										<div>Flat 25% off the Total Bill</div>
									</div>
									<div>
										<img
											className={styles.dineoutImg}
											src="https://im1.dineout.co.in/images/uploads/misc/2020/Sep/3/dp_light_medium_logo.png?tr=tr:n-small"
											alt=""
										/>
									</div>
								</div>
							</div>
						);
					})}
				</Slider>
			</div>
			<Link to="/bookatable" style={{textDecoration: "none"}}>
				<div
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
                        textAlign: "center",
                        gap: "10px"
					}}
				>
					<div style={{ fontSize: "19px" }}>Know more</div>

					<ArrowForwardIosIcon fontSize="small" />
				</div>
			</Link>
		</div>
	);
};
