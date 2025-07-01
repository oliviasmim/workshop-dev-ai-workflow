import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
import { PageLayout } from "../components";
import { Dashboard } from "../pages";
import { AppPath } from "./app-path";

const AppRouter = () => {
	return (
		<Router>
			<PageLayout>
				<Routes>
					<Route
						path={AppPath.Base}
						element={<Navigate to={AppPath.Dashboard.Base} />}
					/>
					<Route path={AppPath.Dashboard.Base} element={<Dashboard />} />
				</Routes>
			</PageLayout>
		</Router>
	);
};

export { AppRouter };
