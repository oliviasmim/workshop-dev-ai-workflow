import { useQuery } from "@tanstack/react-query";
import { KlineDataModel } from "./kline-data-model";
import { fetchKlineData } from "./fetch-kline-data";

export const useKlineData = (symbol: string, interval: string, limit: number) =>
	useQuery<KlineDataModel[], Error>({
		queryKey: ["currencyData", symbol, interval, limit],
		queryFn: () => fetchKlineData(symbol, interval, limit),
	});
