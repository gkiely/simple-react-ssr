let isNode = typeof module !== 'undefined' && module.exports;
let React = isNode ? require('react') : window.React;
let ReactDOM = isNode ? require('react-dom') : window.ReactDOM;

var HelloMessage = React.createClass({
  getInitialState: function () {
    return {}
  },
  render: function() {
    var name = this.state.name ? this.state.name : this.props.name
    return (
    	<div id="HelloMessage">Hello {name}</div>
    );
  }
})

if (isNode) {
  exports.HelloMessage = HelloMessage;
} else {
  ReactDOM.render(<HelloMessage name="client" />, document.getElementById('HelloMessage'));
}