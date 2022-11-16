const router = require('express').Router();
const { User, Song, Playlist, PlaylistSong } = require('../../models');

router.post('/', async (req, res) => {
    try {
        
      const newPlaylist = await Playlist.create(req.body);
      const userData = await User.findByPk(req.session.user_id, {
        attributes: {exclude: ['password']},
        include: [{ model : Playlist}]
    });


      req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.logged_in = true;
      });

      console.log(newPlaylist);
      res.status(200).json(newPlaylist);

      } catch (err) {
      console.log(err);
      res.status(400).json(err);
    };
});

// DELETE a location
router.delete('/:id', async (req, res) => {
  try {
    const deletePlaylist = await Playlist.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!deletePlaylist) {
      res.status(404).json({ message: 'No location found with this id!' });
      return;
    }

    res.status(200).json(deletePlaylist);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;