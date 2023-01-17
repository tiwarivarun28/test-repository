import React from "react";
import { BrowsePlans } from "./BrowsePlans";
import { DineOutGif } from "./DineOutGif";
import styles from "./dineOutPassport.module.css";
import { DineOutPassportExperience } from "./DineOutPassportExperience";
import { DineOutPassportMember } from "./DineOutPassportMember";
import { DineOutPassRegister } from "./DineOutPassRegister";

import { GetToKnow } from "./GetToKnow";
import { PassportHowToUse } from "./PassportHowToUse";
import { PopularAroundYou } from "./PopularAroundYou";

export const DineOutPassportComponents = () => {
	return (
		<div>
			<div className={styles.dineOutAlignMain}>
				<DineOutGif />
				<DineOutPassportMember />
				<DineOutPassportExperience />
				<PopularAroundYou />
				<DineOutPassRegister />
				<PassportHowToUse />
				<GetToKnow />
				<BrowsePlans />
			</div>
		</div>
	);
};
