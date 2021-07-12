import { list } from 'postcss';
import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
	// setup state:
  const [lists, setLists] = useState([]);
  const [searchField, setSearchField] = useState('')

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

  // Search Function:
  const searchStudents = e => {
    setSearchField(e.target.value)
  }

  // Create Searched Result
  const searchedRes = lists.filter(list => {
    const fullName = `${list.firstName} ${list.lastName}`;
    return fullName.toLowerCase().includes(searchField.toLowerCase())
  })

	return (
		<div className='container'>
			<div className='searchBar'>
				<input onChange={(e) => searchStudents(e)} type='search' placeholder='Search by name' />
			</div>
			{searchedRes.map(({ id, pic, firstName, lastName, email, skill, grades, company }) => (
				<div key={id} className='card'>
					<img className='avatar' src={pic} alt='avatar' />

					<ul style={{ listStyleType: 'none' }}>
						<li className='studentName'>
							{firstName} {lastName}
						</li>
						<div className='studentDetails'>
							<li>Email: {email}</li>
							<li>Company: {company}</li>
							<li>Skill: {skill}</li>
							<li>Average: {average(grades)} %</li>
						</div>
					</ul>
				</div>
			))}
		</div>
	);
};

export default App;
