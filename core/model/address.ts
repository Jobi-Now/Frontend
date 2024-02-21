export interface Address {
  region?: string |null;
  district?: string;
  city?: string |null;
  street?: string | null;
  building?: number;
  apartment?: number;
  postalCode?: number;
}
