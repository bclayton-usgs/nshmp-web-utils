import { HazardResultsRequestData } from './hazard-results-request-data';
import { HazardCurves } from './hazard-curves';

export interface HazardResultsResponse {
  status: string;
  date: string;
  request: HazardResultsRequestData;
  response: HazardCurves;
}
