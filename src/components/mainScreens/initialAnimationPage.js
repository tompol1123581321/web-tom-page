import React from "react"
import "../../style/initial.scss"
import { motion } from "framer-motion"

const InitialAnimationPage = () => {
	const icon = {
		hidden: {
			pathLength: 0,
			fill: "rgba(255, 255, 255, 0)",
		},
		visible: {
			pathLength: 1,
			fill: "rgba(150, 150, 150, 1)",
		},
	}
	return (
		<div id="InitialAnimationPage">
			<motion.svg
				width="276"
				height="232"
				viewBox="0 0 276 232"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<motion.path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M161.755 28.4V2H131.515V28.4H101.552V55.184H131.515V83.216H68.4432C49.0512 83.216 33.2112 88.784 20.9232 99.92C8.63515 111.056 2.49115 125.456 2.49115 143.12C2.49115 160.976 8.63515 175.472 20.9232 186.608C33.0192 197.936 48.8592 203.6 68.4432 203.6H161.755V55.184H172.4V230H202.64V55.184H273.488V28.4H161.755ZM131.515 177.104H71.6112C59.8992 177.104 50.5871 174.032 43.6751 167.888C36.5712 161.744 33.0192 153.488 33.0192 143.12C33.0192 132.752 36.5712 124.4 43.6751 118.064C50.5871 111.92 59.8992 108.848 71.6112 108.848H131.515V177.104Z"
					variants={icon}
					initial="hidden"
					animate="visible"
					className="item"
					transition={{
						default: { duration: 2.3, ease: "easeInOut" },
						fill: { duration: 2.3, ease: [1, 0, 0.8, 1] },
					}}
				/>
			</motion.svg>
		</div>
	)
}

export default InitialAnimationPage
