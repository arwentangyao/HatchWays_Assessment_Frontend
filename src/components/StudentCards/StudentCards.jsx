import React from 'react'
import StudentCard from '../StudentCard/StudentCard';

const StudentCards = ({ searchedRes }) => {
	return (
		<>
			{searchedRes.map(({ id, pic, firstName, lastName, email, skill, grades, company, tags, onAddTag }) => (
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
					onAddTag={onAddTag}
				/>
			))}
		</>
	);
};

export default StudentCards
