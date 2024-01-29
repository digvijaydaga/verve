(() => {
var exports = {};
exports.id = 2888;
exports.ids = [2888];
exports.modules = {

/***/ 2813:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: external "aos"
const external_aos_namespaceObject = require("aos");
var external_aos_default = /*#__PURE__*/__webpack_require__.n(external_aos_namespaceObject);
// EXTERNAL MODULE: ./node_modules/aos/dist/aos.css
var aos = __webpack_require__(1759);
// EXTERNAL MODULE: ./styles/bootstrap.min.css
var bootstrap_min = __webpack_require__(2620);
// EXTERNAL MODULE: ./styles/animate.min.css
var animate_min = __webpack_require__(156);
// EXTERNAL MODULE: ./styles/remixicon.css
var remixicon = __webpack_require__(8568);
// EXTERNAL MODULE: ./node_modules/react-accessible-accordion/dist/fancy-example.css
var fancy_example = __webpack_require__(7600);
// EXTERNAL MODULE: ./node_modules/react-modal-video/css/modal-video.min.css
var modal_video_min = __webpack_require__(4562);
// EXTERNAL MODULE: ./node_modules/react-18-image-lightbox/style.css
var style = __webpack_require__(3964);
// EXTERNAL MODULE: ./node_modules/react-tabs/style/react-tabs.css
var react_tabs = __webpack_require__(8096);
// EXTERNAL MODULE: ./node_modules/swiper/swiper.min.css
var swiper_min = __webpack_require__(8722);
// EXTERNAL MODULE: ./node_modules/swiper/swiper-bundle.min.css
var swiper_bundle_min = __webpack_require__(1631);
// EXTERNAL MODULE: ./styles/style.css
var styles_style = __webpack_require__(8702);
// EXTERNAL MODULE: ./styles/responsive.css
var responsive = __webpack_require__(6050);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(9816);
var external_styled_jsx_style_default = /*#__PURE__*/__webpack_require__.n(style_);
;// CONCATENATED MODULE: ./components/_App/GoTop.js



const GoTop = ()=>{
    // The back-to-top button is hidden at the beginning
    const [showButton, setShowButton] = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        window.addEventListener("scroll", ()=>{
            if (window.pageYOffset > 150) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        });
    }, []);
    // This function will scroll the window to the top
    const scrollToTop = ()=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    const renderGoTopIcon = ()=>{
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [
                showButton && /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                    onClick: scrollToTop,
                    className: "jsx-bfb018d3542ef083" + " " + "scroll-to-top",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                        className: "jsx-bfb018d3542ef083" + " " + "ri-arrow-up-s-line"
                    })
                }),
                (0,jsx_runtime_.jsx)((external_styled_jsx_style_default()), {
                    id: "bfb018d3542ef083",
                    children: ".scroll-to-top.jsx-bfb018d3542ef083{position:fixed;cursor:pointer;bottom:20px;right:20px;color:var(--white-color);background-color:var(--black-color);z-index:9999;width:45px;text-align:center;height:45px;line-height:50px;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;font-size:30px;-webkit-transition:var(--transition);-moz-transition:var(--transition);-o-transition:var(--transition);transition:var(--transition);-webkit-box-shadow:0px 3px 10px rgba(0,0,0,.1);-moz-box-shadow:0px 3px 10px rgba(0,0,0,.1);box-shadow:0px 3px 10px rgba(0,0,0,.1)}.scroll-to-top.jsx-bfb018d3542ef083:hover{background-color:var(--main-color);color:var(--white-color);-webkit-transition:var(--transition);-moz-transition:var(--transition);-o-transition:var(--transition);transition:var(--transition);-webkit-box-shadow:0 4px 6px rgba(50,50,93,.11),0 1px 3px rgba(0,0,0,.08);-moz-box-shadow:0 4px 6px rgba(50,50,93,.11),0 1px 3px rgba(0,0,0,.08);box-shadow:0 4px 6px rgba(50,50,93,.11),0 1px 3px rgba(0,0,0,.08);-webkit-transform:translatey(-5px);-moz-transform:translatey(-5px);-ms-transform:translatey(-5px);-o-transform:translatey(-5px);transform:translatey(-5px)}{}@media only screen and (max-width:767px){.scroll-to-top.jsx-bfb018d3542ef083{width:40px;height:40px;line-height:45px;font-size:26px}}"
                })
            ]
        });
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsx)(jsx_runtime_.Fragment, {
        children: renderGoTopIcon()
    });
};
/* harmony default export */ const _App_GoTop = (GoTop);

;// CONCATENATED MODULE: ./components/_App/Preloader.js



const Preloader = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                className: "jsx-e70c48a782582b0e" + " " + "preloader-area",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                    className: "jsx-e70c48a782582b0e" + " " + "spinner",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "jsx-e70c48a782582b0e" + " " + "inner",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                className: "jsx-e70c48a782582b0e" + " " + "disc"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                className: "jsx-e70c48a782582b0e" + " " + "disc"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                className: "jsx-e70c48a782582b0e" + " " + "disc"
                            })
                        ]
                    })
                })
            }),
            (0,jsx_runtime_.jsx)((external_styled_jsx_style_default()), {
                id: "e70c48a782582b0e",
                children: '.preloader-area.jsx-e70c48a782582b0e{position:fixed;top:0;background-color:var(--main-color);left:0;width:100%;height:100%;z-index:99999;text-align:center}.preloader-area.jsx-e70c48a782582b0e .spinner.jsx-e70c48a782582b0e{width:4em;height:4em;-webkit-transform:perspective(20em)rotatex(-24deg)rotatey(20deg)rotatez(30deg);-moz-transform:perspective(20em)rotatex(-24deg)rotatey(20deg)rotatez(30deg);transform:perspective(20em)rotatex(-24deg)rotatey(20deg)rotatez(30deg);-webkit-transform-style:preserve-3d;-moz-transform-style:preserve-3d;transform-style:preserve-3d;position:absolute;left:0;right:0;top:45%;-webkit-transform:translatey(-45%);-moz-transform:translatey(-45%);-ms-transform:translatey(-45%);-o-transform:translatey(-45%);transform:translatey(-45%);margin-left:auto;margin-right:auto}.preloader-area.jsx-e70c48a782582b0e .spinner.jsx-e70c48a782582b0e .disc.jsx-e70c48a782582b0e{position:absolute;width:100%;height:100%;-webkit-border-radius:100%;-moz-border-radius:100%;border-radius:100%;border:.3em dotted var(--white-color)}.preloader-area.jsx-e70c48a782582b0e .spinner.jsx-e70c48a782582b0e .disc.jsx-e70c48a782582b0e:nth-child(1){-webkit-animation:rotate 12s linear infinite;-moz-animation:rotate 12s linear infinite;-o-animation:rotate 12s linear infinite;animation:rotate 12s linear infinite}.preloader-area.jsx-e70c48a782582b0e .spinner.jsx-e70c48a782582b0e .disc.jsx-e70c48a782582b0e:nth-child(2){-webkit-animation:rotateDisc2 12s linear infinite;-moz-animation:rotateDisc2 12s linear infinite;-o-animation:rotateDisc2 12s linear infinite;animation:rotateDisc2 12s linear infinite}.preloader-area.jsx-e70c48a782582b0e .spinner.jsx-e70c48a782582b0e .disc.jsx-e70c48a782582b0e:nth-child(3){-webkit-animation:rotateDisc3 12s linear infinite;-moz-animation:rotateDisc3 12s linear infinite;-o-animation:rotateDisc3 12s linear infinite;animation:rotateDisc3 12s linear infinite}.preloader-area.jsx-e70c48a782582b0e .spinner.jsx-e70c48a782582b0e .inner.jsx-e70c48a782582b0e{width:100%;height:100%;-webkit-transform-style:preserve-3d;-moz-transform-style:preserve-3d;transform-style:preserve-3d;-webkit-animation:sphereSpin 6s linear infinite;-moz-animation:sphereSpin 6s linear infinite;-o-animation:sphereSpin 6s linear infinite;animation:sphereSpin 6s linear infinite}.preloader-area.jsx-e70c48a782582b0e .spinner.jsx-e70c48a782582b0e::before{content:"";position:absolute;left:0;top:0;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;right:0;bottom:0;border:2px dotted var(--white-color);margin:-15px}@-webkit-keyframes sphereSpin{0%{-webkit-transform:rotatex(360deg)rotatey(0deg);-moz-transform:rotatex(360deg)rotatey(0deg);transform:rotatex(360deg)rotatey(0deg)}100%{-webkit-transform:rotatex(0deg)rotatey(360deg);-moz-transform:rotatex(0deg)rotatey(360deg);transform:rotatex(0deg)rotatey(360deg)}}@-webkit-keyframes sphereSpin{0%{-webkit-transform:rotatex(360deg)rotatey(0deg);transform:rotatex(360deg)rotatey(0deg)}100%{-webkit-transform:rotatex(0deg)rotatey(360deg);transform:rotatex(0deg)rotatey(360deg)}}@-moz-keyframes sphereSpin{0%{-webkit-transform:rotatex(360deg)rotatey(0deg);-moz-transform:rotatex(360deg)rotatey(0deg);transform:rotatex(360deg)rotatey(0deg)}100%{-webkit-transform:rotatex(0deg)rotatey(360deg);-moz-transform:rotatex(0deg)rotatey(360deg);transform:rotatex(0deg)rotatey(360deg)}}@-o-keyframes sphereSpin{0%{-webkit-transform:rotatex(360deg)rotatey(0deg);transform:rotatex(360deg)rotatey(0deg)}100%{-webkit-transform:rotatex(0deg)rotatey(360deg);transform:rotatex(0deg)rotatey(360deg)}}@keyframes sphereSpin{0%{-webkit-transform:rotatex(360deg)rotatey(0deg);-moz-transform:rotatex(360deg)rotatey(0deg);transform:rotatex(360deg)rotatey(0deg)}100%{-webkit-transform:rotatex(0deg)rotatey(360deg);-moz-transform:rotatex(0deg)rotatey(360deg);transform:rotatex(0deg)rotatey(360deg)}}@-webkit-keyframes rotate{from{-webkit-transform:rotate(0deg);-moz-transform:rotate(0deg);-o-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(360deg);-moz-transform:rotate(360deg);-o-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes rotate{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-moz-keyframes rotate{from{-webkit-transform:rotate(0deg);-moz-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(360deg);-moz-transform:rotate(360deg);transform:rotate(360deg)}}@-o-keyframes rotate{from{-webkit-transform:rotate(0deg);-o-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(360deg);-o-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes rotate{from{-webkit-transform:rotate(0deg);-moz-transform:rotate(0deg);-o-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(360deg);-moz-transform:rotate(360deg);-o-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes rotateDisc2{from{-webkit-transform:rotatex(90deg)rotatez(0deg);-moz-transform:rotatex(90deg)rotatez(0deg);transform:rotatex(90deg)rotatez(0deg)}to{-webkit-transform:rotatex(90deg)rotatez(360deg);-moz-transform:rotatex(90deg)rotatez(360deg);transform:rotatex(90deg)rotatez(360deg)}}@-webkit-keyframes rotateDisc2{from{-webkit-transform:rotatex(90deg)rotatez(0deg);transform:rotatex(90deg)rotatez(0deg)}to{-webkit-transform:rotatex(90deg)rotatez(360deg);transform:rotatex(90deg)rotatez(360deg)}}@-moz-keyframes rotateDisc2{from{-webkit-transform:rotatex(90deg)rotatez(0deg);-moz-transform:rotatex(90deg)rotatez(0deg);transform:rotatex(90deg)rotatez(0deg)}to{-webkit-transform:rotatex(90deg)rotatez(360deg);-moz-transform:rotatex(90deg)rotatez(360deg);transform:rotatex(90deg)rotatez(360deg)}}@-o-keyframes rotateDisc2{from{-webkit-transform:rotatex(90deg)rotatez(0deg);transform:rotatex(90deg)rotatez(0deg)}to{-webkit-transform:rotatex(90deg)rotatez(360deg);transform:rotatex(90deg)rotatez(360deg)}}@keyframes rotateDisc2{from{-webkit-transform:rotatex(90deg)rotatez(0deg);-moz-transform:rotatex(90deg)rotatez(0deg);transform:rotatex(90deg)rotatez(0deg)}to{-webkit-transform:rotatex(90deg)rotatez(360deg);-moz-transform:rotatex(90deg)rotatez(360deg);transform:rotatex(90deg)rotatez(360deg)}}@-webkit-keyframes rotateDisc3{from{-webkit-transform:rotatey(90deg)rotatez(0deg);-moz-transform:rotatey(90deg)rotatez(0deg);transform:rotatey(90deg)rotatez(0deg)}to{-webkit-transform:rotatey(90deg)rotatez(360deg);-moz-transform:rotatey(90deg)rotatez(360deg);transform:rotatey(90deg)rotatez(360deg)}}@-webkit-keyframes rotateDisc3{from{-webkit-transform:rotatey(90deg)rotatez(0deg);transform:rotatey(90deg)rotatez(0deg)}to{-webkit-transform:rotatey(90deg)rotatez(360deg);transform:rotatey(90deg)rotatez(360deg)}}@-moz-keyframes rotateDisc3{from{-webkit-transform:rotatey(90deg)rotatez(0deg);-moz-transform:rotatey(90deg)rotatez(0deg);transform:rotatey(90deg)rotatez(0deg)}to{-webkit-transform:rotatey(90deg)rotatez(360deg);-moz-transform:rotatey(90deg)rotatez(360deg);transform:rotatey(90deg)rotatez(360deg)}}@-o-keyframes rotateDisc3{from{-webkit-transform:rotatey(90deg)rotatez(0deg);transform:rotatey(90deg)rotatez(0deg)}to{-webkit-transform:rotatey(90deg)rotatez(360deg);transform:rotatey(90deg)rotatez(360deg)}}@keyframes rotateDisc3{from{-webkit-transform:rotatey(90deg)rotatez(0deg);-moz-transform:rotatey(90deg)rotatez(0deg);transform:rotatey(90deg)rotatez(0deg)}to{-webkit-transform:rotatey(90deg)rotatez(360deg);-moz-transform:rotatey(90deg)rotatez(360deg);transform:rotatey(90deg)rotatez(360deg)}}'
            })
        ]
    });
};
/* harmony default export */ const _App_Preloader = (Preloader);

;// CONCATENATED MODULE: ./components/_App/Layout.js





const Layout = ({ children  })=>{
    // Preloader
    const [loader, setLoader] = external_react_default().useState(true);
    external_react_default().useEffect(()=>{
        setTimeout(()=>setLoader(false), 1500);
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("meta", {
                        charSet: "utf-8"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("title", {
                        children: "Web Verve Studios - Complete Web Solutions"
                    })
                ]
            }),
            children,
            loader ? /*#__PURE__*/ (0,jsx_runtime_.jsx)(_App_Preloader, {}) : null,
            /*#__PURE__*/ (0,jsx_runtime_.jsx)(_App_GoTop, {
                scrollStepInPx: "100",
                delayInMs: "10.50"
            })
        ]
    });
};
/* harmony default export */ const _App_Layout = (Layout);

;// CONCATENATED MODULE: ./pages/_app.js













// Global Style



const MyApp = ({ Component , pageProps  })=>{
    external_react_default().useEffect(()=>{
        external_aos_default().init();
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsx)(_App_Layout, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(Component, {
            ...pageProps
        })
    });
};
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 1759:
/***/ (() => {



/***/ }),

/***/ 3964:
/***/ (() => {



/***/ }),

/***/ 7600:
/***/ (() => {



/***/ }),

/***/ 4562:
/***/ (() => {



/***/ }),

/***/ 8096:
/***/ (() => {



/***/ }),

/***/ 1631:
/***/ (() => {



/***/ }),

/***/ 8722:
/***/ (() => {



/***/ }),

/***/ 156:
/***/ (() => {



/***/ }),

/***/ 2620:
/***/ (() => {



/***/ }),

/***/ 8568:
/***/ (() => {



/***/ }),

/***/ 6050:
/***/ (() => {



/***/ }),

/***/ 8702:
/***/ (() => {



/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9816:
/***/ ((module) => {

"use strict";
module.exports = require("styled-jsx/style");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(2813));
module.exports = __webpack_exports__;

})();