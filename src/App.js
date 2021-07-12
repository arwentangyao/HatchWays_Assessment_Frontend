import React, { useState, useEffect } from 'react';
import './App.css'

const App = () => {
	// setup state:
	const [lists, setLists] = useState([]);

	const endpoint = 'https://api.hatchways.io/assessment/students';

	// Update state when rendering
	useEffect(() => {
		const getLists = async () => {
			const { students } = await fetchLists();
			setLists(students);
		};
		getLists();
	}, []);

	// Fetch data
	const fetchLists = async () => {
		const res = await fetch(endpoint);
		const data = await res.json();
		return data;
	};

  // Calculate average fun
	const average = (arr) => {
		const newArr = arr.map((item) => parseInt(item));
		const sum = newArr.reduce((a, c) => a + c);
		return sum / newArr.length;
	};

	return (
		<>
			{lists.map(({ id, pic, firstName, lastName, email, skill, grades, company }) => (
				<ul key={id} style={{ listStyleType: 'none', lineHeight: 2 }}>
					<li>
						<img src={pic} alt='avatar' />
					</li>
					<li style={{ fontWeight: 'bold' }}>
						{firstName} {lastName}
          </li>
					<li>Email: {email}</li>
          <li>Company: {company}</li>
					<li>Skill: {skill}</li>
					<li>Average: {average(grades)} %</li>
				</ul>
			))}
		</>
	);
};

export default App;
