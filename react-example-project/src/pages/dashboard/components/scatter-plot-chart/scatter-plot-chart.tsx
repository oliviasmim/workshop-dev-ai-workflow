import ReactECharts from "echarts-for-react";
import Spinner from "react-bootstrap/Spinner";
import { processScatterData } from "./utils";
import { useKlineData } from "../../../../services";

const colors = {
	blue: {
		default: "#5BC4FF",
		pink: "#FF5BEF",
	},
};

interface ScatterPlotChartProps {
	symbol: string;
	interval: string;
	limit: number;
}

const ScatterPlotChart = ({
	symbol,
	interval,
	limit,
}: ScatterPlotChartProps) => {
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
			<div style={{ textAlign: "center", color: "red" }}>
				Error fetching data: {error?.message || "Unknown error occurred."}
			</div>
		);
	}

	const {
		data: scatterData,
		maxVolume,
		maxPercentDiff,
	} = processScatterData(data);

	const options = {
		title: {
			left: "center",
		},
		tooltip: {
			trigger: "item",
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			formatter: (params: any) => {
				const [volume, percentDiff] = params.data;
				return `
          <strong>Volume:</strong> ${volume.toFixed(2)}<br />
          <strong>% Difference:</strong> ${percentDiff.toFixed(2)}%
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
			type: "value",
			axisLabel: {
				formatter: (value: number) => {
					if (value >= 1e9) return `${(value / 1e9).toFixed(1)}B`;
					if (value >= 1e6) return `${(value / 1e6).toFixed(1)}M`;
					if (value >= 1e3) return `${(value / 1e3).toFixed(1)}K`;
					return value.toFixed(0);
				},
			},
		},
		yAxis: {
			type: "value",
		},
		series: [
			{
				data: scatterData,
				type: "scatter",
				symbolSize: 7,
				markLine: {
					animation: false,
					lineStyle: {
						type: "solid",
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
					label: {
						align: "right",
					},
					data: [
						[
							{ coord: [0, 0], symbol: "none" },
							{ coord: [maxVolume, maxPercentDiff], symbol: "none" },
						],
					],
				},
			},
		],
	};

	return (
		<ReactECharts option={options} style={{ width: "100%", height: "100%" }} />
	);
};

export { ScatterPlotChart };
