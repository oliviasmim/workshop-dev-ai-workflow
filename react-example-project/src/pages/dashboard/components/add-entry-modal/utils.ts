import { FakeDataModel } from "../../../../services";

// Note: In case of performance requirements,
// we could use a more efficient algorithm like a hash map

const fieldsToCompare = [
	"company",
	"country",
	"state",
	"city",
	"zipcode",
	"employees",
	"revenue",
	"website",
	"sales_rep",
];

export const findMatchingEntry = (
	newEntry: FakeDataModel,
	existingEntries: FakeDataModel[]
): FakeDataModel | null => {
	for (const entry of existingEntries) {
		let matchCount = 0;

		for (const field of fieldsToCompare) {
			if (
				newEntry[field as keyof FakeDataModel] ===
				entry[field as keyof FakeDataModel]
			) {
				matchCount++;
			}

			if (matchCount >= 5) {
				return entry;
			}
		}
	}

	return null;
};
