import { KlineDataModel } from "../../../../services";
import { safeParseFloat } from "../../../../utils";

interface ProcessedChartData {
	time: string[];
	price: number[];
	minValue: number;
	maxValue: number;
}

export const processChartData = (
	data: KlineDataModel[]
): ProcessedChartData => {
	const time = data.map((entry) =>
		new Date(entry.openTime).toLocaleDateString()
	);
	const price = data.map((entry) => safeParseFloat(entry.closePrice));
	// Apply 5% buffer
	const minValue = Math.min(...price) * 0.95;
	const maxValue = Math.max(...price) * 1.05;
	return { time, price, minValue, maxValue };
};
