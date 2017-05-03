const template = require('./index.marko');

exports.path = '/';

exports.handler = (input, out) => {
  template.render({}, out);
};
