import { AbstractResponse } from "./abstract-response";
import { Option } from "./option";

/**
 * Data Transfer Object (DTO) for sending response data related to a {@link Question}.
 * This DTO encapsulates the question data sent back to clients in response to their requests.
 */
export interface Question extends AbstractResponse {
    text: string;
    imageUrl: string;
    type: string;
    time: number;
    options: Option[];
}
