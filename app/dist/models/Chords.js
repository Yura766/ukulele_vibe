"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var chordsSchema = new _mongoose2.default.Schema({
    title: String,
    chords: Array
});

exports.default = _mongoose2.default.model('chords', chordsSchema);