let grabity = require("grabity");
export default (req, res) => {
  if (req.method === 'POST') {
      console.log(req.body.url)
      fetch(req.body.url)
          .then(response => response.json())
          .then(data => {
              console.log(data)
          })
          .catch(err => console.log(err))
        // grabity.grabIt(req.body.url).then(function(val){
        //     res.setHeader('Content-Type', 'application/json');
        //     res.end(JSON.stringify({ response: val }))
        // }).catch(function(err){
        //     res.setHeader('Content-Type', 'application/json');
        //     res.end(JSON.stringify({ response: 'Something broke' }))
        // });
  } else {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ response: 'Invalid Request Method' }))
  }
}
