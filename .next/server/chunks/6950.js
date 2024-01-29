"use strict";
exports.id = 6950;
exports.ids = [6950];
exports.modules = {

/***/ 6950:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9816);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3015);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3877);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_3__, swiper__WEBPACK_IMPORTED_MODULE_4__]);
([swiper_react__WEBPACK_IMPORTED_MODULE_3__, swiper__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const partnersData = [
    {
        image: "/images/partner/partner-1.png"
    },
    {
        image: "/images/partner/partner-2.png"
    },
    {
        image: "/images/partner/partner-3.png"
    },
    {
        image: "/images/partner/partner-4.png"
    },
    {
        image: "/images/partner/partner-5.png"
    },
    {
        image: "/images/partner/partner-1.png"
    },
    {
        image: "/images/partner/partner-2.png"
    },
    {
        image: "/images/partner/partner-3.png"
    }
];
const PartnerStyleTwo = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                className: "jsx-b35a417fd3217d1b" + " " + "partner-area ptb-100",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                    className: "jsx-b35a417fd3217d1b" + " " + "container",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(swiper_react__WEBPACK_IMPORTED_MODULE_3__.Swiper, {
                        spaceBetween: 40,
                        breakpoints: {
                            0: {
                                slidesPerView: 1
                            },
                            576: {
                                slidesPerView: 2
                            },
                            768: {
                                slidesPerView: 3
                            },
                            992: {
                                slidesPerView: 4
                            },
                            1200: {
                                slidesPerView: 5
                            }
                        },
                        autoplay: {
                            delay: 6500,
                            disableOnInteraction: true,
                            pauseOnMouseEnter: true
                        },
                        modules: [
                            swiper__WEBPACK_IMPORTED_MODULE_4__.Autoplay
                        ],
                        className: "partner-slides",
                        children: partnersData && partnersData.map((value, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(swiper_react__WEBPACK_IMPORTED_MODULE_3__.SwiperSlide, {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                    className: "jsx-b35a417fd3217d1b" + " " + "single-partner",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
                                        src: value.image,
                                        alt: "image",
                                        className: "jsx-b35a417fd3217d1b"
                                    })
                                })
                            }, i))
                    })
                })
            }),
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "b35a417fd3217d1b",
                children: ".partner-area.jsx-b35a417fd3217d1b{position:relative;z-index:1}.single-partner.jsx-b35a417fd3217d1b{text-align:center}.single-partner.jsx-b35a417fd3217d1b img.jsx-b35a417fd3217d1b{width:auto!important;display:inline-block!important}.partner-shape-1.jsx-b35a417fd3217d1b{position:absolute;top:-20%;left:15%;-webkit-transform:translatey(-20%)translatex(-20%);-moz-transform:translatey(-20%)translatex(-20%);-ms-transform:translatey(-20%)translatex(-20%);-o-transform:translatey(-20%)translatex(-20%);transform:translatey(-20%)translatex(-20%);z-index:-1}.partner-shape-2.jsx-b35a417fd3217d1b{position:absolute;bottom:-50%;right:10%;-webkit-transform:translatey(-28%)translatex(-10%);-moz-transform:translatey(-28%)translatex(-10%);-ms-transform:translatey(-28%)translatex(-10%);-o-transform:translatey(-28%)translatex(-10%);transform:translatey(-28%)translatex(-10%)}{}@media only screen and (max-width:767px){.partner-shape-1.jsx-b35a417fd3217d1b{display:none}.partner-shape-2.jsx-b35a417fd3217d1b{display:none}}@media only screen and (min-width:768px)and (max-width:991px){.partner-shape-1.jsx-b35a417fd3217d1b{display:none}.partner-shape-2.jsx-b35a417fd3217d1b{display:none}}@media only screen and (min-width:992px)and (max-width:1199px){}"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PartnerStyleTwo);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;