import { GmmUsage } from './gmm-usage';
import { GmmDistanceUsageParameters } from './gmm-parameters/gmm-distance-usage-parameters';

/**
 * Marker interface for gmm/distance and gmm/hw-fw usage.
 */
export interface GmmDistanceUsage extends GmmUsage {
  parammeters: GmmDistanceUsageParameters;
}
