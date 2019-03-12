import { GmmUsageParameters } from './gmm-usage-parameters';
import { EnumParameter } from '../../../enum-parameter';

/**
 * gmm/distance usage parameters.
 */
export interface GmmDistanceUsageParameters extends GmmUsageParameters {
  imt: EnumParameter;
}
