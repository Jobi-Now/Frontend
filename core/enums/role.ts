/**
 * Enumeration representing different roles in the system.
 * Each role is associated with a set of permissions, defining the level of access for users with that role.
 * This enum provides a convenient way to manage and assign roles and permissions throughout the application.
 */
export enum Role {
    USER = "USER",
    RECRUITER = "RECRUITER",
    MANAGER = "MANAGER",
    AGENT = "AGENT",
    JOB_SEEKER = "JOB_SEEKER",
    SUPER_ADMINISTRATOR = "SUPER_ADMINISTRATOR"
}