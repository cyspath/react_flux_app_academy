var RecipeList = React.createClass({
  render: function() {
    return (
      <div>
        RecipeList component text
      </div>
    )
  }
})

var RecipeForm = React.createClass({
  render: function() {
    return (
      <div>
        RecipeForm component text
      </div>
    )
  }
})

var RecipeBook = React.createClass({
  render: function() {
    return (
      <div>
        Hello! I am a RecipeBook
        <RecipeList />
        <RecipeForm />
      </div>
    )
  }
})

React.render(
  <RecipeBook />, document.getElementById('recipe')
)
