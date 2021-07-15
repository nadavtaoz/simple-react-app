import React from 'react';

// info Array should be at length of 1 or 2
export default function InfoRow({infoArray = []}) {

	function infoUnit(amount, label) {
		return (
			<div className="info-unit">
				<h1 className="info-unit-amount">{amount}</h1>
				<h1 className="info-unit-label">{label}</h1>
			</div>
		)
	}

	return (
		<div className="info-row row">
			{
				infoArray.map(info => (
					<div className="col col-6" key={info.label}>
						{infoUnit(info.amount, info.label)}
					</div>
				))
			}
		</div>
	)
}