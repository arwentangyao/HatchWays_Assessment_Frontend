import React from 'react'
import GradesDetails from './GradesDetails';
import { FiPlus } from 'react-icons/fi';
import { FiMinus } from 'react-icons/fi';

const StudentCard = ({ pic, firstName, lastName, email, skill, grades, company, showGrades, onToggle }) => {
	// Calculate average fun
	const average = (arr) => {
		const newArr = arr.map((item) => parseInt(item));
		const sum = newArr.reduce((a, c) => a + c);
		return sum / newArr.length;
	};

	return (
		<div className='card'>
			<div>
				<div className='mainCard'>
					<img className='avatar' src={pic} alt='avatar' />
					<ul style={{ listStyleType: 'none' }}>
						<li className='studentName'>
							{firstName} {lastName}
						</li>
						<div className='studentDetails'>
							<li>Email: {email}</li>
							<li>Company: {company}</li>
							<li>Skill: {skill}</li>
							<li>Average: {average(grades)} %</li>
						</div>
					</ul>
				</div>
				{showGrades && <GradesDetails grades={grades} />}
			</div>
			{showGrades ? (
				<FiMinus onClick={onToggle} className='fiPlus' />
			) : (
				<FiPlus onClick={onToggle} className='fiPlus' />
			)}
		</div>
	);
};

export default StudentCard;
