"use strict";

var _dotenv = require("dotenv");

var _dotenv2 = _interopRequireDefault(_dotenv);

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

var _cors = require("cors");

var _cors2 = _interopRequireDefault(_cors);

var _Song = require("./models/Song.js");

var _Song2 = _interopRequireDefault(_Song);

var _Album = require("./models/Album.js");

var _Album2 = _interopRequireDefault(_Album);

var _Chords = require("./models/Chords.js");

var _Chords2 = _interopRequireDefault(_Chords);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// APP AND PORT
var app = (0, _express2.default)(),
    port = 3001;
// IMPORT MODEL
// import npm


var PAGE_SIZE = 12;

// MIDDLEWARE
app.use((0, _cors2.default)());
app.use(_express2.default.json());
_dotenv2.default.config();

// MONGO CONNECT
_mongoose2.default.set('strictQuery', true).connect(process.env.MONGOCONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(function () {
    console.log('DB OK');
}).catch(function (err) {
    console.log('DB error', err);
});

console.log(process.env.SECRET_KEY);
app.get('/api', async function (req, res) {
    var songsNew = await _Song2.default.find({}).sort({ date: -1 }).limit(PAGE_SIZE);
    var songsPopular = await _Song2.default.find({}).sort({ views: -1 }).limit(9);
    var albums = await _Album2.default.find({});

    res.json({
        songsNew: songsNew,
        songsPopular: songsPopular,
        albums: albums,
        pageSize: PAGE_SIZE,
        title: 'Home page'
    });
});

app.get('/api/chords', async function (req, res) {
    var chords = await _Chords2.default.find({});

    return res.json(chords);
});

app.get('/api/song/:author/:title?', async function (req, res) {
    try {
        var requestedAuthor = req.params.author;
        var requestedSongTitle = req.params.title;

        console.log(requestedAuthor, requestedSongTitle);
        if (requestedSongTitle) {

            var song = await _Song2.default.findOneAndUpdate({ author: requestedAuthor, title: requestedSongTitle }, { $inc: { views: 1 } }, { new: true });

            res.json(song);
        } else {
            var songs = await _Song2.default.find({ author: requestedAuthor });
            var author = requestedAuthor;

            res.json({ songs: songs, author: author });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

app.get('/api/api/songs', async function (req, res) {
    var page = parseInt(req.query.page) || 1;
    var pageSize = parseInt(req.query.pageSize) || PAGE_SIZE;

    var songs = await _Song2.default.find({}).sort({ date: -1 }).skip(page).limit(pageSize);

    res.json({ songs: songs });
});

app.get('/api/album/:id', async function (req, res) {
    var requestedAlbumId = req.params.id;
    var album = await _Album2.default.findOne({ url: requestedAlbumId });
    var songs = await _Song2.default.find({ title: { $in: album.songId } });
    

    // console.log('1' +requestedAlbumId);
    // console.log('2' +album);
    // console.log('3' +songs);

    res.json({ album: album, songs: songs });
});
// HOST
app.listen(port, function () {
    console.log('server started on ' + port);
});