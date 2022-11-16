const router = require('express').Router();
const { User, Song, Playlist, PlaylistSong } = require('../../models');

router.post('/', async (req, res) => {
    try {
    console.log(req.params.id);
        
      const newSong = await Song.create(req.body);
      console.log(newSong);

    } catch (err) {
      console.log(err);
      res.status(400).json(err);
    };
});

module.exports = router;