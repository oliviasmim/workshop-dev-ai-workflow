import Spinner from "react-bootstrap/Spinner";

export const TableLoadingOverlay = () => (
	<div
		className="ag-overlay-loading-center"
		style={{ backgroundColor: "rgba(255, 255, 255, 0.8)" }}
	>
		<Spinner animation="border" role="status" variant="primary">
			<span className="visually-hidden">Loading...</span>
		</Spinner>
	</div>
);
