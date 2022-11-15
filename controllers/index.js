const router = require('express').Router();
const homeRoutes = require('./homeRoutes');
const apiRoutes  = require('./api');
const playlistRoutes = require('./playlistRoutes');

router.use('/api', apiRoutes);
router.use('/createPlaylist', playlistRoutes);
router.use('/', homeRoutes);

module.exports = router;