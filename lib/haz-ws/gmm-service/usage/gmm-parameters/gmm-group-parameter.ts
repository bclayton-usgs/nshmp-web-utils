
/**
 * gmm group parameters.
 */
export interface GmmGroupParameter {
  label: string;
  info: string;
  values: GmmGroupValue[];
}

/**
 * gmm group values.
 */
export interface GmmGroupValue {
  id: string;
  label: string;
  data: string[];
}
