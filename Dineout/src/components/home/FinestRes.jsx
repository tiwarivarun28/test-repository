import React, { useContext, useEffect, useState } from "react";
import styles from "./finestRes.module.css";
import { FeaturedResContext } from "../../contexts/FeaturedResContext";
import { Link } from "react-router-dom";
import { CardDisplay } from "./CardDisplay";
import { useSelector } from "react-redux";

export const FinestRes = () => {
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

  const array = resData.splice(0, 4);
  return (
		<div className={styles.finestRoot}>
			<Link to="/dineoutpassport">
				<div>
					<img
						className={styles.registerImg}
						src="https://im1.dineout.co.in/images/uploads/misc/2020/Sep/9/artboard.png?tr=tr:n-large"
						alt="img1"
					/>
				</div>
			</Link>
			<div className={styles.finestImageAlignMain}>
				{array.map((elem) => {
					return (
						<div key={elem.id}>
							<CardDisplay elem={elem} />
							{/* <Link className={styles.finestLinkDec} to="/">
									<div className={styles.forHover}>
										<div className={styles.imgMain}>
											<img
												className={styles.elemImg}
												src={elem.image}
												alt=""
											/>
										</div>
										<div className={styles.resAllMain}>
											<div
												className={
													styles.nameAddressArea
												}
											>
												<div className={styles.name}>
													{elem.name}
												</div>
												<div
													className={
														styles.addressArea
													}
												>
													{elem.address}, {elem.area}
												</div>
											</div>
											<div className={styles.rating}>
												{elem.rating}
											</div>
										</div>
									</div>
								</Link> */}
						</div>
					);
				})}
			</div>
		</div>
  );
};
