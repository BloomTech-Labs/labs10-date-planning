import React from "react";
import Router from "next/router";
import Link from "next/link";
import Button from "../../styledComponents/CustomButtons/Button";

const Main = ({ user }) => {
	return (
		<div style={{ marginTop: "100px" }}>
			<h2>Welcome to Up4 {user.firstName}!</h2>
			<h3>Tell us a little about yourself...</h3>
			<Link href={`/welcome?slug=1`} as="/welcome/profile/gender">
				<a>
					<Button
						onClick={() => {
							Router.push(
								`/welcome?slug=1`,
								`/welcome/profile/gender`,
								{ shallow: true },
								{ scroll: false }
							);
						}}
					>
						Get Started
					</Button>
				</a>
			</Link>
		</div>
	);
};

export default Main;
