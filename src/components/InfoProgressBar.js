import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';

export default function InfoProgressBar({percent = 0, label = ''}) {

	return (
		<div className="info-progress-bar-container">
			<h1 className="info-progress-bar-label">{label}</h1>
			<div className="info-progress-bar">
				<ProgressBar now={percent}/>
				<span className="info-progress-bar-percentage">{`${percent}%`}</span>
			</div>
		</div>
	);

}