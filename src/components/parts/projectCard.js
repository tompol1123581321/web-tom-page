import { motion } from "framer-motion"
import React, { useState } from "react"
import {
	Card,
	ListGroup,
	ListGroupItem,
} from "react-bootstrap"

const ProjectCard = ({ project }) => {
	return (
		<a href={project.link} target="_blank">
			<motion.div
				whileHover={{ scale: 1.1 }}
				whileTap={{ scale: 0.9 }}
			>
				<Card
					className="my-3 rounded"
					style={{ maxWidth: "20rem", margin: "auto" }}
				>
					<Card.Img
						variant="top"
						style={{
							maxWidth: "20rem",
							padding: "0",
							margin: "0",
						}}
						src={project.img}
					/>
					<ListGroup style={{ color: "black" }}>
						<ListGroupItem>
							<Card.Title>{project.name}</Card.Title>
						</ListGroupItem>

						<ListGroupItem style={{ color: "black" }}>
							{project.description}
						</ListGroupItem>
					</ListGroup>
				</Card>
			</motion.div>
		</a>
	)
}

export default ProjectCard
