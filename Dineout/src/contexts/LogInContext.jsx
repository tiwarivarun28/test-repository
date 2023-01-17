import React, { createContext, useState } from "react";

export const LogInContext = createContext();

export const LogInContextProvider = ({ children }) => {
	const [open, setOpen] = useState(false);
	const [logInWithNum, setLogInWithNum] = useState("");
	const [data, setData] = useState(false);
	const handleLogInWithNum = (e) => {
		setLogInWithNum(e.currentTarget.value);
	};
	const handleOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
		setLogInWithNum("");
	};
	const handleModelContinue = () => {
		if (logInWithNum.length === 10) {
			setOpen(false);
			setData(true);
			localStorage.setItem("value", true);
			setLogInWithNum("");
		} else {
			alert("Please enter valid mobile number");
			setData(false);
			localStorage.setItem("value", false);
		}
	};

	const handleLogOutBtn = () => {
		setData(false);
		localStorage.setItem("value", false);
		window.location.reload();
		setLogInWithNum("");
	};

	return (
		<LogInContext.Provider
			value={{
				open,
				handleOpen,
				handleClose,
				logInWithNum,
				handleLogInWithNum,
				handleModelContinue,
				handleLogOutBtn,
				data,
			}}
		>
			{children}
		</LogInContext.Provider>
	);
};
