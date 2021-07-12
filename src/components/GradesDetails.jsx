import React from 'react'
import './GradesDetails.styles.css'

const GradesDetails = ({grades}) => {
	return (
		<>
			{
				grades.map((grade, idx) => (
					<p className='gradesDetails' key={idx}>Test{idx}: {grade}%</p>
				))
			}
		</>
	)
}

export default GradesDetails
