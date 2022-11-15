const router = require('express').Router();
const homeRoutes = require('./homeRoutes');
const apiRoutes  = require('./api');
const createPlaylistRoute = require('./createPlaylistRoute');

router.use('/api', apiRoutes);
router.use('/createPlaylist', createPlaylistRoute);
router.use('/', homeRoutes);

module.exports = router;