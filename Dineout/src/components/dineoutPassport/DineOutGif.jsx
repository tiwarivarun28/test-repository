import React from 'react'
import styles from "./dineOutGif.module.css"

export const DineOutGif = () => {
  return (
		<div>
			<img
				className={styles.imgGif}
				src="https://im1.dineout.co.in/images/uploads/misc/2022/Jan/19/gifdpbuy.gif"
				alt="dineout passport"
			/>
		</div>
  );
}
