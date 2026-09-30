function App() {
  var state = React.useState(0)
  var count = state[0]
  var setCount = state[1]

  return React.createElement("main", null,
    React.createElement("h1", null, "React работает в 1С"),
    React.createElement("button", {
      onClick: function () { setCount(count + 1) }
    }, "Нажато: " + count)
  )
}

ReactDOM.render(React.createElement(App), document.getElementById("root"))
