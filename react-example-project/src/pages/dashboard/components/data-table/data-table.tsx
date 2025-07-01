import { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import Button from "react-bootstrap/Button";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { useDataStore } from "../../stores";
import { FakeDataModel } from "../../../../services";
import { colDefs, gridOptions } from "./constants";
import { AddEntryModal } from "../add-entry-modal";
import { TableLoadingOverlay } from "./table-loading-overlay";

export const DataTable = () => {
	const data = useDataStore((state) => state.data);
	const resetData = useDataStore((state) => state.resetData);
	const isLoading = useDataStore((state) => state.isLoading);
	const [showModal, setShowModal] = useState(false);

	return (
		<>
			<div className="d-flex align-items-center justify-content-between p-2 bg-white">
				<h4 className="text-secondary h4">Companies</h4>
				<div className="gap-2 d-flex">
					<Button variant="secondary" onClick={resetData}>
						<i className="bi bi-arrow-counterclockwise"></i> Reset
					</Button>
					<Button onClick={() => setShowModal(true)} className="button-primary">
						<i className="bi bi-plus-lg"></i> Add Entry
					</Button>
				</div>
			</div>
			<div className="ag-theme-quartz" style={{ height: 500, width: "100%" }}>
				<AgGridReact<FakeDataModel>
					gridOptions={gridOptions}
					rowData={data}
					columnDefs={colDefs}
					domLayout="autoHeight"
					pagination={true}
					paginationPageSize={15}
					suppressServerSideFullWidthLoadingRow={true}
					paginationPageSizeSelector={[15, 30, 50]}
					loadingOverlayComponent={TableLoadingOverlay}
					loading={isLoading}
				/>
			</div>
			<AddEntryModal show={showModal} onHide={() => setShowModal(false)} />
		</>
	);
};
