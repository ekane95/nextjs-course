"use strict";
(() => {
var exports = {};
exports.id = 822;
exports.ids = [822];
exports.modules = {

/***/ 348:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(941);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_2__]);
swr__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



function LastSalesPage(props) {
    const [sales, setSales] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(props.sales);
    // const [isLoading, setIsLoading] = useState(false);
    // useSWR(<request-url>, (url) => fetch(url).then(res => res.json()))
    const { data , error  } = (0,swr__WEBPACK_IMPORTED_MODULE_2__["default"])("https://fir-next-app-b4005-default-rtdb.firebaseio.com/sales.json", (url)=>fetch(url).then((res)=>res.json()));
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (data) {
            const transformedSales = [];
            for(const key in data){
                transformedSales.push({
                    id: key,
                    username: data[key].username,
                    volume: data[key].volume
                });
            }
            setSales(transformedSales);
        }
    }, [
        data
    ]);
    // useEffect(() => {
    //     setIsLoading(true);
    //     fetch(
    //         'https://fir-next-app-b4005-default-rtdb.firebaseio.com/sales.json'
    //     ).then((response) => response.json()
    //     ).then(data => {
    //         const transformedSales = [];
    //         for (const key in data) {
    //             transformedSales.push({
    //                 id: key,
    //                 username: data[key].username,
    //                 volume: data[key].volume
    //             });
    //         }
    //         setSales(transformedSales)
    //         setIsLoading(false);
    //     });
    // }, []);
    if (error) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
            children: "Failed to load..."
        });
    }
    if (!data && !sales) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
            children: "Loading..."
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
            children: sales.map((sale)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                    children: [
                        sale.username,
                        " - $",
                        sale.volume
                    ]
                }, sale.id))
        })
    });
}
async function getStaticProps() {
    const response = await fetch("https://fir-next-app-b4005-default-rtdb.firebaseio.com/sales.json");
    const data = await response.json();
    const transformedSales = [];
    for(const key in data){
        transformedSales.push({
            id: key,
            username: data[key].username,
            volume: data[key].volume
        });
    }
    return {
        props: {
            sales: transformedSales
        },
        revalidate: 10
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LastSalesPage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 941:
/***/ ((module) => {

module.exports = import("swr");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(348));
module.exports = __webpack_exports__;

})();