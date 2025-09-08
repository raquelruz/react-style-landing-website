import { Routes, Route } from "react-router-dom";
import "./App.css";
import { NavBar } from "./components/Navbar";
import { HomePage } from "./pages/HomePage";

export const App = () => {
	return (
		<div className="app-container">
			<NavBar />

			<main className="main">
				<Routes>
					<Route path="/" element={<HomePage />} />

				</Routes>
			</main>
		</div>
	);
};
