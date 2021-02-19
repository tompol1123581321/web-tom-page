import React from "react"
import "../../style/mainStructure.scss"

const Offer = () => {
	return (
		<div className="pageContainer">
			<h2>Moje Nabídka</h2>
			<p>
				Mohu vám nabídnout programátorksé služby týkající se tvorby webových stránek a aplikací. Pro
				mé služby využívám ty nejmoderníější a nejefektivnější technologie.
			</p>
			<div id="serv">
				<h3>Příklady služeb:</h3>
				<section id="services">
					<div id="websiteBig" class="servis">
						<h3>Webové stránky</h3>
						<img id="website" src="/images/Website.png" alt="" />
					</div>
					<div id="appBig" class="servis">
						<h3>Webové aplikace</h3>
						<img id="app" src="/images/app.png" alt="" />
					</div>
					<div id="eshopBig" class="servis">
						<h3>E-shopy</h3>
						<img id="eshop" src="/images/e-shop.png" alt="" />
					</div>
				</section>
			</div>
			<div id="creat">
				<h3>Má tvorba je:</h3>
				<div id="window">
					<div id="techs">
						<div class="tech">
							<h3>Individuální</h3>
						</div>
						<div class="tech">
							<h3>Funkční</h3>
						</div>
						<div class="tech">
							<h3>Moderní</h3>
						</div>
						<div class="tech">
							<h3>Responsivní</h3>
						</div>
						<div class="tech">
							<h3>Kreativní</h3>
						</div>
						<div class="tech">
							<h3>Spolehlivá</h3>
						</div>
						<div id="firstclone" class="tech">
							<h3>Individuální</h3>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Offer
