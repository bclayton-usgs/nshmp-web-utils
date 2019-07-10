import { HazardResultsDataType } from './hazard-results-data-type';

export interface HazardResultsListing {
  bucket: string;
  dataType: HazardResultsDataType;
  path: string;
  user: string;
}
