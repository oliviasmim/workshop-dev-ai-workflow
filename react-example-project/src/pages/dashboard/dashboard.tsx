import styles from "./dashboard.module.scss";
import { DataTable, TimeSeriesChart, ScatterPlotChart } from "./components";

const bitcoinSymbol = "BTCUSDT";
const interval = "1d";
const firstGraphLimit = 30;
const secondGraphLimit = 180;

const Dashboard = () => {
	return (
		<main className="d-flex flex-column gap-3 flex-grow-1 overflow-auto">
			<div className={styles.graphs}>
				<section className={styles.graphContainer}>
					<div className="d-flex align-items-center justify-content-between p-2 fs-6">
						Bitcoin Price x Time
						<span className="text-muted mt-1 fw-normal small">
							Last 30 Days (Daily Close)
						</span>
					</div>
					<div className={styles.graphContent}>
						<TimeSeriesChart
							symbol={bitcoinSymbol}
							interval={interval}
							limit={firstGraphLimit}
						/>
					</div>
				</section>
				<section className={styles.graphContainer}>
					<div className="d-flex align-items-center justify-content-between p-2 fs-6">
						Correlation Analysis
						<span className="text-muted mt-1 fw-normal small">
							Visualizing Scatter Data
						</span>
					</div>
					<div className={styles.graphContent}>
						<ScatterPlotChart
							symbol={bitcoinSymbol}
							interval={interval}
							limit={secondGraphLimit}
						/>
					</div>
				</section>
			</div>
			<section className="d-flex justify-content-center flex-grow-1">
				<div className="d-flex flex-column w-100 h-100 rounded shadow">
					<DataTable />
				</div>
			</section>
		</main>
	);
};

export { Dashboard };
