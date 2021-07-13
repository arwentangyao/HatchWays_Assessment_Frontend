import React, { useState, useEffect } from 'react';
import StudentCards from './components/StudentCards/StudentCards';
import SearchStudent from './components/SearchStudent/SearchStudent';
import styles from './App.module.css'

const App = () => {
	// setup state:
	const [lists, setLists] = useState([]);
	const [searchField, setSearchField] = useState('');
	const [tags, setTags] = useState([]);

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

	// Adding new Tag
	const AddTag = (newTag) => {
		setTags([...tags, newTag]);
	}

	return (
		<div className={styles.container}>
			<SearchStudent setSearchField={setSearchField} text='Search by name' />
			<SearchStudent setSearchField={setSearchField} text='Search by tag' />
			<StudentCards tags={tags} onAddTag={AddTag} searchedRes={searchedRes} />
		</div>
	);
};

export default App;
