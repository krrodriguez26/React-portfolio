import React from "react";

function Footer() {
	return (
		<footer className="footer">
			<div>
				<a
					href="https://github.com/krrodriguez26"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src={("assets/logos/github-logo.png")}
						alt="Github"
						className="logo"
					></img>
				</a>
			</div>
			<div>
				<a
					href="https://www.linkedin.com/in/kathy-rodriguez/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src={("assets/logos/linkedin-logo.png")}
						alt="LinkedIn"
						className="logo"
					></img>
				</a>
			</div>
		</footer>
	);
}

export default Footer;
