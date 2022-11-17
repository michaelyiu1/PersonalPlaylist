const router = require('express').Router();
const {User, Playlist, Song} = require('../models');
const withAuth = require('../utils/auth');


router.get('/', async (req, res) => {
    //If the user is already logged in, redirect the request to another route
    try{
        if (req.session.logged_in) {
            res.redirect('profile');
            return;
        } else {
            res.render('homepage');
        }
    } 
    catch (err){
    res.status(500).json(err);
   }
})

router.get('/login', async (req, res) => {
    //If the user is already logged in, redirect the request to another route
    try{
        if (req.session.logged_in) {
            res.redirect('profile');
            return;
        } else {
            res.render('homepage');
        }
    } 
    catch (err){
    res.status(500).json(err);
   }
});

router.get('/signup', async (req,res) => {
    res.render('signup');
});


//Use withAuth to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
    try{
        //Find the logged in user based on the session ID
        const userData = await User.findByPk(req.session.user_id, {
            attributes: {exclude: ['password']},
            include: [{ model : Playlist}]
        });


        const playlistData = await Playlist.findAll();

        //   include: [
        //     {
        //         model: User,
        //         attributes: ['name'],
        //     }
        // ], where: { user_id: userData.id }
        console.log(playlistData);
    
        const playlists = playlistData.map((playlist) => playlist.get({plain: true}));
        const user = userData.get({plain: true});

        console.log('console logging user here ' + user);

        res.render('profile', {
            ...user,
            playlists,
            logged_in: true
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});


module.exports = router;
