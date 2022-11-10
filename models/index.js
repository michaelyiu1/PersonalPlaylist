// Import Models
const User = require('./User');
const Playlist = require('./Playlist');
const Song = require('./Song');
const PlaylistSong = require('./PlaylistSong');

// Users can have many playlists
User.hasMany(Playlist, {
    foreignKey: 'user_id',
});

// 
Playlist.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Playlist.belongsToMany(Song, {

    through: {
        model: PlaylistSong,
        unique: false
    },
    foreignKey: 'playlist_id',
});

Song.belongsToMany(Playlist, {

    through: {
        model: PlaylistSong,
        unique: false
    },
    foreignKey: 'song_id',
});

module.exports = {User, Playlist, Song, PlaylistSong};