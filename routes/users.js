const router = require('express').Router();

const {
  getUser,
  getUsers,
  updateProfileInfo,
  updateAvatar,
  getCurrentUser,
} = require('../controllers/users');

router.get('/', getUsers);
router.get('/me', getCurrentUser);
router.get('/:id', getUser);
router.patch('/me', updateProfileInfo);
router.patch('/me/avatar', updateAvatar);

module.exports = router;
