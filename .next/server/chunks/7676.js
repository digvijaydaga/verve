"use strict";
exports.id = 7676;
exports.ids = [7676];
exports.modules = {

/***/ 412:
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
/* harmony import */ var react_modal_video__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9485);
/* harmony import */ var react_modal_video__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_modal_video__WEBPACK_IMPORTED_MODULE_3__);




const IntroVideo = ()=>{
    const [isOpen, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                "data-aos": "fade-up",
                "data-aos-delay": "200",
                "data-aos-duration": "1200",
                "data-aos-once": "false",
                className: "jsx-f473ecbe9f219fe5" + " " + "video-area pt-100",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                        className: "jsx-f473ecbe9f219fe5" + " " + "container",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "jsx-f473ecbe9f219fe5" + " " + "video-view-content",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                    className: "jsx-f473ecbe9f219fe5" + " " + "video-image",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
                                        src: "/images/video/video-1.jpg",
                                        alt: "image",
                                        className: "jsx-f473ecbe9f219fe5"
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                    onClick: ()=>setOpen(true),
                                    className: "jsx-f473ecbe9f219fe5" + " " + "video-btn popup-youtube",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", {
                                        className: "jsx-f473ecbe9f219fe5" + " " + "ri-play-line"
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                        className: "jsx-f473ecbe9f219fe5" + " " + "video-shape-1",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
                            src: "/images/video/shape-1.png",
                            alt: "image",
                            className: "jsx-f473ecbe9f219fe5"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                        className: "jsx-f473ecbe9f219fe5" + " " + "video-shape-2",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
                            src: "/images/video/shape-2.png",
                            alt: "image",
                            className: "jsx-f473ecbe9f219fe5"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((react_modal_video__WEBPACK_IMPORTED_MODULE_3___default()), {
                channel: "youtube",
                autoplay: true,
                isOpen: isOpen,
                videoId: "bk7McNUjWgw",
                onClose: ()=>setOpen(false)
            }),
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "f473ecbe9f219fe5",
                children: '.video-area.jsx-f473ecbe9f219fe5{position:relative;z-index:1;overflow:hidden}.video-view-content.jsx-f473ecbe9f219fe5{text-align:center;position:relative;z-index:1;max-width:1050px;margin:auto}.video-view-content.jsx-f473ecbe9f219fe5 .video-image.jsx-f473ecbe9f219fe5{overflow:hidden}.video-view-content.jsx-f473ecbe9f219fe5 .video-image.jsx-f473ecbe9f219fe5 img.jsx-f473ecbe9f219fe5{-webkit-transition:var(--transition);-moz-transition:var(--transition);-o-transition:var(--transition);transition:var(--transition)}.video-view-content.jsx-f473ecbe9f219fe5 .video-btn.jsx-f473ecbe9f219fe5{display:inline-block;width:70px;height:70px;line-height:80px;background-color:var(--white-color);-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;color:var(--optional-color);position:absolute;z-index:1;top:50%;-webkit-transform:translatey(-50%);-moz-transform:translatey(-50%);-ms-transform:translatey(-50%);-o-transform:translatey(-50%);transform:translatey(-50%);left:0;right:0;margin:auto;text-align:center;font-size:40px;-webkit-transition:var(--transition);-moz-transition:var(--transition);-o-transition:var(--transition);transition:var(--transition);cursor:pointer}.video-view-content.jsx-f473ecbe9f219fe5 .video-btn.jsx-f473ecbe9f219fe5 i.jsx-f473ecbe9f219fe5{-webkit-transition:var(--transition);-moz-transition:var(--transition);-o-transition:var(--transition);transition:var(--transition)}.video-view-content.jsx-f473ecbe9f219fe5 .video-btn.jsx-f473ecbe9f219fe5::before{content:"";display:block;position:absolute;top:0;right:0;z-index:-1;bottom:0;left:0;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;border:1px solid var(--white-color);-webkit-animation:ripple 1s linear infinite;-moz-animation:ripple 1s linear infinite;-o-animation:ripple 1s linear infinite;animation:ripple 1s linear infinite}.video-view-content.jsx-f473ecbe9f219fe5 .video-btn.jsx-f473ecbe9f219fe5:hover{background-color:var(--optional-color)}.video-view-content.jsx-f473ecbe9f219fe5 .video-btn.jsx-f473ecbe9f219fe5:hover i.jsx-f473ecbe9f219fe5{color:var(--white-color)}.video-view-content.jsx-f473ecbe9f219fe5:hover .video-image.jsx-f473ecbe9f219fe5{overflow:hidden}.video-view-content.jsx-f473ecbe9f219fe5:hover .video-image.jsx-f473ecbe9f219fe5 img.jsx-f473ecbe9f219fe5{-webkit-transform:scale(1.1);-moz-transform:scale(1.1);-ms-transform:scale(1.1);-o-transform:scale(1.1);transform:scale(1.1)}@-webkit-keyframes ripple{0%{-webkit-transform:scale(1);-moz-transform:scale(1);-o-transform:scale(1);transform:scale(1)}75%{-webkit-transform:scale(1.75);-moz-transform:scale(1.75);-o-transform:scale(1.75);transform:scale(1.75);opacity:1}100%{-webkit-transform:scale(2);-moz-transform:scale(2);-o-transform:scale(2);transform:scale(2);opacity:0}}@-webkit-keyframes ripple{0%{-webkit-transform:scale(1);transform:scale(1)}75%{-webkit-transform:scale(1.75);transform:scale(1.75);opacity:1}100%{-webkit-transform:scale(2);transform:scale(2);opacity:0}}@-moz-keyframes ripple{0%{-webkit-transform:scale(1);-moz-transform:scale(1);transform:scale(1)}75%{-webkit-transform:scale(1.75);-moz-transform:scale(1.75);transform:scale(1.75);opacity:1}100%{-webkit-transform:scale(2);-moz-transform:scale(2);transform:scale(2);opacity:0}}@-o-keyframes ripple{0%{-webkit-transform:scale(1);-o-transform:scale(1);transform:scale(1)}75%{-webkit-transform:scale(1.75);-o-transform:scale(1.75);transform:scale(1.75);opacity:1}100%{-webkit-transform:scale(2);-o-transform:scale(2);transform:scale(2);opacity:0}}@keyframes ripple{0%{-webkit-transform:scale(1);-moz-transform:scale(1);-o-transform:scale(1);transform:scale(1)}75%{-webkit-transform:scale(1.75);-moz-transform:scale(1.75);-o-transform:scale(1.75);transform:scale(1.75);opacity:1}100%{-webkit-transform:scale(2);-moz-transform:scale(2);-o-transform:scale(2);transform:scale(2);opacity:0}}{}.video-shape-1.jsx-f473ecbe9f219fe5{position:absolute;top:20%;left:10%;-webkit-transform:translatey(-20%)translatex(-10%);-moz-transform:translatey(-20%)translatex(-10%);-ms-transform:translatey(-20%)translatex(-10%);-o-transform:translatey(-20%)translatex(-10%);transform:translatey(-20%)translatex(-10%)}.video-shape-2.jsx-f473ecbe9f219fe5{position:absolute;top:50%;right:10%;-webkit-transform:translatey(-50%)translatex(-10%);-moz-transform:translatey(-50%)translatex(-10%);-ms-transform:translatey(-50%)translatex(-10%);-o-transform:translatey(-50%)translatex(-10%);transform:translatey(-50%)translatex(-10%)}{}@media only screen and (max-width:767px){.video-shape-1.jsx-f473ecbe9f219fe5{display:none}.video-shape-2.jsx-f473ecbe9f219fe5{display:none}}@media only screen and (min-width:768px)and (max-width:991px){.video-shape-1.jsx-f473ecbe9f219fe5{display:none}.video-shape-2.jsx-f473ecbe9f219fe5{display:none}}@media only screen and (min-width:992px)and (max-width:1199px){}'
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IntroVideo);


/***/ }),

/***/ 2005:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ _App_NavbarTwo)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(9816);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/_App/TopHeader.js



const TopHeader = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                className: "jsx-db4277a0f198cc4d" + " " + "top-header-area",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                    className: "jsx-db4277a0f198cc4d" + " " + "container",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "jsx-db4277a0f198cc4d" + " " + "row align-items-center",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                className: "jsx-db4277a0f198cc4d" + " " + "col-lg-7 col-sm-8",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                    className: "jsx-db4277a0f198cc4d" + " " + "top-header-content",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                            className: "jsx-db4277a0f198cc4d",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                    className: "jsx-db4277a0f198cc4d" + " " + "ri-customer-service-line"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                    href: "tel:9012550701",
                                                    className: "jsx-db4277a0f198cc4d",
                                                    children: "9012550701"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                            className: "jsx-db4277a0f198cc4d",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                    className: "jsx-db4277a0f198cc4d" + " " + "ri-earth-line"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                    href: "mailto:sales@webvervestudios.com",
                                                    className: "jsx-db4277a0f198cc4d",
                                                    children: "sales@webvervestudios.com"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                className: "jsx-db4277a0f198cc4d" + " " + "col-lg-5 col-sm-4",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("ul", {
                                    className: "jsx-db4277a0f198cc4d" + " " + "top-header-optional",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                        className: "jsx-db4277a0f198cc4d",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                href: "https://www.facebook.com/",
                                                target: "_blank",
                                                className: "jsx-db4277a0f198cc4d",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                    className: "jsx-db4277a0f198cc4d" + " " + "ri-facebook-fill"
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                href: "https://twitter.com/",
                                                target: "_blank",
                                                className: "jsx-db4277a0f198cc4d",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                    className: "jsx-db4277a0f198cc4d" + " " + "ri-twitter-fill"
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                href: "https://www.linkedin.com/",
                                                target: "_blank",
                                                className: "jsx-db4277a0f198cc4d",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                    className: "jsx-db4277a0f198cc4d" + " " + "ri-linkedin-fill"
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                href: "https://www.messenger.com/",
                                                target: "_blank",
                                                className: "jsx-db4277a0f198cc4d",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                    className: "jsx-db4277a0f198cc4d" + " " + "ri-messenger-fill"
                                                })
                                            })
                                        ]
                                    })
                                })
                            })
                        ]
                    })
                })
            }),
            (0,jsx_runtime_.jsx)((style_default()), {
                id: "db4277a0f198cc4d",
                children: ".top-header-area.jsx-db4277a0f198cc4d{padding-top:15px;padding-bottom:15px}.top-header-content.jsx-db4277a0f198cc4d{padding-left:0;list-style-type:none;margin-bottom:0}.top-header-content.jsx-db4277a0f198cc4d li.jsx-db4277a0f198cc4d{display:inline-block;position:relative;padding-left:22px;font-size:15px;font-weight:500;color:var(--white-color);margin-right:18px;-webkit-transition:var(--transition);-moz-transition:var(--transition);-o-transition:var(--transition);transition:var(--transition)}.top-header-content.jsx-db4277a0f198cc4d li.jsx-db4277a0f198cc4d i.jsx-db4277a0f198cc4d{position:absolute;left:0;top:50%;-webkit-transform:translatey(-50%);-moz-transform:translatey(-50%);-ms-transform:translatey(-50%);-o-transform:translatey(-50%);transform:translatey(-50%);color:var(--white-color);font-size:var(--font-size);-webkit-transition:var(--transition);-moz-transition:var(--transition);-o-transition:var(--transition);transition:var(--transition)}.top-header-content.jsx-db4277a0f198cc4d li.jsx-db4277a0f198cc4d a.jsx-db4277a0f198cc4d{color:var(--white-color)}.top-header-content.jsx-db4277a0f198cc4d li.jsx-db4277a0f198cc4d a.jsx-db4277a0f198cc4d:hover{color:var(--main-color)}.top-header-content.jsx-db4277a0f198cc4d li.jsx-db4277a0f198cc4d:last-child{margin-right:0}.top-header-optional.jsx-db4277a0f198cc4d{padding-left:0;margin-bottom:0;text-align:right}.top-header-optional.jsx-db4277a0f198cc4d li.jsx-db4277a0f198cc4d{list-style-type:none;display:inline-block}.top-header-optional.jsx-db4277a0f198cc4d li.jsx-db4277a0f198cc4d a.jsx-db4277a0f198cc4d{margin-right:15px}.top-header-optional.jsx-db4277a0f198cc4d li.jsx-db4277a0f198cc4d a.jsx-db4277a0f198cc4d:last-child{margin-right:0}.top-header-optional.jsx-db4277a0f198cc4d li.jsx-db4277a0f198cc4d a.jsx-db4277a0f198cc4d i.jsx-db4277a0f198cc4d{display:inline-block;font-size:var(--font-size);font-weight:500;color:var(--white-color);-webkit-transition:var(--transition);-moz-transition:var(--transition);-o-transition:var(--transition);transition:var(--transition)}.top-header-optional.jsx-db4277a0f198cc4d li.jsx-db4277a0f198cc4d a.jsx-db4277a0f198cc4d i.jsx-db4277a0f198cc4d:hover{color:var(--main-color);-webkit-transform:translatey(-2px);-moz-transform:translatey(-2px);-ms-transform:translatey(-2px);-o-transform:translatey(-2px);transform:translatey(-2px)}{}@media only screen and (max-width:767px){.top-header-area.jsx-db4277a0f198cc4d{text-align:center;padding-top:12px;padding-bottom:12px}.top-header-optional.jsx-db4277a0f198cc4d{text-align:center}.top-header-content.jsx-db4277a0f198cc4d li.jsx-db4277a0f198cc4d{padding-left:20px;font-size:13px;margin-right:10px}}@media only screen and (max-width:575px){.top-header-optional.jsx-db4277a0f198cc4d{display:none}}@media only screen and (min-width:768px)and (max-width:991px){}@media only screen and (min-width:992px)and (max-width:1199px){}"
            })
        ]
    });
};
/* harmony default export */ const _App_TopHeader = (TopHeader);

;// CONCATENATED MODULE: ./components/_App/NavbarTwo.js






const NavbarTwo = ()=>{
    // Add active class
    const [currentPath, setCurrentPath] = (0,external_react_.useState)("");
    const router = (0,router_.useRouter)();
    // console.log(router.asPath)
    (0,external_react_.useEffect)(()=>{
        setCurrentPath(router.asPath);
    }, [
        router
    ]);
    const [menu, setMenu] = external_react_default().useState(true);
    const toggleNavbar = ()=>{
        setMenu(!menu);
    };
    external_react_default().useEffect(()=>{
        let elementId = document.getElementById("navbar");
        document.addEventListener("scroll", ()=>{
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        });
    });
    // Search Modal
    const [isActiveSearchModal, setActiveSearchModal] = (0,external_react_.useState)("false");
    const handleToggleSearchModal = ()=>{
        setActiveSearchModal(!isActiveSearchModal);
    };
    // Sidebar Modal
    const [isActiveSidebarModal, setActiveSidebarModal] = (0,external_react_.useState)("false");
    const handleToggleSidebarModal = ()=>{
        setActiveSidebarModal(!isActiveSidebarModal);
    };
    const classOne = menu ? "collapse navbar-collapse" : "collapse navbar-collapse show";
    const classTwo = menu ? "navbar-toggler navbar-toggler-right collapsed" : "navbar-toggler navbar-toggler-right";
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
                className: "jsx-d0ed31365ad5b875" + " " + "main-header-area",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsx)(_App_TopHeader, {}),
                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                        id: "navbar",
                        className: "jsx-d0ed31365ad5b875" + " " + "navbar-area navbar-box-style",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                            className: "jsx-d0ed31365ad5b875" + " " + "main-navbar",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                className: "jsx-d0ed31365ad5b875" + " " + "container",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                                    className: "jsx-d0ed31365ad5b875" + " " + "navbar navbar-expand-lg navbar-light",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                            href: "/",
                                            className: "navbar-brand",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("img", {
                                                src: "/images/logo.png",
                                                alt: "logo",
                                                className: "jsx-d0ed31365ad5b875"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                            onClick: toggleNavbar,
                                            type: "button",
                                            "data-toggle": "collapse",
                                            "data-target": "#navbarSupportedContent",
                                            "aria-controls": "navbarSupportedContent",
                                            "aria-expanded": "false",
                                            "aria-label": "Toggle navigation",
                                            className: "jsx-d0ed31365ad5b875" + " " + (classTwo || ""),
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                                    className: "jsx-d0ed31365ad5b875" + " " + "icon-bar top-bar"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                                    className: "jsx-d0ed31365ad5b875" + " " + "icon-bar middle-bar"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                                    className: "jsx-d0ed31365ad5b875" + " " + "icon-bar bottom-bar"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                            id: "navbarSupportedContent",
                                            className: "jsx-d0ed31365ad5b875" + " " + (classOne || ""),
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                className: "jsx-d0ed31365ad5b875" + " " + "navbar-nav m-auto",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                        className: "jsx-d0ed31365ad5b875" + " " + "nav-item",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                                href: "#",
                                                                onClick: (e)=>e.preventDefault(),
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                    className: "jsx-d0ed31365ad5b875" + " " + "nav-link",
                                                                    children: [
                                                                        "Home ",
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                                            className: "jsx-d0ed31365ad5b875" + " " + "ri-add-line"
                                                                        })
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                                className: "jsx-d0ed31365ad5b875" + " " + "dropdown-menu",
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                        className: "jsx-d0ed31365ad5b875" + " " + "nav-item",
                                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                                            href: "/",
                                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                                                                className: "jsx-d0ed31365ad5b875" + " " + `nav-link ${currentPath == "/" && "active"}`,
                                                                                children: "Home Demo - 1"
                                                                            })
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                        className: "jsx-d0ed31365ad5b875" + " " + "nav-item",
                                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                                            href: "/index-2/",
                                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                                                                className: "jsx-d0ed31365ad5b875" + " " + `nav-link ${currentPath == "/index-2/" && "active"}`,
                                                                                children: "Home Demo - 2"
                                                                            })
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                        className: "jsx-d0ed31365ad5b875" + " " + "nav-item",
                                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                                            href: "/index-3/",
                                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                                                                className: "jsx-d0ed31365ad5b875" + " " + `nav-link ${currentPath == "/index-3/" && "active"}`,
                                                                                children: "Home Demo - 3"
                                                                            })
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                        className: "jsx-d0ed31365ad5b875" + " " + "nav-item",
                                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                                            href: "/index-4/",
                                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                                                                className: "jsx-d0ed31365ad5b875" + " " + `nav-link ${currentPath == "/index-4/" && "active"}`,
                                                                                children: "Home Demo - 4 (Static Image)"
                                                                            })
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                        className: "jsx-d0ed31365ad5b875" + " " + "nav-item",
                                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                                            href: "/index-5/",
                                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                                                                className: "jsx-d0ed31365ad5b875" + " " + `nav-link ${currentPath == "/index-5/" && "active"}`,
                                                                                children: "Home Demo - 5 (Static Image)"
                                                                            })
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                        className: "jsx-d0ed31365ad5b875" + " " + "nav-item",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                                href: "#",
                                                                onClick: (e)=>e.preventDefault(),
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                    className: "jsx-d0ed31365ad5b875" + " " + "nav-link",
                                                                    children: [
                                                                        "About ",
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                                            className: "jsx-d0ed31365ad5b875" + " " + "ri-add-line"
                                                                        })
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                                className: "jsx-d0ed31365ad5b875" + " " + "dropdown-menu",
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                        className: "jsx-d0ed31365ad5b875" + " " + "nav-item",
                                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                                            href: "/about-us/",
                                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                                                                className: "jsx-d0ed31365ad5b875" + " " + `nav-link ${currentPath == "/about-us/" && "active"}`,
                                                                                children: "About Us One"
                                                                            })
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                        className: "jsx-d0ed31365ad5b875" + " " + "nav-item",
                                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                                            href: "/about-us-2/",
                                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                                                                className: "jsx-d0ed31365ad5b875" + " " + `nav-link ${currentPath == "/about-us-2/" && "active"}`,
                                                                                children: "About Us Two"
                                                                            })
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                        className: "jsx-d0ed31365ad5b875" + " " + "nav-item",
                                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                                            href: "/features/",
                                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                                                                className: "jsx-d0ed31365ad5b875" + " " + `nav-link ${currentPath == "/features/" && "active"}`,
                                                                                children: "Features One"
                                                                            })
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                        className: "jsx-d0ed31365ad5b875" + " " + "nav-item",
                                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                                            href: "/features-2/",
                                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                                                                className: "jsx-d0ed31365ad5b875" + " " + `nav-link ${currentPath == "/features-2/" && "active"}`,
                                                                                children: "Features Two"
                                                                            })
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                        className: "jsx-d0ed31365ad5b875" + " " + "nav-item",
                                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                                            href: "/testimonials/",
                                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                                                                className: "jsx-d0ed31365ad5b875" + " " + `nav-link ${currentPath == "/testimonials/" && "active"}`,
                                                                                children: "Testimonials"
                                                                            })
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                        className: "jsx-d0ed31365ad5b875" + " " + "nav-item",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                                href: "#",
                                                                onClick: (e)=>e.preventDefault(),
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                    className: "jsx-d0ed31365ad5b875" + " " + "nav-link",
                                                                    children: [
                                                                        "Services ",
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                                            className: "jsx-d0ed31365ad5b875" + " " + "ri-add-line"
                                                                        })
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                                className: "jsx-d0ed31365ad5b875" + " " + "dropdown-menu",
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                        className: "jsx-d0ed31365ad5b875" + " " + "nav-item",
                                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                                            href: "/services/",
                                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                                                                className: "jsx-d0ed31365ad5b875" + " " + `nav-link ${currentPath == "/services/" && "active"}`,
                                                                                children: "Services One"
                                                                            })
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                        className: "jsx-d0ed31365ad5b875" + " " + "nav-item",
                                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                                            href: "/services-2/",
                                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                                                                className: "jsx-d0ed31365ad5b875" + " " + `nav-link ${currentPath == "/services-2/" && "active"}`,
                                                                                children: "Services Two"
                                                                            })
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                        className: "jsx-d0ed31365ad5b875" + " " + "nav-item",
                                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                                            href: "/services-3/",
                                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                                                                className: "jsx-d0ed31365ad5b875" + " " + `nav-link ${currentPath == "/services-3/" && "active"}`,
                                                                                children: "Services Three"
                                                                            })
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                        className: "jsx-d0ed31365ad5b875" + " " + "nav-item",
                                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                                            href: "/services-details/",
                                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                                                                className: "jsx-d0ed31365ad5b875" + " " + `nav-link ${currentPath == "/services-details/" && "active"}`,
                                                                                children: "Services Details"
                                                                            })
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                        className: "jsx-d0ed31365ad5b875" + " " + "nav-item",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                                href: "#",
                                                                onClick: (e)=>e.preventDefault(),
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                    className: "jsx-d0ed31365ad5b875" + " " + "nav-link",
                                                                    children: [
                                                                        "Pages ",
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                                            className: "jsx-d0ed31365ad5b875" + " " + "ri-add-line"
                                                                        })
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                                className: "jsx-d0ed31365ad5b875" + " " + "dropdown-menu",
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                        className: "jsx-d0ed31365ad5b875" + " " + "nav-item",
                                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                                            href: "/team-member/",
                                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                                                                className: "jsx-d0ed31365ad5b875" + " " + `nav-link ${currentPath == "/team-member/" && "active"}`,
                                                                                children: "Team Member"
                                                                            })
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                        className: "jsx-d0ed31365ad5b875" + " " + "nav-item",
                                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                                            href: "/pricing/",
                                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                                                                className: "jsx-d0ed31365ad5b875" + " " + `nav-link ${currentPath == "/pricing/" && "active"}`,
                                                                                children: "Pricing"
                                                                            })
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                        className: "jsx-d0ed31365ad5b875" + " " + "nav-item",
                                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                                            href: "/gallery/",
                                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                                                                className: "jsx-d0ed31365ad5b875" + " " + `nav-link ${currentPath == "/gallery/" && "active"}`,
                                                                                children: "Gallery"
                                                                            })
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                        className: "jsx-d0ed31365ad5b875" + " " + "nav-item",
                                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                                            href: "/faq/",
                                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                                                                className: "jsx-d0ed31365ad5b875" + " " + `nav-link ${currentPath == "/faq/" && "active"}`,
                                                                                children: "Faq's"
                                                                            })
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                        className: "jsx-d0ed31365ad5b875" + " " + "nav-item",
                                                                        children: [
                                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                                                href: "#",
                                                                                onClick: (e)=>e.preventDefault(),
                                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                                    className: "jsx-d0ed31365ad5b875" + " " + "nav-link",
                                                                                    children: [
                                                                                        "Events ",
                                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                                                            className: "jsx-d0ed31365ad5b875" + " " + "ri-arrow-right-s-line"
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                                                className: "jsx-d0ed31365ad5b875" + " " + "dropdown-menu",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                                        className: "jsx-d0ed31365ad5b875" + " " + "nav-item",
                                                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                                                            href: "/events/",
                                                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                                                                                className: "jsx-d0ed31365ad5b875" + " " + `nav-link ${currentPath == "/events/" && "active"}`,
                                                                                                children: "Events"
                                                                                            })
                                                                                        })
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                                        className: "jsx-d0ed31365ad5b875" + " " + "nav-item",
                                                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                                                            href: "/events-details/",
                                                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                                                                                className: "jsx-d0ed31365ad5b875" + " " + `nav-link ${currentPath == "/events-details/" && "active"}`,
                                                                                                children: "Events Details"
                                                                                            })
                                                                                        })
                                                                                    })
                                                                                ]
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                        className: "jsx-d0ed31365ad5b875" + " " + "nav-item",
                                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                                            href: "/profile-authentication/",
                                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                                                                className: "jsx-d0ed31365ad5b875" + " " + `nav-link ${currentPath == "/profile-authentication/" && "active"}`,
                                                                                children: "Profile Authentication"
                                                                            })
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                        className: "jsx-d0ed31365ad5b875" + " " + "nav-item",
                                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                                            href: "/membership-levels/",
                                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                                                                className: "jsx-d0ed31365ad5b875" + " " + `nav-link ${currentPath == "/membership-levels/" && "active"}`,
                                                                                children: "Membership Levels"
                                                                            })
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                        className: "jsx-d0ed31365ad5b875" + " " + "nav-item",
                                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                                            href: "/404/",
                                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                                                                className: "jsx-d0ed31365ad5b875" + " " + `nav-link ${currentPath == "/404/" && "active"}`,
                                                                                children: "404 Error Page"
                                                                            })
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                        className: "jsx-d0ed31365ad5b875" + " " + "nav-item",
                                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                                            href: "/coming-soon/",
                                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                                                                className: "jsx-d0ed31365ad5b875" + " " + `nav-link ${currentPath == "/coming-soon/" && "active"}`,
                                                                                children: "Coming Soon"
                                                                            })
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                        className: "jsx-d0ed31365ad5b875" + " " + "nav-item",
                                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                                            href: "/privacy-policy/",
                                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                                                                className: "jsx-d0ed31365ad5b875" + " " + `nav-link ${currentPath == "/privacy-policy/" && "active"}`,
                                                                                children: "Privacy Policy"
                                                                            })
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                        className: "jsx-d0ed31365ad5b875" + " " + "nav-item",
                                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                                            href: "/terms-of-service/",
                                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                                                                className: "jsx-d0ed31365ad5b875" + " " + `nav-link ${currentPath == "/terms-of-service/" && "active"}`,
                                                                                children: "Terms of Service"
                                                                            })
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                        className: "jsx-d0ed31365ad5b875" + " " + "nav-item",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                                href: "#",
                                                                onClick: (e)=>e.preventDefault(),
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                    className: "jsx-d0ed31365ad5b875" + " " + "nav-link",
                                                                    children: [
                                                                        "Case Study ",
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                                            className: "jsx-d0ed31365ad5b875" + " " + "ri-add-line"
                                                                        })
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                                className: "jsx-d0ed31365ad5b875" + " " + "dropdown-menu",
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                        className: "jsx-d0ed31365ad5b875" + " " + "nav-item",
                                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                                            href: "/case-study/",
                                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                                                                className: "jsx-d0ed31365ad5b875" + " " + `nav-link ${currentPath == "/case-study/" && "active"}`,
                                                                                children: "Case Study One"
                                                                            })
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                        className: "jsx-d0ed31365ad5b875" + " " + "nav-item",
                                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                                            href: "/case-study-2/",
                                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                                                                className: "jsx-d0ed31365ad5b875" + " " + `nav-link ${currentPath == "/case-study-2/" && "active"}`,
                                                                                children: "Case Study Two"
                                                                            })
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                        className: "jsx-d0ed31365ad5b875" + " " + "nav-item",
                                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                                            href: "/case-study-details/",
                                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                                                                className: "jsx-d0ed31365ad5b875" + " " + `nav-link ${currentPath == "/case-study-details/" && "active"}`,
                                                                                children: "Case Study Details"
                                                                            })
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                        className: "jsx-d0ed31365ad5b875" + " " + "nav-item",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                                href: "#",
                                                                onClick: (e)=>e.preventDefault(),
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                    className: "jsx-d0ed31365ad5b875" + " " + "nav-link",
                                                                    children: [
                                                                        "Blog ",
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                                            className: "jsx-d0ed31365ad5b875" + " " + "ri-add-line"
                                                                        })
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                                className: "jsx-d0ed31365ad5b875" + " " + "dropdown-menu",
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                        className: "jsx-d0ed31365ad5b875" + " " + "nav-item",
                                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                                            href: "/blog/",
                                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                                                                className: "jsx-d0ed31365ad5b875" + " " + `nav-link ${currentPath == "/blog/" && "active"}`,
                                                                                children: "Blog"
                                                                            })
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                        className: "jsx-d0ed31365ad5b875" + " " + "nav-item",
                                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                                            href: "/blog-right-sidebar/",
                                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                                                                className: "jsx-d0ed31365ad5b875" + " " + `nav-link ${currentPath == "/blog-right-sidebar/" && "active"}`,
                                                                                children: "Blog Right Sidebar"
                                                                            })
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                        className: "jsx-d0ed31365ad5b875" + " " + "nav-item",
                                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                                            href: "/blog-details/",
                                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                                                                className: "jsx-d0ed31365ad5b875" + " " + `nav-link ${currentPath == "/blog-details/" && "active"}`,
                                                                                children: "Blog Details"
                                                                            })
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                        className: "jsx-d0ed31365ad5b875" + " " + "nav-item",
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                            href: "/contact/",
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                                                className: "jsx-d0ed31365ad5b875" + " " + `nav-link ${currentPath == "/contact/" && "active"}`,
                                                                children: "Contact"
                                                            })
                                                        })
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "jsx-d0ed31365ad5b875" + " " + "others-options d-flex align-items-center",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                    className: "jsx-d0ed31365ad5b875" + " " + "option-item",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                        onClick: handleToggleSearchModal,
                                                        className: "jsx-d0ed31365ad5b875" + " " + "search-btn ri-search-line"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                    className: "jsx-d0ed31365ad5b875" + " " + "option-item",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                        href: "/contact",
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                            className: "jsx-d0ed31365ad5b875" + " " + "default-btn",
                                                            children: [
                                                                "Let’s Talk",
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                                    className: "jsx-d0ed31365ad5b875" + " " + "ri-message-line"
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                                                    className: "jsx-d0ed31365ad5b875"
                                                                })
                                                            ]
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                    className: "jsx-d0ed31365ad5b875" + " " + "option-item",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                        onClick: handleToggleSidebarModal,
                                                        className: "jsx-d0ed31365ad5b875" + " " + "side-menu-btn",
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                            className: "jsx-d0ed31365ad5b875" + " " + "ri-menu-4-line"
                                                        })
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                className: "jsx-d0ed31365ad5b875" + " " + `search-overlay ${isActiveSearchModal ? "" : "search-overlay-active"}`,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                    className: "jsx-d0ed31365ad5b875" + " " + "d-table",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "jsx-d0ed31365ad5b875" + " " + "d-table-cell",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                className: "jsx-d0ed31365ad5b875" + " " + "search-overlay-layer"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                className: "jsx-d0ed31365ad5b875" + " " + "search-overlay-layer"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                className: "jsx-d0ed31365ad5b875" + " " + "search-overlay-layer"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                onClick: handleToggleSearchModal,
                                className: "jsx-d0ed31365ad5b875" + " " + "search-overlay-close",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                        className: "jsx-d0ed31365ad5b875" + " " + "search-overlay-close-line"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                        className: "jsx-d0ed31365ad5b875" + " " + "search-overlay-close-line"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                className: "jsx-d0ed31365ad5b875" + " " + "search-overlay-form",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                                    className: "jsx-d0ed31365ad5b875",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("input", {
                                            type: "text",
                                            placeholder: "Search here...",
                                            className: "jsx-d0ed31365ad5b875" + " " + "input-search"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("button", {
                                            type: "submit",
                                            className: "jsx-d0ed31365ad5b875",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                className: "jsx-d0ed31365ad5b875" + " " + "ri-search-2-line"
                                            })
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                className: "jsx-d0ed31365ad5b875" + " " + `sidebarModal modal right ${isActiveSidebarModal ? "" : "show"}`,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                    className: "jsx-d0ed31365ad5b875" + " " + "modal-dialog",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "jsx-d0ed31365ad5b875" + " " + "modal-content",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("button", {
                                type: "button",
                                onClick: handleToggleSidebarModal,
                                className: "jsx-d0ed31365ad5b875" + " " + "close",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                    className: "jsx-d0ed31365ad5b875" + " " + "ri-close-line"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "jsx-d0ed31365ad5b875" + " " + "modal-body",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                        className: "jsx-d0ed31365ad5b875" + " " + "title",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                            href: "/",
                                            className: "d-inline-block",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("img", {
                                                src: "/images/logo.png",
                                                alt: "image",
                                                className: "jsx-d0ed31365ad5b875"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "jsx-d0ed31365ad5b875" + " " + "sidebar-content",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("h3", {
                                                className: "jsx-d0ed31365ad5b875",
                                                children: "About Us"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("p", {
                                                className: "jsx-d0ed31365ad5b875",
                                                children: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                className: "jsx-d0ed31365ad5b875" + " " + "sidebar-btn",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                    href: "/contact",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "jsx-d0ed31365ad5b875" + " " + "default-btn",
                                                        children: [
                                                            "Let’s Talk",
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                                className: "jsx-d0ed31365ad5b875" + " " + "ri-message-line"
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                                                className: "jsx-d0ed31365ad5b875"
                                                            })
                                                        ]
                                                    })
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "jsx-d0ed31365ad5b875" + " " + "sidebar-contact-info",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("h3", {
                                                className: "jsx-d0ed31365ad5b875",
                                                children: "Contact Information"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                className: "jsx-d0ed31365ad5b875" + " " + "info-list",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                        className: "jsx-d0ed31365ad5b875",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                                className: "jsx-d0ed31365ad5b875" + " " + "ri-phone-fill"
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                                href: "tel:+11234567890",
                                                                className: "jsx-d0ed31365ad5b875",
                                                                children: "+1 (123) 456 7890"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                        className: "jsx-d0ed31365ad5b875",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                                className: "jsx-d0ed31365ad5b875" + " " + "ri-mail-line"
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                                href: "mailto:hello@ozen.com",
                                                                className: "jsx-d0ed31365ad5b875",
                                                                children: "hello@ozen.com"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                        className: "jsx-d0ed31365ad5b875",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                                className: "jsx-d0ed31365ad5b875" + " " + "ri-map-pin-line"
                                                            }),
                                                            "121 King St, Melbourne VIC ",
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("br", {
                                                                className: "jsx-d0ed31365ad5b875"
                                                            }),
                                                            " 3000, Australia."
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                        className: "jsx-d0ed31365ad5b875" + " " + "sidebar-social-list",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                className: "jsx-d0ed31365ad5b875",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                    href: "https://www.facebook.com/",
                                                    target: "_blank",
                                                    className: "jsx-d0ed31365ad5b875",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                        className: "jsx-d0ed31365ad5b875" + " " + "ri-facebook-fill"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                className: "jsx-d0ed31365ad5b875",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                    href: "https://twitter.com/",
                                                    target: "_blank",
                                                    className: "jsx-d0ed31365ad5b875",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                        className: "jsx-d0ed31365ad5b875" + " " + "ri-twitter-fill"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                className: "jsx-d0ed31365ad5b875",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                    href: "https://www.linkedin.com/",
                                                    target: "_blank",
                                                    className: "jsx-d0ed31365ad5b875",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                        className: "jsx-d0ed31365ad5b875" + " " + "ri-linkedin-fill"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                className: "jsx-d0ed31365ad5b875",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                    href: "https://www.instagram.com/",
                                                    target: "_blank",
                                                    className: "jsx-d0ed31365ad5b875",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                        className: "jsx-d0ed31365ad5b875" + " " + "ri-instagram-fill"
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                })
            }),
            (0,jsx_runtime_.jsx)((style_default()), {
                id: "d0ed31365ad5b875",
                children: '{}.main-navbar.jsx-d0ed31365ad5b875{padding:10px 0}.main-navbar.jsx-d0ed31365ad5b875 .navbar.jsx-d0ed31365ad5b875{-webkit-transition:var(--transition);-moz-transition:var(--transition);-o-transition:var(--transition);transition:var(--transition);padding:0}.main-navbar.jsx-d0ed31365ad5b875 .navbar.jsx-d0ed31365ad5b875 .navbar-brand.jsx-d0ed31365ad5b875{padding:0}.main-navbar.jsx-d0ed31365ad5b875 .navbar.jsx-d0ed31365ad5b875 ul.jsx-d0ed31365ad5b875{padding-left:0;list-style-type:none;margin-bottom:0}.main-navbar.jsx-d0ed31365ad5b875 .navbar.jsx-d0ed31365ad5b875 .navbar-nav.jsx-d0ed31365ad5b875 .nav-item.jsx-d0ed31365ad5b875{position:relative;margin-left:15px;margin-right:15px}.main-navbar.jsx-d0ed31365ad5b875 .navbar.jsx-d0ed31365ad5b875 .navbar-nav.jsx-d0ed31365ad5b875 .nav-item.jsx-d0ed31365ad5b875 .nav-link.jsx-d0ed31365ad5b875{color:var(--paragraph-color);font-size:var(--font-size);font-weight:600;padding-left:0;padding-right:0;padding-top:25px;padding-bottom:25px;-webkit-transition:var(--transition);-moz-transition:var(--transition);-o-transition:var(--transition);transition:var(--transition)}.main-navbar.jsx-d0ed31365ad5b875 .navbar.jsx-d0ed31365ad5b875 .navbar-nav.jsx-d0ed31365ad5b875 .nav-item.jsx-d0ed31365ad5b875 .nav-link.jsx-d0ed31365ad5b875 i.jsx-d0ed31365ad5b875{font-size:14px;position:relative;top:2px;display:inline-block;margin-left:-2px;margin-right:-2px}.main-navbar.jsx-d0ed31365ad5b875 .navbar.jsx-d0ed31365ad5b875 .navbar-nav.jsx-d0ed31365ad5b875 .nav-item.jsx-d0ed31365ad5b875 .nav-link.jsx-d0ed31365ad5b875:hover,.main-navbar.jsx-d0ed31365ad5b875 .navbar.jsx-d0ed31365ad5b875 .navbar-nav.jsx-d0ed31365ad5b875 .nav-item.jsx-d0ed31365ad5b875 .nav-link.jsx-d0ed31365ad5b875:focus,.main-navbar.jsx-d0ed31365ad5b875 .navbar.jsx-d0ed31365ad5b875 .navbar-nav.jsx-d0ed31365ad5b875 .nav-item.jsx-d0ed31365ad5b875 .nav-link.active.jsx-d0ed31365ad5b875{color:var(--main-color)}.main-navbar.jsx-d0ed31365ad5b875 .navbar.jsx-d0ed31365ad5b875 .navbar-nav.jsx-d0ed31365ad5b875 .nav-item.jsx-d0ed31365ad5b875:last-child{margin-right:0}.main-navbar.jsx-d0ed31365ad5b875 .navbar.jsx-d0ed31365ad5b875 .navbar-nav.jsx-d0ed31365ad5b875 .nav-item.jsx-d0ed31365ad5b875:first-child{margin-left:0}.main-navbar.jsx-d0ed31365ad5b875 .navbar.jsx-d0ed31365ad5b875 .navbar-nav.jsx-d0ed31365ad5b875 .nav-item.jsx-d0ed31365ad5b875:hover .nav-link.jsx-d0ed31365ad5b875,.main-navbar.jsx-d0ed31365ad5b875 .navbar.jsx-d0ed31365ad5b875 .navbar-nav.jsx-d0ed31365ad5b875 .nav-item.active.jsx-d0ed31365ad5b875 .nav-link.jsx-d0ed31365ad5b875{color:var(--main-color)}.main-navbar.jsx-d0ed31365ad5b875 .navbar.jsx-d0ed31365ad5b875 .navbar-nav.jsx-d0ed31365ad5b875 .nav-item.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875{border:none;top:70px;left:0;z-index:99;opacity:0;width:280px;display:block;-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px;padding:10px 0;margin-top:15px;position:absolute;visibility:hidden;background:var(--white-color);-webkit-transition:all.2s ease-in-out;-moz-transition:all.2s ease-in-out;-o-transition:all.2s ease-in-out;transition:all.2s ease-in-out;-webkit-box-shadow:0px 0px 15px 0px rgba(0,0,0,.1);-moz-box-shadow:0px 0px 15px 0px rgba(0,0,0,.1);box-shadow:0px 0px 15px 0px rgba(0,0,0,.1)}.main-navbar.jsx-d0ed31365ad5b875 .navbar.jsx-d0ed31365ad5b875 .navbar-nav.jsx-d0ed31365ad5b875 .nav-item.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875{margin:0}.main-navbar.jsx-d0ed31365ad5b875 .navbar.jsx-d0ed31365ad5b875 .navbar-nav.jsx-d0ed31365ad5b875 .nav-item.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .nav-link.jsx-d0ed31365ad5b875{padding:10px 20px;position:relative;display:block;color:var(--paragraph-color);font-size:15px;font-weight:600}.main-navbar.jsx-d0ed31365ad5b875 .navbar.jsx-d0ed31365ad5b875 .navbar-nav.jsx-d0ed31365ad5b875 .nav-item.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .nav-link.jsx-d0ed31365ad5b875 i.jsx-d0ed31365ad5b875{margin:0;position:absolute;top:50%;font-size:15px;-webkit-transform:translatey(-50%);-moz-transform:translatey(-50%);-ms-transform:translatey(-50%);-o-transform:translatey(-50%);transform:translatey(-50%);right:15px}.main-navbar.jsx-d0ed31365ad5b875 .navbar.jsx-d0ed31365ad5b875 .navbar-nav.jsx-d0ed31365ad5b875 .nav-item.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .nav-link.jsx-d0ed31365ad5b875::before{content:"";position:absolute;left:20px;top:50%;-webkit-transform:translatey(-50%);-moz-transform:translatey(-50%);-ms-transform:translatey(-50%);-o-transform:translatey(-50%);transform:translatey(-50%);width:8px;height:8px;-webkit-transition:var(--transition);-moz-transition:var(--transition);-o-transition:var(--transition);transition:var(--transition);background-color:var(--main-color);-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;opacity:0;visibility:hidden}.main-navbar.jsx-d0ed31365ad5b875 .navbar.jsx-d0ed31365ad5b875 .navbar-nav.jsx-d0ed31365ad5b875 .nav-item.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .nav-link.jsx-d0ed31365ad5b875:hover,.main-navbar.jsx-d0ed31365ad5b875 .navbar.jsx-d0ed31365ad5b875 .navbar-nav.jsx-d0ed31365ad5b875 .nav-item.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .nav-link.jsx-d0ed31365ad5b875:focus,.main-navbar.jsx-d0ed31365ad5b875 .navbar.jsx-d0ed31365ad5b875 .navbar-nav.jsx-d0ed31365ad5b875 .nav-item.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .nav-link.active.jsx-d0ed31365ad5b875{color:var(--main-color);padding-left:35px}.main-navbar.jsx-d0ed31365ad5b875 .navbar.jsx-d0ed31365ad5b875 .navbar-nav.jsx-d0ed31365ad5b875 .nav-item.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .nav-link.jsx-d0ed31365ad5b875:hover::before,.main-navbar.jsx-d0ed31365ad5b875 .navbar.jsx-d0ed31365ad5b875 .navbar-nav.jsx-d0ed31365ad5b875 .nav-item.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .nav-link.jsx-d0ed31365ad5b875:focus::before,.main-navbar.jsx-d0ed31365ad5b875 .navbar.jsx-d0ed31365ad5b875 .navbar-nav.jsx-d0ed31365ad5b875 .nav-item.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .nav-link.active.jsx-d0ed31365ad5b875::before{opacity:1;visibility:visible}.main-navbar.jsx-d0ed31365ad5b875 .navbar.jsx-d0ed31365ad5b875 .navbar-nav.jsx-d0ed31365ad5b875 .nav-item.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875{top:0;opacity:0;left:-100%;margin-top:15px;visibility:hidden}.main-navbar.jsx-d0ed31365ad5b875 .navbar.jsx-d0ed31365ad5b875 .navbar-nav.jsx-d0ed31365ad5b875 .nav-item.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .nav-link.jsx-d0ed31365ad5b875{color:var(--paragraph-color)}.main-navbar.jsx-d0ed31365ad5b875 .navbar.jsx-d0ed31365ad5b875 .navbar-nav.jsx-d0ed31365ad5b875 .nav-item.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .nav-link.jsx-d0ed31365ad5b875:hover,.main-navbar.jsx-d0ed31365ad5b875 .navbar.jsx-d0ed31365ad5b875 .navbar-nav.jsx-d0ed31365ad5b875 .nav-item.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .nav-link.jsx-d0ed31365ad5b875:focus,.main-navbar.jsx-d0ed31365ad5b875 .navbar.jsx-d0ed31365ad5b875 .navbar-nav.jsx-d0ed31365ad5b875 .nav-item.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .nav-link.active.jsx-d0ed31365ad5b875{color:var(--main-color)}.main-navbar.jsx-d0ed31365ad5b875 .navbar.jsx-d0ed31365ad5b875 .navbar-nav.jsx-d0ed31365ad5b875 .nav-item.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875{top:0;opacity:0;left:100%;visibility:hidden}.main-navbar.jsx-d0ed31365ad5b875 .navbar.jsx-d0ed31365ad5b875 .navbar-nav.jsx-d0ed31365ad5b875 .nav-item.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .nav-link.jsx-d0ed31365ad5b875{color:var(--paragraph-color)}.main-navbar.jsx-d0ed31365ad5b875 .navbar.jsx-d0ed31365ad5b875 .navbar-nav.jsx-d0ed31365ad5b875 .nav-item.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .nav-link.jsx-d0ed31365ad5b875:hover,.main-navbar.jsx-d0ed31365ad5b875 .navbar.jsx-d0ed31365ad5b875 .navbar-nav.jsx-d0ed31365ad5b875 .nav-item.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .nav-link.jsx-d0ed31365ad5b875:focus,.main-navbar.jsx-d0ed31365ad5b875 .navbar.jsx-d0ed31365ad5b875 .navbar-nav.jsx-d0ed31365ad5b875 .nav-item.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .nav-link.active.jsx-d0ed31365ad5b875{color:var(--main-color)}.main-navbar.jsx-d0ed31365ad5b875 .navbar.jsx-d0ed31365ad5b875 .navbar-nav.jsx-d0ed31365ad5b875 .nav-item.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875{top:0;opacity:0;left:-100%;visibility:hidden}.main-navbar.jsx-d0ed31365ad5b875 .navbar.jsx-d0ed31365ad5b875 .navbar-nav.jsx-d0ed31365ad5b875 .nav-item.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .nav-link.jsx-d0ed31365ad5b875{color:var(--paragraph-color)}.main-navbar.jsx-d0ed31365ad5b875 .navbar.jsx-d0ed31365ad5b875 .navbar-nav.jsx-d0ed31365ad5b875 .nav-item.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .nav-link.jsx-d0ed31365ad5b875:hover,.main-navbar.jsx-d0ed31365ad5b875 .navbar.jsx-d0ed31365ad5b875 .navbar-nav.jsx-d0ed31365ad5b875 .nav-item.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .nav-link.jsx-d0ed31365ad5b875:focus,.main-navbar.jsx-d0ed31365ad5b875 .navbar.jsx-d0ed31365ad5b875 .navbar-nav.jsx-d0ed31365ad5b875 .nav-item.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .nav-link.active.jsx-d0ed31365ad5b875{color:var(--main-color)}.main-navbar.jsx-d0ed31365ad5b875 .navbar.jsx-d0ed31365ad5b875 .navbar-nav.jsx-d0ed31365ad5b875 .nav-item.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875{top:0;opacity:0;left:100%;visibility:hidden}.main-navbar.jsx-d0ed31365ad5b875 .navbar.jsx-d0ed31365ad5b875 .navbar-nav.jsx-d0ed31365ad5b875 .nav-item.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .nav-link.jsx-d0ed31365ad5b875{color:var(--paragraph-color)}.main-navbar.jsx-d0ed31365ad5b875 .navbar.jsx-d0ed31365ad5b875 .navbar-nav.jsx-d0ed31365ad5b875 .nav-item.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .nav-link.jsx-d0ed31365ad5b875:hover,.main-navbar.jsx-d0ed31365ad5b875 .navbar.jsx-d0ed31365ad5b875 .navbar-nav.jsx-d0ed31365ad5b875 .nav-item.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .nav-link.jsx-d0ed31365ad5b875:focus,.main-navbar.jsx-d0ed31365ad5b875 .navbar.jsx-d0ed31365ad5b875 .navbar-nav.jsx-d0ed31365ad5b875 .nav-item.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .nav-link.active.jsx-d0ed31365ad5b875{color:var(--main-color)}.main-navbar.jsx-d0ed31365ad5b875 .navbar.jsx-d0ed31365ad5b875 .navbar-nav.jsx-d0ed31365ad5b875 .nav-item.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875{top:0;opacity:0;left:-100%;visibility:hidden}.main-navbar.jsx-d0ed31365ad5b875 .navbar.jsx-d0ed31365ad5b875 .navbar-nav.jsx-d0ed31365ad5b875 .nav-item.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .nav-link.jsx-d0ed31365ad5b875{color:var(--paragraph-color)}.main-navbar.jsx-d0ed31365ad5b875 .navbar.jsx-d0ed31365ad5b875 .navbar-nav.jsx-d0ed31365ad5b875 .nav-item.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .nav-link.jsx-d0ed31365ad5b875:hover,.main-navbar.jsx-d0ed31365ad5b875 .navbar.jsx-d0ed31365ad5b875 .navbar-nav.jsx-d0ed31365ad5b875 .nav-item.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .nav-link.jsx-d0ed31365ad5b875:focus,.main-navbar.jsx-d0ed31365ad5b875 .navbar.jsx-d0ed31365ad5b875 .navbar-nav.jsx-d0ed31365ad5b875 .nav-item.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .nav-link.active.jsx-d0ed31365ad5b875{color:var(--main-color)}.main-navbar.jsx-d0ed31365ad5b875 .navbar.jsx-d0ed31365ad5b875 .navbar-nav.jsx-d0ed31365ad5b875 .nav-item.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875{top:0;opacity:0;left:100%;visibility:hidden}.main-navbar.jsx-d0ed31365ad5b875 .navbar.jsx-d0ed31365ad5b875 .navbar-nav.jsx-d0ed31365ad5b875 .nav-item.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .nav-link.jsx-d0ed31365ad5b875{color:var(--paragraph-color)}.main-navbar.jsx-d0ed31365ad5b875 .navbar.jsx-d0ed31365ad5b875 .navbar-nav.jsx-d0ed31365ad5b875 .nav-item.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .nav-link.jsx-d0ed31365ad5b875:hover,.main-navbar.jsx-d0ed31365ad5b875 .navbar.jsx-d0ed31365ad5b875 .navbar-nav.jsx-d0ed31365ad5b875 .nav-item.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .nav-link.jsx-d0ed31365ad5b875:focus,.main-navbar.jsx-d0ed31365ad5b875 .navbar.jsx-d0ed31365ad5b875 .navbar-nav.jsx-d0ed31365ad5b875 .nav-item.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .nav-link.active.jsx-d0ed31365ad5b875{color:var(--main-color)}.main-navbar.jsx-d0ed31365ad5b875 .navbar.jsx-d0ed31365ad5b875 .navbar-nav.jsx-d0ed31365ad5b875 .nav-item.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.active.jsx-d0ed31365ad5b875 .nav-link.jsx-d0ed31365ad5b875{color:var(--main-color)}.main-navbar.jsx-d0ed31365ad5b875 .navbar.jsx-d0ed31365ad5b875 .navbar-nav.jsx-d0ed31365ad5b875 .nav-item.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875:hover .dropdown-menu.jsx-d0ed31365ad5b875{opacity:1;visibility:visible}.main-navbar.jsx-d0ed31365ad5b875 .navbar.jsx-d0ed31365ad5b875 .navbar-nav.jsx-d0ed31365ad5b875 .nav-item.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.active.jsx-d0ed31365ad5b875 .nav-link.jsx-d0ed31365ad5b875{color:var(--main-color)}.main-navbar.jsx-d0ed31365ad5b875 .navbar.jsx-d0ed31365ad5b875 .navbar-nav.jsx-d0ed31365ad5b875 .nav-item.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875:hover .dropdown-menu.jsx-d0ed31365ad5b875{opacity:1;visibility:visible}.main-navbar.jsx-d0ed31365ad5b875 .navbar.jsx-d0ed31365ad5b875 .navbar-nav.jsx-d0ed31365ad5b875 .nav-item.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.active.jsx-d0ed31365ad5b875 .nav-link.jsx-d0ed31365ad5b875{color:var(--main-color)}.main-navbar.jsx-d0ed31365ad5b875 .navbar.jsx-d0ed31365ad5b875 .navbar-nav.jsx-d0ed31365ad5b875 .nav-item.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875:hover .dropdown-menu.jsx-d0ed31365ad5b875{opacity:1;visibility:visible}.main-navbar.jsx-d0ed31365ad5b875 .navbar.jsx-d0ed31365ad5b875 .navbar-nav.jsx-d0ed31365ad5b875 .nav-item.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.active.jsx-d0ed31365ad5b875 .nav-link.jsx-d0ed31365ad5b875{color:var(--main-color)}.main-navbar.jsx-d0ed31365ad5b875 .navbar.jsx-d0ed31365ad5b875 .navbar-nav.jsx-d0ed31365ad5b875 .nav-item.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875:hover .dropdown-menu.jsx-d0ed31365ad5b875{opacity:1;visibility:visible}.main-navbar.jsx-d0ed31365ad5b875 .navbar.jsx-d0ed31365ad5b875 .navbar-nav.jsx-d0ed31365ad5b875 .nav-item.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.active.jsx-d0ed31365ad5b875 .nav-link.jsx-d0ed31365ad5b875{color:var(--main-color)}.main-navbar.jsx-d0ed31365ad5b875 .navbar.jsx-d0ed31365ad5b875 .navbar-nav.jsx-d0ed31365ad5b875 .nav-item.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875:hover .dropdown-menu.jsx-d0ed31365ad5b875{opacity:1;visibility:visible}.main-navbar.jsx-d0ed31365ad5b875 .navbar.jsx-d0ed31365ad5b875 .navbar-nav.jsx-d0ed31365ad5b875 .nav-item.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.active.jsx-d0ed31365ad5b875 .nav-link.jsx-d0ed31365ad5b875{color:var(--main-color)}.main-navbar.jsx-d0ed31365ad5b875 .navbar.jsx-d0ed31365ad5b875 .navbar-nav.jsx-d0ed31365ad5b875 .nav-item.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875:hover .dropdown-menu.jsx-d0ed31365ad5b875{opacity:1;visibility:visible;margin-top:0}.main-navbar.jsx-d0ed31365ad5b875 .navbar.jsx-d0ed31365ad5b875 .navbar-nav.jsx-d0ed31365ad5b875 .nav-item.jsx-d0ed31365ad5b875:hover .dropdown-menu.jsx-d0ed31365ad5b875{opacity:1;visibility:visible;margin-top:0}.main-navbar.jsx-d0ed31365ad5b875 .navbar.jsx-d0ed31365ad5b875 .others-options.jsx-d0ed31365ad5b875 .option-item.jsx-d0ed31365ad5b875{position:relative;margin-right:25px}.main-navbar.jsx-d0ed31365ad5b875 .navbar.jsx-d0ed31365ad5b875 .others-options.jsx-d0ed31365ad5b875 .option-item.jsx-d0ed31365ad5b875:last-child{margin-right:0}.main-navbar.jsx-d0ed31365ad5b875 .navbar.jsx-d0ed31365ad5b875 .others-options.jsx-d0ed31365ad5b875 .option-item.jsx-d0ed31365ad5b875 .search-btn.jsx-d0ed31365ad5b875{cursor:pointer;-webkit-transition:var(--transition);-moz-transition:var(--transition);-o-transition:var(--transition);transition:var(--transition);color:var(--paragraph-color);font-size:25px;-moz-transition:var(--transition);-o-transition:var(--transition);transition:var(--transition)}.main-navbar.jsx-d0ed31365ad5b875 .navbar.jsx-d0ed31365ad5b875 .others-options.jsx-d0ed31365ad5b875 .option-item.jsx-d0ed31365ad5b875 .search-btn.jsx-d0ed31365ad5b875:hover{color:var(--main-color)}.main-navbar.jsx-d0ed31365ad5b875 .navbar.jsx-d0ed31365ad5b875 .others-options.jsx-d0ed31365ad5b875 .option-item.jsx-d0ed31365ad5b875 .close-btn.jsx-d0ed31365ad5b875{cursor:pointer;display:none;-webkit-transition:var(--transition);-moz-transition:var(--transition);-o-transition:var(--transition);transition:var(--transition);color:var(--paragraph-color);font-size:25px;-moz-transition:var(--transition);-o-transition:var(--transition);transition:var(--transition)}.main-navbar.jsx-d0ed31365ad5b875 .navbar.jsx-d0ed31365ad5b875 .others-options.jsx-d0ed31365ad5b875 .option-item.jsx-d0ed31365ad5b875 .close-btn.jsx-d0ed31365ad5b875:hover{color:var(--main-color)}.main-navbar.jsx-d0ed31365ad5b875 .navbar.jsx-d0ed31365ad5b875 .others-options.jsx-d0ed31365ad5b875 .option-item.jsx-d0ed31365ad5b875 .close-btn.active.jsx-d0ed31365ad5b875{display:block}.main-navbar.jsx-d0ed31365ad5b875 .navbar.jsx-d0ed31365ad5b875 .others-options.jsx-d0ed31365ad5b875 .option-item.jsx-d0ed31365ad5b875 .default-btn.jsx-d0ed31365ad5b875{background-color:var(--optional-color);color:var(--white-color);padding:12px 50px 12px 25px}.main-navbar.jsx-d0ed31365ad5b875 .navbar.jsx-d0ed31365ad5b875 .others-options.jsx-d0ed31365ad5b875 .option-item.jsx-d0ed31365ad5b875 .default-btn.jsx-d0ed31365ad5b875 span.jsx-d0ed31365ad5b875{background-color:var(--main-color)}.main-navbar.jsx-d0ed31365ad5b875 .navbar.jsx-d0ed31365ad5b875 .others-options.jsx-d0ed31365ad5b875 .option-item.jsx-d0ed31365ad5b875 .side-menu-btn.jsx-d0ed31365ad5b875 i.jsx-d0ed31365ad5b875{font-size:25px;color:var(--paragraph-color);cursor:pointer;-webkit-transition:var(--transition);-moz-transition:var(--transition);-o-transition:var(--transition);transition:var(--transition)}.main-navbar.jsx-d0ed31365ad5b875 .navbar.jsx-d0ed31365ad5b875 .others-options.jsx-d0ed31365ad5b875 .option-item.jsx-d0ed31365ad5b875 .side-menu-btn.jsx-d0ed31365ad5b875 i.jsx-d0ed31365ad5b875:hover{color:var(--main-color)}.navbar-box-style.jsx-d0ed31365ad5b875 .main-navbar.jsx-d0ed31365ad5b875{padding:0}.navbar-box-style.jsx-d0ed31365ad5b875 .main-navbar.jsx-d0ed31365ad5b875 .navbar.jsx-d0ed31365ad5b875{padding:10px 30px;background:var(--white-color);-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px}.navbar-box-style.jsx-d0ed31365ad5b875 .main-navbar.jsx-d0ed31365ad5b875 .navbar.jsx-d0ed31365ad5b875 .navbar-nav.jsx-d0ed31365ad5b875 .nav-item.jsx-d0ed31365ad5b875 a.jsx-d0ed31365ad5b875{color:var(--paragraph-color)}.navbar-box-style.jsx-d0ed31365ad5b875 .main-navbar.jsx-d0ed31365ad5b875 .navbar.jsx-d0ed31365ad5b875 .navbar-nav.jsx-d0ed31365ad5b875 .nav-item.jsx-d0ed31365ad5b875 a.jsx-d0ed31365ad5b875:hover,.navbar-box-style.jsx-d0ed31365ad5b875 .main-navbar.jsx-d0ed31365ad5b875 .navbar.jsx-d0ed31365ad5b875 .navbar-nav.jsx-d0ed31365ad5b875 .nav-item.jsx-d0ed31365ad5b875 a.jsx-d0ed31365ad5b875:focus,.navbar-box-style.jsx-d0ed31365ad5b875 .main-navbar.jsx-d0ed31365ad5b875 .navbar.jsx-d0ed31365ad5b875 .navbar-nav.jsx-d0ed31365ad5b875 .nav-item.jsx-d0ed31365ad5b875 a.active.jsx-d0ed31365ad5b875{color:var(--optional-color)}.navbar-box-style.jsx-d0ed31365ad5b875 .main-navbar.jsx-d0ed31365ad5b875 .navbar.jsx-d0ed31365ad5b875 .navbar-nav.jsx-d0ed31365ad5b875 .nav-item.jsx-d0ed31365ad5b875:hover a.jsx-d0ed31365ad5b875,.navbar-box-style.jsx-d0ed31365ad5b875 .main-navbar.jsx-d0ed31365ad5b875 .navbar.jsx-d0ed31365ad5b875 .navbar-nav.jsx-d0ed31365ad5b875 .nav-item.active.jsx-d0ed31365ad5b875 a.jsx-d0ed31365ad5b875{color:var(--optional-color)}.navbar-box-style.jsx-d0ed31365ad5b875 .main-navbar.jsx-d0ed31365ad5b875 .navbar.jsx-d0ed31365ad5b875 .navbar-nav.jsx-d0ed31365ad5b875 .nav-item.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 a.jsx-d0ed31365ad5b875{color:var(--paragraph-color)}.navbar-box-style.jsx-d0ed31365ad5b875 .main-navbar.jsx-d0ed31365ad5b875 .navbar.jsx-d0ed31365ad5b875 .navbar-nav.jsx-d0ed31365ad5b875 .nav-item.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 a.jsx-d0ed31365ad5b875::before{background-color:var(--optional-color)}.navbar-box-style.jsx-d0ed31365ad5b875 .main-navbar.jsx-d0ed31365ad5b875 .navbar.jsx-d0ed31365ad5b875 .navbar-nav.jsx-d0ed31365ad5b875 .nav-item.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 a.jsx-d0ed31365ad5b875:hover,.navbar-box-style.jsx-d0ed31365ad5b875 .main-navbar.jsx-d0ed31365ad5b875 .navbar.jsx-d0ed31365ad5b875 .navbar-nav.jsx-d0ed31365ad5b875 .nav-item.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 a.jsx-d0ed31365ad5b875:focus,.navbar-box-style.jsx-d0ed31365ad5b875 .main-navbar.jsx-d0ed31365ad5b875 .navbar.jsx-d0ed31365ad5b875 .navbar-nav.jsx-d0ed31365ad5b875 .nav-item.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 a.active.jsx-d0ed31365ad5b875{color:var(--optional-color)}.navbar-box-style.jsx-d0ed31365ad5b875 .main-navbar.jsx-d0ed31365ad5b875 .navbar.jsx-d0ed31365ad5b875 .navbar-nav.jsx-d0ed31365ad5b875 .nav-item.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 a.jsx-d0ed31365ad5b875{color:var(--paragraph-color)}.navbar-box-style.jsx-d0ed31365ad5b875 .main-navbar.jsx-d0ed31365ad5b875 .navbar.jsx-d0ed31365ad5b875 .navbar-nav.jsx-d0ed31365ad5b875 .nav-item.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 a.jsx-d0ed31365ad5b875:hover,.navbar-box-style.jsx-d0ed31365ad5b875 .main-navbar.jsx-d0ed31365ad5b875 .navbar.jsx-d0ed31365ad5b875 .navbar-nav.jsx-d0ed31365ad5b875 .nav-item.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 a.jsx-d0ed31365ad5b875:focus,.navbar-box-style.jsx-d0ed31365ad5b875 .main-navbar.jsx-d0ed31365ad5b875 .navbar.jsx-d0ed31365ad5b875 .navbar-nav.jsx-d0ed31365ad5b875 .nav-item.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 a.active.jsx-d0ed31365ad5b875{color:var(--optional-color)}.navbar-box-style.jsx-d0ed31365ad5b875 .main-navbar.jsx-d0ed31365ad5b875 .navbar.jsx-d0ed31365ad5b875 .navbar-nav.jsx-d0ed31365ad5b875 .nav-item.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 a.jsx-d0ed31365ad5b875{color:var(--paragraph-color)}.navbar-box-style.jsx-d0ed31365ad5b875 .main-navbar.jsx-d0ed31365ad5b875 .navbar.jsx-d0ed31365ad5b875 .navbar-nav.jsx-d0ed31365ad5b875 .nav-item.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 a.jsx-d0ed31365ad5b875:hover,.navbar-box-style.jsx-d0ed31365ad5b875 .main-navbar.jsx-d0ed31365ad5b875 .navbar.jsx-d0ed31365ad5b875 .navbar-nav.jsx-d0ed31365ad5b875 .nav-item.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 a.jsx-d0ed31365ad5b875:focus,.navbar-box-style.jsx-d0ed31365ad5b875 .main-navbar.jsx-d0ed31365ad5b875 .navbar.jsx-d0ed31365ad5b875 .navbar-nav.jsx-d0ed31365ad5b875 .nav-item.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 a.active.jsx-d0ed31365ad5b875{color:var(--optional-color)}.navbar-box-style.jsx-d0ed31365ad5b875 .main-navbar.jsx-d0ed31365ad5b875 .navbar.jsx-d0ed31365ad5b875 .navbar-nav.jsx-d0ed31365ad5b875 .nav-item.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 a.jsx-d0ed31365ad5b875{color:var(--paragraph-color)}.navbar-box-style.jsx-d0ed31365ad5b875 .main-navbar.jsx-d0ed31365ad5b875 .navbar.jsx-d0ed31365ad5b875 .navbar-nav.jsx-d0ed31365ad5b875 .nav-item.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 a.jsx-d0ed31365ad5b875:hover,.navbar-box-style.jsx-d0ed31365ad5b875 .main-navbar.jsx-d0ed31365ad5b875 .navbar.jsx-d0ed31365ad5b875 .navbar-nav.jsx-d0ed31365ad5b875 .nav-item.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 a.jsx-d0ed31365ad5b875:focus,.navbar-box-style.jsx-d0ed31365ad5b875 .main-navbar.jsx-d0ed31365ad5b875 .navbar.jsx-d0ed31365ad5b875 .navbar-nav.jsx-d0ed31365ad5b875 .nav-item.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 a.active.jsx-d0ed31365ad5b875{color:var(--optional-color)}.navbar-box-style.jsx-d0ed31365ad5b875 .main-navbar.jsx-d0ed31365ad5b875 .navbar.jsx-d0ed31365ad5b875 .navbar-nav.jsx-d0ed31365ad5b875 .nav-item.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 a.jsx-d0ed31365ad5b875{color:var(--paragraph-color)}.navbar-box-style.jsx-d0ed31365ad5b875 .main-navbar.jsx-d0ed31365ad5b875 .navbar.jsx-d0ed31365ad5b875 .navbar-nav.jsx-d0ed31365ad5b875 .nav-item.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 a.jsx-d0ed31365ad5b875:hover,.navbar-box-style.jsx-d0ed31365ad5b875 .main-navbar.jsx-d0ed31365ad5b875 .navbar.jsx-d0ed31365ad5b875 .navbar-nav.jsx-d0ed31365ad5b875 .nav-item.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 a.jsx-d0ed31365ad5b875:focus,.navbar-box-style.jsx-d0ed31365ad5b875 .main-navbar.jsx-d0ed31365ad5b875 .navbar.jsx-d0ed31365ad5b875 .navbar-nav.jsx-d0ed31365ad5b875 .nav-item.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 a.active.jsx-d0ed31365ad5b875{color:var(--optional-color)}.navbar-box-style.jsx-d0ed31365ad5b875 .main-navbar.jsx-d0ed31365ad5b875 .navbar.jsx-d0ed31365ad5b875 .navbar-nav.jsx-d0ed31365ad5b875 .nav-item.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 a.jsx-d0ed31365ad5b875{color:var(--paragraph-color)}.navbar-box-style.jsx-d0ed31365ad5b875 .main-navbar.jsx-d0ed31365ad5b875 .navbar.jsx-d0ed31365ad5b875 .navbar-nav.jsx-d0ed31365ad5b875 .nav-item.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 a.jsx-d0ed31365ad5b875:hover,.navbar-box-style.jsx-d0ed31365ad5b875 .main-navbar.jsx-d0ed31365ad5b875 .navbar.jsx-d0ed31365ad5b875 .navbar-nav.jsx-d0ed31365ad5b875 .nav-item.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 a.jsx-d0ed31365ad5b875:focus,.navbar-box-style.jsx-d0ed31365ad5b875 .main-navbar.jsx-d0ed31365ad5b875 .navbar.jsx-d0ed31365ad5b875 .navbar-nav.jsx-d0ed31365ad5b875 .nav-item.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 a.active.jsx-d0ed31365ad5b875{color:var(--optional-color)}.navbar-box-style.jsx-d0ed31365ad5b875 .main-navbar.jsx-d0ed31365ad5b875 .navbar.jsx-d0ed31365ad5b875 .navbar-nav.jsx-d0ed31365ad5b875 .nav-item.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 a.jsx-d0ed31365ad5b875{color:var(--paragraph-color)}.navbar-box-style.jsx-d0ed31365ad5b875 .main-navbar.jsx-d0ed31365ad5b875 .navbar.jsx-d0ed31365ad5b875 .navbar-nav.jsx-d0ed31365ad5b875 .nav-item.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 a.jsx-d0ed31365ad5b875:hover,.navbar-box-style.jsx-d0ed31365ad5b875 .main-navbar.jsx-d0ed31365ad5b875 .navbar.jsx-d0ed31365ad5b875 .navbar-nav.jsx-d0ed31365ad5b875 .nav-item.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 a.jsx-d0ed31365ad5b875:focus,.navbar-box-style.jsx-d0ed31365ad5b875 .main-navbar.jsx-d0ed31365ad5b875 .navbar.jsx-d0ed31365ad5b875 .navbar-nav.jsx-d0ed31365ad5b875 .nav-item.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 a.active.jsx-d0ed31365ad5b875{color:var(--optional-color)}.navbar-box-style.jsx-d0ed31365ad5b875 .main-navbar.jsx-d0ed31365ad5b875 .navbar.jsx-d0ed31365ad5b875 .navbar-nav.jsx-d0ed31365ad5b875 .nav-item.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.active.jsx-d0ed31365ad5b875 a.jsx-d0ed31365ad5b875{color:var(--optional-color)}.navbar-box-style.jsx-d0ed31365ad5b875 .main-navbar.jsx-d0ed31365ad5b875 .navbar.jsx-d0ed31365ad5b875 .navbar-nav.jsx-d0ed31365ad5b875 .nav-item.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.active.jsx-d0ed31365ad5b875 a.jsx-d0ed31365ad5b875{color:var(--optional-color)}.navbar-box-style.jsx-d0ed31365ad5b875 .main-navbar.jsx-d0ed31365ad5b875 .navbar.jsx-d0ed31365ad5b875 .navbar-nav.jsx-d0ed31365ad5b875 .nav-item.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.active.jsx-d0ed31365ad5b875 a.jsx-d0ed31365ad5b875{color:var(--optional-color)}.navbar-box-style.jsx-d0ed31365ad5b875 .main-navbar.jsx-d0ed31365ad5b875 .navbar.jsx-d0ed31365ad5b875 .navbar-nav.jsx-d0ed31365ad5b875 .nav-item.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.active.jsx-d0ed31365ad5b875 a.jsx-d0ed31365ad5b875{color:var(--optional-color)}.navbar-box-style.jsx-d0ed31365ad5b875 .main-navbar.jsx-d0ed31365ad5b875 .navbar.jsx-d0ed31365ad5b875 .navbar-nav.jsx-d0ed31365ad5b875 .nav-item.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.active.jsx-d0ed31365ad5b875 a.jsx-d0ed31365ad5b875{color:var(--optional-color)}.navbar-box-style.jsx-d0ed31365ad5b875 .main-navbar.jsx-d0ed31365ad5b875 .navbar.jsx-d0ed31365ad5b875 .navbar-nav.jsx-d0ed31365ad5b875 .nav-item.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.active.jsx-d0ed31365ad5b875 a.jsx-d0ed31365ad5b875{color:var(--optional-color)}.navbar-box-color.jsx-d0ed31365ad5b875 .main-navbar.jsx-d0ed31365ad5b875{background-color:#f4f8fc}.navbar-area.is-sticky.jsx-d0ed31365ad5b875{position:fixed;top:0;left:0;width:100%;z-index:999;background:var(--white-color);-webkit-box-shadow:0 0 1.25rem rgba(108,118,134,.1);-moz-box-shadow:0 0 1.25rem rgba(108,118,134,.1);box-shadow:0 0 1.25rem rgba(108,118,134,.1);-webkit-transition:var(--transition);-moz-transition:var(--transition);-o-transition:var(--transition);transition:var(--transition)}.navbar-area.is-sticky.navbar-box-style.jsx-d0ed31365ad5b875 .main-navbar.jsx-d0ed31365ad5b875{padding:10px 0}.navbar-area.is-sticky.navbar-box-style.jsx-d0ed31365ad5b875 .main-navbar.jsx-d0ed31365ad5b875 .navbar.jsx-d0ed31365ad5b875{padding:0}.navbar-area.is-sticky.navbar-box-color.jsx-d0ed31365ad5b875 .main-navbar.jsx-d0ed31365ad5b875{background-color:var(--white-color)}.main-header-area.jsx-d0ed31365ad5b875{position:absolute;width:100%;z-index:9}{}.navbar-toggler.jsx-d0ed31365ad5b875{border:none;-webkit-border-radius:0;-moz-border-radius:0;border-radius:0;padding:0}.navbar-toggler.jsx-d0ed31365ad5b875:focus{-webkit-box-shadow:none;-moz-box-shadow:none;box-shadow:none}.navbar-toggler.jsx-d0ed31365ad5b875 .icon-bar.jsx-d0ed31365ad5b875{width:35px;-webkit-transition:all.3s;-moz-transition:all.3s;-o-transition:all.3s;transition:all.3s;background:#2e2f46;height:4px;display:block;-webkit-border-radius:3px;-moz-border-radius:3px;border-radius:3px}.navbar-toggler.jsx-d0ed31365ad5b875 .top-bar.jsx-d0ed31365ad5b875{-webkit-transform:rotate(45deg);-moz-transform:rotate(45deg);-ms-transform:rotate(45deg);-o-transform:rotate(45deg);transform:rotate(45deg);-webkit-transform-origin:10%10%;-moz-transform-origin:10%10%;-ms-transform-origin:10%10%;-o-transform-origin:10%10%;transform-origin:10%10%;left:4px;position:relative}.navbar-toggler.jsx-d0ed31365ad5b875 .middle-bar.jsx-d0ed31365ad5b875{opacity:0;margin:5px 0}.navbar-toggler.jsx-d0ed31365ad5b875 .bottom-bar.jsx-d0ed31365ad5b875{-webkit-transform:rotate(-45deg);-moz-transform:rotate(-45deg);-ms-transform:rotate(-45deg);-o-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:10%90%;-moz-transform-origin:10%90%;-ms-transform-origin:10%90%;-o-transform-origin:10%90%;transform-origin:10%90%;left:4px;position:relative}.navbar-toggler.collapsed.jsx-d0ed31365ad5b875 .top-bar.jsx-d0ed31365ad5b875{-webkit-transform:rotate(0);-moz-transform:rotate(0);-ms-transform:rotate(0);-o-transform:rotate(0);transform:rotate(0);left:0}.navbar-toggler.collapsed.jsx-d0ed31365ad5b875 .middle-bar.jsx-d0ed31365ad5b875{opacity:1}.navbar-toggler.collapsed.jsx-d0ed31365ad5b875 .bottom-bar.jsx-d0ed31365ad5b875{-webkit-transform:rotate(0);-moz-transform:rotate(0);-ms-transform:rotate(0);-o-transform:rotate(0);transform:rotate(0);left:0}{}.search-overlay.jsx-d0ed31365ad5b875{position:fixed;top:0;right:0;bottom:0;left:0;z-index:99999;opacity:0;visibility:hidden;-webkit-transition:all.3s ease-in-out;-moz-transition:all.3s ease-in-out;-o-transition:all.3s ease-in-out;transition:all.3s ease-in-out;overflow:hidden}.search-overlay.jsx-d0ed31365ad5b875 .search-overlay-layer.jsx-d0ed31365ad5b875{position:absolute;top:0;right:0;bottom:0;z-index:1;-webkit-transform:translatex(100%);-moz-transform:translatex(100%);-ms-transform:translatex(100%);-o-transform:translatex(100%);transform:translatex(100%)}.search-overlay.jsx-d0ed31365ad5b875 .search-overlay-layer.jsx-d0ed31365ad5b875:nth-child(1){left:0;background-color:rgba(0,0,0,.5);-webkit-transition:all.3s ease-in-out 0s;-moz-transition:all.3s ease-in-out 0s;-o-transition:all.3s ease-in-out 0s;transition:all.3s ease-in-out 0s}.search-overlay.jsx-d0ed31365ad5b875 .search-overlay-layer.jsx-d0ed31365ad5b875:nth-child(2){left:0;background-color:rgba(0,0,0,.4);-webkit-transition:all.3s ease-in-out.3s;-moz-transition:all.3s ease-in-out.3s;-o-transition:all.3s ease-in-out.3s;transition:all.3s ease-in-out.3s}.search-overlay.jsx-d0ed31365ad5b875 .search-overlay-layer.jsx-d0ed31365ad5b875:nth-child(3){left:0;background-color:rgba(0,0,0,.7);-webkit-transition:all.9s ease-in-out.6s;-moz-transition:all.9s ease-in-out.6s;-o-transition:all.9s ease-in-out.6s;transition:all.9s ease-in-out.6s}.search-overlay.jsx-d0ed31365ad5b875 .search-overlay-close.jsx-d0ed31365ad5b875{position:absolute;bottom:40px;right:40px;width:50px;z-index:2;text-align:center;cursor:pointer;padding:10px;-webkit-transition:all.9s ease-in-out 1.5s;-moz-transition:all.9s ease-in-out 1.5s;-o-transition:all.9s ease-in-out 1.5s;transition:all.9s ease-in-out 1.5s;opacity:0;visibility:hidden}.search-overlay.jsx-d0ed31365ad5b875 .search-overlay-close.jsx-d0ed31365ad5b875 .search-overlay-close-line.jsx-d0ed31365ad5b875{width:100%;height:3px;float:left;margin-bottom:5px;background-color:#fff;-webkit-transition:all 500ms ease;-moz-transition:all 500ms ease;-o-transition:all 500ms ease;transition:all 500ms ease}.search-overlay.jsx-d0ed31365ad5b875 .search-overlay-close.jsx-d0ed31365ad5b875 .search-overlay-close-line.jsx-d0ed31365ad5b875:nth-child(1){-webkit-transform:rotate(45deg);-moz-transform:rotate(45deg);-ms-transform:rotate(45deg);-o-transform:rotate(45deg);transform:rotate(45deg)}.search-overlay.jsx-d0ed31365ad5b875 .search-overlay-close.jsx-d0ed31365ad5b875 .search-overlay-close-line.jsx-d0ed31365ad5b875:nth-child(2){margin-top:-7px;-webkit-transform:rotate(-45deg);-moz-transform:rotate(-45deg);-ms-transform:rotate(-45deg);-o-transform:rotate(-45deg);transform:rotate(-45deg)}.search-overlay.jsx-d0ed31365ad5b875 .search-overlay-close.jsx-d0ed31365ad5b875:hover .search-overlay-close-line.jsx-d0ed31365ad5b875{background:var(--optional-color);-webkit-transform:rotate(180deg);-moz-transform:rotate(180deg);-ms-transform:rotate(180deg);-o-transform:rotate(180deg);transform:rotate(180deg)}.search-overlay.jsx-d0ed31365ad5b875 .search-overlay-form.jsx-d0ed31365ad5b875{-webkit-transition:all.9s ease-in-out 1.4s;-moz-transition:all.9s ease-in-out 1.4s;-o-transition:all.9s ease-in-out 1.4s;transition:all.9s ease-in-out 1.4s;opacity:0;visibility:hidden;position:absolute;left:50%;top:50%;-webkit-transform:translatey(-50%)translatex(-50%);-moz-transform:translatey(-50%)translatex(-50%);-ms-transform:translatey(-50%)translatex(-50%);-o-transform:translatey(-50%)translatex(-50%);transform:translatey(-50%)translatex(-50%);z-index:2;max-width:500px;width:500px}.search-overlay.jsx-d0ed31365ad5b875 .search-overlay-form.jsx-d0ed31365ad5b875 form.jsx-d0ed31365ad5b875{position:relative}.search-overlay.jsx-d0ed31365ad5b875 .search-overlay-form.jsx-d0ed31365ad5b875 form.jsx-d0ed31365ad5b875 .input-search.jsx-d0ed31365ad5b875{display:block;width:100%;height:60px;border:none;-webkit-border-radius:30px;-moz-border-radius:30px;border-radius:30px;color:var(--black-color);padding:3px 0 0 25px}.search-overlay.jsx-d0ed31365ad5b875 .search-overlay-form.jsx-d0ed31365ad5b875 form.jsx-d0ed31365ad5b875 .input-search.jsx-d0ed31365ad5b875::-webkit-input-placeholder{-webkit-transition:var(--transition);-moz-transition:var(--transition);-o-transition:var(--transition);transition:var(--transition);letter-spacing:.5px;color:var(--blackColor)}.search-overlay.jsx-d0ed31365ad5b875 .search-overlay-form.jsx-d0ed31365ad5b875 form.jsx-d0ed31365ad5b875 .input-search.jsx-d0ed31365ad5b875:-ms-input-placeholder{-webkit-transition:var(--transition);-moz-transition:var(--transition);-o-transition:var(--transition);transition:var(--transition);letter-spacing:.5px;color:var(--blackColor)}.search-overlay.jsx-d0ed31365ad5b875 .search-overlay-form.jsx-d0ed31365ad5b875 form.jsx-d0ed31365ad5b875 .input-search.jsx-d0ed31365ad5b875::-ms-input-placeholder{-webkit-transition:var(--transition);-moz-transition:var(--transition);-o-transition:var(--transition);transition:var(--transition);letter-spacing:.5px;color:var(--blackColor)}.search-overlay.jsx-d0ed31365ad5b875 .search-overlay-form.jsx-d0ed31365ad5b875 form.jsx-d0ed31365ad5b875 .input-search.jsx-d0ed31365ad5b875::-webkit-input-placeholder{-webkit-transition:var(--transition);transition:var(--transition);letter-spacing:.5px;color:var(--blackColor)}.search-overlay.jsx-d0ed31365ad5b875 .search-overlay-form.jsx-d0ed31365ad5b875 form.jsx-d0ed31365ad5b875 .input-search.jsx-d0ed31365ad5b875:-moz-placeholder{-webkit-transition:var(--transition);-moz-transition:var(--transition);transition:var(--transition);letter-spacing:.5px;color:var(--blackColor)}.search-overlay.jsx-d0ed31365ad5b875 .search-overlay-form.jsx-d0ed31365ad5b875 form.jsx-d0ed31365ad5b875 .input-search.jsx-d0ed31365ad5b875::-moz-placeholder{-webkit-transition:var(--transition);-moz-transition:var(--transition);transition:var(--transition);letter-spacing:.5px;color:var(--blackColor)}.search-overlay.jsx-d0ed31365ad5b875 .search-overlay-form.jsx-d0ed31365ad5b875 form.jsx-d0ed31365ad5b875 .input-search.jsx-d0ed31365ad5b875:-ms-input-placeholder{-webkit-transition:var(--transition);transition:var(--transition);letter-spacing:.5px;color:var(--blackColor)}.search-overlay.jsx-d0ed31365ad5b875 .search-overlay-form.jsx-d0ed31365ad5b875 form.jsx-d0ed31365ad5b875 .input-search.jsx-d0ed31365ad5b875::-ms-input-placeholder{-webkit-transition:var(--transition);transition:var(--transition);letter-spacing:.5px;color:var(--blackColor)}.search-overlay.jsx-d0ed31365ad5b875 .search-overlay-form.jsx-d0ed31365ad5b875 form.jsx-d0ed31365ad5b875 .input-search.jsx-d0ed31365ad5b875::placeholder{-webkit-transition:var(--transition);-moz-transition:var(--transition);-o-transition:var(--transition);transition:var(--transition);letter-spacing:.5px;color:var(--blackColor)}.search-overlay.jsx-d0ed31365ad5b875 .search-overlay-form.jsx-d0ed31365ad5b875 form.jsx-d0ed31365ad5b875 .input-search.jsx-d0ed31365ad5b875:focus{outline:0}.search-overlay.jsx-d0ed31365ad5b875 .search-overlay-form.jsx-d0ed31365ad5b875 form.jsx-d0ed31365ad5b875 .input-search.jsx-d0ed31365ad5b875:focus::-webkit-input-placeholder{color:transparent}.search-overlay.jsx-d0ed31365ad5b875 .search-overlay-form.jsx-d0ed31365ad5b875 form.jsx-d0ed31365ad5b875 .input-search.jsx-d0ed31365ad5b875:focus:-ms-input-placeholder{color:transparent}.search-overlay.jsx-d0ed31365ad5b875 .search-overlay-form.jsx-d0ed31365ad5b875 form.jsx-d0ed31365ad5b875 .input-search.jsx-d0ed31365ad5b875:focus::-ms-input-placeholder{color:transparent}.search-overlay.jsx-d0ed31365ad5b875 .search-overlay-form.jsx-d0ed31365ad5b875 form.jsx-d0ed31365ad5b875 .input-search.jsx-d0ed31365ad5b875:focus:-moz-placeholder{color:transparent}.search-overlay.jsx-d0ed31365ad5b875 .search-overlay-form.jsx-d0ed31365ad5b875 form.jsx-d0ed31365ad5b875 .input-search.jsx-d0ed31365ad5b875:focus::-moz-placeholder{color:transparent}.search-overlay.jsx-d0ed31365ad5b875 .search-overlay-form.jsx-d0ed31365ad5b875 form.jsx-d0ed31365ad5b875 .input-search.jsx-d0ed31365ad5b875:focus::placeholder{color:transparent}.search-overlay.jsx-d0ed31365ad5b875 .search-overlay-form.jsx-d0ed31365ad5b875 form.jsx-d0ed31365ad5b875 button.jsx-d0ed31365ad5b875{position:absolute;right:5px;top:5px;width:50px;color:var(--white-color);height:50px;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;background-color:var(--main-color);-webkit-transition:var(--transition);-moz-transition:var(--transition);-o-transition:var(--transition);transition:var(--transition);border:none;font-size:20px;line-height:50px}.search-overlay.jsx-d0ed31365ad5b875 .search-overlay-form.jsx-d0ed31365ad5b875 form.jsx-d0ed31365ad5b875 button.jsx-d0ed31365ad5b875:hover{background-color:var(--black-color);color:var(--white-color)}.search-overlay.search-overlay-active.search-overlay.jsx-d0ed31365ad5b875{opacity:1;visibility:visible}.search-overlay.search-overlay-active.search-overlay.jsx-d0ed31365ad5b875 .search-overlay-layer.jsx-d0ed31365ad5b875{-webkit-transform:translatex(0);-moz-transform:translatex(0);-ms-transform:translatex(0);-o-transform:translatex(0);transform:translatex(0)}.search-overlay.search-overlay-active.search-overlay.jsx-d0ed31365ad5b875 .search-overlay-close.jsx-d0ed31365ad5b875{opacity:1;visibility:visible}.search-overlay.search-overlay-active.search-overlay.jsx-d0ed31365ad5b875 .search-overlay-form.jsx-d0ed31365ad5b875{opacity:1;visibility:visible}{}.modal.right.jsx-d0ed31365ad5b875{left:auto;right:-100%}.modal.right.jsx-d0ed31365ad5b875 .modal-dialog.jsx-d0ed31365ad5b875{position:fixed;margin:auto;width:420px;height:100%;-webkit-transform:translate3d(0%,0,0);-moz-transform:translate3d(0%,0,0);transform:translate3d(0%,0,0)}.modal.right.jsx-d0ed31365ad5b875 .modal-content.jsx-d0ed31365ad5b875{height:100%;overflow-y:auto;background-color:var(--white-color);border:none;-webkit-border-radius:0;-moz-border-radius:0;border-radius:0}.modal.right.jsx-d0ed31365ad5b875 .modal-content.jsx-d0ed31365ad5b875 button.close.jsx-d0ed31365ad5b875{float:unset;position:absolute;right:20px;top:30px;background-color:transparent;color:var(--black-color);z-index:2;opacity:1;border:none;text-shadow:unset;-webkit-box-shadow:unset;-moz-box-shadow:unset;box-shadow:unset;font-size:25px;-webkit-transition:var(--transition);-moz-transition:var(--transition);-o-transition:var(--transition);transition:var(--transition)}.modal.right.jsx-d0ed31365ad5b875 .modal-content.jsx-d0ed31365ad5b875 button.close.jsx-d0ed31365ad5b875:hover{color:red}.modal.right.jsx-d0ed31365ad5b875 .modal-dialog.jsx-d0ed31365ad5b875{right:-100%;-webkit-transition:opacity.3s linear,right.3s ease-out;-moz-transition:opacity.3s linear,right.3s ease-out;-o-transition:opacity.3s linear,right.3s ease-out;transition:opacity.3s linear,right.3s ease-out}.modal.right.show.jsx-d0ed31365ad5b875{right:0}.modal.right.show.jsx-d0ed31365ad5b875 .modal-dialog.jsx-d0ed31365ad5b875{right:0}.sidebarModal.modal.jsx-d0ed31365ad5b875{background-color:rgba(0,0,0,.3);display:block;opacity:1}.sidebarModal.modal.jsx-d0ed31365ad5b875 .modal-body.jsx-d0ed31365ad5b875{padding:35px 30px 45px}.sidebarModal.modal.jsx-d0ed31365ad5b875 .modal-body.jsx-d0ed31365ad5b875 .sidebar-content.jsx-d0ed31365ad5b875{margin-top:35px}.sidebarModal.modal.jsx-d0ed31365ad5b875 .modal-body.jsx-d0ed31365ad5b875 .sidebar-content.jsx-d0ed31365ad5b875 h3.jsx-d0ed31365ad5b875{font-size:22px;margin-bottom:15px}.sidebarModal.modal.jsx-d0ed31365ad5b875 .modal-body.jsx-d0ed31365ad5b875 .sidebar-content.jsx-d0ed31365ad5b875 .sidebar-btn.jsx-d0ed31365ad5b875{margin-top:25px}.sidebarModal.modal.jsx-d0ed31365ad5b875 .modal-body.jsx-d0ed31365ad5b875 .sidebar-contact-info.jsx-d0ed31365ad5b875{margin-top:30px}.sidebarModal.modal.jsx-d0ed31365ad5b875 .modal-body.jsx-d0ed31365ad5b875 .sidebar-contact-info.jsx-d0ed31365ad5b875 h3.jsx-d0ed31365ad5b875{font-size:22px;margin-bottom:0}.sidebarModal.modal.jsx-d0ed31365ad5b875 .modal-body.jsx-d0ed31365ad5b875 .sidebar-contact-info.jsx-d0ed31365ad5b875 .info-list.jsx-d0ed31365ad5b875{padding-left:0;margin-top:30px;margin-bottom:0}.sidebarModal.modal.jsx-d0ed31365ad5b875 .modal-body.jsx-d0ed31365ad5b875 .sidebar-contact-info.jsx-d0ed31365ad5b875 .info-list.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875{list-style-type:none;font-size:14px;color:var(--paragraph-color);font-weight:500;margin-bottom:20px;position:relative;padding-left:22px}.sidebarModal.modal.jsx-d0ed31365ad5b875 .modal-body.jsx-d0ed31365ad5b875 .sidebar-contact-info.jsx-d0ed31365ad5b875 .info-list.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875:last-child{margin-bottom:0}.sidebarModal.modal.jsx-d0ed31365ad5b875 .modal-body.jsx-d0ed31365ad5b875 .sidebar-contact-info.jsx-d0ed31365ad5b875 .info-list.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 a.jsx-d0ed31365ad5b875{color:var(--paragraph-color)}.sidebarModal.modal.jsx-d0ed31365ad5b875 .modal-body.jsx-d0ed31365ad5b875 .sidebar-contact-info.jsx-d0ed31365ad5b875 .info-list.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 a.jsx-d0ed31365ad5b875:hover{color:var(--main-color)}.sidebarModal.modal.jsx-d0ed31365ad5b875 .modal-body.jsx-d0ed31365ad5b875 .sidebar-contact-info.jsx-d0ed31365ad5b875 .info-list.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 i.jsx-d0ed31365ad5b875{position:absolute;left:0;top:2px;font-size:var(--font-size);color:var(--main-color)}.sidebarModal.modal.jsx-d0ed31365ad5b875 .modal-body.jsx-d0ed31365ad5b875 .sidebar-contact-info.jsx-d0ed31365ad5b875 .info-list.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .ri-mail-line.jsx-d0ed31365ad5b875{color:#ff414b}.sidebarModal.modal.jsx-d0ed31365ad5b875 .modal-body.jsx-d0ed31365ad5b875 .sidebar-contact-info.jsx-d0ed31365ad5b875 .info-list.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .ri-map-pin-line.jsx-d0ed31365ad5b875{color:#36cc72}.sidebarModal.modal.jsx-d0ed31365ad5b875 .modal-body.jsx-d0ed31365ad5b875 .sidebar-social-list.jsx-d0ed31365ad5b875{list-style-type:none;padding-left:0;margin-bottom:0;margin-top:30px}.sidebarModal.modal.jsx-d0ed31365ad5b875 .modal-body.jsx-d0ed31365ad5b875 .sidebar-social-list.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875{display:inline-block;margin-right:8px}.sidebarModal.modal.jsx-d0ed31365ad5b875 .modal-body.jsx-d0ed31365ad5b875 .sidebar-social-list.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875:last-child{margin-right:0}.sidebarModal.modal.jsx-d0ed31365ad5b875 .modal-body.jsx-d0ed31365ad5b875 .sidebar-social-list.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 i.jsx-d0ed31365ad5b875{display:inline-block;height:35px;width:35px;line-height:35px;background-color:var(--main-color);text-align:center;color:var(--white-color);font-size:var(--font-size);-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;-webkit-transition:var(--transition);-moz-transition:var(--transition);-o-transition:var(--transition);transition:var(--transition)}.sidebarModal.modal.jsx-d0ed31365ad5b875 .modal-body.jsx-d0ed31365ad5b875 .sidebar-social-list.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 i.jsx-d0ed31365ad5b875:hover{-webkit-transform:translatey(-5px);-moz-transform:translatey(-5px);-ms-transform:translatey(-5px);-o-transform:translatey(-5px);transform:translatey(-5px);background-color:var(--optional-color);color:var(--white-color)}@media only screen and (max-width:1199px){.navbar-area.jsx-d0ed31365ad5b875{background-color:var(--white-color);padding-top:15px;padding-bottom:15px}}{}@media only screen and (max-width:767px){.modal.right.jsx-d0ed31365ad5b875 .modal-dialog.jsx-d0ed31365ad5b875{width:310px}}@media only screen and (max-width:575px){.search-overlay.jsx-d0ed31365ad5b875 .search-overlay-form.jsx-d0ed31365ad5b875{max-width:300px;width:300px}}@media only screen and (min-width:768px)and (max-width:991px){}@media only screen and (min-width:992px)and (max-width:1199px){{}.navbar-area.jsx-d0ed31365ad5b875{padding-top:10px;padding-bottom:10px}.navbar-area.is-sticky.navbar-box-style.jsx-d0ed31365ad5b875 .main-navbar.jsx-d0ed31365ad5b875{padding:0}.main-navbar.jsx-d0ed31365ad5b875{padding:0}.main-navbar.jsx-d0ed31365ad5b875 .navbar.jsx-d0ed31365ad5b875 .navbar-nav.jsx-d0ed31365ad5b875 .nav-item.jsx-d0ed31365ad5b875{margin-left:9px;margin-right:9px}.main-navbar.jsx-d0ed31365ad5b875 .navbar.jsx-d0ed31365ad5b875 .navbar-nav.jsx-d0ed31365ad5b875 .nav-item.jsx-d0ed31365ad5b875 a.jsx-d0ed31365ad5b875{font-size:15px;padding-top:20px;padding-bottom:20px}.main-navbar.jsx-d0ed31365ad5b875 .navbar.jsx-d0ed31365ad5b875 .navbar-nav.jsx-d0ed31365ad5b875 .nav-item.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875{width:250px}.main-navbar.jsx-d0ed31365ad5b875 .navbar.jsx-d0ed31365ad5b875 .navbar-nav.jsx-d0ed31365ad5b875 .nav-item.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 a.jsx-d0ed31365ad5b875{font-size:14px;padding:8px 20px}.main-navbar.jsx-d0ed31365ad5b875 .navbar.jsx-d0ed31365ad5b875 .others-options.jsx-d0ed31365ad5b875 .option-item.jsx-d0ed31365ad5b875{margin-right:15px}.main-navbar.jsx-d0ed31365ad5b875 .navbar.jsx-d0ed31365ad5b875 .others-options.jsx-d0ed31365ad5b875 .option-item.jsx-d0ed31365ad5b875 .default-btn.jsx-d0ed31365ad5b875{padding:10px 40px 10px 20px;font-size:13px}.main-navbar.jsx-d0ed31365ad5b875 .navbar.jsx-d0ed31365ad5b875 .others-options.jsx-d0ed31365ad5b875 .option-item.jsx-d0ed31365ad5b875 .default-btn.jsx-d0ed31365ad5b875 i.jsx-d0ed31365ad5b875{right:20px}.navbar-box-style.jsx-d0ed31365ad5b875 .main-navbar.jsx-d0ed31365ad5b875 .navbar.jsx-d0ed31365ad5b875{padding:0}}@media only screen and (max-width:991px){{}.navbar-area.jsx-d0ed31365ad5b875{-webkit-box-shadow:0 0 10px#ddd;-moz-box-shadow:0 0 10px#ddd;box-shadow:0 0 10px#ddd}.navbar-area.is-sticky.navbar-box-style.jsx-d0ed31365ad5b875 .main-navbar.jsx-d0ed31365ad5b875{padding:0}.main-navbar.jsx-d0ed31365ad5b875{padding:0}.main-navbar.jsx-d0ed31365ad5b875 .navbar.jsx-d0ed31365ad5b875 .navbar-nav.jsx-d0ed31365ad5b875{border-top:1px solid#eee;overflow-y:auto;max-height:60vh;margin-top:10px!important;padding-right:15px;padding-top:15px}.main-navbar.jsx-d0ed31365ad5b875 .navbar.jsx-d0ed31365ad5b875 .navbar-nav.jsx-d0ed31365ad5b875 .nav-item.jsx-d0ed31365ad5b875{margin:0}.main-navbar.jsx-d0ed31365ad5b875 .navbar.jsx-d0ed31365ad5b875 .navbar-nav.jsx-d0ed31365ad5b875 .nav-item.jsx-d0ed31365ad5b875 a.jsx-d0ed31365ad5b875{padding-top:8px;font-size:15px;padding-bottom:8px}.main-navbar.jsx-d0ed31365ad5b875 .navbar.jsx-d0ed31365ad5b875 .navbar-nav.jsx-d0ed31365ad5b875 .nav-item.jsx-d0ed31365ad5b875 a.jsx-d0ed31365ad5b875 i.jsx-d0ed31365ad5b875{display:none}.main-navbar.jsx-d0ed31365ad5b875 .navbar.jsx-d0ed31365ad5b875 .navbar-nav.jsx-d0ed31365ad5b875 .nav-item.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875{position:relative;opacity:1;visibility:visible;width:100%;margin-top:10px;top:0!important;border:1px solid#eee;margin-top:0;margin-bottom:10px}.main-navbar.jsx-d0ed31365ad5b875 .navbar.jsx-d0ed31365ad5b875 .navbar-nav.jsx-d0ed31365ad5b875 .nav-item.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 a.jsx-d0ed31365ad5b875{padding:8px 15px;font-size:14px}.main-navbar.jsx-d0ed31365ad5b875 .navbar.jsx-d0ed31365ad5b875 .navbar-nav.jsx-d0ed31365ad5b875 .nav-item.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875 li.jsx-d0ed31365ad5b875 .dropdown-menu.jsx-d0ed31365ad5b875{position:relative;opacity:1;visibility:visible;width:90%;margin-top:10px;top:0!important;border:1px solid#eee;margin-top:0;margin-bottom:10px;left:15px}.main-navbar.jsx-d0ed31365ad5b875 .navbar.jsx-d0ed31365ad5b875 .others-options.jsx-d0ed31365ad5b875{position:absolute;right:45px;top:5px}.main-navbar.jsx-d0ed31365ad5b875 .navbar.jsx-d0ed31365ad5b875 .others-options.jsx-d0ed31365ad5b875 .option-item.jsx-d0ed31365ad5b875{margin-right:10px}.main-navbar.jsx-d0ed31365ad5b875 .navbar.jsx-d0ed31365ad5b875 .others-options.jsx-d0ed31365ad5b875 .option-item.jsx-d0ed31365ad5b875 .default-btn.jsx-d0ed31365ad5b875{padding:5px 8px;font-size:10px;position:relative;top:-3px}.main-navbar.jsx-d0ed31365ad5b875 .navbar.jsx-d0ed31365ad5b875 .others-options.jsx-d0ed31365ad5b875 .option-item.jsx-d0ed31365ad5b875 .default-btn.jsx-d0ed31365ad5b875 i.jsx-d0ed31365ad5b875{display:none}.navbar-box-style.jsx-d0ed31365ad5b875 .main-navbar.jsx-d0ed31365ad5b875 .navbar.jsx-d0ed31365ad5b875{padding:0}}@media only screen and (min-width:1200px)and (max-width:1399px){.main-navbar.jsx-d0ed31365ad5b875 .navbar.jsx-d0ed31365ad5b875 .navbar-nav.jsx-d0ed31365ad5b875 .nav-item.jsx-d0ed31365ad5b875{margin-left:12px;margin-right:12px}.main-navbar.jsx-d0ed31365ad5b875 .navbar.jsx-d0ed31365ad5b875 .others-options.jsx-d0ed31365ad5b875 .option-item.jsx-d0ed31365ad5b875{margin-right:20px}}'
            })
        ]
    });
};
/* harmony default export */ const _App_NavbarTwo = (NavbarTwo);


/***/ })

};
;