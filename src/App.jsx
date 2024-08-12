import { ItemListContainer } from "./components/ItemListContainer";
import { NavBar } from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/App.css";
import { ItemDetail } from "./components/ItemDetail";
import { ErrorPage } from "./components/404Page";

function App() {
	return (
		<BrowserRouter>
			<NavBar />

			<Routes>
				<Route path="/" element={<ItemListContainer />} />
				<Route path="/categoria/:categoryName" element={<ItemListContainer />} />
				<Route path="/detalle/:id" element={<ItemDetail />} />
				<Route path="*" element={<ErrorPage/>} />
			</Routes>

		</BrowserRouter>
	);
}

export default App;
