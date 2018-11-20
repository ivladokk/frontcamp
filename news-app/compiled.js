"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var App =
/*#__PURE__*/
function () {
  function App() {
    _classCallCheck(this, App);

    this.config = {
      apiUrl: "https://newsapi.org/v2/",
      apiKey: "788080c99995412c9c08fb95499225a2",
      languages: ["all", "ar", "de", "en", "es", "fr", "he", "it", "nl", "no", "pt", "ru", "se", "ud", "zh"],
      countries: ["all", "ae", "ar", "at", "au", "be", "bg", "br", "ca", "ch", "cn", "co", "cu", "cz", "de", "eg", "fr", "gb", "gr", "hk", "hu", "id", "ie", "il", "in", "it", "jp", "kr", "lt", "lv", "ma", "mx", "my", "ng", "nl", "no", "nz", "ph", "pl", "pt", "ro", "rs", "ru", "sa", "se", "sg", "si", "sk", "th", "tr", "tw", "ua", "us", "ve", "za"],
      categories: ["all", "business", "entertainment", "general", "health", "science", "sports", "technology"]
    };
    this.dataService = new DataService(this.config);
    this.selectedSources = new Set();
  }

  _createClass(App, [{
    key: "_createCheckedSource",
    value: function _createCheckedSource(item) {
      var _this = this;

      var container = document.createElement('div');
      container.classList.add('source-checked');
      var name = document.createElement('span');
      name.classList.add('source-checked-name');
      var nameText = document.createTextNode(item.name);
      name.appendChild(nameText);
      var deleteBtn = document.createElement('span');
      deleteBtn.classList.add('delete-btn');
      var deleteText = document.createTextNode('x');
      deleteBtn.appendChild(deleteText);

      deleteBtn.onclick = function (event) {
        _this.selectedSources.delete(item);

        container.parentNode.removeChild(container);
      };

      container.appendChild(name);
      container.appendChild(deleteBtn);
      return container;
    }
  }, {
    key: "_setDropdownValues",
    value: function _setDropdownValues(el, src) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = src[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var x = _step.value;
          var item = document.createElement('option');
          item.value = x;
          item.text = x;
          el.appendChild(item);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  }, {
    key: "init",
    value: function init() {
      var _this2 = this;

      this._setDropdownValues(document.getElementById('source-language'), this.config.languages);

      this._setDropdownValues(document.getElementById('source-country'), this.config.countries);

      this._setDropdownValues(document.getElementById('source-category'), this.config.categories);

      this._setDropdownValues(document.getElementById('language'), this.config.languages);

      document.getElementById('select_src').addEventListener("click", function () {
        return _this2.selectSrc();
      }, false);
    }
  }, {
    key: "selectSrc",
    value: function () {
      var _selectSrc = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var src, filter, result;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                src = new SourceSelector(this.dataService);
                filter = {
                  language: document.getElementById('source-language').value,
                  category: document.getElementById('source-category').value,
                  country: document.getElementById('source-country').value
                };
                document.getElementById('find_btn').addEventListener("click", function () {
                  return src.findSources(filter);
                }, false);
                _context.next = 5;
                return src.getResultAsync();

              case 5:
                result = _context.sent;
                this.fillSelectedSources(result);

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function selectSrc() {
        return _selectSrc.apply(this, arguments);
      };
    }()
  }, {
    key: "fillSelectedSources",
    value: function fillSelectedSources(src) {
      this.selectedSources = src;
      var el = document.getElementById('sources-checked-list');

      while (el.firstChild) {
        el.removeChild(el.firstChild);
      }

      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = this.selectedSources[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var x = _step2.value;
          el.appendChild(this._createCheckedSource(x));
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
    }
  }, {
    key: "_combineFilter",
    value: function _combineFilter() {
      var sources = [];
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = this.selectedSources[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var x = _step3.value;
          sources.push(x.id);
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
            _iterator3.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }

      return {
        q: document.getElementById('q').value,
        sources: sources,
        language: document.getElementById('language').value
      };
    }
  }, {
    key: "getNews",
    value: function getNews() {
      var news = new News(this.dataService);
      news.getNews(this._combineFilter());
    }
  }, {
    key: "getTopNews",
    value: function getTopNews() {
      var sources = [];
      var _iteratorNormalCompletion4 = true;
      var _didIteratorError4 = false;
      var _iteratorError4 = undefined;

      try {
        for (var _iterator4 = this.selectedSources[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
          var x = _step4.value;
          sources.push(x.id);
        }
      } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
            _iterator4.return();
          }
        } finally {
          if (_didIteratorError4) {
            throw _iteratorError4;
          }
        }
      }

      var filter = {
        q: document.getElementById('q').value,
        sources: sources,
        language: document.getElementById('language').value
      };
      var news = new News(this.dataService);
      news.getNews(this._combineFilter());
    }
  }]);

  return App;
}();
"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var DataService =
/*#__PURE__*/
function () {
  function DataService(config) {
    _classCallCheck(this, DataService);

    this._config = config;
  }

  _createClass(DataService, [{
    key: "getSourcesAsync",
    value: function getSourcesAsync(filter) {
      var params = "";

      if (filter.language && filter.language !== "all") {
        params += params + "language=" + filter.language + "&";
      }

      if (filter.country && filter.country !== "all") {
        params += params + "country=" + filter.country + "&";
      }

      if (filter.category && filter.category !== "all") {
        params += params + "category=" + filter.country + "&";
      }

      var url = "".concat(this._config.apiUrl, "/sources?").concat(params, "apiKey=").concat(this._config.apiKey);
      var request = new Request(url);
      return fetch(request).then(function (resp) {
        return resp.json();
      });
    }
  }, {
    key: "_getParams",
    value: function _getParams(filter) {
      var params = "";

      if (filter.q) {
        params += params + "q=" + filter.q + "&";
      }

      if (filter.sources && filter.sources.length > 0) {
        params += params + "sources=" + filter.sources.toString() + "&";
      }

      if (filter.language && filter.language !== "all") {
        params += params + "language=" + filter.language + "&";
      }

      if (filter.country && filter.country !== "all") {
        params += params + "country=" + filter.country + "&";
      }

      if (filter.category && filter.category !== "all") {
        params += params + "category=" + filter.country + "&";
      }

      return params;
    }
  }, {
    key: "getNews",
    value: function () {
      var _getNews = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(rote, filter) {
        var url, request, response, data;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                url = "".concat(this._config.apiUrl, "/").concat(rote, "?").concat(this._getParams(filter), "apiKey=").concat(this._config.apiKey);
                request = new Request(url);
                _context.prev = 2;
                _context.next = 5;
                return fetch(request);

              case 5:
                response = _context.sent;
                _context.next = 8;
                return response.json();

              case 8:
                data = _context.sent;
                return _context.abrupt("return", data);

              case 12:
                _context.prev = 12;
                _context.t0 = _context["catch"](2);
                throw _context.t0;

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[2, 12]]);
      }));

      return function getNews(_x, _x2) {
        return _getNews.apply(this, arguments);
      };
    }()
  }]);

  return DataService;
}();
"use strict";

var app = new App();
var init = app.init.bind(app);
document.addEventListener("DOMContentLoaded", init);
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Mask =
/*#__PURE__*/
function () {
  function Mask() {
    _classCallCheck(this, Mask);
  }

  _createClass(Mask, null, [{
    key: "show",
    value: function show() {
      var mask = document.getElementById('loading');
      mask.classList.add('show-mask');
    }
  }, {
    key: "hide",
    value: function hide() {
      var mask = document.getElementById('loading');
      mask.classList.remove('show-mask');
    }
  }]);

  return Mask;
}();
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var News =
/*#__PURE__*/
function () {
  function News(dataService) {
    _classCallCheck(this, News);

    this._dataService = dataService;
  }

  _createClass(News, [{
    key: "getNews",
    value: function getNews(filter) {
      var _this = this;

      Mask.show();

      this._dataService.getNews("everything", filter).then(function (data) {
        var articles = data.articles;

        if (articles) {
          var container = document.getElementById('results');

          while (container.firstChild) {
            container.removeChild(container.firstChild);
          }

          articles.map(function (obj) {
            var item = _this._createNewsCard(obj);

            var container = document.getElementById('results');
            container.appendChild(item);
          });
        }
      }).finally(function () {
        return Mask.hide();
      }).catch(function (error) {
        _this.handleError(error);
      });
    }
  }, {
    key: "getTopNews",
    value: function getTopNews(filter) {}
  }, {
    key: "handleError",
    value: function handleError(error) {}
  }, {
    key: "_createNewsCard",
    value: function _createNewsCard(item) {
      var container = document.createElement('div');
      container.classList.add('news-card');
      var header = document.createElement('div');
      header.classList.add('news-card-header');

      if (item.urlToImage) {
        header.style.background = "url('".concat(item.urlToImage, "')");
        header.style.backgroundSize = 'cover';
        header.style.backgroundRepeat = 'no-repeat';
      } else {
        header.classList.add('news-card-header--no-cover');
      }

      var author = document.createElement('div');
      author.classList.add('news-card-author');
      var authorName = document.createElement('span');
      author.appendChild(document.createTextNode(item.author));
      author.appendChild(authorName);
      var src = document.createElement('div');
      src.classList.add('news-card-source');
      var srcText = document.createElement('span');
      srcText.appendChild(document.createTextNode(item.source.name));
      src.appendChild(srcText);
      header.appendChild(author);
      header.appendChild(src);
      container.appendChild(header);
      var body = document.createElement('div');
      body.classList.add('news-card-body');
      var title = document.createElement('h4');
      title.appendChild(document.createTextNode(item.title));
      title.classList.add('news-card-title');
      var desc = document.createElement('p');
      desc.appendChild(document.createTextNode(item.description));
      desc.classList.add('news-card-description');
      var link = document.createElement('a');
      link.appendChild(document.createTextNode("See more"));
      link.setAttribute('href', item.url);
      body.appendChild(title);
      body.appendChild(desc);
      body.appendChild(link);
      container.appendChild(body);
      return container;
    }
  }]);

  return News;
}();
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var SourceSelector =
/*#__PURE__*/
function () {
  function SourceSelector(dataService) {
    _classCallCheck(this, SourceSelector);

    this.dataService = dataService;
    this.selected = new Set();
  }

  _createClass(SourceSelector, [{
    key: "getResultAsync",
    value: function getResultAsync() {
      var _this = this;

      this._openModal();

      var promise = new Promise(function (resolve, reject) {
        document.getElementById("submint_src").addEventListener("click", function (event) {
          _this._closeModal();

          resolve(_this.selected);
        }, false);
        document.getElementById("src_close").addEventListener("click", function (event) {
          _this._closeModal();

          reject();
        }, false);
      });
      return promise;
    }
  }, {
    key: "_openModal",
    value: function _openModal() {
      this._clearSrc();

      document.getElementById('overlay').classList.add('active');
      document.getElementById('modal').classList.add('active');
    }
  }, {
    key: "_closeModal",
    value: function _closeModal() {
      document.getElementById('overlay').classList.remove('active');
      document.getElementById('modal').classList.remove('active');
    }
  }, {
    key: "_createSourceItem",
    value: function _createSourceItem(item) {
      var _this2 = this;

      var container = document.createElement('div');
      container.classList.add('source-item');
      container.id = item.id;
      var name = document.createElement('span');
      name.classList.add('source-name');
      var nameText = document.createTextNode(item.name);
      name.appendChild(nameText);
      container.appendChild(name);

      container.onclick = function (event) {
        var isChecked = _this2.selected.has(item);

        if (!isChecked) {
          container.classList.add('checked');

          _this2.selected.add(item);
        } else {
          container.classList.remove('checked');

          _this2.selected.delete(item);
        }
      };

      return container;
    }
  }, {
    key: "findSources",
    value: function findSources(filter) {
      var _this3 = this;

      Mask.show();
      this.dataService.getSourcesAsync(filter).then(function (res) {
        _this3.selected.clear();

        _this3._clearSrc();

        var container = document.getElementById('sources-items');
        res.sources.map(function (obj) {
          var item = _this3._createSourceItem(obj);

          container.appendChild(item);
        });
      }).finally(function () {
        return Mask.hide();
      });
    }
  }, {
    key: "_clearSrc",
    value: function _clearSrc() {
      var container = document.getElementById('sources-items');

      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
    }
  }]);

  return SourceSelector;
}();
