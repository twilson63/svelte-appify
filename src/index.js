const insertCss = require('insert-css')
const App = require('./app.html')

insertCss(`
html, body {
  height: 100%;
}

html {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
*, *:before, *:after {
  -webkit-box-sizing: inherit;
  -moz-box-sizing: inherit;
  box-sizing: inherit;
  }
`)

const target = document.body.appendChild(document.createElement('div'))

new App({ target })
