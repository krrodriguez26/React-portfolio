import React from 'react';

function About() {
	return (
		<section>
			<div className="center" id="about">
				<h1 className="page-header">About Me</h1>
			</div>
			<div className="center">
				<img
					src="assets/images/aboutme.png"
					alt="about-me"
					className="photo"
				/>
			</div>
			<div>
				<p>
        My name is Kathy Rodriguez; I was born and raised in Miami, Florida. I attended the University of Florida and graduated with a Bachelor's Degree in Telecommunications with an outer concentration in Art History. 
        I'm currently attending a Full Stack Web Developer program at the University of Miami. 
        When I am not working or coding, I enjoy reading, biking-riding, and going to the beach.
				</p>
				
			</div>
		</section>
	);
}

export default About;