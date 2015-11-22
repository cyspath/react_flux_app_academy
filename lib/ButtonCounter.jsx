var ButtonCounter = React.createClass({
  getInitialState: function() {
    return { count: 0 }
  },
  upCount: function() {
    this.setState({ count: this.state.count + 1 })
  },
  render: function() {
    return (
      <button onClick={this.upCount} >{this.state.count}</button>
    )
  }
})

React.render(<ButtonCounter />, document.getElementById('button-counter'))
