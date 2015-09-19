webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _componentsLayout = __webpack_require__(157);

	var _componentsTypeJs = __webpack_require__(181);

	var _componentsImgJs = __webpack_require__(182);

	var _componentsImgJs2 = _interopRequireDefault(_componentsImgJs);

	var App = (function (_React$Component) {
		_inherits(App, _React$Component);

		function App() {
			_classCallCheck(this, App);

			_get(Object.getPrototypeOf(App.prototype), 'constructor', this).apply(this, arguments);
		}

		_createClass(App, [{
			key: 'render',
			value: function render() {
				return _react2['default'].createElement(
					_componentsLayout.Container,
					null,
					_react2['default'].createElement(
						_componentsTypeJs.Title,
						null,
						'PHOTOGRAPHY'
					),
					_react2['default'].createElement(_componentsLayout.Sep, null),
					_react2['default'].createElement(_componentsImgJs2['default'], { src: '/photos/tomato.jpg' }),
					_react2['default'].createElement(
						_componentsLayout.Two,
						null,
						_react2['default'].createElement(_componentsImgJs2['default'], { src: '/photos/tomato.jpg' }),
						_react2['default'].createElement(_componentsImgJs2['default'], { src: '/photos/tomato.jpg' })
					)
				);
			}
		}]);

		return App;
	})(_react2['default'].Component);

	_react2['default'].render(_react2['default'].createElement(App, null), document.body);

/***/ },

/***/ 3:
/***/ function(module, exports) {

	// shim for using process in browser

	var process = module.exports = {};
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = setTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    clearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        setTimeout(drainQueue, 0);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },

/***/ 157:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _radium = __webpack_require__(158);

	var _radium2 = _interopRequireDefault(_radium);

	// --------------------------------- Container ---------------------------------

	var Container = (function (_React$Component) {
		_inherits(Container, _React$Component);

		function Container() {
			_classCallCheck(this, _Container);

			_get(Object.getPrototypeOf(_Container.prototype), 'constructor', this).apply(this, arguments);
		}

		_createClass(Container, [{
			key: 'componentWillMount',
			value: function componentWillMount() {
				document.body.style.backgroundColor = '#111';
				document.body.style.margin = 0;
			}
		}, {
			key: 'componentWillUnmount',
			value: function componentWillUnmount() {
				document.body.style.backgroundColor = null;
				document.body.style.margin = null;
			}
		}, {
			key: 'style',
			value: function style() {
				return {
					boxSizing: 'border-box',
					margin: '0 auto',
					maxWidth: 1000,
					padding: '64px 24px',
					width: '100%'
				};
			}
		}, {
			key: 'render',
			value: function render() {
				return _react2['default'].createElement(
					'div',
					{ style: this.style() },
					this.props.children
				);
			}
		}]);

		var _Container = Container;
		Container = (0, _radium2['default'])(Container) || Container;
		return Container;
	})(_react2['default'].Component);

	exports.Container = Container;
	;

	// --------------------------------- Sep ---------------------------------

	var Sep = (function (_React$Component2) {
		_inherits(Sep, _React$Component2);

		function Sep() {
			_classCallCheck(this, _Sep);

			_get(Object.getPrototypeOf(_Sep.prototype), 'constructor', this).apply(this, arguments);
		}

		_createClass(Sep, [{
			key: 'style',
			value: function style() {
				return {
					background: '#f42',
					height: 2,
					margin: '64px auto',
					maxWidth: '50%',
					width: 200
				};
			}
		}, {
			key: 'render',
			value: function render() {
				return _react2['default'].createElement('div', { style: this.style() });
			}
		}]);

		var _Sep = Sep;
		Sep = (0, _radium2['default'])(Sep) || Sep;
		return Sep;
	})(_react2['default'].Component);

	exports.Sep = Sep;
	;

	// --------------------------------- Two ---------------------------------

	var Two = (function (_React$Component3) {
		_inherits(Two, _React$Component3);

		function Two() {
			_classCallCheck(this, _Two);

			_get(Object.getPrototypeOf(_Two.prototype), 'constructor', this).apply(this, arguments);
		}

		_createClass(Two, [{
			key: 'componentDidMount',
			value: function componentDidMount() {
				console.log(this.props.children);
				console.log(Array.isArray(this.props.children));
			}
		}, {
			key: 'style',
			value: function style() {
				return {};
			}
		}, {
			key: 'render',
			value: function render() {

				return _react2['default'].createElement(
					'div',
					{ style: this.style() },
					this.props.children
				);
			}
		}]);

		var _Two = Two;
		Two = (0, _radium2['default'])(Two) || Two;
		return Two;
	})(_react2['default'].Component);

	exports.Two = Two;
	;

/***/ },

/***/ 181:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _radium = __webpack_require__(158);

	var _radium2 = _interopRequireDefault(_radium);

	var Title = (function (_React$Component) {
		_inherits(Title, _React$Component);

		function Title() {
			_classCallCheck(this, _Title);

			_get(Object.getPrototypeOf(_Title.prototype), 'constructor', this).apply(this, arguments);
		}

		_createClass(Title, [{
			key: 'style',
			value: function style() {
				return {
					color: '#fff',
					font: '400 20px/1 "Open Sans"',
					letterSpacing: 8,
					margin: 0,
					padding: 0,
					textAlign: 'center',
					textIndent: 8
				};
			}
		}, {
			key: 'render',
			value: function render() {
				return _react2['default'].createElement(
					'h1',
					{ style: this.style() },
					this.props.children
				);
			}
		}]);

		var _Title = Title;
		Title = (0, _radium2['default'])(Title) || Title;
		return Title;
	})(_react2['default'].Component);

	exports.Title = Title;
	;

/***/ },

/***/ 182:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _radium = __webpack_require__(158);

	var _radium2 = _interopRequireDefault(_radium);

	var Img = (function (_React$Component) {
		_inherits(Img, _React$Component);

		function Img() {
			_classCallCheck(this, _Img);

			_get(Object.getPrototypeOf(_Img.prototype), 'constructor', this).apply(this, arguments);
		}

		_createClass(Img, [{
			key: 'src',
			value: function src() {
				return this.props.src.replace('/photos/', '/photos/full/');
			}
		}, {
			key: 'style',
			value: function style() {
				return {
					display: 'block',
					marginBottom: 64
				};
			}
		}, {
			key: 'imgStyle',
			value: function imgStyle() {
				return {
					border: 0,
					boxShadow: '0 1px 5px #000',
					width: '100%'
				};
			}
		}, {
			key: 'render',
			value: function render() {
				return _react2['default'].createElement(
					'a',
					{ href: this.src(), style: this.style() },
					_react2['default'].createElement('img', {
						src: this.props.src,
						alt: 'Photography by Sebastian Sandqvist',
						style: this.imgStyle() })
				);
			}
		}]);

		var _Img = Img;
		Img = (0, _radium2['default'])(Img) || Img;
		return Img;
	})(_react2['default'].Component);

	exports['default'] = Img;
	;
	module.exports = exports['default'];

	// componentWillMount() {

	// }
	//
	//

/***/ }

});