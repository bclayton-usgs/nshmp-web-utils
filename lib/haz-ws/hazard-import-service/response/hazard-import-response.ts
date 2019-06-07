import { HazardImportRequestData } from './hazard-import-request-data';

export interface HazardImportResponse {
  status: string;
  date: string;
  request: HazardImportRequestData;
}
