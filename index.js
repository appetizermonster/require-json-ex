'use strict';

const stripComments = require('strip-json-comments');
const fs = require('fs');
const path = require('path');

module.exports = (filePath) => {
  let absPath = filePath;
  if (!path.isAbsolute(filePath)) {
    // get caller dir
    const _prepare = Error.prepareStackTrace;
    Error.prepareStackTrace = (_, stack) => stack;
    const stack = new Error().stack;
    Error.prepareStackTrace = _prepare;

    const callerDir = path.dirname(stack[1].getFileName());
    absPath = path.join(callerDir, filePath);
  }

  const contents = fs.readFileSync(absPath, 'utf8');
  return JSON.parse(stripComments(contents));
};
