const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class PlaylistSong extends Model {}

PlaylistSong.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        playlist_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'playlist',
                key: 'id',
                unique: false
            }
        },
        song_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'song',
                key: 'id',
                unique: false
            }

        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'playlist_song',
    }
);

module.exports = PlaylistSong;