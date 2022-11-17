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

// DELETE a location
router.delete('/:id', async (req, res) => {
  try {

    console.log(req.params.id);
    const deleteSong = await Song.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!deleteSong) {
      res.status(404).json({ message: 'No location found with this id!' });
      return;
    }

    res.status(200).json(deleteSong);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});


module.exports = router;