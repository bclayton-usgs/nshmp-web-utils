
/**
 * gmm parameter.
 */
export interface GmmParameter {
  label: string;
  info: string;
  values: GmmValue[];
}

/**
 * gmm value.
 */
export interface GmmValue {
  id: string;
  label: string;
  supportedImts: string[];
}
