import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./restaurantNearYou.module.css";

export const CardDisplay = (props) => {
	const navigate = useNavigate();
	const handleNavigate = () => {
		navigate(`/details:${props.elem.name}`, { state: props.elem });
	};
	return (
		<div onClick={handleNavigate}>
			<div key={props.elem.id} className={styles.restaurantCartsMain}>
				<div>
					<div className={styles.imgMain}>
						<img
							className={styles.resImg}
							src={props.elem.image}
							alt="hotel images"
						/>
					</div>
					<div className={styles.resAllMain}>
						<div className={styles.nameAddressArea}>
							<div className={styles.name}>{props.elem.name}</div>
							<div className={styles.addressArea}>
								{props.elem.address}, {props.elem.area}
							</div>
						</div>
						<div className={styles.rating}>{props.elem.rating}</div>
					</div>
				</div>
				{props.flat}
			</div>
		</div>
	);
};
