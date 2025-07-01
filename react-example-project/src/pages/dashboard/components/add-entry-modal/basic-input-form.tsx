/* eslint-disable @typescript-eslint/no-explicit-any */
import Form from "react-bootstrap/Form";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { FieldError } from "react-hook-form";

interface InputFormGroupProps {
	controlId: string;
	label: string;
	type: string;
	placeholder: string;
	register: any;
	error?: FieldError;
	tooltip?: string;
	isRequired?: boolean;
}

const InputFormGroup = ({
	controlId,
	label,
	type,
	placeholder,
	register,
	error,
	tooltip,
	isRequired = false,
}: InputFormGroupProps) => {
	return (
		<Form.Group controlId={controlId} className={error ? "has-error" : ""}>
			<Form.Label>
				{isRequired && <span className="text-danger">*</span>} {label}
			</Form.Label>
			{tooltip && (
				<OverlayTrigger
					placement="right"
					overlay={<Tooltip>{tooltip}</Tooltip>}
				>
					<span className="info-icon"> ℹ️ </span>
				</OverlayTrigger>
			)}
			<Form.Control
				type={type}
				as={type === "textarea" ? "textarea" : "input"}
				placeholder={placeholder}
				{...register(controlId)}
				isInvalid={!!error}
			/>
			<Form.Control.Feedback type="invalid">
				{error?.message}
			</Form.Control.Feedback>
		</Form.Group>
	);
};

export default InputFormGroup;
