"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var albumSchema = new _mongoose2.default.Schema({
    title: String,
    sub: String,
    songId: Array,
    img: String,
    url: String
});

exports.default = _mongoose2.default.model('album', albumSchema);