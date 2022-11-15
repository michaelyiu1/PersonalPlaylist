const router = require('express').Router();
const { User, Song, Playlist, PlaylistSong } = require('../../models');

router.post('/', async (req, res) => {
    try {
      const playlistData = await Playlist.create(req.body);
      console.log(playlistData);
  
        res.status(200).json(PlaylistData);
      } catch (err) {
      console.log(err);
      res.status(400).json(err);
    };
});

module.exports = router;