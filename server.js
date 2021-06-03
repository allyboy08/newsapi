const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    var url = 'https://newsapi.org/v2/everything?' +
    'q=Apple&' +
    'from=2021-06-02&' +
    'sortBy=popularity&' +
    'apiKey=2cb272824c21486aaac6ccf5d55fcfe1';


var req = new Request(url);

fetch(req)
.then(function(res) {
  console.log(res.send());
})
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})