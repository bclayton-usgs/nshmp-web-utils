/* nshmp-web-utils exports */

/* Bootstrap setup */
const $ = require('jquery');

if (typeof window !== 'undefined') {
  window.jQuery = $;
  require('bootstrap');
}

/* calc */
const ExceedanceModel = require('./calc/ExceedanceModel');
const Maths = require('./calc/Maths');
const UncertaintyModel = require('./calc/UncertaintyModel');

/* error */
const NshmpError = require('./error/NshmpError');
const Preconditions = require('./error/Preconditions');

module.exports = {
  /* calc */
  ExceedanceModel,
  Maths,
  UncertaintyModel,

  /* error */
  NshmpError,
  Preconditions
}
