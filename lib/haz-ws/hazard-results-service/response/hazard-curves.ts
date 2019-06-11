import { EnumParameterValues } from '../../enum-parameter-values';
import { HazardData } from './hazard-data';

export interface HazardCurves {
  imt: EnumParameterValues;
  imls: number[];
  data: HazardData[];
}
