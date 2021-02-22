import { motion } from "framer-motion"
import React from "react"
import { Container, Row } from "react-bootstrap"
import "../../style/mainStructure.scss"
import { pageAnimation } from "../parts/animations"

const WelcomePage = () => {
	return (
		<motion.div
			className="pageContainer"
			exit="exit"
			variants={pageAnimation}
			initial="hidden"
			animate="show"
		>
			<Container className="justify-content-center">
				<h2>
					Individuální tvorba webových aplikací a stránek
				</h2>
				<Row className="icons">
					<img src="/images/1.ico" alt="" />
					<img src="/images/2.ico" alt="" />
					<img src="/images/3.ico" alt="" />
					<img src="/images/4.ico" alt="" />
					<img src="/images/5.ico" alt="" />
				</Row>
			</Container>
		</motion.div>
	)
}

export default WelcomePage
