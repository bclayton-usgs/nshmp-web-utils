import { HazardImportRequestData } from './hazard-import-request-data';

export interface HazardImporttResponse {
  status: string;
  date: string;
  request: HazardImportRequestData;
}
