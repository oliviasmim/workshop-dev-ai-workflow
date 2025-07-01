import { create } from "zustand";
import { persist } from "zustand/middleware";
import { FakeDataModel, fetchFakeData } from "../../../services";

interface DataState {
	data: FakeDataModel[];
	isLoading: boolean;
	error: string | null;
	fetchData: () => Promise<void>;
	addEntry: (entry: FakeDataModel) => void;
	updateEntry: (entry: FakeDataModel, oldEntry: FakeDataModel) => void;
	resetData: () => void;
}

const handleFetchData = async (set: (state: Partial<DataState>) => void) => {
	set({ isLoading: true, error: null });
	try {
		const { data } = await fetchFakeData();
		set({ data, isLoading: false });
	} catch (error: unknown) {
		if (error instanceof Error) {
			set({ error: error.message, isLoading: false });
		} else {
			set({ error: "An unexpected error occurred", isLoading: false });
		}
	}
};

export const useDataStore = create<DataState>()(
	persist(
		(set, get) => ({
			data: [],
			isLoading: false,
			error: null,
			fetchData: async () => {
				const currentState = get();
				const currentData = currentState?.data || [];

				if (currentData.length > 0) {
					// Data already exists, no need to fetch again
					return;
				}

				await handleFetchData(set);
			},
			addEntry: (entry) => {
				set((state) => ({
					data: [...state.data, entry],
				}));
			},
			updateEntry: (entry, oldEntry) => {
				set((state) => ({
					data: state.data.map((item) =>
						item === oldEntry ? { ...item, ...entry } : item
					),
				}));
			},
			resetData: async () => {
				set({ data: [] });
				await handleFetchData(set);
			},
		}),
		{
			name: "data-storage",
			onRehydrateStorage: (state) => {
				return () => {
					state?.fetchData();
				};
			},
		}
	)
);
