import { FakeDataModel } from "./fake-data-model";
import { fetchData } from "../data-fetcher";

const API_URL =
	"https://fakerapi.it/api/v2/custom?_quantity=10&company=company_name&country=country&state=state&city=city&zipcode=postcode&employees=counter&revenue=number&website=website&sales_rep=first_name&last_contacted=date&purchased=boolean&notes=text";

interface FakeDataResponse {
	code: number;
	data: FakeDataModel[];
	locale: string;
	seed: null;
	status: string;
	total: number;
}

export const fetchFakeData = async (): Promise<FakeDataResponse> => {
	return await fetchData<FakeDataResponse>({
		url: API_URL,
		method: "GET",
	});
};
