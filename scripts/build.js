const shell = require('shelljs')
const ejs = require('ejs')
const fs = require('fs')
const strftime = require('strftime')
const short = require('short-uuid')
const translator = short()
const template = ejs.compile(`<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://unpkg.com/tachyons">
  </head>
  <body>
    <script src="<%= bundle %>"></script>
  </body>
</html>
`)

shell.rm('-rf', 'dist')
shell.mkdir('dist')
const bundle = `bundle-${strftime('%F') + translator.uuid()}.js`
shell.exec('browserify ./src/index.js -t sveltify -o ./dist/' + bundle)
fs.writeFileSync('./dist/index.html', template({ bundle }))
console.log('fin!')
