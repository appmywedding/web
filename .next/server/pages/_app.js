/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./actions/auth.js":
/*!*************************!*\
  !*** ./actions/auth.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SET_USER\": () => (/* binding */ SET_USER),\n/* harmony export */   \"CLEAR_USER\": () => (/* binding */ CLEAR_USER),\n/* harmony export */   \"setUser\": () => (/* binding */ setUser),\n/* harmony export */   \"clearUser\": () => (/* binding */ clearUser)\n/* harmony export */ });\nconst SET_USER = 'SET_USER';\nconst CLEAR_USER = 'CLEAR_USER';\nconst setUser = (user)=>({\n        type: SET_USER,\n        user\n    })\n;\nconst clearUser = ()=>({\n        type: CLEAR_USER,\n        user: null\n    })\n;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hY3Rpb25zL2F1dGguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFPLEtBQUssQ0FBQ0EsUUFBUSxHQUFHLENBQVU7QUFDM0IsS0FBSyxDQUFDQyxVQUFVLEdBQUcsQ0FBWTtBQUUvQixLQUFLLENBQUNDLE9BQU8sSUFBSUMsSUFBSSxJQUFNLENBQUM7UUFBQ0MsSUFBSSxFQUFFSixRQUFRO1FBQUVHLElBQUk7SUFBQyxDQUFDOztBQUVuRCxLQUFLLENBQUNFLFNBQVMsUUFBVSxDQUFDO1FBQUNELElBQUksRUFBRUgsVUFBVTtRQUFFRSxJQUFJLEVBQUUsSUFBSTtJQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teXdlZGRpbmctd2ViLy4vYWN0aW9ucy9hdXRoLmpzPzIxMmMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IFNFVF9VU0VSID0gJ1NFVF9VU0VSJztcclxuZXhwb3J0IGNvbnN0IENMRUFSX1VTRVIgPSAnQ0xFQVJfVVNFUic7XHJcblxyXG5leHBvcnQgY29uc3Qgc2V0VXNlciA9ICh1c2VyKSA9PiAoeyB0eXBlOiBTRVRfVVNFUiwgdXNlciB9KTtcclxuXHJcbmV4cG9ydCBjb25zdCBjbGVhclVzZXIgPSAoKSA9PiAoeyB0eXBlOiBDTEVBUl9VU0VSLCB1c2VyOiBudWxsIH0pO1xyXG4iXSwibmFtZXMiOlsiU0VUX1VTRVIiLCJDTEVBUl9VU0VSIiwic2V0VXNlciIsInVzZXIiLCJ0eXBlIiwiY2xlYXJVc2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./actions/auth.js\n");

/***/ }),

/***/ "./auth.js":
/*!*****************!*\
  !*** ./auth.js ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"FirebaseProvider\": () => (/* binding */ FirebaseProvider),\n/* harmony export */   \"useAuth\": () => (/* binding */ useAuth)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./firebase */ \"./firebase.js\");\n\n\n\n\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});\nfunction FirebaseProvider({ children  }) {\n    const user = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((reducers)=>reducers.auth.user\n    );\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        (0,_firebase__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: user,\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\orels\\\\wedding\\\\web-app\\\\mywedding-web\\\\auth.js\",\n        lineNumber: 15,\n        columnNumber: 13\n    }, this);\n}\nconst useAuth = ()=>(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AuthContext)\n;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hdXRoLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBbUU7QUFDMUI7QUFDRjtBQUd2QyxLQUFLLENBQUNNLFdBQVcsaUJBQUdILG9EQUFhLENBQUMsQ0FBQyxDQUFDO0FBRTdCLFNBQVNJLGdCQUFnQixDQUFDLENBQUMsQ0FBQ0MsUUFBUSxFQUFDLENBQUMsRUFBRSxDQUFDO0lBQzVDLEtBQUssQ0FBQ0MsSUFBSSxHQUFHTCx3REFBVyxFQUFFTSxRQUFRLEdBQUtBLFFBQVEsQ0FBQ0MsSUFBSSxDQUFDRixJQUFJOztJQUV6RFIsZ0RBQVMsS0FBTyxDQUFDO1FBQ2JJLHFEQUFjLEVBQUUsQ0FBQztJQUNyQixDQUFDLENBQUMsQ0FBQztJQUVILE1BQU0sNkVBQUdDLFdBQVcsQ0FBQ00sUUFBUTtRQUFDQyxLQUFLLEVBQUVKLElBQUk7a0JBQ3BDRCxRQUFROzs7Ozs7QUFFakIsQ0FBQztBQUVNLEtBQUssQ0FBQ00sT0FBTyxPQUFTWixpREFBVSxDQUFDSSxXQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXl3ZWRkaW5nLXdlYi8uL2F1dGguanM/ZjU1ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VDb250ZXh0LCBjcmVhdGVDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IGZpcmViYXNlQ2xpZW50IGZyb20gJy4vZmlyZWJhc2UnO1xyXG5cclxuXHJcbmNvbnN0IEF1dGhDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7fSlcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBGaXJlYmFzZVByb3ZpZGVyKHsgY2hpbGRyZW4gfSkge1xyXG4gICAgY29uc3QgdXNlciA9IHVzZVNlbGVjdG9yKChyZWR1Y2VycykgPT4gcmVkdWNlcnMuYXV0aC51c2VyKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGZpcmViYXNlQ2xpZW50KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gKDxBdXRoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17dXNlcn0+XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9BdXRoQ29udGV4dC5Qcm92aWRlcj4pXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB1c2VBdXRoID0gKCkgPT4gdXNlQ29udGV4dChBdXRoQ29udGV4dCkiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZVNlbGVjdG9yIiwiZmlyZWJhc2VDbGllbnQiLCJBdXRoQ29udGV4dCIsIkZpcmViYXNlUHJvdmlkZXIiLCJjaGlsZHJlbiIsInVzZXIiLCJyZWR1Y2VycyIsImF1dGgiLCJQcm92aWRlciIsInZhbHVlIiwidXNlQXV0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./auth.js\n");

/***/ }),

/***/ "./firebase.js":
/*!*********************!*\
  !*** ./firebase.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"auth\": () => (/* binding */ auth),\n/* harmony export */   \"db\": () => (/* binding */ db),\n/* harmony export */   \"default\": () => (/* binding */ init),\n/* harmony export */   \"loginWithEmailAndPassword\": () => (/* binding */ loginWithEmailAndPassword),\n/* harmony export */   \"registerWithEmailAndPassword\": () => (/* binding */ registerWithEmailAndPassword),\n/* harmony export */   \"logout\": () => (/* binding */ logout)\n/* harmony export */ });\n/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase */ \"firebase\");\n/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_firestore__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst firebaseConfig = {\n    apiKey: 'AIzaSyDwNEwQ07GCio2bSOc5s2o6qthTzyzpO2Y',\n    authDomain: 'mywedding-3c67a.firebaseapp.com',\n    projectId: 'mywedding-3c67a',\n    storageBucket: 'mywedding-3c67a.appspot.com',\n    messagingSenderId: '429876417546',\n    appId: '1:429876417546:web:8c362874df228eab587bf3',\n    measurementId: 'G-1L461S02HG'\n};\nlet auth;\nlet db;\nfunction init() {\n    if (!(firebase__WEBPACK_IMPORTED_MODULE_0___default().apps.length)) {\n        firebase__WEBPACK_IMPORTED_MODULE_0___default().initializeApp(firebaseConfig);\n    }\n    auth = firebase_app__WEBPACK_IMPORTED_MODULE_2___default().auth();\n    db = firebase__WEBPACK_IMPORTED_MODULE_0___default().firestore();\n};\nconst loginWithEmailAndPassword = async (email, password)=>{\n    try {\n        await auth.signInWithEmailAndPassword(email, password);\n    } catch (err) {\n        console.log(err);\n        alert('error login');\n    }\n};\nconst registerWithEmailAndPassword = async (name, email, password)=>{\n    try {\n        const res = await auth.createUserWithEmailAndPassword(email, password);\n        const user = res.user;\n        await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.addDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(db, \"users\"), {\n            uid: user.uid,\n            name,\n            authProvider: \"local\",\n            email\n        });\n    } catch (err) {\n        console.log(err);\n        alert(err);\n    }\n};\nconst logout = ()=>{\n    auth.signOut();\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9maXJlYmFzZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBK0I7QUFJSjtBQUNXO0FBSXRDLEtBQUssQ0FBQ0ksY0FBYyxHQUFHLENBQUM7SUFDcEJDLE1BQU0sRUFBRSxDQUF5QztJQUNqREMsVUFBVSxFQUFFLENBQWlDO0lBQzdDQyxTQUFTLEVBQUUsQ0FBaUI7SUFDNUJDLGFBQWEsRUFBRSxDQUE2QjtJQUM1Q0MsaUJBQWlCLEVBQUUsQ0FBYztJQUNqQ0MsS0FBSyxFQUFFLENBQTJDO0lBQ2xEQyxhQUFhLEVBQUUsQ0FBYztBQUNqQyxDQUFDO0FBRU0sR0FBRyxDQUFDQyxJQUFJO0FBQ1IsR0FBRyxDQUFDQyxFQUFFO0FBRUUsUUFBUSxDQUFDQyxJQUFJLEdBQUcsQ0FBQztJQUM1QixFQUFFLEdBQUdkLDZEQUFvQixFQUFFLENBQUM7UUFDeEJBLDZEQUFzQixDQUFDSSxjQUFjLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBQ0RRLElBQUksR0FBR1Qsd0RBQWdCLEVBQUUsQ0FBQztJQUMxQlUsRUFBRSxHQUFHYix5REFBa0IsRUFBRSxDQUFDO0FBQzlCLENBQUM7QUFFTSxLQUFLLENBQUNtQix5QkFBeUIsVUFBVUMsS0FBSyxFQUFFQyxRQUFRLEdBQUssQ0FBQztJQUNqRSxHQUFHLENBQUMsQ0FBQztRQUNELEtBQUssQ0FBQ1QsSUFBSSxDQUFDVSwwQkFBMEIsQ0FBQ0YsS0FBSyxFQUFFQyxRQUFRLENBQUMsQ0FBQztJQUMzRCxDQUFDLENBQUMsS0FBSyxFQUFFRSxHQUFHLEVBQUUsQ0FBQztRQUNYQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsR0FBRztRQUNmRyxLQUFLLENBQUMsQ0FBYSxhQUFDLENBQUM7SUFDekIsQ0FBQztBQUNMLENBQUM7QUFFTSxLQUFLLENBQUNDLDRCQUE0QixVQUFVQyxJQUFJLEVBQUVSLEtBQUssRUFBRUMsUUFBUSxHQUFLLENBQUM7SUFDMUUsR0FBRyxDQUFDLENBQUM7UUFDRCxLQUFLLENBQUNRLEdBQUcsR0FBRyxLQUFLLENBQUNqQixJQUFJLENBQUNrQiw4QkFBOEIsQ0FBQ1YsS0FBSyxFQUFFQyxRQUFRO1FBQ3JFLEtBQUssQ0FBQ1UsSUFBSSxHQUFHRixHQUFHLENBQUNFLElBQUk7UUFDckIsS0FBSyxDQUFDN0IsMERBQU0sQ0FBQ0QsOERBQVUsQ0FBQ1ksRUFBRSxFQUFFLENBQU8sU0FBRyxDQUFDO1lBQ25DbUIsR0FBRyxFQUFFRCxJQUFJLENBQUNDLEdBQUc7WUFDYkosSUFBSTtZQUNKSyxZQUFZLEVBQUUsQ0FBTztZQUNyQmIsS0FBSztRQUNULENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQyxDQUFDLEtBQUssRUFBRUcsR0FBRyxFQUFFLENBQUM7UUFDWEMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCRyxLQUFLLENBQUNILEdBQUcsQ0FBQyxDQUFDO0lBQ2YsQ0FBQztBQUNMLENBQUM7QUFFTSxLQUFLLENBQUNXLE1BQU0sT0FBUyxDQUFDO0lBQ3pCdEIsSUFBSSxDQUFDdUIsT0FBTyxFQUFFLENBQUM7QUFDbkIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL215d2VkZGluZy13ZWIvLi9maXJlYmFzZS5qcz80ZDk3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmaXJlYmFzZSBmcm9tIFwiZmlyZWJhc2VcIjtcclxuaW1wb3J0IHtcclxuICAgIGNvbGxlY3Rpb24sXHJcbiAgICBhZGREb2MsXHJcbn0gZnJvbSAnZmlyZWJhc2UvZmlyZXN0b3JlJztcclxuaW1wb3J0IGZpcmViYXNlQXBwIGZyb20gJ2ZpcmViYXNlL2FwcCc7XHJcblxyXG5cclxuXHJcbmNvbnN0IGZpcmViYXNlQ29uZmlnID0ge1xyXG4gICAgYXBpS2V5OiAnQUl6YVN5RHdORXdRMDdHQ2lvMmJTT2M1czJvNnF0aFR6eXpwTzJZJyxcclxuICAgIGF1dGhEb21haW46ICdteXdlZGRpbmctM2M2N2EuZmlyZWJhc2VhcHAuY29tJyxcclxuICAgIHByb2plY3RJZDogJ215d2VkZGluZy0zYzY3YScsXHJcbiAgICBzdG9yYWdlQnVja2V0OiAnbXl3ZWRkaW5nLTNjNjdhLmFwcHNwb3QuY29tJyxcclxuICAgIG1lc3NhZ2luZ1NlbmRlcklkOiAnNDI5ODc2NDE3NTQ2JyxcclxuICAgIGFwcElkOiAnMTo0Mjk4NzY0MTc1NDY6d2ViOjhjMzYyODc0ZGYyMjhlYWI1ODdiZjMnLFxyXG4gICAgbWVhc3VyZW1lbnRJZDogJ0ctMUw0NjFTMDJIRydcclxufTtcclxuXHJcbmV4cG9ydCBsZXQgYXV0aDtcclxuZXhwb3J0IGxldCBkYjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluaXQoKSB7XHJcbiAgICBpZiAoIWZpcmViYXNlLmFwcHMubGVuZ3RoKSB7XHJcbiAgICAgICAgZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZyk7XHJcbiAgICB9XHJcbiAgICBhdXRoID0gZmlyZWJhc2VBcHAuYXV0aCgpO1xyXG4gICAgZGIgPSBmaXJlYmFzZS5maXJlc3RvcmUoKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ2luV2l0aEVtYWlsQW5kUGFzc3dvcmQgPSBhc3luYyAoZW1haWwsIHBhc3N3b3JkKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGF3YWl0IGF1dGguc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQoZW1haWwsIHBhc3N3b3JkKTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycilcclxuICAgICAgICBhbGVydCgnZXJyb3IgbG9naW4nKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHJlZ2lzdGVyV2l0aEVtYWlsQW5kUGFzc3dvcmQgPSBhc3luYyAobmFtZSwgZW1haWwsIHBhc3N3b3JkKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF1dGguY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkKGVtYWlsLCBwYXNzd29yZCk7XHJcbiAgICAgICAgY29uc3QgdXNlciA9IHJlcy51c2VyO1xyXG4gICAgICAgIGF3YWl0IGFkZERvYyhjb2xsZWN0aW9uKGRiLCBcInVzZXJzXCIpLCB7XHJcbiAgICAgICAgICAgIHVpZDogdXNlci51aWQsXHJcbiAgICAgICAgICAgIG5hbWUsXHJcbiAgICAgICAgICAgIGF1dGhQcm92aWRlcjogXCJsb2NhbFwiLFxyXG4gICAgICAgICAgICBlbWFpbCxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgYWxlcnQoZXJyKTtcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBsb2dvdXQgPSAoKSA9PiB7XHJcbiAgICBhdXRoLnNpZ25PdXQoKTtcclxufTtcclxuIl0sIm5hbWVzIjpbImZpcmViYXNlIiwiY29sbGVjdGlvbiIsImFkZERvYyIsImZpcmViYXNlQXBwIiwiZmlyZWJhc2VDb25maWciLCJhcGlLZXkiLCJhdXRoRG9tYWluIiwicHJvamVjdElkIiwic3RvcmFnZUJ1Y2tldCIsIm1lc3NhZ2luZ1NlbmRlcklkIiwiYXBwSWQiLCJtZWFzdXJlbWVudElkIiwiYXV0aCIsImRiIiwiaW5pdCIsImFwcHMiLCJsZW5ndGgiLCJpbml0aWFsaXplQXBwIiwiZmlyZXN0b3JlIiwibG9naW5XaXRoRW1haWxBbmRQYXNzd29yZCIsImVtYWlsIiwicGFzc3dvcmQiLCJzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJhbGVydCIsInJlZ2lzdGVyV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJuYW1lIiwicmVzIiwiY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkIiwidXNlciIsInVpZCIsImF1dGhQcm92aWRlciIsImxvZ291dCIsInNpZ25PdXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./firebase.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../firebase */ \"./firebase.js\");\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-devtools-extension */ \"redux-devtools-extension\");\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../auth */ \"./auth.js\");\n/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../reducers */ \"./reducers/index.js\");\n\n\n\n\n\n\n\n\n\nconst store = (0,redux__WEBPACK_IMPORTED_MODULE_6__.createStore)(_reducers__WEBPACK_IMPORTED_MODULE_8__[\"default\"], (0,redux_devtools_extension__WEBPACK_IMPORTED_MODULE_4__.composeWithDevTools)());\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_5__.Provider, {\n        store: store,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_auth__WEBPACK_IMPORTED_MODULE_7__.FirebaseProvider, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\orels\\\\wedding\\\\web-app\\\\mywedding-web\\\\pages\\\\_app.js\",\n                lineNumber: 16,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\orels\\\\wedding\\\\web-app\\\\mywedding-web\\\\pages\\\\_app.js\",\n            lineNumber: 15,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\orels\\\\wedding\\\\web-app\\\\mywedding-web\\\\pages\\\\_app.js\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQThCO0FBQ0c7QUFDQztBQUM0QjtBQUN4QjtBQUNIO0FBQ087QUFDTDtBQUVyQyxLQUFLLENBQUNPLEtBQUssR0FBR0gsa0RBQVcsQ0FBQ0UsaURBQVcsRUFBRUosNkVBQW1CO1NBRWpETSxLQUFLLENBQUMsQ0FBQyxDQUFDQyxTQUFTLEdBQUVDLFNBQVMsRUFBQyxDQUFDLEVBQUUsQ0FBQztJQUN4QyxNQUFNLDZFQUNIUCxpREFBUTtRQUFDSSxLQUFLLEVBQUVBLEtBQUs7OEZBQ25CRixtREFBZ0I7a0dBQ2RJLFNBQVM7bUJBQUtDLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJaEMsQ0FBQztBQUVELGlFQUFlRixLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXl3ZWRkaW5nLXdlYi8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcydcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGluaXQgfSBmcm9tICcuLi9maXJlYmFzZSc7XG5pbXBvcnQgeyBjb21wb3NlV2l0aERldlRvb2xzIH0gZnJvbSAncmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uJztcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgY3JlYXRlU3RvcmUgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgeyBGaXJlYmFzZVByb3ZpZGVyIH0gZnJvbSAnLi4vYXV0aCc7XG5pbXBvcnQgYWxsUmVkdWNlcnMgZnJvbSAnLi4vcmVkdWNlcnMnO1xuXG5jb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKGFsbFJlZHVjZXJzLCBjb21wb3NlV2l0aERldlRvb2xzKCkpO1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICAgIDxGaXJlYmFzZVByb3ZpZGVyPlxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICA8L0ZpcmViYXNlUHJvdmlkZXI+XG4gICAgPC9Qcm92aWRlcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcFxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsImluaXQiLCJjb21wb3NlV2l0aERldlRvb2xzIiwiUHJvdmlkZXIiLCJjcmVhdGVTdG9yZSIsIkZpcmViYXNlUHJvdmlkZXIiLCJhbGxSZWR1Y2VycyIsInN0b3JlIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./reducers/auth.js":
/*!**************************!*\
  !*** ./reducers/auth.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _actions_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/auth */ \"./actions/auth.js\");\n\nconst initialState = {\n    user: null\n};\nconst authReducer = (state = initialState, action)=>{\n    switch(action.type){\n        case _actions_auth__WEBPACK_IMPORTED_MODULE_0__.SET_USER:\n            return action.user;\n        case _actions_auth__WEBPACK_IMPORTED_MODULE_0__.CLEAR_USER:\n            return null;\n        default:\n            return state;\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (authReducer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWR1Y2Vycy9hdXRoLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQXNEO0FBRXRELEtBQUssQ0FBQ0UsWUFBWSxHQUFHLENBQUM7SUFDbEJDLElBQUksRUFBRSxJQUFJO0FBQ2QsQ0FBQztBQUVELEtBQUssQ0FBQ0MsV0FBVyxJQUFJQyxLQUFLLEdBQUdILFlBQVksRUFBRUksTUFBTSxHQUFLLENBQUM7SUFDbkQsTUFBTSxDQUFFQSxNQUFNLENBQUNDLElBQUk7UUFDZixJQUFJLENBQUNQLG1EQUFRO1lBQ1QsTUFBTSxDQUFDTSxNQUFNLENBQUNILElBQUk7UUFDdEIsSUFBSSxDQUFDRixxREFBVTtZQUNYLE1BQU0sQ0FBQyxJQUFJOztZQUVYLE1BQU0sQ0FBQ0ksS0FBSzs7QUFFeEIsQ0FBQztBQUVELGlFQUFlRCxXQUFXLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teXdlZGRpbmctd2ViLy4vcmVkdWNlcnMvYXV0aC5qcz9kNGJiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNFVF9VU0VSLCBDTEVBUl9VU0VSIH0gZnJvbSAnLi4vYWN0aW9ucy9hdXRoJztcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIHVzZXI6IG51bGwsXHJcbn07XHJcblxyXG5jb25zdCBhdXRoUmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBTRVRfVVNFUjpcclxuICAgICAgICAgICAgcmV0dXJuIGFjdGlvbi51c2VyO1xyXG4gICAgICAgIGNhc2UgQ0xFQVJfVVNFUjpcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXV0aFJlZHVjZXI7XHJcbiJdLCJuYW1lcyI6WyJTRVRfVVNFUiIsIkNMRUFSX1VTRVIiLCJpbml0aWFsU3RhdGUiLCJ1c2VyIiwiYXV0aFJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./reducers/auth.js\n");

/***/ }),

/***/ "./reducers/index.js":
/*!***************************!*\
  !*** ./reducers/index.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth */ \"./reducers/auth.js\");\n\n\nconst allReducers = (0,redux__WEBPACK_IMPORTED_MODULE_0__.combineReducers)({\n    auth: _auth__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (allReducers);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWR1Y2Vycy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQXVDO0FBQ2Q7QUFFekIsS0FBSyxDQUFDRSxXQUFXLEdBQUdGLHNEQUFlLENBQUMsQ0FBQztJQUNqQ0MsSUFBSTtBQUNSLENBQUM7QUFFRCxpRUFBZUMsV0FBVyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXl3ZWRkaW5nLXdlYi8uL3JlZHVjZXJzL2luZGV4LmpzP2I5YjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgYXV0aCBmcm9tICcuL2F1dGgnO1xyXG5cclxuY29uc3QgYWxsUmVkdWNlcnMgPSBjb21iaW5lUmVkdWNlcnMoe1xyXG4gICAgYXV0aCxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhbGxSZWR1Y2VyczsiXSwibmFtZXMiOlsiY29tYmluZVJlZHVjZXJzIiwiYXV0aCIsImFsbFJlZHVjZXJzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./reducers/index.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "firebase":
/*!***************************!*\
  !*** external "firebase" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("firebase");

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("firebase/app");

/***/ }),

/***/ "firebase/firestore":
/*!*************************************!*\
  !*** external "firebase/firestore" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("firebase/firestore");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux-devtools-extension");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();