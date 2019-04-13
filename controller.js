const axios = require('axios');

const controller = {
  get: (req, res) => {
    axios
      .get('http://localhost:3001/api')
      .then(data => res.status(200).send(data.data))
      .catch(err => res.status(404).send(err));
  }
};

module.exports = controller;
