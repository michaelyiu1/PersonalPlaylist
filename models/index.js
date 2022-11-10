const User = require('./User');
const Playlist = require('./Playlist');
const Song = require('./Song')

// Users can have many playlists
User.hasMany(Playlist, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

// 
Playlist.belongsTo(User, {
    foreignKey: 'user_id'
});

Playlist.belongsToMany(Song, {

    through: {
        model: PlaylistSong,
        unique: false
    }
    foreignKey: 'playlist_id',
});

Song.belongsToMany(Playlist, {

    through: {
        model: PlaylistSong,
        unique: 
    }
    foreignKey: 'playlist_id',
});

module.exports = {User, Playlist, Song};