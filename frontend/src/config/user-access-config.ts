/**
 * Centralized User Access Configuration
 * 
 * This file defines access permissions for each user in the system.
 * To add a new user, add their email and access configuration to USER_ACCESS_MAP.
 * 
 * Master ID (ktej255@gmail.com) has full access to everything.
 */

export interface UserAccess {
    dashboard: boolean;
    batch1: boolean;
    batch2: boolean;
    meditation: boolean;
    graphotherapy: boolean;
    aiCoach: boolean;
    revisionPortal: boolean;
    rasRevision: boolean;
    // Batch 1.1 Polity - daily schedule, weekly schedule, pomodoro sessions
    batch1Polity: boolean;
    // Revision Portal Polity - separate MCQs/flashcards (Master only)
    revisionPolity: boolean;
    studyPlanner: boolean;
    // Phase 8-10 Enhancements
    productivity: boolean;
    community: boolean;
    leaderboard: boolean;
}


export interface UserAccessConfig {
    email: string;
    name: string;
    isMaster: boolean;
    access: UserAccess;
}

// Default access for unknown users
export const DEFAULT_USER_ACCESS: UserAccess = {
    dashboard: true,
    batch1: false,
    batch2: false,
    meditation: true,
    graphotherapy: true,
    aiCoach: false,
    revisionPortal: false,
    rasRevision: false,
    batch1Polity: false,
    revisionPolity: false,
    studyPlanner: false,
    productivity: true, // Enabled for all by default to encourage engagement
    community: true,
    leaderboard: true,
};


// Master access (full access to everything)
const MASTER_ACCESS: UserAccess = {
    dashboard: true,
    batch1: true,
    batch2: true,
    meditation: true,
    graphotherapy: true,
    aiCoach: true,
    revisionPortal: true,
    rasRevision: true,
    batch1Polity: true,
    revisionPolity: true,
    studyPlanner: true,
    productivity: true,
    community: true,
    leaderboard: true,
};


// Batch 1 Student access (Kajal, Diksha) - with Batch 1.1 Polity access
const BATCH1_STUDENT_ACCESS: UserAccess = {
    dashboard: true,
    batch1: true,
    batch2: false,
    meditation: true,
    graphotherapy: true,
    aiCoach: false,
    revisionPortal: false,
    rasRevision: false,
    batch1Polity: true, // Daily schedule, weekly schedule, pomodoro
    revisionPolity: false, // No access to revision portal polity
    studyPlanner: true,
    productivity: true,
    community: true,
    leaderboard: true,
};


// Batch 2 Student access (Ramesh, Mohit - Upanishads only)
const BATCH2_STUDENT_ACCESS: UserAccess = {
    dashboard: true,
    batch1: false,
    batch2: true,
    meditation: true,
    graphotherapy: true,
    aiCoach: false,
    revisionPortal: false,
    rasRevision: false,
    batch1Polity: false,
    revisionPolity: false,
    studyPlanner: false,
    productivity: true,
    community: true,
    leaderboard: true,
};

// RAS Student access (Chitra)
const RAS_STUDENT_ACCESS: UserAccess = {
    dashboard: true,
    batch1: false,
    batch2: false,
    meditation: true,
    graphotherapy: true,
    aiCoach: false,
    revisionPortal: false,
    rasRevision: true,
    batch1Polity: false,
    revisionPolity: false,
    studyPlanner: false,
    productivity: true,
    community: true,
    leaderboard: true,
};

/**
 * User Access Map
 * 
 * Add new users here with their email (lowercase) and access configuration.
 * Email keys should be lowercase for consistent lookup.
 */
export const USER_ACCESS_MAP: Record<string, UserAccessConfig> = {
    // Master Admin - Full Access
    "ktej255@gmail.com": {
        email: "ktej255@gmail.com",
        name: "Master Admin",
        isMaster: true,
        access: MASTER_ACCESS,
    },

    // Test Account - Same as Batch 1 students
    "test001@gmail.com": {
        email: "test001@gmail.com",
        name: "Test Account",
        isMaster: false,
        access: BATCH1_STUDENT_ACCESS,
    },

    // Batch 1 Students
    "kajaldhannatar@gmail.com": {
        email: "kajaldhannatar@gmail.com",
        name: "Kajal",
        isMaster: false,
        access: BATCH1_STUDENT_ACCESS,
    },
    "dikshajakhar0212@gmail.com": {
        email: "dikshajakhar0212@gmail.com",
        name: "Diksha",
        isMaster: false,
        access: BATCH1_STUDENT_ACCESS,
    },

    // RAS Students
    "chitrakumawat33@gmail.com": {
        email: "chitrakumawat33@gmail.com",
        name: "Chitra Kumawat",
        isMaster: false,
        access: RAS_STUDENT_ACCESS,
    },

    // Batch 2 Students (Upanishads)
    // TODO: Update these email IDs with actual emails for Ramesh and Mohit
    "ramesh@example.com": {
        email: "ramesh@example.com",
        name: "Ramesh",
        isMaster: false,
        access: BATCH2_STUDENT_ACCESS,
    },
    "mohit@example.com": {
        email: "mohit@example.com",
        name: "Mohit",
        isMaster: false,
        access: BATCH2_STUDENT_ACCESS,
    },
    // New Batch 2 Student
    "hitvar040@gmail.com": {
        email: "hitvar040@gmail.com",
        name: "Hitvar",
        isMaster: false,
        access: BATCH2_STUDENT_ACCESS,
    },
};

/**
 * Get user access configuration by email
 * Returns default access if user not found
 */
export function getUserAccess(email: string | undefined | null): UserAccessConfig {
    if (!email) {
        return {
            email: "",
            name: "Guest",
            isMaster: false,
            access: DEFAULT_USER_ACCESS,
        };
    }

    // Normalize email to lowercase for lookup
    const normalizedEmail = email.toLowerCase();

    // Check for exact match first
    if (USER_ACCESS_MAP[normalizedEmail]) {
        return USER_ACCESS_MAP[normalizedEmail];
    }

    // Check for case-insensitive match
    const matchingKey = Object.keys(USER_ACCESS_MAP).find(
        key => key.toLowerCase() === normalizedEmail
    );

    if (matchingKey) {
        return USER_ACCESS_MAP[matchingKey];
    }

    // Return default access for unknown users
    return {
        email: email,
        name: "Unknown User",
        isMaster: false,
        access: DEFAULT_USER_ACCESS,
    };
}

/**
 * Check if a user is the master admin
 */
export function isMasterUser(email: string | undefined | null): boolean {
    if (!email) return false;
    const userConfig = getUserAccess(email);
    return userConfig.isMaster;
}

/**
 * Quick access check functions
 */
export function hasAccess(email: string | undefined | null, feature: keyof UserAccess): boolean {
    const userConfig = getUserAccess(email);
    return userConfig.access[feature] || userConfig.isMaster;
}
