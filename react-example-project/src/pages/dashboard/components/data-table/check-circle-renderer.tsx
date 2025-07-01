export const CheckCircleRenderer = (params: { value: string }) => (
	<span className="missionSpan">
		{
			<img
				alt={`${params.value}`}
				src={`https://www.ag-grid.com/example-assets/icons/${
					params.value ? "tick-in-circle" : "cross-in-circle"
				}.png`}
				className="missionIcon"
			/>
		}
	</span>
);
