import { AbstractResponse } from "./abstract-response";

/**
 * Data Transfer Object (DTO) for sending response data related to an {@link Option}.
 * This DTO encapsulates the answer data sent back to clients in response to their requests.
 */
export interface Option extends AbstractResponse {
    content: string;
}
