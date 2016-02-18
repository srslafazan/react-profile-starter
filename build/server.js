require("source-map-support").install();
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  var _regenerator = __webpack_require__(1);
  
  var _regenerator2 = _interopRequireDefault(_regenerator);
  
  var _asyncToGenerator2 = __webpack_require__(2);
  
  var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
  
  __webpack_require__(3);
  
  var _path = __webpack_require__(4);
  
  var _path2 = _interopRequireDefault(_path);
  
  var _express = __webpack_require__(5);
  
  var _express2 = _interopRequireDefault(_express);
  
  var _react = __webpack_require__(6);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _server = __webpack_require__(7);
  
  var _server2 = _interopRequireDefault(_server);
  
  var _routes = __webpack_require__(8);
  
  var _routes2 = _interopRequireDefault(_routes);
  
  var _Html = __webpack_require__(115);
  
  var _Html2 = _interopRequireDefault(_Html);
  
  var _assets = __webpack_require__(116);
  
  var _assets2 = _interopRequireDefault(_assets);
  
  var _config = __webpack_require__(40);
  
  var _nodemailer = __webpack_require__(117);
  
  var _nodemailer2 = _interopRequireDefault(_nodemailer);
  
  var _bodyParser = __webpack_require__(118);
  
  var _bodyParser2 = _interopRequireDefault(_bodyParser);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var server = global.server = (0, _express2.default)();
  
  //
  // Register Node.js middleware
  // -----------------------------------------------------------------------------
  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  server.use(_express2.default.static(_path2.default.join(__dirname, 'public')));
  server.use(_bodyParser2.default.json());
  server.use(_bodyParser2.default.urlencoded({ extended: true }));
  
  //
  // Register API middleware
  // -----------------------------------------------------------------------------
  server.use('/api/content', __webpack_require__(119).default);
  
  //
  // Get Requests
  // -----------------------------------------------------------------------------
  server.post('/mail', function () {
    var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(req, res, next) {
      var transporter, mailOptions;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              transporter = _nodemailer2.default.createTransport({
                service: 'Mailgun',
                auth: {
                  // user: process.env.MAILER_USER
                  // pass: process.env.MAILER_PASS
                }
              });
              mailOptions = {
                from: req.body.email, // sender address
                to: 'srslafazan@gmail.com', // list of receivers
                subject: 'Message from a Portfolio viewer', // Subject line
                text: req.body.info + ' , ' + req.body.name + req.body.email + ' , ' + req.body.phone + ' , ' + req.body.site + ' , ', // plaintext body
                html: '<p>' + req.body.info + '</p>' + req.body.name + '<br>' + req.body.email + '<br>' + req.body.phone + '<br>' + req.body.site + '<br>' };
              // send mail with defined transport object
  
              // html body
              transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                  return console.log(error);
                }
                console.log('Message sent: ' + info.response);
              });
  
            case 3:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined);
    })),
        _this = undefined;
    return function (_x, _x2, _x3) {
      return ref.apply(_this, arguments);
    };
  }());
  
  //
  // Register server-side rendering middleware
  // -----------------------------------------------------------------------------
  server.get('*', function () {
    var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3(req, res, next) {
      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              return _context3.delegateYield(_regenerator2.default.mark(function _callee2() {
                var statusCode, data, css, context, html;
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        statusCode = 200;
                        data = { title: '', description: '', css: '', body: '', entry: _assets2.default.main.js };
                        css = [];
                        context = {
                          insertCss: function insertCss(styles) {
                            return css.push(styles._getCss());
                          },
                          onSetTitle: function onSetTitle(value) {
                            return data.title = value;
                          },
                          onSetMeta: function onSetMeta(key, value) {
                            return data[key] = value;
                          },
                          onPageNotFound: function onPageNotFound() {
                            return statusCode = 404;
                          }
                        };
                        _context2.next = 6;
                        return _routes2.default.dispatch({ path: req.path, query: req.query, context: context }, function (state, component) {
                          data.body = _server2.default.renderToString(component);
                          data.css = css.join('');
                        });
  
                      case 6:
                        html = _server2.default.renderToStaticMarkup(_react2.default.createElement(_Html2.default, data));
  
                        res.status(statusCode).send('<!doctype html>\n' + html);
  
                      case 8:
                      case 'end':
                        return _context2.stop();
                    }
                  }
                }, _callee2, undefined);
              })(), 't0', 2);
  
            case 2:
              _context3.next = 7;
              break;
  
            case 4:
              _context3.prev = 4;
              _context3.t1 = _context3['catch'](0);
  
              next(_context3.t1);
  
            case 7:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, undefined, [[0, 4]]);
    })),
        _this = undefined;
    return function (_x4, _x5, _x6) {
      return ref.apply(_this, arguments);
    };
  }());
  
  //
  // Launch the server
  // -----------------------------------------------------------------------------
  server.listen(_config.port, function () {
    /* eslint-disable no-console */
    console.log('The server is running at http://localhost:' + _config.port + '/');
  });

/***/ },
/* 1 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/regenerator");

/***/ },
/* 2 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/helpers/asyncToGenerator");

/***/ },
/* 3 */
/***/ function(module, exports) {

  module.exports = require("babel-polyfill");

/***/ },
/* 4 */
/***/ function(module, exports) {

  module.exports = require("path");

/***/ },
/* 5 */
/***/ function(module, exports) {

  module.exports = require("express");

/***/ },
/* 6 */
/***/ function(module, exports) {

  module.exports = require("react");

/***/ },
/* 7 */
/***/ function(module, exports) {

  module.exports = require("react-dom/server");

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _regenerator = __webpack_require__(1);
  
  var _regenerator2 = _interopRequireDefault(_regenerator);
  
  var _asyncToGenerator2 = __webpack_require__(2);
  
  var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
  
  var _react = __webpack_require__(6);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _Router = __webpack_require__(9);
  
  var _Router2 = _interopRequireDefault(_Router);
  
  var _fetch = __webpack_require__(38);
  
  var _fetch2 = _interopRequireDefault(_fetch);
  
  var _App = __webpack_require__(41);
  
  var _App2 = _interopRequireDefault(_App);
  
  var _ContentPage = __webpack_require__(78);
  
  var _ContentPage2 = _interopRequireDefault(_ContentPage);
  
  var _ContactPage = __webpack_require__(81);
  
  var _ContactPage2 = _interopRequireDefault(_ContactPage);
  
  var _LoginPage = __webpack_require__(84);
  
  var _LoginPage2 = _interopRequireDefault(_LoginPage);
  
  var _RegisterPage = __webpack_require__(87);
  
  var _RegisterPage2 = _interopRequireDefault(_RegisterPage);
  
  var _NotFoundPage = __webpack_require__(90);
  
  var _NotFoundPage2 = _interopRequireDefault(_NotFoundPage);
  
  var _ErrorPage = __webpack_require__(93);
  
  var _ErrorPage2 = _interopRequireDefault(_ErrorPage);
  
  var _ProfilePage = __webpack_require__(96);
  
  var _ProfilePage2 = _interopRequireDefault(_ProfilePage);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var router = new _Router2.default(function (on) {
    on('*', function () {
      var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(state, next) {
        var component;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return next();
  
              case 2:
                component = _context.sent;
                return _context.abrupt('return', component && _react2.default.createElement(
                  _App2.default,
                  { context: state.context },
                  component
                ));
  
              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, undefined);
      })),
          _this = undefined;
      return function (_x, _x2) {
        return ref.apply(_this, arguments);
      };
    }());
  
    on('/contact', (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              return _context2.abrupt('return', _react2.default.createElement(_ContactPage2.default, null));
  
            case 1:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, undefined);
    })));
  
    on('/login', (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3() {
      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              return _context3.abrupt('return', _react2.default.createElement(_LoginPage2.default, null));
  
            case 1:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, undefined);
    })));
  
    on('/register', (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4() {
      return _regenerator2.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              return _context4.abrupt('return', _react2.default.createElement(_RegisterPage2.default, null));
  
            case 1:
            case 'end':
              return _context4.stop();
          }
        }
      }, _callee4, undefined);
    })));
  
    on('/', (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee5() {
      return _regenerator2.default.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              return _context5.abrupt('return', _react2.default.createElement(_ProfilePage2.default, null));
  
            case 1:
            case 'end':
              return _context5.stop();
          }
        }
      }, _callee5, undefined);
    })));
    on('/profile', (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee6() {
      return _regenerator2.default.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              return _context6.abrupt('return', _react2.default.createElement(_ProfilePage2.default, null));
  
            case 1:
            case 'end':
              return _context6.stop();
          }
        }
      }, _callee6, undefined);
    })));
  
    on('*', function () {
      var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee7(state) {
        var response, content;
        return _regenerator2.default.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return (0, _fetch2.default)('/api/content?path=' + state.path);
  
              case 2:
                response = _context7.sent;
                _context7.next = 5;
                return response.json();
  
              case 5:
                content = _context7.sent;
                return _context7.abrupt('return', response.ok && content && _react2.default.createElement(_ContentPage2.default, content));
  
              case 7:
              case 'end':
                return _context7.stop();
            }
          }
        }, _callee7, undefined);
      })),
          _this = undefined;
      return function (_x3) {
        return ref.apply(_this, arguments);
      };
    }());
  
    on('error', function (state, error) {
      return state.statusCode === 404 ? _react2.default.createElement(
        _App2.default,
        { context: state.context, error: error },
        _react2.default.createElement(_NotFoundPage2.default, null)
      ) : _react2.default.createElement(
        _App2.default,
        { context: state.context, error: error },
        _react2.default.createElement(_ErrorPage2.default, null)
      );
    });
  }); /**
       * React Starter Kit (https://www.reactstarterkit.com/)
       *
       * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE.txt file in the root directory of this source tree.
       */
  
  exports.default = router;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _slicedToArray2 = __webpack_require__(10);
  
  var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);
  
  var _regenerator = __webpack_require__(15);
  
  var _regenerator2 = _interopRequireDefault(_regenerator);
  
  var _getIterator2 = __webpack_require__(13);
  
  var _getIterator3 = _interopRequireDefault(_getIterator2);
  
  var _asyncToGenerator2 = __webpack_require__(29);
  
  var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
  
  var _create = __webpack_require__(22);
  
  var _create2 = _interopRequireDefault(_create);
  
  var _classCallCheck2 = __webpack_require__(30);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(31);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _Route = __webpack_require__(34);
  
  var _Route2 = _interopRequireDefault(_Route);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var emptyFunction = function emptyFunction() {}; /**
                                                    * React Routing | http://www.kriasoft.com/react-routing
                                                    * Copyright (c) Konstantin Tarkus <hello@tarkus.me> | The MIT License
                                                    */
  
  var Router = function () {
  
    /**
     * Creates a new instance of the `Router` class.
     */
  
    function Router(initialize) {
      (0, _classCallCheck3.default)(this, Router);
  
      this.routes = [];
      this.events = (0, _create2.default)(null);
  
      if (typeof initialize === 'function') {
        initialize(this.on.bind(this));
      }
    }
  
    /**
     * Adds a new route to the routing table or registers an event listener.
     *
     * @param {String} path A string in the Express format, an array of strings, or a regular expression.
     * @param {Function|Array} handlers Asynchronous route handler function(s).
     */
  
    (0, _createClass3.default)(Router, [{
      key: 'on',
      value: function on(path) {
        for (var _len = arguments.length, handlers = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          handlers[_key - 1] = arguments[_key];
        }
  
        if (path === 'error') {
          this.events[path] = handlers[0];
        } else {
          this.routes.push(new _Route2.default(path, handlers));
        }
      }
    }, {
      key: 'dispatch',
      value: function () {
        var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3(state, cb) {
          var next = function () {
            var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
              var _handlers$next;
  
              var _value, _value2, _match, _handler;
  
              return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      if (!((_handlers$next = handlers.next(), value = _handlers$next.value, done = _handlers$next.done, _handlers$next) && !done)) {
                        _context2.next = 16;
                        break;
                      }
  
                      _value = value;
                      _value2 = (0, _slicedToArray3.default)(_value, 2);
                      _match = _value2[0];
                      _handler = _value2[1];
  
                      state.params = _match.params;
  
                      if (!(_handler.length > 1)) {
                        _context2.next = 12;
                        break;
                      }
  
                      _context2.next = 9;
                      return _handler(state, next);
  
                    case 9:
                      _context2.t0 = _context2.sent;
                      _context2.next = 15;
                      break;
  
                    case 12:
                      _context2.next = 14;
                      return _handler(state);
  
                    case 14:
                      _context2.t0 = _context2.sent;
  
                    case 15:
                      return _context2.abrupt('return', _context2.t0);
  
                    case 16:
                    case 'end':
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
            return function next() {
              return ref.apply(this, arguments);
            };
          }();
  
          var routes, handlers, value, result, done;
          return _regenerator2.default.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  if (typeof state === 'string' || state instanceof String) {
                    state = { path: state };
                  }
                  cb = cb || emptyFunction;
                  routes = this.routes;
                  handlers = _regenerator2.default.mark(function _callee() {
                    var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, route, match, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, handler;
  
                    return _regenerator2.default.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            _iteratorNormalCompletion = true;
                            _didIteratorError = false;
                            _iteratorError = undefined;
                            _context.prev = 3;
                            _iterator = (0, _getIterator3.default)(routes);
  
                          case 5:
                            if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                              _context.next = 38;
                              break;
                            }
  
                            route = _step.value;
                            match = route.match(state.path);
  
                            if (!match) {
                              _context.next = 35;
                              break;
                            }
  
                            _iteratorNormalCompletion2 = true;
                            _didIteratorError2 = false;
                            _iteratorError2 = undefined;
                            _context.prev = 12;
                            _iterator2 = (0, _getIterator3.default)(match.route.handlers);
  
                          case 14:
                            if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
                              _context.next = 21;
                              break;
                            }
  
                            handler = _step2.value;
                            _context.next = 18;
                            return [match, handler];
  
                          case 18:
                            _iteratorNormalCompletion2 = true;
                            _context.next = 14;
                            break;
  
                          case 21:
                            _context.next = 27;
                            break;
  
                          case 23:
                            _context.prev = 23;
                            _context.t0 = _context['catch'](12);
                            _didIteratorError2 = true;
                            _iteratorError2 = _context.t0;
  
                          case 27:
                            _context.prev = 27;
                            _context.prev = 28;
  
                            if (!_iteratorNormalCompletion2 && _iterator2.return) {
                              _iterator2.return();
                            }
  
                          case 30:
                            _context.prev = 30;
  
                            if (!_didIteratorError2) {
                              _context.next = 33;
                              break;
                            }
  
                            throw _iteratorError2;
  
                          case 33:
                            return _context.finish(30);
  
                          case 34:
                            return _context.finish(27);
  
                          case 35:
                            _iteratorNormalCompletion = true;
                            _context.next = 5;
                            break;
  
                          case 38:
                            _context.next = 44;
                            break;
  
                          case 40:
                            _context.prev = 40;
                            _context.t1 = _context['catch'](3);
                            _didIteratorError = true;
                            _iteratorError = _context.t1;
  
                          case 44:
                            _context.prev = 44;
                            _context.prev = 45;
  
                            if (!_iteratorNormalCompletion && _iterator.return) {
                              _iterator.return();
                            }
  
                          case 47:
                            _context.prev = 47;
  
                            if (!_didIteratorError) {
                              _context.next = 50;
                              break;
                            }
  
                            throw _iteratorError;
  
                          case 50:
                            return _context.finish(47);
  
                          case 51:
                            return _context.finish(44);
  
                          case 52:
                          case 'end':
                            return _context.stop();
                        }
                      }
                    }, _callee, this, [[3, 40, 44, 52], [12, 23, 27, 35], [28,, 30, 34], [45,, 47, 51]]);
                  })();
                  value = undefined, result = undefined, done = false;
  
                case 5:
                  if (done) {
                    _context3.next = 15;
                    break;
                  }
  
                  _context3.next = 8;
                  return next();
  
                case 8:
                  result = _context3.sent;
  
                  if (!result) {
                    _context3.next = 13;
                    break;
                  }
  
                  state.statusCode = typeof state.statusCode === 'number' ? state.statusCode : 200;
                  cb(state, result);
                  return _context3.abrupt('return');
  
                case 13:
                  _context3.next = 5;
                  break;
  
                case 15:
                  if (!this.events.error) {
                    _context3.next = 31;
                    break;
                  }
  
                  _context3.prev = 16;
  
                  state.statusCode = 404;
                  _context3.next = 20;
                  return this.events.error(state, new Error('Cannot found a route matching \'' + state.path + '\'.'));
  
                case 20:
                  result = _context3.sent;
  
                  cb(state, result);
                  _context3.next = 31;
                  break;
  
                case 24:
                  _context3.prev = 24;
                  _context3.t0 = _context3['catch'](16);
  
                  state.statusCode = 500;
                  _context3.next = 29;
                  return this.events.error(state, _context3.t0);
  
                case 29:
                  result = _context3.sent;
  
                  cb(state, result);
  
                case 31:
                case 'end':
                  return _context3.stop();
              }
            }
          }, _callee3, this, [[16, 24]]);
        }));
        return function dispatch(_x, _x2) {
          return ref.apply(this, arguments);
        };
      }()
    }]);
    return Router;
  }();
  
  exports.default = Router;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

  "use strict";
  
  exports.__esModule = true;
  
  var _isIterable2 = __webpack_require__(11);
  
  var _isIterable3 = _interopRequireDefault(_isIterable2);
  
  var _getIterator2 = __webpack_require__(13);
  
  var _getIterator3 = _interopRequireDefault(_getIterator2);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  exports.default = function () {
    function sliceIterator(arr, i) {
      var _arr = [];
      var _n = true;
      var _d = false;
      var _e = undefined;
  
      try {
        for (var _i = (0, _getIterator3.default)(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);
  
          if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"]) _i["return"]();
        } finally {
          if (_d) throw _e;
        }
      }
  
      return _arr;
    }
  
    return function (arr, i) {
      if (Array.isArray(arr)) {
        return arr;
      } else if ((0, _isIterable3.default)(Object(arr))) {
        return sliceIterator(arr, i);
      } else {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }
    };
  }();

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = { "default": __webpack_require__(12), __esModule: true };

/***/ },
/* 12 */
/***/ function(module, exports) {

  module.exports = require("core-js/library/fn/is-iterable");

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = { "default": __webpack_require__(14), __esModule: true };

/***/ },
/* 14 */
/***/ function(module, exports) {

  module.exports = require("core-js/library/fn/get-iterator");

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

  // This method of obtaining a reference to the global object needs to be
  // kept identical to the way it is obtained in runtime.js
  var g =
    typeof global === "object" ? global :
    typeof window === "object" ? window :
    typeof self === "object" ? self : this;
  
  // Use `getOwnPropertyNames` because not all browsers support calling
  // `hasOwnProperty` on the global `self` object in a worker. See #183.
  var hadRuntime = g.regeneratorRuntime &&
    Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;
  
  // Save the old regeneratorRuntime in case it needs to be restored later.
  var oldRuntime = hadRuntime && g.regeneratorRuntime;
  
  // Force reevalutation of runtime.js.
  g.regeneratorRuntime = undefined;
  
  module.exports = __webpack_require__(16);
  
  if (hadRuntime) {
    // Restore the original runtime.
    g.regeneratorRuntime = oldRuntime;
  } else {
    // Remove the global property added by runtime.js.
    try {
      delete g.regeneratorRuntime;
    } catch(e) {
      g.regeneratorRuntime = undefined;
    }
  }
  
  module.exports = { "default": module.exports, __esModule: true };


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

  /* WEBPACK VAR INJECTION */(function(module) {"use strict";
  
  var _promise = __webpack_require__(18);
  
  var _promise2 = _interopRequireDefault(_promise);
  
  var _setPrototypeOf = __webpack_require__(20);
  
  var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);
  
  var _create = __webpack_require__(22);
  
  var _create2 = _interopRequireDefault(_create);
  
  var _typeof2 = __webpack_require__(24);
  
  var _typeof3 = _interopRequireDefault(_typeof2);
  
  var _iterator = __webpack_require__(25);
  
  var _iterator2 = _interopRequireDefault(_iterator);
  
  var _symbol = __webpack_require__(27);
  
  var _symbol2 = _interopRequireDefault(_symbol);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  /**
   * Copyright (c) 2014, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
   * additional grant of patent rights can be found in the PATENTS file in
   * the same directory.
   */
  
  !function (global) {
    "use strict";
  
    var hasOwn = Object.prototype.hasOwnProperty;
    var undefined; // More compressible than void 0.
    var iteratorSymbol = typeof _symbol2.default === "function" && _iterator2.default || "@@iterator";
  
    var inModule = ( false ? "undefined" : (0, _typeof3.default)(module)) === "object";
    var runtime = global.regeneratorRuntime;
    if (runtime) {
      if (inModule) {
        // If regeneratorRuntime is defined globally and we're in a module,
        // make the exports object identical to regeneratorRuntime.
        module.exports = runtime;
      }
      // Don't bother evaluating the rest of this file if the runtime was
      // already defined globally.
      return;
    }
  
    // Define the runtime globally (as expected by generated code) as either
    // module.exports (if we're in a module) or a new, empty object.
    runtime = global.regeneratorRuntime = inModule ? module.exports : {};
  
    function wrap(innerFn, outerFn, self, tryLocsList) {
      // If outerFn provided, then outerFn.prototype instanceof Generator.
      var generator = (0, _create2.default)((outerFn || Generator).prototype);
      var context = new Context(tryLocsList || []);
  
      // The ._invoke method unifies the implementations of the .next,
      // .throw, and .return methods.
      generator._invoke = makeInvokeMethod(innerFn, self, context);
  
      return generator;
    }
    runtime.wrap = wrap;
  
    // Try/catch helper to minimize deoptimizations. Returns a completion
    // record like context.tryEntries[i].completion. This interface could
    // have been (and was previously) designed to take a closure to be
    // invoked without arguments, but in all the cases we care about we
    // already have an existing method we want to call, so there's no need
    // to create a new function object. We can even get away with assuming
    // the method takes exactly one argument, since that happens to be true
    // in every case, so we don't have to touch the arguments object. The
    // only additional allocation required is the completion record, which
    // has a stable shape and so hopefully should be cheap to allocate.
    function tryCatch(fn, obj, arg) {
      try {
        return { type: "normal", arg: fn.call(obj, arg) };
      } catch (err) {
        return { type: "throw", arg: err };
      }
    }
  
    var GenStateSuspendedStart = "suspendedStart";
    var GenStateSuspendedYield = "suspendedYield";
    var GenStateExecuting = "executing";
    var GenStateCompleted = "completed";
  
    // Returning this object from the innerFn has the same effect as
    // breaking out of the dispatch switch statement.
    var ContinueSentinel = {};
  
    // Dummy constructor functions that we use as the .constructor and
    // .constructor.prototype properties for functions that return Generator
    // objects. For full spec compliance, you may wish to configure your
    // minifier not to mangle the names of these two functions.
    function Generator() {}
    function GeneratorFunction() {}
    function GeneratorFunctionPrototype() {}
  
    var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype;
    GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
    GeneratorFunctionPrototype.constructor = GeneratorFunction;
    GeneratorFunction.displayName = "GeneratorFunction";
  
    // Helper for defining the .next, .throw, and .return methods of the
    // Iterator interface in terms of a single ._invoke method.
    function defineIteratorMethods(prototype) {
      ["next", "throw", "return"].forEach(function (method) {
        prototype[method] = function (arg) {
          return this._invoke(method, arg);
        };
      });
    }
  
    runtime.isGeneratorFunction = function (genFun) {
      var ctor = typeof genFun === "function" && genFun.constructor;
      return ctor ? ctor === GeneratorFunction ||
      // For the native GeneratorFunction constructor, the best we can
      // do is to check its .name property.
      (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
    };
  
    runtime.mark = function (genFun) {
      if (_setPrototypeOf2.default) {
        (0, _setPrototypeOf2.default)(genFun, GeneratorFunctionPrototype);
      } else {
        genFun.__proto__ = GeneratorFunctionPrototype;
      }
      genFun.prototype = (0, _create2.default)(Gp);
      return genFun;
    };
  
    // Within the body of any async function, `await x` is transformed to
    // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
    // `value instanceof AwaitArgument` to determine if the yielded value is
    // meant to be awaited. Some may consider the name of this method too
    // cutesy, but they are curmudgeons.
    runtime.awrap = function (arg) {
      return new AwaitArgument(arg);
    };
  
    function AwaitArgument(arg) {
      this.arg = arg;
    }
  
    function AsyncIterator(generator) {
      // This invoke function is written in a style that assumes some
      // calling function (or Promise) will handle exceptions.
      function invoke(method, arg) {
        var result = generator[method](arg);
        var value = result.value;
        return value instanceof AwaitArgument ? _promise2.default.resolve(value.arg).then(invokeNext, invokeThrow) : _promise2.default.resolve(value).then(function (unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          return result;
        });
      }
  
      if ((typeof process === "undefined" ? "undefined" : (0, _typeof3.default)(process)) === "object" && process.domain) {
        invoke = process.domain.bind(invoke);
      }
  
      var invokeNext = invoke.bind(generator, "next");
      var invokeThrow = invoke.bind(generator, "throw");
      var invokeReturn = invoke.bind(generator, "return");
      var previousPromise;
  
      function enqueue(method, arg) {
        function callInvokeWithMethodAndArg() {
          return invoke(method, arg);
        }
  
        return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(callInvokeWithMethodAndArg,
        // Avoid propagating failures to Promises returned by later
        // invocations of the iterator.
        callInvokeWithMethodAndArg) : new _promise2.default(function (resolve) {
          resolve(callInvokeWithMethodAndArg());
        });
      }
  
      // Define the unified helper method that is used to implement .next,
      // .throw, and .return (see defineIteratorMethods).
      this._invoke = enqueue;
    }
  
    defineIteratorMethods(AsyncIterator.prototype);
  
    // Note that simple async functions are implemented on top of
    // AsyncIterator objects; they just return a Promise for the value of
    // the final result produced by the iterator.
    runtime.async = function (innerFn, outerFn, self, tryLocsList) {
      var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList));
  
      return runtime.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function (result) {
        return result.done ? result.value : iter.next();
      });
    };
  
    function makeInvokeMethod(innerFn, self, context) {
      var state = GenStateSuspendedStart;
  
      return function invoke(method, arg) {
        if (state === GenStateExecuting) {
          throw new Error("Generator is already running");
        }
  
        if (state === GenStateCompleted) {
          if (method === "throw") {
            throw arg;
          }
  
          // Be forgiving, per 25.3.3.3.3 of the spec:
          // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
          return doneResult();
        }
  
        while (true) {
          var delegate = context.delegate;
          if (delegate) {
            if (method === "return" || method === "throw" && delegate.iterator[method] === undefined) {
              // A return or throw (when the delegate iterator has no throw
              // method) always terminates the yield* loop.
              context.delegate = null;
  
              // If the delegate iterator has a return method, give it a
              // chance to clean up.
              var returnMethod = delegate.iterator["return"];
              if (returnMethod) {
                var record = tryCatch(returnMethod, delegate.iterator, arg);
                if (record.type === "throw") {
                  // If the return method threw an exception, let that
                  // exception prevail over the original return or throw.
                  method = "throw";
                  arg = record.arg;
                  continue;
                }
              }
  
              if (method === "return") {
                // Continue with the outer return, now that the delegate
                // iterator has been terminated.
                continue;
              }
            }
  
            var record = tryCatch(delegate.iterator[method], delegate.iterator, arg);
  
            if (record.type === "throw") {
              context.delegate = null;
  
              // Like returning generator.throw(uncaught), but without the
              // overhead of an extra function call.
              method = "throw";
              arg = record.arg;
              continue;
            }
  
            // Delegate generator ran and handled its own exceptions so
            // regardless of what the method was, we continue as if it is
            // "next" with an undefined arg.
            method = "next";
            arg = undefined;
  
            var info = record.arg;
            if (info.done) {
              context[delegate.resultName] = info.value;
              context.next = delegate.nextLoc;
            } else {
              state = GenStateSuspendedYield;
              return info;
            }
  
            context.delegate = null;
          }
  
          if (method === "next") {
            context._sent = arg;
  
            if (state === GenStateSuspendedYield) {
              context.sent = arg;
            } else {
              context.sent = undefined;
            }
          } else if (method === "throw") {
            if (state === GenStateSuspendedStart) {
              state = GenStateCompleted;
              throw arg;
            }
  
            if (context.dispatchException(arg)) {
              // If the dispatched exception was caught by a catch block,
              // then let that catch block handle the exception normally.
              method = "next";
              arg = undefined;
            }
          } else if (method === "return") {
            context.abrupt("return", arg);
          }
  
          state = GenStateExecuting;
  
          var record = tryCatch(innerFn, self, context);
          if (record.type === "normal") {
            // If an exception is thrown from innerFn, we leave state ===
            // GenStateExecuting and loop back for another invocation.
            state = context.done ? GenStateCompleted : GenStateSuspendedYield;
  
            var info = {
              value: record.arg,
              done: context.done
            };
  
            if (record.arg === ContinueSentinel) {
              if (context.delegate && method === "next") {
                // Deliberately forget the last sent value so that we don't
                // accidentally pass it on to the delegate.
                arg = undefined;
              }
            } else {
              return info;
            }
          } else if (record.type === "throw") {
            state = GenStateCompleted;
            // Dispatch the exception by looping back around to the
            // context.dispatchException(arg) call above.
            method = "throw";
            arg = record.arg;
          }
        }
      };
    }
  
    // Define Generator.prototype.{next,throw,return} in terms of the
    // unified ._invoke helper method.
    defineIteratorMethods(Gp);
  
    Gp[iteratorSymbol] = function () {
      return this;
    };
  
    Gp.toString = function () {
      return "[object Generator]";
    };
  
    function pushTryEntry(locs) {
      var entry = { tryLoc: locs[0] };
  
      if (1 in locs) {
        entry.catchLoc = locs[1];
      }
  
      if (2 in locs) {
        entry.finallyLoc = locs[2];
        entry.afterLoc = locs[3];
      }
  
      this.tryEntries.push(entry);
    }
  
    function resetTryEntry(entry) {
      var record = entry.completion || {};
      record.type = "normal";
      delete record.arg;
      entry.completion = record;
    }
  
    function Context(tryLocsList) {
      // The root entry object (effectively a try statement without a catch
      // or a finally block) gives us a place to store values thrown from
      // locations where there is no enclosing try statement.
      this.tryEntries = [{ tryLoc: "root" }];
      tryLocsList.forEach(pushTryEntry, this);
      this.reset(true);
    }
  
    runtime.keys = function (object) {
      var keys = [];
      for (var key in object) {
        keys.push(key);
      }
      keys.reverse();
  
      // Rather than returning an object with a next method, we keep
      // things simple and return the next function itself.
      return function next() {
        while (keys.length) {
          var key = keys.pop();
          if (key in object) {
            next.value = key;
            next.done = false;
            return next;
          }
        }
  
        // To avoid creating an additional object, we just hang the .value
        // and .done properties off the next function object itself. This
        // also ensures that the minifier will not anonymize the function.
        next.done = true;
        return next;
      };
    };
  
    function values(iterable) {
      if (iterable) {
        var iteratorMethod = iterable[iteratorSymbol];
        if (iteratorMethod) {
          return iteratorMethod.call(iterable);
        }
  
        if (typeof iterable.next === "function") {
          return iterable;
        }
  
        if (!isNaN(iterable.length)) {
          var i = -1,
              next = function next() {
            while (++i < iterable.length) {
              if (hasOwn.call(iterable, i)) {
                next.value = iterable[i];
                next.done = false;
                return next;
              }
            }
  
            next.value = undefined;
            next.done = true;
  
            return next;
          };
  
          return next.next = next;
        }
      }
  
      // Return an iterator with no values.
      return { next: doneResult };
    }
    runtime.values = values;
  
    function doneResult() {
      return { value: undefined, done: true };
    }
  
    Context.prototype = {
      constructor: Context,
  
      reset: function reset(skipTempReset) {
        this.prev = 0;
        this.next = 0;
        this.sent = undefined;
        this.done = false;
        this.delegate = null;
  
        this.tryEntries.forEach(resetTryEntry);
  
        if (!skipTempReset) {
          for (var name in this) {
            // Not sure about the optimal order of these conditions:
            if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
              this[name] = undefined;
            }
          }
        }
      },
  
      stop: function stop() {
        this.done = true;
  
        var rootEntry = this.tryEntries[0];
        var rootRecord = rootEntry.completion;
        if (rootRecord.type === "throw") {
          throw rootRecord.arg;
        }
  
        return this.rval;
      },
  
      dispatchException: function dispatchException(exception) {
        if (this.done) {
          throw exception;
        }
  
        var context = this;
        function handle(loc, caught) {
          record.type = "throw";
          record.arg = exception;
          context.next = loc;
          return !!caught;
        }
  
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          var record = entry.completion;
  
          if (entry.tryLoc === "root") {
            // Exception thrown outside of any try block that could handle
            // it, so set the completion value of the entire function to
            // throw the exception.
            return handle("end");
          }
  
          if (entry.tryLoc <= this.prev) {
            var hasCatch = hasOwn.call(entry, "catchLoc");
            var hasFinally = hasOwn.call(entry, "finallyLoc");
  
            if (hasCatch && hasFinally) {
              if (this.prev < entry.catchLoc) {
                return handle(entry.catchLoc, true);
              } else if (this.prev < entry.finallyLoc) {
                return handle(entry.finallyLoc);
              }
            } else if (hasCatch) {
              if (this.prev < entry.catchLoc) {
                return handle(entry.catchLoc, true);
              }
            } else if (hasFinally) {
              if (this.prev < entry.finallyLoc) {
                return handle(entry.finallyLoc);
              }
            } else {
              throw new Error("try statement without catch or finally");
            }
          }
        }
      },
  
      abrupt: function abrupt(type, arg) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
            var finallyEntry = entry;
            break;
          }
        }
  
        if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
          // Ignore the finally entry if control is not jumping to a
          // location outside the try/catch block.
          finallyEntry = null;
        }
  
        var record = finallyEntry ? finallyEntry.completion : {};
        record.type = type;
        record.arg = arg;
  
        if (finallyEntry) {
          this.next = finallyEntry.finallyLoc;
        } else {
          this.complete(record);
        }
  
        return ContinueSentinel;
      },
  
      complete: function complete(record, afterLoc) {
        if (record.type === "throw") {
          throw record.arg;
        }
  
        if (record.type === "break" || record.type === "continue") {
          this.next = record.arg;
        } else if (record.type === "return") {
          this.rval = record.arg;
          this.next = "end";
        } else if (record.type === "normal" && afterLoc) {
          this.next = afterLoc;
        }
      },
  
      finish: function finish(finallyLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.finallyLoc === finallyLoc) {
            this.complete(entry.completion, entry.afterLoc);
            resetTryEntry(entry);
            return ContinueSentinel;
          }
        }
      },
  
      "catch": function _catch(tryLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.tryLoc === tryLoc) {
            var record = entry.completion;
            if (record.type === "throw") {
              var thrown = record.arg;
              resetTryEntry(entry);
            }
            return thrown;
          }
        }
  
        // The context.catch method must only be called with a location
        // argument that corresponds to a known catch block.
        throw new Error("illegal catch attempt");
      },
  
      delegateYield: function delegateYield(iterable, resultName, nextLoc) {
        this.delegate = {
          iterator: values(iterable),
          resultName: resultName,
          nextLoc: nextLoc
        };
  
        return ContinueSentinel;
      }
    };
  }(
  // Among the various tricks for obtaining a reference to the global
  // object, this seems to be the most reliable technique that does not
  // use indirect eval (which violates Content Security Policy).
  (typeof global === "undefined" ? "undefined" : (0, _typeof3.default)(global)) === "object" ? global : (typeof window === "undefined" ? "undefined" : (0, _typeof3.default)(window)) === "object" ? window : (typeof self === "undefined" ? "undefined" : (0, _typeof3.default)(self)) === "object" ? self : undefined);
  /* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(17)(module)))

/***/ },
/* 17 */
/***/ function(module, exports) {

  module.exports = function(module) {
  	if(!module.webpackPolyfill) {
  		module.deprecate = function() {};
  		module.paths = [];
  		// module.parent = undefined by default
  		module.children = [];
  		module.webpackPolyfill = 1;
  	}
  	return module;
  }


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = { "default": __webpack_require__(19), __esModule: true };

/***/ },
/* 19 */
/***/ function(module, exports) {

  module.exports = require("core-js/library/fn/promise");

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = { "default": __webpack_require__(21), __esModule: true };

/***/ },
/* 21 */
/***/ function(module, exports) {

  module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = { "default": __webpack_require__(23), __esModule: true };

/***/ },
/* 23 */
/***/ function(module, exports) {

  module.exports = require("core-js/library/fn/object/create");

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

  "use strict";
  
  var _typeof = typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol ? "symbol" : typeof obj; };
  
  exports.__esModule = true;
  
  var _iterator = __webpack_require__(25);
  
  var _iterator2 = _interopRequireDefault(_iterator);
  
  var _symbol = __webpack_require__(27);
  
  var _symbol2 = _interopRequireDefault(_symbol);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
    return typeof obj === "undefined" ? "undefined" : _typeof(obj);
  } : function (obj) {
    return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
  };

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = { "default": __webpack_require__(26), __esModule: true };

/***/ },
/* 26 */
/***/ function(module, exports) {

  module.exports = require("core-js/library/fn/symbol/iterator");

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = { "default": __webpack_require__(28), __esModule: true };

/***/ },
/* 28 */
/***/ function(module, exports) {

  module.exports = require("core-js/library/fn/symbol");

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

  "use strict";
  
  exports.__esModule = true;
  
  var _promise = __webpack_require__(18);
  
  var _promise2 = _interopRequireDefault(_promise);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  exports.default = function (fn) {
    return function () {
      var gen = fn.apply(this, arguments);
      return new _promise2.default(function (resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }
  
          if (info.done) {
            resolve(value);
          } else {
            _promise2.default.resolve(value).then(function (value) {
              step("next", value);
            }, function (err) {
              step("throw", err);
            });
          }
        }
  
        step("next");
      });
    };
  };

/***/ },
/* 30 */
/***/ function(module, exports) {

  "use strict";
  
  exports.__esModule = true;
  
  exports.default = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

  "use strict";
  
  exports.__esModule = true;
  
  var _defineProperty = __webpack_require__(32);
  
  var _defineProperty2 = _interopRequireDefault(_defineProperty);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  exports.default = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        (0, _defineProperty2.default)(target, descriptor.key, descriptor);
      }
    }
  
    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = { "default": __webpack_require__(33), __esModule: true };

/***/ },
/* 33 */
/***/ function(module, exports) {

  module.exports = require("core-js/library/fn/object/define-property");

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _classCallCheck2 = __webpack_require__(30);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(31);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _pathToRegexp = __webpack_require__(35);
  
  var _pathToRegexp2 = _interopRequireDefault(_pathToRegexp);
  
  var _Match = __webpack_require__(37);
  
  var _Match2 = _interopRequireDefault(_Match);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  /**
   * React Routing | http://www.kriasoft.com/react-routing
   * Copyright (c) Konstantin Tarkus <hello@tarkus.me> | The MIT License
   */
  
  var Route = function () {
    function Route(path, handlers) {
      (0, _classCallCheck3.default)(this, Route);
  
      this.path = path;
      this.handlers = handlers;
      this.regExp = (0, _pathToRegexp2.default)(path, this.keys = []);
    }
  
    (0, _createClass3.default)(Route, [{
      key: 'match',
      value: function match(path) {
        var m = this.regExp.exec(path);
        return m ? new _Match2.default(this, path, this.keys, m) : null;
      }
    }]);
    return Route;
  }();
  
  exports.default = Route;

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

  var isarray = __webpack_require__(36)
  
  /**
   * Expose `pathToRegexp`.
   */
  module.exports = pathToRegexp
  module.exports.parse = parse
  module.exports.compile = compile
  module.exports.tokensToFunction = tokensToFunction
  module.exports.tokensToRegExp = tokensToRegExp
  
  /**
   * The main path matching regexp utility.
   *
   * @type {RegExp}
   */
  var PATH_REGEXP = new RegExp([
    // Match escaped characters that would otherwise appear in future matches.
    // This allows the user to escape special characters that won't transform.
    '(\\\\.)',
    // Match Express-style parameters and un-named parameters with a prefix
    // and optional suffixes. Matches appear as:
    //
    // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
    // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
    // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
    '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^()])+)\\))?|\\(((?:\\\\.|[^()])+)\\))([+*?])?|(\\*))'
  ].join('|'), 'g')
  
  /**
   * Parse a string for the raw tokens.
   *
   * @param  {String} str
   * @return {Array}
   */
  function parse (str) {
    var tokens = []
    var key = 0
    var index = 0
    var path = ''
    var res
  
    while ((res = PATH_REGEXP.exec(str)) != null) {
      var m = res[0]
      var escaped = res[1]
      var offset = res.index
      path += str.slice(index, offset)
      index = offset + m.length
  
      // Ignore already escaped sequences.
      if (escaped) {
        path += escaped[1]
        continue
      }
  
      // Push the current path onto the tokens.
      if (path) {
        tokens.push(path)
        path = ''
      }
  
      var prefix = res[2]
      var name = res[3]
      var capture = res[4]
      var group = res[5]
      var suffix = res[6]
      var asterisk = res[7]
  
      var repeat = suffix === '+' || suffix === '*'
      var optional = suffix === '?' || suffix === '*'
      var delimiter = prefix || '/'
      var pattern = capture || group || (asterisk ? '.*' : '[^' + delimiter + ']+?')
  
      tokens.push({
        name: name || key++,
        prefix: prefix || '',
        delimiter: delimiter,
        optional: optional,
        repeat: repeat,
        pattern: escapeGroup(pattern)
      })
    }
  
    // Match any characters still remaining.
    if (index < str.length) {
      path += str.substr(index)
    }
  
    // If the path exists, push it onto the end.
    if (path) {
      tokens.push(path)
    }
  
    return tokens
  }
  
  /**
   * Compile a string to a template function for the path.
   *
   * @param  {String}   str
   * @return {Function}
   */
  function compile (str) {
    return tokensToFunction(parse(str))
  }
  
  /**
   * Expose a method for transforming tokens into the path function.
   */
  function tokensToFunction (tokens) {
    // Compile all the tokens into regexps.
    var matches = new Array(tokens.length)
  
    // Compile all the patterns before compilation.
    for (var i = 0; i < tokens.length; i++) {
      if (typeof tokens[i] === 'object') {
        matches[i] = new RegExp('^' + tokens[i].pattern + '$')
      }
    }
  
    return function (obj) {
      var path = ''
      var data = obj || {}
  
      for (var i = 0; i < tokens.length; i++) {
        var token = tokens[i]
  
        if (typeof token === 'string') {
          path += token
  
          continue
        }
  
        var value = data[token.name]
        var segment
  
        if (value == null) {
          if (token.optional) {
            continue
          } else {
            throw new TypeError('Expected "' + token.name + '" to be defined')
          }
        }
  
        if (isarray(value)) {
          if (!token.repeat) {
            throw new TypeError('Expected "' + token.name + '" to not repeat, but received "' + value + '"')
          }
  
          if (value.length === 0) {
            if (token.optional) {
              continue
            } else {
              throw new TypeError('Expected "' + token.name + '" to not be empty')
            }
          }
  
          for (var j = 0; j < value.length; j++) {
            segment = encodeURIComponent(value[j])
  
            if (!matches[i].test(segment)) {
              throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
            }
  
            path += (j === 0 ? token.prefix : token.delimiter) + segment
          }
  
          continue
        }
  
        segment = encodeURIComponent(value)
  
        if (!matches[i].test(segment)) {
          throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
        }
  
        path += token.prefix + segment
      }
  
      return path
    }
  }
  
  /**
   * Escape a regular expression string.
   *
   * @param  {String} str
   * @return {String}
   */
  function escapeString (str) {
    return str.replace(/([.+*?=^!:${}()[\]|\/])/g, '\\$1')
  }
  
  /**
   * Escape the capturing group by escaping special characters and meaning.
   *
   * @param  {String} group
   * @return {String}
   */
  function escapeGroup (group) {
    return group.replace(/([=!:$\/()])/g, '\\$1')
  }
  
  /**
   * Attach the keys as a property of the regexp.
   *
   * @param  {RegExp} re
   * @param  {Array}  keys
   * @return {RegExp}
   */
  function attachKeys (re, keys) {
    re.keys = keys
    return re
  }
  
  /**
   * Get the flags for a regexp from the options.
   *
   * @param  {Object} options
   * @return {String}
   */
  function flags (options) {
    return options.sensitive ? '' : 'i'
  }
  
  /**
   * Pull out keys from a regexp.
   *
   * @param  {RegExp} path
   * @param  {Array}  keys
   * @return {RegExp}
   */
  function regexpToRegexp (path, keys) {
    // Use a negative lookahead to match only capturing groups.
    var groups = path.source.match(/\((?!\?)/g)
  
    if (groups) {
      for (var i = 0; i < groups.length; i++) {
        keys.push({
          name: i,
          prefix: null,
          delimiter: null,
          optional: false,
          repeat: false,
          pattern: null
        })
      }
    }
  
    return attachKeys(path, keys)
  }
  
  /**
   * Transform an array into a regexp.
   *
   * @param  {Array}  path
   * @param  {Array}  keys
   * @param  {Object} options
   * @return {RegExp}
   */
  function arrayToRegexp (path, keys, options) {
    var parts = []
  
    for (var i = 0; i < path.length; i++) {
      parts.push(pathToRegexp(path[i], keys, options).source)
    }
  
    var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options))
  
    return attachKeys(regexp, keys)
  }
  
  /**
   * Create a path regexp from string input.
   *
   * @param  {String} path
   * @param  {Array}  keys
   * @param  {Object} options
   * @return {RegExp}
   */
  function stringToRegexp (path, keys, options) {
    var tokens = parse(path)
    var re = tokensToRegExp(tokens, options)
  
    // Attach keys back to the regexp.
    for (var i = 0; i < tokens.length; i++) {
      if (typeof tokens[i] !== 'string') {
        keys.push(tokens[i])
      }
    }
  
    return attachKeys(re, keys)
  }
  
  /**
   * Expose a function for taking tokens and returning a RegExp.
   *
   * @param  {Array}  tokens
   * @param  {Array}  keys
   * @param  {Object} options
   * @return {RegExp}
   */
  function tokensToRegExp (tokens, options) {
    options = options || {}
  
    var strict = options.strict
    var end = options.end !== false
    var route = ''
    var lastToken = tokens[tokens.length - 1]
    var endsWithSlash = typeof lastToken === 'string' && /\/$/.test(lastToken)
  
    // Iterate over the tokens and create our regexp string.
    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i]
  
      if (typeof token === 'string') {
        route += escapeString(token)
      } else {
        var prefix = escapeString(token.prefix)
        var capture = token.pattern
  
        if (token.repeat) {
          capture += '(?:' + prefix + capture + ')*'
        }
  
        if (token.optional) {
          if (prefix) {
            capture = '(?:' + prefix + '(' + capture + '))?'
          } else {
            capture = '(' + capture + ')?'
          }
        } else {
          capture = prefix + '(' + capture + ')'
        }
  
        route += capture
      }
    }
  
    // In non-strict mode we allow a slash at the end of match. If the path to
    // match already ends with a slash, we remove it for consistency. The slash
    // is valid at the end of a path match, not in the middle. This is important
    // in non-ending mode, where "/test/" shouldn't match "/test//route".
    if (!strict) {
      route = (endsWithSlash ? route.slice(0, -2) : route) + '(?:\\/(?=$))?'
    }
  
    if (end) {
      route += '$'
    } else {
      // In non-ending mode, we need the capturing groups to match as much as
      // possible by using a positive lookahead to the end or next path segment.
      route += strict && endsWithSlash ? '' : '(?=\\/|$)'
    }
  
    return new RegExp('^' + route, flags(options))
  }
  
  /**
   * Normalize the given path string, returning a regular expression.
   *
   * An empty array can be passed in for the keys, which will hold the
   * placeholder key descriptions. For example, using `/user/:id`, `keys` will
   * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
   *
   * @param  {(String|RegExp|Array)} path
   * @param  {Array}                 [keys]
   * @param  {Object}                [options]
   * @return {RegExp}
   */
  function pathToRegexp (path, keys, options) {
    keys = keys || []
  
    if (!isarray(keys)) {
      options = keys
      keys = []
    } else if (!options) {
      options = {}
    }
  
    if (path instanceof RegExp) {
      return regexpToRegexp(path, keys, options)
    }
  
    if (isarray(path)) {
      return arrayToRegexp(path, keys, options)
    }
  
    return stringToRegexp(path, keys, options)
  }


/***/ },
/* 36 */
/***/ function(module, exports) {

  module.exports = Array.isArray || function (arr) {
    return Object.prototype.toString.call(arr) == '[object Array]';
  };


/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _create = __webpack_require__(22);
  
  var _create2 = _interopRequireDefault(_create);
  
  var _classCallCheck2 = __webpack_require__(30);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  /**
   * React Routing | http://www.kriasoft.com/react-routing
   * Copyright (c) Konstantin Tarkus <hello@tarkus.me> | The MIT License
   */
  
  var Match = function Match(route, path, keys, match) {
    (0, _classCallCheck3.default)(this, Match);
  
    this.route = route;
    this.path = path;
    this.params = (0, _create2.default)(null);
    for (var i = 1; i < match.length; i++) {
      this.params[keys[i - 1].name] = decodeParam(match[i]);
    }
  };
  
  function decodeParam(val) {
    if (!(typeof val === 'string' || val instanceof String)) {
      return val;
    }
  
    try {
      return decodeURIComponent(val);
    } catch (e) {
      var err = new TypeError('Failed to decode param \'' + val + '\'');
      err.status = 400;
      throw err;
    }
  }
  
  exports.default = Match;

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Response = exports.Headers = exports.Request = exports.default = undefined;
  
  var _nodeFetch = __webpack_require__(39);
  
  var _nodeFetch2 = _interopRequireDefault(_nodeFetch);
  
  var _config = __webpack_require__(40);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  function localUrl(url) {
    if (url.startsWith('//')) {
      return 'https:' + url;
    }
  
    if (url.startsWith('http')) {
      return url;
    }
  
    return 'http://' + _config.host + url;
  }
  
  function localFetch(url, options) {
    return (0, _nodeFetch2.default)(localUrl(url), options);
  }
  
  exports.default = localFetch;
  exports.Request = _nodeFetch.Request;
  exports.Headers = _nodeFetch.Headers;
  exports.Response = _nodeFetch.Response;

/***/ },
/* 39 */
/***/ function(module, exports) {

  module.exports = require("node-fetch");

/***/ },
/* 40 */
/***/ function(module, exports) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  var port = exports.port = process.env.PORT || 5000;
  var host = exports.host = process.env.WEBSITE_HOSTNAME || 'localhost:' + port;
  var googleAnalyticsId = exports.googleAnalyticsId = 'UA-XXXXX-X';

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _getPrototypeOf = __webpack_require__(42);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(43);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(44);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(45);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(46);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(6);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _emptyFunction = __webpack_require__(47);
  
  var _emptyFunction2 = _interopRequireDefault(_emptyFunction);
  
  var _App = __webpack_require__(48);
  
  var _App2 = _interopRequireDefault(_App);
  
  var _Header = __webpack_require__(56);
  
  var _Header2 = _interopRequireDefault(_Header);
  
  var _Footer = __webpack_require__(74);
  
  var _Footer2 = _interopRequireDefault(_Footer);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var App = function (_Component) {
    (0, _inherits3.default)(App, _Component);
  
    function App() {
      (0, _classCallCheck3.default)(this, App);
      return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(App).apply(this, arguments));
    }
  
    (0, _createClass3.default)(App, [{
      key: 'getChildContext',
      value: function getChildContext() {
        var context = this.props.context;
        return {
          insertCss: context.insertCss || _emptyFunction2.default,
          onSetTitle: context.onSetTitle || _emptyFunction2.default,
          onSetMeta: context.onSetMeta || _emptyFunction2.default,
          onPageNotFound: context.onPageNotFound || _emptyFunction2.default
        };
      }
    }, {
      key: 'componentWillMount',
      value: function componentWillMount() {
        this.removeCss = this.props.context.insertCss(_App2.default);
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this.removeCss();
      }
    }, {
      key: 'render',
      value: function render() {
        return !this.props.error ? _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(_Header2.default, null),
          this.props.children,
          _react2.default.createElement(_Footer2.default, null)
        ) : this.props.children;
      }
    }]);
    return App;
  }(_react.Component); /**
                        * React Starter Kit (https://www.reactstarterkit.com/)
                        *
                        * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                        *
                        * This source code is licensed under the MIT license found in the
                        * LICENSE.txt file in the root directory of this source tree.
                        */
  
  App.propTypes = {
    context: _react.PropTypes.shape({
      insertCss: _react.PropTypes.func,
      onSetTitle: _react.PropTypes.func,
      onSetMeta: _react.PropTypes.func,
      onPageNotFound: _react.PropTypes.func
    }),
    children: _react.PropTypes.element.isRequired,
    error: _react.PropTypes.object
  };
  App.childContextTypes = {
    insertCss: _react.PropTypes.func.isRequired,
    onSetTitle: _react.PropTypes.func.isRequired,
    onSetMeta: _react.PropTypes.func.isRequired,
    onPageNotFound: _react.PropTypes.func.isRequired
  };
  exports.default = App;

/***/ },
/* 42 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/core-js/object/get-prototype-of");

/***/ },
/* 43 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/helpers/classCallCheck");

/***/ },
/* 44 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/helpers/createClass");

/***/ },
/* 45 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/helpers/possibleConstructorReturn");

/***/ },
/* 46 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/helpers/inherits");

/***/ },
/* 47 */
/***/ function(module, exports) {

  module.exports = require("fbjs/lib/emptyFunction");

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(49);
      var insertCss = __webpack_require__(51);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = insertCss.bind(null, content);
    
      var removeCss = function() {};
  
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      if (false) {
        module.hot.accept("!!./../../../node_modules/css-loader/index.js?sourceMap&modules&localIdentName=[name]_[local]_[hash:base64:3]!./../../../node_modules/postcss-loader/index.js?parser=postcss-scss!./App.scss", function() {
          var newContent = require("!!./../../../node_modules/css-loader/index.js?sourceMap&modules&localIdentName=[name]_[local]_[hash:base64:3]!./../../../node_modules/postcss-loader/index.js?parser=postcss-scss!./App.scss");
          if (typeof newContent === 'string') {
            newContent = [[module.id, content, '']];
          }
          removeCss = insertCss(newContent, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(50)();
  // imports
  
  
  // module
  exports.push([module.id, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n/*! normalize.css v3.0.3 | MIT License | github.com/necolas/normalize.css */\n\n/**\n * 1. Set default font family to sans-serif.\n * 2. Prevent iOS and IE text size adjust after device orientation change,\n *    without disabling user zoom.\n */\n\nhtml {\n  font-family: sans-serif; /* 1 */\n  -ms-text-size-adjust: 100%; /* 2 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/**\n * Remove default margin.\n */\n\nbody {\n  margin: 0;\n}\n\n/* HTML5 display definitions\n   ========================================================================== */\n\n/**\n * Correct `block` display not defined for any HTML5 element in IE 8/9.\n * Correct `block` display not defined for `details` or `summary` in IE 10/11\n * and Firefox.\n * Correct `block` display not defined for `main` in IE 11.\n */\n\narticle, aside, details, figcaption, figure, footer, header, hgroup, main, menu, nav, section, summary {\n  display: block;\n}\n\n/**\n * 1. Correct `inline-block` display not defined in IE 8/9.\n * 2. Normalize vertical alignment of `progress` in Chrome, Firefox, and Opera.\n */\n\naudio, canvas, progress, video {\n  display: inline-block; /* 1 */\n  vertical-align: baseline; /* 2 */\n}\n\n/**\n * Prevent modern browsers from displaying `audio` without controls.\n * Remove excess height in iOS 5 devices.\n */\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n/**\n * Address `[hidden]` styling not present in IE 8/9/10.\n * Hide the `template` element in IE 8/9/10/11, Safari, and Firefox < 22.\n */\n\n[hidden], template {\n  display: none;\n}\n\n/* Links\n   ========================================================================== */\n\n/**\n * Remove the gray background color from active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * Improve readability of focused elements when they are also in an\n * active/hover state.\n */\n\na:active, a:hover {\n  outline: 0;\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Address styling not present in IE 8/9/10/11, Safari, and Chrome.\n */\n\nabbr[title] {\n  border-bottom: 1px dotted;\n}\n\n/**\n * Address style set to `bolder` in Firefox 4+, Safari, and Chrome.\n */\n\nb, strong {\n  font-weight: bold;\n}\n\n/**\n * Address styling not present in Safari and Chrome.\n */\n\ndfn {\n  font-style: italic;\n}\n\n/**\n * Address variable `h1` font-size and margin within `section` and `article`\n * contexts in Firefox 4+, Safari, and Chrome.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/**\n * Address styling not present in IE 8/9.\n */\n\nmark {\n  background: #ff0;\n  color: #000;\n}\n\n/**\n * Address inconsistent and variable font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` affecting `line-height` in all browsers.\n */\n\nsub, sup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsup {\n  top: -0.5em;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove border when inside `a` element in IE 8/9/10.\n */\n\nimg {\n  border: 0;\n}\n\n/**\n * Correct overflow not hidden in IE 9/10/11.\n */\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * Address margin not present in IE 8/9 and Safari.\n */\n\nfigure {\n  margin: 1em 40px;\n}\n\n/**\n * Address differences between Firefox and other browsers.\n */\n\nhr {\n  -webkit-box-sizing: content-box;\n          box-sizing: content-box;\n  height: 0;\n}\n\n/**\n * Contain overflow in all browsers.\n */\n\npre {\n  overflow: auto;\n}\n\n/**\n * Address odd `em`-unit font size rendering in all browsers.\n */\n\ncode, kbd, pre, samp {\n  font-family: monospace, monospace;\n  font-size: 1em;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * Known limitation: by default, Chrome and Safari on OS X allow very limited\n * styling of `select`, unless a `border` property is set.\n */\n\n/**\n * 1. Correct color not being inherited.\n *    Known issue: affects color of disabled elements.\n * 2. Correct font properties not being inherited.\n * 3. Address margins set differently in Firefox 4+, Safari, and Chrome.\n */\n\nbutton, input, optgroup, select, textarea {\n  color: inherit; /* 1 */\n  font: inherit; /* 2 */\n  margin: 0; /* 3 */\n}\n\n/**\n * Address `overflow` set to `hidden` in IE 8/9/10/11.\n */\n\nbutton {\n  overflow: visible;\n}\n\n/**\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\n * All other form control elements do not inherit `text-transform` values.\n * Correct `button` style inheritance in Firefox, IE 8/9/10/11, and Opera.\n * Correct `select` style inheritance in Firefox.\n */\n\nbutton, select {\n  text-transform: none;\n}\n\n/**\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\n *    and `video` controls.\n * 2. Correct inability to style clickable `input` types in iOS.\n * 3. Improve usability and consistency of cursor style between image-type\n *    `input` and others.\n */\n\nbutton, html input[type=\"button\"], input[type=\"reset\"], input[type=\"submit\"] {\n  -webkit-appearance: button; /* 2 */\n  cursor: pointer; /* 3 */\n}\n\n/**\n * Re-set default cursor for disabled elements.\n */\n\nbutton[disabled], html input[disabled] {\n  cursor: default;\n}\n\n/**\n * Remove inner padding and border in Firefox 4+.\n */\n\nbutton::-moz-focus-inner, input::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n\n/**\n * Address Firefox 4+ setting `line-height` on `input` using `!important` in\n * the UA stylesheet.\n */\n\ninput {\n  line-height: normal;\n}\n\n/**\n * It's recommended that you don't attempt to style these elements.\n * Firefox's implementation doesn't respect box-sizing, padding, or width.\n *\n * 1. Address box sizing set to `content-box` in IE 8/9/10.\n * 2. Remove excess padding in IE 8/9/10.\n */\n\ninput[type=\"checkbox\"], input[type=\"radio\"] {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Fix the cursor style for Chrome's increment/decrement buttons. For certain\n * `font-size` values of the `input`, it causes the cursor style of the\n * decrement button to change from `default` to `text`.\n */\n\ninput[type=\"number\"]::-webkit-inner-spin-button, input[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Address `appearance` set to `searchfield` in Safari and Chrome.\n * 2. Address `box-sizing` set to `border-box` in Safari and Chrome.\n */\n\ninput[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  -webkit-box-sizing: content-box;\n          box-sizing: content-box; /* 2 */\n}\n\n/**\n * Remove inner padding and search cancel button in Safari and Chrome on OS X.\n * Safari (but not Chrome) clips the cancel button when the search input has\n * padding (and `textfield` appearance).\n */\n\ninput[type=\"search\"]::-webkit-search-cancel-button, input[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * Define consistent border, margin, and padding.\n */\n\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\n\n/**\n * 1. Correct `color` not being inherited in IE 8/9/10/11.\n * 2. Remove padding so people aren't caught out if they zero out fieldsets.\n */\n\nlegend {\n  border: 0; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Remove default vertical scrollbar in IE 8/9/10/11.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * Don't inherit the `font-weight` (applied by a rule above).\n * NOTE: the default cannot safely be changed in Chrome and Safari on OS X.\n */\n\noptgroup {\n  font-weight: bold;\n}\n\n/* Tables\n   ========================================================================== */\n\n/**\n * Remove most spacing between table cells.\n */\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\ntd, th {\n  padding: 0;\n}\n\n/*! React Starter Kit | MIT License | https://www.reactstarterkit.com/ */\n\n/*\n * Colors\n * ========================================================================== */\n\n/* #222 */\n\n/* #404040 */\n\n/* #555 */\n\n/* #777 */\n\n/* #eee */\n\n/*\n * Typography\n * ========================================================================== */\n\n/*\n * Layout\n * ========================================================================== */\n\n/*\n * Media queries breakpoints\n * ========================================================================== */\n\n/* Extra small screen / phone */\n\n/* Small screen / tablet */\n\n/* Medium screen / desktop */\n\n/* Large screen / wide desktop */\n\n/*\n * Animations\n * ========================================================================== */\n\nmixin icon-spin() {\n\t-webkit-animation-name: App_spin_1lc;\n\t-webkit-animation-duration: 4000ms;\n\t-webkit-animation-iteration-count: infinite;\n\t-webkit-animation-timing-function: linear;\n\t-moz-animation-name: App_spin_1lc;\n\t-moz-animation-duration: 4000ms;\n\t-moz-animation-iteration-count: infinite;\n\t-moz-animation-timing-function: linear;\n\t-ms-animation-name: App_spin_1lc;\n\t-ms-animation-duration: 4000ms;\n\t-ms-animation-iteration-count: infinite;\n\t-ms-animation-timing-function: linear;\n\n\t-webkit-animation-name: App_spin_1lc;\n\n\t     -o-animation-name: App_spin_1lc;\n\n\t        animation-name: App_spin_1lc;\n\t-webkit-animation-duration: 4000ms;\n\t     -o-animation-duration: 4000ms;\n\t        animation-duration: 4000ms;\n\t-webkit-animation-iteration-count: infinite;\n\t     -o-animation-iteration-count: infinite;\n\t        animation-iteration-count: infinite;\n\t-webkit-animation-timing-function: linear;\n\t     -o-animation-timing-function: linear;\n\t        animation-timing-function: linear;\n}\n\n@-webkit-keyframes App_spin_1lc {\n  from { -webkit-transform: rotate(0deg); }\n  to { -webkit-transform: rotate(360deg); }\n}\n\n@-o-keyframes App_spin_1lc {\n  from {\n      -o-transform:rotate(0deg);\n         transform:rotate(0deg);\n  }\n  to {\n      -o-transform:rotate(360deg);\n         transform:rotate(360deg);\n  }\n}\n\n@keyframes App_spin_1lc {\n  from {\n      -webkit-transform:rotate(0deg);\n           -o-transform:rotate(0deg);\n              transform:rotate(0deg);\n  }\n  to {\n      -webkit-transform:rotate(360deg);\n           -o-transform:rotate(360deg);\n              transform:rotate(360deg);\n  }\n}\n\n/*\n * Base styles\n * ========================================================================== */\n\nhtml {\n  color: #222;\n  font-weight: 100;\n  font-size: 1em; /* ~16px; */\n  font-family: 'Segoe UI','HelveticaNeue-Light',sans-serif;\n  line-height: 1.375; /* ~22px */\n}\n\n/*\n * Remove text-shadow in selection highlight:\n * https://twitter.com/miketaylr/status/12228805301\n *\n * These selection rule sets have to be separate.\n * Customize the background color to match your design.\n */\n\n::-moz-selection {\n  background: #b3d4fc;\n  text-shadow: none;\n}\n\n::selection {\n  background: #b3d4fc;\n  text-shadow: none;\n}\n\n/*\n * A better looking default horizontal rule\n */\n\nhr {\n  display: block;\n  height: 1px;\n  border: 0;\n  border-top: 1px solid #ccc;\n  margin: 1em 0;\n  padding: 0;\n}\n\n/*\n * Remove the gap between audio, canvas, iframes,\n * images, videos and the bottom of their containers:\n * https://github.com/h5bp/html5-boilerplate/issues/440\n */\n\naudio, canvas, iframe, img, svg, video {\n  vertical-align: middle;\n}\n\n/*\n * Remove default fieldset styles.\n */\n\nfieldset {\n  border: 0;\n  margin: 0;\n  padding: 0;\n}\n\n/*\n * Allow only vertical resizing of textareas.\n */\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n * Browser upgrade prompt\n * ========================================================================== */\n\n.browserupgrade {\n  margin: 0.2em 0;\n  background: #ccc;\n  color: #000;\n  padding: 0.2em 0;\n}\n\n/*\n * Print styles\n * Inlined to avoid the additional HTTP request:\n * http://www.phpied.com/delay-loading-your-print-css/\n * ========================================================================== */\n\n@media print {\n  *, *:before, *:after {\n    background: transparent !important;\n    color: #000 !important; /* Black prints faster: http://www.sanbeiji.com/archives/953 */\n    -webkit-box-shadow: none !important;\n            box-shadow: none !important;\n    text-shadow: none !important;\n  }\n\n  a, a:visited {\n    text-decoration: underline;\n  }\n\n  a[href]:after {\n    content: \" (\" attr(href) \")\";\n  }\n\n  abbr[title]:after {\n    content: \" (\" attr(title) \")\";\n  }\n\n  /*\n   * Don't show links that are fragment identifiers,\n   * or use the `javascript:` pseudo protocol\n   */\n\n  a[href^=\"#\"]:after, a[href^=\"javascript:\"]:after {\n    content: \"\";\n  }\n\n  pre, blockquote {\n    border: 1px solid #999;\n    page-break-inside: avoid;\n  }\n\n  /*\n   * Printing Tables:\n   * http://css-discuss.incutio.com/wiki/Printing_Tables\n   */\n\n  thead {\n    display: table-header-group;\n  }\n\n  tr, img {\n    page-break-inside: avoid;\n  }\n\n  img {\n    max-width: 100% !important;\n  }\n\n  p, h2, h3 {\n    orphans: 3;\n    widows: 3;\n  }\n\n  h2, h3 {\n    page-break-after: avoid;\n  }\n}\n\n/*\n * Additional Base Styles\n * ========================================================================== */\n\nh1 {\n  font-size: 2.5rem;\n  font-weight: 600;\n  display: block;\n  text-align: center;\n  margin-top: 2rem;\n}\n\nh2 {\n  font-size: 2.0rem;\n  font-weight: 600;\n  display: block;\n  text-align: center;\n  margin-top: 2rem;\n}", "", {"version":3,"sources":["/./src/components/App/App.scss","/./node_modules/normalize.css/normalize.css","/./src/components/variables.scss"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;ACPH,4EAA4E;;AAE5E;;;;GAIG;;AAEH;EACE,wBAAwB,CAAC,OAAO;EAChC,2BAA2B,CAAC,OAAO;EACnC,+BAA+B,CAAC,OAAO;CACxC;;AAED;;GAEG;;AAEH;EACE,UAAU;CACX;;AAED;gFACgF;;AAEhF;;;;;GAKG;;AAEH;EAaE,eAAe;CAChB;;AAED;;;GAGG;;AAEH;EAIE,sBAAsB,CAAC,OAAO;EAC9B,yBAAyB,CAAC,OAAO;CAClC;;AAED;;;GAGG;;AAEH;EACE,cAAc;EACd,UAAU;CACX;;AAED;;;GAGG;;AAEH;EAEE,cAAc;CACf;;AAED;gFACgF;;AAEhF;;GAEG;;AAEH;EACE,8BAA8B;CAC/B;;AAED;;;GAGG;;AAEH;EAEE,WAAW;CACZ;;AAED;gFACgF;;AAEhF;;GAEG;;AAEH;EACE,0BAA0B;CAC3B;;AAED;;GAEG;;AAEH;EAEE,kBAAkB;CACnB;;AAED;;GAEG;;AAEH;EACE,mBAAmB;CACpB;;AAED;;;GAGG;;AAEH;EACE,eAAe;EACf,iBAAiB;CAClB;;AAED;;GAEG;;AAEH;EACE,iBAAiB;EACjB,YAAY;CACb;;AAED;;GAEG;;AAEH;EACE,eAAe;CAChB;;AAED;;GAEG;;AAEH;EAEE,eAAe;EACf,eAAe;EACf,mBAAmB;EACnB,yBAAyB;CAC1B;;AAED;EACE,YAAY;CACb;;AAED;EACE,gBAAgB;CACjB;;AAED;gFACgF;;AAEhF;;GAEG;;AAEH;EACE,UAAU;CACX;;AAED;;GAEG;;AAEH;EACE,iBAAiB;CAClB;;AAED;gFACgF;;AAEhF;;GAEG;;AAEH;EACE,iBAAiB;CAClB;;AAED;;GAEG;;AAEH;EACE,gCAAwB;UAAxB,wBAAwB;EACxB,UAAU;CACX;;AAED;;GAEG;;AAEH;EACE,eAAe;CAChB;;AAED;;GAEG;;AAEH;EAIE,kCAAkC;EAClC,eAAe;CAChB;;AAED;gFACgF;;AAEhF;;;GAGG;;AAEH;;;;;GAKG;;AAEH;EAKE,eAAe,CAAC,OAAO;EACvB,cAAc,CAAC,OAAO;EACtB,UAAU,CAAC,OAAO;CACnB;;AAED;;GAEG;;AAEH;EACE,kBAAkB;CACnB;;AAED;;;;;GAKG;;AAEH;EAEE,qBAAqB;CACtB;;AAED;;;;;;GAMG;;AAEH;EAIE,2BAA2B,CAAC,OAAO;EACnC,gBAAgB,CAAC,OAAO;CACzB;;AAED;;GAEG;;AAEH;EAEE,gBAAgB;CACjB;;AAED;;GAEG;;AAEH;EAEE,UAAU;EACV,WAAW;CACZ;;AAED;;;GAGG;;AAEH;EACE,oBAAoB;CACrB;;AAED;;;;;;GAMG;;AAEH;EAEE,+BAAuB;UAAvB,uBAAuB,CAAC,OAAO;EAC/B,WAAW,CAAC,OAAO;CACpB;;AAED;;;;GAIG;;AAEH;EAEE,aAAa;CACd;;AAED;;;GAGG;;AAEH;EACE,8BAA8B,CAAC,OAAO;EACtC,gCAAwB;UAAxB,wBAAwB,CAAC,OAAO;CACjC;;AAED;;;;GAIG;;AAEH;EAEE,yBAAyB;CAC1B;;AAED;;GAEG;;AAEH;EACE,0BAA0B;EAC1B,cAAc;EACd,+BAA+B;CAChC;;AAED;;;GAGG;;AAEH;EACE,UAAU,CAAC,OAAO;EAClB,WAAW,CAAC,OAAO;CACpB;;AAED;;GAEG;;AAEH;EACE,eAAe;CAChB;;AAED;;;GAGG;;AAEH;EACE,kBAAkB;CACnB;;AAED;gFACgF;;AAEhF;;GAEG;;AAEH;EACE,0BAA0B;EAC1B,kBAAkB;CACnB;;AAED;EAEE,WAAW;CACZ;;AD5ZD,yEAAyE;;AEXzE;;gFAEgF;;AAGxB,UAAU;;AACV,aAAa;;AACb,UAAU;;AACV,UAAU;;AACV,UAAU;;AAclE;;gFAEgF;;AAIhF;;gFAEgF;;AAIhF;;gFAEgF;;AAEhD,gCAAgC;;AAChC,2BAA2B;;AAC3B,6BAA6B;;AAC7B,iCAAiC;;AAEjE;;gFAEgF;;AAKhF;CACC,qCAA6B;CAC7B,mCAAmC;CACnC,4CAA4C;CAC5C,0CAA0C;CAC1C,kCAA0B;CAC1B,gCAAgC;CAChC,yCAAyC;CACzC,uCAAuC;CACvC,iCAAyB;CACzB,+BAA+B;CAC/B,wCAAwC;CACxC,sCAAsC;;CAEtC,qCAAqB;;MAArB,gCAAqB;;SAArB,6BAAqB;CACrB,mCAA2B;MAA3B,8BAA2B;SAA3B,2BAA2B;CAC3B,4CAAoC;MAApC,uCAAoC;SAApC,oCAAoC;CACpC,0CAAkC;MAAlC,qCAAkC;SAAlC,kCAAkC;CAClC;;AASD;EACE,OAAO,gCAAgC,EAAE;EACzC,KAAK,kCAAkC,EAAE;CAC1C;;AACD;EACE;MACI,0BAAuB;SAAvB,uBAAuB;GAC1B;EACD;MACI,4BAAyB;SAAzB,yBAAyB;GAC5B;CACF;;AAPD;EACE;MACI,+BAAuB;WAAvB,0BAAuB;cAAvB,uBAAuB;GAC1B;EACD;MACI,iCAAyB;WAAzB,4BAAyB;cAAzB,yBAAyB;GAC5B;CACF;;AF1ED;;gFAEgF;;AAEhF;EACE,YAAY;EACZ,iBAAiB;EACjB,eAAe,CAAC,YAAY;EAC5B,yDAA+B;EAC/B,mBAAmB,CAAC,WAAW;CAChC;;AAED;;;;;;GAMG;;AAEH;EACE,oBAAoB;EACpB,kBAAkB;CACnB;;AAED;EACE,oBAAoB;EACpB,kBAAkB;CACnB;;AAED;;GAEG;;AAEH;EACE,eAAe;EACf,YAAY;EACZ,UAAU;EACV,2BAA2B;EAC3B,cAAc;EACd,WAAW;CACZ;;AAED;;;;GAIG;;AAEH;EAME,uBAAuB;CACxB;;AAED;;GAEG;;AAEH;EACE,UAAU;EACV,UAAU;EACV,WAAW;CACZ;;AAED;;GAEG;;AAEH;EACE,iBAAiB;CAClB;;AAED;;gFAEgF;;AAEhF;EACE,gBAAgB;EAChB,iBAAiB;EACjB,YAAY;EACZ,iBAAiB;CAClB;;AAED;;;;gFAIgF;;AAEhF;EACE;IAGE,mCAAmC;IACnC,uBAAuB,CAAC,+DAA+D;IACvF,oCAA4B;YAA5B,4BAA4B;IAC5B,6BAA6B;GAC9B;;EAED;IAEE,2BAA2B;GAC5B;;EAED;IACE,6BAA6B;GAC9B;;EAED;IACE,8BAA8B;GAC/B;;EAED;;;KAGG;;EAEH;IAEE,YAAY;GACb;;EAED;IAEE,uBAAuB;IACvB,yBAAyB;GAC1B;;EAED;;;KAGG;;EAEH;IACE,4BAA4B;GAC7B;;EAED;IAEE,yBAAyB;GAC1B;;EAED;IACE,2BAA2B;GAC5B;;EAED;IAGE,WAAW;IACX,UAAU;GACX;;EAED;IAEE,wBAAwB;GACzB;CACF;;AAGD;;gFAEgF;;AAEhF;EACE,kBAAkB;EAClB,iBAAiB;EACjB,eAAe;EACf,mBAAmB;EACnB,iBAAiB;CAClB;;AACD;EACE,kBAAkB;EAClB,iBAAiB;EACjB,eAAe;EACf,mBAAmB;EACnB,iBAAiB;CAClB","file":"App.scss","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n@import '../../../node_modules/normalize.css/normalize.css';\n\n/*! React Starter Kit | MIT License | https://www.reactstarterkit.com/ */\n\n@import '../variables.scss';\n\n/*\n * Base styles\n * ========================================================================== */\n\nhtml {\n  color: #222;\n  font-weight: 100;\n  font-size: 1em; /* ~16px; */\n  font-family: $font-family-base;\n  line-height: 1.375; /* ~22px */\n}\n\n/*\n * Remove text-shadow in selection highlight:\n * https://twitter.com/miketaylr/status/12228805301\n *\n * These selection rule sets have to be separate.\n * Customize the background color to match your design.\n */\n\n::-moz-selection {\n  background: #b3d4fc;\n  text-shadow: none;\n}\n\n::selection {\n  background: #b3d4fc;\n  text-shadow: none;\n}\n\n/*\n * A better looking default horizontal rule\n */\n\nhr {\n  display: block;\n  height: 1px;\n  border: 0;\n  border-top: 1px solid #ccc;\n  margin: 1em 0;\n  padding: 0;\n}\n\n/*\n * Remove the gap between audio, canvas, iframes,\n * images, videos and the bottom of their containers:\n * https://github.com/h5bp/html5-boilerplate/issues/440\n */\n\naudio,\ncanvas,\niframe,\nimg,\nsvg,\nvideo {\n  vertical-align: middle;\n}\n\n/*\n * Remove default fieldset styles.\n */\n\nfieldset {\n  border: 0;\n  margin: 0;\n  padding: 0;\n}\n\n/*\n * Allow only vertical resizing of textareas.\n */\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n * Browser upgrade prompt\n * ========================================================================== */\n\n:global(.browserupgrade) {\n  margin: 0.2em 0;\n  background: #ccc;\n  color: #000;\n  padding: 0.2em 0;\n}\n\n/*\n * Print styles\n * Inlined to avoid the additional HTTP request:\n * http://www.phpied.com/delay-loading-your-print-css/\n * ========================================================================== */\n\n@media print {\n  *,\n  *:before,\n  *:after {\n    background: transparent !important;\n    color: #000 !important; /* Black prints faster: http://www.sanbeiji.com/archives/953 */\n    box-shadow: none !important;\n    text-shadow: none !important;\n  }\n\n  a,\n  a:visited {\n    text-decoration: underline;\n  }\n\n  a[href]:after {\n    content: \" (\" attr(href) \")\";\n  }\n\n  abbr[title]:after {\n    content: \" (\" attr(title) \")\";\n  }\n\n  /*\n   * Don't show links that are fragment identifiers,\n   * or use the `javascript:` pseudo protocol\n   */\n\n  a[href^=\"#\"]:after,\n  a[href^=\"javascript:\"]:after {\n    content: \"\";\n  }\n\n  pre,\n  blockquote {\n    border: 1px solid #999;\n    page-break-inside: avoid;\n  }\n\n  /*\n   * Printing Tables:\n   * http://css-discuss.incutio.com/wiki/Printing_Tables\n   */\n\n  thead {\n    display: table-header-group;\n  }\n\n  tr,\n  img {\n    page-break-inside: avoid;\n  }\n\n  img {\n    max-width: 100% !important;\n  }\n\n  p,\n  h2,\n  h3 {\n    orphans: 3;\n    widows: 3;\n  }\n\n  h2,\n  h3 {\n    page-break-after: avoid;\n  }\n}\n\n\n/*\n * Additional Base Styles\n * ========================================================================== */\n\nh1 {\n  font-size: 2.5rem;\n  font-weight: 600;\n  display: block;\n  text-align: center;\n  margin-top: 2rem;\n}\nh2 {\n  font-size: 2.0rem;\n  font-weight: 600;\n  display: block;\n  text-align: center;\n  margin-top: 2rem;\n}","/*! normalize.css v3.0.3 | MIT License | github.com/necolas/normalize.css */\n\n/**\n * 1. Set default font family to sans-serif.\n * 2. Prevent iOS and IE text size adjust after device orientation change,\n *    without disabling user zoom.\n */\n\nhtml {\n  font-family: sans-serif; /* 1 */\n  -ms-text-size-adjust: 100%; /* 2 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/**\n * Remove default margin.\n */\n\nbody {\n  margin: 0;\n}\n\n/* HTML5 display definitions\n   ========================================================================== */\n\n/**\n * Correct `block` display not defined for any HTML5 element in IE 8/9.\n * Correct `block` display not defined for `details` or `summary` in IE 10/11\n * and Firefox.\n * Correct `block` display not defined for `main` in IE 11.\n */\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  display: block;\n}\n\n/**\n * 1. Correct `inline-block` display not defined in IE 8/9.\n * 2. Normalize vertical alignment of `progress` in Chrome, Firefox, and Opera.\n */\n\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block; /* 1 */\n  vertical-align: baseline; /* 2 */\n}\n\n/**\n * Prevent modern browsers from displaying `audio` without controls.\n * Remove excess height in iOS 5 devices.\n */\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n/**\n * Address `[hidden]` styling not present in IE 8/9/10.\n * Hide the `template` element in IE 8/9/10/11, Safari, and Firefox < 22.\n */\n\n[hidden],\ntemplate {\n  display: none;\n}\n\n/* Links\n   ========================================================================== */\n\n/**\n * Remove the gray background color from active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * Improve readability of focused elements when they are also in an\n * active/hover state.\n */\n\na:active,\na:hover {\n  outline: 0;\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Address styling not present in IE 8/9/10/11, Safari, and Chrome.\n */\n\nabbr[title] {\n  border-bottom: 1px dotted;\n}\n\n/**\n * Address style set to `bolder` in Firefox 4+, Safari, and Chrome.\n */\n\nb,\nstrong {\n  font-weight: bold;\n}\n\n/**\n * Address styling not present in Safari and Chrome.\n */\n\ndfn {\n  font-style: italic;\n}\n\n/**\n * Address variable `h1` font-size and margin within `section` and `article`\n * contexts in Firefox 4+, Safari, and Chrome.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/**\n * Address styling not present in IE 8/9.\n */\n\nmark {\n  background: #ff0;\n  color: #000;\n}\n\n/**\n * Address inconsistent and variable font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` affecting `line-height` in all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsup {\n  top: -0.5em;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove border when inside `a` element in IE 8/9/10.\n */\n\nimg {\n  border: 0;\n}\n\n/**\n * Correct overflow not hidden in IE 9/10/11.\n */\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * Address margin not present in IE 8/9 and Safari.\n */\n\nfigure {\n  margin: 1em 40px;\n}\n\n/**\n * Address differences between Firefox and other browsers.\n */\n\nhr {\n  box-sizing: content-box;\n  height: 0;\n}\n\n/**\n * Contain overflow in all browsers.\n */\n\npre {\n  overflow: auto;\n}\n\n/**\n * Address odd `em`-unit font size rendering in all browsers.\n */\n\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * Known limitation: by default, Chrome and Safari on OS X allow very limited\n * styling of `select`, unless a `border` property is set.\n */\n\n/**\n * 1. Correct color not being inherited.\n *    Known issue: affects color of disabled elements.\n * 2. Correct font properties not being inherited.\n * 3. Address margins set differently in Firefox 4+, Safari, and Chrome.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  color: inherit; /* 1 */\n  font: inherit; /* 2 */\n  margin: 0; /* 3 */\n}\n\n/**\n * Address `overflow` set to `hidden` in IE 8/9/10/11.\n */\n\nbutton {\n  overflow: visible;\n}\n\n/**\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\n * All other form control elements do not inherit `text-transform` values.\n * Correct `button` style inheritance in Firefox, IE 8/9/10/11, and Opera.\n * Correct `select` style inheritance in Firefox.\n */\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/**\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\n *    and `video` controls.\n * 2. Correct inability to style clickable `input` types in iOS.\n * 3. Improve usability and consistency of cursor style between image-type\n *    `input` and others.\n */\n\nbutton,\nhtml input[type=\"button\"], /* 1 */\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n  -webkit-appearance: button; /* 2 */\n  cursor: pointer; /* 3 */\n}\n\n/**\n * Re-set default cursor for disabled elements.\n */\n\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default;\n}\n\n/**\n * Remove inner padding and border in Firefox 4+.\n */\n\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n\n/**\n * Address Firefox 4+ setting `line-height` on `input` using `!important` in\n * the UA stylesheet.\n */\n\ninput {\n  line-height: normal;\n}\n\n/**\n * It's recommended that you don't attempt to style these elements.\n * Firefox's implementation doesn't respect box-sizing, padding, or width.\n *\n * 1. Address box sizing set to `content-box` in IE 8/9/10.\n * 2. Remove excess padding in IE 8/9/10.\n */\n\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Fix the cursor style for Chrome's increment/decrement buttons. For certain\n * `font-size` values of the `input`, it causes the cursor style of the\n * decrement button to change from `default` to `text`.\n */\n\ninput[type=\"number\"]::-webkit-inner-spin-button,\ninput[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Address `appearance` set to `searchfield` in Safari and Chrome.\n * 2. Address `box-sizing` set to `border-box` in Safari and Chrome.\n */\n\ninput[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  box-sizing: content-box; /* 2 */\n}\n\n/**\n * Remove inner padding and search cancel button in Safari and Chrome on OS X.\n * Safari (but not Chrome) clips the cancel button when the search input has\n * padding (and `textfield` appearance).\n */\n\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * Define consistent border, margin, and padding.\n */\n\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\n\n/**\n * 1. Correct `color` not being inherited in IE 8/9/10/11.\n * 2. Remove padding so people aren't caught out if they zero out fieldsets.\n */\n\nlegend {\n  border: 0; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Remove default vertical scrollbar in IE 8/9/10/11.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * Don't inherit the `font-weight` (applied by a rule above).\n * NOTE: the default cannot safely be changed in Chrome and Safari on OS X.\n */\n\noptgroup {\n  font-weight: bold;\n}\n\n/* Tables\n   ========================================================================== */\n\n/**\n * Remove most spacing between table cells.\n */\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\ntd,\nth {\n  padding: 0;\n}\n","/*\n * Colors\n * ========================================================================== */\n\n$white-base:            hsl(255, 255, 255);\n$gray-darker:           color(black lightness(+13.5%)); /* #222 */\n$gray-dark:             color(black lightness(+25%));   /* #404040 */\n$gray:                  color(black lightness(+33.5%)); /* #555 */\n$gray-light:            color(black lightness(+46.7%)); /* #777 */\n$gray-lighter:          color(black lightness(+93.5%)); /* #eee */\n\n$primary-color: #333333;\n$primary-white: #FFFFFF;\n$primary-border: 1px solid #D9D9DE;\n$primary-font-color: #111111;\n$primary-link-color: #111111;\n$primary-link-hover-color: #111111;\n$primary-nav-font-color: rgba(255, 255, 255, .5);\n\n$accent-color: #26a69a;\n$accent-hover: #2BBBAD;\n\n\n/*\n * Typography\n * ========================================================================== */\n\n$font-family-base:      'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n/*\n * Layout\n * ========================================================================== */\n\n$max-content-width:     1000px;\n\n/*\n * Media queries breakpoints\n * ========================================================================== */\n\n$screen-xs-min:         480px;  /* Extra small screen / phone */\n$screen-sm-min:         768px;  /* Small screen / tablet */\n$screen-md-min:         992px;  /* Medium screen / desktop */\n$screen-lg-min:         1200px; /* Large screen / wide desktop */\n\n/*\n * Animations\n * ========================================================================== */\n\n$animation-swift-out:   .45s cubic-bezier(0.3, 1, 0.4, 1) 0s;\n\n\nmixin icon-spin() {\n\t-webkit-animation-name: spin;\n\t-webkit-animation-duration: 4000ms;\n\t-webkit-animation-iteration-count: infinite;\n\t-webkit-animation-timing-function: linear;\n\t-moz-animation-name: spin;\n\t-moz-animation-duration: 4000ms;\n\t-moz-animation-iteration-count: infinite;\n\t-moz-animation-timing-function: linear;\n\t-ms-animation-name: spin;\n\t-ms-animation-duration: 4000ms;\n\t-ms-animation-iteration-count: infinite;\n\t-ms-animation-timing-function: linear;\n\n\tanimation-name: spin;\n\tanimation-duration: 4000ms;\n\tanimation-iteration-count: infinite;\n\tanimation-timing-function: linear;\n}\n@-ms-keyframes spin {\n  from { -ms-transform: rotate(0deg); }\n  to { -ms-transform: rotate(360deg); }\n}\n@-moz-keyframes spin {\n  from { -moz-transform: rotate(0deg); }\n  to { -moz-transform: rotate(360deg); }\n}\n@-webkit-keyframes spin {\n  from { -webkit-transform: rotate(0deg); }\n  to { -webkit-transform: rotate(360deg); }\n}\n@keyframes spin {\n  from {\n      transform:rotate(0deg);\n  }\n  to {\n      transform:rotate(360deg);\n  }\n}\n"],"sourceRoot":"webpack://"}]);
  
  // exports
  exports.locals = {
  	"spin": "App_spin_1lc"
  };

/***/ },
/* 50 */
/***/ function(module, exports) {

  /*
  	MIT License http://www.opensource.org/licenses/mit-license.php
  	Author Tobias Koppers @sokra
  */
  // css base code, injected by the css-loader
  module.exports = function() {
  	var list = [];
  
  	// return the list of modules as css string
  	list.toString = function toString() {
  		var result = [];
  		for(var i = 0; i < this.length; i++) {
  			var item = this[i];
  			if(item[2]) {
  				result.push("@media " + item[2] + "{" + item[1] + "}");
  			} else {
  				result.push(item[1]);
  			}
  		}
  		return result.join("");
  	};
  
  	// import a list of modules into the list
  	list.i = function(modules, mediaQuery) {
  		if(typeof modules === "string")
  			modules = [[null, modules, ""]];
  		var alreadyImportedModules = {};
  		for(var i = 0; i < this.length; i++) {
  			var id = this[i][0];
  			if(typeof id === "number")
  				alreadyImportedModules[id] = true;
  		}
  		for(i = 0; i < modules.length; i++) {
  			var item = modules[i];
  			// skip already imported module
  			// this implementation is not 100% perfect for weird media query combinations
  			//  when a module is imported multiple times with different media queries.
  			//  I hope this will never occur (Hey this way we have smaller bundles)
  			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
  				if(mediaQuery && !item[2]) {
  					item[2] = mediaQuery;
  				} else if(mediaQuery) {
  					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
  				}
  				list.push(item);
  			}
  		}
  	};
  	return list;
  };


/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  var _stringify = __webpack_require__(52);
  
  var _stringify2 = _interopRequireDefault(_stringify);
  
  var _slicedToArray2 = __webpack_require__(53);
  
  var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);
  
  var _assign = __webpack_require__(54);
  
  var _assign2 = _interopRequireDefault(_assign);
  
  var _getIterator2 = __webpack_require__(55);
  
  var _getIterator3 = _interopRequireDefault(_getIterator2);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  /**
   * Isomorphic CSS style loader for Webpack
   *
   * Copyright © 2015 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  var prefix = 's';
  var inserted = {};
  var canUseURL = typeof URL === 'function' && typeof URL.createObjectURL === 'function' && typeof URL.revokeObjectURL === 'function' && typeof Blob === 'function' && typeof btoa === 'function';
  
  // Base64 encoding and decoding - The "Unicode Problem"
  // https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64/Base64_encoding_and_decoding#The_Unicode_Problem
  function b64EncodeUnicode(str) {
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {
      return String.fromCharCode('0x' + p1);
    }));
  }
  
  /**
   * Remove style/link elements for specified Module IDs
   * if they are no longer referenced by UI components.
   */
  function removeCss(ids) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;
  
    try {
      for (var _iterator = (0, _getIterator3.default)(ids), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var id = _step.value;
  
        if (--inserted[id] <= 0) {
          var elem = document.getElementById(prefix + id);
          if (elem) {
            elem.parentNode.removeChild(elem);
            if (canUseURL && elem.tagName === 'LINK' && elem.href) {
              URL.revokeObjectURL(elem.href);
            }
          }
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  }
  
  /**
   * Example:
   *   // Insert CSS styles object generated by `css-loader` into DOM
   *   var removeCss = insertCss([[1, 'body { color: red; }']]);
   *
   *   // Remove it from the DOM
   *   removeCss();
   */
  function insertCss(styles, options) {
    var _Object$assign = (0, _assign2.default)({
      replace: false,
      prepend: false
    }, options);
  
    var replace = _Object$assign.replace;
    var prepend = _Object$assign.prepend;
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;
  
    try {
  
      for (var _iterator2 = (0, _getIterator3.default)(styles), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var _step2$value = (0, _slicedToArray3.default)(_step2.value, 4);
  
        var id = _step2$value[0];
        var css = _step2$value[1];
        var media = _step2$value[2];
        var sourceMap = _step2$value[3];
  
        if (inserted[id]) {
          if (!replace) {
            inserted[id]++;
            continue;
          }
        }
  
        inserted[id] = 1;
  
        var elem = document.getElementById(prefix + id);
        var create = false;
  
        if (!elem) {
          create = true;
  
          if (sourceMap && canUseURL) {
            elem = document.createElement('link');
            elem.setAttribute('rel', 'stylesheet');
          } else {
            elem = document.createElement('style');
            elem.setAttribute('type', 'text/css');
          }
  
          elem.id = prefix + id;
  
          if (media) {
            elem.setAttribute('media', media);
          }
        }
  
        if (elem.tagName === 'STYLE') {
          if ('textContent' in elem) {
            elem.textContent = css;
          } else {
            elem.styleSheet.cssText = css;
          }
        } else {
          var blob = new Blob([css + '\n/*# sourceMappingURL=data:application/json;base64,' + (b64EncodeUnicode((0, _stringify2.default)(sourceMap)) + ' */')], { type: 'text/css' });
  
          var href = elem.href;
          elem.href = URL.createObjectURL(blob);
  
          if (href) {
            URL.revokeObjectURL(href);
          }
        }
  
        if (create) {
          if (prepend) {
            document.head.insertBefore(elem, document.head.childNodes[0]);
          } else {
            document.head.appendChild(elem);
          }
        }
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2.return) {
          _iterator2.return();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }
  
    return removeCss.bind(null, styles.map(function (x) {
      return x[0];
    }));
  }
  
  module.exports = insertCss;

/***/ },
/* 52 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/core-js/json/stringify");

/***/ },
/* 53 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/helpers/slicedToArray");

/***/ },
/* 54 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/core-js/object/assign");

/***/ },
/* 55 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/core-js/get-iterator");

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _getPrototypeOf = __webpack_require__(42);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(43);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(44);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(45);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(46);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(6);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _withStyles = __webpack_require__(57);
  
  var _withStyles2 = _interopRequireDefault(_withStyles);
  
  var _Header = __webpack_require__(58);
  
  var _Header2 = _interopRequireDefault(_Header);
  
  var _Link = __webpack_require__(60);
  
  var _Link2 = _interopRequireDefault(_Link);
  
  var _Navigation = __webpack_require__(69);
  
  var _Navigation2 = _interopRequireDefault(_Navigation);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var Header = function (_Component) {
    (0, _inherits3.default)(Header, _Component);
  
    function Header() {
      (0, _classCallCheck3.default)(this, Header);
      return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Header).apply(this, arguments));
    }
  
    (0, _createClass3.default)(Header, [{
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'div',
          { className: _Header2.default.root },
          _react2.default.createElement(
            'div',
            { className: _Header2.default.container },
            _react2.default.createElement(_Navigation2.default, { className: _Header2.default.nav })
          )
        );
      }
    }]);
    return Header;
  }(_react.Component);
  // <Link className={s.brand} to="/">
  //   <span className={s.brandTxt}>Shain Lafazan</span>
  // </Link>
  
  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  exports.default = (0, _withStyles2.default)(Header, _Header2.default);

/***/ },
/* 57 */
/***/ function(module, exports) {

  module.exports = require("isomorphic-style-loader/lib/withStyles");

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(59);
      var insertCss = __webpack_require__(51);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = insertCss.bind(null, content);
    
      var removeCss = function() {};
  
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      if (false) {
        module.hot.accept("!!./../../../node_modules/css-loader/index.js?sourceMap&modules&localIdentName=[name]_[local]_[hash:base64:3]!./../../../node_modules/postcss-loader/index.js?parser=postcss-scss!./Header.scss", function() {
          var newContent = require("!!./../../../node_modules/css-loader/index.js?sourceMap&modules&localIdentName=[name]_[local]_[hash:base64:3]!./../../../node_modules/postcss-loader/index.js?parser=postcss-scss!./Header.scss");
          if (typeof newContent === 'string') {
            newContent = [[module.id, content, '']];
          }
          removeCss = insertCss(newContent, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(50)();
  // imports
  
  
  // module
  exports.push([module.id, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n/*\n * Colors\n * ========================================================================== */\n\n/* #222 */\n\n/* #404040 */\n\n/* #555 */\n\n/* #777 */\n\n/* #eee */\n\n/*\n * Typography\n * ========================================================================== */\n\n/*\n * Layout\n * ========================================================================== */\n\n/*\n * Media queries breakpoints\n * ========================================================================== */\n\n/* Extra small screen / phone */\n\n/* Small screen / tablet */\n\n/* Medium screen / desktop */\n\n/* Large screen / wide desktop */\n\n/*\n * Animations\n * ========================================================================== */\n\nmixin icon-spin() {\n\t-webkit-animation-name: Header_spin_1xR;\n\t-webkit-animation-duration: 4000ms;\n\t-webkit-animation-iteration-count: infinite;\n\t-webkit-animation-timing-function: linear;\n\t-moz-animation-name: Header_spin_1xR;\n\t-moz-animation-duration: 4000ms;\n\t-moz-animation-iteration-count: infinite;\n\t-moz-animation-timing-function: linear;\n\t-ms-animation-name: Header_spin_1xR;\n\t-ms-animation-duration: 4000ms;\n\t-ms-animation-iteration-count: infinite;\n\t-ms-animation-timing-function: linear;\n\n\t-webkit-animation-name: Header_spin_1xR;\n\n\t     -o-animation-name: Header_spin_1xR;\n\n\t        animation-name: Header_spin_1xR;\n\t-webkit-animation-duration: 4000ms;\n\t     -o-animation-duration: 4000ms;\n\t        animation-duration: 4000ms;\n\t-webkit-animation-iteration-count: infinite;\n\t     -o-animation-iteration-count: infinite;\n\t        animation-iteration-count: infinite;\n\t-webkit-animation-timing-function: linear;\n\t     -o-animation-timing-function: linear;\n\t        animation-timing-function: linear;\n}\n\n@-webkit-keyframes Header_spin_1xR {\n  from { -webkit-transform: rotate(0deg); }\n  to { -webkit-transform: rotate(360deg); }\n}\n\n@-o-keyframes Header_spin_1xR {\n  from {\n      -o-transform:rotate(0deg);\n         transform:rotate(0deg);\n  }\n  to {\n      -o-transform:rotate(360deg);\n         transform:rotate(360deg);\n  }\n}\n\n@keyframes Header_spin_1xR {\n  from {\n      -webkit-transform:rotate(0deg);\n           -o-transform:rotate(0deg);\n              transform:rotate(0deg);\n  }\n  to {\n      -webkit-transform:rotate(360deg);\n           -o-transform:rotate(360deg);\n              transform:rotate(360deg);\n  }\n}\n\n.Header_root_14I {\n  /* background: $primary-color;*/\n  /* color: $primary-nav-font-color;*/\n  /* border-bottom: $primary-border;*/\n  background: transparent;\n  position: absolute;\n  top: 0;\n  width: 100%;\n  z-index: 1;\n}\n\n.Header_container_izf {\n  margin: 0 auto;\n  padding: 10px 20px 10px 40px;\n  /* max-width: $max-content-width;*/\n  height: 39px;\n}\n\n.Header_brand_1-T {\n  color: rgba(255, 255, 255, .5);\n  text-decoration: none;\n  font-size: 1.75em;\n  /* position: absolute;*/\n  /* top: 3px;*/\n  vertical-align: bottom;\n}\n\n.Header_brandTxt_162 {\n  vertical-align: middle;\n}\n\n.Header_nav_3wx {\n  float: right;\n  margin-top: 6px;\n}", "", {"version":3,"sources":["/./src/components/Header/Header.scss","/./src/components/variables.scss"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;ACPH;;gFAEgF;;AAGxB,UAAU;;AACV,aAAa;;AACb,UAAU;;AACV,UAAU;;AACV,UAAU;;AAclE;;gFAEgF;;AAIhF;;gFAEgF;;AAIhF;;gFAEgF;;AAEhD,gCAAgC;;AAChC,2BAA2B;;AAC3B,6BAA6B;;AAC7B,iCAAiC;;AAEjE;;gFAEgF;;AAKhF;CACC,wCAA6B;CAC7B,mCAAmC;CACnC,4CAA4C;CAC5C,0CAA0C;CAC1C,qCAA0B;CAC1B,gCAAgC;CAChC,yCAAyC;CACzC,uCAAuC;CACvC,oCAAyB;CACzB,+BAA+B;CAC/B,wCAAwC;CACxC,sCAAsC;;CAEtC,wCAAqB;;MAArB,mCAAqB;;SAArB,gCAAqB;CACrB,mCAA2B;MAA3B,8BAA2B;SAA3B,2BAA2B;CAC3B,4CAAoC;MAApC,uCAAoC;SAApC,oCAAoC;CACpC,0CAAkC;MAAlC,qCAAkC;SAAlC,kCAAkC;CAClC;;AASD;EACE,OAAO,gCAAgC,EAAE;EACzC,KAAK,kCAAkC,EAAE;CAC1C;;AACD;EACE;MACI,0BAAuB;SAAvB,uBAAuB;GAC1B;EACD;MACI,4BAAyB;SAAzB,yBAAyB;GAC5B;CACF;;AAPD;EACE;MACI,+BAAuB;WAAvB,0BAAuB;cAAvB,uBAAuB;GAC1B;EACD;MACI,iCAAyB;WAAzB,4BAAyB;cAAzB,yBAAyB;GAC5B;CACF;;AD5ED;EACE,gCAA8B;EAC9B,oCAAkC;EAClC,oCAAkC;EAClC,wBAAwB;EACxB,mBAAmB;EACnB,OAAO;EACP,YAAY;EACZ,WAAW;CACZ;;AAED;EACE,eAAe;EACf,6BAA6B;EAC7B,mCAAiC;EACjC,aAAa;CACd;;AAED;EACE,+BAA+B;EAC/B,sBAAsB;EACtB,kBAAkB;EAClB,wBAAsB;EACtB,cAAY;EACZ,uBAAuB;CACxB;;AAGD;EACE,uBAAuB;CACxB;;AAGD;EACE,aAAa;EACb,gBAAgB;CACjB","file":"Header.scss","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n@import '../variables.scss';\n\n$brand-color: #61dafb;\n\n.root {\n  // background: $primary-color;\n  // color: $primary-nav-font-color;\n  // border-bottom: $primary-border;\n  background: transparent;\n  position: absolute;\n  top: 0;\n  width: 100%;\n  z-index: 1;\n}\n\n.container {\n  margin: 0 auto;\n  padding: 10px 20px 10px 40px;\n  // max-width: $max-content-width;\n  height: 39px;\n}\n\n.brand {\n  color: $primary-nav-font-color;\n  text-decoration: none;\n  font-size: 1.75em;\n  // position: absolute;\n  // top: 3px;\n  vertical-align: bottom;\n}\n\n\n.brandTxt {\n  vertical-align: middle;\n}\n\n\n.nav {\n  float: right;\n  margin-top: 6px;\n}","/*\n * Colors\n * ========================================================================== */\n\n$white-base:            hsl(255, 255, 255);\n$gray-darker:           color(black lightness(+13.5%)); /* #222 */\n$gray-dark:             color(black lightness(+25%));   /* #404040 */\n$gray:                  color(black lightness(+33.5%)); /* #555 */\n$gray-light:            color(black lightness(+46.7%)); /* #777 */\n$gray-lighter:          color(black lightness(+93.5%)); /* #eee */\n\n$primary-color: #333333;\n$primary-white: #FFFFFF;\n$primary-border: 1px solid #D9D9DE;\n$primary-font-color: #111111;\n$primary-link-color: #111111;\n$primary-link-hover-color: #111111;\n$primary-nav-font-color: rgba(255, 255, 255, .5);\n\n$accent-color: #26a69a;\n$accent-hover: #2BBBAD;\n\n\n/*\n * Typography\n * ========================================================================== */\n\n$font-family-base:      'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n/*\n * Layout\n * ========================================================================== */\n\n$max-content-width:     1000px;\n\n/*\n * Media queries breakpoints\n * ========================================================================== */\n\n$screen-xs-min:         480px;  /* Extra small screen / phone */\n$screen-sm-min:         768px;  /* Small screen / tablet */\n$screen-md-min:         992px;  /* Medium screen / desktop */\n$screen-lg-min:         1200px; /* Large screen / wide desktop */\n\n/*\n * Animations\n * ========================================================================== */\n\n$animation-swift-out:   .45s cubic-bezier(0.3, 1, 0.4, 1) 0s;\n\n\nmixin icon-spin() {\n\t-webkit-animation-name: spin;\n\t-webkit-animation-duration: 4000ms;\n\t-webkit-animation-iteration-count: infinite;\n\t-webkit-animation-timing-function: linear;\n\t-moz-animation-name: spin;\n\t-moz-animation-duration: 4000ms;\n\t-moz-animation-iteration-count: infinite;\n\t-moz-animation-timing-function: linear;\n\t-ms-animation-name: spin;\n\t-ms-animation-duration: 4000ms;\n\t-ms-animation-iteration-count: infinite;\n\t-ms-animation-timing-function: linear;\n\n\tanimation-name: spin;\n\tanimation-duration: 4000ms;\n\tanimation-iteration-count: infinite;\n\tanimation-timing-function: linear;\n}\n@-ms-keyframes spin {\n  from { -ms-transform: rotate(0deg); }\n  to { -ms-transform: rotate(360deg); }\n}\n@-moz-keyframes spin {\n  from { -moz-transform: rotate(0deg); }\n  to { -moz-transform: rotate(360deg); }\n}\n@-webkit-keyframes spin {\n  from { -webkit-transform: rotate(0deg); }\n  to { -webkit-transform: rotate(360deg); }\n}\n@keyframes spin {\n  from {\n      transform:rotate(0deg);\n  }\n  to {\n      transform:rotate(360deg);\n  }\n}\n"],"sourceRoot":"webpack://"}]);
  
  // exports
  exports.locals = {
  	"spin": "Header_spin_1xR",
  	"root": "Header_root_14I",
  	"container": "Header_container_izf",
  	"brand": "Header_brand_1-T",
  	"brandTxt": "Header_brandTxt_162",
  	"nav": "Header_nav_3wx"
  };

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _objectWithoutProperties2 = __webpack_require__(61);
  
  var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
  
  var _extends2 = __webpack_require__(62);
  
  var _extends3 = _interopRequireDefault(_extends2);
  
  var _getPrototypeOf = __webpack_require__(42);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(43);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(44);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(45);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(46);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(6);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _parsePath = __webpack_require__(63);
  
  var _parsePath2 = _interopRequireDefault(_parsePath);
  
  var _Location = __webpack_require__(64);
  
  var _Location2 = _interopRequireDefault(_Location);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  function isLeftClickEvent(event) {
    return event.button === 0;
  } /**
     * React Starter Kit (https://www.reactstarterkit.com/)
     *
     * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE.txt file in the root directory of this source tree.
     */
  
  function isModifiedEvent(event) {
    return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
  }
  
  var Link = function (_Component) {
    (0, _inherits3.default)(Link, _Component);
  
    function Link() {
      var _Object$getPrototypeO;
  
      var _temp, _this, _ret;
  
      (0, _classCallCheck3.default)(this, Link);
  
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
  
      return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_Object$getPrototypeO = (0, _getPrototypeOf2.default)(Link)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.handleClick = function (event) {
        var allowTransition = true;
        var clickResult = undefined;
  
        if (_this.props && _this.props.onClick) {
          clickResult = _this.props.onClick(event);
        }
  
        if (isModifiedEvent(event) || !isLeftClickEvent(event)) {
          return;
        }
  
        if (clickResult === false || event.defaultPrevented === true) {
          allowTransition = false;
        }
  
        event.preventDefault();
  
        if (allowTransition) {
          var link = event.currentTarget;
          if (_this.props && _this.props.to) {
            _Location2.default.push((0, _extends3.default)({}, (0, _parsePath2.default)(_this.props.to), {
              state: _this.props && _this.props.state || null
            }));
          } else {
            _Location2.default.push({
              pathname: link.pathname,
              search: link.search,
              state: _this.props && _this.props.state || null
            });
          }
        }
      }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }
  
    (0, _createClass3.default)(Link, [{
      key: 'render',
      value: function render() {
        var _props = this.props;
        var to = _props.to;
        var query = _props.query;
        var props = (0, _objectWithoutProperties3.default)(_props, ['to', 'query']);
  
        return _react2.default.createElement('a', (0, _extends3.default)({ href: _Location2.default.createHref(to, query) }, props, { onClick: this.handleClick }));
      }
    }]);
    return Link;
  }(_react.Component);
  
  Link.propTypes = {
    to: _react.PropTypes.string.isRequired,
    query: _react.PropTypes.object,
    state: _react.PropTypes.object,
    onClick: _react.PropTypes.func
  };
  exports.default = Link;

/***/ },
/* 61 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/helpers/objectWithoutProperties");

/***/ },
/* 62 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/helpers/extends");

/***/ },
/* 63 */
/***/ function(module, exports) {

  module.exports = require("history/lib/parsePath");

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _ExecutionEnvironment = __webpack_require__(65);
  
  var _createBrowserHistory = __webpack_require__(66);
  
  var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);
  
  var _createMemoryHistory = __webpack_require__(67);
  
  var _createMemoryHistory2 = _interopRequireDefault(_createMemoryHistory);
  
  var _useQueries = __webpack_require__(68);
  
  var _useQueries2 = _interopRequireDefault(_useQueries);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  var location = (0, _useQueries2.default)(_ExecutionEnvironment.canUseDOM ? _createBrowserHistory2.default : _createMemoryHistory2.default)();
  
  exports.default = location;

/***/ },
/* 65 */
/***/ function(module, exports) {

  module.exports = require("fbjs/lib/ExecutionEnvironment");

/***/ },
/* 66 */
/***/ function(module, exports) {

  module.exports = require("history/lib/createBrowserHistory");

/***/ },
/* 67 */
/***/ function(module, exports) {

  module.exports = require("history/lib/createMemoryHistory");

/***/ },
/* 68 */
/***/ function(module, exports) {

  module.exports = require("history/lib/useQueries");

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _getPrototypeOf = __webpack_require__(42);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(43);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(44);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(45);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(46);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(6);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _classnames = __webpack_require__(70);
  
  var _classnames2 = _interopRequireDefault(_classnames);
  
  var _withStyles = __webpack_require__(57);
  
  var _withStyles2 = _interopRequireDefault(_withStyles);
  
  var _Navigation = __webpack_require__(71);
  
  var _Navigation2 = _interopRequireDefault(_Navigation);
  
  var _Link = __webpack_require__(60);
  
  var _Link2 = _interopRequireDefault(_Link);
  
  var _reactMaterialize = __webpack_require__(73);
  
  var _reactMaterialize2 = _interopRequireDefault(_reactMaterialize);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  var Navigation = function (_Component) {
    (0, _inherits3.default)(Navigation, _Component);
  
    function Navigation() {
      (0, _classCallCheck3.default)(this, Navigation);
      return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Navigation).apply(this, arguments));
    }
  
    (0, _createClass3.default)(Navigation, [{
      key: 'scrollToSection',
      value: function scrollToSection(e) {
        var sectionName = e.target.getAttribute('data-scrollocation');
        var n = $('#' + sectionName);
        $('html, body').animate({ scrollTop: n.offset().top }, 800, 'easeInExpo');
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'div',
          { className: (0, _classnames2.default)(_Navigation2.default.root, this.props.className), role: 'navigation' },
          _react2.default.createElement(
            'a',
            { className: _Navigation2.default.link, onClick: this.scrollToSection, 'data-scrollocation': 'profile' },
            'Profile'
          ),
          _react2.default.createElement(
            'span',
            { className: _Navigation2.default.spacer },
            ' | '
          ),
          _react2.default.createElement(
            'a',
            { className: _Navigation2.default.link, onClick: this.scrollToSection, 'data-scrollocation': 'projects' },
            'Projects'
          ),
          _react2.default.createElement(
            'span',
            { className: _Navigation2.default.spacer },
            ' | '
          ),
          _react2.default.createElement(
            'a',
            { className: _Navigation2.default.link, onClick: this.scrollToSection, 'data-scrollocation': 'contact' },
            'Contact'
          )
        );
      }
    }]);
    return Navigation;
  }(_react.Component);
  // <Link className={s.link} to="/contact">Contact</Link>
  // <Link className={s.link} to="/profile">Profile</Link>
  // <Link className={cx(s.link, s.highlight)} to="/register">Sign up</Link>
  
  Navigation.propTypes = {
    className: _react.PropTypes.string
  };
  exports.default = (0, _withStyles2.default)(Navigation, _Navigation2.default);

/***/ },
/* 70 */
/***/ function(module, exports) {

  module.exports = require("classnames");

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(72);
      var insertCss = __webpack_require__(51);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = insertCss.bind(null, content);
    
      var removeCss = function() {};
  
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      if (false) {
        module.hot.accept("!!./../../../node_modules/css-loader/index.js?sourceMap&modules&localIdentName=[name]_[local]_[hash:base64:3]!./../../../node_modules/postcss-loader/index.js?parser=postcss-scss!./Navigation.scss", function() {
          var newContent = require("!!./../../../node_modules/css-loader/index.js?sourceMap&modules&localIdentName=[name]_[local]_[hash:base64:3]!./../../../node_modules/postcss-loader/index.js?parser=postcss-scss!./Navigation.scss");
          if (typeof newContent === 'string') {
            newContent = [[module.id, content, '']];
          }
          removeCss = insertCss(newContent, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(50)();
  // imports
  
  
  // module
  exports.push([module.id, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n /*\n * Colors\n * ========================================================================== */\n\n /* #222 */\n\n /* #404040 */\n\n /* #555 */\n\n /* #777 */\n\n /* #eee */\n\n /*\n * Typography\n * ========================================================================== */\n\n /*\n * Layout\n * ========================================================================== */\n\n /*\n * Media queries breakpoints\n * ========================================================================== */\n\n /* Extra small screen / phone */\n\n /* Small screen / tablet */\n\n /* Medium screen / desktop */\n\n /* Large screen / wide desktop */\n\n /*\n * Animations\n * ========================================================================== */\n\n mixin icon-spin() {\n\t-webkit-animation-name: Navigation_spin_2GI;\n\t-webkit-animation-duration: 4000ms;\n\t-webkit-animation-iteration-count: infinite;\n\t-webkit-animation-timing-function: linear;\n\t-moz-animation-name: Navigation_spin_2GI;\n\t-moz-animation-duration: 4000ms;\n\t-moz-animation-iteration-count: infinite;\n\t-moz-animation-timing-function: linear;\n\t-ms-animation-name: Navigation_spin_2GI;\n\t-ms-animation-duration: 4000ms;\n\t-ms-animation-iteration-count: infinite;\n\t-ms-animation-timing-function: linear;\n\n\t-webkit-animation-name: Navigation_spin_2GI;\n\n\t     -o-animation-name: Navigation_spin_2GI;\n\n\t        animation-name: Navigation_spin_2GI;\n\t-webkit-animation-duration: 4000ms;\n\t     -o-animation-duration: 4000ms;\n\t        animation-duration: 4000ms;\n\t-webkit-animation-iteration-count: infinite;\n\t     -o-animation-iteration-count: infinite;\n\t        animation-iteration-count: infinite;\n\t-webkit-animation-timing-function: linear;\n\t     -o-animation-timing-function: linear;\n\t        animation-timing-function: linear;\n}\n\n @-webkit-keyframes Navigation_spin_2GI {\n  from { -webkit-transform: rotate(0deg); }\n  to { -webkit-transform: rotate(360deg); }\n}\n\n @-o-keyframes Navigation_spin_2GI {\n  from {\n      -o-transform:rotate(0deg);\n         transform:rotate(0deg);\n  }\n  to {\n      -o-transform:rotate(360deg);\n         transform:rotate(360deg);\n  }\n}\n\n @keyframes Navigation_spin_2GI {\n  from {\n      -webkit-transform:rotate(0deg);\n           -o-transform:rotate(0deg);\n              transform:rotate(0deg);\n  }\n  to {\n      -webkit-transform:rotate(360deg);\n           -o-transform:rotate(360deg);\n              transform:rotate(360deg);\n  }\n}\n\n /* color: #26a69a;*/\n\n /*   :hover {*/\n\n /*     color: #2BBBAD;*/\n\n /*     @include icon-spin;*/\n\n /*   }*/\n\n .Navigation_root_2Gx {\n}\n\n .Navigation_link_12k {\n  display: inline-block;\n  cursor: pointer;\n  padding: 3px 8px;\n  text-decoration: none;\n  font-size: 0.9rem;\n  font-weight: 600;\n  margin: 1px 0 0 0;\n  /* color: #989898;*/\n  color: #26a69a;\n}\n\n .Navigation_link_12k {\n  /* color: $primary-nav-font-color;*/\n}\n\n .Navigation_link_12k:active {\n  /* color: $nav-link-active-color;*/\n}\n\n .Navigation_link_12k:hover {\n  color: #FFF;\n}\n\n .Navigation_link_12k:visited {\n}\n\n .Navigation_highlight_2cu {\n  margin-right: 8px;\n  margin-left: 8px;\n  border-radius: 3px;\n  background: rgba(0, 0, 0, .15);\n  color: #fff;\n}\n\n .Navigation_highlight_2cu:hover {\n  background: rgba(0, 0, 0, .3);\n}\n\n .Navigation_spacer_2MV {\n  color: rgba(255, 255, 255, .3);\n  /* color: $accent-color;*/\n}\n", "", {"version":3,"sources":["/./src/components/Navigation/Navigation.scss","/./src/components/variables.scss"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;CCPH;;gFAEgF;;CAGxB,UAAU;;CACV,aAAa;;CACb,UAAU;;CACV,UAAU;;CACV,UAAU;;CAclE;;gFAEgF;;CAIhF;;gFAEgF;;CAIhF;;gFAEgF;;CAEhD,gCAAgC;;CAChC,2BAA2B;;CAC3B,6BAA6B;;CAC7B,iCAAiC;;CAEjE;;gFAEgF;;CAKhF;CACC,4CAA6B;CAC7B,mCAAmC;CACnC,4CAA4C;CAC5C,0CAA0C;CAC1C,yCAA0B;CAC1B,gCAAgC;CAChC,yCAAyC;CACzC,uCAAuC;CACvC,wCAAyB;CACzB,+BAA+B;CAC/B,wCAAwC;CACxC,sCAAsC;;CAEtC,4CAAqB;;MAArB,uCAAqB;;SAArB,oCAAqB;CACrB,mCAA2B;MAA3B,8BAA2B;SAA3B,2BAA2B;CAC3B,4CAAoC;MAApC,uCAAoC;SAApC,oCAAoC;CACpC,0CAAkC;MAAlC,qCAAkC;SAAlC,kCAAkC;CAClC;;CASD;EACE,OAAO,gCAAgC,EAAE;EACzC,KAAK,kCAAkC,EAAE;CAC1C;;CACD;EACE;MACI,0BAAuB;SAAvB,uBAAuB;GAC1B;EACD;MACI,4BAAyB;SAAzB,yBAAyB;GAC5B;CACF;;CAPD;EACE;MACI,+BAAuB;WAAvB,0BAAuB;cAAvB,uBAAuB;GAC1B;EACD;MACI,iCAAyB;WAAzB,4BAAyB;cAAzB,yBAAyB;GAC5B;CACF;;CDvED,oBAAkB;;CAClB,eAAa;;CACb,wBAAsB;;CACtB,4BAA0B;;CAC1B,QAAM;;CAEN;CACC;;CAED;EACE,sBAAsB;EACtB,gBAAgB;EAChB,iBAAiB;EACjB,sBAAsB;EACtB,kBAAkB;EAClB,iBAAmC;EACnC,kBAAkB;EAClB,oBAAkB;EAClB,eAAqB;CACtB;;CAED;EACE,oCAAkC;CACnC;;CACD;EACE,mCAAiC;CAClC;;CACD;EACE,YAA6B;CAC9B;;CACD;CACC;;CAED;EACE,kBAAkB;EAClB,iBAAiB;EACjB,mBAAmB;EACnB,+BAA+B;EAC/B,YAAY;CACb;;CAED;EACE,8BAA8B;CAC/B;;CAED;EACE,+BAA+B;EAC/B,0BAAwB;CACzB","file":"Navigation.scss","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n @import '../variables.scss';\n\n$nav-link-color: #00A0FF;\n$nav-link-hover-color: #FFF;\n$nav-link-active-color: orange;\n$nav-link-visited-color: pink;\n$nav-link-font-weight: 600;\n\n\n// color: #26a69a;\n//   :hover {\n//     color: #2BBBAD;\n//     @include icon-spin;\n//   }\n\n.root {\n}\n\n.link {\n  display: inline-block;\n  cursor: pointer;\n  padding: 3px 8px;\n  text-decoration: none;\n  font-size: 0.9rem;\n  font-weight: $nav-link-font-weight;\n  margin: 1px 0 0 0;\n  // color: #989898;\n  color: $accent-color;\n}\n\n.link {\n  // color: $primary-nav-font-color;\n}\n.link:active {\n  // color: $nav-link-active-color;\n}\n.link:hover {\n  color: $nav-link-hover-color;\n}\n.link:visited {\n}\n\n.highlight {\n  margin-right: 8px;\n  margin-left: 8px;\n  border-radius: 3px;\n  background: rgba(0, 0, 0, .15);\n  color: #fff;\n}\n\n.highlight:hover {\n  background: rgba(0, 0, 0, .3);\n}\n\n.spacer {\n  color: rgba(255, 255, 255, .3);\n  // color: $accent-color;\n}\n","/*\n * Colors\n * ========================================================================== */\n\n$white-base:            hsl(255, 255, 255);\n$gray-darker:           color(black lightness(+13.5%)); /* #222 */\n$gray-dark:             color(black lightness(+25%));   /* #404040 */\n$gray:                  color(black lightness(+33.5%)); /* #555 */\n$gray-light:            color(black lightness(+46.7%)); /* #777 */\n$gray-lighter:          color(black lightness(+93.5%)); /* #eee */\n\n$primary-color: #333333;\n$primary-white: #FFFFFF;\n$primary-border: 1px solid #D9D9DE;\n$primary-font-color: #111111;\n$primary-link-color: #111111;\n$primary-link-hover-color: #111111;\n$primary-nav-font-color: rgba(255, 255, 255, .5);\n\n$accent-color: #26a69a;\n$accent-hover: #2BBBAD;\n\n\n/*\n * Typography\n * ========================================================================== */\n\n$font-family-base:      'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n/*\n * Layout\n * ========================================================================== */\n\n$max-content-width:     1000px;\n\n/*\n * Media queries breakpoints\n * ========================================================================== */\n\n$screen-xs-min:         480px;  /* Extra small screen / phone */\n$screen-sm-min:         768px;  /* Small screen / tablet */\n$screen-md-min:         992px;  /* Medium screen / desktop */\n$screen-lg-min:         1200px; /* Large screen / wide desktop */\n\n/*\n * Animations\n * ========================================================================== */\n\n$animation-swift-out:   .45s cubic-bezier(0.3, 1, 0.4, 1) 0s;\n\n\nmixin icon-spin() {\n\t-webkit-animation-name: spin;\n\t-webkit-animation-duration: 4000ms;\n\t-webkit-animation-iteration-count: infinite;\n\t-webkit-animation-timing-function: linear;\n\t-moz-animation-name: spin;\n\t-moz-animation-duration: 4000ms;\n\t-moz-animation-iteration-count: infinite;\n\t-moz-animation-timing-function: linear;\n\t-ms-animation-name: spin;\n\t-ms-animation-duration: 4000ms;\n\t-ms-animation-iteration-count: infinite;\n\t-ms-animation-timing-function: linear;\n\n\tanimation-name: spin;\n\tanimation-duration: 4000ms;\n\tanimation-iteration-count: infinite;\n\tanimation-timing-function: linear;\n}\n@-ms-keyframes spin {\n  from { -ms-transform: rotate(0deg); }\n  to { -ms-transform: rotate(360deg); }\n}\n@-moz-keyframes spin {\n  from { -moz-transform: rotate(0deg); }\n  to { -moz-transform: rotate(360deg); }\n}\n@-webkit-keyframes spin {\n  from { -webkit-transform: rotate(0deg); }\n  to { -webkit-transform: rotate(360deg); }\n}\n@keyframes spin {\n  from {\n      transform:rotate(0deg);\n  }\n  to {\n      transform:rotate(360deg);\n  }\n}\n"],"sourceRoot":"webpack://"}]);
  
  // exports
  exports.locals = {
  	"spin": "Navigation_spin_2GI",
  	"root": "Navigation_root_2Gx",
  	"link": "Navigation_link_12k",
  	"highlight": "Navigation_highlight_2cu",
  	"spacer": "Navigation_spacer_2MV"
  };

/***/ },
/* 73 */
/***/ function(module, exports) {

  module.exports = require("react-materialize");

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _getPrototypeOf = __webpack_require__(42);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(43);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(44);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(45);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(46);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(6);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _withStyles = __webpack_require__(57);
  
  var _withStyles2 = _interopRequireDefault(_withStyles);
  
  var _Footer = __webpack_require__(75);
  
  var _Footer2 = _interopRequireDefault(_Footer);
  
  var _Link = __webpack_require__(60);
  
  var _Link2 = _interopRequireDefault(_Link);
  
  var _SVGIcon = __webpack_require__(77);
  
  var _SVGIcon2 = _interopRequireDefault(_SVGIcon);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var Footer = function (_Component) {
    (0, _inherits3.default)(Footer, _Component);
  
    function Footer() {
      (0, _classCallCheck3.default)(this, Footer);
      return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Footer).apply(this, arguments));
    }
  
    (0, _createClass3.default)(Footer, [{
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'div',
          { className: _Footer2.default.root },
          _react2.default.createElement(
            'div',
            { className: _Footer2.default.container },
            _react2.default.createElement(
              'div',
              { className: _Footer2.default.iconBar },
              _react2.default.createElement(
                'a',
                { href: 'https://www.facebook.com/slafazan', className: _Footer2.default.footerIcon },
                _react2.default.createElement(_SVGIcon2.default, { size: '2.5rem', icon: 'post-facebook' })
              ),
              _react2.default.createElement(
                'a',
                { href: 'https://www.linkedin.com/in/shainlafazan', className: _Footer2.default.footerIcon },
                _react2.default.createElement(_SVGIcon2.default, { size: '2.5rem', icon: 'post-linkedin' })
              ),
              _react2.default.createElement(
                'a',
                { href: 'https://github.com/srslafazan', className: _Footer2.default.footerIcon },
                _react2.default.createElement(_SVGIcon2.default, { size: '2.5rem', icon: 'post-github' })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: _Footer2.default.lowerText },
              _react2.default.createElement(
                'span',
                { className: _Footer2.default.text },
                '© Shain Lafazan, 2016'
              ),
              _react2.default.createElement(
                'span',
                { className: _Footer2.default.spacer },
                '·'
              ),
              _react2.default.createElement(
                'span',
                { className: _Footer2.default.text },
                'Hand-built with ReactJS'
              )
            )
          )
        );
      }
    }]);
    return Footer;
  }(_react.Component);
  
  // <Link className={s.link} to="/">Home</Link>
  // <Link className={s.link} to="/not-found">Not Found</Link>
  
  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  exports.default = (0, _withStyles2.default)(Footer, _Footer2.default);

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(76);
      var insertCss = __webpack_require__(51);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = insertCss.bind(null, content);
    
      var removeCss = function() {};
  
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      if (false) {
        module.hot.accept("!!./../../../node_modules/css-loader/index.js?sourceMap&modules&localIdentName=[name]_[local]_[hash:base64:3]!./../../../node_modules/postcss-loader/index.js?parser=postcss-scss!./Footer.scss", function() {
          var newContent = require("!!./../../../node_modules/css-loader/index.js?sourceMap&modules&localIdentName=[name]_[local]_[hash:base64:3]!./../../../node_modules/postcss-loader/index.js?parser=postcss-scss!./Footer.scss");
          if (typeof newContent === 'string') {
            newContent = [[module.id, content, '']];
          }
          removeCss = insertCss(newContent, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(50)();
  // imports
  
  
  // module
  exports.push([module.id, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n/*\n * Colors\n * ========================================================================== */\n\n/* #222 */\n\n/* #404040 */\n\n/* #555 */\n\n/* #777 */\n\n/* #eee */\n\n/*\n * Typography\n * ========================================================================== */\n\n/*\n * Layout\n * ========================================================================== */\n\n/*\n * Media queries breakpoints\n * ========================================================================== */\n\n/* Extra small screen / phone */\n\n/* Small screen / tablet */\n\n/* Medium screen / desktop */\n\n/* Large screen / wide desktop */\n\n/*\n * Animations\n * ========================================================================== */\n\nmixin icon-spin() {\n\t-webkit-animation-name: Footer_spin_NWN;\n\t-webkit-animation-duration: 4000ms;\n\t-webkit-animation-iteration-count: infinite;\n\t-webkit-animation-timing-function: linear;\n\t-moz-animation-name: Footer_spin_NWN;\n\t-moz-animation-duration: 4000ms;\n\t-moz-animation-iteration-count: infinite;\n\t-moz-animation-timing-function: linear;\n\t-ms-animation-name: Footer_spin_NWN;\n\t-ms-animation-duration: 4000ms;\n\t-ms-animation-iteration-count: infinite;\n\t-ms-animation-timing-function: linear;\n\n\t-webkit-animation-name: Footer_spin_NWN;\n\n\t     -o-animation-name: Footer_spin_NWN;\n\n\t        animation-name: Footer_spin_NWN;\n\t-webkit-animation-duration: 4000ms;\n\t     -o-animation-duration: 4000ms;\n\t        animation-duration: 4000ms;\n\t-webkit-animation-iteration-count: infinite;\n\t     -o-animation-iteration-count: infinite;\n\t        animation-iteration-count: infinite;\n\t-webkit-animation-timing-function: linear;\n\t     -o-animation-timing-function: linear;\n\t        animation-timing-function: linear;\n}\n\n@-webkit-keyframes Footer_spin_NWN {\n  from { -webkit-transform: rotate(0deg); }\n  to { -webkit-transform: rotate(360deg); }\n}\n\n@-o-keyframes Footer_spin_NWN {\n  from {\n      -o-transform:rotate(0deg);\n         transform:rotate(0deg);\n  }\n  to {\n      -o-transform:rotate(360deg);\n         transform:rotate(360deg);\n  }\n}\n\n@keyframes Footer_spin_NWN {\n  from {\n      -webkit-transform:rotate(0deg);\n           -o-transform:rotate(0deg);\n              transform:rotate(0deg);\n  }\n  to {\n      -webkit-transform:rotate(360deg);\n           -o-transform:rotate(360deg);\n              transform:rotate(360deg);\n  }\n}\n\n.Footer_root_3dP {\n  background: #333;\n  color: #fff;\n  width: 100%;\n}\n\n.Footer_container_26p {\n  margin: 0 auto;\n  padding: 10vh 15px;\n  max-width: 1000px;\n  text-align: center;\n}\n\n.Footer_text_tTp {\n  color: rgba(255, 255, 255, .5);\n}\n\n.Footer_textMuted_1h3 {\n  color: rgba(255, 255, 255, .3);\n}\n\n.Footer_spacer_3n7 {\n  color: rgba(255, 255, 255, .3);\n}\n\n.Footer_text_tTp, .Footer_link_NoJ {\n  padding: 2px 5px;\n  font-size: 1em;\n}\n\n.Footer_link_NoJ, .Footer_link_NoJ:active, .Footer_link_NoJ:visited {\n  color: rgba(255, 255, 255, .6);\n  text-decoration: none;\n}\n\n.Footer_link_NoJ:hover {\n  color: rgba(255, 255, 255, 1);\n}\n\n.Footer_lowerText_uPx {\n  margin-top: 1rem;\n}\n\n.Footer_iconBar_1zN {\n  margin-bottom: 1rem;\n}\n\n.Footer_footerIcon_w7b {\n  margin: 0 0.5rem;\n  display: inline-block;\n  cursor: pointer;\n  color: #26a69a;\n}\n\n.Footer_footerIcon_w7b :hover {\n\tcolor: #2BBBAD;\n\n\t@include icon-spin;\n}\n\n", "", {"version":3,"sources":["/./src/components/Footer/Footer.scss","/./src/components/variables.scss"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;ACPH;;gFAEgF;;AAGxB,UAAU;;AACV,aAAa;;AACb,UAAU;;AACV,UAAU;;AACV,UAAU;;AAclE;;gFAEgF;;AAIhF;;gFAEgF;;AAIhF;;gFAEgF;;AAEhD,gCAAgC;;AAChC,2BAA2B;;AAC3B,6BAA6B;;AAC7B,iCAAiC;;AAEjE;;gFAEgF;;AAKhF;CACC,wCAA6B;CAC7B,mCAAmC;CACnC,4CAA4C;CAC5C,0CAA0C;CAC1C,qCAA0B;CAC1B,gCAAgC;CAChC,yCAAyC;CACzC,uCAAuC;CACvC,oCAAyB;CACzB,+BAA+B;CAC/B,wCAAwC;CACxC,sCAAsC;;CAEtC,wCAAqB;;MAArB,mCAAqB;;SAArB,gCAAqB;CACrB,mCAA2B;MAA3B,8BAA2B;SAA3B,2BAA2B;CAC3B,4CAAoC;MAApC,uCAAoC;SAApC,oCAAoC;CACpC,0CAAkC;MAAlC,qCAAkC;SAAlC,kCAAkC;CAClC;;AASD;EACE,OAAO,gCAAgC,EAAE;EACzC,KAAK,kCAAkC,EAAE;CAC1C;;AACD;EACE;MACI,0BAAuB;SAAvB,uBAAuB;GAC1B;EACD;MACI,4BAAyB;SAAzB,yBAAyB;GAC5B;CACF;;AAPD;EACE;MACI,+BAAuB;WAAvB,0BAAuB;cAAvB,uBAAuB;GAC1B;EACD;MACI,iCAAyB;WAAzB,4BAAyB;cAAzB,yBAAyB;GAC5B;CACF;;AD9ED;EACE,iBAAiB;EACjB,YAAY;EACZ,YAAY;CACb;;AAED;EACE,eAAe;EACf,mBAAmB;EACnB,kBAA8B;EAC9B,mBAAmB;CACpB;;AAED;EACE,+BAA+B;CAChC;;AAED;EAEE,+BAA+B;CAChC;;AAED;EACE,+BAA+B;CAChC;;AAED;EAEE,iBAAiB;EACjB,eAAe;CAChB;;AAED;EAGE,+BAA+B;EAC/B,sBAAsB;CACvB;;AAED;EACE,8BAA8B;CAC/B;;AAED;EACE,iBAAiB;CAClB;;AACD;EACE,oBAAoB;CACrB;;AACD;EACE,iBAAiB;EACjB,sBAAsB;EACtB,gBAAgB;EAChB,eAAe;CAKhB;;AAJC;CACE,eAAe;;CACf,mBAAmB;CACpB","file":"Footer.scss","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n@import '../variables.scss';\n\n.root {\n  background: #333;\n  color: #fff;\n  width: 100%;\n}\n\n.container {\n  margin: 0 auto;\n  padding: 10vh 15px;\n  max-width: $max-content-width;\n  text-align: center;\n}\n\n.text {\n  color: rgba(255, 255, 255, .5);\n}\n\n.textMuted {\n  composes: text;\n  color: rgba(255, 255, 255, .3);\n}\n\n.spacer {\n  color: rgba(255, 255, 255, .3);\n}\n\n.text,\n.link {\n  padding: 2px 5px;\n  font-size: 1em;\n}\n\n.link,\n.link:active,\n.link:visited {\n  color: rgba(255, 255, 255, .6);\n  text-decoration: none;\n}\n\n.link:hover {\n  color: rgba(255, 255, 255, 1);\n}\n\n.lowerText {\n  margin-top: 1rem;\n}\n.iconBar {\n  margin-bottom: 1rem;\n}\n.footerIcon {\n  margin: 0 0.5rem;\n  display: inline-block;\n  cursor: pointer;\n  color: #26a69a;\n  :hover {\n    color: #2BBBAD;\n    @include icon-spin;\n  }\n}\n\n","/*\n * Colors\n * ========================================================================== */\n\n$white-base:            hsl(255, 255, 255);\n$gray-darker:           color(black lightness(+13.5%)); /* #222 */\n$gray-dark:             color(black lightness(+25%));   /* #404040 */\n$gray:                  color(black lightness(+33.5%)); /* #555 */\n$gray-light:            color(black lightness(+46.7%)); /* #777 */\n$gray-lighter:          color(black lightness(+93.5%)); /* #eee */\n\n$primary-color: #333333;\n$primary-white: #FFFFFF;\n$primary-border: 1px solid #D9D9DE;\n$primary-font-color: #111111;\n$primary-link-color: #111111;\n$primary-link-hover-color: #111111;\n$primary-nav-font-color: rgba(255, 255, 255, .5);\n\n$accent-color: #26a69a;\n$accent-hover: #2BBBAD;\n\n\n/*\n * Typography\n * ========================================================================== */\n\n$font-family-base:      'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n/*\n * Layout\n * ========================================================================== */\n\n$max-content-width:     1000px;\n\n/*\n * Media queries breakpoints\n * ========================================================================== */\n\n$screen-xs-min:         480px;  /* Extra small screen / phone */\n$screen-sm-min:         768px;  /* Small screen / tablet */\n$screen-md-min:         992px;  /* Medium screen / desktop */\n$screen-lg-min:         1200px; /* Large screen / wide desktop */\n\n/*\n * Animations\n * ========================================================================== */\n\n$animation-swift-out:   .45s cubic-bezier(0.3, 1, 0.4, 1) 0s;\n\n\nmixin icon-spin() {\n\t-webkit-animation-name: spin;\n\t-webkit-animation-duration: 4000ms;\n\t-webkit-animation-iteration-count: infinite;\n\t-webkit-animation-timing-function: linear;\n\t-moz-animation-name: spin;\n\t-moz-animation-duration: 4000ms;\n\t-moz-animation-iteration-count: infinite;\n\t-moz-animation-timing-function: linear;\n\t-ms-animation-name: spin;\n\t-ms-animation-duration: 4000ms;\n\t-ms-animation-iteration-count: infinite;\n\t-ms-animation-timing-function: linear;\n\n\tanimation-name: spin;\n\tanimation-duration: 4000ms;\n\tanimation-iteration-count: infinite;\n\tanimation-timing-function: linear;\n}\n@-ms-keyframes spin {\n  from { -ms-transform: rotate(0deg); }\n  to { -ms-transform: rotate(360deg); }\n}\n@-moz-keyframes spin {\n  from { -moz-transform: rotate(0deg); }\n  to { -moz-transform: rotate(360deg); }\n}\n@-webkit-keyframes spin {\n  from { -webkit-transform: rotate(0deg); }\n  to { -webkit-transform: rotate(360deg); }\n}\n@keyframes spin {\n  from {\n      transform:rotate(0deg);\n  }\n  to {\n      transform:rotate(360deg);\n  }\n}\n"],"sourceRoot":"webpack://"}]);
  
  // exports
  exports.locals = {
  	"spin": "Footer_spin_NWN",
  	"root": "Footer_root_3dP",
  	"container": "Footer_container_26p",
  	"text": "Footer_text_tTp",
  	"textMuted": "Footer_textMuted_1h3 Footer_text_tTp",
  	"spacer": "Footer_spacer_3n7",
  	"link": "Footer_link_NoJ",
  	"lowerText": "Footer_lowerText_uPx",
  	"iconBar": "Footer_iconBar_1zN",
  	"footerIcon": "Footer_footerIcon_w7b"
  };

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _react = __webpack_require__(6);
  
  var _react2 = _interopRequireDefault(_react);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var SVGIcon = _react2.default.createClass({
    displayName: 'SVGIcon',
  
    handleClick: function handleClick(e) {
      console.log('hey, clicked!', e);
      this.setState({ active: true });
    },
    handleMouseEnter: function handleMouseEnter(e) {
      console.log("hey entering", e);
      this.setState({ hover: true });
    },
    handleMouseLeave: function handleMouseLeave(e) {
      console.log("hey leaving", e);
      this.setState({ hover: false });
    },
  
    propTypes: {
      icon: _react2.default.PropTypes.string.isRequired,
      fillColor: _react2.default.PropTypes.string,
      size: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number]),
      style: _react2.default.PropTypes.object
    },
    getDefaultProps: function getDefaultProps() {
      return {
        size: 24
      };
    },
  
    getInitialState: function getInitialState() {
      return {
        hover: false,
        active: false
      };
    },
  
    _mergeStyles: function _mergeStyles() {
      var _Object;
  
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
  
      // This is the m function from "CSS in JS" and can be extracted to a mixin
      return (_Object = Object).assign.apply(_Object, [{}].concat(args));
    },
    renderGraphic: function renderGraphic() {
      switch (this.props.icon) {
        case 'my-icon':
          return _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'M7.41 7.84l4.59 4.58 4.59-4.58 1.41 1.41-6 6-6-6z' })
          );
        case 'another-icon':
          return _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'M7.41 15.41l4.59-4.58 4.59 4.58 1.41-1.41-6-6-6 6z' })
          );
        case 'post-facebook':
          return _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'M20 2h-16c-1.1 0-1.99.9-1.99 2l-.01 16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-16c0-1.1-.9-2-2-2zm-1 2v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v7h-3v-7h-2v-3h2v-2.5c0-1.93 1.57-3.5 3.5-3.5h2.5z' })
          );
        case 'post-github':
          return _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'M7.2 6.6h-.1c-.5 1.4-.2 2.3-.1 2.6-.6.7-1 1.6-1 2.6 0 3.8 2.4 4.6 4.6 4.9-.2 0-.6.2-.8.8-.4.2-1.8.7-2.6-.7 0 0-.5-.8-1.3-.9 0 0-.8 0-.1.5 0 0 .6.3.9 1.3 0 0 .5 1.7 3 1.1v3.1h5v-3.5c0-1-.4-1.5-.8-1.8 2.2-.2 4.6-1 4.6-4.8 0-1.1-.4-2-1-2.6.1-.3.4-1.2-.1-2.6 0 0-.8-.3-2.7 1-.8-.2-1.6-.3-2.5-.3-.8 0-1.7.1-2.5.3-1.4-1-2.2-1-2.6-1zm12.8 15.4h-16c-1.1 0-2-.9-2-2v-16c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2v16c0 1.1-.9 2-2 2z' })
          );
        case 'post-linkedin':
          return _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'M20 2h-16c-1.1 0-1.99.9-1.99 2l-.01 16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-16c0-1.1-.9-2-2-2zm-12 17h-3v-9h3v9zm-1.5-10.69c-1 0-1.81-.81-1.81-1.81s.81-1.81 1.81-1.81 1.81.81 1.81 1.81-.81 1.81-1.81 1.81zm12.5 10.69h-3v-5.3c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v5.3h-3v-9h3v1.2c.52-.84 1.59-1.4 2.5-1.4 1.93 0 3.5 1.57 3.5 3.5v5.7z' })
          );
        case 'email':
          return _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'M20 4h-16c-1.1 0-1.99.9-1.99 2l-.01 12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-12c0-1.1-.9-2-2-2zm0 4l-8 5-8-5v-2l8 5 8-5v2z' })
          );
        case 'keyboard-arrow-down':
          return _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'M7.41 7.84l4.59 4.58 4.59-4.58 1.41 1.41-6 6-6-6z' })
          );
      }
    },
    render: function render() {
      var styles = {
        fill: this.props.fillColor || 'currentColor',
        verticalAlign: "middle",
        width: this.props.size, // CSS instead of the width attr to support non-pixel units
        height: this.props.size // Prevents scaling issue in IE
      };
      return _react2.default.createElement(
        'svg',
        { viewBox: '0 0 24 24', preserveAspectRatio: 'xMidYMid meet', fit: true,
          style: this._mergeStyles(styles, this.props.style // This lets the parent pass custom styles
          ),
          onClick: this.handleClick, onMouseEnter: this.handleMouseEnter, onMouseLeave: this.handleMouseLeave
        },
        this.renderGraphic()
      );
    }
  }); // http://dmfrancisco.github.io/react-icons/
  
  exports.default = SVGIcon;

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _getPrototypeOf = __webpack_require__(42);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(43);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(44);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(45);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(46);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(6);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _withStyles = __webpack_require__(57);
  
  var _withStyles2 = _interopRequireDefault(_withStyles);
  
  var _ContentPage = __webpack_require__(79);
  
  var _ContentPage2 = _interopRequireDefault(_ContentPage);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var ContentPage = function (_Component) {
    (0, _inherits3.default)(ContentPage, _Component);
  
    function ContentPage() {
      (0, _classCallCheck3.default)(this, ContentPage);
      return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(ContentPage).apply(this, arguments));
    }
  
    (0, _createClass3.default)(ContentPage, [{
      key: 'render',
      value: function render() {
        this.context.onSetTitle(this.props.title);
        return _react2.default.createElement(
          'div',
          { className: _ContentPage2.default.root },
          _react2.default.createElement(
            'div',
            { className: _ContentPage2.default.container },
            this.props.path === '/' ? null : _react2.default.createElement(
              'h1',
              null,
              this.props.title
            ),
            _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: this.props.content || '' } })
          )
        );
      }
    }]);
    return ContentPage;
  }(_react.Component); /**
                        * React Starter Kit (https://www.reactstarterkit.com/)
                        *
                        * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                        *
                        * This source code is licensed under the MIT license found in the
                        * LICENSE.txt file in the root directory of this source tree.
                        */
  
  ContentPage.propTypes = {
    path: _react.PropTypes.string.isRequired,
    content: _react.PropTypes.string.isRequired,
    title: _react.PropTypes.string
  };
  ContentPage.contextTypes = {
    onSetTitle: _react.PropTypes.func.isRequired
  };
  exports.default = (0, _withStyles2.default)(ContentPage, _ContentPage2.default);

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(80);
      var insertCss = __webpack_require__(51);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = insertCss.bind(null, content);
    
      var removeCss = function() {};
  
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      if (false) {
        module.hot.accept("!!./../../../node_modules/css-loader/index.js?sourceMap&modules&localIdentName=[name]_[local]_[hash:base64:3]!./../../../node_modules/postcss-loader/index.js?parser=postcss-scss!./ContentPage.scss", function() {
          var newContent = require("!!./../../../node_modules/css-loader/index.js?sourceMap&modules&localIdentName=[name]_[local]_[hash:base64:3]!./../../../node_modules/postcss-loader/index.js?parser=postcss-scss!./ContentPage.scss");
          if (typeof newContent === 'string') {
            newContent = [[module.id, content, '']];
          }
          removeCss = insertCss(newContent, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(50)();
  // imports
  
  
  // module
  exports.push([module.id, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n/*\n * Colors\n * ========================================================================== */\n\n/* #222 */\n\n/* #404040 */\n\n/* #555 */\n\n/* #777 */\n\n/* #eee */\n\n/*\n * Typography\n * ========================================================================== */\n\n/*\n * Layout\n * ========================================================================== */\n\n/*\n * Media queries breakpoints\n * ========================================================================== */\n\n/* Extra small screen / phone */\n\n/* Small screen / tablet */\n\n/* Medium screen / desktop */\n\n/* Large screen / wide desktop */\n\n/*\n * Animations\n * ========================================================================== */\n\nmixin icon-spin() {\n\t-webkit-animation-name: ContentPage_spin_r9x;\n\t-webkit-animation-duration: 4000ms;\n\t-webkit-animation-iteration-count: infinite;\n\t-webkit-animation-timing-function: linear;\n\t-moz-animation-name: ContentPage_spin_r9x;\n\t-moz-animation-duration: 4000ms;\n\t-moz-animation-iteration-count: infinite;\n\t-moz-animation-timing-function: linear;\n\t-ms-animation-name: ContentPage_spin_r9x;\n\t-ms-animation-duration: 4000ms;\n\t-ms-animation-iteration-count: infinite;\n\t-ms-animation-timing-function: linear;\n\n\t-webkit-animation-name: ContentPage_spin_r9x;\n\n\t     -o-animation-name: ContentPage_spin_r9x;\n\n\t        animation-name: ContentPage_spin_r9x;\n\t-webkit-animation-duration: 4000ms;\n\t     -o-animation-duration: 4000ms;\n\t        animation-duration: 4000ms;\n\t-webkit-animation-iteration-count: infinite;\n\t     -o-animation-iteration-count: infinite;\n\t        animation-iteration-count: infinite;\n\t-webkit-animation-timing-function: linear;\n\t     -o-animation-timing-function: linear;\n\t        animation-timing-function: linear;\n}\n\n@-webkit-keyframes ContentPage_spin_r9x {\n  from { -webkit-transform: rotate(0deg); }\n  to { -webkit-transform: rotate(360deg); }\n}\n\n@-o-keyframes ContentPage_spin_r9x {\n  from {\n      -o-transform:rotate(0deg);\n         transform:rotate(0deg);\n  }\n  to {\n      -o-transform:rotate(360deg);\n         transform:rotate(360deg);\n  }\n}\n\n@keyframes ContentPage_spin_r9x {\n  from {\n      -webkit-transform:rotate(0deg);\n           -o-transform:rotate(0deg);\n              transform:rotate(0deg);\n  }\n  to {\n      -webkit-transform:rotate(360deg);\n           -o-transform:rotate(360deg);\n              transform:rotate(360deg);\n  }\n}\n\n.ContentPage_root_1Kg {\n\n}\n\n.ContentPage_container_1JT {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: 1000px;\n}\n", "", {"version":3,"sources":["/./src/components/ContentPage/ContentPage.scss","/./src/components/variables.scss"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;ACPH;;gFAEgF;;AAGxB,UAAU;;AACV,aAAa;;AACb,UAAU;;AACV,UAAU;;AACV,UAAU;;AAclE;;gFAEgF;;AAIhF;;gFAEgF;;AAIhF;;gFAEgF;;AAEhD,gCAAgC;;AAChC,2BAA2B;;AAC3B,6BAA6B;;AAC7B,iCAAiC;;AAEjE;;gFAEgF;;AAKhF;CACC,6CAA6B;CAC7B,mCAAmC;CACnC,4CAA4C;CAC5C,0CAA0C;CAC1C,0CAA0B;CAC1B,gCAAgC;CAChC,yCAAyC;CACzC,uCAAuC;CACvC,yCAAyB;CACzB,+BAA+B;CAC/B,wCAAwC;CACxC,sCAAsC;;CAEtC,6CAAqB;;MAArB,wCAAqB;;SAArB,qCAAqB;CACrB,mCAA2B;MAA3B,8BAA2B;SAA3B,2BAA2B;CAC3B,4CAAoC;MAApC,uCAAoC;SAApC,oCAAoC;CACpC,0CAAkC;MAAlC,qCAAkC;SAAlC,kCAAkC;CAClC;;AASD;EACE,OAAO,gCAAgC,EAAE;EACzC,KAAK,kCAAkC,EAAE;CAC1C;;AACD;EACE;MACI,0BAAuB;SAAvB,uBAAuB;GAC1B;EACD;MACI,4BAAyB;SAAzB,yBAAyB;GAC5B;CACF;;AAPD;EACE;MACI,+BAAuB;WAAvB,0BAAuB;cAAvB,uBAAuB;GAC1B;EACD;MACI,iCAAyB;WAAzB,4BAAyB;cAAzB,yBAAyB;GAC5B;CACF;;AD9ED;;CAEC;;AAED;EACE,eAAe;EACf,kBAAkB;EAClB,kBAA8B;CAC/B","file":"ContentPage.scss","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n@import '../variables.scss';\n\n.root {\n\n}\n\n.container {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: $max-content-width;\n}\n","/*\n * Colors\n * ========================================================================== */\n\n$white-base:            hsl(255, 255, 255);\n$gray-darker:           color(black lightness(+13.5%)); /* #222 */\n$gray-dark:             color(black lightness(+25%));   /* #404040 */\n$gray:                  color(black lightness(+33.5%)); /* #555 */\n$gray-light:            color(black lightness(+46.7%)); /* #777 */\n$gray-lighter:          color(black lightness(+93.5%)); /* #eee */\n\n$primary-color: #333333;\n$primary-white: #FFFFFF;\n$primary-border: 1px solid #D9D9DE;\n$primary-font-color: #111111;\n$primary-link-color: #111111;\n$primary-link-hover-color: #111111;\n$primary-nav-font-color: rgba(255, 255, 255, .5);\n\n$accent-color: #26a69a;\n$accent-hover: #2BBBAD;\n\n\n/*\n * Typography\n * ========================================================================== */\n\n$font-family-base:      'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n/*\n * Layout\n * ========================================================================== */\n\n$max-content-width:     1000px;\n\n/*\n * Media queries breakpoints\n * ========================================================================== */\n\n$screen-xs-min:         480px;  /* Extra small screen / phone */\n$screen-sm-min:         768px;  /* Small screen / tablet */\n$screen-md-min:         992px;  /* Medium screen / desktop */\n$screen-lg-min:         1200px; /* Large screen / wide desktop */\n\n/*\n * Animations\n * ========================================================================== */\n\n$animation-swift-out:   .45s cubic-bezier(0.3, 1, 0.4, 1) 0s;\n\n\nmixin icon-spin() {\n\t-webkit-animation-name: spin;\n\t-webkit-animation-duration: 4000ms;\n\t-webkit-animation-iteration-count: infinite;\n\t-webkit-animation-timing-function: linear;\n\t-moz-animation-name: spin;\n\t-moz-animation-duration: 4000ms;\n\t-moz-animation-iteration-count: infinite;\n\t-moz-animation-timing-function: linear;\n\t-ms-animation-name: spin;\n\t-ms-animation-duration: 4000ms;\n\t-ms-animation-iteration-count: infinite;\n\t-ms-animation-timing-function: linear;\n\n\tanimation-name: spin;\n\tanimation-duration: 4000ms;\n\tanimation-iteration-count: infinite;\n\tanimation-timing-function: linear;\n}\n@-ms-keyframes spin {\n  from { -ms-transform: rotate(0deg); }\n  to { -ms-transform: rotate(360deg); }\n}\n@-moz-keyframes spin {\n  from { -moz-transform: rotate(0deg); }\n  to { -moz-transform: rotate(360deg); }\n}\n@-webkit-keyframes spin {\n  from { -webkit-transform: rotate(0deg); }\n  to { -webkit-transform: rotate(360deg); }\n}\n@keyframes spin {\n  from {\n      transform:rotate(0deg);\n  }\n  to {\n      transform:rotate(360deg);\n  }\n}\n"],"sourceRoot":"webpack://"}]);
  
  // exports
  exports.locals = {
  	"spin": "ContentPage_spin_r9x",
  	"root": "ContentPage_root_1Kg",
  	"container": "ContentPage_container_1JT"
  };

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _getPrototypeOf = __webpack_require__(42);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(43);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(44);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(45);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(46);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(6);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _withStyles = __webpack_require__(57);
  
  var _withStyles2 = _interopRequireDefault(_withStyles);
  
  var _ContactPage = __webpack_require__(82);
  
  var _ContactPage2 = _interopRequireDefault(_ContactPage);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var title = 'Contact Shain'; /**
                                * React Starter Kit (https://www.reactstarterkit.com/)
                                *
                                * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                                *
                                * This source code is licensed under the MIT license found in the
                                * LICENSE.txt file in the root directory of this source tree.
                                */
  
  var ContactPage = function (_Component) {
    (0, _inherits3.default)(ContactPage, _Component);
  
    function ContactPage() {
      (0, _classCallCheck3.default)(this, ContactPage);
      return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(ContactPage).apply(this, arguments));
    }
  
    (0, _createClass3.default)(ContactPage, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        this.context.onSetTitle(title);
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'div',
          { className: _ContactPage2.default.root },
          _react2.default.createElement(
            'div',
            { className: _ContactPage2.default.container },
            _react2.default.createElement(
              'h1',
              null,
              title
            ),
            _react2.default.createElement(
              'p',
              null,
              '...'
            )
          )
        );
      }
    }]);
    return ContactPage;
  }(_react.Component);
  
  ContactPage.contextTypes = {
    onSetTitle: _react.PropTypes.func.isRequired
  };
  exports.default = (0, _withStyles2.default)(ContactPage, _ContactPage2.default);

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(83);
      var insertCss = __webpack_require__(51);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = insertCss.bind(null, content);
    
      var removeCss = function() {};
  
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      if (false) {
        module.hot.accept("!!./../../../node_modules/css-loader/index.js?sourceMap&modules&localIdentName=[name]_[local]_[hash:base64:3]!./../../../node_modules/postcss-loader/index.js?parser=postcss-scss!./ContactPage.scss", function() {
          var newContent = require("!!./../../../node_modules/css-loader/index.js?sourceMap&modules&localIdentName=[name]_[local]_[hash:base64:3]!./../../../node_modules/postcss-loader/index.js?parser=postcss-scss!./ContactPage.scss");
          if (typeof newContent === 'string') {
            newContent = [[module.id, content, '']];
          }
          removeCss = insertCss(newContent, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(50)();
  // imports
  
  
  // module
  exports.push([module.id, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n/*\n * Colors\n * ========================================================================== */\n\n/* #222 */\n\n/* #404040 */\n\n/* #555 */\n\n/* #777 */\n\n/* #eee */\n\n/*\n * Typography\n * ========================================================================== */\n\n/*\n * Layout\n * ========================================================================== */\n\n/*\n * Media queries breakpoints\n * ========================================================================== */\n\n/* Extra small screen / phone */\n\n/* Small screen / tablet */\n\n/* Medium screen / desktop */\n\n/* Large screen / wide desktop */\n\n/*\n * Animations\n * ========================================================================== */\n\nmixin icon-spin() {\n\t-webkit-animation-name: ContactPage_spin_foJ;\n\t-webkit-animation-duration: 4000ms;\n\t-webkit-animation-iteration-count: infinite;\n\t-webkit-animation-timing-function: linear;\n\t-moz-animation-name: ContactPage_spin_foJ;\n\t-moz-animation-duration: 4000ms;\n\t-moz-animation-iteration-count: infinite;\n\t-moz-animation-timing-function: linear;\n\t-ms-animation-name: ContactPage_spin_foJ;\n\t-ms-animation-duration: 4000ms;\n\t-ms-animation-iteration-count: infinite;\n\t-ms-animation-timing-function: linear;\n\n\t-webkit-animation-name: ContactPage_spin_foJ;\n\n\t     -o-animation-name: ContactPage_spin_foJ;\n\n\t        animation-name: ContactPage_spin_foJ;\n\t-webkit-animation-duration: 4000ms;\n\t     -o-animation-duration: 4000ms;\n\t        animation-duration: 4000ms;\n\t-webkit-animation-iteration-count: infinite;\n\t     -o-animation-iteration-count: infinite;\n\t        animation-iteration-count: infinite;\n\t-webkit-animation-timing-function: linear;\n\t     -o-animation-timing-function: linear;\n\t        animation-timing-function: linear;\n}\n\n@-webkit-keyframes ContactPage_spin_foJ {\n  from { -webkit-transform: rotate(0deg); }\n  to { -webkit-transform: rotate(360deg); }\n}\n\n@-o-keyframes ContactPage_spin_foJ {\n  from {\n      -o-transform:rotate(0deg);\n         transform:rotate(0deg);\n  }\n  to {\n      -o-transform:rotate(360deg);\n         transform:rotate(360deg);\n  }\n}\n\n@keyframes ContactPage_spin_foJ {\n  from {\n      -webkit-transform:rotate(0deg);\n           -o-transform:rotate(0deg);\n              transform:rotate(0deg);\n  }\n  to {\n      -webkit-transform:rotate(360deg);\n           -o-transform:rotate(360deg);\n              transform:rotate(360deg);\n  }\n}\n\n.ContactPage_root_c4z {\n\n}\n\n.ContactPage_container_2pQ {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: 1000px;\n}\n", "", {"version":3,"sources":["/./src/components/ContactPage/ContactPage.scss","/./src/components/variables.scss"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;ACPH;;gFAEgF;;AAGxB,UAAU;;AACV,aAAa;;AACb,UAAU;;AACV,UAAU;;AACV,UAAU;;AAclE;;gFAEgF;;AAIhF;;gFAEgF;;AAIhF;;gFAEgF;;AAEhD,gCAAgC;;AAChC,2BAA2B;;AAC3B,6BAA6B;;AAC7B,iCAAiC;;AAEjE;;gFAEgF;;AAKhF;CACC,6CAA6B;CAC7B,mCAAmC;CACnC,4CAA4C;CAC5C,0CAA0C;CAC1C,0CAA0B;CAC1B,gCAAgC;CAChC,yCAAyC;CACzC,uCAAuC;CACvC,yCAAyB;CACzB,+BAA+B;CAC/B,wCAAwC;CACxC,sCAAsC;;CAEtC,6CAAqB;;MAArB,wCAAqB;;SAArB,qCAAqB;CACrB,mCAA2B;MAA3B,8BAA2B;SAA3B,2BAA2B;CAC3B,4CAAoC;MAApC,uCAAoC;SAApC,oCAAoC;CACpC,0CAAkC;MAAlC,qCAAkC;SAAlC,kCAAkC;CAClC;;AASD;EACE,OAAO,gCAAgC,EAAE;EACzC,KAAK,kCAAkC,EAAE;CAC1C;;AACD;EACE;MACI,0BAAuB;SAAvB,uBAAuB;GAC1B;EACD;MACI,4BAAyB;SAAzB,yBAAyB;GAC5B;CACF;;AAPD;EACE;MACI,+BAAuB;WAAvB,0BAAuB;cAAvB,uBAAuB;GAC1B;EACD;MACI,iCAAyB;WAAzB,4BAAyB;cAAzB,yBAAyB;GAC5B;CACF;;AD9ED;;CAEC;;AAED;EACE,eAAe;EACf,kBAAkB;EAClB,kBAA8B;CAC/B","file":"ContactPage.scss","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n@import '../variables.scss';\n\n.root {\n\n}\n\n.container {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: $max-content-width;\n}\n","/*\n * Colors\n * ========================================================================== */\n\n$white-base:            hsl(255, 255, 255);\n$gray-darker:           color(black lightness(+13.5%)); /* #222 */\n$gray-dark:             color(black lightness(+25%));   /* #404040 */\n$gray:                  color(black lightness(+33.5%)); /* #555 */\n$gray-light:            color(black lightness(+46.7%)); /* #777 */\n$gray-lighter:          color(black lightness(+93.5%)); /* #eee */\n\n$primary-color: #333333;\n$primary-white: #FFFFFF;\n$primary-border: 1px solid #D9D9DE;\n$primary-font-color: #111111;\n$primary-link-color: #111111;\n$primary-link-hover-color: #111111;\n$primary-nav-font-color: rgba(255, 255, 255, .5);\n\n$accent-color: #26a69a;\n$accent-hover: #2BBBAD;\n\n\n/*\n * Typography\n * ========================================================================== */\n\n$font-family-base:      'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n/*\n * Layout\n * ========================================================================== */\n\n$max-content-width:     1000px;\n\n/*\n * Media queries breakpoints\n * ========================================================================== */\n\n$screen-xs-min:         480px;  /* Extra small screen / phone */\n$screen-sm-min:         768px;  /* Small screen / tablet */\n$screen-md-min:         992px;  /* Medium screen / desktop */\n$screen-lg-min:         1200px; /* Large screen / wide desktop */\n\n/*\n * Animations\n * ========================================================================== */\n\n$animation-swift-out:   .45s cubic-bezier(0.3, 1, 0.4, 1) 0s;\n\n\nmixin icon-spin() {\n\t-webkit-animation-name: spin;\n\t-webkit-animation-duration: 4000ms;\n\t-webkit-animation-iteration-count: infinite;\n\t-webkit-animation-timing-function: linear;\n\t-moz-animation-name: spin;\n\t-moz-animation-duration: 4000ms;\n\t-moz-animation-iteration-count: infinite;\n\t-moz-animation-timing-function: linear;\n\t-ms-animation-name: spin;\n\t-ms-animation-duration: 4000ms;\n\t-ms-animation-iteration-count: infinite;\n\t-ms-animation-timing-function: linear;\n\n\tanimation-name: spin;\n\tanimation-duration: 4000ms;\n\tanimation-iteration-count: infinite;\n\tanimation-timing-function: linear;\n}\n@-ms-keyframes spin {\n  from { -ms-transform: rotate(0deg); }\n  to { -ms-transform: rotate(360deg); }\n}\n@-moz-keyframes spin {\n  from { -moz-transform: rotate(0deg); }\n  to { -moz-transform: rotate(360deg); }\n}\n@-webkit-keyframes spin {\n  from { -webkit-transform: rotate(0deg); }\n  to { -webkit-transform: rotate(360deg); }\n}\n@keyframes spin {\n  from {\n      transform:rotate(0deg);\n  }\n  to {\n      transform:rotate(360deg);\n  }\n}\n"],"sourceRoot":"webpack://"}]);
  
  // exports
  exports.locals = {
  	"spin": "ContactPage_spin_foJ",
  	"root": "ContactPage_root_c4z",
  	"container": "ContactPage_container_2pQ"
  };

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _getPrototypeOf = __webpack_require__(42);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(43);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(44);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(45);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(46);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(6);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _withStyles = __webpack_require__(57);
  
  var _withStyles2 = _interopRequireDefault(_withStyles);
  
  var _LoginPage = __webpack_require__(85);
  
  var _LoginPage2 = _interopRequireDefault(_LoginPage);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var title = 'SpotKnocker'; /**
                              * React Starter Kit (https://www.reactstarterkit.com/)
                              *
                              * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                              *
                              * This source code is licensed under the MIT license found in the
                              * LICENSE.txt file in the root directory of this source tree.
                              */
  
  var LoginPage = function (_Component) {
    (0, _inherits3.default)(LoginPage, _Component);
  
    function LoginPage() {
      (0, _classCallCheck3.default)(this, LoginPage);
      return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(LoginPage).apply(this, arguments));
    }
  
    (0, _createClass3.default)(LoginPage, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        this.context.onSetTitle(title);
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'div',
          { className: _LoginPage2.default.root },
          _react2.default.createElement(
            'div',
            { className: _LoginPage2.default.container },
            _react2.default.createElement(
              'h1',
              null,
              title
            ),
            _react2.default.createElement(
              'p',
              null,
              '...'
            )
          )
        );
      }
    }]);
    return LoginPage;
  }(_react.Component);
  
  LoginPage.contextTypes = {
    onSetTitle: _react.PropTypes.func.isRequired
  };
  exports.default = (0, _withStyles2.default)(LoginPage, _LoginPage2.default);

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(86);
      var insertCss = __webpack_require__(51);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = insertCss.bind(null, content);
    
      var removeCss = function() {};
  
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      if (false) {
        module.hot.accept("!!./../../../node_modules/css-loader/index.js?sourceMap&modules&localIdentName=[name]_[local]_[hash:base64:3]!./../../../node_modules/postcss-loader/index.js?parser=postcss-scss!./LoginPage.scss", function() {
          var newContent = require("!!./../../../node_modules/css-loader/index.js?sourceMap&modules&localIdentName=[name]_[local]_[hash:base64:3]!./../../../node_modules/postcss-loader/index.js?parser=postcss-scss!./LoginPage.scss");
          if (typeof newContent === 'string') {
            newContent = [[module.id, content, '']];
          }
          removeCss = insertCss(newContent, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(50)();
  // imports
  
  
  // module
  exports.push([module.id, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n/*\n * Colors\n * ========================================================================== */\n\n/* #222 */\n\n/* #404040 */\n\n/* #555 */\n\n/* #777 */\n\n/* #eee */\n\n/*\n * Typography\n * ========================================================================== */\n\n/*\n * Layout\n * ========================================================================== */\n\n/*\n * Media queries breakpoints\n * ========================================================================== */\n\n/* Extra small screen / phone */\n\n/* Small screen / tablet */\n\n/* Medium screen / desktop */\n\n/* Large screen / wide desktop */\n\n/*\n * Animations\n * ========================================================================== */\n\nmixin icon-spin() {\n\t-webkit-animation-name: LoginPage_spin_1yA;\n\t-webkit-animation-duration: 4000ms;\n\t-webkit-animation-iteration-count: infinite;\n\t-webkit-animation-timing-function: linear;\n\t-moz-animation-name: LoginPage_spin_1yA;\n\t-moz-animation-duration: 4000ms;\n\t-moz-animation-iteration-count: infinite;\n\t-moz-animation-timing-function: linear;\n\t-ms-animation-name: LoginPage_spin_1yA;\n\t-ms-animation-duration: 4000ms;\n\t-ms-animation-iteration-count: infinite;\n\t-ms-animation-timing-function: linear;\n\n\t-webkit-animation-name: LoginPage_spin_1yA;\n\n\t     -o-animation-name: LoginPage_spin_1yA;\n\n\t        animation-name: LoginPage_spin_1yA;\n\t-webkit-animation-duration: 4000ms;\n\t     -o-animation-duration: 4000ms;\n\t        animation-duration: 4000ms;\n\t-webkit-animation-iteration-count: infinite;\n\t     -o-animation-iteration-count: infinite;\n\t        animation-iteration-count: infinite;\n\t-webkit-animation-timing-function: linear;\n\t     -o-animation-timing-function: linear;\n\t        animation-timing-function: linear;\n}\n\n@-webkit-keyframes LoginPage_spin_1yA {\n  from { -webkit-transform: rotate(0deg); }\n  to { -webkit-transform: rotate(360deg); }\n}\n\n@-o-keyframes LoginPage_spin_1yA {\n  from {\n      -o-transform:rotate(0deg);\n         transform:rotate(0deg);\n  }\n  to {\n      -o-transform:rotate(360deg);\n         transform:rotate(360deg);\n  }\n}\n\n@keyframes LoginPage_spin_1yA {\n  from {\n      -webkit-transform:rotate(0deg);\n           -o-transform:rotate(0deg);\n              transform:rotate(0deg);\n  }\n  to {\n      -webkit-transform:rotate(360deg);\n           -o-transform:rotate(360deg);\n              transform:rotate(360deg);\n  }\n}\n\n.LoginPage_root_5f7 {\n\n}\n\n.LoginPage_container_2c5 {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: 1000px;\n}\n", "", {"version":3,"sources":["/./src/components/LoginPage/LoginPage.scss","/./src/components/variables.scss"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;ACPH;;gFAEgF;;AAGxB,UAAU;;AACV,aAAa;;AACb,UAAU;;AACV,UAAU;;AACV,UAAU;;AAclE;;gFAEgF;;AAIhF;;gFAEgF;;AAIhF;;gFAEgF;;AAEhD,gCAAgC;;AAChC,2BAA2B;;AAC3B,6BAA6B;;AAC7B,iCAAiC;;AAEjE;;gFAEgF;;AAKhF;CACC,2CAA6B;CAC7B,mCAAmC;CACnC,4CAA4C;CAC5C,0CAA0C;CAC1C,wCAA0B;CAC1B,gCAAgC;CAChC,yCAAyC;CACzC,uCAAuC;CACvC,uCAAyB;CACzB,+BAA+B;CAC/B,wCAAwC;CACxC,sCAAsC;;CAEtC,2CAAqB;;MAArB,sCAAqB;;SAArB,mCAAqB;CACrB,mCAA2B;MAA3B,8BAA2B;SAA3B,2BAA2B;CAC3B,4CAAoC;MAApC,uCAAoC;SAApC,oCAAoC;CACpC,0CAAkC;MAAlC,qCAAkC;SAAlC,kCAAkC;CAClC;;AASD;EACE,OAAO,gCAAgC,EAAE;EACzC,KAAK,kCAAkC,EAAE;CAC1C;;AACD;EACE;MACI,0BAAuB;SAAvB,uBAAuB;GAC1B;EACD;MACI,4BAAyB;SAAzB,yBAAyB;GAC5B;CACF;;AAPD;EACE;MACI,+BAAuB;WAAvB,0BAAuB;cAAvB,uBAAuB;GAC1B;EACD;MACI,iCAAyB;WAAzB,4BAAyB;cAAzB,yBAAyB;GAC5B;CACF;;AD9ED;;CAEC;;AAED;EACE,eAAe;EACf,kBAAkB;EAClB,kBAA8B;CAC/B","file":"LoginPage.scss","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n@import '../variables.scss';\n\n.root {\n\n}\n\n.container {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: $max-content-width;\n}\n","/*\n * Colors\n * ========================================================================== */\n\n$white-base:            hsl(255, 255, 255);\n$gray-darker:           color(black lightness(+13.5%)); /* #222 */\n$gray-dark:             color(black lightness(+25%));   /* #404040 */\n$gray:                  color(black lightness(+33.5%)); /* #555 */\n$gray-light:            color(black lightness(+46.7%)); /* #777 */\n$gray-lighter:          color(black lightness(+93.5%)); /* #eee */\n\n$primary-color: #333333;\n$primary-white: #FFFFFF;\n$primary-border: 1px solid #D9D9DE;\n$primary-font-color: #111111;\n$primary-link-color: #111111;\n$primary-link-hover-color: #111111;\n$primary-nav-font-color: rgba(255, 255, 255, .5);\n\n$accent-color: #26a69a;\n$accent-hover: #2BBBAD;\n\n\n/*\n * Typography\n * ========================================================================== */\n\n$font-family-base:      'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n/*\n * Layout\n * ========================================================================== */\n\n$max-content-width:     1000px;\n\n/*\n * Media queries breakpoints\n * ========================================================================== */\n\n$screen-xs-min:         480px;  /* Extra small screen / phone */\n$screen-sm-min:         768px;  /* Small screen / tablet */\n$screen-md-min:         992px;  /* Medium screen / desktop */\n$screen-lg-min:         1200px; /* Large screen / wide desktop */\n\n/*\n * Animations\n * ========================================================================== */\n\n$animation-swift-out:   .45s cubic-bezier(0.3, 1, 0.4, 1) 0s;\n\n\nmixin icon-spin() {\n\t-webkit-animation-name: spin;\n\t-webkit-animation-duration: 4000ms;\n\t-webkit-animation-iteration-count: infinite;\n\t-webkit-animation-timing-function: linear;\n\t-moz-animation-name: spin;\n\t-moz-animation-duration: 4000ms;\n\t-moz-animation-iteration-count: infinite;\n\t-moz-animation-timing-function: linear;\n\t-ms-animation-name: spin;\n\t-ms-animation-duration: 4000ms;\n\t-ms-animation-iteration-count: infinite;\n\t-ms-animation-timing-function: linear;\n\n\tanimation-name: spin;\n\tanimation-duration: 4000ms;\n\tanimation-iteration-count: infinite;\n\tanimation-timing-function: linear;\n}\n@-ms-keyframes spin {\n  from { -ms-transform: rotate(0deg); }\n  to { -ms-transform: rotate(360deg); }\n}\n@-moz-keyframes spin {\n  from { -moz-transform: rotate(0deg); }\n  to { -moz-transform: rotate(360deg); }\n}\n@-webkit-keyframes spin {\n  from { -webkit-transform: rotate(0deg); }\n  to { -webkit-transform: rotate(360deg); }\n}\n@keyframes spin {\n  from {\n      transform:rotate(0deg);\n  }\n  to {\n      transform:rotate(360deg);\n  }\n}\n"],"sourceRoot":"webpack://"}]);
  
  // exports
  exports.locals = {
  	"spin": "LoginPage_spin_1yA",
  	"root": "LoginPage_root_5f7",
  	"container": "LoginPage_container_2c5"
  };

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _getPrototypeOf = __webpack_require__(42);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(43);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(44);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(45);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(46);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(6);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _withStyles = __webpack_require__(57);
  
  var _withStyles2 = _interopRequireDefault(_withStyles);
  
  var _RegisterPage = __webpack_require__(88);
  
  var _RegisterPage2 = _interopRequireDefault(_RegisterPage);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var title = 'New User Registration'; /**
                                        * React Starter Kit (https://www.reactstarterkit.com/)
                                        *
                                        * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                                        *
                                        * This source code is licensed under the MIT license found in the
                                        * LICENSE.txt file in the root directory of this source tree.
                                        */
  
  var RegisterPage = function (_Component) {
    (0, _inherits3.default)(RegisterPage, _Component);
  
    function RegisterPage() {
      (0, _classCallCheck3.default)(this, RegisterPage);
      return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(RegisterPage).apply(this, arguments));
    }
  
    (0, _createClass3.default)(RegisterPage, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        this.context.onSetTitle(title);
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'div',
          { className: _RegisterPage2.default.root },
          _react2.default.createElement(
            'div',
            { className: _RegisterPage2.default.container },
            _react2.default.createElement(
              'h1',
              null,
              title
            ),
            _react2.default.createElement(
              'p',
              null,
              '...'
            )
          )
        );
      }
    }]);
    return RegisterPage;
  }(_react.Component);
  
  RegisterPage.contextTypes = {
    onSetTitle: _react.PropTypes.func.isRequired
  };
  exports.default = (0, _withStyles2.default)(RegisterPage, _RegisterPage2.default);

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(89);
      var insertCss = __webpack_require__(51);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = insertCss.bind(null, content);
    
      var removeCss = function() {};
  
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      if (false) {
        module.hot.accept("!!./../../../node_modules/css-loader/index.js?sourceMap&modules&localIdentName=[name]_[local]_[hash:base64:3]!./../../../node_modules/postcss-loader/index.js?parser=postcss-scss!./RegisterPage.scss", function() {
          var newContent = require("!!./../../../node_modules/css-loader/index.js?sourceMap&modules&localIdentName=[name]_[local]_[hash:base64:3]!./../../../node_modules/postcss-loader/index.js?parser=postcss-scss!./RegisterPage.scss");
          if (typeof newContent === 'string') {
            newContent = [[module.id, content, '']];
          }
          removeCss = insertCss(newContent, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(50)();
  // imports
  
  
  // module
  exports.push([module.id, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n/*\n * Colors\n * ========================================================================== */\n\n/* #222 */\n\n/* #404040 */\n\n/* #555 */\n\n/* #777 */\n\n/* #eee */\n\n/*\n * Typography\n * ========================================================================== */\n\n/*\n * Layout\n * ========================================================================== */\n\n/*\n * Media queries breakpoints\n * ========================================================================== */\n\n/* Extra small screen / phone */\n\n/* Small screen / tablet */\n\n/* Medium screen / desktop */\n\n/* Large screen / wide desktop */\n\n/*\n * Animations\n * ========================================================================== */\n\nmixin icon-spin() {\n\t-webkit-animation-name: RegisterPage_spin_36x;\n\t-webkit-animation-duration: 4000ms;\n\t-webkit-animation-iteration-count: infinite;\n\t-webkit-animation-timing-function: linear;\n\t-moz-animation-name: RegisterPage_spin_36x;\n\t-moz-animation-duration: 4000ms;\n\t-moz-animation-iteration-count: infinite;\n\t-moz-animation-timing-function: linear;\n\t-ms-animation-name: RegisterPage_spin_36x;\n\t-ms-animation-duration: 4000ms;\n\t-ms-animation-iteration-count: infinite;\n\t-ms-animation-timing-function: linear;\n\n\t-webkit-animation-name: RegisterPage_spin_36x;\n\n\t     -o-animation-name: RegisterPage_spin_36x;\n\n\t        animation-name: RegisterPage_spin_36x;\n\t-webkit-animation-duration: 4000ms;\n\t     -o-animation-duration: 4000ms;\n\t        animation-duration: 4000ms;\n\t-webkit-animation-iteration-count: infinite;\n\t     -o-animation-iteration-count: infinite;\n\t        animation-iteration-count: infinite;\n\t-webkit-animation-timing-function: linear;\n\t     -o-animation-timing-function: linear;\n\t        animation-timing-function: linear;\n}\n\n@-webkit-keyframes RegisterPage_spin_36x {\n  from { -webkit-transform: rotate(0deg); }\n  to { -webkit-transform: rotate(360deg); }\n}\n\n@-o-keyframes RegisterPage_spin_36x {\n  from {\n      -o-transform:rotate(0deg);\n         transform:rotate(0deg);\n  }\n  to {\n      -o-transform:rotate(360deg);\n         transform:rotate(360deg);\n  }\n}\n\n@keyframes RegisterPage_spin_36x {\n  from {\n      -webkit-transform:rotate(0deg);\n           -o-transform:rotate(0deg);\n              transform:rotate(0deg);\n  }\n  to {\n      -webkit-transform:rotate(360deg);\n           -o-transform:rotate(360deg);\n              transform:rotate(360deg);\n  }\n}\n\n.RegisterPage_root_2Yr {\n\n}\n\n.RegisterPage_container_6L5 {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: 1000px;\n}\n", "", {"version":3,"sources":["/./src/components/RegisterPage/RegisterPage.scss","/./src/components/variables.scss"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;ACPH;;gFAEgF;;AAGxB,UAAU;;AACV,aAAa;;AACb,UAAU;;AACV,UAAU;;AACV,UAAU;;AAclE;;gFAEgF;;AAIhF;;gFAEgF;;AAIhF;;gFAEgF;;AAEhD,gCAAgC;;AAChC,2BAA2B;;AAC3B,6BAA6B;;AAC7B,iCAAiC;;AAEjE;;gFAEgF;;AAKhF;CACC,8CAA6B;CAC7B,mCAAmC;CACnC,4CAA4C;CAC5C,0CAA0C;CAC1C,2CAA0B;CAC1B,gCAAgC;CAChC,yCAAyC;CACzC,uCAAuC;CACvC,0CAAyB;CACzB,+BAA+B;CAC/B,wCAAwC;CACxC,sCAAsC;;CAEtC,8CAAqB;;MAArB,yCAAqB;;SAArB,sCAAqB;CACrB,mCAA2B;MAA3B,8BAA2B;SAA3B,2BAA2B;CAC3B,4CAAoC;MAApC,uCAAoC;SAApC,oCAAoC;CACpC,0CAAkC;MAAlC,qCAAkC;SAAlC,kCAAkC;CAClC;;AASD;EACE,OAAO,gCAAgC,EAAE;EACzC,KAAK,kCAAkC,EAAE;CAC1C;;AACD;EACE;MACI,0BAAuB;SAAvB,uBAAuB;GAC1B;EACD;MACI,4BAAyB;SAAzB,yBAAyB;GAC5B;CACF;;AAPD;EACE;MACI,+BAAuB;WAAvB,0BAAuB;cAAvB,uBAAuB;GAC1B;EACD;MACI,iCAAyB;WAAzB,4BAAyB;cAAzB,yBAAyB;GAC5B;CACF;;AD9ED;;CAEC;;AAED;EACE,eAAe;EACf,kBAAkB;EAClB,kBAA8B;CAC/B","file":"RegisterPage.scss","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n@import '../variables.scss';\n\n.root {\n\n}\n\n.container {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: $max-content-width;\n}\n","/*\n * Colors\n * ========================================================================== */\n\n$white-base:            hsl(255, 255, 255);\n$gray-darker:           color(black lightness(+13.5%)); /* #222 */\n$gray-dark:             color(black lightness(+25%));   /* #404040 */\n$gray:                  color(black lightness(+33.5%)); /* #555 */\n$gray-light:            color(black lightness(+46.7%)); /* #777 */\n$gray-lighter:          color(black lightness(+93.5%)); /* #eee */\n\n$primary-color: #333333;\n$primary-white: #FFFFFF;\n$primary-border: 1px solid #D9D9DE;\n$primary-font-color: #111111;\n$primary-link-color: #111111;\n$primary-link-hover-color: #111111;\n$primary-nav-font-color: rgba(255, 255, 255, .5);\n\n$accent-color: #26a69a;\n$accent-hover: #2BBBAD;\n\n\n/*\n * Typography\n * ========================================================================== */\n\n$font-family-base:      'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n/*\n * Layout\n * ========================================================================== */\n\n$max-content-width:     1000px;\n\n/*\n * Media queries breakpoints\n * ========================================================================== */\n\n$screen-xs-min:         480px;  /* Extra small screen / phone */\n$screen-sm-min:         768px;  /* Small screen / tablet */\n$screen-md-min:         992px;  /* Medium screen / desktop */\n$screen-lg-min:         1200px; /* Large screen / wide desktop */\n\n/*\n * Animations\n * ========================================================================== */\n\n$animation-swift-out:   .45s cubic-bezier(0.3, 1, 0.4, 1) 0s;\n\n\nmixin icon-spin() {\n\t-webkit-animation-name: spin;\n\t-webkit-animation-duration: 4000ms;\n\t-webkit-animation-iteration-count: infinite;\n\t-webkit-animation-timing-function: linear;\n\t-moz-animation-name: spin;\n\t-moz-animation-duration: 4000ms;\n\t-moz-animation-iteration-count: infinite;\n\t-moz-animation-timing-function: linear;\n\t-ms-animation-name: spin;\n\t-ms-animation-duration: 4000ms;\n\t-ms-animation-iteration-count: infinite;\n\t-ms-animation-timing-function: linear;\n\n\tanimation-name: spin;\n\tanimation-duration: 4000ms;\n\tanimation-iteration-count: infinite;\n\tanimation-timing-function: linear;\n}\n@-ms-keyframes spin {\n  from { -ms-transform: rotate(0deg); }\n  to { -ms-transform: rotate(360deg); }\n}\n@-moz-keyframes spin {\n  from { -moz-transform: rotate(0deg); }\n  to { -moz-transform: rotate(360deg); }\n}\n@-webkit-keyframes spin {\n  from { -webkit-transform: rotate(0deg); }\n  to { -webkit-transform: rotate(360deg); }\n}\n@keyframes spin {\n  from {\n      transform:rotate(0deg);\n  }\n  to {\n      transform:rotate(360deg);\n  }\n}\n"],"sourceRoot":"webpack://"}]);
  
  // exports
  exports.locals = {
  	"spin": "RegisterPage_spin_36x",
  	"root": "RegisterPage_root_2Yr",
  	"container": "RegisterPage_container_6L5"
  };

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _getPrototypeOf = __webpack_require__(42);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(43);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(44);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(45);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(46);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(6);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _withStyles = __webpack_require__(57);
  
  var _withStyles2 = _interopRequireDefault(_withStyles);
  
  var _NotFoundPage = __webpack_require__(91);
  
  var _NotFoundPage2 = _interopRequireDefault(_NotFoundPage);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var title = 'Page Not Found'; /**
                                 * React Starter Kit (https://www.reactstarterkit.com/)
                                 *
                                 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                                 *
                                 * This source code is licensed under the MIT license found in the
                                 * LICENSE.txt file in the root directory of this source tree.
                                 */
  
  var NotFoundPage = function (_Component) {
    (0, _inherits3.default)(NotFoundPage, _Component);
  
    function NotFoundPage() {
      (0, _classCallCheck3.default)(this, NotFoundPage);
      return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(NotFoundPage).apply(this, arguments));
    }
  
    (0, _createClass3.default)(NotFoundPage, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        this.context.onSetTitle(title);
        this.context.onPageNotFound();
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'h1',
            null,
            title
          ),
          _react2.default.createElement(
            'p',
            null,
            'Sorry, but the page you were trying to view does not exist.'
          )
        );
      }
    }]);
    return NotFoundPage;
  }(_react.Component);
  
  NotFoundPage.contextTypes = {
    onSetTitle: _react.PropTypes.func.isRequired,
    onPageNotFound: _react.PropTypes.func.isRequired
  };
  exports.default = (0, _withStyles2.default)(NotFoundPage, _NotFoundPage2.default);

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(92);
      var insertCss = __webpack_require__(51);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = insertCss.bind(null, content);
    
      var removeCss = function() {};
  
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      if (false) {
        module.hot.accept("!!./../../../node_modules/css-loader/index.js?sourceMap&modules&localIdentName=[name]_[local]_[hash:base64:3]!./../../../node_modules/postcss-loader/index.js?parser=postcss-scss!./NotFoundPage.scss", function() {
          var newContent = require("!!./../../../node_modules/css-loader/index.js?sourceMap&modules&localIdentName=[name]_[local]_[hash:base64:3]!./../../../node_modules/postcss-loader/index.js?parser=postcss-scss!./NotFoundPage.scss");
          if (typeof newContent === 'string') {
            newContent = [[module.id, content, '']];
          }
          removeCss = insertCss(newContent, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(50)();
  // imports
  
  
  // module
  exports.push([module.id, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n* {\n  margin: 0;\n  line-height: 1.2;\n}\n\nhtml {\n  display: table;\n  width: 100%;\n  height: 100%;\n  color: #888;\n  text-align: center;\n  font-family: sans-serif;\n}\n\nbody {\n  display: table-cell;\n  margin: 2em auto;\n  vertical-align: middle;\n}\n\nh1 {\n  color: #555;\n  font-weight: 400;\n  font-size: 2em;\n}\n\np {\n  margin: 0 auto;\n  width: 280px;\n}\n\n@media only screen and (max-width: 280px) {\n\n  body, p {\n    width: 95%;\n  }\n\n  h1 {\n    font-size: 1.5em;\n    margin: 0 0 0.3em;\n  }\n\n}\n", "", {"version":3,"sources":["/./src/components/NotFoundPage/NotFoundPage.scss"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;AAEH;EACE,UAAU;EACV,iBAAiB;CAClB;;AAED;EACE,eAAe;EACf,YAAY;EACZ,aAAa;EACb,YAAY;EACZ,mBAAmB;EACnB,wBAAwB;CACzB;;AAED;EACE,oBAAoB;EACpB,iBAAiB;EACjB,uBAAuB;CACxB;;AAED;EACE,YAAY;EACZ,iBAAiB;EACjB,eAAe;CAChB;;AAED;EACE,eAAe;EACf,aAAa;CACd;;AAED;;EAEE;IACE,WAAW;GACZ;;EAED;IACE,iBAAiB;IACjB,kBAAkB;GACnB;;CAEF","file":"NotFoundPage.scss","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n* {\n  margin: 0;\n  line-height: 1.2;\n}\n\nhtml {\n  display: table;\n  width: 100%;\n  height: 100%;\n  color: #888;\n  text-align: center;\n  font-family: sans-serif;\n}\n\nbody {\n  display: table-cell;\n  margin: 2em auto;\n  vertical-align: middle;\n}\n\nh1 {\n  color: #555;\n  font-weight: 400;\n  font-size: 2em;\n}\n\np {\n  margin: 0 auto;\n  width: 280px;\n}\n\n@media only screen and (max-width: 280px) {\n\n  body, p {\n    width: 95%;\n  }\n\n  h1 {\n    font-size: 1.5em;\n    margin: 0 0 0.3em;\n  }\n\n}\n"],"sourceRoot":"webpack://"}]);
  
  // exports


/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _getPrototypeOf = __webpack_require__(42);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(43);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(44);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(45);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(46);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(6);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _withStyles = __webpack_require__(57);
  
  var _withStyles2 = _interopRequireDefault(_withStyles);
  
  var _ErrorPage = __webpack_require__(94);
  
  var _ErrorPage2 = _interopRequireDefault(_ErrorPage);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var title = 'Error'; /**
                        * React Starter Kit (https://www.reactstarterkit.com/)
                        *
                        * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                        *
                        * This source code is licensed under the MIT license found in the
                        * LICENSE.txt file in the root directory of this source tree.
                        */
  
  var ErrorPage = function (_Component) {
    (0, _inherits3.default)(ErrorPage, _Component);
  
    function ErrorPage() {
      (0, _classCallCheck3.default)(this, ErrorPage);
      return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(ErrorPage).apply(this, arguments));
    }
  
    (0, _createClass3.default)(ErrorPage, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        this.context.onSetTitle(title);
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'h1',
            null,
            title
          ),
          _react2.default.createElement(
            'p',
            null,
            'Sorry, an critical error occurred on this page.'
          )
        );
      }
    }]);
    return ErrorPage;
  }(_react.Component);
  
  ErrorPage.contextTypes = {
    onSetTitle: _react.PropTypes.func.isRequired,
    onPageNotFound: _react.PropTypes.func.isRequired
  };
  exports.default = (0, _withStyles2.default)(ErrorPage, _ErrorPage2.default);

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(95);
      var insertCss = __webpack_require__(51);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = insertCss.bind(null, content);
    
      var removeCss = function() {};
  
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      if (false) {
        module.hot.accept("!!./../../../node_modules/css-loader/index.js?sourceMap&modules&localIdentName=[name]_[local]_[hash:base64:3]!./../../../node_modules/postcss-loader/index.js?parser=postcss-scss!./ErrorPage.scss", function() {
          var newContent = require("!!./../../../node_modules/css-loader/index.js?sourceMap&modules&localIdentName=[name]_[local]_[hash:base64:3]!./../../../node_modules/postcss-loader/index.js?parser=postcss-scss!./ErrorPage.scss");
          if (typeof newContent === 'string') {
            newContent = [[module.id, content, '']];
          }
          removeCss = insertCss(newContent, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(50)();
  // imports
  
  
  // module
  exports.push([module.id, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n* {\n  margin: 0;\n  line-height: 1.2;\n}\n\nhtml {\n  display: table;\n  width: 100%;\n  height: 100%;\n  color: #888;\n  text-align: center;\n  font-family: sans-serif;\n}\n\nbody {\n  display: table-cell;\n  margin: 2em auto;\n  vertical-align: middle;\n}\n\nh1 {\n  color: #555;\n  font-weight: 400;\n  font-size: 2em;\n}\n\np {\n  margin: 0 auto;\n  width: 280px;\n}\n\n@media only screen and (max-width: 280px) {\n\n  body, p {\n    width: 95%;\n  }\n\n  h1 {\n    font-size: 1.5em;\n    margin: 0 0 0.3em;\n\n  }\n\n}\n", "", {"version":3,"sources":["/./src/components/ErrorPage/ErrorPage.scss"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;AAEH;EACE,UAAU;EACV,iBAAiB;CAClB;;AAED;EACE,eAAe;EACf,YAAY;EACZ,aAAa;EACb,YAAY;EACZ,mBAAmB;EACnB,wBAAwB;CACzB;;AAED;EACE,oBAAoB;EACpB,iBAAiB;EACjB,uBAAuB;CACxB;;AAED;EACE,YAAY;EACZ,iBAAiB;EACjB,eAAe;CAChB;;AAED;EACE,eAAe;EACf,aAAa;CACd;;AAED;;EAEE;IACE,WAAW;GACZ;;EAED;IACE,iBAAiB;IACjB,kBAAkB;;GAEnB;;CAEF","file":"ErrorPage.scss","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n* {\n  margin: 0;\n  line-height: 1.2;\n}\n\nhtml {\n  display: table;\n  width: 100%;\n  height: 100%;\n  color: #888;\n  text-align: center;\n  font-family: sans-serif;\n}\n\nbody {\n  display: table-cell;\n  margin: 2em auto;\n  vertical-align: middle;\n}\n\nh1 {\n  color: #555;\n  font-weight: 400;\n  font-size: 2em;\n}\n\np {\n  margin: 0 auto;\n  width: 280px;\n}\n\n@media only screen and (max-width: 280px) {\n\n  body, p {\n    width: 95%;\n  }\n\n  h1 {\n    font-size: 1.5em;\n    margin: 0 0 0.3em;\n\n  }\n\n}\n"],"sourceRoot":"webpack://"}]);
  
  // exports


/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _getPrototypeOf = __webpack_require__(42);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(43);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(44);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(45);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(46);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(6);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _withStyles = __webpack_require__(57);
  
  var _withStyles2 = _interopRequireDefault(_withStyles);
  
  var _ProfilePage = __webpack_require__(97);
  
  var _ProfilePage2 = _interopRequireDefault(_ProfilePage);
  
  var _Splash = __webpack_require__(99);
  
  var _Splash2 = _interopRequireDefault(_Splash);
  
  var _Profile = __webpack_require__(102);
  
  var _Profile2 = _interopRequireDefault(_Profile);
  
  var _Projects = __webpack_require__(105);
  
  var _Projects2 = _interopRequireDefault(_Projects);
  
  var _Contact = __webpack_require__(111);
  
  var _Contact2 = _interopRequireDefault(_Contact);
  
  var _reactParallax = __webpack_require__(114);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var title = 'Shain Lafazan';
  
  var ProfilePage = function (_Component) {
    (0, _inherits3.default)(ProfilePage, _Component);
  
    function ProfilePage() {
      (0, _classCallCheck3.default)(this, ProfilePage);
      return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(ProfilePage).apply(this, arguments));
    }
  
    (0, _createClass3.default)(ProfilePage, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        this.context.onSetTitle(title);
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'div',
          { className: _ProfilePage2.default.root },
          _react2.default.createElement(
            'div',
            { className: _ProfilePage2.default.container },
            _react2.default.createElement(
              _reactParallax.Parallax,
              { strength: 300, bgImage: "bg-blur.jpg", className: _ProfilePage2.default.parallax },
              _react2.default.createElement(_Splash2.default, null)
            ),
            _react2.default.createElement(_Profile2.default, null),
            _react2.default.createElement(_Projects2.default, null),
            _react2.default.createElement(_Contact2.default, null)
          )
        );
      }
    }]);
    return ProfilePage;
  }(_react.Component);
  
  ProfilePage.contextTypes = {
    onSetTitle: _react.PropTypes.func.isRequired
  };
  exports.default = (0, _withStyles2.default)(ProfilePage, _ProfilePage2.default);

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(98);
      var insertCss = __webpack_require__(51);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = insertCss.bind(null, content);
    
      var removeCss = function() {};
  
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      if (false) {
        module.hot.accept("!!./../../../node_modules/css-loader/index.js?sourceMap&modules&localIdentName=[name]_[local]_[hash:base64:3]!./../../../node_modules/postcss-loader/index.js?parser=postcss-scss!./ProfilePage.scss", function() {
          var newContent = require("!!./../../../node_modules/css-loader/index.js?sourceMap&modules&localIdentName=[name]_[local]_[hash:base64:3]!./../../../node_modules/postcss-loader/index.js?parser=postcss-scss!./ProfilePage.scss");
          if (typeof newContent === 'string') {
            newContent = [[module.id, content, '']];
          }
          removeCss = insertCss(newContent, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(50)();
  // imports
  
  
  // module
  exports.push([module.id, "/*\n * Colors\n * ========================================================================== */\n\n/* #222 */\n\n/* #404040 */\n\n/* #555 */\n\n/* #777 */\n\n/* #eee */\n\n/*\n * Typography\n * ========================================================================== */\n\n/*\n * Layout\n * ========================================================================== */\n\n/*\n * Media queries breakpoints\n * ========================================================================== */\n\n/* Extra small screen / phone */\n\n/* Small screen / tablet */\n\n/* Medium screen / desktop */\n\n/* Large screen / wide desktop */\n\n/*\n * Animations\n * ========================================================================== */\n\nmixin icon-spin() {\n\t-webkit-animation-name: ProfilePage_spin_90G;\n\t-webkit-animation-duration: 4000ms;\n\t-webkit-animation-iteration-count: infinite;\n\t-webkit-animation-timing-function: linear;\n\t-moz-animation-name: ProfilePage_spin_90G;\n\t-moz-animation-duration: 4000ms;\n\t-moz-animation-iteration-count: infinite;\n\t-moz-animation-timing-function: linear;\n\t-ms-animation-name: ProfilePage_spin_90G;\n\t-ms-animation-duration: 4000ms;\n\t-ms-animation-iteration-count: infinite;\n\t-ms-animation-timing-function: linear;\n\n\t-webkit-animation-name: ProfilePage_spin_90G;\n\n\t     -o-animation-name: ProfilePage_spin_90G;\n\n\t        animation-name: ProfilePage_spin_90G;\n\t-webkit-animation-duration: 4000ms;\n\t     -o-animation-duration: 4000ms;\n\t        animation-duration: 4000ms;\n\t-webkit-animation-iteration-count: infinite;\n\t     -o-animation-iteration-count: infinite;\n\t        animation-iteration-count: infinite;\n\t-webkit-animation-timing-function: linear;\n\t     -o-animation-timing-function: linear;\n\t        animation-timing-function: linear;\n}\n\n@-webkit-keyframes ProfilePage_spin_90G {\n  from { -webkit-transform: rotate(0deg); }\n  to { -webkit-transform: rotate(360deg); }\n}\n\n@-o-keyframes ProfilePage_spin_90G {\n  from {\n      -o-transform:rotate(0deg);\n         transform:rotate(0deg);\n  }\n  to {\n      -o-transform:rotate(360deg);\n         transform:rotate(360deg);\n  }\n}\n\n@keyframes ProfilePage_spin_90G {\n  from {\n      -webkit-transform:rotate(0deg);\n           -o-transform:rotate(0deg);\n              transform:rotate(0deg);\n  }\n  to {\n      -webkit-transform:rotate(360deg);\n           -o-transform:rotate(360deg);\n              transform:rotate(360deg);\n  }\n}\n\nbody {\n\tbackground-color: #BCB7A5;\n}\n\n.ProfilePage_root_3NI {\n\twidth: 100%;\n}\n\n.ProfilePage_container_37d {\n  margin: 0 auto;\n  padding: 0;\n}\n", "", {"version":3,"sources":["/./src/components/variables.scss","/./src/components/ProfilePage/ProfilePage.scss"],"names":[],"mappings":"AAAA;;gFAEgF;;AAGxB,UAAU;;AACV,aAAa;;AACb,UAAU;;AACV,UAAU;;AACV,UAAU;;AAclE;;gFAEgF;;AAIhF;;gFAEgF;;AAIhF;;gFAEgF;;AAEhD,gCAAgC;;AAChC,2BAA2B;;AAC3B,6BAA6B;;AAC7B,iCAAiC;;AAEjE;;gFAEgF;;AAKhF;CACC,6CAA6B;CAC7B,mCAAmC;CACnC,4CAA4C;CAC5C,0CAA0C;CAC1C,0CAA0B;CAC1B,gCAAgC;CAChC,yCAAyC;CACzC,uCAAuC;CACvC,yCAAyB;CACzB,+BAA+B;CAC/B,wCAAwC;CACxC,sCAAsC;;CAEtC,6CAAqB;;MAArB,wCAAqB;;SAArB,qCAAqB;CACrB,mCAA2B;MAA3B,8BAA2B;SAA3B,2BAA2B;CAC3B,4CAAoC;MAApC,uCAAoC;SAApC,oCAAoC;CACpC,0CAAkC;MAAlC,qCAAkC;SAAlC,kCAAkC;CAClC;;AASD;EACE,OAAO,gCAAgC,EAAE;EACzC,KAAK,kCAAkC,EAAE;CAC1C;;AACD;EACE;MACI,0BAAuB;SAAvB,uBAAuB;GAC1B;EACD;MACI,4BAAyB;SAAzB,yBAAyB;GAC5B;CACF;;AAPD;EACE;MACI,+BAAuB;WAAvB,0BAAuB;cAAvB,uBAAuB;GAC1B;EACD;MACI,iCAAyB;WAAzB,4BAAyB;cAAzB,yBAAyB;GAC5B;CACF;;ACtFD;CACC,0BAA0B;CAC1B;;AAED;CACC,YAAY;CACZ;;AAED;EACE,eAAe;EACf,WAAW;CACZ","file":"ProfilePage.scss","sourcesContent":["/*\n * Colors\n * ========================================================================== */\n\n$white-base:            hsl(255, 255, 255);\n$gray-darker:           color(black lightness(+13.5%)); /* #222 */\n$gray-dark:             color(black lightness(+25%));   /* #404040 */\n$gray:                  color(black lightness(+33.5%)); /* #555 */\n$gray-light:            color(black lightness(+46.7%)); /* #777 */\n$gray-lighter:          color(black lightness(+93.5%)); /* #eee */\n\n$primary-color: #333333;\n$primary-white: #FFFFFF;\n$primary-border: 1px solid #D9D9DE;\n$primary-font-color: #111111;\n$primary-link-color: #111111;\n$primary-link-hover-color: #111111;\n$primary-nav-font-color: rgba(255, 255, 255, .5);\n\n$accent-color: #26a69a;\n$accent-hover: #2BBBAD;\n\n\n/*\n * Typography\n * ========================================================================== */\n\n$font-family-base:      'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n/*\n * Layout\n * ========================================================================== */\n\n$max-content-width:     1000px;\n\n/*\n * Media queries breakpoints\n * ========================================================================== */\n\n$screen-xs-min:         480px;  /* Extra small screen / phone */\n$screen-sm-min:         768px;  /* Small screen / tablet */\n$screen-md-min:         992px;  /* Medium screen / desktop */\n$screen-lg-min:         1200px; /* Large screen / wide desktop */\n\n/*\n * Animations\n * ========================================================================== */\n\n$animation-swift-out:   .45s cubic-bezier(0.3, 1, 0.4, 1) 0s;\n\n\nmixin icon-spin() {\n\t-webkit-animation-name: spin;\n\t-webkit-animation-duration: 4000ms;\n\t-webkit-animation-iteration-count: infinite;\n\t-webkit-animation-timing-function: linear;\n\t-moz-animation-name: spin;\n\t-moz-animation-duration: 4000ms;\n\t-moz-animation-iteration-count: infinite;\n\t-moz-animation-timing-function: linear;\n\t-ms-animation-name: spin;\n\t-ms-animation-duration: 4000ms;\n\t-ms-animation-iteration-count: infinite;\n\t-ms-animation-timing-function: linear;\n\n\tanimation-name: spin;\n\tanimation-duration: 4000ms;\n\tanimation-iteration-count: infinite;\n\tanimation-timing-function: linear;\n}\n@-ms-keyframes spin {\n  from { -ms-transform: rotate(0deg); }\n  to { -ms-transform: rotate(360deg); }\n}\n@-moz-keyframes spin {\n  from { -moz-transform: rotate(0deg); }\n  to { -moz-transform: rotate(360deg); }\n}\n@-webkit-keyframes spin {\n  from { -webkit-transform: rotate(0deg); }\n  to { -webkit-transform: rotate(360deg); }\n}\n@keyframes spin {\n  from {\n      transform:rotate(0deg);\n  }\n  to {\n      transform:rotate(360deg);\n  }\n}\n","\n@import '../variables.scss';\n\nbody {\n\tbackground-color: #BCB7A5;\n}\n\n.root {\n\twidth: 100%;\n}\n\n.container {\n  margin: 0 auto;\n  padding: 0;\n}\n"],"sourceRoot":"webpack://"}]);
  
  // exports
  exports.locals = {
  	"spin": "ProfilePage_spin_90G",
  	"root": "ProfilePage_root_3NI",
  	"container": "ProfilePage_container_37d"
  };

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _getPrototypeOf = __webpack_require__(42);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(43);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(44);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(45);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(46);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(6);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _withStyles = __webpack_require__(57);
  
  var _withStyles2 = _interopRequireDefault(_withStyles);
  
  var _Splash = __webpack_require__(100);
  
  var _Splash2 = _interopRequireDefault(_Splash);
  
  var _reactMaterialize = __webpack_require__(73);
  
  var _SVGIcon = __webpack_require__(77);
  
  var _SVGIcon2 = _interopRequireDefault(_SVGIcon);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var Splash = function (_Component) {
    (0, _inherits3.default)(Splash, _Component);
  
    function Splash() {
      (0, _classCallCheck3.default)(this, Splash);
      return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Splash).apply(this, arguments));
    }
  
    (0, _createClass3.default)(Splash, [{
      key: 'scrollDown',
      value: function scrollDown() {
        var n = $(window).height();
        $('html, body').animate({ scrollTop: n }, 800, 'easeInExpo');
      }
    }, {
      key: 'scrollToBottom',
      value: function scrollToBottom() {
        var n = $(document).height();
        $('html, body').animate({ scrollTop: n }, 800, 'easeInExpo');
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'div',
          { className: _Splash2.default.root, id: 'splash' },
          _react2.default.createElement(
            'div',
            { className: _Splash2.default.container },
            _react2.default.createElement(
              'div',
              { className: _Splash2.default.logoContainer },
              _react2.default.createElement(
                _reactMaterialize.Icon,
                { className: _Splash2.default.logo, large: true },
                'code'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: _Splash2.default.lowerText },
              _react2.default.createElement(
                'h1',
                { className: _Splash2.default.heading },
                'Shain Lafazan'
              ),
              _react2.default.createElement(
                'h2',
                { className: _Splash2.default.subheading },
                'Software Engineer'
              ),
              _react2.default.createElement(
                'h2',
                { className: _Splash2.default.subheading2 },
                'Full Stack Web and Mobile Development'
              ),
              _react2.default.createElement(
                _reactMaterialize.Button,
                { onClick: this.scrollToBottom },
                'Ask for a Quote'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: _Splash2.default.bottomTextContainer },
              _react2.default.createElement(
                'a',
                { id: 'learn-more', className: _Splash2.default.bottomLink, onClick: this.scrollDown },
                'Learn more about what I do'
              ),
              _react2.default.createElement(
                'a',
                { id: 'learn-more-chevron', onClick: this.scrollDown, className: _Splash2.default.arrowIcon },
                _react2.default.createElement(_SVGIcon2.default, { size: '3.0rem', icon: 'keyboard-arrow-down', className: _Splash2.default.arrowIcon, fillColor: 'white' })
              )
            )
          )
        );
      }
    }]);
    return Splash;
  }(_react.Component);
  
  exports.default = (0, _withStyles2.default)(Splash, _Splash2.default);

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(101);
      var insertCss = __webpack_require__(51);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = insertCss.bind(null, content);
    
      var removeCss = function() {};
  
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      if (false) {
        module.hot.accept("!!./../../../../node_modules/css-loader/index.js?sourceMap&modules&localIdentName=[name]_[local]_[hash:base64:3]!./../../../../node_modules/postcss-loader/index.js?parser=postcss-scss!./Splash.scss", function() {
          var newContent = require("!!./../../../../node_modules/css-loader/index.js?sourceMap&modules&localIdentName=[name]_[local]_[hash:base64:3]!./../../../../node_modules/postcss-loader/index.js?parser=postcss-scss!./Splash.scss");
          if (typeof newContent === 'string') {
            newContent = [[module.id, content, '']];
          }
          removeCss = insertCss(newContent, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(50)();
  // imports
  
  
  // module
  exports.push([module.id, "/*\n * Colors\n * ========================================================================== */\n\n/* #222 */\n\n/* #404040 */\n\n/* #555 */\n\n/* #777 */\n\n/* #eee */\n\n/*\n * Typography\n * ========================================================================== */\n\n/*\n * Layout\n * ========================================================================== */\n\n/*\n * Media queries breakpoints\n * ========================================================================== */\n\n/* Extra small screen / phone */\n\n/* Small screen / tablet */\n\n/* Medium screen / desktop */\n\n/* Large screen / wide desktop */\n\n/*\n * Animations\n * ========================================================================== */\n\nmixin icon-spin() {\n\t-webkit-animation-name: Splash_spin_13E;\n\t-webkit-animation-duration: 4000ms;\n\t-webkit-animation-iteration-count: infinite;\n\t-webkit-animation-timing-function: linear;\n\t-moz-animation-name: Splash_spin_13E;\n\t-moz-animation-duration: 4000ms;\n\t-moz-animation-iteration-count: infinite;\n\t-moz-animation-timing-function: linear;\n\t-ms-animation-name: Splash_spin_13E;\n\t-ms-animation-duration: 4000ms;\n\t-ms-animation-iteration-count: infinite;\n\t-ms-animation-timing-function: linear;\n\n\t-webkit-animation-name: Splash_spin_13E;\n\n\t     -o-animation-name: Splash_spin_13E;\n\n\t        animation-name: Splash_spin_13E;\n\t-webkit-animation-duration: 4000ms;\n\t     -o-animation-duration: 4000ms;\n\t        animation-duration: 4000ms;\n\t-webkit-animation-iteration-count: infinite;\n\t     -o-animation-iteration-count: infinite;\n\t        animation-iteration-count: infinite;\n\t-webkit-animation-timing-function: linear;\n\t     -o-animation-timing-function: linear;\n\t        animation-timing-function: linear;\n}\n\n@-webkit-keyframes Splash_spin_13E {\n  from { -webkit-transform: rotate(0deg); }\n  to { -webkit-transform: rotate(360deg); }\n}\n\n@-o-keyframes Splash_spin_13E {\n  from {\n      -o-transform:rotate(0deg);\n         transform:rotate(0deg);\n  }\n  to {\n      -o-transform:rotate(360deg);\n         transform:rotate(360deg);\n  }\n}\n\n@keyframes Splash_spin_13E {\n  from {\n      -webkit-transform:rotate(0deg);\n           -o-transform:rotate(0deg);\n              transform:rotate(0deg);\n  }\n  to {\n      -webkit-transform:rotate(360deg);\n           -o-transform:rotate(360deg);\n              transform:rotate(360deg);\n  }\n}\n\n.Splash_root_3s8 {\n\twidth: 100%;\n}\n\n.Splash_container_2Gm {\n  position: relative;\n  margin: 0 auto;\n  padding: 1rem 0;\n  width: 100%;\n  height: 100vh;\n  -webkit-background-size: cover;\n          background-size: cover;\n  text-align: center;\n}\n\n.Splash_logoContainer_2A_ {\n  padding: 2rem;\n}\n\n.Splash_logo_3b5 {\n  color: #FFFFFF;\n}\n\n.Splash_lowerText_tjk {\n  text-align: center;\n  height: 65vh;\n  width: 75%;\n  position: absolute;\n  top: 35vh;\n  left: 12.5%\n}\n\n@media screen and (max-width: 768px) {\n\n\t.Splash_lowerText_tjk {\n\t\twidth: 100%;\n\t\tleft: 0;\n\t}\n  }\n\nh1.Splash_heading_3BG {\n  font-size: 4rem;\n  font-weight: 800;\n  margin: 0 0 3vh 0;\n  color: #FFFFFF\n\n}\n\n@media screen and (max-width: 768px) {\n\n\th1.Splash_heading_3BG {\n\t\tfont-size: 2rem;\n\t}\n  }\n\nh2.Splash_subheading_3Ee {\n\tfont-size: 2.5rem;\n  font-weight: 800;\n\tmargin: 2.5vh 0 2.5vh 0;\n  color: #FFFFFF\n}\n\n@media screen and (max-width: 768px) {\n\n\th2.Splash_subheading_3Ee {\n\t\tfont-size: 1.5rem;\n\t}\n  }\n\nh2.Splash_subheading2_1Cf {\n  font-size: 1.5rem;\n  font-weight: 800;\n  margin: 2.5vh 0 5vh 0;\n  color: #FFFFFF\n}\n\n@media screen and (max-width: 768px) {\n\n\th2.Splash_subheading2_1Cf {\n\t\tfont-size: 1.0rem;\n\t}\n  }\n\n.Splash_bottomTextContainer_1IH {\n  width: 100%;\n  text-align: center;\n  position: absolute;\n  bottom: 0;\n  padding: 3rem 0 2rem 0;\n}\n\n.Splash_bottomLink_2j- {\n  display: block;\n  text-align: center;\n  color: #FFFFFF;\n  font-size: 1.2rem;\n  font-weight: 400;\n  cursor: pointer\n}\n\n.Splash_bottomLink_2j-:hover {\n\tcolor: #26a69a;\n}\n\n.Splash_arrowIcon_2G0 {\n  margin-top: 1rem;\n  cursor: pointer;\n}\n", "", {"version":3,"sources":["/./src/components/variables.scss","/./src/components/ProfilePage/Splash/Splash.scss"],"names":[],"mappings":"AAAA;;gFAEgF;;AAGxB,UAAU;;AACV,aAAa;;AACb,UAAU;;AACV,UAAU;;AACV,UAAU;;AAclE;;gFAEgF;;AAIhF;;gFAEgF;;AAIhF;;gFAEgF;;AAEhD,gCAAgC;;AAChC,2BAA2B;;AAC3B,6BAA6B;;AAC7B,iCAAiC;;AAEjE;;gFAEgF;;AAKhF;CACC,wCAA6B;CAC7B,mCAAmC;CACnC,4CAA4C;CAC5C,0CAA0C;CAC1C,qCAA0B;CAC1B,gCAAgC;CAChC,yCAAyC;CACzC,uCAAuC;CACvC,oCAAyB;CACzB,+BAA+B;CAC/B,wCAAwC;CACxC,sCAAsC;;CAEtC,wCAAqB;;MAArB,mCAAqB;;SAArB,gCAAqB;CACrB,mCAA2B;MAA3B,8BAA2B;SAA3B,2BAA2B;CAC3B,4CAAoC;MAApC,uCAAoC;SAApC,oCAAoC;CACpC,0CAAkC;MAAlC,qCAAkC;SAAlC,kCAAkC;CAClC;;AASD;EACE,OAAO,gCAAgC,EAAE;EACzC,KAAK,kCAAkC,EAAE;CAC1C;;AACD;EACE;MACI,0BAAuB;SAAvB,uBAAuB;GAC1B;EACD;MACI,4BAAyB;SAAzB,yBAAyB;GAC5B;CACF;;AAPD;EACE;MACI,+BAAuB;WAAvB,0BAAuB;cAAvB,uBAAuB;GAC1B;EACD;MACI,iCAAyB;WAAzB,4BAAyB;cAAzB,yBAAyB;GAC5B;CACF;;ACtFD;CACC,YAAY;CACZ;;AAGD;EACE,mBAAmB;EACnB,eAAe;EACf,gBAAgB;EAChB,YAAY;EACZ,cAA0B;EAC1B,+BAAuB;UAAvB,uBAAuB;EACvB,mBAAmB;CACpB;;AAED;EACE,cAAc;CACf;;AACD;EACE,eAAsB;CACvB;;AAED;EACE,mBAAmB;EACnB,aAAa;EACb,WAAW;EACX,mBAAmB;EACnB,UAAU;EACV,WAAY;CAMb;;AAJC;;CAAA;EACE,YAAY;EACZ,QAAQ;EACT;GAAA;;AAGH;EACE,gBAAgB;EAChB,iBAAiB;EACjB,kBAAkB;EAClB,cAAsB;;CAKvB;;AAJC;;CAAA;EACE,gBAAgB;EACjB;GAAA;;AAIH;CACC,kBAAkB;EACjB,iBAAiB;CAClB,wBAAwB;EACvB,cAAsB;CAKvB;;AAHC;;CAAA;EACE,kBAAkB;EACnB;GAAA;;AAGH;EACE,kBAAkB;EAClB,iBAAiB;EACjB,sBAAsB;EACtB,cAAsB;CAKvB;;AAHC;;CAAA;EACE,kBAAkB;EACnB;GAAA;;AAGH;EACE,YAAY;EACZ,mBAAmB;EACnB,mBAAmB;EACnB,UAAU;EACV,uBAAuB;CACxB;;AAED;EACE,eAAe;EACf,mBAAmB;EACnB,eAAsB;EACtB,kBAAkB;EAClB,iBAAiB;EACjB,eAAgB;CAIjB;;AAHC;CACE,eAAqB;CACtB;;AAGH;EACE,iBAAiB;EACjB,gBAAgB;CACjB","file":"Splash.scss","sourcesContent":["/*\n * Colors\n * ========================================================================== */\n\n$white-base:            hsl(255, 255, 255);\n$gray-darker:           color(black lightness(+13.5%)); /* #222 */\n$gray-dark:             color(black lightness(+25%));   /* #404040 */\n$gray:                  color(black lightness(+33.5%)); /* #555 */\n$gray-light:            color(black lightness(+46.7%)); /* #777 */\n$gray-lighter:          color(black lightness(+93.5%)); /* #eee */\n\n$primary-color: #333333;\n$primary-white: #FFFFFF;\n$primary-border: 1px solid #D9D9DE;\n$primary-font-color: #111111;\n$primary-link-color: #111111;\n$primary-link-hover-color: #111111;\n$primary-nav-font-color: rgba(255, 255, 255, .5);\n\n$accent-color: #26a69a;\n$accent-hover: #2BBBAD;\n\n\n/*\n * Typography\n * ========================================================================== */\n\n$font-family-base:      'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n/*\n * Layout\n * ========================================================================== */\n\n$max-content-width:     1000px;\n\n/*\n * Media queries breakpoints\n * ========================================================================== */\n\n$screen-xs-min:         480px;  /* Extra small screen / phone */\n$screen-sm-min:         768px;  /* Small screen / tablet */\n$screen-md-min:         992px;  /* Medium screen / desktop */\n$screen-lg-min:         1200px; /* Large screen / wide desktop */\n\n/*\n * Animations\n * ========================================================================== */\n\n$animation-swift-out:   .45s cubic-bezier(0.3, 1, 0.4, 1) 0s;\n\n\nmixin icon-spin() {\n\t-webkit-animation-name: spin;\n\t-webkit-animation-duration: 4000ms;\n\t-webkit-animation-iteration-count: infinite;\n\t-webkit-animation-timing-function: linear;\n\t-moz-animation-name: spin;\n\t-moz-animation-duration: 4000ms;\n\t-moz-animation-iteration-count: infinite;\n\t-moz-animation-timing-function: linear;\n\t-ms-animation-name: spin;\n\t-ms-animation-duration: 4000ms;\n\t-ms-animation-iteration-count: infinite;\n\t-ms-animation-timing-function: linear;\n\n\tanimation-name: spin;\n\tanimation-duration: 4000ms;\n\tanimation-iteration-count: infinite;\n\tanimation-timing-function: linear;\n}\n@-ms-keyframes spin {\n  from { -ms-transform: rotate(0deg); }\n  to { -ms-transform: rotate(360deg); }\n}\n@-moz-keyframes spin {\n  from { -moz-transform: rotate(0deg); }\n  to { -moz-transform: rotate(360deg); }\n}\n@-webkit-keyframes spin {\n  from { -webkit-transform: rotate(0deg); }\n  to { -webkit-transform: rotate(360deg); }\n}\n@keyframes spin {\n  from {\n      transform:rotate(0deg);\n  }\n  to {\n      transform:rotate(360deg);\n  }\n}\n","\n@import '../../variables.scss';\n\n.root {\n\twidth: 100%;\n}\n\n$container-height: 100vh;\n.container {\n  position: relative;\n  margin: 0 auto;\n  padding: 1rem 0;\n  width: 100%;\n  height: $container-height;\n  background-size: cover;\n  text-align: center;\n}\n\n.logoContainer {\n  padding: 2rem;\n}\n.logo {\n  color: $primary-white;\n}\n\n.lowerText {\n  text-align: center;\n  height: 65vh;\n  width: 75%;\n  position: absolute;\n  top: 35vh;\n  left: 12.5%;\n\n  @media screen and (max-width: $screen-sm-min) {\n    width: 100%;\n    left: 0;\n  }\n}\n\nh1.heading {\n  font-size: 4rem;\n  font-weight: 800;\n  margin: 0 0 3vh 0;\n  color: $primary-white;\n  @media screen and (max-width: $screen-sm-min) {\n    font-size: 2rem;\n  }\n\n}\n\nh2.subheading {\n\tfont-size: 2.5rem;\n  font-weight: 800;\n\tmargin: 2.5vh 0 2.5vh 0;\n  color: $primary-white;\n\n  @media screen and (max-width: $screen-sm-min) {\n    font-size: 1.5rem;\n  }\n}\n\nh2.subheading2 {\n  font-size: 1.5rem;\n  font-weight: 800;\n  margin: 2.5vh 0 5vh 0;\n  color: $primary-white;\n\n  @media screen and (max-width: $screen-sm-min) {\n    font-size: 1.0rem;\n  }\n}\n\n.bottomTextContainer {\n  width: 100%;\n  text-align: center;\n  position: absolute;\n  bottom: 0;\n  padding: 3rem 0 2rem 0;\n}\n\n.bottomLink {\n  display: block;\n  text-align: center;\n  color: $primary-white;\n  font-size: 1.2rem;\n  font-weight: 400;\n  cursor: pointer;\n  &:hover {\n    color: $accent-color;\n  }\n}\n\n.arrowIcon {\n  margin-top: 1rem;\n  cursor: pointer;\n}\n"],"sourceRoot":"webpack://"}]);
  
  // exports
  exports.locals = {
  	"spin": "Splash_spin_13E",
  	"root": "Splash_root_3s8",
  	"container": "Splash_container_2Gm",
  	"logoContainer": "Splash_logoContainer_2A_",
  	"logo": "Splash_logo_3b5",
  	"lowerText": "Splash_lowerText_tjk",
  	"heading": "Splash_heading_3BG",
  	"subheading": "Splash_subheading_3Ee",
  	"subheading2": "Splash_subheading2_1Cf",
  	"bottomTextContainer": "Splash_bottomTextContainer_1IH",
  	"bottomLink": "Splash_bottomLink_2j-",
  	"arrowIcon": "Splash_arrowIcon_2G0"
  };

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _getPrototypeOf = __webpack_require__(42);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(43);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(44);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(45);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(46);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(6);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _withStyles = __webpack_require__(57);
  
  var _withStyles2 = _interopRequireDefault(_withStyles);
  
  var _Profile = __webpack_require__(103);
  
  var _Profile2 = _interopRequireDefault(_Profile);
  
  var _reactMaterialize = __webpack_require__(73);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var Profile = function (_Component) {
    (0, _inherits3.default)(Profile, _Component);
  
    function Profile() {
      (0, _classCallCheck3.default)(this, Profile);
      return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Profile).apply(this, arguments));
    }
  
    (0, _createClass3.default)(Profile, [{
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'div',
          { className: _Profile2.default.root, id: 'profile' },
          _react2.default.createElement(
            'div',
            { className: _Profile2.default.container },
            _react2.default.createElement(
              'h1',
              { className: _Profile2.default.heading },
              'About Me'
            ),
            _react2.default.createElement(
              _reactMaterialize.Row,
              null,
              _react2.default.createElement(
                _reactMaterialize.Col,
                { s: 12, m: 6, l: 4, className: _Profile2.default.photoContainer },
                _react2.default.createElement('img', { className: _Profile2.default.profileImg, src: 'shain-downtown.jpg', alt: 'Shain Lafazan profile photo' })
              ),
              _react2.default.createElement(
                _reactMaterialize.Col,
                { s: 12, m: 6, l: 8, className: _Profile2.default.profileTextContainer },
                _react2.default.createElement(
                  'h2',
                  { className: _Profile2.default.subheading },
                  'I ',
                  '{',
                  'code',
                  '}',
                  ' therefore I am'
                ),
                _react2.default.createElement(
                  'p',
                  null,
                  'How do we build beautiful applications that people love to use? I write full stack web and mobile applications in Silicon Valley, and every day I work to find the best answer to that question. I taught iOS, Ruby on Rails, MEAN stack courses and more for Coding Dojo Silicon Valley.'
                ),
                _react2.default.createElement('br', null),
                _react2.default.createElement(
                  'p',
                  null,
                  'Currently, I lead development on a web application for Forte, built in Rails, and lead engineering on a React / Node MVP for Spot Knocker. I\'m a huge fan of music, hiking, and snow skiing. Also, I\'m a huge coffee enthusiast! There\'s nothing I can\'t learn or build. :)'
                )
              )
            )
          )
        );
      }
    }]);
    return Profile;
  }(_react.Component);
  
  exports.default = (0, _withStyles2.default)(Profile, _Profile2.default);

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(104);
      var insertCss = __webpack_require__(51);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = insertCss.bind(null, content);
    
      var removeCss = function() {};
  
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      if (false) {
        module.hot.accept("!!./../../../../node_modules/css-loader/index.js?sourceMap&modules&localIdentName=[name]_[local]_[hash:base64:3]!./../../../../node_modules/postcss-loader/index.js?parser=postcss-scss!./Profile.scss", function() {
          var newContent = require("!!./../../../../node_modules/css-loader/index.js?sourceMap&modules&localIdentName=[name]_[local]_[hash:base64:3]!./../../../../node_modules/postcss-loader/index.js?parser=postcss-scss!./Profile.scss");
          if (typeof newContent === 'string') {
            newContent = [[module.id, content, '']];
          }
          removeCss = insertCss(newContent, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(50)();
  // imports
  
  
  // module
  exports.push([module.id, "/*\n * Colors\n * ========================================================================== */\n\n/* #222 */\n\n/* #404040 */\n\n/* #555 */\n\n/* #777 */\n\n/* #eee */\n\n/*\n * Typography\n * ========================================================================== */\n\n/*\n * Layout\n * ========================================================================== */\n\n/*\n * Media queries breakpoints\n * ========================================================================== */\n\n/* Extra small screen / phone */\n\n/* Small screen / tablet */\n\n/* Medium screen / desktop */\n\n/* Large screen / wide desktop */\n\n/*\n * Animations\n * ========================================================================== */\n\nmixin icon-spin() {\n\t-webkit-animation-name: Profile_spin_130;\n\t-webkit-animation-duration: 4000ms;\n\t-webkit-animation-iteration-count: infinite;\n\t-webkit-animation-timing-function: linear;\n\t-moz-animation-name: Profile_spin_130;\n\t-moz-animation-duration: 4000ms;\n\t-moz-animation-iteration-count: infinite;\n\t-moz-animation-timing-function: linear;\n\t-ms-animation-name: Profile_spin_130;\n\t-ms-animation-duration: 4000ms;\n\t-ms-animation-iteration-count: infinite;\n\t-ms-animation-timing-function: linear;\n\n\t-webkit-animation-name: Profile_spin_130;\n\n\t     -o-animation-name: Profile_spin_130;\n\n\t        animation-name: Profile_spin_130;\n\t-webkit-animation-duration: 4000ms;\n\t     -o-animation-duration: 4000ms;\n\t        animation-duration: 4000ms;\n\t-webkit-animation-iteration-count: infinite;\n\t     -o-animation-iteration-count: infinite;\n\t        animation-iteration-count: infinite;\n\t-webkit-animation-timing-function: linear;\n\t     -o-animation-timing-function: linear;\n\t        animation-timing-function: linear;\n}\n\n@-webkit-keyframes Profile_spin_130 {\n  from { -webkit-transform: rotate(0deg); }\n  to { -webkit-transform: rotate(360deg); }\n}\n\n@-o-keyframes Profile_spin_130 {\n  from {\n      -o-transform:rotate(0deg);\n         transform:rotate(0deg);\n  }\n  to {\n      -o-transform:rotate(360deg);\n         transform:rotate(360deg);\n  }\n}\n\n@keyframes Profile_spin_130 {\n  from {\n      -webkit-transform:rotate(0deg);\n           -o-transform:rotate(0deg);\n              transform:rotate(0deg);\n  }\n  to {\n      -webkit-transform:rotate(360deg);\n           -o-transform:rotate(360deg);\n              transform:rotate(360deg);\n  }\n}\n\n.Profile_root_2IJ {\n\twidth: 100%;\n  border-bottom: 1px solid #D9D9DE;\n  border-top: 1px solid #D9D9DE;\n  background-color: #FFFFFF;\n}\n\n.Profile_container_2y9 {\n  margin: 0 auto;\n  padding: 2rem 0;\n  width: 100%;\n  min-height: 400px;\n}\n\n.Profile_heading_36B {\n  margin: 0 0 1rem 0;\n}\n\n.Profile_subheading_2gb {\n  font-size: 1.5rem;\n\n  margin: 0 0 1rem 0\n}\n\n@media screen and (max-width: 992px) {\n\n\t.Profile_subheading_2gb {\n\t\ttext-align: center;\n\t\tfont-size: 1.5rem;\n\t}\n  }\n\n@media screen and (min-width: 480px) {\n\n\t.Profile_subheading_2gb {\n\t\tmargin: 0.5rem 0 1rem 0;\n\t}\n  }\n\n@media screen and (min-width: 768px) {\n\n\t.Profile_subheading_2gb {\n\t\tmargin: 1rem 0 1.5rem 0;\n\t}\n  }\n\n@media screen and (min-width: 992px) {\n\n\t.Profile_subheading_2gb {\n\t\tmargin: 1.5rem 0 2.0rem 0;\n\t}\n  }\n\n.Profile_profileImg_1w3 {\n border-radius: 50%;\n height: 300px;\n margin: 0 0 34px 0;\n}\n\n.Profile_photoContainer_zDM {\n  text-align: right\n}\n\n@media screen and (max-width: 992px) {\n\n\t.Profile_photoContainer_zDM {\n\t\ttext-align: center;\n\t}\n  }\n\n.Profile_profileTextContainer_2Lp {\n  text-align: center;\n}\n\n.Profile_profileTextContainer_2Lp p {\n\tmargin: 0 3rem;\n\ttext-align: justified\n}\n\n@media screen and (max-width: 992px) {\n\n\t.Profile_profileTextContainer_2Lp p {\n\t\tmargin: 0 0 0 0;/* text-align: center;*/\n\t}\n    }", "", {"version":3,"sources":["/./src/components/variables.scss","/./src/components/ProfilePage/Profile/Profile.scss"],"names":[],"mappings":"AAAA;;gFAEgF;;AAGxB,UAAU;;AACV,aAAa;;AACb,UAAU;;AACV,UAAU;;AACV,UAAU;;AAclE;;gFAEgF;;AAIhF;;gFAEgF;;AAIhF;;gFAEgF;;AAEhD,gCAAgC;;AAChC,2BAA2B;;AAC3B,6BAA6B;;AAC7B,iCAAiC;;AAEjE;;gFAEgF;;AAKhF;CACC,yCAA6B;CAC7B,mCAAmC;CACnC,4CAA4C;CAC5C,0CAA0C;CAC1C,sCAA0B;CAC1B,gCAAgC;CAChC,yCAAyC;CACzC,uCAAuC;CACvC,qCAAyB;CACzB,+BAA+B;CAC/B,wCAAwC;CACxC,sCAAsC;;CAEtC,yCAAqB;;MAArB,oCAAqB;;SAArB,iCAAqB;CACrB,mCAA2B;MAA3B,8BAA2B;SAA3B,2BAA2B;CAC3B,4CAAoC;MAApC,uCAAoC;SAApC,oCAAoC;CACpC,0CAAkC;MAAlC,qCAAkC;SAAlC,kCAAkC;CAClC;;AASD;EACE,OAAO,gCAAgC,EAAE;EACzC,KAAK,kCAAkC,EAAE;CAC1C;;AACD;EACE;MACI,0BAAuB;SAAvB,uBAAuB;GAC1B;EACD;MACI,4BAAyB;SAAzB,yBAAyB;GAC5B;CACF;;AAPD;EACE;MACI,+BAAuB;WAAvB,0BAAuB;cAAvB,uBAAuB;GAC1B;EACD;MACI,iCAAyB;WAAzB,4BAAyB;cAAzB,yBAAyB;GAC5B;CACF;;ACtFD;CACC,YAAY;EACX,iCAA+B;EAC/B,8BAA4B;EAC5B,0BAA0B;CAC3B;;AAED;EACE,eAAe;EACf,gBAAgB;EAChB,YAAY;EACZ,kBAAkB;CACnB;;AAED;EACE,mBAAmB;CACpB;;AACD;EACE,kBAAkB;;EAElB,kBAAmB;CAcpB;;AAbC;;CAAA;EACE,mBAAmB;EACnB,kBAAkB;EACnB;GAAA;;AACD;;CAAA;EACE,wBAAwB;EACzB;GAAA;;AACD;;CAAA;EACE,wBAAwB;EACzB;GAAA;;AACD;;CAAA;EACE,0BAA0B;EAC3B;GAAA;;AAGH;CACC,mBAAmB;CACnB,cAAc;CACd,mBAAmB;CACnB;;AAED;EACE,iBAAkB;CAInB;;AAHC;;CAAA;EACE,mBAAmB;EACpB;GAAA;;AAGH;EACE,mBAAmB;CASpB;;AARC;CACE,eAAe;CACf,qBAAsB;CAKvB;;AAJC;;CAAA;EACE,gBAAgB,wBACM;EACvB;KAAA","file":"Profile.scss","sourcesContent":["/*\n * Colors\n * ========================================================================== */\n\n$white-base:            hsl(255, 255, 255);\n$gray-darker:           color(black lightness(+13.5%)); /* #222 */\n$gray-dark:             color(black lightness(+25%));   /* #404040 */\n$gray:                  color(black lightness(+33.5%)); /* #555 */\n$gray-light:            color(black lightness(+46.7%)); /* #777 */\n$gray-lighter:          color(black lightness(+93.5%)); /* #eee */\n\n$primary-color: #333333;\n$primary-white: #FFFFFF;\n$primary-border: 1px solid #D9D9DE;\n$primary-font-color: #111111;\n$primary-link-color: #111111;\n$primary-link-hover-color: #111111;\n$primary-nav-font-color: rgba(255, 255, 255, .5);\n\n$accent-color: #26a69a;\n$accent-hover: #2BBBAD;\n\n\n/*\n * Typography\n * ========================================================================== */\n\n$font-family-base:      'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n/*\n * Layout\n * ========================================================================== */\n\n$max-content-width:     1000px;\n\n/*\n * Media queries breakpoints\n * ========================================================================== */\n\n$screen-xs-min:         480px;  /* Extra small screen / phone */\n$screen-sm-min:         768px;  /* Small screen / tablet */\n$screen-md-min:         992px;  /* Medium screen / desktop */\n$screen-lg-min:         1200px; /* Large screen / wide desktop */\n\n/*\n * Animations\n * ========================================================================== */\n\n$animation-swift-out:   .45s cubic-bezier(0.3, 1, 0.4, 1) 0s;\n\n\nmixin icon-spin() {\n\t-webkit-animation-name: spin;\n\t-webkit-animation-duration: 4000ms;\n\t-webkit-animation-iteration-count: infinite;\n\t-webkit-animation-timing-function: linear;\n\t-moz-animation-name: spin;\n\t-moz-animation-duration: 4000ms;\n\t-moz-animation-iteration-count: infinite;\n\t-moz-animation-timing-function: linear;\n\t-ms-animation-name: spin;\n\t-ms-animation-duration: 4000ms;\n\t-ms-animation-iteration-count: infinite;\n\t-ms-animation-timing-function: linear;\n\n\tanimation-name: spin;\n\tanimation-duration: 4000ms;\n\tanimation-iteration-count: infinite;\n\tanimation-timing-function: linear;\n}\n@-ms-keyframes spin {\n  from { -ms-transform: rotate(0deg); }\n  to { -ms-transform: rotate(360deg); }\n}\n@-moz-keyframes spin {\n  from { -moz-transform: rotate(0deg); }\n  to { -moz-transform: rotate(360deg); }\n}\n@-webkit-keyframes spin {\n  from { -webkit-transform: rotate(0deg); }\n  to { -webkit-transform: rotate(360deg); }\n}\n@keyframes spin {\n  from {\n      transform:rotate(0deg);\n  }\n  to {\n      transform:rotate(360deg);\n  }\n}\n","\n@import '../../variables.scss';\n\n.root {\n\twidth: 100%;\n  border-bottom: $primary-border;\n  border-top: $primary-border;\n  background-color: #FFFFFF;\n}\n\n.container {\n  margin: 0 auto;\n  padding: 2rem 0;\n  width: 100%;\n  min-height: 400px;\n}\n\n.heading {\n  margin: 0 0 1rem 0;\n}\n.subheading {\n  font-size: 1.5rem;\n\n  margin: 0 0 1rem 0; \n  @media screen and (max-width: $screen-md-min) {\n    text-align: center;\n    font-size: 1.5rem;\n  }\n  @media screen and (min-width: $screen-xs-min) {\n    margin: 0.5rem 0 1rem 0;\n  }\n  @media screen and (min-width: $screen-sm-min) {\n    margin: 1rem 0 1.5rem 0;\n  }\n  @media screen and (min-width: $screen-md-min) {\n    margin: 1.5rem 0 2.0rem 0;\n  }\n}\n\n.profileImg {\n border-radius: 50%;\n height: 300px;\n margin: 0 0 34px 0;\n}\n\n.photoContainer {\n  text-align: right;\n  @media screen and (max-width: $screen-md-min) {\n    text-align: center;\n  }\n}\n\n.profileTextContainer {\n  text-align: center;\n  p {\n    margin: 0 3rem;\n    text-align: justified;\n    @media screen and (max-width: $screen-md-min) {\n      margin: 0 0 0 0;\n      // text-align: center;\n    }\n  }\n}"],"sourceRoot":"webpack://"}]);
  
  // exports
  exports.locals = {
  	"spin": "Profile_spin_130",
  	"root": "Profile_root_2IJ",
  	"container": "Profile_container_2y9",
  	"heading": "Profile_heading_36B",
  	"subheading": "Profile_subheading_2gb",
  	"profileImg": "Profile_profileImg_1w3",
  	"photoContainer": "Profile_photoContainer_zDM",
  	"profileTextContainer": "Profile_profileTextContainer_2Lp"
  };

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
  	value: true
  });
  
  var _getPrototypeOf = __webpack_require__(42);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(43);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(44);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(45);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(46);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(6);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _withStyles = __webpack_require__(57);
  
  var _withStyles2 = _interopRequireDefault(_withStyles);
  
  var _Projects = __webpack_require__(106);
  
  var _Projects2 = _interopRequireDefault(_Projects);
  
  var _reactMaterialize = __webpack_require__(73);
  
  var _ProjectTile = __webpack_require__(108);
  
  var _ProjectTile2 = _interopRequireDefault(_ProjectTile);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var projects = [{
  	name: "Spot Knocker",
  	description: "Peer-to-peer advertising that's rocking the ad world.",
  	imageUrl: "spotknockerProject.png",
  	reference: {
  		name: "Joseph Estolas",
  		quote: "\"Shain is a champion of the free world, justice, code, and coffee.\"",
  		imageUrl: "http://stanlemmens.nl/wp/wp-content/uploads/2014/07/bill-gates-wealthiest-person.jpg"
  	}
  }, {
  	name: "Forte",
  	description: "Sharing music performance with underprivileged youths.",
  	imageUrl: "forteProject.png",
  	reference: {
  		name: "Daniel Kim",
  		quote: "\"Shain is a champion of the free world, justice, code, and coffee.\"",
  		imageUrl: "http://stanlemmens.nl/wp/wp-content/uploads/2014/07/bill-gates-wealthiest-person.jpg"
  	}
  }, {
  	name: "Capuchin",
  	description: "Split the bill with ease, like it was always meant to be.",
  	imageUrl: "capuchinProject.png",
  	reference: {
  		name: "Skyler Gonsalves",
  		quote: "\"Shain is a champion of the free world, justice, code, and coffee.\"",
  		imageUrl: "http://stanlemmens.nl/wp/wp-content/uploads/2014/07/bill-gates-wealthiest-person.jpg"
  	}
  }];
  
  var Projects = function (_Component) {
  	(0, _inherits3.default)(Projects, _Component);
  
  	function Projects() {
  		(0, _classCallCheck3.default)(this, Projects);
  		return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Projects).apply(this, arguments));
  	}
  
  	(0, _createClass3.default)(Projects, [{
  		key: 'render',
  		value: function render() {
  			return _react2.default.createElement(
  				'div',
  				{ className: _Projects2.default.container, id: 'projects' },
  				_react2.default.createElement(
  					'h1',
  					{ className: _Projects2.default.heading },
  					'My Projects'
  				),
  				_react2.default.createElement(
  					_reactMaterialize.Row,
  					null,
  					_react2.default.createElement(_ProjectTile2.default, { project: projects[0] }),
  					_react2.default.createElement(_ProjectTile2.default, { project: projects[1] }),
  					_react2.default.createElement(_ProjectTile2.default, { project: projects[2] })
  				)
  			);
  		}
  	}]);
  	return Projects;
  }(_react.Component);
  
  exports.default = (0, _withStyles2.default)(Projects, _Projects2.default);

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(107);
      var insertCss = __webpack_require__(51);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = insertCss.bind(null, content);
    
      var removeCss = function() {};
  
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      if (false) {
        module.hot.accept("!!./../../../../node_modules/css-loader/index.js?sourceMap&modules&localIdentName=[name]_[local]_[hash:base64:3]!./../../../../node_modules/postcss-loader/index.js?parser=postcss-scss!./Projects.scss", function() {
          var newContent = require("!!./../../../../node_modules/css-loader/index.js?sourceMap&modules&localIdentName=[name]_[local]_[hash:base64:3]!./../../../../node_modules/postcss-loader/index.js?parser=postcss-scss!./Projects.scss");
          if (typeof newContent === 'string') {
            newContent = [[module.id, content, '']];
          }
          removeCss = insertCss(newContent, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(50)();
  // imports
  
  
  // module
  exports.push([module.id, "/*\n * Colors\n * ========================================================================== */\n\n/* #222 */\n\n/* #404040 */\n\n/* #555 */\n\n/* #777 */\n\n/* #eee */\n\n/*\n * Typography\n * ========================================================================== */\n\n/*\n * Layout\n * ========================================================================== */\n\n/*\n * Media queries breakpoints\n * ========================================================================== */\n\n/* Extra small screen / phone */\n\n/* Small screen / tablet */\n\n/* Medium screen / desktop */\n\n/* Large screen / wide desktop */\n\n/*\n * Animations\n * ========================================================================== */\n\nmixin icon-spin() {\n\t-webkit-animation-name: Projects_spin_3kE;\n\t-webkit-animation-duration: 4000ms;\n\t-webkit-animation-iteration-count: infinite;\n\t-webkit-animation-timing-function: linear;\n\t-moz-animation-name: Projects_spin_3kE;\n\t-moz-animation-duration: 4000ms;\n\t-moz-animation-iteration-count: infinite;\n\t-moz-animation-timing-function: linear;\n\t-ms-animation-name: Projects_spin_3kE;\n\t-ms-animation-duration: 4000ms;\n\t-ms-animation-iteration-count: infinite;\n\t-ms-animation-timing-function: linear;\n\n\t-webkit-animation-name: Projects_spin_3kE;\n\n\t     -o-animation-name: Projects_spin_3kE;\n\n\t        animation-name: Projects_spin_3kE;\n\t-webkit-animation-duration: 4000ms;\n\t     -o-animation-duration: 4000ms;\n\t        animation-duration: 4000ms;\n\t-webkit-animation-iteration-count: infinite;\n\t     -o-animation-iteration-count: infinite;\n\t        animation-iteration-count: infinite;\n\t-webkit-animation-timing-function: linear;\n\t     -o-animation-timing-function: linear;\n\t        animation-timing-function: linear;\n}\n\n@-webkit-keyframes Projects_spin_3kE {\n  from { -webkit-transform: rotate(0deg); }\n  to { -webkit-transform: rotate(360deg); }\n}\n\n@-o-keyframes Projects_spin_3kE {\n  from {\n      -o-transform:rotate(0deg);\n         transform:rotate(0deg);\n  }\n  to {\n      -o-transform:rotate(360deg);\n         transform:rotate(360deg);\n  }\n}\n\n@keyframes Projects_spin_3kE {\n  from {\n      -webkit-transform:rotate(0deg);\n           -o-transform:rotate(0deg);\n              transform:rotate(0deg);\n  }\n  to {\n      -webkit-transform:rotate(360deg);\n           -o-transform:rotate(360deg);\n              transform:rotate(360deg);\n  }\n}\n\n.Projects_root_3Tx {\n\twidth: 100%;\n  border-bottom: 1px solid #D9D9DE;\n}\n\n.Projects_container_128 {\n  margin: 0 auto;\n  padding: 2rem 0;\n  max-width: 100%;\n  background-color: #e4e1ce;\n}\n\n.Projects_heading_1ZV {\n\tmargin-top: 0;\n}", "", {"version":3,"sources":["/./src/components/variables.scss","/./src/components/ProfilePage/Projects/Projects.scss"],"names":[],"mappings":"AAAA;;gFAEgF;;AAGxB,UAAU;;AACV,aAAa;;AACb,UAAU;;AACV,UAAU;;AACV,UAAU;;AAclE;;gFAEgF;;AAIhF;;gFAEgF;;AAIhF;;gFAEgF;;AAEhD,gCAAgC;;AAChC,2BAA2B;;AAC3B,6BAA6B;;AAC7B,iCAAiC;;AAEjE;;gFAEgF;;AAKhF;CACC,0CAA6B;CAC7B,mCAAmC;CACnC,4CAA4C;CAC5C,0CAA0C;CAC1C,uCAA0B;CAC1B,gCAAgC;CAChC,yCAAyC;CACzC,uCAAuC;CACvC,sCAAyB;CACzB,+BAA+B;CAC/B,wCAAwC;CACxC,sCAAsC;;CAEtC,0CAAqB;;MAArB,qCAAqB;;SAArB,kCAAqB;CACrB,mCAA2B;MAA3B,8BAA2B;SAA3B,2BAA2B;CAC3B,4CAAoC;MAApC,uCAAoC;SAApC,oCAAoC;CACpC,0CAAkC;MAAlC,qCAAkC;SAAlC,kCAAkC;CAClC;;AASD;EACE,OAAO,gCAAgC,EAAE;EACzC,KAAK,kCAAkC,EAAE;CAC1C;;AACD;EACE;MACI,0BAAuB;SAAvB,uBAAuB;GAC1B;EACD;MACI,4BAAyB;SAAzB,yBAAyB;GAC5B;CACF;;AAPD;EACE;MACI,+BAAuB;WAAvB,0BAAuB;cAAvB,uBAAuB;GAC1B;EACD;MACI,iCAAyB;WAAzB,4BAAyB;cAAzB,yBAAyB;GAC5B;CACF;;ACtFD;CACC,YAAY;EACX,iCAA+B;CAChC;;AAED;EACE,eAAe;EACf,gBAAgB;EAChB,gBAAgB;EAChB,0BAA0B;CAC3B;;AAED;CACC,cAAc;CACd","file":"Projects.scss","sourcesContent":["/*\n * Colors\n * ========================================================================== */\n\n$white-base:            hsl(255, 255, 255);\n$gray-darker:           color(black lightness(+13.5%)); /* #222 */\n$gray-dark:             color(black lightness(+25%));   /* #404040 */\n$gray:                  color(black lightness(+33.5%)); /* #555 */\n$gray-light:            color(black lightness(+46.7%)); /* #777 */\n$gray-lighter:          color(black lightness(+93.5%)); /* #eee */\n\n$primary-color: #333333;\n$primary-white: #FFFFFF;\n$primary-border: 1px solid #D9D9DE;\n$primary-font-color: #111111;\n$primary-link-color: #111111;\n$primary-link-hover-color: #111111;\n$primary-nav-font-color: rgba(255, 255, 255, .5);\n\n$accent-color: #26a69a;\n$accent-hover: #2BBBAD;\n\n\n/*\n * Typography\n * ========================================================================== */\n\n$font-family-base:      'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n/*\n * Layout\n * ========================================================================== */\n\n$max-content-width:     1000px;\n\n/*\n * Media queries breakpoints\n * ========================================================================== */\n\n$screen-xs-min:         480px;  /* Extra small screen / phone */\n$screen-sm-min:         768px;  /* Small screen / tablet */\n$screen-md-min:         992px;  /* Medium screen / desktop */\n$screen-lg-min:         1200px; /* Large screen / wide desktop */\n\n/*\n * Animations\n * ========================================================================== */\n\n$animation-swift-out:   .45s cubic-bezier(0.3, 1, 0.4, 1) 0s;\n\n\nmixin icon-spin() {\n\t-webkit-animation-name: spin;\n\t-webkit-animation-duration: 4000ms;\n\t-webkit-animation-iteration-count: infinite;\n\t-webkit-animation-timing-function: linear;\n\t-moz-animation-name: spin;\n\t-moz-animation-duration: 4000ms;\n\t-moz-animation-iteration-count: infinite;\n\t-moz-animation-timing-function: linear;\n\t-ms-animation-name: spin;\n\t-ms-animation-duration: 4000ms;\n\t-ms-animation-iteration-count: infinite;\n\t-ms-animation-timing-function: linear;\n\n\tanimation-name: spin;\n\tanimation-duration: 4000ms;\n\tanimation-iteration-count: infinite;\n\tanimation-timing-function: linear;\n}\n@-ms-keyframes spin {\n  from { -ms-transform: rotate(0deg); }\n  to { -ms-transform: rotate(360deg); }\n}\n@-moz-keyframes spin {\n  from { -moz-transform: rotate(0deg); }\n  to { -moz-transform: rotate(360deg); }\n}\n@-webkit-keyframes spin {\n  from { -webkit-transform: rotate(0deg); }\n  to { -webkit-transform: rotate(360deg); }\n}\n@keyframes spin {\n  from {\n      transform:rotate(0deg);\n  }\n  to {\n      transform:rotate(360deg);\n  }\n}\n","\n@import '../../variables.scss';\n\n.root {\n\twidth: 100%;\n  border-bottom: $primary-border;\n}\n\n.container {\n  margin: 0 auto;\n  padding: 2rem 0;\n  max-width: 100%;\n  background-color: #e4e1ce;\n}\n\n.heading {\n\tmargin-top: 0;\n}"],"sourceRoot":"webpack://"}]);
  
  // exports
  exports.locals = {
  	"spin": "Projects_spin_3kE",
  	"root": "Projects_root_3Tx",
  	"container": "Projects_container_128",
  	"heading": "Projects_heading_1ZV"
  };

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
  	value: true
  });
  
  var _getPrototypeOf = __webpack_require__(42);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(43);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(44);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(45);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(46);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(6);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _withStyles = __webpack_require__(57);
  
  var _withStyles2 = _interopRequireDefault(_withStyles);
  
  var _ProjectTile = __webpack_require__(109);
  
  var _ProjectTile2 = _interopRequireDefault(_ProjectTile);
  
  var _reactMaterialize = __webpack_require__(73);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var ProjectTile = function (_Component) {
  	(0, _inherits3.default)(ProjectTile, _Component);
  
  	function ProjectTile() {
  		(0, _classCallCheck3.default)(this, ProjectTile);
  		return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(ProjectTile).apply(this, arguments));
  	}
  
  	(0, _createClass3.default)(ProjectTile, [{
  		key: 'render',
  		value: function render() {
  			return _react2.default.createElement(
  				_reactMaterialize.Col,
  				{ s: 12, m: 4, l: 4, className: _ProjectTile2.default.container },
  				_react2.default.createElement(
  					_reactMaterialize.Row,
  					null,
  					_react2.default.createElement(
  						'h3',
  						{ className: _ProjectTile2.default.projectTitle },
  						this.props.project.name
  					),
  					_react2.default.createElement(
  						'p',
  						{ className: _ProjectTile2.default.projectDescription },
  						this.props.project.description
  					),
  					_react2.default.createElement('img', { className: _ProjectTile2.default.projectImage, src: this.props.project.imageUrl })
  				),
  				_react2.default.createElement('img', { className: _ProjectTile2.default.referenceImg, src: this.props.project.reference.imageUrl }),
  				_react2.default.createElement(
  					'p',
  					{ className: _ProjectTile2.default.referenceQuote },
  					this.props.project.reference.quote
  				),
  				_react2.default.createElement(
  					'p',
  					{ className: _ProjectTile2.default.referenceName },
  					'-',
  					this.props.project.reference.name
  				)
  			);
  		}
  	}]);
  	return ProjectTile;
  }(_react.Component);
  // <Button>Check it out!</Button>
  
  exports.default = (0, _withStyles2.default)(ProjectTile, _ProjectTile2.default);

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(110);
      var insertCss = __webpack_require__(51);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = insertCss.bind(null, content);
    
      var removeCss = function() {};
  
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      if (false) {
        module.hot.accept("!!./../../../../../node_modules/css-loader/index.js?sourceMap&modules&localIdentName=[name]_[local]_[hash:base64:3]!./../../../../../node_modules/postcss-loader/index.js?parser=postcss-scss!./ProjectTile.scss", function() {
          var newContent = require("!!./../../../../../node_modules/css-loader/index.js?sourceMap&modules&localIdentName=[name]_[local]_[hash:base64:3]!./../../../../../node_modules/postcss-loader/index.js?parser=postcss-scss!./ProjectTile.scss");
          if (typeof newContent === 'string') {
            newContent = [[module.id, content, '']];
          }
          removeCss = insertCss(newContent, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(50)();
  // imports
  
  
  // module
  exports.push([module.id, "/*\n * Colors\n * ========================================================================== */\n\n/* #222 */\n\n/* #404040 */\n\n/* #555 */\n\n/* #777 */\n\n/* #eee */\n\n/*\n * Typography\n * ========================================================================== */\n\n/*\n * Layout\n * ========================================================================== */\n\n/*\n * Media queries breakpoints\n * ========================================================================== */\n\n/* Extra small screen / phone */\n\n/* Small screen / tablet */\n\n/* Medium screen / desktop */\n\n/* Large screen / wide desktop */\n\n/*\n * Animations\n * ========================================================================== */\n\nmixin icon-spin() {\n\t-webkit-animation-name: ProjectTile_spin_1lF;\n\t-webkit-animation-duration: 4000ms;\n\t-webkit-animation-iteration-count: infinite;\n\t-webkit-animation-timing-function: linear;\n\t-moz-animation-name: ProjectTile_spin_1lF;\n\t-moz-animation-duration: 4000ms;\n\t-moz-animation-iteration-count: infinite;\n\t-moz-animation-timing-function: linear;\n\t-ms-animation-name: ProjectTile_spin_1lF;\n\t-ms-animation-duration: 4000ms;\n\t-ms-animation-iteration-count: infinite;\n\t-ms-animation-timing-function: linear;\n\n\t-webkit-animation-name: ProjectTile_spin_1lF;\n\n\t     -o-animation-name: ProjectTile_spin_1lF;\n\n\t        animation-name: ProjectTile_spin_1lF;\n\t-webkit-animation-duration: 4000ms;\n\t     -o-animation-duration: 4000ms;\n\t        animation-duration: 4000ms;\n\t-webkit-animation-iteration-count: infinite;\n\t     -o-animation-iteration-count: infinite;\n\t        animation-iteration-count: infinite;\n\t-webkit-animation-timing-function: linear;\n\t     -o-animation-timing-function: linear;\n\t        animation-timing-function: linear;\n}\n\n@-webkit-keyframes ProjectTile_spin_1lF {\n  from { -webkit-transform: rotate(0deg); }\n  to { -webkit-transform: rotate(360deg); }\n}\n\n@-o-keyframes ProjectTile_spin_1lF {\n  from {\n      -o-transform:rotate(0deg);\n         transform:rotate(0deg);\n  }\n  to {\n      -o-transform:rotate(360deg);\n         transform:rotate(360deg);\n  }\n}\n\n@keyframes ProjectTile_spin_1lF {\n  from {\n      -webkit-transform:rotate(0deg);\n           -o-transform:rotate(0deg);\n              transform:rotate(0deg);\n  }\n  to {\n      -webkit-transform:rotate(360deg);\n           -o-transform:rotate(360deg);\n              transform:rotate(360deg);\n  }\n}\n\n.ProjectTile_container_1Qv {\n\ttext-align: center;\n\tmargin: 0 0 2rem 0;\n}\n\n.ProjectTile_projectImage_3en {\n\twidth: 80%;\n\tmax-height: 200px;\n\tdisplay: block;\n\tmargin: 0 auto;\n}\n\n.ProjectTile_projectDescription_2dz {\n\tmin-height: 66px;\n\tvertical-align: middle;\n\tmargin-bottom: 0;\n}\n\n.ProjectTile_referenceImg_3jI {\n\tmax-width: 75px;\n\tmax-height: 75px;\n\tborder-radius: 50%;\n\tdisplay: inline-block;\n}\n\n.ProjectTile_referenceQuote_3QU {\n\tdisplay: inline-block;\n\tfont-size: 0.8rem;\n\twidth: 65%;\n\tmargin: 0 0 0 0;\n}\n\n.ProjectTile_referenceName_1nR {\n\tdisplay: block;\n\ttext-align: center;\n\twidth: 65%;\n\tmargin: -22px 0 0 0;\n\tfloat: right\n\n}\n\n@media screen and (max-width: 768px) {\n\n\t.ProjectTile_referenceName_1nR {\n\t\tmargin: 0;\n\t}\n\t}\n\n.ProjectTile_projectRow_2W5 {\n}\n\n.ProjectTile_projectTitle_2DJ {\n\tfont-size: 1.25rem;\n\tfont-weight: 600;\n}\n\n.ProjectTile_topRow_3nn {\n\n}", "", {"version":3,"sources":["/./src/components/variables.scss","/./src/components/ProfilePage/Projects/ProjectTile/ProjectTile.scss"],"names":[],"mappings":"AAAA;;gFAEgF;;AAGxB,UAAU;;AACV,aAAa;;AACb,UAAU;;AACV,UAAU;;AACV,UAAU;;AAclE;;gFAEgF;;AAIhF;;gFAEgF;;AAIhF;;gFAEgF;;AAEhD,gCAAgC;;AAChC,2BAA2B;;AAC3B,6BAA6B;;AAC7B,iCAAiC;;AAEjE;;gFAEgF;;AAKhF;CACC,6CAA6B;CAC7B,mCAAmC;CACnC,4CAA4C;CAC5C,0CAA0C;CAC1C,0CAA0B;CAC1B,gCAAgC;CAChC,yCAAyC;CACzC,uCAAuC;CACvC,yCAAyB;CACzB,+BAA+B;CAC/B,wCAAwC;CACxC,sCAAsC;;CAEtC,6CAAqB;;MAArB,wCAAqB;;SAArB,qCAAqB;CACrB,mCAA2B;MAA3B,8BAA2B;SAA3B,2BAA2B;CAC3B,4CAAoC;MAApC,uCAAoC;SAApC,oCAAoC;CACpC,0CAAkC;MAAlC,qCAAkC;SAAlC,kCAAkC;CAClC;;AASD;EACE,OAAO,gCAAgC,EAAE;EACzC,KAAK,kCAAkC,EAAE;CAC1C;;AACD;EACE;MACI,0BAAuB;SAAvB,uBAAuB;GAC1B;EACD;MACI,4BAAyB;SAAzB,yBAAyB;GAC5B;CACF;;AAPD;EACE;MACI,+BAAuB;WAAvB,0BAAuB;cAAvB,uBAAuB;GAC1B;EACD;MACI,iCAAyB;WAAzB,4BAAyB;cAAzB,yBAAyB;GAC5B;CACF;;ACtFD;CACC,mBAAmB;CACnB,mBAAmB;CACnB;;AAED;CACC,WAAW;CACX,kBAAkB;CAClB,eAAe;CACf,eAAe;CACf;;AAED;CACC,iBAAiB;CACjB,uBAAuB;CACvB,iBAAiB;CACjB;;AAED;CACC,gBAAgB;CAChB,iBAAiB;CACjB,mBAAmB;CACnB,sBAAsB;CACtB;;AAED;CACC,sBAAsB;CACtB,kBAAkB;CAClB,WAAW;CACX,gBAAgB;CAChB;;AACD;CACC,eAAe;CACf,mBAAmB;CACnB,WAAW;CACX,oBAAoB;CACpB,YAAa;;CAMb;;AAJA;;CAAA;EACC,UAAU;EACV;EAAA;;AAIF;CACC;;AAGD;CACC,mBAAmB;CACnB,iBAAiB;CACjB;;AAGD;;CAEC","file":"ProjectTile.scss","sourcesContent":["/*\n * Colors\n * ========================================================================== */\n\n$white-base:            hsl(255, 255, 255);\n$gray-darker:           color(black lightness(+13.5%)); /* #222 */\n$gray-dark:             color(black lightness(+25%));   /* #404040 */\n$gray:                  color(black lightness(+33.5%)); /* #555 */\n$gray-light:            color(black lightness(+46.7%)); /* #777 */\n$gray-lighter:          color(black lightness(+93.5%)); /* #eee */\n\n$primary-color: #333333;\n$primary-white: #FFFFFF;\n$primary-border: 1px solid #D9D9DE;\n$primary-font-color: #111111;\n$primary-link-color: #111111;\n$primary-link-hover-color: #111111;\n$primary-nav-font-color: rgba(255, 255, 255, .5);\n\n$accent-color: #26a69a;\n$accent-hover: #2BBBAD;\n\n\n/*\n * Typography\n * ========================================================================== */\n\n$font-family-base:      'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n/*\n * Layout\n * ========================================================================== */\n\n$max-content-width:     1000px;\n\n/*\n * Media queries breakpoints\n * ========================================================================== */\n\n$screen-xs-min:         480px;  /* Extra small screen / phone */\n$screen-sm-min:         768px;  /* Small screen / tablet */\n$screen-md-min:         992px;  /* Medium screen / desktop */\n$screen-lg-min:         1200px; /* Large screen / wide desktop */\n\n/*\n * Animations\n * ========================================================================== */\n\n$animation-swift-out:   .45s cubic-bezier(0.3, 1, 0.4, 1) 0s;\n\n\nmixin icon-spin() {\n\t-webkit-animation-name: spin;\n\t-webkit-animation-duration: 4000ms;\n\t-webkit-animation-iteration-count: infinite;\n\t-webkit-animation-timing-function: linear;\n\t-moz-animation-name: spin;\n\t-moz-animation-duration: 4000ms;\n\t-moz-animation-iteration-count: infinite;\n\t-moz-animation-timing-function: linear;\n\t-ms-animation-name: spin;\n\t-ms-animation-duration: 4000ms;\n\t-ms-animation-iteration-count: infinite;\n\t-ms-animation-timing-function: linear;\n\n\tanimation-name: spin;\n\tanimation-duration: 4000ms;\n\tanimation-iteration-count: infinite;\n\tanimation-timing-function: linear;\n}\n@-ms-keyframes spin {\n  from { -ms-transform: rotate(0deg); }\n  to { -ms-transform: rotate(360deg); }\n}\n@-moz-keyframes spin {\n  from { -moz-transform: rotate(0deg); }\n  to { -moz-transform: rotate(360deg); }\n}\n@-webkit-keyframes spin {\n  from { -webkit-transform: rotate(0deg); }\n  to { -webkit-transform: rotate(360deg); }\n}\n@keyframes spin {\n  from {\n      transform:rotate(0deg);\n  }\n  to {\n      transform:rotate(360deg);\n  }\n}\n","@import '../../../variables.scss';\n\n\n.container {\n\ttext-align: center;\n\tmargin: 0 0 2rem 0;\n}\n\n.projectImage {\n\twidth: 80%;\n\tmax-height: 200px;\n\tdisplay: block;\n\tmargin: 0 auto;\n}\n\n.projectDescription {\n\tmin-height: 66px;\n\tvertical-align: middle;\n\tmargin-bottom: 0;\n}\n\n.referenceImg {\n\tmax-width: 75px;\n\tmax-height: 75px;\n\tborder-radius: 50%;\n\tdisplay: inline-block;\n}\n\n.referenceQuote {\n\tdisplay: inline-block;\n\tfont-size: 0.8rem;\n\twidth: 65%;\n\tmargin: 0 0 0 0;\n}\n.referenceName {\n\tdisplay: block;\n\ttext-align: center;\n\twidth: 65%;\n\tmargin: -22px 0 0 0;\n\tfloat: right;\n\n\t@media screen and (max-width: $screen-sm-min) {\n\t\tmargin: 0;\n\t}\n\n}\n\n.projectRow {\n}\n\n\n.projectTitle {\n\tfont-size: 1.25rem;\n\tfont-weight: 600;\n}\n\n\n.topRow {\n\n}"],"sourceRoot":"webpack://"}]);
  
  // exports
  exports.locals = {
  	"spin": "ProjectTile_spin_1lF",
  	"container": "ProjectTile_container_1Qv",
  	"projectImage": "ProjectTile_projectImage_3en",
  	"projectDescription": "ProjectTile_projectDescription_2dz",
  	"referenceImg": "ProjectTile_referenceImg_3jI",
  	"referenceQuote": "ProjectTile_referenceQuote_3QU",
  	"referenceName": "ProjectTile_referenceName_1nR",
  	"projectRow": "ProjectTile_projectRow_2W5",
  	"projectTitle": "ProjectTile_projectTitle_2DJ",
  	"topRow": "ProjectTile_topRow_3nn"
  };

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
  	value: true
  });
  
  var _getPrototypeOf = __webpack_require__(42);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(43);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(44);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(45);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(46);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(6);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _withStyles = __webpack_require__(57);
  
  var _withStyles2 = _interopRequireDefault(_withStyles);
  
  var _Contact = __webpack_require__(112);
  
  var _Contact2 = _interopRequireDefault(_Contact);
  
  var _reactMaterialize = __webpack_require__(73);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var Contact = function (_Component) {
  	(0, _inherits3.default)(Contact, _Component);
  
  	function Contact() {
  		(0, _classCallCheck3.default)(this, Contact);
  		return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Contact).apply(this, arguments));
  	}
  
  	(0, _createClass3.default)(Contact, [{
  		key: 'submit',
  		value: function submit(e) {
  			e.preventDefault();
  
  			var formInfo = {
  				name: $('#mailerName').val(),
  				email: $('#mailerEmail').val(),
  				phone: $('#mailerPhone').val(),
  				site: $('#mailerWebsite').val(),
  				info: $('#mailerRow').children('textarea').val()
  			};
  
  			console.log('sending formInfo', formInfo);
  
  			$.post('/mail', formInfo, function (data) {
  				console.log('sent! with response', data);
  			});
  		}
  	}, {
  		key: 'render',
  		value: function render() {
  			return _react2.default.createElement(
  				'div',
  				{ className: _Contact2.default.root, id: 'contact' },
  				_react2.default.createElement(
  					'div',
  					{ className: _Contact2.default.container },
  					_react2.default.createElement(
  						'h1',
  						{ className: _Contact2.default.heading },
  						'Want to work together?'
  					),
  					_react2.default.createElement(
  						'h2',
  						{ className: _Contact2.default.tagline },
  						'I build your dreams in code.'
  					),
  					_react2.default.createElement(
  						_reactMaterialize.Modal,
  						{
  							header: 'Tell me all about it!',
  							trigger: _react2.default.createElement(
  								_reactMaterialize.Button,
  								{ waves: 'light' },
  								'Get Started'
  							) },
  						_react2.default.createElement(
  							'p',
  							{ className: _Contact2.default.explanation },
  							'What are you looking for and how can I help? I build websites and mobile apps, front-to-back.'
  						),
  						_react2.default.createElement(
  							_reactMaterialize.Row,
  							{ id: 'mailerRow' },
  							_react2.default.createElement(
  								_reactMaterialize.Input,
  								{ s: 6, id: 'mailerName', label: 'Name' },
  								_react2.default.createElement(
  									_reactMaterialize.Icon,
  									null,
  									'account_circle'
  								)
  							),
  							_react2.default.createElement(
  								_reactMaterialize.Input,
  								{ s: 6, id: 'mailerEmail', label: 'Email Address' },
  								_react2.default.createElement(
  									_reactMaterialize.Icon,
  									null,
  									'email'
  								)
  							),
  							_react2.default.createElement(
  								_reactMaterialize.Input,
  								{ s: 6, id: 'mailerPhone', label: 'Phone number' },
  								_react2.default.createElement(
  									_reactMaterialize.Icon,
  									null,
  									'phone'
  								)
  							),
  							_react2.default.createElement(
  								_reactMaterialize.Input,
  								{ s: 6, id: 'mailerWebsite', label: 'Website' },
  								_react2.default.createElement(
  									_reactMaterialize.Icon,
  									null,
  									'website'
  								)
  							),
  							_react2.default.createElement('textarea', { id: _Contact2.default.textarea1, className: 'materialize-textarea', length: '120',
  								placeholder: 'Tell me about your project... \r 1) What is it? \r 2) How can I help? \r 3) What is your timeline? \r 4) What is your budget?'
  							}),
  							_react2.default.createElement(_reactMaterialize.Input, { onClick: this.submit, type: 'submit', className: 'btn', value: 'SUBMIT YOUR PROJECT' })
  						)
  					)
  				)
  			);
  		}
  	}]);
  	return Contact;
  }(_react.Component);
  
  exports.default = (0, _withStyles2.default)(Contact, _Contact2.default);

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(113);
      var insertCss = __webpack_require__(51);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = insertCss.bind(null, content);
    
      var removeCss = function() {};
  
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      if (false) {
        module.hot.accept("!!./../../../../node_modules/css-loader/index.js?sourceMap&modules&localIdentName=[name]_[local]_[hash:base64:3]!./../../../../node_modules/postcss-loader/index.js?parser=postcss-scss!./Contact.scss", function() {
          var newContent = require("!!./../../../../node_modules/css-loader/index.js?sourceMap&modules&localIdentName=[name]_[local]_[hash:base64:3]!./../../../../node_modules/postcss-loader/index.js?parser=postcss-scss!./Contact.scss");
          if (typeof newContent === 'string') {
            newContent = [[module.id, content, '']];
          }
          removeCss = insertCss(newContent, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(50)();
  // imports
  
  
  // module
  exports.push([module.id, "/*\n * Colors\n * ========================================================================== */\n\n/* #222 */\n\n/* #404040 */\n\n/* #555 */\n\n/* #777 */\n\n/* #eee */\n\n/*\n * Typography\n * ========================================================================== */\n\n/*\n * Layout\n * ========================================================================== */\n\n/*\n * Media queries breakpoints\n * ========================================================================== */\n\n/* Extra small screen / phone */\n\n/* Small screen / tablet */\n\n/* Medium screen / desktop */\n\n/* Large screen / wide desktop */\n\n/*\n * Animations\n * ========================================================================== */\n\nmixin icon-spin() {\n\t-webkit-animation-name: Contact_spin_K8z;\n\t-webkit-animation-duration: 4000ms;\n\t-webkit-animation-iteration-count: infinite;\n\t-webkit-animation-timing-function: linear;\n\t-moz-animation-name: Contact_spin_K8z;\n\t-moz-animation-duration: 4000ms;\n\t-moz-animation-iteration-count: infinite;\n\t-moz-animation-timing-function: linear;\n\t-ms-animation-name: Contact_spin_K8z;\n\t-ms-animation-duration: 4000ms;\n\t-ms-animation-iteration-count: infinite;\n\t-ms-animation-timing-function: linear;\n\n\t-webkit-animation-name: Contact_spin_K8z;\n\n\t     -o-animation-name: Contact_spin_K8z;\n\n\t        animation-name: Contact_spin_K8z;\n\t-webkit-animation-duration: 4000ms;\n\t     -o-animation-duration: 4000ms;\n\t        animation-duration: 4000ms;\n\t-webkit-animation-iteration-count: infinite;\n\t     -o-animation-iteration-count: infinite;\n\t        animation-iteration-count: infinite;\n\t-webkit-animation-timing-function: linear;\n\t     -o-animation-timing-function: linear;\n\t        animation-timing-function: linear;\n}\n\n@-webkit-keyframes Contact_spin_K8z {\n  from { -webkit-transform: rotate(0deg); }\n  to { -webkit-transform: rotate(360deg); }\n}\n\n@-o-keyframes Contact_spin_K8z {\n  from {\n      -o-transform:rotate(0deg);\n         transform:rotate(0deg);\n  }\n  to {\n      -o-transform:rotate(360deg);\n         transform:rotate(360deg);\n  }\n}\n\n@keyframes Contact_spin_K8z {\n  from {\n      -webkit-transform:rotate(0deg);\n           -o-transform:rotate(0deg);\n              transform:rotate(0deg);\n  }\n  to {\n      -webkit-transform:rotate(360deg);\n           -o-transform:rotate(360deg);\n              transform:rotate(360deg);\n  }\n}\n\n.Contact_root_1h4 {\n\twidth: 100%;\n  border-bottom: 1px solid #D9D9DE;\n  border-top: 1px solid #D9D9DE;\n  background-color: #5E696D;\n}\n\n.Contact_container_3Cb {\n  margin: 0 auto;\n  padding: 21vh 0 21vh 0;\n  width: 100%;\n  text-align: center;\n}\n\n.Contact_heading_zkR {\n\tfont-size: 3.5rem;\n\tcolor: #FFFFFF;\n\tfont-weight: 600;\n\tmargin: 2rem 0 2rem 0\n}\n\n@media screen and (max-width: 768px) {\n\n\t.Contact_heading_zkR {\n\t\tfont-size: 2.5rem;\n\t}  \n  }\n\n.Contact_tagline_XXH {\n\tfont-size: 2.5rem;\n\tcolor: #FFFFFF;\n\tfont-weight: 600;\n\tmargin: 2rem 0\n}\n\n@media screen and (max-width: 768px) {\n\n\t.Contact_tagline_XXH {\n\t\tfont-size: 1.75rem;\n\t}\n  }\n\n#Contact_textarea1_2CJ {\n\theight: 100px !important\n\n}\n\n#Contact_textarea1_2CJ::-webkit-input-placeholder {/* WebKit browsers */\n\tcolor: #999;\n}\n\n#Contact_textarea1_2CJ:-moz-placeholder {/* Mozilla Firefox 4 to 18 */\n\tcolor: #999;\n}\n\n#Contact_textarea1_2CJ::-moz-placeholder {/* Mozilla Firefox 19+ */\n\tcolor: #999;\n}\n\n#Contact_textarea1_2CJ:-ms-input-placeholder {/* Internet Explorer 10+ */\n\tcolor: #999;\n}\n", "", {"version":3,"sources":["/./src/components/variables.scss","/./src/components/ProfilePage/Contact/Contact.scss"],"names":[],"mappings":"AAAA;;gFAEgF;;AAGxB,UAAU;;AACV,aAAa;;AACb,UAAU;;AACV,UAAU;;AACV,UAAU;;AAclE;;gFAEgF;;AAIhF;;gFAEgF;;AAIhF;;gFAEgF;;AAEhD,gCAAgC;;AAChC,2BAA2B;;AAC3B,6BAA6B;;AAC7B,iCAAiC;;AAEjE;;gFAEgF;;AAKhF;CACC,yCAA6B;CAC7B,mCAAmC;CACnC,4CAA4C;CAC5C,0CAA0C;CAC1C,sCAA0B;CAC1B,gCAAgC;CAChC,yCAAyC;CACzC,uCAAuC;CACvC,qCAAyB;CACzB,+BAA+B;CAC/B,wCAAwC;CACxC,sCAAsC;;CAEtC,yCAAqB;;MAArB,oCAAqB;;SAArB,iCAAqB;CACrB,mCAA2B;MAA3B,8BAA2B;SAA3B,2BAA2B;CAC3B,4CAAoC;MAApC,uCAAoC;SAApC,oCAAoC;CACpC,0CAAkC;MAAlC,qCAAkC;SAAlC,kCAAkC;CAClC;;AASD;EACE,OAAO,gCAAgC,EAAE;EACzC,KAAK,kCAAkC,EAAE;CAC1C;;AACD;EACE;MACI,0BAAuB;SAAvB,uBAAuB;GAC1B;EACD;MACI,4BAAyB;SAAzB,yBAAyB;GAC5B;CACF;;AAPD;EACE;MACI,+BAAuB;WAAvB,0BAAuB;cAAvB,uBAAuB;GAC1B;EACD;MACI,iCAAyB;WAAzB,4BAAyB;cAAzB,yBAAyB;GAC5B;CACF;;ACtFD;CACC,YAAY;EACX,iCAA+B;EAC/B,8BAA4B;EAC5B,0BAA0B;CAC3B;;AAED;EACE,eAAe;EACf,uBAAuB;EACvB,YAAY;EACZ,mBAAmB;CACpB;;AAED;CACC,kBAAkB;CAClB,eAAsB;CACtB,iBAAiB;CACjB,qBAAsB;CAKtB;;AAHA;;CAAA;EACE,kBAAkB;EAClB;GAAA;;AAGH;CACC,kBAAkB;CAClB,eAAsB;CACtB,iBAAiB;CACjB,cAAe;CAKf;;AAHA;;CAAA;EACE,mBAAmB;EACnB;GAAA;;AAGH;CACC,wBAAyB;;CAezB;;AAbA,mDAA+B,qBAAqB;CACjD,YAAe;CACjB;;AACD,yCAAqB,6BAA6B;CAC9C,YAAe;CAClB;;AACD,0CAAsB,yBAAyB;CAC3C,YAAe;CAClB;;AACD,8CAA0B,2BAA2B;CACjD,YAAe;CAClB","file":"Contact.scss","sourcesContent":["/*\n * Colors\n * ========================================================================== */\n\n$white-base:            hsl(255, 255, 255);\n$gray-darker:           color(black lightness(+13.5%)); /* #222 */\n$gray-dark:             color(black lightness(+25%));   /* #404040 */\n$gray:                  color(black lightness(+33.5%)); /* #555 */\n$gray-light:            color(black lightness(+46.7%)); /* #777 */\n$gray-lighter:          color(black lightness(+93.5%)); /* #eee */\n\n$primary-color: #333333;\n$primary-white: #FFFFFF;\n$primary-border: 1px solid #D9D9DE;\n$primary-font-color: #111111;\n$primary-link-color: #111111;\n$primary-link-hover-color: #111111;\n$primary-nav-font-color: rgba(255, 255, 255, .5);\n\n$accent-color: #26a69a;\n$accent-hover: #2BBBAD;\n\n\n/*\n * Typography\n * ========================================================================== */\n\n$font-family-base:      'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n/*\n * Layout\n * ========================================================================== */\n\n$max-content-width:     1000px;\n\n/*\n * Media queries breakpoints\n * ========================================================================== */\n\n$screen-xs-min:         480px;  /* Extra small screen / phone */\n$screen-sm-min:         768px;  /* Small screen / tablet */\n$screen-md-min:         992px;  /* Medium screen / desktop */\n$screen-lg-min:         1200px; /* Large screen / wide desktop */\n\n/*\n * Animations\n * ========================================================================== */\n\n$animation-swift-out:   .45s cubic-bezier(0.3, 1, 0.4, 1) 0s;\n\n\nmixin icon-spin() {\n\t-webkit-animation-name: spin;\n\t-webkit-animation-duration: 4000ms;\n\t-webkit-animation-iteration-count: infinite;\n\t-webkit-animation-timing-function: linear;\n\t-moz-animation-name: spin;\n\t-moz-animation-duration: 4000ms;\n\t-moz-animation-iteration-count: infinite;\n\t-moz-animation-timing-function: linear;\n\t-ms-animation-name: spin;\n\t-ms-animation-duration: 4000ms;\n\t-ms-animation-iteration-count: infinite;\n\t-ms-animation-timing-function: linear;\n\n\tanimation-name: spin;\n\tanimation-duration: 4000ms;\n\tanimation-iteration-count: infinite;\n\tanimation-timing-function: linear;\n}\n@-ms-keyframes spin {\n  from { -ms-transform: rotate(0deg); }\n  to { -ms-transform: rotate(360deg); }\n}\n@-moz-keyframes spin {\n  from { -moz-transform: rotate(0deg); }\n  to { -moz-transform: rotate(360deg); }\n}\n@-webkit-keyframes spin {\n  from { -webkit-transform: rotate(0deg); }\n  to { -webkit-transform: rotate(360deg); }\n}\n@keyframes spin {\n  from {\n      transform:rotate(0deg);\n  }\n  to {\n      transform:rotate(360deg);\n  }\n}\n","\n@import '../../variables.scss';\n\n.root {\n\twidth: 100%;\n  border-bottom: $primary-border;\n  border-top: $primary-border;\n  background-color: #5E696D;\n}\n\n.container {\n  margin: 0 auto;\n  padding: 21vh 0 21vh 0;\n  width: 100%;\n  text-align: center;\n}\n\n.heading {\n\tfont-size: 3.5rem;\n\tcolor: $primary-white;\n\tfont-weight: 600;\n\tmargin: 2rem 0 2rem 0;\n\n\t@media screen and (max-width: $screen-sm-min) {\n  \tfont-size: 2.5rem;  \n  }\n}\n\n.tagline {\n\tfont-size: 2.5rem;\n\tcolor: $primary-white;\n\tfont-weight: 600;\n\tmargin: 2rem 0;\n\t\n\t@media screen and (max-width: $screen-sm-min) {\n  \tfont-size: 1.75rem;\n  }\n}\n\n#textarea1 {\n\theight: 100px !important;\n\n\t&::-webkit-input-placeholder { /* WebKit browsers */\n    color:    #999;\n\t}\n\t&:-moz-placeholder { /* Mozilla Firefox 4 to 18 */\n\t    color:    #999;\n\t}\n\t&::-moz-placeholder { /* Mozilla Firefox 19+ */\n\t    color:    #999;\n\t}\n\t&:-ms-input-placeholder { /* Internet Explorer 10+ */\n\t    color:    #999;\n\t}\n\n}\n"],"sourceRoot":"webpack://"}]);
  
  // exports
  exports.locals = {
  	"spin": "Contact_spin_K8z",
  	"root": "Contact_root_1h4",
  	"container": "Contact_container_3Cb",
  	"heading": "Contact_heading_zkR",
  	"tagline": "Contact_tagline_XXH",
  	"textarea1": "Contact_textarea1_2CJ"
  };

/***/ },
/* 114 */
/***/ function(module, exports) {

  module.exports = require("react-parallax");

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _getPrototypeOf = __webpack_require__(42);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(43);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(44);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(45);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(46);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(6);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _config = __webpack_require__(40);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  var Html = function (_Component) {
    (0, _inherits3.default)(Html, _Component);
  
    function Html() {
      (0, _classCallCheck3.default)(this, Html);
      return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Html).apply(this, arguments));
    }
  
    (0, _createClass3.default)(Html, [{
      key: 'trackingCode',
      value: function trackingCode() {
        return { __html: '(function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=' + 'function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;' + 'e=o.createElement(i);r=o.getElementsByTagName(i)[0];' + 'e.src=\'https://www.google-analytics.com/analytics.js\';' + 'r.parentNode.insertBefore(e,r)}(window,document,\'script\',\'ga\'));' + ('ga(\'create\',\'' + _config.googleAnalyticsId + '\',\'auto\');ga(\'send\',\'pageview\');')
        };
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'html',
          { className: 'no-js', lang: '' },
          _react2.default.createElement(
            'head',
            null,
            _react2.default.createElement('meta', { charSet: 'utf-8' }),
            _react2.default.createElement('meta', { httpEquiv: 'X-UA-Compatible', content: 'IE=edge' }),
            _react2.default.createElement(
              'title',
              null,
              this.props.title
            ),
            _react2.default.createElement('meta', { name: 'description', content: this.props.description }),
            _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }),
            _react2.default.createElement('link', { rel: 'apple-touch-icon', href: 'apple-touch-icon.png' }),
            _react2.default.createElement('script', { src: 'https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js' }),
            _react2.default.createElement('link', { href: 'http://fonts.googleapis.com/icon?family=Material+Icons', rel: 'stylesheet' }),
            _react2.default.createElement('link', { type: 'text/css', rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.5/css/materialize.min.css' }),
            _react2.default.createElement('script', { src: 'https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.5/js/materialize.min.js' }),
            _react2.default.createElement('style', { id: 'css', dangerouslySetInnerHTML: { __html: this.props.css } })
          ),
          _react2.default.createElement(
            'body',
            null,
            _react2.default.createElement('div', { id: 'app', dangerouslySetInnerHTML: { __html: this.props.body } }),
            _react2.default.createElement('script', { src: this.props.entry }),
            _react2.default.createElement('script', { dangerouslySetInnerHTML: this.trackingCode() })
          )
        );
      }
    }]);
    return Html;
  }(_react.Component);
  
  Html.propTypes = {
    title: _react.PropTypes.string,
    description: _react.PropTypes.string,
    css: _react.PropTypes.string,
    body: _react.PropTypes.string.isRequired,
    entry: _react.PropTypes.string.isRequired
  };
  Html.defaultProps = {
    title: '',
    description: ''
  };
  exports.default = Html;

/***/ },
/* 116 */
/***/ function(module, exports) {

  module.exports = require("./assets");

/***/ },
/* 117 */
/***/ function(module, exports) {

  module.exports = require("nodemailer");

/***/ },
/* 118 */
/***/ function(module, exports) {

  module.exports = require("body-parser");

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _regenerator = __webpack_require__(1);
  
  var _regenerator2 = _interopRequireDefault(_regenerator);
  
  var _asyncToGenerator2 = __webpack_require__(2);
  
  var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
  
  var _assign = __webpack_require__(54);
  
  var _assign2 = _interopRequireDefault(_assign);
  
  var _fs = __webpack_require__(120);
  
  var _fs2 = _interopRequireDefault(_fs);
  
  var _path = __webpack_require__(4);
  
  var _express = __webpack_require__(5);
  
  var _bluebird = __webpack_require__(121);
  
  var _bluebird2 = _interopRequireDefault(_bluebird);
  
  var _jade = __webpack_require__(122);
  
  var _jade2 = _interopRequireDefault(_jade);
  
  var _frontMatter = __webpack_require__(123);
  
  var _frontMatter2 = _interopRequireDefault(_frontMatter);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  // A folder with Jade/Markdown/HTML content pages
  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  var CONTENT_DIR = (0, _path.join)(__dirname, './content');
  
  // Extract 'front matter' metadata and generate HTML
  var parseJade = function parseJade(path, jadeContent) {
    var fmContent = (0, _frontMatter2.default)(jadeContent);
    var htmlContent = _jade2.default.render(fmContent.body);
    return (0, _assign2.default)({ path: path, content: htmlContent }, fmContent.attributes);
  };
  
  var readFile = _bluebird2.default.promisify(_fs2.default.readFile);
  var fileExists = function fileExists(filename) {
    return new _bluebird2.default(function (resolve) {
      _fs2.default.exists(filename, resolve);
    });
  };
  
  var router = new _express.Router();
  
  router.get('/', function () {
    var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(req, res, next) {
      var path, fileName, source, content;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              path = req.query.path;
  
              if (!(!path || path === 'undefined')) {
                _context.next = 5;
                break;
              }
  
              res.status(400).send({ error: 'The \'path\' query parameter cannot be empty.' });
              return _context.abrupt('return');
  
            case 5:
              fileName = (0, _path.join)(CONTENT_DIR, (path === '/' ? '/index' : path) + '.jade');
              _context.next = 8;
              return fileExists(fileName);
  
            case 8:
              if (_context.sent) {
                _context.next = 10;
                break;
              }
  
              fileName = (0, _path.join)(CONTENT_DIR, path + '/index.jade');
  
            case 10:
              _context.next = 12;
              return fileExists(fileName);
  
            case 12:
              if (_context.sent) {
                _context.next = 16;
                break;
              }
  
              res.status(404).send({ error: 'The page \'' + path + '\' is not found.' });
              _context.next = 21;
              break;
  
            case 16:
              _context.next = 18;
              return readFile(fileName, { encoding: 'utf8' });
  
            case 18:
              source = _context.sent;
              content = parseJade(path, source);
  
              res.status(200).send(content);
  
            case 21:
              _context.next = 26;
              break;
  
            case 23:
              _context.prev = 23;
              _context.t0 = _context['catch'](0);
  
              next(_context.t0);
  
            case 26:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined, [[0, 23]]);
    })),
        _this = undefined;
    return function (_x, _x2, _x3) {
      return ref.apply(_this, arguments);
    };
  }());
  
  exports.default = router;

/***/ },
/* 120 */
/***/ function(module, exports) {

  module.exports = require("fs");

/***/ },
/* 121 */
/***/ function(module, exports) {

  module.exports = require("bluebird");

/***/ },
/* 122 */
/***/ function(module, exports) {

  module.exports = require("jade");

/***/ },
/* 123 */
/***/ function(module, exports) {

  module.exports = require("front-matter");

/***/ }
/******/ ]);
//# sourceMappingURL=server.js.map