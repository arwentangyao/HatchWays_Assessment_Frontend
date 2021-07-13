import React, { useState, useEffect } from 'react';
import StudentCards from './components/StudentCards/StudentCards';
import SearchStudent from './components/SearchStudent/SearchStudent';
import styles from './App.module.css'
import tags from 'language-tags';

const App = () => {
	// setup state:
	const [lists, setLists] = useState([]);
	const [searchField, setSearchField] = useState('');
	// const [tags, setTags] = useState([])

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
	const addNewTag = (id, tag) => {
		setLists(lists.map(list => list.id === id && {...list, tags: tags.push(tag)}))
	}

	return (
		<div className={styles.container}>
			<SearchStudent setSearchField={setSearchField} />
			<StudentCards addTag={addNewTag} searchedRes={searchedRes} />
		</div>
	);
};

export default App;
