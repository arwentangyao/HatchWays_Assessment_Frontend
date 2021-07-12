import React from 'react'
import StudentCard from './StudentCard';

const StudentCards = ({ searchedRes, showGrades, onToggle }) => {
	return (
		<div>
			{searchedRes.map(({ id, pic, firstName, lastName, email, skill, grades, company }) => (
				<StudentCard
					key={id}
					pic={pic}
					firstName={firstName}
					lastName={lastName}
					email={email}
					skill={skill}
					grades={grades}
					company={company}
					showGrades={showGrades}
					onToggle={onToggle}
				/>
			))}
		</div>
	);
};

export default StudentCards
