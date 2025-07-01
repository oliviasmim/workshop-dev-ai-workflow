export const AnchorLinkRenderer = (params: { value: string }) => (
	<a href={params.value} target="_blank" rel="noopener noreferrer">
		{params.value}
	</a>
);
