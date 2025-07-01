import { User, UserStats } from "./user-model";

// Mock user data
const MOCK_USERS: User[] = [
	{
		id: 1,
		name: "Alice Johnson",
		email: "alice.johnson@company.com",
		avatar: "/public/user-avatar.webp",
		role: "admin",
		isActive: true,
		lastLogin: "2025-06-30T14:30:00Z",
		joinedDate: "2023-01-15T09:00:00Z",
		department: "Engineering",
		location: "San Francisco, CA"
	},
	{
		id: 2,
		name: "Bob Smith",
		email: "bob.smith@company.com",
		role: "user",
		isActive: true,
		lastLogin: "2025-06-29T16:45:00Z",
		joinedDate: "2023-03-20T10:30:00Z",
		department: "Marketing",
		location: "New York, NY"
	},
	{
		id: 3,
		name: "Carol Williams",
		email: "carol.williams@company.com",
		role: "moderator",
		isActive: false,
		lastLogin: "2025-06-25T11:20:00Z",
		joinedDate: "2022-11-08T14:15:00Z",
		department: "Customer Support",
		location: "Austin, TX"
	},
	{
		id: 4,
		name: "David Brown",
		email: "david.brown@company.com",
		role: "user",
		isActive: true,
		lastLogin: "2025-07-01T08:00:00Z",
		joinedDate: "2024-02-10T13:45:00Z",
		department: "Sales",
		location: "Chicago, IL"
	},
	{
		id: 5,
		name: "Emma Davis",
		email: "emma.davis@company.com",
		role: "admin",
		isActive: true,
		lastLogin: "2025-06-30T17:30:00Z",
		joinedDate: "2023-07-12T11:00:00Z",
		department: "Engineering",
		location: "Seattle, WA"
	}
];

/**
 * Simulates network delay for more realistic API behavior
 */
const simulateDelay = (ms: number = 500): Promise<void> => {
	return new Promise(resolve => setTimeout(resolve, ms));
};

/**
 * Fetch all users
 */
export const fetchUsers = async (): Promise<User[]> => {
	await simulateDelay();
	return [...MOCK_USERS];
};

/**
 * Fetch a single user by ID
 */
export const fetchUserById = async (id: number): Promise<User | null> => {
	await simulateDelay();
	const user = MOCK_USERS.find(user => user.id === id);
	return user || null;
};

/**
 * Fetch users by role
 */
export const fetchUsersByRole = async (role: User["role"]): Promise<User[]> => {
	await simulateDelay();
	return MOCK_USERS.filter(user => user.role === role);
};

/**
 * Fetch active users only
 */
export const fetchActiveUsers = async (): Promise<User[]> => {
	await simulateDelay();
	return MOCK_USERS.filter(user => user.isActive);
};

/**
 * Create a new user (mock implementation)
 */
export const createUser = async (userData: Omit<User, "id">): Promise<User> => {
	await simulateDelay();
	const newUser: User = {
		...userData,
		id: Math.max(...MOCK_USERS.map(u => u.id)) + 1
	};
	MOCK_USERS.push(newUser);
	return newUser;
};

/**
 * Update an existing user (mock implementation)
 */
export const updateUser = async (id: number, updates: Partial<User>): Promise<User | null> => {
	await simulateDelay();
	const userIndex = MOCK_USERS.findIndex(user => user.id === id);
	if (userIndex === -1) {
		return null;
	}
	
	MOCK_USERS[userIndex] = { ...MOCK_USERS[userIndex], ...updates };
	return MOCK_USERS[userIndex];
};

/**
 * Delete a user (mock implementation)
 */
export const deleteUser = async (id: number): Promise<boolean> => {
	await simulateDelay();
	const userIndex = MOCK_USERS.findIndex(user => user.id === id);
	if (userIndex === -1) {
		return false;
	}
	
	MOCK_USERS.splice(userIndex, 1);
	return true;
};

/**
 * Fetch user statistics
 */
export const fetchUserStats = async (): Promise<UserStats> => {
	await simulateDelay();
	
	const totalUsers = MOCK_USERS.length;
	const activeUsers = MOCK_USERS.filter(user => user.isActive).length;
	
	// Mock "new users this month" calculation
	const oneMonthAgo = new Date();
	oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);
	const newUsersThisMonth = MOCK_USERS.filter(user => 
		new Date(user.joinedDate) > oneMonthAgo
	).length;
	
	const usersByRole = MOCK_USERS.reduce((acc, user) => {
		acc[user.role] = (acc[user.role] || 0) + 1;
		return acc;
	}, {} as Record<User["role"], number>);
	
	return {
		totalUsers,
		activeUsers,
		newUsersThisMonth,
		usersByRole
	};
};
