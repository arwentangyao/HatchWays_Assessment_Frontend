import React from 'react';
import styles from './GradesDetails.module.css'

const GradesDetails = ({ grades }) => {
	return (
		<div style={{ marginBottom: '20px' }}>
			{grades.map((grade, idx) => (
				<p className={styles.gradesDetails} key={idx}>
					Test{idx + 1} : <span style={{ marginLeft: '20px' }}>{grade}%</span>
				</p>
			))}
		</div>
	);
};

export default GradesDetails;
