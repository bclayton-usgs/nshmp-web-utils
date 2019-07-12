import { HazardResultsDataType } from './hazard-results-data-type';

export interface HazardResultsListing {
  dataType: HazardResultsDataType;
  file: string;
  path: string;
}
