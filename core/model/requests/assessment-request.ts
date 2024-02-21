import {Quiz} from "../quiz";
import {User} from "../user";

/**
 * Data Transfer Object (DTO) for creating or updating an Assessment.
 * This DTO encapsulates the data required to create or modify an assessment
 * in the context of a quiz application.
 */
export interface AssessmentRequest {
  quiz: Quiz;
  user: User;
  startedAt: Date;
  finishedAt?: Date;
}
