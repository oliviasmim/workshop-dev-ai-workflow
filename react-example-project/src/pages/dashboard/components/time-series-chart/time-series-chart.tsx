import ReactECharts from "echarts-for-react";
import Spinner from "react-bootstrap/Spinner";
import { useKlineData } from "../../../../services";
import { processChartData } from "./utils";

const colors = {
	blue: {
		default: "#5BC4FF",
		pink: "#FF5BEF",
	},
};

interface TimeSeriesChartProps {
	symbol: string;
	interval: string;
	limit: number;
}

const TimeSeriesChart = ({ symbol, interval, limit }: TimeSeriesChartProps) => {
	const { data, isLoading, isError, error } = useKlineData(
		symbol,
		interval,
		limit
	);

	if (isLoading || !data) {
		return (
			<div className="w-100 h-100 d-flex align-items-center justify-content-center">
				<Spinner animation="border" role="status" variant="primary">
					<span className="visually-hidden">Loading...</span>
				</Spinner>
			</div>
		);
	}

	if (isError || !data) {
		return (
			<div className="text-danger">
				Error fetching data: {error?.message || "Unknown error occurred."}
				Try refreshing the page.
			</div>
		);
	}

	const { time, price, minValue, maxValue } = processChartData(data);

	const options = {
		title: {
			left: "center",
		},
		tooltip: {
			trigger: "axis",
			formatter: (params: { name: string; value: number }[]) => {
				const { name, value } = params[0];
				const formattedValue = new Intl.NumberFormat("en-US", {
					style: "currency",
					currency: "USD",
					minimumFractionDigits: 2,
					maximumFractionDigits: 2,
				}).format(value);

				return `
          <strong>Date:</strong> ${name}<br />
          <strong>Close Price:</strong> ${formattedValue}
        `;
			},
		},

		grid: {
			left: "5%",
			right: "5%",
			top: "10%",
			bottom: "10%",
			containLabel: true,
		},
		xAxis: {
			type: "category",
			data: time,
		},
		yAxis: {
			type: "value",
			min: minValue,
			max: maxValue,
			axisLabel: {
				formatter: (value: number) => {
					if (value === minValue) {
						return "";
					}
					return value.toFixed(0);
				},
			},
		},
		series: [
			{
				data: price,
				type: "line",
				smooth: true,
				symbolSize: 6,
				lineStyle: {
					color: {
						type: "linear",
						x: 0,
						y: 0,
						x2: 1,
						y2: 1,
						colorStops: [
							{ offset: 0, color: colors.blue.default },
							{ offset: 1, color: colors.blue.pink },
						],
						globalCoord: false,
					},
					width: 3,
				},
				areaStyle: {
					color: {
						type: "linear",
						x: 0,
						y: 0,
						x2: 1,
						y2: 1,
						colorStops: [
							{ offset: 0, color: colors.blue.default },
							{ offset: 1, color: colors.blue.pink },
						],
						globalCoord: false,
					},
				},
			},
		],
	};

	return (
		<ReactECharts option={options} style={{ width: "100%", height: "100%" }} />
	);
};

export { TimeSeriesChart };
