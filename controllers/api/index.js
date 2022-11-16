const router = require('express').Router();
const userRoutes = require('./userRoutes');
const playlistRoutes = require('./playlistRoutes');
const addSongRoute = require('./addSongRoute');

router.use('/users', userRoutes);
router.use('/playlists', playlistRoutes);
router.use('/addSong', addSongRoute);

module.exports = router;
