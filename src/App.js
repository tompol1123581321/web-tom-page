import "./style/mainStructure.scss"
import Header from "../src/components/parts/header"
import Footer from "./components/parts/footer"
import WelcomePage from "./components/mainScreens/welcomePage"
import {
	Switch,
	Route,
	useLocation,
} from "react-router-dom"
import Contacts from "./components/mainScreens/contacts"
import About from "./components/mainScreens/about"
import Projects from "./components/mainScreens/projects"
import { AnimatePresence } from "framer-motion"
import { useState } from "react"
import InitialAnimationPage from "./components/mainScreens/initialAnimationPage"

function App() {
	const location = useLocation()
	const [newInit, setNewInit] = useState(true)

	if (newInit === true) {
		setTimeout(() => {
			setNewInit(false)
		}, [2500])
		return <InitialAnimationPage />
	}
	return (
		<div>
			<Header />
			<div className="pageContainer">
				<AnimatePresence exitBeforeEnter>
					<Switch
						location={location}
						key={location.pathname}
					>
						<Route path="/" component={WelcomePage} exact />
						<Route path="/contact" component={Contacts} />
						<Route path="/about" component={About} />

						<Route path="/projects" component={Projects} />
					</Switch>
				</AnimatePresence>
			</div>
			<Footer />
		</div>
	)
}

export default App
