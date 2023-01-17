import React from 'react'
import LocalOfferIcon from "@mui/icons-material/LocalOffer";

export const Flat = () => {
  return (
		<div>
			<div
				style={{
					color: "#54BD8A",
					fontWeight: "600",
					display: "flex",
					alignItems: "center",
					paddingLeft: "20px",
					marginTop: "10px",
					paddingBottom: "20px",
				}}
			>
				<LocalOfferIcon fontSize="small" />
				<div
					style={{
						paddingLeft: "10px",
						fontSize: "14px",
					}}
				>
					Flat 10% Off the Total Bill
				</div>
			</div>
		</div>
  );
}
