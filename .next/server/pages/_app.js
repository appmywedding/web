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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"LOGIN\": () => (/* binding */ LOGIN),\n/* harmony export */   \"LOGOUT\": () => (/* binding */ LOGOUT),\n/* harmony export */   \"login\": () => (/* binding */ login),\n/* harmony export */   \"logout\": () => (/* binding */ logout)\n/* harmony export */ });\nconst LOGIN = 'LOGIN';\nconst LOGOUT = 'LOGOUT';\nconst login = (user)=>({\n        type: LOGIN,\n        user\n    })\n;\nconst logout = ()=>({\n        type: LOGOUT,\n        user: null\n    })\n;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hY3Rpb25zL2F1dGguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFPLEtBQUssQ0FBQ0EsS0FBSyxHQUFHLENBQU87QUFDckIsS0FBSyxDQUFDQyxNQUFNLEdBQUcsQ0FBUTtBQUV2QixLQUFLLENBQUNDLEtBQUssSUFBSUMsSUFBSSxJQUFNLENBQUM7UUFBQ0MsSUFBSSxFQUFFSixLQUFLO1FBQUVHLElBQUk7SUFBQyxDQUFDOztBQUU5QyxLQUFLLENBQUNFLE1BQU0sUUFBVSxDQUFDO1FBQUNELElBQUksRUFBRUgsTUFBTTtRQUFFRSxJQUFJLEVBQUUsSUFBSTtJQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teXdlZGRpbmctd2ViLy4vYWN0aW9ucy9hdXRoLmpzPzIxMmMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IExPR0lOID0gJ0xPR0lOJztcbmV4cG9ydCBjb25zdCBMT0dPVVQgPSAnTE9HT1VUJztcblxuZXhwb3J0IGNvbnN0IGxvZ2luID0gKHVzZXIpID0+ICh7IHR5cGU6IExPR0lOLCB1c2VyIH0pO1xuXG5leHBvcnQgY29uc3QgbG9nb3V0ID0gKCkgPT4gKHsgdHlwZTogTE9HT1VULCB1c2VyOiBudWxsIH0pO1xuIl0sIm5hbWVzIjpbIkxPR0lOIiwiTE9HT1VUIiwibG9naW4iLCJ1c2VyIiwidHlwZSIsImxvZ291dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./actions/auth.js\n");

/***/ }),

/***/ "./actions/invited.js":
/*!****************************!*\
  !*** ./actions/invited.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SET_INVITED\": () => (/* binding */ SET_INVITED),\n/* harmony export */   \"CLEAR_INVITED\": () => (/* binding */ CLEAR_INVITED),\n/* harmony export */   \"setInvited\": () => (/* binding */ setInvited),\n/* harmony export */   \"clearInvited\": () => (/* binding */ clearInvited)\n/* harmony export */ });\nconst SET_INVITED = 'SET_INVITED';\nconst CLEAR_INVITED = 'CLEAR_INVITED';\nconst setInvited = (invited)=>({\n        type: SET_INVITED,\n        invited\n    })\n;\nconst clearInvited = ()=>({\n        type: CLEAR_INVITED,\n        invited: null\n    })\n;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hY3Rpb25zL2ludml0ZWQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFPLEtBQUssQ0FBQ0EsV0FBVyxHQUFHLENBQWE7QUFDakMsS0FBSyxDQUFDQyxhQUFhLEdBQUcsQ0FBZTtBQUVyQyxLQUFLLENBQUNDLFVBQVUsSUFBSUMsT0FBTyxJQUFNLENBQUM7UUFBQ0MsSUFBSSxFQUFFSixXQUFXO1FBQUVHLE9BQU87SUFBQyxDQUFDOztBQUUvRCxLQUFLLENBQUNFLFlBQVksUUFBVSxDQUFDO1FBQUNELElBQUksRUFBRUgsYUFBYTtRQUFFRSxPQUFPLEVBQUUsSUFBSTtJQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teXdlZGRpbmctd2ViLy4vYWN0aW9ucy9pbnZpdGVkLmpzPzEwM2QiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IFNFVF9JTlZJVEVEID0gJ1NFVF9JTlZJVEVEJztcbmV4cG9ydCBjb25zdCBDTEVBUl9JTlZJVEVEID0gJ0NMRUFSX0lOVklURUQnO1xuXG5leHBvcnQgY29uc3Qgc2V0SW52aXRlZCA9IChpbnZpdGVkKSA9PiAoeyB0eXBlOiBTRVRfSU5WSVRFRCwgaW52aXRlZCB9KTtcblxuZXhwb3J0IGNvbnN0IGNsZWFySW52aXRlZCA9ICgpID0+ICh7IHR5cGU6IENMRUFSX0lOVklURUQsIGludml0ZWQ6IG51bGwgfSk7XG4iXSwibmFtZXMiOlsiU0VUX0lOVklURUQiLCJDTEVBUl9JTlZJVEVEIiwic2V0SW52aXRlZCIsImludml0ZWQiLCJ0eXBlIiwiY2xlYXJJbnZpdGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./actions/invited.js\n");

/***/ }),

/***/ "./actions/items.js":
/*!**************************!*\
  !*** ./actions/items.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CLEAR_ITEMS\": () => (/* binding */ CLEAR_ITEMS),\n/* harmony export */   \"ADD_USER_ITEMS\": () => (/* binding */ ADD_USER_ITEMS),\n/* harmony export */   \"ADD_ITEMS\": () => (/* binding */ ADD_ITEMS),\n/* harmony export */   \"setUserItems\": () => (/* binding */ setUserItems),\n/* harmony export */   \"addUserItems\": () => (/* binding */ addUserItems),\n/* harmony export */   \"addItems\": () => (/* binding */ addItems),\n/* harmony export */   \"clearItems\": () => (/* binding */ clearItems)\n/* harmony export */ });\nconst CLEAR_ITEMS = 'CLEAR_USER_ITEMS';\nconst ADD_USER_ITEMS = 'ADD_USER_ITEMS';\nconst ADD_ITEMS = 'ADD_ITEMS';\nconst setUserItems = (items)=>({\n        type: SET_ITEMS,\n        items\n    })\n;\nconst addUserItems = (items)=>({\n        type: ADD_USER_ITEMS,\n        items\n    })\n;\nconst addItems = (items, typeName)=>({\n        type: ADD_ITEMS,\n        items,\n        typeName\n    })\n;\nconst clearItems = ()=>({\n        type: CLEAR_ITEMS,\n        items: null\n    })\n;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hY3Rpb25zL2l0ZW1zLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBTyxLQUFLLENBQUNBLFdBQVcsR0FBRyxDQUFrQjtBQUN0QyxLQUFLLENBQUNDLGNBQWMsR0FBRyxDQUFnQjtBQUN2QyxLQUFLLENBQUNDLFNBQVMsR0FBRyxDQUFXO0FBRTdCLEtBQUssQ0FBQ0MsWUFBWSxJQUFJQyxLQUFLLElBQU0sQ0FBQztRQUFDQyxJQUFJLEVBQUVDLFNBQVM7UUFBRUYsS0FBSztJQUFDLENBQUM7O0FBQzNELEtBQUssQ0FBQ0csWUFBWSxJQUFJSCxLQUFLLElBQU0sQ0FBQztRQUFDQyxJQUFJLEVBQUVKLGNBQWM7UUFBRUcsS0FBSztJQUFDLENBQUM7O0FBQ2hFLEtBQUssQ0FBQ0ksUUFBUSxJQUFJSixLQUFLLEVBQUVLLFFBQVEsSUFBTSxDQUFDO1FBQUNKLElBQUksRUFBRUgsU0FBUztRQUFFRSxLQUFLO1FBQUVLLFFBQVE7SUFBQSxDQUFDOztBQUUxRSxLQUFLLENBQUNDLFVBQVUsUUFBVSxDQUFDO1FBQUNMLElBQUksRUFBRUwsV0FBVztRQUFFSSxLQUFLLEVBQUUsSUFBSTtJQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teXdlZGRpbmctd2ViLy4vYWN0aW9ucy9pdGVtcy5qcz8xZjc4Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBDTEVBUl9JVEVNUyA9ICdDTEVBUl9VU0VSX0lURU1TJztcbmV4cG9ydCBjb25zdCBBRERfVVNFUl9JVEVNUyA9ICdBRERfVVNFUl9JVEVNUyc7XG5leHBvcnQgY29uc3QgQUREX0lURU1TID0gJ0FERF9JVEVNUyc7XG5cbmV4cG9ydCBjb25zdCBzZXRVc2VySXRlbXMgPSAoaXRlbXMpID0+ICh7IHR5cGU6IFNFVF9JVEVNUywgaXRlbXMgfSk7XG5leHBvcnQgY29uc3QgYWRkVXNlckl0ZW1zID0gKGl0ZW1zKSA9PiAoeyB0eXBlOiBBRERfVVNFUl9JVEVNUywgaXRlbXMgfSk7XG5leHBvcnQgY29uc3QgYWRkSXRlbXMgPSAoaXRlbXMsIHR5cGVOYW1lKSA9PiAoeyB0eXBlOiBBRERfSVRFTVMsIGl0ZW1zLCB0eXBlTmFtZX0pO1xuXG5leHBvcnQgY29uc3QgY2xlYXJJdGVtcyA9ICgpID0+ICh7IHR5cGU6IENMRUFSX0lURU1TLCBpdGVtczogbnVsbCB9KTtcbiJdLCJuYW1lcyI6WyJDTEVBUl9JVEVNUyIsIkFERF9VU0VSX0lURU1TIiwiQUREX0lURU1TIiwic2V0VXNlckl0ZW1zIiwiaXRlbXMiLCJ0eXBlIiwiU0VUX0lURU1TIiwiYWRkVXNlckl0ZW1zIiwiYWRkSXRlbXMiLCJ0eXBlTmFtZSIsImNsZWFySXRlbXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./actions/items.js\n");

/***/ }),

/***/ "./auth.js":
/*!*****************!*\
  !*** ./auth.js ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"FirebaseProvider\": () => (/* binding */ FirebaseProvider),\n/* harmony export */   \"useAuth\": () => (/* binding */ useAuth)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./firebase */ \"./firebase.js\");\n\n\n\n\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});\nfunction FirebaseProvider({ children  }) {\n    const user = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((reducers)=>reducers.auth.user\n    );\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        (0,_firebase__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: user,\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\orels\\\\wedding\\\\web-app\\\\mywedding-web\\\\auth.js\",\n        lineNumber: 15,\n        columnNumber: 13\n    }, this);\n}\nconst useAuth = ()=>(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AuthContext)\n;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hdXRoLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBbUU7QUFDMUI7QUFDRjtBQUd2QyxLQUFLLENBQUNNLFdBQVcsaUJBQUdILG9EQUFhLENBQUMsQ0FBQyxDQUFDO0FBRTdCLFNBQVNJLGdCQUFnQixDQUFDLENBQUMsQ0FBQ0MsUUFBUSxFQUFDLENBQUMsRUFBRSxDQUFDO0lBQzVDLEtBQUssQ0FBQ0MsSUFBSSxHQUFHTCx3REFBVyxFQUFFTSxRQUFRLEdBQUtBLFFBQVEsQ0FBQ0MsSUFBSSxDQUFDRixJQUFJOztJQUV6RFIsZ0RBQVMsS0FBTyxDQUFDO1FBQ2JJLHFEQUFjLEVBQUUsQ0FBQztJQUNyQixDQUFDLENBQUMsQ0FBQztJQUVILE1BQU0sNkVBQUdDLFdBQVcsQ0FBQ00sUUFBUTtRQUFDQyxLQUFLLEVBQUVKLElBQUk7a0JBQ3BDRCxRQUFROzs7Ozs7QUFFakIsQ0FBQztBQUVNLEtBQUssQ0FBQ00sT0FBTyxPQUFTWixpREFBVSxDQUFDSSxXQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXl3ZWRkaW5nLXdlYi8uL2F1dGguanM/ZjU1ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VDb250ZXh0LCBjcmVhdGVDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgZmlyZWJhc2VDbGllbnQgZnJvbSAnLi9maXJlYmFzZSc7XG5cblxuY29uc3QgQXV0aENvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9KVxuXG5leHBvcnQgZnVuY3Rpb24gRmlyZWJhc2VQcm92aWRlcih7IGNoaWxkcmVuIH0pIHtcbiAgICBjb25zdCB1c2VyID0gdXNlU2VsZWN0b3IoKHJlZHVjZXJzKSA9PiByZWR1Y2Vycy5hdXRoLnVzZXIpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgZmlyZWJhc2VDbGllbnQoKTtcbiAgICB9KTtcblxuICAgIHJldHVybiAoPEF1dGhDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt1c2VyfT5cbiAgICAgICAge2NoaWxkcmVufVxuICAgIDwvQXV0aENvbnRleHQuUHJvdmlkZXI+KVxufVxuXG5leHBvcnQgY29uc3QgdXNlQXV0aCA9ICgpID0+IHVzZUNvbnRleHQoQXV0aENvbnRleHQpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VTZWxlY3RvciIsImZpcmViYXNlQ2xpZW50IiwiQXV0aENvbnRleHQiLCJGaXJlYmFzZVByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1c2VyIiwicmVkdWNlcnMiLCJhdXRoIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsInVzZUF1dGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./auth.js\n");

/***/ }),

/***/ "./firebase.js":
/*!*********************!*\
  !*** ./firebase.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"auth\": () => (/* binding */ auth),\n/* harmony export */   \"db\": () => (/* binding */ db),\n/* harmony export */   \"default\": () => (/* binding */ init),\n/* harmony export */   \"loginWithEmailAndPassword\": () => (/* binding */ loginWithEmailAndPassword),\n/* harmony export */   \"registerWithEmailAndPassword\": () => (/* binding */ registerWithEmailAndPassword),\n/* harmony export */   \"logout\": () => (/* binding */ logout)\n/* harmony export */ });\n/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase */ \"firebase\");\n/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_firestore__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst firebaseConfig = {\n    apiKey: 'AIzaSyDwNEwQ07GCio2bSOc5s2o6qthTzyzpO2Y',\n    authDomain: 'mywedding-3c67a.firebaseapp.com',\n    projectId: 'mywedding-3c67a',\n    storageBucket: 'mywedding-3c67a.appspot.com',\n    messagingSenderId: '429876417546',\n    appId: '1:429876417546:web:8c362874df228eab587bf3',\n    measurementId: 'G-1L461S02HG'\n};\nlet auth;\nlet db;\nfunction init() {\n    if (!(firebase__WEBPACK_IMPORTED_MODULE_0___default().apps.length)) {\n        firebase__WEBPACK_IMPORTED_MODULE_0___default().initializeApp(firebaseConfig);\n    }\n    auth = firebase_app__WEBPACK_IMPORTED_MODULE_2___default().auth();\n    db = firebase__WEBPACK_IMPORTED_MODULE_0___default().firestore();\n};\nconst loginWithEmailAndPassword = async (email, password)=>{\n    try {\n        await auth.signInWithEmailAndPassword(email, password);\n        return {\n            ok: true\n        };\n    } catch (err) {\n        return {\n            ok: false,\n            error: err\n        };\n    }\n};\nconst registerWithEmailAndPassword = async (name, email, password)=>{\n    try {\n        const res = await auth.createUserWithEmailAndPassword(email, password);\n        const user = res.user;\n        await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.addDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(db, \"users\"), {\n            uid: user.uid,\n            name,\n            authProvider: \"local\",\n            email\n        });\n    } catch (err) {\n        alert(err);\n    }\n};\nconst logout = async ()=>await auth.signOut()\n;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9maXJlYmFzZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBK0I7QUFJSjtBQUNXO0FBSXRDLEtBQUssQ0FBQ0ksY0FBYyxHQUFHLENBQUM7SUFDcEJDLE1BQU0sRUFBRSxDQUF5QztJQUNqREMsVUFBVSxFQUFFLENBQWlDO0lBQzdDQyxTQUFTLEVBQUUsQ0FBaUI7SUFDNUJDLGFBQWEsRUFBRSxDQUE2QjtJQUM1Q0MsaUJBQWlCLEVBQUUsQ0FBYztJQUNqQ0MsS0FBSyxFQUFFLENBQTJDO0lBQ2xEQyxhQUFhLEVBQUUsQ0FBYztBQUNqQyxDQUFDO0FBRU0sR0FBRyxDQUFDQyxJQUFJO0FBQ1IsR0FBRyxDQUFDQyxFQUFFO0FBRUUsUUFBUSxDQUFDQyxJQUFJLEdBQUcsQ0FBQztJQUM1QixFQUFFLEdBQUdkLDZEQUFvQixFQUFFLENBQUM7UUFDeEJBLDZEQUFzQixDQUFDSSxjQUFjLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBQ0RRLElBQUksR0FBR1Qsd0RBQWdCLEVBQUUsQ0FBQztJQUMxQlUsRUFBRSxHQUFHYix5REFBa0IsRUFBRSxDQUFDO0FBQzlCLENBQUM7QUFFTSxLQUFLLENBQUNtQix5QkFBeUIsVUFBVUMsS0FBSyxFQUFFQyxRQUFRLEdBQUssQ0FBQztJQUNqRSxHQUFHLENBQUMsQ0FBQztRQUNELEtBQUssQ0FBQ1QsSUFBSSxDQUFDVSwwQkFBMEIsQ0FBQ0YsS0FBSyxFQUFFQyxRQUFRLENBQUMsQ0FBQztRQUN2RCxNQUFNLENBQUMsQ0FBQztZQUFDRSxFQUFFLEVBQUUsSUFBSTtRQUFDLENBQUM7SUFDdkIsQ0FBQyxDQUFDLEtBQUssRUFBRUMsR0FBRyxFQUFFLENBQUM7UUFDWCxNQUFNLENBQUMsQ0FBQztZQUFDRCxFQUFFLEVBQUUsS0FBSztZQUFFRSxLQUFLLEVBQUVELEdBQUc7UUFBQyxDQUFDO0lBQ3BDLENBQUM7QUFDTCxDQUFDO0FBRU0sS0FBSyxDQUFDRSw0QkFBNEIsVUFBVUMsSUFBSSxFQUFFUCxLQUFLLEVBQUVDLFFBQVEsR0FBSyxDQUFDO0lBQzFFLEdBQUcsQ0FBQyxDQUFDO1FBQ0QsS0FBSyxDQUFDTyxHQUFHLEdBQUcsS0FBSyxDQUFDaEIsSUFBSSxDQUFDaUIsOEJBQThCLENBQUNULEtBQUssRUFBRUMsUUFBUTtRQUNyRSxLQUFLLENBQUNTLElBQUksR0FBR0YsR0FBRyxDQUFDRSxJQUFJO1FBQ3JCLEtBQUssQ0FBQzVCLDBEQUFNLENBQUNELDhEQUFVLENBQUNZLEVBQUUsRUFBRSxDQUFPLFNBQUcsQ0FBQztZQUNuQ2tCLEdBQUcsRUFBRUQsSUFBSSxDQUFDQyxHQUFHO1lBQ2JKLElBQUk7WUFDSkssWUFBWSxFQUFFLENBQU87WUFDckJaLEtBQUs7UUFDVCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUMsQ0FBQyxLQUFLLEVBQUVJLEdBQUcsRUFBRSxDQUFDO1FBQ1hTLEtBQUssQ0FBQ1QsR0FBRyxDQUFDLENBQUM7SUFDZixDQUFDO0FBQ0wsQ0FBQztBQUVNLEtBQUssQ0FBQ1UsTUFBTSxhQUFlLEtBQUssQ0FBQ3RCLElBQUksQ0FBQ3VCLE9BQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teXdlZGRpbmctd2ViLy4vZmlyZWJhc2UuanM/NGQ5NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmlyZWJhc2UgZnJvbSBcImZpcmViYXNlXCI7XG5pbXBvcnQge1xuICAgIGNvbGxlY3Rpb24sXG4gICAgYWRkRG9jLFxufSBmcm9tICdmaXJlYmFzZS9maXJlc3RvcmUnO1xuaW1wb3J0IGZpcmViYXNlQXBwIGZyb20gJ2ZpcmViYXNlL2FwcCc7XG5cblxuXG5jb25zdCBmaXJlYmFzZUNvbmZpZyA9IHtcbiAgICBhcGlLZXk6ICdBSXphU3lEd05Fd1EwN0dDaW8yYlNPYzVzMm82cXRoVHp5enBPMlknLFxuICAgIGF1dGhEb21haW46ICdteXdlZGRpbmctM2M2N2EuZmlyZWJhc2VhcHAuY29tJyxcbiAgICBwcm9qZWN0SWQ6ICdteXdlZGRpbmctM2M2N2EnLFxuICAgIHN0b3JhZ2VCdWNrZXQ6ICdteXdlZGRpbmctM2M2N2EuYXBwc3BvdC5jb20nLFxuICAgIG1lc3NhZ2luZ1NlbmRlcklkOiAnNDI5ODc2NDE3NTQ2JyxcbiAgICBhcHBJZDogJzE6NDI5ODc2NDE3NTQ2OndlYjo4YzM2Mjg3NGRmMjI4ZWFiNTg3YmYzJyxcbiAgICBtZWFzdXJlbWVudElkOiAnRy0xTDQ2MVMwMkhHJ1xufTtcblxuZXhwb3J0IGxldCBhdXRoO1xuZXhwb3J0IGxldCBkYjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICBpZiAoIWZpcmViYXNlLmFwcHMubGVuZ3RoKSB7XG4gICAgICAgIGZpcmViYXNlLmluaXRpYWxpemVBcHAoZmlyZWJhc2VDb25maWcpO1xuICAgIH1cbiAgICBhdXRoID0gZmlyZWJhc2VBcHAuYXV0aCgpO1xuICAgIGRiID0gZmlyZWJhc2UuZmlyZXN0b3JlKCk7XG59XG5cbmV4cG9ydCBjb25zdCBsb2dpbldpdGhFbWFpbEFuZFBhc3N3b3JkID0gYXN5bmMgKGVtYWlsLCBwYXNzd29yZCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IGF1dGguc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQoZW1haWwsIHBhc3N3b3JkKTtcbiAgICAgICAgcmV0dXJuIHsgb2s6IHRydWUgfTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgcmV0dXJuIHsgb2s6IGZhbHNlLCBlcnJvcjogZXJyIH07XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgcmVnaXN0ZXJXaXRoRW1haWxBbmRQYXNzd29yZCA9IGFzeW5jIChuYW1lLCBlbWFpbCwgcGFzc3dvcmQpID0+IHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBhdXRoLmNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZChlbWFpbCwgcGFzc3dvcmQpO1xuICAgICAgICBjb25zdCB1c2VyID0gcmVzLnVzZXI7XG4gICAgICAgIGF3YWl0IGFkZERvYyhjb2xsZWN0aW9uKGRiLCBcInVzZXJzXCIpLCB7XG4gICAgICAgICAgICB1aWQ6IHVzZXIudWlkLFxuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIGF1dGhQcm92aWRlcjogXCJsb2NhbFwiLFxuICAgICAgICAgICAgZW1haWwsXG4gICAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBhbGVydChlcnIpO1xuICAgIH1cbn07XG5cbmV4cG9ydCBjb25zdCBsb2dvdXQgPSBhc3luYyAoKSA9PiBhd2FpdCBhdXRoLnNpZ25PdXQoKTtcbiJdLCJuYW1lcyI6WyJmaXJlYmFzZSIsImNvbGxlY3Rpb24iLCJhZGREb2MiLCJmaXJlYmFzZUFwcCIsImZpcmViYXNlQ29uZmlnIiwiYXBpS2V5IiwiYXV0aERvbWFpbiIsInByb2plY3RJZCIsInN0b3JhZ2VCdWNrZXQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsImFwcElkIiwibWVhc3VyZW1lbnRJZCIsImF1dGgiLCJkYiIsImluaXQiLCJhcHBzIiwibGVuZ3RoIiwiaW5pdGlhbGl6ZUFwcCIsImZpcmVzdG9yZSIsImxvZ2luV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJlbWFpbCIsInBhc3N3b3JkIiwic2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJvayIsImVyciIsImVycm9yIiwicmVnaXN0ZXJXaXRoRW1haWxBbmRQYXNzd29yZCIsIm5hbWUiLCJyZXMiLCJjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJ1c2VyIiwidWlkIiwiYXV0aFByb3ZpZGVyIiwiYWxlcnQiLCJsb2dvdXQiLCJzaWduT3V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./firebase.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../firebase */ \"./firebase.js\");\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-devtools-extension */ \"redux-devtools-extension\");\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../auth */ \"./auth.js\");\n/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../reducers */ \"./reducers/index.js\");\n\n\n\n\n\n\n\n\n\nconst store = (0,redux__WEBPACK_IMPORTED_MODULE_6__.createStore)(_reducers__WEBPACK_IMPORTED_MODULE_8__[\"default\"], (0,redux_devtools_extension__WEBPACK_IMPORTED_MODULE_4__.composeWithDevTools)());\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_5__.Provider, {\n        store: store,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_auth__WEBPACK_IMPORTED_MODULE_7__.FirebaseProvider, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"font-varelaround\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\orels\\\\wedding\\\\web-app\\\\mywedding-web\\\\pages\\\\_app.js\",\n                    lineNumber: 17,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\orels\\\\wedding\\\\web-app\\\\mywedding-web\\\\pages\\\\_app.js\",\n                lineNumber: 16,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\orels\\\\wedding\\\\web-app\\\\mywedding-web\\\\pages\\\\_app.js\",\n            lineNumber: 15,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\orels\\\\wedding\\\\web-app\\\\mywedding-web\\\\pages\\\\_app.js\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQThCO0FBQ0c7QUFDQztBQUM0QjtBQUN4QjtBQUNIO0FBQ087QUFDTDtBQUVyQyxLQUFLLENBQUNPLEtBQUssR0FBR0gsa0RBQVcsQ0FBQ0UsaURBQVcsRUFBRUosNkVBQW1CO1NBRWpETSxLQUFLLENBQUMsQ0FBQyxDQUFDQyxTQUFTLEdBQUVDLFNBQVMsRUFBQyxDQUFDLEVBQUUsQ0FBQztJQUN4QyxNQUFNLDZFQUNIUCxpREFBUTtRQUFDSSxLQUFLLEVBQUVBLEtBQUs7OEZBQ25CRixtREFBZ0I7a0dBQ2RNLENBQUc7Z0JBQUNDLFNBQVMsRUFBQyxDQUFrQjtzR0FDOUJILFNBQVM7dUJBQUtDLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtsQyxDQUFDO0FBRUQsaUVBQWVGLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teXdlZGRpbmctd2ViLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJ1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgaW5pdCB9IGZyb20gJy4uL2ZpcmViYXNlJztcbmltcG9ydCB7IGNvbXBvc2VXaXRoRGV2VG9vbHMgfSBmcm9tICdyZWR1eC1kZXZ0b29scy1leHRlbnNpb24nO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBjcmVhdGVTdG9yZSB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB7IEZpcmViYXNlUHJvdmlkZXIgfSBmcm9tICcuLi9hdXRoJztcbmltcG9ydCBhbGxSZWR1Y2VycyBmcm9tICcuLi9yZWR1Y2Vycyc7XG5cbmNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUoYWxsUmVkdWNlcnMsIGNvbXBvc2VXaXRoRGV2VG9vbHMoKSk7XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICByZXR1cm4gKFxuICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgICAgPEZpcmViYXNlUHJvdmlkZXI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb250LXZhcmVsYXJvdW5kJz5cbiAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9GaXJlYmFzZVByb3ZpZGVyPlxuICAgIDwvUHJvdmlkZXI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHBcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJpbml0IiwiY29tcG9zZVdpdGhEZXZUb29scyIsIlByb3ZpZGVyIiwiY3JlYXRlU3RvcmUiLCJGaXJlYmFzZVByb3ZpZGVyIiwiYWxsUmVkdWNlcnMiLCJzdG9yZSIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiZGl2IiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./reducers/auth.js":
/*!**************************!*\
  !*** ./reducers/auth.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _actions_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/auth */ \"./actions/auth.js\");\n\nconst initialState = {\n    user: null\n};\nconst authReducer = (state = initialState, action)=>{\n    switch(action.type){\n        case _actions_auth__WEBPACK_IMPORTED_MODULE_0__.LOGIN:\n            action.user.isAdmin = action.user.role === 'admin';\n            return {\n                ...state,\n                user: action.user\n            };\n        case _actions_auth__WEBPACK_IMPORTED_MODULE_0__.LOGOUT:\n            return null;\n        default:\n            return state;\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (authReducer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWR1Y2Vycy9hdXRoLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQStDO0FBRS9DLEtBQUssQ0FBQ0UsWUFBWSxHQUFHLENBQUM7SUFDbEJDLElBQUksRUFBRSxJQUFJO0FBQ2QsQ0FBQztBQUVELEtBQUssQ0FBQ0MsV0FBVyxJQUFJQyxLQUFLLEdBQUdILFlBQVksRUFBRUksTUFBTSxHQUFLLENBQUM7SUFDbkQsTUFBTSxDQUFFQSxNQUFNLENBQUNDLElBQUk7UUFDZixJQUFJLENBQUNQLGdEQUFLO1lBQ05NLE1BQU0sQ0FBQ0gsSUFBSSxDQUFDSyxPQUFPLEdBQUdGLE1BQU0sQ0FBQ0gsSUFBSSxDQUFDTSxJQUFJLEtBQUssQ0FBTyxPQUFDO1lBQ25ELE1BQU0sQ0FBQyxDQUFDO21CQUFJSixLQUFLO2dCQUFFRixJQUFJLEVBQUVHLE1BQU0sQ0FBQ0gsSUFBSTtZQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDRixpREFBTTtZQUNQLE1BQU0sQ0FBQyxJQUFJOztZQUVYLE1BQU0sQ0FBQ0ksS0FBSzs7QUFFeEIsQ0FBQztBQUVELGlFQUFlRCxXQUFXLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teXdlZGRpbmctd2ViLy4vcmVkdWNlcnMvYXV0aC5qcz9kNGJiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExPR0lOLCBMT0dPVVQgfSBmcm9tICcuLi9hY3Rpb25zL2F1dGgnO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gICAgdXNlcjogbnVsbCxcbn07XG5cbmNvbnN0IGF1dGhSZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgTE9HSU46XG4gICAgICAgICAgICBhY3Rpb24udXNlci5pc0FkbWluID0gYWN0aW9uLnVzZXIucm9sZSA9PT0gJ2FkbWluJztcbiAgICAgICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCB1c2VyOiBhY3Rpb24udXNlciB9O1xuICAgICAgICBjYXNlIExPR09VVDpcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGF1dGhSZWR1Y2VyO1xuIl0sIm5hbWVzIjpbIkxPR0lOIiwiTE9HT1VUIiwiaW5pdGlhbFN0YXRlIiwidXNlciIsImF1dGhSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiaXNBZG1pbiIsInJvbGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./reducers/auth.js\n");

/***/ }),

/***/ "./reducers/index.js":
/*!***************************!*\
  !*** ./reducers/index.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth */ \"./reducers/auth.js\");\n/* harmony import */ var _invited__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./invited */ \"./reducers/invited.js\");\n/* harmony import */ var _items__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./items */ \"./reducers/items.js\");\n/* harmony import */ var _actions_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions/auth */ \"./actions/auth.js\");\n\n\n\n\n\nconst allReducers = (0,redux__WEBPACK_IMPORTED_MODULE_0__.combineReducers)({\n    auth: _auth__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    invited: _invited__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n    items: _items__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n});\nconst rootReducer = (state, action)=>{\n    // let x = LOGOUT;\n    // debugger;\n    // if (action.type === LOGOUT) {\n    //     return allReducers({}, action)\n    // }\n    return allReducers(state, action);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (rootReducer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWR1Y2Vycy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXVDO0FBQ2Q7QUFDTTtBQUNKO0FBQ2E7QUFFeEMsS0FBSyxDQUFDSyxXQUFXLEdBQUdMLHNEQUFlLENBQUMsQ0FBQztJQUNqQ0MsSUFBSTtJQUNKQyxPQUFPO0lBQ1BDLEtBQUs7QUFDVCxDQUFDO0FBRUQsS0FBSyxDQUFDRyxXQUFXLElBQUlDLEtBQUssRUFBRUMsTUFBTSxHQUFLLENBQUM7SUFDcEMsRUFBa0I7SUFDbEIsRUFBWTtJQUNaLEVBQWdDO0lBQ2hDLEVBQXFDO0lBQ3JDLEVBQUk7SUFDSixNQUFNLENBQUNILFdBQVcsQ0FBQ0UsS0FBSyxFQUFFQyxNQUFNO0FBQ3BDLENBQUM7QUFFRCxpRUFBZUYsV0FBVyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXl3ZWRkaW5nLXdlYi8uL3JlZHVjZXJzL2luZGV4LmpzP2I5YjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IGF1dGggZnJvbSAnLi9hdXRoJztcbmltcG9ydCBpbnZpdGVkIGZyb20gJy4vaW52aXRlZCc7XG5pbXBvcnQgaXRlbXMgZnJvbSAnLi9pdGVtcyc7XG5pbXBvcnQgeyBMT0dPVVQgfSBmcm9tICcuLi9hY3Rpb25zL2F1dGgnO1xuXG5jb25zdCBhbGxSZWR1Y2VycyA9IGNvbWJpbmVSZWR1Y2Vycyh7XG4gICAgYXV0aCxcbiAgICBpbnZpdGVkLFxuICAgIGl0ZW1zLFxufSk7XG5cbmNvbnN0IHJvb3RSZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAvLyBsZXQgeCA9IExPR09VVDtcbiAgICAvLyBkZWJ1Z2dlcjtcbiAgICAvLyBpZiAoYWN0aW9uLnR5cGUgPT09IExPR09VVCkge1xuICAgIC8vICAgICByZXR1cm4gYWxsUmVkdWNlcnMoe30sIGFjdGlvbilcbiAgICAvLyB9XG4gICAgcmV0dXJuIGFsbFJlZHVjZXJzKHN0YXRlLCBhY3Rpb24pO1xufVxuXG5leHBvcnQgZGVmYXVsdCByb290UmVkdWNlcjsiXSwibmFtZXMiOlsiY29tYmluZVJlZHVjZXJzIiwiYXV0aCIsImludml0ZWQiLCJpdGVtcyIsIkxPR09VVCIsImFsbFJlZHVjZXJzIiwicm9vdFJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./reducers/index.js\n");

/***/ }),

/***/ "./reducers/invited.js":
/*!*****************************!*\
  !*** ./reducers/invited.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _actions_invited__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/invited */ \"./actions/invited.js\");\n\nconst initialState = {\n    invited: null\n};\nconst invitedReducer = (state = initialState, action)=>{\n    switch(action.type){\n        case _actions_invited__WEBPACK_IMPORTED_MODULE_0__.SET_INVITED:\n            return {\n                ...state,\n                invited: action.invited\n            };\n        case _actions_invited__WEBPACK_IMPORTED_MODULE_0__.CLEAR_INVITED:\n            return null;\n        default:\n            return state;\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (invitedReducer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWR1Y2Vycy9pbnZpdGVkLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQStEO0FBRS9ELEtBQUssQ0FBQ0UsWUFBWSxHQUFHLENBQUM7SUFDbEJDLE9BQU8sRUFBRSxJQUFJO0FBQ2pCLENBQUM7QUFFRCxLQUFLLENBQUNDLGNBQWMsSUFBSUMsS0FBSyxHQUFHSCxZQUFZLEVBQUVJLE1BQU0sR0FBSyxDQUFDO0lBQ3RELE1BQU0sQ0FBRUEsTUFBTSxDQUFDQyxJQUFJO1FBQ2YsSUFBSSxDQUFDUCx5REFBVztZQUNaLE1BQU0sQ0FBQyxDQUFDO21CQUFJSyxLQUFLO2dCQUFFRixPQUFPLEVBQUVHLE1BQU0sQ0FBQ0gsT0FBTztZQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDRiwyREFBYTtZQUNkLE1BQU0sQ0FBQyxJQUFJOztZQUVYLE1BQU0sQ0FBQ0ksS0FBSzs7QUFFeEIsQ0FBQztBQUVELGlFQUFlRCxjQUFjLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teXdlZGRpbmctd2ViLy4vcmVkdWNlcnMvaW52aXRlZC5qcz8yYTJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNFVF9JTlZJVEVELCBDTEVBUl9JTlZJVEVEIH0gZnJvbSAnLi4vYWN0aW9ucy9pbnZpdGVkJztcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICAgIGludml0ZWQ6IG51bGwsXG59O1xuXG5jb25zdCBpbnZpdGVkUmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlIFNFVF9JTlZJVEVEOlxuICAgICAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGludml0ZWQ6IGFjdGlvbi5pbnZpdGVkIH07XG4gICAgICAgIGNhc2UgQ0xFQVJfSU5WSVRFRDpcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGludml0ZWRSZWR1Y2VyO1xuIl0sIm5hbWVzIjpbIlNFVF9JTlZJVEVEIiwiQ0xFQVJfSU5WSVRFRCIsImluaXRpYWxTdGF0ZSIsImludml0ZWQiLCJpbnZpdGVkUmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./reducers/invited.js\n");

/***/ }),

/***/ "./reducers/items.js":
/*!***************************!*\
  !*** ./reducers/items.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _actions_items__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/items */ \"./actions/items.js\");\n\nconst initialState = {\n    userItems: {},\n    dj: [],\n    dresses: [],\n    halls: []\n};\nfunction jsonConcat(j1, j2) {\n    for(var key in j2){\n        j1[key] = j2[key];\n    }\n    return j1;\n}\nconst itemsReducer = (state = initialState, action)=>{\n    switch(action.type){\n        case _actions_items__WEBPACK_IMPORTED_MODULE_0__.ADD_USER_ITEMS:\n            return {\n                ...state,\n                userItems: jsonConcat(state.userItems, action.items)\n            };\n        case _actions_items__WEBPACK_IMPORTED_MODULE_0__.ADD_ITEMS:\n        case _actions_items__WEBPACK_IMPORTED_MODULE_0__.CLEAR_ITEMS:\n            return null;\n        default:\n            return state;\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (itemsReducer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWR1Y2Vycy9pdGVtcy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUMyQztBQUUzQyxLQUFLLENBQUNDLFlBQVksR0FBRyxDQUFDO0lBQ2xCQyxTQUFTLEVBQUUsQ0FBQyxDQUFDO0lBQ2JDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDTkMsT0FBTyxFQUFFLENBQUMsQ0FBQztJQUNYQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO0FBQ2IsQ0FBQztTQUVRQyxVQUFVLENBQUNDLEVBQUUsRUFBRUMsRUFBRSxFQUFFLENBQUM7SUFDekIsR0FBRyxDQUFFLEdBQUcsQ0FBQ0MsR0FBRyxJQUFJRCxFQUFFLENBQUUsQ0FBQztRQUNqQkQsRUFBRSxDQUFDRSxHQUFHLElBQUlELEVBQUUsQ0FBQ0MsR0FBRyxDQUFDLENBQUM7SUFDdEIsQ0FBQztJQUNELE1BQU0sQ0FBQ0YsRUFBRTtBQUNiLENBQUM7QUFFRCxLQUFLLENBQUNHLFlBQVksSUFBSUMsS0FBSyxHQUFHVixZQUFZLEVBQUVXLE1BQU0sR0FBSyxDQUFDO0lBQ3BELE1BQU0sQ0FBRUEsTUFBTSxDQUFDQyxJQUFJO1FBQ2YsSUFBSSxDQUFDYiwwREFBc0I7WUFDdkIsTUFBTSxDQUFDLENBQUM7bUJBQUlXLEtBQUs7Z0JBQUVULFNBQVMsRUFBRUksVUFBVSxDQUFDSyxLQUFLLENBQUNULFNBQVMsRUFBRVUsTUFBTSxDQUFDRyxLQUFLO1lBQUUsQ0FBQztRQUM3RSxJQUFJLENBQUNmLHFEQUFpQjtRQUV0QixJQUFJLENBQUNBLHVEQUFtQjtZQUNwQixNQUFNLENBQUMsSUFBSTs7WUFFWCxNQUFNLENBQUNXLEtBQUs7O0FBRXhCLENBQUM7QUFFRCxpRUFBZUQsWUFBWSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXl3ZWRkaW5nLXdlYi8uL3JlZHVjZXJzL2l0ZW1zLmpzP2QwY2IiXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMvaXRlbXMnO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gICAgdXNlckl0ZW1zOiB7fSxcbiAgICBkajogW10sXG4gICAgZHJlc3NlczogW10sXG4gICAgaGFsbHM6IFtdLFxufTtcblxuZnVuY3Rpb24ganNvbkNvbmNhdChqMSwgajIpIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gajIpIHtcbiAgICAgICAgajFba2V5XSA9IGoyW2tleV07XG4gICAgfVxuICAgIHJldHVybiBqMTtcbn1cblxuY29uc3QgaXRlbXNSZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgYWN0aW9ucy5BRERfVVNFUl9JVEVNUzpcbiAgICAgICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCB1c2VySXRlbXM6IGpzb25Db25jYXQoc3RhdGUudXNlckl0ZW1zLCBhY3Rpb24uaXRlbXMpIH07XG4gICAgICAgIGNhc2UgYWN0aW9ucy5BRERfSVRFTVM6XG5cbiAgICAgICAgY2FzZSBhY3Rpb25zLkNMRUFSX0lURU1TOlxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgaXRlbXNSZWR1Y2VyO1xuXG5cbiJdLCJuYW1lcyI6WyJhY3Rpb25zIiwiaW5pdGlhbFN0YXRlIiwidXNlckl0ZW1zIiwiZGoiLCJkcmVzc2VzIiwiaGFsbHMiLCJqc29uQ29uY2F0IiwiajEiLCJqMiIsImtleSIsIml0ZW1zUmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsIkFERF9VU0VSX0lURU1TIiwiaXRlbXMiLCJBRERfSVRFTVMiLCJDTEVBUl9JVEVNUyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./reducers/items.js\n");

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