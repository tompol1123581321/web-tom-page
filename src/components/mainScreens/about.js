import { motion } from "framer-motion"
import React from "react"
import { Card, Container, Row } from "react-bootstrap"
import "../../style/mainStructure.scss"
import { pageAnimation } from "../parts/animations"

const About = () => {
	return (
		<motion.div
			exit="exit"
			className="pageContainer"
			variants={pageAnimation}
			initial="hidden"
			animate="show"
		>
			<Container className="my-4">
				<Row>
					<Card.Img
						variant="top"
						rounded
						src="/images/myFace.jpg"
						style={{
							maxWidth: "15rem",
							maxHeight: "15rem",
							borderRadius: "0.4rem",
						}}
					/>
				</Row>
				<Row>
					<h3 style={{ paddingTop: "1rem" }}>O mě</h3>
				</Row>
				<Row>
					<Card.Text className="cardText">
						Dobrý den, <br />
						jmenuji se Tomáš a jsem studentem mezinárodního
						obchodu a managementu v Praze a ve Würzburku
						(Německo). Tam jsem tak poprvé přišel do styku s
						programováním, což mě od první chvíle plně
						pohltilo. Specializuji se na front-end a
						full-stack vývoj webových aplikací.
						<br />
						Snažím se co nejvíce využívat nové technologie a
						učit se. Mám rád výzvy a zakládám si na
						spolehlivosti. <br />
						Mezi mé další koníčky patří cizí jazyky, četba,
						sport a cestování.
					</Card.Text>
				</Row>
			</Container>
		</motion.div>
	)
}

export default About
