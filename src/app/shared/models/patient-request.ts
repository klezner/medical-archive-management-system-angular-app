export class PatientRequest {
  id?: number;
  firstName?: string;
  lastName?: string;
  pesel?: string | null;
  street?: string | null;
  number?: string | null;
  city?: string | null;
  zipCode?: string | null;

  constructor() {
  }
}
