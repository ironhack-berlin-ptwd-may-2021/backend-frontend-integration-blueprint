const express = require('express');
const router = express.Router();

const User = require('../models/User')

const bcrypt = require('bcryptjs')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.post('/signup', (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;

  User.findOne({ username: username }).then((foundUser) => {
    if (foundUser) {
      res.json({ message: 'username already exists' })
    } else {

      const salt = bcrypt.genSaltSync(10);
      const hashPass = bcrypt.hashSync(password, salt);

      const aNewUser = new User({
        username: username,
        password: hashPass
      });

      aNewUser.save().then(() => {
        res.json({ message: 'user created' })
      })

    }
  })
})

router.post('/login', (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;

  User.findOne({ username: username })
    .then(foundUser => {
      if (!foundUser) {
        res.json({ message: 'username not registered - register first' })
      } else {
        if (bcrypt.compareSync(password, foundUser.password)) {


          //******* SAVE THE USER IN THE SESSION ********//
          req.session.currentUser = foundUser;

          res.json({ message: 'login success', user: foundUser })
        } else {
          res.json({ message: 'password incorrect' })
        }
      }
    })
});

router.get("/checkuser", (req, res, next) => {
  if (req.session.currentUser) {
    res.json({ userDoc: req.session.currentUser });
  } else {
    res.json({ userDoc: null });
  }
});


module.exports = router;
