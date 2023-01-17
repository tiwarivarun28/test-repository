import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store/index";

import reportWebVitals from "./reportWebVitals";
import { NavbarContextProvider } from "./contexts/NavbarContext";
import { BrowserRouter } from "react-router-dom";
import { RestaurantNeatYouContextProvider } from "./contexts/RestaurantNeatYouContext";
import { LogInContextProvider } from "./contexts/LogInContext";
import { FeaturedResContextProvider } from "./contexts/FeaturedResContext";
import { MemberShipContextProvider } from "./contexts/MemberShipContext";

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<LogInContextProvider>
				<NavbarContextProvider>
					<RestaurantNeatYouContextProvider>
						<FeaturedResContextProvider>
							<MemberShipContextProvider>
								<Provider store={store}>
									<App />
								</Provider>
							</MemberShipContextProvider>
						</FeaturedResContextProvider>
					</RestaurantNeatYouContextProvider>
				</NavbarContextProvider>
			</LogInContextProvider>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);


reportWebVitals();
