import React, { useContext, useEffect, useState } from "react";
import { FeaturedResContext } from "../../contexts/FeaturedResContext";
import styles from "./featuredRes.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../dineoutPassport/carousel.css";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import { Link } from "react-router-dom";
import { CardDisplay } from "./CardDisplay";
import { useSelector } from "react-redux";
import { Flat } from "./Flat";
export const FeaturedRes = ({flat}) => {
  // const settings = {
  // 	focusOnSelect: true,
  // 	infinite: true,
  // 	slidesToShow: 4,
  // 	slidesToScroll: 1,
  // 	speed: 500,
  // };
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
  };
  let city = useSelector((store) => store.RestaurantReducer.city);
  const [resData, setResData] = useState([]);

  useEffect(() => {
    fetch(
		`https://fake-json-server2.herokuapp.com/posts?city=${city}&featured=true`
	)
		.then((response) => response.json())
		.then((json) => {

			setResData([...json]);
		})

  }, [city]);

 
  return (
		<div className={styles.featuredResMain}>
			<h2 className={styles.featuredResTitle}>Featured Restaurants</h2>
			<div style={{ margin: "30px auto", width: "100%" }}>
				<Slider {...settings}>
					{resData.map((elem) => {
						return (
							<div key={elem.id}>
								<div
									key={elem.id}
									className={styles.restaurantCartsMain}
								>
									<div>
										<div
											style={{
												// border: "1px solid rgba(0, 0, 0, 0.05)",
												marginLeft: "10px",
												marginRight: "10px",
											}}
										>
											<CardDisplay
												elem={elem}
												flat={<Flat />}
											/>
										</div>

										{/* <div className={styles.imgMain}>
                      <img
                        className={styles.resImg}
                        src={elem.image}
                        alt="hotel images"
                      />
                    </div>
                    <div className={styles.resAllMain}>
                      <div className={styles.nameAddressArea}>
                        <div className={styles.name}>{elem.name}</div>
                        <div className={styles.addressArea}>
                          {elem.address}, {elem.area}
                        </div>
                      </div>
                      <div className={styles.rating}>{elem.rating}</div>
                    </div> */}

										{/* <div
											style={{
												borderBottom:
													"1px solid rgba(0, 0, 0, 0.05)",
												marginLeft: "20px",
												marginRight: "20px",
											}}
										></div> */}
									</div>
								</div>
							</div>
						);
					})}
				</Slider>
			</div>
		</div>
  );
};
