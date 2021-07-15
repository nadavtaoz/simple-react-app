import React from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import ReactApexCharts from 'react-apexcharts';


export default function CircularChart({severities = {low: 0, medium: 0, high: 0}}) {

	const chartData = {
		series: [severities.high ?? 0, severities.medium ?? 0, severities.low ?? 0],
		options: {
			labels: ['High', 'Medium', 'Low'],
			fill: {
				opacity: 1
			},
			colors: [
				'#d24346',
				'#f0ac38',
				'#4BAFD2'
			],
			width: 140,
			height: 140,
			stroke: {
				show: false
			},
			dataLabels: {
				enabled: false
			},
			chart: {
				type: 'donut'
			},
			legend: {
				show: false
			},
			plotOptions: {
				pie: {
					offsetY: 5,
					offsetX: -9,
					expandOnClick: false,
					donut: {
						labels: {
							show: false
						},
						size: '118%'
					},
				}
			}
		},
	};

	return (
		<div className="circular-chart">
			<div className="circular-chart-container">
				<ReactApexCharts options={chartData.options} series={chartData.series} type="donut" width="155" height="155"/>
			</div>
			<div className="circular-chart-data">
				<div className="circular-chart-data-container">
					<div className="circular-chart-data-block">
						<h1 className="circular-data-label">High</h1>
						<h1 className="circular-data-value">{severities.high}</h1>
					</div>

					<div className="circular-chart-data-block">
						<h1 className="circular-data-label">Medium</h1>
						<h1 className="circular-data-value">{severities.medium}</h1>
					</div>

					<div className="circular-chart-data-block">
						<h1 className="circular-data-label">Low</h1>
						<h1 className="circular-data-value">{severities.low}</h1>
					</div>
				</div>
			</div>
		</div>
	)

}