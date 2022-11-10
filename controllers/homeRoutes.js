const router = require('express').Router();
const {User, Playlist, Song} = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req,res) => {
    
    try{
        //Get all blog posts and render to page 
        const playlistData = await playlistData.findAll({
            include: [
                {
                    model: Song,
                    attributes: ['title'],
                }
            ]
        });

        // Serialize Data so that the template can read it
        const playlists = playlistData.map((playlist) => playlist.get({plain: true}));

        //Pass Serialized data and session flag into template
        res.render('homepage', {
            playlists,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/login', async (req, res) => {
    //If the user is already logged in, redirect the request to another route
    try{
        if (req.session.logged_in) {
            res.redirect('profile');
            return;
        } else {
            res.render('login');
        }
    } 
    catch (err){
    res.status(500).json(err);
   }
});


//Use withAuth to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
    try{
        //Find the logged in user based on the session ID
        const userData = await User.findByPk(req.session.user_id, {
            attributes: {exclude: ['password']},
            include: [{ model : BlogPost}]
        });

        const user = userData.get({plain: true});

        res.render('profile', {
            ...user,
            logged_in: true
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

// router.get('/:id', async (req, res) => {
//     try{
//         const blogPostData = await BlogPost.findByPk(req.params.id, {
//             include: [
//                 {
//                     model: User,
//                     atttributes: ['name']
//                 }
//             ]
//         });

//         const blogPost = blogPostData.get({plain: true});

//         res.render('homepage', {
//             ...blogPost,
//             logged_in: req.session.logged_in
//         });
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });


module.exports = router;
