/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_mmenu_light__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/mmenu-light */ \"./src/modules/mmenu-light.js\");\n/* harmony import */ var _modules_mmenu_light__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_mmenu_light__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _modules_sticky__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/sticky */ \"./src/modules/sticky.js\");\n/* harmony import */ var _modules_scrollLock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/scrollLock */ \"./src/modules/scrollLock.js\");\n/* harmony import */ var _modules_topBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/topBar */ \"./src/modules/topBar.js\");\n/* harmony import */ var _modules_hovers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/hovers */ \"./src/modules/hovers.js\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.scss */ \"./src/style.scss\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\n\n\n\n\n // import {Adaptive} from './modules/adaptive';\n\n // import './template.scss'; // REMOVE FROM PROD\n\nconsole.log('Comrade Menu 1.0.34');\n\nvar Menu = /*#__PURE__*/function () {\n  function Menu(config) {\n    _classCallCheck(this, Menu);\n\n    this.breakpoint = config.breakpoint;\n    this.mobileFooterOffsetTop = config.mobileFooterOffsetTop || null;\n    this.offset = {\n      // TODO фикс когда header изменяет высоту плавно: .mm-ocd сделать top:0, увеличить отступ для ul.\n      top: config.offsetTop + 50 || 50,\n      top1: {\n        main: 50,\n        child: 50\n      }\n    };\n    this.minHeightValue = 0;\n    this.mobileMenuOpened = false;\n    this.topBar = config.topBar;\n    this.menu = null;\n    this.navigator = null;\n    this.drawer = null;\n    this.comradeHeader = $('#comradeHeader');\n    this.comradeNavigation = $('#comradeNavigation'); // nav\n\n    this.comradeNavMobileFooter = $('#comradeNavMobileFooter');\n    this.scrollLock = new _modules_scrollLock__WEBPACK_IMPORTED_MODULE_2__.ScrollLock({\n      comradeHeader: this.comradeHeader\n    });\n    this.onReady();\n    new _modules_hovers__WEBPACK_IMPORTED_MODULE_4__.Hovers(config).onReady();\n    new _modules_sticky__WEBPACK_IMPORTED_MODULE_1__.Sticky(config).init(); // this.isStickyDef = this.comradeHeader.attr('style').includes('position: sticky'); // FF bug fix\n\n    this.isStickyDef = this.comradeHeader.siblings(':visible:not(img)')[0].getBoundingClientRect().top + window.scrollY === 0 ? false : true; // FF bug fix\n    // console.log('this.isStickyDef', this.isStickyDef);\n\n    if (this.topBar) {\n      new _modules_topBar__WEBPACK_IMPORTED_MODULE_3__.TopBar(config).onReady();\n    }\n  }\n\n  _createClass(Menu, [{\n    key: \"onReady\",\n    value: function onReady() {\n      var _this = this;\n\n      if (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream) {\n        $('html').css({\n          'height': '100vh'\n        });\n      }\n\n      this.mobileMenuInit();\n      this.toggleMenuInit();\n      this.styles();\n      this.catchMobileMenuState();\n      this.navOnChange(); // new Adaptive().onReady();\n      // const mh = this.minHeight();\n      // $('nav ul > li > ul').parents('li').on('click', function () {\n      //     mh();\n      // });\n      // document.querySelector('nav ul > li > ul').closest('li')\n      // document.querySelectorAll('nav ul > li > ul').forEach(item => {\n      //     item.closest('li').addEventListener('click', () => {\n      //         setTimeout(() => {\n      //             this.minHeight();\n      //         }, 300);\n      //     });\n      // });\n\n      window.addEventListener('resize', function (e) {\n        _this.toggleSpan();\n\n        _this.menuOffsetByHeader();\n\n        if (window.innerWidth > _this.breakpoint) {\n          _this.reset();\n        }\n\n        _this.minHeight();\n      }, false);\n    }\n  }, {\n    key: \"navOnChange\",\n    value: function navOnChange() {\n      var _this2 = this;\n\n      var onceMutationObserver = true;\n      new MutationObserver(function () {\n        if (onceMutationObserver) {\n          onceMutationObserver = false;\n\n          _this2.minHeight(); // console.log('------------------------');\n\n\n          setTimeout(function () {\n            return onceMutationObserver = true;\n          }, 300);\n        }\n      }).observe(document.getElementById('comradeNavigation'), {\n        attributes: true,\n        childList: false,\n        subtree: false\n      });\n    }\n  }, {\n    key: \"minHeight\",\n    value: function minHeight() {\n      // let result2 = $('.mm-spn--open').last().innerHeight() - 50;\n      var result2 = $('.mm-spn--open').last().innerHeight() + 50;\n\n      if (this.mobileFooterOffsetTop !== undefined) {\n        result2 = $('.mm-spn--open').last().innerHeight() - 32 + this.mobileFooterOffsetTop;\n      }\n\n      this.minHeightValue = Math.round(result2);\n      var foo1 = this.minHeightValue + $('#comradeHeader').innerHeight() + $('#comradeNavMobileFooter').innerHeight();\n\n      if (foo1 > window.innerHeight) {\n        $('#comradeNavigation').addClass('sm-h');\n        $('#comradeNavMobileFooter').css({\n          'top': result2,\n          'bottom': ''\n        });\n      } else if (foo1 < window.innerHeight) {\n        $('#comradeNavigation').removeClass('sm-h');\n        $('#comradeNavMobileFooter').css({\n          'top': '',\n          'bottom': '0'\n        });\n      }\n\n      this.comradeNavigation.find('ul').css({\n        top: this.offset.top || '',\n        // bottom: this.comradeNavMobileFooter.innerHeight(),\n        display: ''\n      }); // console.log('result2', Math.round(result2));\n      // console.log('result', Math.round(result));\n    }\n  }, {\n    key: \"catchMobileMenuState\",\n    value: function catchMobileMenuState() {\n      var _this3 = this;\n\n      var onceMutationObserver = true;\n      new MutationObserver(function () {\n        if (onceMutationObserver) {\n          setTimeout(function () {\n            // console.log('onceMutationObserver');\n            onceMutationObserver = false;\n\n            if (document.querySelector('.mm-ocd.mm-ocd--open')) {// console.log('open');\n            } else if (document.querySelector('.mm-ocd.mm-ocd--open') === null) {\n              if (_this3.mobileMenuOpened) {\n                // console.log('catchMobileMenuState', 'close');\n                _this3.close();\n\n                if (window.innerWidth > _this3.breakpoint) {\n                  $('.mm-ocd').hide();\n                  setTimeout(function () {\n                    return $('.mm-ocd').show();\n                  });\n                }\n              }\n            }\n\n            setTimeout(function () {\n              return onceMutationObserver = true;\n            }, 300);\n          }, 300);\n        }\n      }).observe(document.querySelector('.mm-ocd'), {\n        attributes: true,\n        childList: false,\n        subtree: false\n      });\n    }\n  }, {\n    key: \"toggleSpan\",\n    value: function toggleSpan() {\n      if (window.innerWidth <= this.breakpoint) {\n        document.querySelectorAll('.mm-ocd nav ul').forEach(function (el) {\n          var $this = $(el);\n          var divItem = $this.prev('div');\n          var divClassList = divItem.attr('class') || '';\n          var aItem = $this.prev('a');\n          var aClassList = aItem.attr('class') || '';\n          var href = aItem.attr('href') || '';\n          var overViewSpan = aItem.find('span');\n          var overViewSpanClassList = '';\n\n          if (overViewSpan.text().includes('Overview')) {\n            overViewSpanClassList = overViewSpan.attr('class') || '';\n          } // TODO сделать обертку для ссылок\n          // TODO для span Overview; нужно доделать\n          // aItem.replaceWith(`<span data-span-class-list=\"${overViewSpanClassList}\" data-href=\"${href}\" class=\"${classList}\">${aItem.text()}</span>`);\n\n\n          if (aItem.length) {\n            aItem.replaceWith(\"<span data-span-class-list=\\\"\".concat(overViewSpanClassList, \"\\\" data-href=\\\"\").concat(href, \"\\\" class=\\\"\").concat(aClassList, \"\\\">\").concat(aItem.text(), \"</span>\"));\n          } else if (divItem.length) {\n            divItem.replaceWith(\"<span data-is-div-nav=\\\"1\\\" data-span-class-list=\\\"\".concat(overViewSpanClassList, \"\\\" data-href=\\\"\").concat(href, \"\\\" class=\\\"\").concat(divClassList, \"\\\">\").concat(divItem.html(), \"</span>\"));\n          }\n        });\n      } else {\n        document.querySelectorAll('.mm-ocd nav ul').forEach(function (el) {\n          var $this = $(el);\n          var spanItem = $this.prev('span');\n          var spanItemText = spanItem.text().replace(' Overview', '');\n          var overviewSpanClassList = spanItem.data('span-class-list');\n          var classList = spanItem.attr('class') || '';\n          var href = spanItem.attr('data-href');\n          var isDiv = spanItem.attr('data-is-div-nav');\n          var overviewSpanData = '';\n\n          if (overviewSpanClassList) {\n            overviewSpanData = \"<span class=\\\"\".concat(overviewSpanClassList, \"\\\"> Overview</span>\");\n          } // для span Overview; нужно доделать\n          // spanItem.replaceWith(`<a href=\"${href}\" class=\"${classList}\">${spanItemText}${overviewSpanData}</a>`);\n\n\n          if (isDiv) {\n            spanItem.replaceWith(\"<div class=\\\"\".concat(classList, \"\\\">\").concat(spanItem.html(), \"</div>\"));\n          } else {\n            spanItem.replaceWith(\"<a href=\\\"\".concat(href, \"\\\" class=\\\"\").concat(classList, \"\\\">\").concat(spanItemText, \"</a>\"));\n          }\n        });\n      }\n    }\n  }, {\n    key: \"mobileMenuInit\",\n    value: function mobileMenuInit() {\n      this.menu = new MmenuLight(document.querySelector('#comradeNavigation'), \"(max-width: \".concat(this.breakpoint, \"px)\"));\n      this.navigator = this.menu.navigation({\n        selected: 'selected',\n        slidingSubmenus: true,\n        title: '',\n        theme: 'light'\n      });\n      this.drawer = this.menu.offcanvas({\n        position: 'left'\n      });\n    }\n  }, {\n    key: \"open\",\n    value: function open() {\n      if (window.innerWidth > this.breakpoint) {\n        return false;\n      }\n\n      this.mobileMenuOpened = true;\n      this.toggleSpan();\n      this.minHeight();\n      this.menuOffsetByHeader();\n      $('.hamburger').addClass('is-active');\n      this.comradeNavMobileFooter.show();\n      this.drawer.open();\n\n      if (this.isStickyDef && window.scrollY) {\n        this.comradeHeader.css({\n          'position': 'fixed'\n        });\n        this.scrollLock.lock(window.scrollY); // if (window.scrollY < this.comradeHeader.innerHeight()) {\n        //     this.scrollLock.lock(this.comradeHeader.innerHeight() - window.scrollY);\n        // } else {\n        //     this.scrollLock.lock(window.scrollY - this.comradeHeader.innerHeight());\n        // }\n      } else {\n        this.scrollLock.lock(window.scrollY);\n      }\n    }\n  }, {\n    key: \"close\",\n    value: function close() {\n      // console.log('close');\n      $('.hamburger').removeClass('is-active');\n\n      if (this.isStickyDef) {\n        this.scrollLock.unlock({\n          ffFix: true\n        });\n      } else {\n        this.scrollLock.unlock();\n      }\n\n      this.drawer.close();\n      this.mobileMenuOpened = false;\n    }\n  }, {\n    key: \"menuOffsetByHeader\",\n    value: function menuOffsetByHeader() {\n      var _this4 = this;\n\n      var headerHeight = this.comradeHeader.innerHeight() + this.comradeHeader[0].getBoundingClientRect().top;\n      $('.mm-ocd').css('top', headerHeight);\n      setTimeout(function () {\n        headerHeight = _this4.comradeHeader.innerHeight() + _this4.comradeHeader[0].getBoundingClientRect().top;\n        $('.mm-ocd').css('top', headerHeight);\n      }, 250);\n    }\n  }, {\n    key: \"closeMenuWhenLinkClick\",\n    value: function closeMenuWhenLinkClick() {\n      var _this5 = this;\n\n      // закрываем меню при клике по ссылкам\n      document.querySelectorAll('#comradeNavigation a[href*=\"#\"]').forEach(function (linkItem) {\n        linkItem.addEventListener('click', function (event) {\n          var href = event.target.getAttribute('href').replace('#', '');\n          var element = document.getElementById(\"\".concat(href));\n\n          if (window.innerWidth <= _this5.breakpoint) {\n            _this5.close();\n          }\n\n          if (element) {\n            event.preventDefault();\n            setTimeout(function () {\n              var scrollPosition = element.getBoundingClientRect().top + window.scrollY - document.getElementById('comradeHeader').getBoundingClientRect().height;\n              window.scrollTo({\n                top: scrollPosition,\n                behavior: 'smooth'\n              }); //console.log('scroll to');\n            });\n          }\n        });\n      });\n    }\n  }, {\n    key: \"toggleMenuInit\",\n    value: function toggleMenuInit() {\n      var _this6 = this;\n\n      document.getElementById('comradeToggleMenu').addEventListener('click', function () {\n        if (document.querySelector('.mm-ocd.mm-ocd--open')) {\n          _this6.close();\n        } else {\n          _this6.open();\n        }\n      });\n      this.closeMenuWhenLinkClick();\n    }\n  }, {\n    key: \"styles\",\n    value: function styles() {\n      var style = \"\\n        .mm-spn.mm-spn--navbar:after {\\n            top: \".concat(this.offset.top, \"px;\\n        }\\n        .mm-spn.mm-spn--navbar:before {\\n            top: calc(\").concat(this.offset.top, \"px - var(--mm-spn-item-height) / 2);\\n        }\\n\");\n      $('body').append(\"<style id=\\\"cdm_style\\\">\".concat(style, \"</style>\"));\n      this.comradeNavMobileFooter.css({\n        'position': 'absolute',\n        'bottom': '0',\n        'left': '0',\n        'right': '0',\n        'z-index': '5'\n      });\n    }\n  }, {\n    key: \"reset\",\n    value: function reset() {\n      this.comradeNavMobileFooter.css('display', '');\n      this.comradeNavigation.find('ul').css({\n        top: '',\n        bottom: '',\n        display: ''\n      });\n    }\n  }]);\n\n  return Menu;\n}();\n\nwindow.Menu = Menu;\n\n//# sourceURL=webpack://comrade-webflow-menu/./src/index.js?");

/***/ }),

/***/ "./src/modules/hovers.js":
/*!*******************************!*\
  !*** ./src/modules/hovers.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Hovers\": () => (/* binding */ Hovers)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nvar Hovers = /*#__PURE__*/function () {\n  function Hovers(config) {\n    _classCallCheck(this, Hovers);\n\n    this.breakpoint = config.breakpoint;\n    this.menuItem = $('nav > ul > li > a + ul');\n    this.activeClass = 'comrade-sub-item--active';\n    this.comradeHeader = $('#comradeHeader');\n  }\n\n  _createClass(Hovers, [{\n    key: \"onReady\",\n    value: function onReady() {\n      var _this = this;\n\n      window.addEventListener('resize', function (e) {\n        if (window.innerWidth <= _this.breakpoint) {\n          $('nav > ul > li > a + ul').parents('li').removeClass('comrade-sub-item--active');\n          $('nav > ul > li > a + ul, nav > ul > li > span + ul').css('display', ''); ///\n\n          $('nav > ul > li > div + ul').parents('li').removeClass('comrade-sub-item--active');\n          $('nav > ul > li > div + ul, nav > ul > li > span + ul').css('display', '');\n        }\n      }, false);\n      this.comradeHeader.on('mouseenter', 'nav > ul > li > div, nav > ul > li > a', function () {\n        var ulExist = $(this).next('ul');\n\n        if (ulExist) {\n          $('.comrade-sub-item--active').removeClass('comrade-sub-item--active');\n          $('nav > ul > li > div + ul').parents('li').removeClass('comrade-sub-item--active');\n          $('nav > ul > li > a + ul').parents('li').removeClass('comrade-sub-item--active');\n          $(this).parents('li').addClass('comrade-sub-item--active');\n        }\n      }).on('mouseleave', function () {\n        $('nav > ul > li > div + ul').parents('li').removeClass('comrade-sub-item--active');\n        $('nav > ul > li > a + ul').parents('li').removeClass('comrade-sub-item--active');\n      });\n    }\n  }]);\n\n  return Hovers;\n}();\n\n//# sourceURL=webpack://comrade-webflow-menu/./src/modules/hovers.js?");

/***/ }),

/***/ "./src/modules/mmenu-light.js":
/*!************************************!*\
  !*** ./src/modules/mmenu-light.js ***!
  \************************************/
/***/ (() => {

eval("function _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\n!function (t) {\n  var e = {};\n\n  function n(i) {\n    if (e[i]) return e[i].exports;\n    var o = e[i] = {\n      i: i,\n      l: !1,\n      exports: {}\n    };\n    return t[i].call(o.exports, o, o.exports, n), o.l = !0, o.exports;\n  }\n\n  n.m = t, n.c = e, n.d = function (t, e, i) {\n    n.o(t, e) || Object.defineProperty(t, e, {\n      enumerable: !0,\n      get: i\n    });\n  }, n.r = function (t) {\n    \"undefined\" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {\n      value: \"Module\"\n    }), Object.defineProperty(t, \"__esModule\", {\n      value: !0\n    });\n  }, n.t = function (t, e) {\n    if (1 & e && (t = n(t)), 8 & e) return t;\n    if (4 & e && \"object\" == _typeof(t) && t && t.__esModule) return t;\n    var i = Object.create(null);\n    if (n.r(i), Object.defineProperty(i, \"default\", {\n      enumerable: !0,\n      value: t\n    }), 2 & e && \"string\" != typeof t) for (var o in t) {\n      n.d(i, o, function (e) {\n        return t[e];\n      }.bind(null, o));\n    }\n    return i;\n  }, n.n = function (t) {\n    var e = t && t.__esModule ? function () {\n      return t[\"default\"];\n    } : function () {\n      return t;\n    };\n    return n.d(e, \"a\", e), e;\n  }, n.o = function (t, e) {\n    return Object.prototype.hasOwnProperty.call(t, e);\n  }, n.p = \"\", n(n.s = 0);\n}([function (t, e, n) {\n  \"use strict\";\n\n  n.r(e);\n\n  var i = function () {\n    function t(t) {\n      var e = this;\n      this.listener = function (t) {\n        (t.matches ? e.matchFns : e.unmatchFns).forEach(function (t) {\n          t();\n        });\n      }, this.toggler = window.matchMedia(t), this.toggler.addListener(this.listener), this.matchFns = [], this.unmatchFns = [];\n    }\n\n    return t.prototype.add = function (t, e) {\n      this.matchFns.push(t), this.unmatchFns.push(e), (this.toggler.matches ? t : e)();\n    }, t;\n  }(),\n      o = function o(t) {\n    return Array.prototype.slice.call(t);\n  },\n      s = function s(t, e) {\n    return o((e || document).querySelectorAll(t));\n  },\n      r = (\"ontouchstart\" in window || navigator.msMaxTouchPoints, navigator.userAgent.indexOf(\"MSIE\") > -1 || navigator.appVersion.indexOf(\"Trident/\") > -1),\n      a = \"mm-spn\",\n      c = function () {\n    function t(t, e, n, i, o) {\n      this.node = t, this.title = e, this.slidingSubmenus = i, this.selectedClass = n, this.node.classList.add(a), r && (this.slidingSubmenus = !1), this.node.classList.add(a + \"--\" + o), this.node.classList.add(a + \"--\" + (this.slidingSubmenus ? \"navbar\" : \"vertical\")), this._setSelectedl(), this._initAnchors();\n    }\n\n    return Object.defineProperty(t.prototype, \"prefix\", {\n      get: function get() {\n        return a;\n      },\n      enumerable: !1,\n      configurable: !0\n    }), t.prototype.openPanel = function (t) {\n      var e = t.parentElement;\n\n      if (this.slidingSubmenus) {\n        var n = t.dataset.mmSpnTitle;\n        e === this.node ? this.node.classList.add(a + \"--main\") : (this.node.classList.remove(a + \"--main\"), n || o(e.children).forEach(function (t) {\n          t.matches(\"a, span\") && (n = t.textContent);\n        })), n || (n = this.title), this.node.dataset.mmSpnTitle = n, s(\".mm-spn--open\", this.node).forEach(function (t) {\n          t.classList.remove(a + \"--open\"), t.classList.remove(a + \"--parent\");\n        }), t.classList.add(a + \"--open\"), t.classList.remove(a + \"--parent\");\n\n        for (var i = t.parentElement.closest(\"ul\"); i;) {\n          i.classList.add(a + \"--open\"), i.classList.add(a + \"--parent\"), i = i.parentElement.closest(\"ul\");\n        }\n      } else {\n        var r = t.matches(\".mm-spn--open\");\n        s(\".mm-spn--open\", this.node).forEach(function (t) {\n          t.classList.remove(a + \"--open\");\n        }), t.classList[r ? \"remove\" : \"add\"](a + \"--open\");\n\n        for (var c = t.parentElement.closest(\"ul\"); c;) {\n          c.classList.add(a + \"--open\"), c = c.parentElement.closest(\"ul\");\n        }\n      }\n    }, t.prototype._setSelectedl = function () {\n      var t = s(\".\" + this.selectedClass, this.node),\n          e = t[t.length - 1],\n          n = null;\n      e && (n = e.closest(\"ul\")), n || (n = this.node.querySelector(\"ul\")), this.openPanel(n);\n    }, t.prototype._initAnchors = function () {\n      var t = this;\n      this.node.addEventListener(\"click\", function (e) {\n        var n = e.target,\n            i = !1;\n        (i = (i = (i = i || function (t) {\n          return !!t.matches(\"a\");\n        }(n)) || function (e) {\n          var n;\n          return !!(n = e.closest(\"span\") ? e.parentElement : !!e.closest(\"li\") && e) && (o(n.children).forEach(function (e) {\n            e.matches(\"ul\") && t.openPanel(e);\n          }), !0);\n        }(n)) || function (e) {\n          var n = s(\".mm-spn--open\", e),\n              i = n[n.length - 1];\n\n          if (i) {\n            var o = i.parentElement.closest(\"ul\");\n            if (o) return t.openPanel(o), !0;\n          }\n\n          return !1;\n        }(n)) && e.stopImmediatePropagation();\n      });\n    }, t;\n  }(),\n      d = function () {\n    function t(t, e) {\n      var n = this;\n      void 0 === t && (t = null), this.wrapper = document.createElement(\"div\"), this.wrapper.classList.add(\"mm-ocd\"), this.wrapper.classList.add(\"mm-ocd--\" + e), this.content = document.createElement(\"div\"), this.content.classList.add(\"mm-ocd__content\"), this.wrapper.append(this.content), this.backdrop = document.createElement(\"div\"), this.backdrop.classList.add(\"mm-ocd__backdrop\"), this.wrapper.append(this.backdrop), document.body.append(this.wrapper), t && this.content.append(t);\n\n      var i = function i(t) {\n        n.close(), t.stopImmediatePropagation();\n      };\n\n      this.backdrop.addEventListener(\"touchstart\", i, {\n        passive: !0\n      }), this.backdrop.addEventListener(\"mousedown\", i, {\n        passive: !0\n      });\n    }\n\n    return Object.defineProperty(t.prototype, \"prefix\", {\n      get: function get() {\n        return \"mm-ocd\";\n      },\n      enumerable: !1,\n      configurable: !0\n    }), t.prototype.open = function () {\n      this.wrapper.classList.add(\"mm-ocd--open\"), document.body.classList.add(\"mm-ocd-opened\");\n    }, t.prototype.close = function () {\n      this.wrapper.classList.remove(\"mm-ocd--open\"), document.body.classList.remove(\"mm-ocd-opened\");\n    }, t;\n  }(),\n      u = function () {\n    function t(t, e) {\n      void 0 === e && (e = \"all\"), this.menu = t, this.toggler = new i(e);\n    }\n\n    return t.prototype.navigation = function (t) {\n      var e = this;\n\n      if (!this.navigator) {\n        var n = (t = t || {}).title,\n            i = void 0 === n ? \"Menu\" : n,\n            o = t.selectedClass,\n            s = void 0 === o ? \"Selected\" : o,\n            r = t.slidingSubmenus,\n            a = void 0 === r || r,\n            d = t.theme,\n            u = void 0 === d ? \"light\" : d;\n        this.navigator = new c(this.menu, i, s, a, u), this.toggler.add(function () {\n          return e.menu.classList.add(e.navigator.prefix);\n        }, function () {\n          return e.menu.classList.remove(e.navigator.prefix);\n        });\n      }\n\n      return this.navigator;\n    }, t.prototype.offcanvas = function (t) {\n      var e = this;\n\n      if (!this.drawer) {\n        var n = (t = t || {}).position,\n            i = void 0 === n ? \"left\" : n;\n        this.drawer = new d(null, i);\n        var o = document.createComment(\"original menu location\");\n        this.menu.after(o), this.toggler.add(function () {\n          e.drawer.content.append(e.menu);\n        }, function () {\n          e.drawer.close(), o.after(e.menu);\n        });\n      }\n\n      return this.drawer;\n    }, t;\n  }();\n\n  e[\"default\"] = u;\n  window.MmenuLight = u;\n}]);\n\n//# sourceURL=webpack://comrade-webflow-menu/./src/modules/mmenu-light.js?");

/***/ }),

/***/ "./src/modules/scrollLock.js":
/*!***********************************!*\
  !*** ./src/modules/scrollLock.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ScrollLock\": () => (/* binding */ ScrollLock)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nvar ScrollLock = /*#__PURE__*/function () {\n  function ScrollLock(option) {\n    _classCallCheck(this, ScrollLock);\n\n    this.comradeHeader = option.comradeHeader;\n    this.isFixedDef = this.comradeHeader.siblings(':visible:not(img)')[0].getBoundingClientRect().top + window.scrollY === 0 ? true : false; // FF bug fix\n\n    this.scrollPosition = 0;\n  }\n\n  _createClass(ScrollLock, [{\n    key: \"lock\",\n    value: function lock(scrollPosition) {\n      this.scrollPosition = scrollPosition; // if (this.scrollPosition < this.comradeHeader.innerHeight()) {\n      //     console.log('_+__', this.scrollPosition + this.comradeHeader.innerHeight());\n      // }\n\n      if (scrollPosition && this.isFixedDef === false) {\n        if (scrollPosition < this.comradeHeader.innerHeight()) {\n          scrollPosition = this.comradeHeader.innerHeight() - scrollPosition;\n        } else {\n          scrollPosition = scrollPosition - this.comradeHeader.innerHeight();\n        }\n\n        if (this.scrollPosition > this.comradeHeader.innerHeight()) {\n          scrollPosition = scrollPosition * -1;\n        }\n      } else {\n        scrollPosition = scrollPosition * -1;\n      }\n\n      $('body').css({\n        'position': 'fixed',\n        'overflow': 'hidden',\n        'left': '0',\n        'right': '0',\n        'top': \"\".concat(scrollPosition, \"px\")\n      }); // console.log('+++', this.scrollPosition);\n    }\n  }, {\n    key: \"unlock\",\n    value: function unlock(params) {\n      // console.log('ScrollLock, unlock', this.scrollPosition);\n      if (params && params.ffFix && this.scrollPosition) {\n        if (this.scrollPosition < this.comradeHeader.innerHeight()) {\n          this.scrollPosition = this.scrollPosition;\n        } else {\n          this.scrollPosition = this.scrollPosition + this.comradeHeader.innerHeight();\n        }\n      }\n\n      if (this.scrollPosition && this.isFixedDef === false) {\n        if (this.scrollPosition > this.comradeHeader.innerHeight()) {\n          this.scrollPosition = this.scrollPosition - this.comradeHeader.innerHeight();\n        }\n      }\n\n      console.log('this.scrollPosition', this.scrollPosition);\n      console.log('this.comradeHeader.innerHeight()', this.comradeHeader.innerHeight()); // console.log('---', this.scrollPosition);\n\n      $('body').css({\n        'position': '',\n        'overflow': '',\n        'left': '',\n        'right': '',\n        'top': ''\n      });\n      window.scrollTo(0, this.scrollPosition);\n    }\n  }]);\n\n  return ScrollLock;\n}();\n\n//# sourceURL=webpack://comrade-webflow-menu/./src/modules/scrollLock.js?");

/***/ }),

/***/ "./src/modules/sticky.js":
/*!*******************************!*\
  !*** ./src/modules/sticky.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Sticky\": () => (/* binding */ Sticky)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nvar Sticky = /*#__PURE__*/function () {\n  function Sticky(config) {\n    _classCallCheck(this, Sticky);\n\n    this.breakpoint = config.breakpoint;\n    this.lastScrollTop = 0;\n    this.scrollPosition = 0;\n    this.lastScrollDirection = null;\n    this.isSticky = false;\n    this.comradeHeader = $('#comradeHeader');\n    this.mmenu = $('.mm-ocd'); // this.defaultPositionAbsolute = this.comradeHeader.next()[0].getBoundingClientRect().top + window.scrollY === 0 ? true : false;\n\n    this.defaultPositionAbsolute = this.comradeHeader.siblings(':visible:not(img)')[0].getBoundingClientRect().top + window.scrollY === 0 ? true : false;\n  }\n\n  _createClass(Sticky, [{\n    key: \"init\",\n    value: function init() {\n      var _this = this;\n\n      // safari negative top scroll fix\n      window.addEventListener('scroll', function (e) {\n        if (window.pageYOffset < 0) {\n          // console.log('<<<');\n          $('#comradeHeader').css('transform', 'none');\n          var safariFixInterval = setInterval(function () {\n            if (window.pageYOffset >= 0) {\n              $('#comradeHeader').css('transform', 'translate3d(0px, 0px, 0px)');\n              clearInterval(safariFixInterval);\n            }\n          }, 100);\n        }\n      });\n      window.addEventListener('scroll', function (e) {\n        var st = window.pageYOffset || document.documentElement.scrollTop;\n        _this.lastScrollDirection = st > _this.lastScrollTop ? 'down' : 'up';\n\n        _this.check();\n\n        _this.comradeHeader.toggleClass('comradeHeader--sticky', _this.isSticky);\n\n        _this.mmenu.toggleClass('mm-ocd--scrollable', _this.isSticky);\n\n        _this.lastScrollTop = st <= 0 ? 0 : st;\n\n        if (window.pageYOffset < 0) {\n          var safariFixInterval = setInterval(function () {\n            if (window.pageYOffset >= 0) {\n              _this.check();\n\n              clearInterval(safariFixInterval);\n            }\n          }, 100);\n        }\n      }, false);\n      window.addEventListener('resize', function (e) {\n        _this.check();\n      });\n\n      if (window.pageYOffset || document.documentElement.scrollTop) {\n        this.isSticky = true;\n        this.lastScrollDirection = 'down';\n        this.comradeHeader.toggleClass('comradeHeader--sticky', this.isSticky);\n        this.mmenu.toggleClass('mm-ocd--scrollable', this.isSticky); // console.log(' init comradeHeader--sticky', this.isSticky, this.lastScrollDirection);\n      }\n\n      this.check();\n    }\n  }, {\n    key: \"check\",\n    value: function check() {\n      var _this2 = this;\n\n      if (window.innerWidth <= this.breakpoint) {\n        // this.mobile();\n        this.desktop(function () {\n          if (window.scrollY === 0 && _this2.mmenu.hasClass('mm-ocd--open') === false) {\n            // console.log('TOP - desktop');\n            _this2.isSticky = false;\n\n            _this2.comradeHeader.css({\n              'position': '',\n              'top': '',\n              'transform': 'translate3d(0px, 0px, 0px)'\n            });\n          }\n        });\n      } else {\n        this.desktop(function () {\n          if (window.scrollY === 0) {\n            // console.log('TOP - desktop');\n            _this2.isSticky = false;\n\n            _this2.comradeHeader.css({\n              'position': '',\n              'top': '',\n              'transform': 'translate3d(0px, 0px, 0px)'\n            });\n          }\n        });\n      }\n    } // mobile() {\n    //     this.isSticky = true;\n    //\n    //     this.comradeHeader.css({\n    //         'position': this.defaultPositionAbsolute ? 'fixed' : 'sticky',\n    //         'top': '0',\n    //         'transform': 'translate3d(0px, 0px, 0px)',\n    //         'transition': 'all 0s'\n    //     });\n    //\n    //     if (window.scrollY === 0 && document.querySelector('body.mm-ocd-opened') === null) {\n    //         // console.log('TOP - mobile');\n    //         this.isSticky = false;\n    //     }\n    // }\n\n  }, {\n    key: \"desktop\",\n    value: function desktop(cb) {\n      var topBar = document.getElementById('comradeTopBar');\n      var topBarHeight = topBar ? topBar.offsetHeight : 0;\n      var headerOffsetTop = this.comradeHeader[0].getBoundingClientRect().top;\n      var offset = topBarHeight || headerOffsetTop;\n\n      if (this.lastScrollDirection === 'down') {\n        if (window.scrollY > offset && this.isSticky === false) {\n          // момент отрыва, фикс рывка\n          this.isSticky = true;\n          this.comradeHeader.css({\n            'position': this.defaultPositionAbsolute ? 'fixed' : 'sticky',\n            'top': '0',\n            'transform': \"translate3d(0px, -\".concat(offset, \"px, 0px)\"),\n            'transition': ''\n          });\n        } else if (window.scrollY > offset && this.isSticky) {\n          this.comradeHeader.css({\n            'position': this.defaultPositionAbsolute ? 'fixed' : 'sticky',\n            'top': '0',\n            'transform': \"translate3d(0px, -\".concat(offset, \"px, 0px)\"),\n            'transition': 'all .3s'\n          });\n        }\n      } else if (this.lastScrollDirection === 'up' && window.scrollY > offset) {\n        this.comradeHeader.css({\n          'position': this.defaultPositionAbsolute ? 'fixed' : 'sticky',\n          'top': '0',\n          'transform': 'translate3d(0px, 0px, 0px)'\n        });\n      }\n\n      if (cb) {\n        cb();\n      }\n    }\n  }]);\n\n  return Sticky;\n}();\n\n//# sourceURL=webpack://comrade-webflow-menu/./src/modules/sticky.js?");

/***/ }),

/***/ "./src/modules/topBar.js":
/*!*******************************!*\
  !*** ./src/modules/topBar.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TopBar\": () => (/* binding */ TopBar)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nvar TopBar = /*#__PURE__*/function () {\n  function TopBar(config) {\n    var _this = this;\n\n    _classCallCheck(this, TopBar);\n\n    this.scrollPosition = 0;\n    this.locations = config.locations;\n    this.breakpoint = config.breakpoint;\n    this.comradeTopBar = $('#comradeTopBar');\n    this.comradeTopBarContent = $('#comradeTopBarContent');\n    this.comradeTopBarSwitch = $('#comradeTopBarSwitch');\n    this.comradeTopBarLocation = $('#comradeTopBarLocation');\n    this.comradeTopBarWorkTime = $('#comradeTopBarWorkTime');\n    this.comradeTopBarPhone = $('#comradeTopBarPhone');\n    this.comradeNavMobileFooter = $('#comradeNavMobileFooter');\n\n    if (document.getElementById('comradeTopBarSwitch')) {\n      document.getElementById('comradeTopBarSwitch').addEventListener(\"change\", function (event) {\n        var location = _this.locations.find(function (x) {\n          return x.state === event.target.value;\n        });\n\n        _this.comradeTopBarLocation.text(location.street).attr('href', location.link);\n\n        _this.comradeTopBarWorkTime.text(location.workTime);\n\n        _this.comradeTopBarPhone.text(location.phone).attr('href', 'tel:' + location.link);\n      });\n    }\n\n    if ($('#comradeTopBar').length) {\n      window.addEventListener('resize', function (e) {\n        // console.log('resize');\n        _this.move();\n      }, false);\n    }\n  }\n\n  _createClass(TopBar, [{\n    key: \"onReady\",\n    value: function onReady() {\n      if (this.comradeTopBarSwitch.length) {\n        this.fillList();\n      }\n\n      this.move();\n    }\n  }, {\n    key: \"fillList\",\n    value: function fillList() {\n      var _this2 = this;\n\n      this.locations.slice(1).forEach(function (item, i) {\n        $('select', _this2.comradeTopBarSwitch).append(\"<option value=\\\"\".concat(item.state, \"\\\">\").concat(item.state, \"</option>\"));\n      });\n    }\n  }, {\n    key: \"move\",\n    value: function move() {\n      var headerPosition = !document.querySelector('#comradeNavMobileFooter #comradeTopBarContent');\n\n      if (window.innerWidth > this.breakpoint && headerPosition === false) {\n        this.moveToHeader();\n      } else if (window.innerWidth <= this.breakpoint && headerPosition) {\n        this.moveToMobileFooter();\n      }\n    }\n  }, {\n    key: \"moveToMobileFooter\",\n    value: function moveToMobileFooter() {\n      this.comradeNavMobileFooter.append(this.comradeTopBarContent);\n    }\n  }, {\n    key: \"moveToHeader\",\n    value: function moveToHeader() {\n      $('.w-container', this.comradeTopBar).append(this.comradeTopBarContent);\n    } // comradeTopBarSwitch\n    // comradeTopBarLocation\n    // comradeTopBarWorkTime\n    // comradeTopBarPhone\n\n  }]);\n\n  return TopBar;\n}();\n\n//# sourceURL=webpack://comrade-webflow-menu/./src/modules/topBar.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \***********************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body.mm-ocd-opened {\\n  overflow-y: hidden;\\n  -ms-scroll-chaining: none;\\n  overscroll-behavior: none; }\\n\\nheader#comradeHeader {\\n  z-index: 9999; }\\n\\n.mm-ocd {\\n  position: fixed;\\n  top: 0;\\n  right: 0;\\n  bottom: 100%;\\n  left: 0;\\n  z-index: 9998;\\n  overflow: hidden;\\n  -ms-scroll-chaining: none;\\n  overscroll-behavior: contain;\\n  background: rgba(0, 0, 0, 0);\\n  -webkit-transition-property: bottom, background-color;\\n  transition-property: bottom, background-color;\\n  -webkit-transition-duration: 0s, 0.3s;\\n  transition-duration: 0s, 0.3s;\\n  -webkit-transition-timing-function: ease;\\n  transition-timing-function: ease;\\n  -webkit-transition-delay: 0.45s, 0.15s;\\n  transition-delay: 0.45s, 0.15s; }\\n\\n.mm-ocd--open {\\n  bottom: 0;\\n  background: var(--mm-ocd-overlay-color);\\n  -webkit-transition-delay: 0s;\\n  transition-delay: 0s; }\\n\\n.mm-ocd__content {\\n  position: absolute;\\n  top: 0;\\n  bottom: 0;\\n  z-index: 2;\\n  width: 80%;\\n  width: var(--mm-ocd-width);\\n  min-width: 200px;\\n  min-width: var(--mm-ocd-min-width);\\n  max-width: 440px;\\n  max-width: var(--mm-ocd-max-width);\\n  background: #fff;\\n  -webkit-transition-property: -webkit-transform;\\n  transition-property: -webkit-transform;\\n  transition-property: transform;\\n  transition-property: transform, -webkit-transform;\\n  -webkit-transition-duration: 0.3s;\\n  transition-duration: 0.3s;\\n  -webkit-transition-timing-function: ease;\\n  transition-timing-function: ease; }\\n\\n.mm-ocd--left .mm-ocd__content {\\n  left: 0;\\n  -webkit-transform: translate3d(-100%, 0, 0);\\n  transform: translate3d(-100%, 0, 0); }\\n\\n.mm-ocd--right .mm-ocd__content {\\n  right: 0;\\n  -webkit-transform: translate3d(100%, 0, 0);\\n  transform: translate3d(100%, 0, 0); }\\n\\n.mm-ocd--open .mm-ocd__content {\\n  -webkit-transform: translate3d(0, 0, 0);\\n  transform: translate3d(0, 0, 0); }\\n\\n.mm-ocd__backdrop {\\n  position: absolute;\\n  top: 0;\\n  bottom: 0;\\n  z-index: 3;\\n  width: calc(100% - 80%);\\n  width: calc(100% - var(--mm-ocd-width));\\n  min-width: calc(100% - 440px);\\n  min-width: calc(100% - var(--mm-ocd-max-width));\\n  max-width: calc(100% - 200px);\\n  max-width: calc(100% - var(--mm-ocd-min-width));\\n  background: rgba(3, 2, 1, 0); }\\n\\n.mm-ocd--left .mm-ocd__backdrop {\\n  right: 0; }\\n\\n.mm-ocd--right .mm-ocd__backdrop {\\n  left: 0; }\\n\\n.mm-spn,\\n.mm-spn a,\\n.mm-spn li,\\n.mm-spn span,\\n.mm-spn ul {\\n  display: block;\\n  padding: 0;\\n  margin: 0;\\n  -webkit-box-sizing: border-box;\\n  box-sizing: border-box; }\\n\\n.mm-spn {\\n  width: 100%;\\n  height: 100%;\\n  -webkit-tap-highlight-color: transparent;\\n  -webkit-overflow-scrolling: touch;\\n  overflow: hidden;\\n  -webkit-transform: translateX(0);\\n  transform: translateX(0); }\\n\\n.mm-spn ul {\\n  -webkit-overflow-scrolling: touch;\\n  position: fixed;\\n  top: 0;\\n  left: 100%;\\n  z-index: 2;\\n  width: 130%;\\n  padding-right: 30%;\\n  line-height: 24px;\\n  line-height: var(--mm-spn-line-height);\\n  overflow: visible;\\n  overflow-y: auto;\\n  background: inherit;\\n  -webkit-transition: left 0.3s ease 0s;\\n  transition: left 0.3s ease 0s;\\n  cursor: default; }\\n\\n.mm-spn ul:after {\\n  content: \\\"\\\";\\n  display: block;\\n  height: 50px;\\n  height: var(--mm-spn-item-height); }\\n\\n.mm-spn > ul {\\n  left: 0; }\\n\\n.mm-spn ul.mm-spn--open {\\n  left: 0; }\\n\\n.mm-spn ul.mm-spn--parent {\\n  left: -30%;\\n  overflow-y: hidden; }\\n\\n.mm-spn li {\\n  position: relative;\\n  background: inherit;\\n  cursor: pointer; }\\n\\n.mm-spn li:before {\\n  content: \\\"\\\";\\n  display: block;\\n  position: absolute;\\n  right: calc(var(--mm-spn-item-height) / 2);\\n  z-index: 0;\\n  background-size: contain;\\n  background-repeat: no-repeat;\\n  margin: auto 0;\\n  top: 0;\\n  bottom: 0; }\\n\\n.mm-spn a,\\n.mm-spn span {\\n  position: relative;\\n  z-index: 1;\\n  padding: 13px 20px;\\n  padding: calc((var(--mm-spn-item-height) - var(--mm-spn-line-height)) / 2) var(--mm-spn-item-indent); }\\n\\n.mm-spn a {\\n  background: inherit;\\n  color: inherit;\\n  text-decoration: none; }\\n\\n.mm-spn a:not(:last-child) {\\n  width: calc(100% - 50px);\\n  width: calc(100% - var(--mm-spn-item-height)); }\\n\\n.mm-spn a:not(:last-child):after {\\n  content: \\\"\\\";\\n  display: block;\\n  position: absolute;\\n  top: 0;\\n  right: 0;\\n  bottom: 0;\\n  border-right: 1px solid;\\n  opacity: 0.15; }\\n\\n.mm-spn span {\\n  background: 0 0; }\\n\\n.mm-spn.mm-spn--navbar {\\n  cursor: pointer; }\\n\\n.mm-spn.mm-spn--navbar:before {\\n  content: '';\\n  display: block;\\n  position: relative;\\n  left: var(--mm-spn-item-indent);\\n  background-size: contain;\\n  background-repeat: no-repeat;\\n  -webkit-transform: translateY(-50%);\\n          transform: translateY(-50%); }\\n\\n.mm-spn.mm-spn--navbar.mm-spn--main {\\n  cursor: default; }\\n\\n.mm-spn.mm-spn--navbar.mm-spn--main:before {\\n  content: none;\\n  display: none; }\\n\\n.mm-spn.mm-spn--navbar:not(.mm-spn--main):after {\\n  content: var(--mm-back-button-text);\\n  display: block;\\n  position: absolute;\\n  left: 0;\\n  right: 0;\\n  height: 50px;\\n  height: var(--mm-spn-item-height);\\n  padding: 0 40px;\\n  padding: 0 calc(var(--mm-spn-item-indent) * 2);\\n  line-height: 50px;\\n  line-height: var(--mm-spn-item-height);\\n  text-align: left;\\n  overflow: hidden;\\n  white-space: nowrap;\\n  text-overflow: ellipsis;\\n  -webkit-transform: translateY(-100%);\\n          transform: translateY(-100%); }\\n\\n.mm-spn.mm-spn--navbar.mm-spn--main:after {\\n  padding-left: 20px;\\n  padding-left: var(--mm-spn-item-indent); }\\n\\n.mm-spn.mm-spn--navbar ul {\\n  top: 51px;\\n  top: calc(var(--mm-spn-item-height) + 1px); }\\n\\n.mm-spn.mm-spn--light {\\n  color: var(--mm-spn-font-color);\\n  background: var(--mm-spn-background); }\\n\\n.mm-spn.mm-spn--dark {\\n  color: #ddd;\\n  background: #333; }\\n\\n.mm-spn.mm-spn--vertical {\\n  overflow-y: auto; }\\n\\n.mm-spn.mm-spn--vertical ul {\\n  width: 100%;\\n  padding-right: 0;\\n  position: static; }\\n\\n.mm-spn.mm-spn--vertical ul ul {\\n  display: none;\\n  padding-left: 20px;\\n  padding-left: var(--mm-spn-item-indent); }\\n\\n.mm-spn.mm-spn--vertical ul ul:after {\\n  height: 25px;\\n  height: calc(var(--mm-spn-item-height) / 2); }\\n\\n.mm-spn.mm-spn--vertical ul.mm-spn--open {\\n  display: block; }\\n\\n.mm-spn.mm-spn--vertical li.mm-spn--open:before {\\n  -webkit-transform: rotate(135deg) translate(-50%, 0);\\n  transform: rotate(135deg) translate(-50%, 0); }\\n\\n.mm-spn.mm-spn--vertical ul ul li:last-child:after {\\n  content: none;\\n  display: none; }\\n\\n.mm-spn.mm-spn--navbar ul {\\n  scroll-behavior: smooth; }\\n\\n.mm-ocd nav ul li span div {\\n  pointer-events: none; }\\n\\nnav.sm-h {\\n  overflow-y: scroll; }\\n  nav.sm-h ul {\\n    overflow: hidden; }\\n\\n.comrade-sub-item--active > ul {\\n  display: block;\\n  -webkit-animation-name: showDesktopMenu;\\n          animation-name: showDesktopMenu;\\n  -webkit-animation-duration: .3s;\\n          animation-duration: .3s; }\\n\\n@-webkit-keyframes showDesktopMenu {\\n  from {\\n    opacity: 0;\\n    -webkit-transform: translateY(-25px);\\n            transform: translateY(-25px); }\\n  to {\\n    opacity: 1;\\n    -webkit-transform: translateX(0px);\\n            transform: translateX(0px); } }\\n\\n@keyframes showDesktopMenu {\\n  from {\\n    opacity: 0;\\n    -webkit-transform: translateY(-25px);\\n            transform: translateY(-25px); }\\n  to {\\n    opacity: 1;\\n    -webkit-transform: translateX(0px);\\n            transform: translateX(0px); } }\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://comrade-webflow-menu/./src/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://comrade-webflow-menu/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://comrade-webflow-menu/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\nif (true) {\n  if (!_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals || module.hot.invalidate) {\n    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {\n  if (!a && b || a && !b) {\n    return false;\n  }\n\n  var p;\n\n  for (p in a) {\n    if (isNamedExport && p === \"default\") {\n      // eslint-disable-next-line no-continue\n      continue;\n    }\n\n    if (a[p] !== b[p]) {\n      return false;\n    }\n  }\n\n  for (p in b) {\n    if (isNamedExport && p === \"default\") {\n      // eslint-disable-next-line no-continue\n      continue;\n    }\n\n    if (!a[p]) {\n      return false;\n    }\n  }\n\n  return true;\n};\n    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals;\n    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals;\n\n    module.hot.accept(\n      /*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss\",\n      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss\");\n(function () {\n        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals, isNamedExport)) {\n                module.hot.invalidate();\n\n                return;\n              }\n\n              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals;\n\n              update(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"]);\n      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }\n    )\n  }\n\n  module.hot.dispose(function() {\n    update();\n  });\n}\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://comrade-webflow-menu/./src/style.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://comrade-webflow-menu/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://comrade-webflow-menu/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://comrade-webflow-menu/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://comrade-webflow-menu/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://comrade-webflow-menu/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://comrade-webflow-menu/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			if (cachedModule.error !== undefined) throw cachedModule.error;
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		try {
/******/ 			var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 			__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 			module = execOptions.module;
/******/ 			execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 		} catch(e) {
/******/ 			module.error = e;
/******/ 			throw e;
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	(() => {
/******/ 		__webpack_require__.hmrF = () => ("main." + __webpack_require__.h() + ".hot-update.json");
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("5b12aa88b16601708aa4")
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "comrade-webflow-menu:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	(() => {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises = 0;
/******/ 		var blockingPromisesWaiting = [];
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		// eslint-disable-next-line no-unused-vars
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId) {
/******/ 				return trackBlockingPromise(require.e(chunkId));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var _main = currentChildModule !== moduleId;
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_acceptedErrorHandlers: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: _main,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = _main ? undefined : moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback, errorHandler) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null) {
/******/ 						for (var i = 0; i < dep.length; i++) {
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 							hot._acceptedErrorHandlers[dep[i]] = errorHandler;
/******/ 						}
/******/ 					} else {
/******/ 						hot._acceptedDependencies[dep] = callback || function () {};
/******/ 						hot._acceptedErrorHandlers[dep] = errorHandler;
/******/ 					}
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				//inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			var results = [];
/******/ 		
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				results[i] = registeredStatusHandlers[i].call(null, newStatus);
/******/ 		
/******/ 			return Promise.all(results);
/******/ 		}
/******/ 		
/******/ 		function unblock() {
/******/ 			if (--blockingPromises === 0) {
/******/ 				setStatus("ready").then(function () {
/******/ 					if (blockingPromises === 0) {
/******/ 						var list = blockingPromisesWaiting;
/******/ 						blockingPromisesWaiting = [];
/******/ 						for (var i = 0; i < list.length; i++) {
/******/ 							list[i]();
/******/ 						}
/******/ 					}
/******/ 				});
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 				/* fallthrough */
/******/ 				case "prepare":
/******/ 					blockingPromises++;
/******/ 					promise.then(unblock, unblock);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises === 0) return fn();
/******/ 			return new Promise(function (resolve) {
/******/ 				blockingPromisesWaiting.push(function () {
/******/ 					resolve(fn());
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			return setStatus("check")
/******/ 				.then(__webpack_require__.hmrM)
/******/ 				.then(function (update) {
/******/ 					if (!update) {
/******/ 						return setStatus(applyInvalidatedModules() ? "ready" : "idle").then(
/******/ 							function () {
/******/ 								return null;
/******/ 							}
/******/ 						);
/******/ 					}
/******/ 		
/******/ 					return setStatus("prepare").then(function () {
/******/ 						var updatedModules = [];
/******/ 						currentUpdateApplyHandlers = [];
/******/ 		
/******/ 						return Promise.all(
/******/ 							Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 								promises,
/******/ 								key
/******/ 							) {
/******/ 								__webpack_require__.hmrC[key](
/******/ 									update.c,
/******/ 									update.r,
/******/ 									update.m,
/******/ 									promises,
/******/ 									currentUpdateApplyHandlers,
/******/ 									updatedModules
/******/ 								);
/******/ 								return promises;
/******/ 							},
/******/ 							[])
/******/ 						).then(function () {
/******/ 							return waitForBlockingPromises(function () {
/******/ 								if (applyOnUpdate) {
/******/ 									return internalApply(applyOnUpdate);
/******/ 								} else {
/******/ 									return setStatus("ready").then(function () {
/******/ 										return updatedModules;
/******/ 									});
/******/ 								}
/******/ 							});
/******/ 						});
/******/ 					});
/******/ 				});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error(
/******/ 						"apply() is only allowed in ready status (state: " +
/******/ 							currentStatus +
/******/ 							")"
/******/ 					);
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				return setStatus("abort").then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			var disposePromise = setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			var applyPromise = setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 			results.forEach(function (result) {
/******/ 				if (result.apply) {
/******/ 					var modules = result.apply(reportError);
/******/ 					if (modules) {
/******/ 						for (var i = 0; i < modules.length; i++) {
/******/ 							outdatedModules.push(modules[i]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		
/******/ 			return Promise.all([disposePromise, applyPromise]).then(function () {
/******/ 				// handle errors in accept handlers and self accepted module load
/******/ 				if (error) {
/******/ 					return setStatus("fail").then(function () {
/******/ 						throw error;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				if (queuedInvalidatedModules) {
/******/ 					return internalApply(options).then(function (list) {
/******/ 						outdatedModules.forEach(function (moduleId) {
/******/ 							if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 						});
/******/ 						return list;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				return setStatus("idle").then(function () {
/******/ 					return outdatedModules;
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = __webpack_require__.hmrS_jsonp = __webpack_require__.hmrS_jsonp || {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		var currentUpdatedModulesList;
/******/ 		var waitingUpdateResolves = {};
/******/ 		function loadUpdateChunk(chunkId, updatedModulesList) {
/******/ 			currentUpdatedModulesList = updatedModulesList;
/******/ 			return new Promise((resolve, reject) => {
/******/ 				waitingUpdateResolves[chunkId] = resolve;
/******/ 				// start update chunk loading
/******/ 				var url = __webpack_require__.p + __webpack_require__.hu(chunkId);
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				var loadingEnded = (event) => {
/******/ 					if(waitingUpdateResolves[chunkId]) {
/******/ 						waitingUpdateResolves[chunkId] = undefined
/******/ 						var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 						var realSrc = event && event.target && event.target.src;
/******/ 						error.message = 'Loading hot update chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 						error.name = 'ChunkLoadError';
/******/ 						error.type = errorType;
/******/ 						error.request = realSrc;
/******/ 						reject(error);
/******/ 					}
/******/ 				};
/******/ 				__webpack_require__.l(url, loadingEnded);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		self["webpackHotUpdatecomrade_webflow_menu"] = (chunkId, moreModules, runtime) => {
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = moreModules[moduleId];
/******/ 					if(currentUpdatedModulesList) currentUpdatedModulesList.push(moduleId);
/******/ 				}
/******/ 			}
/******/ 			if(runtime) currentUpdateRuntime.push(runtime);
/******/ 			if(waitingUpdateResolves[chunkId]) {
/******/ 				waitingUpdateResolves[chunkId]();
/******/ 				waitingUpdateResolves[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.jsonpHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					/** @type {TODO} */
/******/ 					var result;
/******/ 					if (newModuleFactory) {
/******/ 						result = getAffectedModuleEffects(moduleId);
/******/ 					} else {
/******/ 						result = {
/******/ 							type: "disposed",
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				var module = __webpack_require__.c[outdatedModuleId];
/******/ 				if (
/******/ 					module &&
/******/ 					(module.hot._selfAccepted || module.hot._main) &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!module.hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: module.hot._requireSelf,
/******/ 						errorHandler: module.hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var errorHandlers = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									var errorHandler =
/******/ 										module.hot._acceptedErrorHandlers[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										errorHandlers.push(errorHandler);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									try {
/******/ 										callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (typeof errorHandlers[k] === "function") {
/******/ 											try {
/******/ 												errorHandlers[k](err, {
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k]
/******/ 												});
/******/ 											} catch (err2) {
/******/ 												if (options.onErrored) {
/******/ 													options.onErrored({
/******/ 														type: "accept-error-handler-errored",
/******/ 														moduleId: outdatedModuleId,
/******/ 														dependencyId: dependenciesForCallbacks[k],
/******/ 														error: err2,
/******/ 														originalError: err
/******/ 													});
/******/ 												}
/******/ 												if (!options.ignoreErrored) {
/******/ 													reportError(err2);
/******/ 													reportError(err);
/******/ 												}
/******/ 											}
/******/ 										} else {
/******/ 											if (options.onErrored) {
/******/ 												options.onErrored({
/******/ 													type: "accept-errored",
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k],
/******/ 													error: err
/******/ 												});
/******/ 											}
/******/ 											if (!options.ignoreErrored) {
/******/ 												reportError(err);
/******/ 											}
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// Load self accepted modules
/******/ 					for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 						var item = outdatedSelfAcceptedModules[o];
/******/ 						var moduleId = item.module;
/******/ 						try {
/******/ 							item.require(moduleId);
/******/ 						} catch (err) {
/******/ 							if (typeof item.errorHandler === "function") {
/******/ 								try {
/******/ 									item.errorHandler(err, {
/******/ 										moduleId: moduleId,
/******/ 										module: __webpack_require__.c[moduleId]
/******/ 									});
/******/ 								} catch (err2) {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-error-handler-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err2,
/******/ 											originalError: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err2);
/******/ 										reportError(err);
/******/ 									}
/******/ 								}
/******/ 							} else {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					return outdatedModules;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.jsonp = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.jsonp = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				} else {
/******/ 					currentUpdateChunks[chunkId] = false;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.jsonpHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						!currentUpdateChunks[chunkId]
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = () => {
/******/ 			if (typeof fetch === "undefined") throw new Error("No browser support: need fetch API");
/******/ 			return fetch(__webpack_require__.p + __webpack_require__.hmrF()).then((response) => {
/******/ 				if(response.status === 404) return; // no update available
/******/ 				if(!response.ok) throw new Error("Failed to fetch update manifest " + response.statusText);
/******/ 				return response.json();
/******/ 			});
/******/ 		};
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;