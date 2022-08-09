const withAuth = (req, res, next) => {
  if (!req.session.userName) {
    res.redirect("/");
  } else {
  next();
  }
};

module.exports = withAuth;
