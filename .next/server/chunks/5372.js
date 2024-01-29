"use strict";
exports.id = 5372;
exports.ids = [5372];
exports.modules = {

/***/ 5372:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9816);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);




const featuresData = [
    {
        image: "/images/features/features-1.png",
        title: "Strategic Planning",
        shortText: "Through in-depth market analysis, competitor evaluation, and trend forecasting, we identify key opportunities and potential challenges.",
        btnText: "Read More",
        btnLink: "/services-details",
        aosDelay: "100"
    },
    {
        image: "/images/features/features-2.png",
        title: "Research & Development",
        shortText: "In the dynamic world of startups, R&D is not just a phase—it's an ongoing commitment to staying relevant and resilient.",
        btnText: "Read More",
        btnLink: "/services-details",
        aosDelay: "200"
    },
    {
        image: "/images/features/features-3.png",
        title: "Design & Implimentation",
        shortText: "Design and Implementation are the cornerstones of turning visionary concepts into tangible, user-centric solutions.",
        btnText: "Read More",
        btnLink: "/services-details",
        aosDelay: "300"
    }
];
const FeaturesCard = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "jsx-785f614bf82bd51d" + " " + "features-area pt-100 pb-70",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                        className: "jsx-785f614bf82bd51d" + " " + "container",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                            className: "jsx-785f614bf82bd51d" + " " + "row justify-content-center",
                            children: featuresData && featuresData.slice(0, 3).map((value, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                    "data-aos": "fade-up",
                                    "data-aos-delay": value.aosDelay,
                                    "data-aos-duration": "1200",
                                    "data-aos-once": "false",
                                    className: "jsx-785f614bf82bd51d" + " " + "col-lg-4 col-md-6",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "jsx-785f614bf82bd51d" + " " + "single-features",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                href: value.btnLink,
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
                                                    src: value.image,
                                                    alt: "image",
                                                    className: "jsx-785f614bf82bd51d"
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", {
                                                className: "jsx-785f614bf82bd51d",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                    href: value.btnLink,
                                                    children: value.title
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                                                className: "jsx-785f614bf82bd51d",
                                                children: value.shortText
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                className: "jsx-785f614bf82bd51d" + " " + "features-btn",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                    href: value.btnLink,
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                        className: "jsx-785f614bf82bd51d" + " " + "default-btn",
                                                        children: [
                                                            value.btnText,
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", {
                                                                className: "jsx-785f614bf82bd51d" + " " + "ri-arrow-right-line"
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                                                className: "jsx-785f614bf82bd51d"
                                                            })
                                                        ]
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                }, i))
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                        className: "jsx-785f614bf82bd51d" + " " + "features-shape-1",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
                            src: "/images/features/shape-1.png",
                            alt: "image",
                            className: "jsx-785f614bf82bd51d"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                        className: "jsx-785f614bf82bd51d" + " " + "features-shape-2",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
                            src: "/images/features/shape-2.png",
                            alt: "image",
                            className: "jsx-785f614bf82bd51d"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                        className: "jsx-785f614bf82bd51d" + " " + "features-shape-3",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
                            src: "/images/features/shape-3.png",
                            alt: "image",
                            className: "jsx-785f614bf82bd51d"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                        className: "jsx-785f614bf82bd51d" + " " + "features-shape-4",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
                            src: "/images/features/shape-4.png",
                            alt: "image",
                            className: "jsx-785f614bf82bd51d"
                        })
                    })
                ]
            }),
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "785f614bf82bd51d",
                children: ".features-area.jsx-785f614bf82bd51d{position:relative;z-index:1}.single-features.jsx-785f614bf82bd51d{text-align:center;margin-bottom:30px;-webkit-transition:var(--transition);-moz-transition:var(--transition);-o-transition:var(--transition);transition:var(--transition)}.single-features.jsx-785f614bf82bd51d img.jsx-785f614bf82bd51d{-webkit-transition:var(--transition);-moz-transition:var(--transition);-o-transition:var(--transition);transition:var(--transition)}.single-features.jsx-785f614bf82bd51d h3.jsx-785f614bf82bd51d{font-size:25px;margin-top:30px;margin-bottom:15px}.single-features.jsx-785f614bf82bd51d h3.jsx-785f614bf82bd51d a.jsx-785f614bf82bd51d{color:var(--black-color)}.single-features.jsx-785f614bf82bd51d h3.jsx-785f614bf82bd51d a.jsx-785f614bf82bd51d:hover{color:var(--main-color)}.single-features.jsx-785f614bf82bd51d p.jsx-785f614bf82bd51d{-webkit-transition:var(--transition);-moz-transition:var(--transition);-o-transition:var(--transition);transition:var(--transition)}.single-features.jsx-785f614bf82bd51d .features-btn.jsx-785f614bf82bd51d{margin-top:25px}.single-features.jsx-785f614bf82bd51d .features-btn.jsx-785f614bf82bd51d .default-btn.jsx-785f614bf82bd51d{background-color:#eaf0ff;color:var(--main-color)}.single-features.jsx-785f614bf82bd51d:hover .features-btn.jsx-785f614bf82bd51d .default-btn.jsx-785f614bf82bd51d{background-color:var(--main-color);color:var(--white-color)}.single-features.jsx-785f614bf82bd51d:hover .features-btn.jsx-785f614bf82bd51d .default-btn.jsx-785f614bf82bd51d span.jsx-785f614bf82bd51d{background-color:var(--optional-color)}.features-inner-box.jsx-785f614bf82bd51d{background-color:#f4f8fc;border:1px solid#e6edf6;padding-top:80px;padding-bottom:50px;padding-left:45px;padding-right:45px;-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px}.features-shape-1.jsx-785f614bf82bd51d{position:absolute;top:15%;left:40%;-webkit-transform:translatey(-15%)translatex(-40%);-moz-transform:translatey(-15%)translatex(-40%);-ms-transform:translatey(-15%)translatex(-40%);-o-transform:translatey(-15%)translatex(-40%);transform:translatey(-15%)translatex(-40%);z-index:1}.features-shape-2.jsx-785f614bf82bd51d{position:absolute;top:20%;right:40%;-webkit-transform:translatey(-20%)translatex(-40%);-moz-transform:translatey(-20%)translatex(-40%);-ms-transform:translatey(-20%)translatex(-40%);-o-transform:translatey(-20%)translatex(-40%);transform:translatey(-20%)translatex(-40%);z-index:1}.features-shape-3.jsx-785f614bf82bd51d{position:absolute;top:8%;right:50%;-webkit-transform:translatey(-8%)translatex(-50%);-moz-transform:translatey(-8%)translatex(-50%);-ms-transform:translatey(-8%)translatex(-50%);-o-transform:translatey(-8%)translatex(-50%);transform:translatey(-8%)translatex(-50%);z-index:1}.features-shape-4.jsx-785f614bf82bd51d{position:absolute;top:10%;right:48%;-webkit-transform:translatey(-10%)translatex(-48%);-moz-transform:translatey(-10%)translatex(-48%);-ms-transform:translatey(-10%)translatex(-48%);-o-transform:translatey(-10%)translatex(-48%);transform:translatey(-10%)translatex(-48%);z-index:1}{}@media only screen and (max-width:767px){.single-features.jsx-785f614bf82bd51d h3.jsx-785f614bf82bd51d{font-size:22px}.single-features.jsx-785f614bf82bd51d p.jsx-785f614bf82bd51d{font-size:15px}.features-shape-1.jsx-785f614bf82bd51d{display:none}.features-shape-2.jsx-785f614bf82bd51d{display:none}.features-shape-3.jsx-785f614bf82bd51d{display:none}.features-shape-4.jsx-785f614bf82bd51d{display:none}}@media only screen and (min-width:768px)and (max-width:991px){.single-features.jsx-785f614bf82bd51d p.jsx-785f614bf82bd51d{font-size:15px}.features-shape-1.jsx-785f614bf82bd51d{display:none}.features-shape-2.jsx-785f614bf82bd51d{display:none}.features-shape-3.jsx-785f614bf82bd51d{display:none}.features-shape-4.jsx-785f614bf82bd51d{display:none}}@media only screen and (min-width:992px)and (max-width:1199px){.single-features.jsx-785f614bf82bd51d h3.jsx-785f614bf82bd51d{font-size:23px}.single-features.jsx-785f614bf82bd51d p.jsx-785f614bf82bd51d{font-size:15px}.features-shape-1.jsx-785f614bf82bd51d{display:none}.features-shape-2.jsx-785f614bf82bd51d{display:none}.features-shape-3.jsx-785f614bf82bd51d{display:none}.features-shape-4.jsx-785f614bf82bd51d{display:none}}"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FeaturesCard);


/***/ })

};
;