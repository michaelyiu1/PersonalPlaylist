const router = require('express').Router();
const { User, Song, Playlist, PlaylistSong } = require('../models');

router.get('/:id', async (req, res) => {

    try{
        console.log('hi');

        console.log(req.params.id);
        
        const user = await User.findByPk(req.session.user_id);
        const songData = await Song.findAll({
            include: [Playlist],
            where: {
                playlist_id: req.params.id
            }
        });

        const songs = songData.map((song) => song.get({plain: true}));

        console.log(songs);
        res.render('playlist');

    } catch (err) {
        res.status(500).json(err);
        console.log(err);
    }
});

router.post('/:id/addSong', async (req, res) => {
    try {
    console.log('playlist id is ' + req.params.id);
        
      const newSong = await Song.create(req.body);
      console.log(newSong);

    } catch (err) {
      console.log(err);
      res.status(400).json(err);
    };
});

module.exports = router;