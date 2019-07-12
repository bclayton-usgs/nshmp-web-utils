import { HazardResultsListing } from './hazard-results-listing';

export interface HazardResults {
  bucket: string;
  resultPrefix: string;
  listings: HazardResultsListing[];
  user: string;
}
