const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000


app.use(express.static('./src/'))
app.use(express.static('./dist/'))

app.set('view engine', 'ejs')
app.set('views', './src/')

app.get('/', function (req, res) {

  res.render('index')

})

app.listen(PORT, function () {
  console.log('Example app listening on port 3000!')
})
