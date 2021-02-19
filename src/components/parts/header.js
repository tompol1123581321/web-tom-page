import "../../style/mainStructure.scss"
import React from "react"
import { Nav, Navbar } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"

const Header = () => {
	return (
		<Navbar id="navBar" bg="dark" variant="dark" expand="lg">
			<LinkContainer to="/">
				<Navbar.Brand className="nav1">
					<div class="logo_znak">
						<h1 className="Name">
							<span className="unselectable" aria-hidden="true">
								webtom
							</span>
							webtom
							<span class="unselectable" aria-hidden="true">
								webtom
							</span>
						</h1>
					</div>
				</Navbar.Brand>
			</LinkContainer>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
				<Nav>
					<LinkContainer to="/about">
						<Nav.Link className="nav2">O mě</Nav.Link>
					</LinkContainer>
					<LinkContainer to="/offer">
						<Nav.Link className="nav2">Nabídka</Nav.Link>
					</LinkContainer>
					<LinkContainer to="/projects">
						<Nav.Link className="nav2">Projekty</Nav.Link>
					</LinkContainer>
					<LinkContainer to="/contact">
						<Nav.Link className="nav2">Kontakty</Nav.Link>
					</LinkContainer>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	)
}

export default Header
