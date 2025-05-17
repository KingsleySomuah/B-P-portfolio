import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import LandingCompoents from "./pages/LandingCompoents";
import About from "./components/about/About";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<LandingCompoents />} />
					<Route path="/" element={<About />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
