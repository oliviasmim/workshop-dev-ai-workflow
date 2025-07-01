import { AppPath } from "../../routes";

export const navItems = [
	{
		to: AppPath.Dashboard.Base,
		label: AppPath.Dashboard.Label,
		icon: "bi-columns-gap",
	},
	{
		to: AppPath.Analytics.Base,
		label: AppPath.Analytics.Label,
		icon: "bi-bar-chart",
	},
	{ to: AppPath.Settings.Base, label: AppPath.Settings.Label, icon: "bi-gear" },
	{ to: AppPath.Profile.Base, label: AppPath.Profile.Label, icon: "bi-person" },
];
