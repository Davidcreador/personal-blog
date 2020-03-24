webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var read_time_estimate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! read-time-estimate */ "./node_modules/read-time-estimate/dist/read-time-estimate.esm.js");
/* harmony import */ var _components_container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/container */ "./components/container.js");
/* harmony import */ var _components_more_stories__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/more-stories */ "./components/more-stories.js");
/* harmony import */ var _components_hero_post__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/hero-post */ "./components/hero-post.js");
/* harmony import */ var _components_intro__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/intro */ "./components/intro.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var _lib_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../lib/constants */ "./lib/constants.js");
var _jsxFileName = "/Users/helmutp/Desktop/DEV/workspace/playground/personal-blog/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









function readTime(content) {
  var _readTimeEstimate = Object(read_time_estimate__WEBPACK_IMPORTED_MODULE_2__["default"])(content),
      humanizedDuration = _readTimeEstimate.humanizedDuration,
      duration = _readTimeEstimate.duration,
      totalWords = _readTimeEstimate.totalWords,
      wordTime = _readTimeEstimate.wordTime;

  return {
    humanizedDuration: humanizedDuration,
    duration: duration,
    totalWords: totalWords,
    wordTime: wordTime
  };
}

var __N_SSG = true;
function Index(_ref) {
  var _this = this;

  var allArticles = _ref.allArticles;
  var heroPost = allArticles[0];
  var morePosts = allArticles.slice(1);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 11
    }
  }, "Next.js Blog Example with ", _lib_constants__WEBPACK_IMPORTED_MODULE_8__["CMS_NAME"]), __jsx("link", {
    rel: "canonical",
    href: "https://www.example.com",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 11
    }
  })), __jsx(_components_container__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "app",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 11
    }
  }, __jsx(_components_intro__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }
  }), allArticles.map(function (blogPost, idx) {
    return __jsx("article", {
      key: idx,
      className: "blogPost",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 15
      }
    }, blogPost.content.map(function (post, _idx) {
      return __jsx(_components_hero_post__WEBPACK_IMPORTED_MODULE_5__["default"], {
        key: _idx,
        readTime: readTime(post.postContent),
        title: post.title,
        coverImage: post.coverImage,
        date: post.createdAt,
        author: post.author,
        slug: post.slug,
        content: post.postContent,
        tableOfContents: post.tableOfContents,
        excerpt: post.excerpt,
        showContent: false,
        id: blogPost.id,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 21
        }
      });
    }));
  })))));
}

/***/ })

})
//# sourceMappingURL=index.js.55da13e828624a2d7f05.hot-update.js.map