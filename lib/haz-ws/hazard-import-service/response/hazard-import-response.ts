import { HazardImportRequestData } from './hazard-import-request-data';
import { HazardCurves } from './hazard-curves';

export interface HazardImportResponse {
  status: string;
  date: string;
  request: HazardImportRequestData;
  response: HazardCurves;
}
