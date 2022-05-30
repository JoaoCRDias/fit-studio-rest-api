"use strict";
exports.__esModule = true;
require("dotenv/config");
var express_1 = require("express");
var body_parser_1 = require("body-parser");
var app = (0, express_1["default"])();
// eslint-disable-next-line new-cap
var router = express_1["default"].Router();
router.get('/', function (req, res) { return res.json({ message: 'Hello world' }); });
app.use(router);
app.set('port', process.env.APP_PORT);
app.use(body_parser_1["default"].json());
app.use(body_parser_1["default"].urlencoded({ extended: true }));
console.log(process.env.APP_PORT);
app.listen(app.get('port'), function () {
    console.log('  App is running at http://localhost:%d in %s mode', app.get('port'), app.get('env'));
    console.log('  Press CTRL-C to stop\n');
});
exports["default"] = app;
