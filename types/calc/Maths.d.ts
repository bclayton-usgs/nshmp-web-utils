/* Maths type definitions */

export class Maths {

  /**
   * Normal complementary cumulative distribution function.
   * 
   * @param μ mean
   * @param σ standard deviation
   * @param x variate
   */
  static normalCcdf(μ: number, σ: number, x: number): number;

  /**
   * Error function approximation of Abramowitz and Stegun, formula 7.1.26 in
   * the <em>Handbook of Mathematical Functions with Formulas, Graphs, and
   * Mathematical Tables</em>. Although the approximation is only valid for
   * x ≥ 0, because erf(x) is an odd function,
   * erf(x) = −erf(−x) and negative values are supported.
   */
  static erf(x: number): number;

  /**
   * Round a number to specific format.
   * 
   * @param value Value to round
   * @param scale Format scale
   */
  static round(value: number, scale: number): number;

}
