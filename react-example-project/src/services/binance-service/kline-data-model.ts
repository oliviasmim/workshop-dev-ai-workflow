export interface KlineDataModel {
	openTime: number;
	openPrice: string;
	highPrice: string;
	lowPrice: string;
	closePrice: string;
	volume: string;
	closeTime: number;
	quoteAssetVolume: string;
	numberOfTrades: number;
	takerBuyBaseAssetVolume: string;
	takerBuyQuoteAssetVolume: string;
	ignore: string;
}

export type KlineDataResponse = [
	number, // openTime
	string, // openPrice
	string, // highPrice
	string, // lowPrice
	string, // closePrice
	string, // volume
	number, // closeTime
	string, // quoteAssetVolume
	number, // numberOfTrades
	string, // takerBuyBaseAssetVolume
	string, // takerBuyQuoteAssetVolume
	string // ignore
][];
