import React from 'react'
import styles from './SearchStudent.module.css'

const SearchStudent = ({setSearchField, text}) => {
	// Search Function:
	const searchStudents = (e) => {
		setSearchField(e.target.value);
	};

	return (
		<div className={styles.searchBar}>
			<input onChange={(e) => searchStudents(e)} type='search' placeholder={text} />
		</div>
	);
}

export default SearchStudent
