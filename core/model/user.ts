import { Gender } from "../enums/gender";
import { Role } from "../enums/role";
import { UserStatus } from "../enums/user-status";
import { Address } from "./address";

/**
 * Data Transfer Object (DTO) representing user-related responses.
 * This class is designed to carry user-related information in a format suitable for response payloads.
 */
export interface User {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    version: number;
    image?: string;
    phoneNumber: string;
    email: string;
    firstname: string;
    lastname?: string;
    gender: Gender;
    status: UserStatus;
    address: Address;
    role: Role;
}
