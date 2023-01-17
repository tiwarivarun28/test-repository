import React from "react";
import { DropDownNavbar } from "../navbar/DropDownNavbar";
import { DineOutPassportComponents } from "./DineOutPassportComponents";
export const DineOutPassport = () => {
	return (
		<div>
			<DropDownNavbar />
			<div style={{ position: 'relative',top:"100"}}>
				<DineOutPassportComponents />
			</div>
		</div>
	);
};
