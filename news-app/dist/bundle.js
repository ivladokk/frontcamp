/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar DataService = __webpack_require__(/*! ./dataService.js */ \"./src/js/dataService.js\");\n\nvar News = __webpack_require__(/*! ./news.js */ \"./src/js/news.js\");\n\nvar SourceSelector = __webpack_require__(/*! ./sources.js */ \"./src/js/sources.js\");\n\nvar App =\n/*#__PURE__*/\nfunction () {\n  function App() {\n    _classCallCheck(this, App);\n\n    this.config = {\n      apiUrl: \"https://newsapi.org/v2/\",\n      apiKey: \"788080c99995412c9c08fb95499225a2\",\n      languages: [\"all\", \"ar\", \"de\", \"en\", \"es\", \"fr\", \"he\", \"it\", \"nl\", \"no\", \"pt\", \"ru\", \"se\", \"ud\", \"zh\"],\n      countries: [\"all\", \"ae\", \"ar\", \"at\", \"au\", \"be\", \"bg\", \"br\", \"ca\", \"ch\", \"cn\", \"co\", \"cu\", \"cz\", \"de\", \"eg\", \"fr\", \"gb\", \"gr\", \"hk\", \"hu\", \"id\", \"ie\", \"il\", \"in\", \"it\", \"jp\", \"kr\", \"lt\", \"lv\", \"ma\", \"mx\", \"my\", \"ng\", \"nl\", \"no\", \"nz\", \"ph\", \"pl\", \"pt\", \"ro\", \"rs\", \"ru\", \"sa\", \"se\", \"sg\", \"si\", \"sk\", \"th\", \"tr\", \"tw\", \"ua\", \"us\", \"ve\", \"za\"],\n      categories: [\"all\", \"business\", \"entertainment\", \"general\", \"health\", \"science\", \"sports\", \"technology\"]\n    };\n    this.dataService = new DataService(this.config);\n    this.selectedSources = new Set();\n  }\n\n  _createClass(App, [{\n    key: \"_createCheckedSource\",\n    value: function _createCheckedSource(item) {\n      var _this = this;\n\n      var container = document.createElement('div');\n      container.classList.add('source-checked');\n      var name = document.createElement('span');\n      name.classList.add('source-checked-name');\n      var nameText = document.createTextNode(item.name);\n      name.appendChild(nameText);\n      var deleteBtn = document.createElement('span');\n      deleteBtn.classList.add('delete-btn');\n      var deleteText = document.createTextNode('x');\n      deleteBtn.appendChild(deleteText);\n\n      deleteBtn.onclick = function (event) {\n        _this.selectedSources.delete(item);\n\n        container.parentNode.removeChild(container);\n      };\n\n      container.appendChild(name);\n      container.appendChild(deleteBtn);\n      return container;\n    }\n  }, {\n    key: \"_setDropdownValues\",\n    value: function _setDropdownValues(el, src) {\n      var _iteratorNormalCompletion = true;\n      var _didIteratorError = false;\n      var _iteratorError = undefined;\n\n      try {\n        for (var _iterator = src[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n          var x = _step.value;\n          var item = document.createElement('option');\n          item.value = x;\n          item.text = x;\n          el.appendChild(item);\n        }\n      } catch (err) {\n        _didIteratorError = true;\n        _iteratorError = err;\n      } finally {\n        try {\n          if (!_iteratorNormalCompletion && _iterator.return != null) {\n            _iterator.return();\n          }\n        } finally {\n          if (_didIteratorError) {\n            throw _iteratorError;\n          }\n        }\n      }\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      var _this2 = this;\n\n      this._setDropdownValues(document.getElementById('source-language'), this.config.languages);\n\n      this._setDropdownValues(document.getElementById('source-country'), this.config.countries);\n\n      this._setDropdownValues(document.getElementById('source-category'), this.config.categories);\n\n      this._setDropdownValues(document.getElementById('language'), this.config.languages);\n\n      document.getElementById('get_news').addEventListener(\"click\", function () {\n        return _this2.getNews();\n      }, false);\n      document.getElementById('get_top_news').addEventListener(\"click\", function () {\n        return _this2.getTopNews();\n      }, false);\n      document.getElementById('select_src').addEventListener(\"click\", function () {\n        return _this2.selectSrc();\n      }, false);\n    }\n  }, {\n    key: \"selectSrc\",\n    value: function () {\n      var _selectSrc = _asyncToGenerator(\n      /*#__PURE__*/\n      regeneratorRuntime.mark(function _callee() {\n        var src, result;\n        return regeneratorRuntime.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                src = new SourceSelector(this.dataService);\n                _context.next = 3;\n                return src.getResultAsync();\n\n              case 3:\n                result = _context.sent;\n\n                if (result) {\n                  this._fillSelectedSources(result);\n                }\n\n              case 5:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, this);\n      }));\n\n      return function selectSrc() {\n        return _selectSrc.apply(this, arguments);\n      };\n    }()\n  }, {\n    key: \"_fillSelectedSources\",\n    value: function _fillSelectedSources(src) {\n      this.selectedSources = src;\n      var el = document.getElementById('sources-checked-list');\n\n      while (el.firstChild) {\n        el.removeChild(el.firstChild);\n      }\n\n      var _iteratorNormalCompletion2 = true;\n      var _didIteratorError2 = false;\n      var _iteratorError2 = undefined;\n\n      try {\n        for (var _iterator2 = this.selectedSources[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {\n          var x = _step2.value;\n          el.appendChild(this._createCheckedSource(x));\n        }\n      } catch (err) {\n        _didIteratorError2 = true;\n        _iteratorError2 = err;\n      } finally {\n        try {\n          if (!_iteratorNormalCompletion2 && _iterator2.return != null) {\n            _iterator2.return();\n          }\n        } finally {\n          if (_didIteratorError2) {\n            throw _iteratorError2;\n          }\n        }\n      }\n    }\n  }, {\n    key: \"_combineFilter\",\n    value: function _combineFilter() {\n      var sources = [];\n      var _iteratorNormalCompletion3 = true;\n      var _didIteratorError3 = false;\n      var _iteratorError3 = undefined;\n\n      try {\n        for (var _iterator3 = this.selectedSources[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {\n          var x = _step3.value;\n          sources.push(x.id);\n        }\n      } catch (err) {\n        _didIteratorError3 = true;\n        _iteratorError3 = err;\n      } finally {\n        try {\n          if (!_iteratorNormalCompletion3 && _iterator3.return != null) {\n            _iterator3.return();\n          }\n        } finally {\n          if (_didIteratorError3) {\n            throw _iteratorError3;\n          }\n        }\n      }\n\n      var filter = {\n        q: document.getElementById('q').value,\n        sources: sources,\n        language: document.getElementById('language').value\n      };\n      return _objectSpread({}, filter);\n    }\n  }, {\n    key: \"getNews\",\n    value: function getNews() {\n      var news = new News(this.dataService);\n      news.getNews(this._combineFilter());\n    }\n  }, {\n    key: \"getTopNews\",\n    value: function getTopNews() {\n      var news = new News(this.dataService);\n      news.getNews(this._combineFilter());\n    }\n  }]);\n\n  return App;\n}();\n\nmodule.exports = App;\n\n//# sourceURL=webpack:///./src/js/app.js?");

/***/ }),

/***/ "./src/js/dataService.js":
/*!*******************************!*\
  !*** ./src/js/dataService.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar DataService =\n/*#__PURE__*/\nfunction () {\n  function DataService(config) {\n    _classCallCheck(this, DataService);\n\n    this._config = config;\n  }\n\n  _createClass(DataService, [{\n    key: \"getSourcesAsync\",\n    value: function () {\n      var _getSourcesAsync = _asyncToGenerator(\n      /*#__PURE__*/\n      regeneratorRuntime.mark(function _callee(filter) {\n        var params, url, request, response, data;\n        return regeneratorRuntime.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                params = \"\";\n\n                if (filter.language && filter.language !== \"all\" && this._config.languages.includes(filter.language)) {\n                  params += params + \"language=\" + filter.language + \"&\";\n                }\n\n                if (filter.country && filter.country !== \"all\" && this._config.countries.includes(filter.country)) {\n                  params += params + \"country=\" + filter.country + \"&\";\n                }\n\n                if (filter.category && filter.category !== \"all\" && this._config.categories.includes(filter.category)) {\n                  params += params + \"category=\" + filter.country + \"&\";\n                }\n\n                url = \"\".concat(this._config.apiUrl, \"/sources?\").concat(params, \"apiKey=\").concat(this._config.apiKey);\n                request = new Request(url);\n                _context.next = 8;\n                return fetch(request);\n\n              case 8:\n                response = _context.sent;\n\n                if (!response.ok) {\n                  _context.next = 14;\n                  break;\n                }\n\n                _context.next = 12;\n                return response.json();\n\n              case 12:\n                data = _context.sent;\n                return _context.abrupt(\"return\", data);\n\n              case 14:\n                throw new Error(response.status);\n\n              case 15:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, this);\n      }));\n\n      return function getSourcesAsync(_x) {\n        return _getSourcesAsync.apply(this, arguments);\n      };\n    }()\n  }, {\n    key: \"_getParams\",\n    value: function _getParams(filter) {\n      var params = \"\";\n\n      if (filter.q) {\n        params += params + \"q=\" + filter.q + \"&\";\n      }\n\n      if (filter.sources && filter.sources.length > 0) {\n        params += params + \"sources=\" + filter.sources.toString() + \"&\";\n      }\n\n      if (filter.language && filter.language !== \"all\") {\n        params += params + \"language=\" + filter.language + \"&\";\n      }\n\n      if (filter.country && filter.country !== \"all\") {\n        params += params + \"country=\" + filter.country + \"&\";\n      }\n\n      if (filter.category && filter.category !== \"all\") {\n        params += params + \"category=\" + filter.country + \"&\";\n      }\n\n      return params;\n    }\n  }, {\n    key: \"getNewsAsync\",\n    value: function () {\n      var _getNewsAsync = _asyncToGenerator(\n      /*#__PURE__*/\n      regeneratorRuntime.mark(function _callee2(route, filter) {\n        var url, request, response, data;\n        return regeneratorRuntime.wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                url = \"\".concat(this._config.apiUrl, \"/\").concat(route, \"?\").concat(this._getParams(filter), \"apiKey=\").concat(this._config.apiKey);\n                request = new Request(url);\n                _context2.next = 4;\n                return fetch(request);\n\n              case 4:\n                response = _context2.sent;\n\n                if (!response.ok) {\n                  _context2.next = 10;\n                  break;\n                }\n\n                _context2.next = 8;\n                return response.json();\n\n              case 8:\n                data = _context2.sent;\n                return _context2.abrupt(\"return\", data);\n\n              case 10:\n                throw new Error(response.status);\n\n              case 11:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2, this);\n      }));\n\n      return function getNewsAsync(_x2, _x3) {\n        return _getNewsAsync.apply(this, arguments);\n      };\n    }()\n  }]);\n\n  return DataService;\n}();\n\nmodule.exports = DataService;\n\n//# sourceURL=webpack:///./src/js/dataService.js?");

/***/ }),

/***/ "./src/js/mask.js":
/*!************************!*\
  !*** ./src/js/mask.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Mask =\n/*#__PURE__*/\nfunction () {\n  function Mask() {\n    _classCallCheck(this, Mask);\n  }\n\n  _createClass(Mask, null, [{\n    key: \"show\",\n    value: function show() {\n      var mask = document.getElementById('loading');\n      mask.classList.add('show-mask');\n    }\n  }, {\n    key: \"hide\",\n    value: function hide() {\n      var mask = document.getElementById('loading');\n      mask.classList.remove('show-mask');\n    }\n  }]);\n\n  return Mask;\n}();\n\nmodule.exports = Mask;\n\n//# sourceURL=webpack:///./src/js/mask.js?");

/***/ }),

/***/ "./src/js/news.js":
/*!************************!*\
  !*** ./src/js/news.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Mask = __webpack_require__(/*! ./mask.js */ \"./src/js/mask.js\");\n\nvar News =\n/*#__PURE__*/\nfunction () {\n  function News(dataService) {\n    _classCallCheck(this, News);\n\n    this._dataService = dataService;\n  }\n\n  _createClass(News, [{\n    key: \"getNews\",\n    value: function getNews(filter) {\n      var _this = this;\n\n      Mask.show();\n\n      this._dataService.getNewsAsync(\"everything\", filter).then(function (data) {\n        if (data.articles) {\n          _this._fillArticles(data.articles);\n        }\n      }).finally(function () {\n        return Mask.hide();\n      }).catch(function (error) {\n        alert(\"Something went wrong...\".concat(error));\n      });\n    }\n  }, {\n    key: \"getTopNews\",\n    value: function getTopNews(filter) {\n      var _this2 = this;\n\n      Mask.show();\n\n      this._dataService.getNewsAsync(\"top-headline\", filter).then(function (data) {\n        if (data.articles) {\n          _this2._fillArticles(data.articles);\n        }\n      }).finally(function () {\n        return Mask.hide();\n      }).catch(function (error) {\n        alert(\"Something went wrong...\".concat(error));\n      });\n    }\n  }, {\n    key: \"_fillArticles\",\n    value: function _fillArticles(articles) {\n      var _this3 = this;\n\n      var container = document.getElementById('results');\n\n      while (container.firstChild) {\n        container.removeChild(container.firstChild);\n      }\n\n      articles.map(function (obj) {\n        var item = _this3._createNewsCard(obj);\n\n        var container = document.getElementById('results');\n        container.appendChild(item);\n      });\n    }\n  }, {\n    key: \"_createNewsCard\",\n    value: function _createNewsCard(item) {\n      var container = document.createElement('div');\n      container.classList.add('news-card');\n      var header = document.createElement('div');\n      header.classList.add('news-card-header');\n\n      if (item.urlToImage) {\n        header.style.background = \"url('\".concat(item.urlToImage, \"')\");\n        header.style.backgroundSize = 'cover';\n        header.style.backgroundRepeat = 'no-repeat';\n      } else {\n        header.classList.add('news-card-header--no-cover');\n      }\n\n      var author = document.createElement('div');\n      author.classList.add('news-card-author');\n      var authorName = document.createElement('span');\n      author.appendChild(document.createTextNode(item.author));\n      author.appendChild(authorName);\n      var src = document.createElement('div');\n      src.classList.add('news-card-source');\n      var srcText = document.createElement('span');\n      srcText.appendChild(document.createTextNode(item.source.name));\n      src.appendChild(srcText);\n      header.appendChild(author);\n      header.appendChild(src);\n      container.appendChild(header);\n      var body = document.createElement('div');\n      body.classList.add('news-card-body');\n      var title = document.createElement('h4');\n      title.appendChild(document.createTextNode(item.title));\n      title.classList.add('news-card-title');\n      var desc = document.createElement('p');\n      desc.appendChild(document.createTextNode(item.description));\n      desc.classList.add('news-card-description');\n      var link = document.createElement('a');\n      link.appendChild(document.createTextNode(\"See more\"));\n      link.setAttribute('href', item.url);\n      body.appendChild(title);\n      body.appendChild(desc);\n      body.appendChild(link);\n      container.appendChild(body);\n      return container;\n    }\n  }]);\n\n  return News;\n}();\n\nmodule.exports = News;\n\n//# sourceURL=webpack:///./src/js/news.js?");

/***/ }),

/***/ "./src/js/sources.js":
/*!***************************!*\
  !*** ./src/js/sources.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Mask = __webpack_require__(/*! ./mask.js */ \"./src/js/mask.js\");\n\nvar SourceSelector =\n/*#__PURE__*/\nfunction () {\n  function SourceSelector(dataService) {\n    var _this = this;\n\n    _classCallCheck(this, SourceSelector);\n\n    this.dataService = dataService;\n    this.selected = new Set();\n    var btn = document.getElementById('find_btn');\n    var btnClone = btn.cloneNode(true);\n    btn.parentNode.replaceChild(btnClone, btn);\n    document.getElementById('find_btn').addEventListener(\"click\", function (event) {\n      return _this.findSources();\n    }, false);\n  }\n\n  _createClass(SourceSelector, [{\n    key: \"getResultAsync\",\n    value: function getResultAsync() {\n      var _this2 = this;\n\n      this._openModal();\n\n      var promise = new Promise(function (resolve, reject) {\n        document.getElementById(\"submint_src\").addEventListener(\"click\", function (event) {\n          _this2._closeModal();\n\n          resolve(_this2.selected);\n        }, false);\n        document.getElementById(\"src_close\").addEventListener(\"click\", function (event) {\n          _this2._closeModal();\n\n          resolve([]);\n        }, false);\n      });\n      return promise;\n    }\n  }, {\n    key: \"_openModal\",\n    value: function _openModal() {\n      this._clearSrc();\n\n      document.getElementById('overlay').classList.add('active');\n      document.getElementById('modal').classList.add('active');\n    }\n  }, {\n    key: \"_closeModal\",\n    value: function _closeModal() {\n      document.getElementById('overlay').classList.remove('active');\n      document.getElementById('modal').classList.remove('active');\n    }\n  }, {\n    key: \"_createSourceItem\",\n    value: function _createSourceItem(item) {\n      var _this3 = this;\n\n      var container = document.createElement('div');\n      container.classList.add('source-item');\n      container.id = item.id;\n      var name = document.createElement('span');\n      name.classList.add('source-name');\n      var nameText = document.createTextNode(item.name);\n      name.appendChild(nameText);\n      container.appendChild(name);\n\n      container.onclick = function (event) {\n        var isChecked = _this3.selected.has(item);\n\n        if (!isChecked) {\n          container.classList.add('checked');\n\n          _this3.selected.add(item);\n        } else {\n          container.classList.remove('checked');\n\n          _this3.selected.delete(item);\n        }\n      };\n\n      return container;\n    }\n  }, {\n    key: \"findSources\",\n    value: function findSources() {\n      var _this4 = this;\n\n      var filter = {\n        language: document.getElementById('source-language').value,\n        category: document.getElementById('source-category').value,\n        country: document.getElementById('source-country').value\n      };\n      Mask.show();\n      this.dataService.getSourcesAsync(filter).then(function (res) {\n        _this4.selected.clear();\n\n        _this4._clearSrc();\n\n        var container = document.getElementById('sources-items');\n        res.sources.map(function (obj) {\n          var item = _this4._createSourceItem(obj);\n\n          container.appendChild(item);\n        });\n      }).catch(function (error) {\n        alert(\"Something went wrong...\".concat(error));\n      }).finally(function () {\n        return Mask.hide();\n      });\n    }\n  }, {\n    key: \"_clearSrc\",\n    value: function _clearSrc() {\n      var container = document.getElementById('sources-items');\n\n      while (container.firstChild) {\n        container.removeChild(container.firstChild);\n      }\n    }\n  }]);\n\n  return SourceSelector;\n}();\n\nmodule.exports = SourceSelector;\n\n//# sourceURL=webpack:///./src/js/sources.js?");

/***/ }),

/***/ "./src/json/test.json":
/*!****************************!*\
  !*** ./src/json/test.json ***!
  \****************************/
/*! exports provided: employee, default */
/***/ (function(module) {

eval("module.exports = {\"employee\":{\"name\":\"John\",\"city\":\"New York\"}};\n\n//# sourceURL=webpack:///./src/json/test.json?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_base_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/base.scss */ \"./src/scss/base.scss\");\n/* harmony import */ var _scss_base_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_base_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _json_test_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./json/test.json */ \"./src/json/test.json\");\nvar _json_test_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./json/test.json */ \"./src/json/test.json\", 1);\n\n\n\nvar App = __webpack_require__(/*! ./js/app.js */ \"./src/js/app.js\");\n\nvar app = new App();\ndocument.addEventListener(\"DOMContentLoaded\", app.init.bind(app));\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ }),

/***/ "./src/scss/base.scss":
/*!****************************!*\
  !*** ./src/scss/base.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/scss/base.scss?");

/***/ })

/******/ });