import React, {useState} from 'react'
import GradesDetails from '../GradesDetails/GradesDetails';
import styles from './StudentCard.module.css'
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

	const toggleBtn = () => {
		setShowGrades(!showGrades);
	};

	return (
		<div className={styles.card}>
			<div>
				<div className={styles.mainCard}>
					<img className={styles.avatar} src={pic} alt='avatar' />
					<ul style={{ listStyleType: 'none' }}>
						<li className={styles.studentName}>
							{firstName} {lastName}
						</li>
						<div className={styles.studentDetails}>
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
				<FiMinus onClick={toggleBtn} className={styles.fiPlus} />
			) : (
				<FiPlus onClick={toggleBtn} className={styles.fiPlus} />
			)}
		</div>
	);
};

export default StudentCard;
