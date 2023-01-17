import "./App.css";
import { useEffect } from "react";
import { NavbarRouterComponent } from "./routes/NavbarRouterComponent";
import { fetchCartData, sendCartData } from "./store/cart-action";
import { useDispatch, useSelector } from "react-redux";
let initial = true;
function App() {
	const cart = useSelector((state) => state.cart);

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchCartData());
	}, [dispatch]);

	useEffect(() => {
		if (cart.changed) dispatch(sendCartData(cart));
	}, [cart, dispatch]);
	return (
		<div className="App">
			<NavbarRouterComponent />
		</div>
	);
}
export default App;
