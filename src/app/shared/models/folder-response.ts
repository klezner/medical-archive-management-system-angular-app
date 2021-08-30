export class FolderResponse {
  id?: number;
  year?: number;
  ledgerId?: number;
  numberOfFolders?: number;
  typeLabel?: string;
  statusLabel?: string;
  categoryName?: string;
  storagePeriodYears?: number;
  roomNumber?: string;
  floor?: number;
  hospitalizationFrom?: string;
  hospitalizationTo?: string;
  wardAbbreviation?: string;
  firstName?: string;
  lastName?: string;
  pesel?: string;

  constructor() {
  }
}
