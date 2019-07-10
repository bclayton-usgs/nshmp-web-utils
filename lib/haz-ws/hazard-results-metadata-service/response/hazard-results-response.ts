import { HazardResultsResult } from './hazard-results-result';

export interface HazardResultsResponse {
  status: string;
  data: string;
  result: HazardResultsResult;
}
