import React, { useContext } from "react";
import Modal from "@mui/material/Modal";
import Paper from "@mui/material/Paper";
import styles from "./loginNavbar.module.css";
import { LogInContext } from "../../contexts/LogInContext";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import { LogOut } from "./LogOut";

export const LogInNavbar = () => {
	const {
		open,
		handleOpen,
		handleClose,
		logInWithNum,
		handleLogInWithNum,
		handleModelContinue,
	} = useContext(LogInContext);

	let isLoggedIn = JSON.parse(localStorage.getItem("value"));
	
	return (
		<div>
			{isLoggedIn === true ? (
				<>
					<LogOut />
				</>
			) : (
				<button
					className={styles.navbarLoginButton}
					onClick={handleOpen}
				>
					Login
				</button>
			)}

			<Modal open={open}>
				<Paper className={styles.loginModel}>
					<div>
						<div className={styles.modelSignInButtonMain}>
							<div className={styles.loginOrSignup}>
								Log In / Sign Up
							</div>
							<button
								className={styles.closeButton}
								onClick={handleClose}
							>
								x
							</button>
						</div>
						<div className={styles.inputfield}>
							<TextField
								value={logInWithNum}
								onChange={handleLogInWithNum}
								id="standard-basic"
								label="Enter Mobile Number or Email"
								variant="standard"
								className={styles.textField}
							/>
						</div>

						<button
							id={styles.handleModelContinueBtn}
							onClick={handleModelContinue}
						>
							Continue
						</button>
						<div className={styles.lineTextLine}>
							<div className={styles.dash}>
								<hr className={styles.hrlogin} />
							</div>
							<span className={styles.loginvia}>
								Or login via
							</span>
							<span className={styles.dash}>
								<hr className={styles.hrlogin} />
							</span>
						</div>
						<div className={styles.btnWithIconMain}>
							<Stack direction="row" spacing={2}>
								<Button
									style={{
										backgroundColor: "#4267B2",
										color: "white",
										width: "185px",
									}}
									variant="outlined"
									startIcon={<FacebookIcon />}
								>
									Facebook
								</Button>
							</Stack>
							<Stack direction="row" spacing={2}>
								<Button
									style={{
										backgroundColor: "#fff",
										color: "#333",
										width: "185px",
										border: "1px solid black",
										boxSizing: "border box",
									}}
									variant="outlined"
									startIcon={<GoogleIcon />}
								>
									Gmail
								</Button>
							</Stack>
						</div>
					</div>
				</Paper>
			</Modal>
		</div>
	);
};
