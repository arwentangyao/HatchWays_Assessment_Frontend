import React from 'react'
import StudentCard from '../StudentCard/StudentCard';

const StudentCards = ({ searchedRes }) => {
	return (
		<>
			{searchedRes.map(({ id, pic, firstName, lastName, email, skill, grades, company }) => (
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
				/>
			))}
		</>
	);
};

export default StudentCards
