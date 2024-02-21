/**
 * Base interface for response DTOs representing AbstractEntity.
 * AbstractResponse includes common fields such as id, createdAt, updatedAt, and version.
 * This interface is intended to be implemented by specific response DTOs in the system.
 */
export interface AbstractResponse {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    version: number;
}