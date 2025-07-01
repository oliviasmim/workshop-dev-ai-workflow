import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { AppRouter } from "./routes/app-router";

function App() {
	return (
		<QueryClientProvider client={new QueryClient()}>
			<AppRouter />
		</QueryClientProvider>
	);
}

export default App;
