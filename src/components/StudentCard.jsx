import React, {useState} from 'react'
import GradesDetails from './GradesDetails';
import { FiPlus } from 'react-icons/fi';
import { FiMinus } from 'react-icons/fi';

const StudentCard = ({ id, pic, firstName, lastName, email, skill, grades, company }) => {
	const [showGrades, setShowGrades] = useState(false);

	// Calculate average fun
	const average = (arr) => {
		const newArr = arr.map((item) => parseInt(item));
		const sum = newArr.reduce((a, c) => a + c);
		return sum / newArr.length;
	};

	// Toggle details btn
	// const toggleBtn = (id) => {
	// 	lists.forEach((item) => {
	// 		if (item.id === id) {
	// 			console.log(id);
	// 			setShowGrades(!showGrades);
	// 		}
	// 	});
	// };

	const toggleBtn = () => {
		setShowGrades(!showGrades);
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
				<FiMinus onClick={toggleBtn} className='fiPlus' />
			) : (
				<FiPlus onClick={toggleBtn} className='fiPlus' />
			)}
		</div>
	);
};

export default StudentCard;
