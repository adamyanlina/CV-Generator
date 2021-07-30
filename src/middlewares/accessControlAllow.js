const accessControlAllow = (req, res, next) => {
  if (req.hostname.endsWith('aca.am')) {
    res.header('Access-Control-Allow-Origin', 'https://' + req.hostname);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  }
  
  if (req.method === 'OPTIONS') return res.send(200);

  next();
};

module.exports = accessControlAllow;