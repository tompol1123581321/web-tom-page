import React, { useEffect, useState } from "react"
import "../../style/mainStructure.scss"
import { projects } from "../../projectsData"
import {
	Button,
	Col,
	Container,
	Row,
} from "react-bootstrap"
import ProjectCard from "../parts/projectCard"
import { motion } from "framer-motion"
import { pageAnimation } from "../parts/animations"

const Projects = () => {
	const [
		invertedCarouselValue,
		setInvertedCarouselValue,
	] = useState(0)
	const duration = 0.2

	useEffect(() => {
		if (invertedCarouselValue <= 5) {
			setTimeout(() => {
				setInvertedCarouselValue(invertedCarouselValue + 1)
			}, [1500])
		} else {
			setInvertedCarouselValue(0)
		}
	}, [invertedCarouselValue])
	return (
		<motion.div
			className="pageContainer"
			exit="exit"
			variants={pageAnimation}
			initial="hidden"
			animate="show"
		>
			<Container>
				<h2>Moje Nabídka</h2>
				<p>
					Mohu vám nabídnout programátorksé služby týkající
					se tvorby webových stránek a aplikací. Pro mé
					služby využívám ty nejmoderníější a
					nejefektivnější technologie.
				</p>
				<div id="creat">
					<h4>Má tvorba je:</h4>
					<div id="window">
						<motion.div
							id="techs"
							animate={{
								y: ` -${invertedCarouselValue * 2.5}rem`,
							}}
							transition={{
								type: "spring",
								duration: { duration },
							}}
						>
							<div className="tech">
								<h4>Individuální</h4>
							</div>
							<div className="tech">
								<h4>Funkční</h4>
							</div>
							<div className="tech">
								<h4>Moderní</h4>
							</div>
							<div className="tech">
								<h4>Responsivní</h4>
							</div>
							<div className="tech">
								<h4>Kreativní</h4>
							</div>
							<div className="tech">
								<h4>Spolehlivá</h4>
							</div>
							<div id="firstclone" className="tech">
								<h4>Individuální</h4>
							</div>
						</motion.div>
					</div>
				</div>

				<h6>Mé projekty:</h6>
				<a
					target="_blank"
					href="https://github.com/tompol1123581321"
				>
					<Button variant="secondary">My Github</Button>
				</a>
				<Row>
					{projects.map((project) => (
						<Col lg={3} md={4} sm={6}>
							<ProjectCard project={project} />
						</Col>
					))}
				</Row>
			</Container>
		</motion.div>
	)
}

export default Projects
