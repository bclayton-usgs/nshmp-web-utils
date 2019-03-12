import { GmmUsageParameter } from './gmm-usage-parameter';
import { GmmParameter } from './gmm-parameter';
import { GmmGroupParameter } from './gmm-group-parameter';

/**
 * gmm usage parameters.
 */
export interface GmmUsageParameters {
  Mw: GmmUsageParameter;
  rJB: GmmUsageParameter;
  rRup: GmmUsageParameter;
  rX: GmmUsageParameter;
  dip: GmmUsageParameter;
  width: GmmUsageParameter;
  zTop: GmmUsageParameter;
  zHyp: GmmUsageParameter;
  rake: GmmUsageParameter;
  vs30: GmmUsageParameter;
  vsInf: GmmUsageParameter;
  z1p0: GmmUsageParameter;
  z2p5: GmmUsageParameter;
  gmm: GmmParameter;
  group: GmmGroupParameter;
}
