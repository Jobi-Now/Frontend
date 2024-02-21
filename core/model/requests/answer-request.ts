import {Question} from "../question";
import {Option} from "../option";

/**
 * Request DTO for Answer entity.
 * This DTO is used to encapsulate the data necessary for creating or updating an Answer.
 * It includes the associated question and a set of selected options.
 */
export interface AnswerRequest {
  question: Question;
  option: Option[];
}
