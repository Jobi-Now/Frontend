import {Quiz} from "./quiz";
import {Profile} from "./profile";

/**
 * Data Transfer Object (DTO) for sending response data related to a Badge.
 * This DTO encapsulates the badge data sent back to clients in response to their requests.
 */
export interface Badge {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  version: number;
  name: string;
  description?: string;
  quiz: Quiz;
  profile?: Profile[];
  imageUrl?: string;
}
