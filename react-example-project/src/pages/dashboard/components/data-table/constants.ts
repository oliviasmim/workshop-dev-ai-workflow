import { ColDef, GridOptions } from "ag-grid-community";
import { FakeDataModel } from "../../../../services";
import { AnchorLinkRenderer } from "./anchor-link-renderer";
import { CheckCircleRenderer } from "./check-circle-renderer";

export const gridOptions: GridOptions = {
	defaultColDef: {
		resizable: true,
		sortable: true,
		filter: true,
	},
};

export const colDefs: ColDef<FakeDataModel>[] = [
	{ headerName: "Company", field: "company", sortable: true, filter: true },
	{ headerName: "Country", field: "country", sortable: true, filter: true },
	{ headerName: "State", field: "state", sortable: true, filter: true },
	{ headerName: "City", field: "city", sortable: true, filter: true },
	{ headerName: "Zipcode", field: "zipcode", sortable: true, filter: true },
	{ headerName: "Employees", field: "employees", type: "numberColumn" },
	{
		headerName: "Revenue",
		field: "revenue",
		type: "numberColumn",
		sortable: true,
	},
	{
		headerName: "Website",
		field: "website",
		cellRenderer: AnchorLinkRenderer,
	},
	{ headerName: "Sales Rep", field: "sales_rep" },
	{
		headerName: "Last Contacted",
		field: "last_contacted",
		type: "dateColumn",
	},
	{
		headerName: "Purchased",
		field: "purchased",
		cellRenderer: CheckCircleRenderer,
	},
	{
		headerName: "Notes",
		field: "notes",
		wrapText: true,
		tooltipField: "notes",
	},
];
