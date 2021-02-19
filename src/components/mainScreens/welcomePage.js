import React from "react"
import { Row } from "react-bootstrap"
import "../../style/mainStructure.scss"

const WelcomePage = () => {
	return (
		<div className="pageContainer">
			<section class="middle">
				<h2 class="textMiddle">Individuální tvorba webových aplikací a stránek</h2>
				<Row className="icons">
					<img src="./images/1.ico" alt="" />
					<img src="./images/2.ico" alt="" />
					<img src="/images/3.ico" alt="" />
					<img src="/images/4.ico" alt="" />
					<img src="/images/5.ico" alt="" />
					<img src="/images/6.ico" alt="" />
				</Row>
			</section>
		</div>
	)
}

export default WelcomePage
