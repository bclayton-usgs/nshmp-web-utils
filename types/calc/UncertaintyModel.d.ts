/* UncertaintyModel type definitions */

/**
 * Container class for mean, standard deviation, and
 *    truncation level.
 * 
 * @class UncertaintyModel
 * @author Brandon Clayton
 */
export class UncertaintyModel {

  /**
   * @param μ mean
   * @param σ standard deviation
   * @param n truncation level in units of σ (truncation = n * σ)
   */
  constructor(μ: number, σ: number, n: number);

  /** Mean */
  μ: number;

  /** Standard deviation */
  σ: number;

  /** Truncation level */
  n: number;

}
