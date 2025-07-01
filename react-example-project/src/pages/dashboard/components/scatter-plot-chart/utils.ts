import { KlineDataModel } from "../../../../services";
import { safeParseFloat } from "../../../../utils";

interface ScatterData {
	data: number[][];
	maxVolume: number;
	maxPercentDiff: number;
}

const isValidEntry = (entry: KlineDataModel): boolean =>
	!!entry.quoteAssetVolume && !!entry.highPrice && !!entry.lowPrice;

export const processScatterData = (rawData: KlineDataModel[]): ScatterData => {
	const initialState: ScatterData = {
		data: [],
		maxVolume: 0,
		maxPercentDiff: 0,
	};

	return rawData.reduce<ScatterData>((acc, entry) => {
		if (!isValidEntry(entry)) {
			return acc;
		}

		const volume = safeParseFloat(entry.quoteAssetVolume);
		const high = safeParseFloat(entry.highPrice);
		const low = safeParseFloat(entry.lowPrice);
		const percentDiff = low > 0 ? ((high - low) / low) * 100 : 0;

		acc.data.push([volume, percentDiff]);

		acc.maxVolume = Math.max(acc.maxVolume, volume);
		acc.maxPercentDiff = Math.max(acc.maxPercentDiff, percentDiff);

		return acc;
	}, initialState);
};
