import React, { useState } from "react"
import { Button, Form } from "react-bootstrap"
import "../../style/mainStructure.scss"
import emailjs from "emailjs-com"

const FormPart = () => {
	const {
		REACT_APP_EMAILJS_SERVICE,
		REACT_APP_EMAILJS_TEMPLATE,
		REACT_APP_EMAILJS_USER,
	} = process.env

	console.log(REACT_APP_EMAILJS_USER)
	const [
		emailAddressValue,
		setEmailAddressValue,
	] = useState("")
	const [textAreaValue, setTextAreaValue] = useState("")

	const dataForm = {
		from: emailAddressValue,
		text: textAreaValue,
	}
	const sendTheData = async () => {
		emailjs
			.send(
				REACT_APP_EMAILJS_SERVICE,
				REACT_APP_EMAILJS_TEMPLATE,
				dataForm,
				REACT_APP_EMAILJS_USER
			)
			.then(
				(result) => {
					console.log(result.text)
				},
				(error) => {
					console.log(error.text)
				}
			)
	}
	return (
		<Form
			id="formContacts"
			onSubmit={(e) => {
				e.preventDefault()
				sendTheData()
				setTextAreaValue("")
				setEmailAddressValue("")
			}}
		>
			<Form.Group
				style={{ maxWidth: "15rem" }}
				controlId="formBasicEmail"
			>
				<Form.Label>Email address</Form.Label>
				<Form.Control
					onChange={(e) => {
						setEmailAddressValue(e.target.value)
					}}
					type="email"
					value={emailAddressValue}
				/>
			</Form.Group>
			<Form.Group controlId="exampleForm.ControlTextarea1">
				<Form.Label>Vaše zpráva:</Form.Label>
				<Form.Control
					onChange={(e) => {
						setTextAreaValue(e.target.value)
					}}
					as="textarea"
					rows={3}
					value={textAreaValue}
				/>
			</Form.Group>
			<Button variant="primary" type="submit">
				Odeslat
			</Button>
		</Form>
	)
}

export default FormPart
