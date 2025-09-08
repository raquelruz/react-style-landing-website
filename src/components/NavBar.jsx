import { NavLink } from "react-router-dom";

export const NavBar = () => {
	return (
		<nav
			style={{
				display: "flex",
				flexDirection: "row",
				alignItems: "center",
				justifyContent: "space-around",
                padding: "10px 20px"
			}}
		>
			<img src="/src/media/logo/logo.svg" alt="" />

			<div
				style={{
					display: "flex",
					flexDirection: "row",
					alignItems: "center",
                    gap: "20px",
				}}
			>
				<NavLink to="/home">Home</NavLink>
				<NavLink to="/features">Features</NavLink>
				<NavLink to="/community">Community</NavLink>
				<NavLink to="/blog">Blog</NavLink>
				<NavLink to="/pricing">Pricing</NavLink>
				<NavLink
					to="/register"
					style={{
						backgroundColor: "#28CB8B",
						color: "#FFFFFF",
						padding: "10px 32px",
					}}
				>
					Register now
				</NavLink>
			</div>
		</nav>
	);
};
