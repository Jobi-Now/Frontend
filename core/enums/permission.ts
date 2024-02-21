/**
 * Enumeration representing different permissions in the system.
 * Each permission is associated with a specific role, such as recruiter, manager, or super_administrator.
 * This enum provides a convenient way to define and access permissions throughout the application.
 */
export enum Permission {
    RECRUITER_READ = "admin:read",
    RECRUITER_UPDATE = "admin:update",
    RECRUITER_CREATE = "admin:create",
    RECRUITER_DELETE = "admin:delete",
    MANAGER_READ = "management:read",
    MANAGER_UPDATE = "management:update",
    MANAGER_CREATE = "management:create",
    MANAGER_DELETE = "management:delete",
    AGENT_READ = "agent:read",
    AGENT_UPDATE = "agent:update",
    AGENT_CREATE = "agent:create",
    AGENT_DELETE = "agent:delete",
    JOB_SEEKER_READ = "agent:read",
    JOB_SEEKER_UPDATE = "agent:update",
    JOB_SEEKER_CREATE = "agent:create",
    JOB_SEEKER_DELETE = "agent:delete",
    SUPER_ADMINISTRATOR_READ = "admin:read",
    SUPER_ADMINISTRATOR_UPDATE = "admin:update",
    SUPER_ADMINISTRATOR_CREATE = "admin:create",
    SUPER_ADMINISTRATOR_DELETE = "admin:delete"
}