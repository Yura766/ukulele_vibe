"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _ref;

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var songSchema = new _mongoose2.default.Schema((_ref = {
    title: String,
    author: String,
    language: String,
    chords: String,
    strumming: String,
    text: String,
    views: Number,
    video: String,
    img: String
}, _defineProperty(_ref, "video", String), _defineProperty(_ref, "date", Date), _ref));

exports.default = _mongoose2.default.model('song', songSchema);