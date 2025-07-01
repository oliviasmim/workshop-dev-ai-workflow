import { KlineDataModel, KlineDataResponse } from "./kline-data-model";
import { fetchData } from "../data-fetcher";

const BASE_URL = "https://api.binance.com/api/v3/klines";

export const fetchKlineData = async (
	symbol: string,
	interval: string,
	limit: number
): Promise<KlineDataModel[]> => {
	const response = await fetchData({
		url: BASE_URL,
		params: {
			symbol,
			interval,
			limit,
		},
		method: "GET",
	});

	const data = response as KlineDataResponse;

	return data.map((entry) => ({
		openTime: entry[0],
		openPrice: entry[1],
		highPrice: entry[2],
		lowPrice: entry[3],
		closePrice: entry[4],
		volume: entry[5],
		closeTime: entry[6],
		quoteAssetVolume: entry[7],
		numberOfTrades: entry[8],
		takerBuyBaseAssetVolume: entry[9],
		takerBuyQuoteAssetVolume: entry[10],
		ignore: entry[11],
	}));
};
