import { HazardSocketRequestData } from './hazard-import-request-data';

export interface HazardSocketResponse {
  status: string;
  date: string;
  request: HazardSocketRequestData;
}
