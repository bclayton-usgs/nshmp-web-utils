import { EnumParameterValues } from '../../enum-parameter-values';
import { HazardData } from './hazard-data';
import { HazardDataType } from './hazard-data-type';

export interface HazardCurves {
  imt: EnumParameterValues;
  dataType: HazardDataType;
  imls: number[];
  data: HazardData[];
}
