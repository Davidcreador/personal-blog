webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/hero-post.js":
/*!*********************************!*\
  !*** ./components/hero-post.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HeroPost; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_avatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/avatar */ "./components/avatar.js");
/* harmony import */ var _components_date__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/date */ "./components/date.js");
/* harmony import */ var _components_cover_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/cover-image */ "./components/cover-image.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/helmutp/Desktop/DEV/workspace/playground/personal-blog/components/hero-post.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function HeroPost(_ref) {
  var _this = this;

  var title = _ref.title,
      coverImage = _ref.coverImage,
      date = _ref.date,
      content = _ref.content,
      excerpt = _ref.excerpt,
      tableOfContents = _ref.tableOfContents,
      author = _ref.author,
      slug = _ref.slug,
      id = _ref.id,
      showContent = _ref.showContent,
      readTime = _ref.readTime;
  return __jsx("section", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "mb-2 md:mb-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }, coverImage && __jsx(_components_cover_image__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: title,
    responsiveImage: coverImage.responsiveImage,
    slug: slug,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: "mb-3 md:mb-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "blogPost-header",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, __jsx("h2", {
    className: "blogPost-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    as: "/posts/".concat(id),
    href: "/posts/[id]",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }, __jsx("a", {
    className: "hover:underline",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 15
    }
  }, title))), __jsx("div", {
    className: "blogPost-meta",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 11
    }
  }, "Posted on: ", __jsx(_components_date__WEBPACK_IMPORTED_MODULE_2__["default"], {
    dateString: date,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 24
    }
  }), " - ", __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }, "Reading time: ", readTime))), __jsx("div", {
    className: "blogPost-excerpt",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }, __jsx("p", {
    className: "text-lg leading-relaxed mb-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 11
    }
  }, excerpt)), tableOfContents && __jsx("div", {
    className: "blogPost-table-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 11
    }
  }, __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  }, "Table of Contents"), __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  }, Object.entries(tableOfContents).map(function (item, idx) {
    return __jsx("li", {
      key: idx,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 17
      }
    }, item[1]);
  }))), showContent && content ? __jsx("div", {
    className: "blogPost-content",
    dangerouslySetInnerHTML: {
      __html: content
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 11
    }
  }) : null, __jsx("footer", {
    className: "blogPost-footer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 9
    }
  }, __jsx("p", {
    className: "blogPost-author",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 11
    }
  }, "Written by ", author), __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    as: "/posts/".concat(id),
    href: "/posts/[id]",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 11
    }
  }, __jsx("a", {
    className: "bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 hover:underline",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }
  }, "Read More")))));
}

/***/ })

})
//# sourceMappingURL=index.js.c4ad65a11bea53f62a97.hot-update.js.map