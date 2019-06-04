exports.protectRoutes = (req, res, next) => {
  if (req.payload) {
    console.log('111111111111111', req.payload);
    next();
  } else {
    console.log('22222222222', 'unauth');
    res.status(401).send({ error: 'unauthorized' });
  }
};
