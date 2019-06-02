const express = require('express');
const { check } = require('express-validator/check')

const authController = require('../controllers/auth');

const router = express.Router();

router.get('/login', authController.getAuth);

router.post('/login', authController.postAuth);

router.get('/signup', authController.getSignup);

router.post(
    '/signup', 
    check('email').isEmail().withMessage('Please Enter a Valid Email!'),   // check & validate 'email' (location could be body, header, etc. not specified)
    authController.postSignup
    );

router.post('/logout', authController.postLogout);

router.get('/reset', authController.getReset);

router.post('/reset', authController.postReset);

router.get('/reset/:resetToken', authController.getNewPassword);

router.post('/new-password', authController.postNewPassword);

module.exports = router;