import { GmmUsageParameters } from './gmm-parameters/gmm-usage-parameters';

/**
 * Marker interface for gmm usage from nshmp-haz-ws.
 */
export interface GmmUsage {
  status: string;
  description: string;
  syntax: string;
  parameters: GmmUsageParameters;
}
