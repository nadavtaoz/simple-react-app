import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';

export default function RiskMeter({percent = 0}) {

	return (
		<div className="risk-meter">
			<h1 className="risk-meter-headline">System Risk Meter</h1>
			<div className="risk-meter-progress-bar">
				<ProgressBar now={percent}/>
				<span className="risk-meter-percentage">{`${percent}%`}</span>
			</div>
		</div>
	)

}