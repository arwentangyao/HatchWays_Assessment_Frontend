import React, { useState, useEffect } from 'react';
import StudentCards from './components/StudentCards/StudentCards';
import SearchStudent from './components/SearchStudent/SearchStudent';
import styles from './App.module.css'

const App = () => {
	// setup state:
	let [lists, setLists] = useState([]);
	const [searchField, setSearchField] = useState('');
	const [tagField, setTagField] = useState('');


	const endpoint = 'https://api.hatchways.io/assessment/students';

	// Update state when rendering
	useEffect(() => {
		const getLists = async () => {
			let { students } = await fetchLists();
			students.forEach((student) => {
				student.tags = [];
			});
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

	// Adding new Tag
	const addTag = (id, newTag) => {
		let list = lists[parseInt(id) - 1];
		list.tags.push(newTag);
	}

	// Create Searched Result
	const searchedRes = lists.filter((list) => {
		let tagFound = false;
		if (tagField !== '') {
			let tags = list.tags;
			tags.forEach((tag) => {
				if (tag.toLowerCase().includes(tagField.toLowerCase())) {
					tagFound = true;
				}
			});
		} else {
			tagFound = true;
		}
		if (!tagFound) return false;
		const fullName = `${list.firstName} ${list.lastName}`;
		return fullName.toLowerCase().includes(searchField.toLowerCase());
	});

	return (
		<div className={styles.container}>
			<SearchStudent setSearchField={setSearchField} text='Search by name' />
			<SearchStudent setSearchField={setTagField} text='Search by tag' />
			<StudentCards searchedRes={searchedRes} addTag ={addTag} />
		</div>
	);
};

export default App;
