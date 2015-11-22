var SearchString = React.createClass({
  getInitialState: function() {
    return { string: '' };
  },
  handleChange: function(e) {
    this.setState({ string: e.target.value })
  },
  render: function() {
    var libraries = this.props.items;
    var string = this.state.string.trim().toLowerCase();
    if (string.length > 0) {
      libraries = libraries.filter(function(el) {
        return el.name.toLowerCase().match(string);
      });
    }
    return (
      <div>
        <input type="text" value={this.state.string} onChange={this.handleChange} placeholder="Type Here to Search..." />
        <ul>
          {
            libraries.map(function(el) {
              return <li>{el.name} <a href={el.url}>{el.url}</a></li>
            })
          }
        </ul>
      </div>
    )
  }
});


var libraries = [
          { name: 'Backbone.js', url: 'http://documentcloud.github.io/backbone/'},
          { name: 'AngularJS', url: 'https://angularjs.org/'},
          { name: 'jQuery', url: 'http://jquery.com/'},
          { name: 'Prototype', url: 'http://www.prototypejs.org/'},
          { name: 'React', url: 'http://facebook.github.io/react/'},
          { name: 'Ember', url: 'http://emberjs.com/'},
          { name: 'Knockout.js', url: 'http://knockoutjs.com/'},
          { name: 'Dojo', url: 'http://dojotoolkit.org/'},
          { name: 'Mootools', url: 'http://mootools.net/'},
          { name: 'Underscore', url: 'http://documentcloud.github.io/underscore/'},
          { name: 'Lodash', url: 'http://lodash.com/'},
          { name: 'Moment', url: 'http://momentjs.com/'},
          { name: 'Express', url: 'http://expressjs.com/'},
          { name: 'Koa', url: 'http://koajs.com/'},

      ];

React.render(
  <SearchString items={libraries} />, document.getElementById('search-bar')
)
