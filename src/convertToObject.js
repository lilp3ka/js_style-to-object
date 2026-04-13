'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map((stil) => stil.trim())
    .filter((stil) => stil)
    .reduce((result, stil) => {
      const [property, ...valueStil] = stil.split(':');

      if (property && valueStil.length) {
        result[property.trim()] = valueStil.join(':').trim();
      }

      return result;
    }, {});
}

module.exports = convertToObject;
