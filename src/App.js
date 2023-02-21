/** @format */

import "./App.css";
import Home from "./pages/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Faculty from "./pages/Faculty/Faculty";

function App() {
	return (
		<>
			<Router>
				<Navbar />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/faculty" exact component={Faculty} />
				</Switch>
				<Footer />
			</Router>
		</>
	);
}

export default App;
