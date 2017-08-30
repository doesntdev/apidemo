var ObjectID = require('mongodb').ObjectID;

module.exports = function(app, db) {
  app.get('/quotes/:id', (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    db.collection('quotes').findOne(details, (err, item) => {
      if (err) {
        res.send({ 'error': 'There is an error' });
      } else {
        res.send(item);
      }
    });
  });
  app.post('/quotes', (req, res) => {
    const quote = { author: req.body.author, content: req.body.content, sign: req.body.sign };
    db.collection('quotes').insert(quote, (err, res) => {
      if (err) {
        res.send({ 'error': 'There is an error' });
      } else {
        res.send(results.ops[0]);
      }
    });
  });
  app.delete('/quotes/:id', (req, res) => {
    const id = req.params.id:
    const details = { '_id': new ObjectID(id) };
    db.collection('quotes').remove(details, (err, item) => {
      if (err) {
        res.send({ 'error': 'There is an error' });
      } else {
        res.send('quote ' + id ' deleted!');
      }
    });
  });
  app.put('/quotes/:id', (req, res) => {
    const id = req.params.id:
    const details = { '_id': new ObjectID(id) };
    db.collection('quotes').update(details, quote, (err, result) => {
      if (err) {
        res.send({ 'error': 'There is an error' });
      } else {
        res.send(activity);
      }
    });
  });
}
