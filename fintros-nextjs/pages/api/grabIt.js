let grabity = require("grabity");

export default (req, res) => {
  if (req.method === 'POST') {
    try {

      (async () => {
        let it = await grabity.grabIt(req.body.url);

        console.log(it);
        // respond to the client
        res.setHeader('Content-Type', 'application/json');
        res.json(req.body);
      })();

    } catch(error) {
      console.log('ERROR===>', error)
    }
  } else {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ response: 'Invalid Request Method' }))
  }
}
