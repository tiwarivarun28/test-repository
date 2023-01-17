import React from "react";

import { EachQues } from "./EachQues";
import styles from "./getToKnow.module.css";
export const GetToKnow = () => {
	return (
		<div>
			<div className={styles.getToKnowHeading}>Get to know your club</div>
			<EachQues
				que={"What is Dineout Passport?"}
				ans={
					"Dineout Passport is a premium dining membership program on Dineout that offers unmatched value with:"
				}
			/>
			<EachQues
				que={
					"Do I need to make a reservation to use the Dineout Passport?"
				}
				ans={
					"Not at all! To take advantage of Dineout Passport, you do not not need a prior reservation. Simply walk into a Dineout Passport partner restaurant, and redeem your offer at the time of billing."
				}
			/>
			<EachQues
				que={
					"Do I need to make a reservation to use the Dineout Passport?"
				}
				ans={
					"Not at all! To take advantage of Dineout Passport, you do not not need a prior reservation. Simply walk into a Dineout Passport partner restaurant, and redeem your offer at the time of billing."
				}
			/>
			<EachQues
				que={
					"Can I club other offers when I avail Dineout Passport benefits?"
				}
				ans={
					"Clubbing of other offers (including other Dineout offers or in-house restaurant offers) with Dineout Passport offers, is currently not allowed at a partner restaurant."
				}
			/>
			<EachQues
				que={
					"Can the list of partner restaurants change after I have purchased the membership?"
				}
				ans={
					"Yes, the list of partner restaurants on Dineout Passport may change over time. While we work on adding more top restaurants to our network, some existing partners may also be removed temporarily owing to operational constraints at the outlet or if we've noted less-than-satisfactory service offered to our members."
				}
			/>
			<EachQues
				que={"Is the membership refundable?"}
				ans={
					"The Dineout Passport membership is non-refundable & assures you an enjoyable time each time you use it to dine! With an assured 25% off on the bill, 1+1 offers of food & drinks, and unforgettable experiences - it's the only dining out a membership you'll ever need."
				}
			/>
			<EachQues
				que={"On which dates is Dineout Passport not valid?"}
				ans={
					"Excluding some key public holidays and exclusions, Dineout Passport membership is valid throughout the year.Some exceptions are Christmas Eve, Christmas Day, New Year's Eve, New Year's Day & Valentine's Day. Special events, theme nights, buffets or brunches are excluded from the offer - unless specified by the restaurant."
				}
			/>
			<EachQues
				que={"How does 1+1 buffet work?"}
				ans={
					"On purchasing a Dineout Passport, you will receive 3 coupons per Dineout Passport restaurant where 1+1 on Buffet is available.Each coupon entitles you to one complimentary buffet when another buffet is ordered of the same or higher value. You can check the offer details on the restaurant's page for restaurant-specific information."
				}
			/>
			<EachQues
				que={"How does % off on Total Bill offer work?"}
				ans={
					"To avail % off on your total bill you need to enter the amount as shown in the bill, then select your preferred payment method & complete the payment via Dineout Pay. Discount will automatically be applied to your total bill amount."
				}
			/>
		</div>
	);
};
