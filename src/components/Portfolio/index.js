import React from 'react';
import Project from '../Project';

function Portfolio() {
	const projects = [
		{
			name: 'Password Generator',
			description:
				'A password generator that an employee/organization can use to generate a secure random password based on criteria the user has selected.',
			image: 'generatingpassword.png',
			technologies: [
				'HTML/CSS',
				'JavaScript',
			],
			github: 'hhttps://github.com/krrodriguez26/PasswordGenerator',
			deployed: 'https://krrodriguez26.github.io/PasswordGenerator/',
		},
		{
			name: 'Horiseon',
			description:
				'A marketing agency needs help refactoring an existing site to make it more accessible,and is optimized for search engines',
			image: 'horiseon.png',
			technologies: [
				'HTML/CSS',
			],
			github: 'https://github.com/krrodriguez26/hori-seon',
			deployed: 'https://krrodriguez26.github.io/hori-seon/',
		},
		{
			name: 'Weekly Planner',
			description:
				'A clean and accurate way to search for your favorite songs while also displaying the lyrics.',
			image: 'weekly planner.png',
			technologies: ['HTML/CSS', 'JavaScript', 'jQuery'],
			github: 'https://github.com/krrodriguez26/WeeklyPlanner',
			deployed: 'https://krrodriguez26.github.io/WeeklyPlanner/',
		},
		{
			name: 'JavaScript Fundamentals',
			description:
				' Allows for user to effectively keep track of their time by adding tasks in the planner.',
			image: 'Javaquiz.png',
			technologies: [
				'HTML/CSS',
				'JavaScript',
			],
			github: 'https://github.com/krrodriguez26/JavaScriptFundamentals',
			deployed: 'https://krrodriguez26.github.io/JavaScriptFundamentals/',
		},
		{
			name: 'ReadMe Generator',
			description:
				'Create a command line application that dynamically generates a README.md from a user`s input.',
			image: '',
			technologies: ['HTML/CSS', 'JavaScript', 'Node'],
			github: 'https://github.com/krrodriguez26/ReadMe_generator',
			
		},
		{
			name: 'Active Her',
			description:
				'We created an app that creates an empowering and mindful space where women can create activity groups such as; rollerblading, running, biking etc. and meet up at local parks.',
			image: 'Homepage.png',
			technologies: ['HTML/CSS', 'JavaScript', 'Node', 'Express', 'MySQL'],
			github: 'https://github.com/krrodriguez26/ActiveHer',
			deployed: 'https://safe-cliffs-73161.herokuapp.com/',
		},
		{
			name: 'User Directory',
			description:
				'This app allows for a user to be able to view my an employee directory at once for quicker access to their information.',
			image: 'EmployeeDirectory.png',
			technologies: ['HTML/CSS', 'JavaScript', 'Express.js'],
			github: 'https://github.com/krrodriguez26/User-Directory',
			deployed: 'https://krrodriguez26.github.io/User-Directory/'
			
		},
	];

	return (
		<section>
			<div className="center">
				<h1 className="page-header">My Portfolio</h1>
			</div>
			<div>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[0]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[1]}></Project>
					</li>
				</ul>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[2]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[3]}></Project>
					</li>
				</ul>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[4]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[5]}></Project>
					</li>
				</ul>
			</div>
		</section>
	);
}

export default Portfolio;
