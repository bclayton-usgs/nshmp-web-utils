
/**
 * gmm usage parameter.
 */
export interface GmmUsageParameter {
  label: string;
  info: string;
  units?: string;
  min?: number;
  max?: number;
  value: number | boolean;
}
