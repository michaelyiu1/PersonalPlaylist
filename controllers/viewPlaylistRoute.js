const router = require('express').Router();
const { User, Song, Playlist, PlaylistSong } = require('../models');

router.get('/:id', async (req, res) => {

    try{
        console.log('hi');

        console.log(req.params.id);
        
        const playlistID = req.params.id;
        const user = await User.findByPk(req.session.user_id);
        const songData = await Song.findAll({
            include: [Playlist],
            where: {
                playlist_id: req.params.id
            }
        });

        const songs = songData.map((song) => song.get({plain: true}));

        console.log(songs);
        res.render('playlist', {
            songs,
            playlistID
        });

    } catch (err) {
        res.status(500).json(err);
        console.log(err);
    }
});

router.post('/:id', async (req, res) => {
    try {

        const newSong = await Song.create(req.body);


        const songId = newSong.id;
        // const body = JSON.stringify({ songId,playlistId });
        // const playlistSong = await PlaylistSong.create(body);
        console.log(newSong);
        res.status(200).json(newSong);

    } catch (err) {
      console.log(err);
      res.status(400).json(err);
    };
});

module.exports = router;