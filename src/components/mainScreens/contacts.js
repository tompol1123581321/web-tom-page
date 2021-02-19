import React from "react"
import { Button, Container, Form } from "react-bootstrap"
import "../../style/mainStructure.scss"
const Contacts = () => {
	return (
		<div className="pageContainer">
			<Container style={{ paddingTop: "2rem" }}>
				<Form id="formContacts">
					<Form.Group style={{ maxWidth: "15rem" }} controlId="exampleForm.ControlInput1">
						<Form.Label>Email address</Form.Label>
						<Form.Control type="email" />
					</Form.Group>
					<Form.Group controlId="exampleForm.ControlTextarea1">
						<Form.Label>Your messege:</Form.Label>
						<Form.Control as="textarea" rows={3} />
					</Form.Group>
					<Button variant="primary" type="submit">
						Submit
					</Button>
				</Form>
			</Container>
		</div>
	)
}

export default Contacts
