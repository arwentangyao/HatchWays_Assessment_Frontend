import React from 'react'
import StudentCard from '../StudentCard/StudentCard';

const StudentCards = ({ searchedRes, addTag }) => {
	return (
		<>
			{searchedRes.map(({ id, pic, firstName, lastName, email, skill, grades, company, tags }) => (
				<StudentCard
					key={id}
					id={id}
					pic={pic}
					firstName={firstName}
					lastName={lastName}
					email={email}
					skill={skill}
					grades={grades}
					company={company}
					tags={tags}
					addTag={addTag}
				/>
			))}
		</>
	);
};

export default StudentCards
