import React, { useState, useEffect } from 'react';
import StudentCards from './components/StudentCards';
import SearchStudent from './components/SearchStudent';
import './App.css';


const App = () => {
	// setup state:
	const [lists, setLists] = useState([]);
	const [searchField, setSearchField] = useState('');
	const [showGrades, setShowGrades] = useState(false);

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

	// Create Searched Result
	const searchedRes = lists.filter((list) => {
		const fullName = `${list.firstName} ${list.lastName}`;
		return fullName.toLowerCase().includes(searchField.toLowerCase());
	});

	// Toggle details btn
	// const toggleBtn = (id) => {
	//   lists.map(list => {
	//     if (list.id === id) {
	//       setShowGrades(!showGrades)
	//     }
	//   })
	// }
	const toggleBtn = () => {
		setShowGrades(!showGrades);
	};

	return (
		<div className='container'>
			<SearchStudent setSearchField={setSearchField} />
			<StudentCards showGrades={showGrades} onToggle = {toggleBtn} searchedRes={searchedRes} />
		</div>
	);
};

export default App;
