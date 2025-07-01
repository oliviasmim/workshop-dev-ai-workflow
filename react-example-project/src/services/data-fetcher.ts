import axios, { AxiosRequestConfig } from "axios";

type FetchDataOptions = {
	url: string;
	params?: Record<string, string | number>;
	method?: AxiosRequestConfig["method"];
	headers?: Record<string, string>;
	data?: unknown;
};

export const fetchData = async <T>({
	url,
	params,
	method = "GET",
	headers,
	data,
}: FetchDataOptions): Promise<T> => {
	try {
		const response = await axios({
			url,
			params,
			method,
			headers,
			data,
		});

		return response.data;
	} catch (error: unknown) {
		if (axios.isAxiosError(error)) {
			const message = error.response
				? `API returned status code ${error.response.status}: ${error.response.statusText}`
				: `Network error: ${error.message}`;
			throw new Error(message);
		} else {
			throw new Error(
				(error as Error).message || "An unexpected error occurred"
			);
		}
	}
};
