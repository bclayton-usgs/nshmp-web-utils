import { EnumParameterValues } from './enum-parameter-values';

/**
 * Enum parameter from nshmp-haz-ws usage.
 */
export interface EnumParameter {
  label: string;
  type: string;
  values: EnumParameterValues;
}
