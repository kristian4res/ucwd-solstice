const React = require('react');

const SvgComponent = React.forwardRef((props, ref) =>
  React.createElement('svg', { ref, ...props })
);

const str = new String('test-file-stub');
str.default = 'test-file-stub';
str.ReactComponent = SvgComponent;
str.__esModule = true;

module.exports = str;
