import { motion } from "framer-motion"
import React from "react"
import { Container } from "react-bootstrap"
import "../../style/mainStructure.scss"
import { pageAnimation } from "../parts/animations"
import FormPart from "../parts/Form"

const Contacts = () => {
	return (
		<motion.div
			className="pageContainer"
			exit="exit"
			variants={pageAnimation}
			initial="hidden"
			animate="show"
		>
			<Container style={{ paddingTop: "2rem" }}>
				<h4>
					Pro komunikaci využívejte prosím následující
					formulář.
				</h4>
				<FormPart />
			</Container>
		</motion.div>
	)
}

export default Contacts
