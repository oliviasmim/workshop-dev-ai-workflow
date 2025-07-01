import React from "react";
import { useLocation } from "react-router-dom";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { Sidebar } from "../sidebar";
import { navItems } from "../sidebar/constants";
import styles from "./layout.module.scss";

interface PageLayoutProps {
	children: React.ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
	const location = useLocation();
	const currentPath = location.pathname;

	const currentNavItem = navItems.find((item) => item.to === currentPath);

	return (
		<div className={styles.dashboardLayout}>
			<Sidebar />
			<div className="flex-grow-1 p-3 bg-light overflow-auto d-flex flex-column">
				<div className="d-flex align-items-center justify-content-between p-2 fs-6">
					<Breadcrumb>
						<Breadcrumb.Item active style={{ color: "#636363" }}>
							Home
						</Breadcrumb.Item>
						<Breadcrumb.Item
							active
							style={{ color: "#000", fontWeight: "bold" }}
						>
							{currentNavItem ? currentNavItem.label : ""}
						</Breadcrumb.Item>
					</Breadcrumb>
				</div>
				{children}
			</div>
		</div>
	);
};

export { PageLayout };
