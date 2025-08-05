import { createRequire } from "node:module";
var __create = Object.create;
var __getProtoOf = Object.getPrototypeOf;
var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __toESM = (mod, isNodeMode, target) => {
  target = mod != null ? __create(__getProtoOf(mod)) : {};
  const to = isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target;
  for (let key of __getOwnPropNames(mod))
    if (!__hasOwnProp.call(to, key))
      __defProp(to, key, {
        get: () => mod[key],
        enumerable: true
      });
  return to;
};
var __commonJS = (cb, mod) => () => (mod || cb((mod = { exports: {} }).exports, mod), mod.exports);
var __require = /* @__PURE__ */ createRequire(import.meta.url);

// node_modules/react/cjs/react.development.js
var require_react_development = __commonJS((exports, module) => {
  (function() {
    function defineDeprecationWarning(methodName, info) {
      Object.defineProperty(Component.prototype, methodName, {
        get: function() {
          console.warn("%s(...) is deprecated in plain JavaScript React classes. %s", info[0], info[1]);
        }
      });
    }
    function getIteratorFn(maybeIterable) {
      if (maybeIterable === null || typeof maybeIterable !== "object")
        return null;
      maybeIterable = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable["@@iterator"];
      return typeof maybeIterable === "function" ? maybeIterable : null;
    }
    function warnNoop(publicInstance, callerName) {
      publicInstance = (publicInstance = publicInstance.constructor) && (publicInstance.displayName || publicInstance.name) || "ReactClass";
      var warningKey = publicInstance + "." + callerName;
      didWarnStateUpdateForUnmountedComponent[warningKey] || (console.error("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", callerName, publicInstance), didWarnStateUpdateForUnmountedComponent[warningKey] = true);
    }
    function Component(props, context, updater) {
      this.props = props;
      this.context = context;
      this.refs = emptyObject;
      this.updater = updater || ReactNoopUpdateQueue;
    }
    function ComponentDummy() {}
    function PureComponent(props, context, updater) {
      this.props = props;
      this.context = context;
      this.refs = emptyObject;
      this.updater = updater || ReactNoopUpdateQueue;
    }
    function testStringCoercion(value) {
      return "" + value;
    }
    function checkKeyStringCoercion(value) {
      try {
        testStringCoercion(value);
        var JSCompiler_inline_result = false;
      } catch (e) {
        JSCompiler_inline_result = true;
      }
      if (JSCompiler_inline_result) {
        JSCompiler_inline_result = console;
        var JSCompiler_temp_const = JSCompiler_inline_result.error;
        var JSCompiler_inline_result$jscomp$0 = typeof Symbol === "function" && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
        JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
        return testStringCoercion(value);
      }
    }
    function getComponentNameFromType(type) {
      if (type == null)
        return null;
      if (typeof type === "function")
        return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
      if (typeof type === "string")
        return type;
      switch (type) {
        case REACT_FRAGMENT_TYPE:
          return "Fragment";
        case REACT_PROFILER_TYPE:
          return "Profiler";
        case REACT_STRICT_MODE_TYPE:
          return "StrictMode";
        case REACT_SUSPENSE_TYPE:
          return "Suspense";
        case REACT_SUSPENSE_LIST_TYPE:
          return "SuspenseList";
        case REACT_ACTIVITY_TYPE:
          return "Activity";
      }
      if (typeof type === "object")
        switch (typeof type.tag === "number" && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof) {
          case REACT_PORTAL_TYPE:
            return "Portal";
          case REACT_CONTEXT_TYPE:
            return (type.displayName || "Context") + ".Provider";
          case REACT_CONSUMER_TYPE:
            return (type._context.displayName || "Context") + ".Consumer";
          case REACT_FORWARD_REF_TYPE:
            var innerType = type.render;
            type = type.displayName;
            type || (type = innerType.displayName || innerType.name || "", type = type !== "" ? "ForwardRef(" + type + ")" : "ForwardRef");
            return type;
          case REACT_MEMO_TYPE:
            return innerType = type.displayName || null, innerType !== null ? innerType : getComponentNameFromType(type.type) || "Memo";
          case REACT_LAZY_TYPE:
            innerType = type._payload;
            type = type._init;
            try {
              return getComponentNameFromType(type(innerType));
            } catch (x) {}
        }
      return null;
    }
    function getTaskName(type) {
      if (type === REACT_FRAGMENT_TYPE)
        return "<>";
      if (typeof type === "object" && type !== null && type.$$typeof === REACT_LAZY_TYPE)
        return "<...>";
      try {
        var name = getComponentNameFromType(type);
        return name ? "<" + name + ">" : "<...>";
      } catch (x) {
        return "<...>";
      }
    }
    function getOwner() {
      var dispatcher = ReactSharedInternals.A;
      return dispatcher === null ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
      return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
      if (hasOwnProperty.call(config, "key")) {
        var getter = Object.getOwnPropertyDescriptor(config, "key").get;
        if (getter && getter.isReactWarning)
          return false;
      }
      return config.key !== undefined;
    }
    function defineKeyPropWarningGetter(props, displayName) {
      function warnAboutAccessingKey() {
        specialPropKeyWarningShown || (specialPropKeyWarningShown = true, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
      }
      warnAboutAccessingKey.isReactWarning = true;
      Object.defineProperty(props, "key", {
        get: warnAboutAccessingKey,
        configurable: true
      });
    }
    function elementRefGetterWithDeprecationWarning() {
      var componentName = getComponentNameFromType(this.type);
      didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = true, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
      componentName = this.props.ref;
      return componentName !== undefined ? componentName : null;
    }
    function ReactElement(type, key, self, source, owner, props, debugStack, debugTask) {
      self = props.ref;
      type = {
        $$typeof: REACT_ELEMENT_TYPE,
        type,
        key,
        props,
        _owner: owner
      };
      (self !== undefined ? self : null) !== null ? Object.defineProperty(type, "ref", {
        enumerable: false,
        get: elementRefGetterWithDeprecationWarning
      }) : Object.defineProperty(type, "ref", { enumerable: false, value: null });
      type._store = {};
      Object.defineProperty(type._store, "validated", {
        configurable: false,
        enumerable: false,
        writable: true,
        value: 0
      });
      Object.defineProperty(type, "_debugInfo", {
        configurable: false,
        enumerable: false,
        writable: true,
        value: null
      });
      Object.defineProperty(type, "_debugStack", {
        configurable: false,
        enumerable: false,
        writable: true,
        value: debugStack
      });
      Object.defineProperty(type, "_debugTask", {
        configurable: false,
        enumerable: false,
        writable: true,
        value: debugTask
      });
      Object.freeze && (Object.freeze(type.props), Object.freeze(type));
      return type;
    }
    function cloneAndReplaceKey(oldElement, newKey) {
      newKey = ReactElement(oldElement.type, newKey, undefined, undefined, oldElement._owner, oldElement.props, oldElement._debugStack, oldElement._debugTask);
      oldElement._store && (newKey._store.validated = oldElement._store.validated);
      return newKey;
    }
    function isValidElement(object) {
      return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    function escape(key) {
      var escaperLookup = { "=": "=0", ":": "=2" };
      return "$" + key.replace(/[=:]/g, function(match) {
        return escaperLookup[match];
      });
    }
    function getElementKey(element, index) {
      return typeof element === "object" && element !== null && element.key != null ? (checkKeyStringCoercion(element.key), escape("" + element.key)) : index.toString(36);
    }
    function noop$1() {}
    function resolveThenable(thenable) {
      switch (thenable.status) {
        case "fulfilled":
          return thenable.value;
        case "rejected":
          throw thenable.reason;
        default:
          switch (typeof thenable.status === "string" ? thenable.then(noop$1, noop$1) : (thenable.status = "pending", thenable.then(function(fulfilledValue) {
            thenable.status === "pending" && (thenable.status = "fulfilled", thenable.value = fulfilledValue);
          }, function(error) {
            thenable.status === "pending" && (thenable.status = "rejected", thenable.reason = error);
          })), thenable.status) {
            case "fulfilled":
              return thenable.value;
            case "rejected":
              throw thenable.reason;
          }
      }
      throw thenable;
    }
    function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
      var type = typeof children;
      if (type === "undefined" || type === "boolean")
        children = null;
      var invokeCallback = false;
      if (children === null)
        invokeCallback = true;
      else
        switch (type) {
          case "bigint":
          case "string":
          case "number":
            invokeCallback = true;
            break;
          case "object":
            switch (children.$$typeof) {
              case REACT_ELEMENT_TYPE:
              case REACT_PORTAL_TYPE:
                invokeCallback = true;
                break;
              case REACT_LAZY_TYPE:
                return invokeCallback = children._init, mapIntoArray(invokeCallback(children._payload), array, escapedPrefix, nameSoFar, callback);
            }
        }
      if (invokeCallback) {
        invokeCallback = children;
        callback = callback(invokeCallback);
        var childKey = nameSoFar === "" ? "." + getElementKey(invokeCallback, 0) : nameSoFar;
        isArrayImpl(callback) ? (escapedPrefix = "", childKey != null && (escapedPrefix = childKey.replace(userProvidedKeyEscapeRegex, "$&/") + "/"), mapIntoArray(callback, array, escapedPrefix, "", function(c) {
          return c;
        })) : callback != null && (isValidElement(callback) && (callback.key != null && (invokeCallback && invokeCallback.key === callback.key || checkKeyStringCoercion(callback.key)), escapedPrefix = cloneAndReplaceKey(callback, escapedPrefix + (callback.key == null || invokeCallback && invokeCallback.key === callback.key ? "" : ("" + callback.key).replace(userProvidedKeyEscapeRegex, "$&/") + "/") + childKey), nameSoFar !== "" && invokeCallback != null && isValidElement(invokeCallback) && invokeCallback.key == null && invokeCallback._store && !invokeCallback._store.validated && (escapedPrefix._store.validated = 2), callback = escapedPrefix), array.push(callback));
        return 1;
      }
      invokeCallback = 0;
      childKey = nameSoFar === "" ? "." : nameSoFar + ":";
      if (isArrayImpl(children))
        for (var i = 0;i < children.length; i++)
          nameSoFar = children[i], type = childKey + getElementKey(nameSoFar, i), invokeCallback += mapIntoArray(nameSoFar, array, escapedPrefix, type, callback);
      else if (i = getIteratorFn(children), typeof i === "function")
        for (i === children.entries && (didWarnAboutMaps || console.warn("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), didWarnAboutMaps = true), children = i.call(children), i = 0;!(nameSoFar = children.next()).done; )
          nameSoFar = nameSoFar.value, type = childKey + getElementKey(nameSoFar, i++), invokeCallback += mapIntoArray(nameSoFar, array, escapedPrefix, type, callback);
      else if (type === "object") {
        if (typeof children.then === "function")
          return mapIntoArray(resolveThenable(children), array, escapedPrefix, nameSoFar, callback);
        array = String(children);
        throw Error("Objects are not valid as a React child (found: " + (array === "[object Object]" ? "object with keys {" + Object.keys(children).join(", ") + "}" : array) + "). If you meant to render a collection of children, use an array instead.");
      }
      return invokeCallback;
    }
    function mapChildren(children, func, context) {
      if (children == null)
        return children;
      var result = [], count = 0;
      mapIntoArray(children, result, "", "", function(child) {
        return func.call(context, child, count++);
      });
      return result;
    }
    function lazyInitializer(payload) {
      if (payload._status === -1) {
        var ctor = payload._result;
        ctor = ctor();
        ctor.then(function(moduleObject) {
          if (payload._status === 0 || payload._status === -1)
            payload._status = 1, payload._result = moduleObject;
        }, function(error) {
          if (payload._status === 0 || payload._status === -1)
            payload._status = 2, payload._result = error;
        });
        payload._status === -1 && (payload._status = 0, payload._result = ctor);
      }
      if (payload._status === 1)
        return ctor = payload._result, ctor === undefined && console.error(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, ctor), "default" in ctor || console.error(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, ctor), ctor.default;
      throw payload._result;
    }
    function resolveDispatcher() {
      var dispatcher = ReactSharedInternals.H;
      dispatcher === null && console.error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`);
      return dispatcher;
    }
    function noop() {}
    function enqueueTask(task) {
      if (enqueueTaskImpl === null)
        try {
          var requireString = ("require" + Math.random()).slice(0, 7);
          enqueueTaskImpl = (module && module[requireString]).call(module, "timers").setImmediate;
        } catch (_err) {
          enqueueTaskImpl = function(callback) {
            didWarnAboutMessageChannel === false && (didWarnAboutMessageChannel = true, typeof MessageChannel === "undefined" && console.error("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
            var channel = new MessageChannel;
            channel.port1.onmessage = callback;
            channel.port2.postMessage(undefined);
          };
        }
      return enqueueTaskImpl(task);
    }
    function aggregateErrors(errors) {
      return 1 < errors.length && typeof AggregateError === "function" ? new AggregateError(errors) : errors[0];
    }
    function popActScope(prevActQueue, prevActScopeDepth) {
      prevActScopeDepth !== actScopeDepth - 1 && console.error("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. ");
      actScopeDepth = prevActScopeDepth;
    }
    function recursivelyFlushAsyncActWork(returnValue, resolve, reject) {
      var queue = ReactSharedInternals.actQueue;
      if (queue !== null)
        if (queue.length !== 0)
          try {
            flushActQueue(queue);
            enqueueTask(function() {
              return recursivelyFlushAsyncActWork(returnValue, resolve, reject);
            });
            return;
          } catch (error) {
            ReactSharedInternals.thrownErrors.push(error);
          }
        else
          ReactSharedInternals.actQueue = null;
      0 < ReactSharedInternals.thrownErrors.length ? (queue = aggregateErrors(ReactSharedInternals.thrownErrors), ReactSharedInternals.thrownErrors.length = 0, reject(queue)) : resolve(returnValue);
    }
    function flushActQueue(queue) {
      if (!isFlushing) {
        isFlushing = true;
        var i = 0;
        try {
          for (;i < queue.length; i++) {
            var callback = queue[i];
            do {
              ReactSharedInternals.didUsePromise = false;
              var continuation = callback(false);
              if (continuation !== null) {
                if (ReactSharedInternals.didUsePromise) {
                  queue[i] = callback;
                  queue.splice(0, i);
                  return;
                }
                callback = continuation;
              } else
                break;
            } while (1);
          }
          queue.length = 0;
        } catch (error) {
          queue.splice(0, i + 1), ReactSharedInternals.thrownErrors.push(error);
        } finally {
          isFlushing = false;
        }
      }
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart === "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler");
    Symbol.for("react.provider");
    var REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), MAYBE_ITERATOR_SYMBOL = Symbol.iterator, didWarnStateUpdateForUnmountedComponent = {}, ReactNoopUpdateQueue = {
      isMounted: function() {
        return false;
      },
      enqueueForceUpdate: function(publicInstance) {
        warnNoop(publicInstance, "forceUpdate");
      },
      enqueueReplaceState: function(publicInstance) {
        warnNoop(publicInstance, "replaceState");
      },
      enqueueSetState: function(publicInstance) {
        warnNoop(publicInstance, "setState");
      }
    }, assign = Object.assign, emptyObject = {};
    Object.freeze(emptyObject);
    Component.prototype.isReactComponent = {};
    Component.prototype.setState = function(partialState, callback) {
      if (typeof partialState !== "object" && typeof partialState !== "function" && partialState != null)
        throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
      this.updater.enqueueSetState(this, partialState, callback, "setState");
    };
    Component.prototype.forceUpdate = function(callback) {
      this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
    };
    var deprecatedAPIs = {
      isMounted: [
        "isMounted",
        "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."
      ],
      replaceState: [
        "replaceState",
        "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."
      ]
    }, fnName;
    for (fnName in deprecatedAPIs)
      deprecatedAPIs.hasOwnProperty(fnName) && defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
    ComponentDummy.prototype = Component.prototype;
    deprecatedAPIs = PureComponent.prototype = new ComponentDummy;
    deprecatedAPIs.constructor = PureComponent;
    assign(deprecatedAPIs, Component.prototype);
    deprecatedAPIs.isPureReactComponent = true;
    var isArrayImpl = Array.isArray, REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = {
      H: null,
      A: null,
      T: null,
      S: null,
      V: null,
      actQueue: null,
      isBatchingLegacy: false,
      didScheduleLegacyUpdate: false,
      didUsePromise: false,
      thrownErrors: [],
      getCurrentStack: null,
      recentlyCreatedOwnerStacks: 0
    }, hasOwnProperty = Object.prototype.hasOwnProperty, createTask = console.createTask ? console.createTask : function() {
      return null;
    };
    deprecatedAPIs = {
      react_stack_bottom_frame: function(callStackForError) {
        return callStackForError();
      }
    };
    var specialPropKeyWarningShown, didWarnAboutOldJSXRuntime;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = deprecatedAPIs.react_stack_bottom_frame.bind(deprecatedAPIs, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutMaps = false, userProvidedKeyEscapeRegex = /\/+/g, reportGlobalError = typeof reportError === "function" ? reportError : function(error) {
      if (typeof window === "object" && typeof window.ErrorEvent === "function") {
        var event = new window.ErrorEvent("error", {
          bubbles: true,
          cancelable: true,
          message: typeof error === "object" && error !== null && typeof error.message === "string" ? String(error.message) : String(error),
          error
        });
        if (!window.dispatchEvent(event))
          return;
      } else if (typeof process === "object" && typeof process.emit === "function") {
        process.emit("uncaughtException", error);
        return;
      }
      console.error(error);
    }, didWarnAboutMessageChannel = false, enqueueTaskImpl = null, actScopeDepth = 0, didWarnNoAwaitAct = false, isFlushing = false, queueSeveralMicrotasks = typeof queueMicrotask === "function" ? function(callback) {
      queueMicrotask(function() {
        return queueMicrotask(callback);
      });
    } : enqueueTask;
    deprecatedAPIs = Object.freeze({
      __proto__: null,
      c: function(size) {
        return resolveDispatcher().useMemoCache(size);
      }
    });
    exports.Children = {
      map: mapChildren,
      forEach: function(children, forEachFunc, forEachContext) {
        mapChildren(children, function() {
          forEachFunc.apply(this, arguments);
        }, forEachContext);
      },
      count: function(children) {
        var n = 0;
        mapChildren(children, function() {
          n++;
        });
        return n;
      },
      toArray: function(children) {
        return mapChildren(children, function(child) {
          return child;
        }) || [];
      },
      only: function(children) {
        if (!isValidElement(children))
          throw Error("React.Children.only expected to receive a single React element child.");
        return children;
      }
    };
    exports.Component = Component;
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.Profiler = REACT_PROFILER_TYPE;
    exports.PureComponent = PureComponent;
    exports.StrictMode = REACT_STRICT_MODE_TYPE;
    exports.Suspense = REACT_SUSPENSE_TYPE;
    exports.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = ReactSharedInternals;
    exports.__COMPILER_RUNTIME = deprecatedAPIs;
    exports.act = function(callback) {
      var prevActQueue = ReactSharedInternals.actQueue, prevActScopeDepth = actScopeDepth;
      actScopeDepth++;
      var queue = ReactSharedInternals.actQueue = prevActQueue !== null ? prevActQueue : [], didAwaitActCall = false;
      try {
        var result = callback();
      } catch (error) {
        ReactSharedInternals.thrownErrors.push(error);
      }
      if (0 < ReactSharedInternals.thrownErrors.length)
        throw popActScope(prevActQueue, prevActScopeDepth), callback = aggregateErrors(ReactSharedInternals.thrownErrors), ReactSharedInternals.thrownErrors.length = 0, callback;
      if (result !== null && typeof result === "object" && typeof result.then === "function") {
        var thenable = result;
        queueSeveralMicrotasks(function() {
          didAwaitActCall || didWarnNoAwaitAct || (didWarnNoAwaitAct = true, console.error("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
        });
        return {
          then: function(resolve, reject) {
            didAwaitActCall = true;
            thenable.then(function(returnValue) {
              popActScope(prevActQueue, prevActScopeDepth);
              if (prevActScopeDepth === 0) {
                try {
                  flushActQueue(queue), enqueueTask(function() {
                    return recursivelyFlushAsyncActWork(returnValue, resolve, reject);
                  });
                } catch (error$0) {
                  ReactSharedInternals.thrownErrors.push(error$0);
                }
                if (0 < ReactSharedInternals.thrownErrors.length) {
                  var _thrownError = aggregateErrors(ReactSharedInternals.thrownErrors);
                  ReactSharedInternals.thrownErrors.length = 0;
                  reject(_thrownError);
                }
              } else
                resolve(returnValue);
            }, function(error) {
              popActScope(prevActQueue, prevActScopeDepth);
              0 < ReactSharedInternals.thrownErrors.length ? (error = aggregateErrors(ReactSharedInternals.thrownErrors), ReactSharedInternals.thrownErrors.length = 0, reject(error)) : reject(error);
            });
          }
        };
      }
      var returnValue$jscomp$0 = result;
      popActScope(prevActQueue, prevActScopeDepth);
      prevActScopeDepth === 0 && (flushActQueue(queue), queue.length !== 0 && queueSeveralMicrotasks(function() {
        didAwaitActCall || didWarnNoAwaitAct || (didWarnNoAwaitAct = true, console.error("A component suspended inside an `act` scope, but the `act` call was not awaited. When testing React components that depend on asynchronous data, you must await the result:\n\nawait act(() => ...)"));
      }), ReactSharedInternals.actQueue = null);
      if (0 < ReactSharedInternals.thrownErrors.length)
        throw callback = aggregateErrors(ReactSharedInternals.thrownErrors), ReactSharedInternals.thrownErrors.length = 0, callback;
      return {
        then: function(resolve, reject) {
          didAwaitActCall = true;
          prevActScopeDepth === 0 ? (ReactSharedInternals.actQueue = queue, enqueueTask(function() {
            return recursivelyFlushAsyncActWork(returnValue$jscomp$0, resolve, reject);
          })) : resolve(returnValue$jscomp$0);
        }
      };
    };
    exports.cache = function(fn) {
      return function() {
        return fn.apply(null, arguments);
      };
    };
    exports.captureOwnerStack = function() {
      var getCurrentStack = ReactSharedInternals.getCurrentStack;
      return getCurrentStack === null ? null : getCurrentStack();
    };
    exports.cloneElement = function(element, config, children) {
      if (element === null || element === undefined)
        throw Error("The argument must be a React element, but you passed " + element + ".");
      var props = assign({}, element.props), key = element.key, owner = element._owner;
      if (config != null) {
        var JSCompiler_inline_result;
        a: {
          if (hasOwnProperty.call(config, "ref") && (JSCompiler_inline_result = Object.getOwnPropertyDescriptor(config, "ref").get) && JSCompiler_inline_result.isReactWarning) {
            JSCompiler_inline_result = false;
            break a;
          }
          JSCompiler_inline_result = config.ref !== undefined;
        }
        JSCompiler_inline_result && (owner = getOwner());
        hasValidKey(config) && (checkKeyStringCoercion(config.key), key = "" + config.key);
        for (propName in config)
          !hasOwnProperty.call(config, propName) || propName === "key" || propName === "__self" || propName === "__source" || propName === "ref" && config.ref === undefined || (props[propName] = config[propName]);
      }
      var propName = arguments.length - 2;
      if (propName === 1)
        props.children = children;
      else if (1 < propName) {
        JSCompiler_inline_result = Array(propName);
        for (var i = 0;i < propName; i++)
          JSCompiler_inline_result[i] = arguments[i + 2];
        props.children = JSCompiler_inline_result;
      }
      props = ReactElement(element.type, key, undefined, undefined, owner, props, element._debugStack, element._debugTask);
      for (key = 2;key < arguments.length; key++)
        owner = arguments[key], isValidElement(owner) && owner._store && (owner._store.validated = 1);
      return props;
    };
    exports.createContext = function(defaultValue) {
      defaultValue = {
        $$typeof: REACT_CONTEXT_TYPE,
        _currentValue: defaultValue,
        _currentValue2: defaultValue,
        _threadCount: 0,
        Provider: null,
        Consumer: null
      };
      defaultValue.Provider = defaultValue;
      defaultValue.Consumer = {
        $$typeof: REACT_CONSUMER_TYPE,
        _context: defaultValue
      };
      defaultValue._currentRenderer = null;
      defaultValue._currentRenderer2 = null;
      return defaultValue;
    };
    exports.createElement = function(type, config, children) {
      for (var i = 2;i < arguments.length; i++) {
        var node = arguments[i];
        isValidElement(node) && node._store && (node._store.validated = 1);
      }
      i = {};
      node = null;
      if (config != null)
        for (propName in didWarnAboutOldJSXRuntime || !("__self" in config) || "key" in config || (didWarnAboutOldJSXRuntime = true, console.warn("Your app (or one of its dependencies) is using an outdated JSX transform. Update to the modern JSX transform for faster performance: https://react.dev/link/new-jsx-transform")), hasValidKey(config) && (checkKeyStringCoercion(config.key), node = "" + config.key), config)
          hasOwnProperty.call(config, propName) && propName !== "key" && propName !== "__self" && propName !== "__source" && (i[propName] = config[propName]);
      var childrenLength = arguments.length - 2;
      if (childrenLength === 1)
        i.children = children;
      else if (1 < childrenLength) {
        for (var childArray = Array(childrenLength), _i = 0;_i < childrenLength; _i++)
          childArray[_i] = arguments[_i + 2];
        Object.freeze && Object.freeze(childArray);
        i.children = childArray;
      }
      if (type && type.defaultProps)
        for (propName in childrenLength = type.defaultProps, childrenLength)
          i[propName] === undefined && (i[propName] = childrenLength[propName]);
      node && defineKeyPropWarningGetter(i, typeof type === "function" ? type.displayName || type.name || "Unknown" : type);
      var propName = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
      return ReactElement(type, node, undefined, undefined, getOwner(), i, propName ? Error("react-stack-top-frame") : unknownOwnerDebugStack, propName ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
    exports.createRef = function() {
      var refObject = { current: null };
      Object.seal(refObject);
      return refObject;
    };
    exports.forwardRef = function(render) {
      render != null && render.$$typeof === REACT_MEMO_TYPE ? console.error("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof render !== "function" ? console.error("forwardRef requires a render function but was given %s.", render === null ? "null" : typeof render) : render.length !== 0 && render.length !== 2 && console.error("forwardRef render functions accept exactly two parameters: props and ref. %s", render.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined.");
      render != null && render.defaultProps != null && console.error("forwardRef render functions do not support defaultProps. Did you accidentally pass a React component?");
      var elementType = { $$typeof: REACT_FORWARD_REF_TYPE, render }, ownName;
      Object.defineProperty(elementType, "displayName", {
        enumerable: false,
        configurable: true,
        get: function() {
          return ownName;
        },
        set: function(name) {
          ownName = name;
          render.name || render.displayName || (Object.defineProperty(render, "name", { value: name }), render.displayName = name);
        }
      });
      return elementType;
    };
    exports.isValidElement = isValidElement;
    exports.lazy = function(ctor) {
      return {
        $$typeof: REACT_LAZY_TYPE,
        _payload: { _status: -1, _result: ctor },
        _init: lazyInitializer
      };
    };
    exports.memo = function(type, compare) {
      type == null && console.error("memo: The first argument must be a component. Instead received: %s", type === null ? "null" : typeof type);
      compare = {
        $$typeof: REACT_MEMO_TYPE,
        type,
        compare: compare === undefined ? null : compare
      };
      var ownName;
      Object.defineProperty(compare, "displayName", {
        enumerable: false,
        configurable: true,
        get: function() {
          return ownName;
        },
        set: function(name) {
          ownName = name;
          type.name || type.displayName || (Object.defineProperty(type, "name", { value: name }), type.displayName = name);
        }
      });
      return compare;
    };
    exports.startTransition = function(scope) {
      var prevTransition = ReactSharedInternals.T, currentTransition = {};
      ReactSharedInternals.T = currentTransition;
      currentTransition._updatedFibers = new Set;
      try {
        var returnValue = scope(), onStartTransitionFinish = ReactSharedInternals.S;
        onStartTransitionFinish !== null && onStartTransitionFinish(currentTransition, returnValue);
        typeof returnValue === "object" && returnValue !== null && typeof returnValue.then === "function" && returnValue.then(noop, reportGlobalError);
      } catch (error) {
        reportGlobalError(error);
      } finally {
        prevTransition === null && currentTransition._updatedFibers && (scope = currentTransition._updatedFibers.size, currentTransition._updatedFibers.clear(), 10 < scope && console.warn("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table.")), ReactSharedInternals.T = prevTransition;
      }
    };
    exports.unstable_useCacheRefresh = function() {
      return resolveDispatcher().useCacheRefresh();
    };
    exports.use = function(usable) {
      return resolveDispatcher().use(usable);
    };
    exports.useActionState = function(action, initialState, permalink) {
      return resolveDispatcher().useActionState(action, initialState, permalink);
    };
    exports.useCallback = function(callback, deps) {
      return resolveDispatcher().useCallback(callback, deps);
    };
    exports.useContext = function(Context) {
      var dispatcher = resolveDispatcher();
      Context.$$typeof === REACT_CONSUMER_TYPE && console.error("Calling useContext(Context.Consumer) is not supported and will cause bugs. Did you mean to call useContext(Context) instead?");
      return dispatcher.useContext(Context);
    };
    exports.useDebugValue = function(value, formatterFn) {
      return resolveDispatcher().useDebugValue(value, formatterFn);
    };
    exports.useDeferredValue = function(value, initialValue) {
      return resolveDispatcher().useDeferredValue(value, initialValue);
    };
    exports.useEffect = function(create, createDeps, update) {
      create == null && console.warn("React Hook useEffect requires an effect callback. Did you forget to pass a callback to the hook?");
      var dispatcher = resolveDispatcher();
      if (typeof update === "function")
        throw Error("useEffect CRUD overload is not enabled in this build of React.");
      return dispatcher.useEffect(create, createDeps);
    };
    exports.useId = function() {
      return resolveDispatcher().useId();
    };
    exports.useImperativeHandle = function(ref, create, deps) {
      return resolveDispatcher().useImperativeHandle(ref, create, deps);
    };
    exports.useInsertionEffect = function(create, deps) {
      create == null && console.warn("React Hook useInsertionEffect requires an effect callback. Did you forget to pass a callback to the hook?");
      return resolveDispatcher().useInsertionEffect(create, deps);
    };
    exports.useLayoutEffect = function(create, deps) {
      create == null && console.warn("React Hook useLayoutEffect requires an effect callback. Did you forget to pass a callback to the hook?");
      return resolveDispatcher().useLayoutEffect(create, deps);
    };
    exports.useMemo = function(create, deps) {
      return resolveDispatcher().useMemo(create, deps);
    };
    exports.useOptimistic = function(passthrough, reducer) {
      return resolveDispatcher().useOptimistic(passthrough, reducer);
    };
    exports.useReducer = function(reducer, initialArg, init) {
      return resolveDispatcher().useReducer(reducer, initialArg, init);
    };
    exports.useRef = function(initialValue) {
      return resolveDispatcher().useRef(initialValue);
    };
    exports.useState = function(initialState) {
      return resolveDispatcher().useState(initialState);
    };
    exports.useSyncExternalStore = function(subscribe, getSnapshot, getServerSnapshot) {
      return resolveDispatcher().useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
    };
    exports.useTransition = function() {
      return resolveDispatcher().useTransition();
    };
    exports.version = "19.1.1";
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop === "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  })();
});

// node_modules/react/index.js
var require_react = __commonJS((exports, module) => {
  var react_development = __toESM(require_react_development(), 1);
  if (false) {} else {
    module.exports = react_development;
  }
});

// node_modules/react/cjs/react-jsx-runtime.development.js
var require_react_jsx_runtime_development = __commonJS((exports) => {
  var React2 = __toESM(require_react(), 1);
  (function() {
    function getComponentNameFromType(type) {
      if (type == null)
        return null;
      if (typeof type === "function")
        return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
      if (typeof type === "string")
        return type;
      switch (type) {
        case REACT_FRAGMENT_TYPE:
          return "Fragment";
        case REACT_PROFILER_TYPE:
          return "Profiler";
        case REACT_STRICT_MODE_TYPE:
          return "StrictMode";
        case REACT_SUSPENSE_TYPE:
          return "Suspense";
        case REACT_SUSPENSE_LIST_TYPE:
          return "SuspenseList";
        case REACT_ACTIVITY_TYPE:
          return "Activity";
      }
      if (typeof type === "object")
        switch (typeof type.tag === "number" && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof) {
          case REACT_PORTAL_TYPE:
            return "Portal";
          case REACT_CONTEXT_TYPE:
            return (type.displayName || "Context") + ".Provider";
          case REACT_CONSUMER_TYPE:
            return (type._context.displayName || "Context") + ".Consumer";
          case REACT_FORWARD_REF_TYPE:
            var innerType = type.render;
            type = type.displayName;
            type || (type = innerType.displayName || innerType.name || "", type = type !== "" ? "ForwardRef(" + type + ")" : "ForwardRef");
            return type;
          case REACT_MEMO_TYPE:
            return innerType = type.displayName || null, innerType !== null ? innerType : getComponentNameFromType(type.type) || "Memo";
          case REACT_LAZY_TYPE:
            innerType = type._payload;
            type = type._init;
            try {
              return getComponentNameFromType(type(innerType));
            } catch (x) {}
        }
      return null;
    }
    function testStringCoercion(value) {
      return "" + value;
    }
    function checkKeyStringCoercion(value) {
      try {
        testStringCoercion(value);
        var JSCompiler_inline_result = false;
      } catch (e) {
        JSCompiler_inline_result = true;
      }
      if (JSCompiler_inline_result) {
        JSCompiler_inline_result = console;
        var JSCompiler_temp_const = JSCompiler_inline_result.error;
        var JSCompiler_inline_result$jscomp$0 = typeof Symbol === "function" && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
        JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
        return testStringCoercion(value);
      }
    }
    function getTaskName(type) {
      if (type === REACT_FRAGMENT_TYPE)
        return "<>";
      if (typeof type === "object" && type !== null && type.$$typeof === REACT_LAZY_TYPE)
        return "<...>";
      try {
        var name = getComponentNameFromType(type);
        return name ? "<" + name + ">" : "<...>";
      } catch (x) {
        return "<...>";
      }
    }
    function getOwner() {
      var dispatcher = ReactSharedInternals.A;
      return dispatcher === null ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
      return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
      if (hasOwnProperty.call(config, "key")) {
        var getter = Object.getOwnPropertyDescriptor(config, "key").get;
        if (getter && getter.isReactWarning)
          return false;
      }
      return config.key !== undefined;
    }
    function defineKeyPropWarningGetter(props, displayName) {
      function warnAboutAccessingKey() {
        specialPropKeyWarningShown || (specialPropKeyWarningShown = true, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
      }
      warnAboutAccessingKey.isReactWarning = true;
      Object.defineProperty(props, "key", {
        get: warnAboutAccessingKey,
        configurable: true
      });
    }
    function elementRefGetterWithDeprecationWarning() {
      var componentName = getComponentNameFromType(this.type);
      didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = true, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
      componentName = this.props.ref;
      return componentName !== undefined ? componentName : null;
    }
    function ReactElement(type, key, self, source, owner, props, debugStack, debugTask) {
      self = props.ref;
      type = {
        $$typeof: REACT_ELEMENT_TYPE,
        type,
        key,
        props,
        _owner: owner
      };
      (self !== undefined ? self : null) !== null ? Object.defineProperty(type, "ref", {
        enumerable: false,
        get: elementRefGetterWithDeprecationWarning
      }) : Object.defineProperty(type, "ref", { enumerable: false, value: null });
      type._store = {};
      Object.defineProperty(type._store, "validated", {
        configurable: false,
        enumerable: false,
        writable: true,
        value: 0
      });
      Object.defineProperty(type, "_debugInfo", {
        configurable: false,
        enumerable: false,
        writable: true,
        value: null
      });
      Object.defineProperty(type, "_debugStack", {
        configurable: false,
        enumerable: false,
        writable: true,
        value: debugStack
      });
      Object.defineProperty(type, "_debugTask", {
        configurable: false,
        enumerable: false,
        writable: true,
        value: debugTask
      });
      Object.freeze && (Object.freeze(type.props), Object.freeze(type));
      return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, source, self, debugStack, debugTask) {
      var children = config.children;
      if (children !== undefined)
        if (isStaticChildren)
          if (isArrayImpl(children)) {
            for (isStaticChildren = 0;isStaticChildren < children.length; isStaticChildren++)
              validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
          } else
            console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else
          validateChildKeys(children);
      if (hasOwnProperty.call(config, "key")) {
        children = getComponentNameFromType(type);
        var keys = Object.keys(config).filter(function(k) {
          return k !== "key";
        });
        isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
        didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = true);
      }
      children = null;
      maybeKey !== undefined && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
      hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
      if ("key" in config) {
        maybeKey = {};
        for (var propName in config)
          propName !== "key" && (maybeKey[propName] = config[propName]);
      } else
        maybeKey = config;
      children && defineKeyPropWarningGetter(maybeKey, typeof type === "function" ? type.displayName || type.name || "Unknown" : type);
      return ReactElement(type, children, self, source, getOwner(), maybeKey, debugStack, debugTask);
    }
    function validateChildKeys(node) {
      typeof node === "object" && node !== null && node.$$typeof === REACT_ELEMENT_TYPE && node._store && (node._store.validated = 1);
    }
    var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler");
    Symbol.for("react.provider");
    var REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React2.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
      return null;
    };
    React2 = {
      react_stack_bottom_frame: function(callStackForError) {
        return callStackForError();
      }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React2.react_stack_bottom_frame.bind(React2, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsx = function(type, config, maybeKey, source, self) {
      var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
      return jsxDEVImpl(type, config, maybeKey, false, source, self, trackActualOwner ? Error("react-stack-top-frame") : unknownOwnerDebugStack, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
    exports.jsxs = function(type, config, maybeKey, source, self) {
      var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
      return jsxDEVImpl(type, config, maybeKey, true, source, self, trackActualOwner ? Error("react-stack-top-frame") : unknownOwnerDebugStack, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
  })();
});

// node_modules/react/jsx-runtime.js
var require_jsx_runtime = __commonJS((exports, module) => {
  var react_jsx_runtime_development = __toESM(require_react_jsx_runtime_development(), 1);
  if (false) {} else {
    module.exports = react_jsx_runtime_development;
  }
});

// node_modules/react-dom/cjs/react-dom.development.js
var require_react_dom_development = __commonJS((exports) => {
  var React2 = __toESM(require_react(), 1);
  (function() {
    function noop2() {}
    function testStringCoercion(value) {
      return "" + value;
    }
    function createPortal$1(children, containerInfo, implementation) {
      var key = 3 < arguments.length && arguments[3] !== undefined ? arguments[3] : null;
      try {
        testStringCoercion(key);
        var JSCompiler_inline_result = false;
      } catch (e) {
        JSCompiler_inline_result = true;
      }
      JSCompiler_inline_result && (console.error("The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", typeof Symbol === "function" && Symbol.toStringTag && key[Symbol.toStringTag] || key.constructor.name || "Object"), testStringCoercion(key));
      return {
        $$typeof: REACT_PORTAL_TYPE,
        key: key == null ? null : "" + key,
        children,
        containerInfo,
        implementation
      };
    }
    function getCrossOriginStringAs(as, input) {
      if (as === "font")
        return "";
      if (typeof input === "string")
        return input === "use-credentials" ? input : "";
    }
    function getValueDescriptorExpectingObjectForWarning(thing) {
      return thing === null ? "`null`" : thing === undefined ? "`undefined`" : thing === "" ? "an empty string" : 'something with type "' + typeof thing + '"';
    }
    function getValueDescriptorExpectingEnumForWarning(thing) {
      return thing === null ? "`null`" : thing === undefined ? "`undefined`" : thing === "" ? "an empty string" : typeof thing === "string" ? JSON.stringify(thing) : typeof thing === "number" ? "`" + thing + "`" : 'something with type "' + typeof thing + '"';
    }
    function resolveDispatcher() {
      var dispatcher = ReactSharedInternals.H;
      dispatcher === null && console.error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`);
      return dispatcher;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart === "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var Internals = {
      d: {
        f: noop2,
        r: function() {
          throw Error("Invalid form element. requestFormReset must be passed a form that was rendered by React.");
        },
        D: noop2,
        C: noop2,
        L: noop2,
        m: noop2,
        X: noop2,
        S: noop2,
        M: noop2
      },
      p: 0,
      findDOMNode: null
    }, REACT_PORTAL_TYPE = Symbol.for("react.portal"), ReactSharedInternals = React2.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    typeof Map === "function" && Map.prototype != null && typeof Map.prototype.forEach === "function" && typeof Set === "function" && Set.prototype != null && typeof Set.prototype.clear === "function" && typeof Set.prototype.forEach === "function" || console.error("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");
    exports.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Internals;
    exports.createPortal = function(children, container) {
      var key = 2 < arguments.length && arguments[2] !== undefined ? arguments[2] : null;
      if (!container || container.nodeType !== 1 && container.nodeType !== 9 && container.nodeType !== 11)
        throw Error("Target container is not a DOM element.");
      return createPortal$1(children, container, null, key);
    };
    exports.flushSync = function(fn) {
      var previousTransition = ReactSharedInternals.T, previousUpdatePriority = Internals.p;
      try {
        if (ReactSharedInternals.T = null, Internals.p = 2, fn)
          return fn();
      } finally {
        ReactSharedInternals.T = previousTransition, Internals.p = previousUpdatePriority, Internals.d.f() && console.error("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task.");
      }
    };
    exports.preconnect = function(href, options) {
      typeof href === "string" && href ? options != null && typeof options !== "object" ? console.error("ReactDOM.preconnect(): Expected the `options` argument (second) to be an object but encountered %s instead. The only supported option at this time is `crossOrigin` which accepts a string.", getValueDescriptorExpectingEnumForWarning(options)) : options != null && typeof options.crossOrigin !== "string" && console.error("ReactDOM.preconnect(): Expected the `crossOrigin` option (second argument) to be a string but encountered %s instead. Try removing this option or passing a string value instead.", getValueDescriptorExpectingObjectForWarning(options.crossOrigin)) : console.error("ReactDOM.preconnect(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.", getValueDescriptorExpectingObjectForWarning(href));
      typeof href === "string" && (options ? (options = options.crossOrigin, options = typeof options === "string" ? options === "use-credentials" ? options : "" : undefined) : options = null, Internals.d.C(href, options));
    };
    exports.prefetchDNS = function(href) {
      if (typeof href !== "string" || !href)
        console.error("ReactDOM.prefetchDNS(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.", getValueDescriptorExpectingObjectForWarning(href));
      else if (1 < arguments.length) {
        var options = arguments[1];
        typeof options === "object" && options.hasOwnProperty("crossOrigin") ? console.error("ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. It looks like the you are attempting to set a crossOrigin property for this DNS lookup hint. Browsers do not perform DNS queries using CORS and setting this attribute on the resource hint has no effect. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.", getValueDescriptorExpectingEnumForWarning(options)) : console.error("ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.", getValueDescriptorExpectingEnumForWarning(options));
      }
      typeof href === "string" && Internals.d.D(href);
    };
    exports.preinit = function(href, options) {
      typeof href === "string" && href ? options == null || typeof options !== "object" ? console.error("ReactDOM.preinit(): Expected the `options` argument (second) to be an object with an `as` property describing the type of resource to be preinitialized but encountered %s instead.", getValueDescriptorExpectingEnumForWarning(options)) : options.as !== "style" && options.as !== "script" && console.error('ReactDOM.preinit(): Expected the `as` property in the `options` argument (second) to contain a valid value describing the type of resource to be preinitialized but encountered %s instead. Valid values for `as` are "style" and "script".', getValueDescriptorExpectingEnumForWarning(options.as)) : console.error("ReactDOM.preinit(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.", getValueDescriptorExpectingObjectForWarning(href));
      if (typeof href === "string" && options && typeof options.as === "string") {
        var as = options.as, crossOrigin = getCrossOriginStringAs(as, options.crossOrigin), integrity = typeof options.integrity === "string" ? options.integrity : undefined, fetchPriority = typeof options.fetchPriority === "string" ? options.fetchPriority : undefined;
        as === "style" ? Internals.d.S(href, typeof options.precedence === "string" ? options.precedence : undefined, {
          crossOrigin,
          integrity,
          fetchPriority
        }) : as === "script" && Internals.d.X(href, {
          crossOrigin,
          integrity,
          fetchPriority,
          nonce: typeof options.nonce === "string" ? options.nonce : undefined
        });
      }
    };
    exports.preinitModule = function(href, options) {
      var encountered = "";
      typeof href === "string" && href || (encountered += " The `href` argument encountered was " + getValueDescriptorExpectingObjectForWarning(href) + ".");
      options !== undefined && typeof options !== "object" ? encountered += " The `options` argument encountered was " + getValueDescriptorExpectingObjectForWarning(options) + "." : options && ("as" in options) && options.as !== "script" && (encountered += " The `as` option encountered was " + getValueDescriptorExpectingEnumForWarning(options.as) + ".");
      if (encountered)
        console.error("ReactDOM.preinitModule(): Expected up to two arguments, a non-empty `href` string and, optionally, an `options` object with a valid `as` property.%s", encountered);
      else
        switch (encountered = options && typeof options.as === "string" ? options.as : "script", encountered) {
          case "script":
            break;
          default:
            encountered = getValueDescriptorExpectingEnumForWarning(encountered), console.error('ReactDOM.preinitModule(): Currently the only supported "as" type for this function is "script" but received "%s" instead. This warning was generated for `href` "%s". In the future other module types will be supported, aligning with the import-attributes proposal. Learn more here: (https://github.com/tc39/proposal-import-attributes)', encountered, href);
        }
      if (typeof href === "string")
        if (typeof options === "object" && options !== null) {
          if (options.as == null || options.as === "script")
            encountered = getCrossOriginStringAs(options.as, options.crossOrigin), Internals.d.M(href, {
              crossOrigin: encountered,
              integrity: typeof options.integrity === "string" ? options.integrity : undefined,
              nonce: typeof options.nonce === "string" ? options.nonce : undefined
            });
        } else
          options == null && Internals.d.M(href);
    };
    exports.preload = function(href, options) {
      var encountered = "";
      typeof href === "string" && href || (encountered += " The `href` argument encountered was " + getValueDescriptorExpectingObjectForWarning(href) + ".");
      options == null || typeof options !== "object" ? encountered += " The `options` argument encountered was " + getValueDescriptorExpectingObjectForWarning(options) + "." : typeof options.as === "string" && options.as || (encountered += " The `as` option encountered was " + getValueDescriptorExpectingObjectForWarning(options.as) + ".");
      encountered && console.error('ReactDOM.preload(): Expected two arguments, a non-empty `href` string and an `options` object with an `as` property valid for a `<link rel="preload" as="..." />` tag.%s', encountered);
      if (typeof href === "string" && typeof options === "object" && options !== null && typeof options.as === "string") {
        encountered = options.as;
        var crossOrigin = getCrossOriginStringAs(encountered, options.crossOrigin);
        Internals.d.L(href, encountered, {
          crossOrigin,
          integrity: typeof options.integrity === "string" ? options.integrity : undefined,
          nonce: typeof options.nonce === "string" ? options.nonce : undefined,
          type: typeof options.type === "string" ? options.type : undefined,
          fetchPriority: typeof options.fetchPriority === "string" ? options.fetchPriority : undefined,
          referrerPolicy: typeof options.referrerPolicy === "string" ? options.referrerPolicy : undefined,
          imageSrcSet: typeof options.imageSrcSet === "string" ? options.imageSrcSet : undefined,
          imageSizes: typeof options.imageSizes === "string" ? options.imageSizes : undefined,
          media: typeof options.media === "string" ? options.media : undefined
        });
      }
    };
    exports.preloadModule = function(href, options) {
      var encountered = "";
      typeof href === "string" && href || (encountered += " The `href` argument encountered was " + getValueDescriptorExpectingObjectForWarning(href) + ".");
      options !== undefined && typeof options !== "object" ? encountered += " The `options` argument encountered was " + getValueDescriptorExpectingObjectForWarning(options) + "." : options && ("as" in options) && typeof options.as !== "string" && (encountered += " The `as` option encountered was " + getValueDescriptorExpectingObjectForWarning(options.as) + ".");
      encountered && console.error('ReactDOM.preloadModule(): Expected two arguments, a non-empty `href` string and, optionally, an `options` object with an `as` property valid for a `<link rel="modulepreload" as="..." />` tag.%s', encountered);
      typeof href === "string" && (options ? (encountered = getCrossOriginStringAs(options.as, options.crossOrigin), Internals.d.m(href, {
        as: typeof options.as === "string" && options.as !== "script" ? options.as : undefined,
        crossOrigin: encountered,
        integrity: typeof options.integrity === "string" ? options.integrity : undefined
      })) : Internals.d.m(href));
    };
    exports.requestFormReset = function(form) {
      Internals.d.r(form);
    };
    exports.unstable_batchedUpdates = function(fn, a) {
      return fn(a);
    };
    exports.useFormState = function(action, initialState, permalink) {
      return resolveDispatcher().useFormState(action, initialState, permalink);
    };
    exports.useFormStatus = function() {
      return resolveDispatcher().useHostTransitionStatus();
    };
    exports.version = "19.1.1";
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop === "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  })();
});

// node_modules/react-dom/index.js
var require_react_dom = __commonJS((exports, module) => {
  var react_dom_development = __toESM(require_react_dom_development(), 1);
  if (false) {} else {
    module.exports = react_dom_development;
  }
});

// node_modules/react-router/dist/development/chunk-K7YFBME3.js
var require_chunk_K7YFBME3 = __commonJS((exports) => {
  var _react = __toESM(require_react(), 1);
  Object.defineProperty(exports, "__esModule", { value: true });
  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};
      if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) {
            newObj[key] = obj[key];
          }
        }
      }
      newObj.default = obj;
      return newObj;
    }
  }
  function _nullishCoalesce(lhs, rhsFn) {
    if (lhs != null) {
      return lhs;
    } else {
      return rhsFn();
    }
  }
  function _optionalChain(ops) {
    let lastAccessLHS = undefined;
    let value = ops[0];
    let i = 1;
    while (i < ops.length) {
      const op = ops[i];
      const fn = ops[i + 1];
      i += 2;
      if ((op === "optionalAccess" || op === "optionalCall") && value == null) {
        return;
      }
      if (op === "access" || op === "optionalAccess") {
        lastAccessLHS = value;
        value = fn(value);
      } else if (op === "call" || op === "optionalCall") {
        value = fn((...args) => value.call(lastAccessLHS, ...args));
        lastAccessLHS = undefined;
      }
    }
    return value;
  }
  var __typeError = (msg) => {
    throw TypeError(msg);
  };
  var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
  var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
  var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
  var Action = /* @__PURE__ */ ((Action2) => {
    Action2["Pop"] = "POP";
    Action2["Push"] = "PUSH";
    Action2["Replace"] = "REPLACE";
    return Action2;
  })(Action || {});
  var PopStateEventType = "popstate";
  function createMemoryHistory(options = {}) {
    let { initialEntries = ["/"], initialIndex, v5Compat = false } = options;
    let entries;
    entries = initialEntries.map((entry, index2) => createMemoryLocation(entry, typeof entry === "string" ? null : entry.state, index2 === 0 ? "default" : undefined));
    let index = clampIndex(initialIndex == null ? entries.length - 1 : initialIndex);
    let action = "POP";
    let listener = null;
    function clampIndex(n) {
      return Math.min(Math.max(n, 0), entries.length - 1);
    }
    function getCurrentLocation() {
      return entries[index];
    }
    function createMemoryLocation(to, state = null, key) {
      let location2 = createLocation(entries ? getCurrentLocation().pathname : "/", to, state, key);
      warning2(location2.pathname.charAt(0) === "/", `relative pathnames are not supported in memory history: ${JSON.stringify(to)}`);
      return location2;
    }
    function createHref(to) {
      return typeof to === "string" ? to : createPath(to);
    }
    let history = {
      get index() {
        return index;
      },
      get action() {
        return action;
      },
      get location() {
        return getCurrentLocation();
      },
      createHref,
      createURL(to) {
        return new URL(createHref(to), "http://localhost");
      },
      encodeLocation(to) {
        let path = typeof to === "string" ? parsePath(to) : to;
        return {
          pathname: path.pathname || "",
          search: path.search || "",
          hash: path.hash || ""
        };
      },
      push(to, state) {
        action = "PUSH";
        let nextLocation = createMemoryLocation(to, state);
        index += 1;
        entries.splice(index, entries.length, nextLocation);
        if (v5Compat && listener) {
          listener({ action, location: nextLocation, delta: 1 });
        }
      },
      replace(to, state) {
        action = "REPLACE";
        let nextLocation = createMemoryLocation(to, state);
        entries[index] = nextLocation;
        if (v5Compat && listener) {
          listener({ action, location: nextLocation, delta: 0 });
        }
      },
      go(delta) {
        action = "POP";
        let nextIndex = clampIndex(index + delta);
        let nextLocation = entries[nextIndex];
        index = nextIndex;
        if (listener) {
          listener({ action, location: nextLocation, delta });
        }
      },
      listen(fn) {
        listener = fn;
        return () => {
          listener = null;
        };
      }
    };
    return history;
  }
  function createBrowserHistory(options = {}) {
    function createBrowserLocation(window2, globalHistory) {
      let { pathname, search, hash } = window2.location;
      return createLocation("", { pathname, search, hash }, globalHistory.state && globalHistory.state.usr || null, globalHistory.state && globalHistory.state.key || "default");
    }
    function createBrowserHref(window2, to) {
      return typeof to === "string" ? to : createPath(to);
    }
    return getUrlBasedHistory(createBrowserLocation, createBrowserHref, null, options);
  }
  function createHashHistory(options = {}) {
    function createHashLocation(window2, globalHistory) {
      let {
        pathname = "/",
        search = "",
        hash = ""
      } = parsePath(window2.location.hash.substring(1));
      if (!pathname.startsWith("/") && !pathname.startsWith(".")) {
        pathname = "/" + pathname;
      }
      return createLocation("", { pathname, search, hash }, globalHistory.state && globalHistory.state.usr || null, globalHistory.state && globalHistory.state.key || "default");
    }
    function createHashHref(window2, to) {
      let base = window2.document.querySelector("base");
      let href = "";
      if (base && base.getAttribute("href")) {
        let url = window2.location.href;
        let hashIndex = url.indexOf("#");
        href = hashIndex === -1 ? url : url.slice(0, hashIndex);
      }
      return href + "#" + (typeof to === "string" ? to : createPath(to));
    }
    function validateHashLocation(location2, to) {
      warning2(location2.pathname.charAt(0) === "/", `relative pathnames are not supported in hash history.push(${JSON.stringify(to)})`);
    }
    return getUrlBasedHistory(createHashLocation, createHashHref, validateHashLocation, options);
  }
  function invariant2(value, message) {
    if (value === false || value === null || typeof value === "undefined") {
      throw new Error(message);
    }
  }
  function warning2(cond, message) {
    if (!cond) {
      if (typeof console !== "undefined")
        console.warn(message);
      try {
        throw new Error(message);
      } catch (e) {}
    }
  }
  function createKey() {
    return Math.random().toString(36).substring(2, 10);
  }
  function getHistoryState(location2, index) {
    return {
      usr: location2.state,
      key: location2.key,
      idx: index
    };
  }
  function createLocation(current, to, state = null, key) {
    let location2 = {
      pathname: typeof current === "string" ? current : current.pathname,
      search: "",
      hash: "",
      ...typeof to === "string" ? parsePath(to) : to,
      state,
      key: to && to.key || key || createKey()
    };
    return location2;
  }
  function createPath({
    pathname = "/",
    search = "",
    hash = ""
  }) {
    if (search && search !== "?")
      pathname += search.charAt(0) === "?" ? search : "?" + search;
    if (hash && hash !== "#")
      pathname += hash.charAt(0) === "#" ? hash : "#" + hash;
    return pathname;
  }
  function parsePath(path) {
    let parsedPath = {};
    if (path) {
      let hashIndex = path.indexOf("#");
      if (hashIndex >= 0) {
        parsedPath.hash = path.substring(hashIndex);
        path = path.substring(0, hashIndex);
      }
      let searchIndex = path.indexOf("?");
      if (searchIndex >= 0) {
        parsedPath.search = path.substring(searchIndex);
        path = path.substring(0, searchIndex);
      }
      if (path) {
        parsedPath.pathname = path;
      }
    }
    return parsedPath;
  }
  function getUrlBasedHistory(getLocation, createHref, validateLocation, options = {}) {
    let { window: window2 = document.defaultView, v5Compat = false } = options;
    let globalHistory = window2.history;
    let action = "POP";
    let listener = null;
    let index = getIndex();
    if (index == null) {
      index = 0;
      globalHistory.replaceState({ ...globalHistory.state, idx: index }, "");
    }
    function getIndex() {
      let state = globalHistory.state || { idx: null };
      return state.idx;
    }
    function handlePop() {
      action = "POP";
      let nextIndex = getIndex();
      let delta = nextIndex == null ? null : nextIndex - index;
      index = nextIndex;
      if (listener) {
        listener({ action, location: history.location, delta });
      }
    }
    function push(to, state) {
      action = "PUSH";
      let location2 = createLocation(history.location, to, state);
      if (validateLocation)
        validateLocation(location2, to);
      index = getIndex() + 1;
      let historyState = getHistoryState(location2, index);
      let url = history.createHref(location2);
      try {
        globalHistory.pushState(historyState, "", url);
      } catch (error) {
        if (error instanceof DOMException && error.name === "DataCloneError") {
          throw error;
        }
        window2.location.assign(url);
      }
      if (v5Compat && listener) {
        listener({ action, location: history.location, delta: 1 });
      }
    }
    function replace2(to, state) {
      action = "REPLACE";
      let location2 = createLocation(history.location, to, state);
      if (validateLocation)
        validateLocation(location2, to);
      index = getIndex();
      let historyState = getHistoryState(location2, index);
      let url = history.createHref(location2);
      globalHistory.replaceState(historyState, "", url);
      if (v5Compat && listener) {
        listener({ action, location: history.location, delta: 0 });
      }
    }
    function createURL(to) {
      return createBrowserURLImpl(to);
    }
    let history = {
      get action() {
        return action;
      },
      get location() {
        return getLocation(window2, globalHistory);
      },
      listen(fn) {
        if (listener) {
          throw new Error("A history only accepts one active listener");
        }
        window2.addEventListener(PopStateEventType, handlePop);
        listener = fn;
        return () => {
          window2.removeEventListener(PopStateEventType, handlePop);
          listener = null;
        };
      },
      createHref(to) {
        return createHref(window2, to);
      },
      createURL,
      encodeLocation(to) {
        let url = createURL(to);
        return {
          pathname: url.pathname,
          search: url.search,
          hash: url.hash
        };
      },
      push,
      replace: replace2,
      go(n) {
        return globalHistory.go(n);
      }
    };
    return history;
  }
  function createBrowserURLImpl(to, isAbsolute = false) {
    let base = "http://localhost";
    if (typeof window !== "undefined") {
      base = window.location.origin !== "null" ? window.location.origin : window.location.href;
    }
    invariant2(base, "No window.location.(origin|href) available to create URL");
    let href = typeof to === "string" ? to : createPath(to);
    href = href.replace(/ $/, "%20");
    if (!isAbsolute && href.startsWith("//")) {
      href = base + href;
    }
    return new URL(href, base);
  }
  function unstable_createContext(defaultValue) {
    return { defaultValue };
  }
  var _map;
  var unstable_RouterContextProvider = class {
    constructor(init) {
      __privateAdd(this, _map, /* @__PURE__ */ new Map);
      if (init) {
        for (let [context, value] of init) {
          this.set(context, value);
        }
      }
    }
    get(context) {
      if (__privateGet(this, _map).has(context)) {
        return __privateGet(this, _map).get(context);
      }
      if (context.defaultValue !== undefined) {
        return context.defaultValue;
      }
      throw new Error("No value found for context");
    }
    set(context, value) {
      __privateGet(this, _map).set(context, value);
    }
  };
  _map = new WeakMap;
  var unsupportedLazyRouteObjectKeys = /* @__PURE__ */ new Set([
    "lazy",
    "caseSensitive",
    "path",
    "id",
    "index",
    "children"
  ]);
  function isUnsupportedLazyRouteObjectKey(key) {
    return unsupportedLazyRouteObjectKeys.has(key);
  }
  var unsupportedLazyRouteFunctionKeys = /* @__PURE__ */ new Set([
    "lazy",
    "caseSensitive",
    "path",
    "id",
    "index",
    "unstable_middleware",
    "children"
  ]);
  function isUnsupportedLazyRouteFunctionKey(key) {
    return unsupportedLazyRouteFunctionKeys.has(key);
  }
  function isIndexRoute(route) {
    return route.index === true;
  }
  function convertRoutesToDataRoutes(routes, mapRouteProperties, parentPath = [], manifest = {}, allowInPlaceMutations = false) {
    return routes.map((route, index) => {
      let treePath = [...parentPath, String(index)];
      let id3 = typeof route.id === "string" ? route.id : treePath.join("-");
      invariant2(route.index !== true || !route.children, `Cannot specify children on an index route`);
      invariant2(allowInPlaceMutations || !manifest[id3], `Found a route id collision on id "${id3}".  Route id's must be globally unique within Data Router usages`);
      if (isIndexRoute(route)) {
        let indexRoute = {
          ...route,
          ...mapRouteProperties(route),
          id: id3
        };
        manifest[id3] = indexRoute;
        return indexRoute;
      } else {
        let pathOrLayoutRoute = {
          ...route,
          ...mapRouteProperties(route),
          id: id3,
          children: undefined
        };
        manifest[id3] = pathOrLayoutRoute;
        if (route.children) {
          pathOrLayoutRoute.children = convertRoutesToDataRoutes(route.children, mapRouteProperties, treePath, manifest, allowInPlaceMutations);
        }
        return pathOrLayoutRoute;
      }
    });
  }
  function matchRoutes(routes, locationArg, basename = "/") {
    return matchRoutesImpl(routes, locationArg, basename, false);
  }
  function matchRoutesImpl(routes, locationArg, basename, allowPartial) {
    let location2 = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
    let pathname = stripBasename(location2.pathname || "/", basename);
    if (pathname == null) {
      return null;
    }
    let branches = flattenRoutes(routes);
    rankRouteBranches(branches);
    let matches = null;
    for (let i = 0;matches == null && i < branches.length; ++i) {
      let decoded = decodePath(pathname);
      matches = matchRouteBranch(branches[i], decoded, allowPartial);
    }
    return matches;
  }
  function convertRouteMatchToUiMatch(match, loaderData) {
    let { route, pathname, params } = match;
    return {
      id: route.id,
      pathname,
      params,
      data: loaderData[route.id],
      handle: route.handle
    };
  }
  function flattenRoutes(routes, branches = [], parentsMeta = [], parentPath = "") {
    let flattenRoute = (route, index, relativePath) => {
      let meta = {
        relativePath: relativePath === undefined ? route.path || "" : relativePath,
        caseSensitive: route.caseSensitive === true,
        childrenIndex: index,
        route
      };
      if (meta.relativePath.startsWith("/")) {
        invariant2(meta.relativePath.startsWith(parentPath), `Absolute route path "${meta.relativePath}" nested under path "${parentPath}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`);
        meta.relativePath = meta.relativePath.slice(parentPath.length);
      }
      let path = joinPaths([parentPath, meta.relativePath]);
      let routesMeta = parentsMeta.concat(meta);
      if (route.children && route.children.length > 0) {
        invariant2(route.index !== true, `Index routes must not have child routes. Please remove all child routes from route path "${path}".`);
        flattenRoutes(route.children, branches, routesMeta, path);
      }
      if (route.path == null && !route.index) {
        return;
      }
      branches.push({
        path,
        score: computeScore(path, route.index),
        routesMeta
      });
    };
    routes.forEach((route, index) => {
      if (route.path === "" || !_optionalChain([route, "access", (_2) => _2.path, "optionalAccess", (_3) => _3.includes, "call", (_4) => _4("?")])) {
        flattenRoute(route, index);
      } else {
        for (let exploded of explodeOptionalSegments(route.path)) {
          flattenRoute(route, index, exploded);
        }
      }
    });
    return branches;
  }
  function explodeOptionalSegments(path) {
    let segments = path.split("/");
    if (segments.length === 0)
      return [];
    let [first, ...rest] = segments;
    let isOptional = first.endsWith("?");
    let required = first.replace(/\?$/, "");
    if (rest.length === 0) {
      return isOptional ? [required, ""] : [required];
    }
    let restExploded = explodeOptionalSegments(rest.join("/"));
    let result = [];
    result.push(...restExploded.map((subpath) => subpath === "" ? required : [required, subpath].join("/")));
    if (isOptional) {
      result.push(...restExploded);
    }
    return result.map((exploded) => path.startsWith("/") && exploded === "" ? "/" : exploded);
  }
  function rankRouteBranches(branches) {
    branches.sort((a, b) => a.score !== b.score ? b.score - a.score : compareIndexes(a.routesMeta.map((meta) => meta.childrenIndex), b.routesMeta.map((meta) => meta.childrenIndex)));
  }
  var paramRe = /^:[\w-]+$/;
  var dynamicSegmentValue = 3;
  var indexRouteValue = 2;
  var emptySegmentValue = 1;
  var staticSegmentValue = 10;
  var splatPenalty = -2;
  var isSplat = (s) => s === "*";
  function computeScore(path, index) {
    let segments = path.split("/");
    let initialScore = segments.length;
    if (segments.some(isSplat)) {
      initialScore += splatPenalty;
    }
    if (index) {
      initialScore += indexRouteValue;
    }
    return segments.filter((s) => !isSplat(s)).reduce((score, segment) => score + (paramRe.test(segment) ? dynamicSegmentValue : segment === "" ? emptySegmentValue : staticSegmentValue), initialScore);
  }
  function compareIndexes(a, b) {
    let siblings = a.length === b.length && a.slice(0, -1).every((n, i) => n === b[i]);
    return siblings ? a[a.length - 1] - b[b.length - 1] : 0;
  }
  function matchRouteBranch(branch, pathname, allowPartial = false) {
    let { routesMeta } = branch;
    let matchedParams = {};
    let matchedPathname = "/";
    let matches = [];
    for (let i = 0;i < routesMeta.length; ++i) {
      let meta = routesMeta[i];
      let end = i === routesMeta.length - 1;
      let remainingPathname = matchedPathname === "/" ? pathname : pathname.slice(matchedPathname.length) || "/";
      let match = matchPath({ path: meta.relativePath, caseSensitive: meta.caseSensitive, end }, remainingPathname);
      let route = meta.route;
      if (!match && end && allowPartial && !routesMeta[routesMeta.length - 1].route.index) {
        match = matchPath({
          path: meta.relativePath,
          caseSensitive: meta.caseSensitive,
          end: false
        }, remainingPathname);
      }
      if (!match) {
        return null;
      }
      Object.assign(matchedParams, match.params);
      matches.push({
        params: matchedParams,
        pathname: joinPaths([matchedPathname, match.pathname]),
        pathnameBase: normalizePathname(joinPaths([matchedPathname, match.pathnameBase])),
        route
      });
      if (match.pathnameBase !== "/") {
        matchedPathname = joinPaths([matchedPathname, match.pathnameBase]);
      }
    }
    return matches;
  }
  function generatePath(originalPath, params = {}) {
    let path = originalPath;
    if (path.endsWith("*") && path !== "*" && !path.endsWith("/*")) {
      warning2(false, `Route path "${path}" will be treated as if it were "${path.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${path.replace(/\*$/, "/*")}".`);
      path = path.replace(/\*$/, "/*");
    }
    const prefix = path.startsWith("/") ? "/" : "";
    const stringify2 = (p) => p == null ? "" : typeof p === "string" ? p : String(p);
    const segments = path.split(/\/+/).map((segment, index, array) => {
      const isLastSegment = index === array.length - 1;
      if (isLastSegment && segment === "*") {
        const star = "*";
        return stringify2(params[star]);
      }
      const keyMatch = segment.match(/^:([\w-]+)(\??)$/);
      if (keyMatch) {
        const [, key, optional] = keyMatch;
        let param = params[key];
        invariant2(optional === "?" || param != null, `Missing ":${key}" param`);
        return stringify2(param);
      }
      return segment.replace(/\?$/g, "");
    }).filter((segment) => !!segment);
    return prefix + segments.join("/");
  }
  function matchPath(pattern, pathname) {
    if (typeof pattern === "string") {
      pattern = { path: pattern, caseSensitive: false, end: true };
    }
    let [matcher, compiledParams] = compilePath(pattern.path, pattern.caseSensitive, pattern.end);
    let match = pathname.match(matcher);
    if (!match)
      return null;
    let matchedPathname = match[0];
    let pathnameBase = matchedPathname.replace(/(.)\/+$/, "$1");
    let captureGroups = match.slice(1);
    let params = compiledParams.reduce((memo2, { paramName, isOptional }, index) => {
      if (paramName === "*") {
        let splatValue = captureGroups[index] || "";
        pathnameBase = matchedPathname.slice(0, matchedPathname.length - splatValue.length).replace(/(.)\/+$/, "$1");
      }
      const value = captureGroups[index];
      if (isOptional && !value) {
        memo2[paramName] = undefined;
      } else {
        memo2[paramName] = (value || "").replace(/%2F/g, "/");
      }
      return memo2;
    }, {});
    return {
      params,
      pathname: matchedPathname,
      pathnameBase,
      pattern
    };
  }
  function compilePath(path, caseSensitive = false, end = true) {
    warning2(path === "*" || !path.endsWith("*") || path.endsWith("/*"), `Route path "${path}" will be treated as if it were "${path.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${path.replace(/\*$/, "/*")}".`);
    let params = [];
    let regexpSource = "^" + path.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (_, paramName, isOptional) => {
      params.push({ paramName, isOptional: isOptional != null });
      return isOptional ? "/?([^\\/]+)?" : "/([^\\/]+)";
    });
    if (path.endsWith("*")) {
      params.push({ paramName: "*" });
      regexpSource += path === "*" || path === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$";
    } else if (end) {
      regexpSource += "\\/*$";
    } else if (path !== "" && path !== "/") {
      regexpSource += "(?:(?=\\/|$))";
    } else {}
    let matcher = new RegExp(regexpSource, caseSensitive ? undefined : "i");
    return [matcher, params];
  }
  function decodePath(value) {
    try {
      return value.split("/").map((v) => decodeURIComponent(v).replace(/\//g, "%2F")).join("/");
    } catch (error) {
      warning2(false, `The URL path "${value}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${error}).`);
      return value;
    }
  }
  function stripBasename(pathname, basename) {
    if (basename === "/")
      return pathname;
    if (!pathname.toLowerCase().startsWith(basename.toLowerCase())) {
      return null;
    }
    let startIndex = basename.endsWith("/") ? basename.length - 1 : basename.length;
    let nextChar = pathname.charAt(startIndex);
    if (nextChar && nextChar !== "/") {
      return null;
    }
    return pathname.slice(startIndex) || "/";
  }
  function prependBasename({
    basename,
    pathname
  }) {
    return pathname === "/" ? basename : joinPaths([basename, pathname]);
  }
  function resolvePath(to, fromPathname = "/") {
    let {
      pathname: toPathname,
      search = "",
      hash = ""
    } = typeof to === "string" ? parsePath(to) : to;
    let pathname = toPathname ? toPathname.startsWith("/") ? toPathname : resolvePathname(toPathname, fromPathname) : fromPathname;
    return {
      pathname,
      search: normalizeSearch(search),
      hash: normalizeHash(hash)
    };
  }
  function resolvePathname(relativePath, fromPathname) {
    let segments = fromPathname.replace(/\/+$/, "").split("/");
    let relativeSegments = relativePath.split("/");
    relativeSegments.forEach((segment) => {
      if (segment === "..") {
        if (segments.length > 1)
          segments.pop();
      } else if (segment !== ".") {
        segments.push(segment);
      }
    });
    return segments.length > 1 ? segments.join("/") : "/";
  }
  function getInvalidPathError(char, field, dest, path) {
    return `Cannot include a '${char}' character in a manually specified \`to.${field}\` field [${JSON.stringify(path)}].  Please separate it out to the \`to.${dest}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
  }
  function getPathContributingMatches(matches) {
    return matches.filter((match, index) => index === 0 || match.route.path && match.route.path.length > 0);
  }
  function getResolveToMatches(matches) {
    let pathMatches = getPathContributingMatches(matches);
    return pathMatches.map((match, idx) => idx === pathMatches.length - 1 ? match.pathname : match.pathnameBase);
  }
  function resolveTo(toArg, routePathnames, locationPathname, isPathRelative = false) {
    let to;
    if (typeof toArg === "string") {
      to = parsePath(toArg);
    } else {
      to = { ...toArg };
      invariant2(!to.pathname || !to.pathname.includes("?"), getInvalidPathError("?", "pathname", "search", to));
      invariant2(!to.pathname || !to.pathname.includes("#"), getInvalidPathError("#", "pathname", "hash", to));
      invariant2(!to.search || !to.search.includes("#"), getInvalidPathError("#", "search", "hash", to));
    }
    let isEmptyPath = toArg === "" || to.pathname === "";
    let toPathname = isEmptyPath ? "/" : to.pathname;
    let from;
    if (toPathname == null) {
      from = locationPathname;
    } else {
      let routePathnameIndex = routePathnames.length - 1;
      if (!isPathRelative && toPathname.startsWith("..")) {
        let toSegments = toPathname.split("/");
        while (toSegments[0] === "..") {
          toSegments.shift();
          routePathnameIndex -= 1;
        }
        to.pathname = toSegments.join("/");
      }
      from = routePathnameIndex >= 0 ? routePathnames[routePathnameIndex] : "/";
    }
    let path = resolvePath(to, from);
    let hasExplicitTrailingSlash = toPathname && toPathname !== "/" && toPathname.endsWith("/");
    let hasCurrentTrailingSlash = (isEmptyPath || toPathname === ".") && locationPathname.endsWith("/");
    if (!path.pathname.endsWith("/") && (hasExplicitTrailingSlash || hasCurrentTrailingSlash)) {
      path.pathname += "/";
    }
    return path;
  }
  var joinPaths = (paths) => paths.join("/").replace(/\/\/+/g, "/");
  var normalizePathname = (pathname) => pathname.replace(/\/+$/, "").replace(/^\/*/, "/");
  var normalizeSearch = (search) => !search || search === "?" ? "" : search.startsWith("?") ? search : "?" + search;
  var normalizeHash = (hash) => !hash || hash === "#" ? "" : hash.startsWith("#") ? hash : "#" + hash;
  var DataWithResponseInit = class {
    constructor(data2, init) {
      this.type = "DataWithResponseInit";
      this.data = data2;
      this.init = init || null;
    }
  };
  function data(data2, init) {
    return new DataWithResponseInit(data2, typeof init === "number" ? { status: init } : init);
  }
  var redirect = (url, init = 302) => {
    let responseInit = init;
    if (typeof responseInit === "number") {
      responseInit = { status: responseInit };
    } else if (typeof responseInit.status === "undefined") {
      responseInit.status = 302;
    }
    let headers = new Headers(responseInit.headers);
    headers.set("Location", url);
    return new Response(null, { ...responseInit, headers });
  };
  var redirectDocument = (url, init) => {
    let response = redirect(url, init);
    response.headers.set("X-Remix-Reload-Document", "true");
    return response;
  };
  var replace = (url, init) => {
    let response = redirect(url, init);
    response.headers.set("X-Remix-Replace", "true");
    return response;
  };
  var ErrorResponseImpl = class {
    constructor(status, statusText, data2, internal = false) {
      this.status = status;
      this.statusText = statusText || "";
      this.internal = internal;
      if (data2 instanceof Error) {
        this.data = data2.toString();
        this.error = data2;
      } else {
        this.data = data2;
      }
    }
  };
  function isRouteErrorResponse(error) {
    return error != null && typeof error.status === "number" && typeof error.statusText === "string" && typeof error.internal === "boolean" && "data" in error;
  }
  var validMutationMethodsArr = [
    "POST",
    "PUT",
    "PATCH",
    "DELETE"
  ];
  var validMutationMethods = new Set(validMutationMethodsArr);
  var validRequestMethodsArr = [
    "GET",
    ...validMutationMethodsArr
  ];
  var validRequestMethods = new Set(validRequestMethodsArr);
  var redirectStatusCodes = /* @__PURE__ */ new Set([301, 302, 303, 307, 308]);
  var redirectPreserveMethodStatusCodes = /* @__PURE__ */ new Set([307, 308]);
  var IDLE_NAVIGATION = {
    state: "idle",
    location: undefined,
    formMethod: undefined,
    formAction: undefined,
    formEncType: undefined,
    formData: undefined,
    json: undefined,
    text: undefined
  };
  var IDLE_FETCHER = {
    state: "idle",
    data: undefined,
    formMethod: undefined,
    formAction: undefined,
    formEncType: undefined,
    formData: undefined,
    json: undefined,
    text: undefined
  };
  var IDLE_BLOCKER = {
    state: "unblocked",
    proceed: undefined,
    reset: undefined,
    location: undefined
  };
  var ABSOLUTE_URL_REGEX = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
  var isAbsoluteUrl = (url) => ABSOLUTE_URL_REGEX.test(url);
  var defaultMapRouteProperties = (route) => ({
    hasErrorBoundary: Boolean(route.hasErrorBoundary)
  });
  var TRANSITIONS_STORAGE_KEY = "remix-router-transitions";
  var ResetLoaderDataSymbol = Symbol("ResetLoaderData");
  function createRouter(init) {
    const routerWindow = init.window ? init.window : typeof window !== "undefined" ? window : undefined;
    const isBrowser2 = typeof routerWindow !== "undefined" && typeof routerWindow.document !== "undefined" && typeof routerWindow.document.createElement !== "undefined";
    invariant2(init.routes.length > 0, "You must provide a non-empty routes array to createRouter");
    let hydrationRouteProperties = init.hydrationRouteProperties || [];
    let mapRouteProperties = init.mapRouteProperties || defaultMapRouteProperties;
    let manifest = {};
    let dataRoutes = convertRoutesToDataRoutes(init.routes, mapRouteProperties, undefined, manifest);
    let inFlightDataRoutes;
    let basename = init.basename || "/";
    let dataStrategyImpl = init.dataStrategy || defaultDataStrategyWithMiddleware;
    let future = {
      unstable_middleware: false,
      ...init.future
    };
    let unlistenHistory = null;
    let subscribers = /* @__PURE__ */ new Set;
    let savedScrollPositions = null;
    let getScrollRestorationKey = null;
    let getScrollPosition = null;
    let initialScrollRestored = init.hydrationData != null;
    let initialMatches = matchRoutes(dataRoutes, init.history.location, basename);
    let initialMatchesIsFOW = false;
    let initialErrors = null;
    let initialized;
    if (initialMatches == null && !init.patchRoutesOnNavigation) {
      let error = getInternalRouterError(404, {
        pathname: init.history.location.pathname
      });
      let { matches, route } = getShortCircuitMatches(dataRoutes);
      initialized = true;
      initialMatches = matches;
      initialErrors = { [route.id]: error };
    } else {
      if (initialMatches && !init.hydrationData) {
        let fogOfWar = checkFogOfWar(initialMatches, dataRoutes, init.history.location.pathname);
        if (fogOfWar.active) {
          initialMatches = null;
        }
      }
      if (!initialMatches) {
        initialized = false;
        initialMatches = [];
        let fogOfWar = checkFogOfWar(null, dataRoutes, init.history.location.pathname);
        if (fogOfWar.active && fogOfWar.matches) {
          initialMatchesIsFOW = true;
          initialMatches = fogOfWar.matches;
        }
      } else if (initialMatches.some((m) => m.route.lazy)) {
        initialized = false;
      } else if (!initialMatches.some((m) => m.route.loader)) {
        initialized = true;
      } else {
        let loaderData = init.hydrationData ? init.hydrationData.loaderData : null;
        let errors = init.hydrationData ? init.hydrationData.errors : null;
        if (errors) {
          let idx = initialMatches.findIndex((m) => errors[m.route.id] !== undefined);
          initialized = initialMatches.slice(0, idx + 1).every((m) => !shouldLoadRouteOnHydration(m.route, loaderData, errors));
        } else {
          initialized = initialMatches.every((m) => !shouldLoadRouteOnHydration(m.route, loaderData, errors));
        }
      }
    }
    let router;
    let state = {
      historyAction: init.history.action,
      location: init.history.location,
      matches: initialMatches,
      initialized,
      navigation: IDLE_NAVIGATION,
      restoreScrollPosition: init.hydrationData != null ? false : null,
      preventScrollReset: false,
      revalidation: "idle",
      loaderData: init.hydrationData && init.hydrationData.loaderData || {},
      actionData: init.hydrationData && init.hydrationData.actionData || null,
      errors: init.hydrationData && init.hydrationData.errors || initialErrors,
      fetchers: /* @__PURE__ */ new Map,
      blockers: /* @__PURE__ */ new Map
    };
    let pendingAction = "POP";
    let pendingPreventScrollReset = false;
    let pendingNavigationController;
    let pendingViewTransitionEnabled = false;
    let appliedViewTransitions = /* @__PURE__ */ new Map;
    let removePageHideEventListener = null;
    let isUninterruptedRevalidation = false;
    let isRevalidationRequired = false;
    let cancelledFetcherLoads = /* @__PURE__ */ new Set;
    let fetchControllers = /* @__PURE__ */ new Map;
    let incrementingLoadId = 0;
    let pendingNavigationLoadId = -1;
    let fetchReloadIds = /* @__PURE__ */ new Map;
    let fetchRedirectIds = /* @__PURE__ */ new Set;
    let fetchLoadMatches = /* @__PURE__ */ new Map;
    let activeFetchers = /* @__PURE__ */ new Map;
    let fetchersQueuedForDeletion = /* @__PURE__ */ new Set;
    let blockerFunctions = /* @__PURE__ */ new Map;
    let unblockBlockerHistoryUpdate = undefined;
    let pendingRevalidationDfd = null;
    function initialize() {
      unlistenHistory = init.history.listen(({ action: historyAction, location: location2, delta }) => {
        if (unblockBlockerHistoryUpdate) {
          unblockBlockerHistoryUpdate();
          unblockBlockerHistoryUpdate = undefined;
          return;
        }
        warning2(blockerFunctions.size === 0 || delta != null, "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");
        let blockerKey = shouldBlockNavigation({
          currentLocation: state.location,
          nextLocation: location2,
          historyAction
        });
        if (blockerKey && delta != null) {
          let nextHistoryUpdatePromise = new Promise((resolve) => {
            unblockBlockerHistoryUpdate = resolve;
          });
          init.history.go(delta * -1);
          updateBlocker(blockerKey, {
            state: "blocked",
            location: location2,
            proceed() {
              updateBlocker(blockerKey, {
                state: "proceeding",
                proceed: undefined,
                reset: undefined,
                location: location2
              });
              nextHistoryUpdatePromise.then(() => init.history.go(delta));
            },
            reset() {
              let blockers = new Map(state.blockers);
              blockers.set(blockerKey, IDLE_BLOCKER);
              updateState({ blockers });
            }
          });
          return;
        }
        return startNavigation(historyAction, location2);
      });
      if (isBrowser2) {
        restoreAppliedTransitions(routerWindow, appliedViewTransitions);
        let _saveAppliedTransitions = () => persistAppliedTransitions(routerWindow, appliedViewTransitions);
        routerWindow.addEventListener("pagehide", _saveAppliedTransitions);
        removePageHideEventListener = () => routerWindow.removeEventListener("pagehide", _saveAppliedTransitions);
      }
      if (!state.initialized) {
        startNavigation("POP", state.location, {
          initialHydration: true
        });
      }
      return router;
    }
    function dispose() {
      if (unlistenHistory) {
        unlistenHistory();
      }
      if (removePageHideEventListener) {
        removePageHideEventListener();
      }
      subscribers.clear();
      pendingNavigationController && pendingNavigationController.abort();
      state.fetchers.forEach((_, key) => deleteFetcher(key));
      state.blockers.forEach((_, key) => deleteBlocker(key));
    }
    function subscribe(fn) {
      subscribers.add(fn);
      return () => subscribers.delete(fn);
    }
    function updateState(newState, opts = {}) {
      if (newState.matches) {
        newState.matches = newState.matches.map((m) => {
          let route = manifest[m.route.id];
          let matchRoute = m.route;
          if (matchRoute.element !== route.element || matchRoute.errorElement !== route.errorElement || matchRoute.hydrateFallbackElement !== route.hydrateFallbackElement) {
            return {
              ...m,
              route
            };
          }
          return m;
        });
      }
      state = {
        ...state,
        ...newState
      };
      let unmountedFetchers = [];
      let mountedFetchers = [];
      state.fetchers.forEach((fetcher, key) => {
        if (fetcher.state === "idle") {
          if (fetchersQueuedForDeletion.has(key)) {
            unmountedFetchers.push(key);
          } else {
            mountedFetchers.push(key);
          }
        }
      });
      fetchersQueuedForDeletion.forEach((key) => {
        if (!state.fetchers.has(key) && !fetchControllers.has(key)) {
          unmountedFetchers.push(key);
        }
      });
      [...subscribers].forEach((subscriber) => subscriber(state, {
        deletedFetchers: unmountedFetchers,
        viewTransitionOpts: opts.viewTransitionOpts,
        flushSync: opts.flushSync === true
      }));
      unmountedFetchers.forEach((key) => deleteFetcher(key));
      mountedFetchers.forEach((key) => state.fetchers.delete(key));
    }
    function completeNavigation(location2, newState, { flushSync } = {}) {
      let isActionReload = state.actionData != null && state.navigation.formMethod != null && isMutationMethod(state.navigation.formMethod) && state.navigation.state === "loading" && _optionalChain([location2, "access", (_5) => _5.state, "optionalAccess", (_6) => _6._isRedirect]) !== true;
      let actionData;
      if (newState.actionData) {
        if (Object.keys(newState.actionData).length > 0) {
          actionData = newState.actionData;
        } else {
          actionData = null;
        }
      } else if (isActionReload) {
        actionData = state.actionData;
      } else {
        actionData = null;
      }
      let loaderData = newState.loaderData ? mergeLoaderData(state.loaderData, newState.loaderData, newState.matches || [], newState.errors) : state.loaderData;
      let blockers = state.blockers;
      if (blockers.size > 0) {
        blockers = new Map(blockers);
        blockers.forEach((_, k) => blockers.set(k, IDLE_BLOCKER));
      }
      let restoreScrollPosition = isUninterruptedRevalidation ? false : getSavedScrollPosition(location2, newState.matches || state.matches);
      let preventScrollReset = pendingPreventScrollReset === true || state.navigation.formMethod != null && isMutationMethod(state.navigation.formMethod) && _optionalChain([location2, "access", (_7) => _7.state, "optionalAccess", (_8) => _8._isRedirect]) !== true;
      if (inFlightDataRoutes) {
        dataRoutes = inFlightDataRoutes;
        inFlightDataRoutes = undefined;
      }
      if (isUninterruptedRevalidation) {} else if (pendingAction === "POP") {} else if (pendingAction === "PUSH") {
        init.history.push(location2, location2.state);
      } else if (pendingAction === "REPLACE") {
        init.history.replace(location2, location2.state);
      }
      let viewTransitionOpts;
      if (pendingAction === "POP") {
        let priorPaths = appliedViewTransitions.get(state.location.pathname);
        if (priorPaths && priorPaths.has(location2.pathname)) {
          viewTransitionOpts = {
            currentLocation: state.location,
            nextLocation: location2
          };
        } else if (appliedViewTransitions.has(location2.pathname)) {
          viewTransitionOpts = {
            currentLocation: location2,
            nextLocation: state.location
          };
        }
      } else if (pendingViewTransitionEnabled) {
        let toPaths = appliedViewTransitions.get(state.location.pathname);
        if (toPaths) {
          toPaths.add(location2.pathname);
        } else {
          toPaths = /* @__PURE__ */ new Set([location2.pathname]);
          appliedViewTransitions.set(state.location.pathname, toPaths);
        }
        viewTransitionOpts = {
          currentLocation: state.location,
          nextLocation: location2
        };
      }
      updateState({
        ...newState,
        actionData,
        loaderData,
        historyAction: pendingAction,
        location: location2,
        initialized: true,
        navigation: IDLE_NAVIGATION,
        revalidation: "idle",
        restoreScrollPosition,
        preventScrollReset,
        blockers
      }, {
        viewTransitionOpts,
        flushSync: flushSync === true
      });
      pendingAction = "POP";
      pendingPreventScrollReset = false;
      pendingViewTransitionEnabled = false;
      isUninterruptedRevalidation = false;
      isRevalidationRequired = false;
      _optionalChain([pendingRevalidationDfd, "optionalAccess", (_9) => _9.resolve, "call", (_10) => _10()]);
      pendingRevalidationDfd = null;
    }
    async function navigate(to, opts) {
      if (typeof to === "number") {
        init.history.go(to);
        return;
      }
      let normalizedPath = normalizeTo(state.location, state.matches, basename, to, _optionalChain([opts, "optionalAccess", (_11) => _11.fromRouteId]), _optionalChain([opts, "optionalAccess", (_12) => _12.relative]));
      let { path, submission, error } = normalizeNavigateOptions(false, normalizedPath, opts);
      let currentLocation = state.location;
      let nextLocation = createLocation(state.location, path, opts && opts.state);
      nextLocation = {
        ...nextLocation,
        ...init.history.encodeLocation(nextLocation)
      };
      let userReplace = opts && opts.replace != null ? opts.replace : undefined;
      let historyAction = "PUSH";
      if (userReplace === true) {
        historyAction = "REPLACE";
      } else if (userReplace === false) {} else if (submission != null && isMutationMethod(submission.formMethod) && submission.formAction === state.location.pathname + state.location.search) {
        historyAction = "REPLACE";
      }
      let preventScrollReset = opts && "preventScrollReset" in opts ? opts.preventScrollReset === true : undefined;
      let flushSync = (opts && opts.flushSync) === true;
      let blockerKey = shouldBlockNavigation({
        currentLocation,
        nextLocation,
        historyAction
      });
      if (blockerKey) {
        updateBlocker(blockerKey, {
          state: "blocked",
          location: nextLocation,
          proceed() {
            updateBlocker(blockerKey, {
              state: "proceeding",
              proceed: undefined,
              reset: undefined,
              location: nextLocation
            });
            navigate(to, opts);
          },
          reset() {
            let blockers = new Map(state.blockers);
            blockers.set(blockerKey, IDLE_BLOCKER);
            updateState({ blockers });
          }
        });
        return;
      }
      await startNavigation(historyAction, nextLocation, {
        submission,
        pendingError: error,
        preventScrollReset,
        replace: opts && opts.replace,
        enableViewTransition: opts && opts.viewTransition,
        flushSync
      });
    }
    function revalidate() {
      if (!pendingRevalidationDfd) {
        pendingRevalidationDfd = createDeferred();
      }
      interruptActiveLoads();
      updateState({ revalidation: "loading" });
      let promise = pendingRevalidationDfd.promise;
      if (state.navigation.state === "submitting") {
        return promise;
      }
      if (state.navigation.state === "idle") {
        startNavigation(state.historyAction, state.location, {
          startUninterruptedRevalidation: true
        });
        return promise;
      }
      startNavigation(pendingAction || state.historyAction, state.navigation.location, {
        overrideNavigation: state.navigation,
        enableViewTransition: pendingViewTransitionEnabled === true
      });
      return promise;
    }
    async function startNavigation(historyAction, location2, opts) {
      pendingNavigationController && pendingNavigationController.abort();
      pendingNavigationController = null;
      pendingAction = historyAction;
      isUninterruptedRevalidation = (opts && opts.startUninterruptedRevalidation) === true;
      saveScrollPosition(state.location, state.matches);
      pendingPreventScrollReset = (opts && opts.preventScrollReset) === true;
      pendingViewTransitionEnabled = (opts && opts.enableViewTransition) === true;
      let routesToUse = inFlightDataRoutes || dataRoutes;
      let loadingNavigation = opts && opts.overrideNavigation;
      let matches = _optionalChain([opts, "optionalAccess", (_13) => _13.initialHydration]) && state.matches && state.matches.length > 0 && !initialMatchesIsFOW ? state.matches : matchRoutes(routesToUse, location2, basename);
      let flushSync = (opts && opts.flushSync) === true;
      if (matches && state.initialized && !isRevalidationRequired && isHashChangeOnly(state.location, location2) && !(opts && opts.submission && isMutationMethod(opts.submission.formMethod))) {
        completeNavigation(location2, { matches }, { flushSync });
        return;
      }
      let fogOfWar = checkFogOfWar(matches, routesToUse, location2.pathname);
      if (fogOfWar.active && fogOfWar.matches) {
        matches = fogOfWar.matches;
      }
      if (!matches) {
        let { error, notFoundMatches, route } = handleNavigational404(location2.pathname);
        completeNavigation(location2, {
          matches: notFoundMatches,
          loaderData: {},
          errors: {
            [route.id]: error
          }
        }, { flushSync });
        return;
      }
      pendingNavigationController = new AbortController;
      let request = createClientSideRequest(init.history, location2, pendingNavigationController.signal, opts && opts.submission);
      let scopedContext = new unstable_RouterContextProvider(init.unstable_getContext ? await init.unstable_getContext() : undefined);
      let pendingActionResult;
      if (opts && opts.pendingError) {
        pendingActionResult = [
          findNearestBoundary(matches).route.id,
          { type: "error", error: opts.pendingError }
        ];
      } else if (opts && opts.submission && isMutationMethod(opts.submission.formMethod)) {
        let actionResult = await handleAction(request, location2, opts.submission, matches, scopedContext, fogOfWar.active, opts && opts.initialHydration === true, { replace: opts.replace, flushSync });
        if (actionResult.shortCircuited) {
          return;
        }
        if (actionResult.pendingActionResult) {
          let [routeId, result] = actionResult.pendingActionResult;
          if (isErrorResult(result) && isRouteErrorResponse(result.error) && result.error.status === 404) {
            pendingNavigationController = null;
            completeNavigation(location2, {
              matches: actionResult.matches,
              loaderData: {},
              errors: {
                [routeId]: result.error
              }
            });
            return;
          }
        }
        matches = actionResult.matches || matches;
        pendingActionResult = actionResult.pendingActionResult;
        loadingNavigation = getLoadingNavigation(location2, opts.submission);
        flushSync = false;
        fogOfWar.active = false;
        request = createClientSideRequest(init.history, request.url, request.signal);
      }
      let {
        shortCircuited,
        matches: updatedMatches,
        loaderData,
        errors
      } = await handleLoaders(request, location2, matches, scopedContext, fogOfWar.active, loadingNavigation, opts && opts.submission, opts && opts.fetcherSubmission, opts && opts.replace, opts && opts.initialHydration === true, flushSync, pendingActionResult);
      if (shortCircuited) {
        return;
      }
      pendingNavigationController = null;
      completeNavigation(location2, {
        matches: updatedMatches || matches,
        ...getActionDataForCommit(pendingActionResult),
        loaderData,
        errors
      });
    }
    async function handleAction(request, location2, submission, matches, scopedContext, isFogOfWar, initialHydration, opts = {}) {
      interruptActiveLoads();
      let navigation = getSubmittingNavigation(location2, submission);
      updateState({ navigation }, { flushSync: opts.flushSync === true });
      if (isFogOfWar) {
        let discoverResult = await discoverRoutes(matches, location2.pathname, request.signal);
        if (discoverResult.type === "aborted") {
          return { shortCircuited: true };
        } else if (discoverResult.type === "error") {
          let boundaryId = findNearestBoundary(discoverResult.partialMatches).route.id;
          return {
            matches: discoverResult.partialMatches,
            pendingActionResult: [
              boundaryId,
              {
                type: "error",
                error: discoverResult.error
              }
            ]
          };
        } else if (!discoverResult.matches) {
          let { notFoundMatches, error, route } = handleNavigational404(location2.pathname);
          return {
            matches: notFoundMatches,
            pendingActionResult: [
              route.id,
              {
                type: "error",
                error
              }
            ]
          };
        } else {
          matches = discoverResult.matches;
        }
      }
      let result;
      let actionMatch = getTargetMatch(matches, location2);
      if (!actionMatch.route.action && !actionMatch.route.lazy) {
        result = {
          type: "error",
          error: getInternalRouterError(405, {
            method: request.method,
            pathname: location2.pathname,
            routeId: actionMatch.route.id
          })
        };
      } else {
        let dsMatches = getTargetedDataStrategyMatches(mapRouteProperties, manifest, request, matches, actionMatch, initialHydration ? [] : hydrationRouteProperties, scopedContext);
        let results = await callDataStrategy(request, dsMatches, scopedContext, null);
        result = results[actionMatch.route.id];
        if (!result) {
          for (let match of matches) {
            if (results[match.route.id]) {
              result = results[match.route.id];
              break;
            }
          }
        }
        if (request.signal.aborted) {
          return { shortCircuited: true };
        }
      }
      if (isRedirectResult(result)) {
        let replace2;
        if (opts && opts.replace != null) {
          replace2 = opts.replace;
        } else {
          let location22 = normalizeRedirectLocation(result.response.headers.get("Location"), new URL(request.url), basename);
          replace2 = location22 === state.location.pathname + state.location.search;
        }
        await startRedirectNavigation(request, result, true, {
          submission,
          replace: replace2
        });
        return { shortCircuited: true };
      }
      if (isErrorResult(result)) {
        let boundaryMatch = findNearestBoundary(matches, actionMatch.route.id);
        if ((opts && opts.replace) !== true) {
          pendingAction = "PUSH";
        }
        return {
          matches,
          pendingActionResult: [
            boundaryMatch.route.id,
            result,
            actionMatch.route.id
          ]
        };
      }
      return {
        matches,
        pendingActionResult: [actionMatch.route.id, result]
      };
    }
    async function handleLoaders(request, location2, matches, scopedContext, isFogOfWar, overrideNavigation, submission, fetcherSubmission, replace2, initialHydration, flushSync, pendingActionResult) {
      let loadingNavigation = overrideNavigation || getLoadingNavigation(location2, submission);
      let activeSubmission = submission || fetcherSubmission || getSubmissionFromNavigation(loadingNavigation);
      let shouldUpdateNavigationState = !isUninterruptedRevalidation && !initialHydration;
      if (isFogOfWar) {
        if (shouldUpdateNavigationState) {
          let actionData = getUpdatedActionData(pendingActionResult);
          updateState({
            navigation: loadingNavigation,
            ...actionData !== undefined ? { actionData } : {}
          }, {
            flushSync
          });
        }
        let discoverResult = await discoverRoutes(matches, location2.pathname, request.signal);
        if (discoverResult.type === "aborted") {
          return { shortCircuited: true };
        } else if (discoverResult.type === "error") {
          let boundaryId = findNearestBoundary(discoverResult.partialMatches).route.id;
          return {
            matches: discoverResult.partialMatches,
            loaderData: {},
            errors: {
              [boundaryId]: discoverResult.error
            }
          };
        } else if (!discoverResult.matches) {
          let { error, notFoundMatches, route } = handleNavigational404(location2.pathname);
          return {
            matches: notFoundMatches,
            loaderData: {},
            errors: {
              [route.id]: error
            }
          };
        } else {
          matches = discoverResult.matches;
        }
      }
      let routesToUse = inFlightDataRoutes || dataRoutes;
      let { dsMatches, revalidatingFetchers } = getMatchesToLoad(request, scopedContext, mapRouteProperties, manifest, init.history, state, matches, activeSubmission, location2, initialHydration ? [] : hydrationRouteProperties, initialHydration === true, isRevalidationRequired, cancelledFetcherLoads, fetchersQueuedForDeletion, fetchLoadMatches, fetchRedirectIds, routesToUse, basename, init.patchRoutesOnNavigation != null, pendingActionResult);
      pendingNavigationLoadId = ++incrementingLoadId;
      if (!init.dataStrategy && !dsMatches.some((m) => m.shouldLoad) && revalidatingFetchers.length === 0) {
        let updatedFetchers2 = markFetchRedirectsDone();
        completeNavigation(location2, {
          matches,
          loaderData: {},
          errors: pendingActionResult && isErrorResult(pendingActionResult[1]) ? { [pendingActionResult[0]]: pendingActionResult[1].error } : null,
          ...getActionDataForCommit(pendingActionResult),
          ...updatedFetchers2 ? { fetchers: new Map(state.fetchers) } : {}
        }, { flushSync });
        return { shortCircuited: true };
      }
      if (shouldUpdateNavigationState) {
        let updates = {};
        if (!isFogOfWar) {
          updates.navigation = loadingNavigation;
          let actionData = getUpdatedActionData(pendingActionResult);
          if (actionData !== undefined) {
            updates.actionData = actionData;
          }
        }
        if (revalidatingFetchers.length > 0) {
          updates.fetchers = getUpdatedRevalidatingFetchers(revalidatingFetchers);
        }
        updateState(updates, { flushSync });
      }
      revalidatingFetchers.forEach((rf) => {
        abortFetcher(rf.key);
        if (rf.controller) {
          fetchControllers.set(rf.key, rf.controller);
        }
      });
      let abortPendingFetchRevalidations = () => revalidatingFetchers.forEach((f) => abortFetcher(f.key));
      if (pendingNavigationController) {
        pendingNavigationController.signal.addEventListener("abort", abortPendingFetchRevalidations);
      }
      let { loaderResults, fetcherResults } = await callLoadersAndMaybeResolveData(dsMatches, revalidatingFetchers, request, scopedContext);
      if (request.signal.aborted) {
        return { shortCircuited: true };
      }
      if (pendingNavigationController) {
        pendingNavigationController.signal.removeEventListener("abort", abortPendingFetchRevalidations);
      }
      revalidatingFetchers.forEach((rf) => fetchControllers.delete(rf.key));
      let redirect2 = findRedirect(loaderResults);
      if (redirect2) {
        await startRedirectNavigation(request, redirect2.result, true, {
          replace: replace2
        });
        return { shortCircuited: true };
      }
      redirect2 = findRedirect(fetcherResults);
      if (redirect2) {
        fetchRedirectIds.add(redirect2.key);
        await startRedirectNavigation(request, redirect2.result, true, {
          replace: replace2
        });
        return { shortCircuited: true };
      }
      let { loaderData, errors } = processLoaderData(state, matches, loaderResults, pendingActionResult, revalidatingFetchers, fetcherResults);
      if (initialHydration && state.errors) {
        errors = { ...state.errors, ...errors };
      }
      let updatedFetchers = markFetchRedirectsDone();
      let didAbortFetchLoads = abortStaleFetchLoads(pendingNavigationLoadId);
      let shouldUpdateFetchers = updatedFetchers || didAbortFetchLoads || revalidatingFetchers.length > 0;
      return {
        matches,
        loaderData,
        errors,
        ...shouldUpdateFetchers ? { fetchers: new Map(state.fetchers) } : {}
      };
    }
    function getUpdatedActionData(pendingActionResult) {
      if (pendingActionResult && !isErrorResult(pendingActionResult[1])) {
        return {
          [pendingActionResult[0]]: pendingActionResult[1].data
        };
      } else if (state.actionData) {
        if (Object.keys(state.actionData).length === 0) {
          return null;
        } else {
          return state.actionData;
        }
      }
    }
    function getUpdatedRevalidatingFetchers(revalidatingFetchers) {
      revalidatingFetchers.forEach((rf) => {
        let fetcher = state.fetchers.get(rf.key);
        let revalidatingFetcher = getLoadingFetcher(undefined, fetcher ? fetcher.data : undefined);
        state.fetchers.set(rf.key, revalidatingFetcher);
      });
      return new Map(state.fetchers);
    }
    async function fetch2(key, routeId, href, opts) {
      abortFetcher(key);
      let flushSync = (opts && opts.flushSync) === true;
      let routesToUse = inFlightDataRoutes || dataRoutes;
      let normalizedPath = normalizeTo(state.location, state.matches, basename, href, routeId, _optionalChain([opts, "optionalAccess", (_14) => _14.relative]));
      let matches = matchRoutes(routesToUse, normalizedPath, basename);
      let fogOfWar = checkFogOfWar(matches, routesToUse, normalizedPath);
      if (fogOfWar.active && fogOfWar.matches) {
        matches = fogOfWar.matches;
      }
      if (!matches) {
        setFetcherError(key, routeId, getInternalRouterError(404, { pathname: normalizedPath }), { flushSync });
        return;
      }
      let { path, submission, error } = normalizeNavigateOptions(true, normalizedPath, opts);
      if (error) {
        setFetcherError(key, routeId, error, { flushSync });
        return;
      }
      let scopedContext = new unstable_RouterContextProvider(init.unstable_getContext ? await init.unstable_getContext() : undefined);
      let preventScrollReset = (opts && opts.preventScrollReset) === true;
      if (submission && isMutationMethod(submission.formMethod)) {
        await handleFetcherAction(key, routeId, path, matches, scopedContext, fogOfWar.active, flushSync, preventScrollReset, submission);
        return;
      }
      fetchLoadMatches.set(key, { routeId, path });
      await handleFetcherLoader(key, routeId, path, matches, scopedContext, fogOfWar.active, flushSync, preventScrollReset, submission);
    }
    async function handleFetcherAction(key, routeId, path, requestMatches, scopedContext, isFogOfWar, flushSync, preventScrollReset, submission) {
      interruptActiveLoads();
      fetchLoadMatches.delete(key);
      let existingFetcher = state.fetchers.get(key);
      updateFetcherState(key, getSubmittingFetcher(submission, existingFetcher), {
        flushSync
      });
      let abortController = new AbortController;
      let fetchRequest = createClientSideRequest(init.history, path, abortController.signal, submission);
      if (isFogOfWar) {
        let discoverResult = await discoverRoutes(requestMatches, new URL(fetchRequest.url).pathname, fetchRequest.signal, key);
        if (discoverResult.type === "aborted") {
          return;
        } else if (discoverResult.type === "error") {
          setFetcherError(key, routeId, discoverResult.error, { flushSync });
          return;
        } else if (!discoverResult.matches) {
          setFetcherError(key, routeId, getInternalRouterError(404, { pathname: path }), { flushSync });
          return;
        } else {
          requestMatches = discoverResult.matches;
        }
      }
      let match = getTargetMatch(requestMatches, path);
      if (!match.route.action && !match.route.lazy) {
        let error = getInternalRouterError(405, {
          method: submission.formMethod,
          pathname: path,
          routeId
        });
        setFetcherError(key, routeId, error, { flushSync });
        return;
      }
      fetchControllers.set(key, abortController);
      let originatingLoadId = incrementingLoadId;
      let fetchMatches = getTargetedDataStrategyMatches(mapRouteProperties, manifest, fetchRequest, requestMatches, match, hydrationRouteProperties, scopedContext);
      let actionResults = await callDataStrategy(fetchRequest, fetchMatches, scopedContext, key);
      let actionResult = actionResults[match.route.id];
      if (fetchRequest.signal.aborted) {
        if (fetchControllers.get(key) === abortController) {
          fetchControllers.delete(key);
        }
        return;
      }
      if (fetchersQueuedForDeletion.has(key)) {
        if (isRedirectResult(actionResult) || isErrorResult(actionResult)) {
          updateFetcherState(key, getDoneFetcher(undefined));
          return;
        }
      } else {
        if (isRedirectResult(actionResult)) {
          fetchControllers.delete(key);
          if (pendingNavigationLoadId > originatingLoadId) {
            updateFetcherState(key, getDoneFetcher(undefined));
            return;
          } else {
            fetchRedirectIds.add(key);
            updateFetcherState(key, getLoadingFetcher(submission));
            return startRedirectNavigation(fetchRequest, actionResult, false, {
              fetcherSubmission: submission,
              preventScrollReset
            });
          }
        }
        if (isErrorResult(actionResult)) {
          setFetcherError(key, routeId, actionResult.error);
          return;
        }
      }
      let nextLocation = state.navigation.location || state.location;
      let revalidationRequest = createClientSideRequest(init.history, nextLocation, abortController.signal);
      let routesToUse = inFlightDataRoutes || dataRoutes;
      let matches = state.navigation.state !== "idle" ? matchRoutes(routesToUse, state.navigation.location, basename) : state.matches;
      invariant2(matches, "Didn't find any matches after fetcher action");
      let loadId = ++incrementingLoadId;
      fetchReloadIds.set(key, loadId);
      let loadFetcher = getLoadingFetcher(submission, actionResult.data);
      state.fetchers.set(key, loadFetcher);
      let { dsMatches, revalidatingFetchers } = getMatchesToLoad(revalidationRequest, scopedContext, mapRouteProperties, manifest, init.history, state, matches, submission, nextLocation, hydrationRouteProperties, false, isRevalidationRequired, cancelledFetcherLoads, fetchersQueuedForDeletion, fetchLoadMatches, fetchRedirectIds, routesToUse, basename, init.patchRoutesOnNavigation != null, [match.route.id, actionResult]);
      revalidatingFetchers.filter((rf) => rf.key !== key).forEach((rf) => {
        let staleKey = rf.key;
        let existingFetcher2 = state.fetchers.get(staleKey);
        let revalidatingFetcher = getLoadingFetcher(undefined, existingFetcher2 ? existingFetcher2.data : undefined);
        state.fetchers.set(staleKey, revalidatingFetcher);
        abortFetcher(staleKey);
        if (rf.controller) {
          fetchControllers.set(staleKey, rf.controller);
        }
      });
      updateState({ fetchers: new Map(state.fetchers) });
      let abortPendingFetchRevalidations = () => revalidatingFetchers.forEach((rf) => abortFetcher(rf.key));
      abortController.signal.addEventListener("abort", abortPendingFetchRevalidations);
      let { loaderResults, fetcherResults } = await callLoadersAndMaybeResolveData(dsMatches, revalidatingFetchers, revalidationRequest, scopedContext);
      if (abortController.signal.aborted) {
        return;
      }
      abortController.signal.removeEventListener("abort", abortPendingFetchRevalidations);
      fetchReloadIds.delete(key);
      fetchControllers.delete(key);
      revalidatingFetchers.forEach((r2) => fetchControllers.delete(r2.key));
      if (state.fetchers.has(key)) {
        let doneFetcher = getDoneFetcher(actionResult.data);
        state.fetchers.set(key, doneFetcher);
      }
      let redirect2 = findRedirect(loaderResults);
      if (redirect2) {
        return startRedirectNavigation(revalidationRequest, redirect2.result, false, { preventScrollReset });
      }
      redirect2 = findRedirect(fetcherResults);
      if (redirect2) {
        fetchRedirectIds.add(redirect2.key);
        return startRedirectNavigation(revalidationRequest, redirect2.result, false, { preventScrollReset });
      }
      let { loaderData, errors } = processLoaderData(state, matches, loaderResults, undefined, revalidatingFetchers, fetcherResults);
      abortStaleFetchLoads(loadId);
      if (state.navigation.state === "loading" && loadId > pendingNavigationLoadId) {
        invariant2(pendingAction, "Expected pending action");
        pendingNavigationController && pendingNavigationController.abort();
        completeNavigation(state.navigation.location, {
          matches,
          loaderData,
          errors,
          fetchers: new Map(state.fetchers)
        });
      } else {
        updateState({
          errors,
          loaderData: mergeLoaderData(state.loaderData, loaderData, matches, errors),
          fetchers: new Map(state.fetchers)
        });
        isRevalidationRequired = false;
      }
    }
    async function handleFetcherLoader(key, routeId, path, matches, scopedContext, isFogOfWar, flushSync, preventScrollReset, submission) {
      let existingFetcher = state.fetchers.get(key);
      updateFetcherState(key, getLoadingFetcher(submission, existingFetcher ? existingFetcher.data : undefined), { flushSync });
      let abortController = new AbortController;
      let fetchRequest = createClientSideRequest(init.history, path, abortController.signal);
      if (isFogOfWar) {
        let discoverResult = await discoverRoutes(matches, new URL(fetchRequest.url).pathname, fetchRequest.signal, key);
        if (discoverResult.type === "aborted") {
          return;
        } else if (discoverResult.type === "error") {
          setFetcherError(key, routeId, discoverResult.error, { flushSync });
          return;
        } else if (!discoverResult.matches) {
          setFetcherError(key, routeId, getInternalRouterError(404, { pathname: path }), { flushSync });
          return;
        } else {
          matches = discoverResult.matches;
        }
      }
      let match = getTargetMatch(matches, path);
      fetchControllers.set(key, abortController);
      let originatingLoadId = incrementingLoadId;
      let dsMatches = getTargetedDataStrategyMatches(mapRouteProperties, manifest, fetchRequest, matches, match, hydrationRouteProperties, scopedContext);
      let results = await callDataStrategy(fetchRequest, dsMatches, scopedContext, key);
      let result = results[match.route.id];
      if (fetchControllers.get(key) === abortController) {
        fetchControllers.delete(key);
      }
      if (fetchRequest.signal.aborted) {
        return;
      }
      if (fetchersQueuedForDeletion.has(key)) {
        updateFetcherState(key, getDoneFetcher(undefined));
        return;
      }
      if (isRedirectResult(result)) {
        if (pendingNavigationLoadId > originatingLoadId) {
          updateFetcherState(key, getDoneFetcher(undefined));
          return;
        } else {
          fetchRedirectIds.add(key);
          await startRedirectNavigation(fetchRequest, result, false, {
            preventScrollReset
          });
          return;
        }
      }
      if (isErrorResult(result)) {
        setFetcherError(key, routeId, result.error);
        return;
      }
      updateFetcherState(key, getDoneFetcher(result.data));
    }
    async function startRedirectNavigation(request, redirect2, isNavigation, {
      submission,
      fetcherSubmission,
      preventScrollReset,
      replace: replace2
    } = {}) {
      if (redirect2.response.headers.has("X-Remix-Revalidate")) {
        isRevalidationRequired = true;
      }
      let location2 = redirect2.response.headers.get("Location");
      invariant2(location2, "Expected a Location header on the redirect Response");
      location2 = normalizeRedirectLocation(location2, new URL(request.url), basename);
      let redirectLocation = createLocation(state.location, location2, {
        _isRedirect: true
      });
      if (isBrowser2) {
        let isDocumentReload = false;
        if (redirect2.response.headers.has("X-Remix-Reload-Document")) {
          isDocumentReload = true;
        } else if (isAbsoluteUrl(location2)) {
          const url = createBrowserURLImpl(location2, true);
          isDocumentReload = url.origin !== routerWindow.location.origin || stripBasename(url.pathname, basename) == null;
        }
        if (isDocumentReload) {
          if (replace2) {
            routerWindow.location.replace(location2);
          } else {
            routerWindow.location.assign(location2);
          }
          return;
        }
      }
      pendingNavigationController = null;
      let redirectNavigationType = replace2 === true || redirect2.response.headers.has("X-Remix-Replace") ? "REPLACE" : "PUSH";
      let { formMethod, formAction, formEncType } = state.navigation;
      if (!submission && !fetcherSubmission && formMethod && formAction && formEncType) {
        submission = getSubmissionFromNavigation(state.navigation);
      }
      let activeSubmission = submission || fetcherSubmission;
      if (redirectPreserveMethodStatusCodes.has(redirect2.response.status) && activeSubmission && isMutationMethod(activeSubmission.formMethod)) {
        await startNavigation(redirectNavigationType, redirectLocation, {
          submission: {
            ...activeSubmission,
            formAction: location2
          },
          preventScrollReset: preventScrollReset || pendingPreventScrollReset,
          enableViewTransition: isNavigation ? pendingViewTransitionEnabled : undefined
        });
      } else {
        let overrideNavigation = getLoadingNavigation(redirectLocation, submission);
        await startNavigation(redirectNavigationType, redirectLocation, {
          overrideNavigation,
          fetcherSubmission,
          preventScrollReset: preventScrollReset || pendingPreventScrollReset,
          enableViewTransition: isNavigation ? pendingViewTransitionEnabled : undefined
        });
      }
    }
    async function callDataStrategy(request, matches, scopedContext, fetcherKey) {
      let results;
      let dataResults = {};
      try {
        results = await callDataStrategyImpl(dataStrategyImpl, request, matches, fetcherKey, scopedContext, false);
      } catch (e) {
        matches.filter((m) => m.shouldLoad).forEach((m) => {
          dataResults[m.route.id] = {
            type: "error",
            error: e
          };
        });
        return dataResults;
      }
      if (request.signal.aborted) {
        return dataResults;
      }
      for (let [routeId, result] of Object.entries(results)) {
        if (isRedirectDataStrategyResult(result)) {
          let response = result.result;
          dataResults[routeId] = {
            type: "redirect",
            response: normalizeRelativeRoutingRedirectResponse(response, request, routeId, matches, basename)
          };
        } else {
          dataResults[routeId] = await convertDataStrategyResultToDataResult(result);
        }
      }
      return dataResults;
    }
    async function callLoadersAndMaybeResolveData(matches, fetchersToLoad, request, scopedContext) {
      let loaderResultsPromise = callDataStrategy(request, matches, scopedContext, null);
      let fetcherResultsPromise = Promise.all(fetchersToLoad.map(async (f) => {
        if (f.matches && f.match && f.request && f.controller) {
          let results = await callDataStrategy(f.request, f.matches, scopedContext, f.key);
          let result = results[f.match.route.id];
          return { [f.key]: result };
        } else {
          return Promise.resolve({
            [f.key]: {
              type: "error",
              error: getInternalRouterError(404, {
                pathname: f.path
              })
            }
          });
        }
      }));
      let loaderResults = await loaderResultsPromise;
      let fetcherResults = (await fetcherResultsPromise).reduce((acc, r2) => Object.assign(acc, r2), {});
      return {
        loaderResults,
        fetcherResults
      };
    }
    function interruptActiveLoads() {
      isRevalidationRequired = true;
      fetchLoadMatches.forEach((_, key) => {
        if (fetchControllers.has(key)) {
          cancelledFetcherLoads.add(key);
        }
        abortFetcher(key);
      });
    }
    function updateFetcherState(key, fetcher, opts = {}) {
      state.fetchers.set(key, fetcher);
      updateState({ fetchers: new Map(state.fetchers) }, { flushSync: (opts && opts.flushSync) === true });
    }
    function setFetcherError(key, routeId, error, opts = {}) {
      let boundaryMatch = findNearestBoundary(state.matches, routeId);
      deleteFetcher(key);
      updateState({
        errors: {
          [boundaryMatch.route.id]: error
        },
        fetchers: new Map(state.fetchers)
      }, { flushSync: (opts && opts.flushSync) === true });
    }
    function getFetcher(key) {
      activeFetchers.set(key, (activeFetchers.get(key) || 0) + 1);
      if (fetchersQueuedForDeletion.has(key)) {
        fetchersQueuedForDeletion.delete(key);
      }
      return state.fetchers.get(key) || IDLE_FETCHER;
    }
    function deleteFetcher(key) {
      let fetcher = state.fetchers.get(key);
      if (fetchControllers.has(key) && !(fetcher && fetcher.state === "loading" && fetchReloadIds.has(key))) {
        abortFetcher(key);
      }
      fetchLoadMatches.delete(key);
      fetchReloadIds.delete(key);
      fetchRedirectIds.delete(key);
      fetchersQueuedForDeletion.delete(key);
      cancelledFetcherLoads.delete(key);
      state.fetchers.delete(key);
    }
    function queueFetcherForDeletion(key) {
      let count = (activeFetchers.get(key) || 0) - 1;
      if (count <= 0) {
        activeFetchers.delete(key);
        fetchersQueuedForDeletion.add(key);
      } else {
        activeFetchers.set(key, count);
      }
      updateState({ fetchers: new Map(state.fetchers) });
    }
    function abortFetcher(key) {
      let controller = fetchControllers.get(key);
      if (controller) {
        controller.abort();
        fetchControllers.delete(key);
      }
    }
    function markFetchersDone(keys) {
      for (let key of keys) {
        let fetcher = getFetcher(key);
        let doneFetcher = getDoneFetcher(fetcher.data);
        state.fetchers.set(key, doneFetcher);
      }
    }
    function markFetchRedirectsDone() {
      let doneKeys = [];
      let updatedFetchers = false;
      for (let key of fetchRedirectIds) {
        let fetcher = state.fetchers.get(key);
        invariant2(fetcher, `Expected fetcher: ${key}`);
        if (fetcher.state === "loading") {
          fetchRedirectIds.delete(key);
          doneKeys.push(key);
          updatedFetchers = true;
        }
      }
      markFetchersDone(doneKeys);
      return updatedFetchers;
    }
    function abortStaleFetchLoads(landedId) {
      let yeetedKeys = [];
      for (let [key, id3] of fetchReloadIds) {
        if (id3 < landedId) {
          let fetcher = state.fetchers.get(key);
          invariant2(fetcher, `Expected fetcher: ${key}`);
          if (fetcher.state === "loading") {
            abortFetcher(key);
            fetchReloadIds.delete(key);
            yeetedKeys.push(key);
          }
        }
      }
      markFetchersDone(yeetedKeys);
      return yeetedKeys.length > 0;
    }
    function getBlocker(key, fn) {
      let blocker = state.blockers.get(key) || IDLE_BLOCKER;
      if (blockerFunctions.get(key) !== fn) {
        blockerFunctions.set(key, fn);
      }
      return blocker;
    }
    function deleteBlocker(key) {
      state.blockers.delete(key);
      blockerFunctions.delete(key);
    }
    function updateBlocker(key, newBlocker) {
      let blocker = state.blockers.get(key) || IDLE_BLOCKER;
      invariant2(blocker.state === "unblocked" && newBlocker.state === "blocked" || blocker.state === "blocked" && newBlocker.state === "blocked" || blocker.state === "blocked" && newBlocker.state === "proceeding" || blocker.state === "blocked" && newBlocker.state === "unblocked" || blocker.state === "proceeding" && newBlocker.state === "unblocked", `Invalid blocker state transition: ${blocker.state} -> ${newBlocker.state}`);
      let blockers = new Map(state.blockers);
      blockers.set(key, newBlocker);
      updateState({ blockers });
    }
    function shouldBlockNavigation({
      currentLocation,
      nextLocation,
      historyAction
    }) {
      if (blockerFunctions.size === 0) {
        return;
      }
      if (blockerFunctions.size > 1) {
        warning2(false, "A router only supports one blocker at a time");
      }
      let entries = Array.from(blockerFunctions.entries());
      let [blockerKey, blockerFunction] = entries[entries.length - 1];
      let blocker = state.blockers.get(blockerKey);
      if (blocker && blocker.state === "proceeding") {
        return;
      }
      if (blockerFunction({ currentLocation, nextLocation, historyAction })) {
        return blockerKey;
      }
    }
    function handleNavigational404(pathname) {
      let error = getInternalRouterError(404, { pathname });
      let routesToUse = inFlightDataRoutes || dataRoutes;
      let { matches, route } = getShortCircuitMatches(routesToUse);
      return { notFoundMatches: matches, route, error };
    }
    function enableScrollRestoration(positions, getPosition, getKey) {
      savedScrollPositions = positions;
      getScrollPosition = getPosition;
      getScrollRestorationKey = getKey || null;
      if (!initialScrollRestored && state.navigation === IDLE_NAVIGATION) {
        initialScrollRestored = true;
        let y = getSavedScrollPosition(state.location, state.matches);
        if (y != null) {
          updateState({ restoreScrollPosition: y });
        }
      }
      return () => {
        savedScrollPositions = null;
        getScrollPosition = null;
        getScrollRestorationKey = null;
      };
    }
    function getScrollKey(location2, matches) {
      if (getScrollRestorationKey) {
        let key = getScrollRestorationKey(location2, matches.map((m) => convertRouteMatchToUiMatch(m, state.loaderData)));
        return key || location2.key;
      }
      return location2.key;
    }
    function saveScrollPosition(location2, matches) {
      if (savedScrollPositions && getScrollPosition) {
        let key = getScrollKey(location2, matches);
        savedScrollPositions[key] = getScrollPosition();
      }
    }
    function getSavedScrollPosition(location2, matches) {
      if (savedScrollPositions) {
        let key = getScrollKey(location2, matches);
        let y = savedScrollPositions[key];
        if (typeof y === "number") {
          return y;
        }
      }
      return null;
    }
    function checkFogOfWar(matches, routesToUse, pathname) {
      if (init.patchRoutesOnNavigation) {
        if (!matches) {
          let fogMatches = matchRoutesImpl(routesToUse, pathname, basename, true);
          return { active: true, matches: fogMatches || [] };
        } else {
          if (Object.keys(matches[0].params).length > 0) {
            let partialMatches = matchRoutesImpl(routesToUse, pathname, basename, true);
            return { active: true, matches: partialMatches };
          }
        }
      }
      return { active: false, matches: null };
    }
    async function discoverRoutes(matches, pathname, signal, fetcherKey) {
      if (!init.patchRoutesOnNavigation) {
        return { type: "success", matches };
      }
      let partialMatches = matches;
      while (true) {
        let isNonHMR = inFlightDataRoutes == null;
        let routesToUse = inFlightDataRoutes || dataRoutes;
        let localManifest = manifest;
        try {
          await init.patchRoutesOnNavigation({
            signal,
            path: pathname,
            matches: partialMatches,
            fetcherKey,
            patch: (routeId, children) => {
              if (signal.aborted)
                return;
              patchRoutesImpl(routeId, children, routesToUse, localManifest, mapRouteProperties, false);
            }
          });
        } catch (e) {
          return { type: "error", error: e, partialMatches };
        } finally {
          if (isNonHMR && !signal.aborted) {
            dataRoutes = [...dataRoutes];
          }
        }
        if (signal.aborted) {
          return { type: "aborted" };
        }
        let newMatches = matchRoutes(routesToUse, pathname, basename);
        if (newMatches) {
          return { type: "success", matches: newMatches };
        }
        let newPartialMatches = matchRoutesImpl(routesToUse, pathname, basename, true);
        if (!newPartialMatches || partialMatches.length === newPartialMatches.length && partialMatches.every((m, i) => m.route.id === newPartialMatches[i].route.id)) {
          return { type: "success", matches: null };
        }
        partialMatches = newPartialMatches;
      }
    }
    function _internalSetRoutes(newRoutes) {
      manifest = {};
      inFlightDataRoutes = convertRoutesToDataRoutes(newRoutes, mapRouteProperties, undefined, manifest);
    }
    function patchRoutes(routeId, children, unstable_allowElementMutations = false) {
      let isNonHMR = inFlightDataRoutes == null;
      let routesToUse = inFlightDataRoutes || dataRoutes;
      patchRoutesImpl(routeId, children, routesToUse, manifest, mapRouteProperties, unstable_allowElementMutations);
      if (isNonHMR) {
        dataRoutes = [...dataRoutes];
        updateState({});
      }
    }
    router = {
      get basename() {
        return basename;
      },
      get future() {
        return future;
      },
      get state() {
        return state;
      },
      get routes() {
        return dataRoutes;
      },
      get window() {
        return routerWindow;
      },
      initialize,
      subscribe,
      enableScrollRestoration,
      navigate,
      fetch: fetch2,
      revalidate,
      createHref: (to) => init.history.createHref(to),
      encodeLocation: (to) => init.history.encodeLocation(to),
      getFetcher,
      deleteFetcher: queueFetcherForDeletion,
      dispose,
      getBlocker,
      deleteBlocker,
      patchRoutes,
      _internalFetchControllers: fetchControllers,
      _internalSetRoutes,
      _internalSetStateDoNotUseOrYouWillBreakYourApp(newState) {
        updateState(newState);
      }
    };
    return router;
  }
  function createStaticHandler(routes, opts) {
    invariant2(routes.length > 0, "You must provide a non-empty routes array to createStaticHandler");
    let manifest = {};
    let basename = (opts ? opts.basename : null) || "/";
    let mapRouteProperties = _optionalChain([opts, "optionalAccess", (_15) => _15.mapRouteProperties]) || defaultMapRouteProperties;
    let dataRoutes = convertRoutesToDataRoutes(routes, mapRouteProperties, undefined, manifest);
    async function query(request, {
      requestContext,
      filterMatchesToLoad,
      skipLoaderErrorBubbling,
      skipRevalidation,
      dataStrategy,
      unstable_stream: stream,
      unstable_respond: respond
    } = {}) {
      let url = new URL(request.url);
      let method = request.method;
      let location2 = createLocation("", createPath(url), null, "default");
      let matches = matchRoutes(dataRoutes, location2, basename);
      requestContext = requestContext != null ? requestContext : new unstable_RouterContextProvider;
      let respondOrStreamStaticContext = (ctx) => {
        return stream ? stream(requestContext, () => Promise.resolve(ctx)) : respond ? respond(ctx) : ctx;
      };
      if (!isValidMethod(method) && method !== "HEAD") {
        let error = getInternalRouterError(405, { method });
        let { matches: methodNotAllowedMatches, route } = getShortCircuitMatches(dataRoutes);
        let staticContext = {
          basename,
          location: location2,
          matches: methodNotAllowedMatches,
          loaderData: {},
          actionData: null,
          errors: {
            [route.id]: error
          },
          statusCode: error.status,
          loaderHeaders: {},
          actionHeaders: {}
        };
        return respondOrStreamStaticContext(staticContext);
      } else if (!matches) {
        let error = getInternalRouterError(404, { pathname: location2.pathname });
        let { matches: notFoundMatches, route } = getShortCircuitMatches(dataRoutes);
        let staticContext = {
          basename,
          location: location2,
          matches: notFoundMatches,
          loaderData: {},
          actionData: null,
          errors: {
            [route.id]: error
          },
          statusCode: error.status,
          loaderHeaders: {},
          actionHeaders: {}
        };
        return respondOrStreamStaticContext(staticContext);
      }
      if (stream || respond && matches.some((m) => m.route.unstable_middleware || typeof m.route.lazy === "object" && m.route.lazy.unstable_middleware)) {
        invariant2(requestContext instanceof unstable_RouterContextProvider, "When using middleware in `staticHandler.query()`, any provided `requestContext` must be an instance of `unstable_RouterContextProvider`");
        try {
          await loadLazyMiddlewareForMatches(matches, manifest, mapRouteProperties);
          let renderedStaticContext;
          let response = await runMiddlewarePipeline({
            request,
            matches,
            params: matches[0].params,
            context: requestContext
          }, true, async () => {
            if (stream) {
              let res2 = await stream(requestContext, async (revalidationRequest) => {
                let result3 = await queryImpl(revalidationRequest, location2, matches, requestContext, dataStrategy || null, skipLoaderErrorBubbling === true, null, filterMatchesToLoad || null, skipRevalidation === true);
                return isResponse(result3) ? result3 : { location: location2, basename, ...result3 };
              });
              return res2;
            }
            invariant2(respond, "Expected respond to be defined");
            let result2 = await queryImpl(request, location2, matches, requestContext, dataStrategy || null, skipLoaderErrorBubbling === true, null, filterMatchesToLoad || null, skipRevalidation === true);
            if (isResponse(result2)) {
              return result2;
            }
            renderedStaticContext = { location: location2, basename, ...result2 };
            let res = await respond(renderedStaticContext);
            return res;
          }, async (error, routeId) => {
            if (isResponse(error)) {
              return error;
            }
            if (renderedStaticContext) {
              if (routeId in renderedStaticContext.loaderData) {
                renderedStaticContext.loaderData[routeId] = undefined;
              }
              let staticContext = getStaticContextFromError(dataRoutes, renderedStaticContext, error, skipLoaderErrorBubbling ? routeId : findNearestBoundary(matches, routeId).route.id);
              return respondOrStreamStaticContext(staticContext);
            } else {
              let boundaryRouteId = skipLoaderErrorBubbling ? routeId : findNearestBoundary(matches, _optionalChain([matches, "access", (_16) => _16.find, "call", (_17) => _17((m) => m.route.id === routeId || m.route.loader), "optionalAccess", (_18) => _18.route, "access", (_19) => _19.id]) || routeId).route.id;
              let staticContext = {
                matches,
                location: location2,
                basename,
                loaderData: {},
                actionData: null,
                errors: {
                  [boundaryRouteId]: error
                },
                statusCode: isRouteErrorResponse(error) ? error.status : 500,
                actionHeaders: {},
                loaderHeaders: {}
              };
              return respondOrStreamStaticContext(staticContext);
            }
          });
          invariant2(isResponse(response), "Expected a response in query()");
          return response;
        } catch (e) {
          if (isResponse(e)) {
            return e;
          }
          throw e;
        }
      }
      let result = await queryImpl(request, location2, matches, requestContext, dataStrategy || null, skipLoaderErrorBubbling === true, null, filterMatchesToLoad || null, skipRevalidation === true);
      if (isResponse(result)) {
        return result;
      }
      return { location: location2, basename, ...result };
    }
    async function queryRoute(request, {
      routeId,
      requestContext,
      dataStrategy,
      unstable_respond: respond
    } = {}) {
      let url = new URL(request.url);
      let method = request.method;
      let location2 = createLocation("", createPath(url), null, "default");
      let matches = matchRoutes(dataRoutes, location2, basename);
      requestContext = requestContext != null ? requestContext : new unstable_RouterContextProvider;
      if (!isValidMethod(method) && method !== "HEAD" && method !== "OPTIONS") {
        throw getInternalRouterError(405, { method });
      } else if (!matches) {
        throw getInternalRouterError(404, { pathname: location2.pathname });
      }
      let match = routeId ? matches.find((m) => m.route.id === routeId) : getTargetMatch(matches, location2);
      if (routeId && !match) {
        throw getInternalRouterError(403, {
          pathname: location2.pathname,
          routeId
        });
      } else if (!match) {
        throw getInternalRouterError(404, { pathname: location2.pathname });
      }
      if (respond && matches.some((m) => m.route.unstable_middleware || typeof m.route.lazy === "object" && m.route.lazy.unstable_middleware)) {
        invariant2(requestContext instanceof unstable_RouterContextProvider, "When using middleware in `staticHandler.queryRoute()`, any provided `requestContext` must be an instance of `unstable_RouterContextProvider`");
        await loadLazyMiddlewareForMatches(matches, manifest, mapRouteProperties);
        let response = await runMiddlewarePipeline({
          request,
          matches,
          params: matches[0].params,
          context: requestContext
        }, true, async () => {
          let result2 = await queryImpl(request, location2, matches, requestContext, dataStrategy || null, false, match, null, false);
          if (isResponse(result2)) {
            return respond(result2);
          }
          let error2 = result2.errors ? Object.values(result2.errors)[0] : undefined;
          if (error2 !== undefined) {
            throw error2;
          }
          let value = result2.actionData ? Object.values(result2.actionData)[0] : Object.values(result2.loaderData)[0];
          return typeof value === "string" ? new Response(value) : Response.json(value);
        }, (error2) => {
          if (isResponse(error2)) {
            return respond(error2);
          }
          return new Response(String(error2), {
            status: 500,
            statusText: "Unexpected Server Error"
          });
        });
        return response;
      }
      let result = await queryImpl(request, location2, matches, requestContext, dataStrategy || null, false, match, null, false);
      if (isResponse(result)) {
        return result;
      }
      let error = result.errors ? Object.values(result.errors)[0] : undefined;
      if (error !== undefined) {
        throw error;
      }
      if (result.actionData) {
        return Object.values(result.actionData)[0];
      }
      if (result.loaderData) {
        return Object.values(result.loaderData)[0];
      }
      return;
    }
    async function queryImpl(request, location2, matches, requestContext, dataStrategy, skipLoaderErrorBubbling, routeMatch, filterMatchesToLoad, skipRevalidation) {
      invariant2(request.signal, "query()/queryRoute() requests must contain an AbortController signal");
      try {
        if (isMutationMethod(request.method)) {
          let result2 = await submit(request, matches, routeMatch || getTargetMatch(matches, location2), requestContext, dataStrategy, skipLoaderErrorBubbling, routeMatch != null, filterMatchesToLoad, skipRevalidation);
          return result2;
        }
        let result = await loadRouteData(request, matches, requestContext, dataStrategy, skipLoaderErrorBubbling, routeMatch, filterMatchesToLoad);
        return isResponse(result) ? result : {
          ...result,
          actionData: null,
          actionHeaders: {}
        };
      } catch (e) {
        if (isDataStrategyResult(e) && isResponse(e.result)) {
          if (e.type === "error") {
            throw e.result;
          }
          return e.result;
        }
        if (isRedirectResponse(e)) {
          return e;
        }
        throw e;
      }
    }
    async function submit(request, matches, actionMatch, requestContext, dataStrategy, skipLoaderErrorBubbling, isRouteRequest, filterMatchesToLoad, skipRevalidation) {
      let result;
      if (!actionMatch.route.action && !actionMatch.route.lazy) {
        let error = getInternalRouterError(405, {
          method: request.method,
          pathname: new URL(request.url).pathname,
          routeId: actionMatch.route.id
        });
        if (isRouteRequest) {
          throw error;
        }
        result = {
          type: "error",
          error
        };
      } else {
        let dsMatches = getTargetedDataStrategyMatches(mapRouteProperties, manifest, request, matches, actionMatch, [], requestContext);
        let results = await callDataStrategy(request, dsMatches, isRouteRequest, requestContext, dataStrategy);
        result = results[actionMatch.route.id];
        if (request.signal.aborted) {
          throwStaticHandlerAbortedError(request, isRouteRequest);
        }
      }
      if (isRedirectResult(result)) {
        throw new Response(null, {
          status: result.response.status,
          headers: {
            Location: result.response.headers.get("Location")
          }
        });
      }
      if (isRouteRequest) {
        if (isErrorResult(result)) {
          throw result.error;
        }
        return {
          matches: [actionMatch],
          loaderData: {},
          actionData: { [actionMatch.route.id]: result.data },
          errors: null,
          statusCode: 200,
          loaderHeaders: {},
          actionHeaders: {}
        };
      }
      if (skipRevalidation) {
        if (isErrorResult(result)) {
          let boundaryMatch = skipLoaderErrorBubbling ? actionMatch : findNearestBoundary(matches, actionMatch.route.id);
          return {
            statusCode: isRouteErrorResponse(result.error) ? result.error.status : result.statusCode != null ? result.statusCode : 500,
            actionData: null,
            actionHeaders: {
              ...result.headers ? { [actionMatch.route.id]: result.headers } : {}
            },
            matches,
            loaderData: {},
            errors: {
              [boundaryMatch.route.id]: result.error
            },
            loaderHeaders: {}
          };
        } else {
          return {
            actionData: {
              [actionMatch.route.id]: result.data
            },
            actionHeaders: result.headers ? { [actionMatch.route.id]: result.headers } : {},
            matches,
            loaderData: {},
            errors: null,
            statusCode: result.statusCode || 200,
            loaderHeaders: {}
          };
        }
      }
      let loaderRequest = new Request(request.url, {
        headers: request.headers,
        redirect: request.redirect,
        signal: request.signal
      });
      if (isErrorResult(result)) {
        let boundaryMatch = skipLoaderErrorBubbling ? actionMatch : findNearestBoundary(matches, actionMatch.route.id);
        let handlerContext2 = await loadRouteData(loaderRequest, matches, requestContext, dataStrategy, skipLoaderErrorBubbling, null, filterMatchesToLoad, [boundaryMatch.route.id, result]);
        return {
          ...handlerContext2,
          statusCode: isRouteErrorResponse(result.error) ? result.error.status : result.statusCode != null ? result.statusCode : 500,
          actionData: null,
          actionHeaders: {
            ...result.headers ? { [actionMatch.route.id]: result.headers } : {}
          }
        };
      }
      let handlerContext = await loadRouteData(loaderRequest, matches, requestContext, dataStrategy, skipLoaderErrorBubbling, null, filterMatchesToLoad);
      return {
        ...handlerContext,
        actionData: {
          [actionMatch.route.id]: result.data
        },
        ...result.statusCode ? { statusCode: result.statusCode } : {},
        actionHeaders: result.headers ? { [actionMatch.route.id]: result.headers } : {}
      };
    }
    async function loadRouteData(request, matches, requestContext, dataStrategy, skipLoaderErrorBubbling, routeMatch, filterMatchesToLoad, pendingActionResult) {
      let isRouteRequest = routeMatch != null;
      if (isRouteRequest && !_optionalChain([routeMatch, "optionalAccess", (_20) => _20.route, "access", (_21) => _21.loader]) && !_optionalChain([routeMatch, "optionalAccess", (_22) => _22.route, "access", (_23) => _23.lazy])) {
        throw getInternalRouterError(400, {
          method: request.method,
          pathname: new URL(request.url).pathname,
          routeId: _optionalChain([routeMatch, "optionalAccess", (_24) => _24.route, "access", (_25) => _25.id])
        });
      }
      let dsMatches;
      if (routeMatch) {
        dsMatches = getTargetedDataStrategyMatches(mapRouteProperties, manifest, request, matches, routeMatch, [], requestContext);
      } else {
        let maxIdx = pendingActionResult && isErrorResult(pendingActionResult[1]) ? matches.findIndex((m) => m.route.id === pendingActionResult[0]) - 1 : undefined;
        dsMatches = matches.map((match, index) => {
          if (maxIdx != null && index > maxIdx) {
            return getDataStrategyMatch(mapRouteProperties, manifest, request, match, [], requestContext, false);
          }
          return getDataStrategyMatch(mapRouteProperties, manifest, request, match, [], requestContext, (match.route.loader || match.route.lazy) != null && (!filterMatchesToLoad || filterMatchesToLoad(match)));
        });
      }
      if (!dataStrategy && !dsMatches.some((m) => m.shouldLoad)) {
        return {
          matches,
          loaderData: {},
          errors: pendingActionResult && isErrorResult(pendingActionResult[1]) ? {
            [pendingActionResult[0]]: pendingActionResult[1].error
          } : null,
          statusCode: 200,
          loaderHeaders: {}
        };
      }
      let results = await callDataStrategy(request, dsMatches, isRouteRequest, requestContext, dataStrategy);
      if (request.signal.aborted) {
        throwStaticHandlerAbortedError(request, isRouteRequest);
      }
      let handlerContext = processRouteLoaderData(matches, results, pendingActionResult, true, skipLoaderErrorBubbling);
      return {
        ...handlerContext,
        matches
      };
    }
    async function callDataStrategy(request, matches, isRouteRequest, requestContext, dataStrategy) {
      let results = await callDataStrategyImpl(dataStrategy || defaultDataStrategy, request, matches, null, requestContext, true);
      let dataResults = {};
      await Promise.all(matches.map(async (match) => {
        if (!(match.route.id in results)) {
          return;
        }
        let result = results[match.route.id];
        if (isRedirectDataStrategyResult(result)) {
          let response = result.result;
          throw normalizeRelativeRoutingRedirectResponse(response, request, match.route.id, matches, basename);
        }
        if (isResponse(result.result) && isRouteRequest) {
          throw result;
        }
        dataResults[match.route.id] = await convertDataStrategyResultToDataResult(result);
      }));
      return dataResults;
    }
    return {
      dataRoutes,
      query,
      queryRoute
    };
  }
  function getStaticContextFromError(routes, handlerContext, error, boundaryId) {
    let errorBoundaryId = boundaryId || handlerContext._deepestRenderedBoundaryId || routes[0].id;
    return {
      ...handlerContext,
      statusCode: isRouteErrorResponse(error) ? error.status : 500,
      errors: {
        [errorBoundaryId]: error
      }
    };
  }
  function throwStaticHandlerAbortedError(request, isRouteRequest) {
    if (request.signal.reason !== undefined) {
      throw request.signal.reason;
    }
    let method = isRouteRequest ? "queryRoute" : "query";
    throw new Error(`${method}() call aborted without an \`AbortSignal.reason\`: ${request.method} ${request.url}`);
  }
  function isSubmissionNavigation(opts) {
    return opts != null && (("formData" in opts) && opts.formData != null || ("body" in opts) && opts.body !== undefined);
  }
  function normalizeTo(location2, matches, basename, to, fromRouteId, relative) {
    let contextualMatches;
    let activeRouteMatch;
    if (fromRouteId) {
      contextualMatches = [];
      for (let match of matches) {
        contextualMatches.push(match);
        if (match.route.id === fromRouteId) {
          activeRouteMatch = match;
          break;
        }
      }
    } else {
      contextualMatches = matches;
      activeRouteMatch = matches[matches.length - 1];
    }
    let path = resolveTo(to ? to : ".", getResolveToMatches(contextualMatches), stripBasename(location2.pathname, basename) || location2.pathname, relative === "path");
    if (to == null) {
      path.search = location2.search;
      path.hash = location2.hash;
    }
    if ((to == null || to === "" || to === ".") && activeRouteMatch) {
      let nakedIndex = hasNakedIndexQuery(path.search);
      if (activeRouteMatch.route.index && !nakedIndex) {
        path.search = path.search ? path.search.replace(/^\?/, "?index&") : "?index";
      } else if (!activeRouteMatch.route.index && nakedIndex) {
        let params = new URLSearchParams(path.search);
        let indexValues = params.getAll("index");
        params.delete("index");
        indexValues.filter((v) => v).forEach((v) => params.append("index", v));
        let qs = params.toString();
        path.search = qs ? `?${qs}` : "";
      }
    }
    if (basename !== "/") {
      path.pathname = prependBasename({ basename, pathname: path.pathname });
    }
    return createPath(path);
  }
  function normalizeNavigateOptions(isFetcher, path, opts) {
    if (!opts || !isSubmissionNavigation(opts)) {
      return { path };
    }
    if (opts.formMethod && !isValidMethod(opts.formMethod)) {
      return {
        path,
        error: getInternalRouterError(405, { method: opts.formMethod })
      };
    }
    let getInvalidBodyError = () => ({
      path,
      error: getInternalRouterError(400, { type: "invalid-body" })
    });
    let rawFormMethod = opts.formMethod || "get";
    let formMethod = rawFormMethod.toUpperCase();
    let formAction = stripHashFromPath(path);
    if (opts.body !== undefined) {
      if (opts.formEncType === "text/plain") {
        if (!isMutationMethod(formMethod)) {
          return getInvalidBodyError();
        }
        let text = typeof opts.body === "string" ? opts.body : opts.body instanceof FormData || opts.body instanceof URLSearchParams ? Array.from(opts.body.entries()).reduce((acc, [name, value]) => `${acc}${name}=${value}
`, "") : String(opts.body);
        return {
          path,
          submission: {
            formMethod,
            formAction,
            formEncType: opts.formEncType,
            formData: undefined,
            json: undefined,
            text
          }
        };
      } else if (opts.formEncType === "application/json") {
        if (!isMutationMethod(formMethod)) {
          return getInvalidBodyError();
        }
        try {
          let json = typeof opts.body === "string" ? JSON.parse(opts.body) : opts.body;
          return {
            path,
            submission: {
              formMethod,
              formAction,
              formEncType: opts.formEncType,
              formData: undefined,
              json,
              text: undefined
            }
          };
        } catch (e) {
          return getInvalidBodyError();
        }
      }
    }
    invariant2(typeof FormData === "function", "FormData is not available in this environment");
    let searchParams;
    let formData;
    if (opts.formData) {
      searchParams = convertFormDataToSearchParams(opts.formData);
      formData = opts.formData;
    } else if (opts.body instanceof FormData) {
      searchParams = convertFormDataToSearchParams(opts.body);
      formData = opts.body;
    } else if (opts.body instanceof URLSearchParams) {
      searchParams = opts.body;
      formData = convertSearchParamsToFormData(searchParams);
    } else if (opts.body == null) {
      searchParams = new URLSearchParams;
      formData = new FormData;
    } else {
      try {
        searchParams = new URLSearchParams(opts.body);
        formData = convertSearchParamsToFormData(searchParams);
      } catch (e) {
        return getInvalidBodyError();
      }
    }
    let submission = {
      formMethod,
      formAction,
      formEncType: opts && opts.formEncType || "application/x-www-form-urlencoded",
      formData,
      json: undefined,
      text: undefined
    };
    if (isMutationMethod(submission.formMethod)) {
      return { path, submission };
    }
    let parsedPath = parsePath(path);
    if (isFetcher && parsedPath.search && hasNakedIndexQuery(parsedPath.search)) {
      searchParams.append("index", "");
    }
    parsedPath.search = `?${searchParams}`;
    return { path: createPath(parsedPath), submission };
  }
  function getMatchesToLoad(request, scopedContext, mapRouteProperties, manifest, history, state, matches, submission, location2, lazyRoutePropertiesToSkip, initialHydration, isRevalidationRequired, cancelledFetcherLoads, fetchersQueuedForDeletion, fetchLoadMatches, fetchRedirectIds, routesToUse, basename, hasPatchRoutesOnNavigation, pendingActionResult) {
    let actionResult = pendingActionResult ? isErrorResult(pendingActionResult[1]) ? pendingActionResult[1].error : pendingActionResult[1].data : undefined;
    let currentUrl = history.createURL(state.location);
    let nextUrl = history.createURL(location2);
    let maxIdx;
    if (initialHydration && state.errors) {
      let boundaryId = Object.keys(state.errors)[0];
      maxIdx = matches.findIndex((m) => m.route.id === boundaryId);
    } else if (pendingActionResult && isErrorResult(pendingActionResult[1])) {
      let boundaryId = pendingActionResult[0];
      maxIdx = matches.findIndex((m) => m.route.id === boundaryId) - 1;
    }
    let actionStatus = pendingActionResult ? pendingActionResult[1].statusCode : undefined;
    let shouldSkipRevalidation = actionStatus && actionStatus >= 400;
    let baseShouldRevalidateArgs = {
      currentUrl,
      currentParams: _optionalChain([state, "access", (_26) => _26.matches, "access", (_27) => _27[0], "optionalAccess", (_28) => _28.params]) || {},
      nextUrl,
      nextParams: matches[0].params,
      ...submission,
      actionResult,
      actionStatus
    };
    let dsMatches = matches.map((match, index) => {
      let { route } = match;
      let forceShouldLoad = null;
      if (maxIdx != null && index > maxIdx) {
        forceShouldLoad = false;
      } else if (route.lazy) {
        forceShouldLoad = true;
      } else if (route.loader == null) {
        forceShouldLoad = false;
      } else if (initialHydration) {
        forceShouldLoad = shouldLoadRouteOnHydration(route, state.loaderData, state.errors);
      } else if (isNewLoader(state.loaderData, state.matches[index], match)) {
        forceShouldLoad = true;
      }
      if (forceShouldLoad !== null) {
        return getDataStrategyMatch(mapRouteProperties, manifest, request, match, lazyRoutePropertiesToSkip, scopedContext, forceShouldLoad);
      }
      let defaultShouldRevalidate = shouldSkipRevalidation ? false : isRevalidationRequired || currentUrl.pathname + currentUrl.search === nextUrl.pathname + nextUrl.search || currentUrl.search !== nextUrl.search || isNewRouteInstance(state.matches[index], match);
      let shouldRevalidateArgs = {
        ...baseShouldRevalidateArgs,
        defaultShouldRevalidate
      };
      let shouldLoad = shouldRevalidateLoader(match, shouldRevalidateArgs);
      return getDataStrategyMatch(mapRouteProperties, manifest, request, match, lazyRoutePropertiesToSkip, scopedContext, shouldLoad, shouldRevalidateArgs);
    });
    let revalidatingFetchers = [];
    fetchLoadMatches.forEach((f, key) => {
      if (initialHydration || !matches.some((m) => m.route.id === f.routeId) || fetchersQueuedForDeletion.has(key)) {
        return;
      }
      let fetcher = state.fetchers.get(key);
      let isMidInitialLoad = fetcher && fetcher.state !== "idle" && fetcher.data === undefined;
      let fetcherMatches = matchRoutes(routesToUse, f.path, basename);
      if (!fetcherMatches) {
        if (hasPatchRoutesOnNavigation && isMidInitialLoad) {
          return;
        }
        revalidatingFetchers.push({
          key,
          routeId: f.routeId,
          path: f.path,
          matches: null,
          match: null,
          request: null,
          controller: null
        });
        return;
      }
      if (fetchRedirectIds.has(key)) {
        return;
      }
      let fetcherMatch = getTargetMatch(fetcherMatches, f.path);
      let fetchController = new AbortController;
      let fetchRequest = createClientSideRequest(history, f.path, fetchController.signal);
      let fetcherDsMatches = null;
      if (cancelledFetcherLoads.has(key)) {
        cancelledFetcherLoads.delete(key);
        fetcherDsMatches = getTargetedDataStrategyMatches(mapRouteProperties, manifest, fetchRequest, fetcherMatches, fetcherMatch, lazyRoutePropertiesToSkip, scopedContext);
      } else if (isMidInitialLoad) {
        if (isRevalidationRequired) {
          fetcherDsMatches = getTargetedDataStrategyMatches(mapRouteProperties, manifest, fetchRequest, fetcherMatches, fetcherMatch, lazyRoutePropertiesToSkip, scopedContext);
        }
      } else {
        let shouldRevalidateArgs = {
          ...baseShouldRevalidateArgs,
          defaultShouldRevalidate: shouldSkipRevalidation ? false : isRevalidationRequired
        };
        if (shouldRevalidateLoader(fetcherMatch, shouldRevalidateArgs)) {
          fetcherDsMatches = getTargetedDataStrategyMatches(mapRouteProperties, manifest, fetchRequest, fetcherMatches, fetcherMatch, lazyRoutePropertiesToSkip, scopedContext, shouldRevalidateArgs);
        }
      }
      if (fetcherDsMatches) {
        revalidatingFetchers.push({
          key,
          routeId: f.routeId,
          path: f.path,
          matches: fetcherDsMatches,
          match: fetcherMatch,
          request: fetchRequest,
          controller: fetchController
        });
      }
    });
    return { dsMatches, revalidatingFetchers };
  }
  function shouldLoadRouteOnHydration(route, loaderData, errors) {
    if (route.lazy) {
      return true;
    }
    if (!route.loader) {
      return false;
    }
    let hasData = loaderData != null && route.id in loaderData;
    let hasError = errors != null && errors[route.id] !== undefined;
    if (!hasData && hasError) {
      return false;
    }
    if (typeof route.loader === "function" && route.loader.hydrate === true) {
      return true;
    }
    return !hasData && !hasError;
  }
  function isNewLoader(currentLoaderData, currentMatch, match) {
    let isNew = !currentMatch || match.route.id !== currentMatch.route.id;
    let isMissingData = !currentLoaderData.hasOwnProperty(match.route.id);
    return isNew || isMissingData;
  }
  function isNewRouteInstance(currentMatch, match) {
    let currentPath = currentMatch.route.path;
    return currentMatch.pathname !== match.pathname || currentPath != null && currentPath.endsWith("*") && currentMatch.params["*"] !== match.params["*"];
  }
  function shouldRevalidateLoader(loaderMatch, arg) {
    if (loaderMatch.route.shouldRevalidate) {
      let routeChoice = loaderMatch.route.shouldRevalidate(arg);
      if (typeof routeChoice === "boolean") {
        return routeChoice;
      }
    }
    return arg.defaultShouldRevalidate;
  }
  function patchRoutesImpl(routeId, children, routesToUse, manifest, mapRouteProperties, allowElementMutations) {
    let childrenToPatch;
    if (routeId) {
      let route = manifest[routeId];
      invariant2(route, `No route found to patch children into: routeId = ${routeId}`);
      if (!route.children) {
        route.children = [];
      }
      childrenToPatch = route.children;
    } else {
      childrenToPatch = routesToUse;
    }
    let uniqueChildren = [];
    let existingChildren = [];
    children.forEach((newRoute) => {
      let existingRoute = childrenToPatch.find((existingRoute2) => isSameRoute(newRoute, existingRoute2));
      if (existingRoute) {
        existingChildren.push({ existingRoute, newRoute });
      } else {
        uniqueChildren.push(newRoute);
      }
    });
    if (uniqueChildren.length > 0) {
      let newRoutes = convertRoutesToDataRoutes(uniqueChildren, mapRouteProperties, [routeId || "_", "patch", String(_optionalChain([childrenToPatch, "optionalAccess", (_29) => _29.length]) || "0")], manifest);
      childrenToPatch.push(...newRoutes);
    }
    if (allowElementMutations && existingChildren.length > 0) {
      for (let i = 0;i < existingChildren.length; i++) {
        let { existingRoute, newRoute } = existingChildren[i];
        let existingRouteTyped = existingRoute;
        let [newRouteTyped] = convertRoutesToDataRoutes([newRoute], mapRouteProperties, [], {}, true);
        Object.assign(existingRouteTyped, {
          element: newRouteTyped.element ? newRouteTyped.element : existingRouteTyped.element,
          errorElement: newRouteTyped.errorElement ? newRouteTyped.errorElement : existingRouteTyped.errorElement,
          hydrateFallbackElement: newRouteTyped.hydrateFallbackElement ? newRouteTyped.hydrateFallbackElement : existingRouteTyped.hydrateFallbackElement
        });
      }
    }
  }
  function isSameRoute(newRoute, existingRoute) {
    if ("id" in newRoute && "id" in existingRoute && newRoute.id === existingRoute.id) {
      return true;
    }
    if (!(newRoute.index === existingRoute.index && newRoute.path === existingRoute.path && newRoute.caseSensitive === existingRoute.caseSensitive)) {
      return false;
    }
    if ((!newRoute.children || newRoute.children.length === 0) && (!existingRoute.children || existingRoute.children.length === 0)) {
      return true;
    }
    return newRoute.children.every((aChild, i) => _optionalChain([existingRoute, "access", (_30) => _30.children, "optionalAccess", (_31) => _31.some, "call", (_32) => _32((bChild) => isSameRoute(aChild, bChild))]));
  }
  var lazyRoutePropertyCache = /* @__PURE__ */ new WeakMap;
  var loadLazyRouteProperty = ({
    key,
    route,
    manifest,
    mapRouteProperties
  }) => {
    let routeToUpdate = manifest[route.id];
    invariant2(routeToUpdate, "No route found in manifest");
    if (!routeToUpdate.lazy || typeof routeToUpdate.lazy !== "object") {
      return;
    }
    let lazyFn = routeToUpdate.lazy[key];
    if (!lazyFn) {
      return;
    }
    let cache = lazyRoutePropertyCache.get(routeToUpdate);
    if (!cache) {
      cache = {};
      lazyRoutePropertyCache.set(routeToUpdate, cache);
    }
    let cachedPromise = cache[key];
    if (cachedPromise) {
      return cachedPromise;
    }
    let propertyPromise = (async () => {
      let isUnsupported = isUnsupportedLazyRouteObjectKey(key);
      let staticRouteValue = routeToUpdate[key];
      let isStaticallyDefined = staticRouteValue !== undefined && key !== "hasErrorBoundary";
      if (isUnsupported) {
        warning2(!isUnsupported, "Route property " + key + " is not a supported lazy route property. This property will be ignored.");
        cache[key] = Promise.resolve();
      } else if (isStaticallyDefined) {
        warning2(false, `Route "${routeToUpdate.id}" has a static property "${key}" defined. The lazy property will be ignored.`);
      } else {
        let value = await lazyFn();
        if (value != null) {
          Object.assign(routeToUpdate, { [key]: value });
          Object.assign(routeToUpdate, mapRouteProperties(routeToUpdate));
        }
      }
      if (typeof routeToUpdate.lazy === "object") {
        routeToUpdate.lazy[key] = undefined;
        if (Object.values(routeToUpdate.lazy).every((value) => value === undefined)) {
          routeToUpdate.lazy = undefined;
        }
      }
    })();
    cache[key] = propertyPromise;
    return propertyPromise;
  };
  var lazyRouteFunctionCache = /* @__PURE__ */ new WeakMap;
  function loadLazyRoute(route, type, manifest, mapRouteProperties, lazyRoutePropertiesToSkip) {
    let routeToUpdate = manifest[route.id];
    invariant2(routeToUpdate, "No route found in manifest");
    if (!route.lazy) {
      return {
        lazyRoutePromise: undefined,
        lazyHandlerPromise: undefined
      };
    }
    if (typeof route.lazy === "function") {
      let cachedPromise = lazyRouteFunctionCache.get(routeToUpdate);
      if (cachedPromise) {
        return {
          lazyRoutePromise: cachedPromise,
          lazyHandlerPromise: cachedPromise
        };
      }
      let lazyRoutePromise2 = (async () => {
        invariant2(typeof route.lazy === "function", "No lazy route function found");
        let lazyRoute = await route.lazy();
        let routeUpdates = {};
        for (let lazyRouteProperty in lazyRoute) {
          let lazyValue = lazyRoute[lazyRouteProperty];
          if (lazyValue === undefined) {
            continue;
          }
          let isUnsupported = isUnsupportedLazyRouteFunctionKey(lazyRouteProperty);
          let staticRouteValue = routeToUpdate[lazyRouteProperty];
          let isStaticallyDefined = staticRouteValue !== undefined && lazyRouteProperty !== "hasErrorBoundary";
          if (isUnsupported) {
            warning2(!isUnsupported, "Route property " + lazyRouteProperty + " is not a supported property to be returned from a lazy route function. This property will be ignored.");
          } else if (isStaticallyDefined) {
            warning2(!isStaticallyDefined, `Route "${routeToUpdate.id}" has a static property "${lazyRouteProperty}" defined but its lazy function is also returning a value for this property. The lazy route property "${lazyRouteProperty}" will be ignored.`);
          } else {
            routeUpdates[lazyRouteProperty] = lazyValue;
          }
        }
        Object.assign(routeToUpdate, routeUpdates);
        Object.assign(routeToUpdate, {
          ...mapRouteProperties(routeToUpdate),
          lazy: undefined
        });
      })();
      lazyRouteFunctionCache.set(routeToUpdate, lazyRoutePromise2);
      lazyRoutePromise2.catch(() => {});
      return {
        lazyRoutePromise: lazyRoutePromise2,
        lazyHandlerPromise: lazyRoutePromise2
      };
    }
    let lazyKeys = Object.keys(route.lazy);
    let lazyPropertyPromises = [];
    let lazyHandlerPromise = undefined;
    for (let key of lazyKeys) {
      if (lazyRoutePropertiesToSkip && lazyRoutePropertiesToSkip.includes(key)) {
        continue;
      }
      let promise = loadLazyRouteProperty({
        key,
        route,
        manifest,
        mapRouteProperties
      });
      if (promise) {
        lazyPropertyPromises.push(promise);
        if (key === type) {
          lazyHandlerPromise = promise;
        }
      }
    }
    let lazyRoutePromise = lazyPropertyPromises.length > 0 ? Promise.all(lazyPropertyPromises).then(() => {}) : undefined;
    _optionalChain([lazyRoutePromise, "optionalAccess", (_33) => _33.catch, "call", (_34) => _34(() => {})]);
    _optionalChain([lazyHandlerPromise, "optionalAccess", (_35) => _35.catch, "call", (_36) => _36(() => {})]);
    return {
      lazyRoutePromise,
      lazyHandlerPromise
    };
  }
  function isNonNullable(value) {
    return value !== undefined;
  }
  function loadLazyMiddlewareForMatches(matches, manifest, mapRouteProperties) {
    let promises = matches.map(({ route }) => {
      if (typeof route.lazy !== "object" || !route.lazy.unstable_middleware) {
        return;
      }
      return loadLazyRouteProperty({
        key: "unstable_middleware",
        route,
        manifest,
        mapRouteProperties
      });
    }).filter(isNonNullable);
    return promises.length > 0 ? Promise.all(promises) : undefined;
  }
  async function defaultDataStrategy(args) {
    let matchesToLoad = args.matches.filter((m) => m.shouldLoad);
    let keyedResults = {};
    let results = await Promise.all(matchesToLoad.map((m) => m.resolve()));
    results.forEach((result, i) => {
      keyedResults[matchesToLoad[i].route.id] = result;
    });
    return keyedResults;
  }
  async function defaultDataStrategyWithMiddleware(args) {
    if (!args.matches.some((m) => m.route.unstable_middleware)) {
      return defaultDataStrategy(args);
    }
    return runMiddlewarePipeline(args, false, () => defaultDataStrategy(args), (error, routeId) => ({ [routeId]: { type: "error", result: error } }));
  }
  async function runMiddlewarePipeline(args, propagateResult, handler, errorHandler) {
    let { matches, request, params, context } = args;
    let middlewareState = {
      handlerResult: undefined
    };
    try {
      let tuples = matches.flatMap((m) => m.route.unstable_middleware ? m.route.unstable_middleware.map((fn) => [m.route.id, fn]) : []);
      let result = await callRouteMiddleware({ request, params, context }, tuples, propagateResult, middlewareState, handler);
      return propagateResult ? result : middlewareState.handlerResult;
    } catch (e) {
      if (!middlewareState.middlewareError) {
        throw e;
      }
      let result = await errorHandler(middlewareState.middlewareError.error, middlewareState.middlewareError.routeId);
      if (propagateResult || !middlewareState.handlerResult) {
        return result;
      }
      return Object.assign(middlewareState.handlerResult, result);
    }
  }
  async function callRouteMiddleware(args, middlewares, propagateResult, middlewareState, handler, idx = 0) {
    let { request } = args;
    if (request.signal.aborted) {
      if (request.signal.reason) {
        throw request.signal.reason;
      }
      throw new Error(`Request aborted without an \`AbortSignal.reason\`: ${request.method} ${request.url}`);
    }
    let tuple = middlewares[idx];
    if (!tuple) {
      middlewareState.handlerResult = await handler();
      return middlewareState.handlerResult;
    }
    let [routeId, middleware] = tuple;
    let nextCalled = false;
    let nextResult = undefined;
    let next = async () => {
      if (nextCalled) {
        throw new Error("You may only call `next()` once per middleware");
      }
      nextCalled = true;
      let result = await callRouteMiddleware(args, middlewares, propagateResult, middlewareState, handler, idx + 1);
      if (propagateResult) {
        nextResult = result;
        return nextResult;
      }
    };
    try {
      let result = await middleware({
        request: args.request,
        params: args.params,
        context: args.context
      }, next);
      if (nextCalled) {
        if (result === undefined) {
          return nextResult;
        } else {
          return result;
        }
      } else {
        return next();
      }
    } catch (error) {
      if (!middlewareState.middlewareError) {
        middlewareState.middlewareError = { routeId, error };
      } else if (middlewareState.middlewareError.error !== error) {
        middlewareState.middlewareError = { routeId, error };
      }
      throw error;
    }
  }
  function getDataStrategyMatchLazyPromises(mapRouteProperties, manifest, request, match, lazyRoutePropertiesToSkip) {
    let lazyMiddlewarePromise = loadLazyRouteProperty({
      key: "unstable_middleware",
      route: match.route,
      manifest,
      mapRouteProperties
    });
    let lazyRoutePromises = loadLazyRoute(match.route, isMutationMethod(request.method) ? "action" : "loader", manifest, mapRouteProperties, lazyRoutePropertiesToSkip);
    return {
      middleware: lazyMiddlewarePromise,
      route: lazyRoutePromises.lazyRoutePromise,
      handler: lazyRoutePromises.lazyHandlerPromise
    };
  }
  function getDataStrategyMatch(mapRouteProperties, manifest, request, match, lazyRoutePropertiesToSkip, scopedContext, shouldLoad, unstable_shouldRevalidateArgs = null) {
    let isUsingNewApi = false;
    let _lazyPromises = getDataStrategyMatchLazyPromises(mapRouteProperties, manifest, request, match, lazyRoutePropertiesToSkip);
    return {
      ...match,
      _lazyPromises,
      shouldLoad,
      unstable_shouldRevalidateArgs,
      unstable_shouldCallHandler(defaultShouldRevalidate) {
        isUsingNewApi = true;
        if (!unstable_shouldRevalidateArgs) {
          return shouldLoad;
        }
        if (typeof defaultShouldRevalidate === "boolean") {
          return shouldRevalidateLoader(match, {
            ...unstable_shouldRevalidateArgs,
            defaultShouldRevalidate
          });
        }
        return shouldRevalidateLoader(match, unstable_shouldRevalidateArgs);
      },
      resolve(handlerOverride) {
        if (isUsingNewApi || shouldLoad || handlerOverride && !isMutationMethod(request.method) && (match.route.lazy || match.route.loader)) {
          return callLoaderOrAction({
            request,
            match,
            lazyHandlerPromise: _optionalChain([_lazyPromises, "optionalAccess", (_37) => _37.handler]),
            lazyRoutePromise: _optionalChain([_lazyPromises, "optionalAccess", (_38) => _38.route]),
            handlerOverride,
            scopedContext
          });
        }
        return Promise.resolve({ type: "data", result: undefined });
      }
    };
  }
  function getTargetedDataStrategyMatches(mapRouteProperties, manifest, request, matches, targetMatch, lazyRoutePropertiesToSkip, scopedContext, shouldRevalidateArgs = null) {
    return matches.map((match) => {
      if (match.route.id !== targetMatch.route.id) {
        return {
          ...match,
          shouldLoad: false,
          unstable_shouldRevalidateArgs: shouldRevalidateArgs,
          unstable_shouldCallHandler: () => false,
          _lazyPromises: getDataStrategyMatchLazyPromises(mapRouteProperties, manifest, request, match, lazyRoutePropertiesToSkip),
          resolve: () => Promise.resolve({ type: "data", result: undefined })
        };
      }
      return getDataStrategyMatch(mapRouteProperties, manifest, request, match, lazyRoutePropertiesToSkip, scopedContext, true, shouldRevalidateArgs);
    });
  }
  async function callDataStrategyImpl(dataStrategyImpl, request, matches, fetcherKey, scopedContext, isStaticHandler) {
    if (matches.some((m) => _optionalChain([m, "access", (_39) => _39._lazyPromises, "optionalAccess", (_40) => _40.middleware]))) {
      await Promise.all(matches.map((m) => _optionalChain([m, "access", (_41) => _41._lazyPromises, "optionalAccess", (_42) => _42.middleware])));
    }
    let dataStrategyArgs = {
      request,
      params: matches[0].params,
      context: scopedContext,
      matches
    };
    let unstable_runClientMiddleware = isStaticHandler ? () => {
      throw new Error("You cannot call `unstable_runClientMiddleware()` from a static handler `dataStrategy`. Middleware is run outside of `dataStrategy` during SSR in order to bubble up the Response.  You can enable middleware via the `respond` API in `query`/`queryRoute`");
    } : (cb) => {
      let typedDataStrategyArgs = dataStrategyArgs;
      return runMiddlewarePipeline(typedDataStrategyArgs, false, () => cb({
        ...typedDataStrategyArgs,
        fetcherKey,
        unstable_runClientMiddleware: () => {
          throw new Error("Cannot call `unstable_runClientMiddleware()` from within an `unstable_runClientMiddleware` handler");
        }
      }), (error, routeId) => ({
        [routeId]: { type: "error", result: error }
      }));
    };
    let results = await dataStrategyImpl({
      ...dataStrategyArgs,
      fetcherKey,
      unstable_runClientMiddleware
    });
    try {
      await Promise.all(matches.flatMap((m) => [
        _optionalChain([m, "access", (_43) => _43._lazyPromises, "optionalAccess", (_44) => _44.handler]),
        _optionalChain([m, "access", (_45) => _45._lazyPromises, "optionalAccess", (_46) => _46.route])
      ]));
    } catch (e) {}
    return results;
  }
  async function callLoaderOrAction({
    request,
    match,
    lazyHandlerPromise,
    lazyRoutePromise,
    handlerOverride,
    scopedContext
  }) {
    let result;
    let onReject;
    let isAction = isMutationMethod(request.method);
    let type = isAction ? "action" : "loader";
    let runHandler = (handler) => {
      let reject;
      let abortPromise = new Promise((_, r2) => reject = r2);
      onReject = () => reject();
      request.signal.addEventListener("abort", onReject);
      let actualHandler = (ctx) => {
        if (typeof handler !== "function") {
          return Promise.reject(new Error(`You cannot call the handler for a route which defines a boolean "${type}" [routeId: ${match.route.id}]`));
        }
        return handler({
          request,
          params: match.params,
          context: scopedContext
        }, ...ctx !== undefined ? [ctx] : []);
      };
      let handlerPromise = (async () => {
        try {
          let val = await (handlerOverride ? handlerOverride((ctx) => actualHandler(ctx)) : actualHandler());
          return { type: "data", result: val };
        } catch (e) {
          return { type: "error", result: e };
        }
      })();
      return Promise.race([handlerPromise, abortPromise]);
    };
    try {
      let handler = isAction ? match.route.action : match.route.loader;
      if (lazyHandlerPromise || lazyRoutePromise) {
        if (handler) {
          let handlerError;
          let [value] = await Promise.all([
            runHandler(handler).catch((e) => {
              handlerError = e;
            }),
            lazyHandlerPromise,
            lazyRoutePromise
          ]);
          if (handlerError !== undefined) {
            throw handlerError;
          }
          result = value;
        } else {
          await lazyHandlerPromise;
          let handler2 = isAction ? match.route.action : match.route.loader;
          if (handler2) {
            [result] = await Promise.all([runHandler(handler2), lazyRoutePromise]);
          } else if (type === "action") {
            let url = new URL(request.url);
            let pathname = url.pathname + url.search;
            throw getInternalRouterError(405, {
              method: request.method,
              pathname,
              routeId: match.route.id
            });
          } else {
            return { type: "data", result: undefined };
          }
        }
      } else if (!handler) {
        let url = new URL(request.url);
        let pathname = url.pathname + url.search;
        throw getInternalRouterError(404, {
          pathname
        });
      } else {
        result = await runHandler(handler);
      }
    } catch (e) {
      return { type: "error", result: e };
    } finally {
      if (onReject) {
        request.signal.removeEventListener("abort", onReject);
      }
    }
    return result;
  }
  async function convertDataStrategyResultToDataResult(dataStrategyResult) {
    let { result, type } = dataStrategyResult;
    if (isResponse(result)) {
      let data2;
      try {
        let contentType = result.headers.get("Content-Type");
        if (contentType && /\bapplication\/json\b/.test(contentType)) {
          if (result.body == null) {
            data2 = null;
          } else {
            data2 = await result.json();
          }
        } else {
          data2 = await result.text();
        }
      } catch (e) {
        return { type: "error", error: e };
      }
      if (type === "error") {
        return {
          type: "error",
          error: new ErrorResponseImpl(result.status, result.statusText, data2),
          statusCode: result.status,
          headers: result.headers
        };
      }
      return {
        type: "data",
        data: data2,
        statusCode: result.status,
        headers: result.headers
      };
    }
    if (type === "error") {
      if (isDataWithResponseInit(result)) {
        if (result.data instanceof Error) {
          return {
            type: "error",
            error: result.data,
            statusCode: _optionalChain([result, "access", (_47) => _47.init, "optionalAccess", (_48) => _48.status]),
            headers: _optionalChain([result, "access", (_49) => _49.init, "optionalAccess", (_50) => _50.headers]) ? new Headers(result.init.headers) : undefined
          };
        }
        return {
          type: "error",
          error: new ErrorResponseImpl(_optionalChain([result, "access", (_51) => _51.init, "optionalAccess", (_52) => _52.status]) || 500, undefined, result.data),
          statusCode: isRouteErrorResponse(result) ? result.status : undefined,
          headers: _optionalChain([result, "access", (_53) => _53.init, "optionalAccess", (_54) => _54.headers]) ? new Headers(result.init.headers) : undefined
        };
      }
      return {
        type: "error",
        error: result,
        statusCode: isRouteErrorResponse(result) ? result.status : undefined
      };
    }
    if (isDataWithResponseInit(result)) {
      return {
        type: "data",
        data: result.data,
        statusCode: _optionalChain([result, "access", (_55) => _55.init, "optionalAccess", (_56) => _56.status]),
        headers: _optionalChain([result, "access", (_57) => _57.init, "optionalAccess", (_58) => _58.headers]) ? new Headers(result.init.headers) : undefined
      };
    }
    return { type: "data", data: result };
  }
  function normalizeRelativeRoutingRedirectResponse(response, request, routeId, matches, basename) {
    let location2 = response.headers.get("Location");
    invariant2(location2, "Redirects returned/thrown from loaders/actions must have a Location header");
    if (!isAbsoluteUrl(location2)) {
      let trimmedMatches = matches.slice(0, matches.findIndex((m) => m.route.id === routeId) + 1);
      location2 = normalizeTo(new URL(request.url), trimmedMatches, basename, location2);
      response.headers.set("Location", location2);
    }
    return response;
  }
  function normalizeRedirectLocation(location2, currentUrl, basename) {
    if (isAbsoluteUrl(location2)) {
      let normalizedLocation = location2;
      let url = normalizedLocation.startsWith("//") ? new URL(currentUrl.protocol + normalizedLocation) : new URL(normalizedLocation);
      let isSameBasename = stripBasename(url.pathname, basename) != null;
      if (url.origin === currentUrl.origin && isSameBasename) {
        return url.pathname + url.search + url.hash;
      }
    }
    return location2;
  }
  function createClientSideRequest(history, location2, signal, submission) {
    let url = history.createURL(stripHashFromPath(location2)).toString();
    let init = { signal };
    if (submission && isMutationMethod(submission.formMethod)) {
      let { formMethod, formEncType } = submission;
      init.method = formMethod.toUpperCase();
      if (formEncType === "application/json") {
        init.headers = new Headers({ "Content-Type": formEncType });
        init.body = JSON.stringify(submission.json);
      } else if (formEncType === "text/plain") {
        init.body = submission.text;
      } else if (formEncType === "application/x-www-form-urlencoded" && submission.formData) {
        init.body = convertFormDataToSearchParams(submission.formData);
      } else {
        init.body = submission.formData;
      }
    }
    return new Request(url, init);
  }
  function convertFormDataToSearchParams(formData) {
    let searchParams = new URLSearchParams;
    for (let [key, value] of formData.entries()) {
      searchParams.append(key, typeof value === "string" ? value : value.name);
    }
    return searchParams;
  }
  function convertSearchParamsToFormData(searchParams) {
    let formData = new FormData;
    for (let [key, value] of searchParams.entries()) {
      formData.append(key, value);
    }
    return formData;
  }
  function processRouteLoaderData(matches, results, pendingActionResult, isStaticHandler = false, skipLoaderErrorBubbling = false) {
    let loaderData = {};
    let errors = null;
    let statusCode;
    let foundError = false;
    let loaderHeaders = {};
    let pendingError = pendingActionResult && isErrorResult(pendingActionResult[1]) ? pendingActionResult[1].error : undefined;
    matches.forEach((match) => {
      if (!(match.route.id in results)) {
        return;
      }
      let id3 = match.route.id;
      let result = results[id3];
      invariant2(!isRedirectResult(result), "Cannot handle redirect results in processLoaderData");
      if (isErrorResult(result)) {
        let error = result.error;
        if (pendingError !== undefined) {
          error = pendingError;
          pendingError = undefined;
        }
        errors = errors || {};
        if (skipLoaderErrorBubbling) {
          errors[id3] = error;
        } else {
          let boundaryMatch = findNearestBoundary(matches, id3);
          if (errors[boundaryMatch.route.id] == null) {
            errors[boundaryMatch.route.id] = error;
          }
        }
        if (!isStaticHandler) {
          loaderData[id3] = ResetLoaderDataSymbol;
        }
        if (!foundError) {
          foundError = true;
          statusCode = isRouteErrorResponse(result.error) ? result.error.status : 500;
        }
        if (result.headers) {
          loaderHeaders[id3] = result.headers;
        }
      } else {
        loaderData[id3] = result.data;
        if (result.statusCode && result.statusCode !== 200 && !foundError) {
          statusCode = result.statusCode;
        }
        if (result.headers) {
          loaderHeaders[id3] = result.headers;
        }
      }
    });
    if (pendingError !== undefined && pendingActionResult) {
      errors = { [pendingActionResult[0]]: pendingError };
      if (pendingActionResult[2]) {
        loaderData[pendingActionResult[2]] = undefined;
      }
    }
    return {
      loaderData,
      errors,
      statusCode: statusCode || 200,
      loaderHeaders
    };
  }
  function processLoaderData(state, matches, results, pendingActionResult, revalidatingFetchers, fetcherResults) {
    let { loaderData, errors } = processRouteLoaderData(matches, results, pendingActionResult);
    revalidatingFetchers.filter((f) => !f.matches || f.matches.some((m) => m.shouldLoad)).forEach((rf) => {
      let { key, match, controller } = rf;
      let result = fetcherResults[key];
      invariant2(result, "Did not find corresponding fetcher result");
      if (controller && controller.signal.aborted) {
        return;
      } else if (isErrorResult(result)) {
        let boundaryMatch = findNearestBoundary(state.matches, _optionalChain([match, "optionalAccess", (_59) => _59.route, "access", (_60) => _60.id]));
        if (!(errors && errors[boundaryMatch.route.id])) {
          errors = {
            ...errors,
            [boundaryMatch.route.id]: result.error
          };
        }
        state.fetchers.delete(key);
      } else if (isRedirectResult(result)) {
        invariant2(false, "Unhandled fetcher revalidation redirect");
      } else {
        let doneFetcher = getDoneFetcher(result.data);
        state.fetchers.set(key, doneFetcher);
      }
    });
    return { loaderData, errors };
  }
  function mergeLoaderData(loaderData, newLoaderData, matches, errors) {
    let mergedLoaderData = Object.entries(newLoaderData).filter(([, v]) => v !== ResetLoaderDataSymbol).reduce((merged, [k, v]) => {
      merged[k] = v;
      return merged;
    }, {});
    for (let match of matches) {
      let id3 = match.route.id;
      if (!newLoaderData.hasOwnProperty(id3) && loaderData.hasOwnProperty(id3) && match.route.loader) {
        mergedLoaderData[id3] = loaderData[id3];
      }
      if (errors && errors.hasOwnProperty(id3)) {
        break;
      }
    }
    return mergedLoaderData;
  }
  function getActionDataForCommit(pendingActionResult) {
    if (!pendingActionResult) {
      return {};
    }
    return isErrorResult(pendingActionResult[1]) ? {
      actionData: {}
    } : {
      actionData: {
        [pendingActionResult[0]]: pendingActionResult[1].data
      }
    };
  }
  function findNearestBoundary(matches, routeId) {
    let eligibleMatches = routeId ? matches.slice(0, matches.findIndex((m) => m.route.id === routeId) + 1) : [...matches];
    return eligibleMatches.reverse().find((m) => m.route.hasErrorBoundary === true) || matches[0];
  }
  function getShortCircuitMatches(routes) {
    let route = routes.length === 1 ? routes[0] : routes.find((r2) => r2.index || !r2.path || r2.path === "/") || {
      id: `__shim-error-route__`
    };
    return {
      matches: [
        {
          params: {},
          pathname: "",
          pathnameBase: "",
          route
        }
      ],
      route
    };
  }
  function getInternalRouterError(status, {
    pathname,
    routeId,
    method,
    type,
    message
  } = {}) {
    let statusText = "Unknown Server Error";
    let errorMessage = "Unknown @remix-run/router error";
    if (status === 400) {
      statusText = "Bad Request";
      if (method && pathname && routeId) {
        errorMessage = `You made a ${method} request to "${pathname}" but did not provide a \`loader\` for route "${routeId}", so there is no way to handle the request.`;
      } else if (type === "invalid-body") {
        errorMessage = "Unable to encode submission body";
      }
    } else if (status === 403) {
      statusText = "Forbidden";
      errorMessage = `Route "${routeId}" does not match URL "${pathname}"`;
    } else if (status === 404) {
      statusText = "Not Found";
      errorMessage = `No route matches URL "${pathname}"`;
    } else if (status === 405) {
      statusText = "Method Not Allowed";
      if (method && pathname && routeId) {
        errorMessage = `You made a ${method.toUpperCase()} request to "${pathname}" but did not provide an \`action\` for route "${routeId}", so there is no way to handle the request.`;
      } else if (method) {
        errorMessage = `Invalid request method "${method.toUpperCase()}"`;
      }
    }
    return new ErrorResponseImpl(status || 500, statusText, new Error(errorMessage), true);
  }
  function findRedirect(results) {
    let entries = Object.entries(results);
    for (let i = entries.length - 1;i >= 0; i--) {
      let [key, result] = entries[i];
      if (isRedirectResult(result)) {
        return { key, result };
      }
    }
  }
  function stripHashFromPath(path) {
    let parsedPath = typeof path === "string" ? parsePath(path) : path;
    return createPath({ ...parsedPath, hash: "" });
  }
  function isHashChangeOnly(a, b) {
    if (a.pathname !== b.pathname || a.search !== b.search) {
      return false;
    }
    if (a.hash === "") {
      return b.hash !== "";
    } else if (a.hash === b.hash) {
      return true;
    } else if (b.hash !== "") {
      return true;
    }
    return false;
  }
  function isDataStrategyResult(result) {
    return result != null && typeof result === "object" && "type" in result && "result" in result && (result.type === "data" || result.type === "error");
  }
  function isRedirectDataStrategyResult(result) {
    return isResponse(result.result) && redirectStatusCodes.has(result.result.status);
  }
  function isErrorResult(result) {
    return result.type === "error";
  }
  function isRedirectResult(result) {
    return (result && result.type) === "redirect";
  }
  function isDataWithResponseInit(value) {
    return typeof value === "object" && value != null && "type" in value && "data" in value && "init" in value && value.type === "DataWithResponseInit";
  }
  function isResponse(value) {
    return value != null && typeof value.status === "number" && typeof value.statusText === "string" && typeof value.headers === "object" && typeof value.body !== "undefined";
  }
  function isRedirectStatusCode(statusCode) {
    return redirectStatusCodes.has(statusCode);
  }
  function isRedirectResponse(result) {
    return isResponse(result) && isRedirectStatusCode(result.status) && result.headers.has("Location");
  }
  function isValidMethod(method) {
    return validRequestMethods.has(method.toUpperCase());
  }
  function isMutationMethod(method) {
    return validMutationMethods.has(method.toUpperCase());
  }
  function hasNakedIndexQuery(search) {
    return new URLSearchParams(search).getAll("index").some((v) => v === "");
  }
  function getTargetMatch(matches, location2) {
    let search = typeof location2 === "string" ? parsePath(location2).search : location2.search;
    if (matches[matches.length - 1].route.index && hasNakedIndexQuery(search || "")) {
      return matches[matches.length - 1];
    }
    let pathMatches = getPathContributingMatches(matches);
    return pathMatches[pathMatches.length - 1];
  }
  function getSubmissionFromNavigation(navigation) {
    let { formMethod, formAction, formEncType, text, formData, json } = navigation;
    if (!formMethod || !formAction || !formEncType) {
      return;
    }
    if (text != null) {
      return {
        formMethod,
        formAction,
        formEncType,
        formData: undefined,
        json: undefined,
        text
      };
    } else if (formData != null) {
      return {
        formMethod,
        formAction,
        formEncType,
        formData,
        json: undefined,
        text: undefined
      };
    } else if (json !== undefined) {
      return {
        formMethod,
        formAction,
        formEncType,
        formData: undefined,
        json,
        text: undefined
      };
    }
  }
  function getLoadingNavigation(location2, submission) {
    if (submission) {
      let navigation = {
        state: "loading",
        location: location2,
        formMethod: submission.formMethod,
        formAction: submission.formAction,
        formEncType: submission.formEncType,
        formData: submission.formData,
        json: submission.json,
        text: submission.text
      };
      return navigation;
    } else {
      let navigation = {
        state: "loading",
        location: location2,
        formMethod: undefined,
        formAction: undefined,
        formEncType: undefined,
        formData: undefined,
        json: undefined,
        text: undefined
      };
      return navigation;
    }
  }
  function getSubmittingNavigation(location2, submission) {
    let navigation = {
      state: "submitting",
      location: location2,
      formMethod: submission.formMethod,
      formAction: submission.formAction,
      formEncType: submission.formEncType,
      formData: submission.formData,
      json: submission.json,
      text: submission.text
    };
    return navigation;
  }
  function getLoadingFetcher(submission, data2) {
    if (submission) {
      let fetcher = {
        state: "loading",
        formMethod: submission.formMethod,
        formAction: submission.formAction,
        formEncType: submission.formEncType,
        formData: submission.formData,
        json: submission.json,
        text: submission.text,
        data: data2
      };
      return fetcher;
    } else {
      let fetcher = {
        state: "loading",
        formMethod: undefined,
        formAction: undefined,
        formEncType: undefined,
        formData: undefined,
        json: undefined,
        text: undefined,
        data: data2
      };
      return fetcher;
    }
  }
  function getSubmittingFetcher(submission, existingFetcher) {
    let fetcher = {
      state: "submitting",
      formMethod: submission.formMethod,
      formAction: submission.formAction,
      formEncType: submission.formEncType,
      formData: submission.formData,
      json: submission.json,
      text: submission.text,
      data: existingFetcher ? existingFetcher.data : undefined
    };
    return fetcher;
  }
  function getDoneFetcher(data2) {
    let fetcher = {
      state: "idle",
      formMethod: undefined,
      formAction: undefined,
      formEncType: undefined,
      formData: undefined,
      json: undefined,
      text: undefined,
      data: data2
    };
    return fetcher;
  }
  function restoreAppliedTransitions(_window, transitions) {
    try {
      let sessionPositions = _window.sessionStorage.getItem(TRANSITIONS_STORAGE_KEY);
      if (sessionPositions) {
        let json = JSON.parse(sessionPositions);
        for (let [k, v] of Object.entries(json || {})) {
          if (v && Array.isArray(v)) {
            transitions.set(k, new Set(v || []));
          }
        }
      }
    } catch (e) {}
  }
  function persistAppliedTransitions(_window, transitions) {
    if (transitions.size > 0) {
      let json = {};
      for (let [k, v] of transitions) {
        json[k] = [...v];
      }
      try {
        _window.sessionStorage.setItem(TRANSITIONS_STORAGE_KEY, JSON.stringify(json));
      } catch (error) {
        warning2(false, `Failed to save applied view transitions in sessionStorage (${error}).`);
      }
    }
  }
  function createDeferred() {
    let resolve;
    let reject;
    let promise = new Promise((res, rej) => {
      resolve = async (val) => {
        res(val);
        try {
          await promise;
        } catch (e) {}
      };
      reject = async (error) => {
        rej(error);
        try {
          await promise;
        } catch (e) {}
      };
    });
    return {
      promise,
      resolve,
      reject
    };
  }
  var React2 = _interopRequireWildcard(_react);
  var React22 = _interopRequireWildcard(_react);
  var React3 = _interopRequireWildcard(_react);
  var React8 = _interopRequireWildcard(_react);
  var React7 = _interopRequireWildcard(_react);
  var React6 = _interopRequireWildcard(_react);
  var React5 = _interopRequireWildcard(_react);
  var React4 = _interopRequireWildcard(_react);
  var HOLE = -1;
  var NAN = -2;
  var NEGATIVE_INFINITY = -3;
  var NEGATIVE_ZERO = -4;
  var NULL = -5;
  var POSITIVE_INFINITY = -6;
  var UNDEFINED = -7;
  var TYPE_BIGINT = "B";
  var TYPE_DATE = "D";
  var TYPE_ERROR = "E";
  var TYPE_MAP = "M";
  var TYPE_NULL_OBJECT = "N";
  var TYPE_PROMISE = "P";
  var TYPE_REGEXP = "R";
  var TYPE_SET = "S";
  var TYPE_SYMBOL = "Y";
  var TYPE_URL = "U";
  var TYPE_PREVIOUS_RESOLVED = "Z";
  var Deferred = class {
    constructor() {
      this.promise = new Promise((resolve, reject) => {
        this.resolve = resolve;
        this.reject = reject;
      });
    }
  };
  function createLineSplittingTransform() {
    const decoder = new TextDecoder;
    let leftover = "";
    return new TransformStream({
      transform(chunk, controller) {
        const str = decoder.decode(chunk, { stream: true });
        const parts = (leftover + str).split(`
`);
        leftover = parts.pop() || "";
        for (const part of parts) {
          controller.enqueue(part);
        }
      },
      flush(controller) {
        if (leftover) {
          controller.enqueue(leftover);
        }
      }
    });
  }
  function flatten(input) {
    const { indices } = this;
    const existing = indices.get(input);
    if (existing)
      return [existing];
    if (input === undefined)
      return UNDEFINED;
    if (input === null)
      return NULL;
    if (Number.isNaN(input))
      return NAN;
    if (input === Number.POSITIVE_INFINITY)
      return POSITIVE_INFINITY;
    if (input === Number.NEGATIVE_INFINITY)
      return NEGATIVE_INFINITY;
    if (input === 0 && 1 / input < 0)
      return NEGATIVE_ZERO;
    const index = this.index++;
    indices.set(input, index);
    stringify.call(this, input, index);
    return index;
  }
  function stringify(input, index) {
    const { deferred, plugins, postPlugins } = this;
    const str = this.stringified;
    const stack = [[input, index]];
    while (stack.length > 0) {
      const [input2, index2] = stack.pop();
      const partsForObj = (obj) => Object.keys(obj).map((k) => `"_${flatten.call(this, k)}":${flatten.call(this, obj[k])}`).join(",");
      let error = null;
      switch (typeof input2) {
        case "boolean":
        case "number":
        case "string":
          str[index2] = JSON.stringify(input2);
          break;
        case "bigint":
          str[index2] = `["${TYPE_BIGINT}","${input2}"]`;
          break;
        case "symbol": {
          const keyFor = Symbol.keyFor(input2);
          if (!keyFor) {
            error = new Error("Cannot encode symbol unless created with Symbol.for()");
          } else {
            str[index2] = `["${TYPE_SYMBOL}",${JSON.stringify(keyFor)}]`;
          }
          break;
        }
        case "object": {
          if (!input2) {
            str[index2] = `${NULL}`;
            break;
          }
          const isArray = Array.isArray(input2);
          let pluginHandled = false;
          if (!isArray && plugins) {
            for (const plugin of plugins) {
              const pluginResult = plugin(input2);
              if (Array.isArray(pluginResult)) {
                pluginHandled = true;
                const [pluginIdentifier, ...rest] = pluginResult;
                str[index2] = `[${JSON.stringify(pluginIdentifier)}`;
                if (rest.length > 0) {
                  str[index2] += `,${rest.map((v) => flatten.call(this, v)).join(",")}`;
                }
                str[index2] += "]";
                break;
              }
            }
          }
          if (!pluginHandled) {
            let result = isArray ? "[" : "{";
            if (isArray) {
              for (let i = 0;i < input2.length; i++)
                result += (i ? "," : "") + (i in input2 ? flatten.call(this, input2[i]) : HOLE);
              str[index2] = `${result}]`;
            } else if (input2 instanceof Date) {
              const dateTime = input2.getTime();
              str[index2] = `["${TYPE_DATE}",${Number.isNaN(dateTime) ? JSON.stringify("invalid") : dateTime}]`;
            } else if (input2 instanceof URL) {
              str[index2] = `["${TYPE_URL}",${JSON.stringify(input2.href)}]`;
            } else if (input2 instanceof RegExp) {
              str[index2] = `["${TYPE_REGEXP}",${JSON.stringify(input2.source)},${JSON.stringify(input2.flags)}]`;
            } else if (input2 instanceof Set) {
              if (input2.size > 0) {
                str[index2] = `["${TYPE_SET}",${[...input2].map((val) => flatten.call(this, val)).join(",")}]`;
              } else {
                str[index2] = `["${TYPE_SET}"]`;
              }
            } else if (input2 instanceof Map) {
              if (input2.size > 0) {
                str[index2] = `["${TYPE_MAP}",${[...input2].flatMap(([k, v]) => [
                  flatten.call(this, k),
                  flatten.call(this, v)
                ]).join(",")}]`;
              } else {
                str[index2] = `["${TYPE_MAP}"]`;
              }
            } else if (input2 instanceof Promise) {
              str[index2] = `["${TYPE_PROMISE}",${index2}]`;
              deferred[index2] = input2;
            } else if (input2 instanceof Error) {
              str[index2] = `["${TYPE_ERROR}",${JSON.stringify(input2.message)}`;
              if (input2.name !== "Error") {
                str[index2] += `,${JSON.stringify(input2.name)}`;
              }
              str[index2] += "]";
            } else if (Object.getPrototypeOf(input2) === null) {
              str[index2] = `["${TYPE_NULL_OBJECT}",{${partsForObj(input2)}}]`;
            } else if (isPlainObject(input2)) {
              str[index2] = `{${partsForObj(input2)}}`;
            } else {
              error = new Error("Cannot encode object with prototype");
            }
          }
          break;
        }
        default: {
          const isArray = Array.isArray(input2);
          let pluginHandled = false;
          if (!isArray && plugins) {
            for (const plugin of plugins) {
              const pluginResult = plugin(input2);
              if (Array.isArray(pluginResult)) {
                pluginHandled = true;
                const [pluginIdentifier, ...rest] = pluginResult;
                str[index2] = `[${JSON.stringify(pluginIdentifier)}`;
                if (rest.length > 0) {
                  str[index2] += `,${rest.map((v) => flatten.call(this, v)).join(",")}`;
                }
                str[index2] += "]";
                break;
              }
            }
          }
          if (!pluginHandled) {
            error = new Error("Cannot encode function or unexpected type");
          }
        }
      }
      if (error) {
        let pluginHandled = false;
        if (postPlugins) {
          for (const plugin of postPlugins) {
            const pluginResult = plugin(input2);
            if (Array.isArray(pluginResult)) {
              pluginHandled = true;
              const [pluginIdentifier, ...rest] = pluginResult;
              str[index2] = `[${JSON.stringify(pluginIdentifier)}`;
              if (rest.length > 0) {
                str[index2] += `,${rest.map((v) => flatten.call(this, v)).join(",")}`;
              }
              str[index2] += "]";
              break;
            }
          }
        }
        if (!pluginHandled) {
          throw error;
        }
      }
    }
  }
  var objectProtoNames = Object.getOwnPropertyNames(Object.prototype).sort().join("\x00");
  function isPlainObject(thing) {
    const proto = Object.getPrototypeOf(thing);
    return proto === Object.prototype || proto === null || Object.getOwnPropertyNames(proto).sort().join("\x00") === objectProtoNames;
  }
  var globalObj = typeof window !== "undefined" ? window : typeof globalThis !== "undefined" ? globalThis : undefined;
  function unflatten(parsed) {
    const { hydrated, values } = this;
    if (typeof parsed === "number")
      return hydrate.call(this, parsed);
    if (!Array.isArray(parsed) || !parsed.length)
      throw new SyntaxError;
    const startIndex = values.length;
    for (const value of parsed) {
      values.push(value);
    }
    hydrated.length = values.length;
    return hydrate.call(this, startIndex);
  }
  function hydrate(index) {
    const { hydrated, values, deferred, plugins } = this;
    let result;
    const stack = [
      [
        index,
        (v) => {
          result = v;
        }
      ]
    ];
    let postRun = [];
    while (stack.length > 0) {
      const [index2, set] = stack.pop();
      switch (index2) {
        case UNDEFINED:
          set(undefined);
          continue;
        case NULL:
          set(null);
          continue;
        case NAN:
          set(NaN);
          continue;
        case POSITIVE_INFINITY:
          set(Infinity);
          continue;
        case NEGATIVE_INFINITY:
          set(-Infinity);
          continue;
        case NEGATIVE_ZERO:
          set(-0);
          continue;
      }
      if (hydrated[index2]) {
        set(hydrated[index2]);
        continue;
      }
      const value = values[index2];
      if (!value || typeof value !== "object") {
        hydrated[index2] = value;
        set(value);
        continue;
      }
      if (Array.isArray(value)) {
        if (typeof value[0] === "string") {
          const [type, b, c] = value;
          switch (type) {
            case TYPE_DATE:
              set(hydrated[index2] = new Date(b));
              continue;
            case TYPE_URL:
              set(hydrated[index2] = new URL(b));
              continue;
            case TYPE_BIGINT:
              set(hydrated[index2] = BigInt(b));
              continue;
            case TYPE_REGEXP:
              set(hydrated[index2] = new RegExp(b, c));
              continue;
            case TYPE_SYMBOL:
              set(hydrated[index2] = Symbol.for(b));
              continue;
            case TYPE_SET:
              const newSet = /* @__PURE__ */ new Set;
              hydrated[index2] = newSet;
              for (let i = value.length - 1;i > 0; i--)
                stack.push([
                  value[i],
                  (v) => {
                    newSet.add(v);
                  }
                ]);
              set(newSet);
              continue;
            case TYPE_MAP:
              const map = /* @__PURE__ */ new Map;
              hydrated[index2] = map;
              for (let i = value.length - 2;i > 0; i -= 2) {
                const r2 = [];
                stack.push([
                  value[i + 1],
                  (v) => {
                    r2[1] = v;
                  }
                ]);
                stack.push([
                  value[i],
                  (k) => {
                    r2[0] = k;
                  }
                ]);
                postRun.push(() => {
                  map.set(r2[0], r2[1]);
                });
              }
              set(map);
              continue;
            case TYPE_NULL_OBJECT:
              const obj = /* @__PURE__ */ Object.create(null);
              hydrated[index2] = obj;
              for (const key of Object.keys(b).reverse()) {
                const r2 = [];
                stack.push([
                  b[key],
                  (v) => {
                    r2[1] = v;
                  }
                ]);
                stack.push([
                  Number(key.slice(1)),
                  (k) => {
                    r2[0] = k;
                  }
                ]);
                postRun.push(() => {
                  obj[r2[0]] = r2[1];
                });
              }
              set(obj);
              continue;
            case TYPE_PROMISE:
              if (hydrated[b]) {
                set(hydrated[index2] = hydrated[b]);
              } else {
                const d = new Deferred;
                deferred[b] = d;
                set(hydrated[index2] = d.promise);
              }
              continue;
            case TYPE_ERROR:
              const [, message, errorType] = value;
              let error = errorType && globalObj && globalObj[errorType] ? new globalObj[errorType](message) : new Error(message);
              hydrated[index2] = error;
              set(error);
              continue;
            case TYPE_PREVIOUS_RESOLVED:
              set(hydrated[index2] = hydrated[b]);
              continue;
            default:
              if (Array.isArray(plugins)) {
                const r2 = [];
                const vals = value.slice(1);
                for (let i = 0;i < vals.length; i++) {
                  const v = vals[i];
                  stack.push([
                    v,
                    (v2) => {
                      r2[i] = v2;
                    }
                  ]);
                }
                postRun.push(() => {
                  for (const plugin of plugins) {
                    const result2 = plugin(value[0], ...r2);
                    if (result2) {
                      set(hydrated[index2] = result2.value);
                      return;
                    }
                  }
                  throw new SyntaxError;
                });
                continue;
              }
              throw new SyntaxError;
          }
        } else {
          const array = [];
          hydrated[index2] = array;
          for (let i = 0;i < value.length; i++) {
            const n = value[i];
            if (n !== HOLE) {
              stack.push([
                n,
                (v) => {
                  array[i] = v;
                }
              ]);
            }
          }
          set(array);
          continue;
        }
      } else {
        const object = {};
        hydrated[index2] = object;
        for (const key of Object.keys(value).reverse()) {
          const r2 = [];
          stack.push([
            value[key],
            (v) => {
              r2[1] = v;
            }
          ]);
          stack.push([
            Number(key.slice(1)),
            (k) => {
              r2[0] = k;
            }
          ]);
          postRun.push(() => {
            object[r2[0]] = r2[1];
          });
        }
        set(object);
        continue;
      }
    }
    while (postRun.length > 0) {
      postRun.pop()();
    }
    return result;
  }
  async function decode(readable, options) {
    const { plugins } = _nullishCoalesce(options, () => ({}));
    const done = new Deferred;
    const reader = readable.pipeThrough(createLineSplittingTransform()).getReader();
    const decoder = {
      values: [],
      hydrated: [],
      deferred: {},
      plugins
    };
    const decoded = await decodeInitial.call(decoder, reader);
    let donePromise = done.promise;
    if (decoded.done) {
      done.resolve();
    } else {
      donePromise = decodeDeferred.call(decoder, reader).then(done.resolve).catch((reason) => {
        for (const deferred of Object.values(decoder.deferred)) {
          deferred.reject(reason);
        }
        done.reject(reason);
      });
    }
    return {
      done: donePromise.then(() => reader.closed),
      value: decoded.value
    };
  }
  async function decodeInitial(reader) {
    const read = await reader.read();
    if (!read.value) {
      throw new SyntaxError;
    }
    let line;
    try {
      line = JSON.parse(read.value);
    } catch (reason) {
      throw new SyntaxError;
    }
    return {
      done: read.done,
      value: unflatten.call(this, line)
    };
  }
  async function decodeDeferred(reader) {
    let read = await reader.read();
    while (!read.done) {
      if (!read.value)
        continue;
      const line = read.value;
      switch (line[0]) {
        case TYPE_PROMISE: {
          const colonIndex = line.indexOf(":");
          const deferredId = Number(line.slice(1, colonIndex));
          const deferred = this.deferred[deferredId];
          if (!deferred) {
            throw new Error(`Deferred ID ${deferredId} not found in stream`);
          }
          const lineData = line.slice(colonIndex + 1);
          let jsonLine;
          try {
            jsonLine = JSON.parse(lineData);
          } catch (reason) {
            throw new SyntaxError;
          }
          const value = unflatten.call(this, jsonLine);
          deferred.resolve(value);
          break;
        }
        case TYPE_ERROR: {
          const colonIndex = line.indexOf(":");
          const deferredId = Number(line.slice(1, colonIndex));
          const deferred = this.deferred[deferredId];
          if (!deferred) {
            throw new Error(`Deferred ID ${deferredId} not found in stream`);
          }
          const lineData = line.slice(colonIndex + 1);
          let jsonLine;
          try {
            jsonLine = JSON.parse(lineData);
          } catch (reason) {
            throw new SyntaxError;
          }
          const value = unflatten.call(this, jsonLine);
          deferred.reject(value);
          break;
        }
        default:
          throw new SyntaxError;
      }
      read = await reader.read();
    }
  }
  function encode(input, options) {
    const { plugins, postPlugins, signal } = _nullishCoalesce(options, () => ({}));
    const encoder = {
      deferred: {},
      index: 0,
      indices: /* @__PURE__ */ new Map,
      stringified: [],
      plugins,
      postPlugins,
      signal
    };
    const textEncoder = new TextEncoder;
    let lastSentIndex = 0;
    const readable = new ReadableStream({
      async start(controller) {
        const id3 = flatten.call(encoder, input);
        if (Array.isArray(id3)) {
          throw new Error("This should never happen");
        }
        if (id3 < 0) {
          controller.enqueue(textEncoder.encode(`${id3}
`));
        } else {
          controller.enqueue(textEncoder.encode(`[${encoder.stringified.join(",")}]
`));
          lastSentIndex = encoder.stringified.length - 1;
        }
        const seenPromises = /* @__PURE__ */ new WeakSet;
        if (Object.keys(encoder.deferred).length) {
          let raceDone;
          const racePromise = new Promise((resolve, reject) => {
            raceDone = resolve;
            if (signal) {
              const rejectPromise = () => reject(signal.reason || new Error("Signal was aborted."));
              if (signal.aborted) {
                rejectPromise();
              } else {
                signal.addEventListener("abort", (event) => {
                  rejectPromise();
                });
              }
            }
          });
          while (Object.keys(encoder.deferred).length > 0) {
            for (const [deferredId, deferred] of Object.entries(encoder.deferred)) {
              if (seenPromises.has(deferred))
                continue;
              seenPromises.add(encoder.deferred[Number(deferredId)] = Promise.race([
                racePromise,
                deferred
              ]).then((resolved) => {
                const id22 = flatten.call(encoder, resolved);
                if (Array.isArray(id22)) {
                  controller.enqueue(textEncoder.encode(`${TYPE_PROMISE}${deferredId}:[["${TYPE_PREVIOUS_RESOLVED}",${id22[0]}]]
`));
                  encoder.index++;
                  lastSentIndex++;
                } else if (id22 < 0) {
                  controller.enqueue(textEncoder.encode(`${TYPE_PROMISE}${deferredId}:${id22}
`));
                } else {
                  const values = encoder.stringified.slice(lastSentIndex + 1).join(",");
                  controller.enqueue(textEncoder.encode(`${TYPE_PROMISE}${deferredId}:[${values}]
`));
                  lastSentIndex = encoder.stringified.length - 1;
                }
              }, (reason) => {
                if (!reason || typeof reason !== "object" || !(reason instanceof Error)) {
                  reason = new Error("An unknown error occurred");
                }
                const id22 = flatten.call(encoder, reason);
                if (Array.isArray(id22)) {
                  controller.enqueue(textEncoder.encode(`${TYPE_ERROR}${deferredId}:[["${TYPE_PREVIOUS_RESOLVED}",${id22[0]}]]
`));
                  encoder.index++;
                  lastSentIndex++;
                } else if (id22 < 0) {
                  controller.enqueue(textEncoder.encode(`${TYPE_ERROR}${deferredId}:${id22}
`));
                } else {
                  const values = encoder.stringified.slice(lastSentIndex + 1).join(",");
                  controller.enqueue(textEncoder.encode(`${TYPE_ERROR}${deferredId}:[${values}]
`));
                  lastSentIndex = encoder.stringified.length - 1;
                }
              }).finally(() => {
                delete encoder.deferred[Number(deferredId)];
              }));
            }
            await Promise.race(Object.values(encoder.deferred));
          }
          raceDone();
        }
        await Promise.all(Object.values(encoder.deferred));
        controller.close();
      }
    });
    return readable;
  }
  async function createRequestInit(request) {
    let init = { signal: request.signal };
    if (request.method !== "GET") {
      init.method = request.method;
      let contentType = request.headers.get("Content-Type");
      if (contentType && /\bapplication\/json\b/.test(contentType)) {
        init.headers = { "Content-Type": contentType };
        init.body = JSON.stringify(await request.json());
      } else if (contentType && /\btext\/plain\b/.test(contentType)) {
        init.headers = { "Content-Type": contentType };
        init.body = await request.text();
      } else if (contentType && /\bapplication\/x-www-form-urlencoded\b/.test(contentType)) {
        init.body = new URLSearchParams(await request.text());
      } else {
        init.body = await request.formData();
      }
    }
    return init;
  }
  var ESCAPE_LOOKUP = {
    "&": "\\u0026",
    ">": "\\u003e",
    "<": "\\u003c",
    "\u2028": "\\u2028",
    "\u2029": "\\u2029"
  };
  var ESCAPE_REGEX = /[&><\u2028\u2029]/g;
  function escapeHtml(html) {
    return html.replace(ESCAPE_REGEX, (match) => ESCAPE_LOOKUP[match]);
  }
  function createHtml(html) {
    return { __html: html };
  }
  function invariant22(value, message) {
    if (value === false || value === null || typeof value === "undefined") {
      throw new Error(message);
    }
  }
  var SingleFetchRedirectSymbol = Symbol("SingleFetchRedirect");
  var SingleFetchNoResultError = class extends Error {
  };
  var SINGLE_FETCH_REDIRECT_STATUS = 202;
  var NO_BODY_STATUS_CODES = /* @__PURE__ */ new Set([100, 101, 204, 205]);
  function StreamTransfer({
    context,
    identifier,
    reader,
    textDecoder,
    nonce
  }) {
    if (!context.renderMeta || !context.renderMeta.didRenderScripts) {
      return null;
    }
    if (!context.renderMeta.streamCache) {
      context.renderMeta.streamCache = {};
    }
    let { streamCache } = context.renderMeta;
    let promise = streamCache[identifier];
    if (!promise) {
      promise = streamCache[identifier] = reader.read().then((result) => {
        streamCache[identifier].result = {
          done: result.done,
          value: textDecoder.decode(result.value, { stream: true })
        };
      }).catch((e) => {
        streamCache[identifier].error = e;
      });
    }
    if (promise.error) {
      throw promise.error;
    }
    if (promise.result === undefined) {
      throw promise;
    }
    let { done, value } = promise.result;
    let scriptTag = value ? /* @__PURE__ */ React2.createElement("script", {
      nonce,
      dangerouslySetInnerHTML: {
        __html: `window.__reactRouterContext.streamController.enqueue(${escapeHtml(JSON.stringify(value))});`
      }
    }) : null;
    if (done) {
      return /* @__PURE__ */ React2.createElement(React2.Fragment, null, scriptTag, /* @__PURE__ */ React2.createElement("script", {
        nonce,
        dangerouslySetInnerHTML: {
          __html: `window.__reactRouterContext.streamController.close();`
        }
      }));
    } else {
      return /* @__PURE__ */ React2.createElement(React2.Fragment, null, scriptTag, /* @__PURE__ */ React2.createElement(React2.Suspense, null, /* @__PURE__ */ React2.createElement(StreamTransfer, {
        context,
        identifier: identifier + 1,
        reader,
        textDecoder,
        nonce
      })));
    }
  }
  function getTurboStreamSingleFetchDataStrategy(getRouter, manifest, routeModules, ssr, basename) {
    let dataStrategy = getSingleFetchDataStrategyImpl(getRouter, (match) => {
      let manifestRoute = manifest.routes[match.route.id];
      invariant22(manifestRoute, "Route not found in manifest");
      let routeModule = routeModules[match.route.id];
      return {
        hasLoader: manifestRoute.hasLoader,
        hasClientLoader: manifestRoute.hasClientLoader,
        hasShouldRevalidate: Boolean(_optionalChain([routeModule, "optionalAccess", (_61) => _61.shouldRevalidate]))
      };
    }, fetchAndDecodeViaTurboStream, ssr, basename);
    return async (args) => args.unstable_runClientMiddleware(dataStrategy);
  }
  function getSingleFetchDataStrategyImpl(getRouter, getRouteInfo, fetchAndDecode, ssr, basename, shouldAllowOptOut = () => true) {
    return async (args) => {
      let { request, matches, fetcherKey } = args;
      let router = getRouter();
      if (request.method !== "GET") {
        return singleFetchActionStrategy(args, fetchAndDecode, basename);
      }
      let foundRevalidatingServerLoader = matches.some((m) => {
        let { hasLoader, hasClientLoader } = getRouteInfo(m);
        return m.unstable_shouldCallHandler() && hasLoader && !hasClientLoader;
      });
      if (!ssr && !foundRevalidatingServerLoader) {
        return nonSsrStrategy(args, getRouteInfo, fetchAndDecode, basename);
      }
      if (fetcherKey) {
        return singleFetchLoaderFetcherStrategy(args, fetchAndDecode, basename);
      }
      return singleFetchLoaderNavigationStrategy(args, router, getRouteInfo, fetchAndDecode, ssr, basename, shouldAllowOptOut);
    };
  }
  async function singleFetchActionStrategy(args, fetchAndDecode, basename) {
    let actionMatch = args.matches.find((m) => m.unstable_shouldCallHandler());
    invariant22(actionMatch, "No action match found");
    let actionStatus = undefined;
    let result = await actionMatch.resolve(async (handler) => {
      let result2 = await handler(async () => {
        let { data: data2, status } = await fetchAndDecode(args, basename, [
          actionMatch.route.id
        ]);
        actionStatus = status;
        return unwrapSingleFetchResult(data2, actionMatch.route.id);
      });
      return result2;
    });
    if (isResponse(result.result) || isRouteErrorResponse(result.result) || isDataWithResponseInit(result.result)) {
      return { [actionMatch.route.id]: result };
    }
    return {
      [actionMatch.route.id]: {
        type: result.type,
        result: data(result.result, actionStatus)
      }
    };
  }
  async function nonSsrStrategy(args, getRouteInfo, fetchAndDecode, basename) {
    let matchesToLoad = args.matches.filter((m) => m.unstable_shouldCallHandler());
    let results = {};
    await Promise.all(matchesToLoad.map((m) => m.resolve(async (handler) => {
      try {
        let { hasClientLoader } = getRouteInfo(m);
        let routeId = m.route.id;
        let result = hasClientLoader ? await handler(async () => {
          let { data: data2 } = await fetchAndDecode(args, basename, [routeId]);
          return unwrapSingleFetchResult(data2, routeId);
        }) : await handler();
        results[m.route.id] = { type: "data", result };
      } catch (e) {
        results[m.route.id] = { type: "error", result: e };
      }
    })));
    return results;
  }
  async function singleFetchLoaderNavigationStrategy(args, router, getRouteInfo, fetchAndDecode, ssr, basename, shouldAllowOptOut = () => true) {
    let routesParams = /* @__PURE__ */ new Set;
    let foundOptOutRoute = false;
    let routeDfds = args.matches.map(() => createDeferred2());
    let singleFetchDfd = createDeferred2();
    let results = {};
    let resolvePromise = Promise.all(args.matches.map(async (m, i) => m.resolve(async (handler) => {
      routeDfds[i].resolve();
      let routeId = m.route.id;
      let { hasLoader, hasClientLoader, hasShouldRevalidate } = getRouteInfo(m);
      let defaultShouldRevalidate = !m.unstable_shouldRevalidateArgs || m.unstable_shouldRevalidateArgs.actionStatus == null || m.unstable_shouldRevalidateArgs.actionStatus < 400;
      let shouldCall = m.unstable_shouldCallHandler(defaultShouldRevalidate);
      if (!shouldCall) {
        foundOptOutRoute || (foundOptOutRoute = m.unstable_shouldRevalidateArgs != null && hasLoader && hasShouldRevalidate === true);
        return;
      }
      if (shouldAllowOptOut(m) && hasClientLoader) {
        if (hasLoader) {
          foundOptOutRoute = true;
        }
        try {
          let result = await handler(async () => {
            let { data: data2 } = await fetchAndDecode(args, basename, [routeId]);
            return unwrapSingleFetchResult(data2, routeId);
          });
          results[routeId] = { type: "data", result };
        } catch (e) {
          results[routeId] = { type: "error", result: e };
        }
        return;
      }
      if (hasLoader) {
        routesParams.add(routeId);
      }
      try {
        let result = await handler(async () => {
          let data2 = await singleFetchDfd.promise;
          return unwrapSingleFetchResult(data2, routeId);
        });
        results[routeId] = { type: "data", result };
      } catch (e) {
        results[routeId] = { type: "error", result: e };
      }
    })));
    await Promise.all(routeDfds.map((d) => d.promise));
    let isInitialLoad = !router.state.initialized && router.state.navigation.state === "idle";
    if ((isInitialLoad || routesParams.size === 0) && !window.__reactRouterHdrActive) {
      singleFetchDfd.resolve({ routes: {} });
    } else {
      let targetRoutes = ssr && foundOptOutRoute && routesParams.size > 0 ? [...routesParams.keys()] : undefined;
      try {
        let data2 = await fetchAndDecode(args, basename, targetRoutes);
        singleFetchDfd.resolve(data2.data);
      } catch (e) {
        singleFetchDfd.reject(e);
      }
    }
    await resolvePromise;
    await bubbleMiddlewareErrors(singleFetchDfd.promise, args.matches, routesParams, results);
    return results;
  }
  async function bubbleMiddlewareErrors(singleFetchPromise, matches, routesParams, results) {
    try {
      let middlewareError;
      let fetchedData = await singleFetchPromise;
      if ("routes" in fetchedData) {
        for (let match of matches) {
          if (match.route.id in fetchedData.routes) {
            let routeResult = fetchedData.routes[match.route.id];
            if ("error" in routeResult) {
              middlewareError = routeResult.error;
              break;
            }
          }
        }
      }
      if (middlewareError !== undefined) {
        Array.from(routesParams.values()).forEach((routeId) => {
          if (results[routeId].result instanceof SingleFetchNoResultError) {
            results[routeId].result = middlewareError;
          }
        });
      }
    } catch (e) {}
  }
  async function singleFetchLoaderFetcherStrategy(args, fetchAndDecode, basename) {
    let fetcherMatch = args.matches.find((m) => m.unstable_shouldCallHandler());
    invariant22(fetcherMatch, "No fetcher match found");
    let routeId = fetcherMatch.route.id;
    let result = await fetcherMatch.resolve(async (handler) => handler(async () => {
      let { data: data2 } = await fetchAndDecode(args, basename, [routeId]);
      return unwrapSingleFetchResult(data2, routeId);
    }));
    return { [fetcherMatch.route.id]: result };
  }
  function stripIndexParam(url) {
    let indexValues = url.searchParams.getAll("index");
    url.searchParams.delete("index");
    let indexValuesToKeep = [];
    for (let indexValue of indexValues) {
      if (indexValue) {
        indexValuesToKeep.push(indexValue);
      }
    }
    for (let toKeep of indexValuesToKeep) {
      url.searchParams.append("index", toKeep);
    }
    return url;
  }
  function singleFetchUrl(reqUrl, basename, extension) {
    let url = typeof reqUrl === "string" ? new URL(reqUrl, typeof window === "undefined" ? "server://singlefetch/" : window.location.origin) : reqUrl;
    if (url.pathname === "/") {
      url.pathname = `_root.${extension}`;
    } else if (basename && stripBasename(url.pathname, basename) === "/") {
      url.pathname = `${basename.replace(/\/$/, "")}/_root.${extension}`;
    } else {
      url.pathname = `${url.pathname.replace(/\/$/, "")}.${extension}`;
    }
    return url;
  }
  async function fetchAndDecodeViaTurboStream(args, basename, targetRoutes) {
    let { request } = args;
    let url = singleFetchUrl(request.url, basename, "data");
    if (request.method === "GET") {
      url = stripIndexParam(url);
      if (targetRoutes) {
        url.searchParams.set("_routes", targetRoutes.join(","));
      }
    }
    let res = await fetch(url, await createRequestInit(request));
    if (res.status === 404 && !res.headers.has("X-Remix-Response")) {
      throw new ErrorResponseImpl(404, "Not Found", true);
    }
    if (res.status === 204 && res.headers.has("X-Remix-Redirect")) {
      return {
        status: SINGLE_FETCH_REDIRECT_STATUS,
        data: {
          redirect: {
            redirect: res.headers.get("X-Remix-Redirect"),
            status: Number(res.headers.get("X-Remix-Status") || "302"),
            revalidate: res.headers.get("X-Remix-Revalidate") === "true",
            reload: res.headers.get("X-Remix-Reload-Document") === "true",
            replace: res.headers.get("X-Remix-Replace") === "true"
          }
        }
      };
    }
    if (NO_BODY_STATUS_CODES.has(res.status)) {
      let routes = {};
      if (targetRoutes && request.method !== "GET") {
        routes[targetRoutes[0]] = { data: undefined };
      }
      return {
        status: res.status,
        data: { routes }
      };
    }
    invariant22(res.body, "No response body to decode");
    try {
      let decoded = await decodeViaTurboStream(res.body, window);
      let data2;
      if (request.method === "GET") {
        let typed = decoded.value;
        if (SingleFetchRedirectSymbol in typed) {
          data2 = { redirect: typed[SingleFetchRedirectSymbol] };
        } else {
          data2 = { routes: typed };
        }
      } else {
        let typed = decoded.value;
        let routeId = _optionalChain([targetRoutes, "optionalAccess", (_62) => _62[0]]);
        invariant22(routeId, "No routeId found for single fetch call decoding");
        if ("redirect" in typed) {
          data2 = { redirect: typed };
        } else {
          data2 = { routes: { [routeId]: typed } };
        }
      }
      return { status: res.status, data: data2 };
    } catch (e) {
      throw new Error("Unable to decode turbo-stream response");
    }
  }
  function decodeViaTurboStream(body, global2) {
    return decode(body, {
      plugins: [
        (type, ...rest) => {
          if (type === "SanitizedError") {
            let [name, message, stack] = rest;
            let Constructor = Error;
            if (name && name in global2 && typeof global2[name] === "function") {
              Constructor = global2[name];
            }
            let error = new Constructor(message);
            error.stack = stack;
            return { value: error };
          }
          if (type === "ErrorResponse") {
            let [data2, status, statusText] = rest;
            return {
              value: new ErrorResponseImpl(status, statusText, data2)
            };
          }
          if (type === "SingleFetchRedirect") {
            return { value: { [SingleFetchRedirectSymbol]: rest[0] } };
          }
          if (type === "SingleFetchClassInstance") {
            return { value: rest[0] };
          }
          if (type === "SingleFetchFallback") {
            return { value: undefined };
          }
        }
      ]
    });
  }
  function unwrapSingleFetchResult(result, routeId) {
    if ("redirect" in result) {
      let {
        redirect: location2,
        revalidate,
        reload,
        replace: replace2,
        status
      } = result.redirect;
      throw redirect(location2, {
        status,
        headers: {
          ...revalidate ? { "X-Remix-Revalidate": "yes" } : null,
          ...reload ? { "X-Remix-Reload-Document": "yes" } : null,
          ...replace2 ? { "X-Remix-Replace": "yes" } : null
        }
      });
    }
    let routeResult = result.routes[routeId];
    if (routeResult == null) {
      throw new SingleFetchNoResultError(`No result found for routeId "${routeId}"`);
    } else if ("error" in routeResult) {
      throw routeResult.error;
    } else if ("data" in routeResult) {
      return routeResult.data;
    } else {
      throw new Error(`Invalid response found for routeId "${routeId}"`);
    }
  }
  function createDeferred2() {
    let resolve;
    let reject;
    let promise = new Promise((res, rej) => {
      resolve = async (val) => {
        res(val);
        try {
          await promise;
        } catch (e) {}
      };
      reject = async (error) => {
        rej(error);
        try {
          await promise;
        } catch (e) {}
      };
    });
    return {
      promise,
      resolve,
      reject
    };
  }
  var DataRouterContext = React22.createContext(null);
  DataRouterContext.displayName = "DataRouter";
  var DataRouterStateContext = React22.createContext(null);
  DataRouterStateContext.displayName = "DataRouterState";
  var RSCRouterContext = React22.createContext(false);
  function useIsRSCRouterContext() {
    return React22.useContext(RSCRouterContext);
  }
  var ViewTransitionContext = React22.createContext({
    isTransitioning: false
  });
  ViewTransitionContext.displayName = "ViewTransition";
  var FetchersContext = React22.createContext(/* @__PURE__ */ new Map);
  FetchersContext.displayName = "Fetchers";
  var AwaitContext = React22.createContext(null);
  AwaitContext.displayName = "Await";
  var NavigationContext = React22.createContext(null);
  NavigationContext.displayName = "Navigation";
  var LocationContext = React22.createContext(null);
  LocationContext.displayName = "Location";
  var RouteContext = React22.createContext({
    outlet: null,
    matches: [],
    isDataRoute: false
  });
  RouteContext.displayName = "Route";
  var RouteErrorContext = React22.createContext(null);
  RouteErrorContext.displayName = "RouteError";
  var ENABLE_DEV_WARNINGS = true;
  function useHref(to, { relative } = {}) {
    invariant2(useInRouterContext(), `useHref() may be used only in the context of a <Router> component.`);
    let { basename, navigator: navigator2 } = React3.useContext(NavigationContext);
    let { hash, pathname, search } = useResolvedPath(to, { relative });
    let joinedPathname = pathname;
    if (basename !== "/") {
      joinedPathname = pathname === "/" ? basename : joinPaths([basename, pathname]);
    }
    return navigator2.createHref({ pathname: joinedPathname, search, hash });
  }
  function useInRouterContext() {
    return React3.useContext(LocationContext) != null;
  }
  function useLocation() {
    invariant2(useInRouterContext(), `useLocation() may be used only in the context of a <Router> component.`);
    return React3.useContext(LocationContext).location;
  }
  function useNavigationType() {
    return React3.useContext(LocationContext).navigationType;
  }
  function useMatch(pattern) {
    invariant2(useInRouterContext(), `useMatch() may be used only in the context of a <Router> component.`);
    let { pathname } = useLocation();
    return React3.useMemo(() => matchPath(pattern, decodePath(pathname)), [pathname, pattern]);
  }
  var navigateEffectWarning = `You should call navigate() in a React.useEffect(), not when your component is first rendered.`;
  function useIsomorphicLayoutEffect2(cb) {
    let isStatic = React3.useContext(NavigationContext).static;
    if (!isStatic) {
      React3.useLayoutEffect(cb);
    }
  }
  function useNavigate() {
    let { isDataRoute } = React3.useContext(RouteContext);
    return isDataRoute ? useNavigateStable() : useNavigateUnstable();
  }
  function useNavigateUnstable() {
    invariant2(useInRouterContext(), `useNavigate() may be used only in the context of a <Router> component.`);
    let dataRouterContext = React3.useContext(DataRouterContext);
    let { basename, navigator: navigator2 } = React3.useContext(NavigationContext);
    let { matches } = React3.useContext(RouteContext);
    let { pathname: locationPathname } = useLocation();
    let routePathnamesJson = JSON.stringify(getResolveToMatches(matches));
    let activeRef = React3.useRef(false);
    useIsomorphicLayoutEffect2(() => {
      activeRef.current = true;
    });
    let navigate = React3.useCallback((to, options = {}) => {
      warning2(activeRef.current, navigateEffectWarning);
      if (!activeRef.current)
        return;
      if (typeof to === "number") {
        navigator2.go(to);
        return;
      }
      let path = resolveTo(to, JSON.parse(routePathnamesJson), locationPathname, options.relative === "path");
      if (dataRouterContext == null && basename !== "/") {
        path.pathname = path.pathname === "/" ? basename : joinPaths([basename, path.pathname]);
      }
      (options.replace ? navigator2.replace : navigator2.push)(path, options.state, options);
    }, [
      basename,
      navigator2,
      routePathnamesJson,
      locationPathname,
      dataRouterContext
    ]);
    return navigate;
  }
  var OutletContext = React3.createContext(null);
  function useOutletContext() {
    return React3.useContext(OutletContext);
  }
  function useOutlet(context) {
    let outlet = React3.useContext(RouteContext).outlet;
    if (outlet) {
      return /* @__PURE__ */ React3.createElement(OutletContext.Provider, { value: context }, outlet);
    }
    return outlet;
  }
  function useParams() {
    let { matches } = React3.useContext(RouteContext);
    let routeMatch = matches[matches.length - 1];
    return routeMatch ? routeMatch.params : {};
  }
  function useResolvedPath(to, { relative } = {}) {
    let { matches } = React3.useContext(RouteContext);
    let { pathname: locationPathname } = useLocation();
    let routePathnamesJson = JSON.stringify(getResolveToMatches(matches));
    return React3.useMemo(() => resolveTo(to, JSON.parse(routePathnamesJson), locationPathname, relative === "path"), [to, routePathnamesJson, locationPathname, relative]);
  }
  function useRoutes(routes, locationArg) {
    return useRoutesImpl(routes, locationArg);
  }
  function useRoutesImpl(routes, locationArg, dataRouterState, future) {
    invariant2(useInRouterContext(), `useRoutes() may be used only in the context of a <Router> component.`);
    let { navigator: navigator2 } = React3.useContext(NavigationContext);
    let { matches: parentMatches } = React3.useContext(RouteContext);
    let routeMatch = parentMatches[parentMatches.length - 1];
    let parentParams = routeMatch ? routeMatch.params : {};
    let parentPathname = routeMatch ? routeMatch.pathname : "/";
    let parentPathnameBase = routeMatch ? routeMatch.pathnameBase : "/";
    let parentRoute = routeMatch && routeMatch.route;
    if (ENABLE_DEV_WARNINGS) {
      let parentPath = parentRoute && parentRoute.path || "";
      warningOnce(parentPathname, !parentRoute || parentPath.endsWith("*") || parentPath.endsWith("*?"), `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${parentPathname}" (under <Route path="${parentPath}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${parentPath}"> to <Route path="${parentPath === "/" ? "*" : `${parentPath}/*`}">.`);
    }
    let locationFromContext = useLocation();
    let location2;
    if (locationArg) {
      let parsedLocationArg = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
      invariant2(parentPathnameBase === "/" || _optionalChain([parsedLocationArg, "access", (_63) => _63.pathname, "optionalAccess", (_64) => _64.startsWith, "call", (_65) => _65(parentPathnameBase)]), `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${parentPathnameBase}" but pathname "${parsedLocationArg.pathname}" was given in the \`location\` prop.`);
      location2 = parsedLocationArg;
    } else {
      location2 = locationFromContext;
    }
    let pathname = location2.pathname || "/";
    let remainingPathname = pathname;
    if (parentPathnameBase !== "/") {
      let parentSegments = parentPathnameBase.replace(/^\//, "").split("/");
      let segments = pathname.replace(/^\//, "").split("/");
      remainingPathname = "/" + segments.slice(parentSegments.length).join("/");
    }
    let matches = matchRoutes(routes, { pathname: remainingPathname });
    if (ENABLE_DEV_WARNINGS) {
      warning2(parentRoute || matches != null, `No routes matched location "${location2.pathname}${location2.search}${location2.hash}" `);
      warning2(matches == null || matches[matches.length - 1].route.element !== undefined || matches[matches.length - 1].route.Component !== undefined || matches[matches.length - 1].route.lazy !== undefined, `Matched leaf route at location "${location2.pathname}${location2.search}${location2.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);
    }
    let renderedMatches = _renderMatches(matches && matches.map((match) => Object.assign({}, match, {
      params: Object.assign({}, parentParams, match.params),
      pathname: joinPaths([
        parentPathnameBase,
        navigator2.encodeLocation ? navigator2.encodeLocation(match.pathname).pathname : match.pathname
      ]),
      pathnameBase: match.pathnameBase === "/" ? parentPathnameBase : joinPaths([
        parentPathnameBase,
        navigator2.encodeLocation ? navigator2.encodeLocation(match.pathnameBase).pathname : match.pathnameBase
      ])
    })), parentMatches, dataRouterState, future);
    if (locationArg && renderedMatches) {
      return /* @__PURE__ */ React3.createElement(LocationContext.Provider, {
        value: {
          location: {
            pathname: "/",
            search: "",
            hash: "",
            state: null,
            key: "default",
            ...location2
          },
          navigationType: "POP"
        }
      }, renderedMatches);
    }
    return renderedMatches;
  }
  function DefaultErrorComponent() {
    let error = useRouteError();
    let message = isRouteErrorResponse(error) ? `${error.status} ${error.statusText}` : error instanceof Error ? error.message : JSON.stringify(error);
    let stack = error instanceof Error ? error.stack : null;
    let lightgrey = "rgba(200,200,200, 0.5)";
    let preStyles = { padding: "0.5rem", backgroundColor: lightgrey };
    let codeStyles = { padding: "2px 4px", backgroundColor: lightgrey };
    let devInfo = null;
    if (ENABLE_DEV_WARNINGS) {
      console.error("Error handled by React Router default ErrorBoundary:", error);
      devInfo = /* @__PURE__ */ React3.createElement(React3.Fragment, null, /* @__PURE__ */ React3.createElement("p", null, "\uD83D\uDCBF Hey developer \uD83D\uDC4B"), /* @__PURE__ */ React3.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /* @__PURE__ */ React3.createElement("code", { style: codeStyles }, "ErrorBoundary"), " or", " ", /* @__PURE__ */ React3.createElement("code", { style: codeStyles }, "errorElement"), " prop on your route."));
    }
    return /* @__PURE__ */ React3.createElement(React3.Fragment, null, /* @__PURE__ */ React3.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ React3.createElement("h3", { style: { fontStyle: "italic" } }, message), stack ? /* @__PURE__ */ React3.createElement("pre", { style: preStyles }, stack) : null, devInfo);
  }
  var defaultErrorElement = /* @__PURE__ */ React3.createElement(DefaultErrorComponent, null);
  var RenderErrorBoundary = class extends React3.Component {
    constructor(props) {
      super(props);
      this.state = {
        location: props.location,
        revalidation: props.revalidation,
        error: props.error
      };
    }
    static getDerivedStateFromError(error) {
      return { error };
    }
    static getDerivedStateFromProps(props, state) {
      if (state.location !== props.location || state.revalidation !== "idle" && props.revalidation === "idle") {
        return {
          error: props.error,
          location: props.location,
          revalidation: props.revalidation
        };
      }
      return {
        error: props.error !== undefined ? props.error : state.error,
        location: state.location,
        revalidation: props.revalidation || state.revalidation
      };
    }
    componentDidCatch(error, errorInfo) {
      console.error("React Router caught the following error during render", error, errorInfo);
    }
    render() {
      return this.state.error !== undefined ? /* @__PURE__ */ React3.createElement(RouteContext.Provider, { value: this.props.routeContext }, /* @__PURE__ */ React3.createElement(RouteErrorContext.Provider, {
        value: this.state.error,
        children: this.props.component
      })) : this.props.children;
    }
  };
  function RenderedRoute({ routeContext, match, children }) {
    let dataRouterContext = React3.useContext(DataRouterContext);
    if (dataRouterContext && dataRouterContext.static && dataRouterContext.staticContext && (match.route.errorElement || match.route.ErrorBoundary)) {
      dataRouterContext.staticContext._deepestRenderedBoundaryId = match.route.id;
    }
    return /* @__PURE__ */ React3.createElement(RouteContext.Provider, { value: routeContext }, children);
  }
  function _renderMatches(matches, parentMatches = [], dataRouterState = null, future = null) {
    if (matches == null) {
      if (!dataRouterState) {
        return null;
      }
      if (dataRouterState.errors) {
        matches = dataRouterState.matches;
      } else if (parentMatches.length === 0 && !dataRouterState.initialized && dataRouterState.matches.length > 0) {
        matches = dataRouterState.matches;
      } else {
        return null;
      }
    }
    let renderedMatches = matches;
    let errors = _optionalChain([dataRouterState, "optionalAccess", (_66) => _66.errors]);
    if (errors != null) {
      let errorIndex = renderedMatches.findIndex((m) => m.route.id && _optionalChain([errors, "optionalAccess", (_67) => _67[m.route.id]]) !== undefined);
      invariant2(errorIndex >= 0, `Could not find a matching route for errors on route IDs: ${Object.keys(errors).join(",")}`);
      renderedMatches = renderedMatches.slice(0, Math.min(renderedMatches.length, errorIndex + 1));
    }
    let renderFallback = false;
    let fallbackIndex = -1;
    if (dataRouterState) {
      for (let i = 0;i < renderedMatches.length; i++) {
        let match = renderedMatches[i];
        if (match.route.HydrateFallback || match.route.hydrateFallbackElement) {
          fallbackIndex = i;
        }
        if (match.route.id) {
          let { loaderData, errors: errors2 } = dataRouterState;
          let needsToRunLoader = match.route.loader && !loaderData.hasOwnProperty(match.route.id) && (!errors2 || errors2[match.route.id] === undefined);
          if (match.route.lazy || needsToRunLoader) {
            renderFallback = true;
            if (fallbackIndex >= 0) {
              renderedMatches = renderedMatches.slice(0, fallbackIndex + 1);
            } else {
              renderedMatches = [renderedMatches[0]];
            }
            break;
          }
        }
      }
    }
    return renderedMatches.reduceRight((outlet, match, index) => {
      let error;
      let shouldRenderHydrateFallback = false;
      let errorElement = null;
      let hydrateFallbackElement = null;
      if (dataRouterState) {
        error = errors && match.route.id ? errors[match.route.id] : undefined;
        errorElement = match.route.errorElement || defaultErrorElement;
        if (renderFallback) {
          if (fallbackIndex < 0 && index === 0) {
            warningOnce("route-fallback", false, "No `HydrateFallback` element provided to render during initial hydration");
            shouldRenderHydrateFallback = true;
            hydrateFallbackElement = null;
          } else if (fallbackIndex === index) {
            shouldRenderHydrateFallback = true;
            hydrateFallbackElement = match.route.hydrateFallbackElement || null;
          }
        }
      }
      let matches2 = parentMatches.concat(renderedMatches.slice(0, index + 1));
      let getChildren = () => {
        let children;
        if (error) {
          children = errorElement;
        } else if (shouldRenderHydrateFallback) {
          children = hydrateFallbackElement;
        } else if (match.route.Component) {
          children = /* @__PURE__ */ React3.createElement(match.route.Component, null);
        } else if (match.route.element) {
          children = match.route.element;
        } else {
          children = outlet;
        }
        return /* @__PURE__ */ React3.createElement(RenderedRoute, {
          match,
          routeContext: {
            outlet,
            matches: matches2,
            isDataRoute: dataRouterState != null
          },
          children
        });
      };
      return dataRouterState && (match.route.ErrorBoundary || match.route.errorElement || index === 0) ? /* @__PURE__ */ React3.createElement(RenderErrorBoundary, {
        location: dataRouterState.location,
        revalidation: dataRouterState.revalidation,
        component: errorElement,
        error,
        children: getChildren(),
        routeContext: { outlet: null, matches: matches2, isDataRoute: true }
      }) : getChildren();
    }, null);
  }
  function getDataRouterConsoleError(hookName) {
    return `${hookName} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
  }
  function useDataRouterContext(hookName) {
    let ctx = React3.useContext(DataRouterContext);
    invariant2(ctx, getDataRouterConsoleError(hookName));
    return ctx;
  }
  function useDataRouterState(hookName) {
    let state = React3.useContext(DataRouterStateContext);
    invariant2(state, getDataRouterConsoleError(hookName));
    return state;
  }
  function useRouteContext(hookName) {
    let route = React3.useContext(RouteContext);
    invariant2(route, getDataRouterConsoleError(hookName));
    return route;
  }
  function useCurrentRouteId(hookName) {
    let route = useRouteContext(hookName);
    let thisRoute = route.matches[route.matches.length - 1];
    invariant2(thisRoute.route.id, `${hookName} can only be used on routes that contain a unique "id"`);
    return thisRoute.route.id;
  }
  function useRouteId() {
    return useCurrentRouteId("useRouteId");
  }
  function useNavigation() {
    let state = useDataRouterState("useNavigation");
    return state.navigation;
  }
  function useRevalidator() {
    let dataRouterContext = useDataRouterContext("useRevalidator");
    let state = useDataRouterState("useRevalidator");
    let revalidate = React3.useCallback(async () => {
      await dataRouterContext.router.revalidate();
    }, [dataRouterContext.router]);
    return React3.useMemo(() => ({ revalidate, state: state.revalidation }), [revalidate, state.revalidation]);
  }
  function useMatches() {
    let { matches, loaderData } = useDataRouterState("useMatches");
    return React3.useMemo(() => matches.map((m) => convertRouteMatchToUiMatch(m, loaderData)), [matches, loaderData]);
  }
  function useLoaderData() {
    let state = useDataRouterState("useLoaderData");
    let routeId = useCurrentRouteId("useLoaderData");
    return state.loaderData[routeId];
  }
  function useRouteLoaderData(routeId) {
    let state = useDataRouterState("useRouteLoaderData");
    return state.loaderData[routeId];
  }
  function useActionData() {
    let state = useDataRouterState("useActionData");
    let routeId = useCurrentRouteId("useLoaderData");
    return state.actionData ? state.actionData[routeId] : undefined;
  }
  function useRouteError() {
    let error = React3.useContext(RouteErrorContext);
    let state = useDataRouterState("useRouteError");
    let routeId = useCurrentRouteId("useRouteError");
    if (error !== undefined) {
      return error;
    }
    return _optionalChain([state, "access", (_68) => _68.errors, "optionalAccess", (_69) => _69[routeId]]);
  }
  function useAsyncValue() {
    let value = React3.useContext(AwaitContext);
    return _optionalChain([value, "optionalAccess", (_70) => _70._data]);
  }
  function useAsyncError() {
    let value = React3.useContext(AwaitContext);
    return _optionalChain([value, "optionalAccess", (_71) => _71._error]);
  }
  var blockerId = 0;
  function useBlocker(shouldBlock) {
    let { router, basename } = useDataRouterContext("useBlocker");
    let state = useDataRouterState("useBlocker");
    let [blockerKey, setBlockerKey] = React3.useState("");
    let blockerFunction = React3.useCallback((arg) => {
      if (typeof shouldBlock !== "function") {
        return !!shouldBlock;
      }
      if (basename === "/") {
        return shouldBlock(arg);
      }
      let { currentLocation, nextLocation, historyAction } = arg;
      return shouldBlock({
        currentLocation: {
          ...currentLocation,
          pathname: stripBasename(currentLocation.pathname, basename) || currentLocation.pathname
        },
        nextLocation: {
          ...nextLocation,
          pathname: stripBasename(nextLocation.pathname, basename) || nextLocation.pathname
        },
        historyAction
      });
    }, [basename, shouldBlock]);
    React3.useEffect(() => {
      let key = String(++blockerId);
      setBlockerKey(key);
      return () => router.deleteBlocker(key);
    }, [router]);
    React3.useEffect(() => {
      if (blockerKey !== "") {
        router.getBlocker(blockerKey, blockerFunction);
      }
    }, [router, blockerKey, blockerFunction]);
    return blockerKey && state.blockers.has(blockerKey) ? state.blockers.get(blockerKey) : IDLE_BLOCKER;
  }
  function useNavigateStable() {
    let { router } = useDataRouterContext("useNavigate");
    let id3 = useCurrentRouteId("useNavigate");
    let activeRef = React3.useRef(false);
    useIsomorphicLayoutEffect2(() => {
      activeRef.current = true;
    });
    let navigate = React3.useCallback(async (to, options = {}) => {
      warning2(activeRef.current, navigateEffectWarning);
      if (!activeRef.current)
        return;
      if (typeof to === "number") {
        router.navigate(to);
      } else {
        await router.navigate(to, { fromRouteId: id3, ...options });
      }
    }, [router, id3]);
    return navigate;
  }
  var alreadyWarned = {};
  function warningOnce(key, cond, message) {
    if (!cond && !alreadyWarned[key]) {
      alreadyWarned[key] = true;
      warning2(false, message);
    }
  }
  async function loadRouteModule(route, routeModulesCache) {
    if (route.id in routeModulesCache) {
      return routeModulesCache[route.id];
    }
    try {
      let routeModule = await Promise.resolve().then(() => _interopRequireWildcard(__require(route.module)));
      routeModulesCache[route.id] = routeModule;
      return routeModule;
    } catch (error) {
      console.error(`Error loading route module \`${route.module}\`, reloading page...`);
      console.error(error);
      if (window.__reactRouterContext && window.__reactRouterContext.isSpaMode && undefined) {}
      window.location.reload();
      return new Promise(() => {});
    }
  }
  function getKeyedLinksForMatches(matches, routeModules, manifest) {
    let descriptors = matches.map((match) => {
      let module2 = routeModules[match.route.id];
      let route = manifest.routes[match.route.id];
      return [
        route && route.css ? route.css.map((href) => ({ rel: "stylesheet", href })) : [],
        _optionalChain([module2, "optionalAccess", (_72) => _72.links, "optionalCall", (_73) => _73()]) || []
      ];
    }).flat(2);
    let preloads = getModuleLinkHrefs(matches, manifest);
    return dedupeLinkDescriptors(descriptors, preloads);
  }
  function getRouteCssDescriptors(route) {
    if (!route.css)
      return [];
    return route.css.map((href) => ({ rel: "stylesheet", href }));
  }
  async function prefetchRouteCss(route) {
    if (!route.css)
      return;
    let descriptors = getRouteCssDescriptors(route);
    await Promise.all(descriptors.map(prefetchStyleLink));
  }
  async function prefetchStyleLinks(route, routeModule) {
    if (!route.css && !routeModule.links || !isPreloadSupported())
      return;
    let descriptors = [];
    if (route.css) {
      descriptors.push(...getRouteCssDescriptors(route));
    }
    if (routeModule.links) {
      descriptors.push(...routeModule.links());
    }
    if (descriptors.length === 0)
      return;
    let styleLinks = [];
    for (let descriptor of descriptors) {
      if (!isPageLinkDescriptor(descriptor) && descriptor.rel === "stylesheet") {
        styleLinks.push({
          ...descriptor,
          rel: "preload",
          as: "style"
        });
      }
    }
    await Promise.all(styleLinks.map(prefetchStyleLink));
  }
  async function prefetchStyleLink(descriptor) {
    return new Promise((resolve) => {
      if (descriptor.media && !window.matchMedia(descriptor.media).matches || document.querySelector(`link[rel="stylesheet"][href="${descriptor.href}"]`)) {
        return resolve();
      }
      let link = document.createElement("link");
      Object.assign(link, descriptor);
      function removeLink() {
        if (document.head.contains(link)) {
          document.head.removeChild(link);
        }
      }
      link.onload = () => {
        removeLink();
        resolve();
      };
      link.onerror = () => {
        removeLink();
        resolve();
      };
      document.head.appendChild(link);
    });
  }
  function isPageLinkDescriptor(object) {
    return object != null && typeof object.page === "string";
  }
  function isHtmlLinkDescriptor(object) {
    if (object == null) {
      return false;
    }
    if (object.href == null) {
      return object.rel === "preload" && typeof object.imageSrcSet === "string" && typeof object.imageSizes === "string";
    }
    return typeof object.rel === "string" && typeof object.href === "string";
  }
  async function getKeyedPrefetchLinks(matches, manifest, routeModules) {
    let links = await Promise.all(matches.map(async (match) => {
      let route = manifest.routes[match.route.id];
      if (route) {
        let mod = await loadRouteModule(route, routeModules);
        return mod.links ? mod.links() : [];
      }
      return [];
    }));
    return dedupeLinkDescriptors(links.flat(1).filter(isHtmlLinkDescriptor).filter((link) => link.rel === "stylesheet" || link.rel === "preload").map((link) => link.rel === "stylesheet" ? { ...link, rel: "prefetch", as: "style" } : { ...link, rel: "prefetch" }));
  }
  function getNewMatchesForLinks(page, nextMatches, currentMatches, manifest, location2, mode) {
    let isNew = (match, index) => {
      if (!currentMatches[index])
        return true;
      return match.route.id !== currentMatches[index].route.id;
    };
    let matchPathChanged = (match, index) => {
      return currentMatches[index].pathname !== match.pathname || _optionalChain([currentMatches, "access", (_74) => _74[index], "access", (_75) => _75.route, "access", (_76) => _76.path, "optionalAccess", (_77) => _77.endsWith, "call", (_78) => _78("*")]) && currentMatches[index].params["*"] !== match.params["*"];
    };
    if (mode === "assets") {
      return nextMatches.filter((match, index) => isNew(match, index) || matchPathChanged(match, index));
    }
    if (mode === "data") {
      return nextMatches.filter((match, index) => {
        let manifestRoute = manifest.routes[match.route.id];
        if (!manifestRoute || !manifestRoute.hasLoader) {
          return false;
        }
        if (isNew(match, index) || matchPathChanged(match, index)) {
          return true;
        }
        if (match.route.shouldRevalidate) {
          let routeChoice = match.route.shouldRevalidate({
            currentUrl: new URL(location2.pathname + location2.search + location2.hash, window.origin),
            currentParams: _optionalChain([currentMatches, "access", (_79) => _79[0], "optionalAccess", (_80) => _80.params]) || {},
            nextUrl: new URL(page, window.origin),
            nextParams: match.params,
            defaultShouldRevalidate: true
          });
          if (typeof routeChoice === "boolean") {
            return routeChoice;
          }
        }
        return true;
      });
    }
    return [];
  }
  function getModuleLinkHrefs(matches, manifest, { includeHydrateFallback } = {}) {
    return dedupeHrefs(matches.map((match) => {
      let route = manifest.routes[match.route.id];
      if (!route)
        return [];
      let hrefs = [route.module];
      if (route.clientActionModule) {
        hrefs = hrefs.concat(route.clientActionModule);
      }
      if (route.clientLoaderModule) {
        hrefs = hrefs.concat(route.clientLoaderModule);
      }
      if (includeHydrateFallback && route.hydrateFallbackModule) {
        hrefs = hrefs.concat(route.hydrateFallbackModule);
      }
      if (route.imports) {
        hrefs = hrefs.concat(route.imports);
      }
      return hrefs;
    }).flat(1));
  }
  function dedupeHrefs(hrefs) {
    return [...new Set(hrefs)];
  }
  function sortKeys(obj) {
    let sorted = {};
    let keys = Object.keys(obj).sort();
    for (let key of keys) {
      sorted[key] = obj[key];
    }
    return sorted;
  }
  function dedupeLinkDescriptors(descriptors, preloads) {
    let set = /* @__PURE__ */ new Set;
    let preloadsSet = new Set(preloads);
    return descriptors.reduce((deduped, descriptor) => {
      let alreadyModulePreload = preloads && !isPageLinkDescriptor(descriptor) && descriptor.as === "script" && descriptor.href && preloadsSet.has(descriptor.href);
      if (alreadyModulePreload) {
        return deduped;
      }
      let key = JSON.stringify(sortKeys(descriptor));
      if (!set.has(key)) {
        set.add(key);
        deduped.push({ key, link: descriptor });
      }
      return deduped;
    }, []);
  }
  var _isPreloadSupported;
  function isPreloadSupported() {
    if (_isPreloadSupported !== undefined) {
      return _isPreloadSupported;
    }
    let el = document.createElement("link");
    _isPreloadSupported = el.relList.supports("preload");
    el = null;
    return _isPreloadSupported;
  }
  var alreadyWarned2 = {};
  function warnOnce2(condition, message) {
    if (!condition && !alreadyWarned2[message]) {
      alreadyWarned2[message] = true;
      console.warn(message);
    }
  }
  function RemixRootDefaultHydrateFallback() {
    return /* @__PURE__ */ React4.createElement(BoundaryShell, { title: "Loading...", renderScripts: true }, ENABLE_DEV_WARNINGS ? /* @__PURE__ */ React4.createElement("script", {
      dangerouslySetInnerHTML: {
        __html: `
              console.log(
                "\uD83D\uDCBF Hey developer \uD83D\uDC4B. You can provide a way better UX than this " +
                "when your app is loading JS modules and/or running \`clientLoader\` " +
                "functions. Check out https://reactrouter.com/start/framework/route-module#hydratefallback " +
                "for more information."
              );
            `
      }
    }) : null);
  }
  function groupRoutesByParentId(manifest) {
    let routes = {};
    Object.values(manifest).forEach((route) => {
      if (route) {
        let parentId = route.parentId || "";
        if (!routes[parentId]) {
          routes[parentId] = [];
        }
        routes[parentId].push(route);
      }
    });
    return routes;
  }
  function getRouteComponents(route, routeModule, isSpaMode) {
    let Component3 = getRouteModuleComponent(routeModule);
    let HydrateFallback = routeModule.HydrateFallback && (!isSpaMode || route.id === "root") ? routeModule.HydrateFallback : route.id === "root" ? RemixRootDefaultHydrateFallback : undefined;
    let ErrorBoundary = routeModule.ErrorBoundary ? routeModule.ErrorBoundary : route.id === "root" ? () => /* @__PURE__ */ React5.createElement(RemixRootDefaultErrorBoundary, { error: useRouteError() }) : undefined;
    if (route.id === "root" && routeModule.Layout) {
      return {
        ...Component3 ? {
          element: /* @__PURE__ */ React5.createElement(routeModule.Layout, null, /* @__PURE__ */ React5.createElement(Component3, null))
        } : { Component: Component3 },
        ...ErrorBoundary ? {
          errorElement: /* @__PURE__ */ React5.createElement(routeModule.Layout, null, /* @__PURE__ */ React5.createElement(ErrorBoundary, null))
        } : { ErrorBoundary },
        ...HydrateFallback ? {
          hydrateFallbackElement: /* @__PURE__ */ React5.createElement(routeModule.Layout, null, /* @__PURE__ */ React5.createElement(HydrateFallback, null))
        } : { HydrateFallback }
      };
    }
    return { Component: Component3, ErrorBoundary, HydrateFallback };
  }
  function createServerRoutes(manifest, routeModules, future, isSpaMode, parentId = "", routesByParentId = groupRoutesByParentId(manifest), spaModeLazyPromise = Promise.resolve({ Component: () => null })) {
    return (routesByParentId[parentId] || []).map((route) => {
      let routeModule = routeModules[route.id];
      invariant22(routeModule, "No `routeModule` available to create server routes");
      let dataRoute = {
        ...getRouteComponents(route, routeModule, isSpaMode),
        caseSensitive: route.caseSensitive,
        id: route.id,
        index: route.index,
        path: route.path,
        handle: routeModule.handle,
        lazy: isSpaMode ? () => spaModeLazyPromise : undefined,
        loader: route.hasLoader || route.hasClientLoader ? () => null : undefined
      };
      let children = createServerRoutes(manifest, routeModules, future, isSpaMode, route.id, routesByParentId, spaModeLazyPromise);
      if (children.length > 0)
        dataRoute.children = children;
      return dataRoute;
    });
  }
  function createClientRoutesWithHMRRevalidationOptOut(needsRevalidation, manifest, routeModulesCache, initialState, ssr, isSpaMode) {
    return createClientRoutes(manifest, routeModulesCache, initialState, ssr, isSpaMode, "", groupRoutesByParentId(manifest), needsRevalidation);
  }
  function preventInvalidServerHandlerCall(type, route) {
    if (type === "loader" && !route.hasLoader || type === "action" && !route.hasAction) {
      let fn = type === "action" ? "serverAction()" : "serverLoader()";
      let msg = `You are trying to call ${fn} on a route that does not have a server ${type} (routeId: "${route.id}")`;
      console.error(msg);
      throw new ErrorResponseImpl(400, "Bad Request", new Error(msg), true);
    }
  }
  function noActionDefinedError(type, routeId) {
    let article = type === "clientAction" ? "a" : "an";
    let msg = `Route "${routeId}" does not have ${article} ${type}, but you are trying to submit to it. To fix this, please add ${article} \`${type}\` function to the route`;
    console.error(msg);
    throw new ErrorResponseImpl(405, "Method Not Allowed", new Error(msg), true);
  }
  function createClientRoutes(manifest, routeModulesCache, initialState, ssr, isSpaMode, parentId = "", routesByParentId = groupRoutesByParentId(manifest), needsRevalidation) {
    return (routesByParentId[parentId] || []).map((route) => {
      let routeModule = routeModulesCache[route.id];
      function fetchServerHandler(singleFetch) {
        invariant22(typeof singleFetch === "function", "No single fetch function available for route handler");
        return singleFetch();
      }
      function fetchServerLoader(singleFetch) {
        if (!route.hasLoader)
          return Promise.resolve(null);
        return fetchServerHandler(singleFetch);
      }
      function fetchServerAction(singleFetch) {
        if (!route.hasAction) {
          throw noActionDefinedError("action", route.id);
        }
        return fetchServerHandler(singleFetch);
      }
      function prefetchModule(modulePath) {
        Promise.resolve().then(() => _interopRequireWildcard(__require(modulePath)));
      }
      function prefetchRouteModuleChunks(route2) {
        if (route2.clientActionModule) {
          prefetchModule(route2.clientActionModule);
        }
        if (route2.clientLoaderModule) {
          prefetchModule(route2.clientLoaderModule);
        }
      }
      async function prefetchStylesAndCallHandler(handler) {
        let cachedModule = routeModulesCache[route.id];
        let linkPrefetchPromise = cachedModule ? prefetchStyleLinks(route, cachedModule) : Promise.resolve();
        try {
          return handler();
        } finally {
          await linkPrefetchPromise;
        }
      }
      let dataRoute = {
        id: route.id,
        index: route.index,
        path: route.path
      };
      if (routeModule) {
        Object.assign(dataRoute, {
          ...dataRoute,
          ...getRouteComponents(route, routeModule, isSpaMode),
          unstable_middleware: routeModule.unstable_clientMiddleware,
          handle: routeModule.handle,
          shouldRevalidate: getShouldRevalidateFunction(dataRoute.path, routeModule, route, ssr, needsRevalidation)
        });
        let hasInitialData = initialState && initialState.loaderData && route.id in initialState.loaderData;
        let initialData = hasInitialData ? _optionalChain([initialState, "optionalAccess", (_81) => _81.loaderData, "optionalAccess", (_82) => _82[route.id]]) : undefined;
        let hasInitialError = initialState && initialState.errors && route.id in initialState.errors;
        let initialError = hasInitialError ? _optionalChain([initialState, "optionalAccess", (_83) => _83.errors, "optionalAccess", (_84) => _84[route.id]]) : undefined;
        let isHydrationRequest = needsRevalidation == null && (_optionalChain([routeModule, "access", (_85) => _85.clientLoader, "optionalAccess", (_86) => _86.hydrate]) === true || !route.hasLoader);
        dataRoute.loader = async ({ request, params, context }, singleFetch) => {
          try {
            let result = await prefetchStylesAndCallHandler(async () => {
              invariant22(routeModule, "No `routeModule` available for critical-route loader");
              if (!routeModule.clientLoader) {
                return fetchServerLoader(singleFetch);
              }
              return routeModule.clientLoader({
                request,
                params,
                context,
                async serverLoader() {
                  preventInvalidServerHandlerCall("loader", route);
                  if (isHydrationRequest) {
                    if (hasInitialData) {
                      return initialData;
                    }
                    if (hasInitialError) {
                      throw initialError;
                    }
                  }
                  return fetchServerLoader(singleFetch);
                }
              });
            });
            return result;
          } finally {
            isHydrationRequest = false;
          }
        };
        dataRoute.loader.hydrate = shouldHydrateRouteLoader(route.id, routeModule.clientLoader, route.hasLoader, isSpaMode);
        dataRoute.action = ({ request, params, context }, singleFetch) => {
          return prefetchStylesAndCallHandler(async () => {
            invariant22(routeModule, "No `routeModule` available for critical-route action");
            if (!routeModule.clientAction) {
              if (isSpaMode) {
                throw noActionDefinedError("clientAction", route.id);
              }
              return fetchServerAction(singleFetch);
            }
            return routeModule.clientAction({
              request,
              params,
              context,
              async serverAction() {
                preventInvalidServerHandlerCall("action", route);
                return fetchServerAction(singleFetch);
              }
            });
          });
        };
      } else {
        if (!route.hasClientLoader) {
          dataRoute.loader = (_, singleFetch) => prefetchStylesAndCallHandler(() => {
            return fetchServerLoader(singleFetch);
          });
        }
        if (!route.hasClientAction) {
          dataRoute.action = (_, singleFetch) => prefetchStylesAndCallHandler(() => {
            if (isSpaMode) {
              throw noActionDefinedError("clientAction", route.id);
            }
            return fetchServerAction(singleFetch);
          });
        }
        let lazyRoutePromise;
        async function getLazyRoute() {
          if (lazyRoutePromise) {
            return await lazyRoutePromise;
          }
          lazyRoutePromise = (async () => {
            if (route.clientLoaderModule || route.clientActionModule) {
              await new Promise((resolve) => setTimeout(resolve, 0));
            }
            let routeModulePromise = loadRouteModuleWithBlockingLinks(route, routeModulesCache);
            prefetchRouteModuleChunks(route);
            return await routeModulePromise;
          })();
          return await lazyRoutePromise;
        }
        dataRoute.lazy = {
          loader: route.hasClientLoader ? async () => {
            let { clientLoader } = route.clientLoaderModule ? await Promise.resolve().then(() => _interopRequireWildcard(__require(route.clientLoaderModule))) : await getLazyRoute();
            invariant22(clientLoader, "No `clientLoader` export found");
            return (args, singleFetch) => clientLoader({
              ...args,
              async serverLoader() {
                preventInvalidServerHandlerCall("loader", route);
                return fetchServerLoader(singleFetch);
              }
            });
          } : undefined,
          action: route.hasClientAction ? async () => {
            let clientActionPromise = route.clientActionModule ? Promise.resolve().then(() => _interopRequireWildcard(__require(route.clientActionModule))) : getLazyRoute();
            prefetchRouteModuleChunks(route);
            let { clientAction } = await clientActionPromise;
            invariant22(clientAction, "No `clientAction` export found");
            return (args, singleFetch) => clientAction({
              ...args,
              async serverAction() {
                preventInvalidServerHandlerCall("action", route);
                return fetchServerAction(singleFetch);
              }
            });
          } : undefined,
          unstable_middleware: route.hasClientMiddleware ? async () => {
            let { unstable_clientMiddleware } = route.clientMiddlewareModule ? await Promise.resolve().then(() => _interopRequireWildcard(__require(route.clientMiddlewareModule))) : await getLazyRoute();
            invariant22(unstable_clientMiddleware, "No `unstable_clientMiddleware` export found");
            return unstable_clientMiddleware;
          } : undefined,
          shouldRevalidate: async () => {
            let lazyRoute = await getLazyRoute();
            return getShouldRevalidateFunction(dataRoute.path, lazyRoute, route, ssr, needsRevalidation);
          },
          handle: async () => (await getLazyRoute()).handle,
          Component: async () => (await getLazyRoute()).Component,
          ErrorBoundary: route.hasErrorBoundary ? async () => (await getLazyRoute()).ErrorBoundary : undefined
        };
      }
      let children = createClientRoutes(manifest, routeModulesCache, initialState, ssr, isSpaMode, route.id, routesByParentId, needsRevalidation);
      if (children.length > 0)
        dataRoute.children = children;
      return dataRoute;
    });
  }
  function getShouldRevalidateFunction(path, route, manifestRoute, ssr, needsRevalidation) {
    if (needsRevalidation) {
      return wrapShouldRevalidateForHdr(manifestRoute.id, route.shouldRevalidate, needsRevalidation);
    }
    if (!ssr && manifestRoute.hasLoader && !manifestRoute.hasClientLoader) {
      let myParams = path ? compilePath(path)[1].map((p) => p.paramName) : [];
      const didParamsChange = (opts) => myParams.some((p) => opts.currentParams[p] !== opts.nextParams[p]);
      if (route.shouldRevalidate) {
        let fn = route.shouldRevalidate;
        return (opts) => fn({
          ...opts,
          defaultShouldRevalidate: didParamsChange(opts)
        });
      } else {
        return (opts) => didParamsChange(opts);
      }
    }
    if (ssr && route.shouldRevalidate) {
      let fn = route.shouldRevalidate;
      return (opts) => fn({ ...opts, defaultShouldRevalidate: true });
    }
    return route.shouldRevalidate;
  }
  function wrapShouldRevalidateForHdr(routeId, routeShouldRevalidate, needsRevalidation) {
    let handledRevalidation = false;
    return (arg) => {
      if (!handledRevalidation) {
        handledRevalidation = true;
        return needsRevalidation.has(routeId);
      }
      return routeShouldRevalidate ? routeShouldRevalidate(arg) : arg.defaultShouldRevalidate;
    };
  }
  async function loadRouteModuleWithBlockingLinks(route, routeModules) {
    let routeModulePromise = loadRouteModule(route, routeModules);
    let prefetchRouteCssPromise = prefetchRouteCss(route);
    let routeModule = await routeModulePromise;
    await Promise.all([
      prefetchRouteCssPromise,
      prefetchStyleLinks(route, routeModule)
    ]);
    return {
      Component: getRouteModuleComponent(routeModule),
      ErrorBoundary: routeModule.ErrorBoundary,
      unstable_clientMiddleware: routeModule.unstable_clientMiddleware,
      clientAction: routeModule.clientAction,
      clientLoader: routeModule.clientLoader,
      handle: routeModule.handle,
      links: routeModule.links,
      meta: routeModule.meta,
      shouldRevalidate: routeModule.shouldRevalidate
    };
  }
  function getRouteModuleComponent(routeModule) {
    if (routeModule.default == null)
      return;
    let isEmptyObject = typeof routeModule.default === "object" && Object.keys(routeModule.default).length === 0;
    if (!isEmptyObject) {
      return routeModule.default;
    }
  }
  function shouldHydrateRouteLoader(routeId, clientLoader, hasLoader, isSpaMode) {
    return isSpaMode && routeId !== "root" || clientLoader != null && (clientLoader.hydrate === true || hasLoader !== true);
  }
  var nextPaths = /* @__PURE__ */ new Set;
  var discoveredPathsMaxSize = 1000;
  var discoveredPaths = /* @__PURE__ */ new Set;
  var URL_LIMIT = 7680;
  function isFogOfWarEnabled(routeDiscovery, ssr) {
    return routeDiscovery.mode === "lazy" && ssr === true;
  }
  function getPartialManifest({ sri, ...manifest }, router) {
    let routeIds = new Set(router.state.matches.map((m) => m.route.id));
    let segments = router.state.location.pathname.split("/").filter(Boolean);
    let paths = ["/"];
    segments.pop();
    while (segments.length > 0) {
      paths.push(`/${segments.join("/")}`);
      segments.pop();
    }
    paths.forEach((path) => {
      let matches = matchRoutes(router.routes, path, router.basename);
      if (matches) {
        matches.forEach((m) => routeIds.add(m.route.id));
      }
    });
    let initialRoutes = [...routeIds].reduce((acc, id3) => Object.assign(acc, { [id3]: manifest.routes[id3] }), {});
    return {
      ...manifest,
      routes: initialRoutes,
      sri: sri ? true : undefined
    };
  }
  function getPatchRoutesOnNavigationFunction(manifest, routeModules, ssr, routeDiscovery, isSpaMode, basename) {
    if (!isFogOfWarEnabled(routeDiscovery, ssr)) {
      return;
    }
    return async ({ path, patch, signal, fetcherKey }) => {
      if (discoveredPaths.has(path)) {
        return;
      }
      await fetchAndApplyManifestPatches([path], fetcherKey ? window.location.href : path, manifest, routeModules, ssr, isSpaMode, basename, routeDiscovery.manifestPath, patch, signal);
    };
  }
  function useFogOFWarDiscovery(router, manifest, routeModules, ssr, routeDiscovery, isSpaMode) {
    React6.useEffect(() => {
      if (!isFogOfWarEnabled(routeDiscovery, ssr) || _optionalChain([window, "access", (_87) => _87.navigator, "optionalAccess", (_88) => _88.connection, "optionalAccess", (_89) => _89.saveData]) === true) {
        return;
      }
      function registerElement(el) {
        let path = el.tagName === "FORM" ? el.getAttribute("action") : el.getAttribute("href");
        if (!path) {
          return;
        }
        let pathname = el.tagName === "A" ? el.pathname : new URL(path, window.location.origin).pathname;
        if (!discoveredPaths.has(pathname)) {
          nextPaths.add(pathname);
        }
      }
      async function fetchPatches() {
        document.querySelectorAll("a[data-discover], form[data-discover]").forEach(registerElement);
        let lazyPaths = Array.from(nextPaths.keys()).filter((path) => {
          if (discoveredPaths.has(path)) {
            nextPaths.delete(path);
            return false;
          }
          return true;
        });
        if (lazyPaths.length === 0) {
          return;
        }
        try {
          await fetchAndApplyManifestPatches(lazyPaths, null, manifest, routeModules, ssr, isSpaMode, router.basename, routeDiscovery.manifestPath, router.patchRoutes);
        } catch (e) {
          console.error("Failed to fetch manifest patches", e);
        }
      }
      let debouncedFetchPatches = debounce(fetchPatches, 100);
      fetchPatches();
      let observer = new MutationObserver(() => debouncedFetchPatches());
      observer.observe(document.documentElement, {
        subtree: true,
        childList: true,
        attributes: true,
        attributeFilter: ["data-discover", "href", "action"]
      });
      return () => observer.disconnect();
    }, [ssr, isSpaMode, manifest, routeModules, router, routeDiscovery]);
  }
  function getManifestPath(_manifestPath, basename) {
    let manifestPath = _manifestPath || "/__manifest";
    if (basename == null) {
      return manifestPath;
    }
    return `${basename}${manifestPath}`.replace(/\/+/g, "/");
  }
  var MANIFEST_VERSION_STORAGE_KEY = "react-router-manifest-version";
  async function fetchAndApplyManifestPatches(paths, errorReloadPath, manifest, routeModules, ssr, isSpaMode, basename, manifestPath, patchRoutes, signal) {
    let url = new URL(getManifestPath(manifestPath, basename), window.location.origin);
    paths.sort().forEach((path) => url.searchParams.append("p", path));
    url.searchParams.set("version", manifest.version);
    if (url.toString().length > URL_LIMIT) {
      nextPaths.clear();
      return;
    }
    let serverPatches;
    try {
      let res = await fetch(url, { signal });
      if (!res.ok) {
        throw new Error(`${res.status} ${res.statusText}`);
      } else if (res.status === 204 && res.headers.has("X-Remix-Reload-Document")) {
        if (!errorReloadPath) {
          console.warn("Detected a manifest version mismatch during eager route discovery. The next navigation/fetch to an undiscovered route will result in a new document navigation to sync up with the latest manifest.");
          return;
        }
        if (sessionStorage.getItem(MANIFEST_VERSION_STORAGE_KEY) === manifest.version) {
          console.error("Unable to discover routes due to manifest version mismatch.");
          return;
        }
        sessionStorage.setItem(MANIFEST_VERSION_STORAGE_KEY, manifest.version);
        window.location.href = errorReloadPath;
        console.warn("Detected manifest version mismatch, reloading...");
        await new Promise(() => {});
      } else if (res.status >= 400) {
        throw new Error(await res.text());
      }
      sessionStorage.removeItem(MANIFEST_VERSION_STORAGE_KEY);
      serverPatches = await res.json();
    } catch (e) {
      if (_optionalChain([signal, "optionalAccess", (_90) => _90.aborted]))
        return;
      throw e;
    }
    let knownRoutes = new Set(Object.keys(manifest.routes));
    let patches = Object.values(serverPatches).reduce((acc, route) => {
      if (route && !knownRoutes.has(route.id)) {
        acc[route.id] = route;
      }
      return acc;
    }, {});
    Object.assign(manifest.routes, patches);
    paths.forEach((p) => addToFifoQueue(p, discoveredPaths));
    let parentIds = /* @__PURE__ */ new Set;
    Object.values(patches).forEach((patch) => {
      if (patch && (!patch.parentId || !patches[patch.parentId])) {
        parentIds.add(patch.parentId);
      }
    });
    parentIds.forEach((parentId) => patchRoutes(parentId || null, createClientRoutes(patches, routeModules, null, ssr, isSpaMode, parentId)));
  }
  function addToFifoQueue(path, queue) {
    if (queue.size >= discoveredPathsMaxSize) {
      let first = queue.values().next().value;
      queue.delete(first);
    }
    queue.add(path);
  }
  function debounce(callback, wait) {
    let timeoutId;
    return (...args) => {
      window.clearTimeout(timeoutId);
      timeoutId = window.setTimeout(() => callback(...args), wait);
    };
  }
  function useDataRouterContext2() {
    let context = React7.useContext(DataRouterContext);
    invariant22(context, "You must render this element inside a <DataRouterContext.Provider> element");
    return context;
  }
  function useDataRouterStateContext() {
    let context = React7.useContext(DataRouterStateContext);
    invariant22(context, "You must render this element inside a <DataRouterStateContext.Provider> element");
    return context;
  }
  var FrameworkContext = React7.createContext(undefined);
  FrameworkContext.displayName = "FrameworkContext";
  function useFrameworkContext() {
    let context = React7.useContext(FrameworkContext);
    invariant22(context, "You must render this element inside a <HydratedRouter> element");
    return context;
  }
  function usePrefetchBehavior(prefetch, theirElementProps) {
    let frameworkContext = React7.useContext(FrameworkContext);
    let [maybePrefetch, setMaybePrefetch] = React7.useState(false);
    let [shouldPrefetch, setShouldPrefetch] = React7.useState(false);
    let { onFocus, onBlur, onMouseEnter, onMouseLeave, onTouchStart } = theirElementProps;
    let ref = React7.useRef(null);
    React7.useEffect(() => {
      if (prefetch === "render") {
        setShouldPrefetch(true);
      }
      if (prefetch === "viewport") {
        let callback = (entries) => {
          entries.forEach((entry) => {
            setShouldPrefetch(entry.isIntersecting);
          });
        };
        let observer = new IntersectionObserver(callback, { threshold: 0.5 });
        if (ref.current)
          observer.observe(ref.current);
        return () => {
          observer.disconnect();
        };
      }
    }, [prefetch]);
    React7.useEffect(() => {
      if (maybePrefetch) {
        let id3 = setTimeout(() => {
          setShouldPrefetch(true);
        }, 100);
        return () => {
          clearTimeout(id3);
        };
      }
    }, [maybePrefetch]);
    let setIntent = () => {
      setMaybePrefetch(true);
    };
    let cancelIntent = () => {
      setMaybePrefetch(false);
      setShouldPrefetch(false);
    };
    if (!frameworkContext) {
      return [false, ref, {}];
    }
    if (prefetch !== "intent") {
      return [shouldPrefetch, ref, {}];
    }
    return [
      shouldPrefetch,
      ref,
      {
        onFocus: composeEventHandlers(onFocus, setIntent),
        onBlur: composeEventHandlers(onBlur, cancelIntent),
        onMouseEnter: composeEventHandlers(onMouseEnter, setIntent),
        onMouseLeave: composeEventHandlers(onMouseLeave, cancelIntent),
        onTouchStart: composeEventHandlers(onTouchStart, setIntent)
      }
    ];
  }
  function composeEventHandlers(theirHandler, ourHandler) {
    return (event) => {
      theirHandler && theirHandler(event);
      if (!event.defaultPrevented) {
        ourHandler(event);
      }
    };
  }
  function getActiveMatches(matches, errors, isSpaMode) {
    if (isSpaMode && !isHydrated) {
      return [matches[0]];
    }
    if (errors) {
      let errorIdx = matches.findIndex((m) => errors[m.route.id] !== undefined);
      return matches.slice(0, errorIdx + 1);
    }
    return matches;
  }
  var CRITICAL_CSS_DATA_ATTRIBUTE = "data-react-router-critical-css";
  function Links() {
    let { isSpaMode, manifest, routeModules, criticalCss } = useFrameworkContext();
    let { errors, matches: routerMatches } = useDataRouterStateContext();
    let matches = getActiveMatches(routerMatches, errors, isSpaMode);
    let keyedLinks = React7.useMemo(() => getKeyedLinksForMatches(matches, routeModules, manifest), [matches, routeModules, manifest]);
    return /* @__PURE__ */ React7.createElement(React7.Fragment, null, typeof criticalCss === "string" ? /* @__PURE__ */ React7.createElement("style", {
      ...{ [CRITICAL_CSS_DATA_ATTRIBUTE]: "" },
      dangerouslySetInnerHTML: { __html: criticalCss }
    }) : null, typeof criticalCss === "object" ? /* @__PURE__ */ React7.createElement("link", {
      ...{ [CRITICAL_CSS_DATA_ATTRIBUTE]: "" },
      rel: "stylesheet",
      href: criticalCss.href
    }) : null, keyedLinks.map(({ key, link }) => isPageLinkDescriptor(link) ? /* @__PURE__ */ React7.createElement(PrefetchPageLinks, { key, ...link }) : /* @__PURE__ */ React7.createElement("link", { key, ...link })));
  }
  function PrefetchPageLinks({ page, ...linkProps }) {
    let { router } = useDataRouterContext2();
    let matches = React7.useMemo(() => matchRoutes(router.routes, page, router.basename), [router.routes, page, router.basename]);
    if (!matches) {
      return null;
    }
    return /* @__PURE__ */ React7.createElement(PrefetchPageLinksImpl, { page, matches, ...linkProps });
  }
  function useKeyedPrefetchLinks(matches) {
    let { manifest, routeModules } = useFrameworkContext();
    let [keyedPrefetchLinks, setKeyedPrefetchLinks] = React7.useState([]);
    React7.useEffect(() => {
      let interrupted = false;
      getKeyedPrefetchLinks(matches, manifest, routeModules).then((links) => {
        if (!interrupted) {
          setKeyedPrefetchLinks(links);
        }
      });
      return () => {
        interrupted = true;
      };
    }, [matches, manifest, routeModules]);
    return keyedPrefetchLinks;
  }
  function PrefetchPageLinksImpl({
    page,
    matches: nextMatches,
    ...linkProps
  }) {
    let location2 = useLocation();
    let { manifest, routeModules } = useFrameworkContext();
    let { basename } = useDataRouterContext2();
    let { loaderData, matches } = useDataRouterStateContext();
    let newMatchesForData = React7.useMemo(() => getNewMatchesForLinks(page, nextMatches, matches, manifest, location2, "data"), [page, nextMatches, matches, manifest, location2]);
    let newMatchesForAssets = React7.useMemo(() => getNewMatchesForLinks(page, nextMatches, matches, manifest, location2, "assets"), [page, nextMatches, matches, manifest, location2]);
    let dataHrefs = React7.useMemo(() => {
      if (page === location2.pathname + location2.search + location2.hash) {
        return [];
      }
      let routesParams = /* @__PURE__ */ new Set;
      let foundOptOutRoute = false;
      nextMatches.forEach((m) => {
        let manifestRoute = manifest.routes[m.route.id];
        if (!manifestRoute || !manifestRoute.hasLoader) {
          return;
        }
        if (!newMatchesForData.some((m2) => m2.route.id === m.route.id) && m.route.id in loaderData && _optionalChain([routeModules, "access", (_91) => _91[m.route.id], "optionalAccess", (_92) => _92.shouldRevalidate])) {
          foundOptOutRoute = true;
        } else if (manifestRoute.hasClientLoader) {
          foundOptOutRoute = true;
        } else {
          routesParams.add(m.route.id);
        }
      });
      if (routesParams.size === 0) {
        return [];
      }
      let url = singleFetchUrl(page, basename, "data");
      if (foundOptOutRoute && routesParams.size > 0) {
        url.searchParams.set("_routes", nextMatches.filter((m) => routesParams.has(m.route.id)).map((m) => m.route.id).join(","));
      }
      return [url.pathname + url.search];
    }, [
      basename,
      loaderData,
      location2,
      manifest,
      newMatchesForData,
      nextMatches,
      page,
      routeModules
    ]);
    let moduleHrefs = React7.useMemo(() => getModuleLinkHrefs(newMatchesForAssets, manifest), [newMatchesForAssets, manifest]);
    let keyedPrefetchLinks = useKeyedPrefetchLinks(newMatchesForAssets);
    return /* @__PURE__ */ React7.createElement(React7.Fragment, null, dataHrefs.map((href) => /* @__PURE__ */ React7.createElement("link", { key: href, rel: "prefetch", as: "fetch", href, ...linkProps })), moduleHrefs.map((href) => /* @__PURE__ */ React7.createElement("link", { key: href, rel: "modulepreload", href, ...linkProps })), keyedPrefetchLinks.map(({ key, link }) => /* @__PURE__ */ React7.createElement("link", { key, ...link })));
  }
  function Meta() {
    let { isSpaMode, routeModules } = useFrameworkContext();
    let {
      errors,
      matches: routerMatches,
      loaderData
    } = useDataRouterStateContext();
    let location2 = useLocation();
    let _matches = getActiveMatches(routerMatches, errors, isSpaMode);
    let error = null;
    if (errors) {
      error = errors[_matches[_matches.length - 1].route.id];
    }
    let meta = [];
    let leafMeta = null;
    let matches = [];
    for (let i = 0;i < _matches.length; i++) {
      let _match = _matches[i];
      let routeId = _match.route.id;
      let data2 = loaderData[routeId];
      let params = _match.params;
      let routeModule = routeModules[routeId];
      let routeMeta = [];
      let match = {
        id: routeId,
        data: data2,
        meta: [],
        params: _match.params,
        pathname: _match.pathname,
        handle: _match.route.handle,
        error
      };
      matches[i] = match;
      if (_optionalChain([routeModule, "optionalAccess", (_93) => _93.meta])) {
        routeMeta = typeof routeModule.meta === "function" ? routeModule.meta({
          data: data2,
          params,
          location: location2,
          matches,
          error
        }) : Array.isArray(routeModule.meta) ? [...routeModule.meta] : routeModule.meta;
      } else if (leafMeta) {
        routeMeta = [...leafMeta];
      }
      routeMeta = routeMeta || [];
      if (!Array.isArray(routeMeta)) {
        throw new Error("The route at " + _match.route.path + ` returns an invalid value. All route meta functions must return an array of meta objects.

To reference the meta function API, see https://remix.run/route/meta`);
      }
      match.meta = routeMeta;
      matches[i] = match;
      meta = [...routeMeta];
      leafMeta = meta;
    }
    return /* @__PURE__ */ React7.createElement(React7.Fragment, null, meta.flat().map((metaProps) => {
      if (!metaProps) {
        return null;
      }
      if ("tagName" in metaProps) {
        let { tagName, ...rest } = metaProps;
        if (!isValidMetaTag(tagName)) {
          console.warn(`A meta object uses an invalid tagName: ${tagName}. Expected either 'link' or 'meta'`);
          return null;
        }
        let Comp = tagName;
        return /* @__PURE__ */ React7.createElement(Comp, { key: JSON.stringify(rest), ...rest });
      }
      if ("title" in metaProps) {
        return /* @__PURE__ */ React7.createElement("title", { key: "title" }, String(metaProps.title));
      }
      if ("charset" in metaProps) {
        _nullishCoalesce(metaProps.charSet, () => metaProps.charSet = metaProps.charset);
        delete metaProps.charset;
      }
      if ("charSet" in metaProps && metaProps.charSet != null) {
        return typeof metaProps.charSet === "string" ? /* @__PURE__ */ React7.createElement("meta", { key: "charSet", charSet: metaProps.charSet }) : null;
      }
      if ("script:ld+json" in metaProps) {
        try {
          let json = JSON.stringify(metaProps["script:ld+json"]);
          return /* @__PURE__ */ React7.createElement("script", {
            key: `script:ld+json:${json}`,
            type: "application/ld+json",
            dangerouslySetInnerHTML: { __html: json }
          });
        } catch (err) {
          return null;
        }
      }
      return /* @__PURE__ */ React7.createElement("meta", { key: JSON.stringify(metaProps), ...metaProps });
    }));
  }
  function isValidMetaTag(tagName) {
    return typeof tagName === "string" && /^(meta|link)$/.test(tagName);
  }
  var isHydrated = false;
  function Scripts(scriptProps) {
    let {
      manifest,
      serverHandoffString,
      isSpaMode,
      renderMeta,
      routeDiscovery,
      ssr
    } = useFrameworkContext();
    let { router, static: isStatic, staticContext } = useDataRouterContext2();
    let { matches: routerMatches } = useDataRouterStateContext();
    let isRSCRouterContext = useIsRSCRouterContext();
    let enableFogOfWar = isFogOfWarEnabled(routeDiscovery, ssr);
    if (renderMeta) {
      renderMeta.didRenderScripts = true;
    }
    let matches = getActiveMatches(routerMatches, null, isSpaMode);
    React7.useEffect(() => {
      isHydrated = true;
    }, []);
    let initialScripts = React7.useMemo(() => {
      if (isRSCRouterContext) {
        return null;
      }
      let streamScript = "window.__reactRouterContext.stream = new ReadableStream({start(controller){window.__reactRouterContext.streamController = controller;}}).pipeThrough(new TextEncoderStream());";
      let contextScript = staticContext ? `window.__reactRouterContext = ${serverHandoffString};${streamScript}` : " ";
      let routeModulesScript = !isStatic ? " " : `${_optionalChain([manifest, "access", (_94) => _94.hmr, "optionalAccess", (_95) => _95.runtime]) ? `import ${JSON.stringify(manifest.hmr.runtime)};` : ""}${!enableFogOfWar ? `import ${JSON.stringify(manifest.url)}` : ""};
${matches.map((match, routeIndex) => {
        let routeVarName = `route${routeIndex}`;
        let manifestEntry = manifest.routes[match.route.id];
        invariant22(manifestEntry, `Route ${match.route.id} not found in manifest`);
        let {
          clientActionModule,
          clientLoaderModule,
          clientMiddlewareModule,
          hydrateFallbackModule,
          module: module2
        } = manifestEntry;
        let chunks = [
          ...clientActionModule ? [
            {
              module: clientActionModule,
              varName: `${routeVarName}_clientAction`
            }
          ] : [],
          ...clientLoaderModule ? [
            {
              module: clientLoaderModule,
              varName: `${routeVarName}_clientLoader`
            }
          ] : [],
          ...clientMiddlewareModule ? [
            {
              module: clientMiddlewareModule,
              varName: `${routeVarName}_clientMiddleware`
            }
          ] : [],
          ...hydrateFallbackModule ? [
            {
              module: hydrateFallbackModule,
              varName: `${routeVarName}_HydrateFallback`
            }
          ] : [],
          { module: module2, varName: `${routeVarName}_main` }
        ];
        if (chunks.length === 1) {
          return `import * as ${routeVarName} from ${JSON.stringify(module2)};`;
        }
        let chunkImportsSnippet = chunks.map((chunk) => `import * as ${chunk.varName} from "${chunk.module}";`).join(`
`);
        let mergedChunksSnippet = `const ${routeVarName} = {${chunks.map((chunk) => `...${chunk.varName}`).join(",")}};`;
        return [chunkImportsSnippet, mergedChunksSnippet].join(`
`);
      }).join(`
`)}
  ${enableFogOfWar ? `window.__reactRouterManifest = ${JSON.stringify(getPartialManifest(manifest, router), null, 2)};` : ""}
  window.__reactRouterRouteModules = {${matches.map((match, index) => `${JSON.stringify(match.route.id)}:route${index}`).join(",")}};

import(${JSON.stringify(manifest.entry.module)});`;
      return /* @__PURE__ */ React7.createElement(React7.Fragment, null, /* @__PURE__ */ React7.createElement("script", {
        ...scriptProps,
        suppressHydrationWarning: true,
        dangerouslySetInnerHTML: createHtml(contextScript),
        type: undefined
      }), /* @__PURE__ */ React7.createElement("script", {
        ...scriptProps,
        suppressHydrationWarning: true,
        dangerouslySetInnerHTML: createHtml(routeModulesScript),
        type: "module",
        async: true
      }));
    }, []);
    let preloads = isHydrated || isRSCRouterContext ? [] : dedupe(manifest.entry.imports.concat(getModuleLinkHrefs(matches, manifest, {
      includeHydrateFallback: true
    })));
    let sri = typeof manifest.sri === "object" ? manifest.sri : {};
    warnOnce2(!isRSCRouterContext, "The <Scripts /> element is a no-op when using RSC and can be safely removed.");
    return isHydrated || isRSCRouterContext ? null : /* @__PURE__ */ React7.createElement(React7.Fragment, null, typeof manifest.sri === "object" ? /* @__PURE__ */ React7.createElement("script", {
      "rr-importmap": "",
      type: "importmap",
      suppressHydrationWarning: true,
      dangerouslySetInnerHTML: {
        __html: JSON.stringify({
          integrity: sri
        })
      }
    }) : null, !enableFogOfWar ? /* @__PURE__ */ React7.createElement("link", {
      rel: "modulepreload",
      href: manifest.url,
      crossOrigin: scriptProps.crossOrigin,
      integrity: sri[manifest.url],
      suppressHydrationWarning: true
    }) : null, /* @__PURE__ */ React7.createElement("link", {
      rel: "modulepreload",
      href: manifest.entry.module,
      crossOrigin: scriptProps.crossOrigin,
      integrity: sri[manifest.entry.module],
      suppressHydrationWarning: true
    }), preloads.map((path) => /* @__PURE__ */ React7.createElement("link", {
      key: path,
      rel: "modulepreload",
      href: path,
      crossOrigin: scriptProps.crossOrigin,
      integrity: sri[path],
      suppressHydrationWarning: true
    })), initialScripts);
  }
  function dedupe(array) {
    return [...new Set(array)];
  }
  function mergeRefs(...refs) {
    return (value) => {
      refs.forEach((ref) => {
        if (typeof ref === "function") {
          ref(value);
        } else if (ref != null) {
          ref.current = value;
        }
      });
    };
  }
  var RemixErrorBoundary = class extends React8.Component {
    constructor(props) {
      super(props);
      this.state = { error: props.error || null, location: props.location };
    }
    static getDerivedStateFromError(error) {
      return { error };
    }
    static getDerivedStateFromProps(props, state) {
      if (state.location !== props.location) {
        return { error: props.error || null, location: props.location };
      }
      return { error: props.error || state.error, location: state.location };
    }
    render() {
      if (this.state.error) {
        return /* @__PURE__ */ React8.createElement(RemixRootDefaultErrorBoundary, {
          error: this.state.error,
          isOutsideRemixApp: true
        });
      } else {
        return this.props.children;
      }
    }
  };
  function RemixRootDefaultErrorBoundary({
    error,
    isOutsideRemixApp
  }) {
    console.error(error);
    let heyDeveloper = /* @__PURE__ */ React8.createElement("script", {
      dangerouslySetInnerHTML: {
        __html: `
        console.log(
          "\uD83D\uDCBF Hey developer \uD83D\uDC4B. You can provide a way better UX than this when your app throws errors. Check out https://reactrouter.com/how-to/error-boundary for more information."
        );
      `
      }
    });
    if (isRouteErrorResponse(error)) {
      return /* @__PURE__ */ React8.createElement(BoundaryShell, { title: "Unhandled Thrown Response!" }, /* @__PURE__ */ React8.createElement("h1", { style: { fontSize: "24px" } }, error.status, " ", error.statusText), ENABLE_DEV_WARNINGS ? heyDeveloper : null);
    }
    let errorInstance;
    if (error instanceof Error) {
      errorInstance = error;
    } else {
      let errorString = error == null ? "Unknown Error" : typeof error === "object" && ("toString" in error) ? error.toString() : JSON.stringify(error);
      errorInstance = new Error(errorString);
    }
    return /* @__PURE__ */ React8.createElement(BoundaryShell, {
      title: "Application Error!",
      isOutsideRemixApp
    }, /* @__PURE__ */ React8.createElement("h1", { style: { fontSize: "24px" } }, "Application Error"), /* @__PURE__ */ React8.createElement("pre", {
      style: {
        padding: "2rem",
        background: "hsla(10, 50%, 50%, 0.1)",
        color: "red",
        overflow: "auto"
      }
    }, errorInstance.stack), heyDeveloper);
  }
  function BoundaryShell({
    title,
    renderScripts,
    isOutsideRemixApp,
    children
  }) {
    let { routeModules } = useFrameworkContext();
    if (_optionalChain([routeModules, "access", (_96) => _96.root, "optionalAccess", (_97) => _97.Layout]) && !isOutsideRemixApp) {
      return children;
    }
    return /* @__PURE__ */ React8.createElement("html", { lang: "en" }, /* @__PURE__ */ React8.createElement("head", null, /* @__PURE__ */ React8.createElement("meta", { charSet: "utf-8" }), /* @__PURE__ */ React8.createElement("meta", {
      name: "viewport",
      content: "width=device-width,initial-scale=1,viewport-fit=cover"
    }), /* @__PURE__ */ React8.createElement("title", null, title)), /* @__PURE__ */ React8.createElement("body", null, /* @__PURE__ */ React8.createElement("main", { style: { fontFamily: "system-ui, sans-serif", padding: "2rem" } }, children, renderScripts ? /* @__PURE__ */ React8.createElement(Scripts, null) : null)));
  }
  exports.Action = Action;
  exports.createMemoryHistory = createMemoryHistory;
  exports.createBrowserHistory = createBrowserHistory;
  exports.createHashHistory = createHashHistory;
  exports.invariant = invariant2;
  exports.warning = warning2;
  exports.createPath = createPath;
  exports.parsePath = parsePath;
  exports.unstable_createContext = unstable_createContext;
  exports.unstable_RouterContextProvider = unstable_RouterContextProvider;
  exports.convertRoutesToDataRoutes = convertRoutesToDataRoutes;
  exports.matchRoutes = matchRoutes;
  exports.generatePath = generatePath;
  exports.matchPath = matchPath;
  exports.stripBasename = stripBasename;
  exports.resolvePath = resolvePath;
  exports.getResolveToMatches = getResolveToMatches;
  exports.resolveTo = resolveTo;
  exports.joinPaths = joinPaths;
  exports.data = data;
  exports.redirect = redirect;
  exports.redirectDocument = redirectDocument;
  exports.replace = replace;
  exports.ErrorResponseImpl = ErrorResponseImpl;
  exports.isRouteErrorResponse = isRouteErrorResponse;
  exports.encode = encode;
  exports.IDLE_NAVIGATION = IDLE_NAVIGATION;
  exports.IDLE_FETCHER = IDLE_FETCHER;
  exports.IDLE_BLOCKER = IDLE_BLOCKER;
  exports.createRouter = createRouter;
  exports.createStaticHandler = createStaticHandler;
  exports.getStaticContextFromError = getStaticContextFromError;
  exports.isDataWithResponseInit = isDataWithResponseInit;
  exports.isResponse = isResponse;
  exports.isRedirectStatusCode = isRedirectStatusCode;
  exports.isRedirectResponse = isRedirectResponse;
  exports.isMutationMethod = isMutationMethod;
  exports.createRequestInit = createRequestInit;
  exports.SingleFetchRedirectSymbol = SingleFetchRedirectSymbol;
  exports.SINGLE_FETCH_REDIRECT_STATUS = SINGLE_FETCH_REDIRECT_STATUS;
  exports.NO_BODY_STATUS_CODES = NO_BODY_STATUS_CODES;
  exports.StreamTransfer = StreamTransfer;
  exports.getTurboStreamSingleFetchDataStrategy = getTurboStreamSingleFetchDataStrategy;
  exports.getSingleFetchDataStrategyImpl = getSingleFetchDataStrategyImpl;
  exports.stripIndexParam = stripIndexParam;
  exports.singleFetchUrl = singleFetchUrl;
  exports.decodeViaTurboStream = decodeViaTurboStream;
  exports.DataRouterContext = DataRouterContext;
  exports.DataRouterStateContext = DataRouterStateContext;
  exports.RSCRouterContext = RSCRouterContext;
  exports.ViewTransitionContext = ViewTransitionContext;
  exports.FetchersContext = FetchersContext;
  exports.AwaitContext = AwaitContext;
  exports.NavigationContext = NavigationContext;
  exports.LocationContext = LocationContext;
  exports.RouteContext = RouteContext;
  exports.ENABLE_DEV_WARNINGS = ENABLE_DEV_WARNINGS;
  exports.warnOnce = warnOnce2;
  exports.useHref = useHref;
  exports.useInRouterContext = useInRouterContext;
  exports.useLocation = useLocation;
  exports.useNavigationType = useNavigationType;
  exports.useMatch = useMatch;
  exports.useNavigate = useNavigate;
  exports.useOutletContext = useOutletContext;
  exports.useOutlet = useOutlet;
  exports.useParams = useParams;
  exports.useResolvedPath = useResolvedPath;
  exports.useRoutes = useRoutes;
  exports.useRoutesImpl = useRoutesImpl;
  exports._renderMatches = _renderMatches;
  exports.useRouteId = useRouteId;
  exports.useNavigation = useNavigation;
  exports.useRevalidator = useRevalidator;
  exports.useMatches = useMatches;
  exports.useLoaderData = useLoaderData;
  exports.useRouteLoaderData = useRouteLoaderData;
  exports.useActionData = useActionData;
  exports.useRouteError = useRouteError;
  exports.useAsyncValue = useAsyncValue;
  exports.useAsyncError = useAsyncError;
  exports.useBlocker = useBlocker;
  exports.RemixErrorBoundary = RemixErrorBoundary;
  exports.createServerRoutes = createServerRoutes;
  exports.createClientRoutesWithHMRRevalidationOptOut = createClientRoutesWithHMRRevalidationOptOut;
  exports.noActionDefinedError = noActionDefinedError;
  exports.createClientRoutes = createClientRoutes;
  exports.shouldHydrateRouteLoader = shouldHydrateRouteLoader;
  exports.getPatchRoutesOnNavigationFunction = getPatchRoutesOnNavigationFunction;
  exports.useFogOFWarDiscovery = useFogOFWarDiscovery;
  exports.getManifestPath = getManifestPath;
  exports.FrameworkContext = FrameworkContext;
  exports.usePrefetchBehavior = usePrefetchBehavior;
  exports.CRITICAL_CSS_DATA_ATTRIBUTE = CRITICAL_CSS_DATA_ATTRIBUTE;
  exports.Links = Links;
  exports.PrefetchPageLinks = PrefetchPageLinks;
  exports.Meta = Meta;
  exports.Scripts = Scripts;
  exports.mergeRefs = mergeRefs;
});

// node_modules/react-router/dist/development/chunk-R73PQUJU.js
var require_chunk_R73PQUJU = __commonJS((exports) => {
  var _react = __toESM(require_react(), 1);
  Object.defineProperty(exports, "__esModule", { value: true });
  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};
      if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) {
            newObj[key] = obj[key];
          }
        }
      }
      newObj.default = obj;
      return newObj;
    }
  }
  function _optionalChain(ops) {
    let lastAccessLHS = undefined;
    let value = ops[0];
    let i = 1;
    while (i < ops.length) {
      const op = ops[i];
      const fn = ops[i + 1];
      i += 2;
      if ((op === "optionalAccess" || op === "optionalCall") && value == null) {
        return;
      }
      if (op === "access" || op === "optionalAccess") {
        lastAccessLHS = value;
        value = fn(value);
      } else if (op === "call" || op === "optionalCall") {
        value = fn((...args) => value.call(lastAccessLHS, ...args));
        lastAccessLHS = undefined;
      }
    }
    return value;
  }
  var _chunkK7YFBME3js = require_chunk_K7YFBME3();
  var React2 = _interopRequireWildcard(_react);
  var React22 = _interopRequireWildcard(_react);
  var React3 = _interopRequireWildcard(_react);
  function mapRouteProperties(route) {
    let updates = {
      hasErrorBoundary: route.hasErrorBoundary || route.ErrorBoundary != null || route.errorElement != null
    };
    if (route.Component) {
      if (_chunkK7YFBME3js.ENABLE_DEV_WARNINGS) {
        if (route.element) {
          _chunkK7YFBME3js.warning.call(undefined, false, "You should not include both `Component` and `element` on your route - `Component` will be used.");
        }
      }
      Object.assign(updates, {
        element: React2.createElement(route.Component),
        Component: undefined
      });
    }
    if (route.HydrateFallback) {
      if (_chunkK7YFBME3js.ENABLE_DEV_WARNINGS) {
        if (route.hydrateFallbackElement) {
          _chunkK7YFBME3js.warning.call(undefined, false, "You should not include both `HydrateFallback` and `hydrateFallbackElement` on your route - `HydrateFallback` will be used.");
        }
      }
      Object.assign(updates, {
        hydrateFallbackElement: React2.createElement(route.HydrateFallback),
        HydrateFallback: undefined
      });
    }
    if (route.ErrorBoundary) {
      if (_chunkK7YFBME3js.ENABLE_DEV_WARNINGS) {
        if (route.errorElement) {
          _chunkK7YFBME3js.warning.call(undefined, false, "You should not include both `ErrorBoundary` and `errorElement` on your route - `ErrorBoundary` will be used.");
        }
      }
      Object.assign(updates, {
        errorElement: React2.createElement(route.ErrorBoundary),
        ErrorBoundary: undefined
      });
    }
    return updates;
  }
  var hydrationRouteProperties = [
    "HydrateFallback",
    "hydrateFallbackElement"
  ];
  function createMemoryRouter(routes, opts) {
    return _chunkK7YFBME3js.createRouter.call(undefined, {
      basename: _optionalChain([opts, "optionalAccess", (_2) => _2.basename]),
      unstable_getContext: _optionalChain([opts, "optionalAccess", (_3) => _3.unstable_getContext]),
      future: _optionalChain([opts, "optionalAccess", (_4) => _4.future]),
      history: _chunkK7YFBME3js.createMemoryHistory.call(undefined, {
        initialEntries: _optionalChain([opts, "optionalAccess", (_5) => _5.initialEntries]),
        initialIndex: _optionalChain([opts, "optionalAccess", (_6) => _6.initialIndex])
      }),
      hydrationData: _optionalChain([opts, "optionalAccess", (_7) => _7.hydrationData]),
      routes,
      hydrationRouteProperties,
      mapRouteProperties,
      dataStrategy: _optionalChain([opts, "optionalAccess", (_8) => _8.dataStrategy]),
      patchRoutesOnNavigation: _optionalChain([opts, "optionalAccess", (_9) => _9.patchRoutesOnNavigation])
    }).initialize();
  }
  var Deferred = class {
    constructor() {
      this.status = "pending";
      this.promise = new Promise((resolve, reject) => {
        this.resolve = (value) => {
          if (this.status === "pending") {
            this.status = "resolved";
            resolve(value);
          }
        };
        this.reject = (reason) => {
          if (this.status === "pending") {
            this.status = "rejected";
            reject(reason);
          }
        };
      });
    }
  };
  function RouterProvider2({
    router,
    flushSync: reactDomFlushSyncImpl
  }) {
    let [state, setStateImpl] = React2.useState(router.state);
    let [pendingState, setPendingState] = React2.useState();
    let [vtContext, setVtContext] = React2.useState({
      isTransitioning: false
    });
    let [renderDfd, setRenderDfd] = React2.useState();
    let [transition, setTransition] = React2.useState();
    let [interruption, setInterruption] = React2.useState();
    let fetcherData = React2.useRef(/* @__PURE__ */ new Map);
    let setState = React2.useCallback((newState, { deletedFetchers, flushSync, viewTransitionOpts }) => {
      newState.fetchers.forEach((fetcher, key) => {
        if (fetcher.data !== undefined) {
          fetcherData.current.set(key, fetcher.data);
        }
      });
      deletedFetchers.forEach((key) => fetcherData.current.delete(key));
      _chunkK7YFBME3js.warnOnce.call(undefined, flushSync === false || reactDomFlushSyncImpl != null, 'You provided the `flushSync` option to a router update, but you are not using the `<RouterProvider>` from `react-router/dom` so `ReactDOM.flushSync()` is unavailable.  Please update your app to `import { RouterProvider } from "react-router/dom"` and ensure you have `react-dom` installed as a dependency to use the `flushSync` option.');
      let isViewTransitionAvailable = router.window != null && router.window.document != null && typeof router.window.document.startViewTransition === "function";
      _chunkK7YFBME3js.warnOnce.call(undefined, viewTransitionOpts == null || isViewTransitionAvailable, "You provided the `viewTransition` option to a router update, but you do not appear to be running in a DOM environment as `window.startViewTransition` is not available.");
      if (!viewTransitionOpts || !isViewTransitionAvailable) {
        if (reactDomFlushSyncImpl && flushSync) {
          reactDomFlushSyncImpl(() => setStateImpl(newState));
        } else {
          React2.startTransition(() => setStateImpl(newState));
        }
        return;
      }
      if (reactDomFlushSyncImpl && flushSync) {
        reactDomFlushSyncImpl(() => {
          if (transition) {
            renderDfd && renderDfd.resolve();
            transition.skipTransition();
          }
          setVtContext({
            isTransitioning: true,
            flushSync: true,
            currentLocation: viewTransitionOpts.currentLocation,
            nextLocation: viewTransitionOpts.nextLocation
          });
        });
        let t = router.window.document.startViewTransition(() => {
          reactDomFlushSyncImpl(() => setStateImpl(newState));
        });
        t.finished.finally(() => {
          reactDomFlushSyncImpl(() => {
            setRenderDfd(undefined);
            setTransition(undefined);
            setPendingState(undefined);
            setVtContext({ isTransitioning: false });
          });
        });
        reactDomFlushSyncImpl(() => setTransition(t));
        return;
      }
      if (transition) {
        renderDfd && renderDfd.resolve();
        transition.skipTransition();
        setInterruption({
          state: newState,
          currentLocation: viewTransitionOpts.currentLocation,
          nextLocation: viewTransitionOpts.nextLocation
        });
      } else {
        setPendingState(newState);
        setVtContext({
          isTransitioning: true,
          flushSync: false,
          currentLocation: viewTransitionOpts.currentLocation,
          nextLocation: viewTransitionOpts.nextLocation
        });
      }
    }, [router.window, reactDomFlushSyncImpl, transition, renderDfd]);
    React2.useLayoutEffect(() => router.subscribe(setState), [router, setState]);
    React2.useEffect(() => {
      if (vtContext.isTransitioning && !vtContext.flushSync) {
        setRenderDfd(new Deferred);
      }
    }, [vtContext]);
    React2.useEffect(() => {
      if (renderDfd && pendingState && router.window) {
        let newState = pendingState;
        let renderPromise = renderDfd.promise;
        let transition2 = router.window.document.startViewTransition(async () => {
          React2.startTransition(() => setStateImpl(newState));
          await renderPromise;
        });
        transition2.finished.finally(() => {
          setRenderDfd(undefined);
          setTransition(undefined);
          setPendingState(undefined);
          setVtContext({ isTransitioning: false });
        });
        setTransition(transition2);
      }
    }, [pendingState, renderDfd, router.window]);
    React2.useEffect(() => {
      if (renderDfd && pendingState && state.location.key === pendingState.location.key) {
        renderDfd.resolve();
      }
    }, [renderDfd, transition, state.location, pendingState]);
    React2.useEffect(() => {
      if (!vtContext.isTransitioning && interruption) {
        setPendingState(interruption.state);
        setVtContext({
          isTransitioning: true,
          flushSync: false,
          currentLocation: interruption.currentLocation,
          nextLocation: interruption.nextLocation
        });
        setInterruption(undefined);
      }
    }, [vtContext.isTransitioning, interruption]);
    let navigator2 = React2.useMemo(() => {
      return {
        createHref: router.createHref,
        encodeLocation: router.encodeLocation,
        go: (n) => router.navigate(n),
        push: (to, state2, opts) => router.navigate(to, {
          state: state2,
          preventScrollReset: _optionalChain([opts, "optionalAccess", (_10) => _10.preventScrollReset])
        }),
        replace: (to, state2, opts) => router.navigate(to, {
          replace: true,
          state: state2,
          preventScrollReset: _optionalChain([opts, "optionalAccess", (_11) => _11.preventScrollReset])
        })
      };
    }, [router]);
    let basename = router.basename || "/";
    let dataRouterContext = React2.useMemo(() => ({
      router,
      navigator: navigator2,
      static: false,
      basename
    }), [router, navigator2, basename]);
    return /* @__PURE__ */ React2.createElement(React2.Fragment, null, /* @__PURE__ */ React2.createElement(_chunkK7YFBME3js.DataRouterContext.Provider, { value: dataRouterContext }, /* @__PURE__ */ React2.createElement(_chunkK7YFBME3js.DataRouterStateContext.Provider, { value: state }, /* @__PURE__ */ React2.createElement(_chunkK7YFBME3js.FetchersContext.Provider, { value: fetcherData.current }, /* @__PURE__ */ React2.createElement(_chunkK7YFBME3js.ViewTransitionContext.Provider, { value: vtContext }, /* @__PURE__ */ React2.createElement(Router, {
      basename,
      location: state.location,
      navigationType: state.historyAction,
      navigator: navigator2
    }, /* @__PURE__ */ React2.createElement(MemoizedDataRoutes, {
      routes: router.routes,
      future: router.future,
      state
    })))))), null);
  }
  var MemoizedDataRoutes = React2.memo(DataRoutes);
  function DataRoutes({
    routes,
    future,
    state
  }) {
    return _chunkK7YFBME3js.useRoutesImpl.call(undefined, routes, undefined, state, future);
  }
  function MemoryRouter({
    basename,
    children,
    initialEntries,
    initialIndex
  }) {
    let historyRef = React2.useRef();
    if (historyRef.current == null) {
      historyRef.current = _chunkK7YFBME3js.createMemoryHistory.call(undefined, {
        initialEntries,
        initialIndex,
        v5Compat: true
      });
    }
    let history = historyRef.current;
    let [state, setStateImpl] = React2.useState({
      action: history.action,
      location: history.location
    });
    let setState = React2.useCallback((newState) => {
      React2.startTransition(() => setStateImpl(newState));
    }, [setStateImpl]);
    React2.useLayoutEffect(() => history.listen(setState), [history, setState]);
    return /* @__PURE__ */ React2.createElement(Router, {
      basename,
      children,
      location: state.location,
      navigationType: state.action,
      navigator: history
    });
  }
  function Navigate({
    to,
    replace,
    state,
    relative
  }) {
    _chunkK7YFBME3js.invariant.call(undefined, _chunkK7YFBME3js.useInRouterContext.call(undefined), `<Navigate> may be used only in the context of a <Router> component.`);
    let { static: isStatic } = React2.useContext(_chunkK7YFBME3js.NavigationContext);
    _chunkK7YFBME3js.warning.call(undefined, !isStatic, `<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.`);
    let { matches } = React2.useContext(_chunkK7YFBME3js.RouteContext);
    let { pathname: locationPathname } = _chunkK7YFBME3js.useLocation.call(undefined);
    let navigate = _chunkK7YFBME3js.useNavigate.call(undefined);
    let path = _chunkK7YFBME3js.resolveTo.call(undefined, to, _chunkK7YFBME3js.getResolveToMatches.call(undefined, matches), locationPathname, relative === "path");
    let jsonPath = JSON.stringify(path);
    React2.useEffect(() => {
      navigate(JSON.parse(jsonPath), { replace, state, relative });
    }, [navigate, jsonPath, relative, replace, state]);
    return null;
  }
  function Outlet(props) {
    return _chunkK7YFBME3js.useOutlet.call(undefined, props.context);
  }
  function Route(props) {
    _chunkK7YFBME3js.invariant.call(undefined, false, `A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.`);
  }
  function Router({
    basename: basenameProp = "/",
    children = null,
    location: locationProp,
    navigationType = "POP",
    navigator: navigator2,
    static: staticProp = false
  }) {
    _chunkK7YFBME3js.invariant.call(undefined, !_chunkK7YFBME3js.useInRouterContext.call(undefined), `You cannot render a <Router> inside another <Router>. You should never have more than one in your app.`);
    let basename = basenameProp.replace(/^\/*/, "/");
    let navigationContext = React2.useMemo(() => ({
      basename,
      navigator: navigator2,
      static: staticProp,
      future: {}
    }), [basename, navigator2, staticProp]);
    if (typeof locationProp === "string") {
      locationProp = _chunkK7YFBME3js.parsePath.call(undefined, locationProp);
    }
    let {
      pathname = "/",
      search = "",
      hash = "",
      state = null,
      key = "default"
    } = locationProp;
    let locationContext = React2.useMemo(() => {
      let trailingPathname = _chunkK7YFBME3js.stripBasename.call(undefined, pathname, basename);
      if (trailingPathname == null) {
        return null;
      }
      return {
        location: {
          pathname: trailingPathname,
          search,
          hash,
          state,
          key
        },
        navigationType
      };
    }, [basename, pathname, search, hash, state, key, navigationType]);
    _chunkK7YFBME3js.warning.call(undefined, locationContext != null, `<Router basename="${basename}"> is not able to match the URL "${pathname}${search}${hash}" because it does not start with the basename, so the <Router> won't render anything.`);
    if (locationContext == null) {
      return null;
    }
    return /* @__PURE__ */ React2.createElement(_chunkK7YFBME3js.NavigationContext.Provider, { value: navigationContext }, /* @__PURE__ */ React2.createElement(_chunkK7YFBME3js.LocationContext.Provider, { children, value: locationContext }));
  }
  function Routes({
    children,
    location: location2
  }) {
    return _chunkK7YFBME3js.useRoutes.call(undefined, createRoutesFromChildren(children), location2);
  }
  function Await({
    children,
    errorElement,
    resolve
  }) {
    return /* @__PURE__ */ React2.createElement(AwaitErrorBoundary, { resolve, errorElement }, /* @__PURE__ */ React2.createElement(ResolveAwait, null, children));
  }
  var AwaitErrorBoundary = class extends React2.Component {
    constructor(props) {
      super(props);
      this.state = { error: null };
    }
    static getDerivedStateFromError(error) {
      return { error };
    }
    componentDidCatch(error, errorInfo) {
      console.error("<Await> caught the following error during render", error, errorInfo);
    }
    render() {
      let { children, errorElement, resolve } = this.props;
      let promise = null;
      let status = 0;
      if (!(resolve instanceof Promise)) {
        status = 1;
        promise = Promise.resolve();
        Object.defineProperty(promise, "_tracked", { get: () => true });
        Object.defineProperty(promise, "_data", { get: () => resolve });
      } else if (this.state.error) {
        status = 2;
        let renderError = this.state.error;
        promise = Promise.reject().catch(() => {});
        Object.defineProperty(promise, "_tracked", { get: () => true });
        Object.defineProperty(promise, "_error", { get: () => renderError });
      } else if (resolve._tracked) {
        promise = resolve;
        status = "_error" in promise ? 2 : ("_data" in promise) ? 1 : 0;
      } else {
        status = 0;
        Object.defineProperty(resolve, "_tracked", { get: () => true });
        promise = resolve.then((data) => Object.defineProperty(resolve, "_data", { get: () => data }), (error) => Object.defineProperty(resolve, "_error", { get: () => error }));
      }
      if (status === 2 && !errorElement) {
        throw promise._error;
      }
      if (status === 2) {
        return /* @__PURE__ */ React2.createElement(_chunkK7YFBME3js.AwaitContext.Provider, { value: promise, children: errorElement });
      }
      if (status === 1) {
        return /* @__PURE__ */ React2.createElement(_chunkK7YFBME3js.AwaitContext.Provider, { value: promise, children });
      }
      throw promise;
    }
  };
  function ResolveAwait({
    children
  }) {
    let data = _chunkK7YFBME3js.useAsyncValue.call(undefined);
    let toRender = typeof children === "function" ? children(data) : children;
    return /* @__PURE__ */ React2.createElement(React2.Fragment, null, toRender);
  }
  function createRoutesFromChildren(children, parentPath = []) {
    let routes = [];
    React2.Children.forEach(children, (element, index) => {
      if (!React2.isValidElement(element)) {
        return;
      }
      let treePath = [...parentPath, index];
      if (element.type === React2.Fragment) {
        routes.push.apply(routes, createRoutesFromChildren(element.props.children, treePath));
        return;
      }
      _chunkK7YFBME3js.invariant.call(undefined, element.type === Route, `[${typeof element.type === "string" ? element.type : element.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`);
      _chunkK7YFBME3js.invariant.call(undefined, !element.props.index || !element.props.children, "An index route cannot have child routes.");
      let route = {
        id: element.props.id || treePath.join("-"),
        caseSensitive: element.props.caseSensitive,
        element: element.props.element,
        Component: element.props.Component,
        index: element.props.index,
        path: element.props.path,
        loader: element.props.loader,
        action: element.props.action,
        hydrateFallbackElement: element.props.hydrateFallbackElement,
        HydrateFallback: element.props.HydrateFallback,
        errorElement: element.props.errorElement,
        ErrorBoundary: element.props.ErrorBoundary,
        hasErrorBoundary: element.props.hasErrorBoundary === true || element.props.ErrorBoundary != null || element.props.errorElement != null,
        shouldRevalidate: element.props.shouldRevalidate,
        handle: element.props.handle,
        lazy: element.props.lazy
      };
      if (element.props.children) {
        route.children = createRoutesFromChildren(element.props.children, treePath);
      }
      routes.push(route);
    });
    return routes;
  }
  var createRoutesFromElements = createRoutesFromChildren;
  function renderMatches(matches) {
    return _chunkK7YFBME3js._renderMatches.call(undefined, matches);
  }
  function useRouteComponentProps() {
    return {
      params: _chunkK7YFBME3js.useParams.call(undefined),
      loaderData: _chunkK7YFBME3js.useLoaderData.call(undefined),
      actionData: _chunkK7YFBME3js.useActionData.call(undefined),
      matches: _chunkK7YFBME3js.useMatches.call(undefined)
    };
  }
  function WithComponentProps({
    children
  }) {
    const props = useRouteComponentProps();
    return React2.cloneElement(children, props);
  }
  function withComponentProps(Component2) {
    return function WithComponentProps2() {
      const props = useRouteComponentProps();
      return React2.createElement(Component2, props);
    };
  }
  function useHydrateFallbackProps() {
    return {
      params: _chunkK7YFBME3js.useParams.call(undefined),
      loaderData: _chunkK7YFBME3js.useLoaderData.call(undefined),
      actionData: _chunkK7YFBME3js.useActionData.call(undefined)
    };
  }
  function WithHydrateFallbackProps({
    children
  }) {
    const props = useHydrateFallbackProps();
    return React2.cloneElement(children, props);
  }
  function withHydrateFallbackProps(HydrateFallback) {
    return function WithHydrateFallbackProps2() {
      const props = useHydrateFallbackProps();
      return React2.createElement(HydrateFallback, props);
    };
  }
  function useErrorBoundaryProps() {
    return {
      params: _chunkK7YFBME3js.useParams.call(undefined),
      loaderData: _chunkK7YFBME3js.useLoaderData.call(undefined),
      actionData: _chunkK7YFBME3js.useActionData.call(undefined),
      error: _chunkK7YFBME3js.useRouteError.call(undefined)
    };
  }
  function WithErrorBoundaryProps({
    children
  }) {
    const props = useErrorBoundaryProps();
    return React2.cloneElement(children, props);
  }
  function withErrorBoundaryProps(ErrorBoundary) {
    return function WithErrorBoundaryProps2() {
      const props = useErrorBoundaryProps();
      return React2.createElement(ErrorBoundary, props);
    };
  }
  var defaultMethod = "get";
  var defaultEncType = "application/x-www-form-urlencoded";
  function isHtmlElement(object) {
    return object != null && typeof object.tagName === "string";
  }
  function isButtonElement(object) {
    return isHtmlElement(object) && object.tagName.toLowerCase() === "button";
  }
  function isFormElement(object) {
    return isHtmlElement(object) && object.tagName.toLowerCase() === "form";
  }
  function isInputElement(object) {
    return isHtmlElement(object) && object.tagName.toLowerCase() === "input";
  }
  function isModifiedEvent(event) {
    return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
  }
  function shouldProcessLinkClick(event, target) {
    return event.button === 0 && (!target || target === "_self") && !isModifiedEvent(event);
  }
  function createSearchParams(init = "") {
    return new URLSearchParams(typeof init === "string" || Array.isArray(init) || init instanceof URLSearchParams ? init : Object.keys(init).reduce((memo2, key) => {
      let value = init[key];
      return memo2.concat(Array.isArray(value) ? value.map((v) => [key, v]) : [[key, value]]);
    }, []));
  }
  function getSearchParamsForLocation(locationSearch, defaultSearchParams) {
    let searchParams = createSearchParams(locationSearch);
    if (defaultSearchParams) {
      defaultSearchParams.forEach((_, key) => {
        if (!searchParams.has(key)) {
          defaultSearchParams.getAll(key).forEach((value) => {
            searchParams.append(key, value);
          });
        }
      });
    }
    return searchParams;
  }
  var _formDataSupportsSubmitter = null;
  function isFormDataSubmitterSupported() {
    if (_formDataSupportsSubmitter === null) {
      try {
        new FormData(document.createElement("form"), 0);
        _formDataSupportsSubmitter = false;
      } catch (e) {
        _formDataSupportsSubmitter = true;
      }
    }
    return _formDataSupportsSubmitter;
  }
  var supportedFormEncTypes = /* @__PURE__ */ new Set([
    "application/x-www-form-urlencoded",
    "multipart/form-data",
    "text/plain"
  ]);
  function getFormEncType(encType) {
    if (encType != null && !supportedFormEncTypes.has(encType)) {
      _chunkK7YFBME3js.warning.call(undefined, false, `"${encType}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${defaultEncType}"`);
      return null;
    }
    return encType;
  }
  function getFormSubmissionInfo(target, basename) {
    let method;
    let action;
    let encType;
    let formData;
    let body;
    if (isFormElement(target)) {
      let attr = target.getAttribute("action");
      action = attr ? _chunkK7YFBME3js.stripBasename.call(undefined, attr, basename) : null;
      method = target.getAttribute("method") || defaultMethod;
      encType = getFormEncType(target.getAttribute("enctype")) || defaultEncType;
      formData = new FormData(target);
    } else if (isButtonElement(target) || isInputElement(target) && (target.type === "submit" || target.type === "image")) {
      let form = target.form;
      if (form == null) {
        throw new Error(`Cannot submit a <button> or <input type="submit"> without a <form>`);
      }
      let attr = target.getAttribute("formaction") || form.getAttribute("action");
      action = attr ? _chunkK7YFBME3js.stripBasename.call(undefined, attr, basename) : null;
      method = target.getAttribute("formmethod") || form.getAttribute("method") || defaultMethod;
      encType = getFormEncType(target.getAttribute("formenctype")) || getFormEncType(form.getAttribute("enctype")) || defaultEncType;
      formData = new FormData(form, target);
      if (!isFormDataSubmitterSupported()) {
        let { name, type, value } = target;
        if (type === "image") {
          let prefix = name ? `${name}.` : "";
          formData.append(`${prefix}x`, "0");
          formData.append(`${prefix}y`, "0");
        } else if (name) {
          formData.append(name, value);
        }
      }
    } else if (isHtmlElement(target)) {
      throw new Error(`Cannot submit element that is not <form>, <button>, or <input type="submit|image">`);
    } else {
      method = defaultMethod;
      action = null;
      encType = defaultEncType;
      body = target;
    }
    if (formData && encType === "text/plain") {
      body = formData;
      formData = undefined;
    }
    return { action, method: method.toLowerCase(), encType, formData, body };
  }
  var isBrowser2 = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined";
  try {
    if (isBrowser2) {
      window.__reactRouterVersion = "7.7.1";
    }
  } catch (e) {}
  function createBrowserRouter(routes, opts) {
    return _chunkK7YFBME3js.createRouter.call(undefined, {
      basename: _optionalChain([opts, "optionalAccess", (_12) => _12.basename]),
      unstable_getContext: _optionalChain([opts, "optionalAccess", (_13) => _13.unstable_getContext]),
      future: _optionalChain([opts, "optionalAccess", (_14) => _14.future]),
      history: _chunkK7YFBME3js.createBrowserHistory.call(undefined, { window: _optionalChain([opts, "optionalAccess", (_15) => _15.window]) }),
      hydrationData: _optionalChain([opts, "optionalAccess", (_16) => _16.hydrationData]) || parseHydrationData(),
      routes,
      mapRouteProperties,
      hydrationRouteProperties,
      dataStrategy: _optionalChain([opts, "optionalAccess", (_17) => _17.dataStrategy]),
      patchRoutesOnNavigation: _optionalChain([opts, "optionalAccess", (_18) => _18.patchRoutesOnNavigation]),
      window: _optionalChain([opts, "optionalAccess", (_19) => _19.window])
    }).initialize();
  }
  function createHashRouter(routes, opts) {
    return _chunkK7YFBME3js.createRouter.call(undefined, {
      basename: _optionalChain([opts, "optionalAccess", (_20) => _20.basename]),
      unstable_getContext: _optionalChain([opts, "optionalAccess", (_21) => _21.unstable_getContext]),
      future: _optionalChain([opts, "optionalAccess", (_22) => _22.future]),
      history: _chunkK7YFBME3js.createHashHistory.call(undefined, { window: _optionalChain([opts, "optionalAccess", (_23) => _23.window]) }),
      hydrationData: _optionalChain([opts, "optionalAccess", (_24) => _24.hydrationData]) || parseHydrationData(),
      routes,
      mapRouteProperties,
      hydrationRouteProperties,
      dataStrategy: _optionalChain([opts, "optionalAccess", (_25) => _25.dataStrategy]),
      patchRoutesOnNavigation: _optionalChain([opts, "optionalAccess", (_26) => _26.patchRoutesOnNavigation]),
      window: _optionalChain([opts, "optionalAccess", (_27) => _27.window])
    }).initialize();
  }
  function parseHydrationData() {
    let state = _optionalChain([window, "optionalAccess", (_28) => _28.__staticRouterHydrationData]);
    if (state && state.errors) {
      state = {
        ...state,
        errors: deserializeErrors(state.errors)
      };
    }
    return state;
  }
  function deserializeErrors(errors) {
    if (!errors)
      return null;
    let entries = Object.entries(errors);
    let serialized = {};
    for (let [key, val] of entries) {
      if (val && val.__type === "RouteErrorResponse") {
        serialized[key] = new (0, _chunkK7YFBME3js.ErrorResponseImpl)(val.status, val.statusText, val.data, val.internal === true);
      } else if (val && val.__type === "Error") {
        if (val.__subType) {
          let ErrorConstructor = window[val.__subType];
          if (typeof ErrorConstructor === "function") {
            try {
              let error = new ErrorConstructor(val.message);
              error.stack = "";
              serialized[key] = error;
            } catch (e) {}
          }
        }
        if (serialized[key] == null) {
          let error = new Error(val.message);
          error.stack = "";
          serialized[key] = error;
        }
      } else {
        serialized[key] = val;
      }
    }
    return serialized;
  }
  function BrowserRouter({
    basename,
    children,
    window: window2
  }) {
    let historyRef = React22.useRef();
    if (historyRef.current == null) {
      historyRef.current = _chunkK7YFBME3js.createBrowserHistory.call(undefined, { window: window2, v5Compat: true });
    }
    let history = historyRef.current;
    let [state, setStateImpl] = React22.useState({
      action: history.action,
      location: history.location
    });
    let setState = React22.useCallback((newState) => {
      React22.startTransition(() => setStateImpl(newState));
    }, [setStateImpl]);
    React22.useLayoutEffect(() => history.listen(setState), [history, setState]);
    return /* @__PURE__ */ React22.createElement(Router, {
      basename,
      children,
      location: state.location,
      navigationType: state.action,
      navigator: history
    });
  }
  function HashRouter({ basename, children, window: window2 }) {
    let historyRef = React22.useRef();
    if (historyRef.current == null) {
      historyRef.current = _chunkK7YFBME3js.createHashHistory.call(undefined, { window: window2, v5Compat: true });
    }
    let history = historyRef.current;
    let [state, setStateImpl] = React22.useState({
      action: history.action,
      location: history.location
    });
    let setState = React22.useCallback((newState) => {
      React22.startTransition(() => setStateImpl(newState));
    }, [setStateImpl]);
    React22.useLayoutEffect(() => history.listen(setState), [history, setState]);
    return /* @__PURE__ */ React22.createElement(Router, {
      basename,
      children,
      location: state.location,
      navigationType: state.action,
      navigator: history
    });
  }
  function HistoryRouter({
    basename,
    children,
    history
  }) {
    let [state, setStateImpl] = React22.useState({
      action: history.action,
      location: history.location
    });
    let setState = React22.useCallback((newState) => {
      React22.startTransition(() => setStateImpl(newState));
    }, [setStateImpl]);
    React22.useLayoutEffect(() => history.listen(setState), [history, setState]);
    return /* @__PURE__ */ React22.createElement(Router, {
      basename,
      children,
      location: state.location,
      navigationType: state.action,
      navigator: history
    });
  }
  HistoryRouter.displayName = "unstable_HistoryRouter";
  var ABSOLUTE_URL_REGEX = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
  var Link = React22.forwardRef(function LinkWithRef({
    onClick,
    discover = "render",
    prefetch = "none",
    relative,
    reloadDocument,
    replace,
    state,
    target,
    to,
    preventScrollReset,
    viewTransition,
    ...rest
  }, forwardedRef) {
    let { basename } = React22.useContext(_chunkK7YFBME3js.NavigationContext);
    let isAbsolute = typeof to === "string" && ABSOLUTE_URL_REGEX.test(to);
    let absoluteHref;
    let isExternal = false;
    if (typeof to === "string" && isAbsolute) {
      absoluteHref = to;
      if (isBrowser2) {
        try {
          let currentUrl = new URL(window.location.href);
          let targetUrl = to.startsWith("//") ? new URL(currentUrl.protocol + to) : new URL(to);
          let path = _chunkK7YFBME3js.stripBasename.call(undefined, targetUrl.pathname, basename);
          if (targetUrl.origin === currentUrl.origin && path != null) {
            to = path + targetUrl.search + targetUrl.hash;
          } else {
            isExternal = true;
          }
        } catch (e) {
          _chunkK7YFBME3js.warning.call(undefined, false, `<Link to="${to}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`);
        }
      }
    }
    let href = _chunkK7YFBME3js.useHref.call(undefined, to, { relative });
    let [shouldPrefetch, prefetchRef, prefetchHandlers] = _chunkK7YFBME3js.usePrefetchBehavior.call(undefined, prefetch, rest);
    let internalOnClick = useLinkClickHandler(to, {
      replace,
      state,
      target,
      preventScrollReset,
      relative,
      viewTransition
    });
    function handleClick(event) {
      if (onClick)
        onClick(event);
      if (!event.defaultPrevented) {
        internalOnClick(event);
      }
    }
    let link = /* @__PURE__ */ React22.createElement("a", {
      ...rest,
      ...prefetchHandlers,
      href: absoluteHref || href,
      onClick: isExternal || reloadDocument ? onClick : handleClick,
      ref: _chunkK7YFBME3js.mergeRefs.call(undefined, forwardedRef, prefetchRef),
      target,
      "data-discover": !isAbsolute && discover === "render" ? "true" : undefined
    });
    return shouldPrefetch && !isAbsolute ? /* @__PURE__ */ React22.createElement(React22.Fragment, null, link, /* @__PURE__ */ React22.createElement(_chunkK7YFBME3js.PrefetchPageLinks, { page: href })) : link;
  });
  Link.displayName = "Link";
  var NavLink = React22.forwardRef(function NavLinkWithRef({
    "aria-current": ariaCurrentProp = "page",
    caseSensitive = false,
    className: classNameProp = "",
    end = false,
    style: styleProp,
    to,
    viewTransition,
    children,
    ...rest
  }, ref) {
    let path = _chunkK7YFBME3js.useResolvedPath.call(undefined, to, { relative: rest.relative });
    let location2 = _chunkK7YFBME3js.useLocation.call(undefined);
    let routerState = React22.useContext(_chunkK7YFBME3js.DataRouterStateContext);
    let { navigator: navigator2, basename } = React22.useContext(_chunkK7YFBME3js.NavigationContext);
    let isTransitioning = routerState != null && useViewTransitionState(path) && viewTransition === true;
    let toPathname = navigator2.encodeLocation ? navigator2.encodeLocation(path).pathname : path.pathname;
    let locationPathname = location2.pathname;
    let nextLocationPathname = routerState && routerState.navigation && routerState.navigation.location ? routerState.navigation.location.pathname : null;
    if (!caseSensitive) {
      locationPathname = locationPathname.toLowerCase();
      nextLocationPathname = nextLocationPathname ? nextLocationPathname.toLowerCase() : null;
      toPathname = toPathname.toLowerCase();
    }
    if (nextLocationPathname && basename) {
      nextLocationPathname = _chunkK7YFBME3js.stripBasename.call(undefined, nextLocationPathname, basename) || nextLocationPathname;
    }
    const endSlashPosition = toPathname !== "/" && toPathname.endsWith("/") ? toPathname.length - 1 : toPathname.length;
    let isActive = locationPathname === toPathname || !end && locationPathname.startsWith(toPathname) && locationPathname.charAt(endSlashPosition) === "/";
    let isPending = nextLocationPathname != null && (nextLocationPathname === toPathname || !end && nextLocationPathname.startsWith(toPathname) && nextLocationPathname.charAt(toPathname.length) === "/");
    let renderProps = {
      isActive,
      isPending,
      isTransitioning
    };
    let ariaCurrent = isActive ? ariaCurrentProp : undefined;
    let className;
    if (typeof classNameProp === "function") {
      className = classNameProp(renderProps);
    } else {
      className = [
        classNameProp,
        isActive ? "active" : null,
        isPending ? "pending" : null,
        isTransitioning ? "transitioning" : null
      ].filter(Boolean).join(" ");
    }
    let style = typeof styleProp === "function" ? styleProp(renderProps) : styleProp;
    return /* @__PURE__ */ React22.createElement(Link, {
      ...rest,
      "aria-current": ariaCurrent,
      className,
      ref,
      style,
      to,
      viewTransition
    }, typeof children === "function" ? children(renderProps) : children);
  });
  NavLink.displayName = "NavLink";
  var Form = React22.forwardRef(({
    discover = "render",
    fetcherKey,
    navigate,
    reloadDocument,
    replace,
    state,
    method = defaultMethod,
    action,
    onSubmit,
    relative,
    preventScrollReset,
    viewTransition,
    ...props
  }, forwardedRef) => {
    let submit = useSubmit();
    let formAction = useFormAction(action, { relative });
    let formMethod = method.toLowerCase() === "get" ? "get" : "post";
    let isAbsolute = typeof action === "string" && ABSOLUTE_URL_REGEX.test(action);
    let submitHandler = (event) => {
      onSubmit && onSubmit(event);
      if (event.defaultPrevented)
        return;
      event.preventDefault();
      let submitter = event.nativeEvent.submitter;
      let submitMethod = _optionalChain([submitter, "optionalAccess", (_29) => _29.getAttribute, "call", (_30) => _30("formmethod")]) || method;
      submit(submitter || event.currentTarget, {
        fetcherKey,
        method: submitMethod,
        navigate,
        replace,
        state,
        relative,
        preventScrollReset,
        viewTransition
      });
    };
    return /* @__PURE__ */ React22.createElement("form", {
      ref: forwardedRef,
      method: formMethod,
      action: formAction,
      onSubmit: reloadDocument ? onSubmit : submitHandler,
      ...props,
      "data-discover": !isAbsolute && discover === "render" ? "true" : undefined
    });
  });
  Form.displayName = "Form";
  function ScrollRestoration({
    getKey,
    storageKey,
    ...props
  }) {
    let remixContext = React22.useContext(_chunkK7YFBME3js.FrameworkContext);
    let { basename } = React22.useContext(_chunkK7YFBME3js.NavigationContext);
    let location2 = _chunkK7YFBME3js.useLocation.call(undefined);
    let matches = _chunkK7YFBME3js.useMatches.call(undefined);
    useScrollRestoration({ getKey, storageKey });
    let ssrKey = React22.useMemo(() => {
      if (!remixContext || !getKey)
        return null;
      let userKey = getScrollRestorationKey(location2, matches, basename, getKey);
      return userKey !== location2.key ? userKey : null;
    }, []);
    if (!remixContext || remixContext.isSpaMode) {
      return null;
    }
    let restoreScroll = ((storageKey2, restoreKey) => {
      if (!window.history.state || !window.history.state.key) {
        let key = Math.random().toString(32).slice(2);
        window.history.replaceState({ key }, "");
      }
      try {
        let positions = JSON.parse(sessionStorage.getItem(storageKey2) || "{}");
        let storedY = positions[restoreKey || window.history.state.key];
        if (typeof storedY === "number") {
          window.scrollTo(0, storedY);
        }
      } catch (error) {
        console.error(error);
        sessionStorage.removeItem(storageKey2);
      }
    }).toString();
    return /* @__PURE__ */ React22.createElement("script", {
      ...props,
      suppressHydrationWarning: true,
      dangerouslySetInnerHTML: {
        __html: `(${restoreScroll})(${JSON.stringify(storageKey || SCROLL_RESTORATION_STORAGE_KEY)}, ${JSON.stringify(ssrKey)})`
      }
    });
  }
  ScrollRestoration.displayName = "ScrollRestoration";
  function getDataRouterConsoleError(hookName) {
    return `${hookName} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
  }
  function useDataRouterContext(hookName) {
    let ctx = React22.useContext(_chunkK7YFBME3js.DataRouterContext);
    _chunkK7YFBME3js.invariant.call(undefined, ctx, getDataRouterConsoleError(hookName));
    return ctx;
  }
  function useDataRouterState(hookName) {
    let state = React22.useContext(_chunkK7YFBME3js.DataRouterStateContext);
    _chunkK7YFBME3js.invariant.call(undefined, state, getDataRouterConsoleError(hookName));
    return state;
  }
  function useLinkClickHandler(to, {
    target,
    replace: replaceProp,
    state,
    preventScrollReset,
    relative,
    viewTransition
  } = {}) {
    let navigate = _chunkK7YFBME3js.useNavigate.call(undefined);
    let location2 = _chunkK7YFBME3js.useLocation.call(undefined);
    let path = _chunkK7YFBME3js.useResolvedPath.call(undefined, to, { relative });
    return React22.useCallback((event) => {
      if (shouldProcessLinkClick(event, target)) {
        event.preventDefault();
        let replace = replaceProp !== undefined ? replaceProp : _chunkK7YFBME3js.createPath.call(undefined, location2) === _chunkK7YFBME3js.createPath.call(undefined, path);
        navigate(to, {
          replace,
          state,
          preventScrollReset,
          relative,
          viewTransition
        });
      }
    }, [
      location2,
      navigate,
      path,
      replaceProp,
      state,
      target,
      to,
      preventScrollReset,
      relative,
      viewTransition
    ]);
  }
  function useSearchParams(defaultInit) {
    _chunkK7YFBME3js.warning.call(undefined, typeof URLSearchParams !== "undefined", `You cannot use the \`useSearchParams\` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.`);
    let defaultSearchParamsRef = React22.useRef(createSearchParams(defaultInit));
    let hasSetSearchParamsRef = React22.useRef(false);
    let location2 = _chunkK7YFBME3js.useLocation.call(undefined);
    let searchParams = React22.useMemo(() => getSearchParamsForLocation(location2.search, hasSetSearchParamsRef.current ? null : defaultSearchParamsRef.current), [location2.search]);
    let navigate = _chunkK7YFBME3js.useNavigate.call(undefined);
    let setSearchParams = React22.useCallback((nextInit, navigateOptions) => {
      const newSearchParams = createSearchParams(typeof nextInit === "function" ? nextInit(new URLSearchParams(searchParams)) : nextInit);
      hasSetSearchParamsRef.current = true;
      navigate("?" + newSearchParams, navigateOptions);
    }, [navigate, searchParams]);
    return [searchParams, setSearchParams];
  }
  var fetcherId = 0;
  var getUniqueFetcherId = () => `__${String(++fetcherId)}__`;
  function useSubmit() {
    let { router } = useDataRouterContext("useSubmit");
    let { basename } = React22.useContext(_chunkK7YFBME3js.NavigationContext);
    let currentRouteId = _chunkK7YFBME3js.useRouteId.call(undefined);
    return React22.useCallback(async (target, options = {}) => {
      let { action, method, encType, formData, body } = getFormSubmissionInfo(target, basename);
      if (options.navigate === false) {
        let key = options.fetcherKey || getUniqueFetcherId();
        await router.fetch(key, currentRouteId, options.action || action, {
          preventScrollReset: options.preventScrollReset,
          formData,
          body,
          formMethod: options.method || method,
          formEncType: options.encType || encType,
          flushSync: options.flushSync
        });
      } else {
        await router.navigate(options.action || action, {
          preventScrollReset: options.preventScrollReset,
          formData,
          body,
          formMethod: options.method || method,
          formEncType: options.encType || encType,
          replace: options.replace,
          state: options.state,
          fromRouteId: currentRouteId,
          flushSync: options.flushSync,
          viewTransition: options.viewTransition
        });
      }
    }, [router, basename, currentRouteId]);
  }
  function useFormAction(action, { relative } = {}) {
    let { basename } = React22.useContext(_chunkK7YFBME3js.NavigationContext);
    let routeContext = React22.useContext(_chunkK7YFBME3js.RouteContext);
    _chunkK7YFBME3js.invariant.call(undefined, routeContext, "useFormAction must be used inside a RouteContext");
    let [match] = routeContext.matches.slice(-1);
    let path = { ..._chunkK7YFBME3js.useResolvedPath.call(undefined, action ? action : ".", { relative }) };
    let location2 = _chunkK7YFBME3js.useLocation.call(undefined);
    if (action == null) {
      path.search = location2.search;
      let params = new URLSearchParams(path.search);
      let indexValues = params.getAll("index");
      let hasNakedIndexParam = indexValues.some((v) => v === "");
      if (hasNakedIndexParam) {
        params.delete("index");
        indexValues.filter((v) => v).forEach((v) => params.append("index", v));
        let qs = params.toString();
        path.search = qs ? `?${qs}` : "";
      }
    }
    if ((!action || action === ".") && match.route.index) {
      path.search = path.search ? path.search.replace(/^\?/, "?index&") : "?index";
    }
    if (basename !== "/") {
      path.pathname = path.pathname === "/" ? basename : _chunkK7YFBME3js.joinPaths.call(undefined, [basename, path.pathname]);
    }
    return _chunkK7YFBME3js.createPath.call(undefined, path);
  }
  function useFetcher({
    key
  } = {}) {
    let { router } = useDataRouterContext("useFetcher");
    let state = useDataRouterState("useFetcher");
    let fetcherData = React22.useContext(_chunkK7YFBME3js.FetchersContext);
    let route = React22.useContext(_chunkK7YFBME3js.RouteContext);
    let routeId = _optionalChain([route, "access", (_31) => _31.matches, "access", (_32) => _32[route.matches.length - 1], "optionalAccess", (_33) => _33.route, "access", (_34) => _34.id]);
    _chunkK7YFBME3js.invariant.call(undefined, fetcherData, `useFetcher must be used inside a FetchersContext`);
    _chunkK7YFBME3js.invariant.call(undefined, route, `useFetcher must be used inside a RouteContext`);
    _chunkK7YFBME3js.invariant.call(undefined, routeId != null, `useFetcher can only be used on routes that contain a unique "id"`);
    let defaultKey = React22.useId();
    let [fetcherKey, setFetcherKey] = React22.useState(key || defaultKey);
    if (key && key !== fetcherKey) {
      setFetcherKey(key);
    }
    React22.useEffect(() => {
      router.getFetcher(fetcherKey);
      return () => router.deleteFetcher(fetcherKey);
    }, [router, fetcherKey]);
    let load = React22.useCallback(async (href, opts) => {
      _chunkK7YFBME3js.invariant.call(undefined, routeId, "No routeId available for fetcher.load()");
      await router.fetch(fetcherKey, routeId, href, opts);
    }, [fetcherKey, routeId, router]);
    let submitImpl = useSubmit();
    let submit = React22.useCallback(async (target, opts) => {
      await submitImpl(target, {
        ...opts,
        navigate: false,
        fetcherKey
      });
    }, [fetcherKey, submitImpl]);
    let FetcherForm = React22.useMemo(() => {
      let FetcherForm2 = React22.forwardRef((props, ref) => {
        return /* @__PURE__ */ React22.createElement(Form, { ...props, navigate: false, fetcherKey, ref });
      });
      FetcherForm2.displayName = "fetcher.Form";
      return FetcherForm2;
    }, [fetcherKey]);
    let fetcher = state.fetchers.get(fetcherKey) || _chunkK7YFBME3js.IDLE_FETCHER;
    let data = fetcherData.get(fetcherKey);
    let fetcherWithComponents = React22.useMemo(() => ({
      Form: FetcherForm,
      submit,
      load,
      ...fetcher,
      data
    }), [FetcherForm, submit, load, fetcher, data]);
    return fetcherWithComponents;
  }
  function useFetchers() {
    let state = useDataRouterState("useFetchers");
    return Array.from(state.fetchers.entries()).map(([key, fetcher]) => ({
      ...fetcher,
      key
    }));
  }
  var SCROLL_RESTORATION_STORAGE_KEY = "react-router-scroll-positions";
  var savedScrollPositions = {};
  function getScrollRestorationKey(location2, matches, basename, getKey) {
    let key = null;
    if (getKey) {
      if (basename !== "/") {
        key = getKey({
          ...location2,
          pathname: _chunkK7YFBME3js.stripBasename.call(undefined, location2.pathname, basename) || location2.pathname
        }, matches);
      } else {
        key = getKey(location2, matches);
      }
    }
    if (key == null) {
      key = location2.key;
    }
    return key;
  }
  function useScrollRestoration({
    getKey,
    storageKey
  } = {}) {
    let { router } = useDataRouterContext("useScrollRestoration");
    let { restoreScrollPosition, preventScrollReset } = useDataRouterState("useScrollRestoration");
    let { basename } = React22.useContext(_chunkK7YFBME3js.NavigationContext);
    let location2 = _chunkK7YFBME3js.useLocation.call(undefined);
    let matches = _chunkK7YFBME3js.useMatches.call(undefined);
    let navigation = _chunkK7YFBME3js.useNavigation.call(undefined);
    React22.useEffect(() => {
      window.history.scrollRestoration = "manual";
      return () => {
        window.history.scrollRestoration = "auto";
      };
    }, []);
    usePageHide(React22.useCallback(() => {
      if (navigation.state === "idle") {
        let key = getScrollRestorationKey(location2, matches, basename, getKey);
        savedScrollPositions[key] = window.scrollY;
      }
      try {
        sessionStorage.setItem(storageKey || SCROLL_RESTORATION_STORAGE_KEY, JSON.stringify(savedScrollPositions));
      } catch (error) {
        _chunkK7YFBME3js.warning.call(undefined, false, `Failed to save scroll positions in sessionStorage, <ScrollRestoration /> will not work properly (${error}).`);
      }
      window.history.scrollRestoration = "auto";
    }, [navigation.state, getKey, basename, location2, matches, storageKey]));
    if (typeof document !== "undefined") {
      React22.useLayoutEffect(() => {
        try {
          let sessionPositions = sessionStorage.getItem(storageKey || SCROLL_RESTORATION_STORAGE_KEY);
          if (sessionPositions) {
            savedScrollPositions = JSON.parse(sessionPositions);
          }
        } catch (e) {}
      }, [storageKey]);
      React22.useLayoutEffect(() => {
        let disableScrollRestoration = _optionalChain([router, "optionalAccess", (_35) => _35.enableScrollRestoration, "call", (_36) => _36(savedScrollPositions, () => window.scrollY, getKey ? (location22, matches2) => getScrollRestorationKey(location22, matches2, basename, getKey) : undefined)]);
        return () => disableScrollRestoration && disableScrollRestoration();
      }, [router, basename, getKey]);
      React22.useLayoutEffect(() => {
        if (restoreScrollPosition === false) {
          return;
        }
        if (typeof restoreScrollPosition === "number") {
          window.scrollTo(0, restoreScrollPosition);
          return;
        }
        try {
          if (location2.hash) {
            let el = document.getElementById(decodeURIComponent(location2.hash.slice(1)));
            if (el) {
              el.scrollIntoView();
              return;
            }
          }
        } catch (e2) {
          _chunkK7YFBME3js.warning.call(undefined, false, `"${location2.hash.slice(1)}" is not a decodable element ID. The view will not scroll to it.`);
        }
        if (preventScrollReset === true) {
          return;
        }
        window.scrollTo(0, 0);
      }, [location2, restoreScrollPosition, preventScrollReset]);
    }
  }
  function useBeforeUnload(callback, options) {
    let { capture } = options || {};
    React22.useEffect(() => {
      let opts = capture != null ? { capture } : undefined;
      window.addEventListener("beforeunload", callback, opts);
      return () => {
        window.removeEventListener("beforeunload", callback, opts);
      };
    }, [callback, capture]);
  }
  function usePageHide(callback, options) {
    let { capture } = options || {};
    React22.useEffect(() => {
      let opts = capture != null ? { capture } : undefined;
      window.addEventListener("pagehide", callback, opts);
      return () => {
        window.removeEventListener("pagehide", callback, opts);
      };
    }, [callback, capture]);
  }
  function usePrompt({
    when,
    message
  }) {
    let blocker = _chunkK7YFBME3js.useBlocker.call(undefined, when);
    React22.useEffect(() => {
      if (blocker.state === "blocked") {
        let proceed = window.confirm(message);
        if (proceed) {
          setTimeout(blocker.proceed, 0);
        } else {
          blocker.reset();
        }
      }
    }, [blocker, message]);
    React22.useEffect(() => {
      if (blocker.state === "blocked" && !when) {
        blocker.reset();
      }
    }, [blocker, when]);
  }
  function useViewTransitionState(to, { relative } = {}) {
    let vtContext = React22.useContext(_chunkK7YFBME3js.ViewTransitionContext);
    _chunkK7YFBME3js.invariant.call(undefined, vtContext != null, "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");
    let { basename } = useDataRouterContext("useViewTransitionState");
    let path = _chunkK7YFBME3js.useResolvedPath.call(undefined, to, { relative });
    if (!vtContext.isTransitioning) {
      return false;
    }
    let currentPath = _chunkK7YFBME3js.stripBasename.call(undefined, vtContext.currentLocation.pathname, basename) || vtContext.currentLocation.pathname;
    let nextPath = _chunkK7YFBME3js.stripBasename.call(undefined, vtContext.nextLocation.pathname, basename) || vtContext.nextLocation.pathname;
    return _chunkK7YFBME3js.matchPath.call(undefined, path.pathname, nextPath) != null || _chunkK7YFBME3js.matchPath.call(undefined, path.pathname, currentPath) != null;
  }
  function StaticRouter({
    basename,
    children,
    location: locationProp = "/"
  }) {
    if (typeof locationProp === "string") {
      locationProp = _chunkK7YFBME3js.parsePath.call(undefined, locationProp);
    }
    let action = "POP";
    let location2 = {
      pathname: locationProp.pathname || "/",
      search: locationProp.search || "",
      hash: locationProp.hash || "",
      state: locationProp.state != null ? locationProp.state : null,
      key: locationProp.key || "default"
    };
    let staticNavigator = getStatelessNavigator();
    return /* @__PURE__ */ React3.createElement(Router, {
      basename,
      children,
      location: location2,
      navigationType: action,
      navigator: staticNavigator,
      static: true
    });
  }
  function StaticRouterProvider({
    context,
    router,
    hydrate = true,
    nonce
  }) {
    _chunkK7YFBME3js.invariant.call(undefined, router && context, "You must provide `router` and `context` to <StaticRouterProvider>");
    let dataRouterContext = {
      router,
      navigator: getStatelessNavigator(),
      static: true,
      staticContext: context,
      basename: context.basename || "/"
    };
    let fetchersContext = /* @__PURE__ */ new Map;
    let hydrateScript = "";
    if (hydrate !== false) {
      let data = {
        loaderData: context.loaderData,
        actionData: context.actionData,
        errors: serializeErrors(context.errors)
      };
      let json = htmlEscape(JSON.stringify(JSON.stringify(data)));
      hydrateScript = `window.__staticRouterHydrationData = JSON.parse(${json});`;
    }
    let { state } = dataRouterContext.router;
    return /* @__PURE__ */ React3.createElement(React3.Fragment, null, /* @__PURE__ */ React3.createElement(_chunkK7YFBME3js.DataRouterContext.Provider, { value: dataRouterContext }, /* @__PURE__ */ React3.createElement(_chunkK7YFBME3js.DataRouterStateContext.Provider, { value: state }, /* @__PURE__ */ React3.createElement(_chunkK7YFBME3js.FetchersContext.Provider, { value: fetchersContext }, /* @__PURE__ */ React3.createElement(_chunkK7YFBME3js.ViewTransitionContext.Provider, { value: { isTransitioning: false } }, /* @__PURE__ */ React3.createElement(Router, {
      basename: dataRouterContext.basename,
      location: state.location,
      navigationType: state.historyAction,
      navigator: dataRouterContext.navigator,
      static: dataRouterContext.static
    }, /* @__PURE__ */ React3.createElement(DataRoutes2, {
      routes: router.routes,
      future: router.future,
      state
    })))))), hydrateScript ? /* @__PURE__ */ React3.createElement("script", {
      suppressHydrationWarning: true,
      nonce,
      dangerouslySetInnerHTML: { __html: hydrateScript }
    }) : null);
  }
  function DataRoutes2({
    routes,
    future,
    state
  }) {
    return _chunkK7YFBME3js.useRoutesImpl.call(undefined, routes, undefined, state, future);
  }
  function serializeErrors(errors) {
    if (!errors)
      return null;
    let entries = Object.entries(errors);
    let serialized = {};
    for (let [key, val] of entries) {
      if (_chunkK7YFBME3js.isRouteErrorResponse.call(undefined, val)) {
        serialized[key] = { ...val, __type: "RouteErrorResponse" };
      } else if (val instanceof Error) {
        serialized[key] = {
          message: val.message,
          __type: "Error",
          ...val.name !== "Error" ? {
            __subType: val.name
          } : {}
        };
      } else {
        serialized[key] = val;
      }
    }
    return serialized;
  }
  function getStatelessNavigator() {
    return {
      createHref,
      encodeLocation,
      push(to) {
        throw new Error(`You cannot use navigator.push() on the server because it is a stateless environment. This error was probably triggered when you did a \`navigate(${JSON.stringify(to)})\` somewhere in your app.`);
      },
      replace(to) {
        throw new Error(`You cannot use navigator.replace() on the server because it is a stateless environment. This error was probably triggered when you did a \`navigate(${JSON.stringify(to)}, { replace: true })\` somewhere in your app.`);
      },
      go(delta) {
        throw new Error(`You cannot use navigator.go() on the server because it is a stateless environment. This error was probably triggered when you did a \`navigate(${delta})\` somewhere in your app.`);
      },
      back() {
        throw new Error(`You cannot use navigator.back() on the server because it is a stateless environment.`);
      },
      forward() {
        throw new Error(`You cannot use navigator.forward() on the server because it is a stateless environment.`);
      }
    };
  }
  function createStaticHandler2(routes, opts) {
    return _chunkK7YFBME3js.createStaticHandler.call(undefined, routes, {
      ...opts,
      mapRouteProperties
    });
  }
  function createStaticRouter(routes, context, opts = {}) {
    let manifest = {};
    let dataRoutes = _chunkK7YFBME3js.convertRoutesToDataRoutes.call(undefined, routes, mapRouteProperties, undefined, manifest);
    let matches = context.matches.map((match) => {
      let route = manifest[match.route.id] || match.route;
      return {
        ...match,
        route
      };
    });
    let msg = (method) => `You cannot use router.${method}() on the server because it is a stateless environment`;
    return {
      get basename() {
        return context.basename;
      },
      get future() {
        return {
          unstable_middleware: false,
          ..._optionalChain([opts, "optionalAccess", (_37) => _37.future])
        };
      },
      get state() {
        return {
          historyAction: "POP",
          location: context.location,
          matches,
          loaderData: context.loaderData,
          actionData: context.actionData,
          errors: context.errors,
          initialized: true,
          navigation: _chunkK7YFBME3js.IDLE_NAVIGATION,
          restoreScrollPosition: null,
          preventScrollReset: false,
          revalidation: "idle",
          fetchers: /* @__PURE__ */ new Map,
          blockers: /* @__PURE__ */ new Map
        };
      },
      get routes() {
        return dataRoutes;
      },
      get window() {
        return;
      },
      initialize() {
        throw msg("initialize");
      },
      subscribe() {
        throw msg("subscribe");
      },
      enableScrollRestoration() {
        throw msg("enableScrollRestoration");
      },
      navigate() {
        throw msg("navigate");
      },
      fetch() {
        throw msg("fetch");
      },
      revalidate() {
        throw msg("revalidate");
      },
      createHref,
      encodeLocation,
      getFetcher() {
        return _chunkK7YFBME3js.IDLE_FETCHER;
      },
      deleteFetcher() {
        throw msg("deleteFetcher");
      },
      dispose() {
        throw msg("dispose");
      },
      getBlocker() {
        return _chunkK7YFBME3js.IDLE_BLOCKER;
      },
      deleteBlocker() {
        throw msg("deleteBlocker");
      },
      patchRoutes() {
        throw msg("patchRoutes");
      },
      _internalFetchControllers: /* @__PURE__ */ new Map,
      _internalSetRoutes() {
        throw msg("_internalSetRoutes");
      },
      _internalSetStateDoNotUseOrYouWillBreakYourApp() {
        throw msg("_internalSetStateDoNotUseOrYouWillBreakYourApp");
      }
    };
  }
  function createHref(to) {
    return typeof to === "string" ? to : _chunkK7YFBME3js.createPath.call(undefined, to);
  }
  function encodeLocation(to) {
    let href = typeof to === "string" ? to : _chunkK7YFBME3js.createPath.call(undefined, to);
    href = href.replace(/ $/, "%20");
    let encoded = ABSOLUTE_URL_REGEX2.test(href) ? new URL(href) : new URL(href, "http://localhost");
    return {
      pathname: encoded.pathname,
      search: encoded.search,
      hash: encoded.hash
    };
  }
  var ABSOLUTE_URL_REGEX2 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
  var ESCAPE_LOOKUP = {
    "&": "\\u0026",
    ">": "\\u003e",
    "<": "\\u003c",
    "\u2028": "\\u2028",
    "\u2029": "\\u2029"
  };
  var ESCAPE_REGEX = /[&><\u2028\u2029]/g;
  function htmlEscape(str) {
    return str.replace(ESCAPE_REGEX, (match) => ESCAPE_LOOKUP[match]);
  }
  exports.mapRouteProperties = mapRouteProperties;
  exports.hydrationRouteProperties = hydrationRouteProperties;
  exports.createMemoryRouter = createMemoryRouter;
  exports.RouterProvider = RouterProvider2;
  exports.MemoryRouter = MemoryRouter;
  exports.Navigate = Navigate;
  exports.Outlet = Outlet;
  exports.Route = Route;
  exports.Router = Router;
  exports.Routes = Routes;
  exports.Await = Await;
  exports.createRoutesFromChildren = createRoutesFromChildren;
  exports.createRoutesFromElements = createRoutesFromElements;
  exports.renderMatches = renderMatches;
  exports.WithComponentProps = WithComponentProps;
  exports.withComponentProps = withComponentProps;
  exports.WithHydrateFallbackProps = WithHydrateFallbackProps;
  exports.withHydrateFallbackProps = withHydrateFallbackProps;
  exports.WithErrorBoundaryProps = WithErrorBoundaryProps;
  exports.withErrorBoundaryProps = withErrorBoundaryProps;
  exports.createSearchParams = createSearchParams;
  exports.createBrowserRouter = createBrowserRouter;
  exports.createHashRouter = createHashRouter;
  exports.BrowserRouter = BrowserRouter;
  exports.HashRouter = HashRouter;
  exports.HistoryRouter = HistoryRouter;
  exports.Link = Link;
  exports.NavLink = NavLink;
  exports.Form = Form;
  exports.ScrollRestoration = ScrollRestoration;
  exports.useLinkClickHandler = useLinkClickHandler;
  exports.useSearchParams = useSearchParams;
  exports.useSubmit = useSubmit;
  exports.useFormAction = useFormAction;
  exports.useFetcher = useFetcher;
  exports.useFetchers = useFetchers;
  exports.useScrollRestoration = useScrollRestoration;
  exports.useBeforeUnload = useBeforeUnload;
  exports.usePrompt = usePrompt;
  exports.useViewTransitionState = useViewTransitionState;
  exports.StaticRouter = StaticRouter;
  exports.StaticRouterProvider = StaticRouterProvider;
  exports.createStaticHandler = createStaticHandler2;
  exports.createStaticRouter = createStaticRouter;
});

// node_modules/cookie/dist/index.js
var require_dist = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.parse = parse;
  exports.serialize = serialize;
  var cookieNameRegExp = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/;
  var cookieValueRegExp = /^[\u0021-\u003A\u003C-\u007E]*$/;
  var domainValueRegExp = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i;
  var pathValueRegExp = /^[\u0020-\u003A\u003D-\u007E]*$/;
  var __toString = Object.prototype.toString;
  var NullObject = /* @__PURE__ */ (() => {
    const C = function() {};
    C.prototype = Object.create(null);
    return C;
  })();
  function parse(str, options) {
    const obj = new NullObject;
    const len = str.length;
    if (len < 2)
      return obj;
    const dec = options?.decode || decode;
    let index = 0;
    do {
      const eqIdx = str.indexOf("=", index);
      if (eqIdx === -1)
        break;
      const colonIdx = str.indexOf(";", index);
      const endIdx = colonIdx === -1 ? len : colonIdx;
      if (eqIdx > endIdx) {
        index = str.lastIndexOf(";", eqIdx - 1) + 1;
        continue;
      }
      const keyStartIdx = startIndex(str, index, eqIdx);
      const keyEndIdx = endIndex(str, eqIdx, keyStartIdx);
      const key = str.slice(keyStartIdx, keyEndIdx);
      if (obj[key] === undefined) {
        let valStartIdx = startIndex(str, eqIdx + 1, endIdx);
        let valEndIdx = endIndex(str, endIdx, valStartIdx);
        const value = dec(str.slice(valStartIdx, valEndIdx));
        obj[key] = value;
      }
      index = endIdx + 1;
    } while (index < len);
    return obj;
  }
  function startIndex(str, index, max) {
    do {
      const code = str.charCodeAt(index);
      if (code !== 32 && code !== 9)
        return index;
    } while (++index < max);
    return max;
  }
  function endIndex(str, index, min) {
    while (index > min) {
      const code = str.charCodeAt(--index);
      if (code !== 32 && code !== 9)
        return index + 1;
    }
    return min;
  }
  function serialize(name, val, options) {
    const enc = options?.encode || encodeURIComponent;
    if (!cookieNameRegExp.test(name)) {
      throw new TypeError(`argument name is invalid: ${name}`);
    }
    const value = enc(val);
    if (!cookieValueRegExp.test(value)) {
      throw new TypeError(`argument val is invalid: ${val}`);
    }
    let str = name + "=" + value;
    if (!options)
      return str;
    if (options.maxAge !== undefined) {
      if (!Number.isInteger(options.maxAge)) {
        throw new TypeError(`option maxAge is invalid: ${options.maxAge}`);
      }
      str += "; Max-Age=" + options.maxAge;
    }
    if (options.domain) {
      if (!domainValueRegExp.test(options.domain)) {
        throw new TypeError(`option domain is invalid: ${options.domain}`);
      }
      str += "; Domain=" + options.domain;
    }
    if (options.path) {
      if (!pathValueRegExp.test(options.path)) {
        throw new TypeError(`option path is invalid: ${options.path}`);
      }
      str += "; Path=" + options.path;
    }
    if (options.expires) {
      if (!isDate(options.expires) || !Number.isFinite(options.expires.valueOf())) {
        throw new TypeError(`option expires is invalid: ${options.expires}`);
      }
      str += "; Expires=" + options.expires.toUTCString();
    }
    if (options.httpOnly) {
      str += "; HttpOnly";
    }
    if (options.secure) {
      str += "; Secure";
    }
    if (options.partitioned) {
      str += "; Partitioned";
    }
    if (options.priority) {
      const priority = typeof options.priority === "string" ? options.priority.toLowerCase() : undefined;
      switch (priority) {
        case "low":
          str += "; Priority=Low";
          break;
        case "medium":
          str += "; Priority=Medium";
          break;
        case "high":
          str += "; Priority=High";
          break;
        default:
          throw new TypeError(`option priority is invalid: ${options.priority}`);
      }
    }
    if (options.sameSite) {
      const sameSite = typeof options.sameSite === "string" ? options.sameSite.toLowerCase() : options.sameSite;
      switch (sameSite) {
        case true:
        case "strict":
          str += "; SameSite=Strict";
          break;
        case "lax":
          str += "; SameSite=Lax";
          break;
        case "none":
          str += "; SameSite=None";
          break;
        default:
          throw new TypeError(`option sameSite is invalid: ${options.sameSite}`);
      }
    }
    return str;
  }
  function decode(str) {
    if (str.indexOf("%") === -1)
      return str;
    try {
      return decodeURIComponent(str);
    } catch (e) {
      return str;
    }
  }
  function isDate(val) {
    return __toString.call(val) === "[object Date]";
  }
});

// node_modules/set-cookie-parser/lib/set-cookie.js
var require_set_cookie = __commonJS((exports, module) => {
  var defaultParseOptions = {
    decodeValues: true,
    map: false,
    silent: false
  };
  function isNonEmptyString(str) {
    return typeof str === "string" && !!str.trim();
  }
  function parseString(setCookieValue, options) {
    var parts = setCookieValue.split(";").filter(isNonEmptyString);
    var nameValuePairStr = parts.shift();
    var parsed = parseNameValuePair(nameValuePairStr);
    var name = parsed.name;
    var value = parsed.value;
    options = options ? Object.assign({}, defaultParseOptions, options) : defaultParseOptions;
    try {
      value = options.decodeValues ? decodeURIComponent(value) : value;
    } catch (e) {
      console.error("set-cookie-parser encountered an error while decoding a cookie with value '" + value + "'. Set options.decodeValues to false to disable this feature.", e);
    }
    var cookie = {
      name,
      value
    };
    parts.forEach(function(part) {
      var sides = part.split("=");
      var key = sides.shift().trimLeft().toLowerCase();
      var value2 = sides.join("=");
      if (key === "expires") {
        cookie.expires = new Date(value2);
      } else if (key === "max-age") {
        cookie.maxAge = parseInt(value2, 10);
      } else if (key === "secure") {
        cookie.secure = true;
      } else if (key === "httponly") {
        cookie.httpOnly = true;
      } else if (key === "samesite") {
        cookie.sameSite = value2;
      } else if (key === "partitioned") {
        cookie.partitioned = true;
      } else {
        cookie[key] = value2;
      }
    });
    return cookie;
  }
  function parseNameValuePair(nameValuePairStr) {
    var name = "";
    var value = "";
    var nameValueArr = nameValuePairStr.split("=");
    if (nameValueArr.length > 1) {
      name = nameValueArr.shift();
      value = nameValueArr.join("=");
    } else {
      value = nameValuePairStr;
    }
    return { name, value };
  }
  function parse(input, options) {
    options = options ? Object.assign({}, defaultParseOptions, options) : defaultParseOptions;
    if (!input) {
      if (!options.map) {
        return [];
      } else {
        return {};
      }
    }
    if (input.headers) {
      if (typeof input.headers.getSetCookie === "function") {
        input = input.headers.getSetCookie();
      } else if (input.headers["set-cookie"]) {
        input = input.headers["set-cookie"];
      } else {
        var sch = input.headers[Object.keys(input.headers).find(function(key) {
          return key.toLowerCase() === "set-cookie";
        })];
        if (!sch && input.headers.cookie && !options.silent) {
          console.warn("Warning: set-cookie-parser appears to have been called on a request object. It is designed to parse Set-Cookie headers from responses, not Cookie headers from requests. Set the option {silent: true} to suppress this warning.");
        }
        input = sch;
      }
    }
    if (!Array.isArray(input)) {
      input = [input];
    }
    if (!options.map) {
      return input.filter(isNonEmptyString).map(function(str) {
        return parseString(str, options);
      });
    } else {
      var cookies = {};
      return input.filter(isNonEmptyString).reduce(function(cookies2, str) {
        var cookie = parseString(str, options);
        cookies2[cookie.name] = cookie;
        return cookies2;
      }, cookies);
    }
  }
  function splitCookiesString(cookiesString) {
    if (Array.isArray(cookiesString)) {
      return cookiesString;
    }
    if (typeof cookiesString !== "string") {
      return [];
    }
    var cookiesStrings = [];
    var pos = 0;
    var start;
    var ch;
    var lastComma;
    var nextStart;
    var cookiesSeparatorFound;
    function skipWhitespace() {
      while (pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))) {
        pos += 1;
      }
      return pos < cookiesString.length;
    }
    function notSpecialChar() {
      ch = cookiesString.charAt(pos);
      return ch !== "=" && ch !== ";" && ch !== ",";
    }
    while (pos < cookiesString.length) {
      start = pos;
      cookiesSeparatorFound = false;
      while (skipWhitespace()) {
        ch = cookiesString.charAt(pos);
        if (ch === ",") {
          lastComma = pos;
          pos += 1;
          skipWhitespace();
          nextStart = pos;
          while (pos < cookiesString.length && notSpecialChar()) {
            pos += 1;
          }
          if (pos < cookiesString.length && cookiesString.charAt(pos) === "=") {
            cookiesSeparatorFound = true;
            pos = nextStart;
            cookiesStrings.push(cookiesString.substring(start, lastComma));
            start = pos;
          } else {
            pos = lastComma + 1;
          }
        } else {
          pos += 1;
        }
      }
      if (!cookiesSeparatorFound || pos >= cookiesString.length) {
        cookiesStrings.push(cookiesString.substring(start, cookiesString.length));
      }
    }
    return cookiesStrings;
  }
  module.exports = parse;
  module.exports.parse = parse;
  module.exports.parseString = parseString;
  module.exports.splitCookiesString = splitCookiesString;
});

// node_modules/react-router/dist/development/index.js
var require_development = __commonJS((exports) => {
  var _react = __toESM(require_react(), 1);
  var _reactdom = __toESM(require_react_dom(), 1);
  Object.defineProperty(exports, "__esModule", { value: true });
  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};
      if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) {
            newObj[key] = obj[key];
          }
        }
      }
      newObj.default = obj;
      return newObj;
    }
  }
  function _nullishCoalesce(lhs, rhsFn) {
    if (lhs != null) {
      return lhs;
    } else {
      return rhsFn();
    }
  }
  function _optionalChain(ops) {
    let lastAccessLHS = undefined;
    let value = ops[0];
    let i = 1;
    while (i < ops.length) {
      const op = ops[i];
      const fn = ops[i + 1];
      i += 2;
      if ((op === "optionalAccess" || op === "optionalCall") && value == null) {
        return;
      }
      if (op === "access" || op === "optionalAccess") {
        lastAccessLHS = value;
        value = fn(value);
      } else if (op === "call" || op === "optionalCall") {
        value = fn((...args) => value.call(lastAccessLHS, ...args));
        lastAccessLHS = undefined;
      }
    }
    return value;
  }
  var _chunkR73PQUJUjs = require_chunk_R73PQUJU();
  var _chunkK7YFBME3js = require_chunk_K7YFBME3();
  var React2 = _interopRequireWildcard(_react);
  var React22 = _interopRequireWildcard(_react);
  var React4 = _interopRequireWildcard(_react);
  var React5 = _interopRequireWildcard(_react);
  function ServerRouter({
    context,
    url,
    nonce
  }) {
    if (typeof url === "string") {
      url = new URL(url);
    }
    let { manifest, routeModules, criticalCss, serverHandoffString } = context;
    let routes = _chunkK7YFBME3js.createServerRoutes.call(undefined, manifest.routes, routeModules, context.future, context.isSpaMode);
    context.staticHandlerContext.loaderData = {
      ...context.staticHandlerContext.loaderData
    };
    for (let match of context.staticHandlerContext.matches) {
      let routeId = match.route.id;
      let route = routeModules[routeId];
      let manifestRoute = context.manifest.routes[routeId];
      if (route && manifestRoute && _chunkK7YFBME3js.shouldHydrateRouteLoader.call(undefined, routeId, route.clientLoader, manifestRoute.hasLoader, context.isSpaMode) && (route.HydrateFallback || !manifestRoute.hasLoader)) {
        delete context.staticHandlerContext.loaderData[routeId];
      }
    }
    let router = _chunkR73PQUJUjs.createStaticRouter.call(undefined, routes, context.staticHandlerContext);
    return /* @__PURE__ */ React2.createElement(React2.Fragment, null, /* @__PURE__ */ React2.createElement(_chunkK7YFBME3js.FrameworkContext.Provider, {
      value: {
        manifest,
        routeModules,
        criticalCss,
        serverHandoffString,
        future: context.future,
        ssr: context.ssr,
        isSpaMode: context.isSpaMode,
        routeDiscovery: context.routeDiscovery,
        serializeError: context.serializeError,
        renderMeta: context.renderMeta
      }
    }, /* @__PURE__ */ React2.createElement(_chunkK7YFBME3js.RemixErrorBoundary, { location: router.state.location }, /* @__PURE__ */ React2.createElement(_chunkR73PQUJUjs.StaticRouterProvider, {
      router,
      context: context.staticHandlerContext,
      hydrate: false
    }))), context.serverHandoffStream ? /* @__PURE__ */ React2.createElement(React2.Suspense, null, /* @__PURE__ */ React2.createElement(_chunkK7YFBME3js.StreamTransfer, {
      context,
      identifier: 0,
      reader: context.serverHandoffStream.getReader(),
      textDecoder: new TextDecoder,
      nonce
    })) : null);
  }
  function createRoutesStub(routes, _context) {
    return function RoutesTestStub({
      initialEntries,
      initialIndex,
      hydrationData,
      future
    }) {
      let routerRef = React22.useRef();
      let frameworkContextRef = React22.useRef();
      if (routerRef.current == null) {
        frameworkContextRef.current = {
          future: {
            unstable_subResourceIntegrity: _optionalChain([future, "optionalAccess", (_2) => _2.unstable_subResourceIntegrity]) === true,
            unstable_middleware: _optionalChain([future, "optionalAccess", (_3) => _3.unstable_middleware]) === true
          },
          manifest: {
            routes: {},
            entry: { imports: [], module: "" },
            url: "",
            version: ""
          },
          routeModules: {},
          ssr: false,
          isSpaMode: false,
          routeDiscovery: { mode: "lazy", manifestPath: "/__manifest" }
        };
        let patched = processRoutes(_chunkK7YFBME3js.convertRoutesToDataRoutes.call(undefined, routes, (r2) => r2), _context !== undefined ? _context : _optionalChain([future, "optionalAccess", (_4) => _4.unstable_middleware]) ? new (0, _chunkK7YFBME3js.unstable_RouterContextProvider) : {}, frameworkContextRef.current.manifest, frameworkContextRef.current.routeModules);
        routerRef.current = _chunkR73PQUJUjs.createMemoryRouter.call(undefined, patched, {
          initialEntries,
          initialIndex,
          hydrationData
        });
      }
      return /* @__PURE__ */ React22.createElement(_chunkK7YFBME3js.FrameworkContext.Provider, { value: frameworkContextRef.current }, /* @__PURE__ */ React22.createElement(_chunkR73PQUJUjs.RouterProvider, { router: routerRef.current }));
    };
  }
  function processRoutes(routes, context, manifest, routeModules, parentId) {
    return routes.map((route) => {
      if (!route.id) {
        throw new Error("Expected a route.id in react-router processRoutes() function");
      }
      let newRoute = {
        id: route.id,
        path: route.path,
        index: route.index,
        Component: route.Component ? _chunkR73PQUJUjs.withComponentProps.call(undefined, route.Component) : undefined,
        HydrateFallback: route.HydrateFallback ? _chunkR73PQUJUjs.withHydrateFallbackProps.call(undefined, route.HydrateFallback) : undefined,
        ErrorBoundary: route.ErrorBoundary ? _chunkR73PQUJUjs.withErrorBoundaryProps.call(undefined, route.ErrorBoundary) : undefined,
        action: route.action ? (args) => route.action({ ...args, context }) : undefined,
        loader: route.loader ? (args) => route.loader({ ...args, context }) : undefined,
        handle: route.handle,
        shouldRevalidate: route.shouldRevalidate
      };
      let entryRoute = {
        id: route.id,
        path: route.path,
        index: route.index,
        parentId,
        hasAction: route.action != null,
        hasLoader: route.loader != null,
        hasClientAction: false,
        hasClientLoader: false,
        hasClientMiddleware: false,
        hasErrorBoundary: route.ErrorBoundary != null,
        module: "build/stub-path-to-module.js",
        clientActionModule: undefined,
        clientLoaderModule: undefined,
        clientMiddlewareModule: undefined,
        hydrateFallbackModule: undefined
      };
      manifest.routes[newRoute.id] = entryRoute;
      routeModules[route.id] = {
        default: newRoute.Component || _chunkR73PQUJUjs.Outlet,
        ErrorBoundary: newRoute.ErrorBoundary || undefined,
        handle: route.handle,
        links: route.links,
        meta: route.meta,
        shouldRevalidate: route.shouldRevalidate
      };
      if (route.children) {
        newRoute.children = processRoutes(route.children, context, manifest, routeModules, newRoute.id);
      }
      return newRoute;
    });
  }
  var _cookie = require_dist();
  var encoder = /* @__PURE__ */ new TextEncoder;
  var sign = async (value, secret) => {
    let data2 = encoder.encode(value);
    let key = await createKey(secret, ["sign"]);
    let signature = await crypto.subtle.sign("HMAC", key, data2);
    let hash = btoa(String.fromCharCode(...new Uint8Array(signature))).replace(/=+$/, "");
    return value + "." + hash;
  };
  var unsign = async (cookie, secret) => {
    let index = cookie.lastIndexOf(".");
    let value = cookie.slice(0, index);
    let hash = cookie.slice(index + 1);
    let data2 = encoder.encode(value);
    let key = await createKey(secret, ["verify"]);
    try {
      let signature = byteStringToUint8Array(atob(hash));
      let valid = await crypto.subtle.verify("HMAC", key, signature, data2);
      return valid ? value : false;
    } catch (error) {
      return false;
    }
  };
  var createKey = async (secret, usages) => crypto.subtle.importKey("raw", encoder.encode(secret), { name: "HMAC", hash: "SHA-256" }, false, usages);
  function byteStringToUint8Array(byteString) {
    let array = new Uint8Array(byteString.length);
    for (let i = 0;i < byteString.length; i++) {
      array[i] = byteString.charCodeAt(i);
    }
    return array;
  }
  var createCookie = (name, cookieOptions = {}) => {
    let { secrets = [], ...options } = {
      path: "/",
      sameSite: "lax",
      ...cookieOptions
    };
    warnOnceAboutExpiresCookie(name, options.expires);
    return {
      get name() {
        return name;
      },
      get isSigned() {
        return secrets.length > 0;
      },
      get expires() {
        return typeof options.maxAge !== "undefined" ? new Date(Date.now() + options.maxAge * 1000) : options.expires;
      },
      async parse(cookieHeader, parseOptions) {
        if (!cookieHeader)
          return null;
        let cookies = _cookie.parse.call(undefined, cookieHeader, { ...options, ...parseOptions });
        if (name in cookies) {
          let value = cookies[name];
          if (typeof value === "string" && value !== "") {
            let decoded = await decodeCookieValue(value, secrets);
            return decoded;
          } else {
            return "";
          }
        } else {
          return null;
        }
      },
      async serialize(value, serializeOptions) {
        return _cookie.serialize.call(undefined, name, value === "" ? "" : await encodeCookieValue(value, secrets), {
          ...options,
          ...serializeOptions
        });
      }
    };
  };
  var isCookie = (object) => {
    return object != null && typeof object.name === "string" && typeof object.isSigned === "boolean" && typeof object.parse === "function" && typeof object.serialize === "function";
  };
  async function encodeCookieValue(value, secrets) {
    let encoded = encodeData(value);
    if (secrets.length > 0) {
      encoded = await sign(encoded, secrets[0]);
    }
    return encoded;
  }
  async function decodeCookieValue(value, secrets) {
    if (secrets.length > 0) {
      for (let secret of secrets) {
        let unsignedValue = await unsign(value, secret);
        if (unsignedValue !== false) {
          return decodeData(unsignedValue);
        }
      }
      return null;
    }
    return decodeData(value);
  }
  function encodeData(value) {
    return btoa(myUnescape(encodeURIComponent(JSON.stringify(value))));
  }
  function decodeData(value) {
    try {
      return JSON.parse(decodeURIComponent(myEscape(atob(value))));
    } catch (error) {
      return {};
    }
  }
  function myEscape(value) {
    let str = value.toString();
    let result = "";
    let index = 0;
    let chr, code;
    while (index < str.length) {
      chr = str.charAt(index++);
      if (/[\w*+\-./@]/.exec(chr)) {
        result += chr;
      } else {
        code = chr.charCodeAt(0);
        if (code < 256) {
          result += "%" + hex2(code, 2);
        } else {
          result += "%u" + hex2(code, 4).toUpperCase();
        }
      }
    }
    return result;
  }
  function hex2(code, length) {
    let result = code.toString(16);
    while (result.length < length)
      result = "0" + result;
    return result;
  }
  function myUnescape(value) {
    let str = value.toString();
    let result = "";
    let index = 0;
    let chr, part;
    while (index < str.length) {
      chr = str.charAt(index++);
      if (chr === "%") {
        if (str.charAt(index) === "u") {
          part = str.slice(index + 1, index + 5);
          if (/^[\da-f]{4}$/i.exec(part)) {
            result += String.fromCharCode(parseInt(part, 16));
            index += 5;
            continue;
          }
        } else {
          part = str.slice(index, index + 2);
          if (/^[\da-f]{2}$/i.exec(part)) {
            result += String.fromCharCode(parseInt(part, 16));
            index += 2;
            continue;
          }
        }
      }
      result += chr;
    }
    return result;
  }
  function warnOnceAboutExpiresCookie(name, expires) {
    _chunkK7YFBME3js.warnOnce.call(undefined, !expires, `The "${name}" cookie has an "expires" property set. This will cause the expires value to not be updated when the session is committed. Instead, you should set the expires value when serializing the cookie. You can use \`commitSession(session, { expires })\` if using a session storage object, or \`cookie.serialize("value", { expires })\` if you're using the cookie directly.`);
  }
  function createEntryRouteModules(manifest) {
    return Object.keys(manifest).reduce((memo2, routeId) => {
      let route = manifest[routeId];
      if (route) {
        memo2[routeId] = route.module;
      }
      return memo2;
    }, {});
  }
  var ServerMode = /* @__PURE__ */ ((ServerMode2) => {
    ServerMode2["Development"] = "development";
    ServerMode2["Production"] = "production";
    ServerMode2["Test"] = "test";
    return ServerMode2;
  })(ServerMode || {});
  function isServerMode(value) {
    return value === "development" || value === "production" || value === "test";
  }
  function sanitizeError(error, serverMode) {
    if (error instanceof Error && serverMode !== "development") {
      let sanitized = new Error("Unexpected Server Error");
      sanitized.stack = undefined;
      return sanitized;
    }
    return error;
  }
  function sanitizeErrors(errors, serverMode) {
    return Object.entries(errors).reduce((acc, [routeId, error]) => {
      return Object.assign(acc, { [routeId]: sanitizeError(error, serverMode) });
    }, {});
  }
  function serializeError(error, serverMode) {
    let sanitized = sanitizeError(error, serverMode);
    return {
      message: sanitized.message,
      stack: sanitized.stack
    };
  }
  function serializeErrors(errors, serverMode) {
    if (!errors)
      return null;
    let entries = Object.entries(errors);
    let serialized = {};
    for (let [key, val] of entries) {
      if (_chunkK7YFBME3js.isRouteErrorResponse.call(undefined, val)) {
        serialized[key] = { ...val, __type: "RouteErrorResponse" };
      } else if (val instanceof Error) {
        let sanitized = sanitizeError(val, serverMode);
        serialized[key] = {
          message: sanitized.message,
          stack: sanitized.stack,
          __type: "Error",
          ...sanitized.name !== "Error" ? {
            __subType: sanitized.name
          } : {}
        };
      } else {
        serialized[key] = val;
      }
    }
    return serialized;
  }
  function matchServerRoutes(routes, pathname, basename) {
    let matches = _chunkK7YFBME3js.matchRoutes.call(undefined, routes, pathname, basename);
    if (!matches)
      return null;
    return matches.map((match) => ({
      params: match.params,
      pathname: match.pathname,
      route: match.route
    }));
  }
  async function callRouteHandler(handler, args) {
    let result = await handler({
      request: stripRoutesParam(stripIndexParam2(args.request)),
      params: args.params,
      context: args.context
    });
    if (_chunkK7YFBME3js.isDataWithResponseInit.call(undefined, result) && result.init && result.init.status && _chunkK7YFBME3js.isRedirectStatusCode.call(undefined, result.init.status)) {
      throw new Response(null, result.init);
    }
    return result;
  }
  function stripIndexParam2(request) {
    let url = new URL(request.url);
    let indexValues = url.searchParams.getAll("index");
    url.searchParams.delete("index");
    let indexValuesToKeep = [];
    for (let indexValue of indexValues) {
      if (indexValue) {
        indexValuesToKeep.push(indexValue);
      }
    }
    for (let toKeep of indexValuesToKeep) {
      url.searchParams.append("index", toKeep);
    }
    let init = {
      method: request.method,
      body: request.body,
      headers: request.headers,
      signal: request.signal
    };
    if (init.body) {
      init.duplex = "half";
    }
    return new Request(url.href, init);
  }
  function stripRoutesParam(request) {
    let url = new URL(request.url);
    url.searchParams.delete("_routes");
    let init = {
      method: request.method,
      body: request.body,
      headers: request.headers,
      signal: request.signal
    };
    if (init.body) {
      init.duplex = "half";
    }
    return new Request(url.href, init);
  }
  function invariant2(value, message) {
    if (value === false || value === null || typeof value === "undefined") {
      console.error("The following error is a bug in React Router; please open an issue! https://github.com/remix-run/react-router/issues/new/choose");
      throw new Error(message);
    }
  }
  var globalDevServerHooksKey = "__reactRouterDevServerHooks";
  function setDevServerHooks(devServerHooks) {
    globalThis[globalDevServerHooksKey] = devServerHooks;
  }
  function getDevServerHooks() {
    return globalThis[globalDevServerHooksKey];
  }
  function getBuildTimeHeader(request, headerName) {
    if (typeof process !== "undefined") {
      try {
        if (_optionalChain([process, "access", (_5) => _5.env, "optionalAccess", (_6) => _6.IS_RR_BUILD_REQUEST]) === "yes") {
          return request.headers.get(headerName);
        }
      } catch (e) {}
    }
    return null;
  }
  function groupRoutesByParentId(manifest) {
    let routes = {};
    Object.values(manifest).forEach((route) => {
      if (route) {
        let parentId = route.parentId || "";
        if (!routes[parentId]) {
          routes[parentId] = [];
        }
        routes[parentId].push(route);
      }
    });
    return routes;
  }
  function createRoutes(manifest, parentId = "", routesByParentId = groupRoutesByParentId(manifest)) {
    return (routesByParentId[parentId] || []).map((route) => ({
      ...route,
      children: createRoutes(manifest, route.id, routesByParentId)
    }));
  }
  function createStaticHandlerDataRoutes(manifest, future, parentId = "", routesByParentId = groupRoutesByParentId(manifest)) {
    return (routesByParentId[parentId] || []).map((route) => {
      let commonRoute = {
        hasErrorBoundary: route.id === "root" || route.module.ErrorBoundary != null,
        id: route.id,
        path: route.path,
        unstable_middleware: route.module.unstable_middleware,
        loader: route.module.loader ? async (args) => {
          let preRenderedData = getBuildTimeHeader(args.request, "X-React-Router-Prerender-Data");
          if (preRenderedData != null) {
            let encoded = preRenderedData ? decodeURI(preRenderedData) : preRenderedData;
            invariant2(encoded, "Missing prerendered data for route");
            let uint8array = new TextEncoder().encode(encoded);
            let stream = new ReadableStream({
              start(controller) {
                controller.enqueue(uint8array);
                controller.close();
              }
            });
            let decoded = await _chunkK7YFBME3js.decodeViaTurboStream.call(undefined, stream, global);
            let data2 = decoded.value;
            if (data2 && _chunkK7YFBME3js.SingleFetchRedirectSymbol in data2) {
              let result = data2[_chunkK7YFBME3js.SingleFetchRedirectSymbol];
              let init = { status: result.status };
              if (result.reload) {
                throw _chunkK7YFBME3js.redirectDocument.call(undefined, result.redirect, init);
              } else if (result.replace) {
                throw _chunkK7YFBME3js.replace.call(undefined, result.redirect, init);
              } else {
                throw _chunkK7YFBME3js.redirect.call(undefined, result.redirect, init);
              }
            } else {
              invariant2(data2 && route.id in data2, "Unable to decode prerendered data");
              let result = data2[route.id];
              invariant2("data" in result, "Unable to process prerendered data");
              return result.data;
            }
          }
          let val = await callRouteHandler(route.module.loader, args);
          return val;
        } : undefined,
        action: route.module.action ? (args) => callRouteHandler(route.module.action, args) : undefined,
        handle: route.module.handle
      };
      return route.index ? {
        index: true,
        ...commonRoute
      } : {
        caseSensitive: route.caseSensitive,
        children: createStaticHandlerDataRoutes(manifest, future, route.id, routesByParentId),
        ...commonRoute
      };
    });
  }
  var ESCAPE_LOOKUP = {
    "&": "\\u0026",
    ">": "\\u003e",
    "<": "\\u003c",
    "\u2028": "\\u2028",
    "\u2029": "\\u2029"
  };
  var ESCAPE_REGEX = /[&><\u2028\u2029]/g;
  function escapeHtml(html) {
    return html.replace(ESCAPE_REGEX, (match) => ESCAPE_LOOKUP[match]);
  }
  function createServerHandoffString(serverHandoff) {
    return escapeHtml(JSON.stringify(serverHandoff));
  }
  var _setcookieparser = require_set_cookie();
  function getDocumentHeaders(context, build) {
    return getDocumentHeadersImpl(context, (m) => {
      let route = build.routes[m.route.id];
      invariant2(route, `Route with id "${m.route.id}" not found in build`);
      return route.module.headers;
    });
  }
  function getDocumentHeadersImpl(context, getRouteHeadersFn) {
    let boundaryIdx = context.errors ? context.matches.findIndex((m) => context.errors[m.route.id]) : -1;
    let matches = boundaryIdx >= 0 ? context.matches.slice(0, boundaryIdx + 1) : context.matches;
    let errorHeaders;
    if (boundaryIdx >= 0) {
      let { actionHeaders, actionData, loaderHeaders, loaderData } = context;
      context.matches.slice(boundaryIdx).some((match) => {
        let id3 = match.route.id;
        if (actionHeaders[id3] && (!actionData || !actionData.hasOwnProperty(id3))) {
          errorHeaders = actionHeaders[id3];
        } else if (loaderHeaders[id3] && !loaderData.hasOwnProperty(id3)) {
          errorHeaders = loaderHeaders[id3];
        }
        return errorHeaders != null;
      });
    }
    return matches.reduce((parentHeaders, match, idx) => {
      let { id: id3 } = match.route;
      let loaderHeaders = context.loaderHeaders[id3] || new Headers;
      let actionHeaders = context.actionHeaders[id3] || new Headers;
      let includeErrorHeaders = errorHeaders != null && idx === matches.length - 1;
      let includeErrorCookies = includeErrorHeaders && errorHeaders !== loaderHeaders && errorHeaders !== actionHeaders;
      let headersFn = getRouteHeadersFn(match);
      if (headersFn == null) {
        let headers2 = new Headers(parentHeaders);
        if (includeErrorCookies) {
          prependCookies(errorHeaders, headers2);
        }
        prependCookies(actionHeaders, headers2);
        prependCookies(loaderHeaders, headers2);
        return headers2;
      }
      let headers = new Headers(typeof headersFn === "function" ? headersFn({
        loaderHeaders,
        parentHeaders,
        actionHeaders,
        errorHeaders: includeErrorHeaders ? errorHeaders : undefined
      }) : headersFn);
      if (includeErrorCookies) {
        prependCookies(errorHeaders, headers);
      }
      prependCookies(actionHeaders, headers);
      prependCookies(loaderHeaders, headers);
      prependCookies(parentHeaders, headers);
      return headers;
    }, new Headers);
  }
  function prependCookies(parentHeaders, childHeaders) {
    let parentSetCookieString = parentHeaders.get("Set-Cookie");
    if (parentSetCookieString) {
      let cookies = _setcookieparser.splitCookiesString.call(undefined, parentSetCookieString);
      let childCookies = new Set(childHeaders.getSetCookie());
      cookies.forEach((cookie) => {
        if (!childCookies.has(cookie)) {
          childHeaders.append("Set-Cookie", cookie);
        }
      });
    }
  }
  var SERVER_NO_BODY_STATUS_CODES = /* @__PURE__ */ new Set([
    ..._chunkK7YFBME3js.NO_BODY_STATUS_CODES,
    304
  ]);
  async function singleFetchAction(build, serverMode, staticHandler, request, handlerUrl, loadContext, handleError) {
    try {
      let respond2 = function(context) {
        let headers = getDocumentHeaders(context, build);
        if (_chunkK7YFBME3js.isRedirectStatusCode.call(undefined, context.statusCode) && headers.has("Location")) {
          return generateSingleFetchResponse(request, build, serverMode, {
            result: getSingleFetchRedirect(context.statusCode, headers, build.basename),
            headers,
            status: _chunkK7YFBME3js.SINGLE_FETCH_REDIRECT_STATUS
          });
        }
        if (context.errors) {
          Object.values(context.errors).forEach((err) => {
            if (!_chunkK7YFBME3js.isRouteErrorResponse.call(undefined, err) || err.error) {
              handleError(err);
            }
          });
          context.errors = sanitizeErrors(context.errors, serverMode);
        }
        let singleFetchResult;
        if (context.errors) {
          singleFetchResult = { error: Object.values(context.errors)[0] };
        } else {
          singleFetchResult = {
            data: Object.values(context.actionData || {})[0]
          };
        }
        return generateSingleFetchResponse(request, build, serverMode, {
          result: singleFetchResult,
          headers,
          status: context.statusCode
        });
      };
      var respond = respond2;
      let handlerRequest = new Request(handlerUrl, {
        method: request.method,
        body: request.body,
        headers: request.headers,
        signal: request.signal,
        ...request.body ? { duplex: "half" } : undefined
      });
      let result = await staticHandler.query(handlerRequest, {
        requestContext: loadContext,
        skipLoaderErrorBubbling: true,
        skipRevalidation: true,
        unstable_respond: respond2
      });
      if (!_chunkK7YFBME3js.isResponse.call(undefined, result)) {
        result = respond2(result);
      }
      if (_chunkK7YFBME3js.isRedirectResponse.call(undefined, result)) {
        return generateSingleFetchResponse(request, build, serverMode, {
          result: getSingleFetchRedirect(result.status, result.headers, build.basename),
          headers: result.headers,
          status: _chunkK7YFBME3js.SINGLE_FETCH_REDIRECT_STATUS
        });
      }
      return result;
    } catch (error) {
      handleError(error);
      return generateSingleFetchResponse(request, build, serverMode, {
        result: { error },
        headers: new Headers,
        status: 500
      });
    }
  }
  async function singleFetchLoaders(build, serverMode, staticHandler, request, handlerUrl, loadContext, handleError) {
    try {
      let respond2 = function(context) {
        let headers = getDocumentHeaders(context, build);
        if (_chunkK7YFBME3js.isRedirectStatusCode.call(undefined, context.statusCode) && headers.has("Location")) {
          return generateSingleFetchResponse(request, build, serverMode, {
            result: {
              [_chunkK7YFBME3js.SingleFetchRedirectSymbol]: getSingleFetchRedirect(context.statusCode, headers, build.basename)
            },
            headers,
            status: _chunkK7YFBME3js.SINGLE_FETCH_REDIRECT_STATUS
          });
        }
        if (context.errors) {
          Object.values(context.errors).forEach((err) => {
            if (!_chunkK7YFBME3js.isRouteErrorResponse.call(undefined, err) || err.error) {
              handleError(err);
            }
          });
          context.errors = sanitizeErrors(context.errors, serverMode);
        }
        let results = {};
        let loadedMatches = new Set(context.matches.filter((m) => loadRouteIds ? loadRouteIds.has(m.route.id) : m.route.loader != null).map((m) => m.route.id));
        if (context.errors) {
          for (let [id3, error] of Object.entries(context.errors)) {
            results[id3] = { error };
          }
        }
        for (let [id3, data2] of Object.entries(context.loaderData)) {
          if (!(id3 in results) && loadedMatches.has(id3)) {
            results[id3] = { data: data2 };
          }
        }
        return generateSingleFetchResponse(request, build, serverMode, {
          result: results,
          headers,
          status: context.statusCode
        });
      };
      var respond = respond2;
      let handlerRequest = new Request(handlerUrl, {
        headers: request.headers,
        signal: request.signal
      });
      let routesParam = new URL(request.url).searchParams.get("_routes");
      let loadRouteIds = routesParam ? new Set(routesParam.split(",")) : null;
      let result = await staticHandler.query(handlerRequest, {
        requestContext: loadContext,
        filterMatchesToLoad: (m) => !loadRouteIds || loadRouteIds.has(m.route.id),
        skipLoaderErrorBubbling: true,
        unstable_respond: respond2
      });
      if (!_chunkK7YFBME3js.isResponse.call(undefined, result)) {
        result = respond2(result);
      }
      if (_chunkK7YFBME3js.isRedirectResponse.call(undefined, result)) {
        return generateSingleFetchResponse(request, build, serverMode, {
          result: {
            [_chunkK7YFBME3js.SingleFetchRedirectSymbol]: getSingleFetchRedirect(result.status, result.headers, build.basename)
          },
          headers: result.headers,
          status: _chunkK7YFBME3js.SINGLE_FETCH_REDIRECT_STATUS
        });
      }
      return result;
    } catch (error) {
      handleError(error);
      return generateSingleFetchResponse(request, build, serverMode, {
        result: { root: { error } },
        headers: new Headers,
        status: 500
      });
    }
  }
  function generateSingleFetchResponse(request, build, serverMode, {
    result,
    headers,
    status
  }) {
    let resultHeaders = new Headers(headers);
    resultHeaders.set("X-Remix-Response", "yes");
    if (SERVER_NO_BODY_STATUS_CODES.has(status)) {
      return new Response(null, { status, headers: resultHeaders });
    }
    resultHeaders.set("Content-Type", "text/x-script");
    resultHeaders.delete("Content-Length");
    return new Response(encodeViaTurboStream(result, request.signal, build.entry.module.streamTimeout, serverMode), {
      status: status || 200,
      headers: resultHeaders
    });
  }
  function getSingleFetchRedirect(status, headers, basename) {
    let redirect2 = headers.get("Location");
    if (basename) {
      redirect2 = _chunkK7YFBME3js.stripBasename.call(undefined, redirect2, basename) || redirect2;
    }
    return {
      redirect: redirect2,
      status,
      revalidate: headers.has("X-Remix-Revalidate") || headers.has("Set-Cookie"),
      reload: headers.has("X-Remix-Reload-Document"),
      replace: headers.has("X-Remix-Replace")
    };
  }
  function encodeViaTurboStream(data2, requestSignal, streamTimeout, serverMode) {
    let controller = new AbortController;
    let timeoutId = setTimeout(() => controller.abort(new Error("Server Timeout")), typeof streamTimeout === "number" ? streamTimeout : 4950);
    requestSignal.addEventListener("abort", () => clearTimeout(timeoutId));
    return _chunkK7YFBME3js.encode.call(undefined, data2, {
      signal: controller.signal,
      plugins: [
        (value) => {
          if (value instanceof Error) {
            let { name, message, stack } = serverMode === "production" ? sanitizeError(value, serverMode) : value;
            return ["SanitizedError", name, message, stack];
          }
          if (value instanceof _chunkK7YFBME3js.ErrorResponseImpl) {
            let { data: data3, status, statusText } = value;
            return ["ErrorResponse", data3, status, statusText];
          }
          if (value && typeof value === "object" && _chunkK7YFBME3js.SingleFetchRedirectSymbol in value) {
            return ["SingleFetchRedirect", value[_chunkK7YFBME3js.SingleFetchRedirectSymbol]];
          }
        }
      ],
      postPlugins: [
        (value) => {
          if (!value)
            return;
          if (typeof value !== "object")
            return;
          return [
            "SingleFetchClassInstance",
            Object.fromEntries(Object.entries(value))
          ];
        },
        () => ["SingleFetchFallback"]
      ]
    });
  }
  function derive(build, mode) {
    let routes = createRoutes(build.routes);
    let dataRoutes = createStaticHandlerDataRoutes(build.routes, build.future);
    let serverMode = isServerMode(mode) ? mode : "production";
    let staticHandler = _chunkK7YFBME3js.createStaticHandler.call(undefined, dataRoutes, {
      basename: build.basename
    });
    let errorHandler = build.entry.module.handleError || ((error, { request }) => {
      if (serverMode !== "test" && !request.signal.aborted) {
        console.error(_chunkK7YFBME3js.isRouteErrorResponse.call(undefined, error) && error.error ? error.error : error);
      }
    });
    return {
      routes,
      dataRoutes,
      serverMode,
      staticHandler,
      errorHandler
    };
  }
  var createRequestHandler = (build, mode) => {
    let _build;
    let routes;
    let serverMode;
    let staticHandler;
    let errorHandler;
    return async function requestHandler(request, initialContext) {
      _build = typeof build === "function" ? await build() : build;
      if (typeof build === "function") {
        let derived = derive(_build, mode);
        routes = derived.routes;
        serverMode = derived.serverMode;
        staticHandler = derived.staticHandler;
        errorHandler = derived.errorHandler;
      } else if (!routes || !serverMode || !staticHandler || !errorHandler) {
        let derived = derive(_build, mode);
        routes = derived.routes;
        serverMode = derived.serverMode;
        staticHandler = derived.staticHandler;
        errorHandler = derived.errorHandler;
      }
      let params = {};
      let loadContext;
      let handleError = (error) => {
        if (mode === "development") {
          _optionalChain([getDevServerHooks, "call", (_7) => _7(), "optionalAccess", (_8) => _8.processRequestError, "optionalCall", (_9) => _9(error)]);
        }
        errorHandler(error, {
          context: loadContext,
          params,
          request
        });
      };
      if (_build.future.unstable_middleware) {
        if (initialContext == null) {
          loadContext = new (0, _chunkK7YFBME3js.unstable_RouterContextProvider);
        } else {
          try {
            loadContext = new (0, _chunkK7YFBME3js.unstable_RouterContextProvider)(initialContext);
          } catch (e) {
            let error = new Error(`Unable to create initial \`unstable_RouterContextProvider\` instance. Please confirm you are returning an instance of \`Map<unstable_routerContext, unknown>\` from your \`getLoadContext\` function.

Error: ${e instanceof Error ? e.toString() : e}`);
            handleError(error);
            return returnLastResortErrorResponse(error, serverMode);
          }
        }
      } else {
        loadContext = initialContext || {};
      }
      let url = new URL(request.url);
      let normalizedBasename = _build.basename || "/";
      let normalizedPath = url.pathname;
      if (_chunkK7YFBME3js.stripBasename.call(undefined, normalizedPath, normalizedBasename) === "/_root.data") {
        normalizedPath = normalizedBasename;
      } else if (normalizedPath.endsWith(".data")) {
        normalizedPath = normalizedPath.replace(/\.data$/, "");
      }
      if (_chunkK7YFBME3js.stripBasename.call(undefined, normalizedPath, normalizedBasename) !== "/" && normalizedPath.endsWith("/")) {
        normalizedPath = normalizedPath.slice(0, -1);
      }
      let isSpaMode = getBuildTimeHeader(request, "X-React-Router-SPA-Mode") === "yes";
      if (!_build.ssr) {
        let decodedPath = decodeURI(normalizedPath);
        if (_build.prerender.length === 0) {
          isSpaMode = true;
        } else if (!_build.prerender.includes(decodedPath) && !_build.prerender.includes(decodedPath + "/")) {
          if (url.pathname.endsWith(".data")) {
            errorHandler(new (0, _chunkK7YFBME3js.ErrorResponseImpl)(404, "Not Found", `Refusing to SSR the path \`${decodedPath}\` because \`ssr:false\` is set and the path is not included in the \`prerender\` config, so in production the path will be a 404.`), {
              context: loadContext,
              params,
              request
            });
            return new Response("Not Found", {
              status: 404,
              statusText: "Not Found"
            });
          } else {
            isSpaMode = true;
          }
        }
      }
      let manifestUrl = _chunkK7YFBME3js.getManifestPath.call(undefined, _build.routeDiscovery.manifestPath, normalizedBasename);
      if (url.pathname === manifestUrl) {
        try {
          let res = await handleManifestRequest(_build, routes, url);
          return res;
        } catch (e) {
          handleError(e);
          return new Response("Unknown Server Error", { status: 500 });
        }
      }
      let matches = matchServerRoutes(routes, normalizedPath, _build.basename);
      if (matches && matches.length > 0) {
        Object.assign(params, matches[0].params);
      }
      let response;
      if (url.pathname.endsWith(".data")) {
        let handlerUrl = new URL(request.url);
        handlerUrl.pathname = normalizedPath;
        let singleFetchMatches = matchServerRoutes(routes, handlerUrl.pathname, _build.basename);
        response = await handleSingleFetchRequest(serverMode, _build, staticHandler, request, handlerUrl, loadContext, handleError);
        if (_build.entry.module.handleDataRequest) {
          response = await _build.entry.module.handleDataRequest(response, {
            context: loadContext,
            params: singleFetchMatches ? singleFetchMatches[0].params : {},
            request
          });
          if (_chunkK7YFBME3js.isRedirectResponse.call(undefined, response)) {
            let result = getSingleFetchRedirect(response.status, response.headers, _build.basename);
            if (request.method === "GET") {
              result = {
                [_chunkK7YFBME3js.SingleFetchRedirectSymbol]: result
              };
            }
            let headers = new Headers(response.headers);
            headers.set("Content-Type", "text/x-script");
            return new Response(encodeViaTurboStream(result, request.signal, _build.entry.module.streamTimeout, serverMode), {
              status: _chunkK7YFBME3js.SINGLE_FETCH_REDIRECT_STATUS,
              headers
            });
          }
        }
      } else if (!isSpaMode && matches && matches[matches.length - 1].route.module.default == null && matches[matches.length - 1].route.module.ErrorBoundary == null) {
        response = await handleResourceRequest(serverMode, _build, staticHandler, matches.slice(-1)[0].route.id, request, loadContext, handleError);
      } else {
        let { pathname } = url;
        let criticalCss = undefined;
        if (_build.unstable_getCriticalCss) {
          criticalCss = await _build.unstable_getCriticalCss({ pathname });
        } else if (mode === "development" && _optionalChain([getDevServerHooks, "call", (_10) => _10(), "optionalAccess", (_11) => _11.getCriticalCss])) {
          criticalCss = await _optionalChain([getDevServerHooks, "call", (_12) => _12(), "optionalAccess", (_13) => _13.getCriticalCss, "optionalCall", (_14) => _14(pathname)]);
        }
        response = await handleDocumentRequest(serverMode, _build, staticHandler, request, loadContext, handleError, isSpaMode, criticalCss);
      }
      if (request.method === "HEAD") {
        return new Response(null, {
          headers: response.headers,
          status: response.status,
          statusText: response.statusText
        });
      }
      return response;
    };
  };
  async function handleManifestRequest(build, routes, url) {
    if (build.assets.version !== url.searchParams.get("version")) {
      return new Response(null, {
        status: 204,
        headers: {
          "X-Remix-Reload-Document": "true"
        }
      });
    }
    let patches = {};
    if (url.searchParams.has("p")) {
      let paths = /* @__PURE__ */ new Set;
      url.searchParams.getAll("p").forEach((path) => {
        if (!path.startsWith("/")) {
          path = `/${path}`;
        }
        let segments = path.split("/").slice(1);
        segments.forEach((_, i) => {
          let partialPath = segments.slice(0, i + 1).join("/");
          paths.add(`/${partialPath}`);
        });
      });
      for (let path of paths) {
        let matches = matchServerRoutes(routes, path, build.basename);
        if (matches) {
          for (let match of matches) {
            let routeId = match.route.id;
            let route = build.assets.routes[routeId];
            if (route) {
              patches[routeId] = route;
            }
          }
        }
      }
      return Response.json(patches, {
        headers: {
          "Cache-Control": "public, max-age=31536000, immutable"
        }
      });
    }
    return new Response("Invalid Request", { status: 400 });
  }
  async function handleSingleFetchRequest(serverMode, build, staticHandler, request, handlerUrl, loadContext, handleError) {
    let response = request.method !== "GET" ? await singleFetchAction(build, serverMode, staticHandler, request, handlerUrl, loadContext, handleError) : await singleFetchLoaders(build, serverMode, staticHandler, request, handlerUrl, loadContext, handleError);
    return response;
  }
  async function handleDocumentRequest(serverMode, build, staticHandler, request, loadContext, handleError, isSpaMode, criticalCss) {
    try {
      let response = await staticHandler.query(request, {
        requestContext: loadContext,
        unstable_respond: build.future.unstable_middleware ? (ctx) => renderHtml(ctx, isSpaMode) : undefined
      });
      return _chunkK7YFBME3js.isResponse.call(undefined, response) ? response : renderHtml(response, isSpaMode);
    } catch (error) {
      handleError(error);
      return new Response(null, { status: 500 });
    }
    async function renderHtml(context, isSpaMode2) {
      if (_chunkK7YFBME3js.isResponse.call(undefined, context)) {
        return context;
      }
      let headers = getDocumentHeaders(context, build);
      if (SERVER_NO_BODY_STATUS_CODES.has(context.statusCode)) {
        return new Response(null, { status: context.statusCode, headers });
      }
      if (context.errors) {
        Object.values(context.errors).forEach((err) => {
          if (!_chunkK7YFBME3js.isRouteErrorResponse.call(undefined, err) || err.error) {
            handleError(err);
          }
        });
        context.errors = sanitizeErrors(context.errors, serverMode);
      }
      let state = {
        loaderData: context.loaderData,
        actionData: context.actionData,
        errors: serializeErrors(context.errors, serverMode)
      };
      let baseServerHandoff = {
        basename: build.basename,
        future: build.future,
        routeDiscovery: build.routeDiscovery,
        ssr: build.ssr,
        isSpaMode: isSpaMode2
      };
      let entryContext = {
        manifest: build.assets,
        routeModules: createEntryRouteModules(build.routes),
        staticHandlerContext: context,
        criticalCss,
        serverHandoffString: createServerHandoffString({
          ...baseServerHandoff,
          criticalCss
        }),
        serverHandoffStream: encodeViaTurboStream(state, request.signal, build.entry.module.streamTimeout, serverMode),
        renderMeta: {},
        future: build.future,
        ssr: build.ssr,
        routeDiscovery: build.routeDiscovery,
        isSpaMode: isSpaMode2,
        serializeError: (err) => serializeError(err, serverMode)
      };
      let handleDocumentRequestFunction = build.entry.module.default;
      try {
        return await handleDocumentRequestFunction(request, context.statusCode, headers, entryContext, loadContext);
      } catch (error) {
        handleError(error);
        let errorForSecondRender = error;
        if (_chunkK7YFBME3js.isResponse.call(undefined, error)) {
          try {
            let data2 = await unwrapResponse(error);
            errorForSecondRender = new (0, _chunkK7YFBME3js.ErrorResponseImpl)(error.status, error.statusText, data2);
          } catch (e) {}
        }
        context = _chunkK7YFBME3js.getStaticContextFromError.call(undefined, staticHandler.dataRoutes, context, errorForSecondRender);
        if (context.errors) {
          context.errors = sanitizeErrors(context.errors, serverMode);
        }
        let state2 = {
          loaderData: context.loaderData,
          actionData: context.actionData,
          errors: serializeErrors(context.errors, serverMode)
        };
        entryContext = {
          ...entryContext,
          staticHandlerContext: context,
          serverHandoffString: createServerHandoffString(baseServerHandoff),
          serverHandoffStream: encodeViaTurboStream(state2, request.signal, build.entry.module.streamTimeout, serverMode),
          renderMeta: {}
        };
        try {
          return await handleDocumentRequestFunction(request, context.statusCode, headers, entryContext, loadContext);
        } catch (error2) {
          handleError(error2);
          return returnLastResortErrorResponse(error2, serverMode);
        }
      }
    }
  }
  async function handleResourceRequest(serverMode, build, staticHandler, routeId, request, loadContext, handleError) {
    try {
      let response = await staticHandler.queryRoute(request, {
        routeId,
        requestContext: loadContext,
        unstable_respond: build.future.unstable_middleware ? (ctx) => ctx : undefined
      });
      if (_chunkK7YFBME3js.isResponse.call(undefined, response)) {
        return response;
      }
      if (typeof response === "string") {
        return new Response(response);
      }
      return Response.json(response);
    } catch (error) {
      if (_chunkK7YFBME3js.isResponse.call(undefined, error)) {
        error.headers.set("X-Remix-Catch", "yes");
        return error;
      }
      if (_chunkK7YFBME3js.isRouteErrorResponse.call(undefined, error)) {
        if (error) {
          handleError(error);
        }
        return errorResponseToJson(error, serverMode);
      }
      if (error instanceof Error && error.message === "Expected a response from queryRoute") {
        let newError = new Error("Expected a Response to be returned from resource route handler");
        handleError(newError);
        return returnLastResortErrorResponse(newError, serverMode);
      }
      handleError(error);
      return returnLastResortErrorResponse(error, serverMode);
    }
  }
  function errorResponseToJson(errorResponse, serverMode) {
    return Response.json(serializeError(errorResponse.error || new Error("Unexpected Server Error"), serverMode), {
      status: errorResponse.status,
      statusText: errorResponse.statusText,
      headers: {
        "X-Remix-Error": "yes"
      }
    });
  }
  function returnLastResortErrorResponse(error, serverMode) {
    let message = "Unexpected Server Error";
    if (serverMode !== "production") {
      message += `

${String(error)}`;
    }
    return new Response(message, {
      status: 500,
      headers: {
        "Content-Type": "text/plain"
      }
    });
  }
  function unwrapResponse(response) {
    let contentType = response.headers.get("Content-Type");
    return contentType && /\bapplication\/json\b/.test(contentType) ? response.body == null ? null : response.json() : response.text();
  }
  function flash(name) {
    return `__flash_${name}__`;
  }
  var createSession = (initialData = {}, id3 = "") => {
    let map = new Map(Object.entries(initialData));
    return {
      get id() {
        return id3;
      },
      get data() {
        return Object.fromEntries(map);
      },
      has(name) {
        return map.has(name) || map.has(flash(name));
      },
      get(name) {
        if (map.has(name))
          return map.get(name);
        let flashName = flash(name);
        if (map.has(flashName)) {
          let value = map.get(flashName);
          map.delete(flashName);
          return value;
        }
        return;
      },
      set(name, value) {
        map.set(name, value);
      },
      flash(name, value) {
        map.set(flash(name), value);
      },
      unset(name) {
        map.delete(name);
      }
    };
  };
  var isSession = (object) => {
    return object != null && typeof object.id === "string" && typeof object.data !== "undefined" && typeof object.has === "function" && typeof object.get === "function" && typeof object.set === "function" && typeof object.flash === "function" && typeof object.unset === "function";
  };
  function createSessionStorage({
    cookie: cookieArg,
    createData,
    readData,
    updateData,
    deleteData
  }) {
    let cookie = isCookie(cookieArg) ? cookieArg : createCookie(_optionalChain([cookieArg, "optionalAccess", (_15) => _15.name]) || "__session", cookieArg);
    warnOnceAboutSigningSessionCookie(cookie);
    return {
      async getSession(cookieHeader, options) {
        let id3 = cookieHeader && await cookie.parse(cookieHeader, options);
        let data2 = id3 && await readData(id3);
        return createSession(data2 || {}, id3 || "");
      },
      async commitSession(session, options) {
        let { id: id3, data: data2 } = session;
        let expires = _optionalChain([options, "optionalAccess", (_16) => _16.maxAge]) != null ? new Date(Date.now() + options.maxAge * 1000) : _optionalChain([options, "optionalAccess", (_17) => _17.expires]) != null ? options.expires : cookie.expires;
        if (id3) {
          await updateData(id3, data2, expires);
        } else {
          id3 = await createData(data2, expires);
        }
        return cookie.serialize(id3, options);
      },
      async destroySession(session, options) {
        await deleteData(session.id);
        return cookie.serialize("", {
          ...options,
          maxAge: undefined,
          expires: /* @__PURE__ */ new Date(0)
        });
      }
    };
  }
  function warnOnceAboutSigningSessionCookie(cookie) {
    _chunkK7YFBME3js.warnOnce.call(undefined, cookie.isSigned, `The "${cookie.name}" cookie is not signed, but session cookies should be signed to prevent tampering on the client before they are sent back to the server. See https://reactrouter.com/explanation/sessions-and-cookies#signing-cookies for more information.`);
  }
  function createCookieSessionStorage({ cookie: cookieArg } = {}) {
    let cookie = isCookie(cookieArg) ? cookieArg : createCookie(_optionalChain([cookieArg, "optionalAccess", (_18) => _18.name]) || "__session", cookieArg);
    warnOnceAboutSigningSessionCookie(cookie);
    return {
      async getSession(cookieHeader, options) {
        return createSession(cookieHeader && await cookie.parse(cookieHeader, options) || {});
      },
      async commitSession(session, options) {
        let serializedCookie = await cookie.serialize(session.data, options);
        if (serializedCookie.length > 4096) {
          throw new Error("Cookie length will exceed browser maximum. Length: " + serializedCookie.length);
        }
        return serializedCookie;
      },
      async destroySession(_session, options) {
        return cookie.serialize("", {
          ...options,
          maxAge: undefined,
          expires: /* @__PURE__ */ new Date(0)
        });
      }
    };
  }
  function createMemorySessionStorage({ cookie } = {}) {
    let map = /* @__PURE__ */ new Map;
    return createSessionStorage({
      cookie,
      async createData(data2, expires) {
        let id3 = Math.random().toString(36).substring(2, 10);
        map.set(id3, { data: data2, expires });
        return id3;
      },
      async readData(id3) {
        if (map.has(id3)) {
          let { data: data2, expires } = map.get(id3);
          if (!expires || expires > /* @__PURE__ */ new Date) {
            return data2;
          }
          if (expires)
            map.delete(id3);
        }
        return null;
      },
      async updateData(id3, data2, expires) {
        map.set(id3, { data: data2, expires });
      },
      async deleteData(id3) {
        map.delete(id3);
      }
    });
  }
  function href(path, ...args) {
    let params = args[0];
    return path.split("/").map((segment) => {
      if (segment === "*") {
        return params ? params["*"] : undefined;
      }
      const match = segment.match(/^:([\w-]+)(\?)?/);
      if (!match)
        return segment;
      const param = match[1];
      const value = params ? params[param] : undefined;
      const isRequired = match[2] === undefined;
      if (isRequired && value === undefined) {
        throw Error(`Path '${path}' requires param '${param}' but it was not provided`);
      }
      return value;
    }).filter((segment) => segment !== undefined).join("/");
  }
  var ReactDOM = _interopRequireWildcard(_reactdom);
  function getHydrationData(state, routes, getRouteInfo, location2, basename, isSpaMode) {
    let hydrationData = {
      ...state,
      loaderData: { ...state.loaderData }
    };
    let initialMatches = _chunkK7YFBME3js.matchRoutes.call(undefined, routes, location2, basename);
    if (initialMatches) {
      for (let match of initialMatches) {
        let routeId = match.route.id;
        let routeInfo = getRouteInfo(routeId);
        if (_chunkK7YFBME3js.shouldHydrateRouteLoader.call(undefined, routeId, routeInfo.clientLoader, routeInfo.hasLoader, isSpaMode) && (routeInfo.hasHydrateFallback || !routeInfo.hasLoader)) {
          delete hydrationData.loaderData[routeId];
        } else if (!routeInfo.hasLoader) {
          hydrationData.loaderData[routeId] = null;
        }
      }
    }
    return hydrationData;
  }
  var RSCRouterGlobalErrorBoundary = class extends React2.default.Component {
    constructor(props) {
      super(props);
      this.state = { error: null, location: props.location };
    }
    static getDerivedStateFromError(error) {
      return { error };
    }
    static getDerivedStateFromProps(props, state) {
      if (state.location !== props.location) {
        return { error: null, location: props.location };
      }
      return { error: state.error, location: state.location };
    }
    render() {
      if (this.state.error) {
        return /* @__PURE__ */ React2.default.createElement(RSCDefaultRootErrorBoundaryImpl, {
          error: this.state.error,
          renderAppShell: true
        });
      } else {
        return this.props.children;
      }
    }
  };
  function ErrorWrapper({
    renderAppShell,
    title,
    children
  }) {
    if (!renderAppShell) {
      return children;
    }
    return /* @__PURE__ */ React2.default.createElement("html", { lang: "en" }, /* @__PURE__ */ React2.default.createElement("head", null, /* @__PURE__ */ React2.default.createElement("meta", { charSet: "utf-8" }), /* @__PURE__ */ React2.default.createElement("meta", {
      name: "viewport",
      content: "width=device-width,initial-scale=1,viewport-fit=cover"
    }), /* @__PURE__ */ React2.default.createElement("title", null, title)), /* @__PURE__ */ React2.default.createElement("body", null, /* @__PURE__ */ React2.default.createElement("main", { style: { fontFamily: "system-ui, sans-serif", padding: "2rem" } }, children)));
  }
  function RSCDefaultRootErrorBoundaryImpl({
    error,
    renderAppShell
  }) {
    console.error(error);
    let heyDeveloper = /* @__PURE__ */ React2.default.createElement("script", {
      dangerouslySetInnerHTML: {
        __html: `
        console.log(
          "\uD83D\uDCBF Hey developer \uD83D\uDC4B. You can provide a way better UX than this when your app throws errors. Check out https://reactrouter.com/how-to/error-boundary for more information."
        );
      `
      }
    });
    if (_chunkK7YFBME3js.isRouteErrorResponse.call(undefined, error)) {
      return /* @__PURE__ */ React2.default.createElement(ErrorWrapper, {
        renderAppShell,
        title: "Unhandled Thrown Response!"
      }, /* @__PURE__ */ React2.default.createElement("h1", { style: { fontSize: "24px" } }, error.status, " ", error.statusText), _chunkK7YFBME3js.ENABLE_DEV_WARNINGS ? heyDeveloper : null);
    }
    let errorInstance;
    if (error instanceof Error) {
      errorInstance = error;
    } else {
      let errorString = error == null ? "Unknown Error" : typeof error === "object" && ("toString" in error) ? error.toString() : JSON.stringify(error);
      errorInstance = new Error(errorString);
    }
    return /* @__PURE__ */ React2.default.createElement(ErrorWrapper, { renderAppShell, title: "Application Error!" }, /* @__PURE__ */ React2.default.createElement("h1", { style: { fontSize: "24px" } }, "Application Error"), /* @__PURE__ */ React2.default.createElement("pre", {
      style: {
        padding: "2rem",
        background: "hsla(10, 50%, 50%, 0.1)",
        color: "red",
        overflow: "auto"
      }
    }, errorInstance.stack), heyDeveloper);
  }
  function RSCDefaultRootErrorBoundary({
    hasRootLayout
  }) {
    let error = _chunkK7YFBME3js.useRouteError.call(undefined);
    if (hasRootLayout === undefined) {
      throw new Error("Missing 'hasRootLayout' prop");
    }
    return /* @__PURE__ */ React2.default.createElement(RSCDefaultRootErrorBoundaryImpl, {
      renderAppShell: !hasRootLayout,
      error
    });
  }
  function createCallServer({
    createFromReadableStream,
    createTemporaryReferenceSet,
    encodeReply,
    fetch: fetchImplementation = fetch
  }) {
    const globalVar = window;
    let landedActionId = 0;
    return async (id3, args) => {
      let actionId = globalVar.__routerActionID = _nullishCoalesce(globalVar.__routerActionID, () => globalVar.__routerActionID = 0) + 1;
      const temporaryReferences = createTemporaryReferenceSet();
      const response = await fetchImplementation(new Request(location.href, {
        body: await encodeReply(args, { temporaryReferences }),
        method: "POST",
        headers: {
          Accept: "text/x-component",
          "rsc-action-id": id3
        }
      }));
      if (!response.body) {
        throw new Error("No response body");
      }
      const payload = await createFromReadableStream(response.body, {
        temporaryReferences
      });
      if (payload.type === "redirect") {
        if (payload.reload) {
          window.location.href = payload.location;
          return;
        }
        globalVar.__router.navigate(payload.location, {
          replace: payload.replace
        });
        return payload.actionResult;
      }
      if (payload.type !== "action") {
        throw new Error("Unexpected payload type");
      }
      if (payload.rerender) {
        React4.startTransition(async () => {
          const rerender = await payload.rerender;
          if (!rerender)
            return;
          if (landedActionId < actionId && globalVar.__routerActionID <= actionId) {
            landedActionId = actionId;
            if (rerender.type === "redirect") {
              if (rerender.reload) {
                window.location.href = rerender.location;
                return;
              }
              globalVar.__router.navigate(rerender.location, {
                replace: rerender.replace
              });
              return;
            }
            let lastMatch;
            for (const match of rerender.matches) {
              globalVar.__router.patchRoutes(_nullishCoalesce(_optionalChain([lastMatch, "optionalAccess", (_19) => _19.id]), () => null), [createRouteFromServerManifest(match)], true);
              lastMatch = match;
            }
            window.__router._internalSetStateDoNotUseOrYouWillBreakYourApp({});
            React4.startTransition(() => {
              window.__router._internalSetStateDoNotUseOrYouWillBreakYourApp({
                loaderData: Object.assign({}, globalVar.__router.state.loaderData, rerender.loaderData),
                errors: rerender.errors ? Object.assign({}, globalVar.__router.state.errors, rerender.errors) : null
              });
            });
          }
        });
      }
      return payload.actionResult;
    };
  }
  function createRouterFromPayload({
    fetchImplementation,
    createFromReadableStream,
    unstable_getContext,
    payload
  }) {
    const globalVar = window;
    if (globalVar.__router)
      return globalVar.__router;
    if (payload.type !== "render")
      throw new Error("Invalid payload type");
    let patches = /* @__PURE__ */ new Map;
    _optionalChain([payload, "access", (_20) => _20.patches, "optionalAccess", (_21) => _21.forEach, "call", (_22) => _22((patch) => {
      _chunkK7YFBME3js.invariant.call(undefined, patch.parentId, "Invalid patch parentId");
      if (!patches.has(patch.parentId)) {
        patches.set(patch.parentId, []);
      }
      _optionalChain([patches, "access", (_23) => _23.get, "call", (_24) => _24(patch.parentId), "optionalAccess", (_25) => _25.push, "call", (_26) => _26(patch)]);
    })]);
    let routes = payload.matches.reduceRight((previous, match) => {
      const route = createRouteFromServerManifest(match, payload);
      if (previous.length > 0) {
        route.children = previous;
        let childrenToPatch = patches.get(match.id);
        if (childrenToPatch) {
          route.children.push(...childrenToPatch.map((r2) => createRouteFromServerManifest(r2)));
        }
      }
      return [route];
    }, []);
    globalVar.__router = _chunkK7YFBME3js.createRouter.call(undefined, {
      routes,
      unstable_getContext,
      basename: payload.basename,
      history: _chunkK7YFBME3js.createBrowserHistory.call(undefined),
      hydrationData: getHydrationData({
        loaderData: payload.loaderData,
        actionData: payload.actionData,
        errors: payload.errors
      }, routes, (routeId) => {
        let match = payload.matches.find((m) => m.id === routeId);
        _chunkK7YFBME3js.invariant.call(undefined, match, "Route not found in payload");
        return {
          clientLoader: match.clientLoader,
          hasLoader: match.hasLoader,
          hasHydrateFallback: match.hydrateFallbackElement != null
        };
      }, payload.location, undefined, false),
      async patchRoutesOnNavigation({ path, signal }) {
        if (discoveredPaths.has(path)) {
          return;
        }
        await fetchAndApplyManifestPatches([path], createFromReadableStream, fetchImplementation, signal);
      },
      dataStrategy: getRSCSingleFetchDataStrategy(() => globalVar.__router, true, payload.basename, createFromReadableStream, fetchImplementation)
    });
    if (globalVar.__router.state.initialized) {
      globalVar.__routerInitialized = true;
      globalVar.__router.initialize();
    } else {
      globalVar.__routerInitialized = false;
    }
    let lastLoaderData = undefined;
    globalVar.__router.subscribe(({ loaderData, actionData }) => {
      if (lastLoaderData !== loaderData) {
        globalVar.__routerActionID = _nullishCoalesce(globalVar.__routerActionID, () => globalVar.__routerActionID = 0) + 1;
      }
    });
    return globalVar.__router;
  }
  var renderedRoutesContext = _chunkK7YFBME3js.unstable_createContext.call(undefined);
  function getRSCSingleFetchDataStrategy(getRouter, ssr, basename, createFromReadableStream, fetchImplementation) {
    let dataStrategy = _chunkK7YFBME3js.getSingleFetchDataStrategyImpl.call(undefined, getRouter, (match) => {
      let M = match;
      return {
        hasLoader: M.route.hasLoader,
        hasClientLoader: M.route.hasClientLoader,
        hasComponent: M.route.hasComponent,
        hasAction: M.route.hasAction,
        hasClientAction: M.route.hasClientAction,
        hasShouldRevalidate: M.route.hasShouldRevalidate
      };
    }, getFetchAndDecodeViaRSC(createFromReadableStream, fetchImplementation), ssr, basename, (match) => {
      let M = match;
      return M.route.hasComponent && !M.route.element;
    });
    return async (args) => args.unstable_runClientMiddleware(async () => {
      let context = args.context;
      context.set(renderedRoutesContext, []);
      let results = await dataStrategy(args);
      const renderedRoutesById = /* @__PURE__ */ new Map;
      for (const route of context.get(renderedRoutesContext)) {
        if (!renderedRoutesById.has(route.id)) {
          renderedRoutesById.set(route.id, []);
        }
        renderedRoutesById.get(route.id).push(route);
      }
      for (const match of args.matches) {
        const renderedRoutes = renderedRoutesById.get(match.route.id);
        if (renderedRoutes) {
          for (const rendered of renderedRoutes) {
            window.__router.patchRoutes(_nullishCoalesce(rendered.parentId, () => null), [createRouteFromServerManifest(rendered)], true);
          }
        }
      }
      return results;
    });
  }
  function getFetchAndDecodeViaRSC(createFromReadableStream, fetchImplementation) {
    return async (args, basename, targetRoutes) => {
      let { request, context } = args;
      let url = _chunkK7YFBME3js.singleFetchUrl.call(undefined, request.url, basename, "rsc");
      if (request.method === "GET") {
        url = _chunkK7YFBME3js.stripIndexParam.call(undefined, url);
        if (targetRoutes) {
          url.searchParams.set("_routes", targetRoutes.join(","));
        }
      }
      let res = await fetchImplementation(new Request(url, await _chunkK7YFBME3js.createRequestInit.call(undefined, request)));
      if (res.status === 404 && !res.headers.has("X-Remix-Response")) {
        throw new (0, _chunkK7YFBME3js.ErrorResponseImpl)(404, "Not Found", true);
      }
      _chunkK7YFBME3js.invariant.call(undefined, res.body, "No response body to decode");
      try {
        const payload = await createFromReadableStream(res.body, {
          temporaryReferences: undefined
        });
        if (payload.type === "redirect") {
          return {
            status: res.status,
            data: {
              redirect: {
                redirect: payload.location,
                reload: payload.reload,
                replace: payload.replace,
                revalidate: false,
                status: payload.status
              }
            }
          };
        }
        if (payload.type !== "render") {
          throw new Error("Unexpected payload type");
        }
        context.get(renderedRoutesContext).push(...payload.matches);
        let results = { routes: {} };
        const dataKey = _chunkK7YFBME3js.isMutationMethod.call(undefined, request.method) ? "actionData" : "loaderData";
        for (let [routeId, data2] of Object.entries(payload[dataKey] || {})) {
          results.routes[routeId] = { data: data2 };
        }
        if (payload.errors) {
          for (let [routeId, error] of Object.entries(payload.errors)) {
            results.routes[routeId] = { error };
          }
        }
        return { status: res.status, data: results };
      } catch (e) {
        throw new Error("Unable to decode RSC response");
      }
    };
  }
  function RSCHydratedRouter({
    createFromReadableStream,
    fetch: fetchImplementation = fetch,
    payload,
    routeDiscovery = "eager",
    unstable_getContext
  }) {
    if (payload.type !== "render")
      throw new Error("Invalid payload type");
    let router = React4.useMemo(() => createRouterFromPayload({
      payload,
      fetchImplementation,
      unstable_getContext,
      createFromReadableStream
    }), [
      createFromReadableStream,
      payload,
      fetchImplementation,
      unstable_getContext
    ]);
    React4.useLayoutEffect(() => {
      const globalVar = window;
      if (!globalVar.__routerInitialized) {
        globalVar.__routerInitialized = true;
        globalVar.__router.initialize();
      }
    }, []);
    let [location2, setLocation] = React4.useState(router.state.location);
    React4.useLayoutEffect(() => router.subscribe((newState) => {
      if (newState.location !== location2) {
        setLocation(newState.location);
      }
    }), [router, location2]);
    React4.useEffect(() => {
      if (routeDiscovery === "lazy" || _optionalChain([window, "access", (_27) => _27.navigator, "optionalAccess", (_28) => _28.connection, "optionalAccess", (_29) => _29.saveData]) === true) {
        return;
      }
      function registerElement(el) {
        let path = el.tagName === "FORM" ? el.getAttribute("action") : el.getAttribute("href");
        if (!path) {
          return;
        }
        let pathname = el.tagName === "A" ? el.pathname : new URL(path, window.location.origin).pathname;
        if (!discoveredPaths.has(pathname)) {
          nextPaths.add(pathname);
        }
      }
      async function fetchPatches() {
        document.querySelectorAll("a[data-discover], form[data-discover]").forEach(registerElement);
        let paths = Array.from(nextPaths.keys()).filter((path) => {
          if (discoveredPaths.has(path)) {
            nextPaths.delete(path);
            return false;
          }
          return true;
        });
        if (paths.length === 0) {
          return;
        }
        try {
          await fetchAndApplyManifestPatches(paths, createFromReadableStream, fetchImplementation);
        } catch (e) {
          console.error("Failed to fetch manifest patches", e);
        }
      }
      let debouncedFetchPatches = debounce(fetchPatches, 100);
      fetchPatches();
      let observer = new MutationObserver(() => debouncedFetchPatches());
      observer.observe(document.documentElement, {
        subtree: true,
        childList: true,
        attributes: true,
        attributeFilter: ["data-discover", "href", "action"]
      });
    }, [routeDiscovery, createFromReadableStream, fetchImplementation]);
    const frameworkContext = {
      future: {
        unstable_middleware: false,
        unstable_subResourceIntegrity: false
      },
      isSpaMode: true,
      ssr: true,
      criticalCss: "",
      manifest: {
        routes: {},
        version: "1",
        url: "",
        entry: {
          module: "",
          imports: []
        }
      },
      routeDiscovery: { mode: "lazy", manifestPath: "/__manifest" },
      routeModules: {}
    };
    return /* @__PURE__ */ React4.createElement(_chunkK7YFBME3js.RSCRouterContext.Provider, { value: true }, /* @__PURE__ */ React4.createElement(RSCRouterGlobalErrorBoundary, { location: location2 }, /* @__PURE__ */ React4.createElement(_chunkK7YFBME3js.FrameworkContext.Provider, { value: frameworkContext }, /* @__PURE__ */ React4.createElement(_chunkR73PQUJUjs.RouterProvider, { router, flushSync: ReactDOM.flushSync }))));
  }
  function createRouteFromServerManifest(match, payload) {
    let hasInitialData = payload && match.id in payload.loaderData;
    let initialData = _optionalChain([payload, "optionalAccess", (_30) => _30.loaderData, "access", (_31) => _31[match.id]]);
    let hasInitialError = _optionalChain([payload, "optionalAccess", (_32) => _32.errors]) && match.id in payload.errors;
    let initialError = _optionalChain([payload, "optionalAccess", (_33) => _33.errors, "optionalAccess", (_34) => _34[match.id]]);
    let isHydrationRequest = _optionalChain([match, "access", (_35) => _35.clientLoader, "optionalAccess", (_36) => _36.hydrate]) === true || !match.hasLoader || match.hasComponent && !match.element;
    let dataRoute = {
      id: match.id,
      element: match.element,
      errorElement: match.errorElement,
      handle: match.handle,
      hasErrorBoundary: match.hasErrorBoundary,
      hydrateFallbackElement: match.hydrateFallbackElement,
      index: match.index,
      loader: match.clientLoader ? async (args, singleFetch) => {
        try {
          let result = await match.clientLoader({
            ...args,
            serverLoader: () => {
              preventInvalidServerHandlerCall("loader", match.id, match.hasLoader);
              if (isHydrationRequest) {
                if (hasInitialData) {
                  return initialData;
                }
                if (hasInitialError) {
                  throw initialError;
                }
              }
              return callSingleFetch(singleFetch);
            }
          });
          return result;
        } finally {
          isHydrationRequest = false;
        }
      } : (_, singleFetch) => callSingleFetch(singleFetch),
      action: match.clientAction ? (args, singleFetch) => match.clientAction({
        ...args,
        serverAction: async () => {
          preventInvalidServerHandlerCall("action", match.id, match.hasLoader);
          return await callSingleFetch(singleFetch);
        }
      }) : match.hasAction ? (_, singleFetch) => callSingleFetch(singleFetch) : () => {
        throw _chunkK7YFBME3js.noActionDefinedError.call(undefined, "action", match.id);
      },
      path: match.path,
      shouldRevalidate: match.shouldRevalidate,
      hasLoader: true,
      hasClientLoader: match.clientLoader != null,
      hasAction: match.hasAction,
      hasClientAction: match.clientAction != null,
      hasShouldRevalidate: match.shouldRevalidate != null
    };
    if (typeof dataRoute.loader === "function") {
      dataRoute.loader.hydrate = _chunkK7YFBME3js.shouldHydrateRouteLoader.call(undefined, match.id, match.clientLoader, match.hasLoader, false);
    }
    return dataRoute;
  }
  function callSingleFetch(singleFetch) {
    _chunkK7YFBME3js.invariant.call(undefined, typeof singleFetch === "function", "Invalid singleFetch parameter");
    return singleFetch();
  }
  function preventInvalidServerHandlerCall(type, routeId, hasHandler) {
    if (!hasHandler) {
      let fn = type === "action" ? "serverAction()" : "serverLoader()";
      let msg = `You are trying to call ${fn} on a route that does not have a server ${type} (routeId: "${routeId}")`;
      console.error(msg);
      throw new (0, _chunkK7YFBME3js.ErrorResponseImpl)(400, "Bad Request", new Error(msg), true);
    }
  }
  var nextPaths = /* @__PURE__ */ new Set;
  var discoveredPathsMaxSize = 1000;
  var discoveredPaths = /* @__PURE__ */ new Set;
  var URL_LIMIT = 7680;
  function getManifestUrl(paths) {
    if (paths.length === 0) {
      return null;
    }
    if (paths.length === 1) {
      return new URL(`${paths[0]}.manifest`, window.location.origin);
    }
    const globalVar = window;
    let basename = _nullishCoalesce(globalVar.__router.basename, () => "").replace(/^\/|\/$/g, "");
    let url = new URL(`${basename}/.manifest`, window.location.origin);
    paths.sort().forEach((path) => url.searchParams.append("p", path));
    return url;
  }
  async function fetchAndApplyManifestPatches(paths, createFromReadableStream, fetchImplementation, signal) {
    let url = getManifestUrl(paths);
    if (url == null) {
      return;
    }
    if (url.toString().length > URL_LIMIT) {
      nextPaths.clear();
      return;
    }
    let response = await fetchImplementation(new Request(url, { signal }));
    if (!response.body || response.status < 200 || response.status >= 300) {
      throw new Error("Unable to fetch new route matches from the server");
    }
    let payload = await createFromReadableStream(response.body, {
      temporaryReferences: undefined
    });
    if (payload.type !== "manifest") {
      throw new Error("Failed to patch routes");
    }
    paths.forEach((p) => addToFifoQueue(p, discoveredPaths));
    payload.patches.forEach((p) => {
      window.__router.patchRoutes(_nullishCoalesce(p.parentId, () => null), [createRouteFromServerManifest(p)]);
    });
  }
  function addToFifoQueue(path, queue) {
    if (queue.size >= discoveredPathsMaxSize) {
      let first = queue.values().next().value;
      queue.delete(first);
    }
    queue.add(path);
  }
  function debounce(callback, wait) {
    let timeoutId;
    return (...args) => {
      window.clearTimeout(timeoutId);
      timeoutId = window.setTimeout(() => callback(...args), wait);
    };
  }
  var encoder2 = new TextEncoder;
  var trailer = "</body></html>";
  function injectRSCPayload(rscStream) {
    let decoder = new TextDecoder;
    let resolveFlightDataPromise;
    let flightDataPromise = new Promise((resolve) => resolveFlightDataPromise = resolve);
    let startedRSC = false;
    let buffered = [];
    let timeout = null;
    function flushBufferedChunks(controller) {
      for (let chunk of buffered) {
        let buf = decoder.decode(chunk, { stream: true });
        if (buf.endsWith(trailer)) {
          buf = buf.slice(0, -trailer.length);
        }
        controller.enqueue(encoder2.encode(buf));
      }
      buffered.length = 0;
      timeout = null;
    }
    return new TransformStream({
      transform(chunk, controller) {
        buffered.push(chunk);
        if (timeout) {
          return;
        }
        timeout = setTimeout(async () => {
          flushBufferedChunks(controller);
          if (!startedRSC) {
            startedRSC = true;
            writeRSCStream(rscStream, controller).catch((err) => controller.error(err)).then(resolveFlightDataPromise);
          }
        }, 0);
      },
      async flush(controller) {
        await flightDataPromise;
        if (timeout) {
          clearTimeout(timeout);
          flushBufferedChunks(controller);
        }
        controller.enqueue(encoder2.encode("</body></html>"));
      }
    });
  }
  async function writeRSCStream(rscStream, controller) {
    let decoder = new TextDecoder("utf-8", { fatal: true });
    const reader = rscStream.getReader();
    try {
      let read;
      while ((read = await reader.read()) && !read.done) {
        const chunk = read.value;
        try {
          writeChunk(JSON.stringify(decoder.decode(chunk, { stream: true })), controller);
        } catch (err) {
          let base64 = JSON.stringify(btoa(String.fromCodePoint(...chunk)));
          writeChunk(`Uint8Array.from(atob(${base64}), m => m.codePointAt(0))`, controller);
        }
      }
    } finally {
      reader.releaseLock();
    }
    let remaining = decoder.decode();
    if (remaining.length) {
      writeChunk(JSON.stringify(remaining), controller);
    }
  }
  function writeChunk(chunk, controller) {
    controller.enqueue(encoder2.encode(`<script>${escapeScript(`(self.__FLIGHT_DATA||=[]).push(${chunk})`)}</script>`));
  }
  function escapeScript(script) {
    return script.replace(/<!--/g, "<\\!--").replace(/<\/(script)/gi, "</\\$1");
  }
  async function routeRSCServerRequest({
    request,
    fetchServer,
    createFromReadableStream,
    renderHTML: renderHTML2,
    hydrate = true
  }) {
    const url = new URL(request.url);
    const isDataRequest = isReactServerRequest(url);
    const respondWithRSCPayload = isDataRequest || isManifestRequest(url) || request.headers.has("rsc-action-id");
    const serverResponse = await fetchServer(request);
    if (respondWithRSCPayload || serverResponse.headers.get("React-Router-Resource") === "true") {
      return serverResponse;
    }
    if (!serverResponse.body) {
      throw new Error("Missing body in server response");
    }
    let serverResponseB = null;
    if (hydrate) {
      serverResponseB = serverResponse.clone();
    }
    const body = serverResponse.body;
    let payloadPromise;
    const getPayload = async () => {
      if (payloadPromise)
        return payloadPromise;
      payloadPromise = createFromReadableStream(body);
      return payloadPromise;
    };
    try {
      const html = await renderHTML2(getPayload);
      const headers = new Headers(serverResponse.headers);
      headers.set("Content-Type", "text/html");
      if (!hydrate) {
        return new Response(html, {
          status: serverResponse.status,
          headers
        });
      }
      if (!_optionalChain([serverResponseB, "optionalAccess", (_37) => _37.body])) {
        throw new Error("Failed to clone server response");
      }
      const body2 = html.pipeThrough(injectRSCPayload(serverResponseB.body));
      return new Response(body2, {
        status: serverResponse.status,
        headers
      });
    } catch (reason) {
      if (reason instanceof Response) {
        return reason;
      }
      throw reason;
    }
  }
  function RSCStaticRouter({ getPayload }) {
    const payload = React5.use(getPayload());
    if (payload.type === "redirect") {
      throw new Response(null, {
        status: payload.status,
        headers: {
          Location: payload.location
        }
      });
    }
    if (payload.type !== "render")
      return null;
    let patchedLoaderData = { ...payload.loaderData };
    for (const match of payload.matches) {
      if (_chunkK7YFBME3js.shouldHydrateRouteLoader.call(undefined, match.id, match.clientLoader, match.hasLoader, false) && (match.hydrateFallbackElement || !match.hasLoader)) {
        delete patchedLoaderData[match.id];
      }
    }
    const context = {
      actionData: payload.actionData,
      actionHeaders: {},
      basename: payload.basename,
      errors: payload.errors,
      loaderData: patchedLoaderData,
      loaderHeaders: {},
      location: payload.location,
      statusCode: 200,
      matches: payload.matches.map((match) => ({
        params: match.params,
        pathname: match.pathname,
        pathnameBase: match.pathnameBase,
        route: {
          id: match.id,
          action: match.hasAction || !!match.clientAction,
          handle: match.handle,
          hasErrorBoundary: match.hasErrorBoundary,
          loader: match.hasLoader || !!match.clientLoader,
          index: match.index,
          path: match.path,
          shouldRevalidate: match.shouldRevalidate
        }
      }))
    };
    const router = _chunkR73PQUJUjs.createStaticRouter.call(undefined, payload.matches.reduceRight((previous, match) => {
      const route = {
        id: match.id,
        action: match.hasAction || !!match.clientAction,
        element: match.element,
        errorElement: match.errorElement,
        handle: match.handle,
        hasErrorBoundary: !!match.errorElement,
        hydrateFallbackElement: match.hydrateFallbackElement,
        index: match.index,
        loader: match.hasLoader || !!match.clientLoader,
        path: match.path,
        shouldRevalidate: match.shouldRevalidate
      };
      if (previous.length > 0) {
        route.children = previous;
      }
      return [route];
    }, []), context);
    const frameworkContext = {
      future: {
        unstable_middleware: false,
        unstable_subResourceIntegrity: false
      },
      isSpaMode: false,
      ssr: true,
      criticalCss: "",
      manifest: {
        routes: {},
        version: "1",
        url: "",
        entry: {
          module: "",
          imports: []
        }
      },
      routeDiscovery: { mode: "lazy", manifestPath: "/__manifest" },
      routeModules: {}
    };
    return /* @__PURE__ */ React5.createElement(_chunkK7YFBME3js.RSCRouterContext.Provider, { value: true }, /* @__PURE__ */ React5.createElement(RSCRouterGlobalErrorBoundary, { location: payload.location }, /* @__PURE__ */ React5.createElement(_chunkK7YFBME3js.FrameworkContext.Provider, { value: frameworkContext }, /* @__PURE__ */ React5.createElement(_chunkR73PQUJUjs.StaticRouterProvider, {
      context,
      router,
      hydrate: false,
      nonce: payload.nonce
    }))));
  }
  function isReactServerRequest(url) {
    return url.pathname.endsWith(".rsc");
  }
  function isManifestRequest(url) {
    return url.pathname.endsWith(".manifest");
  }
  function getRSCStream() {
    let encoder3 = new TextEncoder;
    let streamController = null;
    let rscStream = new ReadableStream({
      start(controller) {
        if (typeof window === "undefined") {
          return;
        }
        let handleChunk = (chunk) => {
          if (typeof chunk === "string") {
            controller.enqueue(encoder3.encode(chunk));
          } else {
            controller.enqueue(chunk);
          }
        };
        window.__FLIGHT_DATA || (window.__FLIGHT_DATA = []);
        window.__FLIGHT_DATA.forEach(handleChunk);
        window.__FLIGHT_DATA.push = (chunk) => {
          handleChunk(chunk);
          return 0;
        };
        streamController = controller;
      }
    });
    if (typeof document !== "undefined" && document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", () => {
        _optionalChain([streamController, "optionalAccess", (_38) => _38.close, "call", (_39) => _39()]);
      });
    } else {
      _optionalChain([streamController, "optionalAccess", (_40) => _40.close, "call", (_41) => _41()]);
    }
    return rscStream;
  }
  function deserializeErrors(errors) {
    if (!errors)
      return null;
    let entries = Object.entries(errors);
    let serialized = {};
    for (let [key, val] of entries) {
      if (val && val.__type === "RouteErrorResponse") {
        serialized[key] = new (0, _chunkK7YFBME3js.ErrorResponseImpl)(val.status, val.statusText, val.data, val.internal === true);
      } else if (val && val.__type === "Error") {
        if (val.__subType) {
          let ErrorConstructor = window[val.__subType];
          if (typeof ErrorConstructor === "function") {
            try {
              let error = new ErrorConstructor(val.message);
              error.stack = val.stack;
              serialized[key] = error;
            } catch (e) {}
          }
        }
        if (serialized[key] == null) {
          let error = new Error(val.message);
          error.stack = val.stack;
          serialized[key] = error;
        }
      } else {
        serialized[key] = val;
      }
    }
    return serialized;
  }
  exports.Await = _chunkR73PQUJUjs.Await;
  exports.BrowserRouter = _chunkR73PQUJUjs.BrowserRouter;
  exports.Form = _chunkR73PQUJUjs.Form;
  exports.HashRouter = _chunkR73PQUJUjs.HashRouter;
  exports.IDLE_BLOCKER = _chunkK7YFBME3js.IDLE_BLOCKER;
  exports.IDLE_FETCHER = _chunkK7YFBME3js.IDLE_FETCHER;
  exports.IDLE_NAVIGATION = _chunkK7YFBME3js.IDLE_NAVIGATION;
  exports.Link = _chunkR73PQUJUjs.Link;
  exports.Links = _chunkK7YFBME3js.Links;
  exports.MemoryRouter = _chunkR73PQUJUjs.MemoryRouter;
  exports.Meta = _chunkK7YFBME3js.Meta;
  exports.NavLink = _chunkR73PQUJUjs.NavLink;
  exports.Navigate = _chunkR73PQUJUjs.Navigate;
  exports.NavigationType = _chunkK7YFBME3js.Action;
  exports.Outlet = _chunkR73PQUJUjs.Outlet;
  exports.PrefetchPageLinks = _chunkK7YFBME3js.PrefetchPageLinks;
  exports.Route = _chunkR73PQUJUjs.Route;
  exports.Router = _chunkR73PQUJUjs.Router;
  exports.RouterProvider = _chunkR73PQUJUjs.RouterProvider;
  exports.Routes = _chunkR73PQUJUjs.Routes;
  exports.Scripts = _chunkK7YFBME3js.Scripts;
  exports.ScrollRestoration = _chunkR73PQUJUjs.ScrollRestoration;
  exports.ServerRouter = ServerRouter;
  exports.StaticRouter = _chunkR73PQUJUjs.StaticRouter;
  exports.StaticRouterProvider = _chunkR73PQUJUjs.StaticRouterProvider;
  exports.UNSAFE_DataRouterContext = _chunkK7YFBME3js.DataRouterContext;
  exports.UNSAFE_DataRouterStateContext = _chunkK7YFBME3js.DataRouterStateContext;
  exports.UNSAFE_ErrorResponseImpl = _chunkK7YFBME3js.ErrorResponseImpl;
  exports.UNSAFE_FetchersContext = _chunkK7YFBME3js.FetchersContext;
  exports.UNSAFE_FrameworkContext = _chunkK7YFBME3js.FrameworkContext;
  exports.UNSAFE_LocationContext = _chunkK7YFBME3js.LocationContext;
  exports.UNSAFE_NavigationContext = _chunkK7YFBME3js.NavigationContext;
  exports.UNSAFE_RSCDefaultRootErrorBoundary = RSCDefaultRootErrorBoundary;
  exports.UNSAFE_RemixErrorBoundary = _chunkK7YFBME3js.RemixErrorBoundary;
  exports.UNSAFE_RouteContext = _chunkK7YFBME3js.RouteContext;
  exports.UNSAFE_ServerMode = ServerMode;
  exports.UNSAFE_SingleFetchRedirectSymbol = _chunkK7YFBME3js.SingleFetchRedirectSymbol;
  exports.UNSAFE_ViewTransitionContext = _chunkK7YFBME3js.ViewTransitionContext;
  exports.UNSAFE_WithComponentProps = _chunkR73PQUJUjs.WithComponentProps;
  exports.UNSAFE_WithErrorBoundaryProps = _chunkR73PQUJUjs.WithErrorBoundaryProps;
  exports.UNSAFE_WithHydrateFallbackProps = _chunkR73PQUJUjs.WithHydrateFallbackProps;
  exports.UNSAFE_createBrowserHistory = _chunkK7YFBME3js.createBrowserHistory;
  exports.UNSAFE_createClientRoutes = _chunkK7YFBME3js.createClientRoutes;
  exports.UNSAFE_createClientRoutesWithHMRRevalidationOptOut = _chunkK7YFBME3js.createClientRoutesWithHMRRevalidationOptOut;
  exports.UNSAFE_createRouter = _chunkK7YFBME3js.createRouter;
  exports.UNSAFE_decodeViaTurboStream = _chunkK7YFBME3js.decodeViaTurboStream;
  exports.UNSAFE_deserializeErrors = deserializeErrors;
  exports.UNSAFE_getHydrationData = getHydrationData;
  exports.UNSAFE_getPatchRoutesOnNavigationFunction = _chunkK7YFBME3js.getPatchRoutesOnNavigationFunction;
  exports.UNSAFE_getTurboStreamSingleFetchDataStrategy = _chunkK7YFBME3js.getTurboStreamSingleFetchDataStrategy;
  exports.UNSAFE_hydrationRouteProperties = _chunkR73PQUJUjs.hydrationRouteProperties;
  exports.UNSAFE_invariant = _chunkK7YFBME3js.invariant;
  exports.UNSAFE_mapRouteProperties = _chunkR73PQUJUjs.mapRouteProperties;
  exports.UNSAFE_shouldHydrateRouteLoader = _chunkK7YFBME3js.shouldHydrateRouteLoader;
  exports.UNSAFE_useFogOFWarDiscovery = _chunkK7YFBME3js.useFogOFWarDiscovery;
  exports.UNSAFE_useScrollRestoration = _chunkR73PQUJUjs.useScrollRestoration;
  exports.UNSAFE_withComponentProps = _chunkR73PQUJUjs.withComponentProps;
  exports.UNSAFE_withErrorBoundaryProps = _chunkR73PQUJUjs.withErrorBoundaryProps;
  exports.UNSAFE_withHydrateFallbackProps = _chunkR73PQUJUjs.withHydrateFallbackProps;
  exports.createBrowserRouter = _chunkR73PQUJUjs.createBrowserRouter;
  exports.createCookie = createCookie;
  exports.createCookieSessionStorage = createCookieSessionStorage;
  exports.createHashRouter = _chunkR73PQUJUjs.createHashRouter;
  exports.createMemoryRouter = _chunkR73PQUJUjs.createMemoryRouter;
  exports.createMemorySessionStorage = createMemorySessionStorage;
  exports.createPath = _chunkK7YFBME3js.createPath;
  exports.createRequestHandler = createRequestHandler;
  exports.createRoutesFromChildren = _chunkR73PQUJUjs.createRoutesFromChildren;
  exports.createRoutesFromElements = _chunkR73PQUJUjs.createRoutesFromElements;
  exports.createRoutesStub = createRoutesStub;
  exports.createSearchParams = _chunkR73PQUJUjs.createSearchParams;
  exports.createSession = createSession;
  exports.createSessionStorage = createSessionStorage;
  exports.createStaticHandler = _chunkR73PQUJUjs.createStaticHandler;
  exports.createStaticRouter = _chunkR73PQUJUjs.createStaticRouter;
  exports.data = _chunkK7YFBME3js.data;
  exports.generatePath = _chunkK7YFBME3js.generatePath;
  exports.href = href;
  exports.isCookie = isCookie;
  exports.isRouteErrorResponse = _chunkK7YFBME3js.isRouteErrorResponse;
  exports.isSession = isSession;
  exports.matchPath = _chunkK7YFBME3js.matchPath;
  exports.matchRoutes = _chunkK7YFBME3js.matchRoutes;
  exports.parsePath = _chunkK7YFBME3js.parsePath;
  exports.redirect = _chunkK7YFBME3js.redirect;
  exports.redirectDocument = _chunkK7YFBME3js.redirectDocument;
  exports.renderMatches = _chunkR73PQUJUjs.renderMatches;
  exports.replace = _chunkK7YFBME3js.replace;
  exports.resolvePath = _chunkK7YFBME3js.resolvePath;
  exports.unstable_HistoryRouter = _chunkR73PQUJUjs.HistoryRouter;
  exports.unstable_RSCHydratedRouter = RSCHydratedRouter;
  exports.unstable_RSCStaticRouter = RSCStaticRouter;
  exports.unstable_RouterContextProvider = _chunkK7YFBME3js.unstable_RouterContextProvider;
  exports.unstable_createCallServer = createCallServer;
  exports.unstable_createContext = _chunkK7YFBME3js.unstable_createContext;
  exports.unstable_getRSCStream = getRSCStream;
  exports.unstable_routeRSCServerRequest = routeRSCServerRequest;
  exports.unstable_setDevServerHooks = setDevServerHooks;
  exports.unstable_usePrompt = _chunkR73PQUJUjs.usePrompt;
  exports.useActionData = _chunkK7YFBME3js.useActionData;
  exports.useAsyncError = _chunkK7YFBME3js.useAsyncError;
  exports.useAsyncValue = _chunkK7YFBME3js.useAsyncValue;
  exports.useBeforeUnload = _chunkR73PQUJUjs.useBeforeUnload;
  exports.useBlocker = _chunkK7YFBME3js.useBlocker;
  exports.useFetcher = _chunkR73PQUJUjs.useFetcher;
  exports.useFetchers = _chunkR73PQUJUjs.useFetchers;
  exports.useFormAction = _chunkR73PQUJUjs.useFormAction;
  exports.useHref = _chunkK7YFBME3js.useHref;
  exports.useInRouterContext = _chunkK7YFBME3js.useInRouterContext;
  exports.useLinkClickHandler = _chunkR73PQUJUjs.useLinkClickHandler;
  exports.useLoaderData = _chunkK7YFBME3js.useLoaderData;
  exports.useLocation = _chunkK7YFBME3js.useLocation;
  exports.useMatch = _chunkK7YFBME3js.useMatch;
  exports.useMatches = _chunkK7YFBME3js.useMatches;
  exports.useNavigate = _chunkK7YFBME3js.useNavigate;
  exports.useNavigation = _chunkK7YFBME3js.useNavigation;
  exports.useNavigationType = _chunkK7YFBME3js.useNavigationType;
  exports.useOutlet = _chunkK7YFBME3js.useOutlet;
  exports.useOutletContext = _chunkK7YFBME3js.useOutletContext;
  exports.useParams = _chunkK7YFBME3js.useParams;
  exports.useResolvedPath = _chunkK7YFBME3js.useResolvedPath;
  exports.useRevalidator = _chunkK7YFBME3js.useRevalidator;
  exports.useRouteError = _chunkK7YFBME3js.useRouteError;
  exports.useRouteLoaderData = _chunkK7YFBME3js.useRouteLoaderData;
  exports.useRoutes = _chunkK7YFBME3js.useRoutes;
  exports.useSearchParams = _chunkR73PQUJUjs.useSearchParams;
  exports.useSubmit = _chunkR73PQUJUjs.useSubmit;
  exports.useViewTransitionState = _chunkR73PQUJUjs.useViewTransitionState;
});

// node_modules/react-router/dist/development/dom-export.js
var require_dom_export = __commonJS((exports) => {
  var _react = __toESM(require_react(), 1);
  var _reactdom = __toESM(require_react_dom(), 1);
  Object.defineProperty(exports, "__esModule", { value: true });
  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};
      if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) {
            newObj[key] = obj[key];
          }
        }
      }
      newObj.default = obj;
      return newObj;
    }
  }
  function _optionalChain(ops) {
    let lastAccessLHS = undefined;
    let value = ops[0];
    let i = 1;
    while (i < ops.length) {
      const op = ops[i];
      const fn = ops[i + 1];
      i += 2;
      if ((op === "optionalAccess" || op === "optionalCall") && value == null) {
        return;
      }
      if (op === "access" || op === "optionalAccess") {
        lastAccessLHS = value;
        value = fn(value);
      } else if (op === "call" || op === "optionalCall") {
        value = fn((...args) => value.call(lastAccessLHS, ...args));
        lastAccessLHS = undefined;
      }
    }
    return value;
  }
  var _chunkK7YFBME3js = require_chunk_K7YFBME3();
  var React2 = _interopRequireWildcard(_react);
  var React22 = _interopRequireWildcard(_react);
  var ReactDOM = _interopRequireWildcard(_reactdom);
  var _reactrouter = require_development();
  function RouterProvider2(props) {
    return /* @__PURE__ */ React2.createElement(_reactrouter.RouterProvider, { flushSync: ReactDOM.flushSync, ...props });
  }
  var ssrInfo = null;
  var router = null;
  function initSsrInfo() {
    if (!ssrInfo && window.__reactRouterContext && window.__reactRouterManifest && window.__reactRouterRouteModules) {
      if (window.__reactRouterManifest.sri === true) {
        const importMap = document.querySelector("script[rr-importmap]");
        if (_optionalChain([importMap, "optionalAccess", (_) => _.textContent])) {
          try {
            window.__reactRouterManifest.sri = JSON.parse(importMap.textContent).integrity;
          } catch (err) {
            console.error("Failed to parse import map", err);
          }
        }
      }
      ssrInfo = {
        context: window.__reactRouterContext,
        manifest: window.__reactRouterManifest,
        routeModules: window.__reactRouterRouteModules,
        stateDecodingPromise: undefined,
        router: undefined,
        routerInitialized: false
      };
    }
  }
  function createHydratedRouter({
    unstable_getContext
  }) {
    initSsrInfo();
    if (!ssrInfo) {
      throw new Error("You must be using the SSR features of React Router in order to skip passing a `router` prop to `<RouterProvider>`");
    }
    let localSsrInfo = ssrInfo;
    if (!ssrInfo.stateDecodingPromise) {
      let stream = ssrInfo.context.stream;
      _reactrouter.UNSAFE_invariant.call(undefined, stream, "No stream found for single fetch decoding");
      ssrInfo.context.stream = undefined;
      ssrInfo.stateDecodingPromise = _reactrouter.UNSAFE_decodeViaTurboStream.call(undefined, stream, window).then((value) => {
        ssrInfo.context.state = value.value;
        localSsrInfo.stateDecodingPromise.value = true;
      }).catch((e) => {
        localSsrInfo.stateDecodingPromise.error = e;
      });
    }
    if (ssrInfo.stateDecodingPromise.error) {
      throw ssrInfo.stateDecodingPromise.error;
    }
    if (!ssrInfo.stateDecodingPromise.value) {
      throw ssrInfo.stateDecodingPromise;
    }
    let routes = _reactrouter.UNSAFE_createClientRoutes.call(undefined, ssrInfo.manifest.routes, ssrInfo.routeModules, ssrInfo.context.state, ssrInfo.context.ssr, ssrInfo.context.isSpaMode);
    let hydrationData = undefined;
    if (ssrInfo.context.isSpaMode) {
      let { loaderData } = ssrInfo.context.state;
      if (_optionalChain([ssrInfo, "access", (_2) => _2.manifest, "access", (_3) => _3.routes, "access", (_4) => _4.root, "optionalAccess", (_5) => _5.hasLoader]) && loaderData && "root" in loaderData) {
        hydrationData = {
          loaderData: {
            root: loaderData.root
          }
        };
      }
    } else {
      hydrationData = _reactrouter.UNSAFE_getHydrationData.call(undefined, ssrInfo.context.state, routes, (routeId) => ({
        clientLoader: _optionalChain([ssrInfo, "access", (_6) => _6.routeModules, "access", (_7) => _7[routeId], "optionalAccess", (_8) => _8.clientLoader]),
        hasLoader: _optionalChain([ssrInfo, "access", (_9) => _9.manifest, "access", (_10) => _10.routes, "access", (_11) => _11[routeId], "optionalAccess", (_12) => _12.hasLoader]) === true,
        hasHydrateFallback: _optionalChain([ssrInfo, "access", (_13) => _13.routeModules, "access", (_14) => _14[routeId], "optionalAccess", (_15) => _15.HydrateFallback]) != null
      }), window.location, _optionalChain([window, "access", (_16) => _16.__reactRouterContext, "optionalAccess", (_17) => _17.basename]), ssrInfo.context.isSpaMode);
      if (hydrationData && hydrationData.errors) {
        hydrationData.errors = _reactrouter.UNSAFE_deserializeErrors.call(undefined, hydrationData.errors);
      }
    }
    let router2 = _reactrouter.UNSAFE_createRouter.call(undefined, {
      routes,
      history: _reactrouter.UNSAFE_createBrowserHistory.call(undefined),
      basename: ssrInfo.context.basename,
      unstable_getContext,
      hydrationData,
      hydrationRouteProperties: _reactrouter.UNSAFE_hydrationRouteProperties,
      mapRouteProperties: _reactrouter.UNSAFE_mapRouteProperties,
      future: {
        unstable_middleware: ssrInfo.context.future.unstable_middleware
      },
      dataStrategy: _reactrouter.UNSAFE_getTurboStreamSingleFetchDataStrategy.call(undefined, () => router2, ssrInfo.manifest, ssrInfo.routeModules, ssrInfo.context.ssr, ssrInfo.context.basename),
      patchRoutesOnNavigation: _reactrouter.UNSAFE_getPatchRoutesOnNavigationFunction.call(undefined, ssrInfo.manifest, ssrInfo.routeModules, ssrInfo.context.ssr, ssrInfo.context.routeDiscovery, ssrInfo.context.isSpaMode, ssrInfo.context.basename)
    });
    ssrInfo.router = router2;
    if (router2.state.initialized) {
      ssrInfo.routerInitialized = true;
      router2.initialize();
    }
    router2.createRoutesForHMR = _reactrouter.UNSAFE_createClientRoutesWithHMRRevalidationOptOut;
    window.__reactRouterDataRouter = router2;
    return router2;
  }
  function HydratedRouter2(props) {
    if (!router) {
      router = createHydratedRouter({
        unstable_getContext: props.unstable_getContext
      });
    }
    let [criticalCss, setCriticalCss] = React22.useState(_optionalChain([ssrInfo, "optionalAccess", (_18) => _18.context, "access", (_19) => _19.criticalCss]));
    React22.useEffect(() => {
      if (true) {
        setCriticalCss(undefined);
      }
    }, []);
    React22.useEffect(() => {
      if (criticalCss === undefined) {
        document.querySelectorAll(`[${_chunkK7YFBME3js.CRITICAL_CSS_DATA_ATTRIBUTE}]`).forEach((element) => element.remove());
      }
    }, [criticalCss]);
    let [location2, setLocation] = React22.useState(router.state.location);
    React22.useLayoutEffect(() => {
      if (ssrInfo && ssrInfo.router && !ssrInfo.routerInitialized) {
        ssrInfo.routerInitialized = true;
        ssrInfo.router.initialize();
      }
    }, []);
    React22.useLayoutEffect(() => {
      if (ssrInfo && ssrInfo.router) {
        return ssrInfo.router.subscribe((newState) => {
          if (newState.location !== location2) {
            setLocation(newState.location);
          }
        });
      }
    }, [location2]);
    _reactrouter.UNSAFE_invariant.call(undefined, ssrInfo, "ssrInfo unavailable for HydratedRouter");
    _reactrouter.UNSAFE_useFogOFWarDiscovery.call(undefined, router, ssrInfo.manifest, ssrInfo.routeModules, ssrInfo.context.ssr, ssrInfo.context.routeDiscovery, ssrInfo.context.isSpaMode);
    return /* @__PURE__ */ React22.createElement(React22.Fragment, null, /* @__PURE__ */ React22.createElement(_reactrouter.UNSAFE_FrameworkContext.Provider, {
      value: {
        manifest: ssrInfo.manifest,
        routeModules: ssrInfo.routeModules,
        future: ssrInfo.context.future,
        criticalCss,
        ssr: ssrInfo.context.ssr,
        isSpaMode: ssrInfo.context.isSpaMode,
        routeDiscovery: ssrInfo.context.routeDiscovery
      }
    }, /* @__PURE__ */ React22.createElement(_reactrouter.UNSAFE_RemixErrorBoundary, { location: location2 }, /* @__PURE__ */ React22.createElement(RouterProvider2, { router }))), /* @__PURE__ */ React22.createElement(React22.Fragment, null));
  }
  exports.HydratedRouter = HydratedRouter2;
  exports.RouterProvider = RouterProvider2;
});

// node_modules/react-router-dom/dist/index.js
var require_dist2 = __commonJS((exports, module) => {
  var __defProp2 = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames2 = Object.getOwnPropertyNames;
  var __hasOwnProp2 = Object.prototype.hasOwnProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp2(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames2(from))
        if (!__hasOwnProp2.call(to, key) && key !== except)
          __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));
  var __toCommonJS = (mod) => __copyProps(__defProp2({}, "__esModule", { value: true }), mod);
  var index_exports = {};
  __export(index_exports, {
    HydratedRouter: () => import_dom.HydratedRouter,
    RouterProvider: () => import_dom.RouterProvider
  });
  module.exports = __toCommonJS(index_exports);
  var import_dom = require_dom_export();
  __reExport(index_exports, require_development(), module.exports);
});

// node_modules/react/cjs/react-jsx-dev-runtime.development.js
var require_react_jsx_dev_runtime_development = __commonJS((exports) => {
  var React2 = __toESM(require_react(), 1);
  (function() {
    function getComponentNameFromType(type) {
      if (type == null)
        return null;
      if (typeof type === "function")
        return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
      if (typeof type === "string")
        return type;
      switch (type) {
        case REACT_FRAGMENT_TYPE:
          return "Fragment";
        case REACT_PROFILER_TYPE:
          return "Profiler";
        case REACT_STRICT_MODE_TYPE:
          return "StrictMode";
        case REACT_SUSPENSE_TYPE:
          return "Suspense";
        case REACT_SUSPENSE_LIST_TYPE:
          return "SuspenseList";
        case REACT_ACTIVITY_TYPE:
          return "Activity";
      }
      if (typeof type === "object")
        switch (typeof type.tag === "number" && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof) {
          case REACT_PORTAL_TYPE:
            return "Portal";
          case REACT_CONTEXT_TYPE:
            return (type.displayName || "Context") + ".Provider";
          case REACT_CONSUMER_TYPE:
            return (type._context.displayName || "Context") + ".Consumer";
          case REACT_FORWARD_REF_TYPE:
            var innerType = type.render;
            type = type.displayName;
            type || (type = innerType.displayName || innerType.name || "", type = type !== "" ? "ForwardRef(" + type + ")" : "ForwardRef");
            return type;
          case REACT_MEMO_TYPE:
            return innerType = type.displayName || null, innerType !== null ? innerType : getComponentNameFromType(type.type) || "Memo";
          case REACT_LAZY_TYPE:
            innerType = type._payload;
            type = type._init;
            try {
              return getComponentNameFromType(type(innerType));
            } catch (x) {}
        }
      return null;
    }
    function testStringCoercion(value) {
      return "" + value;
    }
    function checkKeyStringCoercion(value) {
      try {
        testStringCoercion(value);
        var JSCompiler_inline_result = false;
      } catch (e) {
        JSCompiler_inline_result = true;
      }
      if (JSCompiler_inline_result) {
        JSCompiler_inline_result = console;
        var JSCompiler_temp_const = JSCompiler_inline_result.error;
        var JSCompiler_inline_result$jscomp$0 = typeof Symbol === "function" && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
        JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
        return testStringCoercion(value);
      }
    }
    function getTaskName(type) {
      if (type === REACT_FRAGMENT_TYPE)
        return "<>";
      if (typeof type === "object" && type !== null && type.$$typeof === REACT_LAZY_TYPE)
        return "<...>";
      try {
        var name = getComponentNameFromType(type);
        return name ? "<" + name + ">" : "<...>";
      } catch (x) {
        return "<...>";
      }
    }
    function getOwner() {
      var dispatcher = ReactSharedInternals.A;
      return dispatcher === null ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
      return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
      if (hasOwnProperty.call(config, "key")) {
        var getter = Object.getOwnPropertyDescriptor(config, "key").get;
        if (getter && getter.isReactWarning)
          return false;
      }
      return config.key !== undefined;
    }
    function defineKeyPropWarningGetter(props, displayName) {
      function warnAboutAccessingKey() {
        specialPropKeyWarningShown || (specialPropKeyWarningShown = true, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
      }
      warnAboutAccessingKey.isReactWarning = true;
      Object.defineProperty(props, "key", {
        get: warnAboutAccessingKey,
        configurable: true
      });
    }
    function elementRefGetterWithDeprecationWarning() {
      var componentName = getComponentNameFromType(this.type);
      didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = true, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
      componentName = this.props.ref;
      return componentName !== undefined ? componentName : null;
    }
    function ReactElement(type, key, self, source, owner, props, debugStack, debugTask) {
      self = props.ref;
      type = {
        $$typeof: REACT_ELEMENT_TYPE,
        type,
        key,
        props,
        _owner: owner
      };
      (self !== undefined ? self : null) !== null ? Object.defineProperty(type, "ref", {
        enumerable: false,
        get: elementRefGetterWithDeprecationWarning
      }) : Object.defineProperty(type, "ref", { enumerable: false, value: null });
      type._store = {};
      Object.defineProperty(type._store, "validated", {
        configurable: false,
        enumerable: false,
        writable: true,
        value: 0
      });
      Object.defineProperty(type, "_debugInfo", {
        configurable: false,
        enumerable: false,
        writable: true,
        value: null
      });
      Object.defineProperty(type, "_debugStack", {
        configurable: false,
        enumerable: false,
        writable: true,
        value: debugStack
      });
      Object.defineProperty(type, "_debugTask", {
        configurable: false,
        enumerable: false,
        writable: true,
        value: debugTask
      });
      Object.freeze && (Object.freeze(type.props), Object.freeze(type));
      return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, source, self, debugStack, debugTask) {
      var children = config.children;
      if (children !== undefined)
        if (isStaticChildren)
          if (isArrayImpl(children)) {
            for (isStaticChildren = 0;isStaticChildren < children.length; isStaticChildren++)
              validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
          } else
            console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else
          validateChildKeys(children);
      if (hasOwnProperty.call(config, "key")) {
        children = getComponentNameFromType(type);
        var keys = Object.keys(config).filter(function(k) {
          return k !== "key";
        });
        isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
        didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = true);
      }
      children = null;
      maybeKey !== undefined && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
      hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
      if ("key" in config) {
        maybeKey = {};
        for (var propName in config)
          propName !== "key" && (maybeKey[propName] = config[propName]);
      } else
        maybeKey = config;
      children && defineKeyPropWarningGetter(maybeKey, typeof type === "function" ? type.displayName || type.name || "Unknown" : type);
      return ReactElement(type, children, self, source, getOwner(), maybeKey, debugStack, debugTask);
    }
    function validateChildKeys(node) {
      typeof node === "object" && node !== null && node.$$typeof === REACT_ELEMENT_TYPE && node._store && (node._store.validated = 1);
    }
    var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler");
    Symbol.for("react.provider");
    var REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React2.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
      return null;
    };
    React2 = {
      react_stack_bottom_frame: function(callStackForError) {
        return callStackForError();
      }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React2.react_stack_bottom_frame.bind(React2, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren, source, self) {
      var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
      return jsxDEVImpl(type, config, maybeKey, isStaticChildren, source, self, trackActualOwner ? Error("react-stack-top-frame") : unknownOwnerDebugStack, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
  })();
});

// node_modules/react/jsx-dev-runtime.js
var require_jsx_dev_runtime = __commonJS((exports, module) => {
  var react_jsx_dev_runtime_development = __toESM(require_react_jsx_dev_runtime_development(), 1);
  if (false) {} else {
    module.exports = react_jsx_dev_runtime_development;
  }
});

// src/hooks/useServiceCardInteractions.ts
var import_react = __toESM(require_react(), 1);

// src/config/constants.ts
var ANIMATION = {
  durations: {
    fastest: 0.2,
    fast: 0.3,
    normal: 0.5,
    slow: 0.8
  },
  delays: {
    none: 0,
    short: 0.05,
    medium: 0.1,
    long: 0.2,
    longer: 0.4,
    longest: 0.6
  },
  scales: {
    contracted: 0.9,
    reduced: 0.95,
    normal: 1,
    expanded: 1.05,
    large: 1.1,
    largest: 1.15,
    xl: 1.2
  },
  zIndexes: {
    dropdown: 10,
    overlay: 20,
    modal: 50
  }
};
var SERVICE_CARD = {
  layout: {
    width: 288,
    height: 320,
    marginLeft: -144,
    marginTop: -160
  },
  positioning: {
    cardSpacing: 180,
    fanningAngle: 15,
    hoverLift: -80,
    partingDistance: 50
  },
  zIndex: {
    base: 10,
    nonHovered: 5,
    hovered: 20
  },
  animation: {
    position: {
      stiffness: 260,
      damping: 26,
      mass: 0.8
    },
    movement: {
      stiffness: 300,
      damping: 30,
      mass: 0.8
    },
    scale: {
      stiffness: 400,
      damping: 25,
      mass: 0.8
    },
    iconAnimation: {
      scale: 1.15,
      x: 14,
      y: -5
    }
  },
  styles: {
    borderRadius: "rounded-2xl",
    padding: "p-8",
    patternOpacity: "opacity-5"
  }
};

// src/hooks/useServiceCardInteractions.ts
var useServiceCardInteractions = ({
  index,
  totalCards,
  stackOrder,
  hoveredIndex
}) => {
  const isHovered = hoveredIndex === index;
  const isAnyHovered = hoveredIndex !== null;
  const basePositions = import_react.default.useMemo(() => {
    const centerIndex = (totalCards - 1) / 2;
    const offset = index - centerIndex;
    const baseX = offset * SERVICE_CARD.positioning.cardSpacing;
    const baseY = Math.abs(offset) * SERVICE_CARD.positioning.fanningAngle;
    const baseRotate = Math.sign(offset) * Math.sqrt(Math.abs(offset)) * SERVICE_CARD.positioning.fanningAngle;
    return { baseX, baseY, baseRotate, offset, centerIndex };
  }, [index, totalCards]);
  const zIndex = import_react.default.useMemo(() => {
    if (isHovered)
      return SERVICE_CARD.zIndex.hovered;
    if (isAnyHovered)
      return SERVICE_CARD.zIndex.nonHovered;
    return stackOrder;
  }, [isHovered, isAnyHovered, stackOrder]);
  const targetX = import_react.default.useMemo(() => {
    const { baseX, offset, centerIndex } = basePositions;
    if (!isAnyHovered)
      return baseX;
    if (isHovered)
      return baseX;
    if (hoveredIndex !== null) {
      const hoveredOffset = hoveredIndex - centerIndex;
      if (offset < hoveredOffset)
        return baseX - SERVICE_CARD.positioning.partingDistance;
      if (offset > hoveredOffset)
        return baseX + SERVICE_CARD.positioning.partingDistance;
    }
    return baseX;
  }, [basePositions, isAnyHovered, isHovered, hoveredIndex]);
  const targetY = isHovered ? basePositions.baseY + SERVICE_CARD.positioning.hoverLift : basePositions.baseY;
  const targetRotate = isHovered ? basePositions.baseRotate * 0.3 : basePositions.baseRotate;
  const targetScale = isHovered ? ANIMATION.scales.expanded : ANIMATION.scales.normal;
  return {
    isHovered,
    isAnyHovered,
    zIndex,
    targetX,
    targetY,
    targetRotate,
    targetScale,
    baseX: basePositions.baseX,
    baseY: basePositions.baseY,
    baseRotate: basePositions.baseRotate
  };
};

// node_modules/framer-motion/dist/es/context/LayoutGroupContext.mjs
var import_react2 = __toESM(require_react(), 1);
"use client";
var LayoutGroupContext = import_react2.createContext({});

// node_modules/framer-motion/dist/es/utils/use-constant.mjs
var import_react3 = __toESM(require_react(), 1);
function useConstant(init) {
  const ref = import_react3.useRef(null);
  if (ref.current === null) {
    ref.current = init();
  }
  return ref.current;
}

// node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs
var import_react4 = __toESM(require_react(), 1);

// node_modules/framer-motion/dist/es/utils/is-browser.mjs
var isBrowser = typeof window !== "undefined";

// node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs
var useIsomorphicLayoutEffect = isBrowser ? import_react4.useLayoutEffect : import_react4.useEffect;

// node_modules/framer-motion/dist/es/context/PresenceContext.mjs
var import_react5 = __toESM(require_react(), 1);
"use client";
var PresenceContext = /* @__PURE__ */ import_react5.createContext(null);

// node_modules/motion-utils/dist/es/array.mjs
function addUniqueItem(arr, item) {
  if (arr.indexOf(item) === -1)
    arr.push(item);
}
function removeItem(arr, item) {
  const index = arr.indexOf(item);
  if (index > -1)
    arr.splice(index, 1);
}
// node_modules/motion-utils/dist/es/clamp.mjs
var clamp = (min, max, v) => {
  if (v > max)
    return max;
  if (v < min)
    return min;
  return v;
};
// node_modules/motion-utils/dist/es/format-error-message.mjs
function formatErrorMessage(message, errorCode) {
  return errorCode ? `${message}. For more information and steps for solving, visit https://motion.dev/troubleshooting/${errorCode}` : message;
}

// node_modules/motion-utils/dist/es/errors.mjs
var warning = () => {};
var invariant = () => {};
if (true) {
  warning = (check, message, errorCode) => {
    if (!check && typeof console !== "undefined") {
      console.warn(formatErrorMessage(message, errorCode));
    }
  };
  invariant = (check, message, errorCode) => {
    if (!check) {
      throw new Error(formatErrorMessage(message, errorCode));
    }
  };
}
// node_modules/motion-utils/dist/es/global-config.mjs
var MotionGlobalConfig = {};
// node_modules/motion-utils/dist/es/is-numerical-string.mjs
var isNumericalString = (v) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(v);
// node_modules/motion-utils/dist/es/is-object.mjs
function isObject(value) {
  return typeof value === "object" && value !== null;
}
// node_modules/motion-utils/dist/es/is-zero-value-string.mjs
var isZeroValueString = (v) => /^0[^.\s]+$/u.test(v);
// node_modules/motion-utils/dist/es/memo.mjs
function memo(callback) {
  let result;
  return () => {
    if (result === undefined)
      result = callback();
    return result;
  };
}
// node_modules/motion-utils/dist/es/noop.mjs
var noop = (any) => any;
// node_modules/motion-utils/dist/es/pipe.mjs
var combineFunctions = (a, b) => (v) => b(a(v));
var pipe = (...transformers) => transformers.reduce(combineFunctions);
// node_modules/motion-utils/dist/es/progress.mjs
var progress = (from, to, value) => {
  const toFromDifference = to - from;
  return toFromDifference === 0 ? 1 : (value - from) / toFromDifference;
};
// node_modules/motion-utils/dist/es/subscription-manager.mjs
class SubscriptionManager {
  constructor() {
    this.subscriptions = [];
  }
  add(handler) {
    addUniqueItem(this.subscriptions, handler);
    return () => removeItem(this.subscriptions, handler);
  }
  notify(a, b, c) {
    const numSubscriptions = this.subscriptions.length;
    if (!numSubscriptions)
      return;
    if (numSubscriptions === 1) {
      this.subscriptions[0](a, b, c);
    } else {
      for (let i = 0;i < numSubscriptions; i++) {
        const handler = this.subscriptions[i];
        handler && handler(a, b, c);
      }
    }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
// node_modules/motion-utils/dist/es/time-conversion.mjs
var secondsToMilliseconds = (seconds) => seconds * 1000;
var millisecondsToSeconds = (milliseconds) => milliseconds / 1000;
// node_modules/motion-utils/dist/es/velocity-per-second.mjs
function velocityPerSecond(velocity, frameDuration) {
  return frameDuration ? velocity * (1000 / frameDuration) : 0;
}
// node_modules/motion-utils/dist/es/warn-once.mjs
var warned = new Set;
function warnOnce(condition, message, errorCode) {
  if (condition || warned.has(message))
    return;
  console.warn(formatErrorMessage(message, errorCode));
  warned.add(message);
}
// node_modules/motion-utils/dist/es/easing/cubic-bezier.mjs
var calcBezier = (t, a1, a2) => (((1 - 3 * a2 + 3 * a1) * t + (3 * a2 - 6 * a1)) * t + 3 * a1) * t;
var subdivisionPrecision = 0.0000001;
var subdivisionMaxIterations = 12;
function binarySubdivide(x, lowerBound, upperBound, mX1, mX2) {
  let currentX;
  let currentT;
  let i = 0;
  do {
    currentT = lowerBound + (upperBound - lowerBound) / 2;
    currentX = calcBezier(currentT, mX1, mX2) - x;
    if (currentX > 0) {
      upperBound = currentT;
    } else {
      lowerBound = currentT;
    }
  } while (Math.abs(currentX) > subdivisionPrecision && ++i < subdivisionMaxIterations);
  return currentT;
}
function cubicBezier(mX1, mY1, mX2, mY2) {
  if (mX1 === mY1 && mX2 === mY2)
    return noop;
  const getTForX = (aX) => binarySubdivide(aX, 0, 1, mX1, mX2);
  return (t) => t === 0 || t === 1 ? t : calcBezier(getTForX(t), mY1, mY2);
}

// node_modules/motion-utils/dist/es/easing/modifiers/mirror.mjs
var mirrorEasing = (easing) => (p) => p <= 0.5 ? easing(2 * p) / 2 : (2 - easing(2 * (1 - p))) / 2;

// node_modules/motion-utils/dist/es/easing/modifiers/reverse.mjs
var reverseEasing = (easing) => (p) => 1 - easing(1 - p);

// node_modules/motion-utils/dist/es/easing/back.mjs
var backOut = /* @__PURE__ */ cubicBezier(0.33, 1.53, 0.69, 0.99);
var backIn = /* @__PURE__ */ reverseEasing(backOut);
var backInOut = /* @__PURE__ */ mirrorEasing(backIn);

// node_modules/motion-utils/dist/es/easing/anticipate.mjs
var anticipate = (p) => (p *= 2) < 1 ? 0.5 * backIn(p) : 0.5 * (2 - Math.pow(2, -10 * (p - 1)));
// node_modules/motion-utils/dist/es/easing/circ.mjs
var circIn = (p) => 1 - Math.sin(Math.acos(p));
var circOut = reverseEasing(circIn);
var circInOut = mirrorEasing(circIn);
// node_modules/motion-utils/dist/es/easing/ease.mjs
var easeIn = /* @__PURE__ */ cubicBezier(0.42, 0, 1, 1);
var easeOut = /* @__PURE__ */ cubicBezier(0, 0, 0.58, 1);
var easeInOut = /* @__PURE__ */ cubicBezier(0.42, 0, 0.58, 1);
// node_modules/motion-utils/dist/es/easing/utils/is-easing-array.mjs
var isEasingArray = (ease) => {
  return Array.isArray(ease) && typeof ease[0] !== "number";
};

// node_modules/motion-utils/dist/es/easing/utils/is-bezier-definition.mjs
var isBezierDefinition = (easing) => Array.isArray(easing) && typeof easing[0] === "number";
// node_modules/motion-utils/dist/es/easing/utils/map.mjs
var easingLookup = {
  linear: noop,
  easeIn,
  easeInOut,
  easeOut,
  circIn,
  circInOut,
  circOut,
  backIn,
  backInOut,
  backOut,
  anticipate
};
var isValidEasing = (easing) => {
  return typeof easing === "string";
};
var easingDefinitionToFunction = (definition) => {
  if (isBezierDefinition(definition)) {
    invariant(definition.length === 4, `Cubic bezier arrays must contain four numerical values.`, "cubic-bezier-length");
    const [x1, y1, x2, y2] = definition;
    return cubicBezier(x1, y1, x2, y2);
  } else if (isValidEasing(definition)) {
    invariant(easingLookup[definition] !== undefined, `Invalid easing type '${definition}'`, "invalid-easing-type");
    return easingLookup[definition];
  }
  return definition;
};
// node_modules/motion-dom/dist/es/frameloop/order.mjs
var stepsOrder = [
  "setup",
  "read",
  "resolveKeyframes",
  "preUpdate",
  "update",
  "preRender",
  "render",
  "postRender"
];

// node_modules/motion-dom/dist/es/stats/buffer.mjs
var statsBuffer = {
  value: null,
  addProjectionMetrics: null
};

// node_modules/motion-dom/dist/es/frameloop/render-step.mjs
function createRenderStep(runNextFrame, stepName) {
  let thisFrame = new Set;
  let nextFrame = new Set;
  let isProcessing = false;
  let flushNextFrame = false;
  const toKeepAlive = new WeakSet;
  let latestFrameData = {
    delta: 0,
    timestamp: 0,
    isProcessing: false
  };
  let numCalls = 0;
  function triggerCallback(callback) {
    if (toKeepAlive.has(callback)) {
      step.schedule(callback);
      runNextFrame();
    }
    numCalls++;
    callback(latestFrameData);
  }
  const step = {
    schedule: (callback, keepAlive = false, immediate = false) => {
      const addToCurrentFrame = immediate && isProcessing;
      const queue = addToCurrentFrame ? thisFrame : nextFrame;
      if (keepAlive)
        toKeepAlive.add(callback);
      if (!queue.has(callback))
        queue.add(callback);
      return callback;
    },
    cancel: (callback) => {
      nextFrame.delete(callback);
      toKeepAlive.delete(callback);
    },
    process: (frameData) => {
      latestFrameData = frameData;
      if (isProcessing) {
        flushNextFrame = true;
        return;
      }
      isProcessing = true;
      [thisFrame, nextFrame] = [nextFrame, thisFrame];
      thisFrame.forEach(triggerCallback);
      if (stepName && statsBuffer.value) {
        statsBuffer.value.frameloop[stepName].push(numCalls);
      }
      numCalls = 0;
      thisFrame.clear();
      isProcessing = false;
      if (flushNextFrame) {
        flushNextFrame = false;
        step.process(frameData);
      }
    }
  };
  return step;
}

// node_modules/motion-dom/dist/es/frameloop/batcher.mjs
var maxElapsed = 40;
function createRenderBatcher(scheduleNextBatch, allowKeepAlive) {
  let runNextFrame = false;
  let useDefaultElapsed = true;
  const state = {
    delta: 0,
    timestamp: 0,
    isProcessing: false
  };
  const flagRunNextFrame = () => runNextFrame = true;
  const steps = stepsOrder.reduce((acc, key) => {
    acc[key] = createRenderStep(flagRunNextFrame, allowKeepAlive ? key : undefined);
    return acc;
  }, {});
  const { setup, read, resolveKeyframes, preUpdate, update, preRender, render, postRender } = steps;
  const processBatch = () => {
    const timestamp = MotionGlobalConfig.useManualTiming ? state.timestamp : performance.now();
    runNextFrame = false;
    if (!MotionGlobalConfig.useManualTiming) {
      state.delta = useDefaultElapsed ? 1000 / 60 : Math.max(Math.min(timestamp - state.timestamp, maxElapsed), 1);
    }
    state.timestamp = timestamp;
    state.isProcessing = true;
    setup.process(state);
    read.process(state);
    resolveKeyframes.process(state);
    preUpdate.process(state);
    update.process(state);
    preRender.process(state);
    render.process(state);
    postRender.process(state);
    state.isProcessing = false;
    if (runNextFrame && allowKeepAlive) {
      useDefaultElapsed = false;
      scheduleNextBatch(processBatch);
    }
  };
  const wake = () => {
    runNextFrame = true;
    useDefaultElapsed = true;
    if (!state.isProcessing) {
      scheduleNextBatch(processBatch);
    }
  };
  const schedule = stepsOrder.reduce((acc, key) => {
    const step = steps[key];
    acc[key] = (process2, keepAlive = false, immediate = false) => {
      if (!runNextFrame)
        wake();
      return step.schedule(process2, keepAlive, immediate);
    };
    return acc;
  }, {});
  const cancel = (process2) => {
    for (let i = 0;i < stepsOrder.length; i++) {
      steps[stepsOrder[i]].cancel(process2);
    }
  };
  return { schedule, cancel, state, steps };
}

// node_modules/motion-dom/dist/es/frameloop/frame.mjs
var { schedule: frame, cancel: cancelFrame, state: frameData, steps: frameSteps } = /* @__PURE__ */ createRenderBatcher(typeof requestAnimationFrame !== "undefined" ? requestAnimationFrame : noop, true);

// node_modules/motion-dom/dist/es/frameloop/sync-time.mjs
var now;
function clearTime() {
  now = undefined;
}
var time = {
  now: () => {
    if (now === undefined) {
      time.set(frameData.isProcessing || MotionGlobalConfig.useManualTiming ? frameData.timestamp : performance.now());
    }
    return now;
  },
  set: (newTime) => {
    now = newTime;
    queueMicrotask(clearTime);
  }
};

// node_modules/motion-dom/dist/es/stats/animation-count.mjs
var activeAnimations = {
  layout: 0,
  mainThread: 0,
  waapi: 0
};

// node_modules/motion-dom/dist/es/animation/utils/is-css-variable.mjs
var checkStringStartsWith = (token) => (key) => typeof key === "string" && key.startsWith(token);
var isCSSVariableName = /* @__PURE__ */ checkStringStartsWith("--");
var startsAsVariableToken = /* @__PURE__ */ checkStringStartsWith("var(--");
var isCSSVariableToken = (value) => {
  const startsWithToken = startsAsVariableToken(value);
  if (!startsWithToken)
    return false;
  return singleCssVariableRegex.test(value.split("/*")[0].trim());
};
var singleCssVariableRegex = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;

// node_modules/motion-dom/dist/es/value/types/numbers/index.mjs
var number = {
  test: (v) => typeof v === "number",
  parse: parseFloat,
  transform: (v) => v
};
var alpha = {
  ...number,
  transform: (v) => clamp(0, 1, v)
};
var scale = {
  ...number,
  default: 1
};

// node_modules/motion-dom/dist/es/value/types/utils/sanitize.mjs
var sanitize = (v) => Math.round(v * 1e5) / 1e5;

// node_modules/motion-dom/dist/es/value/types/utils/float-regex.mjs
var floatRegex = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;

// node_modules/motion-dom/dist/es/value/types/utils/is-nullish.mjs
function isNullish(v) {
  return v == null;
}

// node_modules/motion-dom/dist/es/value/types/utils/single-color-regex.mjs
var singleColorRegex = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu;

// node_modules/motion-dom/dist/es/value/types/color/utils.mjs
var isColorString = (type, testProp) => (v) => {
  return Boolean(typeof v === "string" && singleColorRegex.test(v) && v.startsWith(type) || testProp && !isNullish(v) && Object.prototype.hasOwnProperty.call(v, testProp));
};
var splitColor = (aName, bName, cName) => (v) => {
  if (typeof v !== "string")
    return v;
  const [a, b, c, alpha2] = v.match(floatRegex);
  return {
    [aName]: parseFloat(a),
    [bName]: parseFloat(b),
    [cName]: parseFloat(c),
    alpha: alpha2 !== undefined ? parseFloat(alpha2) : 1
  };
};

// node_modules/motion-dom/dist/es/value/types/color/rgba.mjs
var clampRgbUnit = (v) => clamp(0, 255, v);
var rgbUnit = {
  ...number,
  transform: (v) => Math.round(clampRgbUnit(v))
};
var rgba = {
  test: /* @__PURE__ */ isColorString("rgb", "red"),
  parse: /* @__PURE__ */ splitColor("red", "green", "blue"),
  transform: ({ red, green, blue, alpha: alpha$1 = 1 }) => "rgba(" + rgbUnit.transform(red) + ", " + rgbUnit.transform(green) + ", " + rgbUnit.transform(blue) + ", " + sanitize(alpha.transform(alpha$1)) + ")"
};

// node_modules/motion-dom/dist/es/value/types/color/hex.mjs
function parseHex(v) {
  let r = "";
  let g = "";
  let b = "";
  let a = "";
  if (v.length > 5) {
    r = v.substring(1, 3);
    g = v.substring(3, 5);
    b = v.substring(5, 7);
    a = v.substring(7, 9);
  } else {
    r = v.substring(1, 2);
    g = v.substring(2, 3);
    b = v.substring(3, 4);
    a = v.substring(4, 5);
    r += r;
    g += g;
    b += b;
    a += a;
  }
  return {
    red: parseInt(r, 16),
    green: parseInt(g, 16),
    blue: parseInt(b, 16),
    alpha: a ? parseInt(a, 16) / 255 : 1
  };
}
var hex = {
  test: /* @__PURE__ */ isColorString("#"),
  parse: parseHex,
  transform: rgba.transform
};

// node_modules/motion-dom/dist/es/value/types/numbers/units.mjs
var createUnitType = (unit) => ({
  test: (v) => typeof v === "string" && v.endsWith(unit) && v.split(" ").length === 1,
  parse: parseFloat,
  transform: (v) => `${v}${unit}`
});
var degrees = /* @__PURE__ */ createUnitType("deg");
var percent = /* @__PURE__ */ createUnitType("%");
var px = /* @__PURE__ */ createUnitType("px");
var vh = /* @__PURE__ */ createUnitType("vh");
var vw = /* @__PURE__ */ createUnitType("vw");
var progressPercentage = /* @__PURE__ */ (() => ({
  ...percent,
  parse: (v) => percent.parse(v) / 100,
  transform: (v) => percent.transform(v * 100)
}))();

// node_modules/motion-dom/dist/es/value/types/color/hsla.mjs
var hsla = {
  test: /* @__PURE__ */ isColorString("hsl", "hue"),
  parse: /* @__PURE__ */ splitColor("hue", "saturation", "lightness"),
  transform: ({ hue, saturation, lightness, alpha: alpha$1 = 1 }) => {
    return "hsla(" + Math.round(hue) + ", " + percent.transform(sanitize(saturation)) + ", " + percent.transform(sanitize(lightness)) + ", " + sanitize(alpha.transform(alpha$1)) + ")";
  }
};

// node_modules/motion-dom/dist/es/value/types/color/index.mjs
var color = {
  test: (v) => rgba.test(v) || hex.test(v) || hsla.test(v),
  parse: (v) => {
    if (rgba.test(v)) {
      return rgba.parse(v);
    } else if (hsla.test(v)) {
      return hsla.parse(v);
    } else {
      return hex.parse(v);
    }
  },
  transform: (v) => {
    return typeof v === "string" ? v : v.hasOwnProperty("red") ? rgba.transform(v) : hsla.transform(v);
  },
  getAnimatableNone: (v) => {
    const parsed = color.parse(v);
    parsed.alpha = 0;
    return color.transform(parsed);
  }
};

// node_modules/motion-dom/dist/es/value/types/utils/color-regex.mjs
var colorRegex = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;

// node_modules/motion-dom/dist/es/value/types/complex/index.mjs
function test(v) {
  return isNaN(v) && typeof v === "string" && (v.match(floatRegex)?.length || 0) + (v.match(colorRegex)?.length || 0) > 0;
}
var NUMBER_TOKEN = "number";
var COLOR_TOKEN = "color";
var VAR_TOKEN = "var";
var VAR_FUNCTION_TOKEN = "var(";
var SPLIT_TOKEN = "${}";
var complexRegex = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function analyseComplexValue(value) {
  const originalValue = value.toString();
  const values = [];
  const indexes = {
    color: [],
    number: [],
    var: []
  };
  const types = [];
  let i = 0;
  const tokenised = originalValue.replace(complexRegex, (parsedValue) => {
    if (color.test(parsedValue)) {
      indexes.color.push(i);
      types.push(COLOR_TOKEN);
      values.push(color.parse(parsedValue));
    } else if (parsedValue.startsWith(VAR_FUNCTION_TOKEN)) {
      indexes.var.push(i);
      types.push(VAR_TOKEN);
      values.push(parsedValue);
    } else {
      indexes.number.push(i);
      types.push(NUMBER_TOKEN);
      values.push(parseFloat(parsedValue));
    }
    ++i;
    return SPLIT_TOKEN;
  });
  const split = tokenised.split(SPLIT_TOKEN);
  return { values, split, indexes, types };
}
function parseComplexValue(v) {
  return analyseComplexValue(v).values;
}
function createTransformer(source) {
  const { split, types } = analyseComplexValue(source);
  const numSections = split.length;
  return (v) => {
    let output = "";
    for (let i = 0;i < numSections; i++) {
      output += split[i];
      if (v[i] !== undefined) {
        const type = types[i];
        if (type === NUMBER_TOKEN) {
          output += sanitize(v[i]);
        } else if (type === COLOR_TOKEN) {
          output += color.transform(v[i]);
        } else {
          output += v[i];
        }
      }
    }
    return output;
  };
}
var convertNumbersToZero = (v) => typeof v === "number" ? 0 : color.test(v) ? color.getAnimatableNone(v) : v;
function getAnimatableNone(v) {
  const parsed = parseComplexValue(v);
  const transformer = createTransformer(v);
  return transformer(parsed.map(convertNumbersToZero));
}
var complex = {
  test,
  parse: parseComplexValue,
  createTransformer,
  getAnimatableNone
};

// node_modules/motion-dom/dist/es/value/types/color/hsla-to-rgba.mjs
function hueToRgb(p, q, t) {
  if (t < 0)
    t += 1;
  if (t > 1)
    t -= 1;
  if (t < 1 / 6)
    return p + (q - p) * 6 * t;
  if (t < 1 / 2)
    return q;
  if (t < 2 / 3)
    return p + (q - p) * (2 / 3 - t) * 6;
  return p;
}
function hslaToRgba({ hue, saturation, lightness, alpha: alpha2 }) {
  hue /= 360;
  saturation /= 100;
  lightness /= 100;
  let red = 0;
  let green = 0;
  let blue = 0;
  if (!saturation) {
    red = green = blue = lightness;
  } else {
    const q = lightness < 0.5 ? lightness * (1 + saturation) : lightness + saturation - lightness * saturation;
    const p = 2 * lightness - q;
    red = hueToRgb(p, q, hue + 1 / 3);
    green = hueToRgb(p, q, hue);
    blue = hueToRgb(p, q, hue - 1 / 3);
  }
  return {
    red: Math.round(red * 255),
    green: Math.round(green * 255),
    blue: Math.round(blue * 255),
    alpha: alpha2
  };
}

// node_modules/motion-dom/dist/es/utils/mix/immediate.mjs
function mixImmediate(a, b) {
  return (p) => p > 0 ? b : a;
}

// node_modules/motion-dom/dist/es/utils/mix/number.mjs
var mixNumber = (from, to, progress2) => {
  return from + (to - from) * progress2;
};

// node_modules/motion-dom/dist/es/utils/mix/color.mjs
var mixLinearColor = (from, to, v) => {
  const fromExpo = from * from;
  const expo = v * (to * to - fromExpo) + fromExpo;
  return expo < 0 ? 0 : Math.sqrt(expo);
};
var colorTypes = [hex, rgba, hsla];
var getColorType = (v) => colorTypes.find((type) => type.test(v));
function asRGBA(color2) {
  const type = getColorType(color2);
  warning(Boolean(type), `'${color2}' is not an animatable color. Use the equivalent color code instead.`, "color-not-animatable");
  if (!Boolean(type))
    return false;
  let model = type.parse(color2);
  if (type === hsla) {
    model = hslaToRgba(model);
  }
  return model;
}
var mixColor = (from, to) => {
  const fromRGBA = asRGBA(from);
  const toRGBA = asRGBA(to);
  if (!fromRGBA || !toRGBA) {
    return mixImmediate(from, to);
  }
  const blended = { ...fromRGBA };
  return (v) => {
    blended.red = mixLinearColor(fromRGBA.red, toRGBA.red, v);
    blended.green = mixLinearColor(fromRGBA.green, toRGBA.green, v);
    blended.blue = mixLinearColor(fromRGBA.blue, toRGBA.blue, v);
    blended.alpha = mixNumber(fromRGBA.alpha, toRGBA.alpha, v);
    return rgba.transform(blended);
  };
};

// node_modules/motion-dom/dist/es/utils/mix/visibility.mjs
var invisibleValues = new Set(["none", "hidden"]);
function mixVisibility(origin, target) {
  if (invisibleValues.has(origin)) {
    return (p) => p <= 0 ? origin : target;
  } else {
    return (p) => p >= 1 ? target : origin;
  }
}

// node_modules/motion-dom/dist/es/utils/mix/complex.mjs
function mixNumber2(a, b) {
  return (p) => mixNumber(a, b, p);
}
function getMixer(a) {
  if (typeof a === "number") {
    return mixNumber2;
  } else if (typeof a === "string") {
    return isCSSVariableToken(a) ? mixImmediate : color.test(a) ? mixColor : mixComplex;
  } else if (Array.isArray(a)) {
    return mixArray;
  } else if (typeof a === "object") {
    return color.test(a) ? mixColor : mixObject;
  }
  return mixImmediate;
}
function mixArray(a, b) {
  const output = [...a];
  const numValues = output.length;
  const blendValue = a.map((v, i) => getMixer(v)(v, b[i]));
  return (p) => {
    for (let i = 0;i < numValues; i++) {
      output[i] = blendValue[i](p);
    }
    return output;
  };
}
function mixObject(a, b) {
  const output = { ...a, ...b };
  const blendValue = {};
  for (const key in output) {
    if (a[key] !== undefined && b[key] !== undefined) {
      blendValue[key] = getMixer(a[key])(a[key], b[key]);
    }
  }
  return (v) => {
    for (const key in blendValue) {
      output[key] = blendValue[key](v);
    }
    return output;
  };
}
function matchOrder(origin, target) {
  const orderedOrigin = [];
  const pointers = { color: 0, var: 0, number: 0 };
  for (let i = 0;i < target.values.length; i++) {
    const type = target.types[i];
    const originIndex = origin.indexes[type][pointers[type]];
    const originValue = origin.values[originIndex] ?? 0;
    orderedOrigin[i] = originValue;
    pointers[type]++;
  }
  return orderedOrigin;
}
var mixComplex = (origin, target) => {
  const template = complex.createTransformer(target);
  const originStats = analyseComplexValue(origin);
  const targetStats = analyseComplexValue(target);
  const canInterpolate = originStats.indexes.var.length === targetStats.indexes.var.length && originStats.indexes.color.length === targetStats.indexes.color.length && originStats.indexes.number.length >= targetStats.indexes.number.length;
  if (canInterpolate) {
    if (invisibleValues.has(origin) && !targetStats.values.length || invisibleValues.has(target) && !originStats.values.length) {
      return mixVisibility(origin, target);
    }
    return pipe(mixArray(matchOrder(originStats, targetStats), targetStats.values), template);
  } else {
    warning(true, `Complex values '${origin}' and '${target}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`, "complex-values-different");
    return mixImmediate(origin, target);
  }
};

// node_modules/motion-dom/dist/es/utils/mix/index.mjs
function mix(from, to, p) {
  if (typeof from === "number" && typeof to === "number" && typeof p === "number") {
    return mixNumber(from, to, p);
  }
  const mixer = getMixer(from);
  return mixer(from, to);
}

// node_modules/motion-dom/dist/es/animation/drivers/frame.mjs
var frameloopDriver = (update) => {
  const passTimestamp = ({ timestamp }) => update(timestamp);
  return {
    start: (keepAlive = true) => frame.update(passTimestamp, keepAlive),
    stop: () => cancelFrame(passTimestamp),
    now: () => frameData.isProcessing ? frameData.timestamp : time.now()
  };
};

// node_modules/motion-dom/dist/es/animation/waapi/utils/linear.mjs
var generateLinearEasing = (easing, duration, resolution = 10) => {
  let points = "";
  const numPoints = Math.max(Math.round(duration / resolution), 2);
  for (let i = 0;i < numPoints; i++) {
    points += Math.round(easing(i / (numPoints - 1)) * 1e4) / 1e4 + ", ";
  }
  return `linear(${points.substring(0, points.length - 2)})`;
};

// node_modules/motion-dom/dist/es/animation/generators/utils/calc-duration.mjs
var maxGeneratorDuration = 20000;
function calcGeneratorDuration(generator) {
  let duration = 0;
  const timeStep = 50;
  let state = generator.next(duration);
  while (!state.done && duration < maxGeneratorDuration) {
    duration += timeStep;
    state = generator.next(duration);
  }
  return duration >= maxGeneratorDuration ? Infinity : duration;
}

// node_modules/motion-dom/dist/es/animation/generators/utils/create-generator-easing.mjs
function createGeneratorEasing(options, scale2 = 100, createGenerator) {
  const generator = createGenerator({ ...options, keyframes: [0, scale2] });
  const duration = Math.min(calcGeneratorDuration(generator), maxGeneratorDuration);
  return {
    type: "keyframes",
    ease: (progress2) => {
      return generator.next(duration * progress2).value / scale2;
    },
    duration: millisecondsToSeconds(duration)
  };
}

// node_modules/motion-dom/dist/es/animation/generators/utils/velocity.mjs
var velocitySampleDuration = 5;
function calcGeneratorVelocity(resolveValue, t, current) {
  const prevT = Math.max(t - velocitySampleDuration, 0);
  return velocityPerSecond(current - resolveValue(prevT), t - prevT);
}

// node_modules/motion-dom/dist/es/animation/generators/spring/defaults.mjs
var springDefaults = {
  stiffness: 100,
  damping: 10,
  mass: 1,
  velocity: 0,
  duration: 800,
  bounce: 0.3,
  visualDuration: 0.3,
  restSpeed: {
    granular: 0.01,
    default: 2
  },
  restDelta: {
    granular: 0.005,
    default: 0.5
  },
  minDuration: 0.01,
  maxDuration: 10,
  minDamping: 0.05,
  maxDamping: 1
};

// node_modules/motion-dom/dist/es/animation/generators/spring/find.mjs
var safeMin = 0.001;
function findSpring({ duration = springDefaults.duration, bounce = springDefaults.bounce, velocity = springDefaults.velocity, mass = springDefaults.mass }) {
  let envelope;
  let derivative;
  warning(duration <= secondsToMilliseconds(springDefaults.maxDuration), "Spring duration must be 10 seconds or less", "spring-duration-limit");
  let dampingRatio = 1 - bounce;
  dampingRatio = clamp(springDefaults.minDamping, springDefaults.maxDamping, dampingRatio);
  duration = clamp(springDefaults.minDuration, springDefaults.maxDuration, millisecondsToSeconds(duration));
  if (dampingRatio < 1) {
    envelope = (undampedFreq2) => {
      const exponentialDecay = undampedFreq2 * dampingRatio;
      const delta = exponentialDecay * duration;
      const a = exponentialDecay - velocity;
      const b = calcAngularFreq(undampedFreq2, dampingRatio);
      const c = Math.exp(-delta);
      return safeMin - a / b * c;
    };
    derivative = (undampedFreq2) => {
      const exponentialDecay = undampedFreq2 * dampingRatio;
      const delta = exponentialDecay * duration;
      const d = delta * velocity + velocity;
      const e = Math.pow(dampingRatio, 2) * Math.pow(undampedFreq2, 2) * duration;
      const f = Math.exp(-delta);
      const g = calcAngularFreq(Math.pow(undampedFreq2, 2), dampingRatio);
      const factor = -envelope(undampedFreq2) + safeMin > 0 ? -1 : 1;
      return factor * ((d - e) * f) / g;
    };
  } else {
    envelope = (undampedFreq2) => {
      const a = Math.exp(-undampedFreq2 * duration);
      const b = (undampedFreq2 - velocity) * duration + 1;
      return -safeMin + a * b;
    };
    derivative = (undampedFreq2) => {
      const a = Math.exp(-undampedFreq2 * duration);
      const b = (velocity - undampedFreq2) * (duration * duration);
      return a * b;
    };
  }
  const initialGuess = 5 / duration;
  const undampedFreq = approximateRoot(envelope, derivative, initialGuess);
  duration = secondsToMilliseconds(duration);
  if (isNaN(undampedFreq)) {
    return {
      stiffness: springDefaults.stiffness,
      damping: springDefaults.damping,
      duration
    };
  } else {
    const stiffness = Math.pow(undampedFreq, 2) * mass;
    return {
      stiffness,
      damping: dampingRatio * 2 * Math.sqrt(mass * stiffness),
      duration
    };
  }
}
var rootIterations = 12;
function approximateRoot(envelope, derivative, initialGuess) {
  let result = initialGuess;
  for (let i = 1;i < rootIterations; i++) {
    result = result - envelope(result) / derivative(result);
  }
  return result;
}
function calcAngularFreq(undampedFreq, dampingRatio) {
  return undampedFreq * Math.sqrt(1 - dampingRatio * dampingRatio);
}

// node_modules/motion-dom/dist/es/animation/generators/spring/index.mjs
var durationKeys = ["duration", "bounce"];
var physicsKeys = ["stiffness", "damping", "mass"];
function isSpringType(options, keys) {
  return keys.some((key) => options[key] !== undefined);
}
function getSpringOptions(options) {
  let springOptions = {
    velocity: springDefaults.velocity,
    stiffness: springDefaults.stiffness,
    damping: springDefaults.damping,
    mass: springDefaults.mass,
    isResolvedFromDuration: false,
    ...options
  };
  if (!isSpringType(options, physicsKeys) && isSpringType(options, durationKeys)) {
    if (options.visualDuration) {
      const visualDuration = options.visualDuration;
      const root = 2 * Math.PI / (visualDuration * 1.2);
      const stiffness = root * root;
      const damping = 2 * clamp(0.05, 1, 1 - (options.bounce || 0)) * Math.sqrt(stiffness);
      springOptions = {
        ...springOptions,
        mass: springDefaults.mass,
        stiffness,
        damping
      };
    } else {
      const derived = findSpring(options);
      springOptions = {
        ...springOptions,
        ...derived,
        mass: springDefaults.mass
      };
      springOptions.isResolvedFromDuration = true;
    }
  }
  return springOptions;
}
function spring(optionsOrVisualDuration = springDefaults.visualDuration, bounce = springDefaults.bounce) {
  const options = typeof optionsOrVisualDuration !== "object" ? {
    visualDuration: optionsOrVisualDuration,
    keyframes: [0, 1],
    bounce
  } : optionsOrVisualDuration;
  let { restSpeed, restDelta } = options;
  const origin = options.keyframes[0];
  const target = options.keyframes[options.keyframes.length - 1];
  const state = { done: false, value: origin };
  const { stiffness, damping, mass, duration, velocity, isResolvedFromDuration } = getSpringOptions({
    ...options,
    velocity: -millisecondsToSeconds(options.velocity || 0)
  });
  const initialVelocity = velocity || 0;
  const dampingRatio = damping / (2 * Math.sqrt(stiffness * mass));
  const initialDelta = target - origin;
  const undampedAngularFreq = millisecondsToSeconds(Math.sqrt(stiffness / mass));
  const isGranularScale = Math.abs(initialDelta) < 5;
  restSpeed || (restSpeed = isGranularScale ? springDefaults.restSpeed.granular : springDefaults.restSpeed.default);
  restDelta || (restDelta = isGranularScale ? springDefaults.restDelta.granular : springDefaults.restDelta.default);
  let resolveSpring;
  if (dampingRatio < 1) {
    const angularFreq = calcAngularFreq(undampedAngularFreq, dampingRatio);
    resolveSpring = (t) => {
      const envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
      return target - envelope * ((initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) / angularFreq * Math.sin(angularFreq * t) + initialDelta * Math.cos(angularFreq * t));
    };
  } else if (dampingRatio === 1) {
    resolveSpring = (t) => target - Math.exp(-undampedAngularFreq * t) * (initialDelta + (initialVelocity + undampedAngularFreq * initialDelta) * t);
  } else {
    const dampedAngularFreq = undampedAngularFreq * Math.sqrt(dampingRatio * dampingRatio - 1);
    resolveSpring = (t) => {
      const envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
      const freqForT = Math.min(dampedAngularFreq * t, 300);
      return target - envelope * ((initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) * Math.sinh(freqForT) + dampedAngularFreq * initialDelta * Math.cosh(freqForT)) / dampedAngularFreq;
    };
  }
  const generator = {
    calculatedDuration: isResolvedFromDuration ? duration || null : null,
    next: (t) => {
      const current = resolveSpring(t);
      if (!isResolvedFromDuration) {
        let currentVelocity = t === 0 ? initialVelocity : 0;
        if (dampingRatio < 1) {
          currentVelocity = t === 0 ? secondsToMilliseconds(initialVelocity) : calcGeneratorVelocity(resolveSpring, t, current);
        }
        const isBelowVelocityThreshold = Math.abs(currentVelocity) <= restSpeed;
        const isBelowDisplacementThreshold = Math.abs(target - current) <= restDelta;
        state.done = isBelowVelocityThreshold && isBelowDisplacementThreshold;
      } else {
        state.done = t >= duration;
      }
      state.value = state.done ? target : current;
      return state;
    },
    toString: () => {
      const calculatedDuration = Math.min(calcGeneratorDuration(generator), maxGeneratorDuration);
      const easing = generateLinearEasing((progress2) => generator.next(calculatedDuration * progress2).value, calculatedDuration, 30);
      return calculatedDuration + "ms " + easing;
    },
    toTransition: () => {}
  };
  return generator;
}
spring.applyToOptions = (options) => {
  const generatorOptions = createGeneratorEasing(options, 100, spring);
  options.ease = generatorOptions.ease;
  options.duration = secondsToMilliseconds(generatorOptions.duration);
  options.type = "keyframes";
  return options;
};

// node_modules/motion-dom/dist/es/animation/generators/inertia.mjs
function inertia({ keyframes, velocity = 0, power = 0.8, timeConstant = 325, bounceDamping = 10, bounceStiffness = 500, modifyTarget, min, max, restDelta = 0.5, restSpeed }) {
  const origin = keyframes[0];
  const state = {
    done: false,
    value: origin
  };
  const isOutOfBounds = (v) => min !== undefined && v < min || max !== undefined && v > max;
  const nearestBoundary = (v) => {
    if (min === undefined)
      return max;
    if (max === undefined)
      return min;
    return Math.abs(min - v) < Math.abs(max - v) ? min : max;
  };
  let amplitude = power * velocity;
  const ideal = origin + amplitude;
  const target = modifyTarget === undefined ? ideal : modifyTarget(ideal);
  if (target !== ideal)
    amplitude = target - origin;
  const calcDelta = (t) => -amplitude * Math.exp(-t / timeConstant);
  const calcLatest = (t) => target + calcDelta(t);
  const applyFriction = (t) => {
    const delta = calcDelta(t);
    const latest = calcLatest(t);
    state.done = Math.abs(delta) <= restDelta;
    state.value = state.done ? target : latest;
  };
  let timeReachedBoundary;
  let spring$1;
  const checkCatchBoundary = (t) => {
    if (!isOutOfBounds(state.value))
      return;
    timeReachedBoundary = t;
    spring$1 = spring({
      keyframes: [state.value, nearestBoundary(state.value)],
      velocity: calcGeneratorVelocity(calcLatest, t, state.value),
      damping: bounceDamping,
      stiffness: bounceStiffness,
      restDelta,
      restSpeed
    });
  };
  checkCatchBoundary(0);
  return {
    calculatedDuration: null,
    next: (t) => {
      let hasUpdatedFrame = false;
      if (!spring$1 && timeReachedBoundary === undefined) {
        hasUpdatedFrame = true;
        applyFriction(t);
        checkCatchBoundary(t);
      }
      if (timeReachedBoundary !== undefined && t >= timeReachedBoundary) {
        return spring$1.next(t - timeReachedBoundary);
      } else {
        !hasUpdatedFrame && applyFriction(t);
        return state;
      }
    }
  };
}

// node_modules/motion-dom/dist/es/utils/interpolate.mjs
function createMixers(output, ease, customMixer) {
  const mixers = [];
  const mixerFactory = customMixer || MotionGlobalConfig.mix || mix;
  const numMixers = output.length - 1;
  for (let i = 0;i < numMixers; i++) {
    let mixer = mixerFactory(output[i], output[i + 1]);
    if (ease) {
      const easingFunction = Array.isArray(ease) ? ease[i] || noop : ease;
      mixer = pipe(easingFunction, mixer);
    }
    mixers.push(mixer);
  }
  return mixers;
}
function interpolate(input, output, { clamp: isClamp = true, ease, mixer } = {}) {
  const inputLength = input.length;
  invariant(inputLength === output.length, "Both input and output ranges must be the same length", "range-length");
  if (inputLength === 1)
    return () => output[0];
  if (inputLength === 2 && output[0] === output[1])
    return () => output[1];
  const isZeroDeltaRange = input[0] === input[1];
  if (input[0] > input[inputLength - 1]) {
    input = [...input].reverse();
    output = [...output].reverse();
  }
  const mixers = createMixers(output, ease, mixer);
  const numMixers = mixers.length;
  const interpolator = (v) => {
    if (isZeroDeltaRange && v < input[0])
      return output[0];
    let i = 0;
    if (numMixers > 1) {
      for (;i < input.length - 2; i++) {
        if (v < input[i + 1])
          break;
      }
    }
    const progressInRange = progress(input[i], input[i + 1], v);
    return mixers[i](progressInRange);
  };
  return isClamp ? (v) => interpolator(clamp(input[0], input[inputLength - 1], v)) : interpolator;
}

// node_modules/motion-dom/dist/es/animation/keyframes/offsets/fill.mjs
function fillOffset(offset, remaining) {
  const min = offset[offset.length - 1];
  for (let i = 1;i <= remaining; i++) {
    const offsetProgress = progress(0, remaining, i);
    offset.push(mixNumber(min, 1, offsetProgress));
  }
}

// node_modules/motion-dom/dist/es/animation/keyframes/offsets/default.mjs
function defaultOffset(arr) {
  const offset = [0];
  fillOffset(offset, arr.length - 1);
  return offset;
}

// node_modules/motion-dom/dist/es/animation/keyframes/offsets/time.mjs
function convertOffsetToTimes(offset, duration) {
  return offset.map((o) => o * duration);
}

// node_modules/motion-dom/dist/es/animation/generators/keyframes.mjs
function defaultEasing(values, easing) {
  return values.map(() => easing || easeInOut).splice(0, values.length - 1);
}
function keyframes({ duration = 300, keyframes: keyframeValues, times, ease = "easeInOut" }) {
  const easingFunctions = isEasingArray(ease) ? ease.map(easingDefinitionToFunction) : easingDefinitionToFunction(ease);
  const state = {
    done: false,
    value: keyframeValues[0]
  };
  const absoluteTimes = convertOffsetToTimes(times && times.length === keyframeValues.length ? times : defaultOffset(keyframeValues), duration);
  const mapTimeToKeyframe = interpolate(absoluteTimes, keyframeValues, {
    ease: Array.isArray(easingFunctions) ? easingFunctions : defaultEasing(keyframeValues, easingFunctions)
  });
  return {
    calculatedDuration: duration,
    next: (t) => {
      state.value = mapTimeToKeyframe(t);
      state.done = t >= duration;
      return state;
    }
  };
}

// node_modules/motion-dom/dist/es/animation/keyframes/get-final.mjs
var isNotNull = (value) => value !== null;
function getFinalKeyframe(keyframes2, { repeat, repeatType = "loop" }, finalKeyframe, speed = 1) {
  const resolvedKeyframes = keyframes2.filter(isNotNull);
  const useFirstKeyframe = speed < 0 || repeat && repeatType !== "loop" && repeat % 2 === 1;
  const index = useFirstKeyframe ? 0 : resolvedKeyframes.length - 1;
  return !index || finalKeyframe === undefined ? resolvedKeyframes[index] : finalKeyframe;
}

// node_modules/motion-dom/dist/es/animation/utils/replace-transition-type.mjs
var transitionTypeMap = {
  decay: inertia,
  inertia,
  tween: keyframes,
  keyframes,
  spring
};
function replaceTransitionType(transition) {
  if (typeof transition.type === "string") {
    transition.type = transitionTypeMap[transition.type];
  }
}

// node_modules/motion-dom/dist/es/animation/utils/WithPromise.mjs
class WithPromise {
  constructor() {
    this.updateFinished();
  }
  get finished() {
    return this._finished;
  }
  updateFinished() {
    this._finished = new Promise((resolve) => {
      this.resolve = resolve;
    });
  }
  notifyFinished() {
    this.resolve();
  }
  then(onResolve, onReject) {
    return this.finished.then(onResolve, onReject);
  }
}

// node_modules/motion-dom/dist/es/animation/JSAnimation.mjs
var percentToProgress = (percent2) => percent2 / 100;

class JSAnimation extends WithPromise {
  constructor(options) {
    super();
    this.state = "idle";
    this.startTime = null;
    this.isStopped = false;
    this.currentTime = 0;
    this.holdTime = null;
    this.playbackSpeed = 1;
    this.stop = () => {
      const { motionValue } = this.options;
      if (motionValue && motionValue.updatedAt !== time.now()) {
        this.tick(time.now());
      }
      this.isStopped = true;
      if (this.state === "idle")
        return;
      this.teardown();
      this.options.onStop?.();
    };
    activeAnimations.mainThread++;
    this.options = options;
    this.initAnimation();
    this.play();
    if (options.autoplay === false)
      this.pause();
  }
  initAnimation() {
    const { options } = this;
    replaceTransitionType(options);
    const { type = keyframes, repeat = 0, repeatDelay = 0, repeatType, velocity = 0 } = options;
    let { keyframes: keyframes$1 } = options;
    const generatorFactory = type || keyframes;
    if (generatorFactory !== keyframes) {
      invariant(keyframes$1.length <= 2, `Only two keyframes currently supported with spring and inertia animations. Trying to animate ${keyframes$1}`, "spring-two-frames");
    }
    if (generatorFactory !== keyframes && typeof keyframes$1[0] !== "number") {
      this.mixKeyframes = pipe(percentToProgress, mix(keyframes$1[0], keyframes$1[1]));
      keyframes$1 = [0, 100];
    }
    const generator = generatorFactory({ ...options, keyframes: keyframes$1 });
    if (repeatType === "mirror") {
      this.mirroredGenerator = generatorFactory({
        ...options,
        keyframes: [...keyframes$1].reverse(),
        velocity: -velocity
      });
    }
    if (generator.calculatedDuration === null) {
      generator.calculatedDuration = calcGeneratorDuration(generator);
    }
    const { calculatedDuration } = generator;
    this.calculatedDuration = calculatedDuration;
    this.resolvedDuration = calculatedDuration + repeatDelay;
    this.totalDuration = this.resolvedDuration * (repeat + 1) - repeatDelay;
    this.generator = generator;
  }
  updateTime(timestamp) {
    const animationTime = Math.round(timestamp - this.startTime) * this.playbackSpeed;
    if (this.holdTime !== null) {
      this.currentTime = this.holdTime;
    } else {
      this.currentTime = animationTime;
    }
  }
  tick(timestamp, sample = false) {
    const { generator, totalDuration, mixKeyframes, mirroredGenerator, resolvedDuration, calculatedDuration } = this;
    if (this.startTime === null)
      return generator.next(0);
    const { delay = 0, keyframes: keyframes2, repeat, repeatType, repeatDelay, type, onUpdate, finalKeyframe } = this.options;
    if (this.speed > 0) {
      this.startTime = Math.min(this.startTime, timestamp);
    } else if (this.speed < 0) {
      this.startTime = Math.min(timestamp - totalDuration / this.speed, this.startTime);
    }
    if (sample) {
      this.currentTime = timestamp;
    } else {
      this.updateTime(timestamp);
    }
    const timeWithoutDelay = this.currentTime - delay * (this.playbackSpeed >= 0 ? 1 : -1);
    const isInDelayPhase = this.playbackSpeed >= 0 ? timeWithoutDelay < 0 : timeWithoutDelay > totalDuration;
    this.currentTime = Math.max(timeWithoutDelay, 0);
    if (this.state === "finished" && this.holdTime === null) {
      this.currentTime = totalDuration;
    }
    let elapsed = this.currentTime;
    let frameGenerator = generator;
    if (repeat) {
      const progress2 = Math.min(this.currentTime, totalDuration) / resolvedDuration;
      let currentIteration = Math.floor(progress2);
      let iterationProgress = progress2 % 1;
      if (!iterationProgress && progress2 >= 1) {
        iterationProgress = 1;
      }
      iterationProgress === 1 && currentIteration--;
      currentIteration = Math.min(currentIteration, repeat + 1);
      const isOddIteration = Boolean(currentIteration % 2);
      if (isOddIteration) {
        if (repeatType === "reverse") {
          iterationProgress = 1 - iterationProgress;
          if (repeatDelay) {
            iterationProgress -= repeatDelay / resolvedDuration;
          }
        } else if (repeatType === "mirror") {
          frameGenerator = mirroredGenerator;
        }
      }
      elapsed = clamp(0, 1, iterationProgress) * resolvedDuration;
    }
    const state = isInDelayPhase ? { done: false, value: keyframes2[0] } : frameGenerator.next(elapsed);
    if (mixKeyframes) {
      state.value = mixKeyframes(state.value);
    }
    let { done } = state;
    if (!isInDelayPhase && calculatedDuration !== null) {
      done = this.playbackSpeed >= 0 ? this.currentTime >= totalDuration : this.currentTime <= 0;
    }
    const isAnimationFinished = this.holdTime === null && (this.state === "finished" || this.state === "running" && done);
    if (isAnimationFinished && type !== inertia) {
      state.value = getFinalKeyframe(keyframes2, this.options, finalKeyframe, this.speed);
    }
    if (onUpdate) {
      onUpdate(state.value);
    }
    if (isAnimationFinished) {
      this.finish();
    }
    return state;
  }
  then(resolve, reject) {
    return this.finished.then(resolve, reject);
  }
  get duration() {
    return millisecondsToSeconds(this.calculatedDuration);
  }
  get time() {
    return millisecondsToSeconds(this.currentTime);
  }
  set time(newTime) {
    newTime = secondsToMilliseconds(newTime);
    this.currentTime = newTime;
    if (this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0) {
      this.holdTime = newTime;
    } else if (this.driver) {
      this.startTime = this.driver.now() - newTime / this.playbackSpeed;
    }
    this.driver?.start(false);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(newSpeed) {
    this.updateTime(time.now());
    const hasChanged = this.playbackSpeed !== newSpeed;
    this.playbackSpeed = newSpeed;
    if (hasChanged) {
      this.time = millisecondsToSeconds(this.currentTime);
    }
  }
  play() {
    if (this.isStopped)
      return;
    const { driver = frameloopDriver, startTime } = this.options;
    if (!this.driver) {
      this.driver = driver((timestamp) => this.tick(timestamp));
    }
    this.options.onPlay?.();
    const now2 = this.driver.now();
    if (this.state === "finished") {
      this.updateFinished();
      this.startTime = now2;
    } else if (this.holdTime !== null) {
      this.startTime = now2 - this.holdTime;
    } else if (!this.startTime) {
      this.startTime = startTime ?? now2;
    }
    if (this.state === "finished" && this.speed < 0) {
      this.startTime += this.calculatedDuration;
    }
    this.holdTime = null;
    this.state = "running";
    this.driver.start();
  }
  pause() {
    this.state = "paused";
    this.updateTime(time.now());
    this.holdTime = this.currentTime;
  }
  complete() {
    if (this.state !== "running") {
      this.play();
    }
    this.state = "finished";
    this.holdTime = null;
  }
  finish() {
    this.notifyFinished();
    this.teardown();
    this.state = "finished";
    this.options.onComplete?.();
  }
  cancel() {
    this.holdTime = null;
    this.startTime = 0;
    this.tick(0);
    this.teardown();
    this.options.onCancel?.();
  }
  teardown() {
    this.state = "idle";
    this.stopDriver();
    this.startTime = this.holdTime = null;
    activeAnimations.mainThread--;
  }
  stopDriver() {
    if (!this.driver)
      return;
    this.driver.stop();
    this.driver = undefined;
  }
  sample(sampleTime) {
    this.startTime = 0;
    return this.tick(sampleTime, true);
  }
  attachTimeline(timeline) {
    if (this.options.allowFlatten) {
      this.options.type = "keyframes";
      this.options.ease = "linear";
      this.initAnimation();
    }
    this.driver?.stop();
    return timeline.observe(this);
  }
}

// node_modules/motion-dom/dist/es/animation/keyframes/utils/fill-wildcards.mjs
function fillWildcards(keyframes2) {
  for (let i = 1;i < keyframes2.length; i++) {
    keyframes2[i] ?? (keyframes2[i] = keyframes2[i - 1]);
  }
}

// node_modules/motion-dom/dist/es/render/dom/parse-transform.mjs
var radToDeg = (rad) => rad * 180 / Math.PI;
var rotate = (v) => {
  const angle = radToDeg(Math.atan2(v[1], v[0]));
  return rebaseAngle(angle);
};
var matrix2dParsers = {
  x: 4,
  y: 5,
  translateX: 4,
  translateY: 5,
  scaleX: 0,
  scaleY: 3,
  scale: (v) => (Math.abs(v[0]) + Math.abs(v[3])) / 2,
  rotate,
  rotateZ: rotate,
  skewX: (v) => radToDeg(Math.atan(v[1])),
  skewY: (v) => radToDeg(Math.atan(v[2])),
  skew: (v) => (Math.abs(v[1]) + Math.abs(v[2])) / 2
};
var rebaseAngle = (angle) => {
  angle = angle % 360;
  if (angle < 0)
    angle += 360;
  return angle;
};
var rotateZ = rotate;
var scaleX = (v) => Math.sqrt(v[0] * v[0] + v[1] * v[1]);
var scaleY = (v) => Math.sqrt(v[4] * v[4] + v[5] * v[5]);
var matrix3dParsers = {
  x: 12,
  y: 13,
  z: 14,
  translateX: 12,
  translateY: 13,
  translateZ: 14,
  scaleX,
  scaleY,
  scale: (v) => (scaleX(v) + scaleY(v)) / 2,
  rotateX: (v) => rebaseAngle(radToDeg(Math.atan2(v[6], v[5]))),
  rotateY: (v) => rebaseAngle(radToDeg(Math.atan2(-v[2], v[0]))),
  rotateZ,
  rotate: rotateZ,
  skewX: (v) => radToDeg(Math.atan(v[4])),
  skewY: (v) => radToDeg(Math.atan(v[1])),
  skew: (v) => (Math.abs(v[1]) + Math.abs(v[4])) / 2
};
function defaultTransformValue(name) {
  return name.includes("scale") ? 1 : 0;
}
function parseValueFromTransform(transform, name) {
  if (!transform || transform === "none") {
    return defaultTransformValue(name);
  }
  const matrix3dMatch = transform.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let parsers;
  let match;
  if (matrix3dMatch) {
    parsers = matrix3dParsers;
    match = matrix3dMatch;
  } else {
    const matrix2dMatch = transform.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    parsers = matrix2dParsers;
    match = matrix2dMatch;
  }
  if (!match) {
    return defaultTransformValue(name);
  }
  const valueParser = parsers[name];
  const values = match[1].split(",").map(convertTransformToNumber);
  return typeof valueParser === "function" ? valueParser(values) : values[valueParser];
}
var readTransformValue = (instance, name) => {
  const { transform = "none" } = getComputedStyle(instance);
  return parseValueFromTransform(transform, name);
};
function convertTransformToNumber(value) {
  return parseFloat(value.trim());
}

// node_modules/motion-dom/dist/es/render/utils/keys-transform.mjs
var transformPropOrder = [
  "transformPerspective",
  "x",
  "y",
  "z",
  "translateX",
  "translateY",
  "translateZ",
  "scale",
  "scaleX",
  "scaleY",
  "rotate",
  "rotateX",
  "rotateY",
  "rotateZ",
  "skew",
  "skewX",
  "skewY"
];
var transformProps = /* @__PURE__ */ (() => new Set(transformPropOrder))();

// node_modules/motion-dom/dist/es/animation/keyframes/utils/unit-conversion.mjs
var isNumOrPxType = (v) => v === number || v === px;
var transformKeys = new Set(["x", "y", "z"]);
var nonTranslationalTransformKeys = transformPropOrder.filter((key) => !transformKeys.has(key));
function removeNonTranslationalTransform(visualElement) {
  const removedTransforms = [];
  nonTranslationalTransformKeys.forEach((key) => {
    const value = visualElement.getValue(key);
    if (value !== undefined) {
      removedTransforms.push([key, value.get()]);
      value.set(key.startsWith("scale") ? 1 : 0);
    }
  });
  return removedTransforms;
}
var positionalValues = {
  width: ({ x }, { paddingLeft = "0", paddingRight = "0" }) => x.max - x.min - parseFloat(paddingLeft) - parseFloat(paddingRight),
  height: ({ y }, { paddingTop = "0", paddingBottom = "0" }) => y.max - y.min - parseFloat(paddingTop) - parseFloat(paddingBottom),
  top: (_bbox, { top }) => parseFloat(top),
  left: (_bbox, { left }) => parseFloat(left),
  bottom: ({ y }, { top }) => parseFloat(top) + (y.max - y.min),
  right: ({ x }, { left }) => parseFloat(left) + (x.max - x.min),
  x: (_bbox, { transform }) => parseValueFromTransform(transform, "x"),
  y: (_bbox, { transform }) => parseValueFromTransform(transform, "y")
};
positionalValues.translateX = positionalValues.x;
positionalValues.translateY = positionalValues.y;

// node_modules/motion-dom/dist/es/animation/keyframes/KeyframesResolver.mjs
var toResolve = new Set;
var isScheduled = false;
var anyNeedsMeasurement = false;
var isForced = false;
function measureAllKeyframes() {
  if (anyNeedsMeasurement) {
    const resolversToMeasure = Array.from(toResolve).filter((resolver) => resolver.needsMeasurement);
    const elementsToMeasure = new Set(resolversToMeasure.map((resolver) => resolver.element));
    const transformsToRestore = new Map;
    elementsToMeasure.forEach((element) => {
      const removedTransforms = removeNonTranslationalTransform(element);
      if (!removedTransforms.length)
        return;
      transformsToRestore.set(element, removedTransforms);
      element.render();
    });
    resolversToMeasure.forEach((resolver) => resolver.measureInitialState());
    elementsToMeasure.forEach((element) => {
      element.render();
      const restore = transformsToRestore.get(element);
      if (restore) {
        restore.forEach(([key, value]) => {
          element.getValue(key)?.set(value);
        });
      }
    });
    resolversToMeasure.forEach((resolver) => resolver.measureEndState());
    resolversToMeasure.forEach((resolver) => {
      if (resolver.suspendedScrollY !== undefined) {
        window.scrollTo(0, resolver.suspendedScrollY);
      }
    });
  }
  anyNeedsMeasurement = false;
  isScheduled = false;
  toResolve.forEach((resolver) => resolver.complete(isForced));
  toResolve.clear();
}
function readAllKeyframes() {
  toResolve.forEach((resolver) => {
    resolver.readKeyframes();
    if (resolver.needsMeasurement) {
      anyNeedsMeasurement = true;
    }
  });
}
function flushKeyframeResolvers() {
  isForced = true;
  readAllKeyframes();
  measureAllKeyframes();
  isForced = false;
}

class KeyframeResolver {
  constructor(unresolvedKeyframes, onComplete, name, motionValue, element, isAsync = false) {
    this.state = "pending";
    this.isAsync = false;
    this.needsMeasurement = false;
    this.unresolvedKeyframes = [...unresolvedKeyframes];
    this.onComplete = onComplete;
    this.name = name;
    this.motionValue = motionValue;
    this.element = element;
    this.isAsync = isAsync;
  }
  scheduleResolve() {
    this.state = "scheduled";
    if (this.isAsync) {
      toResolve.add(this);
      if (!isScheduled) {
        isScheduled = true;
        frame.read(readAllKeyframes);
        frame.resolveKeyframes(measureAllKeyframes);
      }
    } else {
      this.readKeyframes();
      this.complete();
    }
  }
  readKeyframes() {
    const { unresolvedKeyframes, name, element, motionValue } = this;
    if (unresolvedKeyframes[0] === null) {
      const currentValue = motionValue?.get();
      const finalKeyframe = unresolvedKeyframes[unresolvedKeyframes.length - 1];
      if (currentValue !== undefined) {
        unresolvedKeyframes[0] = currentValue;
      } else if (element && name) {
        const valueAsRead = element.readValue(name, finalKeyframe);
        if (valueAsRead !== undefined && valueAsRead !== null) {
          unresolvedKeyframes[0] = valueAsRead;
        }
      }
      if (unresolvedKeyframes[0] === undefined) {
        unresolvedKeyframes[0] = finalKeyframe;
      }
      if (motionValue && currentValue === undefined) {
        motionValue.set(unresolvedKeyframes[0]);
      }
    }
    fillWildcards(unresolvedKeyframes);
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete(isForcedComplete = false) {
    this.state = "complete";
    this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, isForcedComplete);
    toResolve.delete(this);
  }
  cancel() {
    if (this.state === "scheduled") {
      toResolve.delete(this);
      this.state = "pending";
    }
  }
  resume() {
    if (this.state === "pending")
      this.scheduleResolve();
  }
}

// node_modules/motion-dom/dist/es/render/dom/is-css-var.mjs
var isCSSVar = (name) => name.startsWith("--");

// node_modules/motion-dom/dist/es/render/dom/style-set.mjs
function setStyle(element, name, value) {
  isCSSVar(name) ? element.style.setProperty(name, value) : element.style[name] = value;
}

// node_modules/motion-dom/dist/es/utils/supports/scroll-timeline.mjs
var supportsScrollTimeline = /* @__PURE__ */ memo(() => window.ScrollTimeline !== undefined);

// node_modules/motion-dom/dist/es/utils/supports/flags.mjs
var supportsFlags = {};

// node_modules/motion-dom/dist/es/utils/supports/memo.mjs
function memoSupports(callback, supportsFlag) {
  const memoized = memo(callback);
  return () => supportsFlags[supportsFlag] ?? memoized();
}

// node_modules/motion-dom/dist/es/utils/supports/linear-easing.mjs
var supportsLinearEasing = /* @__PURE__ */ memoSupports(() => {
  try {
    document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch (e) {
    return false;
  }
  return true;
}, "linearEasing");

// node_modules/motion-dom/dist/es/animation/waapi/easing/cubic-bezier.mjs
var cubicBezierAsString = ([a, b, c, d]) => `cubic-bezier(${a}, ${b}, ${c}, ${d})`;

// node_modules/motion-dom/dist/es/animation/waapi/easing/supported.mjs
var supportedWaapiEasing = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: /* @__PURE__ */ cubicBezierAsString([0, 0.65, 0.55, 1]),
  circOut: /* @__PURE__ */ cubicBezierAsString([0.55, 0, 1, 0.45]),
  backIn: /* @__PURE__ */ cubicBezierAsString([0.31, 0.01, 0.66, -0.59]),
  backOut: /* @__PURE__ */ cubicBezierAsString([0.33, 1.53, 0.69, 0.99])
};

// node_modules/motion-dom/dist/es/animation/waapi/easing/map-easing.mjs
function mapEasingToNativeEasing(easing, duration) {
  if (!easing) {
    return;
  } else if (typeof easing === "function") {
    return supportsLinearEasing() ? generateLinearEasing(easing, duration) : "ease-out";
  } else if (isBezierDefinition(easing)) {
    return cubicBezierAsString(easing);
  } else if (Array.isArray(easing)) {
    return easing.map((segmentEasing) => mapEasingToNativeEasing(segmentEasing, duration) || supportedWaapiEasing.easeOut);
  } else {
    return supportedWaapiEasing[easing];
  }
}

// node_modules/motion-dom/dist/es/animation/waapi/start-waapi-animation.mjs
function startWaapiAnimation(element, valueName, keyframes2, { delay = 0, duration = 300, repeat = 0, repeatType = "loop", ease = "easeOut", times } = {}, pseudoElement = undefined) {
  const keyframeOptions = {
    [valueName]: keyframes2
  };
  if (times)
    keyframeOptions.offset = times;
  const easing = mapEasingToNativeEasing(ease, duration);
  if (Array.isArray(easing))
    keyframeOptions.easing = easing;
  if (statsBuffer.value) {
    activeAnimations.waapi++;
  }
  const options = {
    delay,
    duration,
    easing: !Array.isArray(easing) ? easing : "linear",
    fill: "both",
    iterations: repeat + 1,
    direction: repeatType === "reverse" ? "alternate" : "normal"
  };
  if (pseudoElement)
    options.pseudoElement = pseudoElement;
  const animation = element.animate(keyframeOptions, options);
  if (statsBuffer.value) {
    animation.finished.finally(() => {
      activeAnimations.waapi--;
    });
  }
  return animation;
}

// node_modules/motion-dom/dist/es/animation/generators/utils/is-generator.mjs
function isGenerator(type) {
  return typeof type === "function" && "applyToOptions" in type;
}

// node_modules/motion-dom/dist/es/animation/waapi/utils/apply-generator.mjs
function applyGeneratorOptions({ type, ...options }) {
  if (isGenerator(type) && supportsLinearEasing()) {
    return type.applyToOptions(options);
  } else {
    options.duration ?? (options.duration = 300);
    options.ease ?? (options.ease = "easeOut");
  }
  return options;
}

// node_modules/motion-dom/dist/es/animation/NativeAnimation.mjs
class NativeAnimation extends WithPromise {
  constructor(options) {
    super();
    this.finishedTime = null;
    this.isStopped = false;
    if (!options)
      return;
    const { element, name, keyframes: keyframes2, pseudoElement, allowFlatten = false, finalKeyframe, onComplete } = options;
    this.isPseudoElement = Boolean(pseudoElement);
    this.allowFlatten = allowFlatten;
    this.options = options;
    invariant(typeof options.type !== "string", `Mini animate() doesn't support "type" as a string.`, "mini-spring");
    const transition = applyGeneratorOptions(options);
    this.animation = startWaapiAnimation(element, name, keyframes2, transition, pseudoElement);
    if (transition.autoplay === false) {
      this.animation.pause();
    }
    this.animation.onfinish = () => {
      this.finishedTime = this.time;
      if (!pseudoElement) {
        const keyframe = getFinalKeyframe(keyframes2, this.options, finalKeyframe, this.speed);
        if (this.updateMotionValue) {
          this.updateMotionValue(keyframe);
        } else {
          setStyle(element, name, keyframe);
        }
        this.animation.cancel();
      }
      onComplete?.();
      this.notifyFinished();
    };
  }
  play() {
    if (this.isStopped)
      return;
    this.animation.play();
    if (this.state === "finished") {
      this.updateFinished();
    }
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.finish?.();
  }
  cancel() {
    try {
      this.animation.cancel();
    } catch (e) {}
  }
  stop() {
    if (this.isStopped)
      return;
    this.isStopped = true;
    const { state } = this;
    if (state === "idle" || state === "finished") {
      return;
    }
    if (this.updateMotionValue) {
      this.updateMotionValue();
    } else {
      this.commitStyles();
    }
    if (!this.isPseudoElement)
      this.cancel();
  }
  commitStyles() {
    if (!this.isPseudoElement) {
      this.animation.commitStyles?.();
    }
  }
  get duration() {
    const duration = this.animation.effect?.getComputedTiming?.().duration || 0;
    return millisecondsToSeconds(Number(duration));
  }
  get time() {
    return millisecondsToSeconds(Number(this.animation.currentTime) || 0);
  }
  set time(newTime) {
    this.finishedTime = null;
    this.animation.currentTime = secondsToMilliseconds(newTime);
  }
  get speed() {
    return this.animation.playbackRate;
  }
  set speed(newSpeed) {
    if (newSpeed < 0)
      this.finishedTime = null;
    this.animation.playbackRate = newSpeed;
  }
  get state() {
    return this.finishedTime !== null ? "finished" : this.animation.playState;
  }
  get startTime() {
    return Number(this.animation.startTime);
  }
  set startTime(newStartTime) {
    this.animation.startTime = newStartTime;
  }
  attachTimeline({ timeline, observe }) {
    if (this.allowFlatten) {
      this.animation.effect?.updateTiming({ easing: "linear" });
    }
    this.animation.onfinish = null;
    if (timeline && supportsScrollTimeline()) {
      this.animation.timeline = timeline;
      return noop;
    } else {
      return observe(this);
    }
  }
}

// node_modules/motion-dom/dist/es/animation/waapi/utils/unsupported-easing.mjs
var unsupportedEasingFunctions = {
  anticipate,
  backInOut,
  circInOut
};
function isUnsupportedEase(key) {
  return key in unsupportedEasingFunctions;
}
function replaceStringEasing(transition) {
  if (typeof transition.ease === "string" && isUnsupportedEase(transition.ease)) {
    transition.ease = unsupportedEasingFunctions[transition.ease];
  }
}

// node_modules/motion-dom/dist/es/animation/NativeAnimationExtended.mjs
var sampleDelta = 10;

class NativeAnimationExtended extends NativeAnimation {
  constructor(options) {
    replaceStringEasing(options);
    replaceTransitionType(options);
    super(options);
    if (options.startTime) {
      this.startTime = options.startTime;
    }
    this.options = options;
  }
  updateMotionValue(value) {
    const { motionValue, onUpdate, onComplete, element, ...options } = this.options;
    if (!motionValue)
      return;
    if (value !== undefined) {
      motionValue.set(value);
      return;
    }
    const sampleAnimation = new JSAnimation({
      ...options,
      autoplay: false
    });
    const sampleTime = secondsToMilliseconds(this.finishedTime ?? this.time);
    motionValue.setWithVelocity(sampleAnimation.sample(sampleTime - sampleDelta).value, sampleAnimation.sample(sampleTime).value, sampleDelta);
    sampleAnimation.stop();
  }
}

// node_modules/motion-dom/dist/es/animation/utils/is-animatable.mjs
var isAnimatable = (value, name) => {
  if (name === "zIndex")
    return false;
  if (typeof value === "number" || Array.isArray(value))
    return true;
  if (typeof value === "string" && (complex.test(value) || value === "0") && !value.startsWith("url(")) {
    return true;
  }
  return false;
};

// node_modules/motion-dom/dist/es/animation/utils/can-animate.mjs
function hasKeyframesChanged(keyframes2) {
  const current = keyframes2[0];
  if (keyframes2.length === 1)
    return true;
  for (let i = 0;i < keyframes2.length; i++) {
    if (keyframes2[i] !== current)
      return true;
  }
}
function canAnimate(keyframes2, name, type, velocity) {
  const originKeyframe = keyframes2[0];
  if (originKeyframe === null)
    return false;
  if (name === "display" || name === "visibility")
    return true;
  const targetKeyframe = keyframes2[keyframes2.length - 1];
  const isOriginAnimatable = isAnimatable(originKeyframe, name);
  const isTargetAnimatable = isAnimatable(targetKeyframe, name);
  warning(isOriginAnimatable === isTargetAnimatable, `You are trying to animate ${name} from "${originKeyframe}" to "${targetKeyframe}". "${isOriginAnimatable ? targetKeyframe : originKeyframe}" is not an animatable value.`, "value-not-animatable");
  if (!isOriginAnimatable || !isTargetAnimatable) {
    return false;
  }
  return hasKeyframesChanged(keyframes2) || (type === "spring" || isGenerator(type)) && velocity;
}

// node_modules/motion-dom/dist/es/animation/utils/make-animation-instant.mjs
function makeAnimationInstant(options) {
  options.duration = 0;
  options.type;
}

// node_modules/motion-dom/dist/es/animation/waapi/supports/waapi.mjs
var acceleratedValues = new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform"
]);
var supportsWaapi = /* @__PURE__ */ memo(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function supportsBrowserAnimation(options) {
  const { motionValue, name, repeatDelay, repeatType, damping, type } = options;
  const subject = motionValue?.owner?.current;
  if (!(subject instanceof HTMLElement)) {
    return false;
  }
  const { onUpdate, transformTemplate } = motionValue.owner.getProps();
  return supportsWaapi() && name && acceleratedValues.has(name) && (name !== "transform" || !transformTemplate) && !onUpdate && !repeatDelay && repeatType !== "mirror" && damping !== 0 && type !== "inertia";
}

// node_modules/motion-dom/dist/es/animation/AsyncMotionValueAnimation.mjs
var MAX_RESOLVE_DELAY = 40;

class AsyncMotionValueAnimation extends WithPromise {
  constructor({ autoplay = true, delay = 0, type = "keyframes", repeat = 0, repeatDelay = 0, repeatType = "loop", keyframes: keyframes2, name, motionValue, element, ...options }) {
    super();
    this.stop = () => {
      if (this._animation) {
        this._animation.stop();
        this.stopTimeline?.();
      }
      this.keyframeResolver?.cancel();
    };
    this.createdAt = time.now();
    const optionsWithDefaults = {
      autoplay,
      delay,
      type,
      repeat,
      repeatDelay,
      repeatType,
      name,
      motionValue,
      element,
      ...options
    };
    const KeyframeResolver$1 = element?.KeyframeResolver || KeyframeResolver;
    this.keyframeResolver = new KeyframeResolver$1(keyframes2, (resolvedKeyframes, finalKeyframe, forced) => this.onKeyframesResolved(resolvedKeyframes, finalKeyframe, optionsWithDefaults, !forced), name, motionValue, element);
    this.keyframeResolver?.scheduleResolve();
  }
  onKeyframesResolved(keyframes2, finalKeyframe, options, sync) {
    this.keyframeResolver = undefined;
    const { name, type, velocity, delay, isHandoff, onUpdate } = options;
    this.resolvedAt = time.now();
    if (!canAnimate(keyframes2, name, type, velocity)) {
      if (MotionGlobalConfig.instantAnimations || !delay) {
        onUpdate?.(getFinalKeyframe(keyframes2, options, finalKeyframe));
      }
      keyframes2[0] = keyframes2[keyframes2.length - 1];
      makeAnimationInstant(options);
      options.repeat = 0;
    }
    const startTime = sync ? !this.resolvedAt ? this.createdAt : this.resolvedAt - this.createdAt > MAX_RESOLVE_DELAY ? this.resolvedAt : this.createdAt : undefined;
    const resolvedOptions = {
      startTime,
      finalKeyframe,
      ...options,
      keyframes: keyframes2
    };
    const animation = !isHandoff && supportsBrowserAnimation(resolvedOptions) ? new NativeAnimationExtended({
      ...resolvedOptions,
      element: resolvedOptions.motionValue.owner.current
    }) : new JSAnimation(resolvedOptions);
    animation.finished.then(() => this.notifyFinished()).catch(noop);
    if (this.pendingTimeline) {
      this.stopTimeline = animation.attachTimeline(this.pendingTimeline);
      this.pendingTimeline = undefined;
    }
    this._animation = animation;
  }
  get finished() {
    if (!this._animation) {
      return this._finished;
    } else {
      return this.animation.finished;
    }
  }
  then(onResolve, _onReject) {
    return this.finished.finally(onResolve).then(() => {});
  }
  get animation() {
    if (!this._animation) {
      this.keyframeResolver?.resume();
      flushKeyframeResolvers();
    }
    return this._animation;
  }
  get duration() {
    return this.animation.duration;
  }
  get time() {
    return this.animation.time;
  }
  set time(newTime) {
    this.animation.time = newTime;
  }
  get speed() {
    return this.animation.speed;
  }
  get state() {
    return this.animation.state;
  }
  set speed(newSpeed) {
    this.animation.speed = newSpeed;
  }
  get startTime() {
    return this.animation.startTime;
  }
  attachTimeline(timeline) {
    if (this._animation) {
      this.stopTimeline = this.animation.attachTimeline(timeline);
    } else {
      this.pendingTimeline = timeline;
    }
    return () => this.stop();
  }
  play() {
    this.animation.play();
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.complete();
  }
  cancel() {
    if (this._animation) {
      this.animation.cancel();
    }
    this.keyframeResolver?.cancel();
  }
}
// node_modules/motion-dom/dist/es/animation/utils/css-variables-conversion.mjs
var splitCSSVariableRegex = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function parseCSSVariable(current) {
  const match = splitCSSVariableRegex.exec(current);
  if (!match)
    return [,];
  const [, token1, token2, fallback] = match;
  return [`--${token1 ?? token2}`, fallback];
}
var maxDepth = 4;
function getVariableValue(current, element, depth = 1) {
  invariant(depth <= maxDepth, `Max CSS variable fallback depth detected in property "${current}". This may indicate a circular fallback dependency.`, "max-css-var-depth");
  const [token, fallback] = parseCSSVariable(current);
  if (!token)
    return;
  const resolved = window.getComputedStyle(element).getPropertyValue(token);
  if (resolved) {
    const trimmed = resolved.trim();
    return isNumericalString(trimmed) ? parseFloat(trimmed) : trimmed;
  }
  return isCSSVariableToken(fallback) ? getVariableValue(fallback, element, depth + 1) : fallback;
}

// node_modules/motion-dom/dist/es/animation/utils/get-value-transition.mjs
function getValueTransition(transition, key) {
  return transition?.[key] ?? transition?.["default"] ?? transition;
}
// node_modules/motion-dom/dist/es/render/utils/keys-position.mjs
var positionalKeys = new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  ...transformPropOrder
]);

// node_modules/motion-dom/dist/es/value/types/auto.mjs
var auto = {
  test: (v) => v === "auto",
  parse: (v) => v
};

// node_modules/motion-dom/dist/es/value/types/test.mjs
var testValueType = (v) => (type) => type.test(v);

// node_modules/motion-dom/dist/es/value/types/dimensions.mjs
var dimensionValueTypes = [number, px, percent, degrees, vw, vh, auto];
var findDimensionValueType = (v) => dimensionValueTypes.find(testValueType(v));

// node_modules/motion-dom/dist/es/animation/keyframes/utils/is-none.mjs
function isNone(value) {
  if (typeof value === "number") {
    return value === 0;
  } else if (value !== null) {
    return value === "none" || value === "0" || isZeroValueString(value);
  } else {
    return true;
  }
}

// node_modules/motion-dom/dist/es/value/types/complex/filter.mjs
var maxDefaults = new Set(["brightness", "contrast", "saturate", "opacity"]);
function applyDefaultFilter(v) {
  const [name, value] = v.slice(0, -1).split("(");
  if (name === "drop-shadow")
    return v;
  const [number2] = value.match(floatRegex) || [];
  if (!number2)
    return v;
  const unit = value.replace(number2, "");
  let defaultValue = maxDefaults.has(name) ? 1 : 0;
  if (number2 !== value)
    defaultValue *= 100;
  return name + "(" + defaultValue + unit + ")";
}
var functionRegex = /\b([a-z-]*)\(.*?\)/gu;
var filter = {
  ...complex,
  getAnimatableNone: (v) => {
    const functions = v.match(functionRegex);
    return functions ? functions.map(applyDefaultFilter).join(" ") : v;
  }
};

// node_modules/motion-dom/dist/es/value/types/int.mjs
var int = {
  ...number,
  transform: Math.round
};

// node_modules/motion-dom/dist/es/value/types/maps/transform.mjs
var transformValueTypes = {
  rotate: degrees,
  rotateX: degrees,
  rotateY: degrees,
  rotateZ: degrees,
  scale,
  scaleX: scale,
  scaleY: scale,
  scaleZ: scale,
  skew: degrees,
  skewX: degrees,
  skewY: degrees,
  distance: px,
  translateX: px,
  translateY: px,
  translateZ: px,
  x: px,
  y: px,
  z: px,
  perspective: px,
  transformPerspective: px,
  opacity: alpha,
  originX: progressPercentage,
  originY: progressPercentage,
  originZ: px
};

// node_modules/motion-dom/dist/es/value/types/maps/number.mjs
var numberValueTypes = {
  borderWidth: px,
  borderTopWidth: px,
  borderRightWidth: px,
  borderBottomWidth: px,
  borderLeftWidth: px,
  borderRadius: px,
  radius: px,
  borderTopLeftRadius: px,
  borderTopRightRadius: px,
  borderBottomRightRadius: px,
  borderBottomLeftRadius: px,
  width: px,
  maxWidth: px,
  height: px,
  maxHeight: px,
  top: px,
  right: px,
  bottom: px,
  left: px,
  padding: px,
  paddingTop: px,
  paddingRight: px,
  paddingBottom: px,
  paddingLeft: px,
  margin: px,
  marginTop: px,
  marginRight: px,
  marginBottom: px,
  marginLeft: px,
  backgroundPositionX: px,
  backgroundPositionY: px,
  ...transformValueTypes,
  zIndex: int,
  fillOpacity: alpha,
  strokeOpacity: alpha,
  numOctaves: int
};

// node_modules/motion-dom/dist/es/value/types/maps/defaults.mjs
var defaultValueTypes = {
  ...numberValueTypes,
  color,
  backgroundColor: color,
  outlineColor: color,
  fill: color,
  stroke: color,
  borderColor: color,
  borderTopColor: color,
  borderRightColor: color,
  borderBottomColor: color,
  borderLeftColor: color,
  filter,
  WebkitFilter: filter
};
var getDefaultValueType = (key) => defaultValueTypes[key];

// node_modules/motion-dom/dist/es/value/types/utils/animatable-none.mjs
function getAnimatableNone2(key, value) {
  let defaultValueType = getDefaultValueType(key);
  if (defaultValueType !== filter)
    defaultValueType = complex;
  return defaultValueType.getAnimatableNone ? defaultValueType.getAnimatableNone(value) : undefined;
}

// node_modules/motion-dom/dist/es/animation/keyframes/utils/make-none-animatable.mjs
var invalidTemplates = new Set(["auto", "none", "0"]);
function makeNoneKeyframesAnimatable(unresolvedKeyframes, noneKeyframeIndexes, name) {
  let i = 0;
  let animatableTemplate = undefined;
  while (i < unresolvedKeyframes.length && !animatableTemplate) {
    const keyframe = unresolvedKeyframes[i];
    if (typeof keyframe === "string" && !invalidTemplates.has(keyframe) && analyseComplexValue(keyframe).values.length) {
      animatableTemplate = unresolvedKeyframes[i];
    }
    i++;
  }
  if (animatableTemplate && name) {
    for (const noneIndex of noneKeyframeIndexes) {
      unresolvedKeyframes[noneIndex] = getAnimatableNone2(name, animatableTemplate);
    }
  }
}

// node_modules/motion-dom/dist/es/animation/keyframes/DOMKeyframesResolver.mjs
class DOMKeyframesResolver extends KeyframeResolver {
  constructor(unresolvedKeyframes, onComplete, name, motionValue, element) {
    super(unresolvedKeyframes, onComplete, name, motionValue, element, true);
  }
  readKeyframes() {
    const { unresolvedKeyframes, element, name } = this;
    if (!element || !element.current)
      return;
    super.readKeyframes();
    for (let i = 0;i < unresolvedKeyframes.length; i++) {
      let keyframe = unresolvedKeyframes[i];
      if (typeof keyframe === "string") {
        keyframe = keyframe.trim();
        if (isCSSVariableToken(keyframe)) {
          const resolved = getVariableValue(keyframe, element.current);
          if (resolved !== undefined) {
            unresolvedKeyframes[i] = resolved;
          }
          if (i === unresolvedKeyframes.length - 1) {
            this.finalKeyframe = keyframe;
          }
        }
      }
    }
    this.resolveNoneKeyframes();
    if (!positionalKeys.has(name) || unresolvedKeyframes.length !== 2) {
      return;
    }
    const [origin, target] = unresolvedKeyframes;
    const originType = findDimensionValueType(origin);
    const targetType = findDimensionValueType(target);
    if (originType === targetType)
      return;
    if (isNumOrPxType(originType) && isNumOrPxType(targetType)) {
      for (let i = 0;i < unresolvedKeyframes.length; i++) {
        const value = unresolvedKeyframes[i];
        if (typeof value === "string") {
          unresolvedKeyframes[i] = parseFloat(value);
        }
      }
    } else if (positionalValues[name]) {
      this.needsMeasurement = true;
    }
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes, name } = this;
    const noneKeyframeIndexes = [];
    for (let i = 0;i < unresolvedKeyframes.length; i++) {
      if (unresolvedKeyframes[i] === null || isNone(unresolvedKeyframes[i])) {
        noneKeyframeIndexes.push(i);
      }
    }
    if (noneKeyframeIndexes.length) {
      makeNoneKeyframesAnimatable(unresolvedKeyframes, noneKeyframeIndexes, name);
    }
  }
  measureInitialState() {
    const { element, unresolvedKeyframes, name } = this;
    if (!element || !element.current)
      return;
    if (name === "height") {
      this.suspendedScrollY = window.pageYOffset;
    }
    this.measuredOrigin = positionalValues[name](element.measureViewportBox(), window.getComputedStyle(element.current));
    unresolvedKeyframes[0] = this.measuredOrigin;
    const measureKeyframe = unresolvedKeyframes[unresolvedKeyframes.length - 1];
    if (measureKeyframe !== undefined) {
      element.getValue(name, measureKeyframe).jump(measureKeyframe, false);
    }
  }
  measureEndState() {
    const { element, name, unresolvedKeyframes } = this;
    if (!element || !element.current)
      return;
    const value = element.getValue(name);
    value && value.jump(this.measuredOrigin, false);
    const finalKeyframeIndex = unresolvedKeyframes.length - 1;
    const finalKeyframe = unresolvedKeyframes[finalKeyframeIndex];
    unresolvedKeyframes[finalKeyframeIndex] = positionalValues[name](element.measureViewportBox(), window.getComputedStyle(element.current));
    if (finalKeyframe !== null && this.finalKeyframe === undefined) {
      this.finalKeyframe = finalKeyframe;
    }
    if (this.removedTransforms?.length) {
      this.removedTransforms.forEach(([unsetTransformName, unsetTransformValue]) => {
        element.getValue(unsetTransformName).set(unsetTransformValue);
      });
    }
    this.resolveNoneKeyframes();
  }
}
// node_modules/motion-dom/dist/es/utils/resolve-elements.mjs
function resolveElements(elementOrSelector, scope, selectorCache) {
  if (elementOrSelector instanceof EventTarget) {
    return [elementOrSelector];
  } else if (typeof elementOrSelector === "string") {
    let root = document;
    if (scope) {
      root = scope.current;
    }
    const elements = selectorCache?.[elementOrSelector] ?? root.querySelectorAll(elementOrSelector);
    return elements ? Array.from(elements) : [];
  }
  return Array.from(elementOrSelector);
}

// node_modules/motion-dom/dist/es/value/types/utils/get-as-type.mjs
var getValueAsType = (value, type) => {
  return type && typeof value === "number" ? type.transform(value) : value;
};

// node_modules/motion-dom/dist/es/utils/is-html-element.mjs
function isHTMLElement(element) {
  return isObject(element) && "offsetHeight" in element;
}

// node_modules/motion-dom/dist/es/value/index.mjs
var MAX_VELOCITY_DELTA = 30;
var isFloat = (value) => {
  return !isNaN(parseFloat(value));
};
var collectMotionValues = {
  current: undefined
};

class MotionValue {
  constructor(init, options = {}) {
    this.canTrackVelocity = null;
    this.events = {};
    this.updateAndNotify = (v) => {
      const currentTime = time.now();
      if (this.updatedAt !== currentTime) {
        this.setPrevFrameValue();
      }
      this.prev = this.current;
      this.setCurrent(v);
      if (this.current !== this.prev) {
        this.events.change?.notify(this.current);
        if (this.dependents) {
          for (const dependent of this.dependents) {
            dependent.dirty();
          }
        }
      }
    };
    this.hasAnimated = false;
    this.setCurrent(init);
    this.owner = options.owner;
  }
  setCurrent(current) {
    this.current = current;
    this.updatedAt = time.now();
    if (this.canTrackVelocity === null && current !== undefined) {
      this.canTrackVelocity = isFloat(this.current);
    }
  }
  setPrevFrameValue(prevFrameValue = this.current) {
    this.prevFrameValue = prevFrameValue;
    this.prevUpdatedAt = this.updatedAt;
  }
  onChange(subscription) {
    if (true) {
      warnOnce(false, `value.onChange(callback) is deprecated. Switch to value.on("change", callback).`);
    }
    return this.on("change", subscription);
  }
  on(eventName, callback) {
    if (!this.events[eventName]) {
      this.events[eventName] = new SubscriptionManager;
    }
    const unsubscribe = this.events[eventName].add(callback);
    if (eventName === "change") {
      return () => {
        unsubscribe();
        frame.read(() => {
          if (!this.events.change.getSize()) {
            this.stop();
          }
        });
      };
    }
    return unsubscribe;
  }
  clearListeners() {
    for (const eventManagers in this.events) {
      this.events[eventManagers].clear();
    }
  }
  attach(passiveEffect, stopPassiveEffect) {
    this.passiveEffect = passiveEffect;
    this.stopPassiveEffect = stopPassiveEffect;
  }
  set(v) {
    if (!this.passiveEffect) {
      this.updateAndNotify(v);
    } else {
      this.passiveEffect(v, this.updateAndNotify);
    }
  }
  setWithVelocity(prev, current, delta) {
    this.set(current);
    this.prev = undefined;
    this.prevFrameValue = prev;
    this.prevUpdatedAt = this.updatedAt - delta;
  }
  jump(v, endAnimation = true) {
    this.updateAndNotify(v);
    this.prev = v;
    this.prevUpdatedAt = this.prevFrameValue = undefined;
    endAnimation && this.stop();
    if (this.stopPassiveEffect)
      this.stopPassiveEffect();
  }
  dirty() {
    this.events.change?.notify(this.current);
  }
  addDependent(dependent) {
    if (!this.dependents) {
      this.dependents = new Set;
    }
    this.dependents.add(dependent);
  }
  removeDependent(dependent) {
    if (this.dependents) {
      this.dependents.delete(dependent);
    }
  }
  get() {
    if (collectMotionValues.current) {
      collectMotionValues.current.push(this);
    }
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const currentTime = time.now();
    if (!this.canTrackVelocity || this.prevFrameValue === undefined || currentTime - this.updatedAt > MAX_VELOCITY_DELTA) {
      return 0;
    }
    const delta = Math.min(this.updatedAt - this.prevUpdatedAt, MAX_VELOCITY_DELTA);
    return velocityPerSecond(parseFloat(this.current) - parseFloat(this.prevFrameValue), delta);
  }
  start(startAnimation) {
    this.stop();
    return new Promise((resolve) => {
      this.hasAnimated = true;
      this.animation = startAnimation(resolve);
      if (this.events.animationStart) {
        this.events.animationStart.notify();
      }
    }).then(() => {
      if (this.events.animationComplete) {
        this.events.animationComplete.notify();
      }
      this.clearAnimation();
    });
  }
  stop() {
    if (this.animation) {
      this.animation.stop();
      if (this.events.animationCancel) {
        this.events.animationCancel.notify();
      }
    }
    this.clearAnimation();
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    this.dependents?.clear();
    this.events.destroy?.notify();
    this.clearListeners();
    this.stop();
    if (this.stopPassiveEffect) {
      this.stopPassiveEffect();
    }
  }
}
function motionValue(init, options) {
  return new MotionValue(init, options);
}

// node_modules/motion-dom/dist/es/frameloop/microtask.mjs
var { schedule: microtask, cancel: cancelMicrotask } = /* @__PURE__ */ createRenderBatcher(queueMicrotask, false);
// node_modules/motion-dom/dist/es/gestures/drag/state/is-active.mjs
var isDragging = {
  x: false,
  y: false
};
function isDragActive() {
  return isDragging.x || isDragging.y;
}

// node_modules/motion-dom/dist/es/gestures/drag/state/set-active.mjs
function setDragLock(axis) {
  if (axis === "x" || axis === "y") {
    if (isDragging[axis]) {
      return null;
    } else {
      isDragging[axis] = true;
      return () => {
        isDragging[axis] = false;
      };
    }
  } else {
    if (isDragging.x || isDragging.y) {
      return null;
    } else {
      isDragging.x = isDragging.y = true;
      return () => {
        isDragging.x = isDragging.y = false;
      };
    }
  }
}
// node_modules/motion-dom/dist/es/gestures/utils/setup.mjs
function setupGesture(elementOrSelector, options) {
  const elements = resolveElements(elementOrSelector);
  const gestureAbortController = new AbortController;
  const eventOptions = {
    passive: true,
    ...options,
    signal: gestureAbortController.signal
  };
  const cancel = () => gestureAbortController.abort();
  return [elements, eventOptions, cancel];
}

// node_modules/motion-dom/dist/es/gestures/hover.mjs
function isValidHover(event) {
  return !(event.pointerType === "touch" || isDragActive());
}
function hover(elementOrSelector, onHoverStart, options = {}) {
  const [elements, eventOptions, cancel] = setupGesture(elementOrSelector, options);
  const onPointerEnter = (enterEvent) => {
    if (!isValidHover(enterEvent))
      return;
    const { target } = enterEvent;
    const onHoverEnd = onHoverStart(target, enterEvent);
    if (typeof onHoverEnd !== "function" || !target)
      return;
    const onPointerLeave = (leaveEvent) => {
      if (!isValidHover(leaveEvent))
        return;
      onHoverEnd(leaveEvent);
      target.removeEventListener("pointerleave", onPointerLeave);
    };
    target.addEventListener("pointerleave", onPointerLeave, eventOptions);
  };
  elements.forEach((element) => {
    element.addEventListener("pointerenter", onPointerEnter, eventOptions);
  });
  return cancel;
}
// node_modules/motion-dom/dist/es/gestures/utils/is-node-or-child.mjs
var isNodeOrChild = (parent, child) => {
  if (!child) {
    return false;
  } else if (parent === child) {
    return true;
  } else {
    return isNodeOrChild(parent, child.parentElement);
  }
};

// node_modules/motion-dom/dist/es/gestures/utils/is-primary-pointer.mjs
var isPrimaryPointer = (event) => {
  if (event.pointerType === "mouse") {
    return typeof event.button !== "number" || event.button <= 0;
  } else {
    return event.isPrimary !== false;
  }
};

// node_modules/motion-dom/dist/es/gestures/press/utils/is-keyboard-accessible.mjs
var focusableElements = new Set([
  "BUTTON",
  "INPUT",
  "SELECT",
  "TEXTAREA",
  "A"
]);
function isElementKeyboardAccessible(element) {
  return focusableElements.has(element.tagName) || element.tabIndex !== -1;
}

// node_modules/motion-dom/dist/es/gestures/press/utils/state.mjs
var isPressing = new WeakSet;

// node_modules/motion-dom/dist/es/gestures/press/utils/keyboard.mjs
function filterEvents(callback) {
  return (event) => {
    if (event.key !== "Enter")
      return;
    callback(event);
  };
}
function firePointerEvent(target, type) {
  target.dispatchEvent(new PointerEvent("pointer" + type, { isPrimary: true, bubbles: true }));
}
var enableKeyboardPress = (focusEvent, eventOptions) => {
  const element = focusEvent.currentTarget;
  if (!element)
    return;
  const handleKeydown = filterEvents(() => {
    if (isPressing.has(element))
      return;
    firePointerEvent(element, "down");
    const handleKeyup = filterEvents(() => {
      firePointerEvent(element, "up");
    });
    const handleBlur = () => firePointerEvent(element, "cancel");
    element.addEventListener("keyup", handleKeyup, eventOptions);
    element.addEventListener("blur", handleBlur, eventOptions);
  });
  element.addEventListener("keydown", handleKeydown, eventOptions);
  element.addEventListener("blur", () => element.removeEventListener("keydown", handleKeydown), eventOptions);
};

// node_modules/motion-dom/dist/es/gestures/press/index.mjs
function isValidPressEvent(event) {
  return isPrimaryPointer(event) && !isDragActive();
}
function press(targetOrSelector, onPressStart, options = {}) {
  const [targets, eventOptions, cancelEvents] = setupGesture(targetOrSelector, options);
  const startPress = (startEvent) => {
    const target = startEvent.currentTarget;
    if (!isValidPressEvent(startEvent))
      return;
    isPressing.add(target);
    const onPressEnd = onPressStart(target, startEvent);
    const onPointerEnd = (endEvent, success) => {
      window.removeEventListener("pointerup", onPointerUp);
      window.removeEventListener("pointercancel", onPointerCancel);
      if (isPressing.has(target)) {
        isPressing.delete(target);
      }
      if (!isValidPressEvent(endEvent)) {
        return;
      }
      if (typeof onPressEnd === "function") {
        onPressEnd(endEvent, { success });
      }
    };
    const onPointerUp = (upEvent) => {
      onPointerEnd(upEvent, target === window || target === document || options.useGlobalTarget || isNodeOrChild(target, upEvent.target));
    };
    const onPointerCancel = (cancelEvent) => {
      onPointerEnd(cancelEvent, false);
    };
    window.addEventListener("pointerup", onPointerUp, eventOptions);
    window.addEventListener("pointercancel", onPointerCancel, eventOptions);
  };
  targets.forEach((target) => {
    const pointerDownTarget = options.useGlobalTarget ? window : target;
    pointerDownTarget.addEventListener("pointerdown", startPress, eventOptions);
    if (isHTMLElement(target)) {
      target.addEventListener("focus", (event) => enableKeyboardPress(event, eventOptions));
      if (!isElementKeyboardAccessible(target) && !target.hasAttribute("tabindex")) {
        target.tabIndex = 0;
      }
    }
  });
  return cancelEvents;
}
// node_modules/motion-dom/dist/es/utils/is-svg-element.mjs
function isSVGElement(element) {
  return isObject(element) && "ownerSVGElement" in element;
}
// node_modules/motion-dom/dist/es/utils/is-svg-svg-element.mjs
function isSVGSVGElement(element) {
  return isSVGElement(element) && element.tagName === "svg";
}
// node_modules/motion-dom/dist/es/value/utils/is-motion-value.mjs
var isMotionValue = (value) => Boolean(value && value.getVelocity);
// node_modules/motion-dom/dist/es/value/types/utils/find.mjs
var valueTypes = [...dimensionValueTypes, color, complex];
var findValueType = (v) => valueTypes.find(testValueType(v));
// node_modules/framer-motion/dist/es/context/MotionConfigContext.mjs
var import_react6 = __toESM(require_react(), 1);
"use client";
var MotionConfigContext = import_react6.createContext({
  transformPagePoint: (p) => p,
  isStatic: false,
  reducedMotion: "never"
});

// node_modules/framer-motion/dist/es/components/AnimatePresence/use-presence.mjs
var import_react7 = __toESM(require_react(), 1);
function usePresence(subscribe = true) {
  const context = import_react7.useContext(PresenceContext);
  if (context === null)
    return [true, null];
  const { isPresent, onExitComplete, register } = context;
  const id = import_react7.useId();
  import_react7.useEffect(() => {
    if (subscribe) {
      return register(id);
    }
  }, [subscribe]);
  const safeToRemove = import_react7.useCallback(() => subscribe && onExitComplete && onExitComplete(id), [id, onExitComplete, subscribe]);
  return !isPresent && onExitComplete ? [false, safeToRemove] : [true];
}

// node_modules/framer-motion/dist/es/context/LazyContext.mjs
var import_react8 = __toESM(require_react(), 1);
"use client";
var LazyContext = import_react8.createContext({ strict: false });

// node_modules/framer-motion/dist/es/motion/features/definitions.mjs
var featureProps = {
  animation: [
    "animate",
    "variants",
    "whileHover",
    "whileTap",
    "exit",
    "whileInView",
    "whileFocus",
    "whileDrag"
  ],
  exit: ["exit"],
  drag: ["drag", "dragControls"],
  focus: ["whileFocus"],
  hover: ["whileHover", "onHoverStart", "onHoverEnd"],
  tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
  pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
  inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
  layout: ["layout", "layoutId"]
};
var featureDefinitions = {};
for (const key in featureProps) {
  featureDefinitions[key] = {
    isEnabled: (props) => featureProps[key].some((name) => !!props[name])
  };
}

// node_modules/framer-motion/dist/es/motion/features/load-features.mjs
function loadFeatures(features) {
  for (const key in features) {
    featureDefinitions[key] = {
      ...featureDefinitions[key],
      ...features[key]
    };
  }
}

// node_modules/framer-motion/dist/es/motion/utils/valid-prop.mjs
var validMotionProps = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport"
]);
function isValidMotionProp(key) {
  return key.startsWith("while") || key.startsWith("drag") && key !== "draggable" || key.startsWith("layout") || key.startsWith("onTap") || key.startsWith("onPan") || key.startsWith("onLayout") || validMotionProps.has(key);
}

// node_modules/framer-motion/dist/es/render/dom/utils/filter-props.mjs
var shouldForward = (key) => !isValidMotionProp(key);
function loadExternalIsValidProp(isValidProp) {
  if (typeof isValidProp !== "function")
    return;
  shouldForward = (key) => key.startsWith("on") ? !isValidMotionProp(key) : isValidProp(key);
}
try {
  loadExternalIsValidProp((()=>{throw new Error("Cannot require module "+"@emotion/is-prop-valid");})().default);
} catch {}
function filterProps(props, isDom, forwardMotionProps) {
  const filteredProps = {};
  for (const key in props) {
    if (key === "values" && typeof props.values === "object")
      continue;
    if (shouldForward(key) || forwardMotionProps === true && isValidMotionProp(key) || !isDom && !isValidMotionProp(key) || props["draggable"] && key.startsWith("onDrag")) {
      filteredProps[key] = props[key];
    }
  }
  return filteredProps;
}

// node_modules/framer-motion/dist/es/motion/index.mjs
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var import_react18 = __toESM(require_react(), 1);

// node_modules/framer-motion/dist/es/context/MotionContext/index.mjs
var import_react9 = __toESM(require_react(), 1);
"use client";
var MotionContext = /* @__PURE__ */ import_react9.createContext({});

// node_modules/framer-motion/dist/es/context/MotionContext/create.mjs
var import_react10 = __toESM(require_react(), 1);

// node_modules/framer-motion/dist/es/animation/utils/is-animation-controls.mjs
function isAnimationControls(v) {
  return v !== null && typeof v === "object" && typeof v.start === "function";
}

// node_modules/framer-motion/dist/es/render/utils/is-variant-label.mjs
function isVariantLabel(v) {
  return typeof v === "string" || Array.isArray(v);
}

// node_modules/framer-motion/dist/es/render/utils/variant-props.mjs
var variantPriorityOrder = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
];
var variantProps = ["initial", ...variantPriorityOrder];

// node_modules/framer-motion/dist/es/render/utils/is-controlling-variants.mjs
function isControllingVariants(props) {
  return isAnimationControls(props.animate) || variantProps.some((name) => isVariantLabel(props[name]));
}
function isVariantNode(props) {
  return Boolean(isControllingVariants(props) || props.variants);
}

// node_modules/framer-motion/dist/es/context/MotionContext/utils.mjs
function getCurrentTreeVariants(props, context) {
  if (isControllingVariants(props)) {
    const { initial, animate } = props;
    return {
      initial: initial === false || isVariantLabel(initial) ? initial : undefined,
      animate: isVariantLabel(animate) ? animate : undefined
    };
  }
  return props.inherit !== false ? context : {};
}

// node_modules/framer-motion/dist/es/context/MotionContext/create.mjs
function useCreateMotionContext(props) {
  const { initial, animate } = getCurrentTreeVariants(props, import_react10.useContext(MotionContext));
  return import_react10.useMemo(() => ({ initial, animate }), [variantLabelsAsDependency(initial), variantLabelsAsDependency(animate)]);
}
function variantLabelsAsDependency(prop) {
  return Array.isArray(prop) ? prop.join(" ") : prop;
}

// node_modules/framer-motion/dist/es/render/dom/use-render.mjs
var import_react13 = __toESM(require_react(), 1);

// node_modules/framer-motion/dist/es/render/html/use-props.mjs
var import_react11 = __toESM(require_react(), 1);

// node_modules/framer-motion/dist/es/projection/styles/scale-correction.mjs
var scaleCorrectors = {};
function addScaleCorrector(correctors) {
  for (const key in correctors) {
    scaleCorrectors[key] = correctors[key];
    if (isCSSVariableName(key)) {
      scaleCorrectors[key].isCSSVariable = true;
    }
  }
}

// node_modules/framer-motion/dist/es/motion/utils/is-forced-motion-value.mjs
function isForcedMotionValue(key, { layout, layoutId }) {
  return transformProps.has(key) || key.startsWith("origin") || (layout || layoutId !== undefined) && (!!scaleCorrectors[key] || key === "opacity");
}

// node_modules/framer-motion/dist/es/render/html/utils/build-transform.mjs
var translateAlias = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
};
var numTransforms = transformPropOrder.length;
function buildTransform(latestValues, transform, transformTemplate) {
  let transformString = "";
  let transformIsDefault = true;
  for (let i = 0;i < numTransforms; i++) {
    const key = transformPropOrder[i];
    const value = latestValues[key];
    if (value === undefined)
      continue;
    let valueIsDefault = true;
    if (typeof value === "number") {
      valueIsDefault = value === (key.startsWith("scale") ? 1 : 0);
    } else {
      valueIsDefault = parseFloat(value) === 0;
    }
    if (!valueIsDefault || transformTemplate) {
      const valueAsType = getValueAsType(value, numberValueTypes[key]);
      if (!valueIsDefault) {
        transformIsDefault = false;
        const transformName = translateAlias[key] || key;
        transformString += `${transformName}(${valueAsType}) `;
      }
      if (transformTemplate) {
        transform[key] = valueAsType;
      }
    }
  }
  transformString = transformString.trim();
  if (transformTemplate) {
    transformString = transformTemplate(transform, transformIsDefault ? "" : transformString);
  } else if (transformIsDefault) {
    transformString = "none";
  }
  return transformString;
}

// node_modules/framer-motion/dist/es/render/html/utils/build-styles.mjs
function buildHTMLStyles(state, latestValues, transformTemplate) {
  const { style, vars, transformOrigin } = state;
  let hasTransform = false;
  let hasTransformOrigin = false;
  for (const key in latestValues) {
    const value = latestValues[key];
    if (transformProps.has(key)) {
      hasTransform = true;
      continue;
    } else if (isCSSVariableName(key)) {
      vars[key] = value;
      continue;
    } else {
      const valueAsType = getValueAsType(value, numberValueTypes[key]);
      if (key.startsWith("origin")) {
        hasTransformOrigin = true;
        transformOrigin[key] = valueAsType;
      } else {
        style[key] = valueAsType;
      }
    }
  }
  if (!latestValues.transform) {
    if (hasTransform || transformTemplate) {
      style.transform = buildTransform(latestValues, state.transform, transformTemplate);
    } else if (style.transform) {
      style.transform = "none";
    }
  }
  if (hasTransformOrigin) {
    const { originX = "50%", originY = "50%", originZ = 0 } = transformOrigin;
    style.transformOrigin = `${originX} ${originY} ${originZ}`;
  }
}

// node_modules/framer-motion/dist/es/render/html/utils/create-render-state.mjs
var createHtmlRenderState = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
});

// node_modules/framer-motion/dist/es/render/html/use-props.mjs
function copyRawValuesOnly(target, source, props) {
  for (const key in source) {
    if (!isMotionValue(source[key]) && !isForcedMotionValue(key, props)) {
      target[key] = source[key];
    }
  }
}
function useInitialMotionValues({ transformTemplate }, visualState) {
  return import_react11.useMemo(() => {
    const state = createHtmlRenderState();
    buildHTMLStyles(state, visualState, transformTemplate);
    return Object.assign({}, state.vars, state.style);
  }, [visualState]);
}
function useStyle(props, visualState) {
  const styleProp = props.style || {};
  const style = {};
  copyRawValuesOnly(style, styleProp, props);
  Object.assign(style, useInitialMotionValues(props, visualState));
  return style;
}
function useHTMLProps(props, visualState) {
  const htmlProps = {};
  const style = useStyle(props, visualState);
  if (props.drag && props.dragListener !== false) {
    htmlProps.draggable = false;
    style.userSelect = style.WebkitUserSelect = style.WebkitTouchCallout = "none";
    style.touchAction = props.drag === true ? "none" : `pan-${props.drag === "x" ? "y" : "x"}`;
  }
  if (props.tabIndex === undefined && (props.onTap || props.onTapStart || props.whileTap)) {
    htmlProps.tabIndex = 0;
  }
  htmlProps.style = style;
  return htmlProps;
}

// node_modules/framer-motion/dist/es/render/svg/use-props.mjs
var import_react12 = __toESM(require_react(), 1);

// node_modules/framer-motion/dist/es/render/svg/utils/path.mjs
var dashKeys = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
};
var camelKeys = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function buildSVGPath(attrs, length, spacing = 1, offset = 0, useDashCase = true) {
  attrs.pathLength = 1;
  const keys = useDashCase ? dashKeys : camelKeys;
  attrs[keys.offset] = px.transform(-offset);
  const pathLength = px.transform(length);
  const pathSpacing = px.transform(spacing);
  attrs[keys.array] = `${pathLength} ${pathSpacing}`;
}

// node_modules/framer-motion/dist/es/render/svg/utils/build-attrs.mjs
function buildSVGAttrs(state, {
  attrX,
  attrY,
  attrScale,
  pathLength,
  pathSpacing = 1,
  pathOffset = 0,
  ...latest
}, isSVGTag, transformTemplate, styleProp) {
  buildHTMLStyles(state, latest, transformTemplate);
  if (isSVGTag) {
    if (state.style.viewBox) {
      state.attrs.viewBox = state.style.viewBox;
    }
    return;
  }
  state.attrs = state.style;
  state.style = {};
  const { attrs, style } = state;
  if (attrs.transform) {
    style.transform = attrs.transform;
    delete attrs.transform;
  }
  if (style.transform || attrs.transformOrigin) {
    style.transformOrigin = attrs.transformOrigin ?? "50% 50%";
    delete attrs.transformOrigin;
  }
  if (style.transform) {
    style.transformBox = styleProp?.transformBox ?? "fill-box";
    delete attrs.transformBox;
  }
  if (attrX !== undefined)
    attrs.x = attrX;
  if (attrY !== undefined)
    attrs.y = attrY;
  if (attrScale !== undefined)
    attrs.scale = attrScale;
  if (pathLength !== undefined) {
    buildSVGPath(attrs, pathLength, pathSpacing, pathOffset, false);
  }
}

// node_modules/framer-motion/dist/es/render/svg/utils/create-render-state.mjs
var createSvgRenderState = () => ({
  ...createHtmlRenderState(),
  attrs: {}
});

// node_modules/framer-motion/dist/es/render/svg/utils/is-svg-tag.mjs
var isSVGTag = (tag) => typeof tag === "string" && tag.toLowerCase() === "svg";

// node_modules/framer-motion/dist/es/render/svg/use-props.mjs
function useSVGProps(props, visualState, _isStatic, Component) {
  const visualProps = import_react12.useMemo(() => {
    const state = createSvgRenderState();
    buildSVGAttrs(state, visualState, isSVGTag(Component), props.transformTemplate, props.style);
    return {
      ...state.attrs,
      style: { ...state.style }
    };
  }, [visualState]);
  if (props.style) {
    const rawStyles = {};
    copyRawValuesOnly(rawStyles, props.style, props);
    visualProps.style = { ...rawStyles, ...visualProps.style };
  }
  return visualProps;
}

// node_modules/framer-motion/dist/es/render/svg/lowercase-elements.mjs
var lowercaseSVGElements = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view"
];

// node_modules/framer-motion/dist/es/render/dom/utils/is-svg-component.mjs
function isSVGComponent(Component) {
  if (typeof Component !== "string" || Component.includes("-")) {
    return false;
  } else if (lowercaseSVGElements.indexOf(Component) > -1 || /[A-Z]/u.test(Component)) {
    return true;
  }
  return false;
}

// node_modules/framer-motion/dist/es/render/dom/use-render.mjs
function useRender(Component, props, ref, { latestValues }, isStatic, forwardMotionProps = false) {
  const useVisualProps = isSVGComponent(Component) ? useSVGProps : useHTMLProps;
  const visualProps = useVisualProps(props, latestValues, isStatic, Component);
  const filteredProps = filterProps(props, typeof Component === "string", forwardMotionProps);
  const elementProps = Component !== import_react13.Fragment ? { ...filteredProps, ...visualProps, ref } : {};
  const { children } = props;
  const renderedChildren = import_react13.useMemo(() => isMotionValue(children) ? children.get() : children, [children]);
  return import_react13.createElement(Component, {
    ...elementProps,
    children: renderedChildren
  });
}

// node_modules/framer-motion/dist/es/motion/utils/use-visual-state.mjs
var import_react14 = __toESM(require_react(), 1);

// node_modules/framer-motion/dist/es/render/utils/resolve-variants.mjs
function getValueState(visualElement) {
  const state = [{}, {}];
  visualElement?.values.forEach((value, key) => {
    state[0][key] = value.get();
    state[1][key] = value.getVelocity();
  });
  return state;
}
function resolveVariantFromProps(props, definition, custom, visualElement) {
  if (typeof definition === "function") {
    const [current, velocity] = getValueState(visualElement);
    definition = definition(custom !== undefined ? custom : props.custom, current, velocity);
  }
  if (typeof definition === "string") {
    definition = props.variants && props.variants[definition];
  }
  if (typeof definition === "function") {
    const [current, velocity] = getValueState(visualElement);
    definition = definition(custom !== undefined ? custom : props.custom, current, velocity);
  }
  return definition;
}

// node_modules/framer-motion/dist/es/value/utils/resolve-motion-value.mjs
function resolveMotionValue(value) {
  return isMotionValue(value) ? value.get() : value;
}

// node_modules/framer-motion/dist/es/motion/utils/use-visual-state.mjs
function makeState({ scrapeMotionValuesFromProps, createRenderState }, props, context, presenceContext) {
  const state = {
    latestValues: makeLatestValues(props, context, presenceContext, scrapeMotionValuesFromProps),
    renderState: createRenderState()
  };
  return state;
}
function makeLatestValues(props, context, presenceContext, scrapeMotionValues) {
  const values = {};
  const motionValues = scrapeMotionValues(props, {});
  for (const key in motionValues) {
    values[key] = resolveMotionValue(motionValues[key]);
  }
  let { initial, animate } = props;
  const isControllingVariants$1 = isControllingVariants(props);
  const isVariantNode$1 = isVariantNode(props);
  if (context && isVariantNode$1 && !isControllingVariants$1 && props.inherit !== false) {
    if (initial === undefined)
      initial = context.initial;
    if (animate === undefined)
      animate = context.animate;
  }
  let isInitialAnimationBlocked = presenceContext ? presenceContext.initial === false : false;
  isInitialAnimationBlocked = isInitialAnimationBlocked || initial === false;
  const variantToSet = isInitialAnimationBlocked ? animate : initial;
  if (variantToSet && typeof variantToSet !== "boolean" && !isAnimationControls(variantToSet)) {
    const list = Array.isArray(variantToSet) ? variantToSet : [variantToSet];
    for (let i = 0;i < list.length; i++) {
      const resolved = resolveVariantFromProps(props, list[i]);
      if (resolved) {
        const { transitionEnd, transition, ...target } = resolved;
        for (const key in target) {
          let valueTarget = target[key];
          if (Array.isArray(valueTarget)) {
            const index = isInitialAnimationBlocked ? valueTarget.length - 1 : 0;
            valueTarget = valueTarget[index];
          }
          if (valueTarget !== null) {
            values[key] = valueTarget;
          }
        }
        for (const key in transitionEnd) {
          values[key] = transitionEnd[key];
        }
      }
    }
  }
  return values;
}
var makeUseVisualState = (config) => (props, isStatic) => {
  const context = import_react14.useContext(MotionContext);
  const presenceContext = import_react14.useContext(PresenceContext);
  const make = () => makeState(config, props, context, presenceContext);
  return isStatic ? make() : useConstant(make);
};

// node_modules/framer-motion/dist/es/render/html/utils/scrape-motion-values.mjs
function scrapeMotionValuesFromProps(props, prevProps, visualElement) {
  const { style } = props;
  const newValues = {};
  for (const key in style) {
    if (isMotionValue(style[key]) || prevProps.style && isMotionValue(prevProps.style[key]) || isForcedMotionValue(key, props) || visualElement?.getValue(key)?.liveStyle !== undefined) {
      newValues[key] = style[key];
    }
  }
  return newValues;
}

// node_modules/framer-motion/dist/es/render/html/use-html-visual-state.mjs
var useHTMLVisualState = /* @__PURE__ */ makeUseVisualState({
  scrapeMotionValuesFromProps,
  createRenderState: createHtmlRenderState
});

// node_modules/framer-motion/dist/es/render/svg/utils/scrape-motion-values.mjs
function scrapeMotionValuesFromProps2(props, prevProps, visualElement) {
  const newValues = scrapeMotionValuesFromProps(props, prevProps, visualElement);
  for (const key in props) {
    if (isMotionValue(props[key]) || isMotionValue(prevProps[key])) {
      const targetKey = transformPropOrder.indexOf(key) !== -1 ? "attr" + key.charAt(0).toUpperCase() + key.substring(1) : key;
      newValues[targetKey] = props[key];
    }
  }
  return newValues;
}

// node_modules/framer-motion/dist/es/render/svg/use-svg-visual-state.mjs
var useSVGVisualState = /* @__PURE__ */ makeUseVisualState({
  scrapeMotionValuesFromProps: scrapeMotionValuesFromProps2,
  createRenderState: createSvgRenderState
});

// node_modules/framer-motion/dist/es/motion/utils/symbol.mjs
var motionComponentSymbol = Symbol.for("motionComponentSymbol");

// node_modules/framer-motion/dist/es/motion/utils/use-motion-ref.mjs
var import_react15 = __toESM(require_react(), 1);

// node_modules/framer-motion/dist/es/utils/is-ref-object.mjs
function isRefObject(ref) {
  return ref && typeof ref === "object" && Object.prototype.hasOwnProperty.call(ref, "current");
}

// node_modules/framer-motion/dist/es/motion/utils/use-motion-ref.mjs
function useMotionRef(visualState, visualElement, externalRef) {
  return import_react15.useCallback((instance) => {
    if (instance) {
      visualState.onMount && visualState.onMount(instance);
    }
    if (visualElement) {
      if (instance) {
        visualElement.mount(instance);
      } else {
        visualElement.unmount();
      }
    }
    if (externalRef) {
      if (typeof externalRef === "function") {
        externalRef(instance);
      } else if (isRefObject(externalRef)) {
        externalRef.current = instance;
      }
    }
  }, [visualElement]);
}

// node_modules/framer-motion/dist/es/motion/utils/use-visual-element.mjs
var import_react17 = __toESM(require_react(), 1);

// node_modules/framer-motion/dist/es/render/dom/utils/camel-to-dash.mjs
var camelToDash = (str) => str.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase();

// node_modules/framer-motion/dist/es/animation/optimized-appear/data-id.mjs
var optimizedAppearDataId = "framerAppearId";
var optimizedAppearDataAttribute = "data-" + camelToDash(optimizedAppearDataId);

// node_modules/framer-motion/dist/es/context/SwitchLayoutGroupContext.mjs
var import_react16 = __toESM(require_react(), 1);
"use client";
var SwitchLayoutGroupContext = import_react16.createContext({});

// node_modules/framer-motion/dist/es/motion/utils/use-visual-element.mjs
function useVisualElement(Component, visualState, props, createVisualElement, ProjectionNodeConstructor) {
  const { visualElement: parent } = import_react17.useContext(MotionContext);
  const lazyContext = import_react17.useContext(LazyContext);
  const presenceContext = import_react17.useContext(PresenceContext);
  const reducedMotionConfig = import_react17.useContext(MotionConfigContext).reducedMotion;
  const visualElementRef = import_react17.useRef(null);
  createVisualElement = createVisualElement || lazyContext.renderer;
  if (!visualElementRef.current && createVisualElement) {
    visualElementRef.current = createVisualElement(Component, {
      visualState,
      parent,
      props,
      presenceContext,
      blockInitialAnimation: presenceContext ? presenceContext.initial === false : false,
      reducedMotionConfig
    });
  }
  const visualElement = visualElementRef.current;
  const initialLayoutGroupConfig = import_react17.useContext(SwitchLayoutGroupContext);
  if (visualElement && !visualElement.projection && ProjectionNodeConstructor && (visualElement.type === "html" || visualElement.type === "svg")) {
    createProjectionNode(visualElementRef.current, props, ProjectionNodeConstructor, initialLayoutGroupConfig);
  }
  const isMounted = import_react17.useRef(false);
  import_react17.useInsertionEffect(() => {
    if (visualElement && isMounted.current) {
      visualElement.update(props, presenceContext);
    }
  });
  const optimisedAppearId = props[optimizedAppearDataAttribute];
  const wantsHandoff = import_react17.useRef(Boolean(optimisedAppearId) && !window.MotionHandoffIsComplete?.(optimisedAppearId) && window.MotionHasOptimisedAnimation?.(optimisedAppearId));
  useIsomorphicLayoutEffect(() => {
    if (!visualElement)
      return;
    isMounted.current = true;
    window.MotionIsMounted = true;
    visualElement.updateFeatures();
    visualElement.scheduleRenderMicrotask();
    if (wantsHandoff.current && visualElement.animationState) {
      visualElement.animationState.animateChanges();
    }
  });
  import_react17.useEffect(() => {
    if (!visualElement)
      return;
    if (!wantsHandoff.current && visualElement.animationState) {
      visualElement.animationState.animateChanges();
    }
    if (wantsHandoff.current) {
      queueMicrotask(() => {
        window.MotionHandoffMarkAsComplete?.(optimisedAppearId);
      });
      wantsHandoff.current = false;
    }
    visualElement.enteringChildren = undefined;
  });
  return visualElement;
}
function createProjectionNode(visualElement, props, ProjectionNodeConstructor, initialPromotionConfig) {
  const { layoutId, layout, drag, dragConstraints, layoutScroll, layoutRoot, layoutCrossfade } = props;
  visualElement.projection = new ProjectionNodeConstructor(visualElement.latestValues, props["data-framer-portal-id"] ? undefined : getClosestProjectingNode(visualElement.parent));
  visualElement.projection.setOptions({
    layoutId,
    layout,
    alwaysMeasureLayout: Boolean(drag) || dragConstraints && isRefObject(dragConstraints),
    visualElement,
    animationType: typeof layout === "string" ? layout : "both",
    initialPromotionConfig,
    crossfade: layoutCrossfade,
    layoutScroll,
    layoutRoot
  });
}
function getClosestProjectingNode(visualElement) {
  if (!visualElement)
    return;
  return visualElement.options.allowProjection !== false ? visualElement.projection : getClosestProjectingNode(visualElement.parent);
}

// node_modules/framer-motion/dist/es/motion/index.mjs
"use client";
function createMotionComponent(Component, { forwardMotionProps = false } = {}, preloadedFeatures, createVisualElement) {
  preloadedFeatures && loadFeatures(preloadedFeatures);
  const useVisualState = isSVGComponent(Component) ? useSVGVisualState : useHTMLVisualState;
  function MotionDOMComponent(props, externalRef) {
    let MeasureLayout;
    const configAndProps = {
      ...import_react18.useContext(MotionConfigContext),
      ...props,
      layoutId: useLayoutId(props)
    };
    const { isStatic } = configAndProps;
    const context = useCreateMotionContext(props);
    const visualState = useVisualState(props, isStatic);
    if (!isStatic && isBrowser) {
      useStrictMode(configAndProps, preloadedFeatures);
      const layoutProjection = getProjectionFunctionality(configAndProps);
      MeasureLayout = layoutProjection.MeasureLayout;
      context.visualElement = useVisualElement(Component, visualState, configAndProps, createVisualElement, layoutProjection.ProjectionNode);
    }
    return import_jsx_runtime.jsxs(MotionContext.Provider, { value: context, children: [MeasureLayout && context.visualElement ? import_jsx_runtime.jsx(MeasureLayout, { visualElement: context.visualElement, ...configAndProps }) : null, useRender(Component, props, useMotionRef(visualState, context.visualElement, externalRef), visualState, isStatic, forwardMotionProps)] });
  }
  MotionDOMComponent.displayName = `motion.${typeof Component === "string" ? Component : `create(${Component.displayName ?? Component.name ?? ""})`}`;
  const ForwardRefMotionComponent = import_react18.forwardRef(MotionDOMComponent);
  ForwardRefMotionComponent[motionComponentSymbol] = Component;
  return ForwardRefMotionComponent;
}
function useLayoutId({ layoutId }) {
  const layoutGroupId = import_react18.useContext(LayoutGroupContext).id;
  return layoutGroupId && layoutId !== undefined ? layoutGroupId + "-" + layoutId : layoutId;
}
function useStrictMode(configAndProps, preloadedFeatures) {
  const isStrict = import_react18.useContext(LazyContext).strict;
  if (preloadedFeatures && isStrict) {
    const strictMessage = "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.";
    configAndProps.ignoreStrict ? warning(false, strictMessage, "lazy-strict-mode") : invariant(false, strictMessage, "lazy-strict-mode");
  }
}
function getProjectionFunctionality(props) {
  const { drag, layout } = featureDefinitions;
  if (!drag && !layout)
    return {};
  const combined = { ...drag, ...layout };
  return {
    MeasureLayout: drag?.isEnabled(props) || layout?.isEnabled(props) ? combined.MeasureLayout : undefined,
    ProjectionNode: combined.ProjectionNode
  };
}

// node_modules/framer-motion/dist/es/render/components/create-proxy.mjs
function createMotionProxy(preloadedFeatures, createVisualElement) {
  if (typeof Proxy === "undefined") {
    return createMotionComponent;
  }
  const componentCache = new Map;
  const factory = (Component, options) => {
    return createMotionComponent(Component, options, preloadedFeatures, createVisualElement);
  };
  const deprecatedFactoryFunction = (Component, options) => {
    if (true) {
      warnOnce(false, "motion() is deprecated. Use motion.create() instead.");
    }
    return factory(Component, options);
  };
  return new Proxy(deprecatedFactoryFunction, {
    get: (_target, key) => {
      if (key === "create")
        return factory;
      if (!componentCache.has(key)) {
        componentCache.set(key, createMotionComponent(key, undefined, preloadedFeatures, createVisualElement));
      }
      return componentCache.get(key);
    }
  });
}

// node_modules/framer-motion/dist/es/render/dom/create-visual-element.mjs
var import_react19 = __toESM(require_react(), 1);

// node_modules/framer-motion/dist/es/projection/geometry/conversion.mjs
function convertBoundingBoxToBox({ top, left, right, bottom }) {
  return {
    x: { min: left, max: right },
    y: { min: top, max: bottom }
  };
}
function convertBoxToBoundingBox({ x, y }) {
  return { top: y.min, right: x.max, bottom: y.max, left: x.min };
}
function transformBoxPoints(point, transformPoint) {
  if (!transformPoint)
    return point;
  const topLeft = transformPoint({ x: point.left, y: point.top });
  const bottomRight = transformPoint({ x: point.right, y: point.bottom });
  return {
    top: topLeft.y,
    left: topLeft.x,
    bottom: bottomRight.y,
    right: bottomRight.x
  };
}

// node_modules/framer-motion/dist/es/projection/utils/has-transform.mjs
function isIdentityScale(scale2) {
  return scale2 === undefined || scale2 === 1;
}
function hasScale({ scale: scale2, scaleX: scaleX2, scaleY: scaleY2 }) {
  return !isIdentityScale(scale2) || !isIdentityScale(scaleX2) || !isIdentityScale(scaleY2);
}
function hasTransform(values) {
  return hasScale(values) || has2DTranslate(values) || values.z || values.rotate || values.rotateX || values.rotateY || values.skewX || values.skewY;
}
function has2DTranslate(values) {
  return is2DTranslate(values.x) || is2DTranslate(values.y);
}
function is2DTranslate(value) {
  return value && value !== "0%";
}

// node_modules/framer-motion/dist/es/projection/geometry/delta-apply.mjs
function scalePoint(point, scale2, originPoint) {
  const distanceFromOrigin = point - originPoint;
  const scaled = scale2 * distanceFromOrigin;
  return originPoint + scaled;
}
function applyPointDelta(point, translate, scale2, originPoint, boxScale) {
  if (boxScale !== undefined) {
    point = scalePoint(point, boxScale, originPoint);
  }
  return scalePoint(point, scale2, originPoint) + translate;
}
function applyAxisDelta(axis, translate = 0, scale2 = 1, originPoint, boxScale) {
  axis.min = applyPointDelta(axis.min, translate, scale2, originPoint, boxScale);
  axis.max = applyPointDelta(axis.max, translate, scale2, originPoint, boxScale);
}
function applyBoxDelta(box, { x, y }) {
  applyAxisDelta(box.x, x.translate, x.scale, x.originPoint);
  applyAxisDelta(box.y, y.translate, y.scale, y.originPoint);
}
var TREE_SCALE_SNAP_MIN = 0.999999999999;
var TREE_SCALE_SNAP_MAX = 1.0000000000001;
function applyTreeDeltas(box, treeScale, treePath, isSharedTransition = false) {
  const treeLength = treePath.length;
  if (!treeLength)
    return;
  treeScale.x = treeScale.y = 1;
  let node;
  let delta;
  for (let i = 0;i < treeLength; i++) {
    node = treePath[i];
    delta = node.projectionDelta;
    const { visualElement } = node.options;
    if (visualElement && visualElement.props.style && visualElement.props.style.display === "contents") {
      continue;
    }
    if (isSharedTransition && node.options.layoutScroll && node.scroll && node !== node.root) {
      transformBox(box, {
        x: -node.scroll.offset.x,
        y: -node.scroll.offset.y
      });
    }
    if (delta) {
      treeScale.x *= delta.x.scale;
      treeScale.y *= delta.y.scale;
      applyBoxDelta(box, delta);
    }
    if (isSharedTransition && hasTransform(node.latestValues)) {
      transformBox(box, node.latestValues);
    }
  }
  if (treeScale.x < TREE_SCALE_SNAP_MAX && treeScale.x > TREE_SCALE_SNAP_MIN) {
    treeScale.x = 1;
  }
  if (treeScale.y < TREE_SCALE_SNAP_MAX && treeScale.y > TREE_SCALE_SNAP_MIN) {
    treeScale.y = 1;
  }
}
function translateAxis(axis, distance) {
  axis.min = axis.min + distance;
  axis.max = axis.max + distance;
}
function transformAxis(axis, axisTranslate, axisScale, boxScale, axisOrigin = 0.5) {
  const originPoint = mixNumber(axis.min, axis.max, axisOrigin);
  applyAxisDelta(axis, axisTranslate, axisScale, originPoint, boxScale);
}
function transformBox(box, transform) {
  transformAxis(box.x, transform.x, transform.scaleX, transform.scale, transform.originX);
  transformAxis(box.y, transform.y, transform.scaleY, transform.scale, transform.originY);
}

// node_modules/framer-motion/dist/es/projection/utils/measure.mjs
function measureViewportBox(instance, transformPoint) {
  return convertBoundingBoxToBox(transformBoxPoints(instance.getBoundingClientRect(), transformPoint));
}
function measurePageBox(element, rootProjectionNode, transformPagePoint) {
  const viewportBox = measureViewportBox(element, transformPagePoint);
  const { scroll } = rootProjectionNode;
  if (scroll) {
    translateAxis(viewportBox.x, scroll.offset.x);
    translateAxis(viewportBox.y, scroll.offset.y);
  }
  return viewportBox;
}

// node_modules/framer-motion/dist/es/projection/geometry/models.mjs
var createAxisDelta = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
});
var createDelta = () => ({
  x: createAxisDelta(),
  y: createAxisDelta()
});
var createAxis = () => ({ min: 0, max: 0 });
var createBox = () => ({
  x: createAxis(),
  y: createAxis()
});

// node_modules/framer-motion/dist/es/utils/reduced-motion/state.mjs
var prefersReducedMotion = { current: null };
var hasReducedMotionListener = { current: false };

// node_modules/framer-motion/dist/es/utils/reduced-motion/index.mjs
function initPrefersReducedMotion() {
  hasReducedMotionListener.current = true;
  if (!isBrowser)
    return;
  if (window.matchMedia) {
    const motionMediaQuery = window.matchMedia("(prefers-reduced-motion)");
    const setReducedMotionPreferences = () => prefersReducedMotion.current = motionMediaQuery.matches;
    motionMediaQuery.addEventListener("change", setReducedMotionPreferences);
    setReducedMotionPreferences();
  } else {
    prefersReducedMotion.current = false;
  }
}

// node_modules/framer-motion/dist/es/render/store.mjs
var visualElementStore = new WeakMap;

// node_modules/framer-motion/dist/es/render/utils/motion-values.mjs
function updateMotionValuesFromProps(element, next, prev) {
  for (const key in next) {
    const nextValue = next[key];
    const prevValue = prev[key];
    if (isMotionValue(nextValue)) {
      element.addValue(key, nextValue);
    } else if (isMotionValue(prevValue)) {
      element.addValue(key, motionValue(nextValue, { owner: element }));
    } else if (prevValue !== nextValue) {
      if (element.hasValue(key)) {
        const existingValue = element.getValue(key);
        if (existingValue.liveStyle === true) {
          existingValue.jump(nextValue);
        } else if (!existingValue.hasAnimated) {
          existingValue.set(nextValue);
        }
      } else {
        const latestValue = element.getStaticValue(key);
        element.addValue(key, motionValue(latestValue !== undefined ? latestValue : nextValue, { owner: element }));
      }
    }
  }
  for (const key in prev) {
    if (next[key] === undefined)
      element.removeValue(key);
  }
  return next;
}

// node_modules/framer-motion/dist/es/render/VisualElement.mjs
var propEventHandlers = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
];

class VisualElement {
  scrapeMotionValuesFromProps(_props, _prevProps, _visualElement) {
    return {};
  }
  constructor({ parent, props, presenceContext, reducedMotionConfig, blockInitialAnimation, visualState }, options = {}) {
    this.current = null;
    this.children = new Set;
    this.isVariantNode = false;
    this.isControllingVariants = false;
    this.shouldReduceMotion = null;
    this.values = new Map;
    this.KeyframeResolver = KeyframeResolver;
    this.features = {};
    this.valueSubscriptions = new Map;
    this.prevMotionValues = {};
    this.events = {};
    this.propEventSubscriptions = {};
    this.notifyUpdate = () => this.notify("Update", this.latestValues);
    this.render = () => {
      if (!this.current)
        return;
      this.triggerBuild();
      this.renderInstance(this.current, this.renderState, this.props.style, this.projection);
    };
    this.renderScheduledAt = 0;
    this.scheduleRender = () => {
      const now2 = time.now();
      if (this.renderScheduledAt < now2) {
        this.renderScheduledAt = now2;
        frame.render(this.render, false, true);
      }
    };
    const { latestValues, renderState } = visualState;
    this.latestValues = latestValues;
    this.baseTarget = { ...latestValues };
    this.initialValues = props.initial ? { ...latestValues } : {};
    this.renderState = renderState;
    this.parent = parent;
    this.props = props;
    this.presenceContext = presenceContext;
    this.depth = parent ? parent.depth + 1 : 0;
    this.reducedMotionConfig = reducedMotionConfig;
    this.options = options;
    this.blockInitialAnimation = Boolean(blockInitialAnimation);
    this.isControllingVariants = isControllingVariants(props);
    this.isVariantNode = isVariantNode(props);
    if (this.isVariantNode) {
      this.variantChildren = new Set;
    }
    this.manuallyAnimateOnMount = Boolean(parent && parent.current);
    const { willChange, ...initialMotionValues } = this.scrapeMotionValuesFromProps(props, {}, this);
    for (const key in initialMotionValues) {
      const value = initialMotionValues[key];
      if (latestValues[key] !== undefined && isMotionValue(value)) {
        value.set(latestValues[key]);
      }
    }
  }
  mount(instance) {
    this.current = instance;
    visualElementStore.set(instance, this);
    if (this.projection && !this.projection.instance) {
      this.projection.mount(instance);
    }
    if (this.parent && this.isVariantNode && !this.isControllingVariants) {
      this.removeFromVariantTree = this.parent.addVariantChild(this);
    }
    this.values.forEach((value, key) => this.bindToMotionValue(key, value));
    if (!hasReducedMotionListener.current) {
      initPrefersReducedMotion();
    }
    this.shouldReduceMotion = this.reducedMotionConfig === "never" ? false : this.reducedMotionConfig === "always" ? true : prefersReducedMotion.current;
    if (true) {
      warnOnce(this.shouldReduceMotion !== true, "You have Reduced Motion enabled on your device. Animations may not appear as expected.", "reduced-motion-disabled");
    }
    this.parent?.addChild(this);
    this.update(this.props, this.presenceContext);
  }
  unmount() {
    this.projection && this.projection.unmount();
    cancelFrame(this.notifyUpdate);
    cancelFrame(this.render);
    this.valueSubscriptions.forEach((remove) => remove());
    this.valueSubscriptions.clear();
    this.removeFromVariantTree && this.removeFromVariantTree();
    this.parent?.removeChild(this);
    for (const key in this.events) {
      this.events[key].clear();
    }
    for (const key in this.features) {
      const feature = this.features[key];
      if (feature) {
        feature.unmount();
        feature.isMounted = false;
      }
    }
    this.current = null;
  }
  addChild(child) {
    this.children.add(child);
    this.enteringChildren ?? (this.enteringChildren = new Set);
    this.enteringChildren.add(child);
  }
  removeChild(child) {
    this.children.delete(child);
    this.enteringChildren && this.enteringChildren.delete(child);
  }
  bindToMotionValue(key, value) {
    if (this.valueSubscriptions.has(key)) {
      this.valueSubscriptions.get(key)();
    }
    const valueIsTransform = transformProps.has(key);
    if (valueIsTransform && this.onBindTransform) {
      this.onBindTransform();
    }
    const removeOnChange = value.on("change", (latestValue) => {
      this.latestValues[key] = latestValue;
      this.props.onUpdate && frame.preRender(this.notifyUpdate);
      if (valueIsTransform && this.projection) {
        this.projection.isTransformDirty = true;
      }
      this.scheduleRender();
    });
    let removeSyncCheck;
    if (window.MotionCheckAppearSync) {
      removeSyncCheck = window.MotionCheckAppearSync(this, key, value);
    }
    this.valueSubscriptions.set(key, () => {
      removeOnChange();
      if (removeSyncCheck)
        removeSyncCheck();
      if (value.owner)
        value.stop();
    });
  }
  sortNodePosition(other) {
    if (!this.current || !this.sortInstanceNodePosition || this.type !== other.type) {
      return 0;
    }
    return this.sortInstanceNodePosition(this.current, other.current);
  }
  updateFeatures() {
    let key = "animation";
    for (key in featureDefinitions) {
      const featureDefinition = featureDefinitions[key];
      if (!featureDefinition)
        continue;
      const { isEnabled, Feature: FeatureConstructor } = featureDefinition;
      if (!this.features[key] && FeatureConstructor && isEnabled(this.props)) {
        this.features[key] = new FeatureConstructor(this);
      }
      if (this.features[key]) {
        const feature = this.features[key];
        if (feature.isMounted) {
          feature.update();
        } else {
          feature.mount();
          feature.isMounted = true;
        }
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  measureViewportBox() {
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : createBox();
  }
  getStaticValue(key) {
    return this.latestValues[key];
  }
  setStaticValue(key, value) {
    this.latestValues[key] = value;
  }
  update(props, presenceContext) {
    if (props.transformTemplate || this.props.transformTemplate) {
      this.scheduleRender();
    }
    this.prevProps = this.props;
    this.props = props;
    this.prevPresenceContext = this.presenceContext;
    this.presenceContext = presenceContext;
    for (let i = 0;i < propEventHandlers.length; i++) {
      const key = propEventHandlers[i];
      if (this.propEventSubscriptions[key]) {
        this.propEventSubscriptions[key]();
        delete this.propEventSubscriptions[key];
      }
      const listenerName = "on" + key;
      const listener = props[listenerName];
      if (listener) {
        this.propEventSubscriptions[key] = this.on(key, listener);
      }
    }
    this.prevMotionValues = updateMotionValuesFromProps(this, this.scrapeMotionValuesFromProps(props, this.prevProps, this), this.prevMotionValues);
    if (this.handleChildMotionValue) {
      this.handleChildMotionValue();
    }
  }
  getProps() {
    return this.props;
  }
  getVariant(name) {
    return this.props.variants ? this.props.variants[name] : undefined;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : undefined;
  }
  addVariantChild(child) {
    const closestVariantNode = this.getClosestVariantNode();
    if (closestVariantNode) {
      closestVariantNode.variantChildren && closestVariantNode.variantChildren.add(child);
      return () => closestVariantNode.variantChildren.delete(child);
    }
  }
  addValue(key, value) {
    const existingValue = this.values.get(key);
    if (value !== existingValue) {
      if (existingValue)
        this.removeValue(key);
      this.bindToMotionValue(key, value);
      this.values.set(key, value);
      this.latestValues[key] = value.get();
    }
  }
  removeValue(key) {
    this.values.delete(key);
    const unsubscribe = this.valueSubscriptions.get(key);
    if (unsubscribe) {
      unsubscribe();
      this.valueSubscriptions.delete(key);
    }
    delete this.latestValues[key];
    this.removeValueFromRenderState(key, this.renderState);
  }
  hasValue(key) {
    return this.values.has(key);
  }
  getValue(key, defaultValue) {
    if (this.props.values && this.props.values[key]) {
      return this.props.values[key];
    }
    let value = this.values.get(key);
    if (value === undefined && defaultValue !== undefined) {
      value = motionValue(defaultValue === null ? undefined : defaultValue, { owner: this });
      this.addValue(key, value);
    }
    return value;
  }
  readValue(key, target) {
    let value = this.latestValues[key] !== undefined || !this.current ? this.latestValues[key] : this.getBaseTargetFromProps(this.props, key) ?? this.readValueFromInstance(this.current, key, this.options);
    if (value !== undefined && value !== null) {
      if (typeof value === "string" && (isNumericalString(value) || isZeroValueString(value))) {
        value = parseFloat(value);
      } else if (!findValueType(value) && complex.test(target)) {
        value = getAnimatableNone2(key, target);
      }
      this.setBaseTarget(key, isMotionValue(value) ? value.get() : value);
    }
    return isMotionValue(value) ? value.get() : value;
  }
  setBaseTarget(key, value) {
    this.baseTarget[key] = value;
  }
  getBaseTarget(key) {
    const { initial } = this.props;
    let valueFromInitial;
    if (typeof initial === "string" || typeof initial === "object") {
      const variant = resolveVariantFromProps(this.props, initial, this.presenceContext?.custom);
      if (variant) {
        valueFromInitial = variant[key];
      }
    }
    if (initial && valueFromInitial !== undefined) {
      return valueFromInitial;
    }
    const target = this.getBaseTargetFromProps(this.props, key);
    if (target !== undefined && !isMotionValue(target))
      return target;
    return this.initialValues[key] !== undefined && valueFromInitial === undefined ? undefined : this.baseTarget[key];
  }
  on(eventName, callback) {
    if (!this.events[eventName]) {
      this.events[eventName] = new SubscriptionManager;
    }
    return this.events[eventName].add(callback);
  }
  notify(eventName, ...args) {
    if (this.events[eventName]) {
      this.events[eventName].notify(...args);
    }
  }
  scheduleRenderMicrotask() {
    microtask.render(this.render);
  }
}

// node_modules/framer-motion/dist/es/render/dom/DOMVisualElement.mjs
class DOMVisualElement extends VisualElement {
  constructor() {
    super(...arguments);
    this.KeyframeResolver = DOMKeyframesResolver;
  }
  sortInstanceNodePosition(a, b) {
    return a.compareDocumentPosition(b) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(props, key) {
    return props.style ? props.style[key] : undefined;
  }
  removeValueFromRenderState(key, { vars, style }) {
    delete vars[key];
    delete style[key];
  }
  handleChildMotionValue() {
    if (this.childSubscription) {
      this.childSubscription();
      delete this.childSubscription;
    }
    const { children } = this.props;
    if (isMotionValue(children)) {
      this.childSubscription = children.on("change", (latest) => {
        if (this.current) {
          this.current.textContent = `${latest}`;
        }
      });
    }
  }
}

// node_modules/framer-motion/dist/es/render/html/utils/render.mjs
function renderHTML(element, { style, vars }, styleProp, projection) {
  const elementStyle = element.style;
  let key;
  for (key in style) {
    elementStyle[key] = style[key];
  }
  projection?.applyProjectionStyles(elementStyle, styleProp);
  for (key in vars) {
    elementStyle.setProperty(key, vars[key]);
  }
}

// node_modules/framer-motion/dist/es/render/html/HTMLVisualElement.mjs
function getComputedStyle2(element) {
  return window.getComputedStyle(element);
}

class HTMLVisualElement extends DOMVisualElement {
  constructor() {
    super(...arguments);
    this.type = "html";
    this.renderInstance = renderHTML;
  }
  readValueFromInstance(instance, key) {
    if (transformProps.has(key)) {
      return this.projection?.isProjecting ? defaultTransformValue(key) : readTransformValue(instance, key);
    } else {
      const computedStyle = getComputedStyle2(instance);
      const value = (isCSSVariableName(key) ? computedStyle.getPropertyValue(key) : computedStyle[key]) || 0;
      return typeof value === "string" ? value.trim() : value;
    }
  }
  measureInstanceViewportBox(instance, { transformPagePoint }) {
    return measureViewportBox(instance, transformPagePoint);
  }
  build(renderState, latestValues, props) {
    buildHTMLStyles(renderState, latestValues, props.transformTemplate);
  }
  scrapeMotionValuesFromProps(props, prevProps, visualElement) {
    return scrapeMotionValuesFromProps(props, prevProps, visualElement);
  }
}

// node_modules/framer-motion/dist/es/render/svg/utils/camel-case-attrs.mjs
var camelCaseAttributes = new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust"
]);

// node_modules/framer-motion/dist/es/render/svg/utils/render.mjs
function renderSVG(element, renderState, _styleProp, projection) {
  renderHTML(element, renderState, undefined, projection);
  for (const key in renderState.attrs) {
    element.setAttribute(!camelCaseAttributes.has(key) ? camelToDash(key) : key, renderState.attrs[key]);
  }
}

// node_modules/framer-motion/dist/es/render/svg/SVGVisualElement.mjs
class SVGVisualElement extends DOMVisualElement {
  constructor() {
    super(...arguments);
    this.type = "svg";
    this.isSVGTag = false;
    this.measureInstanceViewportBox = createBox;
  }
  getBaseTargetFromProps(props, key) {
    return props[key];
  }
  readValueFromInstance(instance, key) {
    if (transformProps.has(key)) {
      const defaultType = getDefaultValueType(key);
      return defaultType ? defaultType.default || 0 : 0;
    }
    key = !camelCaseAttributes.has(key) ? camelToDash(key) : key;
    return instance.getAttribute(key);
  }
  scrapeMotionValuesFromProps(props, prevProps, visualElement) {
    return scrapeMotionValuesFromProps2(props, prevProps, visualElement);
  }
  build(renderState, latestValues, props) {
    buildSVGAttrs(renderState, latestValues, this.isSVGTag, props.transformTemplate, props.style);
  }
  renderInstance(instance, renderState, styleProp, projection) {
    renderSVG(instance, renderState, styleProp, projection);
  }
  mount(instance) {
    this.isSVGTag = isSVGTag(instance.tagName);
    super.mount(instance);
  }
}

// node_modules/framer-motion/dist/es/render/dom/create-visual-element.mjs
var createDomVisualElement = (Component, options) => {
  return isSVGComponent(Component) ? new SVGVisualElement(options) : new HTMLVisualElement(options, {
    allowProjection: Component !== import_react19.Fragment
  });
};

// node_modules/framer-motion/dist/es/render/utils/resolve-dynamic-variants.mjs
function resolveVariant(visualElement, definition, custom) {
  const props = visualElement.getProps();
  return resolveVariantFromProps(props, definition, custom !== undefined ? custom : props.custom, visualElement);
}

// node_modules/framer-motion/dist/es/animation/utils/is-keyframes-target.mjs
var isKeyframesTarget = (v) => {
  return Array.isArray(v);
};

// node_modules/framer-motion/dist/es/render/utils/setters.mjs
function setMotionValue(visualElement, key, value) {
  if (visualElement.hasValue(key)) {
    visualElement.getValue(key).set(value);
  } else {
    visualElement.addValue(key, motionValue(value));
  }
}
function resolveFinalValueInKeyframes(v) {
  return isKeyframesTarget(v) ? v[v.length - 1] || 0 : v;
}
function setTarget(visualElement, definition) {
  const resolved = resolveVariant(visualElement, definition);
  let { transitionEnd = {}, transition = {}, ...target } = resolved || {};
  target = { ...target, ...transitionEnd };
  for (const key in target) {
    const value = resolveFinalValueInKeyframes(target[key]);
    setMotionValue(visualElement, key, value);
  }
}

// node_modules/framer-motion/dist/es/value/use-will-change/is.mjs
function isWillChangeMotionValue(value) {
  return Boolean(isMotionValue(value) && value.add);
}

// node_modules/framer-motion/dist/es/value/use-will-change/add-will-change.mjs
function addValueToWillChange(visualElement, key) {
  const willChange = visualElement.getValue("willChange");
  if (isWillChangeMotionValue(willChange)) {
    return willChange.add(key);
  } else if (!willChange && MotionGlobalConfig.WillChange) {
    const newWillChange = new MotionGlobalConfig.WillChange("auto");
    visualElement.addValue("willChange", newWillChange);
    newWillChange.add(key);
  }
}

// node_modules/framer-motion/dist/es/animation/optimized-appear/get-appear-id.mjs
function getOptimisedAppearId(visualElement) {
  return visualElement.props[optimizedAppearDataAttribute];
}

// node_modules/framer-motion/dist/es/animation/animators/waapi/utils/get-final-keyframe.mjs
var isNotNull2 = (value) => value !== null;
function getFinalKeyframe2(keyframes2, { repeat, repeatType = "loop" }, finalKeyframe) {
  const resolvedKeyframes = keyframes2.filter(isNotNull2);
  const index = repeat && repeatType !== "loop" && repeat % 2 === 1 ? 0 : resolvedKeyframes.length - 1;
  return !index || finalKeyframe === undefined ? resolvedKeyframes[index] : finalKeyframe;
}

// node_modules/framer-motion/dist/es/animation/utils/default-transitions.mjs
var underDampedSpring = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
};
var criticallyDampedSpring = (target) => ({
  type: "spring",
  stiffness: 550,
  damping: target === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
});
var keyframesTransition = {
  type: "keyframes",
  duration: 0.8
};
var ease = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
};
var getDefaultTransition = (valueKey, { keyframes: keyframes2 }) => {
  if (keyframes2.length > 2) {
    return keyframesTransition;
  } else if (transformProps.has(valueKey)) {
    return valueKey.startsWith("scale") ? criticallyDampedSpring(keyframes2[1]) : underDampedSpring;
  }
  return ease;
};

// node_modules/framer-motion/dist/es/animation/utils/is-transition-defined.mjs
function isTransitionDefined({ when, delay: _delay, delayChildren, staggerChildren, staggerDirection, repeat, repeatType, repeatDelay, from, elapsed, ...transition }) {
  return !!Object.keys(transition).length;
}

// node_modules/framer-motion/dist/es/animation/interfaces/motion-value.mjs
var animateMotionValue = (name, value, target, transition = {}, element, isHandoff) => (onComplete) => {
  const valueTransition = getValueTransition(transition, name) || {};
  const delay = valueTransition.delay || transition.delay || 0;
  let { elapsed = 0 } = transition;
  elapsed = elapsed - secondsToMilliseconds(delay);
  const options = {
    keyframes: Array.isArray(target) ? target : [null, target],
    ease: "easeOut",
    velocity: value.getVelocity(),
    ...valueTransition,
    delay: -elapsed,
    onUpdate: (v) => {
      value.set(v);
      valueTransition.onUpdate && valueTransition.onUpdate(v);
    },
    onComplete: () => {
      onComplete();
      valueTransition.onComplete && valueTransition.onComplete();
    },
    name,
    motionValue: value,
    element: isHandoff ? undefined : element
  };
  if (!isTransitionDefined(valueTransition)) {
    Object.assign(options, getDefaultTransition(name, options));
  }
  options.duration && (options.duration = secondsToMilliseconds(options.duration));
  options.repeatDelay && (options.repeatDelay = secondsToMilliseconds(options.repeatDelay));
  if (options.from !== undefined) {
    options.keyframes[0] = options.from;
  }
  let shouldSkip = false;
  if (options.type === false || options.duration === 0 && !options.repeatDelay) {
    makeAnimationInstant(options);
    if (options.delay === 0) {
      shouldSkip = true;
    }
  }
  if (MotionGlobalConfig.instantAnimations || MotionGlobalConfig.skipAnimations) {
    shouldSkip = true;
    makeAnimationInstant(options);
    options.delay = 0;
  }
  options.allowFlatten = !valueTransition.type && !valueTransition.ease;
  if (shouldSkip && !isHandoff && value.get() !== undefined) {
    const finalKeyframe = getFinalKeyframe2(options.keyframes, valueTransition);
    if (finalKeyframe !== undefined) {
      frame.update(() => {
        options.onUpdate(finalKeyframe);
        options.onComplete();
      });
      return;
    }
  }
  return valueTransition.isSync ? new JSAnimation(options) : new AsyncMotionValueAnimation(options);
};

// node_modules/framer-motion/dist/es/animation/interfaces/visual-element-target.mjs
function shouldBlockAnimation({ protectedKeys, needsAnimating }, key) {
  const shouldBlock = protectedKeys.hasOwnProperty(key) && needsAnimating[key] !== true;
  needsAnimating[key] = false;
  return shouldBlock;
}
function animateTarget(visualElement, targetAndTransition, { delay = 0, transitionOverride, type } = {}) {
  let { transition = visualElement.getDefaultTransition(), transitionEnd, ...target } = targetAndTransition;
  if (transitionOverride)
    transition = transitionOverride;
  const animations = [];
  const animationTypeState = type && visualElement.animationState && visualElement.animationState.getState()[type];
  for (const key in target) {
    const value = visualElement.getValue(key, visualElement.latestValues[key] ?? null);
    const valueTarget = target[key];
    if (valueTarget === undefined || animationTypeState && shouldBlockAnimation(animationTypeState, key)) {
      continue;
    }
    const valueTransition = {
      delay,
      ...getValueTransition(transition || {}, key)
    };
    const currentValue = value.get();
    if (currentValue !== undefined && !value.isAnimating && !Array.isArray(valueTarget) && valueTarget === currentValue && !valueTransition.velocity) {
      continue;
    }
    let isHandoff = false;
    if (window.MotionHandoffAnimation) {
      const appearId = getOptimisedAppearId(visualElement);
      if (appearId) {
        const startTime = window.MotionHandoffAnimation(appearId, key, frame);
        if (startTime !== null) {
          valueTransition.startTime = startTime;
          isHandoff = true;
        }
      }
    }
    addValueToWillChange(visualElement, key);
    value.start(animateMotionValue(key, value, valueTarget, visualElement.shouldReduceMotion && positionalKeys.has(key) ? { type: false } : valueTransition, visualElement, isHandoff));
    const animation = value.animation;
    if (animation) {
      animations.push(animation);
    }
  }
  if (transitionEnd) {
    Promise.all(animations).then(() => {
      frame.update(() => {
        transitionEnd && setTarget(visualElement, transitionEnd);
      });
    });
  }
  return animations;
}

// node_modules/framer-motion/dist/es/animation/utils/calc-child-stagger.mjs
function calcChildStagger(children, child, delayChildren, staggerChildren = 0, staggerDirection = 1) {
  const index = Array.from(children).sort((a, b) => a.sortNodePosition(b)).indexOf(child);
  const numChildren = children.size;
  const maxStaggerDuration = (numChildren - 1) * staggerChildren;
  const delayIsFunction = typeof delayChildren === "function";
  return delayIsFunction ? delayChildren(index, numChildren) : staggerDirection === 1 ? index * staggerChildren : maxStaggerDuration - index * staggerChildren;
}

// node_modules/framer-motion/dist/es/animation/interfaces/visual-element-variant.mjs
function animateVariant(visualElement, variant, options = {}) {
  const resolved = resolveVariant(visualElement, variant, options.type === "exit" ? visualElement.presenceContext?.custom : undefined);
  let { transition = visualElement.getDefaultTransition() || {} } = resolved || {};
  if (options.transitionOverride) {
    transition = options.transitionOverride;
  }
  const getAnimation = resolved ? () => Promise.all(animateTarget(visualElement, resolved, options)) : () => Promise.resolve();
  const getChildAnimations = visualElement.variantChildren && visualElement.variantChildren.size ? (forwardDelay = 0) => {
    const { delayChildren = 0, staggerChildren, staggerDirection } = transition;
    return animateChildren(visualElement, variant, forwardDelay, delayChildren, staggerChildren, staggerDirection, options);
  } : () => Promise.resolve();
  const { when } = transition;
  if (when) {
    const [first, last] = when === "beforeChildren" ? [getAnimation, getChildAnimations] : [getChildAnimations, getAnimation];
    return first().then(() => last());
  } else {
    return Promise.all([getAnimation(), getChildAnimations(options.delay)]);
  }
}
function animateChildren(visualElement, variant, delay = 0, delayChildren = 0, staggerChildren = 0, staggerDirection = 1, options) {
  const animations = [];
  for (const child of visualElement.variantChildren) {
    child.notify("AnimationStart", variant);
    animations.push(animateVariant(child, variant, {
      ...options,
      delay: delay + (typeof delayChildren === "function" ? 0 : delayChildren) + calcChildStagger(visualElement.variantChildren, child, delayChildren, staggerChildren, staggerDirection)
    }).then(() => child.notify("AnimationComplete", variant)));
  }
  return Promise.all(animations);
}

// node_modules/framer-motion/dist/es/animation/interfaces/visual-element.mjs
function animateVisualElement(visualElement, definition, options = {}) {
  visualElement.notify("AnimationStart", definition);
  let animation;
  if (Array.isArray(definition)) {
    const animations = definition.map((variant) => animateVariant(visualElement, variant, options));
    animation = Promise.all(animations);
  } else if (typeof definition === "string") {
    animation = animateVariant(visualElement, definition, options);
  } else {
    const resolvedDefinition = typeof definition === "function" ? resolveVariant(visualElement, definition, options.custom) : definition;
    animation = Promise.all(animateTarget(visualElement, resolvedDefinition, options));
  }
  return animation.then(() => {
    visualElement.notify("AnimationComplete", definition);
  });
}

// node_modules/framer-motion/dist/es/utils/shallow-compare.mjs
function shallowCompare(next, prev) {
  if (!Array.isArray(prev))
    return false;
  const prevLength = prev.length;
  if (prevLength !== next.length)
    return false;
  for (let i = 0;i < prevLength; i++) {
    if (prev[i] !== next[i])
      return false;
  }
  return true;
}

// node_modules/framer-motion/dist/es/render/utils/get-variant-context.mjs
var numVariantProps = variantProps.length;
function getVariantContext(visualElement) {
  if (!visualElement)
    return;
  if (!visualElement.isControllingVariants) {
    const context2 = visualElement.parent ? getVariantContext(visualElement.parent) || {} : {};
    if (visualElement.props.initial !== undefined) {
      context2.initial = visualElement.props.initial;
    }
    return context2;
  }
  const context = {};
  for (let i = 0;i < numVariantProps; i++) {
    const name = variantProps[i];
    const prop = visualElement.props[name];
    if (isVariantLabel(prop) || prop === false) {
      context[name] = prop;
    }
  }
  return context;
}

// node_modules/framer-motion/dist/es/render/utils/animation-state.mjs
var reversePriorityOrder = [...variantPriorityOrder].reverse();
var numAnimationTypes = variantPriorityOrder.length;
function animateList(visualElement) {
  return (animations) => Promise.all(animations.map(({ animation, options }) => animateVisualElement(visualElement, animation, options)));
}
function createAnimationState(visualElement) {
  let animate = animateList(visualElement);
  let state = createState();
  let isInitialRender = true;
  const buildResolvedTypeValues = (type) => (acc, definition) => {
    const resolved = resolveVariant(visualElement, definition, type === "exit" ? visualElement.presenceContext?.custom : undefined);
    if (resolved) {
      const { transition, transitionEnd, ...target } = resolved;
      acc = { ...acc, ...target, ...transitionEnd };
    }
    return acc;
  };
  function setAnimateFunction(makeAnimator) {
    animate = makeAnimator(visualElement);
  }
  function animateChanges(changedActiveType) {
    const { props } = visualElement;
    const context = getVariantContext(visualElement.parent) || {};
    const animations = [];
    const removedKeys = new Set;
    let encounteredKeys = {};
    let removedVariantIndex = Infinity;
    for (let i = 0;i < numAnimationTypes; i++) {
      const type = reversePriorityOrder[i];
      const typeState = state[type];
      const prop = props[type] !== undefined ? props[type] : context[type];
      const propIsVariant = isVariantLabel(prop);
      const activeDelta = type === changedActiveType ? typeState.isActive : null;
      if (activeDelta === false)
        removedVariantIndex = i;
      let isInherited = prop === context[type] && prop !== props[type] && propIsVariant;
      if (isInherited && isInitialRender && visualElement.manuallyAnimateOnMount) {
        isInherited = false;
      }
      typeState.protectedKeys = { ...encounteredKeys };
      if (!typeState.isActive && activeDelta === null || !prop && !typeState.prevProp || isAnimationControls(prop) || typeof prop === "boolean") {
        continue;
      }
      const variantDidChange = checkVariantsDidChange(typeState.prevProp, prop);
      let shouldAnimateType = variantDidChange || type === changedActiveType && typeState.isActive && !isInherited && propIsVariant || i > removedVariantIndex && propIsVariant;
      let handledRemovedValues = false;
      const definitionList = Array.isArray(prop) ? prop : [prop];
      let resolvedValues = definitionList.reduce(buildResolvedTypeValues(type), {});
      if (activeDelta === false)
        resolvedValues = {};
      const { prevResolvedValues = {} } = typeState;
      const allKeys = {
        ...prevResolvedValues,
        ...resolvedValues
      };
      const markToAnimate = (key) => {
        shouldAnimateType = true;
        if (removedKeys.has(key)) {
          handledRemovedValues = true;
          removedKeys.delete(key);
        }
        typeState.needsAnimating[key] = true;
        const motionValue2 = visualElement.getValue(key);
        if (motionValue2)
          motionValue2.liveStyle = false;
      };
      for (const key in allKeys) {
        const next = resolvedValues[key];
        const prev = prevResolvedValues[key];
        if (encounteredKeys.hasOwnProperty(key))
          continue;
        let valueHasChanged = false;
        if (isKeyframesTarget(next) && isKeyframesTarget(prev)) {
          valueHasChanged = !shallowCompare(next, prev);
        } else {
          valueHasChanged = next !== prev;
        }
        if (valueHasChanged) {
          if (next !== undefined && next !== null) {
            markToAnimate(key);
          } else {
            removedKeys.add(key);
          }
        } else if (next !== undefined && removedKeys.has(key)) {
          markToAnimate(key);
        } else {
          typeState.protectedKeys[key] = true;
        }
      }
      typeState.prevProp = prop;
      typeState.prevResolvedValues = resolvedValues;
      if (typeState.isActive) {
        encounteredKeys = { ...encounteredKeys, ...resolvedValues };
      }
      if (isInitialRender && visualElement.blockInitialAnimation) {
        shouldAnimateType = false;
      }
      const willAnimateViaParent = isInherited && variantDidChange;
      const needsAnimating = !willAnimateViaParent || handledRemovedValues;
      if (shouldAnimateType && needsAnimating) {
        animations.push(...definitionList.map((animation) => {
          const options = { type };
          if (typeof animation === "string" && isInitialRender && !willAnimateViaParent && visualElement.manuallyAnimateOnMount && visualElement.parent) {
            const { parent } = visualElement;
            const parentVariant = resolveVariant(parent, animation);
            if (parent.enteringChildren && parentVariant) {
              const { delayChildren } = parentVariant.transition || {};
              options.delay = calcChildStagger(parent.enteringChildren, visualElement, delayChildren);
            }
          }
          return {
            animation,
            options
          };
        }));
      }
    }
    if (removedKeys.size) {
      const fallbackAnimation = {};
      if (typeof props.initial !== "boolean") {
        const initialTransition = resolveVariant(visualElement, Array.isArray(props.initial) ? props.initial[0] : props.initial);
        if (initialTransition && initialTransition.transition) {
          fallbackAnimation.transition = initialTransition.transition;
        }
      }
      removedKeys.forEach((key) => {
        const fallbackTarget = visualElement.getBaseTarget(key);
        const motionValue2 = visualElement.getValue(key);
        if (motionValue2)
          motionValue2.liveStyle = true;
        fallbackAnimation[key] = fallbackTarget ?? null;
      });
      animations.push({ animation: fallbackAnimation });
    }
    let shouldAnimate = Boolean(animations.length);
    if (isInitialRender && (props.initial === false || props.initial === props.animate) && !visualElement.manuallyAnimateOnMount) {
      shouldAnimate = false;
    }
    isInitialRender = false;
    return shouldAnimate ? animate(animations) : Promise.resolve();
  }
  function setActive(type, isActive) {
    if (state[type].isActive === isActive)
      return Promise.resolve();
    visualElement.variantChildren?.forEach((child) => child.animationState?.setActive(type, isActive));
    state[type].isActive = isActive;
    const animations = animateChanges(type);
    for (const key in state) {
      state[key].protectedKeys = {};
    }
    return animations;
  }
  return {
    animateChanges,
    setActive,
    setAnimateFunction,
    getState: () => state,
    reset: () => {
      state = createState();
      isInitialRender = true;
    }
  };
}
function checkVariantsDidChange(prev, next) {
  if (typeof next === "string") {
    return next !== prev;
  } else if (Array.isArray(next)) {
    return !shallowCompare(next, prev);
  }
  return false;
}
function createTypeState(isActive = false) {
  return {
    isActive,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function createState() {
  return {
    animate: createTypeState(true),
    whileInView: createTypeState(),
    whileHover: createTypeState(),
    whileTap: createTypeState(),
    whileDrag: createTypeState(),
    whileFocus: createTypeState(),
    exit: createTypeState()
  };
}

// node_modules/framer-motion/dist/es/motion/features/Feature.mjs
class Feature {
  constructor(node) {
    this.isMounted = false;
    this.node = node;
  }
  update() {}
}

// node_modules/framer-motion/dist/es/motion/features/animation/index.mjs
class AnimationFeature extends Feature {
  constructor(node) {
    super(node);
    node.animationState || (node.animationState = createAnimationState(node));
  }
  updateAnimationControlsSubscription() {
    const { animate } = this.node.getProps();
    if (isAnimationControls(animate)) {
      this.unmountControls = animate.subscribe(this.node);
    }
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate } = this.node.getProps();
    const { animate: prevAnimate } = this.node.prevProps || {};
    if (animate !== prevAnimate) {
      this.updateAnimationControlsSubscription();
    }
  }
  unmount() {
    this.node.animationState.reset();
    this.unmountControls?.();
  }
}

// node_modules/framer-motion/dist/es/motion/features/animation/exit.mjs
var id = 0;

class ExitAnimationFeature extends Feature {
  constructor() {
    super(...arguments);
    this.id = id++;
  }
  update() {
    if (!this.node.presenceContext)
      return;
    const { isPresent, onExitComplete } = this.node.presenceContext;
    const { isPresent: prevIsPresent } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || isPresent === prevIsPresent) {
      return;
    }
    const exitAnimation = this.node.animationState.setActive("exit", !isPresent);
    if (onExitComplete && !isPresent) {
      exitAnimation.then(() => {
        onExitComplete(this.id);
      });
    }
  }
  mount() {
    const { register, onExitComplete } = this.node.presenceContext || {};
    if (onExitComplete) {
      onExitComplete(this.id);
    }
    if (register) {
      this.unmount = register(this.id);
    }
  }
  unmount() {}
}

// node_modules/framer-motion/dist/es/motion/features/animations.mjs
var animations = {
  animation: {
    Feature: AnimationFeature
  },
  exit: {
    Feature: ExitAnimationFeature
  }
};

// node_modules/framer-motion/dist/es/events/add-dom-event.mjs
function addDomEvent(target, eventName, handler, options = { passive: true }) {
  target.addEventListener(eventName, handler, options);
  return () => target.removeEventListener(eventName, handler);
}

// node_modules/framer-motion/dist/es/events/event-info.mjs
function extractEventInfo(event) {
  return {
    point: {
      x: event.pageX,
      y: event.pageY
    }
  };
}
var addPointerInfo = (handler) => {
  return (event) => isPrimaryPointer(event) && handler(event, extractEventInfo(event));
};

// node_modules/framer-motion/dist/es/events/add-pointer-event.mjs
function addPointerEvent(target, eventName, handler, options) {
  return addDomEvent(target, eventName, addPointerInfo(handler), options);
}

// node_modules/framer-motion/dist/es/projection/geometry/delta-calc.mjs
var SCALE_PRECISION = 0.0001;
var SCALE_MIN = 1 - SCALE_PRECISION;
var SCALE_MAX = 1 + SCALE_PRECISION;
var TRANSLATE_PRECISION = 0.01;
var TRANSLATE_MIN = 0 - TRANSLATE_PRECISION;
var TRANSLATE_MAX = 0 + TRANSLATE_PRECISION;
function calcLength(axis) {
  return axis.max - axis.min;
}
function isNear(value, target, maxDistance) {
  return Math.abs(value - target) <= maxDistance;
}
function calcAxisDelta(delta, source, target, origin = 0.5) {
  delta.origin = origin;
  delta.originPoint = mixNumber(source.min, source.max, delta.origin);
  delta.scale = calcLength(target) / calcLength(source);
  delta.translate = mixNumber(target.min, target.max, delta.origin) - delta.originPoint;
  if (delta.scale >= SCALE_MIN && delta.scale <= SCALE_MAX || isNaN(delta.scale)) {
    delta.scale = 1;
  }
  if (delta.translate >= TRANSLATE_MIN && delta.translate <= TRANSLATE_MAX || isNaN(delta.translate)) {
    delta.translate = 0;
  }
}
function calcBoxDelta(delta, source, target, origin) {
  calcAxisDelta(delta.x, source.x, target.x, origin ? origin.originX : undefined);
  calcAxisDelta(delta.y, source.y, target.y, origin ? origin.originY : undefined);
}
function calcRelativeAxis(target, relative, parent) {
  target.min = parent.min + relative.min;
  target.max = target.min + calcLength(relative);
}
function calcRelativeBox(target, relative, parent) {
  calcRelativeAxis(target.x, relative.x, parent.x);
  calcRelativeAxis(target.y, relative.y, parent.y);
}
function calcRelativeAxisPosition(target, layout, parent) {
  target.min = layout.min - parent.min;
  target.max = target.min + calcLength(layout);
}
function calcRelativePosition(target, layout, parent) {
  calcRelativeAxisPosition(target.x, layout.x, parent.x);
  calcRelativeAxisPosition(target.y, layout.y, parent.y);
}

// node_modules/framer-motion/dist/es/projection/utils/each-axis.mjs
function eachAxis(callback) {
  return [callback("x"), callback("y")];
}

// node_modules/framer-motion/dist/es/utils/get-context-window.mjs
var getContextWindow = ({ current }) => {
  return current ? current.ownerDocument.defaultView : null;
};

// node_modules/framer-motion/dist/es/utils/distance.mjs
var distance = (a, b) => Math.abs(a - b);
function distance2D(a, b) {
  const xDelta = distance(a.x, b.x);
  const yDelta = distance(a.y, b.y);
  return Math.sqrt(xDelta ** 2 + yDelta ** 2);
}

// node_modules/framer-motion/dist/es/gestures/pan/PanSession.mjs
class PanSession {
  constructor(event, handlers, { transformPagePoint, contextWindow = window, dragSnapToOrigin = false, distanceThreshold = 3 } = {}) {
    this.startEvent = null;
    this.lastMoveEvent = null;
    this.lastMoveEventInfo = null;
    this.handlers = {};
    this.contextWindow = window;
    this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const info2 = getPanInfo(this.lastMoveEventInfo, this.history);
      const isPanStarted = this.startEvent !== null;
      const isDistancePastThreshold = distance2D(info2.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
      if (!isPanStarted && !isDistancePastThreshold)
        return;
      const { point: point2 } = info2;
      const { timestamp: timestamp2 } = frameData;
      this.history.push({ ...point2, timestamp: timestamp2 });
      const { onStart, onMove } = this.handlers;
      if (!isPanStarted) {
        onStart && onStart(this.lastMoveEvent, info2);
        this.startEvent = this.lastMoveEvent;
      }
      onMove && onMove(this.lastMoveEvent, info2);
    };
    this.handlePointerMove = (event2, info2) => {
      this.lastMoveEvent = event2;
      this.lastMoveEventInfo = transformPoint(info2, this.transformPagePoint);
      frame.update(this.updatePoint, true);
    };
    this.handlePointerUp = (event2, info2) => {
      this.end();
      const { onEnd, onSessionEnd, resumeAnimation } = this.handlers;
      if (this.dragSnapToOrigin)
        resumeAnimation && resumeAnimation();
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const panInfo = getPanInfo(event2.type === "pointercancel" ? this.lastMoveEventInfo : transformPoint(info2, this.transformPagePoint), this.history);
      if (this.startEvent && onEnd) {
        onEnd(event2, panInfo);
      }
      onSessionEnd && onSessionEnd(event2, panInfo);
    };
    if (!isPrimaryPointer(event))
      return;
    this.dragSnapToOrigin = dragSnapToOrigin;
    this.handlers = handlers;
    this.transformPagePoint = transformPagePoint;
    this.distanceThreshold = distanceThreshold;
    this.contextWindow = contextWindow || window;
    const info = extractEventInfo(event);
    const initialInfo = transformPoint(info, this.transformPagePoint);
    const { point } = initialInfo;
    const { timestamp } = frameData;
    this.history = [{ ...point, timestamp }];
    const { onSessionStart } = handlers;
    onSessionStart && onSessionStart(event, getPanInfo(initialInfo, this.history));
    this.removeListeners = pipe(addPointerEvent(this.contextWindow, "pointermove", this.handlePointerMove), addPointerEvent(this.contextWindow, "pointerup", this.handlePointerUp), addPointerEvent(this.contextWindow, "pointercancel", this.handlePointerUp));
  }
  updateHandlers(handlers) {
    this.handlers = handlers;
  }
  end() {
    this.removeListeners && this.removeListeners();
    cancelFrame(this.updatePoint);
  }
}
function transformPoint(info, transformPagePoint) {
  return transformPagePoint ? { point: transformPagePoint(info.point) } : info;
}
function subtractPoint(a, b) {
  return { x: a.x - b.x, y: a.y - b.y };
}
function getPanInfo({ point }, history) {
  return {
    point,
    delta: subtractPoint(point, lastDevicePoint(history)),
    offset: subtractPoint(point, startDevicePoint(history)),
    velocity: getVelocity(history, 0.1)
  };
}
function startDevicePoint(history) {
  return history[0];
}
function lastDevicePoint(history) {
  return history[history.length - 1];
}
function getVelocity(history, timeDelta) {
  if (history.length < 2) {
    return { x: 0, y: 0 };
  }
  let i = history.length - 1;
  let timestampedPoint = null;
  const lastPoint = lastDevicePoint(history);
  while (i >= 0) {
    timestampedPoint = history[i];
    if (lastPoint.timestamp - timestampedPoint.timestamp > secondsToMilliseconds(timeDelta)) {
      break;
    }
    i--;
  }
  if (!timestampedPoint) {
    return { x: 0, y: 0 };
  }
  const time2 = millisecondsToSeconds(lastPoint.timestamp - timestampedPoint.timestamp);
  if (time2 === 0) {
    return { x: 0, y: 0 };
  }
  const currentVelocity = {
    x: (lastPoint.x - timestampedPoint.x) / time2,
    y: (lastPoint.y - timestampedPoint.y) / time2
  };
  if (currentVelocity.x === Infinity) {
    currentVelocity.x = 0;
  }
  if (currentVelocity.y === Infinity) {
    currentVelocity.y = 0;
  }
  return currentVelocity;
}

// node_modules/framer-motion/dist/es/gestures/drag/utils/constraints.mjs
function applyConstraints(point, { min, max }, elastic) {
  if (min !== undefined && point < min) {
    point = elastic ? mixNumber(min, point, elastic.min) : Math.max(point, min);
  } else if (max !== undefined && point > max) {
    point = elastic ? mixNumber(max, point, elastic.max) : Math.min(point, max);
  }
  return point;
}
function calcRelativeAxisConstraints(axis, min, max) {
  return {
    min: min !== undefined ? axis.min + min : undefined,
    max: max !== undefined ? axis.max + max - (axis.max - axis.min) : undefined
  };
}
function calcRelativeConstraints(layoutBox, { top, left, bottom, right }) {
  return {
    x: calcRelativeAxisConstraints(layoutBox.x, left, right),
    y: calcRelativeAxisConstraints(layoutBox.y, top, bottom)
  };
}
function calcViewportAxisConstraints(layoutAxis, constraintsAxis) {
  let min = constraintsAxis.min - layoutAxis.min;
  let max = constraintsAxis.max - layoutAxis.max;
  if (constraintsAxis.max - constraintsAxis.min < layoutAxis.max - layoutAxis.min) {
    [min, max] = [max, min];
  }
  return { min, max };
}
function calcViewportConstraints(layoutBox, constraintsBox) {
  return {
    x: calcViewportAxisConstraints(layoutBox.x, constraintsBox.x),
    y: calcViewportAxisConstraints(layoutBox.y, constraintsBox.y)
  };
}
function calcOrigin(source, target) {
  let origin = 0.5;
  const sourceLength = calcLength(source);
  const targetLength = calcLength(target);
  if (targetLength > sourceLength) {
    origin = progress(target.min, target.max - sourceLength, source.min);
  } else if (sourceLength > targetLength) {
    origin = progress(source.min, source.max - targetLength, target.min);
  }
  return clamp(0, 1, origin);
}
function rebaseAxisConstraints(layout, constraints) {
  const relativeConstraints = {};
  if (constraints.min !== undefined) {
    relativeConstraints.min = constraints.min - layout.min;
  }
  if (constraints.max !== undefined) {
    relativeConstraints.max = constraints.max - layout.min;
  }
  return relativeConstraints;
}
var defaultElastic = 0.35;
function resolveDragElastic(dragElastic = defaultElastic) {
  if (dragElastic === false) {
    dragElastic = 0;
  } else if (dragElastic === true) {
    dragElastic = defaultElastic;
  }
  return {
    x: resolveAxisElastic(dragElastic, "left", "right"),
    y: resolveAxisElastic(dragElastic, "top", "bottom")
  };
}
function resolveAxisElastic(dragElastic, minLabel, maxLabel) {
  return {
    min: resolvePointElastic(dragElastic, minLabel),
    max: resolvePointElastic(dragElastic, maxLabel)
  };
}
function resolvePointElastic(dragElastic, label) {
  return typeof dragElastic === "number" ? dragElastic : dragElastic[label] || 0;
}

// node_modules/framer-motion/dist/es/gestures/drag/VisualElementDragControls.mjs
var elementDragControls = new WeakMap;

class VisualElementDragControls {
  constructor(visualElement) {
    this.openDragLock = null;
    this.isDragging = false;
    this.currentDirection = null;
    this.originPoint = { x: 0, y: 0 };
    this.constraints = false;
    this.hasMutatedConstraints = false;
    this.elastic = createBox();
    this.latestPointerEvent = null;
    this.latestPanInfo = null;
    this.visualElement = visualElement;
  }
  start(originEvent, { snapToCursor = false, distanceThreshold } = {}) {
    const { presenceContext } = this.visualElement;
    if (presenceContext && presenceContext.isPresent === false)
      return;
    const onSessionStart = (event) => {
      const { dragSnapToOrigin: dragSnapToOrigin2 } = this.getProps();
      dragSnapToOrigin2 ? this.pauseAnimation() : this.stopAnimation();
      if (snapToCursor) {
        this.snapToCursor(extractEventInfo(event).point);
      }
    };
    const onStart = (event, info) => {
      const { drag, dragPropagation, onDragStart } = this.getProps();
      if (drag && !dragPropagation) {
        if (this.openDragLock)
          this.openDragLock();
        this.openDragLock = setDragLock(drag);
        if (!this.openDragLock)
          return;
      }
      this.latestPointerEvent = event;
      this.latestPanInfo = info;
      this.isDragging = true;
      this.currentDirection = null;
      this.resolveConstraints();
      if (this.visualElement.projection) {
        this.visualElement.projection.isAnimationBlocked = true;
        this.visualElement.projection.target = undefined;
      }
      eachAxis((axis) => {
        let current = this.getAxisMotionValue(axis).get() || 0;
        if (percent.test(current)) {
          const { projection } = this.visualElement;
          if (projection && projection.layout) {
            const measuredAxis = projection.layout.layoutBox[axis];
            if (measuredAxis) {
              const length = calcLength(measuredAxis);
              current = length * (parseFloat(current) / 100);
            }
          }
        }
        this.originPoint[axis] = current;
      });
      if (onDragStart) {
        frame.postRender(() => onDragStart(event, info));
      }
      addValueToWillChange(this.visualElement, "transform");
      const { animationState } = this.visualElement;
      animationState && animationState.setActive("whileDrag", true);
    };
    const onMove = (event, info) => {
      this.latestPointerEvent = event;
      this.latestPanInfo = info;
      const { dragPropagation, dragDirectionLock, onDirectionLock, onDrag } = this.getProps();
      if (!dragPropagation && !this.openDragLock)
        return;
      const { offset } = info;
      if (dragDirectionLock && this.currentDirection === null) {
        this.currentDirection = getCurrentDirection(offset);
        if (this.currentDirection !== null) {
          onDirectionLock && onDirectionLock(this.currentDirection);
        }
        return;
      }
      this.updateAxis("x", info.point, offset);
      this.updateAxis("y", info.point, offset);
      this.visualElement.render();
      onDrag && onDrag(event, info);
    };
    const onSessionEnd = (event, info) => {
      this.latestPointerEvent = event;
      this.latestPanInfo = info;
      this.stop(event, info);
      this.latestPointerEvent = null;
      this.latestPanInfo = null;
    };
    const resumeAnimation = () => eachAxis((axis) => this.getAnimationState(axis) === "paused" && this.getAxisMotionValue(axis).animation?.play());
    const { dragSnapToOrigin } = this.getProps();
    this.panSession = new PanSession(originEvent, {
      onSessionStart,
      onStart,
      onMove,
      onSessionEnd,
      resumeAnimation
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      dragSnapToOrigin,
      distanceThreshold,
      contextWindow: getContextWindow(this.visualElement)
    });
  }
  stop(event, panInfo) {
    const finalEvent = event || this.latestPointerEvent;
    const finalPanInfo = panInfo || this.latestPanInfo;
    const isDragging2 = this.isDragging;
    this.cancel();
    if (!isDragging2 || !finalPanInfo || !finalEvent)
      return;
    const { velocity } = finalPanInfo;
    this.startAnimation(velocity);
    const { onDragEnd } = this.getProps();
    if (onDragEnd) {
      frame.postRender(() => onDragEnd(finalEvent, finalPanInfo));
    }
  }
  cancel() {
    this.isDragging = false;
    const { projection, animationState } = this.visualElement;
    if (projection) {
      projection.isAnimationBlocked = false;
    }
    this.panSession && this.panSession.end();
    this.panSession = undefined;
    const { dragPropagation } = this.getProps();
    if (!dragPropagation && this.openDragLock) {
      this.openDragLock();
      this.openDragLock = null;
    }
    animationState && animationState.setActive("whileDrag", false);
  }
  updateAxis(axis, _point, offset) {
    const { drag } = this.getProps();
    if (!offset || !shouldDrag(axis, drag, this.currentDirection))
      return;
    const axisValue = this.getAxisMotionValue(axis);
    let next = this.originPoint[axis] + offset[axis];
    if (this.constraints && this.constraints[axis]) {
      next = applyConstraints(next, this.constraints[axis], this.elastic[axis]);
    }
    axisValue.set(next);
  }
  resolveConstraints() {
    const { dragConstraints, dragElastic } = this.getProps();
    const layout = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(false) : this.visualElement.projection?.layout;
    const prevConstraints = this.constraints;
    if (dragConstraints && isRefObject(dragConstraints)) {
      if (!this.constraints) {
        this.constraints = this.resolveRefConstraints();
      }
    } else {
      if (dragConstraints && layout) {
        this.constraints = calcRelativeConstraints(layout.layoutBox, dragConstraints);
      } else {
        this.constraints = false;
      }
    }
    this.elastic = resolveDragElastic(dragElastic);
    if (prevConstraints !== this.constraints && layout && this.constraints && !this.hasMutatedConstraints) {
      eachAxis((axis) => {
        if (this.constraints !== false && this.getAxisMotionValue(axis)) {
          this.constraints[axis] = rebaseAxisConstraints(layout.layoutBox[axis], this.constraints[axis]);
        }
      });
    }
  }
  resolveRefConstraints() {
    const { dragConstraints: constraints, onMeasureDragConstraints } = this.getProps();
    if (!constraints || !isRefObject(constraints))
      return false;
    const constraintsElement = constraints.current;
    invariant(constraintsElement !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.", "drag-constraints-ref");
    const { projection } = this.visualElement;
    if (!projection || !projection.layout)
      return false;
    const constraintsBox = measurePageBox(constraintsElement, projection.root, this.visualElement.getTransformPagePoint());
    let measuredConstraints = calcViewportConstraints(projection.layout.layoutBox, constraintsBox);
    if (onMeasureDragConstraints) {
      const userConstraints = onMeasureDragConstraints(convertBoxToBoundingBox(measuredConstraints));
      this.hasMutatedConstraints = !!userConstraints;
      if (userConstraints) {
        measuredConstraints = convertBoundingBoxToBox(userConstraints);
      }
    }
    return measuredConstraints;
  }
  startAnimation(velocity) {
    const { drag, dragMomentum, dragElastic, dragTransition, dragSnapToOrigin, onDragTransitionEnd } = this.getProps();
    const constraints = this.constraints || {};
    const momentumAnimations = eachAxis((axis) => {
      if (!shouldDrag(axis, drag, this.currentDirection)) {
        return;
      }
      let transition = constraints && constraints[axis] || {};
      if (dragSnapToOrigin)
        transition = { min: 0, max: 0 };
      const bounceStiffness = dragElastic ? 200 : 1e6;
      const bounceDamping = dragElastic ? 40 : 1e7;
      const inertia2 = {
        type: "inertia",
        velocity: dragMomentum ? velocity[axis] : 0,
        bounceStiffness,
        bounceDamping,
        timeConstant: 750,
        restDelta: 1,
        restSpeed: 10,
        ...dragTransition,
        ...transition
      };
      return this.startAxisValueAnimation(axis, inertia2);
    });
    return Promise.all(momentumAnimations).then(onDragTransitionEnd);
  }
  startAxisValueAnimation(axis, transition) {
    const axisValue = this.getAxisMotionValue(axis);
    addValueToWillChange(this.visualElement, axis);
    return axisValue.start(animateMotionValue(axis, axisValue, 0, transition, this.visualElement, false));
  }
  stopAnimation() {
    eachAxis((axis) => this.getAxisMotionValue(axis).stop());
  }
  pauseAnimation() {
    eachAxis((axis) => this.getAxisMotionValue(axis).animation?.pause());
  }
  getAnimationState(axis) {
    return this.getAxisMotionValue(axis).animation?.state;
  }
  getAxisMotionValue(axis) {
    const dragKey = `_drag${axis.toUpperCase()}`;
    const props = this.visualElement.getProps();
    const externalMotionValue = props[dragKey];
    return externalMotionValue ? externalMotionValue : this.visualElement.getValue(axis, (props.initial ? props.initial[axis] : undefined) || 0);
  }
  snapToCursor(point) {
    eachAxis((axis) => {
      const { drag } = this.getProps();
      if (!shouldDrag(axis, drag, this.currentDirection))
        return;
      const { projection } = this.visualElement;
      const axisValue = this.getAxisMotionValue(axis);
      if (projection && projection.layout) {
        const { min, max } = projection.layout.layoutBox[axis];
        axisValue.set(point[axis] - mixNumber(min, max, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current)
      return;
    const { drag, dragConstraints } = this.getProps();
    const { projection } = this.visualElement;
    if (!isRefObject(dragConstraints) || !projection || !this.constraints)
      return;
    this.stopAnimation();
    const boxProgress = { x: 0, y: 0 };
    eachAxis((axis) => {
      const axisValue = this.getAxisMotionValue(axis);
      if (axisValue && this.constraints !== false) {
        const latest = axisValue.get();
        boxProgress[axis] = calcOrigin({ min: latest, max: latest }, this.constraints[axis]);
      }
    });
    const { transformTemplate } = this.visualElement.getProps();
    this.visualElement.current.style.transform = transformTemplate ? transformTemplate({}, "") : "none";
    projection.root && projection.root.updateScroll();
    projection.updateLayout();
    this.resolveConstraints();
    eachAxis((axis) => {
      if (!shouldDrag(axis, drag, null))
        return;
      const axisValue = this.getAxisMotionValue(axis);
      const { min, max } = this.constraints[axis];
      axisValue.set(mixNumber(min, max, boxProgress[axis]));
    });
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    elementDragControls.set(this.visualElement, this);
    const element = this.visualElement.current;
    const stopPointerListener = addPointerEvent(element, "pointerdown", (event) => {
      const { drag, dragListener = true } = this.getProps();
      drag && dragListener && this.start(event);
    });
    const measureDragConstraints = () => {
      const { dragConstraints } = this.getProps();
      if (isRefObject(dragConstraints) && dragConstraints.current) {
        this.constraints = this.resolveRefConstraints();
      }
    };
    const { projection } = this.visualElement;
    const stopMeasureLayoutListener = projection.addEventListener("measure", measureDragConstraints);
    if (projection && !projection.layout) {
      projection.root && projection.root.updateScroll();
      projection.updateLayout();
    }
    frame.read(measureDragConstraints);
    const stopResizeListener = addDomEvent(window, "resize", () => this.scalePositionWithinConstraints());
    const stopLayoutUpdateListener = projection.addEventListener("didUpdate", ({ delta, hasLayoutChanged }) => {
      if (this.isDragging && hasLayoutChanged) {
        eachAxis((axis) => {
          const motionValue2 = this.getAxisMotionValue(axis);
          if (!motionValue2)
            return;
          this.originPoint[axis] += delta[axis].translate;
          motionValue2.set(motionValue2.get() + delta[axis].translate);
        });
        this.visualElement.render();
      }
    });
    return () => {
      stopResizeListener();
      stopPointerListener();
      stopMeasureLayoutListener();
      stopLayoutUpdateListener && stopLayoutUpdateListener();
    };
  }
  getProps() {
    const props = this.visualElement.getProps();
    const { drag = false, dragDirectionLock = false, dragPropagation = false, dragConstraints = false, dragElastic = defaultElastic, dragMomentum = true } = props;
    return {
      ...props,
      drag,
      dragDirectionLock,
      dragPropagation,
      dragConstraints,
      dragElastic,
      dragMomentum
    };
  }
}
function shouldDrag(direction, drag, currentDirection) {
  return (drag === true || drag === direction) && (currentDirection === null || currentDirection === direction);
}
function getCurrentDirection(offset, lockThreshold = 10) {
  let direction = null;
  if (Math.abs(offset.y) > lockThreshold) {
    direction = "y";
  } else if (Math.abs(offset.x) > lockThreshold) {
    direction = "x";
  }
  return direction;
}

// node_modules/framer-motion/dist/es/gestures/drag/index.mjs
class DragGesture extends Feature {
  constructor(node) {
    super(node);
    this.removeGroupControls = noop;
    this.removeListeners = noop;
    this.controls = new VisualElementDragControls(node);
  }
  mount() {
    const { dragControls } = this.node.getProps();
    if (dragControls) {
      this.removeGroupControls = dragControls.subscribe(this.controls);
    }
    this.removeListeners = this.controls.addListeners() || noop;
  }
  unmount() {
    this.removeGroupControls();
    this.removeListeners();
  }
}

// node_modules/framer-motion/dist/es/gestures/pan/index.mjs
var asyncHandler = (handler) => (event, info) => {
  if (handler) {
    frame.postRender(() => handler(event, info));
  }
};

class PanGesture extends Feature {
  constructor() {
    super(...arguments);
    this.removePointerDownListener = noop;
  }
  onPointerDown(pointerDownEvent) {
    this.session = new PanSession(pointerDownEvent, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: getContextWindow(this.node)
    });
  }
  createPanHandlers() {
    const { onPanSessionStart, onPanStart, onPan, onPanEnd } = this.node.getProps();
    return {
      onSessionStart: asyncHandler(onPanSessionStart),
      onStart: asyncHandler(onPanStart),
      onMove: onPan,
      onEnd: (event, info) => {
        delete this.session;
        if (onPanEnd) {
          frame.postRender(() => onPanEnd(event, info));
        }
      }
    };
  }
  mount() {
    this.removePointerDownListener = addPointerEvent(this.node.current, "pointerdown", (event) => this.onPointerDown(event));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener();
    this.session && this.session.end();
  }
}

// node_modules/framer-motion/dist/es/motion/features/layout/MeasureLayout.mjs
var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);
var import_react20 = __toESM(require_react(), 1);

// node_modules/framer-motion/dist/es/projection/node/state.mjs
var globalProjectionState = {
  hasAnimatedSinceResize: true,
  hasEverUpdated: false
};

// node_modules/framer-motion/dist/es/projection/styles/scale-border-radius.mjs
function pixelsToPercent(pixels, axis) {
  if (axis.max === axis.min)
    return 0;
  return pixels / (axis.max - axis.min) * 100;
}
var correctBorderRadius = {
  correct: (latest, node) => {
    if (!node.target)
      return latest;
    if (typeof latest === "string") {
      if (px.test(latest)) {
        latest = parseFloat(latest);
      } else {
        return latest;
      }
    }
    const x = pixelsToPercent(latest, node.target.x);
    const y = pixelsToPercent(latest, node.target.y);
    return `${x}% ${y}%`;
  }
};

// node_modules/framer-motion/dist/es/projection/styles/scale-box-shadow.mjs
var correctBoxShadow = {
  correct: (latest, { treeScale, projectionDelta }) => {
    const original = latest;
    const shadow = complex.parse(latest);
    if (shadow.length > 5)
      return original;
    const template = complex.createTransformer(latest);
    const offset = typeof shadow[0] !== "number" ? 1 : 0;
    const xScale = projectionDelta.x.scale * treeScale.x;
    const yScale = projectionDelta.y.scale * treeScale.y;
    shadow[0 + offset] /= xScale;
    shadow[1 + offset] /= yScale;
    const averageScale = mixNumber(xScale, yScale, 0.5);
    if (typeof shadow[2 + offset] === "number")
      shadow[2 + offset] /= averageScale;
    if (typeof shadow[3 + offset] === "number")
      shadow[3 + offset] /= averageScale;
    return template(shadow);
  }
};

// node_modules/framer-motion/dist/es/motion/features/layout/MeasureLayout.mjs
"use client";
var hasTakenAnySnapshot = false;

class MeasureLayoutWithContext extends import_react20.Component {
  componentDidMount() {
    const { visualElement, layoutGroup, switchLayoutGroup, layoutId } = this.props;
    const { projection } = visualElement;
    addScaleCorrector(defaultScaleCorrectors);
    if (projection) {
      if (layoutGroup.group)
        layoutGroup.group.add(projection);
      if (switchLayoutGroup && switchLayoutGroup.register && layoutId) {
        switchLayoutGroup.register(projection);
      }
      if (hasTakenAnySnapshot) {
        projection.root.didUpdate();
      }
      projection.addEventListener("animationComplete", () => {
        this.safeToRemove();
      });
      projection.setOptions({
        ...projection.options,
        onExitComplete: () => this.safeToRemove()
      });
    }
    globalProjectionState.hasEverUpdated = true;
  }
  getSnapshotBeforeUpdate(prevProps) {
    const { layoutDependency, visualElement, drag, isPresent } = this.props;
    const { projection } = visualElement;
    if (!projection)
      return null;
    projection.isPresent = isPresent;
    hasTakenAnySnapshot = true;
    if (drag || prevProps.layoutDependency !== layoutDependency || layoutDependency === undefined || prevProps.isPresent !== isPresent) {
      projection.willUpdate();
    } else {
      this.safeToRemove();
    }
    if (prevProps.isPresent !== isPresent) {
      if (isPresent) {
        projection.promote();
      } else if (!projection.relegate()) {
        frame.postRender(() => {
          const stack = projection.getStack();
          if (!stack || !stack.members.length) {
            this.safeToRemove();
          }
        });
      }
    }
    return null;
  }
  componentDidUpdate() {
    const { projection } = this.props.visualElement;
    if (projection) {
      projection.root.didUpdate();
      microtask.postRender(() => {
        if (!projection.currentAnimation && projection.isLead()) {
          this.safeToRemove();
        }
      });
    }
  }
  componentWillUnmount() {
    const { visualElement, layoutGroup, switchLayoutGroup: promoteContext } = this.props;
    const { projection } = visualElement;
    hasTakenAnySnapshot = true;
    if (projection) {
      projection.scheduleCheckAfterUnmount();
      if (layoutGroup && layoutGroup.group)
        layoutGroup.group.remove(projection);
      if (promoteContext && promoteContext.deregister)
        promoteContext.deregister(projection);
    }
  }
  safeToRemove() {
    const { safeToRemove } = this.props;
    safeToRemove && safeToRemove();
  }
  render() {
    return null;
  }
}
function MeasureLayout(props) {
  const [isPresent, safeToRemove] = usePresence();
  const layoutGroup = import_react20.useContext(LayoutGroupContext);
  return import_jsx_runtime2.jsx(MeasureLayoutWithContext, { ...props, layoutGroup, switchLayoutGroup: import_react20.useContext(SwitchLayoutGroupContext), isPresent, safeToRemove });
}
var defaultScaleCorrectors = {
  borderRadius: {
    ...correctBorderRadius,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius"
    ]
  },
  borderTopLeftRadius: correctBorderRadius,
  borderTopRightRadius: correctBorderRadius,
  borderBottomLeftRadius: correctBorderRadius,
  borderBottomRightRadius: correctBorderRadius,
  boxShadow: correctBoxShadow
};

// node_modules/framer-motion/dist/es/animation/animate/single-value.mjs
function animateSingleValue(value, keyframes2, options) {
  const motionValue$1 = isMotionValue(value) ? value : motionValue(value);
  motionValue$1.start(animateMotionValue("", motionValue$1, keyframes2, options));
  return motionValue$1.animation;
}

// node_modules/framer-motion/dist/es/render/utils/compare-by-depth.mjs
var compareByDepth = (a, b) => a.depth - b.depth;

// node_modules/framer-motion/dist/es/render/utils/flat-tree.mjs
class FlatTree {
  constructor() {
    this.children = [];
    this.isDirty = false;
  }
  add(child) {
    addUniqueItem(this.children, child);
    this.isDirty = true;
  }
  remove(child) {
    removeItem(this.children, child);
    this.isDirty = true;
  }
  forEach(callback) {
    this.isDirty && this.children.sort(compareByDepth);
    this.isDirty = false;
    this.children.forEach(callback);
  }
}

// node_modules/framer-motion/dist/es/utils/delay.mjs
function delay(callback, timeout) {
  const start = time.now();
  const checkElapsed = ({ timestamp }) => {
    const elapsed = timestamp - start;
    if (elapsed >= timeout) {
      cancelFrame(checkElapsed);
      callback(elapsed - timeout);
    }
  };
  frame.setup(checkElapsed, true);
  return () => cancelFrame(checkElapsed);
}

// node_modules/framer-motion/dist/es/projection/animation/mix-values.mjs
var borders = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"];
var numBorders = borders.length;
var asNumber = (value) => typeof value === "string" ? parseFloat(value) : value;
var isPx = (value) => typeof value === "number" || px.test(value);
function mixValues(target, follow, lead, progress2, shouldCrossfadeOpacity, isOnlyMember) {
  if (shouldCrossfadeOpacity) {
    target.opacity = mixNumber(0, lead.opacity ?? 1, easeCrossfadeIn(progress2));
    target.opacityExit = mixNumber(follow.opacity ?? 1, 0, easeCrossfadeOut(progress2));
  } else if (isOnlyMember) {
    target.opacity = mixNumber(follow.opacity ?? 1, lead.opacity ?? 1, progress2);
  }
  for (let i = 0;i < numBorders; i++) {
    const borderLabel = `border${borders[i]}Radius`;
    let followRadius = getRadius(follow, borderLabel);
    let leadRadius = getRadius(lead, borderLabel);
    if (followRadius === undefined && leadRadius === undefined)
      continue;
    followRadius || (followRadius = 0);
    leadRadius || (leadRadius = 0);
    const canMix = followRadius === 0 || leadRadius === 0 || isPx(followRadius) === isPx(leadRadius);
    if (canMix) {
      target[borderLabel] = Math.max(mixNumber(asNumber(followRadius), asNumber(leadRadius), progress2), 0);
      if (percent.test(leadRadius) || percent.test(followRadius)) {
        target[borderLabel] += "%";
      }
    } else {
      target[borderLabel] = leadRadius;
    }
  }
  if (follow.rotate || lead.rotate) {
    target.rotate = mixNumber(follow.rotate || 0, lead.rotate || 0, progress2);
  }
}
function getRadius(values, radiusName) {
  return values[radiusName] !== undefined ? values[radiusName] : values.borderRadius;
}
var easeCrossfadeIn = /* @__PURE__ */ compress(0, 0.5, circOut);
var easeCrossfadeOut = /* @__PURE__ */ compress(0.5, 0.95, noop);
function compress(min, max, easing) {
  return (p) => {
    if (p < min)
      return 0;
    if (p > max)
      return 1;
    return easing(progress(min, max, p));
  };
}

// node_modules/framer-motion/dist/es/projection/geometry/copy.mjs
function copyAxisInto(axis, originAxis) {
  axis.min = originAxis.min;
  axis.max = originAxis.max;
}
function copyBoxInto(box, originBox) {
  copyAxisInto(box.x, originBox.x);
  copyAxisInto(box.y, originBox.y);
}
function copyAxisDeltaInto(delta, originDelta) {
  delta.translate = originDelta.translate;
  delta.scale = originDelta.scale;
  delta.originPoint = originDelta.originPoint;
  delta.origin = originDelta.origin;
}

// node_modules/framer-motion/dist/es/projection/geometry/delta-remove.mjs
function removePointDelta(point, translate, scale2, originPoint, boxScale) {
  point -= translate;
  point = scalePoint(point, 1 / scale2, originPoint);
  if (boxScale !== undefined) {
    point = scalePoint(point, 1 / boxScale, originPoint);
  }
  return point;
}
function removeAxisDelta(axis, translate = 0, scale2 = 1, origin = 0.5, boxScale, originAxis = axis, sourceAxis = axis) {
  if (percent.test(translate)) {
    translate = parseFloat(translate);
    const relativeProgress = mixNumber(sourceAxis.min, sourceAxis.max, translate / 100);
    translate = relativeProgress - sourceAxis.min;
  }
  if (typeof translate !== "number")
    return;
  let originPoint = mixNumber(originAxis.min, originAxis.max, origin);
  if (axis === originAxis)
    originPoint -= translate;
  axis.min = removePointDelta(axis.min, translate, scale2, originPoint, boxScale);
  axis.max = removePointDelta(axis.max, translate, scale2, originPoint, boxScale);
}
function removeAxisTransforms(axis, transforms, [key, scaleKey, originKey], origin, sourceAxis) {
  removeAxisDelta(axis, transforms[key], transforms[scaleKey], transforms[originKey], transforms.scale, origin, sourceAxis);
}
var xKeys = ["x", "scaleX", "originX"];
var yKeys = ["y", "scaleY", "originY"];
function removeBoxTransforms(box, transforms, originBox, sourceBox) {
  removeAxisTransforms(box.x, transforms, xKeys, originBox ? originBox.x : undefined, sourceBox ? sourceBox.x : undefined);
  removeAxisTransforms(box.y, transforms, yKeys, originBox ? originBox.y : undefined, sourceBox ? sourceBox.y : undefined);
}

// node_modules/framer-motion/dist/es/projection/geometry/utils.mjs
function isAxisDeltaZero(delta) {
  return delta.translate === 0 && delta.scale === 1;
}
function isDeltaZero(delta) {
  return isAxisDeltaZero(delta.x) && isAxisDeltaZero(delta.y);
}
function axisEquals(a, b) {
  return a.min === b.min && a.max === b.max;
}
function boxEquals(a, b) {
  return axisEquals(a.x, b.x) && axisEquals(a.y, b.y);
}
function axisEqualsRounded(a, b) {
  return Math.round(a.min) === Math.round(b.min) && Math.round(a.max) === Math.round(b.max);
}
function boxEqualsRounded(a, b) {
  return axisEqualsRounded(a.x, b.x) && axisEqualsRounded(a.y, b.y);
}
function aspectRatio(box) {
  return calcLength(box.x) / calcLength(box.y);
}
function axisDeltaEquals(a, b) {
  return a.translate === b.translate && a.scale === b.scale && a.originPoint === b.originPoint;
}

// node_modules/framer-motion/dist/es/projection/shared/stack.mjs
class NodeStack {
  constructor() {
    this.members = [];
  }
  add(node) {
    addUniqueItem(this.members, node);
    node.scheduleRender();
  }
  remove(node) {
    removeItem(this.members, node);
    if (node === this.prevLead) {
      this.prevLead = undefined;
    }
    if (node === this.lead) {
      const prevLead = this.members[this.members.length - 1];
      if (prevLead) {
        this.promote(prevLead);
      }
    }
  }
  relegate(node) {
    const indexOfNode = this.members.findIndex((member) => node === member);
    if (indexOfNode === 0)
      return false;
    let prevLead;
    for (let i = indexOfNode;i >= 0; i--) {
      const member = this.members[i];
      if (member.isPresent !== false) {
        prevLead = member;
        break;
      }
    }
    if (prevLead) {
      this.promote(prevLead);
      return true;
    } else {
      return false;
    }
  }
  promote(node, preserveFollowOpacity) {
    const prevLead = this.lead;
    if (node === prevLead)
      return;
    this.prevLead = prevLead;
    this.lead = node;
    node.show();
    if (prevLead) {
      prevLead.instance && prevLead.scheduleRender();
      node.scheduleRender();
      node.resumeFrom = prevLead;
      if (preserveFollowOpacity) {
        node.resumeFrom.preserveOpacity = true;
      }
      if (prevLead.snapshot) {
        node.snapshot = prevLead.snapshot;
        node.snapshot.latestValues = prevLead.animationValues || prevLead.latestValues;
      }
      if (node.root && node.root.isUpdating) {
        node.isLayoutDirty = true;
      }
      const { crossfade } = node.options;
      if (crossfade === false) {
        prevLead.hide();
      }
    }
  }
  exitAnimationComplete() {
    this.members.forEach((node) => {
      const { options, resumingFrom } = node;
      options.onExitComplete && options.onExitComplete();
      if (resumingFrom) {
        resumingFrom.options.onExitComplete && resumingFrom.options.onExitComplete();
      }
    });
  }
  scheduleRender() {
    this.members.forEach((node) => {
      node.instance && node.scheduleRender(false);
    });
  }
  removeLeadSnapshot() {
    if (this.lead && this.lead.snapshot) {
      this.lead.snapshot = undefined;
    }
  }
}

// node_modules/framer-motion/dist/es/projection/styles/transform.mjs
function buildProjectionTransform(delta, treeScale, latestTransform) {
  let transform = "";
  const xTranslate = delta.x.translate / treeScale.x;
  const yTranslate = delta.y.translate / treeScale.y;
  const zTranslate = latestTransform?.z || 0;
  if (xTranslate || yTranslate || zTranslate) {
    transform = `translate3d(${xTranslate}px, ${yTranslate}px, ${zTranslate}px) `;
  }
  if (treeScale.x !== 1 || treeScale.y !== 1) {
    transform += `scale(${1 / treeScale.x}, ${1 / treeScale.y}) `;
  }
  if (latestTransform) {
    const { transformPerspective, rotate: rotate2, rotateX, rotateY, skewX, skewY } = latestTransform;
    if (transformPerspective)
      transform = `perspective(${transformPerspective}px) ${transform}`;
    if (rotate2)
      transform += `rotate(${rotate2}deg) `;
    if (rotateX)
      transform += `rotateX(${rotateX}deg) `;
    if (rotateY)
      transform += `rotateY(${rotateY}deg) `;
    if (skewX)
      transform += `skewX(${skewX}deg) `;
    if (skewY)
      transform += `skewY(${skewY}deg) `;
  }
  const elementScaleX = delta.x.scale * treeScale.x;
  const elementScaleY = delta.y.scale * treeScale.y;
  if (elementScaleX !== 1 || elementScaleY !== 1) {
    transform += `scale(${elementScaleX}, ${elementScaleY})`;
  }
  return transform || "none";
}

// node_modules/framer-motion/dist/es/projection/node/create-projection-node.mjs
var metrics = {
  nodes: 0,
  calculatedTargetDeltas: 0,
  calculatedProjections: 0
};
var transformAxes = ["", "X", "Y", "Z"];
var animationTarget = 1000;
var id2 = 0;
function resetDistortingTransform(key, visualElement, values, sharedAnimationValues) {
  const { latestValues } = visualElement;
  if (latestValues[key]) {
    values[key] = latestValues[key];
    visualElement.setStaticValue(key, 0);
    if (sharedAnimationValues) {
      sharedAnimationValues[key] = 0;
    }
  }
}
function cancelTreeOptimisedTransformAnimations(projectionNode) {
  projectionNode.hasCheckedOptimisedAppear = true;
  if (projectionNode.root === projectionNode)
    return;
  const { visualElement } = projectionNode.options;
  if (!visualElement)
    return;
  const appearId = getOptimisedAppearId(visualElement);
  if (window.MotionHasOptimisedAnimation(appearId, "transform")) {
    const { layout, layoutId } = projectionNode.options;
    window.MotionCancelOptimisedAnimation(appearId, "transform", frame, !(layout || layoutId));
  }
  const { parent } = projectionNode;
  if (parent && !parent.hasCheckedOptimisedAppear) {
    cancelTreeOptimisedTransformAnimations(parent);
  }
}
function createProjectionNode2({ attachResizeListener, defaultParent, measureScroll, checkIsScrollRoot, resetTransform }) {
  return class ProjectionNode {
    constructor(latestValues = {}, parent = defaultParent?.()) {
      this.id = id2++;
      this.animationId = 0;
      this.animationCommitId = 0;
      this.children = new Set;
      this.options = {};
      this.isTreeAnimating = false;
      this.isAnimationBlocked = false;
      this.isLayoutDirty = false;
      this.isProjectionDirty = false;
      this.isSharedProjectionDirty = false;
      this.isTransformDirty = false;
      this.updateManuallyBlocked = false;
      this.updateBlockedByResize = false;
      this.isUpdating = false;
      this.isSVG = false;
      this.needsReset = false;
      this.shouldResetTransform = false;
      this.hasCheckedOptimisedAppear = false;
      this.treeScale = { x: 1, y: 1 };
      this.eventHandlers = new Map;
      this.hasTreeAnimated = false;
      this.updateScheduled = false;
      this.scheduleUpdate = () => this.update();
      this.projectionUpdateScheduled = false;
      this.checkUpdateFailed = () => {
        if (this.isUpdating) {
          this.isUpdating = false;
          this.clearAllSnapshots();
        }
      };
      this.updateProjection = () => {
        this.projectionUpdateScheduled = false;
        if (statsBuffer.value) {
          metrics.nodes = metrics.calculatedTargetDeltas = metrics.calculatedProjections = 0;
        }
        this.nodes.forEach(propagateDirtyNodes);
        this.nodes.forEach(resolveTargetDelta);
        this.nodes.forEach(calcProjection);
        this.nodes.forEach(cleanDirtyNodes);
        if (statsBuffer.addProjectionMetrics) {
          statsBuffer.addProjectionMetrics(metrics);
        }
      };
      this.resolvedRelativeTargetAt = 0;
      this.hasProjected = false;
      this.isVisible = true;
      this.animationProgress = 0;
      this.sharedNodes = new Map;
      this.latestValues = latestValues;
      this.root = parent ? parent.root || parent : this;
      this.path = parent ? [...parent.path, parent] : [];
      this.parent = parent;
      this.depth = parent ? parent.depth + 1 : 0;
      for (let i = 0;i < this.path.length; i++) {
        this.path[i].shouldResetTransform = true;
      }
      if (this.root === this)
        this.nodes = new FlatTree;
    }
    addEventListener(name, handler) {
      if (!this.eventHandlers.has(name)) {
        this.eventHandlers.set(name, new SubscriptionManager);
      }
      return this.eventHandlers.get(name).add(handler);
    }
    notifyListeners(name, ...args) {
      const subscriptionManager = this.eventHandlers.get(name);
      subscriptionManager && subscriptionManager.notify(...args);
    }
    hasListeners(name) {
      return this.eventHandlers.has(name);
    }
    mount(instance) {
      if (this.instance)
        return;
      this.isSVG = isSVGElement(instance) && !isSVGSVGElement(instance);
      this.instance = instance;
      const { layoutId, layout, visualElement } = this.options;
      if (visualElement && !visualElement.current) {
        visualElement.mount(instance);
      }
      this.root.nodes.add(this);
      this.parent && this.parent.children.add(this);
      if (this.root.hasTreeAnimated && (layout || layoutId)) {
        this.isLayoutDirty = true;
      }
      if (attachResizeListener) {
        let cancelDelay;
        let innerWidth = 0;
        const resizeUnblockUpdate = () => this.root.updateBlockedByResize = false;
        frame.read(() => {
          innerWidth = window.innerWidth;
        });
        attachResizeListener(instance, () => {
          const newInnerWidth = window.innerWidth;
          if (newInnerWidth === innerWidth)
            return;
          innerWidth = newInnerWidth;
          this.root.updateBlockedByResize = true;
          cancelDelay && cancelDelay();
          cancelDelay = delay(resizeUnblockUpdate, 250);
          if (globalProjectionState.hasAnimatedSinceResize) {
            globalProjectionState.hasAnimatedSinceResize = false;
            this.nodes.forEach(finishAnimation);
          }
        });
      }
      if (layoutId) {
        this.root.registerSharedNode(layoutId, this);
      }
      if (this.options.animate !== false && visualElement && (layoutId || layout)) {
        this.addEventListener("didUpdate", ({ delta, hasLayoutChanged, hasRelativeLayoutChanged, layout: newLayout }) => {
          if (this.isTreeAnimationBlocked()) {
            this.target = undefined;
            this.relativeTarget = undefined;
            return;
          }
          const layoutTransition = this.options.transition || visualElement.getDefaultTransition() || defaultLayoutTransition;
          const { onLayoutAnimationStart, onLayoutAnimationComplete } = visualElement.getProps();
          const hasTargetChanged = !this.targetLayout || !boxEqualsRounded(this.targetLayout, newLayout);
          const hasOnlyRelativeTargetChanged = !hasLayoutChanged && hasRelativeLayoutChanged;
          if (this.options.layoutRoot || this.resumeFrom || hasOnlyRelativeTargetChanged || hasLayoutChanged && (hasTargetChanged || !this.currentAnimation)) {
            if (this.resumeFrom) {
              this.resumingFrom = this.resumeFrom;
              this.resumingFrom.resumingFrom = undefined;
            }
            const animationOptions = {
              ...getValueTransition(layoutTransition, "layout"),
              onPlay: onLayoutAnimationStart,
              onComplete: onLayoutAnimationComplete
            };
            if (visualElement.shouldReduceMotion || this.options.layoutRoot) {
              animationOptions.delay = 0;
              animationOptions.type = false;
            }
            this.startAnimation(animationOptions);
            this.setAnimationOrigin(delta, hasOnlyRelativeTargetChanged);
          } else {
            if (!hasLayoutChanged) {
              finishAnimation(this);
            }
            if (this.isLead() && this.options.onExitComplete) {
              this.options.onExitComplete();
            }
          }
          this.targetLayout = newLayout;
        });
      }
    }
    unmount() {
      this.options.layoutId && this.willUpdate();
      this.root.nodes.remove(this);
      const stack = this.getStack();
      stack && stack.remove(this);
      this.parent && this.parent.children.delete(this);
      this.instance = undefined;
      this.eventHandlers.clear();
      cancelFrame(this.updateProjection);
    }
    blockUpdate() {
      this.updateManuallyBlocked = true;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = false;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || false;
    }
    startUpdate() {
      if (this.isUpdateBlocked())
        return;
      this.isUpdating = true;
      this.nodes && this.nodes.forEach(resetSkewAndRotation);
      this.animationId++;
    }
    getTransformTemplate() {
      const { visualElement } = this.options;
      return visualElement && visualElement.getProps().transformTemplate;
    }
    willUpdate(shouldNotifyListeners = true) {
      this.root.hasTreeAnimated = true;
      if (this.root.isUpdateBlocked()) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear) {
        cancelTreeOptimisedTransformAnimations(this);
      }
      !this.root.isUpdating && this.root.startUpdate();
      if (this.isLayoutDirty)
        return;
      this.isLayoutDirty = true;
      for (let i = 0;i < this.path.length; i++) {
        const node = this.path[i];
        node.shouldResetTransform = true;
        node.updateScroll("snapshot");
        if (node.options.layoutRoot) {
          node.willUpdate(false);
        }
      }
      const { layoutId, layout } = this.options;
      if (layoutId === undefined && !layout)
        return;
      const transformTemplate = this.getTransformTemplate();
      this.prevTransformTemplateValue = transformTemplate ? transformTemplate(this.latestValues, "") : undefined;
      this.updateSnapshot();
      shouldNotifyListeners && this.notifyListeners("willUpdate");
    }
    update() {
      this.updateScheduled = false;
      const updateWasBlocked = this.isUpdateBlocked();
      if (updateWasBlocked) {
        this.unblockUpdate();
        this.clearAllSnapshots();
        this.nodes.forEach(clearMeasurements);
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(clearIsLayoutDirty);
        return;
      }
      this.animationCommitId = this.animationId;
      if (!this.isUpdating) {
        this.nodes.forEach(clearIsLayoutDirty);
      } else {
        this.isUpdating = false;
        this.nodes.forEach(resetTransformStyle);
        this.nodes.forEach(updateLayout);
        this.nodes.forEach(notifyLayoutUpdate);
      }
      this.clearAllSnapshots();
      const now2 = time.now();
      frameData.delta = clamp(0, 1000 / 60, now2 - frameData.timestamp);
      frameData.timestamp = now2;
      frameData.isProcessing = true;
      frameSteps.update.process(frameData);
      frameSteps.preRender.process(frameData);
      frameSteps.render.process(frameData);
      frameData.isProcessing = false;
    }
    didUpdate() {
      if (!this.updateScheduled) {
        this.updateScheduled = true;
        microtask.read(this.scheduleUpdate);
      }
    }
    clearAllSnapshots() {
      this.nodes.forEach(clearSnapshot);
      this.sharedNodes.forEach(removeLeadSnapshots);
    }
    scheduleUpdateProjection() {
      if (!this.projectionUpdateScheduled) {
        this.projectionUpdateScheduled = true;
        frame.preRender(this.updateProjection, false, true);
      }
    }
    scheduleCheckAfterUnmount() {
      frame.postRender(() => {
        if (this.isLayoutDirty) {
          this.root.didUpdate();
        } else {
          this.root.checkUpdateFailed();
        }
      });
    }
    updateSnapshot() {
      if (this.snapshot || !this.instance)
        return;
      this.snapshot = this.measure();
      if (this.snapshot && !calcLength(this.snapshot.measuredBox.x) && !calcLength(this.snapshot.measuredBox.y)) {
        this.snapshot = undefined;
      }
    }
    updateLayout() {
      if (!this.instance)
        return;
      this.updateScroll();
      if (!(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty) {
        return;
      }
      if (this.resumeFrom && !this.resumeFrom.instance) {
        for (let i = 0;i < this.path.length; i++) {
          const node = this.path[i];
          node.updateScroll();
        }
      }
      const prevLayout = this.layout;
      this.layout = this.measure(false);
      this.layoutCorrected = createBox();
      this.isLayoutDirty = false;
      this.projectionDelta = undefined;
      this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement } = this.options;
      visualElement && visualElement.notify("LayoutMeasure", this.layout.layoutBox, prevLayout ? prevLayout.layoutBox : undefined);
    }
    updateScroll(phase = "measure") {
      let needsMeasurement = Boolean(this.options.layoutScroll && this.instance);
      if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === phase) {
        needsMeasurement = false;
      }
      if (needsMeasurement && this.instance) {
        const isRoot = checkIsScrollRoot(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase,
          isRoot,
          offset: measureScroll(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : isRoot
        };
      }
    }
    resetTransform() {
      if (!resetTransform)
        return;
      const isResetRequested = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout;
      const hasProjection = this.projectionDelta && !isDeltaZero(this.projectionDelta);
      const transformTemplate = this.getTransformTemplate();
      const transformTemplateValue = transformTemplate ? transformTemplate(this.latestValues, "") : undefined;
      const transformTemplateHasChanged = transformTemplateValue !== this.prevTransformTemplateValue;
      if (isResetRequested && this.instance && (hasProjection || hasTransform(this.latestValues) || transformTemplateHasChanged)) {
        resetTransform(this.instance, transformTemplateValue);
        this.shouldResetTransform = false;
        this.scheduleRender();
      }
    }
    measure(removeTransform = true) {
      const pageBox = this.measurePageBox();
      let layoutBox = this.removeElementScroll(pageBox);
      if (removeTransform) {
        layoutBox = this.removeTransform(layoutBox);
      }
      roundBox(layoutBox);
      return {
        animationId: this.root.animationId,
        measuredBox: pageBox,
        layoutBox,
        latestValues: {},
        source: this.id
      };
    }
    measurePageBox() {
      const { visualElement } = this.options;
      if (!visualElement)
        return createBox();
      const box = visualElement.measureViewportBox();
      const wasInScrollRoot = this.scroll?.wasRoot || this.path.some(checkNodeWasScrollRoot);
      if (!wasInScrollRoot) {
        const { scroll } = this.root;
        if (scroll) {
          translateAxis(box.x, scroll.offset.x);
          translateAxis(box.y, scroll.offset.y);
        }
      }
      return box;
    }
    removeElementScroll(box) {
      const boxWithoutScroll = createBox();
      copyBoxInto(boxWithoutScroll, box);
      if (this.scroll?.wasRoot) {
        return boxWithoutScroll;
      }
      for (let i = 0;i < this.path.length; i++) {
        const node = this.path[i];
        const { scroll, options } = node;
        if (node !== this.root && scroll && options.layoutScroll) {
          if (scroll.wasRoot) {
            copyBoxInto(boxWithoutScroll, box);
          }
          translateAxis(boxWithoutScroll.x, scroll.offset.x);
          translateAxis(boxWithoutScroll.y, scroll.offset.y);
        }
      }
      return boxWithoutScroll;
    }
    applyTransform(box, transformOnly = false) {
      const withTransforms = createBox();
      copyBoxInto(withTransforms, box);
      for (let i = 0;i < this.path.length; i++) {
        const node = this.path[i];
        if (!transformOnly && node.options.layoutScroll && node.scroll && node !== node.root) {
          transformBox(withTransforms, {
            x: -node.scroll.offset.x,
            y: -node.scroll.offset.y
          });
        }
        if (!hasTransform(node.latestValues))
          continue;
        transformBox(withTransforms, node.latestValues);
      }
      if (hasTransform(this.latestValues)) {
        transformBox(withTransforms, this.latestValues);
      }
      return withTransforms;
    }
    removeTransform(box) {
      const boxWithoutTransform = createBox();
      copyBoxInto(boxWithoutTransform, box);
      for (let i = 0;i < this.path.length; i++) {
        const node = this.path[i];
        if (!node.instance)
          continue;
        if (!hasTransform(node.latestValues))
          continue;
        hasScale(node.latestValues) && node.updateSnapshot();
        const sourceBox = createBox();
        const nodeBox = node.measurePageBox();
        copyBoxInto(sourceBox, nodeBox);
        removeBoxTransforms(boxWithoutTransform, node.latestValues, node.snapshot ? node.snapshot.layoutBox : undefined, sourceBox);
      }
      if (hasTransform(this.latestValues)) {
        removeBoxTransforms(boxWithoutTransform, this.latestValues);
      }
      return boxWithoutTransform;
    }
    setTargetDelta(delta) {
      this.targetDelta = delta;
      this.root.scheduleUpdateProjection();
      this.isProjectionDirty = true;
    }
    setOptions(options) {
      this.options = {
        ...this.options,
        ...options,
        crossfade: options.crossfade !== undefined ? options.crossfade : true
      };
    }
    clearMeasurements() {
      this.scroll = undefined;
      this.layout = undefined;
      this.snapshot = undefined;
      this.prevTransformTemplateValue = undefined;
      this.targetDelta = undefined;
      this.target = undefined;
      this.isLayoutDirty = false;
    }
    forceRelativeParentToResolveTarget() {
      if (!this.relativeParent)
        return;
      if (this.relativeParent.resolvedRelativeTargetAt !== frameData.timestamp) {
        this.relativeParent.resolveTargetDelta(true);
      }
    }
    resolveTargetDelta(forceRecalculation = false) {
      const lead = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = lead.isProjectionDirty);
      this.isTransformDirty || (this.isTransformDirty = lead.isTransformDirty);
      this.isSharedProjectionDirty || (this.isSharedProjectionDirty = lead.isSharedProjectionDirty);
      const isShared = Boolean(this.resumingFrom) || this !== lead;
      const canSkip = !(forceRecalculation || isShared && this.isSharedProjectionDirty || this.isProjectionDirty || this.parent?.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize);
      if (canSkip)
        return;
      const { layout, layoutId } = this.options;
      if (!this.layout || !(layout || layoutId))
        return;
      this.resolvedRelativeTargetAt = frameData.timestamp;
      if (!this.targetDelta && !this.relativeTarget) {
        const relativeParent = this.getClosestProjectingParent();
        if (relativeParent && relativeParent.layout && this.animationProgress !== 1) {
          this.relativeParent = relativeParent;
          this.forceRelativeParentToResolveTarget();
          this.relativeTarget = createBox();
          this.relativeTargetOrigin = createBox();
          calcRelativePosition(this.relativeTargetOrigin, this.layout.layoutBox, relativeParent.layout.layoutBox);
          copyBoxInto(this.relativeTarget, this.relativeTargetOrigin);
        } else {
          this.relativeParent = this.relativeTarget = undefined;
        }
      }
      if (!this.relativeTarget && !this.targetDelta)
        return;
      if (!this.target) {
        this.target = createBox();
        this.targetWithTransforms = createBox();
      }
      if (this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target) {
        this.forceRelativeParentToResolveTarget();
        calcRelativeBox(this.target, this.relativeTarget, this.relativeParent.target);
      } else if (this.targetDelta) {
        if (Boolean(this.resumingFrom)) {
          this.target = this.applyTransform(this.layout.layoutBox);
        } else {
          copyBoxInto(this.target, this.layout.layoutBox);
        }
        applyBoxDelta(this.target, this.targetDelta);
      } else {
        copyBoxInto(this.target, this.layout.layoutBox);
      }
      if (this.attemptToResolveRelativeTarget) {
        this.attemptToResolveRelativeTarget = false;
        const relativeParent = this.getClosestProjectingParent();
        if (relativeParent && Boolean(relativeParent.resumingFrom) === Boolean(this.resumingFrom) && !relativeParent.options.layoutScroll && relativeParent.target && this.animationProgress !== 1) {
          this.relativeParent = relativeParent;
          this.forceRelativeParentToResolveTarget();
          this.relativeTarget = createBox();
          this.relativeTargetOrigin = createBox();
          calcRelativePosition(this.relativeTargetOrigin, this.target, relativeParent.target);
          copyBoxInto(this.relativeTarget, this.relativeTargetOrigin);
        } else {
          this.relativeParent = this.relativeTarget = undefined;
        }
      }
      if (statsBuffer.value) {
        metrics.calculatedTargetDeltas++;
      }
    }
    getClosestProjectingParent() {
      if (!this.parent || hasScale(this.parent.latestValues) || has2DTranslate(this.parent.latestValues)) {
        return;
      }
      if (this.parent.isProjecting()) {
        return this.parent;
      } else {
        return this.parent.getClosestProjectingParent();
      }
    }
    isProjecting() {
      return Boolean((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    calcProjection() {
      const lead = this.getLead();
      const isShared = Boolean(this.resumingFrom) || this !== lead;
      let canSkip = true;
      if (this.isProjectionDirty || this.parent?.isProjectionDirty) {
        canSkip = false;
      }
      if (isShared && (this.isSharedProjectionDirty || this.isTransformDirty)) {
        canSkip = false;
      }
      if (this.resolvedRelativeTargetAt === frameData.timestamp) {
        canSkip = false;
      }
      if (canSkip)
        return;
      const { layout, layoutId } = this.options;
      this.isTreeAnimating = Boolean(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation);
      if (!this.isTreeAnimating) {
        this.targetDelta = this.relativeTarget = undefined;
      }
      if (!this.layout || !(layout || layoutId))
        return;
      copyBoxInto(this.layoutCorrected, this.layout.layoutBox);
      const prevTreeScaleX = this.treeScale.x;
      const prevTreeScaleY = this.treeScale.y;
      applyTreeDeltas(this.layoutCorrected, this.treeScale, this.path, isShared);
      if (lead.layout && !lead.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1)) {
        lead.target = lead.layout.layoutBox;
        lead.targetWithTransforms = createBox();
      }
      const { target } = lead;
      if (!target) {
        if (this.prevProjectionDelta) {
          this.createProjectionDeltas();
          this.scheduleRender();
        }
        return;
      }
      if (!this.projectionDelta || !this.prevProjectionDelta) {
        this.createProjectionDeltas();
      } else {
        copyAxisDeltaInto(this.prevProjectionDelta.x, this.projectionDelta.x);
        copyAxisDeltaInto(this.prevProjectionDelta.y, this.projectionDelta.y);
      }
      calcBoxDelta(this.projectionDelta, this.layoutCorrected, target, this.latestValues);
      if (this.treeScale.x !== prevTreeScaleX || this.treeScale.y !== prevTreeScaleY || !axisDeltaEquals(this.projectionDelta.x, this.prevProjectionDelta.x) || !axisDeltaEquals(this.projectionDelta.y, this.prevProjectionDelta.y)) {
        this.hasProjected = true;
        this.scheduleRender();
        this.notifyListeners("projectionUpdate", target);
      }
      if (statsBuffer.value) {
        metrics.calculatedProjections++;
      }
    }
    hide() {
      this.isVisible = false;
    }
    show() {
      this.isVisible = true;
    }
    scheduleRender(notifyAll = true) {
      this.options.visualElement?.scheduleRender();
      if (notifyAll) {
        const stack = this.getStack();
        stack && stack.scheduleRender();
      }
      if (this.resumingFrom && !this.resumingFrom.instance) {
        this.resumingFrom = undefined;
      }
    }
    createProjectionDeltas() {
      this.prevProjectionDelta = createDelta();
      this.projectionDelta = createDelta();
      this.projectionDeltaWithTransform = createDelta();
    }
    setAnimationOrigin(delta, hasOnlyRelativeTargetChanged = false) {
      const snapshot = this.snapshot;
      const snapshotLatestValues = snapshot ? snapshot.latestValues : {};
      const mixedValues = { ...this.latestValues };
      const targetDelta = createDelta();
      if (!this.relativeParent || !this.relativeParent.options.layoutRoot) {
        this.relativeTarget = this.relativeTargetOrigin = undefined;
      }
      this.attemptToResolveRelativeTarget = !hasOnlyRelativeTargetChanged;
      const relativeLayout = createBox();
      const snapshotSource = snapshot ? snapshot.source : undefined;
      const layoutSource = this.layout ? this.layout.source : undefined;
      const isSharedLayoutAnimation = snapshotSource !== layoutSource;
      const stack = this.getStack();
      const isOnlyMember = !stack || stack.members.length <= 1;
      const shouldCrossfadeOpacity = Boolean(isSharedLayoutAnimation && !isOnlyMember && this.options.crossfade === true && !this.path.some(hasOpacityCrossfade));
      this.animationProgress = 0;
      let prevRelativeTarget;
      this.mixTargetDelta = (latest) => {
        const progress2 = latest / 1000;
        mixAxisDelta(targetDelta.x, delta.x, progress2);
        mixAxisDelta(targetDelta.y, delta.y, progress2);
        this.setTargetDelta(targetDelta);
        if (this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout) {
          calcRelativePosition(relativeLayout, this.layout.layoutBox, this.relativeParent.layout.layoutBox);
          mixBox(this.relativeTarget, this.relativeTargetOrigin, relativeLayout, progress2);
          if (prevRelativeTarget && boxEquals(this.relativeTarget, prevRelativeTarget)) {
            this.isProjectionDirty = false;
          }
          if (!prevRelativeTarget)
            prevRelativeTarget = createBox();
          copyBoxInto(prevRelativeTarget, this.relativeTarget);
        }
        if (isSharedLayoutAnimation) {
          this.animationValues = mixedValues;
          mixValues(mixedValues, snapshotLatestValues, this.latestValues, progress2, shouldCrossfadeOpacity, isOnlyMember);
        }
        this.root.scheduleUpdateProjection();
        this.scheduleRender();
        this.animationProgress = progress2;
      };
      this.mixTargetDelta(this.options.layoutRoot ? 1000 : 0);
    }
    startAnimation(options) {
      this.notifyListeners("animationStart");
      this.currentAnimation?.stop();
      this.resumingFrom?.currentAnimation?.stop();
      if (this.pendingAnimation) {
        cancelFrame(this.pendingAnimation);
        this.pendingAnimation = undefined;
      }
      this.pendingAnimation = frame.update(() => {
        globalProjectionState.hasAnimatedSinceResize = true;
        activeAnimations.layout++;
        this.motionValue || (this.motionValue = motionValue(0));
        this.currentAnimation = animateSingleValue(this.motionValue, [0, 1000], {
          ...options,
          velocity: 0,
          isSync: true,
          onUpdate: (latest) => {
            this.mixTargetDelta(latest);
            options.onUpdate && options.onUpdate(latest);
          },
          onStop: () => {
            activeAnimations.layout--;
          },
          onComplete: () => {
            activeAnimations.layout--;
            options.onComplete && options.onComplete();
            this.completeAnimation();
          }
        });
        if (this.resumingFrom) {
          this.resumingFrom.currentAnimation = this.currentAnimation;
        }
        this.pendingAnimation = undefined;
      });
    }
    completeAnimation() {
      if (this.resumingFrom) {
        this.resumingFrom.currentAnimation = undefined;
        this.resumingFrom.preserveOpacity = undefined;
      }
      const stack = this.getStack();
      stack && stack.exitAnimationComplete();
      this.resumingFrom = this.currentAnimation = this.animationValues = undefined;
      this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      if (this.currentAnimation) {
        this.mixTargetDelta && this.mixTargetDelta(animationTarget);
        this.currentAnimation.stop();
      }
      this.completeAnimation();
    }
    applyTransformsToTarget() {
      const lead = this.getLead();
      let { targetWithTransforms, target, layout, latestValues } = lead;
      if (!targetWithTransforms || !target || !layout)
        return;
      if (this !== lead && this.layout && layout && shouldAnimatePositionOnly(this.options.animationType, this.layout.layoutBox, layout.layoutBox)) {
        target = this.target || createBox();
        const xLength = calcLength(this.layout.layoutBox.x);
        target.x.min = lead.target.x.min;
        target.x.max = target.x.min + xLength;
        const yLength = calcLength(this.layout.layoutBox.y);
        target.y.min = lead.target.y.min;
        target.y.max = target.y.min + yLength;
      }
      copyBoxInto(targetWithTransforms, target);
      transformBox(targetWithTransforms, latestValues);
      calcBoxDelta(this.projectionDeltaWithTransform, this.layoutCorrected, targetWithTransforms, latestValues);
    }
    registerSharedNode(layoutId, node) {
      if (!this.sharedNodes.has(layoutId)) {
        this.sharedNodes.set(layoutId, new NodeStack);
      }
      const stack = this.sharedNodes.get(layoutId);
      stack.add(node);
      const config = node.options.initialPromotionConfig;
      node.promote({
        transition: config ? config.transition : undefined,
        preserveFollowOpacity: config && config.shouldPreserveFollowOpacity ? config.shouldPreserveFollowOpacity(node) : undefined
      });
    }
    isLead() {
      const stack = this.getStack();
      return stack ? stack.lead === this : true;
    }
    getLead() {
      const { layoutId } = this.options;
      return layoutId ? this.getStack()?.lead || this : this;
    }
    getPrevLead() {
      const { layoutId } = this.options;
      return layoutId ? this.getStack()?.prevLead : undefined;
    }
    getStack() {
      const { layoutId } = this.options;
      if (layoutId)
        return this.root.sharedNodes.get(layoutId);
    }
    promote({ needsReset, transition, preserveFollowOpacity } = {}) {
      const stack = this.getStack();
      if (stack)
        stack.promote(this, preserveFollowOpacity);
      if (needsReset) {
        this.projectionDelta = undefined;
        this.needsReset = true;
      }
      if (transition)
        this.setOptions({ transition });
    }
    relegate() {
      const stack = this.getStack();
      if (stack) {
        return stack.relegate(this);
      } else {
        return false;
      }
    }
    resetSkewAndRotation() {
      const { visualElement } = this.options;
      if (!visualElement)
        return;
      let hasDistortingTransform = false;
      const { latestValues } = visualElement;
      if (latestValues.z || latestValues.rotate || latestValues.rotateX || latestValues.rotateY || latestValues.rotateZ || latestValues.skewX || latestValues.skewY) {
        hasDistortingTransform = true;
      }
      if (!hasDistortingTransform)
        return;
      const resetValues = {};
      if (latestValues.z) {
        resetDistortingTransform("z", visualElement, resetValues, this.animationValues);
      }
      for (let i = 0;i < transformAxes.length; i++) {
        resetDistortingTransform(`rotate${transformAxes[i]}`, visualElement, resetValues, this.animationValues);
        resetDistortingTransform(`skew${transformAxes[i]}`, visualElement, resetValues, this.animationValues);
      }
      visualElement.render();
      for (const key in resetValues) {
        visualElement.setStaticValue(key, resetValues[key]);
        if (this.animationValues) {
          this.animationValues[key] = resetValues[key];
        }
      }
      visualElement.scheduleRender();
    }
    applyProjectionStyles(targetStyle, styleProp) {
      if (!this.instance || this.isSVG)
        return;
      if (!this.isVisible) {
        targetStyle.visibility = "hidden";
        return;
      }
      const transformTemplate = this.getTransformTemplate();
      if (this.needsReset) {
        this.needsReset = false;
        targetStyle.visibility = "";
        targetStyle.opacity = "";
        targetStyle.pointerEvents = resolveMotionValue(styleProp?.pointerEvents) || "";
        targetStyle.transform = transformTemplate ? transformTemplate(this.latestValues, "") : "none";
        return;
      }
      const lead = this.getLead();
      if (!this.projectionDelta || !this.layout || !lead.target) {
        if (this.options.layoutId) {
          targetStyle.opacity = this.latestValues.opacity !== undefined ? this.latestValues.opacity : 1;
          targetStyle.pointerEvents = resolveMotionValue(styleProp?.pointerEvents) || "";
        }
        if (this.hasProjected && !hasTransform(this.latestValues)) {
          targetStyle.transform = transformTemplate ? transformTemplate({}, "") : "none";
          this.hasProjected = false;
        }
        return;
      }
      targetStyle.visibility = "";
      const valuesToRender = lead.animationValues || lead.latestValues;
      this.applyTransformsToTarget();
      let transform = buildProjectionTransform(this.projectionDeltaWithTransform, this.treeScale, valuesToRender);
      if (transformTemplate) {
        transform = transformTemplate(valuesToRender, transform);
      }
      targetStyle.transform = transform;
      const { x, y } = this.projectionDelta;
      targetStyle.transformOrigin = `${x.origin * 100}% ${y.origin * 100}% 0`;
      if (lead.animationValues) {
        targetStyle.opacity = lead === this ? valuesToRender.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : valuesToRender.opacityExit;
      } else {
        targetStyle.opacity = lead === this ? valuesToRender.opacity !== undefined ? valuesToRender.opacity : "" : valuesToRender.opacityExit !== undefined ? valuesToRender.opacityExit : 0;
      }
      for (const key in scaleCorrectors) {
        if (valuesToRender[key] === undefined)
          continue;
        const { correct, applyTo, isCSSVariable } = scaleCorrectors[key];
        const corrected = transform === "none" ? valuesToRender[key] : correct(valuesToRender[key], lead);
        if (applyTo) {
          const num = applyTo.length;
          for (let i = 0;i < num; i++) {
            targetStyle[applyTo[i]] = corrected;
          }
        } else {
          if (isCSSVariable) {
            this.options.visualElement.renderState.vars[key] = corrected;
          } else {
            targetStyle[key] = corrected;
          }
        }
      }
      if (this.options.layoutId) {
        targetStyle.pointerEvents = lead === this ? resolveMotionValue(styleProp?.pointerEvents) || "" : "none";
      }
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = undefined;
    }
    resetTree() {
      this.root.nodes.forEach((node) => node.currentAnimation?.stop());
      this.root.nodes.forEach(clearMeasurements);
      this.root.sharedNodes.clear();
    }
  };
}
function updateLayout(node) {
  node.updateLayout();
}
function notifyLayoutUpdate(node) {
  const snapshot = node.resumeFrom?.snapshot || node.snapshot;
  if (node.isLead() && node.layout && snapshot && node.hasListeners("didUpdate")) {
    const { layoutBox: layout, measuredBox: measuredLayout } = node.layout;
    const { animationType } = node.options;
    const isShared = snapshot.source !== node.layout.source;
    if (animationType === "size") {
      eachAxis((axis) => {
        const axisSnapshot = isShared ? snapshot.measuredBox[axis] : snapshot.layoutBox[axis];
        const length = calcLength(axisSnapshot);
        axisSnapshot.min = layout[axis].min;
        axisSnapshot.max = axisSnapshot.min + length;
      });
    } else if (shouldAnimatePositionOnly(animationType, snapshot.layoutBox, layout)) {
      eachAxis((axis) => {
        const axisSnapshot = isShared ? snapshot.measuredBox[axis] : snapshot.layoutBox[axis];
        const length = calcLength(layout[axis]);
        axisSnapshot.max = axisSnapshot.min + length;
        if (node.relativeTarget && !node.currentAnimation) {
          node.isProjectionDirty = true;
          node.relativeTarget[axis].max = node.relativeTarget[axis].min + length;
        }
      });
    }
    const layoutDelta = createDelta();
    calcBoxDelta(layoutDelta, layout, snapshot.layoutBox);
    const visualDelta = createDelta();
    if (isShared) {
      calcBoxDelta(visualDelta, node.applyTransform(measuredLayout, true), snapshot.measuredBox);
    } else {
      calcBoxDelta(visualDelta, layout, snapshot.layoutBox);
    }
    const hasLayoutChanged = !isDeltaZero(layoutDelta);
    let hasRelativeLayoutChanged = false;
    if (!node.resumeFrom) {
      const relativeParent = node.getClosestProjectingParent();
      if (relativeParent && !relativeParent.resumeFrom) {
        const { snapshot: parentSnapshot, layout: parentLayout } = relativeParent;
        if (parentSnapshot && parentLayout) {
          const relativeSnapshot = createBox();
          calcRelativePosition(relativeSnapshot, snapshot.layoutBox, parentSnapshot.layoutBox);
          const relativeLayout = createBox();
          calcRelativePosition(relativeLayout, layout, parentLayout.layoutBox);
          if (!boxEqualsRounded(relativeSnapshot, relativeLayout)) {
            hasRelativeLayoutChanged = true;
          }
          if (relativeParent.options.layoutRoot) {
            node.relativeTarget = relativeLayout;
            node.relativeTargetOrigin = relativeSnapshot;
            node.relativeParent = relativeParent;
          }
        }
      }
    }
    node.notifyListeners("didUpdate", {
      layout,
      snapshot,
      delta: visualDelta,
      layoutDelta,
      hasLayoutChanged,
      hasRelativeLayoutChanged
    });
  } else if (node.isLead()) {
    const { onExitComplete } = node.options;
    onExitComplete && onExitComplete();
  }
  node.options.transition = undefined;
}
function propagateDirtyNodes(node) {
  if (statsBuffer.value) {
    metrics.nodes++;
  }
  if (!node.parent)
    return;
  if (!node.isProjecting()) {
    node.isProjectionDirty = node.parent.isProjectionDirty;
  }
  node.isSharedProjectionDirty || (node.isSharedProjectionDirty = Boolean(node.isProjectionDirty || node.parent.isProjectionDirty || node.parent.isSharedProjectionDirty));
  node.isTransformDirty || (node.isTransformDirty = node.parent.isTransformDirty);
}
function cleanDirtyNodes(node) {
  node.isProjectionDirty = node.isSharedProjectionDirty = node.isTransformDirty = false;
}
function clearSnapshot(node) {
  node.clearSnapshot();
}
function clearMeasurements(node) {
  node.clearMeasurements();
}
function clearIsLayoutDirty(node) {
  node.isLayoutDirty = false;
}
function resetTransformStyle(node) {
  const { visualElement } = node.options;
  if (visualElement && visualElement.getProps().onBeforeLayoutMeasure) {
    visualElement.notify("BeforeLayoutMeasure");
  }
  node.resetTransform();
}
function finishAnimation(node) {
  node.finishAnimation();
  node.targetDelta = node.relativeTarget = node.target = undefined;
  node.isProjectionDirty = true;
}
function resolveTargetDelta(node) {
  node.resolveTargetDelta();
}
function calcProjection(node) {
  node.calcProjection();
}
function resetSkewAndRotation(node) {
  node.resetSkewAndRotation();
}
function removeLeadSnapshots(stack) {
  stack.removeLeadSnapshot();
}
function mixAxisDelta(output, delta, p) {
  output.translate = mixNumber(delta.translate, 0, p);
  output.scale = mixNumber(delta.scale, 1, p);
  output.origin = delta.origin;
  output.originPoint = delta.originPoint;
}
function mixAxis(output, from, to, p) {
  output.min = mixNumber(from.min, to.min, p);
  output.max = mixNumber(from.max, to.max, p);
}
function mixBox(output, from, to, p) {
  mixAxis(output.x, from.x, to.x, p);
  mixAxis(output.y, from.y, to.y, p);
}
function hasOpacityCrossfade(node) {
  return node.animationValues && node.animationValues.opacityExit !== undefined;
}
var defaultLayoutTransition = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
};
var userAgentContains = (string) => typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(string);
var roundPoint = userAgentContains("applewebkit/") && !userAgentContains("chrome/") ? Math.round : noop;
function roundAxis(axis) {
  axis.min = roundPoint(axis.min);
  axis.max = roundPoint(axis.max);
}
function roundBox(box) {
  roundAxis(box.x);
  roundAxis(box.y);
}
function shouldAnimatePositionOnly(animationType, snapshot, layout) {
  return animationType === "position" || animationType === "preserve-aspect" && !isNear(aspectRatio(snapshot), aspectRatio(layout), 0.2);
}
function checkNodeWasScrollRoot(node) {
  return node !== node.root && node.scroll?.wasRoot;
}

// node_modules/framer-motion/dist/es/projection/node/DocumentProjectionNode.mjs
var DocumentProjectionNode = createProjectionNode2({
  attachResizeListener: (ref, notify) => addDomEvent(ref, "resize", notify),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop
  }),
  checkIsScrollRoot: () => true
});

// node_modules/framer-motion/dist/es/projection/node/HTMLProjectionNode.mjs
var rootProjectionNode = {
  current: undefined
};
var HTMLProjectionNode = createProjectionNode2({
  measureScroll: (instance) => ({
    x: instance.scrollLeft,
    y: instance.scrollTop
  }),
  defaultParent: () => {
    if (!rootProjectionNode.current) {
      const documentNode = new DocumentProjectionNode({});
      documentNode.mount(window);
      documentNode.setOptions({ layoutScroll: true });
      rootProjectionNode.current = documentNode;
    }
    return rootProjectionNode.current;
  },
  resetTransform: (instance, value) => {
    instance.style.transform = value !== undefined ? value : "none";
  },
  checkIsScrollRoot: (instance) => Boolean(window.getComputedStyle(instance).position === "fixed")
});

// node_modules/framer-motion/dist/es/motion/features/drag.mjs
var drag = {
  pan: {
    Feature: PanGesture
  },
  drag: {
    Feature: DragGesture,
    ProjectionNode: HTMLProjectionNode,
    MeasureLayout
  }
};

// node_modules/framer-motion/dist/es/gestures/hover.mjs
function handleHoverEvent(node, event, lifecycle) {
  const { props } = node;
  if (node.animationState && props.whileHover) {
    node.animationState.setActive("whileHover", lifecycle === "Start");
  }
  const eventName = "onHover" + lifecycle;
  const callback = props[eventName];
  if (callback) {
    frame.postRender(() => callback(event, extractEventInfo(event)));
  }
}

class HoverGesture extends Feature {
  mount() {
    const { current } = this.node;
    if (!current)
      return;
    this.unmount = hover(current, (_element, startEvent) => {
      handleHoverEvent(this.node, startEvent, "Start");
      return (endEvent) => handleHoverEvent(this.node, endEvent, "End");
    });
  }
  unmount() {}
}

// node_modules/framer-motion/dist/es/gestures/focus.mjs
class FocusGesture extends Feature {
  constructor() {
    super(...arguments);
    this.isActive = false;
  }
  onFocus() {
    let isFocusVisible = false;
    try {
      isFocusVisible = this.node.current.matches(":focus-visible");
    } catch (e) {
      isFocusVisible = true;
    }
    if (!isFocusVisible || !this.node.animationState)
      return;
    this.node.animationState.setActive("whileFocus", true);
    this.isActive = true;
  }
  onBlur() {
    if (!this.isActive || !this.node.animationState)
      return;
    this.node.animationState.setActive("whileFocus", false);
    this.isActive = false;
  }
  mount() {
    this.unmount = pipe(addDomEvent(this.node.current, "focus", () => this.onFocus()), addDomEvent(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {}
}

// node_modules/framer-motion/dist/es/gestures/press.mjs
function handlePressEvent(node, event, lifecycle) {
  const { props } = node;
  if (node.current instanceof HTMLButtonElement && node.current.disabled) {
    return;
  }
  if (node.animationState && props.whileTap) {
    node.animationState.setActive("whileTap", lifecycle === "Start");
  }
  const eventName = "onTap" + (lifecycle === "End" ? "" : lifecycle);
  const callback = props[eventName];
  if (callback) {
    frame.postRender(() => callback(event, extractEventInfo(event)));
  }
}

class PressGesture extends Feature {
  mount() {
    const { current } = this.node;
    if (!current)
      return;
    this.unmount = press(current, (_element, startEvent) => {
      handlePressEvent(this.node, startEvent, "Start");
      return (endEvent, { success }) => handlePressEvent(this.node, endEvent, success ? "End" : "Cancel");
    }, { useGlobalTarget: this.node.props.globalTapTarget });
  }
  unmount() {}
}

// node_modules/framer-motion/dist/es/motion/features/viewport/observers.mjs
var observerCallbacks = new WeakMap;
var observers = new WeakMap;
var fireObserverCallback = (entry) => {
  const callback = observerCallbacks.get(entry.target);
  callback && callback(entry);
};
var fireAllObserverCallbacks = (entries) => {
  entries.forEach(fireObserverCallback);
};
function initIntersectionObserver({ root, ...options }) {
  const lookupRoot = root || document;
  if (!observers.has(lookupRoot)) {
    observers.set(lookupRoot, {});
  }
  const rootObservers = observers.get(lookupRoot);
  const key = JSON.stringify(options);
  if (!rootObservers[key]) {
    rootObservers[key] = new IntersectionObserver(fireAllObserverCallbacks, { root, ...options });
  }
  return rootObservers[key];
}
function observeIntersection(element, options, callback) {
  const rootInteresectionObserver = initIntersectionObserver(options);
  observerCallbacks.set(element, callback);
  rootInteresectionObserver.observe(element);
  return () => {
    observerCallbacks.delete(element);
    rootInteresectionObserver.unobserve(element);
  };
}

// node_modules/framer-motion/dist/es/motion/features/viewport/index.mjs
var thresholdNames = {
  some: 0,
  all: 1
};

class InViewFeature extends Feature {
  constructor() {
    super(...arguments);
    this.hasEnteredView = false;
    this.isInView = false;
  }
  startObserver() {
    this.unmount();
    const { viewport = {} } = this.node.getProps();
    const { root, margin: rootMargin, amount = "some", once } = viewport;
    const options = {
      root: root ? root.current : undefined,
      rootMargin,
      threshold: typeof amount === "number" ? amount : thresholdNames[amount]
    };
    const onIntersectionUpdate = (entry) => {
      const { isIntersecting } = entry;
      if (this.isInView === isIntersecting)
        return;
      this.isInView = isIntersecting;
      if (once && !isIntersecting && this.hasEnteredView) {
        return;
      } else if (isIntersecting) {
        this.hasEnteredView = true;
      }
      if (this.node.animationState) {
        this.node.animationState.setActive("whileInView", isIntersecting);
      }
      const { onViewportEnter, onViewportLeave } = this.node.getProps();
      const callback = isIntersecting ? onViewportEnter : onViewportLeave;
      callback && callback(entry);
    };
    return observeIntersection(this.node.current, options, onIntersectionUpdate);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver === "undefined")
      return;
    const { props, prevProps } = this.node;
    const hasOptionsChanged = ["amount", "margin", "root"].some(hasViewportOptionChanged(props, prevProps));
    if (hasOptionsChanged) {
      this.startObserver();
    }
  }
  unmount() {}
}
function hasViewportOptionChanged({ viewport = {} }, { viewport: prevViewport = {} } = {}) {
  return (name) => viewport[name] !== prevViewport[name];
}

// node_modules/framer-motion/dist/es/motion/features/gestures.mjs
var gestureAnimations = {
  inView: {
    Feature: InViewFeature
  },
  tap: {
    Feature: PressGesture
  },
  focus: {
    Feature: FocusGesture
  },
  hover: {
    Feature: HoverGesture
  }
};

// node_modules/framer-motion/dist/es/motion/features/layout.mjs
var layout = {
  layout: {
    ProjectionNode: HTMLProjectionNode,
    MeasureLayout
  }
};

// node_modules/framer-motion/dist/es/render/components/motion/feature-bundle.mjs
var featureBundle = {
  ...animations,
  ...gestureAnimations,
  ...drag,
  ...layout
};

// node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs
var motion = /* @__PURE__ */ createMotionProxy(featureBundle, createDomVisualElement);
// node_modules/framer-motion/dist/es/index.mjs
"use client";

// node_modules/clsx/dist/clsx.mjs
function r(e) {
  var t, f, n = "";
  if (typeof e == "string" || typeof e == "number")
    n += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0;t < o; t++)
        e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
    } else
      for (f in e)
        e[f] && (n && (n += " "), n += f);
  return n;
}
function clsx() {
  for (var e, t, f = 0, n = "", o = arguments.length;f < o; f++)
    (e = arguments[f]) && (t = r(e)) && (n && (n += " "), n += t);
  return n;
}

// node_modules/tailwind-merge/dist/bundle-mjs.mjs
var CLASS_PART_SEPARATOR = "-";
var createClassGroupUtils = (config) => {
  const classMap = createClassMap(config);
  const {
    conflictingClassGroups,
    conflictingClassGroupModifiers
  } = config;
  const getClassGroupId = (className) => {
    const classParts = className.split(CLASS_PART_SEPARATOR);
    if (classParts[0] === "" && classParts.length !== 1) {
      classParts.shift();
    }
    return getGroupRecursive(classParts, classMap) || getGroupIdForArbitraryProperty(className);
  };
  const getConflictingClassGroupIds = (classGroupId, hasPostfixModifier) => {
    const conflicts = conflictingClassGroups[classGroupId] || [];
    if (hasPostfixModifier && conflictingClassGroupModifiers[classGroupId]) {
      return [...conflicts, ...conflictingClassGroupModifiers[classGroupId]];
    }
    return conflicts;
  };
  return {
    getClassGroupId,
    getConflictingClassGroupIds
  };
};
var getGroupRecursive = (classParts, classPartObject) => {
  if (classParts.length === 0) {
    return classPartObject.classGroupId;
  }
  const currentClassPart = classParts[0];
  const nextClassPartObject = classPartObject.nextPart.get(currentClassPart);
  const classGroupFromNextClassPart = nextClassPartObject ? getGroupRecursive(classParts.slice(1), nextClassPartObject) : undefined;
  if (classGroupFromNextClassPart) {
    return classGroupFromNextClassPart;
  }
  if (classPartObject.validators.length === 0) {
    return;
  }
  const classRest = classParts.join(CLASS_PART_SEPARATOR);
  return classPartObject.validators.find(({
    validator
  }) => validator(classRest))?.classGroupId;
};
var arbitraryPropertyRegex = /^\[(.+)\]$/;
var getGroupIdForArbitraryProperty = (className) => {
  if (arbitraryPropertyRegex.test(className)) {
    const arbitraryPropertyClassName = arbitraryPropertyRegex.exec(className)[1];
    const property = arbitraryPropertyClassName?.substring(0, arbitraryPropertyClassName.indexOf(":"));
    if (property) {
      return "arbitrary.." + property;
    }
  }
};
var createClassMap = (config) => {
  const {
    theme,
    classGroups
  } = config;
  const classMap = {
    nextPart: new Map,
    validators: []
  };
  for (const classGroupId in classGroups) {
    processClassesRecursively(classGroups[classGroupId], classMap, classGroupId, theme);
  }
  return classMap;
};
var processClassesRecursively = (classGroup, classPartObject, classGroupId, theme) => {
  classGroup.forEach((classDefinition) => {
    if (typeof classDefinition === "string") {
      const classPartObjectToEdit = classDefinition === "" ? classPartObject : getPart(classPartObject, classDefinition);
      classPartObjectToEdit.classGroupId = classGroupId;
      return;
    }
    if (typeof classDefinition === "function") {
      if (isThemeGetter(classDefinition)) {
        processClassesRecursively(classDefinition(theme), classPartObject, classGroupId, theme);
        return;
      }
      classPartObject.validators.push({
        validator: classDefinition,
        classGroupId
      });
      return;
    }
    Object.entries(classDefinition).forEach(([key, classGroup2]) => {
      processClassesRecursively(classGroup2, getPart(classPartObject, key), classGroupId, theme);
    });
  });
};
var getPart = (classPartObject, path) => {
  let currentClassPartObject = classPartObject;
  path.split(CLASS_PART_SEPARATOR).forEach((pathPart) => {
    if (!currentClassPartObject.nextPart.has(pathPart)) {
      currentClassPartObject.nextPart.set(pathPart, {
        nextPart: new Map,
        validators: []
      });
    }
    currentClassPartObject = currentClassPartObject.nextPart.get(pathPart);
  });
  return currentClassPartObject;
};
var isThemeGetter = (func) => func.isThemeGetter;
var createLruCache = (maxCacheSize) => {
  if (maxCacheSize < 1) {
    return {
      get: () => {
        return;
      },
      set: () => {}
    };
  }
  let cacheSize = 0;
  let cache = new Map;
  let previousCache = new Map;
  const update = (key, value) => {
    cache.set(key, value);
    cacheSize++;
    if (cacheSize > maxCacheSize) {
      cacheSize = 0;
      previousCache = cache;
      cache = new Map;
    }
  };
  return {
    get(key) {
      let value = cache.get(key);
      if (value !== undefined) {
        return value;
      }
      if ((value = previousCache.get(key)) !== undefined) {
        update(key, value);
        return value;
      }
    },
    set(key, value) {
      if (cache.has(key)) {
        cache.set(key, value);
      } else {
        update(key, value);
      }
    }
  };
};
var IMPORTANT_MODIFIER = "!";
var MODIFIER_SEPARATOR = ":";
var MODIFIER_SEPARATOR_LENGTH = MODIFIER_SEPARATOR.length;
var createParseClassName = (config) => {
  const {
    prefix,
    experimentalParseClassName
  } = config;
  let parseClassName = (className) => {
    const modifiers = [];
    let bracketDepth = 0;
    let parenDepth = 0;
    let modifierStart = 0;
    let postfixModifierPosition;
    for (let index = 0;index < className.length; index++) {
      let currentCharacter = className[index];
      if (bracketDepth === 0 && parenDepth === 0) {
        if (currentCharacter === MODIFIER_SEPARATOR) {
          modifiers.push(className.slice(modifierStart, index));
          modifierStart = index + MODIFIER_SEPARATOR_LENGTH;
          continue;
        }
        if (currentCharacter === "/") {
          postfixModifierPosition = index;
          continue;
        }
      }
      if (currentCharacter === "[") {
        bracketDepth++;
      } else if (currentCharacter === "]") {
        bracketDepth--;
      } else if (currentCharacter === "(") {
        parenDepth++;
      } else if (currentCharacter === ")") {
        parenDepth--;
      }
    }
    const baseClassNameWithImportantModifier = modifiers.length === 0 ? className : className.substring(modifierStart);
    const baseClassName = stripImportantModifier(baseClassNameWithImportantModifier);
    const hasImportantModifier = baseClassName !== baseClassNameWithImportantModifier;
    const maybePostfixModifierPosition = postfixModifierPosition && postfixModifierPosition > modifierStart ? postfixModifierPosition - modifierStart : undefined;
    return {
      modifiers,
      hasImportantModifier,
      baseClassName,
      maybePostfixModifierPosition
    };
  };
  if (prefix) {
    const fullPrefix = prefix + MODIFIER_SEPARATOR;
    const parseClassNameOriginal = parseClassName;
    parseClassName = (className) => className.startsWith(fullPrefix) ? parseClassNameOriginal(className.substring(fullPrefix.length)) : {
      isExternal: true,
      modifiers: [],
      hasImportantModifier: false,
      baseClassName: className,
      maybePostfixModifierPosition: undefined
    };
  }
  if (experimentalParseClassName) {
    const parseClassNameOriginal = parseClassName;
    parseClassName = (className) => experimentalParseClassName({
      className,
      parseClassName: parseClassNameOriginal
    });
  }
  return parseClassName;
};
var stripImportantModifier = (baseClassName) => {
  if (baseClassName.endsWith(IMPORTANT_MODIFIER)) {
    return baseClassName.substring(0, baseClassName.length - 1);
  }
  if (baseClassName.startsWith(IMPORTANT_MODIFIER)) {
    return baseClassName.substring(1);
  }
  return baseClassName;
};
var createSortModifiers = (config) => {
  const orderSensitiveModifiers = Object.fromEntries(config.orderSensitiveModifiers.map((modifier) => [modifier, true]));
  const sortModifiers = (modifiers) => {
    if (modifiers.length <= 1) {
      return modifiers;
    }
    const sortedModifiers = [];
    let unsortedModifiers = [];
    modifiers.forEach((modifier) => {
      const isPositionSensitive = modifier[0] === "[" || orderSensitiveModifiers[modifier];
      if (isPositionSensitive) {
        sortedModifiers.push(...unsortedModifiers.sort(), modifier);
        unsortedModifiers = [];
      } else {
        unsortedModifiers.push(modifier);
      }
    });
    sortedModifiers.push(...unsortedModifiers.sort());
    return sortedModifiers;
  };
  return sortModifiers;
};
var createConfigUtils = (config) => ({
  cache: createLruCache(config.cacheSize),
  parseClassName: createParseClassName(config),
  sortModifiers: createSortModifiers(config),
  ...createClassGroupUtils(config)
});
var SPLIT_CLASSES_REGEX = /\s+/;
var mergeClassList = (classList, configUtils) => {
  const {
    parseClassName,
    getClassGroupId,
    getConflictingClassGroupIds,
    sortModifiers
  } = configUtils;
  const classGroupsInConflict = [];
  const classNames = classList.trim().split(SPLIT_CLASSES_REGEX);
  let result = "";
  for (let index = classNames.length - 1;index >= 0; index -= 1) {
    const originalClassName = classNames[index];
    const {
      isExternal,
      modifiers,
      hasImportantModifier,
      baseClassName,
      maybePostfixModifierPosition
    } = parseClassName(originalClassName);
    if (isExternal) {
      result = originalClassName + (result.length > 0 ? " " + result : result);
      continue;
    }
    let hasPostfixModifier = !!maybePostfixModifierPosition;
    let classGroupId = getClassGroupId(hasPostfixModifier ? baseClassName.substring(0, maybePostfixModifierPosition) : baseClassName);
    if (!classGroupId) {
      if (!hasPostfixModifier) {
        result = originalClassName + (result.length > 0 ? " " + result : result);
        continue;
      }
      classGroupId = getClassGroupId(baseClassName);
      if (!classGroupId) {
        result = originalClassName + (result.length > 0 ? " " + result : result);
        continue;
      }
      hasPostfixModifier = false;
    }
    const variantModifier = sortModifiers(modifiers).join(":");
    const modifierId = hasImportantModifier ? variantModifier + IMPORTANT_MODIFIER : variantModifier;
    const classId = modifierId + classGroupId;
    if (classGroupsInConflict.includes(classId)) {
      continue;
    }
    classGroupsInConflict.push(classId);
    const conflictGroups = getConflictingClassGroupIds(classGroupId, hasPostfixModifier);
    for (let i = 0;i < conflictGroups.length; ++i) {
      const group = conflictGroups[i];
      classGroupsInConflict.push(modifierId + group);
    }
    result = originalClassName + (result.length > 0 ? " " + result : result);
  }
  return result;
};
function twJoin() {
  let index = 0;
  let argument;
  let resolvedValue;
  let string = "";
  while (index < arguments.length) {
    if (argument = arguments[index++]) {
      if (resolvedValue = toValue(argument)) {
        string && (string += " ");
        string += resolvedValue;
      }
    }
  }
  return string;
}
var toValue = (mix2) => {
  if (typeof mix2 === "string") {
    return mix2;
  }
  let resolvedValue;
  let string = "";
  for (let k = 0;k < mix2.length; k++) {
    if (mix2[k]) {
      if (resolvedValue = toValue(mix2[k])) {
        string && (string += " ");
        string += resolvedValue;
      }
    }
  }
  return string;
};
function createTailwindMerge(createConfigFirst, ...createConfigRest) {
  let configUtils;
  let cacheGet;
  let cacheSet;
  let functionToCall = initTailwindMerge;
  function initTailwindMerge(classList) {
    const config = createConfigRest.reduce((previousConfig, createConfigCurrent) => createConfigCurrent(previousConfig), createConfigFirst());
    configUtils = createConfigUtils(config);
    cacheGet = configUtils.cache.get;
    cacheSet = configUtils.cache.set;
    functionToCall = tailwindMerge;
    return tailwindMerge(classList);
  }
  function tailwindMerge(classList) {
    const cachedResult = cacheGet(classList);
    if (cachedResult) {
      return cachedResult;
    }
    const result = mergeClassList(classList, configUtils);
    cacheSet(classList, result);
    return result;
  }
  return function callTailwindMerge() {
    return functionToCall(twJoin.apply(null, arguments));
  };
}
var fromTheme = (key) => {
  const themeGetter = (theme) => theme[key] || [];
  themeGetter.isThemeGetter = true;
  return themeGetter;
};
var arbitraryValueRegex = /^\[(?:(\w[\w-]*):)?(.+)\]$/i;
var arbitraryVariableRegex = /^\((?:(\w[\w-]*):)?(.+)\)$/i;
var fractionRegex = /^\d+\/\d+$/;
var tshirtUnitRegex = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/;
var lengthUnitRegex = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/;
var colorFunctionRegex = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/;
var shadowRegex = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
var imageRegex = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
var isFraction = (value) => fractionRegex.test(value);
var isNumber = (value) => !!value && !Number.isNaN(Number(value));
var isInteger = (value) => !!value && Number.isInteger(Number(value));
var isPercent = (value) => value.endsWith("%") && isNumber(value.slice(0, -1));
var isTshirtSize = (value) => tshirtUnitRegex.test(value);
var isAny = () => true;
var isLengthOnly = (value) => lengthUnitRegex.test(value) && !colorFunctionRegex.test(value);
var isNever = () => false;
var isShadow = (value) => shadowRegex.test(value);
var isImage = (value) => imageRegex.test(value);
var isAnyNonArbitrary = (value) => !isArbitraryValue(value) && !isArbitraryVariable(value);
var isArbitrarySize = (value) => getIsArbitraryValue(value, isLabelSize, isNever);
var isArbitraryValue = (value) => arbitraryValueRegex.test(value);
var isArbitraryLength = (value) => getIsArbitraryValue(value, isLabelLength, isLengthOnly);
var isArbitraryNumber = (value) => getIsArbitraryValue(value, isLabelNumber, isNumber);
var isArbitraryPosition = (value) => getIsArbitraryValue(value, isLabelPosition, isNever);
var isArbitraryImage = (value) => getIsArbitraryValue(value, isLabelImage, isImage);
var isArbitraryShadow = (value) => getIsArbitraryValue(value, isLabelShadow, isShadow);
var isArbitraryVariable = (value) => arbitraryVariableRegex.test(value);
var isArbitraryVariableLength = (value) => getIsArbitraryVariable(value, isLabelLength);
var isArbitraryVariableFamilyName = (value) => getIsArbitraryVariable(value, isLabelFamilyName);
var isArbitraryVariablePosition = (value) => getIsArbitraryVariable(value, isLabelPosition);
var isArbitraryVariableSize = (value) => getIsArbitraryVariable(value, isLabelSize);
var isArbitraryVariableImage = (value) => getIsArbitraryVariable(value, isLabelImage);
var isArbitraryVariableShadow = (value) => getIsArbitraryVariable(value, isLabelShadow, true);
var getIsArbitraryValue = (value, testLabel, testValue) => {
  const result = arbitraryValueRegex.exec(value);
  if (result) {
    if (result[1]) {
      return testLabel(result[1]);
    }
    return testValue(result[2]);
  }
  return false;
};
var getIsArbitraryVariable = (value, testLabel, shouldMatchNoLabel = false) => {
  const result = arbitraryVariableRegex.exec(value);
  if (result) {
    if (result[1]) {
      return testLabel(result[1]);
    }
    return shouldMatchNoLabel;
  }
  return false;
};
var isLabelPosition = (label) => label === "position" || label === "percentage";
var isLabelImage = (label) => label === "image" || label === "url";
var isLabelSize = (label) => label === "length" || label === "size" || label === "bg-size";
var isLabelLength = (label) => label === "length";
var isLabelNumber = (label) => label === "number";
var isLabelFamilyName = (label) => label === "family-name";
var isLabelShadow = (label) => label === "shadow";
var getDefaultConfig = () => {
  const themeColor = fromTheme("color");
  const themeFont = fromTheme("font");
  const themeText = fromTheme("text");
  const themeFontWeight = fromTheme("font-weight");
  const themeTracking = fromTheme("tracking");
  const themeLeading = fromTheme("leading");
  const themeBreakpoint = fromTheme("breakpoint");
  const themeContainer = fromTheme("container");
  const themeSpacing = fromTheme("spacing");
  const themeRadius = fromTheme("radius");
  const themeShadow = fromTheme("shadow");
  const themeInsetShadow = fromTheme("inset-shadow");
  const themeTextShadow = fromTheme("text-shadow");
  const themeDropShadow = fromTheme("drop-shadow");
  const themeBlur = fromTheme("blur");
  const themePerspective = fromTheme("perspective");
  const themeAspect = fromTheme("aspect");
  const themeEase = fromTheme("ease");
  const themeAnimate = fromTheme("animate");
  const scaleBreak = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"];
  const scalePosition = () => [
    "center",
    "top",
    "bottom",
    "left",
    "right",
    "top-left",
    "left-top",
    "top-right",
    "right-top",
    "bottom-right",
    "right-bottom",
    "bottom-left",
    "left-bottom"
  ];
  const scalePositionWithArbitrary = () => [...scalePosition(), isArbitraryVariable, isArbitraryValue];
  const scaleOverflow = () => ["auto", "hidden", "clip", "visible", "scroll"];
  const scaleOverscroll = () => ["auto", "contain", "none"];
  const scaleUnambiguousSpacing = () => [isArbitraryVariable, isArbitraryValue, themeSpacing];
  const scaleInset = () => [isFraction, "full", "auto", ...scaleUnambiguousSpacing()];
  const scaleGridTemplateColsRows = () => [isInteger, "none", "subgrid", isArbitraryVariable, isArbitraryValue];
  const scaleGridColRowStartAndEnd = () => ["auto", {
    span: ["full", isInteger, isArbitraryVariable, isArbitraryValue]
  }, isInteger, isArbitraryVariable, isArbitraryValue];
  const scaleGridColRowStartOrEnd = () => [isInteger, "auto", isArbitraryVariable, isArbitraryValue];
  const scaleGridAutoColsRows = () => ["auto", "min", "max", "fr", isArbitraryVariable, isArbitraryValue];
  const scaleAlignPrimaryAxis = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"];
  const scaleAlignSecondaryAxis = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"];
  const scaleMargin = () => ["auto", ...scaleUnambiguousSpacing()];
  const scaleSizing = () => [isFraction, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...scaleUnambiguousSpacing()];
  const scaleColor = () => [themeColor, isArbitraryVariable, isArbitraryValue];
  const scaleBgPosition = () => [...scalePosition(), isArbitraryVariablePosition, isArbitraryPosition, {
    position: [isArbitraryVariable, isArbitraryValue]
  }];
  const scaleBgRepeat = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }];
  const scaleBgSize = () => ["auto", "cover", "contain", isArbitraryVariableSize, isArbitrarySize, {
    size: [isArbitraryVariable, isArbitraryValue]
  }];
  const scaleGradientStopPosition = () => [isPercent, isArbitraryVariableLength, isArbitraryLength];
  const scaleRadius = () => [
    "",
    "none",
    "full",
    themeRadius,
    isArbitraryVariable,
    isArbitraryValue
  ];
  const scaleBorderWidth = () => ["", isNumber, isArbitraryVariableLength, isArbitraryLength];
  const scaleLineStyle = () => ["solid", "dashed", "dotted", "double"];
  const scaleBlendMode = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"];
  const scaleMaskImagePosition = () => [isNumber, isPercent, isArbitraryVariablePosition, isArbitraryPosition];
  const scaleBlur = () => [
    "",
    "none",
    themeBlur,
    isArbitraryVariable,
    isArbitraryValue
  ];
  const scaleRotate = () => ["none", isNumber, isArbitraryVariable, isArbitraryValue];
  const scaleScale = () => ["none", isNumber, isArbitraryVariable, isArbitraryValue];
  const scaleSkew = () => [isNumber, isArbitraryVariable, isArbitraryValue];
  const scaleTranslate = () => [isFraction, "full", ...scaleUnambiguousSpacing()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [isTshirtSize],
      breakpoint: [isTshirtSize],
      color: [isAny],
      container: [isTshirtSize],
      "drop-shadow": [isTshirtSize],
      ease: ["in", "out", "in-out"],
      font: [isAnyNonArbitrary],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [isTshirtSize],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [isTshirtSize],
      shadow: [isTshirtSize],
      spacing: ["px", isNumber],
      text: [isTshirtSize],
      "text-shadow": [isTshirtSize],
      tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
    },
    classGroups: {
      aspect: [{
        aspect: ["auto", "square", isFraction, isArbitraryValue, isArbitraryVariable, themeAspect]
      }],
      container: ["container"],
      columns: [{
        columns: [isNumber, isArbitraryValue, isArbitraryVariable, themeContainer]
      }],
      "break-after": [{
        "break-after": scaleBreak()
      }],
      "break-before": [{
        "break-before": scaleBreak()
      }],
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      box: [{
        box: ["border", "content"]
      }],
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      sr: ["sr-only", "not-sr-only"],
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      isolation: ["isolate", "isolation-auto"],
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      "object-position": [{
        object: scalePositionWithArbitrary()
      }],
      overflow: [{
        overflow: scaleOverflow()
      }],
      "overflow-x": [{
        "overflow-x": scaleOverflow()
      }],
      "overflow-y": [{
        "overflow-y": scaleOverflow()
      }],
      overscroll: [{
        overscroll: scaleOverscroll()
      }],
      "overscroll-x": [{
        "overscroll-x": scaleOverscroll()
      }],
      "overscroll-y": [{
        "overscroll-y": scaleOverscroll()
      }],
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      inset: [{
        inset: scaleInset()
      }],
      "inset-x": [{
        "inset-x": scaleInset()
      }],
      "inset-y": [{
        "inset-y": scaleInset()
      }],
      start: [{
        start: scaleInset()
      }],
      end: [{
        end: scaleInset()
      }],
      top: [{
        top: scaleInset()
      }],
      right: [{
        right: scaleInset()
      }],
      bottom: [{
        bottom: scaleInset()
      }],
      left: [{
        left: scaleInset()
      }],
      visibility: ["visible", "invisible", "collapse"],
      z: [{
        z: [isInteger, "auto", isArbitraryVariable, isArbitraryValue]
      }],
      basis: [{
        basis: [isFraction, "full", "auto", themeContainer, ...scaleUnambiguousSpacing()]
      }],
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      "flex-wrap": [{
        flex: ["nowrap", "wrap", "wrap-reverse"]
      }],
      flex: [{
        flex: [isNumber, isFraction, "auto", "initial", "none", isArbitraryValue]
      }],
      grow: [{
        grow: ["", isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      shrink: [{
        shrink: ["", isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      order: [{
        order: [isInteger, "first", "last", "none", isArbitraryVariable, isArbitraryValue]
      }],
      "grid-cols": [{
        "grid-cols": scaleGridTemplateColsRows()
      }],
      "col-start-end": [{
        col: scaleGridColRowStartAndEnd()
      }],
      "col-start": [{
        "col-start": scaleGridColRowStartOrEnd()
      }],
      "col-end": [{
        "col-end": scaleGridColRowStartOrEnd()
      }],
      "grid-rows": [{
        "grid-rows": scaleGridTemplateColsRows()
      }],
      "row-start-end": [{
        row: scaleGridColRowStartAndEnd()
      }],
      "row-start": [{
        "row-start": scaleGridColRowStartOrEnd()
      }],
      "row-end": [{
        "row-end": scaleGridColRowStartOrEnd()
      }],
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      "auto-cols": [{
        "auto-cols": scaleGridAutoColsRows()
      }],
      "auto-rows": [{
        "auto-rows": scaleGridAutoColsRows()
      }],
      gap: [{
        gap: scaleUnambiguousSpacing()
      }],
      "gap-x": [{
        "gap-x": scaleUnambiguousSpacing()
      }],
      "gap-y": [{
        "gap-y": scaleUnambiguousSpacing()
      }],
      "justify-content": [{
        justify: [...scaleAlignPrimaryAxis(), "normal"]
      }],
      "justify-items": [{
        "justify-items": [...scaleAlignSecondaryAxis(), "normal"]
      }],
      "justify-self": [{
        "justify-self": ["auto", ...scaleAlignSecondaryAxis()]
      }],
      "align-content": [{
        content: ["normal", ...scaleAlignPrimaryAxis()]
      }],
      "align-items": [{
        items: [...scaleAlignSecondaryAxis(), {
          baseline: ["", "last"]
        }]
      }],
      "align-self": [{
        self: ["auto", ...scaleAlignSecondaryAxis(), {
          baseline: ["", "last"]
        }]
      }],
      "place-content": [{
        "place-content": scaleAlignPrimaryAxis()
      }],
      "place-items": [{
        "place-items": [...scaleAlignSecondaryAxis(), "baseline"]
      }],
      "place-self": [{
        "place-self": ["auto", ...scaleAlignSecondaryAxis()]
      }],
      p: [{
        p: scaleUnambiguousSpacing()
      }],
      px: [{
        px: scaleUnambiguousSpacing()
      }],
      py: [{
        py: scaleUnambiguousSpacing()
      }],
      ps: [{
        ps: scaleUnambiguousSpacing()
      }],
      pe: [{
        pe: scaleUnambiguousSpacing()
      }],
      pt: [{
        pt: scaleUnambiguousSpacing()
      }],
      pr: [{
        pr: scaleUnambiguousSpacing()
      }],
      pb: [{
        pb: scaleUnambiguousSpacing()
      }],
      pl: [{
        pl: scaleUnambiguousSpacing()
      }],
      m: [{
        m: scaleMargin()
      }],
      mx: [{
        mx: scaleMargin()
      }],
      my: [{
        my: scaleMargin()
      }],
      ms: [{
        ms: scaleMargin()
      }],
      me: [{
        me: scaleMargin()
      }],
      mt: [{
        mt: scaleMargin()
      }],
      mr: [{
        mr: scaleMargin()
      }],
      mb: [{
        mb: scaleMargin()
      }],
      ml: [{
        ml: scaleMargin()
      }],
      "space-x": [{
        "space-x": scaleUnambiguousSpacing()
      }],
      "space-x-reverse": ["space-x-reverse"],
      "space-y": [{
        "space-y": scaleUnambiguousSpacing()
      }],
      "space-y-reverse": ["space-y-reverse"],
      size: [{
        size: scaleSizing()
      }],
      w: [{
        w: [themeContainer, "screen", ...scaleSizing()]
      }],
      "min-w": [{
        "min-w": [
          themeContainer,
          "screen",
          "none",
          ...scaleSizing()
        ]
      }],
      "max-w": [{
        "max-w": [
          themeContainer,
          "screen",
          "none",
          "prose",
          {
            screen: [themeBreakpoint]
          },
          ...scaleSizing()
        ]
      }],
      h: [{
        h: ["screen", "lh", ...scaleSizing()]
      }],
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...scaleSizing()]
      }],
      "max-h": [{
        "max-h": ["screen", "lh", ...scaleSizing()]
      }],
      "font-size": [{
        text: ["base", themeText, isArbitraryVariableLength, isArbitraryLength]
      }],
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      "font-style": ["italic", "not-italic"],
      "font-weight": [{
        font: [themeFontWeight, isArbitraryVariable, isArbitraryNumber]
      }],
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", isPercent, isArbitraryValue]
      }],
      "font-family": [{
        font: [isArbitraryVariableFamilyName, isArbitraryValue, themeFont]
      }],
      "fvn-normal": ["normal-nums"],
      "fvn-ordinal": ["ordinal"],
      "fvn-slashed-zero": ["slashed-zero"],
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      tracking: [{
        tracking: [themeTracking, isArbitraryVariable, isArbitraryValue]
      }],
      "line-clamp": [{
        "line-clamp": [isNumber, "none", isArbitraryVariable, isArbitraryNumber]
      }],
      leading: [{
        leading: [
          themeLeading,
          ...scaleUnambiguousSpacing()
        ]
      }],
      "list-image": [{
        "list-image": ["none", isArbitraryVariable, isArbitraryValue]
      }],
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      "list-style-type": [{
        list: ["disc", "decimal", "none", isArbitraryVariable, isArbitraryValue]
      }],
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      "placeholder-color": [{
        placeholder: scaleColor()
      }],
      "text-color": [{
        text: scaleColor()
      }],
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      "text-decoration-style": [{
        decoration: [...scaleLineStyle(), "wavy"]
      }],
      "text-decoration-thickness": [{
        decoration: [isNumber, "from-font", "auto", isArbitraryVariable, isArbitraryLength]
      }],
      "text-decoration-color": [{
        decoration: scaleColor()
      }],
      "underline-offset": [{
        "underline-offset": [isNumber, "auto", isArbitraryVariable, isArbitraryValue]
      }],
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      indent: [{
        indent: scaleUnambiguousSpacing()
      }],
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", isArbitraryVariable, isArbitraryValue]
      }],
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      wrap: [{
        wrap: ["break-word", "anywhere", "normal"]
      }],
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      content: [{
        content: ["none", isArbitraryVariable, isArbitraryValue]
      }],
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      "bg-position": [{
        bg: scaleBgPosition()
      }],
      "bg-repeat": [{
        bg: scaleBgRepeat()
      }],
      "bg-size": [{
        bg: scaleBgSize()
      }],
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, isInteger, isArbitraryVariable, isArbitraryValue],
          radial: ["", isArbitraryVariable, isArbitraryValue],
          conic: [isInteger, isArbitraryVariable, isArbitraryValue]
        }, isArbitraryVariableImage, isArbitraryImage]
      }],
      "bg-color": [{
        bg: scaleColor()
      }],
      "gradient-from-pos": [{
        from: scaleGradientStopPosition()
      }],
      "gradient-via-pos": [{
        via: scaleGradientStopPosition()
      }],
      "gradient-to-pos": [{
        to: scaleGradientStopPosition()
      }],
      "gradient-from": [{
        from: scaleColor()
      }],
      "gradient-via": [{
        via: scaleColor()
      }],
      "gradient-to": [{
        to: scaleColor()
      }],
      rounded: [{
        rounded: scaleRadius()
      }],
      "rounded-s": [{
        "rounded-s": scaleRadius()
      }],
      "rounded-e": [{
        "rounded-e": scaleRadius()
      }],
      "rounded-t": [{
        "rounded-t": scaleRadius()
      }],
      "rounded-r": [{
        "rounded-r": scaleRadius()
      }],
      "rounded-b": [{
        "rounded-b": scaleRadius()
      }],
      "rounded-l": [{
        "rounded-l": scaleRadius()
      }],
      "rounded-ss": [{
        "rounded-ss": scaleRadius()
      }],
      "rounded-se": [{
        "rounded-se": scaleRadius()
      }],
      "rounded-ee": [{
        "rounded-ee": scaleRadius()
      }],
      "rounded-es": [{
        "rounded-es": scaleRadius()
      }],
      "rounded-tl": [{
        "rounded-tl": scaleRadius()
      }],
      "rounded-tr": [{
        "rounded-tr": scaleRadius()
      }],
      "rounded-br": [{
        "rounded-br": scaleRadius()
      }],
      "rounded-bl": [{
        "rounded-bl": scaleRadius()
      }],
      "border-w": [{
        border: scaleBorderWidth()
      }],
      "border-w-x": [{
        "border-x": scaleBorderWidth()
      }],
      "border-w-y": [{
        "border-y": scaleBorderWidth()
      }],
      "border-w-s": [{
        "border-s": scaleBorderWidth()
      }],
      "border-w-e": [{
        "border-e": scaleBorderWidth()
      }],
      "border-w-t": [{
        "border-t": scaleBorderWidth()
      }],
      "border-w-r": [{
        "border-r": scaleBorderWidth()
      }],
      "border-w-b": [{
        "border-b": scaleBorderWidth()
      }],
      "border-w-l": [{
        "border-l": scaleBorderWidth()
      }],
      "divide-x": [{
        "divide-x": scaleBorderWidth()
      }],
      "divide-x-reverse": ["divide-x-reverse"],
      "divide-y": [{
        "divide-y": scaleBorderWidth()
      }],
      "divide-y-reverse": ["divide-y-reverse"],
      "border-style": [{
        border: [...scaleLineStyle(), "hidden", "none"]
      }],
      "divide-style": [{
        divide: [...scaleLineStyle(), "hidden", "none"]
      }],
      "border-color": [{
        border: scaleColor()
      }],
      "border-color-x": [{
        "border-x": scaleColor()
      }],
      "border-color-y": [{
        "border-y": scaleColor()
      }],
      "border-color-s": [{
        "border-s": scaleColor()
      }],
      "border-color-e": [{
        "border-e": scaleColor()
      }],
      "border-color-t": [{
        "border-t": scaleColor()
      }],
      "border-color-r": [{
        "border-r": scaleColor()
      }],
      "border-color-b": [{
        "border-b": scaleColor()
      }],
      "border-color-l": [{
        "border-l": scaleColor()
      }],
      "divide-color": [{
        divide: scaleColor()
      }],
      "outline-style": [{
        outline: [...scaleLineStyle(), "none", "hidden"]
      }],
      "outline-offset": [{
        "outline-offset": [isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      "outline-w": [{
        outline: ["", isNumber, isArbitraryVariableLength, isArbitraryLength]
      }],
      "outline-color": [{
        outline: scaleColor()
      }],
      shadow: [{
        shadow: [
          "",
          "none",
          themeShadow,
          isArbitraryVariableShadow,
          isArbitraryShadow
        ]
      }],
      "shadow-color": [{
        shadow: scaleColor()
      }],
      "inset-shadow": [{
        "inset-shadow": ["none", themeInsetShadow, isArbitraryVariableShadow, isArbitraryShadow]
      }],
      "inset-shadow-color": [{
        "inset-shadow": scaleColor()
      }],
      "ring-w": [{
        ring: scaleBorderWidth()
      }],
      "ring-w-inset": ["ring-inset"],
      "ring-color": [{
        ring: scaleColor()
      }],
      "ring-offset-w": [{
        "ring-offset": [isNumber, isArbitraryLength]
      }],
      "ring-offset-color": [{
        "ring-offset": scaleColor()
      }],
      "inset-ring-w": [{
        "inset-ring": scaleBorderWidth()
      }],
      "inset-ring-color": [{
        "inset-ring": scaleColor()
      }],
      "text-shadow": [{
        "text-shadow": ["none", themeTextShadow, isArbitraryVariableShadow, isArbitraryShadow]
      }],
      "text-shadow-color": [{
        "text-shadow": scaleColor()
      }],
      opacity: [{
        opacity: [isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      "mix-blend": [{
        "mix-blend": [...scaleBlendMode(), "plus-darker", "plus-lighter"]
      }],
      "bg-blend": [{
        "bg-blend": scaleBlendMode()
      }],
      "mask-clip": [{
        "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]
      }, "mask-no-clip"],
      "mask-composite": [{
        mask: ["add", "subtract", "intersect", "exclude"]
      }],
      "mask-image-linear-pos": [{
        "mask-linear": [isNumber]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": scaleMaskImagePosition()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": scaleMaskImagePosition()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": scaleColor()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": scaleColor()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": scaleMaskImagePosition()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": scaleMaskImagePosition()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": scaleColor()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": scaleColor()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": scaleMaskImagePosition()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": scaleMaskImagePosition()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": scaleColor()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": scaleColor()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": scaleMaskImagePosition()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": scaleMaskImagePosition()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": scaleColor()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": scaleColor()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": scaleMaskImagePosition()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": scaleMaskImagePosition()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": scaleColor()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": scaleColor()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": scaleMaskImagePosition()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": scaleMaskImagePosition()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": scaleColor()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": scaleColor()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": scaleMaskImagePosition()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": scaleMaskImagePosition()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": scaleColor()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": scaleColor()
      }],
      "mask-image-radial": [{
        "mask-radial": [isArbitraryVariable, isArbitraryValue]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": scaleMaskImagePosition()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": scaleMaskImagePosition()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": scaleColor()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": scaleColor()
      }],
      "mask-image-radial-shape": [{
        "mask-radial": ["circle", "ellipse"]
      }],
      "mask-image-radial-size": [{
        "mask-radial": [{
          closest: ["side", "corner"],
          farthest: ["side", "corner"]
        }]
      }],
      "mask-image-radial-pos": [{
        "mask-radial-at": scalePosition()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [isNumber]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": scaleMaskImagePosition()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": scaleMaskImagePosition()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": scaleColor()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": scaleColor()
      }],
      "mask-mode": [{
        mask: ["alpha", "luminance", "match"]
      }],
      "mask-origin": [{
        "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]
      }],
      "mask-position": [{
        mask: scaleBgPosition()
      }],
      "mask-repeat": [{
        mask: scaleBgRepeat()
      }],
      "mask-size": [{
        mask: scaleBgSize()
      }],
      "mask-type": [{
        "mask-type": ["alpha", "luminance"]
      }],
      "mask-image": [{
        mask: ["none", isArbitraryVariable, isArbitraryValue]
      }],
      filter: [{
        filter: [
          "",
          "none",
          isArbitraryVariable,
          isArbitraryValue
        ]
      }],
      blur: [{
        blur: scaleBlur()
      }],
      brightness: [{
        brightness: [isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      contrast: [{
        contrast: [isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      "drop-shadow": [{
        "drop-shadow": [
          "",
          "none",
          themeDropShadow,
          isArbitraryVariableShadow,
          isArbitraryShadow
        ]
      }],
      "drop-shadow-color": [{
        "drop-shadow": scaleColor()
      }],
      grayscale: [{
        grayscale: ["", isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      "hue-rotate": [{
        "hue-rotate": [isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      invert: [{
        invert: ["", isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      saturate: [{
        saturate: [isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      sepia: [{
        sepia: ["", isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      "backdrop-filter": [{
        "backdrop-filter": [
          "",
          "none",
          isArbitraryVariable,
          isArbitraryValue
        ]
      }],
      "backdrop-blur": [{
        "backdrop-blur": scaleBlur()
      }],
      "backdrop-brightness": [{
        "backdrop-brightness": [isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      "backdrop-contrast": [{
        "backdrop-contrast": [isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      "backdrop-invert": [{
        "backdrop-invert": ["", isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      "backdrop-opacity": [{
        "backdrop-opacity": [isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      "backdrop-saturate": [{
        "backdrop-saturate": [isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      "backdrop-sepia": [{
        "backdrop-sepia": ["", isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      "border-spacing": [{
        "border-spacing": scaleUnambiguousSpacing()
      }],
      "border-spacing-x": [{
        "border-spacing-x": scaleUnambiguousSpacing()
      }],
      "border-spacing-y": [{
        "border-spacing-y": scaleUnambiguousSpacing()
      }],
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      caption: [{
        caption: ["top", "bottom"]
      }],
      transition: [{
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", isArbitraryVariable, isArbitraryValue]
      }],
      "transition-behavior": [{
        transition: ["normal", "discrete"]
      }],
      duration: [{
        duration: [isNumber, "initial", isArbitraryVariable, isArbitraryValue]
      }],
      ease: [{
        ease: ["linear", "initial", themeEase, isArbitraryVariable, isArbitraryValue]
      }],
      delay: [{
        delay: [isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      animate: [{
        animate: ["none", themeAnimate, isArbitraryVariable, isArbitraryValue]
      }],
      backface: [{
        backface: ["hidden", "visible"]
      }],
      perspective: [{
        perspective: [themePerspective, isArbitraryVariable, isArbitraryValue]
      }],
      "perspective-origin": [{
        "perspective-origin": scalePositionWithArbitrary()
      }],
      rotate: [{
        rotate: scaleRotate()
      }],
      "rotate-x": [{
        "rotate-x": scaleRotate()
      }],
      "rotate-y": [{
        "rotate-y": scaleRotate()
      }],
      "rotate-z": [{
        "rotate-z": scaleRotate()
      }],
      scale: [{
        scale: scaleScale()
      }],
      "scale-x": [{
        "scale-x": scaleScale()
      }],
      "scale-y": [{
        "scale-y": scaleScale()
      }],
      "scale-z": [{
        "scale-z": scaleScale()
      }],
      "scale-3d": ["scale-3d"],
      skew: [{
        skew: scaleSkew()
      }],
      "skew-x": [{
        "skew-x": scaleSkew()
      }],
      "skew-y": [{
        "skew-y": scaleSkew()
      }],
      transform: [{
        transform: [isArbitraryVariable, isArbitraryValue, "", "none", "gpu", "cpu"]
      }],
      "transform-origin": [{
        origin: scalePositionWithArbitrary()
      }],
      "transform-style": [{
        transform: ["3d", "flat"]
      }],
      translate: [{
        translate: scaleTranslate()
      }],
      "translate-x": [{
        "translate-x": scaleTranslate()
      }],
      "translate-y": [{
        "translate-y": scaleTranslate()
      }],
      "translate-z": [{
        "translate-z": scaleTranslate()
      }],
      "translate-none": ["translate-none"],
      accent: [{
        accent: scaleColor()
      }],
      appearance: [{
        appearance: ["none", "auto"]
      }],
      "caret-color": [{
        caret: scaleColor()
      }],
      "color-scheme": [{
        scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
      }],
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", isArbitraryVariable, isArbitraryValue]
      }],
      "field-sizing": [{
        "field-sizing": ["fixed", "content"]
      }],
      "pointer-events": [{
        "pointer-events": ["auto", "none"]
      }],
      resize: [{
        resize: ["none", "", "y", "x"]
      }],
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      "scroll-m": [{
        "scroll-m": scaleUnambiguousSpacing()
      }],
      "scroll-mx": [{
        "scroll-mx": scaleUnambiguousSpacing()
      }],
      "scroll-my": [{
        "scroll-my": scaleUnambiguousSpacing()
      }],
      "scroll-ms": [{
        "scroll-ms": scaleUnambiguousSpacing()
      }],
      "scroll-me": [{
        "scroll-me": scaleUnambiguousSpacing()
      }],
      "scroll-mt": [{
        "scroll-mt": scaleUnambiguousSpacing()
      }],
      "scroll-mr": [{
        "scroll-mr": scaleUnambiguousSpacing()
      }],
      "scroll-mb": [{
        "scroll-mb": scaleUnambiguousSpacing()
      }],
      "scroll-ml": [{
        "scroll-ml": scaleUnambiguousSpacing()
      }],
      "scroll-p": [{
        "scroll-p": scaleUnambiguousSpacing()
      }],
      "scroll-px": [{
        "scroll-px": scaleUnambiguousSpacing()
      }],
      "scroll-py": [{
        "scroll-py": scaleUnambiguousSpacing()
      }],
      "scroll-ps": [{
        "scroll-ps": scaleUnambiguousSpacing()
      }],
      "scroll-pe": [{
        "scroll-pe": scaleUnambiguousSpacing()
      }],
      "scroll-pt": [{
        "scroll-pt": scaleUnambiguousSpacing()
      }],
      "scroll-pr": [{
        "scroll-pr": scaleUnambiguousSpacing()
      }],
      "scroll-pb": [{
        "scroll-pb": scaleUnambiguousSpacing()
      }],
      "scroll-pl": [{
        "scroll-pl": scaleUnambiguousSpacing()
      }],
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      "touch-pz": ["touch-pinch-zoom"],
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", isArbitraryVariable, isArbitraryValue]
      }],
      fill: [{
        fill: ["none", ...scaleColor()]
      }],
      "stroke-w": [{
        stroke: [isNumber, isArbitraryVariableLength, isArbitraryLength, isArbitraryNumber]
      }],
      stroke: [{
        stroke: ["none", ...scaleColor()]
      }],
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      translate: ["translate-x", "translate-y", "translate-none"],
      "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    },
    orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
  };
};
var twMerge = /* @__PURE__ */ createTailwindMerge(getDefaultConfig);

// src/lib/utils.ts
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// src/components/cards/ServiceCardLayout.tsx
var import_react_router_dom = __toESM(require_dist2(), 1);
var jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
var ServiceCardLayout = ({
  children,
  href,
  index,
  isHovered,
  zIndex,
  baseX,
  baseY,
  baseRotate,
  targetX,
  targetY,
  targetRotate,
  targetScale,
  onHoverStart,
  onHoverEnd
}) => {
  const navigate = import_react_router_dom.useNavigate();
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(motion.div, {
    className: "absolute cursor-pointer",
    style: {
      width: SERVICE_CARD.layout.width,
      height: SERVICE_CARD.layout.height,
      left: "50%",
      top: "50%",
      marginLeft: SERVICE_CARD.layout.marginLeft,
      marginTop: SERVICE_CARD.layout.marginTop,
      zIndex
    },
    initial: {
      x: baseX,
      y: baseY,
      rotate: baseRotate,
      scale: ANIMATION.scales.contracted,
      opacity: 0
    },
    animate: {
      x: targetX,
      y: targetY,
      rotate: targetRotate,
      scale: targetScale,
      opacity: 1
    },
    transition: {
      x: {
        type: "spring",
        stiffness: SERVICE_CARD.animation.position.stiffness,
        damping: SERVICE_CARD.animation.position.damping,
        mass: SERVICE_CARD.animation.position.mass
      },
      y: {
        type: "spring",
        stiffness: SERVICE_CARD.animation.movement.stiffness,
        damping: SERVICE_CARD.animation.movement.damping,
        mass: SERVICE_CARD.animation.movement.mass
      },
      rotate: {
        type: "spring",
        stiffness: SERVICE_CARD.animation.movement.stiffness,
        damping: SERVICE_CARD.animation.movement.damping,
        mass: SERVICE_CARD.animation.movement.mass
      },
      scale: {
        type: "spring",
        stiffness: SERVICE_CARD.animation.scale.stiffness,
        damping: SERVICE_CARD.animation.scale.damping,
        mass: SERVICE_CARD.animation.scale.mass
      },
      opacity: { duration: ANIMATION.durations.normal, delay: index * ANIMATION.delays.medium },
      zIndex: { duration: 0 }
    },
    onClick: () => navigate(href),
    onHoverStart,
    onHoverEnd,
    whileTap: { scale: ANIMATION.scales.reduced },
    children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV("div", {
      className: cn("relative w-full h-full overflow-hidden", "bg-gradient-to-br from-background-secondary to-background-tertiary", "border border-border", "shadow-2xl", "flex flex-col justify-between", "will-change-transform", SERVICE_CARD.styles.borderRadius, SERVICE_CARD.styles.padding),
      children: [
        children,
        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(motion.div, {
          className: "absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent pointer-events-none",
          initial: { opacity: 0 },
          animate: { opacity: isHovered ? 1 : 0 },
          transition: { duration: ANIMATION.durations.fast }
        }, undefined, false, undefined, this)
      ]
    }, undefined, true, undefined, this)
  }, undefined, false, undefined, this);
};

// src/components/cards/ServiceCardContent.tsx
var jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
var ServiceCardContent = ({
  title,
  description,
  icon,
  ctaText,
  isHovered
}) => {
  return /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(jsx_dev_runtime2.Fragment, {
    children: [
      /* @__PURE__ */ jsx_dev_runtime2.jsxDEV("div", {
        className: "relative z-10",
        children: [
          icon && /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(motion.div, {
            className: "mb-4 text-foreground-secondary",
            animate: {
              scale: isHovered ? SERVICE_CARD.animation.iconAnimation.scale : 1,
              x: isHovered ? SERVICE_CARD.animation.iconAnimation.x : 0,
              y: isHovered ? SERVICE_CARD.animation.iconAnimation.y : 0
            },
            transition: {
              type: "spring",
              stiffness: SERVICE_CARD.animation.scale.stiffness,
              damping: SERVICE_CARD.animation.scale.damping
            },
            children: icon
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime2.jsxDEV("h3", {
            className: "text-2xl font-bold mb-2 text-foreground",
            children: title
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime2.jsxDEV("p", {
            className: "text-foreground-secondary text-base leading-relaxed",
            children: description
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime2.jsxDEV("div", {
        className: "relative z-10",
        children: /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(motion.span, {
          className: "text-sm font-medium text-foreground-tertiary",
          animate: {
            opacity: isHovered ? 1 : 0.7
          },
          transition: { duration: 0.2 },
          children: ctaText
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
};

// src/components/cards/ServiceCardPattern.tsx
var jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
var ServiceCardPattern = ({ pattern }) => {
  if (!pattern)
    return null;
  return /* @__PURE__ */ jsx_dev_runtime3.jsxDEV("div", {
    className: `absolute inset-0 ${SERVICE_CARD.styles.patternOpacity} pointer-events-none`,
    children: pattern
  }, undefined, false, undefined, this);
};

// src/components/cards/ServiceCard.tsx
var jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime(), 1);
var ServiceCard = ({
  title,
  description,
  href,
  icon,
  pattern,
  index,
  totalCards,
  ctaText,
  stackOrder,
  hoveredIndex,
  onHoverStart,
  onHoverEnd
}) => {
  const interactions = useServiceCardInteractions({
    index,
    totalCards,
    stackOrder,
    hoveredIndex
  });
  return /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(ServiceCardLayout, {
    href,
    index,
    isHovered: interactions.isHovered,
    zIndex: interactions.zIndex,
    baseX: interactions.baseX,
    baseY: interactions.baseY,
    baseRotate: interactions.baseRotate,
    targetX: interactions.targetX,
    targetY: interactions.targetY,
    targetRotate: interactions.targetRotate,
    targetScale: interactions.targetScale,
    onHoverStart,
    onHoverEnd,
    children: [
      /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(ServiceCardPattern, {
        pattern
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(ServiceCardContent, {
        title,
        description,
        icon,
        ctaText,
        isHovered: interactions.isHovered
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
};
export {
  ServiceCard
};
