import { useState } from "react";
import { NavLink } from "react-router-dom";
import Image from "react-bootstrap/Image";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { navItems } from "./constants";
import Avatar from "/user-avatar.webp";
import styles from "./sidebar.module.scss";

const Sidebar = () => {
	const [collapsed, setCollapsed] = useState(false);
	return (
		<aside className={`${styles.sidebar} ${collapsed ? styles.collapsed : ""}`}>
			<div className="d-flex flex-column align-items-center">
				<div className={styles.logo}>
					<img
						src="https://e1.pngegg.com/pngimages/935/769/png-clipart-minimal-icons-icon-512x512-2x-white-and-purple-check-logo.png"
						alt="logo"
					/>
					{!collapsed && <span>company</span>}
				</div>
				<button
					className={styles.collapseBtn}
					onClick={() => setCollapsed(!collapsed)}
				>
					<i
						className={`bi ${
							collapsed ? "bi-chevron-right" : "bi-chevron-left"
						}`}
					></i>
				</button>
			</div>

			<nav>
				<ul>
					{navItems.map((item) => (
						<OverlayTrigger
							key={item.to}
							placement="right"
							overlay={
								<Tooltip id={`tooltip-${item.label}`}>{item.label}</Tooltip>
							}
						>
							<NavLink
								to={item.to}
								className={({ isActive }) =>
									isActive
										? `${styles.active} ${styles.navItem}`
										: styles.navItem
								}
							>
								<li>
									<div className={styles.itemContent}>
										<i className={`bi ${item.icon}`}></i>
										{!collapsed && item.label}
									</div>
								</li>
							</NavLink>
						</OverlayTrigger>
					))}
				</ul>
			</nav>

			<div className={styles.footer}>
				<div className={styles.avatar}>
					<Image src={Avatar} rounded alt="Avatar image" />
				</div>
				{!collapsed && (
					<div className={styles.userInfo}>
						<span>John Doe</span>
						<p>User</p>
					</div>
				)}
				<i className="bi bi-box-arrow-right"></i>
			</div>
		</aside>
	);
};

export { Sidebar };
