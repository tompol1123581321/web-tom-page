import "./style/mainStructure.scss"
import Header from "../src/components/parts/header"
import Footer from "./components/parts/footer"
import WelcomePage from "./components/mainScreens/welcomePage"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Contacts from "./components/mainScreens/contacts"
import About from "./components/mainScreens/about"
import Offer from "./components/mainScreens/offer"
import Projects from "./components/mainScreens/projects"

function App() {
	return (
		<div className="pageContainer">
			<Router>
				<Header />
				<Switch>
					<Route path="/" component={WelcomePage} exact />
					<Route path="/contact" component={Contacts} />
					<Route path="/about" component={About} />
					<Route path="/offer" component={Offer} />
					<Route path="/projects" component={Projects} />
				</Switch>
				<Footer />
			</Router>
		</div>
	)
}

export default App
