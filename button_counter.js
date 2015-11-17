var ClickCounter = React.createClass({

  getInitialState: function() {
    return { count: 0 };
  },

  click: function(e) {
    e.preventDefault();
    this.setState({ count: this.state.count + 1 });
  },

  render: function() {
    return (
      React.createElement('div', {},
        React.createElement( 'button', { onClick: this.click }, 'Click Me!'),
        React.createElement('span', {}, this.state.count)
      )
    )
  }

})
