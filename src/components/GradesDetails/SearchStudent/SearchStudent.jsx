import React from 'react'

const SearchStudent = ({setSearchField}) => {
	// Search Function:
	const searchStudents = (e) => {
		setSearchField(e.target.value);
	};

	return (
		<div className='searchBar'>
			<input onChange={(e) => searchStudents(e)} type='search' placeholder='Search by name' />
		</div>
	);
}

export default SearchStudent
