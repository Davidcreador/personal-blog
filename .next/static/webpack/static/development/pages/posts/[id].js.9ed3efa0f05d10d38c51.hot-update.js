webpackHotUpdate("static/development/pages/posts/[id].js",{

/***/ "./pages/posts/[id].js":
/*!*****************************!*\
  !*** ./pages/posts/[id].js ***!
  \*****************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Post; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/error */ "./node_modules/next/error.js");
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_error__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var read_time_estimate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! read-time-estimate */ "./node_modules/read-time-estimate/dist/read-time-estimate.esm.js");
/* harmony import */ var _components_container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/container */ "./components/container.js");
/* harmony import */ var _components_post_body__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/post-body */ "./components/post-body.js");
/* harmony import */ var _components_more_stories__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/more-stories */ "./components/more-stories.js");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/header */ "./components/header.js");
/* harmony import */ var _components_post_header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/post-header */ "./components/post-header.js");
/* harmony import */ var _components_section_separator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/section-separator */ "./components/section-separator.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/layout */ "./components/layout.js");
/* harmony import */ var _components_post_title__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/post-title */ "./components/post-title.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _lib_constants__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../lib/constants */ "./lib/constants.js");
/* harmony import */ var _lib_markdownToHtml__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../lib/markdownToHtml */ "./lib/markdownToHtml.js");
var _jsxFileName = "/Users/helmutp/Desktop/DEV/workspace/playground/personal-blog/pages/posts/[id].js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;















function readTime(content) {
  var _readTimeEstimate = Object(read_time_estimate__WEBPACK_IMPORTED_MODULE_3__["default"])(content),
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
function Post(_ref) {
  var post = _ref.post;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();

  if (!router.isFallback && !(post === null || post === void 0 ? void 0 : post.slug)) {
    return __jsx(next_error__WEBPACK_IMPORTED_MODULE_2___default.a, {
      statusCode: 404,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 12
      }
    });
  }

  var readTimeData = readTime(post.postContent);
  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 5
    }
  }, __jsx(_components_container__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }, __jsx(_components_header__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }), router.isFallback ? __jsx(_components_post_title__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 11
    }
  }, "Loading\u2026") : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("article", {
    className: "flex flex-col justify-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_12___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 15
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 17
    }
  }, post.title, " | Next.js Blog Example with ", _lib_constants__WEBPACK_IMPORTED_MODULE_13__["CMS_NAME"])), __jsx(_components_post_header__WEBPACK_IMPORTED_MODULE_8__["default"], {
    readTime: readTimeData,
    title: post.title,
    coverImage: post.coverImage,
    date: post.createdAt,
    author: post.author,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 15
    }
  }), __jsx(_components_post_body__WEBPACK_IMPORTED_MODULE_5__["default"], {
    content: post.postContent,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 15
    }
  })), __jsx(_components_section_separator__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }
  }))));
}

/***/ })

})
//# sourceMappingURL=[id].js.9ed3efa0f05d10d38c51.hot-update.js.map