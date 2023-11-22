const { createAuthJWT, clearJWT } = require('../../../api/v1/controllers/authControllers');

const router = require('express').Router();

router.post('/jwt', createAuthJWT);
router.post('/logout', clearJWT)

module.exports = router;