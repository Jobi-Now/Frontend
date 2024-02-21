import {AbstractResponse} from "./abstract-response";
import {Question} from "./question";
import {Option} from "./option";
import {User} from "./user";

/**
 * Response DTO for Answer entity.
 * This DTO encapsulates the data sent back to clients in response to requests concerning an Answer.
 * It includes details of the question, the options provided, and the user associated with the answer.
 */
export interface Answer extends AbstractResponse {
  question: Question;
  options: Option[];
  user: User;
}
