const router = require('express').Router();
// const { User, Song, Playlist, PlaylistSong } = require('../models');

router.get('/', (req,res) => {

    console.log('hello');
    res.render('createPlaylist');

  });

  module.exports = router;