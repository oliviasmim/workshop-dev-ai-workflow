export interface User {
	id: number;
	name: string;
	email: string;
	avatar?: string;
	role: "admin" | "user" | "moderator";
	isActive: boolean;
	lastLogin: string;
	joinedDate: string;
	department: string;
	location: string;
}

export interface UserStats {
	totalUsers: number;
	activeUsers: number;
	newUsersThisMonth: number;
	usersByRole: Record<User["role"], number>;
}
