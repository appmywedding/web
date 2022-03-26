"use strict";
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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./actions/auth.js":
/*!*************************!*\
  !*** ./actions/auth.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SET_USER\": () => (/* binding */ SET_USER),\n/* harmony export */   \"CLEAR_USER\": () => (/* binding */ CLEAR_USER),\n/* harmony export */   \"setUser\": () => (/* binding */ setUser),\n/* harmony export */   \"clearUser\": () => (/* binding */ clearUser)\n/* harmony export */ });\nconst SET_USER = 'SET_USER';\nconst CLEAR_USER = 'CLEAR_USER';\nconst setUser = (user)=>({\n        type: SET_USER,\n        user\n    })\n;\nconst clearUser = ()=>({\n        type: CLEAR_USER,\n        user: null\n    })\n;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hY3Rpb25zL2F1dGguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFPLEtBQUssQ0FBQ0EsUUFBUSxHQUFHLENBQVU7QUFDM0IsS0FBSyxDQUFDQyxVQUFVLEdBQUcsQ0FBWTtBQUUvQixLQUFLLENBQUNDLE9BQU8sSUFBSUMsSUFBSSxJQUFNLENBQUM7UUFBQ0MsSUFBSSxFQUFFSixRQUFRO1FBQUVHLElBQUk7SUFBQyxDQUFDOztBQUVuRCxLQUFLLENBQUNFLFNBQVMsUUFBVSxDQUFDO1FBQUNELElBQUksRUFBRUgsVUFBVTtRQUFFRSxJQUFJLEVBQUUsSUFBSTtJQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teXdlZGRpbmctd2ViLy4vYWN0aW9ucy9hdXRoLmpzPzIxMmMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IFNFVF9VU0VSID0gJ1NFVF9VU0VSJztcclxuZXhwb3J0IGNvbnN0IENMRUFSX1VTRVIgPSAnQ0xFQVJfVVNFUic7XHJcblxyXG5leHBvcnQgY29uc3Qgc2V0VXNlciA9ICh1c2VyKSA9PiAoeyB0eXBlOiBTRVRfVVNFUiwgdXNlciB9KTtcclxuXHJcbmV4cG9ydCBjb25zdCBjbGVhclVzZXIgPSAoKSA9PiAoeyB0eXBlOiBDTEVBUl9VU0VSLCB1c2VyOiBudWxsIH0pO1xyXG4iXSwibmFtZXMiOlsiU0VUX1VTRVIiLCJDTEVBUl9VU0VSIiwic2V0VXNlciIsInVzZXIiLCJ0eXBlIiwiY2xlYXJVc2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./actions/auth.js\n");

/***/ }),

/***/ "./firebase.js":
/*!*********************!*\
  !*** ./firebase.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"auth\": () => (/* binding */ auth),\n/* harmony export */   \"db\": () => (/* binding */ db),\n/* harmony export */   \"default\": () => (/* binding */ init),\n/* harmony export */   \"loginWithEmailAndPassword\": () => (/* binding */ loginWithEmailAndPassword),\n/* harmony export */   \"registerWithEmailAndPassword\": () => (/* binding */ registerWithEmailAndPassword),\n/* harmony export */   \"logout\": () => (/* binding */ logout)\n/* harmony export */ });\n/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase */ \"firebase\");\n/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_firestore__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst firebaseConfig = {\n    apiKey: 'AIzaSyDwNEwQ07GCio2bSOc5s2o6qthTzyzpO2Y',\n    authDomain: 'mywedding-3c67a.firebaseapp.com',\n    projectId: 'mywedding-3c67a',\n    storageBucket: 'mywedding-3c67a.appspot.com',\n    messagingSenderId: '429876417546',\n    appId: '1:429876417546:web:8c362874df228eab587bf3',\n    measurementId: 'G-1L461S02HG'\n};\nlet auth;\nlet db;\nfunction init() {\n    if (!(firebase__WEBPACK_IMPORTED_MODULE_0___default().apps.length)) {\n        firebase__WEBPACK_IMPORTED_MODULE_0___default().initializeApp(firebaseConfig);\n    }\n    auth = firebase_app__WEBPACK_IMPORTED_MODULE_2___default().auth();\n    db = firebase__WEBPACK_IMPORTED_MODULE_0___default().firestore();\n};\nconst loginWithEmailAndPassword = async (email, password)=>{\n    try {\n        await auth.signInWithEmailAndPassword(email, password);\n    } catch (err) {\n        console.log(err);\n        alert('error login');\n    }\n};\nconst registerWithEmailAndPassword = async (name, email, password)=>{\n    try {\n        const res = await auth.createUserWithEmailAndPassword(email, password);\n        const user = res.user;\n        await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.addDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(db, \"users\"), {\n            uid: user.uid,\n            name,\n            authProvider: \"local\",\n            email\n        });\n    } catch (err) {\n        console.log(err);\n        alert(err);\n    }\n};\nconst logout = ()=>{\n    auth.signOut();\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9maXJlYmFzZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBK0I7QUFJSjtBQUNXO0FBSXRDLEtBQUssQ0FBQ0ksY0FBYyxHQUFHLENBQUM7SUFDcEJDLE1BQU0sRUFBRSxDQUF5QztJQUNqREMsVUFBVSxFQUFFLENBQWlDO0lBQzdDQyxTQUFTLEVBQUUsQ0FBaUI7SUFDNUJDLGFBQWEsRUFBRSxDQUE2QjtJQUM1Q0MsaUJBQWlCLEVBQUUsQ0FBYztJQUNqQ0MsS0FBSyxFQUFFLENBQTJDO0lBQ2xEQyxhQUFhLEVBQUUsQ0FBYztBQUNqQyxDQUFDO0FBRU0sR0FBRyxDQUFDQyxJQUFJO0FBQ1IsR0FBRyxDQUFDQyxFQUFFO0FBRUUsUUFBUSxDQUFDQyxJQUFJLEdBQUcsQ0FBQztJQUM1QixFQUFFLEdBQUdkLDZEQUFvQixFQUFFLENBQUM7UUFDeEJBLDZEQUFzQixDQUFDSSxjQUFjLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBQ0RRLElBQUksR0FBR1Qsd0RBQWdCLEVBQUUsQ0FBQztJQUMxQlUsRUFBRSxHQUFHYix5REFBa0IsRUFBRSxDQUFDO0FBQzlCLENBQUM7QUFFTSxLQUFLLENBQUNtQix5QkFBeUIsVUFBVUMsS0FBSyxFQUFFQyxRQUFRLEdBQUssQ0FBQztJQUNqRSxHQUFHLENBQUMsQ0FBQztRQUNELEtBQUssQ0FBQ1QsSUFBSSxDQUFDVSwwQkFBMEIsQ0FBQ0YsS0FBSyxFQUFFQyxRQUFRLENBQUMsQ0FBQztJQUMzRCxDQUFDLENBQUMsS0FBSyxFQUFFRSxHQUFHLEVBQUUsQ0FBQztRQUNYQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsR0FBRztRQUNmRyxLQUFLLENBQUMsQ0FBYSxhQUFDLENBQUM7SUFDekIsQ0FBQztBQUNMLENBQUM7QUFFTSxLQUFLLENBQUNDLDRCQUE0QixVQUFVQyxJQUFJLEVBQUVSLEtBQUssRUFBRUMsUUFBUSxHQUFLLENBQUM7SUFDMUUsR0FBRyxDQUFDLENBQUM7UUFDRCxLQUFLLENBQUNRLEdBQUcsR0FBRyxLQUFLLENBQUNqQixJQUFJLENBQUNrQiw4QkFBOEIsQ0FBQ1YsS0FBSyxFQUFFQyxRQUFRO1FBQ3JFLEtBQUssQ0FBQ1UsSUFBSSxHQUFHRixHQUFHLENBQUNFLElBQUk7UUFDckIsS0FBSyxDQUFDN0IsMERBQU0sQ0FBQ0QsOERBQVUsQ0FBQ1ksRUFBRSxFQUFFLENBQU8sU0FBRyxDQUFDO1lBQ25DbUIsR0FBRyxFQUFFRCxJQUFJLENBQUNDLEdBQUc7WUFDYkosSUFBSTtZQUNKSyxZQUFZLEVBQUUsQ0FBTztZQUNyQmIsS0FBSztRQUNULENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQyxDQUFDLEtBQUssRUFBRUcsR0FBRyxFQUFFLENBQUM7UUFDWEMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCRyxLQUFLLENBQUNILEdBQUcsQ0FBQyxDQUFDO0lBQ2YsQ0FBQztBQUNMLENBQUM7QUFFTSxLQUFLLENBQUNXLE1BQU0sT0FBUyxDQUFDO0lBQ3pCdEIsSUFBSSxDQUFDdUIsT0FBTyxFQUFFLENBQUM7QUFDbkIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL215d2VkZGluZy13ZWIvLi9maXJlYmFzZS5qcz80ZDk3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmaXJlYmFzZSBmcm9tIFwiZmlyZWJhc2VcIjtcclxuaW1wb3J0IHtcclxuICAgIGNvbGxlY3Rpb24sXHJcbiAgICBhZGREb2MsXHJcbn0gZnJvbSAnZmlyZWJhc2UvZmlyZXN0b3JlJztcclxuaW1wb3J0IGZpcmViYXNlQXBwIGZyb20gJ2ZpcmViYXNlL2FwcCc7XHJcblxyXG5cclxuXHJcbmNvbnN0IGZpcmViYXNlQ29uZmlnID0ge1xyXG4gICAgYXBpS2V5OiAnQUl6YVN5RHdORXdRMDdHQ2lvMmJTT2M1czJvNnF0aFR6eXpwTzJZJyxcclxuICAgIGF1dGhEb21haW46ICdteXdlZGRpbmctM2M2N2EuZmlyZWJhc2VhcHAuY29tJyxcclxuICAgIHByb2plY3RJZDogJ215d2VkZGluZy0zYzY3YScsXHJcbiAgICBzdG9yYWdlQnVja2V0OiAnbXl3ZWRkaW5nLTNjNjdhLmFwcHNwb3QuY29tJyxcclxuICAgIG1lc3NhZ2luZ1NlbmRlcklkOiAnNDI5ODc2NDE3NTQ2JyxcclxuICAgIGFwcElkOiAnMTo0Mjk4NzY0MTc1NDY6d2ViOjhjMzYyODc0ZGYyMjhlYWI1ODdiZjMnLFxyXG4gICAgbWVhc3VyZW1lbnRJZDogJ0ctMUw0NjFTMDJIRydcclxufTtcclxuXHJcbmV4cG9ydCBsZXQgYXV0aDtcclxuZXhwb3J0IGxldCBkYjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluaXQoKSB7XHJcbiAgICBpZiAoIWZpcmViYXNlLmFwcHMubGVuZ3RoKSB7XHJcbiAgICAgICAgZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZyk7XHJcbiAgICB9XHJcbiAgICBhdXRoID0gZmlyZWJhc2VBcHAuYXV0aCgpO1xyXG4gICAgZGIgPSBmaXJlYmFzZS5maXJlc3RvcmUoKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ2luV2l0aEVtYWlsQW5kUGFzc3dvcmQgPSBhc3luYyAoZW1haWwsIHBhc3N3b3JkKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGF3YWl0IGF1dGguc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQoZW1haWwsIHBhc3N3b3JkKTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycilcclxuICAgICAgICBhbGVydCgnZXJyb3IgbG9naW4nKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHJlZ2lzdGVyV2l0aEVtYWlsQW5kUGFzc3dvcmQgPSBhc3luYyAobmFtZSwgZW1haWwsIHBhc3N3b3JkKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF1dGguY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkKGVtYWlsLCBwYXNzd29yZCk7XHJcbiAgICAgICAgY29uc3QgdXNlciA9IHJlcy51c2VyO1xyXG4gICAgICAgIGF3YWl0IGFkZERvYyhjb2xsZWN0aW9uKGRiLCBcInVzZXJzXCIpLCB7XHJcbiAgICAgICAgICAgIHVpZDogdXNlci51aWQsXHJcbiAgICAgICAgICAgIG5hbWUsXHJcbiAgICAgICAgICAgIGF1dGhQcm92aWRlcjogXCJsb2NhbFwiLFxyXG4gICAgICAgICAgICBlbWFpbCxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgYWxlcnQoZXJyKTtcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBsb2dvdXQgPSAoKSA9PiB7XHJcbiAgICBhdXRoLnNpZ25PdXQoKTtcclxufTtcclxuIl0sIm5hbWVzIjpbImZpcmViYXNlIiwiY29sbGVjdGlvbiIsImFkZERvYyIsImZpcmViYXNlQXBwIiwiZmlyZWJhc2VDb25maWciLCJhcGlLZXkiLCJhdXRoRG9tYWluIiwicHJvamVjdElkIiwic3RvcmFnZUJ1Y2tldCIsIm1lc3NhZ2luZ1NlbmRlcklkIiwiYXBwSWQiLCJtZWFzdXJlbWVudElkIiwiYXV0aCIsImRiIiwiaW5pdCIsImFwcHMiLCJsZW5ndGgiLCJpbml0aWFsaXplQXBwIiwiZmlyZXN0b3JlIiwibG9naW5XaXRoRW1haWxBbmRQYXNzd29yZCIsImVtYWlsIiwicGFzc3dvcmQiLCJzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJhbGVydCIsInJlZ2lzdGVyV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJuYW1lIiwicmVzIiwiY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkIiwidXNlciIsInVpZCIsImF1dGhQcm92aWRlciIsImxvZ291dCIsInNpZ25PdXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./firebase.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _actions_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions/auth */ \"./actions/auth.js\");\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../firebase */ \"./firebase.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\n\nfunction Home() {\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();\n    async function checkAuth() {\n        _firebase__WEBPACK_IMPORTED_MODULE_5__.auth.onAuthStateChanged(async (user)=>{\n            if (user) {\n                dispatch((0,_actions_auth__WEBPACK_IMPORTED_MODULE_4__.setUser)({\n                    user\n                }));\n                next_router__WEBPACK_IMPORTED_MODULE_6___default().push('/home');\n            } else {\n                next_router__WEBPACK_IMPORTED_MODULE_6___default().push('/login');\n            }\n        });\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        (0,_firebase__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n        checkAuth();\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col items-center justify-center min-h-screen py-2\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"My Wedding\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\orels\\\\wedding\\\\web-app\\\\mywedding-web\\\\pages\\\\index.js\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\orels\\\\wedding\\\\web-app\\\\mywedding-web\\\\pages\\\\index.js\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-3 text-2xl\",\n                children: \"Herro\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\orels\\\\wedding\\\\web-app\\\\mywedding-web\\\\pages\\\\index.js\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\orels\\\\wedding\\\\web-app\\\\mywedding-web\\\\pages\\\\index.js\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, this);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUE0QjtBQUNZO0FBQ2M7QUFDYjtBQUNQO0FBQ007QUFDUjtBQUVqQixRQUFRLENBQUNTLElBQUksR0FBRyxDQUFDO0lBRTlCLEtBQUssQ0FBQ0MsUUFBUSxHQUFHUCx3REFBVzttQkFFYlEsU0FBUyxHQUFHLENBQUM7UUFDMUJMLDhEQUF1QixRQUFRTyxJQUFJLEdBQUssQ0FBQztZQUN2QyxFQUFFLEVBQUVBLElBQUksRUFBRSxDQUFDO2dCQUNUSCxRQUFRLENBQUNMLHNEQUFPLENBQUMsQ0FBQztvQkFBQ1EsSUFBSTtnQkFBQyxDQUFDLEVBQUUsQ0FBQztnQkFDNUJMLHVEQUFXLENBQUMsQ0FBTztZQUNyQixDQUFDLE1BQU0sQ0FBQztnQkFDTkEsdURBQVcsQ0FBQyxDQUFRLFFBQUMsQ0FBQztZQUN4QixDQUFDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUROLGdEQUFTLEtBQU8sQ0FBQztRQUNmSyxxREFBYyxFQUFFLENBQUM7UUFDakJJLFNBQVMsRUFBRSxDQUFDO0lBQ2QsQ0FBQyxDQUFDLENBQUM7SUFHSCxNQUFNLDZFQUNISSxDQUFHO1FBQUNDLFNBQVMsRUFBQyxDQUE2RDs7d0ZBQ3pFaEIsa0RBQUk7c0dBQ0ZpQixDQUFLOzhCQUFDLENBQVU7Ozs7Ozs7Ozs7O3dGQUVsQkYsQ0FBRztnQkFBQ0MsU0FBUyxFQUFDLENBQWU7MEJBQUMsQ0FFL0I7Ozs7Ozs7Ozs7OztBQUdOLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teXdlZGRpbmctd2ViLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgc2V0VXNlciB9IGZyb20gJy4uL2FjdGlvbnMvYXV0aCc7XG5pbXBvcnQgeyBhdXRoIH0gZnJvbSAnLi4vZmlyZWJhc2UnO1xuaW1wb3J0IGZpcmViYXNlQ2xpZW50IGZyb20gJy4uL2ZpcmViYXNlJztcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcblxuICBhc3luYyBmdW5jdGlvbiBjaGVja0F1dGgoKSB7XG4gICAgYXV0aC5vbkF1dGhTdGF0ZUNoYW5nZWQoYXN5bmMgKHVzZXIpID0+IHtcbiAgICAgIGlmICh1c2VyKSB7XG4gICAgICAgIGRpc3BhdGNoKHNldFVzZXIoeyB1c2VyIH0pKTtcbiAgICAgICAgUm91dGVyLnB1c2goJy9ob21lJylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIFJvdXRlci5wdXNoKCcvbG9naW4nKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZmlyZWJhc2VDbGllbnQoKTtcbiAgICBjaGVja0F1dGgoKTtcbiAgfSk7XG5cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbWluLWgtc2NyZWVuIHB5LTJcIj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+TXkgV2VkZGluZzwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTMgdGV4dC0yeGxcIj5cbiAgICAgICAgSGVycm9cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59Il0sIm5hbWVzIjpbIkhlYWQiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJzZXRVc2VyIiwiYXV0aCIsImZpcmViYXNlQ2xpZW50IiwiUm91dGVyIiwiSG9tZSIsImRpc3BhdGNoIiwiY2hlY2tBdXRoIiwib25BdXRoU3RhdGVDaGFuZ2VkIiwidXNlciIsInB1c2giLCJkaXYiLCJjbGFzc05hbWUiLCJ0aXRsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "firebase":
/*!***************************!*\
  !*** external "firebase" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("firebase");

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("firebase/app");

/***/ }),

/***/ "firebase/firestore":
/*!*************************************!*\
  !*** external "firebase/firestore" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("firebase/firestore");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();