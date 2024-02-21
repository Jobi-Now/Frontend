/**
 * DTO for representing a response related to Profil.
 * This DTO includes information such as the profile title, description, and common response fields.
 */
export interface Profile {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  version: number;
  title: string;
  description?: string;
}
