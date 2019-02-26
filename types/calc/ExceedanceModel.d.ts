/* ExceedanceModel type definitions */

import { UncertaintyModel } from './UncertaintyModel.js';

export class ExceedanceModel {

  /**
   * No truncation; model ignores truncation level n.
   * 
   * Compute the probability of exceeding a value.
   * @param model to compute exceedance
   * @param value for which to compute the exceedance probability
   */
  static truncationOff(model: UncertaintyModel, value: number): number;

  /**
   * No truncation; model ignores truncation level n.
   * 
   * Compute the probability of exceeding a value.
   *
   * @param model to compute exceedance
   * @param sequence for which to compute the exceedance probability
   */
  static truncationOffSequence(model: UncertaintyModel, sequence: number[]): number[];

  /**
   * Upper truncation only at μ + σ * n.
   * 
   * Compute the probability of exceeding a value.
   *
   * @param model to compute exceedance
   * @param value for which to compute the exceedance probability
   */
  static truncationUpperOnly(model: UncertaintyModel, value: number): number; 

  /**
   * Upper truncation only at μ + σ * n.
   * 
   * Compute the probability of exceeding a value.
   *
   * @param model to compute exceedance
   * @param sequence for which to compute the exceedance probability
   */
  static truncationUpperOnlySequence(model: UncertaintyModel, sequence: number[]): number[];

}
