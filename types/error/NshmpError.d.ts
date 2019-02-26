/* NshmpError type definitions */

/**
 * Error class that will create a Bootstrap modal with the error message.
 * 
 * @extends Error
 * @author Brandon Clayton
 */
export class NshmpError extends Error {

  /**
   * Create a Boostrap modal with an error message.
   *  
   * @param {String} errorMessage The error message to display.
   */
  constructor(errorMessage: string)

  /** Error message */
  message: string;

  /** Error modal overlay element */
  el: HTMLElement;

  /** Error modal header element */
  headerEl: HTMLElement;

  /** Error modal body element */
  bodyEl: HTMLElement;

  /** Error modal footer element */
  footerEl: HTMLElement;

  /**
   * Convience method to throw a new NshmpError.
   * If the error message equals 'cancel' an error is not thrown,
   *    useful when canceling a Promise.
   * 
   * @param errorMessage The exception message to use
   */
  static throwError(errorMessage: string): void;

}
