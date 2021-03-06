'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _log = require('./mixins/log.js');

var _log2 = _interopRequireDefault(_log);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Initialize the methods that will be exposed by the mixin
/**
 * @component ReactTextarea
 */
_log2.default.initialize();

var Textarea = _react2.default.createClass({
  displayName: 'Textarea',


  /**
   * @type {Array} mixins
   */
  mixins: [_log2.default],

  /**
   * @type {Object} propTypes
   */
  propTypes: {
    text: _react2.default.PropTypes.string
  },

  /**
   * @method getInitialState
   */
  getInitialState: function getInitialState() {
    return {
      text: this.props.text || ''
    };
  },

  /**
   * @method render
   */
  render: function render() {
    return _react2.default.DOM.div(null, _react2.default.DOM.textarea({
      defaultValue: this.state.text,
      onChange: this._textChange
    }), _react2.default.DOM.h3(null, this.state.text.length));
  },

  /**
   * @method _textChange
   * @param {Event} ev
   * @private
   */
  _textChange: function _textChange(ev) {
    this.setState({
      text: ev.target.value
    });
  }
});

module.exports = Textarea;