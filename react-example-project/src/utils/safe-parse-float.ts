export const safeParseFloat = (value: string): number => {
	const parsed = parseFloat(value);
	return isNaN(parsed) ? 0 : parsed;
};
