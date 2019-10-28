webpackJsonp([0],{

/***/ 230:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(59);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Filter = function (_Component) {
    _inherits(Filter, _Component);

    function Filter() {
        _classCallCheck(this, Filter);

        return _possibleConstructorReturn(this, (Filter.__proto__ || Object.getPrototypeOf(Filter)).apply(this, arguments));
    }

    _createClass(Filter, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "section",
                { id: "filter" },
                _react2.default.createElement(
                    "div",
                    { className: "inside" },
                    _react2.default.createElement(
                        "h4",
                        null,
                        "Filter"
                    ),
                    _react2.default.createElement(
                        "select",
                        { name: "neighborhood", className: "filters neighborhood", onChange: this.props.change },
                        _react2.default.createElement(
                            "option",
                            null,
                            "Redwood"
                        )
                    ),
                    _react2.default.createElement(
                        "select",
                        { name: "houseType", className: "filters houseType" },
                        _react2.default.createElement(
                            "option",
                            null,
                            "Ranch"
                        )
                    ),
                    _react2.default.createElement(
                        "select",
                        { name: "bedrooms", className: "filters bedrooms" },
                        _react2.default.createElement(
                            "option",
                            null,
                            "2 BR"
                        )
                    ),
                    _react2.default.createElement(
                        "div",
                        { className: "filters price" },
                        _react2.default.createElement(
                            "span",
                            { className: "title" },
                            "Price"
                        ),
                        _react2.default.createElement("input", { type: "text", name: "min-price", className: "min-price" }),
                        _react2.default.createElement("input", { type: "text", name: "max-price", className: "max-price" })
                    ),
                    _react2.default.createElement(
                        "div",
                        { className: "filters floor-space" },
                        _react2.default.createElement(
                            "span",
                            { className: "title" },
                            "Floor Space"
                        ),
                        _react2.default.createElement("input", { type: "text", name: "min-floor-space", className: "min-floor-space" }),
                        _react2.default.createElement("input", { type: "text", name: "max-floor-space", className: "max-floor-space" })
                    ),
                    _react2.default.createElement(
                        "div",
                        { className: "filters extras" },
                        _react2.default.createElement(
                            "span",
                            { className: "title" },
                            "Extras"
                        ),
                        _react2.default.createElement(
                            "label",
                            { "for": "extras" },
                            _react2.default.createElement(
                                "span",
                                null,
                                "Elevators"
                            ),
                            _react2.default.createElement("input", { name: "extras", value: "elevator", type: "checkbox" })
                        ),
                        _react2.default.createElement(
                            "label",
                            { "for": "extras" },
                            _react2.default.createElement(
                                "span",
                                null,
                                "Swimming Poll"
                            ),
                            _react2.default.createElement("input", { name: "extras", value: "swimming-pool", type: "checkbox" })
                        ),
                        _react2.default.createElement(
                            "label",
                            { "for": "extras" },
                            _react2.default.createElement(
                                "span",
                                null,
                                "Finished Basement"
                            ),
                            _react2.default.createElement("input", { name: "extras", value: "finished-basement", type: "checkbox" })
                        ),
                        _react2.default.createElement(
                            "label",
                            { "for": "extras" },
                            _react2.default.createElement(
                                "span",
                                null,
                                "Gym"
                            ),
                            _react2.default.createElement("input", { name: "extras", value: "gym", type: "checkbox" })
                        )
                    )
                )
            );
        }
    }]);

    return Filter;
}(_react.Component);

exports.default = Filter;

/***/ }),

/***/ 231:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(59);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Component) {
    _inherits(Header, _Component);

    function Header() {
        _classCallCheck(this, Header);

        var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this));

        _this.clickedBtn = function () {
            console.log('swag');
        };

        _this.state = {
            name: 'Joe'
        };
        return _this;
    }

    _createClass(Header, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'header',
                null,
                _react2.default.createElement(
                    'div',
                    { className: 'logo' },
                    'Logo'
                ),
                _react2.default.createElement(
                    'nav',
                    null,
                    _react2.default.createElement(
                        'a',
                        { href: '#' },
                        'Create Ads'
                    ),
                    _react2.default.createElement(
                        'a',
                        { href: '#' },
                        'About Us'
                    ),
                    _react2.default.createElement(
                        'a',
                        { href: '#' },
                        'log in'
                    ),
                    _react2.default.createElement(
                        'a',
                        { href: '#', className: 'register-btn' },
                        'Register'
                    )
                )
            );
        }
    }]);

    return Header;
}(_react.Component);

exports.default = Header;

/***/ }),

/***/ 232:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(59);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Listings = function (_Component) {
    _inherits(Listings, _Component);

    function Listings() {
        _classCallCheck(this, Listings);

        var _this = _possibleConstructorReturn(this, (Listings.__proto__ || Object.getPrototypeOf(Listings)).call(this));

        _this.state = {};
        _this.loopListings = _this.loopListings.bind(_this);
        return _this;
    }

    _createClass(Listings, [{
        key: "loopListings",
        value: function loopListings() {
            var listingsData = this.props.listingsData;


            return listingsData.map(function (listing, index) {
                return _react2.default.createElement(
                    "div",
                    { className: "col-md-3", key: index },
                    _react2.default.createElement(
                        "div",
                        { className: "listing" },
                        _react2.default.createElement(
                            "div",
                            { className: "listing-img", style: {
                                    background: "url(\"" + listing.image + "\")" } },
                            _react2.default.createElement(
                                "span",
                                { className: "Address" },
                                listing.address
                            ),
                            _react2.default.createElement(
                                "div",
                                { className: "details" },
                                _react2.default.createElement(
                                    "div",
                                    { className: "col-md-3" },
                                    _react2.default.createElement("div", { className: "user-img" })
                                ),
                                _react2.default.createElement(
                                    "div",
                                    { className: "col-md-9" },
                                    _react2.default.createElement(
                                        "div",
                                        { className: "user-details" },
                                        _react2.default.createElement(
                                            "span",
                                            { className: "user-name" },
                                            "Nina Smith"
                                        ),
                                        _react2.default.createElement(
                                            "span",
                                            { className: "post-date" },
                                            "05/05/2019"
                                        )
                                    ),
                                    _react2.default.createElement(
                                        "div",
                                        { className: "listing-details" },
                                        _react2.default.createElement(
                                            "div",
                                            { className: "floor-space" },
                                            _react2.default.createElement("i", { className: "fa fa-square-o", "aria-hidden": "true" }),
                                            _react2.default.createElement(
                                                "span",
                                                null,
                                                "1000 ft\xB2"
                                            )
                                        ),
                                        _react2.default.createElement(
                                            "div",
                                            { className: "bedrooms" },
                                            _react2.default.createElement("i", { className: "fa fa-bed", "aria-hidden": "true" }),
                                            _react2.default.createElement(
                                                "span",
                                                null,
                                                listing.bedrooms,
                                                " Bedrooms"
                                            )
                                        )
                                    ),
                                    _react2.default.createElement(
                                        "div",
                                        { className: "view-btn" },
                                        "View Listings"
                                    )
                                )
                            )
                        ),
                        _react2.default.createElement(
                            "div",
                            { className: "bottom-info" },
                            _react2.default.createElement(
                                "span",
                                { className: "price" },
                                listing.price
                            ),
                            _react2.default.createElement(
                                "span",
                                { className: "location" },
                                _react2.default.createElement("i", { className: "fa fa-map-marker", "aria-hidden": "true" }),
                                listing.city,
                                ", ",
                                listing.state,
                                " "
                            )
                        )
                    )
                );
            });
        }
    }, {
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "section",
                { id: "listings" },
                _react2.default.createElement(
                    "section",
                    { className: "search-area" },
                    _react2.default.createElement("input", { type: "text", name: "search" })
                ),
                _react2.default.createElement(
                    "section",
                    { className: "sort-by-area" },
                    _react2.default.createElement(
                        "div",
                        { className: "results" },
                        "390 results found"
                    ),
                    _react2.default.createElement(
                        "div",
                        { className: "sort-options" },
                        _react2.default.createElement(
                            "select",
                            { name: "sortBy", className: "sort-by" },
                            _react2.default.createElement(
                                "option",
                                { value: "price-asc" },
                                "Highest Price"
                            ),
                            _react2.default.createElement(
                                "option",
                                { value: "price-dsc" },
                                "Lowest Price"
                            )
                        ),
                        _react2.default.createElement(
                            "div",
                            { className: "view" },
                            _react2.default.createElement("i", { className: "fa fa-th-list", "aria-hidden": "true" }),
                            _react2.default.createElement("i", { className: "fa fa-th", "aria-hidden": "true" })
                        )
                    )
                ),
                _react2.default.createElement(
                    "section",
                    { className: "listings-results" },
                    this.loopListings()
                ),
                _react2.default.createElement(
                    "section",
                    { id: "pagination" },
                    _react2.default.createElement(
                        "ul",
                        { className: "pages" },
                        _react2.default.createElement(
                            "li",
                            null,
                            "Prev"
                        ),
                        _react2.default.createElement(
                            "li",
                            { className: "active" },
                            "1"
                        ),
                        _react2.default.createElement(
                            "li",
                            null,
                            "2"
                        ),
                        _react2.default.createElement(
                            "li",
                            null,
                            "3"
                        ),
                        _react2.default.createElement(
                            "li",
                            null,
                            "4"
                        ),
                        _react2.default.createElement(
                            "li",
                            null,
                            "5"
                        ),
                        _react2.default.createElement(
                            "li",
                            null,
                            "Next"
                        )
                    )
                )
            );
        }
    }]);

    return Listings;
}(_react.Component);

exports.default = Listings;

/***/ }),

/***/ 233:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var listingsData = [{
    address: '20-34 grand ave',
    city: 'Ridgewood',
    state: 'NY',
    rooms: 3,
    price: 220000,
    floorSpace: 2000,
    extras: ['elevator', 'gym'],
    homeType: 'Apartment',
    image: 'https://media.equityapartments.com/images/c_crop,x_0,y_0,w_1920,h_1080/c_fill,w_1920,h_1080/q_80/4206-28/the-kelvin-apartments-exterior.jpg'
}, {
    address: '3 universal st ',
    city: 'Orlando',
    state: 'FL',
    rooms: 2,
    price: 24666,
    floorSpace: 1430,
    extras: ['elevator', 'gym'],
    homeType: 'Apartment',
    image: 'https://media.adinahotels.com/media/filer_public/7e/9d/7e9d0189-1230-4df8-9896-1f1d31270930/adina-melbourne-flinders-street-apartment-hotel-three-bedroom-penthouse-04-2013-450x300.jpg'
}, {
    address: '1 president plaza',
    city: 'Richmond',
    state: 'VA',
    rooms: 1,
    price: 345355,
    floorSpace: 2400,
    extras: ['elevator', 'gym'],
    homeType: 'Apartment',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQLTx2JDBl9JPrU-SWb4vuBorql_1Q54nZzSx_UI26KuV59wtKaa'
}, {
    address: '889 beemore st',
    city: 'Newark',
    state: 'NJ',
    rooms: 3,
    price: 80000,
    floorSpace: 1000,
    extras: ['elevator', 'gym'],
    homeType: 'Apartment',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQiTqQcgIIDOb2vwjYgfxCm7XpM6zRUvJJmGGV1j4T2WvwxJMUr'
}, {
    address: '43 hollywood blvd',
    city: 'Los Angles',
    state: 'CA',
    rooms: 3,
    price: 603000,
    floorSpace: 3000,
    extras: ['elevator', 'gym'],
    homeType: 'Condo',
    image: 'http://88designbox.com/upload/2016/02/05/modern-apartment-design-01.jpg'
}, {
    address: '2 main st',
    city: 'Bedstuy',
    state: 'NY',
    rooms: 2,
    price: 220000,
    floorSpace: 2000,
    extras: ['elevator', 'pool'],
    homeType: 'Apartment',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRcoCxrrI1eBtugW8brT_zXh_5PYQqbvPY9q4Pl6nyEOck_0e8m'
}, {
    address: '730 gates ave',
    city: 'Springfeild',
    state: 'IN',
    rooms: 3,
    price: 150000,
    floorSpace: 2000,
    extras: ['elevator', 'gym'],
    homeType: 'Apartment',
    image: 'https://files.tpg.ua/files/hotels/000045536/Deluxe_King.jpg'
}];

exports.default = listingsData;

/***/ }),

/***/ 237:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(59);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(101);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Header = __webpack_require__(231);

var _Header2 = _interopRequireDefault(_Header);

var _Filter = __webpack_require__(230);

var _Filter2 = _interopRequireDefault(_Filter);

var _Listings = __webpack_require__(232);

var _Listings2 = _interopRequireDefault(_Listings);

var _listingsData = __webpack_require__(233);

var _listingsData2 = _interopRequireDefault(_listingsData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

    _this.state = {
      listingsData: _listingsData2.default
    };
    _this.change = _this.change.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: 'change',
    value: function change(event) {
      console.log(event.target.name);
    }
  }, {
    key: 'render',
    value: function render() {
      console.log(this.state);
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Header2.default, null),
        _react2.default.createElement(
          'section',
          { id: 'content-area' },
          _react2.default.createElement(_Filter2.default, { change: this.change }),
          _react2.default.createElement(_Listings2.default, { listingsData: this.state.listingsData })
        )
      );
    }
  }]);

  return App;
}(_react.Component);

var app = document.getElementById('app');

_reactDom2.default.render(_react2.default.createElement(App, null), app);

/***/ })

},[237]);