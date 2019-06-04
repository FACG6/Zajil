const { verify } = require('jsonwebtoken');

exports.checkAuth = (req, res, next) => {
  const { jwt } = req.cookies;
  if (jwt) {
    verify(jwt, process.env.SECRET, (error, payload) => {
      if (error) {
        res.clearCookie(jwt);
        next();
      } else {
        req.payload = payload;
      }
    });
  }
  next();
};
