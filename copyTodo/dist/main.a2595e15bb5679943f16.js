/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://webpack-course/./src/css/style.css?");

/***/ }),

/***/ "./node_modules/redux/es/redux.js":
/*!****************************************!*\
  !*** ./node_modules/redux/es/redux.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__DO_NOT_USE__ActionTypes\": () => (/* binding */ ActionTypes),\n/* harmony export */   \"applyMiddleware\": () => (/* binding */ applyMiddleware),\n/* harmony export */   \"bindActionCreators\": () => (/* binding */ bindActionCreators),\n/* harmony export */   \"combineReducers\": () => (/* binding */ combineReducers),\n/* harmony export */   \"compose\": () => (/* binding */ compose),\n/* harmony export */   \"createStore\": () => (/* binding */ createStore)\n/* harmony export */ });\n/* harmony import */ var symbol_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! symbol-observable */ \"./node_modules/symbol-observable/es/index.js\");\n\n\n/**\n * These are private action types reserved by Redux.\n * For any unknown actions, you must return the current state.\n * If the current state is undefined, you must return the initial state.\n * Do not reference these action types directly in your code.\n */\nvar randomString = function randomString() {\n  return Math.random().toString(36).substring(7).split('').join('.');\n};\n\nvar ActionTypes = {\n  INIT: \"@@redux/INIT\" + randomString(),\n  REPLACE: \"@@redux/REPLACE\" + randomString(),\n  PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {\n    return \"@@redux/PROBE_UNKNOWN_ACTION\" + randomString();\n  }\n};\n\n/**\n * @param {any} obj The object to inspect.\n * @returns {boolean} True if the argument appears to be a plain object.\n */\nfunction isPlainObject(obj) {\n  if (typeof obj !== 'object' || obj === null) return false;\n  var proto = obj;\n\n  while (Object.getPrototypeOf(proto) !== null) {\n    proto = Object.getPrototypeOf(proto);\n  }\n\n  return Object.getPrototypeOf(obj) === proto;\n}\n\n/**\n * Creates a Redux store that holds the state tree.\n * The only way to change the data in the store is to call `dispatch()` on it.\n *\n * There should only be a single store in your app. To specify how different\n * parts of the state tree respond to actions, you may combine several reducers\n * into a single reducer function by using `combineReducers`.\n *\n * @param {Function} reducer A function that returns the next state tree, given\n * the current state tree and the action to handle.\n *\n * @param {any} [preloadedState] The initial state. You may optionally specify it\n * to hydrate the state from the server in universal apps, or to restore a\n * previously serialized user session.\n * If you use `combineReducers` to produce the root reducer function, this must be\n * an object with the same shape as `combineReducers` keys.\n *\n * @param {Function} [enhancer] The store enhancer. You may optionally specify it\n * to enhance the store with third-party capabilities such as middleware,\n * time travel, persistence, etc. The only store enhancer that ships with Redux\n * is `applyMiddleware()`.\n *\n * @returns {Store} A Redux store that lets you read the state, dispatch actions\n * and subscribe to changes.\n */\n\nfunction createStore(reducer, preloadedState, enhancer) {\n  var _ref2;\n\n  if (typeof preloadedState === 'function' && typeof enhancer === 'function' || typeof enhancer === 'function' && typeof arguments[3] === 'function') {\n    throw new Error('It looks like you are passing several store enhancers to ' + 'createStore(). This is not supported. Instead, compose them ' + 'together to a single function.');\n  }\n\n  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {\n    enhancer = preloadedState;\n    preloadedState = undefined;\n  }\n\n  if (typeof enhancer !== 'undefined') {\n    if (typeof enhancer !== 'function') {\n      throw new Error('Expected the enhancer to be a function.');\n    }\n\n    return enhancer(createStore)(reducer, preloadedState);\n  }\n\n  if (typeof reducer !== 'function') {\n    throw new Error('Expected the reducer to be a function.');\n  }\n\n  var currentReducer = reducer;\n  var currentState = preloadedState;\n  var currentListeners = [];\n  var nextListeners = currentListeners;\n  var isDispatching = false;\n  /**\n   * This makes a shallow copy of currentListeners so we can use\n   * nextListeners as a temporary list while dispatching.\n   *\n   * This prevents any bugs around consumers calling\n   * subscribe/unsubscribe in the middle of a dispatch.\n   */\n\n  function ensureCanMutateNextListeners() {\n    if (nextListeners === currentListeners) {\n      nextListeners = currentListeners.slice();\n    }\n  }\n  /**\n   * Reads the state tree managed by the store.\n   *\n   * @returns {any} The current state tree of your application.\n   */\n\n\n  function getState() {\n    if (isDispatching) {\n      throw new Error('You may not call store.getState() while the reducer is executing. ' + 'The reducer has already received the state as an argument. ' + 'Pass it down from the top reducer instead of reading it from the store.');\n    }\n\n    return currentState;\n  }\n  /**\n   * Adds a change listener. It will be called any time an action is dispatched,\n   * and some part of the state tree may potentially have changed. You may then\n   * call `getState()` to read the current state tree inside the callback.\n   *\n   * You may call `dispatch()` from a change listener, with the following\n   * caveats:\n   *\n   * 1. The subscriptions are snapshotted just before every `dispatch()` call.\n   * If you subscribe or unsubscribe while the listeners are being invoked, this\n   * will not have any effect on the `dispatch()` that is currently in progress.\n   * However, the next `dispatch()` call, whether nested or not, will use a more\n   * recent snapshot of the subscription list.\n   *\n   * 2. The listener should not expect to see all state changes, as the state\n   * might have been updated multiple times during a nested `dispatch()` before\n   * the listener is called. It is, however, guaranteed that all subscribers\n   * registered before the `dispatch()` started will be called with the latest\n   * state by the time it exits.\n   *\n   * @param {Function} listener A callback to be invoked on every dispatch.\n   * @returns {Function} A function to remove this change listener.\n   */\n\n\n  function subscribe(listener) {\n    if (typeof listener !== 'function') {\n      throw new Error('Expected the listener to be a function.');\n    }\n\n    if (isDispatching) {\n      throw new Error('You may not call store.subscribe() while the reducer is executing. ' + 'If you would like to be notified after the store has been updated, subscribe from a ' + 'component and invoke store.getState() in the callback to access the latest state. ' + 'See https://redux.js.org/api-reference/store#subscribelistener for more details.');\n    }\n\n    var isSubscribed = true;\n    ensureCanMutateNextListeners();\n    nextListeners.push(listener);\n    return function unsubscribe() {\n      if (!isSubscribed) {\n        return;\n      }\n\n      if (isDispatching) {\n        throw new Error('You may not unsubscribe from a store listener while the reducer is executing. ' + 'See https://redux.js.org/api-reference/store#subscribelistener for more details.');\n      }\n\n      isSubscribed = false;\n      ensureCanMutateNextListeners();\n      var index = nextListeners.indexOf(listener);\n      nextListeners.splice(index, 1);\n      currentListeners = null;\n    };\n  }\n  /**\n   * Dispatches an action. It is the only way to trigger a state change.\n   *\n   * The `reducer` function, used to create the store, will be called with the\n   * current state tree and the given `action`. Its return value will\n   * be considered the **next** state of the tree, and the change listeners\n   * will be notified.\n   *\n   * The base implementation only supports plain object actions. If you want to\n   * dispatch a Promise, an Observable, a thunk, or something else, you need to\n   * wrap your store creating function into the corresponding middleware. For\n   * example, see the documentation for the `redux-thunk` package. Even the\n   * middleware will eventually dispatch plain object actions using this method.\n   *\n   * @param {Object} action A plain object representing “what changed”. It is\n   * a good idea to keep actions serializable so you can record and replay user\n   * sessions, or use the time travelling `redux-devtools`. An action must have\n   * a `type` property which may not be `undefined`. It is a good idea to use\n   * string constants for action types.\n   *\n   * @returns {Object} For convenience, the same action object you dispatched.\n   *\n   * Note that, if you use a custom middleware, it may wrap `dispatch()` to\n   * return something else (for example, a Promise you can await).\n   */\n\n\n  function dispatch(action) {\n    if (!isPlainObject(action)) {\n      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');\n    }\n\n    if (typeof action.type === 'undefined') {\n      throw new Error('Actions may not have an undefined \"type\" property. ' + 'Have you misspelled a constant?');\n    }\n\n    if (isDispatching) {\n      throw new Error('Reducers may not dispatch actions.');\n    }\n\n    try {\n      isDispatching = true;\n      currentState = currentReducer(currentState, action);\n    } finally {\n      isDispatching = false;\n    }\n\n    var listeners = currentListeners = nextListeners;\n\n    for (var i = 0; i < listeners.length; i++) {\n      var listener = listeners[i];\n      listener();\n    }\n\n    return action;\n  }\n  /**\n   * Replaces the reducer currently used by the store to calculate the state.\n   *\n   * You might need this if your app implements code splitting and you want to\n   * load some of the reducers dynamically. You might also need this if you\n   * implement a hot reloading mechanism for Redux.\n   *\n   * @param {Function} nextReducer The reducer for the store to use instead.\n   * @returns {void}\n   */\n\n\n  function replaceReducer(nextReducer) {\n    if (typeof nextReducer !== 'function') {\n      throw new Error('Expected the nextReducer to be a function.');\n    }\n\n    currentReducer = nextReducer; // This action has a similiar effect to ActionTypes.INIT.\n    // Any reducers that existed in both the new and old rootReducer\n    // will receive the previous state. This effectively populates\n    // the new state tree with any relevant data from the old one.\n\n    dispatch({\n      type: ActionTypes.REPLACE\n    });\n  }\n  /**\n   * Interoperability point for observable/reactive libraries.\n   * @returns {observable} A minimal observable of state changes.\n   * For more information, see the observable proposal:\n   * https://github.com/tc39/proposal-observable\n   */\n\n\n  function observable() {\n    var _ref;\n\n    var outerSubscribe = subscribe;\n    return _ref = {\n      /**\n       * The minimal observable subscription method.\n       * @param {Object} observer Any object that can be used as an observer.\n       * The observer object should have a `next` method.\n       * @returns {subscription} An object with an `unsubscribe` method that can\n       * be used to unsubscribe the observable from the store, and prevent further\n       * emission of values from the observable.\n       */\n      subscribe: function subscribe(observer) {\n        if (typeof observer !== 'object' || observer === null) {\n          throw new TypeError('Expected the observer to be an object.');\n        }\n\n        function observeState() {\n          if (observer.next) {\n            observer.next(getState());\n          }\n        }\n\n        observeState();\n        var unsubscribe = outerSubscribe(observeState);\n        return {\n          unsubscribe: unsubscribe\n        };\n      }\n    }, _ref[symbol_observable__WEBPACK_IMPORTED_MODULE_0__.default] = function () {\n      return this;\n    }, _ref;\n  } // When a store is created, an \"INIT\" action is dispatched so that every\n  // reducer returns their initial state. This effectively populates\n  // the initial state tree.\n\n\n  dispatch({\n    type: ActionTypes.INIT\n  });\n  return _ref2 = {\n    dispatch: dispatch,\n    subscribe: subscribe,\n    getState: getState,\n    replaceReducer: replaceReducer\n  }, _ref2[symbol_observable__WEBPACK_IMPORTED_MODULE_0__.default] = observable, _ref2;\n}\n\n/**\n * Prints a warning in the console if it exists.\n *\n * @param {String} message The warning message.\n * @returns {void}\n */\nfunction warning(message) {\n  /* eslint-disable no-console */\n  if (typeof console !== 'undefined' && typeof console.error === 'function') {\n    console.error(message);\n  }\n  /* eslint-enable no-console */\n\n\n  try {\n    // This error was thrown as a convenience so that if you enable\n    // \"break on all exceptions\" in your console,\n    // it would pause the execution at this line.\n    throw new Error(message);\n  } catch (e) {} // eslint-disable-line no-empty\n\n}\n\nfunction getUndefinedStateErrorMessage(key, action) {\n  var actionType = action && action.type;\n  var actionDescription = actionType && \"action \\\"\" + String(actionType) + \"\\\"\" || 'an action';\n  return \"Given \" + actionDescription + \", reducer \\\"\" + key + \"\\\" returned undefined. \" + \"To ignore an action, you must explicitly return the previous state. \" + \"If you want this reducer to hold no value, you can return null instead of undefined.\";\n}\n\nfunction getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {\n  var reducerKeys = Object.keys(reducers);\n  var argumentName = action && action.type === ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';\n\n  if (reducerKeys.length === 0) {\n    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';\n  }\n\n  if (!isPlainObject(inputState)) {\n    return \"The \" + argumentName + \" has unexpected type of \\\"\" + {}.toString.call(inputState).match(/\\s([a-z|A-Z]+)/)[1] + \"\\\". Expected argument to be an object with the following \" + (\"keys: \\\"\" + reducerKeys.join('\", \"') + \"\\\"\");\n  }\n\n  var unexpectedKeys = Object.keys(inputState).filter(function (key) {\n    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];\n  });\n  unexpectedKeys.forEach(function (key) {\n    unexpectedKeyCache[key] = true;\n  });\n  if (action && action.type === ActionTypes.REPLACE) return;\n\n  if (unexpectedKeys.length > 0) {\n    return \"Unexpected \" + (unexpectedKeys.length > 1 ? 'keys' : 'key') + \" \" + (\"\\\"\" + unexpectedKeys.join('\", \"') + \"\\\" found in \" + argumentName + \". \") + \"Expected to find one of the known reducer keys instead: \" + (\"\\\"\" + reducerKeys.join('\", \"') + \"\\\". Unexpected keys will be ignored.\");\n  }\n}\n\nfunction assertReducerShape(reducers) {\n  Object.keys(reducers).forEach(function (key) {\n    var reducer = reducers[key];\n    var initialState = reducer(undefined, {\n      type: ActionTypes.INIT\n    });\n\n    if (typeof initialState === 'undefined') {\n      throw new Error(\"Reducer \\\"\" + key + \"\\\" returned undefined during initialization. \" + \"If the state passed to the reducer is undefined, you must \" + \"explicitly return the initial state. The initial state may \" + \"not be undefined. If you don't want to set a value for this reducer, \" + \"you can use null instead of undefined.\");\n    }\n\n    if (typeof reducer(undefined, {\n      type: ActionTypes.PROBE_UNKNOWN_ACTION()\n    }) === 'undefined') {\n      throw new Error(\"Reducer \\\"\" + key + \"\\\" returned undefined when probed with a random type. \" + (\"Don't try to handle \" + ActionTypes.INIT + \" or other actions in \\\"redux/*\\\" \") + \"namespace. They are considered private. Instead, you must return the \" + \"current state for any unknown actions, unless it is undefined, \" + \"in which case you must return the initial state, regardless of the \" + \"action type. The initial state may not be undefined, but can be null.\");\n    }\n  });\n}\n/**\n * Turns an object whose values are different reducer functions, into a single\n * reducer function. It will call every child reducer, and gather their results\n * into a single state object, whose keys correspond to the keys of the passed\n * reducer functions.\n *\n * @param {Object} reducers An object whose values correspond to different\n * reducer functions that need to be combined into one. One handy way to obtain\n * it is to use ES6 `import * as reducers` syntax. The reducers may never return\n * undefined for any action. Instead, they should return their initial state\n * if the state passed to them was undefined, and the current state for any\n * unrecognized action.\n *\n * @returns {Function} A reducer function that invokes every reducer inside the\n * passed object, and builds a state object with the same shape.\n */\n\n\nfunction combineReducers(reducers) {\n  var reducerKeys = Object.keys(reducers);\n  var finalReducers = {};\n\n  for (var i = 0; i < reducerKeys.length; i++) {\n    var key = reducerKeys[i];\n\n    if (true) {\n      if (typeof reducers[key] === 'undefined') {\n        warning(\"No reducer provided for key \\\"\" + key + \"\\\"\");\n      }\n    }\n\n    if (typeof reducers[key] === 'function') {\n      finalReducers[key] = reducers[key];\n    }\n  }\n\n  var finalReducerKeys = Object.keys(finalReducers); // This is used to make sure we don't warn about the same\n  // keys multiple times.\n\n  var unexpectedKeyCache;\n\n  if (true) {\n    unexpectedKeyCache = {};\n  }\n\n  var shapeAssertionError;\n\n  try {\n    assertReducerShape(finalReducers);\n  } catch (e) {\n    shapeAssertionError = e;\n  }\n\n  return function combination(state, action) {\n    if (state === void 0) {\n      state = {};\n    }\n\n    if (shapeAssertionError) {\n      throw shapeAssertionError;\n    }\n\n    if (true) {\n      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);\n\n      if (warningMessage) {\n        warning(warningMessage);\n      }\n    }\n\n    var hasChanged = false;\n    var nextState = {};\n\n    for (var _i = 0; _i < finalReducerKeys.length; _i++) {\n      var _key = finalReducerKeys[_i];\n      var reducer = finalReducers[_key];\n      var previousStateForKey = state[_key];\n      var nextStateForKey = reducer(previousStateForKey, action);\n\n      if (typeof nextStateForKey === 'undefined') {\n        var errorMessage = getUndefinedStateErrorMessage(_key, action);\n        throw new Error(errorMessage);\n      }\n\n      nextState[_key] = nextStateForKey;\n      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;\n    }\n\n    hasChanged = hasChanged || finalReducerKeys.length !== Object.keys(state).length;\n    return hasChanged ? nextState : state;\n  };\n}\n\nfunction bindActionCreator(actionCreator, dispatch) {\n  return function () {\n    return dispatch(actionCreator.apply(this, arguments));\n  };\n}\n/**\n * Turns an object whose values are action creators, into an object with the\n * same keys, but with every function wrapped into a `dispatch` call so they\n * may be invoked directly. This is just a convenience method, as you can call\n * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.\n *\n * For convenience, you can also pass an action creator as the first argument,\n * and get a dispatch wrapped function in return.\n *\n * @param {Function|Object} actionCreators An object whose values are action\n * creator functions. One handy way to obtain it is to use ES6 `import * as`\n * syntax. You may also pass a single function.\n *\n * @param {Function} dispatch The `dispatch` function available on your Redux\n * store.\n *\n * @returns {Function|Object} The object mimicking the original object, but with\n * every action creator wrapped into the `dispatch` call. If you passed a\n * function as `actionCreators`, the return value will also be a single\n * function.\n */\n\n\nfunction bindActionCreators(actionCreators, dispatch) {\n  if (typeof actionCreators === 'function') {\n    return bindActionCreator(actionCreators, dispatch);\n  }\n\n  if (typeof actionCreators !== 'object' || actionCreators === null) {\n    throw new Error(\"bindActionCreators expected an object or a function, instead received \" + (actionCreators === null ? 'null' : typeof actionCreators) + \". \" + \"Did you write \\\"import ActionCreators from\\\" instead of \\\"import * as ActionCreators from\\\"?\");\n  }\n\n  var boundActionCreators = {};\n\n  for (var key in actionCreators) {\n    var actionCreator = actionCreators[key];\n\n    if (typeof actionCreator === 'function') {\n      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);\n    }\n  }\n\n  return boundActionCreators;\n}\n\nfunction _defineProperty(obj, key, value) {\n  if (key in obj) {\n    Object.defineProperty(obj, key, {\n      value: value,\n      enumerable: true,\n      configurable: true,\n      writable: true\n    });\n  } else {\n    obj[key] = value;\n  }\n\n  return obj;\n}\n\nfunction ownKeys(object, enumerableOnly) {\n  var keys = Object.keys(object);\n\n  if (Object.getOwnPropertySymbols) {\n    keys.push.apply(keys, Object.getOwnPropertySymbols(object));\n  }\n\n  if (enumerableOnly) keys = keys.filter(function (sym) {\n    return Object.getOwnPropertyDescriptor(object, sym).enumerable;\n  });\n  return keys;\n}\n\nfunction _objectSpread2(target) {\n  for (var i = 1; i < arguments.length; i++) {\n    var source = arguments[i] != null ? arguments[i] : {};\n\n    if (i % 2) {\n      ownKeys(source, true).forEach(function (key) {\n        _defineProperty(target, key, source[key]);\n      });\n    } else if (Object.getOwnPropertyDescriptors) {\n      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));\n    } else {\n      ownKeys(source).forEach(function (key) {\n        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));\n      });\n    }\n  }\n\n  return target;\n}\n\n/**\n * Composes single-argument functions from right to left. The rightmost\n * function can take multiple arguments as it provides the signature for\n * the resulting composite function.\n *\n * @param {...Function} funcs The functions to compose.\n * @returns {Function} A function obtained by composing the argument functions\n * from right to left. For example, compose(f, g, h) is identical to doing\n * (...args) => f(g(h(...args))).\n */\nfunction compose() {\n  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {\n    funcs[_key] = arguments[_key];\n  }\n\n  if (funcs.length === 0) {\n    return function (arg) {\n      return arg;\n    };\n  }\n\n  if (funcs.length === 1) {\n    return funcs[0];\n  }\n\n  return funcs.reduce(function (a, b) {\n    return function () {\n      return a(b.apply(void 0, arguments));\n    };\n  });\n}\n\n/**\n * Creates a store enhancer that applies middleware to the dispatch method\n * of the Redux store. This is handy for a variety of tasks, such as expressing\n * asynchronous actions in a concise manner, or logging every action payload.\n *\n * See `redux-thunk` package as an example of the Redux middleware.\n *\n * Because middleware is potentially asynchronous, this should be the first\n * store enhancer in the composition chain.\n *\n * Note that each middleware will be given the `dispatch` and `getState` functions\n * as named arguments.\n *\n * @param {...Function} middlewares The middleware chain to be applied.\n * @returns {Function} A store enhancer applying the middleware.\n */\n\nfunction applyMiddleware() {\n  for (var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++) {\n    middlewares[_key] = arguments[_key];\n  }\n\n  return function (createStore) {\n    return function () {\n      var store = createStore.apply(void 0, arguments);\n\n      var _dispatch = function dispatch() {\n        throw new Error('Dispatching while constructing your middleware is not allowed. ' + 'Other middleware would not be applied to this dispatch.');\n      };\n\n      var middlewareAPI = {\n        getState: store.getState,\n        dispatch: function dispatch() {\n          return _dispatch.apply(void 0, arguments);\n        }\n      };\n      var chain = middlewares.map(function (middleware) {\n        return middleware(middlewareAPI);\n      });\n      _dispatch = compose.apply(void 0, chain)(store.dispatch);\n      return _objectSpread2({}, store, {\n        dispatch: _dispatch\n      });\n    };\n  };\n}\n\n/*\n * This is a dummy function to check if the function name has been altered by minification.\n * If the function has been minified and NODE_ENV !== 'production', warn the user.\n */\n\nfunction isCrushed() {}\n\nif ( true && typeof isCrushed.name === 'string' && isCrushed.name !== 'isCrushed') {\n  warning('You are currently using minified code outside of NODE_ENV === \"production\". ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or setting mode to production in webpack (https://webpack.js.org/concepts/mode/) ' + 'to ensure you have the correct code for your production build.');\n}\n\n\n\n\n//# sourceURL=webpack://webpack-course/./node_modules/redux/es/redux.js?");

/***/ }),

/***/ "./node_modules/symbol-observable/es/index.js":
/*!****************************************************!*\
  !*** ./node_modules/symbol-observable/es/index.js ***!
  \****************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _ponyfill_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ponyfill.js */ \"./node_modules/symbol-observable/es/ponyfill.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n/* global window */\n\n\nvar root;\n\nif (typeof self !== 'undefined') {\n  root = self;\n} else if (typeof window !== 'undefined') {\n  root = window;\n} else if (typeof __webpack_require__.g !== 'undefined') {\n  root = __webpack_require__.g;\n} else if (true) {\n  root = module;\n} else {}\n\nvar result = (0,_ponyfill_js__WEBPACK_IMPORTED_MODULE_0__.default)(root);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (result);\n\n\n//# sourceURL=webpack://webpack-course/./node_modules/symbol-observable/es/index.js?");

/***/ }),

/***/ "./node_modules/symbol-observable/es/ponyfill.js":
/*!*******************************************************!*\
  !*** ./node_modules/symbol-observable/es/ponyfill.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ symbolObservablePonyfill)\n/* harmony export */ });\nfunction symbolObservablePonyfill(root) {\n\tvar result;\n\tvar Symbol = root.Symbol;\n\n\tif (typeof Symbol === 'function') {\n\t\tif (Symbol.observable) {\n\t\t\tresult = Symbol.observable;\n\t\t} else {\n\t\t\tresult = Symbol('observable');\n\t\t\tSymbol.observable = result;\n\t\t}\n\t} else {\n\t\tresult = '@@observable';\n\t}\n\n\treturn result;\n};\n\n\n//# sourceURL=webpack://webpack-course/./node_modules/symbol-observable/es/ponyfill.js?");

/***/ }),

/***/ "./src/js/components/todoNode.js":
/*!***************************************!*\
  !*** ./src/js/components/todoNode.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"todoNode\": () => (/* binding */ todoNode)\n/* harmony export */ });\nconst todoNode = ({ id, value, completed, important }) => {\r\n  return `\r\n    <li class='todo-item' id=${id} data-id=${id}>\r\n    <span class=\"text-todo\">${value}</span>\r\n  \t\t<div class=\"todo-buttons\">\r\n              <button class=\"todo-remove\"></button>\r\n              <button class=\"todo-complete ${completed ? 'check' : 'uncheck'}\"></button>\r\n              <button class=\"todo-important ${important ? 'important' : 'noimportant'}\"></button>\r\n          </div>\r\n    </li>\r\n    `;\r\n};\r\n\n\n//# sourceURL=webpack://webpack-course/./src/js/components/todoNode.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"store\": () => (/* binding */ store)\n/* harmony export */ });\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/style.css */ \"./src/css/style.css\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n/* harmony import */ var _redux_rootReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./redux/rootReducer */ \"./src/js/redux/rootReducer.js\");\n/* harmony import */ var _modules_outTodo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/outTodo */ \"./src/js/modules/outTodo.js\");\n/* harmony import */ var _modules_addedTodo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/addedTodo */ \"./src/js/modules/addedTodo.js\");\n/* harmony import */ var _modules_manageTodo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/manageTodo */ \"./src/js/modules/manageTodo.js\");\n/* harmony import */ var _modules_manageTab__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/manageTab */ \"./src/js/modules/manageTab.js\");\n/* harmony import */ var _modules_getTodo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/getTodo */ \"./src/js/modules/getTodo.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils */ \"./src/js/utils.js\");\n/* harmony import */ var _modules_searchTodo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/searchTodo */ \"./src/js/modules/searchTodo.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst store = (0,redux__WEBPACK_IMPORTED_MODULE_9__.createStore)(_redux_rootReducer__WEBPACK_IMPORTED_MODULE_1__.default);\r\nstore.subscribe(() => {\r\n  (0,_modules_outTodo__WEBPACK_IMPORTED_MODULE_2__.outTodo)((0,_modules_getTodo__WEBPACK_IMPORTED_MODULE_6__.filterTodo)());\r\n  (0,_utils__WEBPACK_IMPORTED_MODULE_7__.addToStorage)(store.getState().todos);\r\n});\r\n\r\n(0,_modules_searchTodo__WEBPACK_IMPORTED_MODULE_8__.searchTodo)();\r\n(0,_modules_outTodo__WEBPACK_IMPORTED_MODULE_2__.outTodo)((0,_modules_getTodo__WEBPACK_IMPORTED_MODULE_6__.filterTodo)());\r\n(0,_modules_addedTodo__WEBPACK_IMPORTED_MODULE_3__.addedTodo)();\r\n(0,_modules_manageTodo__WEBPACK_IMPORTED_MODULE_4__.manageTodo)();\r\n(0,_modules_manageTab__WEBPACK_IMPORTED_MODULE_5__.manageTab)();\r\n\n\n//# sourceURL=webpack://webpack-course/./src/js/index.js?");

/***/ }),

/***/ "./src/js/modules/addedTodo.js":
/*!*************************************!*\
  !*** ./src/js/modules/addedTodo.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addedTodo\": () => (/* binding */ addedTodo)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ \"./src/js/index.js\");\n/* harmony import */ var _redux_todoReducer_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../redux/todoReducer/actions */ \"./src/js/redux/todoReducer/actions.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ \"./src/js/utils.js\");\n\r\n\r\n\r\n\r\nconst addedTodo = () => {\r\n  const input = document.querySelector('.input');\r\n  const inputButton = document.querySelector('.input-button');\r\n\r\n  const handleInput = () => {\r\n    input.value.trim() !== '' ? (0,_utils__WEBPACK_IMPORTED_MODULE_2__.removeClass)(inputButton, 'hide') : (0,_utils__WEBPACK_IMPORTED_MODULE_2__.addClass)(inputButton, 'hide');\r\n  };\r\n\r\n  const createTodo = () => {\r\n    if (input.value.trim() !== '') {\r\n      const id = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.generationKey)();\r\n      const todoData = {\r\n        id,\r\n        value: input.value,\r\n        completed: false,\r\n        important: false,\r\n      };\r\n      ___WEBPACK_IMPORTED_MODULE_0__.store.dispatch((0,_redux_todoReducer_actions__WEBPACK_IMPORTED_MODULE_1__.addTodo)(todoData));\r\n      input.value = '';\r\n    }\r\n  };\r\n\r\n  input.addEventListener('input', handleInput);\r\n  inputButton.addEventListener('click', createTodo);\r\n};\r\n\n\n//# sourceURL=webpack://webpack-course/./src/js/modules/addedTodo.js?");

/***/ }),

/***/ "./src/js/modules/getTodo.js":
/*!***********************************!*\
  !*** ./src/js/modules/getTodo.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"filterTodo\": () => (/* binding */ filterTodo)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ \"./src/js/index.js\");\n/* harmony import */ var _redux_tabReducer_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../redux/tabReducer/types */ \"./src/js/redux/tabReducer/types.js\");\n\r\n\r\n\r\nconst filterTodo = () => {\r\n  const state = ___WEBPACK_IMPORTED_MODULE_0__.store.getState();\r\n  switch (state.tabs) {\r\n    case _redux_tabReducer_types__WEBPACK_IMPORTED_MODULE_1__.TABS.ALL_TODO:\r\n      return state.todos;\r\n    case _redux_tabReducer_types__WEBPACK_IMPORTED_MODULE_1__.TABS.COMPLETED_TODO:\r\n      return state.todos.filter((item) => item.completed);\r\n    case _redux_tabReducer_types__WEBPACK_IMPORTED_MODULE_1__.TABS.UNDONE_TODO:\r\n      return state.todos.filter((item) => !item.completed);\r\n    case _redux_tabReducer_types__WEBPACK_IMPORTED_MODULE_1__.TABS.IMPORTANT_TODO:\r\n      return state.todos.filter((item) => item.important);\r\n    default:\r\n      return state.todos;\r\n  }\r\n};\r\n\n\n//# sourceURL=webpack://webpack-course/./src/js/modules/getTodo.js?");

/***/ }),

/***/ "./src/js/modules/manageTab.js":
/*!*************************************!*\
  !*** ./src/js/modules/manageTab.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"manageTab\": () => (/* binding */ manageTab)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ \"./src/js/index.js\");\n/* harmony import */ var _redux_tabReducer_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../redux/tabReducer/actions */ \"./src/js/redux/tabReducer/actions.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ \"./src/js/utils.js\");\n\r\n\r\n\r\n\r\nconst manageTab = () => {\r\n  const activeTab = () => navButtons.querySelector(`button[data-id = ${___WEBPACK_IMPORTED_MODULE_0__.store.getState().tabs}]`);\r\n\r\n  const settingsTabHandler = ({ target }) => {\r\n    const getParentButton = () => target.closest('[data-id]');\r\n\r\n    (0,_utils__WEBPACK_IMPORTED_MODULE_2__.removeClass)(activeTab(), 'button-nav--active');\r\n    getParentButton().dataset.id && ___WEBPACK_IMPORTED_MODULE_0__.store.dispatch((0,_redux_tabReducer_actions__WEBPACK_IMPORTED_MODULE_1__.setActiveTab)(getParentButton().dataset.id));\r\n    (0,_utils__WEBPACK_IMPORTED_MODULE_2__.addClass)(activeTab(), 'button-nav--active');\r\n  };\r\n\r\n  const navButtons = document.querySelector('.buttons');\r\n  navButtons.addEventListener('click', settingsTabHandler);\r\n};\r\n\n\n//# sourceURL=webpack://webpack-course/./src/js/modules/manageTab.js?");

/***/ }),

/***/ "./src/js/modules/manageTodo.js":
/*!**************************************!*\
  !*** ./src/js/modules/manageTodo.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"manageTodo\": () => (/* binding */ manageTodo)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ \"./src/js/index.js\");\n/* harmony import */ var _redux_todoReducer_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../redux/todoReducer/actions */ \"./src/js/redux/todoReducer/actions.js\");\n\r\n\r\n\r\nconst manageTodo = () => {\r\n  const settingsTodoHandler = ({ target }) => {\r\n    const getParentTodo = () => target.closest('[data-id]');\r\n\r\n    const importantButton = target.closest('.todo-important');\r\n    const completedButton = target.closest('.todo-complete');\r\n    const removeButton = target.closest('.todo-remove');\r\n\r\n    importantButton && ___WEBPACK_IMPORTED_MODULE_0__.store.dispatch((0,_redux_todoReducer_actions__WEBPACK_IMPORTED_MODULE_1__.toggleParamTodo)(getParentTodo().dataset.id, 'important'));\r\n    completedButton && ___WEBPACK_IMPORTED_MODULE_0__.store.dispatch((0,_redux_todoReducer_actions__WEBPACK_IMPORTED_MODULE_1__.toggleParamTodo)(getParentTodo().dataset.id, 'completed'));\r\n    removeButton && ___WEBPACK_IMPORTED_MODULE_0__.store.dispatch((0,_redux_todoReducer_actions__WEBPACK_IMPORTED_MODULE_1__.removeTodo)(getParentTodo().dataset.id));\r\n  };\r\n\r\n  const todoList = document.querySelector('.todo-list');\r\n  todoList.addEventListener('click', settingsTodoHandler);\r\n};\r\n\n\n//# sourceURL=webpack://webpack-course/./src/js/modules/manageTodo.js?");

/***/ }),

/***/ "./src/js/modules/outTodo.js":
/*!***********************************!*\
  !*** ./src/js/modules/outTodo.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"outTodo\": () => (/* binding */ outTodo)\n/* harmony export */ });\n/* harmony import */ var _components_todoNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/todoNode */ \"./src/js/components/todoNode.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ \"./src/js/utils.js\");\n\r\n\r\n\r\nconst outTodo = (newArrTodo) => {\r\n  const arrTodo = document.querySelectorAll('.todo-item');\r\n  if (arrTodo) {\r\n    arrTodo.forEach((todo) => todo.remove());\r\n  }\r\n\r\n  newArrTodo.forEach((todo) => {\r\n    (0,_utils__WEBPACK_IMPORTED_MODULE_1__.renderInDocument)((0,_components_todoNode__WEBPACK_IMPORTED_MODULE_0__.todoNode)(todo), '.todo-list');\r\n  });\r\n};\r\n\n\n//# sourceURL=webpack://webpack-course/./src/js/modules/outTodo.js?");

/***/ }),

/***/ "./src/js/modules/searchTodo.js":
/*!**************************************!*\
  !*** ./src/js/modules/searchTodo.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"searchTodo\": () => (/* binding */ searchTodo)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ \"./src/js/index.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ \"./src/js/utils.js\");\n\r\n\r\n\r\nconst searchTodo = () => {\r\n  const getTodo = (dataID) => document.getElementById(dataID);\r\n\r\n  const searchItem = ({ target }) => {\r\n    const stateTab = ___WEBPACK_IMPORTED_MODULE_0__.store.getState().todos;\r\n      const reg = new RegExp(target.value, 'gi');\r\n      \r\n    if (target.value) {\r\n      stateTab.forEach((todo) => {\r\n        if (todo.value.match(reg)) {\r\n          (0,_utils__WEBPACK_IMPORTED_MODULE_1__.addClass)(getTodo(todo.id), 'green');\r\n        } else {\r\n          (0,_utils__WEBPACK_IMPORTED_MODULE_1__.removeClass)(getTodo(todo.id), 'green');\r\n        }\r\n      });\r\n    } else {\r\n      stateTab.forEach((todo) => (0,_utils__WEBPACK_IMPORTED_MODULE_1__.removeClass)(getTodo(todo.id), 'green'));\r\n      }\r\n      \r\n  };\r\n\r\n  const input = document.querySelector('.input');\r\n  input.addEventListener('input', searchItem);\r\n};\r\n\n\n//# sourceURL=webpack://webpack-course/./src/js/modules/searchTodo.js?");

/***/ }),

/***/ "./src/js/redux/rootReducer.js":
/*!*************************************!*\
  !*** ./src/js/redux/rootReducer.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n/* harmony import */ var _tabReducer_tabReducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabReducer/tabReducer */ \"./src/js/redux/tabReducer/tabReducer.js\");\n/* harmony import */ var _todoReducer_todoReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoReducer/todoReducer */ \"./src/js/redux/todoReducer/todoReducer.js\");\n\r\n\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,redux__WEBPACK_IMPORTED_MODULE_2__.combineReducers)({\r\n  tabs: _tabReducer_tabReducer__WEBPACK_IMPORTED_MODULE_0__.tabReducer,\r\n  todos: _todoReducer_todoReducer__WEBPACK_IMPORTED_MODULE_1__.todoReducer,\r\n}));\r\n\n\n//# sourceURL=webpack://webpack-course/./src/js/redux/rootReducer.js?");

/***/ }),

/***/ "./src/js/redux/tabReducer/actions.js":
/*!********************************************!*\
  !*** ./src/js/redux/tabReducer/actions.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"setActiveTab\": () => (/* binding */ setActiveTab)\n/* harmony export */ });\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ \"./src/js/redux/tabReducer/types.js\");\n\r\n\r\nfunction setActiveTab(tabName) {\r\n  return {\r\n    type: _types__WEBPACK_IMPORTED_MODULE_0__.SET_ACTIVE_TAB,\r\n    payload: { tabName },\r\n  };\r\n}\r\n\n\n//# sourceURL=webpack://webpack-course/./src/js/redux/tabReducer/actions.js?");

/***/ }),

/***/ "./src/js/redux/tabReducer/tabReducer.js":
/*!***********************************************!*\
  !*** ./src/js/redux/tabReducer/tabReducer.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"tabReducer\": () => (/* binding */ tabReducer)\n/* harmony export */ });\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ \"./src/js/redux/tabReducer/types.js\");\n\r\n\r\nconst { ALL_TODO } = _types__WEBPACK_IMPORTED_MODULE_0__.TABS;\r\n\r\nfunction tabReducer(state = ALL_TODO, { type, payload }) {\r\n  switch (type) {\r\n    case _types__WEBPACK_IMPORTED_MODULE_0__.SET_ACTIVE_TAB:\r\n      return payload.tabName;\r\n    default:\r\n      return state;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://webpack-course/./src/js/redux/tabReducer/tabReducer.js?");

/***/ }),

/***/ "./src/js/redux/tabReducer/types.js":
/*!******************************************!*\
  !*** ./src/js/redux/tabReducer/types.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SET_ACTIVE_TAB\": () => (/* binding */ SET_ACTIVE_TAB),\n/* harmony export */   \"TABS\": () => (/* binding */ TABS)\n/* harmony export */ });\nconst SET_ACTIVE_TAB = 'SET_ACTIVE_TAB';\r\nconst TABS = {\r\n  ALL_TODO: 'ALL_TODO',\r\n  COMPLETED_TODO: 'COMPLETED_TODO',\r\n  UNDONE_TODO: 'UNDONE_TODO',\r\n  IMPORTANT_TODO: 'IMPORTANT_TODO',\r\n};\r\n\n\n//# sourceURL=webpack://webpack-course/./src/js/redux/tabReducer/types.js?");

/***/ }),

/***/ "./src/js/redux/todoReducer/actions.js":
/*!*********************************************!*\
  !*** ./src/js/redux/todoReducer/actions.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addTodo\": () => (/* binding */ addTodo),\n/* harmony export */   \"removeTodo\": () => (/* binding */ removeTodo),\n/* harmony export */   \"toggleParamTodo\": () => (/* binding */ toggleParamTodo)\n/* harmony export */ });\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ \"./src/js/redux/todoReducer/types.js\");\n\r\n\r\nfunction addTodo(data) {\r\n  return {\r\n    type: _types__WEBPACK_IMPORTED_MODULE_0__.ADD_TODO,\r\n    payload: { data },\r\n  };\r\n}\r\n\r\nfunction removeTodo(id) {\r\n  return { type: _types__WEBPACK_IMPORTED_MODULE_0__.REMOVE_TODO, payload: { id } };\r\n}\r\n\r\nfunction toggleParamTodo(id, param) {\r\n  return { type: _types__WEBPACK_IMPORTED_MODULE_0__.TOGGLE_PARAM_TODO, payload: { id, param } };\r\n}\r\n\n\n//# sourceURL=webpack://webpack-course/./src/js/redux/todoReducer/actions.js?");

/***/ }),

/***/ "./src/js/redux/todoReducer/todoReducer.js":
/*!*************************************************!*\
  !*** ./src/js/redux/todoReducer/todoReducer.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"todoReducer\": () => (/* binding */ todoReducer)\n/* harmony export */ });\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ \"./src/js/redux/todoReducer/types.js\");\n\r\n\r\nconst initialState = localStorage.getItem('toDoList') ? [...JSON.parse(localStorage.getItem('toDoList'))] : [];\r\n\r\nfunction todoReducer(state = initialState, { type, payload }) {\r\n  switch (type) {\r\n    case _types__WEBPACK_IMPORTED_MODULE_0__.ADD_TODO:\r\n      return [...state, payload.data];\r\n\r\n    case _types__WEBPACK_IMPORTED_MODULE_0__.REMOVE_TODO:\r\n      return [...state.filter((todo) => todo.id !== payload.id)];\r\n\r\n    case _types__WEBPACK_IMPORTED_MODULE_0__.TOGGLE_PARAM_TODO:\r\n      return [\r\n        ...state.map((todo) => {\r\n          if (todo.id === payload.id) {\r\n            return Object.assign({}, todo, {\r\n              [payload.param]: !todo[payload.param],\r\n            });\r\n          } else {\r\n            return todo;\r\n          }\r\n        }),\r\n      ];\r\n  }\r\n\r\n  return state;\r\n}\r\n\n\n//# sourceURL=webpack://webpack-course/./src/js/redux/todoReducer/todoReducer.js?");

/***/ }),

/***/ "./src/js/redux/todoReducer/types.js":
/*!*******************************************!*\
  !*** ./src/js/redux/todoReducer/types.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ADD_TODO\": () => (/* binding */ ADD_TODO),\n/* harmony export */   \"REMOVE_TODO\": () => (/* binding */ REMOVE_TODO),\n/* harmony export */   \"TOGGLE_PARAM_TODO\": () => (/* binding */ TOGGLE_PARAM_TODO)\n/* harmony export */ });\nconst ADD_TODO = 'ADD_TODO';\r\nconst REMOVE_TODO = 'REMOVE_TODO';\r\nconst TOGGLE_PARAM_TODO = 'TOGGLE_PARAM_TODO';\n\n//# sourceURL=webpack://webpack-course/./src/js/redux/todoReducer/types.js?");

/***/ }),

/***/ "./src/js/utils.js":
/*!*************************!*\
  !*** ./src/js/utils.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderInDocument\": () => (/* binding */ renderInDocument),\n/* harmony export */   \"generationKey\": () => (/* binding */ generationKey),\n/* harmony export */   \"addToStorage\": () => (/* binding */ addToStorage),\n/* harmony export */   \"removeClass\": () => (/* binding */ removeClass),\n/* harmony export */   \"addClass\": () => (/* binding */ addClass)\n/* harmony export */ });\nconst renderInDocument = ($el, selector) => {\r\n  if (!$el || !selector) {\r\n    throw new Error('renderInDocument must contain 2 args');\r\n  }\r\n\r\n  document.querySelector(selector).insertAdjacentHTML('beforeend', $el);\r\n};\r\n\r\nconst generationKey = () =>\r\n  Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);\r\n\r\nconst addToStorage = (arrTodo) => {\r\n  localStorage.setItem('toDoList', JSON.stringify([...arrTodo]));\r\n};\r\n\r\nconst removeClass = ($el, nameClass) => $el.classList.remove(nameClass);\r\nconst addClass = ($el, nameClass) => $el.classList.add(nameClass);\r\n\n\n//# sourceURL=webpack://webpack-course/./src/js/utils.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.hmd = (module) => {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: () => {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;