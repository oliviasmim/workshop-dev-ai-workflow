import * as yup from "yup";
import moment from "moment";
import DatePicker from "react-datepicker";
import { yupResolver } from "@hookform/resolvers/yup";
import { Modal, Button, Form } from "react-bootstrap";
import { Controller, useForm } from "react-hook-form";
import { useDataStore } from "../../stores/data-store";
import { FakeDataModel } from "../../../../services";
import { findMatchingEntry } from "./utils";
import InputFormGroup from "./basic-input-form";
import "react-datepicker/dist/react-datepicker.css";
import "./add-entry-form.scss";

interface AddEntryFormProps {
	show: boolean;
	onHide: () => void;
}

const AddEntryModal = ({ show, onHide }: AddEntryFormProps) => {
	const addEntry = useDataStore((state) => state.addEntry);
	const updateEntry = useDataStore((state) => state.updateEntry);
	const data = useDataStore((state) => state.data);

	const AddEntrySchema = yup.object().shape({
		company: yup.string().required("Company is required"),
		country: yup.string().required("Country is required"),
		state: yup.string().required("State is required"),
		city: yup.string().required("City is required"),
		zipcode: yup
			.string()
			.matches(/^\d{5}(-\d{4})?$/, "Invalid ZIP code format")
			.required("ZIP code is required"),
		employees: yup
			.number()
			.positive("Employees must be a positive number")
			.required("Employees are required"),
		revenue: yup
			.number()
			.positive("Revenue must be a positive number")
			.required("Revenue is required"),
		website: yup
			.string()
			.url("Invalid URL format")
			.required("Website is required"),
		sales_rep: yup.string().required("Sales Representative is required"),
		last_contacted: yup
			.string()
			.nullable()
			.required("Last Contacted date is required"),
		purchased: yup.boolean().required(),
		notes: yup.string(),
	});

	const { register, handleSubmit, reset, formState, control } =
		useForm<FakeDataModel>({
			resolver: yupResolver(AddEntrySchema),
			defaultValues: {
				company: "",
				country: "",
				state: "",
				city: "",
				zipcode: "",
				employees: 0,
				revenue: 0,
				website: "",
				sales_rep: "",
				last_contacted: "",
				purchased: false,
				notes: "",
			},
		});

	const onSubmit = (formData: FakeDataModel) => {
		const formattedData = {
			...formData,
			last_contacted: formData.last_contacted
				? moment(formData.last_contacted).format("YYYY-MM-DD")
				: "",
		};

		const existingEntry = findMatchingEntry(formattedData, data);
		if (existingEntry) {
			updateEntry(formattedData, existingEntry);
		} else {
			addEntry(formattedData);
		}

		reset();
		onHide();
	};

	return (
		<Modal show={show} onHide={onHide} size="lg" centered>
			<Modal.Header closeButton>
				<Modal.Title>Add New Entry</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form onSubmit={handleSubmit(onSubmit)}>
					<div className="form-grid">
						<InputFormGroup
							controlId="company"
							label="Company"
							type="text"
							placeholder="Enter company name"
							register={register}
							error={formState.errors.company}
							isRequired
						/>

						<InputFormGroup
							controlId="country"
							label="Country"
							type="text"
							placeholder="Enter country name"
							register={register}
							error={formState.errors.country}
							isRequired
						/>

						<InputFormGroup
							controlId="state"
							label="State"
							type="text"
							placeholder="Enter state name"
							register={register}
							error={formState.errors.state}
							isRequired
						/>

						<InputFormGroup
							controlId="city"
							label="City"
							type="text"
							placeholder="Enter city name"
							register={register}
							error={formState.errors.city}
							isRequired
						/>

						<InputFormGroup
							controlId="zipcode"
							label="Zipcode"
							type="text"
							placeholder="Enter zipcode"
							register={register}
							error={formState.errors.zipcode}
							isRequired
						/>

						<InputFormGroup
							controlId="website"
							label="Website"
							type="text"
							placeholder="Enter website URL"
							register={register}
							error={formState.errors.website}
							isRequired
						/>

						<InputFormGroup
							controlId="sales_rep"
							label="Sales Rep"
							type="text"
							placeholder="Enter sales representative name"
							register={register}
							error={formState.errors.sales_rep}
							isRequired
						/>

						<InputFormGroup
							controlId="employees"
							label="Employees"
							type="number"
							placeholder="Enter number of employees"
							register={register}
							error={formState.errors.employees}
							isRequired
						/>

						<Form.Group controlId="last_contacted">
							<Form.Label>
								<span className="text-danger">*</span> Last Contacted
							</Form.Label>
							<div>
								<Controller
									control={control}
									name="last_contacted"
									render={({ field }) => (
										<div className="datepicker-wrapper">
											<DatePicker
												placeholderText="Select a date"
												onChange={(date) => {
													field.onChange(date);
												}}
												selected={
													field.value ? new Date(field.value) : new Date()
												}
												className={`form-control ${
													formState.errors.last_contacted ? "is-invalid" : ""
												}`}
												calendarClassName="custom-calendar"
												popperClassName="custom-popper"
												dateFormat="MMMM d, yyyy"
											/>
											<i className="calendar-icon"></i>
										</div>
									)}
								/>
							</div>
							<Form.Control.Feedback type="invalid">
								{formState.errors.last_contacted?.message}
							</Form.Control.Feedback>
						</Form.Group>

						<InputFormGroup
							controlId="revenue"
							label="Revenue"
							type="number"
							placeholder="Enter revenue"
							register={register}
							error={formState.errors.revenue}
							isRequired
						/>

						<Form.Group controlId="purchased">
							<Form.Check
								type="switch"
								label={
									<>
										<span className="text-danger">*</span> Purchased
									</>
								}
								{...register("purchased")}
							/>
						</Form.Group>

						<InputFormGroup
							tooltip="Enter any additional notes."
							controlId="notes"
							label="Notes"
							type="textarea"
							placeholder="Enter notes"
							register={register}
							error={formState.errors.notes}
						/>
					</div>

					<div className="button-container">
						<Button
							variant="primary"
							type="submit"
							className="mt-3 submit-button"
						>
							Submit
						</Button>
						<Button
							variant="secondary"
							className="mt-3 cancel-button"
							onClick={() => reset()}
						>
							Reset
						</Button>
					</div>
				</Form>
			</Modal.Body>
		</Modal>
	);
};

export { AddEntryModal };
