import React from 'react';
import InfoRow from './InfoRow';
import CircularChart from "./CircularChart";
import InfoProgressBar from "./InfoProgressBar";

export default function DataContainer({headline = '', data = {}, type = 'info-row'}) {

	/**
	 * Return the JSX structure of info rows
	 * @returns {*}
	 */
	function infoRows() {

		let organizedData = [];
		let tmpArr = [];
		const dataLength = Object.keys(data).length;
		// organize the data from {field1: '...', field2: '...', ...} to [[{field1: '...', field2: '...'}, {...}, ...}
		Object.entries(data).forEach(([key, value], index) => {
			if(tmpArr.length > 1) {
				organizedData.push(JSON.parse(JSON.stringify(tmpArr)));
				tmpArr = [];
			}
			tmpArr.push({label: key, amount: value});
			if (index === dataLength - 1){
				organizedData.push(JSON.parse(JSON.stringify(tmpArr)));
			}
		})

		return (
			<>{organizedData.map(oData => <InfoRow infoArray={oData} key={oData[0].label}/>)}</>
		)
	}

	/**
	 * Return the JSX structure of info progress bars
	 * @returns {*}
	 */
	function infoProgressBars() {
		const elements = [];
		Object.entries(data).forEach(([key, value]) => elements.push(<InfoProgressBar label={key} percent={value} key={key}/>));
		return (
			<div className="info-progress-bars-container">
				{elements}
			</div>
		)
	}

	return (
		<div className={`data-container ${type === 'circular-chart' ? 'data-container-circular-chart' : ''}`}>
			<h1 className="data-container-headline">{headline}</h1>
			{type === 'info-row' && infoRows()}
			{type === 'circular-chart' && <CircularChart severities={data}/>}
			{type === 'progress-bar' && infoProgressBars()}
		</div>
	)

}