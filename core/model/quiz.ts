import { AbstractResponse } from "./abstract-response";
import { Question } from "./question";

/**
 * Data Transfer Object (DTO) for sending response data related to a {@link Quiz}.
 * This DTO encapsulates the quiz data sent back to clients in response to their requests.
 */
export interface Quiz extends AbstractResponse {
    title: string;
    description: string;
    imageUrl: string;
    passingPercentage: number;
    questions: Question[];
}
