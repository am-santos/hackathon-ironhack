'use strict';

module.exports = (req, res, next) => {
  res.locals.user = req.user;

  if (req.user) {
    switch (req.user.role) {
      case 'client':
        res.locals.user.isClient = true;
        break;
      case 'owner':
        res.locals.user.isOwner = true;
        break;
    }
  }

  next();
};
