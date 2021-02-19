import React from "react"
import "../../style/mainStructure.scss"

const Projects = () => {
	return (
		<div className="pageContainer">
			<section id="Projects">
				<h2>Projekty</h2>
				<p>Zde je výpis několika projektů na kterých jsem pracoval v minulosti.</p>
				<section id="projsec">
					<ul id="listprojs">
						<li class="listproj">
							<div>
								<h3>Popis....</h3>
								<a href="https://hardcore-mcnulty-fce9f4.netlify.app/index.html">
									<img src="/images/breathing.png" alt="" />
								</a>
							</div>
						</li>
						<li class="listproj">
							<div>
								<h3>Popis....</h3>
								<a href="https://www.jazykyhrou.cz/">
									<img src="/images/skola.png" alt="" />
								</a>
							</div>
						</li>
						<li class="listproj">
							<div>
								<h3>Popis....</h3>
								<a href="https://hardcore-mcnulty-fce9f4.netlify.app/index.html">
									<img src="/images/breathing.png" alt="" />
								</a>
							</div>
						</li>
						<li class="listproj">
							<div>
								<h3>Popis....</h3>
								<a href="https://hardcore-mcnulty-fce9f4.netlify.app/index.html">
									<img src="/images/breathing.png" alt="" />
								</a>
							</div>
						</li>
					</ul>
				</section>
			</section>
		</div>
	)
}

export default Projects
