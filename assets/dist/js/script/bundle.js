/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 24);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v2.2.4
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-05-20T17:23Z
 */

(function( global, factory ) {

	if ( typeof module === "object" && typeof module.exports === "object" ) {
		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
}(typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Support: Firefox 18+
// Can't be in strict mode, several libs including ASP.NET trace
// the stack via arguments.caller.callee and Firefox dies if
// you try to trace through "use strict" call chains. (#13335)
//"use strict";
var arr = [];

var document = window.document;

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var support = {};



var
	version = "2.2.4",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android<4.1
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

	// Matches dashed string for camelizing
	rmsPrefix = /^-ms-/,
	rdashAlpha = /-([\da-z])/gi,

	// Used by jQuery.camelCase as callback to replace()
	fcamelCase = function( all, letter ) {
		return letter.toUpperCase();
	};

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// Start with an empty selector
	selector: "",

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {
		return num != null ?

			// Return just the one element from the set
			( num < 0 ? this[ num + this.length ] : this[ num ] ) :

			// Return all the elements in a clean array
			slice.call( this );
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;
		ret.context = this.context;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = jQuery.isArray( copy ) ) ) ) {

					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && jQuery.isArray( src ) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject( src ) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isFunction: function( obj ) {
		return jQuery.type( obj ) === "function";
	},

	isArray: Array.isArray,

	isWindow: function( obj ) {
		return obj != null && obj === obj.window;
	},

	isNumeric: function( obj ) {

		// parseFloat NaNs numeric-cast false positives (null|true|false|"")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		// adding 1 corrects loss of precision from parseFloat (#15100)
		var realStringObj = obj && obj.toString();
		return !jQuery.isArray( obj ) && ( realStringObj - parseFloat( realStringObj ) + 1 ) >= 0;
	},

	isPlainObject: function( obj ) {
		var key;

		// Not plain objects:
		// - Any object or value whose internal [[Class]] property is not "[object Object]"
		// - DOM nodes
		// - window
		if ( jQuery.type( obj ) !== "object" || obj.nodeType || jQuery.isWindow( obj ) ) {
			return false;
		}

		// Not own constructor property must be Object
		if ( obj.constructor &&
				!hasOwn.call( obj, "constructor" ) &&
				!hasOwn.call( obj.constructor.prototype || {}, "isPrototypeOf" ) ) {
			return false;
		}

		// Own properties are enumerated firstly, so to speed up,
		// if last one is own, then all properties are own
		for ( key in obj ) {}

		return key === undefined || hasOwn.call( obj, key );
	},

	isEmptyObject: function( obj ) {
		var name;
		for ( name in obj ) {
			return false;
		}
		return true;
	},

	type: function( obj ) {
		if ( obj == null ) {
			return obj + "";
		}

		// Support: Android<4.0, iOS<6 (functionish RegExp)
		return typeof obj === "object" || typeof obj === "function" ?
			class2type[ toString.call( obj ) ] || "object" :
			typeof obj;
	},

	// Evaluates a script in a global context
	globalEval: function( code ) {
		var script,
			indirect = eval;

		code = jQuery.trim( code );

		if ( code ) {

			// If the code includes a valid, prologue position
			// strict mode pragma, execute code by injecting a
			// script tag into the document.
			if ( code.indexOf( "use strict" ) === 1 ) {
				script = document.createElement( "script" );
				script.text = code;
				document.head.appendChild( script ).parentNode.removeChild( script );
			} else {

				// Otherwise, avoid the DOM node creation, insertion
				// and removal by using an indirect global eval

				indirect( code );
			}
		}
	},

	// Convert dashed to camelCase; used by the css and data modules
	// Support: IE9-11+
	// Microsoft forgot to hump their vendor prefix (#9572)
	camelCase: function( string ) {
		return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
	},

	nodeName: function( elem, name ) {
		return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// Support: Android<4.1
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// Bind a function to a context, optionally partially applying any
	// arguments.
	proxy: function( fn, context ) {
		var tmp, args, proxy;

		if ( typeof context === "string" ) {
			tmp = fn[ context ];
			context = fn;
			fn = tmp;
		}

		// Quick check to determine if target is callable, in the spec
		// this throws a TypeError, but we will just return undefined.
		if ( !jQuery.isFunction( fn ) ) {
			return undefined;
		}

		// Simulated bind
		args = slice.call( arguments, 2 );
		proxy = function() {
			return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
		};

		// Set the guid of unique handler to the same of original handler, so it can be removed
		proxy.guid = fn.guid = fn.guid || jQuery.guid++;

		return proxy;
	},

	now: Date.now,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

// JSHint would error on this code due to the Symbol not being defined in ES5.
// Defining this global in .jshintrc would create a danger of using the global
// unguarded in another place, it seems safer to just disable JSHint for these
// three lines.
/* jshint ignore: start */
if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}
/* jshint ignore: end */

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: iOS 8.2 (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = jQuery.type( obj );

	if ( type === "function" || jQuery.isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.2.1
 * http://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2015-10-17
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// General-purpose constants
	MAX_NEGATIVE = 1 << 31,

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// http://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

	rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,
	rescape = /'|\\/g,

	// CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	};

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, nidselect, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {

		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

				// ID selector
				if ( (m = match[1]) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( (elem = context.getElementById( m )) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && (elem = newContext.getElementById( m )) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( (m = match[3]) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!compilerCache[ selector + " " ] &&
				(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

				if ( nodeType !== 1 ) {
					newContext = context;
					newSelector = selector;

				// qSA looks outside Element context, which is not what we want
				// Thanks to Andrew Dupont for this workaround technique
				// Support: IE <=8
				// Exclude object elements
				} else if ( context.nodeName.toLowerCase() !== "object" ) {

					// Capture the context ID, setting it first if necessary
					if ( (nid = context.getAttribute( "id" )) ) {
						nid = nid.replace( rescape, "\\$&" );
					} else {
						context.setAttribute( "id", (nid = expando) );
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					nidselect = ridentifier.test( nid ) ? "#" + nid : "[id='" + nid + "']";
					while ( i-- ) {
						groups[i] = nidselect + " " + toSelector( groups[i] );
					}
					newSelector = groups.join( "," );

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;
				}

				if ( newSelector ) {
					try {
						push.apply( results,
							newContext.querySelectorAll( newSelector )
						);
						return results;
					} catch ( qsaError ) {
					} finally {
						if ( nid === expando ) {
							context.removeAttribute( "id" );
						}
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created div and expects a boolean result
 */
function assert( fn ) {
	var div = document.createElement("div");

	try {
		return !!fn( div );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( div.parentNode ) {
			div.parentNode.removeChild( div );
		}
		// release memory in IE
		div = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			( ~b.sourceIndex || MAX_NEGATIVE ) -
			( ~a.sourceIndex || MAX_NEGATIVE );

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = elem && (elem.ownerDocument || elem).documentElement;
	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, parent,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9-11, Edge
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	if ( (parent = document.defaultView) && parent.top !== parent ) {
		// Support: IE 11
		if ( parent.addEventListener ) {
			parent.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( parent.attachEvent ) {
			parent.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( div ) {
		div.className = "i";
		return !div.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( div ) {
		div.appendChild( document.createComment("") );
		return !div.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( div ) {
		docElem.appendChild( div ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	});

	// ID find and filter
	if ( support.getById ) {
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var m = context.getElementById( id );
				return m ? [ m ] : [];
			}
		};
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
	} else {
		// Support: IE6/7
		// getElementById is not reliable as a find shortcut
		delete Expr.find["ID"];

		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See http://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( div ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// http://bugs.jquery.com/ticket/12359
			docElem.appendChild( div ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// http://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( div.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !div.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !div.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !div.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibing-combinator selector` fails
			if ( !div.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( div ) {
			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement("input");
			input.setAttribute( "type", "hidden" );
			div.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( div.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( !div.querySelectorAll(":enabled").length ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			div.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( div ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( div, "div" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( div, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === document ? -1 :
				b === document ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	// Make sure that attribute selectors are quoted
	expr = expr.replace( rattributeQuotes, "='$1']" );

	if ( support.matchesSelector && documentIsHTML &&
		!compilerCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || (node[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								(outerCache[ node.uniqueID ] = {});

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {
							// Use previously-cached element index if available
							if ( useCache ) {
								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] || (node[ expando ] = {});

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												(outerCache[ node.uniqueID ] = {});

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": function( elem ) {
			return elem.disabled === false;
		},

		"disabled": function( elem ) {
			return elem.disabled === true;
		},

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		checkNonElements = base && dir === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

						if ( (oldCache = uniqueCache[ dir ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ dir ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context === document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					if ( !context && elem.ownerDocument !== document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context || document, xml) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				support.getById && context.nodeType === 9 && documentIsHTML &&
				Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( div1 ) {
	// Should return 1, but returns 4 (following)
	return div1.compareDocumentPosition( document.createElement("div") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( div ) {
	div.innerHTML = "<a href='#'></a>";
	return div.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( div ) {
	div.innerHTML = "<input/>";
	div.firstChild.setAttribute( "value", "" );
	return div.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( div ) {
	return div.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;



var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;

var rsingleTag = ( /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/ );



var risSimple = /^.[^:#\[\.,]*$/;

// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( jQuery.isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			/* jshint -W018 */
			return !!qualifier.call( elem, i, elem ) !== not;
		} );

	}

	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );

	}

	if ( typeof qualifier === "string" ) {
		if ( risSimple.test( qualifier ) ) {
			return jQuery.filter( qualifier, elements, not );
		}

		qualifier = jQuery.filter( qualifier, elements );
	}

	return jQuery.grep( elements, function( elem ) {
		return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
	} );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	return elems.length === 1 && elem.nodeType === 1 ?
		jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [] :
		jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
			return elem.nodeType === 1;
		} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i,
			len = this.length,
			ret = [],
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		// Needed because $( selector, context ) becomes $( context ).find( selector )
		ret = this.pushStack( len > 1 ? jQuery.unique( ret ) : ret );
		ret.selector = this.selector ? this.selector + " " + selector : selector;
		return ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( jQuery.isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					// Support: Blackberry 4.6
					// gEBID returns nodes no longer in the document (#6963)
					if ( elem && elem.parentNode ) {

						// Inject the element directly into the jQuery object
						this.length = 1;
						this[ 0 ] = elem;
					}

					this.context = document;
					this.selector = selector;
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this.context = this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( jQuery.isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		if ( selector.selector !== undefined ) {
			this.selector = selector.selector;
			this.context = selector.context;
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			pos = rneedsContext.test( selectors ) || typeof selectors !== "string" ?
				jQuery( selectors, context || this.context ) :
				0;

		for ( ; i < l; i++ ) {
			for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

				// Always skip document fragments
				if ( cur.nodeType < 11 && ( pos ?
					pos.index( cur ) > -1 :

					// Don't pass non-elements to Sizzle
					cur.nodeType === 1 &&
						jQuery.find.matchesSelector( cur, selectors ) ) ) {

					matched.push( cur );
					break;
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
		return elem.contentDocument || jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnotwhite = ( /\S+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnotwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( jQuery.isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && jQuery.type( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, listener list, final state
				[ "resolve", "done", jQuery.Callbacks( "once memory" ), "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ), "rejected" ],
				[ "notify", "progress", jQuery.Callbacks( "memory" ) ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				then: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;
					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {
							var fn = jQuery.isFunction( fns[ i ] ) && fns[ i ];

							// deferred[ done | fail | progress ] for forwarding actions to newDefer
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && jQuery.isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this === promise ? newDefer.promise() : this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Keep pipe for back-compat
		promise.pipe = promise.then;

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 3 ];

			// promise[ done | fail | progress ] = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add( function() {

					// state = [ resolved | rejected ]
					state = stateString;

				// [ reject_list | resolve_list ].disable; progress_list.lock
				}, tuples[ i ^ 1 ][ 2 ].disable, tuples[ 2 ][ 2 ].lock );
			}

			// deferred[ resolve | reject | notify ]
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? promise : this, arguments );
				return this;
			};
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( subordinate /* , ..., subordinateN */ ) {
		var i = 0,
			resolveValues = slice.call( arguments ),
			length = resolveValues.length,

			// the count of uncompleted subordinates
			remaining = length !== 1 ||
				( subordinate && jQuery.isFunction( subordinate.promise ) ) ? length : 0,

			// the master Deferred.
			// If resolveValues consist of only a single Deferred, just use that.
			deferred = remaining === 1 ? subordinate : jQuery.Deferred(),

			// Update function for both resolve and progress values
			updateFunc = function( i, contexts, values ) {
				return function( value ) {
					contexts[ i ] = this;
					values[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( values === progressValues ) {
						deferred.notifyWith( contexts, values );
					} else if ( !( --remaining ) ) {
						deferred.resolveWith( contexts, values );
					}
				};
			},

			progressValues, progressContexts, resolveContexts;

		// Add listeners to Deferred subordinates; treat others as resolved
		if ( length > 1 ) {
			progressValues = new Array( length );
			progressContexts = new Array( length );
			resolveContexts = new Array( length );
			for ( ; i < length; i++ ) {
				if ( resolveValues[ i ] && jQuery.isFunction( resolveValues[ i ].promise ) ) {
					resolveValues[ i ].promise()
						.progress( updateFunc( i, progressContexts, progressValues ) )
						.done( updateFunc( i, resolveContexts, resolveValues ) )
						.fail( deferred.reject );
				} else {
					--remaining;
				}
			}
		}

		// If we're not waiting on anything, resolve the master
		if ( !remaining ) {
			deferred.resolveWith( resolveContexts, resolveValues );
		}

		return deferred.promise();
	}
} );


// The deferred used on DOM ready
var readyList;

jQuery.fn.ready = function( fn ) {

	// Add the callback
	jQuery.ready.promise().done( fn );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Hold (or release) the ready event
	holdReady: function( hold ) {
		if ( hold ) {
			jQuery.readyWait++;
		} else {
			jQuery.ready( true );
		}
	},

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );

		// Trigger any bound ready events
		if ( jQuery.fn.triggerHandler ) {
			jQuery( document ).triggerHandler( "ready" );
			jQuery( document ).off( "ready" );
		}
	}
} );

/**
 * The ready event handler and self cleanup method
 */
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

jQuery.ready.promise = function( obj ) {
	if ( !readyList ) {

		readyList = jQuery.Deferred();

		// Catch cases where $(document).ready() is called
		// after the browser event has already occurred.
		// Support: IE9-10 only
		// Older IE sometimes signals "interactive" too soon
		if ( document.readyState === "complete" ||
			( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

			// Handle it asynchronously to allow scripts the opportunity to delay ready
			window.setTimeout( jQuery.ready );

		} else {

			// Use the handy event callback
			document.addEventListener( "DOMContentLoaded", completed );

			// A fallback to window.onload, that will always work
			window.addEventListener( "load", completed );
		}
	}
	return readyList.promise( obj );
};

// Kick off the DOM ready check even if the user does not
jQuery.ready.promise();




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( jQuery.type( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !jQuery.isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	return chainable ?
		elems :

		// Gets
		bulk ?
			fn.call( elems ) :
			len ? fn( elems[ 0 ], key ) : emptyGet;
};
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	/* jshint -W018 */
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	register: function( owner, initial ) {
		var value = initial || {};

		// If it is a node unlikely to be stringify-ed or looped over
		// use plain assignment
		if ( owner.nodeType ) {
			owner[ this.expando ] = value;

		// Otherwise secure it in a non-enumerable, non-writable property
		// configurability must be true to allow the property to be
		// deleted with the delete operator
		} else {
			Object.defineProperty( owner, this.expando, {
				value: value,
				writable: true,
				configurable: true
			} );
		}
		return owner[ this.expando ];
	},
	cache: function( owner ) {

		// We can accept data for non-element nodes in modern browsers,
		// but we should not, see #8335.
		// Always return an empty object.
		if ( !acceptData( owner ) ) {
			return {};
		}

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		if ( typeof data === "string" ) {
			cache[ data ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ prop ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :
			owner[ this.expando ] && owner[ this.expando ][ key ];
	},
	access: function( owner, key, value ) {
		var stored;

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			stored = this.get( owner, key );

			return stored !== undefined ?
				stored : this.get( owner, jQuery.camelCase( key ) );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i, name, camel,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key === undefined ) {
			this.register( owner );

		} else {

			// Support array or space separated string of keys
			if ( jQuery.isArray( key ) ) {

				// If "name" is an array of keys...
				// When data is initially created, via ("key", "val") signature,
				// keys will be converted to camelCase.
				// Since there is no way to tell _how_ a key was added, remove
				// both plain key and camelCase key. #12786
				// This will only penalize the array argument path.
				name = key.concat( key.map( jQuery.camelCase ) );
			} else {
				camel = jQuery.camelCase( key );

				// Try the string as a key before any manipulation
				if ( key in cache ) {
					name = [ key, camel ];
				} else {

					// If a key with the spaces exists, use it.
					// Otherwise, create an array by matching non-whitespace
					name = camel;
					name = name in cache ?
						[ name ] : ( name.match( rnotwhite ) || [] );
				}
			}

			i = name.length;

			while ( i-- ) {
				delete cache[ name[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <= 35-45+
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://code.google.com/p/chromium/issues/detail?id=378607
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = data === "true" ? true :
					data === "false" ? false :
					data === "null" ? null :

					// Only convert to a number if it doesn't change the string
					+data + "" === data ? +data :
					rbrace.test( data ) ? jQuery.parseJSON( data ) :
					data;
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE11+
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = jQuery.camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data, camelKey;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// with the key as-is
				data = dataUser.get( elem, key ) ||

					// Try to find dashed key if it exists (gh-2779)
					// This is for 2.2.x only
					dataUser.get( elem, key.replace( rmultiDash, "-$&" ).toLowerCase() );

				if ( data !== undefined ) {
					return data;
				}

				camelKey = jQuery.camelCase( key );

				// Attempt to get data from the cache
				// with the key camelized
				data = dataUser.get( elem, camelKey );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, camelKey, undefined );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			camelKey = jQuery.camelCase( key );
			this.each( function() {

				// First, attempt to store a copy or reference of any
				// data that might've been store with a camelCased key.
				var data = dataUser.get( this, camelKey );

				// For HTML5 data-* attribute interop, we have to
				// store property names with dashes in a camelCase form.
				// This might not apply to all properties...*
				dataUser.set( this, camelKey, value );

				// *... In the case of properties that might _actually_
				// have dashes, we need to also store a copy of that
				// unchanged property.
				if ( key.indexOf( "-" ) > -1 && data !== undefined ) {
					dataUser.set( this, key, value );
				}
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || jQuery.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var isHidden = function( elem, el ) {

		// isHidden might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;
		return jQuery.css( elem, "display" ) === "none" ||
			!jQuery.contains( elem.ownerDocument, elem );
	};



function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted,
		scale = 1,
		maxIterations = 20,
		currentValue = tween ?
			function() { return tween.cur(); } :
			function() { return jQuery.css( elem, prop, "" ); },
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		do {

			// If previous iteration zeroed out, double until we get *something*.
			// Use string for doubling so we don't accidentally see scale as unchanged below
			scale = scale || ".5";

			// Adjust and apply
			initialInUnit = initialInUnit / scale;
			jQuery.style( elem, prop, initialInUnit + unit );

		// Update scale, tolerating zero or NaN from tween.cur()
		// Break the loop if scale is unchanged or perfect, or if we've just had enough.
		} while (
			scale !== ( scale = currentValue() / initial ) && scale !== 1 && --maxIterations
		);
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([\w:-]+)/ );

var rscriptType = ( /^$|\/(?:java|ecma)script/i );



// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// Support: IE9
	option: [ 1, "<select multiple='multiple'>", "</select>" ],

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

// Support: IE9
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;


function getAll( context, tag ) {

	// Support: IE9-11+
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret = typeof context.getElementsByTagName !== "undefined" ?
			context.getElementsByTagName( tag || "*" ) :
			typeof context.querySelectorAll !== "undefined" ?
				context.querySelectorAll( tag || "*" ) :
			[];

	return tag === undefined || tag && jQuery.nodeName( context, tag ) ?
		jQuery.merge( [ context ], ret ) :
		ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, contains, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( jQuery.type( elem ) === "object" ) {

				// Support: Android<4.1, PhantomJS<2
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android<4.1, PhantomJS<2
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		contains = jQuery.contains( elem.ownerDocument, elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( contains ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0-4.3, Safari<=5.1
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Safari<=5.1, Android<4.2
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE<=11+
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
} )();


var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE9
// See #13393 for more info
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = {};
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnotwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnotwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( event ) {

		// Make a writable jQuery.Event from the native event object
		event = jQuery.event.fix( event );

		var i, j, ret, matched, handleObj,
			handlerQueue = [],
			args = slice.call( arguments ),
			handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;
		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// Triggered event must either 1) have no namespace, or 2) have namespace(s)
				// a subset or equal to those in the bound event (both can have no namespace).
				if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, matches, sel, handleObj,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Support (at least): Chrome, IE9
		// Find delegate handlers
		// Black-hole SVG <use> instance trees (#13180)
		//
		// Support: Firefox<=42+
		// Avoid non-left-click in FF but don't block IE radio events (#3861, gh-2343)
		if ( delegateCount && cur.nodeType &&
			( event.type !== "click" || isNaN( event.button ) || event.button < 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && ( cur.disabled !== true || event.type !== "click" ) ) {
					matches = [];
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matches[ sel ] === undefined ) {
							matches[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matches[ sel ] ) {
							matches.push( handleObj );
						}
					}
					if ( matches.length ) {
						handlerQueue.push( { elem: cur, handlers: matches } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: this, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	// Includes some event props shared by KeyEvent and MouseEvent
	props: ( "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase " +
		"metaKey relatedTarget shiftKey target timeStamp view which" ).split( " " ),

	fixHooks: {},

	keyHooks: {
		props: "char charCode key keyCode".split( " " ),
		filter: function( event, original ) {

			// Add which for key events
			if ( event.which == null ) {
				event.which = original.charCode != null ? original.charCode : original.keyCode;
			}

			return event;
		}
	},

	mouseHooks: {
		props: ( "button buttons clientX clientY offsetX offsetY pageX pageY " +
			"screenX screenY toElement" ).split( " " ),
		filter: function( event, original ) {
			var eventDoc, doc, body,
				button = original.button;

			// Calculate pageX/Y if missing and clientX/Y available
			if ( event.pageX == null && original.clientX != null ) {
				eventDoc = event.target.ownerDocument || document;
				doc = eventDoc.documentElement;
				body = eventDoc.body;

				event.pageX = original.clientX +
					( doc && doc.scrollLeft || body && body.scrollLeft || 0 ) -
					( doc && doc.clientLeft || body && body.clientLeft || 0 );
				event.pageY = original.clientY +
					( doc && doc.scrollTop  || body && body.scrollTop  || 0 ) -
					( doc && doc.clientTop  || body && body.clientTop  || 0 );
			}

			// Add which for click: 1 === left; 2 === middle; 3 === right
			// Note: button is not normalized, so don't use it
			if ( !event.which && button !== undefined ) {
				event.which = ( button & 1 ? 1 : ( button & 2 ? 3 : ( button & 4 ? 2 : 0 ) ) );
			}

			return event;
		}
	},

	fix: function( event ) {
		if ( event[ jQuery.expando ] ) {
			return event;
		}

		// Create a writable copy of the event object and normalize some properties
		var i, prop, copy,
			type = event.type,
			originalEvent = event,
			fixHook = this.fixHooks[ type ];

		if ( !fixHook ) {
			this.fixHooks[ type ] = fixHook =
				rmouseEvent.test( type ) ? this.mouseHooks :
				rkeyEvent.test( type ) ? this.keyHooks :
				{};
		}
		copy = fixHook.props ? this.props.concat( fixHook.props ) : this.props;

		event = new jQuery.Event( originalEvent );

		i = copy.length;
		while ( i-- ) {
			prop = copy[ i ];
			event[ prop ] = originalEvent[ prop ];
		}

		// Support: Cordova 2.5 (WebKit) (#13255)
		// All events should have a target; Cordova deviceready doesn't
		if ( !event.target ) {
			event.target = document;
		}

		// Support: Safari 6.0+, Chrome<28
		// Target should not be a text node (#504, #13143)
		if ( event.target.nodeType === 3 ) {
			event.target = event.target.parentNode;
		}

		return fixHook.filter ? fixHook.filter( event, originalEvent ) : event;
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		focus: {

			// Fire native event if possible so blur/focus sequence is correct
			trigger: function() {
				if ( this !== safeActiveElement() && this.focus ) {
					this.focus();
					return false;
				}
			},
			delegateType: "focusin"
		},
		blur: {
			trigger: function() {
				if ( this === safeActiveElement() && this.blur ) {
					this.blur();
					return false;
				}
			},
			delegateType: "focusout"
		},
		click: {

			// For checkbox, fire native event so checked state will be right
			trigger: function() {
				if ( this.type === "checkbox" && this.click && jQuery.nodeName( this, "input" ) ) {
					this.click();
					return false;
				}
			},

			// For cross-browser consistency, don't fire native .click() on links
			_default: function( event ) {
				return jQuery.nodeName( event.target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android<4.0
				src.returnValue === false ?
			returnTrue :
			returnFalse;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || jQuery.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://code.google.com/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {
	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,

	// Support: IE 10-11, Edge 10240+
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rscriptTypeMasked = /^true\/(.*)/,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Manipulating tables requires a tbody
function manipulationTarget( elem, content ) {
	return jQuery.nodeName( elem, "table" ) &&
		jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ?

		elem.getElementsByTagName( "tbody" )[ 0 ] ||
			elem.appendChild( elem.ownerDocument.createElement( "tbody" ) ) :
		elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	var match = rscriptTypeMasked.exec( elem.type );

	if ( match ) {
		elem.type = match[ 1 ];
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.access( src );
		pdataCur = dataPriv.set( dest, pdataOld );
		events = pdataOld.events;

		if ( events ) {
			delete pdataCur.handle;
			pdataCur.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = concat.apply( [], args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		isFunction = jQuery.isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( isFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( isFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android<4.1, PhantomJS<2
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl ) {
								jQuery._evalUrl( node.src );
							}
						} else {
							jQuery.globalEval( node.textContent.replace( rcleanScript, "" ) );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html.replace( rxhtmlTag, "<$1></$2>" );
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = jQuery.contains( elem.ownerDocument, elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <= 35-45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <= 35-45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {

	// Keep domManip exposed until 3.0 (gh-2225)
	domManip: domManip,

	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: QtWebKit
			// .get() because push.apply(_, arraylike) throws
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );


var iframe,
	elemdisplay = {

		// Support: Firefox
		// We have to pre-define these values for FF (#10227)
		HTML: "block",
		BODY: "block"
	};

/**
 * Retrieve the actual display of a element
 * @param {String} name nodeName of the element
 * @param {Object} doc Document object
 */

// Called only from within defaultDisplay
function actualDisplay( name, doc ) {
	var elem = jQuery( doc.createElement( name ) ).appendTo( doc.body ),

		display = jQuery.css( elem[ 0 ], "display" );

	// We don't have any data stored on the element,
	// so use "detach" method as fast way to get rid of the element
	elem.detach();

	return display;
}

/**
 * Try to determine the default display value of an element
 * @param {String} nodeName
 */
function defaultDisplay( nodeName ) {
	var doc = document,
		display = elemdisplay[ nodeName ];

	if ( !display ) {
		display = actualDisplay( nodeName, doc );

		// If the simple way fails, read from inside an iframe
		if ( display === "none" || !display ) {

			// Use the already-created iframe if possible
			iframe = ( iframe || jQuery( "<iframe frameborder='0' width='0' height='0'/>" ) )
				.appendTo( doc.documentElement );

			// Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
			doc = iframe[ 0 ].contentDocument;

			// Support: IE
			doc.write();
			doc.close();

			display = actualDisplay( nodeName, doc );
			iframe.detach();
		}

		// Store the correct default display
		elemdisplay[ nodeName ] = display;
	}

	return display;
}
var rmargin = ( /^margin/ );

var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE<=11+, Firefox<=30+ (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

var swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};


var documentElement = document.documentElement;



( function() {
	var pixelPositionVal, boxSizingReliableVal, pixelMarginRightVal, reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE9-11+
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" +
		"padding:0;margin-top:1px;position:absolute";
	container.appendChild( div );

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {
		div.style.cssText =

			// Support: Firefox<29, Android 2.3
			// Vendor-prefix box-sizing
			"-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;" +
			"position:relative;display:block;" +
			"margin:auto;border:1px;padding:1px;" +
			"top:1%;width:50%";
		div.innerHTML = "";
		documentElement.appendChild( container );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";
		reliableMarginLeftVal = divStyle.marginLeft === "2px";
		boxSizingReliableVal = divStyle.width === "4px";

		// Support: Android 4.0 - 4.3 only
		// Some styles come back with percentage values, even though they shouldn't
		div.style.marginRight = "50%";
		pixelMarginRightVal = divStyle.marginRight === "4px";

		documentElement.removeChild( container );
	}

	jQuery.extend( support, {
		pixelPosition: function() {

			// This test is executed only once but we still do memoizing
			// since we can use the boxSizingReliable pre-computing.
			// No need to check if the test was already performed, though.
			computeStyleTests();
			return pixelPositionVal;
		},
		boxSizingReliable: function() {
			if ( boxSizingReliableVal == null ) {
				computeStyleTests();
			}
			return boxSizingReliableVal;
		},
		pixelMarginRight: function() {

			// Support: Android 4.0-4.3
			// We're checking for boxSizingReliableVal here instead of pixelMarginRightVal
			// since that compresses better and they're computed together anyway.
			if ( boxSizingReliableVal == null ) {
				computeStyleTests();
			}
			return pixelMarginRightVal;
		},
		reliableMarginLeft: function() {

			// Support: IE <=8 only, Android 4.0 - 4.3 only, Firefox <=3 - 37
			if ( boxSizingReliableVal == null ) {
				computeStyleTests();
			}
			return reliableMarginLeftVal;
		},
		reliableMarginRight: function() {

			// Support: Android 2.3
			// Check if div with explicit width and no margin-right incorrectly
			// gets computed margin-right based on width of container. (#3333)
			// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
			// This support function is only executed once so no memoizing is needed.
			var ret,
				marginDiv = div.appendChild( document.createElement( "div" ) );

			// Reset CSS: box-sizing; display; margin; border; padding
			marginDiv.style.cssText = div.style.cssText =

				// Support: Android 2.3
				// Vendor-prefix box-sizing
				"-webkit-box-sizing:content-box;box-sizing:content-box;" +
				"display:block;margin:0;border:0;padding:0";
			marginDiv.style.marginRight = marginDiv.style.width = "0";
			div.style.width = "1px";
			documentElement.appendChild( container );

			ret = !parseFloat( window.getComputedStyle( marginDiv ).marginRight );

			documentElement.removeChild( container );
			div.removeChild( marginDiv );

			return ret;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,
		style = elem.style;

	computed = computed || getStyles( elem );
	ret = computed ? computed.getPropertyValue( name ) || computed[ name ] : undefined;

	// Support: Opera 12.1x only
	// Fall back to style even without computed
	// computed is undefined for elems on document fragments
	if ( ( ret === "" || ret === undefined ) && !jQuery.contains( elem.ownerDocument, elem ) ) {
		ret = jQuery.style( elem, name );
	}

	// Support: IE9
	// getPropertyValue is only needed for .css('filter') (#12537)
	if ( computed ) {

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// http://dev.w3.org/csswg/cssom/#resolved-values
		if ( !support.pixelMarginRight() && rnumnonpx.test( ret ) && rmargin.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE9-11+
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,

	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	},

	cssPrefixes = [ "Webkit", "O", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style;

// Return a css property mapped to a potentially vendor prefixed property
function vendorPropName( name ) {

	// Shortcut for names that are not vendor prefixed
	if ( name in emptyStyle ) {
		return name;
	}

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

function setPositiveNumber( elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
	var i = extra === ( isBorderBox ? "border" : "content" ) ?

		// If we already have the right measurement, avoid augmentation
		4 :

		// Otherwise initialize for horizontal or vertical properties
		name === "width" ? 1 : 0,

		val = 0;

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin, so add it if we want it
		if ( extra === "margin" ) {
			val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
		}

		if ( isBorderBox ) {

			// border-box includes padding, so remove it if we want content
			if ( extra === "content" ) {
				val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// At this point, extra isn't border nor margin, so remove border
			if ( extra !== "margin" ) {
				val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		} else {

			// At this point, extra isn't content, so add padding
			val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// At this point, extra isn't content nor padding, so add border
			if ( extra !== "padding" ) {
				val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	return val;
}

function getWidthOrHeight( elem, name, extra ) {

	// Start with offset property, which is equivalent to the border-box value
	var valueIsBorderBox = true,
		val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
		styles = getStyles( elem ),
		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

	// Some non-html elements return undefined for offsetWidth, so check for null/undefined
	// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
	// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
	if ( val <= 0 || val == null ) {

		// Fall back to computed then uncomputed css if necessary
		val = curCSS( elem, name, styles );
		if ( val < 0 || val == null ) {
			val = elem.style[ name ];
		}

		// Computed unit is not pixels. Stop here and return.
		if ( rnumnonpx.test( val ) ) {
			return val;
		}

		// Check for style in case a browser which returns unreliable values
		// for getComputedStyle silently falls back to the reliable elem.style
		valueIsBorderBox = isBorderBox &&
			( support.boxSizingReliable() || val === elem.style[ name ] );

		// Normalize "", auto, and prepare for extra
		val = parseFloat( val ) || 0;
	}

	// Use the active box-sizing model to add/subtract irrelevant styles
	return ( val +
		augmentWidthOrHeight(
			elem,
			name,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles
		)
	) + "px";
}

function showHide( elements, show ) {
	var display, elem, hidden,
		values = [],
		index = 0,
		length = elements.length;

	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		values[ index ] = dataPriv.get( elem, "olddisplay" );
		display = elem.style.display;
		if ( show ) {

			// Reset the inline display of this element to learn if it is
			// being hidden by cascaded rules or not
			if ( !values[ index ] && display === "none" ) {
				elem.style.display = "";
			}

			// Set elements which have been overridden with display: none
			// in a stylesheet to whatever the default browser style is
			// for such an element
			if ( elem.style.display === "" && isHidden( elem ) ) {
				values[ index ] = dataPriv.access(
					elem,
					"olddisplay",
					defaultDisplay( elem.nodeName )
				);
			}
		} else {
			hidden = isHidden( elem );

			if ( display !== "none" || !hidden ) {
				dataPriv.set(
					elem,
					"olddisplay",
					hidden ? display : jQuery.css( elem, "display" )
				);
			}
		}
	}

	// Set the display of most of the elements in a second loop
	// to avoid the constant reflow
	for ( index = 0; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}
		if ( !show || elem.style.display === "none" || elem.style.display === "" ) {
			elem.style.display = show ? values[ index ] || "" : "none";
		}
	}

	return elements;
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {
		"float": "cssFloat"
	},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = jQuery.camelCase( name ),
			style = elem.style;

		name = jQuery.cssProps[ origName ] ||
			( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			if ( type === "number" ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// Support: IE9-11+
			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				style[ name ] = value;
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = jQuery.camelCase( name );

		// Make sure that we're working with the right name
		name = jQuery.cssProps[ origName ] ||
			( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}
		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( i, name ) {
	jQuery.cssHooks[ name ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&
					elem.offsetWidth === 0 ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, name, extra );
						} ) :
						getWidthOrHeight( elem, name, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = extra && getStyles( elem ),
				subtract = extra && augmentWidthOrHeight(
					elem,
					name,
					extra,
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
					styles
				);

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ name ] = value;
				value = jQuery.css( elem, name );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// Support: Android 2.3
jQuery.cssHooks.marginRight = addGetHookIf( support.reliableMarginRight,
	function( elem, computed ) {
		if ( computed ) {
			return swap( elem, { "display": "inline-block" },
				curCSS, [ elem, "marginRight" ] );
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( !rmargin.test( prefix ) ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( jQuery.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	},
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHidden( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 &&
				( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
					jQuery.cssHooks[ tween.prop ] ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE9
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back Compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, timerId,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = jQuery.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4 ; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	/* jshint validthis: true */
	var prop, value, toggle, tween, hooks, oldfire, display, checkDisplay,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHidden( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Handle queue: false promises
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Height/width overflow pass
	if ( elem.nodeType === 1 && ( "height" in props || "width" in props ) ) {

		// Make sure that nothing sneaks out
		// Record all 3 overflow attributes because IE9-10 do not
		// change the overflow attribute when overflowX and
		// overflowY are set to the same value
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Set display property to inline-block for height/width
		// animations on inline elements that are having width/height animated
		display = jQuery.css( elem, "display" );

		// Test default display if display is currently "none"
		checkDisplay = display === "none" ?
			dataPriv.get( elem, "olddisplay" ) || defaultDisplay( elem.nodeName ) : display;

		if ( checkDisplay === "inline" && jQuery.css( elem, "float" ) === "none" ) {
			style.display = "inline-block";
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// show/hide pass
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.exec( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// If there is dataShow left over from a stopped hide or show
				// and we are going to proceed with show, we should pretend to be hidden
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );

		// Any non-fx value stops us from restoring the original display value
		} else {
			display = undefined;
		}
	}

	if ( !jQuery.isEmptyObject( orig ) ) {
		if ( dataShow ) {
			if ( "hidden" in dataShow ) {
				hidden = dataShow.hidden;
			}
		} else {
			dataShow = dataPriv.access( elem, "fxshow", {} );
		}

		// Store state if its toggle - enables .stop().toggle() to "reverse"
		if ( toggle ) {
			dataShow.hidden = !hidden;
		}
		if ( hidden ) {
			jQuery( elem ).show();
		} else {
			anim.done( function() {
				jQuery( elem ).hide();
			} );
		}
		anim.done( function() {
			var prop;

			dataPriv.remove( elem, "fxshow" );
			for ( prop in orig ) {
				jQuery.style( elem, prop, orig[ prop ] );
			}
		} );
		for ( prop in orig ) {
			tween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );

			if ( !( prop in dataShow ) ) {
				dataShow[ prop ] = tween.start;
				if ( hidden ) {
					tween.end = tween.start;
					tween.start = prop === "width" || prop === "height" ? 1 : 0;
				}
			}
		}

	// If this is a noop like .hide().hide(), restore an overwritten display value
	} else if ( ( display === "none" ? defaultDisplay( elem.nodeName ) : display ) === "inline" ) {
		style.display = display;
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = jQuery.camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( jQuery.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length ; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			if ( percent < 1 && length ) {
				return remaining;
			} else {
				deferred.resolveWith( elem, [ animation ] );
				return false;
			}
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length ; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length ; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( jQuery.isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					jQuery.proxy( result.stop, result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( jQuery.isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	// attach callbacks from options
	return animation.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );
}

jQuery.Animation = jQuery.extend( Animation, {
	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( jQuery.isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnotwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length ; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			jQuery.isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
	};

	opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ?
		opt.duration : opt.duration in jQuery.fx.speeds ?
			jQuery.fx.speeds[ opt.duration ] : jQuery.fx.speeds._default;

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( jQuery.isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHidden ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = jQuery.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Checks the timer has not already been removed
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	if ( timer() ) {
		jQuery.fx.start();
	} else {
		jQuery.timers.pop();
	}
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( !timerId ) {
		timerId = window.setInterval( jQuery.fx.tick, jQuery.fx.interval );
	}
};

jQuery.fx.stop = function() {
	window.clearInterval( timerId );

	timerId = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// http://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: iOS<=5.1, Android<=4.2+
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE<=11+
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: Android<=2.3
	// Options inside disabled selects are incorrectly marked as disabled
	select.disabled = true;
	support.optDisabled = !opt.disabled;

	// Support: IE<=11+
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// All attributes are lowercase
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			name = name.toLowerCase();
			hooks = jQuery.attrHooks[ name ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					jQuery.nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name, propName,
			i = 0,
			attrNames = value && value.match( rnotwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				propName = jQuery.propFix[ name ] || name;

				// Boolean attributes get special treatment (#10870)
				if ( jQuery.expr.match.bool.test( name ) ) {

					// Set corresponding property to false
					elem[ propName ] = false;
				}

				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};
jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle;
		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ name ];
			attrHandle[ name ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				name.toLowerCase() :
				null;
			attrHandle[ name ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				return tabindex ?
					parseInt( tabindex, 10 ) :
					rfocusable.test( elem.nodeName ) ||
						rclickable.test( elem.nodeName ) && elem.href ?
							0 :
							-1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {
			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {
			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




var rclass = /[\t\r\n\f]/g;

function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( typeof value === "string" && value ) {
			classes = value.match( rnotwhite ) || [];

			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 &&
					( " " + curValue + " " ).replace( rclass, " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = jQuery.trim( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		if ( typeof value === "string" && value ) {
			classes = value.match( rnotwhite ) || [];

			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 &&
					( " " + curValue + " " ).replace( rclass, " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = jQuery.trim( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value;

		if ( typeof stateVal === "boolean" && type === "string" ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( type === "string" ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = value.match( rnotwhite ) || [];

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + getClass( elem ) + " " ).replace( rclass, " " )
					.indexOf( className ) > -1
			) {
				return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g,
	rspaces = /[\x20\t\r\n\f]+/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, isFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				return typeof ret === "string" ?

					// Handle most common string cases
					ret.replace( rreturn, "" ) :

					// Handle cases where value is null/undef or number
					ret == null ? "" : ret;
			}

			return;
		}

		isFunction = jQuery.isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( isFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( jQuery.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE10-11+
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					jQuery.trim( jQuery.text( elem ) ).replace( rspaces, " " );
			}
		},
		select: {
			get: function( elem ) {
				var value, option,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one" || index < 0,
					values = one ? null : [],
					max = one ? index + 1 : options.length,
					i = index < 0 ?
						max :
						one ? index : 0;

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							( support.optDisabled ?
								!option.disabled : option.getAttribute( "disabled" ) === null ) &&
							( !option.parentNode.disabled ||
								!jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];
					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( jQuery.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {

			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;
					elem[ type ]();
					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


jQuery.each( ( "blur focus focusin focusout load resize scroll unload click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup error contextmenu" ).split( " " ),
	function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
} );

jQuery.fn.extend( {
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );




support.focusin = "onfocusin" in window;


// Support: Firefox
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome, Safari
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://code.google.com/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = jQuery.now();

var rquery = ( /\?/ );



// Support: Android 2.3
// Workaround failure to string-cast null input
jQuery.parseJSON = function( data ) {
	return JSON.parse( data + "" );
};


// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE9
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rhash = /#.*$/,
	rts = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnotwhite ) || [];

		if ( jQuery.isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

		// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",
		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": jQuery.parseJSON,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// The jqXHR state
			state = 0,

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( state === 2 ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return state === 2 ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					var lname = name.toLowerCase();
					if ( !state ) {
						name = requestHeadersNames[ lname ] = requestHeadersNames[ lname ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( !state ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( state < 2 ) {
							for ( code in map ) {

								// Lazy-add the new callback in a way that preserves old ones
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						} else {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR ).complete = completeDeferred.add;
		jqXHR.success = jqXHR.done;
		jqXHR.error = jqXHR.fail;

		// Remove hash character (#7531: and string promotion)
		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" ).replace( rhash, "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = jQuery.trim( s.dataType || "*" ).toLowerCase().match( rnotwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE8-11+
			// IE throws exception if url is malformed, e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE8-11+
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( state === 2 ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		cacheURL = s.url;

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// If data is available, append data to url
			if ( s.data ) {
				cacheURL = ( s.url += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data );

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add anti-cache in url if needed
			if ( s.cache === false ) {
				s.url = rts.test( cacheURL ) ?

					// If there is already a '_' parameter, set its value
					cacheURL.replace( rts, "$1_=" + nonce++ ) :

					// Otherwise add one to the end
					cacheURL + ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + nonce++;
			}
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || state === 2 ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		for ( i in { success: 1, error: 1, complete: 1 } ) {
			jqXHR[ i ]( s[ i ] );
		}

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( state === 2 ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				state = 1;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Propagate exception as error if not done
				if ( state < 2 ) {
					done( -1, e );

				// Simply rethrow otherwise
				} else {
					throw e;
				}
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Called once
			if ( state === 2 ) {
				return;
			}

			// State is "done" now
			state = 2;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( jQuery.isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );


jQuery._evalUrl = function( url ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		async: false,
		global: false,
		"throws": true
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( jQuery.isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapAll( html.call( this, i ) );
			} );
		}

		if ( this[ 0 ] ) {

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( jQuery.isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var isFunction = jQuery.isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( isFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function() {
		return this.parent().each( function() {
			if ( !jQuery.nodeName( this, "body" ) ) {
				jQuery( this ).replaceWith( this.childNodes );
			}
		} ).end();
	}
} );


jQuery.expr.filters.hidden = function( elem ) {
	return !jQuery.expr.filters.visible( elem );
};
jQuery.expr.filters.visible = function( elem ) {

	// Support: Opera <= 12.12
	// Opera reports offsetWidths and offsetHeights less than zero on some elements
	// Use OR instead of AND as the element is not visible if either is true
	// See tickets #10406 and #13132
	return elem.offsetWidth > 0 || elem.offsetHeight > 0 || elem.getClientRects().length > 0;
};




var r20 = /%20/g,
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( jQuery.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && jQuery.type( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, value ) {

			// If value is a function, invoke it and return its value
			value = jQuery.isFunction( value ) ? value() : ( value == null ? "" : value );
			s[ s.length ] = encodeURIComponent( key ) + "=" + encodeURIComponent( value );
		};

	// Set traditional to true for jQuery <= 1.3.2 behavior.
	if ( traditional === undefined ) {
		traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" ).replace( r20, "+" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( i, elem ) {
			var val = jQuery( this ).val();

			return val == null ?
				null :
				jQuery.isArray( val ) ?
					jQuery.map( val, function( val ) {
						return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
					} ) :
					{ name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE9
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE9
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = callback( "error" );

				// Support: IE9
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" ).prop( {
					charset: s.scriptCharset,
					src: s.url
				} ).on(
					"load error",
					callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					}
				);

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && jQuery.isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( !data || typeof data !== "string" ) {
		return null;
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}
	context = context || document;

	var parsed = rsingleTag.exec( data ),
		scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


// Keep a copy of the old load method
var _load = jQuery.fn.load;

/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	if ( typeof url !== "string" && _load ) {
		return _load.apply( this, arguments );
	}

	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = jQuery.trim( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( jQuery.isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.expr.filters.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




/**
 * Gets a window from an element
 */
function getWindow( elem ) {
	return jQuery.isWindow( elem ) ? elem : elem.nodeType === 9 && elem.defaultView;
}

jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( jQuery.isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {
	offset: function( options ) {
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var docElem, win,
			elem = this[ 0 ],
			box = { top: 0, left: 0 },
			doc = elem && elem.ownerDocument;

		if ( !doc ) {
			return;
		}

		docElem = doc.documentElement;

		// Make sure it's not a disconnected DOM node
		if ( !jQuery.contains( docElem, elem ) ) {
			return box;
		}

		box = elem.getBoundingClientRect();
		win = getWindow( doc );
		return {
			top: box.top + win.pageYOffset - docElem.clientTop,
			left: box.left + win.pageXOffset - docElem.clientLeft
		};
	},

	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
		// because it is its only offset parent
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume getBoundingClientRect is there when computed position is fixed
			offset = elem.getBoundingClientRect();

		} else {

			// Get *real* offsetParent
			offsetParent = this.offsetParent();

			// Get correct offsets
			offset = this.offset();
			if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
				parentOffset = offsetParent.offset();
			}

			// Add offsetParent borders
			parentOffset.top += jQuery.css( offsetParent[ 0 ], "borderTopWidth", true );
			parentOffset.left += jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true );
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {
			var win = getWindow( elem );

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari<7-8+, Chrome<37-44+
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://code.google.com/p/chromium/issues/detail?id=229280
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( jQuery.isWindow( elem ) ) {

					// As of 5/8/2012 this will yield incorrect results for Mobile Safari, but there
					// isn't a whole lot we can do. See pull request at this URL for discussion:
					// https://github.com/jquery/jquery/pull/764
					return elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable, null );
		};
	} );
} );


jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	},
	size: function() {
		return this.length;
	}
} );

jQuery.fn.andSelf = jQuery.fn.addBack;




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
		return jQuery;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}



var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}

return jQuery;
}));


/***/ }),
/* 1 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),
/* 2 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

__webpack_require__(6);
__webpack_require__(23);

//alert(m);

var mm = "it works";
module.exports = mm;

$(".slideLeft").click(function () {
     $(".cbp-spmenu-left").toggleClass("cbp-spmenu-open");
});
/*
   $("#nav-top").on("click", function(){
        $("html body").animate({"scrollTop":$("#skills").offset().top},1000);
        return false;
   });
   */

$(".nav-list--link").on("click", function () {
     var thislink = "#" + $(this).attr("title");
     $("html body").animate({ "scrollTop": $(thislink).offset().top }, 1000);
     return false;
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports.css = __webpack_require__ (22);
module.exports.js = __webpack_require__ (5);


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__ (18);
__webpack_require__ (8);
__webpack_require__ (9);
__webpack_require__ (10);
__webpack_require__ (11);
__webpack_require__ (12);
__webpack_require__ (13);
__webpack_require__ (17);
__webpack_require__ (14);
__webpack_require__ (15);
__webpack_require__ (16);
__webpack_require__ (7);


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(4);


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {/* ========================================================================
 * Bootstrap: affix.js v3.3.7
 * http://getbootstrap.com/javascript/#affix
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // AFFIX CLASS DEFINITION
  // ======================

  var Affix = function (element, options) {
    this.options = $.extend({}, Affix.DEFAULTS, options)

    this.$target = $(this.options.target)
      .on('scroll.bs.affix.data-api', $.proxy(this.checkPosition, this))
      .on('click.bs.affix.data-api',  $.proxy(this.checkPositionWithEventLoop, this))

    this.$element     = $(element)
    this.affixed      = null
    this.unpin        = null
    this.pinnedOffset = null

    this.checkPosition()
  }

  Affix.VERSION  = '3.3.7'

  Affix.RESET    = 'affix affix-top affix-bottom'

  Affix.DEFAULTS = {
    offset: 0,
    target: window
  }

  Affix.prototype.getState = function (scrollHeight, height, offsetTop, offsetBottom) {
    var scrollTop    = this.$target.scrollTop()
    var position     = this.$element.offset()
    var targetHeight = this.$target.height()

    if (offsetTop != null && this.affixed == 'top') return scrollTop < offsetTop ? 'top' : false

    if (this.affixed == 'bottom') {
      if (offsetTop != null) return (scrollTop + this.unpin <= position.top) ? false : 'bottom'
      return (scrollTop + targetHeight <= scrollHeight - offsetBottom) ? false : 'bottom'
    }

    var initializing   = this.affixed == null
    var colliderTop    = initializing ? scrollTop : position.top
    var colliderHeight = initializing ? targetHeight : height

    if (offsetTop != null && scrollTop <= offsetTop) return 'top'
    if (offsetBottom != null && (colliderTop + colliderHeight >= scrollHeight - offsetBottom)) return 'bottom'

    return false
  }

  Affix.prototype.getPinnedOffset = function () {
    if (this.pinnedOffset) return this.pinnedOffset
    this.$element.removeClass(Affix.RESET).addClass('affix')
    var scrollTop = this.$target.scrollTop()
    var position  = this.$element.offset()
    return (this.pinnedOffset = position.top - scrollTop)
  }

  Affix.prototype.checkPositionWithEventLoop = function () {
    setTimeout($.proxy(this.checkPosition, this), 1)
  }

  Affix.prototype.checkPosition = function () {
    if (!this.$element.is(':visible')) return

    var height       = this.$element.height()
    var offset       = this.options.offset
    var offsetTop    = offset.top
    var offsetBottom = offset.bottom
    var scrollHeight = Math.max($(document).height(), $(document.body).height())

    if (typeof offset != 'object')         offsetBottom = offsetTop = offset
    if (typeof offsetTop == 'function')    offsetTop    = offset.top(this.$element)
    if (typeof offsetBottom == 'function') offsetBottom = offset.bottom(this.$element)

    var affix = this.getState(scrollHeight, height, offsetTop, offsetBottom)

    if (this.affixed != affix) {
      if (this.unpin != null) this.$element.css('top', '')

      var affixType = 'affix' + (affix ? '-' + affix : '')
      var e         = $.Event(affixType + '.bs.affix')

      this.$element.trigger(e)

      if (e.isDefaultPrevented()) return

      this.affixed = affix
      this.unpin = affix == 'bottom' ? this.getPinnedOffset() : null

      this.$element
        .removeClass(Affix.RESET)
        .addClass(affixType)
        .trigger(affixType.replace('affix', 'affixed') + '.bs.affix')
    }

    if (affix == 'bottom') {
      this.$element.offset({
        top: scrollHeight - height - offsetBottom
      })
    }
  }


  // AFFIX PLUGIN DEFINITION
  // =======================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.affix')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.affix', (data = new Affix(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.affix

  $.fn.affix             = Plugin
  $.fn.affix.Constructor = Affix


  // AFFIX NO CONFLICT
  // =================

  $.fn.affix.noConflict = function () {
    $.fn.affix = old
    return this
  }


  // AFFIX DATA-API
  // ==============

  $(window).on('load', function () {
    $('[data-spy="affix"]').each(function () {
      var $spy = $(this)
      var data = $spy.data()

      data.offset = data.offset || {}

      if (data.offsetBottom != null) data.offset.bottom = data.offsetBottom
      if (data.offsetTop    != null) data.offset.top    = data.offsetTop

      Plugin.call($spy, data)
    })
  })

}(jQuery);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {/* ========================================================================
 * Bootstrap: alert.js v3.3.7
 * http://getbootstrap.com/javascript/#alerts
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // ALERT CLASS DEFINITION
  // ======================

  var dismiss = '[data-dismiss="alert"]'
  var Alert   = function (el) {
    $(el).on('click', dismiss, this.close)
  }

  Alert.VERSION = '3.3.7'

  Alert.TRANSITION_DURATION = 150

  Alert.prototype.close = function (e) {
    var $this    = $(this)
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    var $parent = $(selector === '#' ? [] : selector)

    if (e) e.preventDefault()

    if (!$parent.length) {
      $parent = $this.closest('.alert')
    }

    $parent.trigger(e = $.Event('close.bs.alert'))

    if (e.isDefaultPrevented()) return

    $parent.removeClass('in')

    function removeElement() {
      // detach from parent, fire event then clean up data
      $parent.detach().trigger('closed.bs.alert').remove()
    }

    $.support.transition && $parent.hasClass('fade') ?
      $parent
        .one('bsTransitionEnd', removeElement)
        .emulateTransitionEnd(Alert.TRANSITION_DURATION) :
      removeElement()
  }


  // ALERT PLUGIN DEFINITION
  // =======================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.alert')

      if (!data) $this.data('bs.alert', (data = new Alert(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  var old = $.fn.alert

  $.fn.alert             = Plugin
  $.fn.alert.Constructor = Alert


  // ALERT NO CONFLICT
  // =================

  $.fn.alert.noConflict = function () {
    $.fn.alert = old
    return this
  }


  // ALERT DATA-API
  // ==============

  $(document).on('click.bs.alert.data-api', dismiss, Alert.prototype.close)

}(jQuery);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {/* ========================================================================
 * Bootstrap: button.js v3.3.7
 * http://getbootstrap.com/javascript/#buttons
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // BUTTON PUBLIC CLASS DEFINITION
  // ==============================

  var Button = function (element, options) {
    this.$element  = $(element)
    this.options   = $.extend({}, Button.DEFAULTS, options)
    this.isLoading = false
  }

  Button.VERSION  = '3.3.7'

  Button.DEFAULTS = {
    loadingText: 'loading...'
  }

  Button.prototype.setState = function (state) {
    var d    = 'disabled'
    var $el  = this.$element
    var val  = $el.is('input') ? 'val' : 'html'
    var data = $el.data()

    state += 'Text'

    if (data.resetText == null) $el.data('resetText', $el[val]())

    // push to event loop to allow forms to submit
    setTimeout($.proxy(function () {
      $el[val](data[state] == null ? this.options[state] : data[state])

      if (state == 'loadingText') {
        this.isLoading = true
        $el.addClass(d).attr(d, d).prop(d, true)
      } else if (this.isLoading) {
        this.isLoading = false
        $el.removeClass(d).removeAttr(d).prop(d, false)
      }
    }, this), 0)
  }

  Button.prototype.toggle = function () {
    var changed = true
    var $parent = this.$element.closest('[data-toggle="buttons"]')

    if ($parent.length) {
      var $input = this.$element.find('input')
      if ($input.prop('type') == 'radio') {
        if ($input.prop('checked')) changed = false
        $parent.find('.active').removeClass('active')
        this.$element.addClass('active')
      } else if ($input.prop('type') == 'checkbox') {
        if (($input.prop('checked')) !== this.$element.hasClass('active')) changed = false
        this.$element.toggleClass('active')
      }
      $input.prop('checked', this.$element.hasClass('active'))
      if (changed) $input.trigger('change')
    } else {
      this.$element.attr('aria-pressed', !this.$element.hasClass('active'))
      this.$element.toggleClass('active')
    }
  }


  // BUTTON PLUGIN DEFINITION
  // ========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.button')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.button', (data = new Button(this, options)))

      if (option == 'toggle') data.toggle()
      else if (option) data.setState(option)
    })
  }

  var old = $.fn.button

  $.fn.button             = Plugin
  $.fn.button.Constructor = Button


  // BUTTON NO CONFLICT
  // ==================

  $.fn.button.noConflict = function () {
    $.fn.button = old
    return this
  }


  // BUTTON DATA-API
  // ===============

  $(document)
    .on('click.bs.button.data-api', '[data-toggle^="button"]', function (e) {
      var $btn = $(e.target).closest('.btn')
      Plugin.call($btn, 'toggle')
      if (!($(e.target).is('input[type="radio"], input[type="checkbox"]'))) {
        // Prevent double click on radios, and the double selections (so cancellation) on checkboxes
        e.preventDefault()
        // The target component still receive the focus
        if ($btn.is('input,button')) $btn.trigger('focus')
        else $btn.find('input:visible,button:visible').first().trigger('focus')
      }
    })
    .on('focus.bs.button.data-api blur.bs.button.data-api', '[data-toggle^="button"]', function (e) {
      $(e.target).closest('.btn').toggleClass('focus', /^focus(in)?$/.test(e.type))
    })

}(jQuery);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {/* ========================================================================
 * Bootstrap: carousel.js v3.3.7
 * http://getbootstrap.com/javascript/#carousel
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // CAROUSEL CLASS DEFINITION
  // =========================

  var Carousel = function (element, options) {
    this.$element    = $(element)
    this.$indicators = this.$element.find('.carousel-indicators')
    this.options     = options
    this.paused      = null
    this.sliding     = null
    this.interval    = null
    this.$active     = null
    this.$items      = null

    this.options.keyboard && this.$element.on('keydown.bs.carousel', $.proxy(this.keydown, this))

    this.options.pause == 'hover' && !('ontouchstart' in document.documentElement) && this.$element
      .on('mouseenter.bs.carousel', $.proxy(this.pause, this))
      .on('mouseleave.bs.carousel', $.proxy(this.cycle, this))
  }

  Carousel.VERSION  = '3.3.7'

  Carousel.TRANSITION_DURATION = 600

  Carousel.DEFAULTS = {
    interval: 5000,
    pause: 'hover',
    wrap: true,
    keyboard: true
  }

  Carousel.prototype.keydown = function (e) {
    if (/input|textarea/i.test(e.target.tagName)) return
    switch (e.which) {
      case 37: this.prev(); break
      case 39: this.next(); break
      default: return
    }

    e.preventDefault()
  }

  Carousel.prototype.cycle = function (e) {
    e || (this.paused = false)

    this.interval && clearInterval(this.interval)

    this.options.interval
      && !this.paused
      && (this.interval = setInterval($.proxy(this.next, this), this.options.interval))

    return this
  }

  Carousel.prototype.getItemIndex = function (item) {
    this.$items = item.parent().children('.item')
    return this.$items.index(item || this.$active)
  }

  Carousel.prototype.getItemForDirection = function (direction, active) {
    var activeIndex = this.getItemIndex(active)
    var willWrap = (direction == 'prev' && activeIndex === 0)
                || (direction == 'next' && activeIndex == (this.$items.length - 1))
    if (willWrap && !this.options.wrap) return active
    var delta = direction == 'prev' ? -1 : 1
    var itemIndex = (activeIndex + delta) % this.$items.length
    return this.$items.eq(itemIndex)
  }

  Carousel.prototype.to = function (pos) {
    var that        = this
    var activeIndex = this.getItemIndex(this.$active = this.$element.find('.item.active'))

    if (pos > (this.$items.length - 1) || pos < 0) return

    if (this.sliding)       return this.$element.one('slid.bs.carousel', function () { that.to(pos) }) // yes, "slid"
    if (activeIndex == pos) return this.pause().cycle()

    return this.slide(pos > activeIndex ? 'next' : 'prev', this.$items.eq(pos))
  }

  Carousel.prototype.pause = function (e) {
    e || (this.paused = true)

    if (this.$element.find('.next, .prev').length && $.support.transition) {
      this.$element.trigger($.support.transition.end)
      this.cycle(true)
    }

    this.interval = clearInterval(this.interval)

    return this
  }

  Carousel.prototype.next = function () {
    if (this.sliding) return
    return this.slide('next')
  }

  Carousel.prototype.prev = function () {
    if (this.sliding) return
    return this.slide('prev')
  }

  Carousel.prototype.slide = function (type, next) {
    var $active   = this.$element.find('.item.active')
    var $next     = next || this.getItemForDirection(type, $active)
    var isCycling = this.interval
    var direction = type == 'next' ? 'left' : 'right'
    var that      = this

    if ($next.hasClass('active')) return (this.sliding = false)

    var relatedTarget = $next[0]
    var slideEvent = $.Event('slide.bs.carousel', {
      relatedTarget: relatedTarget,
      direction: direction
    })
    this.$element.trigger(slideEvent)
    if (slideEvent.isDefaultPrevented()) return

    this.sliding = true

    isCycling && this.pause()

    if (this.$indicators.length) {
      this.$indicators.find('.active').removeClass('active')
      var $nextIndicator = $(this.$indicators.children()[this.getItemIndex($next)])
      $nextIndicator && $nextIndicator.addClass('active')
    }

    var slidEvent = $.Event('slid.bs.carousel', { relatedTarget: relatedTarget, direction: direction }) // yes, "slid"
    if ($.support.transition && this.$element.hasClass('slide')) {
      $next.addClass(type)
      $next[0].offsetWidth // force reflow
      $active.addClass(direction)
      $next.addClass(direction)
      $active
        .one('bsTransitionEnd', function () {
          $next.removeClass([type, direction].join(' ')).addClass('active')
          $active.removeClass(['active', direction].join(' '))
          that.sliding = false
          setTimeout(function () {
            that.$element.trigger(slidEvent)
          }, 0)
        })
        .emulateTransitionEnd(Carousel.TRANSITION_DURATION)
    } else {
      $active.removeClass('active')
      $next.addClass('active')
      this.sliding = false
      this.$element.trigger(slidEvent)
    }

    isCycling && this.cycle()

    return this
  }


  // CAROUSEL PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.carousel')
      var options = $.extend({}, Carousel.DEFAULTS, $this.data(), typeof option == 'object' && option)
      var action  = typeof option == 'string' ? option : options.slide

      if (!data) $this.data('bs.carousel', (data = new Carousel(this, options)))
      if (typeof option == 'number') data.to(option)
      else if (action) data[action]()
      else if (options.interval) data.pause().cycle()
    })
  }

  var old = $.fn.carousel

  $.fn.carousel             = Plugin
  $.fn.carousel.Constructor = Carousel


  // CAROUSEL NO CONFLICT
  // ====================

  $.fn.carousel.noConflict = function () {
    $.fn.carousel = old
    return this
  }


  // CAROUSEL DATA-API
  // =================

  var clickHandler = function (e) {
    var href
    var $this   = $(this)
    var $target = $($this.attr('data-target') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) // strip for ie7
    if (!$target.hasClass('carousel')) return
    var options = $.extend({}, $target.data(), $this.data())
    var slideIndex = $this.attr('data-slide-to')
    if (slideIndex) options.interval = false

    Plugin.call($target, options)

    if (slideIndex) {
      $target.data('bs.carousel').to(slideIndex)
    }

    e.preventDefault()
  }

  $(document)
    .on('click.bs.carousel.data-api', '[data-slide]', clickHandler)
    .on('click.bs.carousel.data-api', '[data-slide-to]', clickHandler)

  $(window).on('load', function () {
    $('[data-ride="carousel"]').each(function () {
      var $carousel = $(this)
      Plugin.call($carousel, $carousel.data())
    })
  })

}(jQuery);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {/* ========================================================================
 * Bootstrap: collapse.js v3.3.7
 * http://getbootstrap.com/javascript/#collapse
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

/* jshint latedef: false */

+function ($) {
  'use strict';

  // COLLAPSE PUBLIC CLASS DEFINITION
  // ================================

  var Collapse = function (element, options) {
    this.$element      = $(element)
    this.options       = $.extend({}, Collapse.DEFAULTS, options)
    this.$trigger      = $('[data-toggle="collapse"][href="#' + element.id + '"],' +
                           '[data-toggle="collapse"][data-target="#' + element.id + '"]')
    this.transitioning = null

    if (this.options.parent) {
      this.$parent = this.getParent()
    } else {
      this.addAriaAndCollapsedClass(this.$element, this.$trigger)
    }

    if (this.options.toggle) this.toggle()
  }

  Collapse.VERSION  = '3.3.7'

  Collapse.TRANSITION_DURATION = 350

  Collapse.DEFAULTS = {
    toggle: true
  }

  Collapse.prototype.dimension = function () {
    var hasWidth = this.$element.hasClass('width')
    return hasWidth ? 'width' : 'height'
  }

  Collapse.prototype.show = function () {
    if (this.transitioning || this.$element.hasClass('in')) return

    var activesData
    var actives = this.$parent && this.$parent.children('.panel').children('.in, .collapsing')

    if (actives && actives.length) {
      activesData = actives.data('bs.collapse')
      if (activesData && activesData.transitioning) return
    }

    var startEvent = $.Event('show.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    if (actives && actives.length) {
      Plugin.call(actives, 'hide')
      activesData || actives.data('bs.collapse', null)
    }

    var dimension = this.dimension()

    this.$element
      .removeClass('collapse')
      .addClass('collapsing')[dimension](0)
      .attr('aria-expanded', true)

    this.$trigger
      .removeClass('collapsed')
      .attr('aria-expanded', true)

    this.transitioning = 1

    var complete = function () {
      this.$element
        .removeClass('collapsing')
        .addClass('collapse in')[dimension]('')
      this.transitioning = 0
      this.$element
        .trigger('shown.bs.collapse')
    }

    if (!$.support.transition) return complete.call(this)

    var scrollSize = $.camelCase(['scroll', dimension].join('-'))

    this.$element
      .one('bsTransitionEnd', $.proxy(complete, this))
      .emulateTransitionEnd(Collapse.TRANSITION_DURATION)[dimension](this.$element[0][scrollSize])
  }

  Collapse.prototype.hide = function () {
    if (this.transitioning || !this.$element.hasClass('in')) return

    var startEvent = $.Event('hide.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    var dimension = this.dimension()

    this.$element[dimension](this.$element[dimension]())[0].offsetHeight

    this.$element
      .addClass('collapsing')
      .removeClass('collapse in')
      .attr('aria-expanded', false)

    this.$trigger
      .addClass('collapsed')
      .attr('aria-expanded', false)

    this.transitioning = 1

    var complete = function () {
      this.transitioning = 0
      this.$element
        .removeClass('collapsing')
        .addClass('collapse')
        .trigger('hidden.bs.collapse')
    }

    if (!$.support.transition) return complete.call(this)

    this.$element
      [dimension](0)
      .one('bsTransitionEnd', $.proxy(complete, this))
      .emulateTransitionEnd(Collapse.TRANSITION_DURATION)
  }

  Collapse.prototype.toggle = function () {
    this[this.$element.hasClass('in') ? 'hide' : 'show']()
  }

  Collapse.prototype.getParent = function () {
    return $(this.options.parent)
      .find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]')
      .each($.proxy(function (i, element) {
        var $element = $(element)
        this.addAriaAndCollapsedClass(getTargetFromTrigger($element), $element)
      }, this))
      .end()
  }

  Collapse.prototype.addAriaAndCollapsedClass = function ($element, $trigger) {
    var isOpen = $element.hasClass('in')

    $element.attr('aria-expanded', isOpen)
    $trigger
      .toggleClass('collapsed', !isOpen)
      .attr('aria-expanded', isOpen)
  }

  function getTargetFromTrigger($trigger) {
    var href
    var target = $trigger.attr('data-target')
      || (href = $trigger.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '') // strip for ie7

    return $(target)
  }


  // COLLAPSE PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.collapse')
      var options = $.extend({}, Collapse.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data && options.toggle && /show|hide/.test(option)) options.toggle = false
      if (!data) $this.data('bs.collapse', (data = new Collapse(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.collapse

  $.fn.collapse             = Plugin
  $.fn.collapse.Constructor = Collapse


  // COLLAPSE NO CONFLICT
  // ====================

  $.fn.collapse.noConflict = function () {
    $.fn.collapse = old
    return this
  }


  // COLLAPSE DATA-API
  // =================

  $(document).on('click.bs.collapse.data-api', '[data-toggle="collapse"]', function (e) {
    var $this   = $(this)

    if (!$this.attr('data-target')) e.preventDefault()

    var $target = getTargetFromTrigger($this)
    var data    = $target.data('bs.collapse')
    var option  = data ? 'toggle' : $this.data()

    Plugin.call($target, option)
  })

}(jQuery);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {/* ========================================================================
 * Bootstrap: dropdown.js v3.3.7
 * http://getbootstrap.com/javascript/#dropdowns
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // DROPDOWN CLASS DEFINITION
  // =========================

  var backdrop = '.dropdown-backdrop'
  var toggle   = '[data-toggle="dropdown"]'
  var Dropdown = function (element) {
    $(element).on('click.bs.dropdown', this.toggle)
  }

  Dropdown.VERSION = '3.3.7'

  function getParent($this) {
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && /#[A-Za-z]/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    var $parent = selector && $(selector)

    return $parent && $parent.length ? $parent : $this.parent()
  }

  function clearMenus(e) {
    if (e && e.which === 3) return
    $(backdrop).remove()
    $(toggle).each(function () {
      var $this         = $(this)
      var $parent       = getParent($this)
      var relatedTarget = { relatedTarget: this }

      if (!$parent.hasClass('open')) return

      if (e && e.type == 'click' && /input|textarea/i.test(e.target.tagName) && $.contains($parent[0], e.target)) return

      $parent.trigger(e = $.Event('hide.bs.dropdown', relatedTarget))

      if (e.isDefaultPrevented()) return

      $this.attr('aria-expanded', 'false')
      $parent.removeClass('open').trigger($.Event('hidden.bs.dropdown', relatedTarget))
    })
  }

  Dropdown.prototype.toggle = function (e) {
    var $this = $(this)

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    clearMenus()

    if (!isActive) {
      if ('ontouchstart' in document.documentElement && !$parent.closest('.navbar-nav').length) {
        // if mobile we use a backdrop because click events don't delegate
        $(document.createElement('div'))
          .addClass('dropdown-backdrop')
          .insertAfter($(this))
          .on('click', clearMenus)
      }

      var relatedTarget = { relatedTarget: this }
      $parent.trigger(e = $.Event('show.bs.dropdown', relatedTarget))

      if (e.isDefaultPrevented()) return

      $this
        .trigger('focus')
        .attr('aria-expanded', 'true')

      $parent
        .toggleClass('open')
        .trigger($.Event('shown.bs.dropdown', relatedTarget))
    }

    return false
  }

  Dropdown.prototype.keydown = function (e) {
    if (!/(38|40|27|32)/.test(e.which) || /input|textarea/i.test(e.target.tagName)) return

    var $this = $(this)

    e.preventDefault()
    e.stopPropagation()

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    if (!isActive && e.which != 27 || isActive && e.which == 27) {
      if (e.which == 27) $parent.find(toggle).trigger('focus')
      return $this.trigger('click')
    }

    var desc = ' li:not(.disabled):visible a'
    var $items = $parent.find('.dropdown-menu' + desc)

    if (!$items.length) return

    var index = $items.index(e.target)

    if (e.which == 38 && index > 0)                 index--         // up
    if (e.which == 40 && index < $items.length - 1) index++         // down
    if (!~index)                                    index = 0

    $items.eq(index).trigger('focus')
  }


  // DROPDOWN PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.dropdown')

      if (!data) $this.data('bs.dropdown', (data = new Dropdown(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  var old = $.fn.dropdown

  $.fn.dropdown             = Plugin
  $.fn.dropdown.Constructor = Dropdown


  // DROPDOWN NO CONFLICT
  // ====================

  $.fn.dropdown.noConflict = function () {
    $.fn.dropdown = old
    return this
  }


  // APPLY TO STANDARD DROPDOWN ELEMENTS
  // ===================================

  $(document)
    .on('click.bs.dropdown.data-api', clearMenus)
    .on('click.bs.dropdown.data-api', '.dropdown form', function (e) { e.stopPropagation() })
    .on('click.bs.dropdown.data-api', toggle, Dropdown.prototype.toggle)
    .on('keydown.bs.dropdown.data-api', toggle, Dropdown.prototype.keydown)
    .on('keydown.bs.dropdown.data-api', '.dropdown-menu', Dropdown.prototype.keydown)

}(jQuery);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {/* ========================================================================
 * Bootstrap: modal.js v3.3.7
 * http://getbootstrap.com/javascript/#modals
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // MODAL CLASS DEFINITION
  // ======================

  var Modal = function (element, options) {
    this.options             = options
    this.$body               = $(document.body)
    this.$element            = $(element)
    this.$dialog             = this.$element.find('.modal-dialog')
    this.$backdrop           = null
    this.isShown             = null
    this.originalBodyPad     = null
    this.scrollbarWidth      = 0
    this.ignoreBackdropClick = false

    if (this.options.remote) {
      this.$element
        .find('.modal-content')
        .load(this.options.remote, $.proxy(function () {
          this.$element.trigger('loaded.bs.modal')
        }, this))
    }
  }

  Modal.VERSION  = '3.3.7'

  Modal.TRANSITION_DURATION = 300
  Modal.BACKDROP_TRANSITION_DURATION = 150

  Modal.DEFAULTS = {
    backdrop: true,
    keyboard: true,
    show: true
  }

  Modal.prototype.toggle = function (_relatedTarget) {
    return this.isShown ? this.hide() : this.show(_relatedTarget)
  }

  Modal.prototype.show = function (_relatedTarget) {
    var that = this
    var e    = $.Event('show.bs.modal', { relatedTarget: _relatedTarget })

    this.$element.trigger(e)

    if (this.isShown || e.isDefaultPrevented()) return

    this.isShown = true

    this.checkScrollbar()
    this.setScrollbar()
    this.$body.addClass('modal-open')

    this.escape()
    this.resize()

    this.$element.on('click.dismiss.bs.modal', '[data-dismiss="modal"]', $.proxy(this.hide, this))

    this.$dialog.on('mousedown.dismiss.bs.modal', function () {
      that.$element.one('mouseup.dismiss.bs.modal', function (e) {
        if ($(e.target).is(that.$element)) that.ignoreBackdropClick = true
      })
    })

    this.backdrop(function () {
      var transition = $.support.transition && that.$element.hasClass('fade')

      if (!that.$element.parent().length) {
        that.$element.appendTo(that.$body) // don't move modals dom position
      }

      that.$element
        .show()
        .scrollTop(0)

      that.adjustDialog()

      if (transition) {
        that.$element[0].offsetWidth // force reflow
      }

      that.$element.addClass('in')

      that.enforceFocus()

      var e = $.Event('shown.bs.modal', { relatedTarget: _relatedTarget })

      transition ?
        that.$dialog // wait for modal to slide in
          .one('bsTransitionEnd', function () {
            that.$element.trigger('focus').trigger(e)
          })
          .emulateTransitionEnd(Modal.TRANSITION_DURATION) :
        that.$element.trigger('focus').trigger(e)
    })
  }

  Modal.prototype.hide = function (e) {
    if (e) e.preventDefault()

    e = $.Event('hide.bs.modal')

    this.$element.trigger(e)

    if (!this.isShown || e.isDefaultPrevented()) return

    this.isShown = false

    this.escape()
    this.resize()

    $(document).off('focusin.bs.modal')

    this.$element
      .removeClass('in')
      .off('click.dismiss.bs.modal')
      .off('mouseup.dismiss.bs.modal')

    this.$dialog.off('mousedown.dismiss.bs.modal')

    $.support.transition && this.$element.hasClass('fade') ?
      this.$element
        .one('bsTransitionEnd', $.proxy(this.hideModal, this))
        .emulateTransitionEnd(Modal.TRANSITION_DURATION) :
      this.hideModal()
  }

  Modal.prototype.enforceFocus = function () {
    $(document)
      .off('focusin.bs.modal') // guard against infinite focus loop
      .on('focusin.bs.modal', $.proxy(function (e) {
        if (document !== e.target &&
            this.$element[0] !== e.target &&
            !this.$element.has(e.target).length) {
          this.$element.trigger('focus')
        }
      }, this))
  }

  Modal.prototype.escape = function () {
    if (this.isShown && this.options.keyboard) {
      this.$element.on('keydown.dismiss.bs.modal', $.proxy(function (e) {
        e.which == 27 && this.hide()
      }, this))
    } else if (!this.isShown) {
      this.$element.off('keydown.dismiss.bs.modal')
    }
  }

  Modal.prototype.resize = function () {
    if (this.isShown) {
      $(window).on('resize.bs.modal', $.proxy(this.handleUpdate, this))
    } else {
      $(window).off('resize.bs.modal')
    }
  }

  Modal.prototype.hideModal = function () {
    var that = this
    this.$element.hide()
    this.backdrop(function () {
      that.$body.removeClass('modal-open')
      that.resetAdjustments()
      that.resetScrollbar()
      that.$element.trigger('hidden.bs.modal')
    })
  }

  Modal.prototype.removeBackdrop = function () {
    this.$backdrop && this.$backdrop.remove()
    this.$backdrop = null
  }

  Modal.prototype.backdrop = function (callback) {
    var that = this
    var animate = this.$element.hasClass('fade') ? 'fade' : ''

    if (this.isShown && this.options.backdrop) {
      var doAnimate = $.support.transition && animate

      this.$backdrop = $(document.createElement('div'))
        .addClass('modal-backdrop ' + animate)
        .appendTo(this.$body)

      this.$element.on('click.dismiss.bs.modal', $.proxy(function (e) {
        if (this.ignoreBackdropClick) {
          this.ignoreBackdropClick = false
          return
        }
        if (e.target !== e.currentTarget) return
        this.options.backdrop == 'static'
          ? this.$element[0].focus()
          : this.hide()
      }, this))

      if (doAnimate) this.$backdrop[0].offsetWidth // force reflow

      this.$backdrop.addClass('in')

      if (!callback) return

      doAnimate ?
        this.$backdrop
          .one('bsTransitionEnd', callback)
          .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :
        callback()

    } else if (!this.isShown && this.$backdrop) {
      this.$backdrop.removeClass('in')

      var callbackRemove = function () {
        that.removeBackdrop()
        callback && callback()
      }
      $.support.transition && this.$element.hasClass('fade') ?
        this.$backdrop
          .one('bsTransitionEnd', callbackRemove)
          .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :
        callbackRemove()

    } else if (callback) {
      callback()
    }
  }

  // these following methods are used to handle overflowing modals

  Modal.prototype.handleUpdate = function () {
    this.adjustDialog()
  }

  Modal.prototype.adjustDialog = function () {
    var modalIsOverflowing = this.$element[0].scrollHeight > document.documentElement.clientHeight

    this.$element.css({
      paddingLeft:  !this.bodyIsOverflowing && modalIsOverflowing ? this.scrollbarWidth : '',
      paddingRight: this.bodyIsOverflowing && !modalIsOverflowing ? this.scrollbarWidth : ''
    })
  }

  Modal.prototype.resetAdjustments = function () {
    this.$element.css({
      paddingLeft: '',
      paddingRight: ''
    })
  }

  Modal.prototype.checkScrollbar = function () {
    var fullWindowWidth = window.innerWidth
    if (!fullWindowWidth) { // workaround for missing window.innerWidth in IE8
      var documentElementRect = document.documentElement.getBoundingClientRect()
      fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left)
    }
    this.bodyIsOverflowing = document.body.clientWidth < fullWindowWidth
    this.scrollbarWidth = this.measureScrollbar()
  }

  Modal.prototype.setScrollbar = function () {
    var bodyPad = parseInt((this.$body.css('padding-right') || 0), 10)
    this.originalBodyPad = document.body.style.paddingRight || ''
    if (this.bodyIsOverflowing) this.$body.css('padding-right', bodyPad + this.scrollbarWidth)
  }

  Modal.prototype.resetScrollbar = function () {
    this.$body.css('padding-right', this.originalBodyPad)
  }

  Modal.prototype.measureScrollbar = function () { // thx walsh
    var scrollDiv = document.createElement('div')
    scrollDiv.className = 'modal-scrollbar-measure'
    this.$body.append(scrollDiv)
    var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth
    this.$body[0].removeChild(scrollDiv)
    return scrollbarWidth
  }


  // MODAL PLUGIN DEFINITION
  // =======================

  function Plugin(option, _relatedTarget) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.modal')
      var options = $.extend({}, Modal.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data) $this.data('bs.modal', (data = new Modal(this, options)))
      if (typeof option == 'string') data[option](_relatedTarget)
      else if (options.show) data.show(_relatedTarget)
    })
  }

  var old = $.fn.modal

  $.fn.modal             = Plugin
  $.fn.modal.Constructor = Modal


  // MODAL NO CONFLICT
  // =================

  $.fn.modal.noConflict = function () {
    $.fn.modal = old
    return this
  }


  // MODAL DATA-API
  // ==============

  $(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', function (e) {
    var $this   = $(this)
    var href    = $this.attr('href')
    var $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, ''))) // strip for ie7
    var option  = $target.data('bs.modal') ? 'toggle' : $.extend({ remote: !/#/.test(href) && href }, $target.data(), $this.data())

    if ($this.is('a')) e.preventDefault()

    $target.one('show.bs.modal', function (showEvent) {
      if (showEvent.isDefaultPrevented()) return // only register focus restorer if modal will actually get shown
      $target.one('hidden.bs.modal', function () {
        $this.is(':visible') && $this.trigger('focus')
      })
    })
    Plugin.call($target, option, this)
  })

}(jQuery);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {/* ========================================================================
 * Bootstrap: popover.js v3.3.7
 * http://getbootstrap.com/javascript/#popovers
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // POPOVER PUBLIC CLASS DEFINITION
  // ===============================

  var Popover = function (element, options) {
    this.init('popover', element, options)
  }

  if (!$.fn.tooltip) throw new Error('Popover requires tooltip.js')

  Popover.VERSION  = '3.3.7'

  Popover.DEFAULTS = $.extend({}, $.fn.tooltip.Constructor.DEFAULTS, {
    placement: 'right',
    trigger: 'click',
    content: '',
    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
  })


  // NOTE: POPOVER EXTENDS tooltip.js
  // ================================

  Popover.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype)

  Popover.prototype.constructor = Popover

  Popover.prototype.getDefaults = function () {
    return Popover.DEFAULTS
  }

  Popover.prototype.setContent = function () {
    var $tip    = this.tip()
    var title   = this.getTitle()
    var content = this.getContent()

    $tip.find('.popover-title')[this.options.html ? 'html' : 'text'](title)
    $tip.find('.popover-content').children().detach().end()[ // we use append for html objects to maintain js events
      this.options.html ? (typeof content == 'string' ? 'html' : 'append') : 'text'
    ](content)

    $tip.removeClass('fade top bottom left right in')

    // IE8 doesn't accept hiding via the `:empty` pseudo selector, we have to do
    // this manually by checking the contents.
    if (!$tip.find('.popover-title').html()) $tip.find('.popover-title').hide()
  }

  Popover.prototype.hasContent = function () {
    return this.getTitle() || this.getContent()
  }

  Popover.prototype.getContent = function () {
    var $e = this.$element
    var o  = this.options

    return $e.attr('data-content')
      || (typeof o.content == 'function' ?
            o.content.call($e[0]) :
            o.content)
  }

  Popover.prototype.arrow = function () {
    return (this.$arrow = this.$arrow || this.tip().find('.arrow'))
  }


  // POPOVER PLUGIN DEFINITION
  // =========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.popover')
      var options = typeof option == 'object' && option

      if (!data && /destroy|hide/.test(option)) return
      if (!data) $this.data('bs.popover', (data = new Popover(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.popover

  $.fn.popover             = Plugin
  $.fn.popover.Constructor = Popover


  // POPOVER NO CONFLICT
  // ===================

  $.fn.popover.noConflict = function () {
    $.fn.popover = old
    return this
  }

}(jQuery);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {/* ========================================================================
 * Bootstrap: scrollspy.js v3.3.7
 * http://getbootstrap.com/javascript/#scrollspy
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // SCROLLSPY CLASS DEFINITION
  // ==========================

  function ScrollSpy(element, options) {
    this.$body          = $(document.body)
    this.$scrollElement = $(element).is(document.body) ? $(window) : $(element)
    this.options        = $.extend({}, ScrollSpy.DEFAULTS, options)
    this.selector       = (this.options.target || '') + ' .nav li > a'
    this.offsets        = []
    this.targets        = []
    this.activeTarget   = null
    this.scrollHeight   = 0

    this.$scrollElement.on('scroll.bs.scrollspy', $.proxy(this.process, this))
    this.refresh()
    this.process()
  }

  ScrollSpy.VERSION  = '3.3.7'

  ScrollSpy.DEFAULTS = {
    offset: 10
  }

  ScrollSpy.prototype.getScrollHeight = function () {
    return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
  }

  ScrollSpy.prototype.refresh = function () {
    var that          = this
    var offsetMethod  = 'offset'
    var offsetBase    = 0

    this.offsets      = []
    this.targets      = []
    this.scrollHeight = this.getScrollHeight()

    if (!$.isWindow(this.$scrollElement[0])) {
      offsetMethod = 'position'
      offsetBase   = this.$scrollElement.scrollTop()
    }

    this.$body
      .find(this.selector)
      .map(function () {
        var $el   = $(this)
        var href  = $el.data('target') || $el.attr('href')
        var $href = /^#./.test(href) && $(href)

        return ($href
          && $href.length
          && $href.is(':visible')
          && [[$href[offsetMethod]().top + offsetBase, href]]) || null
      })
      .sort(function (a, b) { return a[0] - b[0] })
      .each(function () {
        that.offsets.push(this[0])
        that.targets.push(this[1])
      })
  }

  ScrollSpy.prototype.process = function () {
    var scrollTop    = this.$scrollElement.scrollTop() + this.options.offset
    var scrollHeight = this.getScrollHeight()
    var maxScroll    = this.options.offset + scrollHeight - this.$scrollElement.height()
    var offsets      = this.offsets
    var targets      = this.targets
    var activeTarget = this.activeTarget
    var i

    if (this.scrollHeight != scrollHeight) {
      this.refresh()
    }

    if (scrollTop >= maxScroll) {
      return activeTarget != (i = targets[targets.length - 1]) && this.activate(i)
    }

    if (activeTarget && scrollTop < offsets[0]) {
      this.activeTarget = null
      return this.clear()
    }

    for (i = offsets.length; i--;) {
      activeTarget != targets[i]
        && scrollTop >= offsets[i]
        && (offsets[i + 1] === undefined || scrollTop < offsets[i + 1])
        && this.activate(targets[i])
    }
  }

  ScrollSpy.prototype.activate = function (target) {
    this.activeTarget = target

    this.clear()

    var selector = this.selector +
      '[data-target="' + target + '"],' +
      this.selector + '[href="' + target + '"]'

    var active = $(selector)
      .parents('li')
      .addClass('active')

    if (active.parent('.dropdown-menu').length) {
      active = active
        .closest('li.dropdown')
        .addClass('active')
    }

    active.trigger('activate.bs.scrollspy')
  }

  ScrollSpy.prototype.clear = function () {
    $(this.selector)
      .parentsUntil(this.options.target, '.active')
      .removeClass('active')
  }


  // SCROLLSPY PLUGIN DEFINITION
  // ===========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.scrollspy')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.scrollspy', (data = new ScrollSpy(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.scrollspy

  $.fn.scrollspy             = Plugin
  $.fn.scrollspy.Constructor = ScrollSpy


  // SCROLLSPY NO CONFLICT
  // =====================

  $.fn.scrollspy.noConflict = function () {
    $.fn.scrollspy = old
    return this
  }


  // SCROLLSPY DATA-API
  // ==================

  $(window).on('load.bs.scrollspy.data-api', function () {
    $('[data-spy="scroll"]').each(function () {
      var $spy = $(this)
      Plugin.call($spy, $spy.data())
    })
  })

}(jQuery);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {/* ========================================================================
 * Bootstrap: tab.js v3.3.7
 * http://getbootstrap.com/javascript/#tabs
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // TAB CLASS DEFINITION
  // ====================

  var Tab = function (element) {
    // jscs:disable requireDollarBeforejQueryAssignment
    this.element = $(element)
    // jscs:enable requireDollarBeforejQueryAssignment
  }

  Tab.VERSION = '3.3.7'

  Tab.TRANSITION_DURATION = 150

  Tab.prototype.show = function () {
    var $this    = this.element
    var $ul      = $this.closest('ul:not(.dropdown-menu)')
    var selector = $this.data('target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    if ($this.parent('li').hasClass('active')) return

    var $previous = $ul.find('.active:last a')
    var hideEvent = $.Event('hide.bs.tab', {
      relatedTarget: $this[0]
    })
    var showEvent = $.Event('show.bs.tab', {
      relatedTarget: $previous[0]
    })

    $previous.trigger(hideEvent)
    $this.trigger(showEvent)

    if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) return

    var $target = $(selector)

    this.activate($this.closest('li'), $ul)
    this.activate($target, $target.parent(), function () {
      $previous.trigger({
        type: 'hidden.bs.tab',
        relatedTarget: $this[0]
      })
      $this.trigger({
        type: 'shown.bs.tab',
        relatedTarget: $previous[0]
      })
    })
  }

  Tab.prototype.activate = function (element, container, callback) {
    var $active    = container.find('> .active')
    var transition = callback
      && $.support.transition
      && ($active.length && $active.hasClass('fade') || !!container.find('> .fade').length)

    function next() {
      $active
        .removeClass('active')
        .find('> .dropdown-menu > .active')
          .removeClass('active')
        .end()
        .find('[data-toggle="tab"]')
          .attr('aria-expanded', false)

      element
        .addClass('active')
        .find('[data-toggle="tab"]')
          .attr('aria-expanded', true)

      if (transition) {
        element[0].offsetWidth // reflow for transition
        element.addClass('in')
      } else {
        element.removeClass('fade')
      }

      if (element.parent('.dropdown-menu').length) {
        element
          .closest('li.dropdown')
            .addClass('active')
          .end()
          .find('[data-toggle="tab"]')
            .attr('aria-expanded', true)
      }

      callback && callback()
    }

    $active.length && transition ?
      $active
        .one('bsTransitionEnd', next)
        .emulateTransitionEnd(Tab.TRANSITION_DURATION) :
      next()

    $active.removeClass('in')
  }


  // TAB PLUGIN DEFINITION
  // =====================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.tab')

      if (!data) $this.data('bs.tab', (data = new Tab(this)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.tab

  $.fn.tab             = Plugin
  $.fn.tab.Constructor = Tab


  // TAB NO CONFLICT
  // ===============

  $.fn.tab.noConflict = function () {
    $.fn.tab = old
    return this
  }


  // TAB DATA-API
  // ============

  var clickHandler = function (e) {
    e.preventDefault()
    Plugin.call($(this), 'show')
  }

  $(document)
    .on('click.bs.tab.data-api', '[data-toggle="tab"]', clickHandler)
    .on('click.bs.tab.data-api', '[data-toggle="pill"]', clickHandler)

}(jQuery);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {/* ========================================================================
 * Bootstrap: tooltip.js v3.3.7
 * http://getbootstrap.com/javascript/#tooltip
 * Inspired by the original jQuery.tipsy by Jason Frame
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // TOOLTIP PUBLIC CLASS DEFINITION
  // ===============================

  var Tooltip = function (element, options) {
    this.type       = null
    this.options    = null
    this.enabled    = null
    this.timeout    = null
    this.hoverState = null
    this.$element   = null
    this.inState    = null

    this.init('tooltip', element, options)
  }

  Tooltip.VERSION  = '3.3.7'

  Tooltip.TRANSITION_DURATION = 150

  Tooltip.DEFAULTS = {
    animation: true,
    placement: 'top',
    selector: false,
    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: 'hover focus',
    title: '',
    delay: 0,
    html: false,
    container: false,
    viewport: {
      selector: 'body',
      padding: 0
    }
  }

  Tooltip.prototype.init = function (type, element, options) {
    this.enabled   = true
    this.type      = type
    this.$element  = $(element)
    this.options   = this.getOptions(options)
    this.$viewport = this.options.viewport && $($.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : (this.options.viewport.selector || this.options.viewport))
    this.inState   = { click: false, hover: false, focus: false }

    if (this.$element[0] instanceof document.constructor && !this.options.selector) {
      throw new Error('`selector` option must be specified when initializing ' + this.type + ' on the window.document object!')
    }

    var triggers = this.options.trigger.split(' ')

    for (var i = triggers.length; i--;) {
      var trigger = triggers[i]

      if (trigger == 'click') {
        this.$element.on('click.' + this.type, this.options.selector, $.proxy(this.toggle, this))
      } else if (trigger != 'manual') {
        var eventIn  = trigger == 'hover' ? 'mouseenter' : 'focusin'
        var eventOut = trigger == 'hover' ? 'mouseleave' : 'focusout'

        this.$element.on(eventIn  + '.' + this.type, this.options.selector, $.proxy(this.enter, this))
        this.$element.on(eventOut + '.' + this.type, this.options.selector, $.proxy(this.leave, this))
      }
    }

    this.options.selector ?
      (this._options = $.extend({}, this.options, { trigger: 'manual', selector: '' })) :
      this.fixTitle()
  }

  Tooltip.prototype.getDefaults = function () {
    return Tooltip.DEFAULTS
  }

  Tooltip.prototype.getOptions = function (options) {
    options = $.extend({}, this.getDefaults(), this.$element.data(), options)

    if (options.delay && typeof options.delay == 'number') {
      options.delay = {
        show: options.delay,
        hide: options.delay
      }
    }

    return options
  }

  Tooltip.prototype.getDelegateOptions = function () {
    var options  = {}
    var defaults = this.getDefaults()

    this._options && $.each(this._options, function (key, value) {
      if (defaults[key] != value) options[key] = value
    })

    return options
  }

  Tooltip.prototype.enter = function (obj) {
    var self = obj instanceof this.constructor ?
      obj : $(obj.currentTarget).data('bs.' + this.type)

    if (!self) {
      self = new this.constructor(obj.currentTarget, this.getDelegateOptions())
      $(obj.currentTarget).data('bs.' + this.type, self)
    }

    if (obj instanceof $.Event) {
      self.inState[obj.type == 'focusin' ? 'focus' : 'hover'] = true
    }

    if (self.tip().hasClass('in') || self.hoverState == 'in') {
      self.hoverState = 'in'
      return
    }

    clearTimeout(self.timeout)

    self.hoverState = 'in'

    if (!self.options.delay || !self.options.delay.show) return self.show()

    self.timeout = setTimeout(function () {
      if (self.hoverState == 'in') self.show()
    }, self.options.delay.show)
  }

  Tooltip.prototype.isInStateTrue = function () {
    for (var key in this.inState) {
      if (this.inState[key]) return true
    }

    return false
  }

  Tooltip.prototype.leave = function (obj) {
    var self = obj instanceof this.constructor ?
      obj : $(obj.currentTarget).data('bs.' + this.type)

    if (!self) {
      self = new this.constructor(obj.currentTarget, this.getDelegateOptions())
      $(obj.currentTarget).data('bs.' + this.type, self)
    }

    if (obj instanceof $.Event) {
      self.inState[obj.type == 'focusout' ? 'focus' : 'hover'] = false
    }

    if (self.isInStateTrue()) return

    clearTimeout(self.timeout)

    self.hoverState = 'out'

    if (!self.options.delay || !self.options.delay.hide) return self.hide()

    self.timeout = setTimeout(function () {
      if (self.hoverState == 'out') self.hide()
    }, self.options.delay.hide)
  }

  Tooltip.prototype.show = function () {
    var e = $.Event('show.bs.' + this.type)

    if (this.hasContent() && this.enabled) {
      this.$element.trigger(e)

      var inDom = $.contains(this.$element[0].ownerDocument.documentElement, this.$element[0])
      if (e.isDefaultPrevented() || !inDom) return
      var that = this

      var $tip = this.tip()

      var tipId = this.getUID(this.type)

      this.setContent()
      $tip.attr('id', tipId)
      this.$element.attr('aria-describedby', tipId)

      if (this.options.animation) $tip.addClass('fade')

      var placement = typeof this.options.placement == 'function' ?
        this.options.placement.call(this, $tip[0], this.$element[0]) :
        this.options.placement

      var autoToken = /\s?auto?\s?/i
      var autoPlace = autoToken.test(placement)
      if (autoPlace) placement = placement.replace(autoToken, '') || 'top'

      $tip
        .detach()
        .css({ top: 0, left: 0, display: 'block' })
        .addClass(placement)
        .data('bs.' + this.type, this)

      this.options.container ? $tip.appendTo(this.options.container) : $tip.insertAfter(this.$element)
      this.$element.trigger('inserted.bs.' + this.type)

      var pos          = this.getPosition()
      var actualWidth  = $tip[0].offsetWidth
      var actualHeight = $tip[0].offsetHeight

      if (autoPlace) {
        var orgPlacement = placement
        var viewportDim = this.getPosition(this.$viewport)

        placement = placement == 'bottom' && pos.bottom + actualHeight > viewportDim.bottom ? 'top'    :
                    placement == 'top'    && pos.top    - actualHeight < viewportDim.top    ? 'bottom' :
                    placement == 'right'  && pos.right  + actualWidth  > viewportDim.width  ? 'left'   :
                    placement == 'left'   && pos.left   - actualWidth  < viewportDim.left   ? 'right'  :
                    placement

        $tip
          .removeClass(orgPlacement)
          .addClass(placement)
      }

      var calculatedOffset = this.getCalculatedOffset(placement, pos, actualWidth, actualHeight)

      this.applyPlacement(calculatedOffset, placement)

      var complete = function () {
        var prevHoverState = that.hoverState
        that.$element.trigger('shown.bs.' + that.type)
        that.hoverState = null

        if (prevHoverState == 'out') that.leave(that)
      }

      $.support.transition && this.$tip.hasClass('fade') ?
        $tip
          .one('bsTransitionEnd', complete)
          .emulateTransitionEnd(Tooltip.TRANSITION_DURATION) :
        complete()
    }
  }

  Tooltip.prototype.applyPlacement = function (offset, placement) {
    var $tip   = this.tip()
    var width  = $tip[0].offsetWidth
    var height = $tip[0].offsetHeight

    // manually read margins because getBoundingClientRect includes difference
    var marginTop = parseInt($tip.css('margin-top'), 10)
    var marginLeft = parseInt($tip.css('margin-left'), 10)

    // we must check for NaN for ie 8/9
    if (isNaN(marginTop))  marginTop  = 0
    if (isNaN(marginLeft)) marginLeft = 0

    offset.top  += marginTop
    offset.left += marginLeft

    // $.fn.offset doesn't round pixel values
    // so we use setOffset directly with our own function B-0
    $.offset.setOffset($tip[0], $.extend({
      using: function (props) {
        $tip.css({
          top: Math.round(props.top),
          left: Math.round(props.left)
        })
      }
    }, offset), 0)

    $tip.addClass('in')

    // check to see if placing tip in new offset caused the tip to resize itself
    var actualWidth  = $tip[0].offsetWidth
    var actualHeight = $tip[0].offsetHeight

    if (placement == 'top' && actualHeight != height) {
      offset.top = offset.top + height - actualHeight
    }

    var delta = this.getViewportAdjustedDelta(placement, offset, actualWidth, actualHeight)

    if (delta.left) offset.left += delta.left
    else offset.top += delta.top

    var isVertical          = /top|bottom/.test(placement)
    var arrowDelta          = isVertical ? delta.left * 2 - width + actualWidth : delta.top * 2 - height + actualHeight
    var arrowOffsetPosition = isVertical ? 'offsetWidth' : 'offsetHeight'

    $tip.offset(offset)
    this.replaceArrow(arrowDelta, $tip[0][arrowOffsetPosition], isVertical)
  }

  Tooltip.prototype.replaceArrow = function (delta, dimension, isVertical) {
    this.arrow()
      .css(isVertical ? 'left' : 'top', 50 * (1 - delta / dimension) + '%')
      .css(isVertical ? 'top' : 'left', '')
  }

  Tooltip.prototype.setContent = function () {
    var $tip  = this.tip()
    var title = this.getTitle()

    $tip.find('.tooltip-inner')[this.options.html ? 'html' : 'text'](title)
    $tip.removeClass('fade in top bottom left right')
  }

  Tooltip.prototype.hide = function (callback) {
    var that = this
    var $tip = $(this.$tip)
    var e    = $.Event('hide.bs.' + this.type)

    function complete() {
      if (that.hoverState != 'in') $tip.detach()
      if (that.$element) { // TODO: Check whether guarding this code with this `if` is really necessary.
        that.$element
          .removeAttr('aria-describedby')
          .trigger('hidden.bs.' + that.type)
      }
      callback && callback()
    }

    this.$element.trigger(e)

    if (e.isDefaultPrevented()) return

    $tip.removeClass('in')

    $.support.transition && $tip.hasClass('fade') ?
      $tip
        .one('bsTransitionEnd', complete)
        .emulateTransitionEnd(Tooltip.TRANSITION_DURATION) :
      complete()

    this.hoverState = null

    return this
  }

  Tooltip.prototype.fixTitle = function () {
    var $e = this.$element
    if ($e.attr('title') || typeof $e.attr('data-original-title') != 'string') {
      $e.attr('data-original-title', $e.attr('title') || '').attr('title', '')
    }
  }

  Tooltip.prototype.hasContent = function () {
    return this.getTitle()
  }

  Tooltip.prototype.getPosition = function ($element) {
    $element   = $element || this.$element

    var el     = $element[0]
    var isBody = el.tagName == 'BODY'

    var elRect    = el.getBoundingClientRect()
    if (elRect.width == null) {
      // width and height are missing in IE8, so compute them manually; see https://github.com/twbs/bootstrap/issues/14093
      elRect = $.extend({}, elRect, { width: elRect.right - elRect.left, height: elRect.bottom - elRect.top })
    }
    var isSvg = window.SVGElement && el instanceof window.SVGElement
    // Avoid using $.offset() on SVGs since it gives incorrect results in jQuery 3.
    // See https://github.com/twbs/bootstrap/issues/20280
    var elOffset  = isBody ? { top: 0, left: 0 } : (isSvg ? null : $element.offset())
    var scroll    = { scroll: isBody ? document.documentElement.scrollTop || document.body.scrollTop : $element.scrollTop() }
    var outerDims = isBody ? { width: $(window).width(), height: $(window).height() } : null

    return $.extend({}, elRect, scroll, outerDims, elOffset)
  }

  Tooltip.prototype.getCalculatedOffset = function (placement, pos, actualWidth, actualHeight) {
    return placement == 'bottom' ? { top: pos.top + pos.height,   left: pos.left + pos.width / 2 - actualWidth / 2 } :
           placement == 'top'    ? { top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2 } :
           placement == 'left'   ? { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth } :
        /* placement == 'right' */ { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width }

  }

  Tooltip.prototype.getViewportAdjustedDelta = function (placement, pos, actualWidth, actualHeight) {
    var delta = { top: 0, left: 0 }
    if (!this.$viewport) return delta

    var viewportPadding = this.options.viewport && this.options.viewport.padding || 0
    var viewportDimensions = this.getPosition(this.$viewport)

    if (/right|left/.test(placement)) {
      var topEdgeOffset    = pos.top - viewportPadding - viewportDimensions.scroll
      var bottomEdgeOffset = pos.top + viewportPadding - viewportDimensions.scroll + actualHeight
      if (topEdgeOffset < viewportDimensions.top) { // top overflow
        delta.top = viewportDimensions.top - topEdgeOffset
      } else if (bottomEdgeOffset > viewportDimensions.top + viewportDimensions.height) { // bottom overflow
        delta.top = viewportDimensions.top + viewportDimensions.height - bottomEdgeOffset
      }
    } else {
      var leftEdgeOffset  = pos.left - viewportPadding
      var rightEdgeOffset = pos.left + viewportPadding + actualWidth
      if (leftEdgeOffset < viewportDimensions.left) { // left overflow
        delta.left = viewportDimensions.left - leftEdgeOffset
      } else if (rightEdgeOffset > viewportDimensions.right) { // right overflow
        delta.left = viewportDimensions.left + viewportDimensions.width - rightEdgeOffset
      }
    }

    return delta
  }

  Tooltip.prototype.getTitle = function () {
    var title
    var $e = this.$element
    var o  = this.options

    title = $e.attr('data-original-title')
      || (typeof o.title == 'function' ? o.title.call($e[0]) :  o.title)

    return title
  }

  Tooltip.prototype.getUID = function (prefix) {
    do prefix += ~~(Math.random() * 1000000)
    while (document.getElementById(prefix))
    return prefix
  }

  Tooltip.prototype.tip = function () {
    if (!this.$tip) {
      this.$tip = $(this.options.template)
      if (this.$tip.length != 1) {
        throw new Error(this.type + ' `template` option must consist of exactly 1 top-level element!')
      }
    }
    return this.$tip
  }

  Tooltip.prototype.arrow = function () {
    return (this.$arrow = this.$arrow || this.tip().find('.tooltip-arrow'))
  }

  Tooltip.prototype.enable = function () {
    this.enabled = true
  }

  Tooltip.prototype.disable = function () {
    this.enabled = false
  }

  Tooltip.prototype.toggleEnabled = function () {
    this.enabled = !this.enabled
  }

  Tooltip.prototype.toggle = function (e) {
    var self = this
    if (e) {
      self = $(e.currentTarget).data('bs.' + this.type)
      if (!self) {
        self = new this.constructor(e.currentTarget, this.getDelegateOptions())
        $(e.currentTarget).data('bs.' + this.type, self)
      }
    }

    if (e) {
      self.inState.click = !self.inState.click
      if (self.isInStateTrue()) self.enter(self)
      else self.leave(self)
    } else {
      self.tip().hasClass('in') ? self.leave(self) : self.enter(self)
    }
  }

  Tooltip.prototype.destroy = function () {
    var that = this
    clearTimeout(this.timeout)
    this.hide(function () {
      that.$element.off('.' + that.type).removeData('bs.' + that.type)
      if (that.$tip) {
        that.$tip.detach()
      }
      that.$tip = null
      that.$arrow = null
      that.$viewport = null
      that.$element = null
    })
  }


  // TOOLTIP PLUGIN DEFINITION
  // =========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.tooltip')
      var options = typeof option == 'object' && option

      if (!data && /destroy|hide/.test(option)) return
      if (!data) $this.data('bs.tooltip', (data = new Tooltip(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.tooltip

  $.fn.tooltip             = Plugin
  $.fn.tooltip.Constructor = Tooltip


  // TOOLTIP NO CONFLICT
  // ===================

  $.fn.tooltip.noConflict = function () {
    $.fn.tooltip = old
    return this
  }

}(jQuery);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {/* ========================================================================
 * Bootstrap: transition.js v3.3.7
 * http://getbootstrap.com/javascript/#transitions
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // CSS TRANSITION SUPPORT (Shoutout: http://www.modernizr.com/)
  // ============================================================

  function transitionEnd() {
    var el = document.createElement('bootstrap')

    var transEndEventNames = {
      WebkitTransition : 'webkitTransitionEnd',
      MozTransition    : 'transitionend',
      OTransition      : 'oTransitionEnd otransitionend',
      transition       : 'transitionend'
    }

    for (var name in transEndEventNames) {
      if (el.style[name] !== undefined) {
        return { end: transEndEventNames[name] }
      }
    }

    return false // explicit for ie8 (  ._.)
  }

  // http://blog.alexmaccaw.com/css-transitions
  $.fn.emulateTransitionEnd = function (duration) {
    var called = false
    var $el = this
    $(this).one('bsTransitionEnd', function () { called = true })
    var callback = function () { if (!called) $($el).trigger($.support.transition.end) }
    setTimeout(callback, duration)
    return this
  }

  $(function () {
    $.support.transition = transitionEnd()

    if (!$.support.transition) return

    $.event.special.bsTransitionEnd = {
      bindType: $.support.transition.end,
      delegateType: $.support.transition.end,
      handle: function (e) {
        if ($(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
      }
    }
  })

}(jQuery);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n\n/*! normalize.css v3.0.3 | MIT License | github.com/necolas/normalize.css */\n\nhtml {\n  font-family: sans-serif;\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%;\n}\n\nbody {\n  margin: 0;\n}\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  display: block;\n}\n\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block;\n  vertical-align: baseline;\n}\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n[hidden],\ntemplate {\n  display: none;\n}\n\na {\n  background-color: transparent;\n}\n\na:active,\na:hover {\n  outline: 0;\n}\n\nabbr[title] {\n  border-bottom: 1px dotted;\n}\n\nb,\nstrong {\n  font-weight: bold;\n}\n\ndfn {\n  font-style: italic;\n}\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\nmark {\n  background: #ff0;\n  color: #000;\n}\n\nsmall {\n  font-size: 80%;\n}\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsup {\n  top: -0.5em;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nimg {\n  border: 0;\n}\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\nfigure {\n  margin: 1em 40px;\n}\n\nhr {\n  box-sizing: content-box;\n  height: 0;\n}\n\npre {\n  overflow: auto;\n}\n\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em;\n}\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  color: inherit;\n  font: inherit;\n  margin: 0;\n}\n\nbutton {\n  overflow: visible;\n}\n\nbutton,\nselect {\n  text-transform: none;\n}\n\nbutton,\nhtml input[type=\"button\"],\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n  -webkit-appearance: button;\n  cursor: pointer;\n}\n\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default;\n}\n\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n\ninput {\n  line-height: normal;\n}\n\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  box-sizing: border-box;\n  padding: 0;\n}\n\ninput[type=\"number\"]::-webkit-inner-spin-button,\ninput[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\ninput[type=\"search\"] {\n  -webkit-appearance: textfield;\n  box-sizing: content-box;\n}\n\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\n\nlegend {\n  border: 0;\n  padding: 0;\n}\n\ntextarea {\n  overflow: auto;\n}\n\noptgroup {\n  font-weight: bold;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\ntd,\nth {\n  padding: 0;\n}\n\n/*! Source: https://github.com/h5bp/html5-boilerplate/blob/master/src/css/main.css */\n\n@media print {\n  *,\n  *:before,\n  *:after {\n    background: transparent !important;\n    color: #000 !important;\n    box-shadow: none !important;\n    text-shadow: none !important;\n  }\n\n  a,\n  a:visited {\n    text-decoration: underline;\n  }\n\n  a[href]:after {\n    content: \" (\" attr(href) \")\";\n  }\n\n  abbr[title]:after {\n    content: \" (\" attr(title) \")\";\n  }\n\n  a[href^=\"#\"]:after,\n  a[href^=\"javascript:\"]:after {\n    content: \"\";\n  }\n\n  pre,\n  blockquote {\n    border: 1px solid #999;\n    page-break-inside: avoid;\n  }\n\n  thead {\n    display: table-header-group;\n  }\n\n  tr,\n  img {\n    page-break-inside: avoid;\n  }\n\n  img {\n    max-width: 100% !important;\n  }\n\n  p,\n  h2,\n  h3 {\n    orphans: 3;\n    widows: 3;\n  }\n\n  h2,\n  h3 {\n    page-break-after: avoid;\n  }\n\n  .navbar {\n    display: none;\n  }\n\n  .btn > .caret,\n  .dropup > .btn > .caret {\n    border-top-color: #000 !important;\n  }\n\n  .label {\n    border: 1px solid #000;\n  }\n\n  .table {\n    border-collapse: collapse !important;\n  }\n\n  .table td,\n  .table th {\n    background-color: #fff !important;\n  }\n\n  .table-bordered th,\n  .table-bordered td {\n    border: 1px solid #ddd !important;\n  }\n}\n\n* {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\n\n*:before,\n*:after {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\n\nhtml {\n  font-size: 10px;\n  -webkit-tap-highlight-color: transparent;\n}\n\nbody {\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  line-height: 1.42857;\n  color: #333333;\n  background-color: #fff;\n}\n\ninput,\nbutton,\nselect,\ntextarea {\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit;\n}\n\na {\n  color: #337ab7;\n  text-decoration: none;\n}\n\na:hover,\na:focus {\n  color: #23527c;\n  text-decoration: underline;\n}\n\na:focus {\n  outline: 5px auto -webkit-focus-ring-color;\n  outline-offset: -2px;\n}\n\nfigure {\n  margin: 0;\n}\n\nimg {\n  vertical-align: middle;\n}\n\n.img-responsive {\n  display: block;\n  max-width: 100%;\n  height: auto;\n}\n\n.img-rounded {\n  border-radius: 6px;\n}\n\n.img-thumbnail {\n  padding: 4px;\n  line-height: 1.42857;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  -webkit-transition: all 0.2s ease-in-out;\n  -o-transition: all 0.2s ease-in-out;\n  transition: all 0.2s ease-in-out;\n  display: inline-block;\n  max-width: 100%;\n  height: auto;\n}\n\n.img-circle {\n  border-radius: 50%;\n}\n\nhr {\n  margin-top: 20px;\n  margin-bottom: 20px;\n  border: 0;\n  border-top: 1px solid #eeeeee;\n}\n\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  margin: -1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  border: 0;\n}\n\n.sr-only-focusable:active,\n.sr-only-focusable:focus {\n  position: static;\n  width: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  clip: auto;\n}\n\n[role=\"button\"] {\n  cursor: pointer;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\n.h1,\n.h2,\n.h3,\n.h4,\n.h5,\n.h6 {\n  font-family: inherit;\n  font-weight: 500;\n  line-height: 1.1;\n  color: inherit;\n}\n\nh1 small,\nh1 .small,\nh2 small,\nh2 .small,\nh3 small,\nh3 .small,\nh4 small,\nh4 .small,\nh5 small,\nh5 .small,\nh6 small,\nh6 .small,\n.h1 small,\n.h1 .small,\n.h2 small,\n.h2 .small,\n.h3 small,\n.h3 .small,\n.h4 small,\n.h4 .small,\n.h5 small,\n.h5 .small,\n.h6 small,\n.h6 .small {\n  font-weight: normal;\n  line-height: 1;\n  color: #777777;\n}\n\nh1,\n.h1,\nh2,\n.h2,\nh3,\n.h3 {\n  margin-top: 20px;\n  margin-bottom: 10px;\n}\n\nh1 small,\nh1 .small,\n.h1 small,\n.h1 .small,\nh2 small,\nh2 .small,\n.h2 small,\n.h2 .small,\nh3 small,\nh3 .small,\n.h3 small,\n.h3 .small {\n  font-size: 65%;\n}\n\nh4,\n.h4,\nh5,\n.h5,\nh6,\n.h6 {\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\nh4 small,\nh4 .small,\n.h4 small,\n.h4 .small,\nh5 small,\nh5 .small,\n.h5 small,\n.h5 .small,\nh6 small,\nh6 .small,\n.h6 small,\n.h6 .small {\n  font-size: 75%;\n}\n\nh1,\n.h1 {\n  font-size: 36px;\n}\n\nh2,\n.h2 {\n  font-size: 30px;\n}\n\nh3,\n.h3 {\n  font-size: 24px;\n}\n\nh4,\n.h4 {\n  font-size: 18px;\n}\n\nh5,\n.h5 {\n  font-size: 14px;\n}\n\nh6,\n.h6 {\n  font-size: 12px;\n}\n\np {\n  margin: 0 0 10px;\n}\n\n.lead {\n  margin-bottom: 20px;\n  font-size: 16px;\n  font-weight: 300;\n  line-height: 1.4;\n}\n\n@media (min-width: 768px) {\n  .lead {\n    font-size: 21px;\n  }\n}\n\nsmall,\n.small {\n  font-size: 85%;\n}\n\nmark,\n.mark {\n  background-color: #fcf8e3;\n  padding: .2em;\n}\n\n.text-left {\n  text-align: left;\n}\n\n.text-right {\n  text-align: right;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.text-justify {\n  text-align: justify;\n}\n\n.text-nowrap {\n  white-space: nowrap;\n}\n\n.text-lowercase {\n  text-transform: lowercase;\n}\n\n.text-uppercase,\n.initialism {\n  text-transform: uppercase;\n}\n\n.text-capitalize {\n  text-transform: capitalize;\n}\n\n.text-muted {\n  color: #777777;\n}\n\n.text-primary {\n  color: #337ab7;\n}\n\na.text-primary:hover,\na.text-primary:focus {\n  color: #286090;\n}\n\n.text-success {\n  color: #3c763d;\n}\n\na.text-success:hover,\na.text-success:focus {\n  color: #2b542c;\n}\n\n.text-info {\n  color: #31708f;\n}\n\na.text-info:hover,\na.text-info:focus {\n  color: #245269;\n}\n\n.text-warning {\n  color: #8a6d3b;\n}\n\na.text-warning:hover,\na.text-warning:focus {\n  color: #66512c;\n}\n\n.text-danger {\n  color: #a94442;\n}\n\na.text-danger:hover,\na.text-danger:focus {\n  color: #843534;\n}\n\n.bg-primary {\n  color: #fff;\n}\n\n.bg-primary {\n  background-color: #337ab7;\n}\n\na.bg-primary:hover,\na.bg-primary:focus {\n  background-color: #286090;\n}\n\n.bg-success {\n  background-color: #dff0d8;\n}\n\na.bg-success:hover,\na.bg-success:focus {\n  background-color: #c1e2b3;\n}\n\n.bg-info {\n  background-color: #d9edf7;\n}\n\na.bg-info:hover,\na.bg-info:focus {\n  background-color: #afd9ee;\n}\n\n.bg-warning {\n  background-color: #fcf8e3;\n}\n\na.bg-warning:hover,\na.bg-warning:focus {\n  background-color: #f7ecb5;\n}\n\n.bg-danger {\n  background-color: #f2dede;\n}\n\na.bg-danger:hover,\na.bg-danger:focus {\n  background-color: #e4b9b9;\n}\n\n.page-header {\n  padding-bottom: 9px;\n  margin: 40px 0 20px;\n  border-bottom: 1px solid #eeeeee;\n}\n\nul,\nol {\n  margin-top: 0;\n  margin-bottom: 10px;\n}\n\nul ul,\nul ol,\nol ul,\nol ol {\n  margin-bottom: 0;\n}\n\n.list-unstyled {\n  padding-left: 0;\n  list-style: none;\n}\n\n.list-inline {\n  padding-left: 0;\n  list-style: none;\n  margin-left: -5px;\n}\n\n.list-inline > li {\n  display: inline-block;\n  padding-left: 5px;\n  padding-right: 5px;\n}\n\ndl {\n  margin-top: 0;\n  margin-bottom: 20px;\n}\n\ndt,\ndd {\n  line-height: 1.42857;\n}\n\ndt {\n  font-weight: bold;\n}\n\ndd {\n  margin-left: 0;\n}\n\n.dl-horizontal dd:before,\n.dl-horizontal dd:after {\n  content: \" \";\n  display: table;\n}\n\n.dl-horizontal dd:after {\n  clear: both;\n}\n\n@media (min-width: 768px) {\n  .dl-horizontal dt {\n    float: left;\n    width: 160px;\n    clear: left;\n    text-align: right;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n\n  .dl-horizontal dd {\n    margin-left: 180px;\n  }\n}\n\nabbr[title],\nabbr[data-original-title] {\n  cursor: help;\n  border-bottom: 1px dotted #777777;\n}\n\n.initialism {\n  font-size: 90%;\n}\n\nblockquote {\n  padding: 10px 20px;\n  margin: 0 0 20px;\n  font-size: 17.5px;\n  border-left: 5px solid #eeeeee;\n}\n\nblockquote p:last-child,\nblockquote ul:last-child,\nblockquote ol:last-child {\n  margin-bottom: 0;\n}\n\nblockquote footer,\nblockquote small,\nblockquote .small {\n  display: block;\n  font-size: 80%;\n  line-height: 1.42857;\n  color: #777777;\n}\n\nblockquote footer:before,\nblockquote small:before,\nblockquote .small:before {\n  content: '\\2014   \\A0';\n}\n\n.blockquote-reverse,\nblockquote.pull-right {\n  padding-right: 15px;\n  padding-left: 0;\n  border-right: 5px solid #eeeeee;\n  border-left: 0;\n  text-align: right;\n}\n\n.blockquote-reverse footer:before,\n.blockquote-reverse small:before,\n.blockquote-reverse .small:before,\nblockquote.pull-right footer:before,\nblockquote.pull-right small:before,\nblockquote.pull-right .small:before {\n  content: '';\n}\n\n.blockquote-reverse footer:after,\n.blockquote-reverse small:after,\n.blockquote-reverse .small:after,\nblockquote.pull-right footer:after,\nblockquote.pull-right small:after,\nblockquote.pull-right .small:after {\n  content: '\\A0   \\2014';\n}\n\naddress {\n  margin-bottom: 20px;\n  font-style: normal;\n  line-height: 1.42857;\n}\n\ncode,\nkbd,\npre,\nsamp {\n  font-family: Menlo, Monaco, Consolas, \"Courier New\", monospace;\n}\n\ncode {\n  padding: 2px 4px;\n  font-size: 90%;\n  color: #c7254e;\n  background-color: #f9f2f4;\n  border-radius: 4px;\n}\n\nkbd {\n  padding: 2px 4px;\n  font-size: 90%;\n  color: #fff;\n  background-color: #333;\n  border-radius: 3px;\n  box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.25);\n}\n\nkbd kbd {\n  padding: 0;\n  font-size: 100%;\n  font-weight: bold;\n  box-shadow: none;\n}\n\npre {\n  display: block;\n  padding: 9.5px;\n  margin: 0 0 10px;\n  font-size: 13px;\n  line-height: 1.42857;\n  word-break: break-all;\n  word-wrap: break-word;\n  color: #333333;\n  background-color: #f5f5f5;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n}\n\npre code {\n  padding: 0;\n  font-size: inherit;\n  color: inherit;\n  white-space: pre-wrap;\n  background-color: transparent;\n  border-radius: 0;\n}\n\n.pre-scrollable {\n  max-height: 340px;\n  overflow-y: scroll;\n}\n\n.container {\n  margin-right: auto;\n  margin-left: auto;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n\n.container:before,\n.container:after {\n  content: \" \";\n  display: table;\n}\n\n.container:after {\n  clear: both;\n}\n\n@media (min-width: 768px) {\n  .container {\n    width: 750px;\n  }\n}\n\n@media (min-width: 992px) {\n  .container {\n    width: 970px;\n  }\n}\n\n@media (min-width: 1200px) {\n  .container {\n    width: 1170px;\n  }\n}\n\n.container-fluid {\n  margin-right: auto;\n  margin-left: auto;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n\n.container-fluid:before,\n.container-fluid:after {\n  content: \" \";\n  display: table;\n}\n\n.container-fluid:after {\n  clear: both;\n}\n\n.row {\n  margin-left: -15px;\n  margin-right: -15px;\n}\n\n.row:before,\n.row:after {\n  content: \" \";\n  display: table;\n}\n\n.row:after {\n  clear: both;\n}\n\n.col-xs-1,\n.col-sm-1,\n.col-md-1,\n.col-lg-1,\n.col-xs-2,\n.col-sm-2,\n.col-md-2,\n.col-lg-2,\n.col-xs-3,\n.col-sm-3,\n.col-md-3,\n.col-lg-3,\n.col-xs-4,\n.col-sm-4,\n.col-md-4,\n.col-lg-4,\n.col-xs-5,\n.col-sm-5,\n.col-md-5,\n.col-lg-5,\n.col-xs-6,\n.col-sm-6,\n.col-md-6,\n.col-lg-6,\n.col-xs-7,\n.col-sm-7,\n.col-md-7,\n.col-lg-7,\n.col-xs-8,\n.col-sm-8,\n.col-md-8,\n.col-lg-8,\n.col-xs-9,\n.col-sm-9,\n.col-md-9,\n.col-lg-9,\n.col-xs-10,\n.col-sm-10,\n.col-md-10,\n.col-lg-10,\n.col-xs-11,\n.col-sm-11,\n.col-md-11,\n.col-lg-11,\n.col-xs-12,\n.col-sm-12,\n.col-md-12,\n.col-lg-12 {\n  position: relative;\n  min-height: 1px;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n\n.col-xs-1,\n.col-xs-2,\n.col-xs-3,\n.col-xs-4,\n.col-xs-5,\n.col-xs-6,\n.col-xs-7,\n.col-xs-8,\n.col-xs-9,\n.col-xs-10,\n.col-xs-11,\n.col-xs-12 {\n  float: left;\n}\n\n.col-xs-1 {\n  width: 8.33333%;\n}\n\n.col-xs-2 {\n  width: 16.66667%;\n}\n\n.col-xs-3 {\n  width: 25%;\n}\n\n.col-xs-4 {\n  width: 33.33333%;\n}\n\n.col-xs-5 {\n  width: 41.66667%;\n}\n\n.col-xs-6 {\n  width: 50%;\n}\n\n.col-xs-7 {\n  width: 58.33333%;\n}\n\n.col-xs-8 {\n  width: 66.66667%;\n}\n\n.col-xs-9 {\n  width: 75%;\n}\n\n.col-xs-10 {\n  width: 83.33333%;\n}\n\n.col-xs-11 {\n  width: 91.66667%;\n}\n\n.col-xs-12 {\n  width: 100%;\n}\n\n.col-xs-pull-0 {\n  right: auto;\n}\n\n.col-xs-pull-1 {\n  right: 8.33333%;\n}\n\n.col-xs-pull-2 {\n  right: 16.66667%;\n}\n\n.col-xs-pull-3 {\n  right: 25%;\n}\n\n.col-xs-pull-4 {\n  right: 33.33333%;\n}\n\n.col-xs-pull-5 {\n  right: 41.66667%;\n}\n\n.col-xs-pull-6 {\n  right: 50%;\n}\n\n.col-xs-pull-7 {\n  right: 58.33333%;\n}\n\n.col-xs-pull-8 {\n  right: 66.66667%;\n}\n\n.col-xs-pull-9 {\n  right: 75%;\n}\n\n.col-xs-pull-10 {\n  right: 83.33333%;\n}\n\n.col-xs-pull-11 {\n  right: 91.66667%;\n}\n\n.col-xs-pull-12 {\n  right: 100%;\n}\n\n.col-xs-push-0 {\n  left: auto;\n}\n\n.col-xs-push-1 {\n  left: 8.33333%;\n}\n\n.col-xs-push-2 {\n  left: 16.66667%;\n}\n\n.col-xs-push-3 {\n  left: 25%;\n}\n\n.col-xs-push-4 {\n  left: 33.33333%;\n}\n\n.col-xs-push-5 {\n  left: 41.66667%;\n}\n\n.col-xs-push-6 {\n  left: 50%;\n}\n\n.col-xs-push-7 {\n  left: 58.33333%;\n}\n\n.col-xs-push-8 {\n  left: 66.66667%;\n}\n\n.col-xs-push-9 {\n  left: 75%;\n}\n\n.col-xs-push-10 {\n  left: 83.33333%;\n}\n\n.col-xs-push-11 {\n  left: 91.66667%;\n}\n\n.col-xs-push-12 {\n  left: 100%;\n}\n\n.col-xs-offset-0 {\n  margin-left: 0%;\n}\n\n.col-xs-offset-1 {\n  margin-left: 8.33333%;\n}\n\n.col-xs-offset-2 {\n  margin-left: 16.66667%;\n}\n\n.col-xs-offset-3 {\n  margin-left: 25%;\n}\n\n.col-xs-offset-4 {\n  margin-left: 33.33333%;\n}\n\n.col-xs-offset-5 {\n  margin-left: 41.66667%;\n}\n\n.col-xs-offset-6 {\n  margin-left: 50%;\n}\n\n.col-xs-offset-7 {\n  margin-left: 58.33333%;\n}\n\n.col-xs-offset-8 {\n  margin-left: 66.66667%;\n}\n\n.col-xs-offset-9 {\n  margin-left: 75%;\n}\n\n.col-xs-offset-10 {\n  margin-left: 83.33333%;\n}\n\n.col-xs-offset-11 {\n  margin-left: 91.66667%;\n}\n\n.col-xs-offset-12 {\n  margin-left: 100%;\n}\n\n@media (min-width: 768px) {\n  .col-sm-1,\n  .col-sm-2,\n  .col-sm-3,\n  .col-sm-4,\n  .col-sm-5,\n  .col-sm-6,\n  .col-sm-7,\n  .col-sm-8,\n  .col-sm-9,\n  .col-sm-10,\n  .col-sm-11,\n  .col-sm-12 {\n    float: left;\n  }\n\n  .col-sm-1 {\n    width: 8.33333%;\n  }\n\n  .col-sm-2 {\n    width: 16.66667%;\n  }\n\n  .col-sm-3 {\n    width: 25%;\n  }\n\n  .col-sm-4 {\n    width: 33.33333%;\n  }\n\n  .col-sm-5 {\n    width: 41.66667%;\n  }\n\n  .col-sm-6 {\n    width: 50%;\n  }\n\n  .col-sm-7 {\n    width: 58.33333%;\n  }\n\n  .col-sm-8 {\n    width: 66.66667%;\n  }\n\n  .col-sm-9 {\n    width: 75%;\n  }\n\n  .col-sm-10 {\n    width: 83.33333%;\n  }\n\n  .col-sm-11 {\n    width: 91.66667%;\n  }\n\n  .col-sm-12 {\n    width: 100%;\n  }\n\n  .col-sm-pull-0 {\n    right: auto;\n  }\n\n  .col-sm-pull-1 {\n    right: 8.33333%;\n  }\n\n  .col-sm-pull-2 {\n    right: 16.66667%;\n  }\n\n  .col-sm-pull-3 {\n    right: 25%;\n  }\n\n  .col-sm-pull-4 {\n    right: 33.33333%;\n  }\n\n  .col-sm-pull-5 {\n    right: 41.66667%;\n  }\n\n  .col-sm-pull-6 {\n    right: 50%;\n  }\n\n  .col-sm-pull-7 {\n    right: 58.33333%;\n  }\n\n  .col-sm-pull-8 {\n    right: 66.66667%;\n  }\n\n  .col-sm-pull-9 {\n    right: 75%;\n  }\n\n  .col-sm-pull-10 {\n    right: 83.33333%;\n  }\n\n  .col-sm-pull-11 {\n    right: 91.66667%;\n  }\n\n  .col-sm-pull-12 {\n    right: 100%;\n  }\n\n  .col-sm-push-0 {\n    left: auto;\n  }\n\n  .col-sm-push-1 {\n    left: 8.33333%;\n  }\n\n  .col-sm-push-2 {\n    left: 16.66667%;\n  }\n\n  .col-sm-push-3 {\n    left: 25%;\n  }\n\n  .col-sm-push-4 {\n    left: 33.33333%;\n  }\n\n  .col-sm-push-5 {\n    left: 41.66667%;\n  }\n\n  .col-sm-push-6 {\n    left: 50%;\n  }\n\n  .col-sm-push-7 {\n    left: 58.33333%;\n  }\n\n  .col-sm-push-8 {\n    left: 66.66667%;\n  }\n\n  .col-sm-push-9 {\n    left: 75%;\n  }\n\n  .col-sm-push-10 {\n    left: 83.33333%;\n  }\n\n  .col-sm-push-11 {\n    left: 91.66667%;\n  }\n\n  .col-sm-push-12 {\n    left: 100%;\n  }\n\n  .col-sm-offset-0 {\n    margin-left: 0%;\n  }\n\n  .col-sm-offset-1 {\n    margin-left: 8.33333%;\n  }\n\n  .col-sm-offset-2 {\n    margin-left: 16.66667%;\n  }\n\n  .col-sm-offset-3 {\n    margin-left: 25%;\n  }\n\n  .col-sm-offset-4 {\n    margin-left: 33.33333%;\n  }\n\n  .col-sm-offset-5 {\n    margin-left: 41.66667%;\n  }\n\n  .col-sm-offset-6 {\n    margin-left: 50%;\n  }\n\n  .col-sm-offset-7 {\n    margin-left: 58.33333%;\n  }\n\n  .col-sm-offset-8 {\n    margin-left: 66.66667%;\n  }\n\n  .col-sm-offset-9 {\n    margin-left: 75%;\n  }\n\n  .col-sm-offset-10 {\n    margin-left: 83.33333%;\n  }\n\n  .col-sm-offset-11 {\n    margin-left: 91.66667%;\n  }\n\n  .col-sm-offset-12 {\n    margin-left: 100%;\n  }\n}\n\n@media (min-width: 992px) {\n  .col-md-1,\n  .col-md-2,\n  .col-md-3,\n  .col-md-4,\n  .col-md-5,\n  .col-md-6,\n  .col-md-7,\n  .col-md-8,\n  .col-md-9,\n  .col-md-10,\n  .col-md-11,\n  .col-md-12 {\n    float: left;\n  }\n\n  .col-md-1 {\n    width: 8.33333%;\n  }\n\n  .col-md-2 {\n    width: 16.66667%;\n  }\n\n  .col-md-3 {\n    width: 25%;\n  }\n\n  .col-md-4 {\n    width: 33.33333%;\n  }\n\n  .col-md-5 {\n    width: 41.66667%;\n  }\n\n  .col-md-6 {\n    width: 50%;\n  }\n\n  .col-md-7 {\n    width: 58.33333%;\n  }\n\n  .col-md-8 {\n    width: 66.66667%;\n  }\n\n  .col-md-9 {\n    width: 75%;\n  }\n\n  .col-md-10 {\n    width: 83.33333%;\n  }\n\n  .col-md-11 {\n    width: 91.66667%;\n  }\n\n  .col-md-12 {\n    width: 100%;\n  }\n\n  .col-md-pull-0 {\n    right: auto;\n  }\n\n  .col-md-pull-1 {\n    right: 8.33333%;\n  }\n\n  .col-md-pull-2 {\n    right: 16.66667%;\n  }\n\n  .col-md-pull-3 {\n    right: 25%;\n  }\n\n  .col-md-pull-4 {\n    right: 33.33333%;\n  }\n\n  .col-md-pull-5 {\n    right: 41.66667%;\n  }\n\n  .col-md-pull-6 {\n    right: 50%;\n  }\n\n  .col-md-pull-7 {\n    right: 58.33333%;\n  }\n\n  .col-md-pull-8 {\n    right: 66.66667%;\n  }\n\n  .col-md-pull-9 {\n    right: 75%;\n  }\n\n  .col-md-pull-10 {\n    right: 83.33333%;\n  }\n\n  .col-md-pull-11 {\n    right: 91.66667%;\n  }\n\n  .col-md-pull-12 {\n    right: 100%;\n  }\n\n  .col-md-push-0 {\n    left: auto;\n  }\n\n  .col-md-push-1 {\n    left: 8.33333%;\n  }\n\n  .col-md-push-2 {\n    left: 16.66667%;\n  }\n\n  .col-md-push-3 {\n    left: 25%;\n  }\n\n  .col-md-push-4 {\n    left: 33.33333%;\n  }\n\n  .col-md-push-5 {\n    left: 41.66667%;\n  }\n\n  .col-md-push-6 {\n    left: 50%;\n  }\n\n  .col-md-push-7 {\n    left: 58.33333%;\n  }\n\n  .col-md-push-8 {\n    left: 66.66667%;\n  }\n\n  .col-md-push-9 {\n    left: 75%;\n  }\n\n  .col-md-push-10 {\n    left: 83.33333%;\n  }\n\n  .col-md-push-11 {\n    left: 91.66667%;\n  }\n\n  .col-md-push-12 {\n    left: 100%;\n  }\n\n  .col-md-offset-0 {\n    margin-left: 0%;\n  }\n\n  .col-md-offset-1 {\n    margin-left: 8.33333%;\n  }\n\n  .col-md-offset-2 {\n    margin-left: 16.66667%;\n  }\n\n  .col-md-offset-3 {\n    margin-left: 25%;\n  }\n\n  .col-md-offset-4 {\n    margin-left: 33.33333%;\n  }\n\n  .col-md-offset-5 {\n    margin-left: 41.66667%;\n  }\n\n  .col-md-offset-6 {\n    margin-left: 50%;\n  }\n\n  .col-md-offset-7 {\n    margin-left: 58.33333%;\n  }\n\n  .col-md-offset-8 {\n    margin-left: 66.66667%;\n  }\n\n  .col-md-offset-9 {\n    margin-left: 75%;\n  }\n\n  .col-md-offset-10 {\n    margin-left: 83.33333%;\n  }\n\n  .col-md-offset-11 {\n    margin-left: 91.66667%;\n  }\n\n  .col-md-offset-12 {\n    margin-left: 100%;\n  }\n}\n\n@media (min-width: 1200px) {\n  .col-lg-1,\n  .col-lg-2,\n  .col-lg-3,\n  .col-lg-4,\n  .col-lg-5,\n  .col-lg-6,\n  .col-lg-7,\n  .col-lg-8,\n  .col-lg-9,\n  .col-lg-10,\n  .col-lg-11,\n  .col-lg-12 {\n    float: left;\n  }\n\n  .col-lg-1 {\n    width: 8.33333%;\n  }\n\n  .col-lg-2 {\n    width: 16.66667%;\n  }\n\n  .col-lg-3 {\n    width: 25%;\n  }\n\n  .col-lg-4 {\n    width: 33.33333%;\n  }\n\n  .col-lg-5 {\n    width: 41.66667%;\n  }\n\n  .col-lg-6 {\n    width: 50%;\n  }\n\n  .col-lg-7 {\n    width: 58.33333%;\n  }\n\n  .col-lg-8 {\n    width: 66.66667%;\n  }\n\n  .col-lg-9 {\n    width: 75%;\n  }\n\n  .col-lg-10 {\n    width: 83.33333%;\n  }\n\n  .col-lg-11 {\n    width: 91.66667%;\n  }\n\n  .col-lg-12 {\n    width: 100%;\n  }\n\n  .col-lg-pull-0 {\n    right: auto;\n  }\n\n  .col-lg-pull-1 {\n    right: 8.33333%;\n  }\n\n  .col-lg-pull-2 {\n    right: 16.66667%;\n  }\n\n  .col-lg-pull-3 {\n    right: 25%;\n  }\n\n  .col-lg-pull-4 {\n    right: 33.33333%;\n  }\n\n  .col-lg-pull-5 {\n    right: 41.66667%;\n  }\n\n  .col-lg-pull-6 {\n    right: 50%;\n  }\n\n  .col-lg-pull-7 {\n    right: 58.33333%;\n  }\n\n  .col-lg-pull-8 {\n    right: 66.66667%;\n  }\n\n  .col-lg-pull-9 {\n    right: 75%;\n  }\n\n  .col-lg-pull-10 {\n    right: 83.33333%;\n  }\n\n  .col-lg-pull-11 {\n    right: 91.66667%;\n  }\n\n  .col-lg-pull-12 {\n    right: 100%;\n  }\n\n  .col-lg-push-0 {\n    left: auto;\n  }\n\n  .col-lg-push-1 {\n    left: 8.33333%;\n  }\n\n  .col-lg-push-2 {\n    left: 16.66667%;\n  }\n\n  .col-lg-push-3 {\n    left: 25%;\n  }\n\n  .col-lg-push-4 {\n    left: 33.33333%;\n  }\n\n  .col-lg-push-5 {\n    left: 41.66667%;\n  }\n\n  .col-lg-push-6 {\n    left: 50%;\n  }\n\n  .col-lg-push-7 {\n    left: 58.33333%;\n  }\n\n  .col-lg-push-8 {\n    left: 66.66667%;\n  }\n\n  .col-lg-push-9 {\n    left: 75%;\n  }\n\n  .col-lg-push-10 {\n    left: 83.33333%;\n  }\n\n  .col-lg-push-11 {\n    left: 91.66667%;\n  }\n\n  .col-lg-push-12 {\n    left: 100%;\n  }\n\n  .col-lg-offset-0 {\n    margin-left: 0%;\n  }\n\n  .col-lg-offset-1 {\n    margin-left: 8.33333%;\n  }\n\n  .col-lg-offset-2 {\n    margin-left: 16.66667%;\n  }\n\n  .col-lg-offset-3 {\n    margin-left: 25%;\n  }\n\n  .col-lg-offset-4 {\n    margin-left: 33.33333%;\n  }\n\n  .col-lg-offset-5 {\n    margin-left: 41.66667%;\n  }\n\n  .col-lg-offset-6 {\n    margin-left: 50%;\n  }\n\n  .col-lg-offset-7 {\n    margin-left: 58.33333%;\n  }\n\n  .col-lg-offset-8 {\n    margin-left: 66.66667%;\n  }\n\n  .col-lg-offset-9 {\n    margin-left: 75%;\n  }\n\n  .col-lg-offset-10 {\n    margin-left: 83.33333%;\n  }\n\n  .col-lg-offset-11 {\n    margin-left: 91.66667%;\n  }\n\n  .col-lg-offset-12 {\n    margin-left: 100%;\n  }\n}\n\ntable {\n  background-color: transparent;\n}\n\ncaption {\n  padding-top: 8px;\n  padding-bottom: 8px;\n  color: #777777;\n  text-align: left;\n}\n\nth {\n  text-align: left;\n}\n\n.table {\n  width: 100%;\n  max-width: 100%;\n  margin-bottom: 20px;\n}\n\n.table > thead > tr > th,\n.table > thead > tr > td,\n.table > tbody > tr > th,\n.table > tbody > tr > td,\n.table > tfoot > tr > th,\n.table > tfoot > tr > td {\n  padding: 8px;\n  line-height: 1.42857;\n  vertical-align: top;\n  border-top: 1px solid #ddd;\n}\n\n.table > thead > tr > th {\n  vertical-align: bottom;\n  border-bottom: 2px solid #ddd;\n}\n\n.table > caption + thead > tr:first-child > th,\n.table > caption + thead > tr:first-child > td,\n.table > colgroup + thead > tr:first-child > th,\n.table > colgroup + thead > tr:first-child > td,\n.table > thead:first-child > tr:first-child > th,\n.table > thead:first-child > tr:first-child > td {\n  border-top: 0;\n}\n\n.table > tbody + tbody {\n  border-top: 2px solid #ddd;\n}\n\n.table .table {\n  background-color: #fff;\n}\n\n.table-condensed > thead > tr > th,\n.table-condensed > thead > tr > td,\n.table-condensed > tbody > tr > th,\n.table-condensed > tbody > tr > td,\n.table-condensed > tfoot > tr > th,\n.table-condensed > tfoot > tr > td {\n  padding: 5px;\n}\n\n.table-bordered {\n  border: 1px solid #ddd;\n}\n\n.table-bordered > thead > tr > th,\n.table-bordered > thead > tr > td,\n.table-bordered > tbody > tr > th,\n.table-bordered > tbody > tr > td,\n.table-bordered > tfoot > tr > th,\n.table-bordered > tfoot > tr > td {\n  border: 1px solid #ddd;\n}\n\n.table-bordered > thead > tr > th,\n.table-bordered > thead > tr > td {\n  border-bottom-width: 2px;\n}\n\n.table-striped > tbody > tr:nth-of-type(odd) {\n  background-color: #f9f9f9;\n}\n\n.table-hover > tbody > tr:hover {\n  background-color: #f5f5f5;\n}\n\ntable col[class*=\"col-\"] {\n  position: static;\n  float: none;\n  display: table-column;\n}\n\ntable td[class*=\"col-\"],\ntable th[class*=\"col-\"] {\n  position: static;\n  float: none;\n  display: table-cell;\n}\n\n.table > thead > tr > td.active,\n.table > thead > tr > th.active,\n.table > thead > tr.active > td,\n.table > thead > tr.active > th,\n.table > tbody > tr > td.active,\n.table > tbody > tr > th.active,\n.table > tbody > tr.active > td,\n.table > tbody > tr.active > th,\n.table > tfoot > tr > td.active,\n.table > tfoot > tr > th.active,\n.table > tfoot > tr.active > td,\n.table > tfoot > tr.active > th {\n  background-color: #f5f5f5;\n}\n\n.table-hover > tbody > tr > td.active:hover,\n.table-hover > tbody > tr > th.active:hover,\n.table-hover > tbody > tr.active:hover > td,\n.table-hover > tbody > tr:hover > .active,\n.table-hover > tbody > tr.active:hover > th {\n  background-color: #e8e8e8;\n}\n\n.table > thead > tr > td.success,\n.table > thead > tr > th.success,\n.table > thead > tr.success > td,\n.table > thead > tr.success > th,\n.table > tbody > tr > td.success,\n.table > tbody > tr > th.success,\n.table > tbody > tr.success > td,\n.table > tbody > tr.success > th,\n.table > tfoot > tr > td.success,\n.table > tfoot > tr > th.success,\n.table > tfoot > tr.success > td,\n.table > tfoot > tr.success > th {\n  background-color: #dff0d8;\n}\n\n.table-hover > tbody > tr > td.success:hover,\n.table-hover > tbody > tr > th.success:hover,\n.table-hover > tbody > tr.success:hover > td,\n.table-hover > tbody > tr:hover > .success,\n.table-hover > tbody > tr.success:hover > th {\n  background-color: #d0e9c6;\n}\n\n.table > thead > tr > td.info,\n.table > thead > tr > th.info,\n.table > thead > tr.info > td,\n.table > thead > tr.info > th,\n.table > tbody > tr > td.info,\n.table > tbody > tr > th.info,\n.table > tbody > tr.info > td,\n.table > tbody > tr.info > th,\n.table > tfoot > tr > td.info,\n.table > tfoot > tr > th.info,\n.table > tfoot > tr.info > td,\n.table > tfoot > tr.info > th {\n  background-color: #d9edf7;\n}\n\n.table-hover > tbody > tr > td.info:hover,\n.table-hover > tbody > tr > th.info:hover,\n.table-hover > tbody > tr.info:hover > td,\n.table-hover > tbody > tr:hover > .info,\n.table-hover > tbody > tr.info:hover > th {\n  background-color: #c4e3f3;\n}\n\n.table > thead > tr > td.warning,\n.table > thead > tr > th.warning,\n.table > thead > tr.warning > td,\n.table > thead > tr.warning > th,\n.table > tbody > tr > td.warning,\n.table > tbody > tr > th.warning,\n.table > tbody > tr.warning > td,\n.table > tbody > tr.warning > th,\n.table > tfoot > tr > td.warning,\n.table > tfoot > tr > th.warning,\n.table > tfoot > tr.warning > td,\n.table > tfoot > tr.warning > th {\n  background-color: #fcf8e3;\n}\n\n.table-hover > tbody > tr > td.warning:hover,\n.table-hover > tbody > tr > th.warning:hover,\n.table-hover > tbody > tr.warning:hover > td,\n.table-hover > tbody > tr:hover > .warning,\n.table-hover > tbody > tr.warning:hover > th {\n  background-color: #faf2cc;\n}\n\n.table > thead > tr > td.danger,\n.table > thead > tr > th.danger,\n.table > thead > tr.danger > td,\n.table > thead > tr.danger > th,\n.table > tbody > tr > td.danger,\n.table > tbody > tr > th.danger,\n.table > tbody > tr.danger > td,\n.table > tbody > tr.danger > th,\n.table > tfoot > tr > td.danger,\n.table > tfoot > tr > th.danger,\n.table > tfoot > tr.danger > td,\n.table > tfoot > tr.danger > th {\n  background-color: #f2dede;\n}\n\n.table-hover > tbody > tr > td.danger:hover,\n.table-hover > tbody > tr > th.danger:hover,\n.table-hover > tbody > tr.danger:hover > td,\n.table-hover > tbody > tr:hover > .danger,\n.table-hover > tbody > tr.danger:hover > th {\n  background-color: #ebcccc;\n}\n\n.table-responsive {\n  overflow-x: auto;\n  min-height: 0.01%;\n}\n\n@media screen and (max-width: 767px) {\n  .table-responsive {\n    width: 100%;\n    margin-bottom: 15px;\n    overflow-y: hidden;\n    -ms-overflow-style: -ms-autohiding-scrollbar;\n    border: 1px solid #ddd;\n  }\n\n  .table-responsive > .table {\n    margin-bottom: 0;\n  }\n\n  .table-responsive > .table > thead > tr > th,\n  .table-responsive > .table > thead > tr > td,\n  .table-responsive > .table > tbody > tr > th,\n  .table-responsive > .table > tbody > tr > td,\n  .table-responsive > .table > tfoot > tr > th,\n  .table-responsive > .table > tfoot > tr > td {\n    white-space: nowrap;\n  }\n\n  .table-responsive > .table-bordered {\n    border: 0;\n  }\n\n  .table-responsive > .table-bordered > thead > tr > th:first-child,\n  .table-responsive > .table-bordered > thead > tr > td:first-child,\n  .table-responsive > .table-bordered > tbody > tr > th:first-child,\n  .table-responsive > .table-bordered > tbody > tr > td:first-child,\n  .table-responsive > .table-bordered > tfoot > tr > th:first-child,\n  .table-responsive > .table-bordered > tfoot > tr > td:first-child {\n    border-left: 0;\n  }\n\n  .table-responsive > .table-bordered > thead > tr > th:last-child,\n  .table-responsive > .table-bordered > thead > tr > td:last-child,\n  .table-responsive > .table-bordered > tbody > tr > th:last-child,\n  .table-responsive > .table-bordered > tbody > tr > td:last-child,\n  .table-responsive > .table-bordered > tfoot > tr > th:last-child,\n  .table-responsive > .table-bordered > tfoot > tr > td:last-child {\n    border-right: 0;\n  }\n\n  .table-responsive > .table-bordered > tbody > tr:last-child > th,\n  .table-responsive > .table-bordered > tbody > tr:last-child > td,\n  .table-responsive > .table-bordered > tfoot > tr:last-child > th,\n  .table-responsive > .table-bordered > tfoot > tr:last-child > td {\n    border-bottom: 0;\n  }\n}\n\nfieldset {\n  padding: 0;\n  margin: 0;\n  border: 0;\n  min-width: 0;\n}\n\nlegend {\n  display: block;\n  width: 100%;\n  padding: 0;\n  margin-bottom: 20px;\n  font-size: 21px;\n  line-height: inherit;\n  color: #333333;\n  border: 0;\n  border-bottom: 1px solid #e5e5e5;\n}\n\nlabel {\n  display: inline-block;\n  max-width: 100%;\n  margin-bottom: 5px;\n  font-weight: bold;\n}\n\ninput[type=\"search\"] {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\n\ninput[type=\"radio\"],\ninput[type=\"checkbox\"] {\n  margin: 4px 0 0;\n  margin-top: 1px \\9;\n  line-height: normal;\n}\n\ninput[type=\"file\"] {\n  display: block;\n}\n\ninput[type=\"range\"] {\n  display: block;\n  width: 100%;\n}\n\nselect[multiple],\nselect[size] {\n  height: auto;\n}\n\ninput[type=\"file\"]:focus,\ninput[type=\"radio\"]:focus,\ninput[type=\"checkbox\"]:focus {\n  outline: 5px auto -webkit-focus-ring-color;\n  outline-offset: -2px;\n}\n\noutput {\n  display: block;\n  padding-top: 7px;\n  font-size: 14px;\n  line-height: 1.42857;\n  color: #555555;\n}\n\n.form-control {\n  display: block;\n  width: 100%;\n  height: 34px;\n  padding: 6px 12px;\n  font-size: 14px;\n  line-height: 1.42857;\n  color: #555555;\n  background-color: #fff;\n  background-image: none;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  -webkit-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\n  -o-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\n  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\n}\n\n.form-control:focus {\n  border-color: #66afe9;\n  outline: 0;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(102, 175, 233, 0.6);\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(102, 175, 233, 0.6);\n}\n\n.form-control::-moz-placeholder {\n  color: #999;\n  opacity: 1;\n}\n\n.form-control:-ms-input-placeholder {\n  color: #999;\n}\n\n.form-control::-webkit-input-placeholder {\n  color: #999;\n}\n\n.form-control::-ms-expand {\n  border: 0;\n  background-color: transparent;\n}\n\n.form-control[disabled],\n.form-control[readonly],\nfieldset[disabled] .form-control {\n  background-color: #eeeeee;\n  opacity: 1;\n}\n\n.form-control[disabled],\nfieldset[disabled] .form-control {\n  cursor: not-allowed;\n}\n\ntextarea.form-control {\n  height: auto;\n}\n\ninput[type=\"search\"] {\n  -webkit-appearance: none;\n}\n\n@media screen and (-webkit-min-device-pixel-ratio: 0) {\n  input[type=\"date\"].form-control,\n  input[type=\"time\"].form-control,\n  input[type=\"datetime-local\"].form-control,\n  input[type=\"month\"].form-control {\n    line-height: 34px;\n  }\n\n  input[type=\"date\"].input-sm,\n  .input-group-sm > input[type=\"date\"].form-control,\n  .input-group-sm > input[type=\"date\"].input-group-addon,\n  .input-group-sm > .input-group-btn > input[type=\"date\"].btn,\n  .input-group-sm input[type=\"date\"],\n  input[type=\"time\"].input-sm,\n  .input-group-sm > input[type=\"time\"].form-control,\n  .input-group-sm > input[type=\"time\"].input-group-addon,\n  .input-group-sm > .input-group-btn > input[type=\"time\"].btn,\n  .input-group-sm\n  input[type=\"time\"],\n  input[type=\"datetime-local\"].input-sm,\n  .input-group-sm > input[type=\"datetime-local\"].form-control,\n  .input-group-sm > input[type=\"datetime-local\"].input-group-addon,\n  .input-group-sm > .input-group-btn > input[type=\"datetime-local\"].btn,\n  .input-group-sm\n  input[type=\"datetime-local\"],\n  input[type=\"month\"].input-sm,\n  .input-group-sm > input[type=\"month\"].form-control,\n  .input-group-sm > input[type=\"month\"].input-group-addon,\n  .input-group-sm > .input-group-btn > input[type=\"month\"].btn,\n  .input-group-sm\n  input[type=\"month\"] {\n    line-height: 30px;\n  }\n\n  input[type=\"date\"].input-lg,\n  .input-group-lg > input[type=\"date\"].form-control,\n  .input-group-lg > input[type=\"date\"].input-group-addon,\n  .input-group-lg > .input-group-btn > input[type=\"date\"].btn,\n  .input-group-lg input[type=\"date\"],\n  input[type=\"time\"].input-lg,\n  .input-group-lg > input[type=\"time\"].form-control,\n  .input-group-lg > input[type=\"time\"].input-group-addon,\n  .input-group-lg > .input-group-btn > input[type=\"time\"].btn,\n  .input-group-lg\n  input[type=\"time\"],\n  input[type=\"datetime-local\"].input-lg,\n  .input-group-lg > input[type=\"datetime-local\"].form-control,\n  .input-group-lg > input[type=\"datetime-local\"].input-group-addon,\n  .input-group-lg > .input-group-btn > input[type=\"datetime-local\"].btn,\n  .input-group-lg\n  input[type=\"datetime-local\"],\n  input[type=\"month\"].input-lg,\n  .input-group-lg > input[type=\"month\"].form-control,\n  .input-group-lg > input[type=\"month\"].input-group-addon,\n  .input-group-lg > .input-group-btn > input[type=\"month\"].btn,\n  .input-group-lg\n  input[type=\"month\"] {\n    line-height: 46px;\n  }\n}\n\n.form-group {\n  margin-bottom: 15px;\n}\n\n.radio,\n.checkbox {\n  position: relative;\n  display: block;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\n.radio label,\n.checkbox label {\n  min-height: 20px;\n  padding-left: 20px;\n  margin-bottom: 0;\n  font-weight: normal;\n  cursor: pointer;\n}\n\n.radio input[type=\"radio\"],\n.radio-inline input[type=\"radio\"],\n.checkbox input[type=\"checkbox\"],\n.checkbox-inline input[type=\"checkbox\"] {\n  position: absolute;\n  margin-left: -20px;\n  margin-top: 4px \\9;\n}\n\n.radio + .radio,\n.checkbox + .checkbox {\n  margin-top: -5px;\n}\n\n.radio-inline,\n.checkbox-inline {\n  position: relative;\n  display: inline-block;\n  padding-left: 20px;\n  margin-bottom: 0;\n  vertical-align: middle;\n  font-weight: normal;\n  cursor: pointer;\n}\n\n.radio-inline + .radio-inline,\n.checkbox-inline + .checkbox-inline {\n  margin-top: 0;\n  margin-left: 10px;\n}\n\ninput[type=\"radio\"][disabled],\ninput[type=\"radio\"].disabled,\nfieldset[disabled] input[type=\"radio\"],\ninput[type=\"checkbox\"][disabled],\ninput[type=\"checkbox\"].disabled,\nfieldset[disabled]\ninput[type=\"checkbox\"] {\n  cursor: not-allowed;\n}\n\n.radio-inline.disabled,\nfieldset[disabled] .radio-inline,\n.checkbox-inline.disabled,\nfieldset[disabled]\n.checkbox-inline {\n  cursor: not-allowed;\n}\n\n.radio.disabled label,\nfieldset[disabled] .radio label,\n.checkbox.disabled label,\nfieldset[disabled]\n.checkbox label {\n  cursor: not-allowed;\n}\n\n.form-control-static {\n  padding-top: 7px;\n  padding-bottom: 7px;\n  margin-bottom: 0;\n  min-height: 34px;\n}\n\n.form-control-static.input-lg,\n.input-group-lg > .form-control-static.form-control,\n.input-group-lg > .form-control-static.input-group-addon,\n.input-group-lg > .input-group-btn > .form-control-static.btn,\n.form-control-static.input-sm,\n.input-group-sm > .form-control-static.form-control,\n.input-group-sm > .form-control-static.input-group-addon,\n.input-group-sm > .input-group-btn > .form-control-static.btn {\n  padding-left: 0;\n  padding-right: 0;\n}\n\n.input-sm,\n.input-group-sm > .form-control,\n.input-group-sm > .input-group-addon,\n.input-group-sm > .input-group-btn > .btn {\n  height: 30px;\n  padding: 5px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 3px;\n}\n\nselect.input-sm,\n.input-group-sm > select.form-control,\n.input-group-sm > select.input-group-addon,\n.input-group-sm > .input-group-btn > select.btn {\n  height: 30px;\n  line-height: 30px;\n}\n\ntextarea.input-sm,\n.input-group-sm > textarea.form-control,\n.input-group-sm > textarea.input-group-addon,\n.input-group-sm > .input-group-btn > textarea.btn,\nselect[multiple].input-sm,\n.input-group-sm > select[multiple].form-control,\n.input-group-sm > select[multiple].input-group-addon,\n.input-group-sm > .input-group-btn > select[multiple].btn {\n  height: auto;\n}\n\n.form-group-sm .form-control {\n  height: 30px;\n  padding: 5px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 3px;\n}\n\n.form-group-sm select.form-control {\n  height: 30px;\n  line-height: 30px;\n}\n\n.form-group-sm textarea.form-control,\n.form-group-sm select[multiple].form-control {\n  height: auto;\n}\n\n.form-group-sm .form-control-static {\n  height: 30px;\n  min-height: 32px;\n  padding: 6px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n}\n\n.input-lg,\n.input-group-lg > .form-control,\n.input-group-lg > .input-group-addon,\n.input-group-lg > .input-group-btn > .btn {\n  height: 46px;\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.33333;\n  border-radius: 6px;\n}\n\nselect.input-lg,\n.input-group-lg > select.form-control,\n.input-group-lg > select.input-group-addon,\n.input-group-lg > .input-group-btn > select.btn {\n  height: 46px;\n  line-height: 46px;\n}\n\ntextarea.input-lg,\n.input-group-lg > textarea.form-control,\n.input-group-lg > textarea.input-group-addon,\n.input-group-lg > .input-group-btn > textarea.btn,\nselect[multiple].input-lg,\n.input-group-lg > select[multiple].form-control,\n.input-group-lg > select[multiple].input-group-addon,\n.input-group-lg > .input-group-btn > select[multiple].btn {\n  height: auto;\n}\n\n.form-group-lg .form-control {\n  height: 46px;\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.33333;\n  border-radius: 6px;\n}\n\n.form-group-lg select.form-control {\n  height: 46px;\n  line-height: 46px;\n}\n\n.form-group-lg textarea.form-control,\n.form-group-lg select[multiple].form-control {\n  height: auto;\n}\n\n.form-group-lg .form-control-static {\n  height: 46px;\n  min-height: 38px;\n  padding: 11px 16px;\n  font-size: 18px;\n  line-height: 1.33333;\n}\n\n.has-feedback {\n  position: relative;\n}\n\n.has-feedback .form-control {\n  padding-right: 42.5px;\n}\n\n.form-control-feedback {\n  position: absolute;\n  top: 0;\n  right: 0;\n  z-index: 2;\n  display: block;\n  width: 34px;\n  height: 34px;\n  line-height: 34px;\n  text-align: center;\n  pointer-events: none;\n}\n\n.input-lg + .form-control-feedback,\n.input-group-lg > .form-control + .form-control-feedback,\n.input-group-lg > .input-group-addon + .form-control-feedback,\n.input-group-lg > .input-group-btn > .btn + .form-control-feedback,\n.input-group-lg + .form-control-feedback,\n.form-group-lg .form-control + .form-control-feedback {\n  width: 46px;\n  height: 46px;\n  line-height: 46px;\n}\n\n.input-sm + .form-control-feedback,\n.input-group-sm > .form-control + .form-control-feedback,\n.input-group-sm > .input-group-addon + .form-control-feedback,\n.input-group-sm > .input-group-btn > .btn + .form-control-feedback,\n.input-group-sm + .form-control-feedback,\n.form-group-sm .form-control + .form-control-feedback {\n  width: 30px;\n  height: 30px;\n  line-height: 30px;\n}\n\n.has-success .help-block,\n.has-success .control-label,\n.has-success .radio,\n.has-success .checkbox,\n.has-success .radio-inline,\n.has-success .checkbox-inline,\n.has-success.radio label,\n.has-success.checkbox label,\n.has-success.radio-inline label,\n.has-success.checkbox-inline label {\n  color: #3c763d;\n}\n\n.has-success .form-control {\n  border-color: #3c763d;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n}\n\n.has-success .form-control:focus {\n  border-color: #2b542c;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #67b168;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #67b168;\n}\n\n.has-success .input-group-addon {\n  color: #3c763d;\n  border-color: #3c763d;\n  background-color: #dff0d8;\n}\n\n.has-success .form-control-feedback {\n  color: #3c763d;\n}\n\n.has-warning .help-block,\n.has-warning .control-label,\n.has-warning .radio,\n.has-warning .checkbox,\n.has-warning .radio-inline,\n.has-warning .checkbox-inline,\n.has-warning.radio label,\n.has-warning.checkbox label,\n.has-warning.radio-inline label,\n.has-warning.checkbox-inline label {\n  color: #8a6d3b;\n}\n\n.has-warning .form-control {\n  border-color: #8a6d3b;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n}\n\n.has-warning .form-control:focus {\n  border-color: #66512c;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #c0a16b;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #c0a16b;\n}\n\n.has-warning .input-group-addon {\n  color: #8a6d3b;\n  border-color: #8a6d3b;\n  background-color: #fcf8e3;\n}\n\n.has-warning .form-control-feedback {\n  color: #8a6d3b;\n}\n\n.has-error .help-block,\n.has-error .control-label,\n.has-error .radio,\n.has-error .checkbox,\n.has-error .radio-inline,\n.has-error .checkbox-inline,\n.has-error.radio label,\n.has-error.checkbox label,\n.has-error.radio-inline label,\n.has-error.checkbox-inline label {\n  color: #a94442;\n}\n\n.has-error .form-control {\n  border-color: #a94442;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n}\n\n.has-error .form-control:focus {\n  border-color: #843534;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #ce8483;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #ce8483;\n}\n\n.has-error .input-group-addon {\n  color: #a94442;\n  border-color: #a94442;\n  background-color: #f2dede;\n}\n\n.has-error .form-control-feedback {\n  color: #a94442;\n}\n\n.has-feedback label ~ .form-control-feedback {\n  top: 25px;\n}\n\n.has-feedback label.sr-only ~ .form-control-feedback {\n  top: 0;\n}\n\n.help-block {\n  display: block;\n  margin-top: 5px;\n  margin-bottom: 10px;\n  color: #737373;\n}\n\n@media (min-width: 768px) {\n  .form-inline .form-group {\n    display: inline-block;\n    margin-bottom: 0;\n    vertical-align: middle;\n  }\n\n  .form-inline .form-control {\n    display: inline-block;\n    width: auto;\n    vertical-align: middle;\n  }\n\n  .form-inline .form-control-static {\n    display: inline-block;\n  }\n\n  .form-inline .input-group {\n    display: inline-table;\n    vertical-align: middle;\n  }\n\n  .form-inline .input-group .input-group-addon,\n  .form-inline .input-group .input-group-btn,\n  .form-inline .input-group .form-control {\n    width: auto;\n  }\n\n  .form-inline .input-group > .form-control {\n    width: 100%;\n  }\n\n  .form-inline .control-label {\n    margin-bottom: 0;\n    vertical-align: middle;\n  }\n\n  .form-inline .radio,\n  .form-inline .checkbox {\n    display: inline-block;\n    margin-top: 0;\n    margin-bottom: 0;\n    vertical-align: middle;\n  }\n\n  .form-inline .radio label,\n  .form-inline .checkbox label {\n    padding-left: 0;\n  }\n\n  .form-inline .radio input[type=\"radio\"],\n  .form-inline .checkbox input[type=\"checkbox\"] {\n    position: relative;\n    margin-left: 0;\n  }\n\n  .form-inline .has-feedback .form-control-feedback {\n    top: 0;\n  }\n}\n\n.form-horizontal .radio,\n.form-horizontal .checkbox,\n.form-horizontal .radio-inline,\n.form-horizontal .checkbox-inline {\n  margin-top: 0;\n  margin-bottom: 0;\n  padding-top: 7px;\n}\n\n.form-horizontal .radio,\n.form-horizontal .checkbox {\n  min-height: 27px;\n}\n\n.form-horizontal .form-group {\n  margin-left: -15px;\n  margin-right: -15px;\n}\n\n.form-horizontal .form-group:before,\n.form-horizontal .form-group:after {\n  content: \" \";\n  display: table;\n}\n\n.form-horizontal .form-group:after {\n  clear: both;\n}\n\n@media (min-width: 768px) {\n  .form-horizontal .control-label {\n    text-align: right;\n    margin-bottom: 0;\n    padding-top: 7px;\n  }\n}\n\n.form-horizontal .has-feedback .form-control-feedback {\n  right: 15px;\n}\n\n@media (min-width: 768px) {\n  .form-horizontal .form-group-lg .control-label {\n    padding-top: 11px;\n    font-size: 18px;\n  }\n}\n\n@media (min-width: 768px) {\n  .form-horizontal .form-group-sm .control-label {\n    padding-top: 6px;\n    font-size: 12px;\n  }\n}\n\n.btn {\n  display: inline-block;\n  margin-bottom: 0;\n  font-weight: normal;\n  text-align: center;\n  vertical-align: middle;\n  touch-action: manipulation;\n  cursor: pointer;\n  background-image: none;\n  border: 1px solid transparent;\n  white-space: nowrap;\n  padding: 6px 12px;\n  font-size: 14px;\n  line-height: 1.42857;\n  border-radius: 4px;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.btn:focus,\n.btn.focus,\n.btn:active:focus,\n.btn:active.focus,\n.btn.active:focus,\n.btn.active.focus {\n  outline: 5px auto -webkit-focus-ring-color;\n  outline-offset: -2px;\n}\n\n.btn:hover,\n.btn:focus,\n.btn.focus {\n  color: #333;\n  text-decoration: none;\n}\n\n.btn:active,\n.btn.active {\n  outline: 0;\n  background-image: none;\n  -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n}\n\n.btn.disabled,\n.btn[disabled],\nfieldset[disabled] .btn {\n  cursor: not-allowed;\n  opacity: 0.65;\n  filter: alpha(opacity=65);\n  -webkit-box-shadow: none;\n  box-shadow: none;\n}\n\na.btn.disabled,\nfieldset[disabled] a.btn {\n  pointer-events: none;\n}\n\n.btn-default {\n  color: #333;\n  background-color: #fff;\n  border-color: #ccc;\n}\n\n.btn-default:focus,\n.btn-default.focus {\n  color: #333;\n  background-color: #e6e6e6;\n  border-color: #8c8c8c;\n}\n\n.btn-default:hover {\n  color: #333;\n  background-color: #e6e6e6;\n  border-color: #adadad;\n}\n\n.btn-default:active,\n.btn-default.active,\n.open > .btn-default.dropdown-toggle {\n  color: #333;\n  background-color: #e6e6e6;\n  border-color: #adadad;\n}\n\n.btn-default:active:hover,\n.btn-default:active:focus,\n.btn-default:active.focus,\n.btn-default.active:hover,\n.btn-default.active:focus,\n.btn-default.active.focus,\n.open > .btn-default.dropdown-toggle:hover,\n.open > .btn-default.dropdown-toggle:focus,\n.open > .btn-default.dropdown-toggle.focus {\n  color: #333;\n  background-color: #d4d4d4;\n  border-color: #8c8c8c;\n}\n\n.btn-default:active,\n.btn-default.active,\n.open > .btn-default.dropdown-toggle {\n  background-image: none;\n}\n\n.btn-default.disabled:hover,\n.btn-default.disabled:focus,\n.btn-default.disabled.focus,\n.btn-default[disabled]:hover,\n.btn-default[disabled]:focus,\n.btn-default[disabled].focus,\nfieldset[disabled] .btn-default:hover,\nfieldset[disabled] .btn-default:focus,\nfieldset[disabled] .btn-default.focus {\n  background-color: #fff;\n  border-color: #ccc;\n}\n\n.btn-default .badge {\n  color: #fff;\n  background-color: #333;\n}\n\n.btn-primary {\n  color: #fff;\n  background-color: #337ab7;\n  border-color: #2e6da4;\n}\n\n.btn-primary:focus,\n.btn-primary.focus {\n  color: #fff;\n  background-color: #286090;\n  border-color: #122b40;\n}\n\n.btn-primary:hover {\n  color: #fff;\n  background-color: #286090;\n  border-color: #204d74;\n}\n\n.btn-primary:active,\n.btn-primary.active,\n.open > .btn-primary.dropdown-toggle {\n  color: #fff;\n  background-color: #286090;\n  border-color: #204d74;\n}\n\n.btn-primary:active:hover,\n.btn-primary:active:focus,\n.btn-primary:active.focus,\n.btn-primary.active:hover,\n.btn-primary.active:focus,\n.btn-primary.active.focus,\n.open > .btn-primary.dropdown-toggle:hover,\n.open > .btn-primary.dropdown-toggle:focus,\n.open > .btn-primary.dropdown-toggle.focus {\n  color: #fff;\n  background-color: #204d74;\n  border-color: #122b40;\n}\n\n.btn-primary:active,\n.btn-primary.active,\n.open > .btn-primary.dropdown-toggle {\n  background-image: none;\n}\n\n.btn-primary.disabled:hover,\n.btn-primary.disabled:focus,\n.btn-primary.disabled.focus,\n.btn-primary[disabled]:hover,\n.btn-primary[disabled]:focus,\n.btn-primary[disabled].focus,\nfieldset[disabled] .btn-primary:hover,\nfieldset[disabled] .btn-primary:focus,\nfieldset[disabled] .btn-primary.focus {\n  background-color: #337ab7;\n  border-color: #2e6da4;\n}\n\n.btn-primary .badge {\n  color: #337ab7;\n  background-color: #fff;\n}\n\n.btn-success {\n  color: #fff;\n  background-color: #5cb85c;\n  border-color: #4cae4c;\n}\n\n.btn-success:focus,\n.btn-success.focus {\n  color: #fff;\n  background-color: #449d44;\n  border-color: #255625;\n}\n\n.btn-success:hover {\n  color: #fff;\n  background-color: #449d44;\n  border-color: #398439;\n}\n\n.btn-success:active,\n.btn-success.active,\n.open > .btn-success.dropdown-toggle {\n  color: #fff;\n  background-color: #449d44;\n  border-color: #398439;\n}\n\n.btn-success:active:hover,\n.btn-success:active:focus,\n.btn-success:active.focus,\n.btn-success.active:hover,\n.btn-success.active:focus,\n.btn-success.active.focus,\n.open > .btn-success.dropdown-toggle:hover,\n.open > .btn-success.dropdown-toggle:focus,\n.open > .btn-success.dropdown-toggle.focus {\n  color: #fff;\n  background-color: #398439;\n  border-color: #255625;\n}\n\n.btn-success:active,\n.btn-success.active,\n.open > .btn-success.dropdown-toggle {\n  background-image: none;\n}\n\n.btn-success.disabled:hover,\n.btn-success.disabled:focus,\n.btn-success.disabled.focus,\n.btn-success[disabled]:hover,\n.btn-success[disabled]:focus,\n.btn-success[disabled].focus,\nfieldset[disabled] .btn-success:hover,\nfieldset[disabled] .btn-success:focus,\nfieldset[disabled] .btn-success.focus {\n  background-color: #5cb85c;\n  border-color: #4cae4c;\n}\n\n.btn-success .badge {\n  color: #5cb85c;\n  background-color: #fff;\n}\n\n.btn-info {\n  color: #fff;\n  background-color: #5bc0de;\n  border-color: #46b8da;\n}\n\n.btn-info:focus,\n.btn-info.focus {\n  color: #fff;\n  background-color: #31b0d5;\n  border-color: #1b6d85;\n}\n\n.btn-info:hover {\n  color: #fff;\n  background-color: #31b0d5;\n  border-color: #269abc;\n}\n\n.btn-info:active,\n.btn-info.active,\n.open > .btn-info.dropdown-toggle {\n  color: #fff;\n  background-color: #31b0d5;\n  border-color: #269abc;\n}\n\n.btn-info:active:hover,\n.btn-info:active:focus,\n.btn-info:active.focus,\n.btn-info.active:hover,\n.btn-info.active:focus,\n.btn-info.active.focus,\n.open > .btn-info.dropdown-toggle:hover,\n.open > .btn-info.dropdown-toggle:focus,\n.open > .btn-info.dropdown-toggle.focus {\n  color: #fff;\n  background-color: #269abc;\n  border-color: #1b6d85;\n}\n\n.btn-info:active,\n.btn-info.active,\n.open > .btn-info.dropdown-toggle {\n  background-image: none;\n}\n\n.btn-info.disabled:hover,\n.btn-info.disabled:focus,\n.btn-info.disabled.focus,\n.btn-info[disabled]:hover,\n.btn-info[disabled]:focus,\n.btn-info[disabled].focus,\nfieldset[disabled] .btn-info:hover,\nfieldset[disabled] .btn-info:focus,\nfieldset[disabled] .btn-info.focus {\n  background-color: #5bc0de;\n  border-color: #46b8da;\n}\n\n.btn-info .badge {\n  color: #5bc0de;\n  background-color: #fff;\n}\n\n.btn-warning {\n  color: #fff;\n  background-color: #f0ad4e;\n  border-color: #eea236;\n}\n\n.btn-warning:focus,\n.btn-warning.focus {\n  color: #fff;\n  background-color: #ec971f;\n  border-color: #985f0d;\n}\n\n.btn-warning:hover {\n  color: #fff;\n  background-color: #ec971f;\n  border-color: #d58512;\n}\n\n.btn-warning:active,\n.btn-warning.active,\n.open > .btn-warning.dropdown-toggle {\n  color: #fff;\n  background-color: #ec971f;\n  border-color: #d58512;\n}\n\n.btn-warning:active:hover,\n.btn-warning:active:focus,\n.btn-warning:active.focus,\n.btn-warning.active:hover,\n.btn-warning.active:focus,\n.btn-warning.active.focus,\n.open > .btn-warning.dropdown-toggle:hover,\n.open > .btn-warning.dropdown-toggle:focus,\n.open > .btn-warning.dropdown-toggle.focus {\n  color: #fff;\n  background-color: #d58512;\n  border-color: #985f0d;\n}\n\n.btn-warning:active,\n.btn-warning.active,\n.open > .btn-warning.dropdown-toggle {\n  background-image: none;\n}\n\n.btn-warning.disabled:hover,\n.btn-warning.disabled:focus,\n.btn-warning.disabled.focus,\n.btn-warning[disabled]:hover,\n.btn-warning[disabled]:focus,\n.btn-warning[disabled].focus,\nfieldset[disabled] .btn-warning:hover,\nfieldset[disabled] .btn-warning:focus,\nfieldset[disabled] .btn-warning.focus {\n  background-color: #f0ad4e;\n  border-color: #eea236;\n}\n\n.btn-warning .badge {\n  color: #f0ad4e;\n  background-color: #fff;\n}\n\n.btn-danger {\n  color: #fff;\n  background-color: #d9534f;\n  border-color: #d43f3a;\n}\n\n.btn-danger:focus,\n.btn-danger.focus {\n  color: #fff;\n  background-color: #c9302c;\n  border-color: #761c19;\n}\n\n.btn-danger:hover {\n  color: #fff;\n  background-color: #c9302c;\n  border-color: #ac2925;\n}\n\n.btn-danger:active,\n.btn-danger.active,\n.open > .btn-danger.dropdown-toggle {\n  color: #fff;\n  background-color: #c9302c;\n  border-color: #ac2925;\n}\n\n.btn-danger:active:hover,\n.btn-danger:active:focus,\n.btn-danger:active.focus,\n.btn-danger.active:hover,\n.btn-danger.active:focus,\n.btn-danger.active.focus,\n.open > .btn-danger.dropdown-toggle:hover,\n.open > .btn-danger.dropdown-toggle:focus,\n.open > .btn-danger.dropdown-toggle.focus {\n  color: #fff;\n  background-color: #ac2925;\n  border-color: #761c19;\n}\n\n.btn-danger:active,\n.btn-danger.active,\n.open > .btn-danger.dropdown-toggle {\n  background-image: none;\n}\n\n.btn-danger.disabled:hover,\n.btn-danger.disabled:focus,\n.btn-danger.disabled.focus,\n.btn-danger[disabled]:hover,\n.btn-danger[disabled]:focus,\n.btn-danger[disabled].focus,\nfieldset[disabled] .btn-danger:hover,\nfieldset[disabled] .btn-danger:focus,\nfieldset[disabled] .btn-danger.focus {\n  background-color: #d9534f;\n  border-color: #d43f3a;\n}\n\n.btn-danger .badge {\n  color: #d9534f;\n  background-color: #fff;\n}\n\n.btn-link {\n  color: #337ab7;\n  font-weight: normal;\n  border-radius: 0;\n}\n\n.btn-link,\n.btn-link:active,\n.btn-link.active,\n.btn-link[disabled],\nfieldset[disabled] .btn-link {\n  background-color: transparent;\n  -webkit-box-shadow: none;\n  box-shadow: none;\n}\n\n.btn-link,\n.btn-link:hover,\n.btn-link:focus,\n.btn-link:active {\n  border-color: transparent;\n}\n\n.btn-link:hover,\n.btn-link:focus {\n  color: #23527c;\n  text-decoration: underline;\n  background-color: transparent;\n}\n\n.btn-link[disabled]:hover,\n.btn-link[disabled]:focus,\nfieldset[disabled] .btn-link:hover,\nfieldset[disabled] .btn-link:focus {\n  color: #777777;\n  text-decoration: none;\n}\n\n.btn-lg,\n.btn-group-lg > .btn {\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.33333;\n  border-radius: 6px;\n}\n\n.btn-sm,\n.btn-group-sm > .btn {\n  padding: 5px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 3px;\n}\n\n.btn-xs,\n.btn-group-xs > .btn {\n  padding: 1px 5px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 3px;\n}\n\n.btn-block {\n  display: block;\n  width: 100%;\n}\n\n.btn-block + .btn-block {\n  margin-top: 5px;\n}\n\ninput[type=\"submit\"].btn-block,\ninput[type=\"reset\"].btn-block,\ninput[type=\"button\"].btn-block {\n  width: 100%;\n}\n\n.fade {\n  opacity: 0;\n  -webkit-transition: opacity 0.15s linear;\n  -o-transition: opacity 0.15s linear;\n  transition: opacity 0.15s linear;\n}\n\n.fade.in {\n  opacity: 1;\n}\n\n.collapse {\n  display: none;\n}\n\n.collapse.in {\n  display: block;\n}\n\ntr.collapse.in {\n  display: table-row;\n}\n\ntbody.collapse.in {\n  display: table-row-group;\n}\n\n.collapsing {\n  position: relative;\n  height: 0;\n  overflow: hidden;\n  -webkit-transition-property: height, visibility;\n  transition-property: height, visibility;\n  -webkit-transition-duration: 0.35s;\n  transition-duration: 0.35s;\n  -webkit-transition-timing-function: ease;\n  transition-timing-function: ease;\n}\n\n.caret {\n  display: inline-block;\n  width: 0;\n  height: 0;\n  margin-left: 2px;\n  vertical-align: middle;\n  border-top: 4px dashed;\n  border-top: 4px solid \\9;\n  border-right: 4px solid transparent;\n  border-left: 4px solid transparent;\n}\n\n.dropup,\n.dropdown {\n  position: relative;\n}\n\n.dropdown-toggle:focus {\n  outline: 0;\n}\n\n.dropdown-menu {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  z-index: 1000;\n  display: none;\n  float: left;\n  min-width: 160px;\n  padding: 5px 0;\n  margin: 2px 0 0;\n  list-style: none;\n  font-size: 14px;\n  text-align: left;\n  background-color: #fff;\n  border: 1px solid #ccc;\n  border: 1px solid rgba(0, 0, 0, 0.15);\n  border-radius: 4px;\n  -webkit-box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);\n  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);\n  background-clip: padding-box;\n}\n\n.dropdown-menu.pull-right {\n  right: 0;\n  left: auto;\n}\n\n.dropdown-menu .divider {\n  height: 1px;\n  margin: 9px 0;\n  overflow: hidden;\n  background-color: #e5e5e5;\n}\n\n.dropdown-menu > li > a {\n  display: block;\n  padding: 3px 20px;\n  clear: both;\n  font-weight: normal;\n  line-height: 1.42857;\n  color: #333333;\n  white-space: nowrap;\n}\n\n.dropdown-menu > li > a:hover,\n.dropdown-menu > li > a:focus {\n  text-decoration: none;\n  color: #262626;\n  background-color: #f5f5f5;\n}\n\n.dropdown-menu > .active > a,\n.dropdown-menu > .active > a:hover,\n.dropdown-menu > .active > a:focus {\n  color: #fff;\n  text-decoration: none;\n  outline: 0;\n  background-color: #337ab7;\n}\n\n.dropdown-menu > .disabled > a,\n.dropdown-menu > .disabled > a:hover,\n.dropdown-menu > .disabled > a:focus {\n  color: #777777;\n}\n\n.dropdown-menu > .disabled > a:hover,\n.dropdown-menu > .disabled > a:focus {\n  text-decoration: none;\n  background-color: transparent;\n  background-image: none;\n  filter: progid:DXImageTransform.Microsoft.gradient(enabled = false);\n  cursor: not-allowed;\n}\n\n.open > .dropdown-menu {\n  display: block;\n}\n\n.open > a {\n  outline: 0;\n}\n\n.dropdown-menu-right {\n  left: auto;\n  right: 0;\n}\n\n.dropdown-menu-left {\n  left: 0;\n  right: auto;\n}\n\n.dropdown-header {\n  display: block;\n  padding: 3px 20px;\n  font-size: 12px;\n  line-height: 1.42857;\n  color: #777777;\n  white-space: nowrap;\n}\n\n.dropdown-backdrop {\n  position: fixed;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  top: 0;\n  z-index: 990;\n}\n\n.pull-right > .dropdown-menu {\n  right: 0;\n  left: auto;\n}\n\n.dropup .caret,\n.navbar-fixed-bottom .dropdown .caret {\n  border-top: 0;\n  border-bottom: 4px dashed;\n  border-bottom: 4px solid \\9;\n  content: \"\";\n}\n\n.dropup .dropdown-menu,\n.navbar-fixed-bottom .dropdown .dropdown-menu {\n  top: auto;\n  bottom: 100%;\n  margin-bottom: 2px;\n}\n\n@media (min-width: 768px) {\n  .navbar-right .dropdown-menu {\n    right: 0;\n    left: auto;\n  }\n\n  .navbar-right .dropdown-menu-left {\n    left: 0;\n    right: auto;\n  }\n}\n\n.btn-group,\n.btn-group-vertical {\n  position: relative;\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.btn-group > .btn,\n.btn-group-vertical > .btn {\n  position: relative;\n  float: left;\n}\n\n.btn-group > .btn:hover,\n.btn-group > .btn:focus,\n.btn-group > .btn:active,\n.btn-group > .btn.active,\n.btn-group-vertical > .btn:hover,\n.btn-group-vertical > .btn:focus,\n.btn-group-vertical > .btn:active,\n.btn-group-vertical > .btn.active {\n  z-index: 2;\n}\n\n.btn-group .btn + .btn,\n.btn-group .btn + .btn-group,\n.btn-group .btn-group + .btn,\n.btn-group .btn-group + .btn-group {\n  margin-left: -1px;\n}\n\n.btn-toolbar {\n  margin-left: -5px;\n}\n\n.btn-toolbar:before,\n.btn-toolbar:after {\n  content: \" \";\n  display: table;\n}\n\n.btn-toolbar:after {\n  clear: both;\n}\n\n.btn-toolbar .btn,\n.btn-toolbar .btn-group,\n.btn-toolbar .input-group {\n  float: left;\n}\n\n.btn-toolbar > .btn,\n.btn-toolbar > .btn-group,\n.btn-toolbar > .input-group {\n  margin-left: 5px;\n}\n\n.btn-group > .btn:not(:first-child):not(:last-child):not(.dropdown-toggle) {\n  border-radius: 0;\n}\n\n.btn-group > .btn:first-child {\n  margin-left: 0;\n}\n\n.btn-group > .btn:first-child:not(:last-child):not(.dropdown-toggle) {\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0;\n}\n\n.btn-group > .btn:last-child:not(:first-child),\n.btn-group > .dropdown-toggle:not(:first-child) {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0;\n}\n\n.btn-group > .btn-group {\n  float: left;\n}\n\n.btn-group > .btn-group:not(:first-child):not(:last-child) > .btn {\n  border-radius: 0;\n}\n\n.btn-group > .btn-group:first-child:not(:last-child) > .btn:last-child,\n.btn-group > .btn-group:first-child:not(:last-child) > .dropdown-toggle {\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0;\n}\n\n.btn-group > .btn-group:last-child:not(:first-child) > .btn:first-child {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0;\n}\n\n.btn-group .dropdown-toggle:active,\n.btn-group.open .dropdown-toggle {\n  outline: 0;\n}\n\n.btn-group > .btn + .dropdown-toggle {\n  padding-left: 8px;\n  padding-right: 8px;\n}\n\n.btn-group > .btn-lg + .dropdown-toggle,\n.btn-group-lg.btn-group > .btn + .dropdown-toggle {\n  padding-left: 12px;\n  padding-right: 12px;\n}\n\n.btn-group.open .dropdown-toggle {\n  -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n}\n\n.btn-group.open .dropdown-toggle.btn-link {\n  -webkit-box-shadow: none;\n  box-shadow: none;\n}\n\n.btn .caret {\n  margin-left: 0;\n}\n\n.btn-lg .caret,\n.btn-group-lg > .btn .caret {\n  border-width: 5px 5px 0;\n  border-bottom-width: 0;\n}\n\n.dropup .btn-lg .caret,\n.dropup .btn-group-lg > .btn .caret {\n  border-width: 0 5px 5px;\n}\n\n.btn-group-vertical > .btn,\n.btn-group-vertical > .btn-group,\n.btn-group-vertical > .btn-group > .btn {\n  display: block;\n  float: none;\n  width: 100%;\n  max-width: 100%;\n}\n\n.btn-group-vertical > .btn-group:before,\n.btn-group-vertical > .btn-group:after {\n  content: \" \";\n  display: table;\n}\n\n.btn-group-vertical > .btn-group:after {\n  clear: both;\n}\n\n.btn-group-vertical > .btn-group > .btn {\n  float: none;\n}\n\n.btn-group-vertical > .btn + .btn,\n.btn-group-vertical > .btn + .btn-group,\n.btn-group-vertical > .btn-group + .btn,\n.btn-group-vertical > .btn-group + .btn-group {\n  margin-top: -1px;\n  margin-left: 0;\n}\n\n.btn-group-vertical > .btn:not(:first-child):not(:last-child) {\n  border-radius: 0;\n}\n\n.btn-group-vertical > .btn:first-child:not(:last-child) {\n  border-top-right-radius: 4px;\n  border-top-left-radius: 4px;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.btn-group-vertical > .btn:last-child:not(:first-child) {\n  border-top-right-radius: 0;\n  border-top-left-radius: 0;\n  border-bottom-right-radius: 4px;\n  border-bottom-left-radius: 4px;\n}\n\n.btn-group-vertical > .btn-group:not(:first-child):not(:last-child) > .btn {\n  border-radius: 0;\n}\n\n.btn-group-vertical > .btn-group:first-child:not(:last-child) > .btn:last-child,\n.btn-group-vertical > .btn-group:first-child:not(:last-child) > .dropdown-toggle {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.btn-group-vertical > .btn-group:last-child:not(:first-child) > .btn:first-child {\n  border-top-right-radius: 0;\n  border-top-left-radius: 0;\n}\n\n.btn-group-justified {\n  display: table;\n  width: 100%;\n  table-layout: fixed;\n  border-collapse: separate;\n}\n\n.btn-group-justified > .btn,\n.btn-group-justified > .btn-group {\n  float: none;\n  display: table-cell;\n  width: 1%;\n}\n\n.btn-group-justified > .btn-group .btn {\n  width: 100%;\n}\n\n.btn-group-justified > .btn-group .dropdown-menu {\n  left: auto;\n}\n\n[data-toggle=\"buttons\"] > .btn input[type=\"radio\"],\n[data-toggle=\"buttons\"] > .btn input[type=\"checkbox\"],\n[data-toggle=\"buttons\"] > .btn-group > .btn input[type=\"radio\"],\n[data-toggle=\"buttons\"] > .btn-group > .btn input[type=\"checkbox\"] {\n  position: absolute;\n  clip: rect(0, 0, 0, 0);\n  pointer-events: none;\n}\n\n.input-group {\n  position: relative;\n  display: table;\n  border-collapse: separate;\n}\n\n.input-group[class*=\"col-\"] {\n  float: none;\n  padding-left: 0;\n  padding-right: 0;\n}\n\n.input-group .form-control {\n  position: relative;\n  z-index: 2;\n  float: left;\n  width: 100%;\n  margin-bottom: 0;\n}\n\n.input-group .form-control:focus {\n  z-index: 3;\n}\n\n.input-group-addon,\n.input-group-btn,\n.input-group .form-control {\n  display: table-cell;\n}\n\n.input-group-addon:not(:first-child):not(:last-child),\n.input-group-btn:not(:first-child):not(:last-child),\n.input-group .form-control:not(:first-child):not(:last-child) {\n  border-radius: 0;\n}\n\n.input-group-addon,\n.input-group-btn {\n  width: 1%;\n  white-space: nowrap;\n  vertical-align: middle;\n}\n\n.input-group-addon {\n  padding: 6px 12px;\n  font-size: 14px;\n  font-weight: normal;\n  line-height: 1;\n  color: #555555;\n  text-align: center;\n  background-color: #eeeeee;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n}\n\n.input-group-addon.input-sm,\n.input-group-sm > .input-group-addon,\n.input-group-sm > .input-group-btn > .input-group-addon.btn {\n  padding: 5px 10px;\n  font-size: 12px;\n  border-radius: 3px;\n}\n\n.input-group-addon.input-lg,\n.input-group-lg > .input-group-addon,\n.input-group-lg > .input-group-btn > .input-group-addon.btn {\n  padding: 10px 16px;\n  font-size: 18px;\n  border-radius: 6px;\n}\n\n.input-group-addon input[type=\"radio\"],\n.input-group-addon input[type=\"checkbox\"] {\n  margin-top: 0;\n}\n\n.input-group .form-control:first-child,\n.input-group-addon:first-child,\n.input-group-btn:first-child > .btn,\n.input-group-btn:first-child > .btn-group > .btn,\n.input-group-btn:first-child > .dropdown-toggle,\n.input-group-btn:last-child > .btn:not(:last-child):not(.dropdown-toggle),\n.input-group-btn:last-child > .btn-group:not(:last-child) > .btn {\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0;\n}\n\n.input-group-addon:first-child {\n  border-right: 0;\n}\n\n.input-group .form-control:last-child,\n.input-group-addon:last-child,\n.input-group-btn:last-child > .btn,\n.input-group-btn:last-child > .btn-group > .btn,\n.input-group-btn:last-child > .dropdown-toggle,\n.input-group-btn:first-child > .btn:not(:first-child),\n.input-group-btn:first-child > .btn-group:not(:first-child) > .btn {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0;\n}\n\n.input-group-addon:last-child {\n  border-left: 0;\n}\n\n.input-group-btn {\n  position: relative;\n  font-size: 0;\n  white-space: nowrap;\n}\n\n.input-group-btn > .btn {\n  position: relative;\n}\n\n.input-group-btn > .btn + .btn {\n  margin-left: -1px;\n}\n\n.input-group-btn > .btn:hover,\n.input-group-btn > .btn:focus,\n.input-group-btn > .btn:active {\n  z-index: 2;\n}\n\n.input-group-btn:first-child > .btn,\n.input-group-btn:first-child > .btn-group {\n  margin-right: -1px;\n}\n\n.input-group-btn:last-child > .btn,\n.input-group-btn:last-child > .btn-group {\n  z-index: 2;\n  margin-left: -1px;\n}\n\n.nav {\n  margin-bottom: 0;\n  padding-left: 0;\n  list-style: none;\n}\n\n.nav:before,\n.nav:after {\n  content: \" \";\n  display: table;\n}\n\n.nav:after {\n  clear: both;\n}\n\n.nav > li {\n  position: relative;\n  display: block;\n}\n\n.nav > li > a {\n  position: relative;\n  display: block;\n  padding: 10px 15px;\n}\n\n.nav > li > a:hover,\n.nav > li > a:focus {\n  text-decoration: none;\n  background-color: #eeeeee;\n}\n\n.nav > li.disabled > a {\n  color: #777777;\n}\n\n.nav > li.disabled > a:hover,\n.nav > li.disabled > a:focus {\n  color: #777777;\n  text-decoration: none;\n  background-color: transparent;\n  cursor: not-allowed;\n}\n\n.nav .open > a,\n.nav .open > a:hover,\n.nav .open > a:focus {\n  background-color: #eeeeee;\n  border-color: #337ab7;\n}\n\n.nav .nav-divider {\n  height: 1px;\n  margin: 9px 0;\n  overflow: hidden;\n  background-color: #e5e5e5;\n}\n\n.nav > li > a > img {\n  max-width: none;\n}\n\n.nav-tabs {\n  border-bottom: 1px solid #ddd;\n}\n\n.nav-tabs > li {\n  float: left;\n  margin-bottom: -1px;\n}\n\n.nav-tabs > li > a {\n  margin-right: 2px;\n  line-height: 1.42857;\n  border: 1px solid transparent;\n  border-radius: 4px 4px 0 0;\n}\n\n.nav-tabs > li > a:hover {\n  border-color: #eeeeee #eeeeee #ddd;\n}\n\n.nav-tabs > li.active > a,\n.nav-tabs > li.active > a:hover,\n.nav-tabs > li.active > a:focus {\n  color: #555555;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-bottom-color: transparent;\n  cursor: default;\n}\n\n.nav-pills > li {\n  float: left;\n}\n\n.nav-pills > li > a {\n  border-radius: 4px;\n}\n\n.nav-pills > li + li {\n  margin-left: 2px;\n}\n\n.nav-pills > li.active > a,\n.nav-pills > li.active > a:hover,\n.nav-pills > li.active > a:focus {\n  color: #fff;\n  background-color: #337ab7;\n}\n\n.nav-stacked > li {\n  float: none;\n}\n\n.nav-stacked > li + li {\n  margin-top: 2px;\n  margin-left: 0;\n}\n\n.nav-justified,\n.nav-tabs.nav-justified {\n  width: 100%;\n}\n\n.nav-justified > li,\n.nav-tabs.nav-justified > li {\n  float: none;\n}\n\n.nav-justified > li > a,\n.nav-tabs.nav-justified > li > a {\n  text-align: center;\n  margin-bottom: 5px;\n}\n\n.nav-justified > .dropdown .dropdown-menu {\n  top: auto;\n  left: auto;\n}\n\n@media (min-width: 768px) {\n  .nav-justified > li,\n  .nav-tabs.nav-justified > li {\n    display: table-cell;\n    width: 1%;\n  }\n\n  .nav-justified > li > a,\n  .nav-tabs.nav-justified > li > a {\n    margin-bottom: 0;\n  }\n}\n\n.nav-tabs-justified,\n.nav-tabs.nav-justified {\n  border-bottom: 0;\n}\n\n.nav-tabs-justified > li > a,\n.nav-tabs.nav-justified > li > a {\n  margin-right: 0;\n  border-radius: 4px;\n}\n\n.nav-tabs-justified > .active > a,\n.nav-tabs.nav-justified > .active > a,\n.nav-tabs-justified > .active > a:hover,\n.nav-tabs.nav-justified > .active > a:hover,\n.nav-tabs-justified > .active > a:focus,\n.nav-tabs.nav-justified > .active > a:focus {\n  border: 1px solid #ddd;\n}\n\n@media (min-width: 768px) {\n  .nav-tabs-justified > li > a,\n  .nav-tabs.nav-justified > li > a {\n    border-bottom: 1px solid #ddd;\n    border-radius: 4px 4px 0 0;\n  }\n\n  .nav-tabs-justified > .active > a,\n  .nav-tabs.nav-justified > .active > a,\n  .nav-tabs-justified > .active > a:hover,\n  .nav-tabs.nav-justified > .active > a:hover,\n  .nav-tabs-justified > .active > a:focus,\n  .nav-tabs.nav-justified > .active > a:focus {\n    border-bottom-color: #fff;\n  }\n}\n\n.tab-content > .tab-pane {\n  display: none;\n}\n\n.tab-content > .active {\n  display: block;\n}\n\n.nav-tabs .dropdown-menu {\n  margin-top: -1px;\n  border-top-right-radius: 0;\n  border-top-left-radius: 0;\n}\n\n.navbar {\n  position: relative;\n  min-height: 50px;\n  margin-bottom: 20px;\n  border: 1px solid transparent;\n}\n\n.navbar:before,\n.navbar:after {\n  content: \" \";\n  display: table;\n}\n\n.navbar:after {\n  clear: both;\n}\n\n@media (min-width: 768px) {\n  .navbar {\n    border-radius: 4px;\n  }\n}\n\n.navbar-header:before,\n.navbar-header:after {\n  content: \" \";\n  display: table;\n}\n\n.navbar-header:after {\n  clear: both;\n}\n\n@media (min-width: 768px) {\n  .navbar-header {\n    float: left;\n  }\n}\n\n.navbar-collapse {\n  overflow-x: visible;\n  padding-right: 15px;\n  padding-left: 15px;\n  border-top: 1px solid transparent;\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1);\n  -webkit-overflow-scrolling: touch;\n}\n\n.navbar-collapse:before,\n.navbar-collapse:after {\n  content: \" \";\n  display: table;\n}\n\n.navbar-collapse:after {\n  clear: both;\n}\n\n.navbar-collapse.in {\n  overflow-y: auto;\n}\n\n@media (min-width: 768px) {\n  .navbar-collapse {\n    width: auto;\n    border-top: 0;\n    box-shadow: none;\n  }\n\n  .navbar-collapse.collapse {\n    display: block !important;\n    height: auto !important;\n    padding-bottom: 0;\n    overflow: visible !important;\n  }\n\n  .navbar-collapse.in {\n    overflow-y: visible;\n  }\n\n  .navbar-fixed-top .navbar-collapse,\n  .navbar-static-top .navbar-collapse,\n  .navbar-fixed-bottom .navbar-collapse {\n    padding-left: 0;\n    padding-right: 0;\n  }\n}\n\n.navbar-fixed-top .navbar-collapse,\n.navbar-fixed-bottom .navbar-collapse {\n  max-height: 340px;\n}\n\n@media (max-device-width: 480px) and (orientation: landscape) {\n  .navbar-fixed-top .navbar-collapse,\n  .navbar-fixed-bottom .navbar-collapse {\n    max-height: 200px;\n  }\n}\n\n.container > .navbar-header,\n.container > .navbar-collapse,\n.container-fluid > .navbar-header,\n.container-fluid > .navbar-collapse {\n  margin-right: -15px;\n  margin-left: -15px;\n}\n\n@media (min-width: 768px) {\n  .container > .navbar-header,\n  .container > .navbar-collapse,\n  .container-fluid > .navbar-header,\n  .container-fluid > .navbar-collapse {\n    margin-right: 0;\n    margin-left: 0;\n  }\n}\n\n.navbar-static-top {\n  z-index: 1000;\n  border-width: 0 0 1px;\n}\n\n@media (min-width: 768px) {\n  .navbar-static-top {\n    border-radius: 0;\n  }\n}\n\n.navbar-fixed-top,\n.navbar-fixed-bottom {\n  position: fixed;\n  right: 0;\n  left: 0;\n  z-index: 1030;\n}\n\n@media (min-width: 768px) {\n  .navbar-fixed-top,\n  .navbar-fixed-bottom {\n    border-radius: 0;\n  }\n}\n\n.navbar-fixed-top {\n  top: 0;\n  border-width: 0 0 1px;\n}\n\n.navbar-fixed-bottom {\n  bottom: 0;\n  margin-bottom: 0;\n  border-width: 1px 0 0;\n}\n\n.navbar-brand {\n  float: left;\n  padding: 15px 15px;\n  font-size: 18px;\n  line-height: 20px;\n  height: 50px;\n}\n\n.navbar-brand:hover,\n.navbar-brand:focus {\n  text-decoration: none;\n}\n\n.navbar-brand > img {\n  display: block;\n}\n\n@media (min-width: 768px) {\n  .navbar > .container .navbar-brand,\n  .navbar > .container-fluid .navbar-brand {\n    margin-left: -15px;\n  }\n}\n\n.navbar-toggle {\n  position: relative;\n  float: right;\n  margin-right: 15px;\n  padding: 9px 10px;\n  margin-top: 8px;\n  margin-bottom: 8px;\n  background-color: transparent;\n  background-image: none;\n  border: 1px solid transparent;\n  border-radius: 4px;\n}\n\n.navbar-toggle:focus {\n  outline: 0;\n}\n\n.navbar-toggle .icon-bar {\n  display: block;\n  width: 22px;\n  height: 2px;\n  border-radius: 1px;\n}\n\n.navbar-toggle .icon-bar + .icon-bar {\n  margin-top: 4px;\n}\n\n@media (min-width: 768px) {\n  .navbar-toggle {\n    display: none;\n  }\n}\n\n.navbar-nav {\n  margin: 7.5px -15px;\n}\n\n.navbar-nav > li > a {\n  padding-top: 10px;\n  padding-bottom: 10px;\n  line-height: 20px;\n}\n\n@media (max-width: 767px) {\n  .navbar-nav .open .dropdown-menu {\n    position: static;\n    float: none;\n    width: auto;\n    margin-top: 0;\n    background-color: transparent;\n    border: 0;\n    box-shadow: none;\n  }\n\n  .navbar-nav .open .dropdown-menu > li > a,\n  .navbar-nav .open .dropdown-menu .dropdown-header {\n    padding: 5px 15px 5px 25px;\n  }\n\n  .navbar-nav .open .dropdown-menu > li > a {\n    line-height: 20px;\n  }\n\n  .navbar-nav .open .dropdown-menu > li > a:hover,\n  .navbar-nav .open .dropdown-menu > li > a:focus {\n    background-image: none;\n  }\n}\n\n@media (min-width: 768px) {\n  .navbar-nav {\n    float: left;\n    margin: 0;\n  }\n\n  .navbar-nav > li {\n    float: left;\n  }\n\n  .navbar-nav > li > a {\n    padding-top: 15px;\n    padding-bottom: 15px;\n  }\n}\n\n.navbar-form {\n  margin-left: -15px;\n  margin-right: -15px;\n  padding: 10px 15px;\n  border-top: 1px solid transparent;\n  border-bottom: 1px solid transparent;\n  -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 1px 0 rgba(255, 255, 255, 0.1);\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 1px 0 rgba(255, 255, 255, 0.1);\n  margin-top: 8px;\n  margin-bottom: 8px;\n}\n\n@media (min-width: 768px) {\n  .navbar-form .form-group {\n    display: inline-block;\n    margin-bottom: 0;\n    vertical-align: middle;\n  }\n\n  .navbar-form .form-control {\n    display: inline-block;\n    width: auto;\n    vertical-align: middle;\n  }\n\n  .navbar-form .form-control-static {\n    display: inline-block;\n  }\n\n  .navbar-form .input-group {\n    display: inline-table;\n    vertical-align: middle;\n  }\n\n  .navbar-form .input-group .input-group-addon,\n  .navbar-form .input-group .input-group-btn,\n  .navbar-form .input-group .form-control {\n    width: auto;\n  }\n\n  .navbar-form .input-group > .form-control {\n    width: 100%;\n  }\n\n  .navbar-form .control-label {\n    margin-bottom: 0;\n    vertical-align: middle;\n  }\n\n  .navbar-form .radio,\n  .navbar-form .checkbox {\n    display: inline-block;\n    margin-top: 0;\n    margin-bottom: 0;\n    vertical-align: middle;\n  }\n\n  .navbar-form .radio label,\n  .navbar-form .checkbox label {\n    padding-left: 0;\n  }\n\n  .navbar-form .radio input[type=\"radio\"],\n  .navbar-form .checkbox input[type=\"checkbox\"] {\n    position: relative;\n    margin-left: 0;\n  }\n\n  .navbar-form .has-feedback .form-control-feedback {\n    top: 0;\n  }\n}\n\n@media (max-width: 767px) {\n  .navbar-form .form-group {\n    margin-bottom: 5px;\n  }\n\n  .navbar-form .form-group:last-child {\n    margin-bottom: 0;\n  }\n}\n\n@media (min-width: 768px) {\n  .navbar-form {\n    width: auto;\n    border: 0;\n    margin-left: 0;\n    margin-right: 0;\n    padding-top: 0;\n    padding-bottom: 0;\n    -webkit-box-shadow: none;\n    box-shadow: none;\n  }\n}\n\n.navbar-nav > li > .dropdown-menu {\n  margin-top: 0;\n  border-top-right-radius: 0;\n  border-top-left-radius: 0;\n}\n\n.navbar-fixed-bottom .navbar-nav > li > .dropdown-menu {\n  margin-bottom: 0;\n  border-top-right-radius: 4px;\n  border-top-left-radius: 4px;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.navbar-btn {\n  margin-top: 8px;\n  margin-bottom: 8px;\n}\n\n.navbar-btn.btn-sm,\n.btn-group-sm > .navbar-btn.btn {\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\n.navbar-btn.btn-xs,\n.btn-group-xs > .navbar-btn.btn {\n  margin-top: 14px;\n  margin-bottom: 14px;\n}\n\n.navbar-text {\n  margin-top: 15px;\n  margin-bottom: 15px;\n}\n\n@media (min-width: 768px) {\n  .navbar-text {\n    float: left;\n    margin-left: 15px;\n    margin-right: 15px;\n  }\n}\n\n@media (min-width: 768px) {\n  .navbar-left {\n    float: left !important;\n  }\n\n  .navbar-right {\n    float: right !important;\n    margin-right: -15px;\n  }\n\n  .navbar-right ~ .navbar-right {\n    margin-right: 0;\n  }\n}\n\n.navbar-default {\n  background-color: #f8f8f8;\n  border-color: #e7e7e7;\n}\n\n.navbar-default .navbar-brand {\n  color: #777;\n}\n\n.navbar-default .navbar-brand:hover,\n.navbar-default .navbar-brand:focus {\n  color: #5e5e5e;\n  background-color: transparent;\n}\n\n.navbar-default .navbar-text {\n  color: #777;\n}\n\n.navbar-default .navbar-nav > li > a {\n  color: #777;\n}\n\n.navbar-default .navbar-nav > li > a:hover,\n.navbar-default .navbar-nav > li > a:focus {\n  color: #333;\n  background-color: transparent;\n}\n\n.navbar-default .navbar-nav > .active > a,\n.navbar-default .navbar-nav > .active > a:hover,\n.navbar-default .navbar-nav > .active > a:focus {\n  color: #555;\n  background-color: #e7e7e7;\n}\n\n.navbar-default .navbar-nav > .disabled > a,\n.navbar-default .navbar-nav > .disabled > a:hover,\n.navbar-default .navbar-nav > .disabled > a:focus {\n  color: #ccc;\n  background-color: transparent;\n}\n\n.navbar-default .navbar-toggle {\n  border-color: #ddd;\n}\n\n.navbar-default .navbar-toggle:hover,\n.navbar-default .navbar-toggle:focus {\n  background-color: #ddd;\n}\n\n.navbar-default .navbar-toggle .icon-bar {\n  background-color: #888;\n}\n\n.navbar-default .navbar-collapse,\n.navbar-default .navbar-form {\n  border-color: #e7e7e7;\n}\n\n.navbar-default .navbar-nav > .open > a,\n.navbar-default .navbar-nav > .open > a:hover,\n.navbar-default .navbar-nav > .open > a:focus {\n  background-color: #e7e7e7;\n  color: #555;\n}\n\n@media (max-width: 767px) {\n  .navbar-default .navbar-nav .open .dropdown-menu > li > a {\n    color: #777;\n  }\n\n  .navbar-default .navbar-nav .open .dropdown-menu > li > a:hover,\n  .navbar-default .navbar-nav .open .dropdown-menu > li > a:focus {\n    color: #333;\n    background-color: transparent;\n  }\n\n  .navbar-default .navbar-nav .open .dropdown-menu > .active > a,\n  .navbar-default .navbar-nav .open .dropdown-menu > .active > a:hover,\n  .navbar-default .navbar-nav .open .dropdown-menu > .active > a:focus {\n    color: #555;\n    background-color: #e7e7e7;\n  }\n\n  .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a,\n  .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a:hover,\n  .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a:focus {\n    color: #ccc;\n    background-color: transparent;\n  }\n}\n\n.navbar-default .navbar-link {\n  color: #777;\n}\n\n.navbar-default .navbar-link:hover {\n  color: #333;\n}\n\n.navbar-default .btn-link {\n  color: #777;\n}\n\n.navbar-default .btn-link:hover,\n.navbar-default .btn-link:focus {\n  color: #333;\n}\n\n.navbar-default .btn-link[disabled]:hover,\n.navbar-default .btn-link[disabled]:focus,\nfieldset[disabled] .navbar-default .btn-link:hover,\nfieldset[disabled] .navbar-default .btn-link:focus {\n  color: #ccc;\n}\n\n.navbar-inverse {\n  background-color: #222;\n  border-color: #090909;\n}\n\n.navbar-inverse .navbar-brand {\n  color: #9d9d9d;\n}\n\n.navbar-inverse .navbar-brand:hover,\n.navbar-inverse .navbar-brand:focus {\n  color: #fff;\n  background-color: transparent;\n}\n\n.navbar-inverse .navbar-text {\n  color: #9d9d9d;\n}\n\n.navbar-inverse .navbar-nav > li > a {\n  color: #9d9d9d;\n}\n\n.navbar-inverse .navbar-nav > li > a:hover,\n.navbar-inverse .navbar-nav > li > a:focus {\n  color: #fff;\n  background-color: transparent;\n}\n\n.navbar-inverse .navbar-nav > .active > a,\n.navbar-inverse .navbar-nav > .active > a:hover,\n.navbar-inverse .navbar-nav > .active > a:focus {\n  color: #fff;\n  background-color: #090909;\n}\n\n.navbar-inverse .navbar-nav > .disabled > a,\n.navbar-inverse .navbar-nav > .disabled > a:hover,\n.navbar-inverse .navbar-nav > .disabled > a:focus {\n  color: #444;\n  background-color: transparent;\n}\n\n.navbar-inverse .navbar-toggle {\n  border-color: #333;\n}\n\n.navbar-inverse .navbar-toggle:hover,\n.navbar-inverse .navbar-toggle:focus {\n  background-color: #333;\n}\n\n.navbar-inverse .navbar-toggle .icon-bar {\n  background-color: #fff;\n}\n\n.navbar-inverse .navbar-collapse,\n.navbar-inverse .navbar-form {\n  border-color: #101010;\n}\n\n.navbar-inverse .navbar-nav > .open > a,\n.navbar-inverse .navbar-nav > .open > a:hover,\n.navbar-inverse .navbar-nav > .open > a:focus {\n  background-color: #090909;\n  color: #fff;\n}\n\n@media (max-width: 767px) {\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .dropdown-header {\n    border-color: #090909;\n  }\n\n  .navbar-inverse .navbar-nav .open .dropdown-menu .divider {\n    background-color: #090909;\n  }\n\n  .navbar-inverse .navbar-nav .open .dropdown-menu > li > a {\n    color: #9d9d9d;\n  }\n\n  .navbar-inverse .navbar-nav .open .dropdown-menu > li > a:hover,\n  .navbar-inverse .navbar-nav .open .dropdown-menu > li > a:focus {\n    color: #fff;\n    background-color: transparent;\n  }\n\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a,\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a:hover,\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a:focus {\n    color: #fff;\n    background-color: #090909;\n  }\n\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a,\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a:hover,\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a:focus {\n    color: #444;\n    background-color: transparent;\n  }\n}\n\n.navbar-inverse .navbar-link {\n  color: #9d9d9d;\n}\n\n.navbar-inverse .navbar-link:hover {\n  color: #fff;\n}\n\n.navbar-inverse .btn-link {\n  color: #9d9d9d;\n}\n\n.navbar-inverse .btn-link:hover,\n.navbar-inverse .btn-link:focus {\n  color: #fff;\n}\n\n.navbar-inverse .btn-link[disabled]:hover,\n.navbar-inverse .btn-link[disabled]:focus,\nfieldset[disabled] .navbar-inverse .btn-link:hover,\nfieldset[disabled] .navbar-inverse .btn-link:focus {\n  color: #444;\n}\n\n.breadcrumb {\n  padding: 8px 15px;\n  margin-bottom: 20px;\n  list-style: none;\n  background-color: #f5f5f5;\n  border-radius: 4px;\n}\n\n.breadcrumb > li {\n  display: inline-block;\n}\n\n.breadcrumb > li + li:before {\n  content: \"/\\A0\";\n  padding: 0 5px;\n  color: #ccc;\n}\n\n.breadcrumb > .active {\n  color: #777777;\n}\n\n.pagination {\n  display: inline-block;\n  padding-left: 0;\n  margin: 20px 0;\n  border-radius: 4px;\n}\n\n.pagination > li {\n  display: inline;\n}\n\n.pagination > li > a,\n.pagination > li > span {\n  position: relative;\n  float: left;\n  padding: 6px 12px;\n  line-height: 1.42857;\n  text-decoration: none;\n  color: #337ab7;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  margin-left: -1px;\n}\n\n.pagination > li:first-child > a,\n.pagination > li:first-child > span {\n  margin-left: 0;\n  border-bottom-left-radius: 4px;\n  border-top-left-radius: 4px;\n}\n\n.pagination > li:last-child > a,\n.pagination > li:last-child > span {\n  border-bottom-right-radius: 4px;\n  border-top-right-radius: 4px;\n}\n\n.pagination > li > a:hover,\n.pagination > li > a:focus,\n.pagination > li > span:hover,\n.pagination > li > span:focus {\n  z-index: 2;\n  color: #23527c;\n  background-color: #eeeeee;\n  border-color: #ddd;\n}\n\n.pagination > .active > a,\n.pagination > .active > a:hover,\n.pagination > .active > a:focus,\n.pagination > .active > span,\n.pagination > .active > span:hover,\n.pagination > .active > span:focus {\n  z-index: 3;\n  color: #fff;\n  background-color: #337ab7;\n  border-color: #337ab7;\n  cursor: default;\n}\n\n.pagination > .disabled > span,\n.pagination > .disabled > span:hover,\n.pagination > .disabled > span:focus,\n.pagination > .disabled > a,\n.pagination > .disabled > a:hover,\n.pagination > .disabled > a:focus {\n  color: #777777;\n  background-color: #fff;\n  border-color: #ddd;\n  cursor: not-allowed;\n}\n\n.pagination-lg > li > a,\n.pagination-lg > li > span {\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.33333;\n}\n\n.pagination-lg > li:first-child > a,\n.pagination-lg > li:first-child > span {\n  border-bottom-left-radius: 6px;\n  border-top-left-radius: 6px;\n}\n\n.pagination-lg > li:last-child > a,\n.pagination-lg > li:last-child > span {\n  border-bottom-right-radius: 6px;\n  border-top-right-radius: 6px;\n}\n\n.pagination-sm > li > a,\n.pagination-sm > li > span {\n  padding: 5px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n}\n\n.pagination-sm > li:first-child > a,\n.pagination-sm > li:first-child > span {\n  border-bottom-left-radius: 3px;\n  border-top-left-radius: 3px;\n}\n\n.pagination-sm > li:last-child > a,\n.pagination-sm > li:last-child > span {\n  border-bottom-right-radius: 3px;\n  border-top-right-radius: 3px;\n}\n\n.pager {\n  padding-left: 0;\n  margin: 20px 0;\n  list-style: none;\n  text-align: center;\n}\n\n.pager:before,\n.pager:after {\n  content: \" \";\n  display: table;\n}\n\n.pager:after {\n  clear: both;\n}\n\n.pager li {\n  display: inline;\n}\n\n.pager li > a,\n.pager li > span {\n  display: inline-block;\n  padding: 5px 14px;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-radius: 15px;\n}\n\n.pager li > a:hover,\n.pager li > a:focus {\n  text-decoration: none;\n  background-color: #eeeeee;\n}\n\n.pager .next > a,\n.pager .next > span {\n  float: right;\n}\n\n.pager .previous > a,\n.pager .previous > span {\n  float: left;\n}\n\n.pager .disabled > a,\n.pager .disabled > a:hover,\n.pager .disabled > a:focus,\n.pager .disabled > span {\n  color: #777777;\n  background-color: #fff;\n  cursor: not-allowed;\n}\n\n.label {\n  display: inline;\n  padding: .2em .6em .3em;\n  font-size: 75%;\n  font-weight: bold;\n  line-height: 1;\n  color: #fff;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: baseline;\n  border-radius: .25em;\n}\n\n.label:empty {\n  display: none;\n}\n\n.btn .label {\n  position: relative;\n  top: -1px;\n}\n\na.label:hover,\na.label:focus {\n  color: #fff;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n.label-default {\n  background-color: #777777;\n}\n\n.label-default[href]:hover,\n.label-default[href]:focus {\n  background-color: #5e5e5e;\n}\n\n.label-primary {\n  background-color: #337ab7;\n}\n\n.label-primary[href]:hover,\n.label-primary[href]:focus {\n  background-color: #286090;\n}\n\n.label-success {\n  background-color: #5cb85c;\n}\n\n.label-success[href]:hover,\n.label-success[href]:focus {\n  background-color: #449d44;\n}\n\n.label-info {\n  background-color: #5bc0de;\n}\n\n.label-info[href]:hover,\n.label-info[href]:focus {\n  background-color: #31b0d5;\n}\n\n.label-warning {\n  background-color: #f0ad4e;\n}\n\n.label-warning[href]:hover,\n.label-warning[href]:focus {\n  background-color: #ec971f;\n}\n\n.label-danger {\n  background-color: #d9534f;\n}\n\n.label-danger[href]:hover,\n.label-danger[href]:focus {\n  background-color: #c9302c;\n}\n\n.badge {\n  display: inline-block;\n  min-width: 10px;\n  padding: 3px 7px;\n  font-size: 12px;\n  font-weight: bold;\n  color: #fff;\n  line-height: 1;\n  vertical-align: middle;\n  white-space: nowrap;\n  text-align: center;\n  background-color: #777777;\n  border-radius: 10px;\n}\n\n.badge:empty {\n  display: none;\n}\n\n.btn .badge {\n  position: relative;\n  top: -1px;\n}\n\n.btn-xs .badge,\n.btn-group-xs > .btn .badge,\n.btn-group-xs > .btn .badge {\n  top: 0;\n  padding: 1px 5px;\n}\n\n.list-group-item.active > .badge,\n.nav-pills > .active > a > .badge {\n  color: #337ab7;\n  background-color: #fff;\n}\n\n.list-group-item > .badge {\n  float: right;\n}\n\n.list-group-item > .badge + .badge {\n  margin-right: 5px;\n}\n\n.nav-pills > li > a > .badge {\n  margin-left: 3px;\n}\n\na.badge:hover,\na.badge:focus {\n  color: #fff;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n.jumbotron {\n  padding-top: 30px;\n  padding-bottom: 30px;\n  margin-bottom: 30px;\n  color: inherit;\n  background-color: #eeeeee;\n}\n\n.jumbotron h1,\n.jumbotron .h1 {\n  color: inherit;\n}\n\n.jumbotron p {\n  margin-bottom: 15px;\n  font-size: 21px;\n  font-weight: 200;\n}\n\n.jumbotron > hr {\n  border-top-color: #d5d5d5;\n}\n\n.container .jumbotron,\n.container-fluid .jumbotron {\n  border-radius: 6px;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n\n.jumbotron .container {\n  max-width: 100%;\n}\n\n@media screen and (min-width: 768px) {\n  .jumbotron {\n    padding-top: 48px;\n    padding-bottom: 48px;\n  }\n\n  .container .jumbotron,\n  .container-fluid .jumbotron {\n    padding-left: 60px;\n    padding-right: 60px;\n  }\n\n  .jumbotron h1,\n  .jumbotron .h1 {\n    font-size: 63px;\n  }\n}\n\n.thumbnail {\n  display: block;\n  padding: 4px;\n  margin-bottom: 20px;\n  line-height: 1.42857;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  -webkit-transition: border 0.2s ease-in-out;\n  -o-transition: border 0.2s ease-in-out;\n  transition: border 0.2s ease-in-out;\n}\n\n.thumbnail > img,\n.thumbnail a > img {\n  display: block;\n  max-width: 100%;\n  height: auto;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.thumbnail .caption {\n  padding: 9px;\n  color: #333333;\n}\n\na.thumbnail:hover,\na.thumbnail:focus,\na.thumbnail.active {\n  border-color: #337ab7;\n}\n\n.alert {\n  padding: 15px;\n  margin-bottom: 20px;\n  border: 1px solid transparent;\n  border-radius: 4px;\n}\n\n.alert h4 {\n  margin-top: 0;\n  color: inherit;\n}\n\n.alert .alert-link {\n  font-weight: bold;\n}\n\n.alert > p,\n.alert > ul {\n  margin-bottom: 0;\n}\n\n.alert > p + p {\n  margin-top: 5px;\n}\n\n.alert-dismissable,\n.alert-dismissible {\n  padding-right: 35px;\n}\n\n.alert-dismissable .close,\n.alert-dismissible .close {\n  position: relative;\n  top: -2px;\n  right: -21px;\n  color: inherit;\n}\n\n.alert-success {\n  background-color: #dff0d8;\n  border-color: #d6e9c6;\n  color: #3c763d;\n}\n\n.alert-success hr {\n  border-top-color: #c9e2b3;\n}\n\n.alert-success .alert-link {\n  color: #2b542c;\n}\n\n.alert-info {\n  background-color: #d9edf7;\n  border-color: #bce8f1;\n  color: #31708f;\n}\n\n.alert-info hr {\n  border-top-color: #a6e1ec;\n}\n\n.alert-info .alert-link {\n  color: #245269;\n}\n\n.alert-warning {\n  background-color: #fcf8e3;\n  border-color: #faebcc;\n  color: #8a6d3b;\n}\n\n.alert-warning hr {\n  border-top-color: #f7e1b5;\n}\n\n.alert-warning .alert-link {\n  color: #66512c;\n}\n\n.alert-danger {\n  background-color: #f2dede;\n  border-color: #ebccd1;\n  color: #a94442;\n}\n\n.alert-danger hr {\n  border-top-color: #e4b9c0;\n}\n\n.alert-danger .alert-link {\n  color: #843534;\n}\n\n@-webkit-keyframes progress-bar-stripes {\n  from {\n    background-position: 40px 0;\n  }\n\n  to {\n    background-position: 0 0;\n  }\n}\n\n@keyframes progress-bar-stripes {\n  from {\n    background-position: 40px 0;\n  }\n\n  to {\n    background-position: 0 0;\n  }\n}\n\n.progress {\n  overflow: hidden;\n  height: 20px;\n  margin-bottom: 20px;\n  background-color: #f5f5f5;\n  border-radius: 4px;\n  -webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);\n  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);\n}\n\n.progress-bar {\n  float: left;\n  width: 0%;\n  height: 100%;\n  font-size: 12px;\n  line-height: 20px;\n  color: #fff;\n  text-align: center;\n  background-color: #337ab7;\n  -webkit-box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.15);\n  box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.15);\n  -webkit-transition: width 0.6s ease;\n  -o-transition: width 0.6s ease;\n  transition: width 0.6s ease;\n}\n\n.progress-striped .progress-bar,\n.progress-bar-striped {\n  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-size: 40px 40px;\n}\n\n.progress.active .progress-bar,\n.progress-bar.active {\n  -webkit-animation: progress-bar-stripes 2s linear infinite;\n  -o-animation: progress-bar-stripes 2s linear infinite;\n  animation: progress-bar-stripes 2s linear infinite;\n}\n\n.progress-bar-success {\n  background-color: #5cb85c;\n}\n\n.progress-striped .progress-bar-success {\n  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n}\n\n.progress-bar-info {\n  background-color: #5bc0de;\n}\n\n.progress-striped .progress-bar-info {\n  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n}\n\n.progress-bar-warning {\n  background-color: #f0ad4e;\n}\n\n.progress-striped .progress-bar-warning {\n  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n}\n\n.progress-bar-danger {\n  background-color: #d9534f;\n}\n\n.progress-striped .progress-bar-danger {\n  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n}\n\n.media {\n  margin-top: 15px;\n}\n\n.media:first-child {\n  margin-top: 0;\n}\n\n.media,\n.media-body {\n  zoom: 1;\n  overflow: hidden;\n}\n\n.media-body {\n  width: 10000px;\n}\n\n.media-object {\n  display: block;\n}\n\n.media-object.img-thumbnail {\n  max-width: none;\n}\n\n.media-right,\n.media > .pull-right {\n  padding-left: 10px;\n}\n\n.media-left,\n.media > .pull-left {\n  padding-right: 10px;\n}\n\n.media-left,\n.media-right,\n.media-body {\n  display: table-cell;\n  vertical-align: top;\n}\n\n.media-middle {\n  vertical-align: middle;\n}\n\n.media-bottom {\n  vertical-align: bottom;\n}\n\n.media-heading {\n  margin-top: 0;\n  margin-bottom: 5px;\n}\n\n.media-list {\n  padding-left: 0;\n  list-style: none;\n}\n\n.list-group {\n  margin-bottom: 20px;\n  padding-left: 0;\n}\n\n.list-group-item {\n  position: relative;\n  display: block;\n  padding: 10px 15px;\n  margin-bottom: -1px;\n  background-color: #fff;\n  border: 1px solid #ddd;\n}\n\n.list-group-item:first-child {\n  border-top-right-radius: 4px;\n  border-top-left-radius: 4px;\n}\n\n.list-group-item:last-child {\n  margin-bottom: 0;\n  border-bottom-right-radius: 4px;\n  border-bottom-left-radius: 4px;\n}\n\na.list-group-item,\nbutton.list-group-item {\n  color: #555;\n}\n\na.list-group-item .list-group-item-heading,\nbutton.list-group-item .list-group-item-heading {\n  color: #333;\n}\n\na.list-group-item:hover,\na.list-group-item:focus,\nbutton.list-group-item:hover,\nbutton.list-group-item:focus {\n  text-decoration: none;\n  color: #555;\n  background-color: #f5f5f5;\n}\n\nbutton.list-group-item {\n  width: 100%;\n  text-align: left;\n}\n\n.list-group-item.disabled,\n.list-group-item.disabled:hover,\n.list-group-item.disabled:focus {\n  background-color: #eeeeee;\n  color: #777777;\n  cursor: not-allowed;\n}\n\n.list-group-item.disabled .list-group-item-heading,\n.list-group-item.disabled:hover .list-group-item-heading,\n.list-group-item.disabled:focus .list-group-item-heading {\n  color: inherit;\n}\n\n.list-group-item.disabled .list-group-item-text,\n.list-group-item.disabled:hover .list-group-item-text,\n.list-group-item.disabled:focus .list-group-item-text {\n  color: #777777;\n}\n\n.list-group-item.active,\n.list-group-item.active:hover,\n.list-group-item.active:focus {\n  z-index: 2;\n  color: #fff;\n  background-color: #337ab7;\n  border-color: #337ab7;\n}\n\n.list-group-item.active .list-group-item-heading,\n.list-group-item.active .list-group-item-heading > small,\n.list-group-item.active .list-group-item-heading > .small,\n.list-group-item.active:hover .list-group-item-heading,\n.list-group-item.active:hover .list-group-item-heading > small,\n.list-group-item.active:hover .list-group-item-heading > .small,\n.list-group-item.active:focus .list-group-item-heading,\n.list-group-item.active:focus .list-group-item-heading > small,\n.list-group-item.active:focus .list-group-item-heading > .small {\n  color: inherit;\n}\n\n.list-group-item.active .list-group-item-text,\n.list-group-item.active:hover .list-group-item-text,\n.list-group-item.active:focus .list-group-item-text {\n  color: #c7ddef;\n}\n\n.list-group-item-success {\n  color: #3c763d;\n  background-color: #dff0d8;\n}\n\na.list-group-item-success,\nbutton.list-group-item-success {\n  color: #3c763d;\n}\n\na.list-group-item-success .list-group-item-heading,\nbutton.list-group-item-success .list-group-item-heading {\n  color: inherit;\n}\n\na.list-group-item-success:hover,\na.list-group-item-success:focus,\nbutton.list-group-item-success:hover,\nbutton.list-group-item-success:focus {\n  color: #3c763d;\n  background-color: #d0e9c6;\n}\n\na.list-group-item-success.active,\na.list-group-item-success.active:hover,\na.list-group-item-success.active:focus,\nbutton.list-group-item-success.active,\nbutton.list-group-item-success.active:hover,\nbutton.list-group-item-success.active:focus {\n  color: #fff;\n  background-color: #3c763d;\n  border-color: #3c763d;\n}\n\n.list-group-item-info {\n  color: #31708f;\n  background-color: #d9edf7;\n}\n\na.list-group-item-info,\nbutton.list-group-item-info {\n  color: #31708f;\n}\n\na.list-group-item-info .list-group-item-heading,\nbutton.list-group-item-info .list-group-item-heading {\n  color: inherit;\n}\n\na.list-group-item-info:hover,\na.list-group-item-info:focus,\nbutton.list-group-item-info:hover,\nbutton.list-group-item-info:focus {\n  color: #31708f;\n  background-color: #c4e3f3;\n}\n\na.list-group-item-info.active,\na.list-group-item-info.active:hover,\na.list-group-item-info.active:focus,\nbutton.list-group-item-info.active,\nbutton.list-group-item-info.active:hover,\nbutton.list-group-item-info.active:focus {\n  color: #fff;\n  background-color: #31708f;\n  border-color: #31708f;\n}\n\n.list-group-item-warning {\n  color: #8a6d3b;\n  background-color: #fcf8e3;\n}\n\na.list-group-item-warning,\nbutton.list-group-item-warning {\n  color: #8a6d3b;\n}\n\na.list-group-item-warning .list-group-item-heading,\nbutton.list-group-item-warning .list-group-item-heading {\n  color: inherit;\n}\n\na.list-group-item-warning:hover,\na.list-group-item-warning:focus,\nbutton.list-group-item-warning:hover,\nbutton.list-group-item-warning:focus {\n  color: #8a6d3b;\n  background-color: #faf2cc;\n}\n\na.list-group-item-warning.active,\na.list-group-item-warning.active:hover,\na.list-group-item-warning.active:focus,\nbutton.list-group-item-warning.active,\nbutton.list-group-item-warning.active:hover,\nbutton.list-group-item-warning.active:focus {\n  color: #fff;\n  background-color: #8a6d3b;\n  border-color: #8a6d3b;\n}\n\n.list-group-item-danger {\n  color: #a94442;\n  background-color: #f2dede;\n}\n\na.list-group-item-danger,\nbutton.list-group-item-danger {\n  color: #a94442;\n}\n\na.list-group-item-danger .list-group-item-heading,\nbutton.list-group-item-danger .list-group-item-heading {\n  color: inherit;\n}\n\na.list-group-item-danger:hover,\na.list-group-item-danger:focus,\nbutton.list-group-item-danger:hover,\nbutton.list-group-item-danger:focus {\n  color: #a94442;\n  background-color: #ebcccc;\n}\n\na.list-group-item-danger.active,\na.list-group-item-danger.active:hover,\na.list-group-item-danger.active:focus,\nbutton.list-group-item-danger.active,\nbutton.list-group-item-danger.active:hover,\nbutton.list-group-item-danger.active:focus {\n  color: #fff;\n  background-color: #a94442;\n  border-color: #a94442;\n}\n\n.list-group-item-heading {\n  margin-top: 0;\n  margin-bottom: 5px;\n}\n\n.list-group-item-text {\n  margin-bottom: 0;\n  line-height: 1.3;\n}\n\n.panel {\n  margin-bottom: 20px;\n  background-color: #fff;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);\n}\n\n.panel-body {\n  padding: 15px;\n}\n\n.panel-body:before,\n.panel-body:after {\n  content: \" \";\n  display: table;\n}\n\n.panel-body:after {\n  clear: both;\n}\n\n.panel-heading {\n  padding: 10px 15px;\n  border-bottom: 1px solid transparent;\n  border-top-right-radius: 3px;\n  border-top-left-radius: 3px;\n}\n\n.panel-heading > .dropdown .dropdown-toggle {\n  color: inherit;\n}\n\n.panel-title {\n  margin-top: 0;\n  margin-bottom: 0;\n  font-size: 16px;\n  color: inherit;\n}\n\n.panel-title > a,\n.panel-title > small,\n.panel-title > .small,\n.panel-title > small > a,\n.panel-title > .small > a {\n  color: inherit;\n}\n\n.panel-footer {\n  padding: 10px 15px;\n  background-color: #f5f5f5;\n  border-top: 1px solid #ddd;\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 3px;\n}\n\n.panel > .list-group,\n.panel > .panel-collapse > .list-group {\n  margin-bottom: 0;\n}\n\n.panel > .list-group .list-group-item,\n.panel > .panel-collapse > .list-group .list-group-item {\n  border-width: 1px 0;\n  border-radius: 0;\n}\n\n.panel > .list-group:first-child .list-group-item:first-child,\n.panel > .panel-collapse > .list-group:first-child .list-group-item:first-child {\n  border-top: 0;\n  border-top-right-radius: 3px;\n  border-top-left-radius: 3px;\n}\n\n.panel > .list-group:last-child .list-group-item:last-child,\n.panel > .panel-collapse > .list-group:last-child .list-group-item:last-child {\n  border-bottom: 0;\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 3px;\n}\n\n.panel > .panel-heading + .panel-collapse > .list-group .list-group-item:first-child {\n  border-top-right-radius: 0;\n  border-top-left-radius: 0;\n}\n\n.panel-heading + .list-group .list-group-item:first-child {\n  border-top-width: 0;\n}\n\n.list-group + .panel-footer {\n  border-top-width: 0;\n}\n\n.panel > .table,\n.panel > .table-responsive > .table,\n.panel > .panel-collapse > .table {\n  margin-bottom: 0;\n}\n\n.panel > .table caption,\n.panel > .table-responsive > .table caption,\n.panel > .panel-collapse > .table caption {\n  padding-left: 15px;\n  padding-right: 15px;\n}\n\n.panel > .table:first-child,\n.panel > .table-responsive:first-child > .table:first-child {\n  border-top-right-radius: 3px;\n  border-top-left-radius: 3px;\n}\n\n.panel > .table:first-child > thead:first-child > tr:first-child,\n.panel > .table:first-child > tbody:first-child > tr:first-child,\n.panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child,\n.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child {\n  border-top-left-radius: 3px;\n  border-top-right-radius: 3px;\n}\n\n.panel > .table:first-child > thead:first-child > tr:first-child td:first-child,\n.panel > .table:first-child > thead:first-child > tr:first-child th:first-child,\n.panel > .table:first-child > tbody:first-child > tr:first-child td:first-child,\n.panel > .table:first-child > tbody:first-child > tr:first-child th:first-child,\n.panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child td:first-child,\n.panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child th:first-child,\n.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child td:first-child,\n.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child th:first-child {\n  border-top-left-radius: 3px;\n}\n\n.panel > .table:first-child > thead:first-child > tr:first-child td:last-child,\n.panel > .table:first-child > thead:first-child > tr:first-child th:last-child,\n.panel > .table:first-child > tbody:first-child > tr:first-child td:last-child,\n.panel > .table:first-child > tbody:first-child > tr:first-child th:last-child,\n.panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child td:last-child,\n.panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child th:last-child,\n.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child td:last-child,\n.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child th:last-child {\n  border-top-right-radius: 3px;\n}\n\n.panel > .table:last-child,\n.panel > .table-responsive:last-child > .table:last-child {\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 3px;\n}\n\n.panel > .table:last-child > tbody:last-child > tr:last-child,\n.panel > .table:last-child > tfoot:last-child > tr:last-child,\n.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child,\n.panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child {\n  border-bottom-left-radius: 3px;\n  border-bottom-right-radius: 3px;\n}\n\n.panel > .table:last-child > tbody:last-child > tr:last-child td:first-child,\n.panel > .table:last-child > tbody:last-child > tr:last-child th:first-child,\n.panel > .table:last-child > tfoot:last-child > tr:last-child td:first-child,\n.panel > .table:last-child > tfoot:last-child > tr:last-child th:first-child,\n.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child td:first-child,\n.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child th:first-child,\n.panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child td:first-child,\n.panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child th:first-child {\n  border-bottom-left-radius: 3px;\n}\n\n.panel > .table:last-child > tbody:last-child > tr:last-child td:last-child,\n.panel > .table:last-child > tbody:last-child > tr:last-child th:last-child,\n.panel > .table:last-child > tfoot:last-child > tr:last-child td:last-child,\n.panel > .table:last-child > tfoot:last-child > tr:last-child th:last-child,\n.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child td:last-child,\n.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child th:last-child,\n.panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child td:last-child,\n.panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child th:last-child {\n  border-bottom-right-radius: 3px;\n}\n\n.panel > .panel-body + .table,\n.panel > .panel-body + .table-responsive,\n.panel > .table + .panel-body,\n.panel > .table-responsive + .panel-body {\n  border-top: 1px solid #ddd;\n}\n\n.panel > .table > tbody:first-child > tr:first-child th,\n.panel > .table > tbody:first-child > tr:first-child td {\n  border-top: 0;\n}\n\n.panel > .table-bordered,\n.panel > .table-responsive > .table-bordered {\n  border: 0;\n}\n\n.panel > .table-bordered > thead > tr > th:first-child,\n.panel > .table-bordered > thead > tr > td:first-child,\n.panel > .table-bordered > tbody > tr > th:first-child,\n.panel > .table-bordered > tbody > tr > td:first-child,\n.panel > .table-bordered > tfoot > tr > th:first-child,\n.panel > .table-bordered > tfoot > tr > td:first-child,\n.panel > .table-responsive > .table-bordered > thead > tr > th:first-child,\n.panel > .table-responsive > .table-bordered > thead > tr > td:first-child,\n.panel > .table-responsive > .table-bordered > tbody > tr > th:first-child,\n.panel > .table-responsive > .table-bordered > tbody > tr > td:first-child,\n.panel > .table-responsive > .table-bordered > tfoot > tr > th:first-child,\n.panel > .table-responsive > .table-bordered > tfoot > tr > td:first-child {\n  border-left: 0;\n}\n\n.panel > .table-bordered > thead > tr > th:last-child,\n.panel > .table-bordered > thead > tr > td:last-child,\n.panel > .table-bordered > tbody > tr > th:last-child,\n.panel > .table-bordered > tbody > tr > td:last-child,\n.panel > .table-bordered > tfoot > tr > th:last-child,\n.panel > .table-bordered > tfoot > tr > td:last-child,\n.panel > .table-responsive > .table-bordered > thead > tr > th:last-child,\n.panel > .table-responsive > .table-bordered > thead > tr > td:last-child,\n.panel > .table-responsive > .table-bordered > tbody > tr > th:last-child,\n.panel > .table-responsive > .table-bordered > tbody > tr > td:last-child,\n.panel > .table-responsive > .table-bordered > tfoot > tr > th:last-child,\n.panel > .table-responsive > .table-bordered > tfoot > tr > td:last-child {\n  border-right: 0;\n}\n\n.panel > .table-bordered > thead > tr:first-child > td,\n.panel > .table-bordered > thead > tr:first-child > th,\n.panel > .table-bordered > tbody > tr:first-child > td,\n.panel > .table-bordered > tbody > tr:first-child > th,\n.panel > .table-responsive > .table-bordered > thead > tr:first-child > td,\n.panel > .table-responsive > .table-bordered > thead > tr:first-child > th,\n.panel > .table-responsive > .table-bordered > tbody > tr:first-child > td,\n.panel > .table-responsive > .table-bordered > tbody > tr:first-child > th {\n  border-bottom: 0;\n}\n\n.panel > .table-bordered > tbody > tr:last-child > td,\n.panel > .table-bordered > tbody > tr:last-child > th,\n.panel > .table-bordered > tfoot > tr:last-child > td,\n.panel > .table-bordered > tfoot > tr:last-child > th,\n.panel > .table-responsive > .table-bordered > tbody > tr:last-child > td,\n.panel > .table-responsive > .table-bordered > tbody > tr:last-child > th,\n.panel > .table-responsive > .table-bordered > tfoot > tr:last-child > td,\n.panel > .table-responsive > .table-bordered > tfoot > tr:last-child > th {\n  border-bottom: 0;\n}\n\n.panel > .table-responsive {\n  border: 0;\n  margin-bottom: 0;\n}\n\n.panel-group {\n  margin-bottom: 20px;\n}\n\n.panel-group .panel {\n  margin-bottom: 0;\n  border-radius: 4px;\n}\n\n.panel-group .panel + .panel {\n  margin-top: 5px;\n}\n\n.panel-group .panel-heading {\n  border-bottom: 0;\n}\n\n.panel-group .panel-heading + .panel-collapse > .panel-body,\n.panel-group .panel-heading + .panel-collapse > .list-group {\n  border-top: 1px solid #ddd;\n}\n\n.panel-group .panel-footer {\n  border-top: 0;\n}\n\n.panel-group .panel-footer + .panel-collapse .panel-body {\n  border-bottom: 1px solid #ddd;\n}\n\n.panel-default {\n  border-color: #ddd;\n}\n\n.panel-default > .panel-heading {\n  color: #333333;\n  background-color: #f5f5f5;\n  border-color: #ddd;\n}\n\n.panel-default > .panel-heading + .panel-collapse > .panel-body {\n  border-top-color: #ddd;\n}\n\n.panel-default > .panel-heading .badge {\n  color: #f5f5f5;\n  background-color: #333333;\n}\n\n.panel-default > .panel-footer + .panel-collapse > .panel-body {\n  border-bottom-color: #ddd;\n}\n\n.panel-primary {\n  border-color: #337ab7;\n}\n\n.panel-primary > .panel-heading {\n  color: #fff;\n  background-color: #337ab7;\n  border-color: #337ab7;\n}\n\n.panel-primary > .panel-heading + .panel-collapse > .panel-body {\n  border-top-color: #337ab7;\n}\n\n.panel-primary > .panel-heading .badge {\n  color: #337ab7;\n  background-color: #fff;\n}\n\n.panel-primary > .panel-footer + .panel-collapse > .panel-body {\n  border-bottom-color: #337ab7;\n}\n\n.panel-success {\n  border-color: #d6e9c6;\n}\n\n.panel-success > .panel-heading {\n  color: #3c763d;\n  background-color: #dff0d8;\n  border-color: #d6e9c6;\n}\n\n.panel-success > .panel-heading + .panel-collapse > .panel-body {\n  border-top-color: #d6e9c6;\n}\n\n.panel-success > .panel-heading .badge {\n  color: #dff0d8;\n  background-color: #3c763d;\n}\n\n.panel-success > .panel-footer + .panel-collapse > .panel-body {\n  border-bottom-color: #d6e9c6;\n}\n\n.panel-info {\n  border-color: #bce8f1;\n}\n\n.panel-info > .panel-heading {\n  color: #31708f;\n  background-color: #d9edf7;\n  border-color: #bce8f1;\n}\n\n.panel-info > .panel-heading + .panel-collapse > .panel-body {\n  border-top-color: #bce8f1;\n}\n\n.panel-info > .panel-heading .badge {\n  color: #d9edf7;\n  background-color: #31708f;\n}\n\n.panel-info > .panel-footer + .panel-collapse > .panel-body {\n  border-bottom-color: #bce8f1;\n}\n\n.panel-warning {\n  border-color: #faebcc;\n}\n\n.panel-warning > .panel-heading {\n  color: #8a6d3b;\n  background-color: #fcf8e3;\n  border-color: #faebcc;\n}\n\n.panel-warning > .panel-heading + .panel-collapse > .panel-body {\n  border-top-color: #faebcc;\n}\n\n.panel-warning > .panel-heading .badge {\n  color: #fcf8e3;\n  background-color: #8a6d3b;\n}\n\n.panel-warning > .panel-footer + .panel-collapse > .panel-body {\n  border-bottom-color: #faebcc;\n}\n\n.panel-danger {\n  border-color: #ebccd1;\n}\n\n.panel-danger > .panel-heading {\n  color: #a94442;\n  background-color: #f2dede;\n  border-color: #ebccd1;\n}\n\n.panel-danger > .panel-heading + .panel-collapse > .panel-body {\n  border-top-color: #ebccd1;\n}\n\n.panel-danger > .panel-heading .badge {\n  color: #f2dede;\n  background-color: #a94442;\n}\n\n.panel-danger > .panel-footer + .panel-collapse > .panel-body {\n  border-bottom-color: #ebccd1;\n}\n\n.well {\n  min-height: 20px;\n  padding: 19px;\n  margin-bottom: 20px;\n  background-color: #f5f5f5;\n  border: 1px solid #e3e3e3;\n  border-radius: 4px;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05);\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05);\n}\n\n.well blockquote {\n  border-color: #ddd;\n  border-color: rgba(0, 0, 0, 0.15);\n}\n\n.well-lg {\n  padding: 24px;\n  border-radius: 6px;\n}\n\n.well-sm {\n  padding: 9px;\n  border-radius: 3px;\n}\n\n.embed-responsive {\n  position: relative;\n  display: block;\n  height: 0;\n  padding: 0;\n  overflow: hidden;\n}\n\n.embed-responsive .embed-responsive-item,\n.embed-responsive iframe,\n.embed-responsive embed,\n.embed-responsive object,\n.embed-responsive video {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  height: 100%;\n  width: 100%;\n  border: 0;\n}\n\n.embed-responsive-16by9 {\n  padding-bottom: 56.25%;\n}\n\n.embed-responsive-4by3 {\n  padding-bottom: 75%;\n}\n\n.close {\n  float: right;\n  font-size: 21px;\n  font-weight: bold;\n  line-height: 1;\n  color: #000;\n  text-shadow: 0 1px 0 #fff;\n  opacity: 0.2;\n  filter: alpha(opacity=20);\n}\n\n.close:hover,\n.close:focus {\n  color: #000;\n  text-decoration: none;\n  cursor: pointer;\n  opacity: 0.5;\n  filter: alpha(opacity=50);\n}\n\nbutton.close {\n  padding: 0;\n  cursor: pointer;\n  background: transparent;\n  border: 0;\n  -webkit-appearance: none;\n}\n\n.modal-open {\n  overflow: hidden;\n}\n\n.modal {\n  display: none;\n  overflow: hidden;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1050;\n  -webkit-overflow-scrolling: touch;\n  outline: 0;\n}\n\n.modal.fade .modal-dialog {\n  -webkit-transform: translate(0, -25%);\n  -ms-transform: translate(0, -25%);\n  -o-transform: translate(0, -25%);\n  transform: translate(0, -25%);\n  -webkit-transition: -webkit-transform 0.3s ease-out;\n  -moz-transition: -moz-transform 0.3s ease-out;\n  -o-transition: -o-transform 0.3s ease-out;\n  transition: transform 0.3s ease-out;\n}\n\n.modal.in .modal-dialog {\n  -webkit-transform: translate(0, 0);\n  -ms-transform: translate(0, 0);\n  -o-transform: translate(0, 0);\n  transform: translate(0, 0);\n}\n\n.modal-open .modal {\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n\n.modal-dialog {\n  position: relative;\n  width: auto;\n  margin: 10px;\n}\n\n.modal-content {\n  position: relative;\n  background-color: #fff;\n  border: 1px solid #999;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 6px;\n  -webkit-box-shadow: 0 3px 9px rgba(0, 0, 0, 0.5);\n  box-shadow: 0 3px 9px rgba(0, 0, 0, 0.5);\n  background-clip: padding-box;\n  outline: 0;\n}\n\n.modal-backdrop {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1040;\n  background-color: #000;\n}\n\n.modal-backdrop.fade {\n  opacity: 0;\n  filter: alpha(opacity=0);\n}\n\n.modal-backdrop.in {\n  opacity: 0.5;\n  filter: alpha(opacity=50);\n}\n\n.modal-header {\n  padding: 15px;\n  border-bottom: 1px solid #e5e5e5;\n}\n\n.modal-header:before,\n.modal-header:after {\n  content: \" \";\n  display: table;\n}\n\n.modal-header:after {\n  clear: both;\n}\n\n.modal-header .close {\n  margin-top: -2px;\n}\n\n.modal-title {\n  margin: 0;\n  line-height: 1.42857;\n}\n\n.modal-body {\n  position: relative;\n  padding: 15px;\n}\n\n.modal-footer {\n  padding: 15px;\n  text-align: right;\n  border-top: 1px solid #e5e5e5;\n}\n\n.modal-footer:before,\n.modal-footer:after {\n  content: \" \";\n  display: table;\n}\n\n.modal-footer:after {\n  clear: both;\n}\n\n.modal-footer .btn + .btn {\n  margin-left: 5px;\n  margin-bottom: 0;\n}\n\n.modal-footer .btn-group .btn + .btn {\n  margin-left: -1px;\n}\n\n.modal-footer .btn-block + .btn-block {\n  margin-left: 0;\n}\n\n.modal-scrollbar-measure {\n  position: absolute;\n  top: -9999px;\n  width: 50px;\n  height: 50px;\n  overflow: scroll;\n}\n\n@media (min-width: 768px) {\n  .modal-dialog {\n    width: 600px;\n    margin: 30px auto;\n  }\n\n  .modal-content {\n    -webkit-box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);\n    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);\n  }\n\n  .modal-sm {\n    width: 300px;\n  }\n}\n\n@media (min-width: 992px) {\n  .modal-lg {\n    width: 900px;\n  }\n}\n\n.tooltip {\n  position: absolute;\n  z-index: 1070;\n  display: block;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  letter-spacing: normal;\n  line-break: auto;\n  line-height: 1.42857;\n  text-align: left;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  white-space: normal;\n  word-break: normal;\n  word-spacing: normal;\n  word-wrap: normal;\n  font-size: 12px;\n  opacity: 0;\n  filter: alpha(opacity=0);\n}\n\n.tooltip.in {\n  opacity: 0.9;\n  filter: alpha(opacity=90);\n}\n\n.tooltip.top {\n  margin-top: -3px;\n  padding: 5px 0;\n}\n\n.tooltip.right {\n  margin-left: 3px;\n  padding: 0 5px;\n}\n\n.tooltip.bottom {\n  margin-top: 3px;\n  padding: 5px 0;\n}\n\n.tooltip.left {\n  margin-left: -3px;\n  padding: 0 5px;\n}\n\n.tooltip-inner {\n  max-width: 200px;\n  padding: 3px 8px;\n  color: #fff;\n  text-align: center;\n  background-color: #000;\n  border-radius: 4px;\n}\n\n.tooltip-arrow {\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-color: transparent;\n  border-style: solid;\n}\n\n.tooltip.top .tooltip-arrow {\n  bottom: 0;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 5px 5px 0;\n  border-top-color: #000;\n}\n\n.tooltip.top-left .tooltip-arrow {\n  bottom: 0;\n  right: 5px;\n  margin-bottom: -5px;\n  border-width: 5px 5px 0;\n  border-top-color: #000;\n}\n\n.tooltip.top-right .tooltip-arrow {\n  bottom: 0;\n  left: 5px;\n  margin-bottom: -5px;\n  border-width: 5px 5px 0;\n  border-top-color: #000;\n}\n\n.tooltip.right .tooltip-arrow {\n  top: 50%;\n  left: 0;\n  margin-top: -5px;\n  border-width: 5px 5px 5px 0;\n  border-right-color: #000;\n}\n\n.tooltip.left .tooltip-arrow {\n  top: 50%;\n  right: 0;\n  margin-top: -5px;\n  border-width: 5px 0 5px 5px;\n  border-left-color: #000;\n}\n\n.tooltip.bottom .tooltip-arrow {\n  top: 0;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 0 5px 5px;\n  border-bottom-color: #000;\n}\n\n.tooltip.bottom-left .tooltip-arrow {\n  top: 0;\n  right: 5px;\n  margin-top: -5px;\n  border-width: 0 5px 5px;\n  border-bottom-color: #000;\n}\n\n.tooltip.bottom-right .tooltip-arrow {\n  top: 0;\n  left: 5px;\n  margin-top: -5px;\n  border-width: 0 5px 5px;\n  border-bottom-color: #000;\n}\n\n.popover {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1060;\n  display: none;\n  max-width: 276px;\n  padding: 1px;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  letter-spacing: normal;\n  line-break: auto;\n  line-height: 1.42857;\n  text-align: left;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  white-space: normal;\n  word-break: normal;\n  word-spacing: normal;\n  word-wrap: normal;\n  font-size: 14px;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid #ccc;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 6px;\n  -webkit-box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);\n  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);\n}\n\n.popover.top {\n  margin-top: -10px;\n}\n\n.popover.right {\n  margin-left: 10px;\n}\n\n.popover.bottom {\n  margin-top: 10px;\n}\n\n.popover.left {\n  margin-left: -10px;\n}\n\n.popover-title {\n  margin: 0;\n  padding: 8px 14px;\n  font-size: 14px;\n  background-color: #f7f7f7;\n  border-bottom: 1px solid #ebebeb;\n  border-radius: 5px 5px 0 0;\n}\n\n.popover-content {\n  padding: 9px 14px;\n}\n\n.popover > .arrow,\n.popover > .arrow:after {\n  position: absolute;\n  display: block;\n  width: 0;\n  height: 0;\n  border-color: transparent;\n  border-style: solid;\n}\n\n.popover > .arrow {\n  border-width: 11px;\n}\n\n.popover > .arrow:after {\n  border-width: 10px;\n  content: \"\";\n}\n\n.popover.top > .arrow {\n  left: 50%;\n  margin-left: -11px;\n  border-bottom-width: 0;\n  border-top-color: #999999;\n  border-top-color: rgba(0, 0, 0, 0.25);\n  bottom: -11px;\n}\n\n.popover.top > .arrow:after {\n  content: \" \";\n  bottom: 1px;\n  margin-left: -10px;\n  border-bottom-width: 0;\n  border-top-color: #fff;\n}\n\n.popover.right > .arrow {\n  top: 50%;\n  left: -11px;\n  margin-top: -11px;\n  border-left-width: 0;\n  border-right-color: #999999;\n  border-right-color: rgba(0, 0, 0, 0.25);\n}\n\n.popover.right > .arrow:after {\n  content: \" \";\n  left: 1px;\n  bottom: -10px;\n  border-left-width: 0;\n  border-right-color: #fff;\n}\n\n.popover.bottom > .arrow {\n  left: 50%;\n  margin-left: -11px;\n  border-top-width: 0;\n  border-bottom-color: #999999;\n  border-bottom-color: rgba(0, 0, 0, 0.25);\n  top: -11px;\n}\n\n.popover.bottom > .arrow:after {\n  content: \" \";\n  top: 1px;\n  margin-left: -10px;\n  border-top-width: 0;\n  border-bottom-color: #fff;\n}\n\n.popover.left > .arrow {\n  top: 50%;\n  right: -11px;\n  margin-top: -11px;\n  border-right-width: 0;\n  border-left-color: #999999;\n  border-left-color: rgba(0, 0, 0, 0.25);\n}\n\n.popover.left > .arrow:after {\n  content: \" \";\n  right: 1px;\n  border-right-width: 0;\n  border-left-color: #fff;\n  bottom: -10px;\n}\n\n.carousel {\n  position: relative;\n}\n\n.carousel-inner {\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n}\n\n.carousel-inner > .item {\n  display: none;\n  position: relative;\n  -webkit-transition: 0.6s ease-in-out left;\n  -o-transition: 0.6s ease-in-out left;\n  transition: 0.6s ease-in-out left;\n}\n\n.carousel-inner > .item > img,\n.carousel-inner > .item > a > img {\n  display: block;\n  max-width: 100%;\n  height: auto;\n  line-height: 1;\n}\n\n@media all and (transform-3d), (-webkit-transform-3d) {\n  .carousel-inner > .item {\n    -webkit-transition: -webkit-transform 0.6s ease-in-out;\n    -moz-transition: -moz-transform 0.6s ease-in-out;\n    -o-transition: -o-transform 0.6s ease-in-out;\n    transition: transform 0.6s ease-in-out;\n    -webkit-backface-visibility: hidden;\n    -moz-backface-visibility: hidden;\n    backface-visibility: hidden;\n    -webkit-perspective: 1000px;\n    -moz-perspective: 1000px;\n    perspective: 1000px;\n  }\n\n  .carousel-inner > .item.next,\n  .carousel-inner > .item.active.right {\n    -webkit-transform: translate3d(100%, 0, 0);\n    transform: translate3d(100%, 0, 0);\n    left: 0;\n  }\n\n  .carousel-inner > .item.prev,\n  .carousel-inner > .item.active.left {\n    -webkit-transform: translate3d(-100%, 0, 0);\n    transform: translate3d(-100%, 0, 0);\n    left: 0;\n  }\n\n  .carousel-inner > .item.next.left,\n  .carousel-inner > .item.prev.right,\n  .carousel-inner > .item.active {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n    left: 0;\n  }\n}\n\n.carousel-inner > .active,\n.carousel-inner > .next,\n.carousel-inner > .prev {\n  display: block;\n}\n\n.carousel-inner > .active {\n  left: 0;\n}\n\n.carousel-inner > .next,\n.carousel-inner > .prev {\n  position: absolute;\n  top: 0;\n  width: 100%;\n}\n\n.carousel-inner > .next {\n  left: 100%;\n}\n\n.carousel-inner > .prev {\n  left: -100%;\n}\n\n.carousel-inner > .next.left,\n.carousel-inner > .prev.right {\n  left: 0;\n}\n\n.carousel-inner > .active.left {\n  left: -100%;\n}\n\n.carousel-inner > .active.right {\n  left: 100%;\n}\n\n.carousel-control {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  width: 15%;\n  opacity: 0.5;\n  filter: alpha(opacity=50);\n  font-size: 20px;\n  color: #fff;\n  text-align: center;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);\n  background-color: transparent;\n}\n\n.carousel-control.left {\n  background-image: -webkit-linear-gradient(left, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.0001) 100%);\n  background-image: -o-linear-gradient(left, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.0001) 100%);\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.0001) 100%);\n  background-repeat: repeat-x;\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#80000000', endColorstr='#00000000', GradientType=1);\n}\n\n.carousel-control.right {\n  left: auto;\n  right: 0;\n  background-image: -webkit-linear-gradient(left, rgba(0, 0, 0, 0.0001) 0%, rgba(0, 0, 0, 0.5) 100%);\n  background-image: -o-linear-gradient(left, rgba(0, 0, 0, 0.0001) 0%, rgba(0, 0, 0, 0.5) 100%);\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.0001) 0%, rgba(0, 0, 0, 0.5) 100%);\n  background-repeat: repeat-x;\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00000000', endColorstr='#80000000', GradientType=1);\n}\n\n.carousel-control:hover,\n.carousel-control:focus {\n  outline: 0;\n  color: #fff;\n  text-decoration: none;\n  opacity: 0.9;\n  filter: alpha(opacity=90);\n}\n\n.carousel-control .icon-prev,\n.carousel-control .icon-next,\n.carousel-control .glyphicon-chevron-left,\n.carousel-control .glyphicon-chevron-right {\n  position: absolute;\n  top: 50%;\n  margin-top: -10px;\n  z-index: 5;\n  display: inline-block;\n}\n\n.carousel-control .icon-prev,\n.carousel-control .glyphicon-chevron-left {\n  left: 50%;\n  margin-left: -10px;\n}\n\n.carousel-control .icon-next,\n.carousel-control .glyphicon-chevron-right {\n  right: 50%;\n  margin-right: -10px;\n}\n\n.carousel-control .icon-prev,\n.carousel-control .icon-next {\n  width: 20px;\n  height: 20px;\n  line-height: 1;\n  font-family: serif;\n}\n\n.carousel-control .icon-prev:before {\n  content: '\\2039';\n}\n\n.carousel-control .icon-next:before {\n  content: '\\203A';\n}\n\n.carousel-indicators {\n  position: absolute;\n  bottom: 10px;\n  left: 50%;\n  z-index: 15;\n  width: 60%;\n  margin-left: -30%;\n  padding-left: 0;\n  list-style: none;\n  text-align: center;\n}\n\n.carousel-indicators li {\n  display: inline-block;\n  width: 10px;\n  height: 10px;\n  margin: 1px;\n  text-indent: -999px;\n  border: 1px solid #fff;\n  border-radius: 10px;\n  cursor: pointer;\n  background-color: #000 \\9;\n  background-color: transparent;\n}\n\n.carousel-indicators .active {\n  margin: 0;\n  width: 12px;\n  height: 12px;\n  background-color: #fff;\n}\n\n.carousel-caption {\n  position: absolute;\n  left: 15%;\n  right: 15%;\n  bottom: 20px;\n  z-index: 10;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  color: #fff;\n  text-align: center;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);\n}\n\n.carousel-caption .btn {\n  text-shadow: none;\n}\n\n@media screen and (min-width: 768px) {\n  .carousel-control .glyphicon-chevron-left,\n  .carousel-control .glyphicon-chevron-right,\n  .carousel-control .icon-prev,\n  .carousel-control .icon-next {\n    width: 30px;\n    height: 30px;\n    margin-top: -10px;\n    font-size: 30px;\n  }\n\n  .carousel-control .glyphicon-chevron-left,\n  .carousel-control .icon-prev {\n    margin-left: -10px;\n  }\n\n  .carousel-control .glyphicon-chevron-right,\n  .carousel-control .icon-next {\n    margin-right: -10px;\n  }\n\n  .carousel-caption {\n    left: 20%;\n    right: 20%;\n    padding-bottom: 30px;\n  }\n\n  .carousel-indicators {\n    bottom: 20px;\n  }\n}\n\n.clearfix:before,\n.clearfix:after {\n  content: \" \";\n  display: table;\n}\n\n.clearfix:after {\n  clear: both;\n}\n\n.center-block {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.pull-right {\n  float: right !important;\n}\n\n.pull-left {\n  float: left !important;\n}\n\n.hide {\n  display: none !important;\n}\n\n.show {\n  display: block !important;\n}\n\n.invisible {\n  visibility: hidden;\n}\n\n.text-hide {\n  font: 0/0 a;\n  color: transparent;\n  text-shadow: none;\n  background-color: transparent;\n  border: 0;\n}\n\n.hidden {\n  display: none !important;\n}\n\n.affix {\n  position: fixed;\n}\n\n@-ms-viewport {\n  width: device-width;\n}\n\n.visible-xs {\n  display: none !important;\n}\n\n.visible-sm {\n  display: none !important;\n}\n\n.visible-md {\n  display: none !important;\n}\n\n.visible-lg {\n  display: none !important;\n}\n\n.visible-xs-block,\n.visible-xs-inline,\n.visible-xs-inline-block,\n.visible-sm-block,\n.visible-sm-inline,\n.visible-sm-inline-block,\n.visible-md-block,\n.visible-md-inline,\n.visible-md-inline-block,\n.visible-lg-block,\n.visible-lg-inline,\n.visible-lg-inline-block {\n  display: none !important;\n}\n\n@media (max-width: 767px) {\n  .visible-xs {\n    display: block !important;\n  }\n\n  table.visible-xs {\n    display: table !important;\n  }\n\n  tr.visible-xs {\n    display: table-row !important;\n  }\n\n  th.visible-xs,\n  td.visible-xs {\n    display: table-cell !important;\n  }\n}\n\n@media (max-width: 767px) {\n  .visible-xs-block {\n    display: block !important;\n  }\n}\n\n@media (max-width: 767px) {\n  .visible-xs-inline {\n    display: inline !important;\n  }\n}\n\n@media (max-width: 767px) {\n  .visible-xs-inline-block {\n    display: inline-block !important;\n  }\n}\n\n@media (min-width: 768px) and (max-width: 991px) {\n  .visible-sm {\n    display: block !important;\n  }\n\n  table.visible-sm {\n    display: table !important;\n  }\n\n  tr.visible-sm {\n    display: table-row !important;\n  }\n\n  th.visible-sm,\n  td.visible-sm {\n    display: table-cell !important;\n  }\n}\n\n@media (min-width: 768px) and (max-width: 991px) {\n  .visible-sm-block {\n    display: block !important;\n  }\n}\n\n@media (min-width: 768px) and (max-width: 991px) {\n  .visible-sm-inline {\n    display: inline !important;\n  }\n}\n\n@media (min-width: 768px) and (max-width: 991px) {\n  .visible-sm-inline-block {\n    display: inline-block !important;\n  }\n}\n\n@media (min-width: 992px) and (max-width: 1199px) {\n  .visible-md {\n    display: block !important;\n  }\n\n  table.visible-md {\n    display: table !important;\n  }\n\n  tr.visible-md {\n    display: table-row !important;\n  }\n\n  th.visible-md,\n  td.visible-md {\n    display: table-cell !important;\n  }\n}\n\n@media (min-width: 992px) and (max-width: 1199px) {\n  .visible-md-block {\n    display: block !important;\n  }\n}\n\n@media (min-width: 992px) and (max-width: 1199px) {\n  .visible-md-inline {\n    display: inline !important;\n  }\n}\n\n@media (min-width: 992px) and (max-width: 1199px) {\n  .visible-md-inline-block {\n    display: inline-block !important;\n  }\n}\n\n@media (min-width: 1200px) {\n  .visible-lg {\n    display: block !important;\n  }\n\n  table.visible-lg {\n    display: table !important;\n  }\n\n  tr.visible-lg {\n    display: table-row !important;\n  }\n\n  th.visible-lg,\n  td.visible-lg {\n    display: table-cell !important;\n  }\n}\n\n@media (min-width: 1200px) {\n  .visible-lg-block {\n    display: block !important;\n  }\n}\n\n@media (min-width: 1200px) {\n  .visible-lg-inline {\n    display: inline !important;\n  }\n}\n\n@media (min-width: 1200px) {\n  .visible-lg-inline-block {\n    display: inline-block !important;\n  }\n}\n\n@media (max-width: 767px) {\n  .hidden-xs {\n    display: none !important;\n  }\n}\n\n@media (min-width: 768px) and (max-width: 991px) {\n  .hidden-sm {\n    display: none !important;\n  }\n}\n\n@media (min-width: 992px) and (max-width: 1199px) {\n  .hidden-md {\n    display: none !important;\n  }\n}\n\n@media (min-width: 1200px) {\n  .hidden-lg {\n    display: none !important;\n  }\n}\n\n.visible-print {\n  display: none !important;\n}\n\n@media print {\n  .visible-print {\n    display: block !important;\n  }\n\n  table.visible-print {\n    display: table !important;\n  }\n\n  tr.visible-print {\n    display: table-row !important;\n  }\n\n  th.visible-print,\n  td.visible-print {\n    display: table-cell !important;\n  }\n}\n\n.visible-print-block {\n  display: none !important;\n}\n\n@media print {\n  .visible-print-block {\n    display: block !important;\n  }\n}\n\n.visible-print-inline {\n  display: none !important;\n}\n\n@media print {\n  .visible-print-inline {\n    display: inline !important;\n  }\n}\n\n.visible-print-inline-block {\n  display: none !important;\n}\n\n@media print {\n  .visible-print-inline-block {\n    display: inline-block !important;\n  }\n}\n\n@media print {\n  .hidden-print {\n    display: none !important;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL1VzZXJzL3Jvc3MvRG9jdW1lbnRzL3Byb2plY3RzLXJvc3Mvcm9zc2dhbGxlZ28uZ2l0aHViLmlvL25vZGVfbW9kdWxlcy9ib290c3RyYXAtbG9hZGVyL25vLW9wLmpzIiwic291cmNlcyI6WyIvVXNlcnMvcm9zcy9Eb2N1bWVudHMvcHJvamVjdHMtcm9zcy9yb3NzZ2FsbGVnby5naXRodWIuaW8vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC1sb2FkZXIvbm8tb3AuanMiLCIvVXNlcnMvcm9zcy9Eb2N1bWVudHMvcHJvamVjdHMtcm9zcy9yb3NzZ2FsbGVnby5naXRodWIuaW8vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvX21peGlucy5zY3NzIiwiL1VzZXJzL3Jvc3MvRG9jdW1lbnRzL3Byb2plY3RzLXJvc3Mvcm9zc2dhbGxlZ28uZ2l0aHViLmlvL25vZGVfbW9kdWxlcy9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL21peGlucy9faGlkZS10ZXh0LnNjc3MiLCIvVXNlcnMvcm9zcy9Eb2N1bWVudHMvcHJvamVjdHMtcm9zcy9yb3NzZ2FsbGVnby5naXRodWIuaW8vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvbWl4aW5zL19vcGFjaXR5LnNjc3MiLCIvVXNlcnMvcm9zcy9Eb2N1bWVudHMvcHJvamVjdHMtcm9zcy9yb3NzZ2FsbGVnby5naXRodWIuaW8vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvbWl4aW5zL19pbWFnZS5zY3NzIiwiL1VzZXJzL3Jvc3MvRG9jdW1lbnRzL3Byb2plY3RzLXJvc3Mvcm9zc2dhbGxlZ28uZ2l0aHViLmlvL25vZGVfbW9kdWxlcy9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL21peGlucy9fbGFiZWxzLnNjc3MiLCIvVXNlcnMvcm9zcy9Eb2N1bWVudHMvcHJvamVjdHMtcm9zcy9yb3NzZ2FsbGVnby5naXRodWIuaW8vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvbWl4aW5zL19yZXNldC1maWx0ZXIuc2NzcyIsIi9Vc2Vycy9yb3NzL0RvY3VtZW50cy9wcm9qZWN0cy1yb3NzL3Jvc3NnYWxsZWdvLmdpdGh1Yi5pby9ub2RlX21vZHVsZXMvYm9vdHN0cmFwLXNhc3MvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9taXhpbnMvX3Jlc2l6ZS5zY3NzIiwiL1VzZXJzL3Jvc3MvRG9jdW1lbnRzL3Byb2plY3RzLXJvc3Mvcm9zc2dhbGxlZ28uZ2l0aHViLmlvL25vZGVfbW9kdWxlcy9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL21peGlucy9fcmVzcG9uc2l2ZS12aXNpYmlsaXR5LnNjc3MiLCIvVXNlcnMvcm9zcy9Eb2N1bWVudHMvcHJvamVjdHMtcm9zcy9yb3NzZ2FsbGVnby5naXRodWIuaW8vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvbWl4aW5zL19zaXplLnNjc3MiLCIvVXNlcnMvcm9zcy9Eb2N1bWVudHMvcHJvamVjdHMtcm9zcy9yb3NzZ2FsbGVnby5naXRodWIuaW8vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvbWl4aW5zL190YWItZm9jdXMuc2NzcyIsIi9Vc2Vycy9yb3NzL0RvY3VtZW50cy9wcm9qZWN0cy1yb3NzL3Jvc3NnYWxsZWdvLmdpdGh1Yi5pby9ub2RlX21vZHVsZXMvYm9vdHN0cmFwLXNhc3MvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9taXhpbnMvX3Jlc2V0LXRleHQuc2NzcyIsIi9Vc2Vycy9yb3NzL0RvY3VtZW50cy9wcm9qZWN0cy1yb3NzL3Jvc3NnYWxsZWdvLmdpdGh1Yi5pby9ub2RlX21vZHVsZXMvYm9vdHN0cmFwLXNhc3MvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9taXhpbnMvX3RleHQtZW1waGFzaXMuc2NzcyIsIi9Vc2Vycy9yb3NzL0RvY3VtZW50cy9wcm9qZWN0cy1yb3NzL3Jvc3NnYWxsZWdvLmdpdGh1Yi5pby9ub2RlX21vZHVsZXMvYm9vdHN0cmFwLXNhc3MvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9taXhpbnMvX3RleHQtb3ZlcmZsb3cuc2NzcyIsIi9Vc2Vycy9yb3NzL0RvY3VtZW50cy9wcm9qZWN0cy1yb3NzL3Jvc3NnYWxsZWdvLmdpdGh1Yi5pby9ub2RlX21vZHVsZXMvYm9vdHN0cmFwLXNhc3MvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9taXhpbnMvX3ZlbmRvci1wcmVmaXhlcy5zY3NzIiwiL1VzZXJzL3Jvc3MvRG9jdW1lbnRzL3Byb2plY3RzLXJvc3Mvcm9zc2dhbGxlZ28uZ2l0aHViLmlvL25vZGVfbW9kdWxlcy9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL21peGlucy9fYWxlcnRzLnNjc3MiLCIvVXNlcnMvcm9zcy9Eb2N1bWVudHMvcHJvamVjdHMtcm9zcy9yb3NzZ2FsbGVnby5naXRodWIuaW8vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvbWl4aW5zL19idXR0b25zLnNjc3MiLCIvVXNlcnMvcm9zcy9Eb2N1bWVudHMvcHJvamVjdHMtcm9zcy9yb3NzZ2FsbGVnby5naXRodWIuaW8vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvbWl4aW5zL19wYW5lbHMuc2NzcyIsIi9Vc2Vycy9yb3NzL0RvY3VtZW50cy9wcm9qZWN0cy1yb3NzL3Jvc3NnYWxsZWdvLmdpdGh1Yi5pby9ub2RlX21vZHVsZXMvYm9vdHN0cmFwLXNhc3MvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9taXhpbnMvX3BhZ2luYXRpb24uc2NzcyIsIi9Vc2Vycy9yb3NzL0RvY3VtZW50cy9wcm9qZWN0cy1yb3NzL3Jvc3NnYWxsZWdvLmdpdGh1Yi5pby9ub2RlX21vZHVsZXMvYm9vdHN0cmFwLXNhc3MvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9taXhpbnMvX2xpc3QtZ3JvdXAuc2NzcyIsIi9Vc2Vycy9yb3NzL0RvY3VtZW50cy9wcm9qZWN0cy1yb3NzL3Jvc3NnYWxsZWdvLmdpdGh1Yi5pby9ub2RlX21vZHVsZXMvYm9vdHN0cmFwLXNhc3MvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9taXhpbnMvX25hdi1kaXZpZGVyLnNjc3MiLCIvVXNlcnMvcm9zcy9Eb2N1bWVudHMvcHJvamVjdHMtcm9zcy9yb3NzZ2FsbGVnby5naXRodWIuaW8vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvbWl4aW5zL19mb3Jtcy5zY3NzIiwiL1VzZXJzL3Jvc3MvRG9jdW1lbnRzL3Byb2plY3RzLXJvc3Mvcm9zc2dhbGxlZ28uZ2l0aHViLmlvL25vZGVfbW9kdWxlcy9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL21peGlucy9fcHJvZ3Jlc3MtYmFyLnNjc3MiLCIvVXNlcnMvcm9zcy9Eb2N1bWVudHMvcHJvamVjdHMtcm9zcy9yb3NzZ2FsbGVnby5naXRodWIuaW8vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvbWl4aW5zL190YWJsZS1yb3cuc2NzcyIsIi9Vc2Vycy9yb3NzL0RvY3VtZW50cy9wcm9qZWN0cy1yb3NzL3Jvc3NnYWxsZWdvLmdpdGh1Yi5pby9ub2RlX21vZHVsZXMvYm9vdHN0cmFwLXNhc3MvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9taXhpbnMvX2JhY2tncm91bmQtdmFyaWFudC5zY3NzIiwiL1VzZXJzL3Jvc3MvRG9jdW1lbnRzL3Byb2plY3RzLXJvc3Mvcm9zc2dhbGxlZ28uZ2l0aHViLmlvL25vZGVfbW9kdWxlcy9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL21peGlucy9fYm9yZGVyLXJhZGl1cy5zY3NzIiwiL1VzZXJzL3Jvc3MvRG9jdW1lbnRzL3Byb2plY3RzLXJvc3Mvcm9zc2dhbGxlZ28uZ2l0aHViLmlvL25vZGVfbW9kdWxlcy9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL21peGlucy9fZ3JhZGllbnRzLnNjc3MiLCIvVXNlcnMvcm9zcy9Eb2N1bWVudHMvcHJvamVjdHMtcm9zcy9yb3NzZ2FsbGVnby5naXRodWIuaW8vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvbWl4aW5zL19jbGVhcmZpeC5zY3NzIiwiL1VzZXJzL3Jvc3MvRG9jdW1lbnRzL3Byb2plY3RzLXJvc3Mvcm9zc2dhbGxlZ28uZ2l0aHViLmlvL25vZGVfbW9kdWxlcy9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL21peGlucy9fY2VudGVyLWJsb2NrLnNjc3MiLCIvVXNlcnMvcm9zcy9Eb2N1bWVudHMvcHJvamVjdHMtcm9zcy9yb3NzZ2FsbGVnby5naXRodWIuaW8vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvbWl4aW5zL19uYXYtdmVydGljYWwtYWxpZ24uc2NzcyIsIi9Vc2Vycy9yb3NzL0RvY3VtZW50cy9wcm9qZWN0cy1yb3NzL3Jvc3NnYWxsZWdvLmdpdGh1Yi5pby9ub2RlX21vZHVsZXMvYm9vdHN0cmFwLXNhc3MvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9taXhpbnMvX2dyaWQtZnJhbWV3b3JrLnNjc3MiLCIvVXNlcnMvcm9zcy9Eb2N1bWVudHMvcHJvamVjdHMtcm9zcy9yb3NzZ2FsbGVnby5naXRodWIuaW8vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvbWl4aW5zL19ncmlkLnNjc3MiLCIvVXNlcnMvcm9zcy9Eb2N1bWVudHMvcHJvamVjdHMtcm9zcy9yb3NzZ2FsbGVnby5naXRodWIuaW8vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvX3ZhcmlhYmxlcy5zY3NzIiwiL1VzZXJzL3Jvc3MvRG9jdW1lbnRzL3Byb2plY3RzLXJvc3Mvcm9zc2dhbGxlZ28uZ2l0aHViLmlvL25vZGVfbW9kdWxlcy9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL19ub3JtYWxpemUuc2NzcyIsIi9Vc2Vycy9yb3NzL0RvY3VtZW50cy9wcm9qZWN0cy1yb3NzL3Jvc3NnYWxsZWdvLmdpdGh1Yi5pby9ub2RlX21vZHVsZXMvYm9vdHN0cmFwLXNhc3MvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9fcHJpbnQuc2NzcyIsIi9Vc2Vycy9yb3NzL0RvY3VtZW50cy9wcm9qZWN0cy1yb3NzL3Jvc3NnYWxsZWdvLmdpdGh1Yi5pby9ub2RlX21vZHVsZXMvYm9vdHN0cmFwLXNhc3MvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9fc2NhZmZvbGRpbmcuc2NzcyIsIi9Vc2Vycy9yb3NzL0RvY3VtZW50cy9wcm9qZWN0cy1yb3NzL3Jvc3NnYWxsZWdvLmdpdGh1Yi5pby9ub2RlX21vZHVsZXMvYm9vdHN0cmFwLXNhc3MvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9fdHlwZS5zY3NzIiwiL1VzZXJzL3Jvc3MvRG9jdW1lbnRzL3Byb2plY3RzLXJvc3Mvcm9zc2dhbGxlZ28uZ2l0aHViLmlvL25vZGVfbW9kdWxlcy9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL19jb2RlLnNjc3MiLCIvVXNlcnMvcm9zcy9Eb2N1bWVudHMvcHJvamVjdHMtcm9zcy9yb3NzZ2FsbGVnby5naXRodWIuaW8vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvX2dyaWQuc2NzcyIsIi9Vc2Vycy9yb3NzL0RvY3VtZW50cy9wcm9qZWN0cy1yb3NzL3Jvc3NnYWxsZWdvLmdpdGh1Yi5pby9ub2RlX21vZHVsZXMvYm9vdHN0cmFwLXNhc3MvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9fdGFibGVzLnNjc3MiLCIvVXNlcnMvcm9zcy9Eb2N1bWVudHMvcHJvamVjdHMtcm9zcy9yb3NzZ2FsbGVnby5naXRodWIuaW8vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvX2Zvcm1zLnNjc3MiLCIvVXNlcnMvcm9zcy9Eb2N1bWVudHMvcHJvamVjdHMtcm9zcy9yb3NzZ2FsbGVnby5naXRodWIuaW8vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvX2J1dHRvbnMuc2NzcyIsIi9Vc2Vycy9yb3NzL0RvY3VtZW50cy9wcm9qZWN0cy1yb3NzL3Jvc3NnYWxsZWdvLmdpdGh1Yi5pby9ub2RlX21vZHVsZXMvYm9vdHN0cmFwLXNhc3MvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9fY29tcG9uZW50LWFuaW1hdGlvbnMuc2NzcyIsIi9Vc2Vycy9yb3NzL0RvY3VtZW50cy9wcm9qZWN0cy1yb3NzL3Jvc3NnYWxsZWdvLmdpdGh1Yi5pby9ub2RlX21vZHVsZXMvYm9vdHN0cmFwLXNhc3MvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9fZHJvcGRvd25zLnNjc3MiLCIvVXNlcnMvcm9zcy9Eb2N1bWVudHMvcHJvamVjdHMtcm9zcy9yb3NzZ2FsbGVnby5naXRodWIuaW8vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvX2J1dHRvbi1ncm91cHMuc2NzcyIsIi9Vc2Vycy9yb3NzL0RvY3VtZW50cy9wcm9qZWN0cy1yb3NzL3Jvc3NnYWxsZWdvLmdpdGh1Yi5pby9ub2RlX21vZHVsZXMvYm9vdHN0cmFwLXNhc3MvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9faW5wdXQtZ3JvdXBzLnNjc3MiLCIvVXNlcnMvcm9zcy9Eb2N1bWVudHMvcHJvamVjdHMtcm9zcy9yb3NzZ2FsbGVnby5naXRodWIuaW8vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvX25hdnMuc2NzcyIsIi9Vc2Vycy9yb3NzL0RvY3VtZW50cy9wcm9qZWN0cy1yb3NzL3Jvc3NnYWxsZWdvLmdpdGh1Yi5pby9ub2RlX21vZHVsZXMvYm9vdHN0cmFwLXNhc3MvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9fbmF2YmFyLnNjc3MiLCIvVXNlcnMvcm9zcy9Eb2N1bWVudHMvcHJvamVjdHMtcm9zcy9yb3NzZ2FsbGVnby5naXRodWIuaW8vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvX2JyZWFkY3J1bWJzLnNjc3MiLCIvVXNlcnMvcm9zcy9Eb2N1bWVudHMvcHJvamVjdHMtcm9zcy9yb3NzZ2FsbGVnby5naXRodWIuaW8vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvX3BhZ2luYXRpb24uc2NzcyIsIi9Vc2Vycy9yb3NzL0RvY3VtZW50cy9wcm9qZWN0cy1yb3NzL3Jvc3NnYWxsZWdvLmdpdGh1Yi5pby9ub2RlX21vZHVsZXMvYm9vdHN0cmFwLXNhc3MvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9fcGFnZXIuc2NzcyIsIi9Vc2Vycy9yb3NzL0RvY3VtZW50cy9wcm9qZWN0cy1yb3NzL3Jvc3NnYWxsZWdvLmdpdGh1Yi5pby9ub2RlX21vZHVsZXMvYm9vdHN0cmFwLXNhc3MvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9fbGFiZWxzLnNjc3MiLCIvVXNlcnMvcm9zcy9Eb2N1bWVudHMvcHJvamVjdHMtcm9zcy9yb3NzZ2FsbGVnby5naXRodWIuaW8vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvX2JhZGdlcy5zY3NzIiwiL1VzZXJzL3Jvc3MvRG9jdW1lbnRzL3Byb2plY3RzLXJvc3Mvcm9zc2dhbGxlZ28uZ2l0aHViLmlvL25vZGVfbW9kdWxlcy9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL19qdW1ib3Ryb24uc2NzcyIsIi9Vc2Vycy9yb3NzL0RvY3VtZW50cy9wcm9qZWN0cy1yb3NzL3Jvc3NnYWxsZWdvLmdpdGh1Yi5pby9ub2RlX21vZHVsZXMvYm9vdHN0cmFwLXNhc3MvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9fdGh1bWJuYWlscy5zY3NzIiwiL1VzZXJzL3Jvc3MvRG9jdW1lbnRzL3Byb2plY3RzLXJvc3Mvcm9zc2dhbGxlZ28uZ2l0aHViLmlvL25vZGVfbW9kdWxlcy9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL19hbGVydHMuc2NzcyIsIi9Vc2Vycy9yb3NzL0RvY3VtZW50cy9wcm9qZWN0cy1yb3NzL3Jvc3NnYWxsZWdvLmdpdGh1Yi5pby9ub2RlX21vZHVsZXMvYm9vdHN0cmFwLXNhc3MvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9fcHJvZ3Jlc3MtYmFycy5zY3NzIiwiL1VzZXJzL3Jvc3MvRG9jdW1lbnRzL3Byb2plY3RzLXJvc3Mvcm9zc2dhbGxlZ28uZ2l0aHViLmlvL25vZGVfbW9kdWxlcy9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL19tZWRpYS5zY3NzIiwiL1VzZXJzL3Jvc3MvRG9jdW1lbnRzL3Byb2plY3RzLXJvc3Mvcm9zc2dhbGxlZ28uZ2l0aHViLmlvL25vZGVfbW9kdWxlcy9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL19saXN0LWdyb3VwLnNjc3MiLCIvVXNlcnMvcm9zcy9Eb2N1bWVudHMvcHJvamVjdHMtcm9zcy9yb3NzZ2FsbGVnby5naXRodWIuaW8vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvX3BhbmVscy5zY3NzIiwiL1VzZXJzL3Jvc3MvRG9jdW1lbnRzL3Byb2plY3RzLXJvc3Mvcm9zc2dhbGxlZ28uZ2l0aHViLmlvL25vZGVfbW9kdWxlcy9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL193ZWxscy5zY3NzIiwiL1VzZXJzL3Jvc3MvRG9jdW1lbnRzL3Byb2plY3RzLXJvc3Mvcm9zc2dhbGxlZ28uZ2l0aHViLmlvL25vZGVfbW9kdWxlcy9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL19yZXNwb25zaXZlLWVtYmVkLnNjc3MiLCIvVXNlcnMvcm9zcy9Eb2N1bWVudHMvcHJvamVjdHMtcm9zcy9yb3NzZ2FsbGVnby5naXRodWIuaW8vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvX2Nsb3NlLnNjc3MiLCIvVXNlcnMvcm9zcy9Eb2N1bWVudHMvcHJvamVjdHMtcm9zcy9yb3NzZ2FsbGVnby5naXRodWIuaW8vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvX21vZGFscy5zY3NzIiwiL1VzZXJzL3Jvc3MvRG9jdW1lbnRzL3Byb2plY3RzLXJvc3Mvcm9zc2dhbGxlZ28uZ2l0aHViLmlvL25vZGVfbW9kdWxlcy9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL190b29sdGlwLnNjc3MiLCIvVXNlcnMvcm9zcy9Eb2N1bWVudHMvcHJvamVjdHMtcm9zcy9yb3NzZ2FsbGVnby5naXRodWIuaW8vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvX3BvcG92ZXJzLnNjc3MiLCIvVXNlcnMvcm9zcy9Eb2N1bWVudHMvcHJvamVjdHMtcm9zcy9yb3NzZ2FsbGVnby5naXRodWIuaW8vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvX2Nhcm91c2VsLnNjc3MiLCIvVXNlcnMvcm9zcy9Eb2N1bWVudHMvcHJvamVjdHMtcm9zcy9yb3NzZ2FsbGVnby5naXRodWIuaW8vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvX3V0aWxpdGllcy5zY3NzIiwiL1VzZXJzL3Jvc3MvRG9jdW1lbnRzL3Byb2plY3RzLXJvc3Mvcm9zc2dhbGxlZ28uZ2l0aHViLmlvL25vZGVfbW9kdWxlcy9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL19yZXNwb25zaXZlLXV0aWxpdGllcy5zY3NzIl0sInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL19taXhpbnNcIjtcbkBpbXBvcnQgXCIuLi9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL192YXJpYWJsZXNcIjtcbiRpY29uLWZvbnQtcGF0aDogXCIuLi9ib290c3RyYXAtc2Fzcy9hc3NldHMvZm9udHMvYm9vdHN0cmFwL1wiO1xuQGltcG9ydCBcIi4uL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvX25vcm1hbGl6ZVwiO1xuQGltcG9ydCBcIi4uL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvX3ByaW50XCI7XG5AaW1wb3J0IFwiLi4vYm9vdHN0cmFwLXNhc3MvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9fc2NhZmZvbGRpbmdcIjtcbkBpbXBvcnQgXCIuLi9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL190eXBlXCI7XG5AaW1wb3J0IFwiLi4vYm9vdHN0cmFwLXNhc3MvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9fY29kZVwiO1xuQGltcG9ydCBcIi4uL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvX2dyaWRcIjtcbkBpbXBvcnQgXCIuLi9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL190YWJsZXNcIjtcbkBpbXBvcnQgXCIuLi9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL19mb3Jtc1wiO1xuQGltcG9ydCBcIi4uL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvX2J1dHRvbnNcIjtcbkBpbXBvcnQgXCIuLi9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL19jb21wb25lbnQtYW5pbWF0aW9uc1wiO1xuQGltcG9ydCBcIi4uL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvX2Ryb3Bkb3duc1wiO1xuQGltcG9ydCBcIi4uL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvX2J1dHRvbi1ncm91cHNcIjtcbkBpbXBvcnQgXCIuLi9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL19pbnB1dC1ncm91cHNcIjtcbkBpbXBvcnQgXCIuLi9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL19uYXZzXCI7XG5AaW1wb3J0IFwiLi4vYm9vdHN0cmFwLXNhc3MvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9fbmF2YmFyXCI7XG5AaW1wb3J0IFwiLi4vYm9vdHN0cmFwLXNhc3MvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9fYnJlYWRjcnVtYnNcIjtcbkBpbXBvcnQgXCIuLi9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL19wYWdpbmF0aW9uXCI7XG5AaW1wb3J0IFwiLi4vYm9vdHN0cmFwLXNhc3MvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9fcGFnZXJcIjtcbkBpbXBvcnQgXCIuLi9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL19sYWJlbHNcIjtcbkBpbXBvcnQgXCIuLi9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL19iYWRnZXNcIjtcbkBpbXBvcnQgXCIuLi9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL19qdW1ib3Ryb25cIjtcbkBpbXBvcnQgXCIuLi9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL190aHVtYm5haWxzXCI7XG5AaW1wb3J0IFwiLi4vYm9vdHN0cmFwLXNhc3MvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9fYWxlcnRzXCI7XG5AaW1wb3J0IFwiLi4vYm9vdHN0cmFwLXNhc3MvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9fcHJvZ3Jlc3MtYmFyc1wiO1xuQGltcG9ydCBcIi4uL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvX21lZGlhXCI7XG5AaW1wb3J0IFwiLi4vYm9vdHN0cmFwLXNhc3MvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9fbGlzdC1ncm91cFwiO1xuQGltcG9ydCBcIi4uL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvX3BhbmVsc1wiO1xuQGltcG9ydCBcIi4uL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvX3dlbGxzXCI7XG5AaW1wb3J0IFwiLi4vYm9vdHN0cmFwLXNhc3MvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9fcmVzcG9uc2l2ZS1lbWJlZFwiO1xuQGltcG9ydCBcIi4uL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvX2Nsb3NlXCI7XG5AaW1wb3J0IFwiLi4vYm9vdHN0cmFwLXNhc3MvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9fbW9kYWxzXCI7XG5AaW1wb3J0IFwiLi4vYm9vdHN0cmFwLXNhc3MvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9fdG9vbHRpcFwiO1xuQGltcG9ydCBcIi4uL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvX3BvcG92ZXJzXCI7XG5AaW1wb3J0IFwiLi4vYm9vdHN0cmFwLXNhc3MvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9fY2Fyb3VzZWxcIjtcbkBpbXBvcnQgXCIuLi9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL191dGlsaXRpZXNcIjtcbkBpbXBvcnQgXCIuLi9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL19yZXNwb25zaXZlLXV0aWxpdGllc1wiO1xuXG4iLCIvLyBNaXhpbnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIFV0aWxpdGllc1xuQGltcG9ydCBcIm1peGlucy9oaWRlLXRleHRcIjtcbkBpbXBvcnQgXCJtaXhpbnMvb3BhY2l0eVwiO1xuQGltcG9ydCBcIm1peGlucy9pbWFnZVwiO1xuQGltcG9ydCBcIm1peGlucy9sYWJlbHNcIjtcbkBpbXBvcnQgXCJtaXhpbnMvcmVzZXQtZmlsdGVyXCI7XG5AaW1wb3J0IFwibWl4aW5zL3Jlc2l6ZVwiO1xuQGltcG9ydCBcIm1peGlucy9yZXNwb25zaXZlLXZpc2liaWxpdHlcIjtcbkBpbXBvcnQgXCJtaXhpbnMvc2l6ZVwiO1xuQGltcG9ydCBcIm1peGlucy90YWItZm9jdXNcIjtcbkBpbXBvcnQgXCJtaXhpbnMvcmVzZXQtdGV4dFwiO1xuQGltcG9ydCBcIm1peGlucy90ZXh0LWVtcGhhc2lzXCI7XG5AaW1wb3J0IFwibWl4aW5zL3RleHQtb3ZlcmZsb3dcIjtcbkBpbXBvcnQgXCJtaXhpbnMvdmVuZG9yLXByZWZpeGVzXCI7XG5cbi8vIENvbXBvbmVudHNcbkBpbXBvcnQgXCJtaXhpbnMvYWxlcnRzXCI7XG5AaW1wb3J0IFwibWl4aW5zL2J1dHRvbnNcIjtcbkBpbXBvcnQgXCJtaXhpbnMvcGFuZWxzXCI7XG5AaW1wb3J0IFwibWl4aW5zL3BhZ2luYXRpb25cIjtcbkBpbXBvcnQgXCJtaXhpbnMvbGlzdC1ncm91cFwiO1xuQGltcG9ydCBcIm1peGlucy9uYXYtZGl2aWRlclwiO1xuQGltcG9ydCBcIm1peGlucy9mb3Jtc1wiO1xuQGltcG9ydCBcIm1peGlucy9wcm9ncmVzcy1iYXJcIjtcbkBpbXBvcnQgXCJtaXhpbnMvdGFibGUtcm93XCI7XG5cbi8vIFNraW5zXG5AaW1wb3J0IFwibWl4aW5zL2JhY2tncm91bmQtdmFyaWFudFwiO1xuQGltcG9ydCBcIm1peGlucy9ib3JkZXItcmFkaXVzXCI7XG5AaW1wb3J0IFwibWl4aW5zL2dyYWRpZW50c1wiO1xuXG4vLyBMYXlvdXRcbkBpbXBvcnQgXCJtaXhpbnMvY2xlYXJmaXhcIjtcbkBpbXBvcnQgXCJtaXhpbnMvY2VudGVyLWJsb2NrXCI7XG5AaW1wb3J0IFwibWl4aW5zL25hdi12ZXJ0aWNhbC1hbGlnblwiO1xuQGltcG9ydCBcIm1peGlucy9ncmlkLWZyYW1ld29ya1wiO1xuQGltcG9ydCBcIm1peGlucy9ncmlkXCI7XG4iLCIvLyBDU1MgaW1hZ2UgcmVwbGFjZW1lbnRcbi8vXG4vLyBIZWFkcyB1cCEgdjMgbGF1bmNoZWQgd2l0aCBvbmx5IGAuaGlkZS10ZXh0KClgLCBidXQgcGVyIG91ciBwYXR0ZXJuIGZvclxuLy8gbWl4aW5zIGJlaW5nIHJldXNlZCBhcyBjbGFzc2VzIHdpdGggdGhlIHNhbWUgbmFtZSwgdGhpcyBkb2Vzbid0IGhvbGQgdXAuIEFzXG4vLyBvZiB2My4wLjEgd2UgaGF2ZSBhZGRlZCBgLnRleHQtaGlkZSgpYCBhbmQgZGVwcmVjYXRlZCBgLmhpZGUtdGV4dCgpYC5cbi8vXG4vLyBTb3VyY2U6IGh0dHBzOi8vZ2l0aHViLmNvbS9oNWJwL2h0bWw1LWJvaWxlcnBsYXRlL2NvbW1pdC9hYTAzOTZlYWU3NTdcblxuLy8gRGVwcmVjYXRlZCBhcyBvZiB2My4wLjEgKGhhcyBiZWVuIHJlbW92ZWQgaW4gdjQpXG5AbWl4aW4gaGlkZS10ZXh0KCkge1xuICBmb250OiAwLzAgYTtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xuICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMDtcbn1cblxuLy8gTmV3IG1peGluIHRvIHVzZSBhcyBvZiB2My4wLjFcbkBtaXhpbiB0ZXh0LWhpZGUoKSB7XG4gIEBpbmNsdWRlIGhpZGUtdGV4dDtcbn1cbiIsIi8vIE9wYWNpdHlcblxuQG1peGluIG9wYWNpdHkoJG9wYWNpdHkpIHtcbiAgb3BhY2l0eTogJG9wYWNpdHk7XG4gIC8vIElFOCBmaWx0ZXJcbiAgJG9wYWNpdHktaWU6ICgkb3BhY2l0eSAqIDEwMCk7XG4gIGZpbHRlcjogYWxwaGEob3BhY2l0eT0kb3BhY2l0eS1pZSk7XG59XG4iLCIvLyBJbWFnZSBNaXhpbnNcbi8vIC0gUmVzcG9uc2l2ZSBpbWFnZVxuLy8gLSBSZXRpbmEgaW1hZ2VcblxuXG4vLyBSZXNwb25zaXZlIGltYWdlXG4vL1xuLy8gS2VlcCBpbWFnZXMgZnJvbSBzY2FsaW5nIGJleW9uZCB0aGUgd2lkdGggb2YgdGhlaXIgcGFyZW50cy5cbkBtaXhpbiBpbWctcmVzcG9uc2l2ZSgkZGlzcGxheTogYmxvY2spIHtcbiAgZGlzcGxheTogJGRpc3BsYXk7XG4gIG1heC13aWR0aDogMTAwJTsgLy8gUGFydCAxOiBTZXQgYSBtYXhpbXVtIHJlbGF0aXZlIHRvIHRoZSBwYXJlbnRcbiAgaGVpZ2h0OiBhdXRvOyAvLyBQYXJ0IDI6IFNjYWxlIHRoZSBoZWlnaHQgYWNjb3JkaW5nIHRvIHRoZSB3aWR0aCwgb3RoZXJ3aXNlIHlvdSBnZXQgc3RyZXRjaGluZ1xufVxuXG5cbi8vIFJldGluYSBpbWFnZVxuLy9cbi8vIFNob3J0IHJldGluYSBtaXhpbiBmb3Igc2V0dGluZyBiYWNrZ3JvdW5kLWltYWdlIGFuZCAtc2l6ZS4gTm90ZSB0aGF0IHRoZVxuLy8gc3BlbGxpbmcgb2YgYG1pbi0tbW96LWRldmljZS1waXhlbC1yYXRpb2AgaXMgaW50ZW50aW9uYWwuXG5AbWl4aW4gaW1nLXJldGluYSgkZmlsZS0xeCwgJGZpbGUtMngsICR3aWR0aC0xeCwgJGhlaWdodC0xeCkge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaWYoJGJvb3RzdHJhcC1zYXNzLWFzc2V0LWhlbHBlciwgdHdicy1pbWFnZS1wYXRoKFwiI3skZmlsZS0xeH1cIiksIFwiI3skZmlsZS0xeH1cIikpO1xuXG4gIEBtZWRpYVxuICBvbmx5IHNjcmVlbiBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMiksXG4gIG9ubHkgc2NyZWVuIGFuZCAoICAgbWluLS1tb3otZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSxcbiAgb25seSBzY3JlZW4gYW5kICggICAgIC1vLW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIvMSksXG4gIG9ubHkgc2NyZWVuIGFuZCAoICAgICAgICBtaW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSxcbiAgb25seSBzY3JlZW4gYW5kICggICAgICAgICAgICAgICAgbWluLXJlc29sdXRpb246IDE5MmRwaSksXG4gIG9ubHkgc2NyZWVuIGFuZCAoICAgICAgICAgICAgICAgIG1pbi1yZXNvbHV0aW9uOiAyZHBweCkge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChpZigkYm9vdHN0cmFwLXNhc3MtYXNzZXQtaGVscGVyLCB0d2JzLWltYWdlLXBhdGgoXCIjeyRmaWxlLTJ4fVwiKSwgXCIjeyRmaWxlLTJ4fVwiKSk7XG4gICAgYmFja2dyb3VuZC1zaXplOiAkd2lkdGgtMXggJGhlaWdodC0xeDtcbiAgfVxufVxuIiwiLy8gTGFiZWxzXG5cbkBtaXhpbiBsYWJlbC12YXJpYW50KCRjb2xvcikge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3I7XG5cbiAgJltocmVmXSB7XG4gICAgJjpob3ZlcixcbiAgICAmOmZvY3VzIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtlbigkY29sb3IsIDEwJSk7XG4gICAgfVxuICB9XG59XG4iLCIvLyBSZXNldCBmaWx0ZXJzIGZvciBJRVxuLy9cbi8vIFdoZW4geW91IG5lZWQgdG8gcmVtb3ZlIGEgZ3JhZGllbnQgYmFja2dyb3VuZCwgZG8gbm90IGZvcmdldCB0byB1c2UgdGhpcyB0byByZXNldFxuLy8gdGhlIElFIGZpbHRlciBmb3IgSUU5IGFuZCBiZWxvdy5cblxuQG1peGluIHJlc2V0LWZpbHRlcigpIHtcbiAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoZW5hYmxlZCA9IGZhbHNlKTtcbn1cbiIsIi8vIFJlc2l6ZSBhbnl0aGluZ1xuXG5AbWl4aW4gcmVzaXphYmxlKCRkaXJlY3Rpb24pIHtcbiAgcmVzaXplOiAkZGlyZWN0aW9uOyAvLyBPcHRpb25zOiBob3Jpem9udGFsLCB2ZXJ0aWNhbCwgYm90aFxuICBvdmVyZmxvdzogYXV0bzsgLy8gUGVyIENTUzMgVUksIGByZXNpemVgIG9ubHkgYXBwbGllcyB3aGVuIGBvdmVyZmxvd2AgaXNuJ3QgYHZpc2libGVgXG59XG4iLCIvLyBSZXNwb25zaXZlIHV0aWxpdGllc1xuXG4vL1xuLy8gTW9yZSBlYXNpbHkgaW5jbHVkZSBhbGwgdGhlIHN0YXRlcyBmb3IgcmVzcG9uc2l2ZS11dGlsaXRpZXMubGVzcy5cbi8vIFtjb252ZXJ0ZXJdICRwYXJlbnQgaGFja1xuQG1peGluIHJlc3BvbnNpdmUtdmlzaWJpbGl0eSgkcGFyZW50KSB7XG4gICN7JHBhcmVudH0ge1xuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gIH1cbiAgdGFibGUjeyRwYXJlbnR9ICB7IGRpc3BsYXk6IHRhYmxlICFpbXBvcnRhbnQ7IH1cbiAgdHIjeyRwYXJlbnR9ICAgICB7IGRpc3BsYXk6IHRhYmxlLXJvdyAhaW1wb3J0YW50OyB9XG4gIHRoI3skcGFyZW50fSxcbiAgdGQjeyRwYXJlbnR9ICAgICB7IGRpc3BsYXk6IHRhYmxlLWNlbGwgIWltcG9ydGFudDsgfVxufVxuXG4vLyBbY29udmVydGVyXSAkcGFyZW50IGhhY2tcbkBtaXhpbiByZXNwb25zaXZlLWludmlzaWJpbGl0eSgkcGFyZW50KSB7XG4gICN7JHBhcmVudH0ge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxufVxuIiwiLy8gU2l6aW5nIHNob3J0Y3V0c1xuXG5AbWl4aW4gc2l6ZSgkd2lkdGgsICRoZWlnaHQpIHtcbiAgd2lkdGg6ICR3aWR0aDtcbiAgaGVpZ2h0OiAkaGVpZ2h0O1xufVxuXG5AbWl4aW4gc3F1YXJlKCRzaXplKSB7XG4gIEBpbmNsdWRlIHNpemUoJHNpemUsICRzaXplKTtcbn1cbiIsIi8vIFdlYktpdC1zdHlsZSBmb2N1c1xuXG5AbWl4aW4gdGFiLWZvY3VzKCkge1xuICAvLyBXZWJLaXQtc3BlY2lmaWMuIE90aGVyIGJyb3dzZXJzIHdpbGwga2VlcCB0aGVpciBkZWZhdWx0IG91dGxpbmUgc3R5bGUuXG4gIC8vIChJbml0aWFsbHkgdHJpZWQgdG8gYWxzbyBmb3JjZSBkZWZhdWx0IHZpYSBgb3V0bGluZTogaW5pdGlhbGAsXG4gIC8vIGJ1dCB0aGF0IHNlZW1zIHRvIGVycm9uZW91c2x5IHJlbW92ZSB0aGUgb3V0bGluZSBpbiBGaXJlZm94IGFsdG9nZXRoZXIuKVxuICBvdXRsaW5lOiA1cHggYXV0byAtd2Via2l0LWZvY3VzLXJpbmctY29sb3I7XG4gIG91dGxpbmUtb2Zmc2V0OiAtMnB4O1xufVxuIiwiQG1peGluIHJlc2V0LXRleHQoKSB7XG4gIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHktYmFzZTtcbiAgLy8gV2UgZGVsaWJlcmF0ZWx5IGRvIE5PVCByZXNldCBmb250LXNpemUuXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgbGluZS1icmVhazogYXV0bztcbiAgbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodC1iYXNlO1xuICB0ZXh0LWFsaWduOiBsZWZ0OyAvLyBGYWxsYmFjayBmb3Igd2hlcmUgYHN0YXJ0YCBpcyBub3Qgc3VwcG9ydGVkXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRleHQtc2hhZG93OiBub25lO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgd29yZC1icmVhazogbm9ybWFsO1xuICB3b3JkLXNwYWNpbmc6IG5vcm1hbDtcbiAgd29yZC13cmFwOiBub3JtYWw7XG59XG4iLCIvLyBUeXBvZ3JhcGh5XG5cbi8vIFtjb252ZXJ0ZXJdICRwYXJlbnQgaGFja1xuQG1peGluIHRleHQtZW1waGFzaXMtdmFyaWFudCgkcGFyZW50LCAkY29sb3IpIHtcbiAgI3skcGFyZW50fSB7XG4gICAgY29sb3I6ICRjb2xvcjtcbiAgfVxuICBhI3skcGFyZW50fTpob3ZlcixcbiAgYSN7JHBhcmVudH06Zm9jdXMge1xuICAgIGNvbG9yOiBkYXJrZW4oJGNvbG9yLCAxMCUpO1xuICB9XG59XG4iLCIvLyBUZXh0IG92ZXJmbG93XG4vLyBSZXF1aXJlcyBpbmxpbmUtYmxvY2sgb3IgYmxvY2sgZm9yIHByb3BlciBzdHlsaW5nXG5cbkBtaXhpbiB0ZXh0LW92ZXJmbG93KCkge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cbiIsIi8vIFZlbmRvciBQcmVmaXhlc1xuLy9cbi8vIEFsbCB2ZW5kb3IgbWl4aW5zIGFyZSBkZXByZWNhdGVkIGFzIG9mIHYzLjIuMCBkdWUgdG8gdGhlIGludHJvZHVjdGlvbiBvZlxuLy8gQXV0b3ByZWZpeGVyIGluIG91ciBHcnVudGZpbGUuIFRoZXkgaGF2ZSBiZWVuIHJlbW92ZWQgaW4gdjQuXG5cbi8vIC0gQW5pbWF0aW9uc1xuLy8gLSBCYWNrZmFjZSB2aXNpYmlsaXR5XG4vLyAtIEJveCBzaGFkb3dcbi8vIC0gQm94IHNpemluZ1xuLy8gLSBDb250ZW50IGNvbHVtbnNcbi8vIC0gSHlwaGVuc1xuLy8gLSBQbGFjZWhvbGRlciB0ZXh0XG4vLyAtIFRyYW5zZm9ybWF0aW9uc1xuLy8gLSBUcmFuc2l0aW9uc1xuLy8gLSBVc2VyIFNlbGVjdFxuXG5cbi8vIEFuaW1hdGlvbnNcbkBtaXhpbiBhbmltYXRpb24oJGFuaW1hdGlvbikge1xuICAtd2Via2l0LWFuaW1hdGlvbjogJGFuaW1hdGlvbjtcbiAgICAgICAtby1hbmltYXRpb246ICRhbmltYXRpb247XG4gICAgICAgICAgYW5pbWF0aW9uOiAkYW5pbWF0aW9uO1xufVxuQG1peGluIGFuaW1hdGlvbi1uYW1lKCRuYW1lKSB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6ICRuYW1lO1xuICAgICAgICAgIGFuaW1hdGlvbi1uYW1lOiAkbmFtZTtcbn1cbkBtaXhpbiBhbmltYXRpb24tZHVyYXRpb24oJGR1cmF0aW9uKSB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAkZHVyYXRpb247XG4gICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAkZHVyYXRpb247XG59XG5AbWl4aW4gYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbigkdGltaW5nLWZ1bmN0aW9uKSB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogJHRpbWluZy1mdW5jdGlvbjtcbiAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiAkdGltaW5nLWZ1bmN0aW9uO1xufVxuQG1peGluIGFuaW1hdGlvbi1kZWxheSgkZGVsYXkpIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6ICRkZWxheTtcbiAgICAgICAgICBhbmltYXRpb24tZGVsYXk6ICRkZWxheTtcbn1cbkBtaXhpbiBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50KCRpdGVyYXRpb24tY291bnQpIHtcbiAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAkaXRlcmF0aW9uLWNvdW50O1xuICAgICAgICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6ICRpdGVyYXRpb24tY291bnQ7XG59XG5AbWl4aW4gYW5pbWF0aW9uLWRpcmVjdGlvbigkZGlyZWN0aW9uKSB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRpcmVjdGlvbjogJGRpcmVjdGlvbjtcbiAgICAgICAgICBhbmltYXRpb24tZGlyZWN0aW9uOiAkZGlyZWN0aW9uO1xufVxuQG1peGluIGFuaW1hdGlvbi1maWxsLW1vZGUoJGZpbGwtbW9kZSkge1xuICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6ICRmaWxsLW1vZGU7XG4gICAgICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogJGZpbGwtbW9kZTtcbn1cblxuLy8gQmFja2ZhY2UgdmlzaWJpbGl0eVxuLy8gUHJldmVudCBicm93c2VycyBmcm9tIGZsaWNrZXJpbmcgd2hlbiB1c2luZyBDU1MgM0QgdHJhbnNmb3Jtcy5cbi8vIERlZmF1bHQgdmFsdWUgaXMgYHZpc2libGVgLCBidXQgY2FuIGJlIGNoYW5nZWQgdG8gYGhpZGRlbmBcblxuQG1peGluIGJhY2tmYWNlLXZpc2liaWxpdHkoJHZpc2liaWxpdHkpIHtcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiAkdmlzaWJpbGl0eTtcbiAgICAgLW1vei1iYWNrZmFjZS12aXNpYmlsaXR5OiAkdmlzaWJpbGl0eTtcbiAgICAgICAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiAkdmlzaWJpbGl0eTtcbn1cblxuLy8gRHJvcCBzaGFkb3dzXG4vL1xuLy8gTm90ZTogRGVwcmVjYXRlZCBgLmJveC1zaGFkb3coKWAgYXMgb2YgdjMuMS4wIHNpbmNlIGFsbCBvZiBCb290c3RyYXAnc1xuLy8gc3VwcG9ydGVkIGJyb3dzZXJzIHRoYXQgaGF2ZSBib3ggc2hhZG93IGNhcGFiaWxpdGllcyBub3cgc3VwcG9ydCBpdC5cblxuQG1peGluIGJveC1zaGFkb3coJHNoYWRvdy4uLikge1xuICAtd2Via2l0LWJveC1zaGFkb3c6ICRzaGFkb3c7IC8vIGlPUyA8NC4zICYgQW5kcm9pZCA8NC4xXG4gICAgICAgICAgYm94LXNoYWRvdzogJHNoYWRvdztcbn1cblxuLy8gQm94IHNpemluZ1xuQG1peGluIGJveC1zaXppbmcoJGJveG1vZGVsKSB7XG4gIC13ZWJraXQtYm94LXNpemluZzogJGJveG1vZGVsO1xuICAgICAtbW96LWJveC1zaXppbmc6ICRib3htb2RlbDtcbiAgICAgICAgICBib3gtc2l6aW5nOiAkYm94bW9kZWw7XG59XG5cbi8vIENTUzMgQ29udGVudCBDb2x1bW5zXG5AbWl4aW4gY29udGVudC1jb2x1bW5zKCRjb2x1bW4tY291bnQsICRjb2x1bW4tZ2FwOiAkZ3JpZC1ndXR0ZXItd2lkdGgpIHtcbiAgLXdlYmtpdC1jb2x1bW4tY291bnQ6ICRjb2x1bW4tY291bnQ7XG4gICAgIC1tb3otY29sdW1uLWNvdW50OiAkY29sdW1uLWNvdW50O1xuICAgICAgICAgIGNvbHVtbi1jb3VudDogJGNvbHVtbi1jb3VudDtcbiAgLXdlYmtpdC1jb2x1bW4tZ2FwOiAkY29sdW1uLWdhcDtcbiAgICAgLW1vei1jb2x1bW4tZ2FwOiAkY29sdW1uLWdhcDtcbiAgICAgICAgICBjb2x1bW4tZ2FwOiAkY29sdW1uLWdhcDtcbn1cblxuLy8gT3B0aW9uYWwgaHlwaGVuYXRpb25cbkBtaXhpbiBoeXBoZW5zKCRtb2RlOiBhdXRvKSB7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgLXdlYmtpdC1oeXBoZW5zOiAkbW9kZTtcbiAgICAgLW1vei1oeXBoZW5zOiAkbW9kZTtcbiAgICAgIC1tcy1oeXBoZW5zOiAkbW9kZTsgLy8gSUUxMCtcbiAgICAgICAtby1oeXBoZW5zOiAkbW9kZTtcbiAgICAgICAgICBoeXBoZW5zOiAkbW9kZTtcbn1cblxuLy8gUGxhY2Vob2xkZXIgdGV4dFxuQG1peGluIHBsYWNlaG9sZGVyKCRjb2xvcjogJGlucHV0LWNvbG9yLXBsYWNlaG9sZGVyKSB7XG4gIC8vIEZpcmVmb3hcbiAgJjo6LW1vei1wbGFjZWhvbGRlciB7XG4gICAgY29sb3I6ICRjb2xvcjtcbiAgICBvcGFjaXR5OiAxOyAvLyBPdmVycmlkZSBGaXJlZm94J3MgdW51c3VhbCBkZWZhdWx0IG9wYWNpdHk7IHNlZSBodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvcHVsbC8xMTUyNlxuICB9XG4gICY6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHsgY29sb3I6ICRjb2xvcjsgfSAvLyBJbnRlcm5ldCBFeHBsb3JlciAxMCtcbiAgJjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciAgeyBjb2xvcjogJGNvbG9yOyB9IC8vIFNhZmFyaSBhbmQgQ2hyb21lXG59XG5cbi8vIFRyYW5zZm9ybWF0aW9uc1xuQG1peGluIHNjYWxlKCRyYXRpby4uLikge1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoJHJhdGlvKTtcbiAgICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKCRyYXRpbyk7IC8vIElFOSBvbmx5XG4gICAgICAgLW8tdHJhbnNmb3JtOiBzY2FsZSgkcmF0aW8pO1xuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoJHJhdGlvKTtcbn1cblxuQG1peGluIHNjYWxlWCgkcmF0aW8pIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWCgkcmF0aW8pO1xuICAgICAgLW1zLXRyYW5zZm9ybTogc2NhbGVYKCRyYXRpbyk7IC8vIElFOSBvbmx5XG4gICAgICAgLW8tdHJhbnNmb3JtOiBzY2FsZVgoJHJhdGlvKTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWCgkcmF0aW8pO1xufVxuQG1peGluIHNjYWxlWSgkcmF0aW8pIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWSgkcmF0aW8pO1xuICAgICAgLW1zLXRyYW5zZm9ybTogc2NhbGVZKCRyYXRpbyk7IC8vIElFOSBvbmx5XG4gICAgICAgLW8tdHJhbnNmb3JtOiBzY2FsZVkoJHJhdGlvKTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWSgkcmF0aW8pO1xufVxuQG1peGluIHNrZXcoJHgsICR5KSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBza2V3WCgkeCkgc2tld1koJHkpO1xuICAgICAgLW1zLXRyYW5zZm9ybTogc2tld1goJHgpIHNrZXdZKCR5KTsgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9pc3N1ZXMvNDg4NTsgSUU5K1xuICAgICAgIC1vLXRyYW5zZm9ybTogc2tld1goJHgpIHNrZXdZKCR5KTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHNrZXdYKCR4KSBza2V3WSgkeSk7XG59XG5AbWl4aW4gdHJhbnNsYXRlKCR4LCAkeSkge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKCR4LCAkeSk7XG4gICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoJHgsICR5KTsgLy8gSUU5IG9ubHlcbiAgICAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgkeCwgJHkpO1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKCR4LCAkeSk7XG59XG5AbWl4aW4gdHJhbnNsYXRlM2QoJHgsICR5LCAkeikge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoJHgsICR5LCAkeik7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgkeCwgJHksICR6KTtcbn1cbkBtaXhpbiByb3RhdGUoJGRlZ3JlZXMpIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgkZGVncmVlcyk7XG4gICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoJGRlZ3JlZXMpOyAvLyBJRTkgb25seVxuICAgICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKCRkZWdyZWVzKTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgkZGVncmVlcyk7XG59XG5AbWl4aW4gcm90YXRlWCgkZGVncmVlcykge1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWCgkZGVncmVlcyk7XG4gICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGVYKCRkZWdyZWVzKTsgLy8gSUU5IG9ubHlcbiAgICAgICAtby10cmFuc2Zvcm06IHJvdGF0ZVgoJGRlZ3JlZXMpO1xuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWCgkZGVncmVlcyk7XG59XG5AbWl4aW4gcm90YXRlWSgkZGVncmVlcykge1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgkZGVncmVlcyk7XG4gICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGVZKCRkZWdyZWVzKTsgLy8gSUU5IG9ubHlcbiAgICAgICAtby10cmFuc2Zvcm06IHJvdGF0ZVkoJGRlZ3JlZXMpO1xuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSgkZGVncmVlcyk7XG59XG5AbWl4aW4gcGVyc3BlY3RpdmUoJHBlcnNwZWN0aXZlKSB7XG4gIC13ZWJraXQtcGVyc3BlY3RpdmU6ICRwZXJzcGVjdGl2ZTtcbiAgICAgLW1vei1wZXJzcGVjdGl2ZTogJHBlcnNwZWN0aXZlO1xuICAgICAgICAgIHBlcnNwZWN0aXZlOiAkcGVyc3BlY3RpdmU7XG59XG5AbWl4aW4gcGVyc3BlY3RpdmUtb3JpZ2luKCRwZXJzcGVjdGl2ZSkge1xuICAtd2Via2l0LXBlcnNwZWN0aXZlLW9yaWdpbjogJHBlcnNwZWN0aXZlO1xuICAgICAtbW96LXBlcnNwZWN0aXZlLW9yaWdpbjogJHBlcnNwZWN0aXZlO1xuICAgICAgICAgIHBlcnNwZWN0aXZlLW9yaWdpbjogJHBlcnNwZWN0aXZlO1xufVxuQG1peGluIHRyYW5zZm9ybS1vcmlnaW4oJG9yaWdpbikge1xuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46ICRvcmlnaW47XG4gICAgIC1tb3otdHJhbnNmb3JtLW9yaWdpbjogJG9yaWdpbjtcbiAgICAgIC1tcy10cmFuc2Zvcm0tb3JpZ2luOiAkb3JpZ2luOyAvLyBJRTkgb25seVxuICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46ICRvcmlnaW47XG59XG5cblxuLy8gVHJhbnNpdGlvbnNcblxuQG1peGluIHRyYW5zaXRpb24oJHRyYW5zaXRpb24uLi4pIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAkdHJhbnNpdGlvbjtcbiAgICAgICAtby10cmFuc2l0aW9uOiAkdHJhbnNpdGlvbjtcbiAgICAgICAgICB0cmFuc2l0aW9uOiAkdHJhbnNpdGlvbjtcbn1cbkBtaXhpbiB0cmFuc2l0aW9uLXByb3BlcnR5KCR0cmFuc2l0aW9uLXByb3BlcnR5Li4uKSB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi1wcm9wZXJ0eTogJHRyYW5zaXRpb24tcHJvcGVydHk7XG4gICAgICAgICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogJHRyYW5zaXRpb24tcHJvcGVydHk7XG59XG5AbWl4aW4gdHJhbnNpdGlvbi1kZWxheSgkdHJhbnNpdGlvbi1kZWxheSkge1xuICAtd2Via2l0LXRyYW5zaXRpb24tZGVsYXk6ICR0cmFuc2l0aW9uLWRlbGF5O1xuICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6ICR0cmFuc2l0aW9uLWRlbGF5O1xufVxuQG1peGluIHRyYW5zaXRpb24tZHVyYXRpb24oJHRyYW5zaXRpb24tZHVyYXRpb24uLi4pIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAkdHJhbnNpdGlvbi1kdXJhdGlvbjtcbiAgICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAkdHJhbnNpdGlvbi1kdXJhdGlvbjtcbn1cbkBtaXhpbiB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbigkdGltaW5nLWZ1bmN0aW9uKSB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246ICR0aW1pbmctZnVuY3Rpb247XG4gICAgICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246ICR0aW1pbmctZnVuY3Rpb247XG59XG5AbWl4aW4gdHJhbnNpdGlvbi10cmFuc2Zvcm0oJHRyYW5zaXRpb24uLi4pIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAkdHJhbnNpdGlvbjtcbiAgICAgLW1vei10cmFuc2l0aW9uOiAtbW96LXRyYW5zZm9ybSAkdHJhbnNpdGlvbjtcbiAgICAgICAtby10cmFuc2l0aW9uOiAtby10cmFuc2Zvcm0gJHRyYW5zaXRpb247XG4gICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtICR0cmFuc2l0aW9uO1xufVxuXG5cbi8vIFVzZXIgc2VsZWN0XG4vLyBGb3Igc2VsZWN0aW5nIHRleHQgb24gdGhlIHBhZ2VcblxuQG1peGluIHVzZXItc2VsZWN0KCRzZWxlY3QpIHtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogJHNlbGVjdDtcbiAgICAgLW1vei11c2VyLXNlbGVjdDogJHNlbGVjdDtcbiAgICAgIC1tcy11c2VyLXNlbGVjdDogJHNlbGVjdDsgLy8gSUUxMCtcbiAgICAgICAgICB1c2VyLXNlbGVjdDogJHNlbGVjdDtcbn1cbiIsIi8vIEFsZXJ0c1xuXG5AbWl4aW4gYWxlcnQtdmFyaWFudCgkYmFja2dyb3VuZCwgJGJvcmRlciwgJHRleHQtY29sb3IpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQ7XG4gIGJvcmRlci1jb2xvcjogJGJvcmRlcjtcbiAgY29sb3I6ICR0ZXh0LWNvbG9yO1xuXG4gIGhyIHtcbiAgICBib3JkZXItdG9wLWNvbG9yOiBkYXJrZW4oJGJvcmRlciwgNSUpO1xuICB9XG4gIC5hbGVydC1saW5rIHtcbiAgICBjb2xvcjogZGFya2VuKCR0ZXh0LWNvbG9yLCAxMCUpO1xuICB9XG59XG4iLCIvLyBCdXR0b24gdmFyaWFudHNcbi8vXG4vLyBFYXNpbHkgcHVtcCBvdXQgZGVmYXVsdCBzdHlsZXMsIGFzIHdlbGwgYXMgOmhvdmVyLCA6Zm9jdXMsIDphY3RpdmUsXG4vLyBhbmQgZGlzYWJsZWQgb3B0aW9ucyBmb3IgYWxsIGJ1dHRvbnNcblxuQG1peGluIGJ1dHRvbi12YXJpYW50KCRjb2xvciwgJGJhY2tncm91bmQsICRib3JkZXIpIHtcbiAgY29sb3I6ICRjb2xvcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQ7XG4gIGJvcmRlci1jb2xvcjogJGJvcmRlcjtcblxuICAmOmZvY3VzLFxuICAmLmZvY3VzIHtcbiAgICBjb2xvcjogJGNvbG9yO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtlbigkYmFja2dyb3VuZCwgMTAlKTtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiBkYXJrZW4oJGJvcmRlciwgMjUlKTtcbiAgfVxuICAmOmhvdmVyIHtcbiAgICBjb2xvcjogJGNvbG9yO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtlbigkYmFja2dyb3VuZCwgMTAlKTtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiBkYXJrZW4oJGJvcmRlciwgMTIlKTtcbiAgfVxuICAmOmFjdGl2ZSxcbiAgJi5hY3RpdmUsXG4gIC5vcGVuID4gJi5kcm9wZG93bi10b2dnbGUge1xuICAgIGNvbG9yOiAkY29sb3I7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCRiYWNrZ3JvdW5kLCAxMCUpO1xuICAgICAgICBib3JkZXItY29sb3I6IGRhcmtlbigkYm9yZGVyLCAxMiUpO1xuXG4gICAgJjpob3ZlcixcbiAgICAmOmZvY3VzLFxuICAgICYuZm9jdXMge1xuICAgICAgY29sb3I6ICRjb2xvcjtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtlbigkYmFja2dyb3VuZCwgMTclKTtcbiAgICAgICAgICBib3JkZXItY29sb3I6IGRhcmtlbigkYm9yZGVyLCAyNSUpO1xuICAgIH1cbiAgfVxuICAmOmFjdGl2ZSxcbiAgJi5hY3RpdmUsXG4gIC5vcGVuID4gJi5kcm9wZG93bi10b2dnbGUge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XG4gIH1cbiAgJi5kaXNhYmxlZCxcbiAgJltkaXNhYmxlZF0sXG4gIGZpZWxkc2V0W2Rpc2FibGVkXSAmIHtcbiAgICAmOmhvdmVyLFxuICAgICY6Zm9jdXMsXG4gICAgJi5mb2N1cyB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZDtcbiAgICAgICAgICBib3JkZXItY29sb3I6ICRib3JkZXI7XG4gICAgfVxuICB9XG5cbiAgLmJhZGdlIHtcbiAgICBjb2xvcjogJGJhY2tncm91bmQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yO1xuICB9XG59XG5cbi8vIEJ1dHRvbiBzaXplc1xuQG1peGluIGJ1dHRvbi1zaXplKCRwYWRkaW5nLXZlcnRpY2FsLCAkcGFkZGluZy1ob3Jpem9udGFsLCAkZm9udC1zaXplLCAkbGluZS1oZWlnaHQsICRib3JkZXItcmFkaXVzKSB7XG4gIHBhZGRpbmc6ICRwYWRkaW5nLXZlcnRpY2FsICRwYWRkaW5nLWhvcml6b250YWw7XG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZTtcbiAgbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodDtcbiAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XG59XG4iLCIvLyBQYW5lbHNcblxuQG1peGluIHBhbmVsLXZhcmlhbnQoJGJvcmRlciwgJGhlYWRpbmctdGV4dC1jb2xvciwgJGhlYWRpbmctYmctY29sb3IsICRoZWFkaW5nLWJvcmRlcikge1xuICBib3JkZXItY29sb3I6ICRib3JkZXI7XG5cbiAgJiA+IC5wYW5lbC1oZWFkaW5nIHtcbiAgICBjb2xvcjogJGhlYWRpbmctdGV4dC1jb2xvcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkaGVhZGluZy1iZy1jb2xvcjtcbiAgICBib3JkZXItY29sb3I6ICRoZWFkaW5nLWJvcmRlcjtcblxuICAgICsgLnBhbmVsLWNvbGxhcHNlID4gLnBhbmVsLWJvZHkge1xuICAgICAgYm9yZGVyLXRvcC1jb2xvcjogJGJvcmRlcjtcbiAgICB9XG4gICAgLmJhZGdlIHtcbiAgICAgIGNvbG9yOiAkaGVhZGluZy1iZy1jb2xvcjtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRoZWFkaW5nLXRleHQtY29sb3I7XG4gICAgfVxuICB9XG4gICYgPiAucGFuZWwtZm9vdGVyIHtcbiAgICArIC5wYW5lbC1jb2xsYXBzZSA+IC5wYW5lbC1ib2R5IHtcbiAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICRib3JkZXI7XG4gICAgfVxuICB9XG59XG4iLCIvLyBQYWdpbmF0aW9uXG5cbkBtaXhpbiBwYWdpbmF0aW9uLXNpemUoJHBhZGRpbmctdmVydGljYWwsICRwYWRkaW5nLWhvcml6b250YWwsICRmb250LXNpemUsICRsaW5lLWhlaWdodCwgJGJvcmRlci1yYWRpdXMpIHtcbiAgPiBsaSB7XG4gICAgPiBhLFxuICAgID4gc3BhbiB7XG4gICAgICBwYWRkaW5nOiAkcGFkZGluZy12ZXJ0aWNhbCAkcGFkZGluZy1ob3Jpem9udGFsO1xuICAgICAgZm9udC1zaXplOiAkZm9udC1zaXplO1xuICAgICAgbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodDtcbiAgICB9XG4gICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICA+IGEsXG4gICAgICA+IHNwYW4ge1xuICAgICAgICBAaW5jbHVkZSBib3JkZXItbGVmdC1yYWRpdXMoJGJvcmRlci1yYWRpdXMpO1xuICAgICAgfVxuICAgIH1cbiAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgPiBhLFxuICAgICAgPiBzcGFuIHtcbiAgICAgICAgQGluY2x1ZGUgYm9yZGVyLXJpZ2h0LXJhZGl1cygkYm9yZGVyLXJhZGl1cyk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCIvLyBMaXN0IEdyb3Vwc1xuXG5AbWl4aW4gbGlzdC1ncm91cC1pdGVtLXZhcmlhbnQoJHN0YXRlLCAkYmFja2dyb3VuZCwgJGNvbG9yKSB7XG4gIC5saXN0LWdyb3VwLWl0ZW0tI3skc3RhdGV9IHtcbiAgICBjb2xvcjogJGNvbG9yO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kO1xuXG4gICAgLy8gW2NvbnZlcnRlcl0gZXh0cmFjdGVkIGEmLCBidXR0b24mIHRvIGEubGlzdC1ncm91cC1pdGVtLSN7JHN0YXRlfSwgYnV0dG9uLmxpc3QtZ3JvdXAtaXRlbS0jeyRzdGF0ZX1cbiAgfVxuXG4gIGEubGlzdC1ncm91cC1pdGVtLSN7JHN0YXRlfSxcbiAgYnV0dG9uLmxpc3QtZ3JvdXAtaXRlbS0jeyRzdGF0ZX0ge1xuICAgIGNvbG9yOiAkY29sb3I7XG5cbiAgICAubGlzdC1ncm91cC1pdGVtLWhlYWRpbmcge1xuICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgfVxuXG4gICAgJjpob3ZlcixcbiAgICAmOmZvY3VzIHtcbiAgICAgIGNvbG9yOiAkY29sb3I7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZW4oJGJhY2tncm91bmQsIDUlKTtcbiAgICB9XG4gICAgJi5hY3RpdmUsXG4gICAgJi5hY3RpdmU6aG92ZXIsXG4gICAgJi5hY3RpdmU6Zm9jdXMge1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3I7XG4gICAgICBib3JkZXItY29sb3I6ICRjb2xvcjtcbiAgICB9XG4gIH1cbn1cbiIsIi8vIEhvcml6b250YWwgZGl2aWRlcnNcbi8vXG4vLyBEaXZpZGVycyAoYmFzaWNhbGx5IGFuIGhyKSB3aXRoaW4gZHJvcGRvd25zIGFuZCBuYXYgbGlzdHNcblxuQG1peGluIG5hdi1kaXZpZGVyKCRjb2xvcjogI2U1ZTVlNSkge1xuICBoZWlnaHQ6IDFweDtcbiAgbWFyZ2luOiAoKCRsaW5lLWhlaWdodC1jb21wdXRlZCAvIDIpIC0gMSkgMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yO1xufVxuIiwiLy8gRm9ybSB2YWxpZGF0aW9uIHN0YXRlc1xuLy9cbi8vIFVzZWQgaW4gZm9ybXMubGVzcyB0byBnZW5lcmF0ZSB0aGUgZm9ybSB2YWxpZGF0aW9uIENTUyBmb3Igd2FybmluZ3MsIGVycm9ycyxcbi8vIGFuZCBzdWNjZXNzZXMuXG5cbkBtaXhpbiBmb3JtLWNvbnRyb2wtdmFsaWRhdGlvbigkdGV4dC1jb2xvcjogIzU1NSwgJGJvcmRlci1jb2xvcjogI2NjYywgJGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjUpIHtcbiAgLy8gQ29sb3IgdGhlIGxhYmVsIGFuZCBoZWxwIHRleHRcbiAgLmhlbHAtYmxvY2ssXG4gIC5jb250cm9sLWxhYmVsLFxuICAucmFkaW8sXG4gIC5jaGVja2JveCxcbiAgLnJhZGlvLWlubGluZSxcbiAgLmNoZWNrYm94LWlubGluZSxcbiAgJi5yYWRpbyBsYWJlbCxcbiAgJi5jaGVja2JveCBsYWJlbCxcbiAgJi5yYWRpby1pbmxpbmUgbGFiZWwsXG4gICYuY2hlY2tib3gtaW5saW5lIGxhYmVsICB7XG4gICAgY29sb3I6ICR0ZXh0LWNvbG9yO1xuICB9XG4gIC8vIFNldCB0aGUgYm9yZGVyIGFuZCBib3ggc2hhZG93IG9uIHNwZWNpZmljIGlucHV0cyB0byBtYXRjaFxuICAuZm9ybS1jb250cm9sIHtcbiAgICBib3JkZXItY29sb3I6ICRib3JkZXItY29sb3I7XG4gICAgQGluY2x1ZGUgYm94LXNoYWRvdyhpbnNldCAwIDFweCAxcHggcmdiYSgwLDAsMCwuMDc1KSk7IC8vIFJlZGVjbGFyZSBzbyB0cmFuc2l0aW9ucyB3b3JrXG4gICAgJjpmb2N1cyB7XG4gICAgICBib3JkZXItY29sb3I6IGRhcmtlbigkYm9yZGVyLWNvbG9yLCAxMCUpO1xuICAgICAgJHNoYWRvdzogaW5zZXQgMCAxcHggMXB4IHJnYmEoMCwwLDAsLjA3NSksIDAgMCA2cHggbGlnaHRlbigkYm9yZGVyLWNvbG9yLCAyMCUpO1xuICAgICAgQGluY2x1ZGUgYm94LXNoYWRvdygkc2hhZG93KTtcbiAgICB9XG4gIH1cbiAgLy8gU2V0IHZhbGlkYXRpb24gc3RhdGVzIGFsc28gZm9yIGFkZG9uc1xuICAuaW5wdXQtZ3JvdXAtYWRkb24ge1xuICAgIGNvbG9yOiAkdGV4dC1jb2xvcjtcbiAgICBib3JkZXItY29sb3I6ICRib3JkZXItY29sb3I7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQtY29sb3I7XG4gIH1cbiAgLy8gT3B0aW9uYWwgZmVlZGJhY2sgaWNvblxuICAuZm9ybS1jb250cm9sLWZlZWRiYWNrIHtcbiAgICBjb2xvcjogJHRleHQtY29sb3I7XG4gIH1cbn1cblxuXG4vLyBGb3JtIGNvbnRyb2wgZm9jdXMgc3RhdGVcbi8vXG4vLyBHZW5lcmF0ZSBhIGN1c3RvbWl6ZWQgZm9jdXMgc3RhdGUgYW5kIGZvciBhbnkgaW5wdXQgd2l0aCB0aGUgc3BlY2lmaWVkIGNvbG9yLFxuLy8gd2hpY2ggZGVmYXVsdHMgdG8gdGhlIGAkaW5wdXQtYm9yZGVyLWZvY3VzYCB2YXJpYWJsZS5cbi8vXG4vLyBXZSBoaWdobHkgZW5jb3VyYWdlIHlvdSB0byBub3QgY3VzdG9taXplIHRoZSBkZWZhdWx0IHZhbHVlLCBidXQgaW5zdGVhZCB1c2Vcbi8vIHRoaXMgdG8gdHdlYWsgY29sb3JzIG9uIGFuIGFzLW5lZWRlZCBiYXNpcy4gVGhpcyBhZXN0aGV0aWMgY2hhbmdlIGlzIGJhc2VkIG9uXG4vLyBXZWJLaXQncyBkZWZhdWx0IHN0eWxlcywgYnV0IGFwcGxpY2FibGUgdG8gYSB3aWRlciByYW5nZSBvZiBicm93c2Vycy4gSXRzXG4vLyB1c2FiaWxpdHkgYW5kIGFjY2Vzc2liaWxpdHkgc2hvdWxkIGJlIHRha2VuIGludG8gYWNjb3VudCB3aXRoIGFueSBjaGFuZ2UuXG4vL1xuLy8gRXhhbXBsZSB1c2FnZTogY2hhbmdlIHRoZSBkZWZhdWx0IGJsdWUgYm9yZGVyIGFuZCBzaGFkb3cgdG8gd2hpdGUgZm9yIGJldHRlclxuLy8gY29udHJhc3QgYWdhaW5zdCBhIGRhcmsgZ3JheSBiYWNrZ3JvdW5kLlxuQG1peGluIGZvcm0tY29udHJvbC1mb2N1cygkY29sb3I6ICRpbnB1dC1ib3JkZXItZm9jdXMpIHtcbiAgJGNvbG9yLXJnYmE6IHJnYmEocmVkKCRjb2xvciksIGdyZWVuKCRjb2xvciksIGJsdWUoJGNvbG9yKSwgLjYpO1xuICAmOmZvY3VzIHtcbiAgICBib3JkZXItY29sb3I6ICRjb2xvcjtcbiAgICBvdXRsaW5lOiAwO1xuICAgIEBpbmNsdWRlIGJveC1zaGFkb3coaW5zZXQgMCAxcHggMXB4IHJnYmEoMCwwLDAsLjA3NSksIDAgMCA4cHggJGNvbG9yLXJnYmEpO1xuICB9XG59XG5cbi8vIEZvcm0gY29udHJvbCBzaXppbmdcbi8vXG4vLyBSZWxhdGl2ZSB0ZXh0IHNpemUsIHBhZGRpbmcsIGFuZCBib3JkZXItcmFkaWkgY2hhbmdlcyBmb3IgZm9ybSBjb250cm9scy4gRm9yXG4vLyBob3Jpem9udGFsIHNpemluZywgd3JhcCBjb250cm9scyBpbiB0aGUgcHJlZGVmaW5lZCBncmlkIGNsYXNzZXMuIGA8c2VsZWN0PmBcbi8vIGVsZW1lbnQgZ2V0cyBzcGVjaWFsIGxvdmUgYmVjYXVzZSBpdCdzIHNwZWNpYWwsIGFuZCB0aGF0J3MgYSBmYWN0IVxuLy8gW2NvbnZlcnRlcl0gJHBhcmVudCBoYWNrXG5AbWl4aW4gaW5wdXQtc2l6ZSgkcGFyZW50LCAkaW5wdXQtaGVpZ2h0LCAkcGFkZGluZy12ZXJ0aWNhbCwgJHBhZGRpbmctaG9yaXpvbnRhbCwgJGZvbnQtc2l6ZSwgJGxpbmUtaGVpZ2h0LCAkYm9yZGVyLXJhZGl1cykge1xuICAjeyRwYXJlbnR9IHtcbiAgICBoZWlnaHQ6ICRpbnB1dC1oZWlnaHQ7XG4gICAgcGFkZGluZzogJHBhZGRpbmctdmVydGljYWwgJHBhZGRpbmctaG9yaXpvbnRhbDtcbiAgICBmb250LXNpemU6ICRmb250LXNpemU7XG4gICAgbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodDtcbiAgICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcbiAgfVxuXG4gIHNlbGVjdCN7JHBhcmVudH0ge1xuICAgIGhlaWdodDogJGlucHV0LWhlaWdodDtcbiAgICBsaW5lLWhlaWdodDogJGlucHV0LWhlaWdodDtcbiAgfVxuXG4gIHRleHRhcmVhI3skcGFyZW50fSxcbiAgc2VsZWN0W211bHRpcGxlXSN7JHBhcmVudH0ge1xuICAgIGhlaWdodDogYXV0bztcbiAgfVxufVxuIiwiLy8gUHJvZ3Jlc3MgYmFyc1xuXG5AbWl4aW4gcHJvZ3Jlc3MtYmFyLXZhcmlhbnQoJGNvbG9yKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcjtcblxuICAvLyBEZXByZWNhdGVkIHBhcmVudCBjbGFzcyByZXF1aXJlbWVudCBhcyBvZiB2My4yLjBcbiAgLnByb2dyZXNzLXN0cmlwZWQgJiB7XG4gICAgQGluY2x1ZGUgZ3JhZGllbnQtc3RyaXBlZDtcbiAgfVxufVxuIiwiLy8gVGFibGVzXG5cbkBtaXhpbiB0YWJsZS1yb3ctdmFyaWFudCgkc3RhdGUsICRiYWNrZ3JvdW5kKSB7XG4gIC8vIEV4YWN0IHNlbGVjdG9ycyBiZWxvdyByZXF1aXJlZCB0byBvdmVycmlkZSBgLnRhYmxlLXN0cmlwZWRgIGFuZCBwcmV2ZW50XG4gIC8vIGluaGVyaXRhbmNlIHRvIG5lc3RlZCB0YWJsZXMuXG4gIC50YWJsZSA+IHRoZWFkID4gdHIsXG4gIC50YWJsZSA+IHRib2R5ID4gdHIsXG4gIC50YWJsZSA+IHRmb290ID4gdHIge1xuICAgID4gdGQuI3skc3RhdGV9LFxuICAgID4gdGguI3skc3RhdGV9LFxuICAgICYuI3skc3RhdGV9ID4gdGQsXG4gICAgJi4jeyRzdGF0ZX0gPiB0aCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZDtcbiAgICB9XG4gIH1cblxuICAvLyBIb3ZlciBzdGF0ZXMgZm9yIGAudGFibGUtaG92ZXJgXG4gIC8vIE5vdGU6IHRoaXMgaXMgbm90IGF2YWlsYWJsZSBmb3IgY2VsbHMgb3Igcm93cyB3aXRoaW4gYHRoZWFkYCBvciBgdGZvb3RgLlxuICAudGFibGUtaG92ZXIgPiB0Ym9keSA+IHRyIHtcbiAgICA+IHRkLiN7JHN0YXRlfTpob3ZlcixcbiAgICA+IHRoLiN7JHN0YXRlfTpob3ZlcixcbiAgICAmLiN7JHN0YXRlfTpob3ZlciA+IHRkLFxuICAgICY6aG92ZXIgPiAuI3skc3RhdGV9LFxuICAgICYuI3skc3RhdGV9OmhvdmVyID4gdGgge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCRiYWNrZ3JvdW5kLCA1JSk7XG4gICAgfVxuICB9XG59XG4iLCIvLyBDb250ZXh0dWFsIGJhY2tncm91bmRzXG5cbi8vIFtjb252ZXJ0ZXJdICRwYXJlbnQgaGFja1xuQG1peGluIGJnLXZhcmlhbnQoJHBhcmVudCwgJGNvbG9yKSB7XG4gICN7JHBhcmVudH0ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcjtcbiAgfVxuICBhI3skcGFyZW50fTpob3ZlcixcbiAgYSN7JHBhcmVudH06Zm9jdXMge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtlbigkY29sb3IsIDEwJSk7XG4gIH1cbn1cbiIsIi8vIFNpbmdsZSBzaWRlIGJvcmRlci1yYWRpdXNcblxuQG1peGluIGJvcmRlci10b3AtcmFkaXVzKCRyYWRpdXMpIHtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6ICRyYWRpdXM7XG4gICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAkcmFkaXVzO1xufVxuQG1peGluIGJvcmRlci1yaWdodC1yYWRpdXMoJHJhZGl1cykge1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogJHJhZGl1cztcbiAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6ICRyYWRpdXM7XG59XG5AbWl4aW4gYm9yZGVyLWJvdHRvbS1yYWRpdXMoJHJhZGl1cykge1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogJHJhZGl1cztcbiAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6ICRyYWRpdXM7XG59XG5AbWl4aW4gYm9yZGVyLWxlZnQtcmFkaXVzKCRyYWRpdXMpIHtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogJHJhZGl1cztcbiAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogJHJhZGl1cztcbn1cbiIsIi8vIEdyYWRpZW50c1xuXG5cblxuLy8gSG9yaXpvbnRhbCBncmFkaWVudCwgZnJvbSBsZWZ0IHRvIHJpZ2h0XG4vL1xuLy8gQ3JlYXRlcyB0d28gY29sb3Igc3RvcHMsIHN0YXJ0IGFuZCBlbmQsIGJ5IHNwZWNpZnlpbmcgYSBjb2xvciBhbmQgcG9zaXRpb24gZm9yIGVhY2ggY29sb3Igc3RvcC5cbi8vIENvbG9yIHN0b3BzIGFyZSBub3QgYXZhaWxhYmxlIGluIElFOSBhbmQgYmVsb3cuXG5AbWl4aW4gZ3JhZGllbnQtaG9yaXpvbnRhbCgkc3RhcnQtY29sb3I6ICM1NTUsICRlbmQtY29sb3I6ICMzMzMsICRzdGFydC1wZXJjZW50OiAwJSwgJGVuZC1wZXJjZW50OiAxMDAlKSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGxlZnQsICRzdGFydC1jb2xvciAkc3RhcnQtcGVyY2VudCwgJGVuZC1jb2xvciAkZW5kLXBlcmNlbnQpOyAvLyBTYWZhcmkgNS4xLTYsIENocm9tZSAxMCtcbiAgYmFja2dyb3VuZC1pbWFnZTogLW8tbGluZWFyLWdyYWRpZW50KGxlZnQsICRzdGFydC1jb2xvciAkc3RhcnQtcGVyY2VudCwgJGVuZC1jb2xvciAkZW5kLXBlcmNlbnQpOyAvLyBPcGVyYSAxMlxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICRzdGFydC1jb2xvciAkc3RhcnQtcGVyY2VudCwgJGVuZC1jb2xvciAkZW5kLXBlcmNlbnQpOyAvLyBTdGFuZGFyZCwgSUUxMCwgRmlyZWZveCAxNissIE9wZXJhIDEyLjEwKywgU2FmYXJpIDcrLCBDaHJvbWUgMjYrXG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcbiAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoc3RhcnRDb2xvcnN0cj0nI3tpZS1oZXgtc3RyKCRzdGFydC1jb2xvcil9JywgZW5kQ29sb3JzdHI9JyN7aWUtaGV4LXN0cigkZW5kLWNvbG9yKX0nLCBHcmFkaWVudFR5cGU9MSk7IC8vIElFOSBhbmQgZG93blxufVxuXG4vLyBWZXJ0aWNhbCBncmFkaWVudCwgZnJvbSB0b3AgdG8gYm90dG9tXG4vL1xuLy8gQ3JlYXRlcyB0d28gY29sb3Igc3RvcHMsIHN0YXJ0IGFuZCBlbmQsIGJ5IHNwZWNpZnlpbmcgYSBjb2xvciBhbmQgcG9zaXRpb24gZm9yIGVhY2ggY29sb3Igc3RvcC5cbi8vIENvbG9yIHN0b3BzIGFyZSBub3QgYXZhaWxhYmxlIGluIElFOSBhbmQgYmVsb3cuXG5AbWl4aW4gZ3JhZGllbnQtdmVydGljYWwoJHN0YXJ0LWNvbG9yOiAjNTU1LCAkZW5kLWNvbG9yOiAjMzMzLCAkc3RhcnQtcGVyY2VudDogMCUsICRlbmQtcGVyY2VudDogMTAwJSkge1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsICRzdGFydC1jb2xvciAkc3RhcnQtcGVyY2VudCwgJGVuZC1jb2xvciAkZW5kLXBlcmNlbnQpOyAgLy8gU2FmYXJpIDUuMS02LCBDaHJvbWUgMTArXG4gIGJhY2tncm91bmQtaW1hZ2U6IC1vLWxpbmVhci1ncmFkaWVudCh0b3AsICRzdGFydC1jb2xvciAkc3RhcnQtcGVyY2VudCwgJGVuZC1jb2xvciAkZW5kLXBlcmNlbnQpOyAgLy8gT3BlcmEgMTJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgJHN0YXJ0LWNvbG9yICRzdGFydC1wZXJjZW50LCAkZW5kLWNvbG9yICRlbmQtcGVyY2VudCk7IC8vIFN0YW5kYXJkLCBJRTEwLCBGaXJlZm94IDE2KywgT3BlcmEgMTIuMTArLCBTYWZhcmkgNyssIENocm9tZSAyNitcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xuICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudChzdGFydENvbG9yc3RyPScje2llLWhleC1zdHIoJHN0YXJ0LWNvbG9yKX0nLCBlbmRDb2xvcnN0cj0nI3tpZS1oZXgtc3RyKCRlbmQtY29sb3IpfScsIEdyYWRpZW50VHlwZT0wKTsgLy8gSUU5IGFuZCBkb3duXG59XG5cbkBtaXhpbiBncmFkaWVudC1kaXJlY3Rpb25hbCgkc3RhcnQtY29sb3I6ICM1NTUsICRlbmQtY29sb3I6ICMzMzMsICRkZWc6IDQ1ZGVnKSB7XG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoJGRlZywgJHN0YXJ0LWNvbG9yLCAkZW5kLWNvbG9yKTsgLy8gU2FmYXJpIDUuMS02LCBDaHJvbWUgMTArXG4gIGJhY2tncm91bmQtaW1hZ2U6IC1vLWxpbmVhci1ncmFkaWVudCgkZGVnLCAkc3RhcnQtY29sb3IsICRlbmQtY29sb3IpOyAvLyBPcGVyYSAxMlxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoJGRlZywgJHN0YXJ0LWNvbG9yLCAkZW5kLWNvbG9yKTsgLy8gU3RhbmRhcmQsIElFMTAsIEZpcmVmb3ggMTYrLCBPcGVyYSAxMi4xMCssIFNhZmFyaSA3KywgQ2hyb21lIDI2K1xufVxuQG1peGluIGdyYWRpZW50LWhvcml6b250YWwtdGhyZWUtY29sb3JzKCRzdGFydC1jb2xvcjogIzAwYjNlZSwgJG1pZC1jb2xvcjogIzdhNDNiNiwgJGNvbG9yLXN0b3A6IDUwJSwgJGVuZC1jb2xvcjogI2MzMzI1Zikge1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWZ0LCAkc3RhcnQtY29sb3IsICRtaWQtY29sb3IgJGNvbG9yLXN0b3AsICRlbmQtY29sb3IpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtby1saW5lYXItZ3JhZGllbnQobGVmdCwgJHN0YXJ0LWNvbG9yLCAkbWlkLWNvbG9yICRjb2xvci1zdG9wLCAkZW5kLWNvbG9yKTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAkc3RhcnQtY29sb3IsICRtaWQtY29sb3IgJGNvbG9yLXN0b3AsICRlbmQtY29sb3IpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudChzdGFydENvbG9yc3RyPScje2llLWhleC1zdHIoJHN0YXJ0LWNvbG9yKX0nLCBlbmRDb2xvcnN0cj0nI3tpZS1oZXgtc3RyKCRlbmQtY29sb3IpfScsIEdyYWRpZW50VHlwZT0xKTsgLy8gSUU5IGFuZCBkb3duLCBnZXRzIG5vIGNvbG9yLXN0b3AgYXQgYWxsIGZvciBwcm9wZXIgZmFsbGJhY2tcbn1cbkBtaXhpbiBncmFkaWVudC12ZXJ0aWNhbC10aHJlZS1jb2xvcnMoJHN0YXJ0LWNvbG9yOiAjMDBiM2VlLCAkbWlkLWNvbG9yOiAjN2E0M2I2LCAkY29sb3Itc3RvcDogNTAlLCAkZW5kLWNvbG9yOiAjYzMzMjVmKSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KCRzdGFydC1jb2xvciwgJG1pZC1jb2xvciAkY29sb3Itc3RvcCwgJGVuZC1jb2xvcik7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC1vLWxpbmVhci1ncmFkaWVudCgkc3RhcnQtY29sb3IsICRtaWQtY29sb3IgJGNvbG9yLXN0b3AsICRlbmQtY29sb3IpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoJHN0YXJ0LWNvbG9yLCAkbWlkLWNvbG9yICRjb2xvci1zdG9wLCAkZW5kLWNvbG9yKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoc3RhcnRDb2xvcnN0cj0nI3tpZS1oZXgtc3RyKCRzdGFydC1jb2xvcil9JywgZW5kQ29sb3JzdHI9JyN7aWUtaGV4LXN0cigkZW5kLWNvbG9yKX0nLCBHcmFkaWVudFR5cGU9MCk7IC8vIElFOSBhbmQgZG93biwgZ2V0cyBubyBjb2xvci1zdG9wIGF0IGFsbCBmb3IgcHJvcGVyIGZhbGxiYWNrXG59XG5AbWl4aW4gZ3JhZGllbnQtcmFkaWFsKCRpbm5lci1jb2xvcjogIzU1NSwgJG91dGVyLWNvbG9yOiAjMzMzKSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgJGlubmVyLWNvbG9yLCAkb3V0ZXItY29sb3IpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCAkaW5uZXItY29sb3IsICRvdXRlci1jb2xvcik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG5AbWl4aW4gZ3JhZGllbnQtc3RyaXBlZCgkY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsLjE1KSwgJGFuZ2xlOiA0NWRlZykge1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgkYW5nbGUsICRjb2xvciAyNSUsIHRyYW5zcGFyZW50IDI1JSwgdHJhbnNwYXJlbnQgNTAlLCAkY29sb3IgNTAlLCAkY29sb3IgNzUlLCB0cmFuc3BhcmVudCA3NSUsIHRyYW5zcGFyZW50KTtcbiAgYmFja2dyb3VuZC1pbWFnZTogLW8tbGluZWFyLWdyYWRpZW50KCRhbmdsZSwgJGNvbG9yIDI1JSwgdHJhbnNwYXJlbnQgMjUlLCB0cmFuc3BhcmVudCA1MCUsICRjb2xvciA1MCUsICRjb2xvciA3NSUsIHRyYW5zcGFyZW50IDc1JSwgdHJhbnNwYXJlbnQpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoJGFuZ2xlLCAkY29sb3IgMjUlLCB0cmFuc3BhcmVudCAyNSUsIHRyYW5zcGFyZW50IDUwJSwgJGNvbG9yIDUwJSwgJGNvbG9yIDc1JSwgdHJhbnNwYXJlbnQgNzUlLCB0cmFuc3BhcmVudCk7XG59XG4iLCIvLyBDbGVhcmZpeFxuLy9cbi8vIEZvciBtb2Rlcm4gYnJvd3NlcnNcbi8vIDEuIFRoZSBzcGFjZSBjb250ZW50IGlzIG9uZSB3YXkgdG8gYXZvaWQgYW4gT3BlcmEgYnVnIHdoZW4gdGhlXG4vLyAgICBjb250ZW50ZWRpdGFibGUgYXR0cmlidXRlIGlzIGluY2x1ZGVkIGFueXdoZXJlIGVsc2UgaW4gdGhlIGRvY3VtZW50LlxuLy8gICAgT3RoZXJ3aXNlIGl0IGNhdXNlcyBzcGFjZSB0byBhcHBlYXIgYXQgdGhlIHRvcCBhbmQgYm90dG9tIG9mIGVsZW1lbnRzXG4vLyAgICB0aGF0IGFyZSBjbGVhcmZpeGVkLlxuLy8gMi4gVGhlIHVzZSBvZiBgdGFibGVgIHJhdGhlciB0aGFuIGBibG9ja2AgaXMgb25seSBuZWNlc3NhcnkgaWYgdXNpbmdcbi8vICAgIGA6YmVmb3JlYCB0byBjb250YWluIHRoZSB0b3AtbWFyZ2lucyBvZiBjaGlsZCBlbGVtZW50cy5cbi8vXG4vLyBTb3VyY2U6IGh0dHA6Ly9uaWNvbGFzZ2FsbGFnaGVyLmNvbS9taWNyby1jbGVhcmZpeC1oYWNrL1xuXG5AbWl4aW4gY2xlYXJmaXgoKSB7XG4gICY6YmVmb3JlLFxuICAmOmFmdGVyIHtcbiAgICBjb250ZW50OiBcIiBcIjsgLy8gMVxuICAgIGRpc3BsYXk6IHRhYmxlOyAvLyAyXG4gIH1cbiAgJjphZnRlciB7XG4gICAgY2xlYXI6IGJvdGg7XG4gIH1cbn1cbiIsIi8vIENlbnRlci1hbGlnbiBhIGJsb2NrIGxldmVsIGVsZW1lbnRcblxuQG1peGluIGNlbnRlci1ibG9jaygpIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG4iLCIvLyBOYXZiYXIgdmVydGljYWwgYWxpZ25cbi8vXG4vLyBWZXJ0aWNhbGx5IGNlbnRlciBlbGVtZW50cyBpbiB0aGUgbmF2YmFyLlxuLy8gRXhhbXBsZTogYW4gZWxlbWVudCBoYXMgYSBoZWlnaHQgb2YgMzBweCwgc28gd3JpdGUgb3V0IGAubmF2YmFyLXZlcnRpY2FsLWFsaWduKDMwcHgpO2AgdG8gY2FsY3VsYXRlIHRoZSBhcHByb3ByaWF0ZSB0b3AgbWFyZ2luLlxuXG5AbWl4aW4gbmF2YmFyLXZlcnRpY2FsLWFsaWduKCRlbGVtZW50LWhlaWdodCkge1xuICBtYXJnaW4tdG9wOiAoKCRuYXZiYXItaGVpZ2h0IC0gJGVsZW1lbnQtaGVpZ2h0KSAvIDIpO1xuICBtYXJnaW4tYm90dG9tOiAoKCRuYXZiYXItaGVpZ2h0IC0gJGVsZW1lbnQtaGVpZ2h0KSAvIDIpO1xufVxuIiwiLy8gRnJhbWV3b3JrIGdyaWQgZ2VuZXJhdGlvblxuLy9cbi8vIFVzZWQgb25seSBieSBCb290c3RyYXAgdG8gZ2VuZXJhdGUgdGhlIGNvcnJlY3QgbnVtYmVyIG9mIGdyaWQgY2xhc3NlcyBnaXZlblxuLy8gYW55IHZhbHVlIG9mIGAkZ3JpZC1jb2x1bW5zYC5cblxuLy8gW2NvbnZlcnRlcl0gVGhpcyBpcyBkZWZpbmVkIHJlY3Vyc2l2ZWx5IGluIExFU1MsIGJ1dCBTYXNzIHN1cHBvcnRzIHJlYWwgbG9vcHNcbkBtaXhpbiBtYWtlLWdyaWQtY29sdW1ucygkaTogMSwgJGxpc3Q6IFwiLmNvbC14cy0jeyRpfSwgLmNvbC1zbS0jeyRpfSwgLmNvbC1tZC0jeyRpfSwgLmNvbC1sZy0jeyRpfVwiKSB7XG4gIEBmb3IgJGkgZnJvbSAoMSArIDEpIHRocm91Z2ggJGdyaWQtY29sdW1ucyB7XG4gICAgJGxpc3Q6IFwiI3skbGlzdH0sIC5jb2wteHMtI3skaX0sIC5jb2wtc20tI3skaX0sIC5jb2wtbWQtI3skaX0sIC5jb2wtbGctI3skaX1cIjtcbiAgfVxuICAjeyRsaXN0fSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIC8vIFByZXZlbnQgY29sdW1ucyBmcm9tIGNvbGxhcHNpbmcgd2hlbiBlbXB0eVxuICAgIG1pbi1oZWlnaHQ6IDFweDtcbiAgICAvLyBJbm5lciBndXR0ZXIgdmlhIHBhZGRpbmdcbiAgICBwYWRkaW5nLWxlZnQ6ICBjZWlsKCgkZ3JpZC1ndXR0ZXItd2lkdGggLyAyKSk7XG4gICAgcGFkZGluZy1yaWdodDogZmxvb3IoKCRncmlkLWd1dHRlci13aWR0aCAvIDIpKTtcbiAgfVxufVxuXG5cbi8vIFtjb252ZXJ0ZXJdIFRoaXMgaXMgZGVmaW5lZCByZWN1cnNpdmVseSBpbiBMRVNTLCBidXQgU2FzcyBzdXBwb3J0cyByZWFsIGxvb3BzXG5AbWl4aW4gZmxvYXQtZ3JpZC1jb2x1bW5zKCRjbGFzcywgJGk6IDEsICRsaXN0OiBcIi5jb2wtI3skY2xhc3N9LSN7JGl9XCIpIHtcbiAgQGZvciAkaSBmcm9tICgxICsgMSkgdGhyb3VnaCAkZ3JpZC1jb2x1bW5zIHtcbiAgICAkbGlzdDogXCIjeyRsaXN0fSwgLmNvbC0jeyRjbGFzc30tI3skaX1cIjtcbiAgfVxuICAjeyRsaXN0fSB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gIH1cbn1cblxuXG5AbWl4aW4gY2FsYy1ncmlkLWNvbHVtbigkaW5kZXgsICRjbGFzcywgJHR5cGUpIHtcbiAgQGlmICgkdHlwZSA9PSB3aWR0aCkgYW5kICgkaW5kZXggPiAwKSB7XG4gICAgLmNvbC0jeyRjbGFzc30tI3skaW5kZXh9IHtcbiAgICAgIHdpZHRoOiBwZXJjZW50YWdlKCgkaW5kZXggLyAkZ3JpZC1jb2x1bW5zKSk7XG4gICAgfVxuICB9XG4gIEBpZiAoJHR5cGUgPT0gcHVzaCkgYW5kICgkaW5kZXggPiAwKSB7XG4gICAgLmNvbC0jeyRjbGFzc30tcHVzaC0jeyRpbmRleH0ge1xuICAgICAgbGVmdDogcGVyY2VudGFnZSgoJGluZGV4IC8gJGdyaWQtY29sdW1ucykpO1xuICAgIH1cbiAgfVxuICBAaWYgKCR0eXBlID09IHB1c2gpIGFuZCAoJGluZGV4ID09IDApIHtcbiAgICAuY29sLSN7JGNsYXNzfS1wdXNoLTAge1xuICAgICAgbGVmdDogYXV0bztcbiAgICB9XG4gIH1cbiAgQGlmICgkdHlwZSA9PSBwdWxsKSBhbmQgKCRpbmRleCA+IDApIHtcbiAgICAuY29sLSN7JGNsYXNzfS1wdWxsLSN7JGluZGV4fSB7XG4gICAgICByaWdodDogcGVyY2VudGFnZSgoJGluZGV4IC8gJGdyaWQtY29sdW1ucykpO1xuICAgIH1cbiAgfVxuICBAaWYgKCR0eXBlID09IHB1bGwpIGFuZCAoJGluZGV4ID09IDApIHtcbiAgICAuY29sLSN7JGNsYXNzfS1wdWxsLTAge1xuICAgICAgcmlnaHQ6IGF1dG87XG4gICAgfVxuICB9XG4gIEBpZiAoJHR5cGUgPT0gb2Zmc2V0KSB7XG4gICAgLmNvbC0jeyRjbGFzc30tb2Zmc2V0LSN7JGluZGV4fSB7XG4gICAgICBtYXJnaW4tbGVmdDogcGVyY2VudGFnZSgoJGluZGV4IC8gJGdyaWQtY29sdW1ucykpO1xuICAgIH1cbiAgfVxufVxuXG4vLyBbY29udmVydGVyXSBUaGlzIGlzIGRlZmluZWQgcmVjdXJzaXZlbHkgaW4gTEVTUywgYnV0IFNhc3Mgc3VwcG9ydHMgcmVhbCBsb29wc1xuQG1peGluIGxvb3AtZ3JpZC1jb2x1bW5zKCRjb2x1bW5zLCAkY2xhc3MsICR0eXBlKSB7XG4gIEBmb3IgJGkgZnJvbSAwIHRocm91Z2ggJGNvbHVtbnMge1xuICAgIEBpbmNsdWRlIGNhbGMtZ3JpZC1jb2x1bW4oJGksICRjbGFzcywgJHR5cGUpO1xuICB9XG59XG5cblxuLy8gQ3JlYXRlIGdyaWQgZm9yIHNwZWNpZmljIGNsYXNzXG5AbWl4aW4gbWFrZS1ncmlkKCRjbGFzcykge1xuICBAaW5jbHVkZSBmbG9hdC1ncmlkLWNvbHVtbnMoJGNsYXNzKTtcbiAgQGluY2x1ZGUgbG9vcC1ncmlkLWNvbHVtbnMoJGdyaWQtY29sdW1ucywgJGNsYXNzLCB3aWR0aCk7XG4gIEBpbmNsdWRlIGxvb3AtZ3JpZC1jb2x1bW5zKCRncmlkLWNvbHVtbnMsICRjbGFzcywgcHVsbCk7XG4gIEBpbmNsdWRlIGxvb3AtZ3JpZC1jb2x1bW5zKCRncmlkLWNvbHVtbnMsICRjbGFzcywgcHVzaCk7XG4gIEBpbmNsdWRlIGxvb3AtZ3JpZC1jb2x1bW5zKCRncmlkLWNvbHVtbnMsICRjbGFzcywgb2Zmc2V0KTtcbn1cbiIsIi8vIEdyaWQgc3lzdGVtXG4vL1xuLy8gR2VuZXJhdGUgc2VtYW50aWMgZ3JpZCBjb2x1bW5zIHdpdGggdGhlc2UgbWl4aW5zLlxuXG4vLyBDZW50ZXJlZCBjb250YWluZXIgZWxlbWVudFxuQG1peGluIGNvbnRhaW5lci1maXhlZCgkZ3V0dGVyOiAkZ3JpZC1ndXR0ZXItd2lkdGgpIHtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgcGFkZGluZy1sZWZ0OiAgZmxvb3IoKCRndXR0ZXIgLyAyKSk7XG4gIHBhZGRpbmctcmlnaHQ6IGNlaWwoKCRndXR0ZXIgLyAyKSk7XG4gIEBpbmNsdWRlIGNsZWFyZml4O1xufVxuXG4vLyBDcmVhdGVzIGEgd3JhcHBlciBmb3IgYSBzZXJpZXMgb2YgY29sdW1uc1xuQG1peGluIG1ha2Utcm93KCRndXR0ZXI6ICRncmlkLWd1dHRlci13aWR0aCkge1xuICBtYXJnaW4tbGVmdDogIGNlaWwoKCRndXR0ZXIgLyAtMikpO1xuICBtYXJnaW4tcmlnaHQ6IGZsb29yKCgkZ3V0dGVyIC8gLTIpKTtcbiAgQGluY2x1ZGUgY2xlYXJmaXg7XG59XG5cbi8vIEdlbmVyYXRlIHRoZSBleHRyYSBzbWFsbCBjb2x1bW5zXG5AbWl4aW4gbWFrZS14cy1jb2x1bW4oJGNvbHVtbnMsICRndXR0ZXI6ICRncmlkLWd1dHRlci13aWR0aCkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogcGVyY2VudGFnZSgoJGNvbHVtbnMgLyAkZ3JpZC1jb2x1bW5zKSk7XG4gIG1pbi1oZWlnaHQ6IDFweDtcbiAgcGFkZGluZy1sZWZ0OiAgKCRndXR0ZXIgLyAyKTtcbiAgcGFkZGluZy1yaWdodDogKCRndXR0ZXIgLyAyKTtcbn1cbkBtaXhpbiBtYWtlLXhzLWNvbHVtbi1vZmZzZXQoJGNvbHVtbnMpIHtcbiAgbWFyZ2luLWxlZnQ6IHBlcmNlbnRhZ2UoKCRjb2x1bW5zIC8gJGdyaWQtY29sdW1ucykpO1xufVxuQG1peGluIG1ha2UteHMtY29sdW1uLXB1c2goJGNvbHVtbnMpIHtcbiAgbGVmdDogcGVyY2VudGFnZSgoJGNvbHVtbnMgLyAkZ3JpZC1jb2x1bW5zKSk7XG59XG5AbWl4aW4gbWFrZS14cy1jb2x1bW4tcHVsbCgkY29sdW1ucykge1xuICByaWdodDogcGVyY2VudGFnZSgoJGNvbHVtbnMgLyAkZ3JpZC1jb2x1bW5zKSk7XG59XG5cbi8vIEdlbmVyYXRlIHRoZSBzbWFsbCBjb2x1bW5zXG5AbWl4aW4gbWFrZS1zbS1jb2x1bW4oJGNvbHVtbnMsICRndXR0ZXI6ICRncmlkLWd1dHRlci13aWR0aCkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1pbi1oZWlnaHQ6IDFweDtcbiAgcGFkZGluZy1sZWZ0OiAgKCRndXR0ZXIgLyAyKTtcbiAgcGFkZGluZy1yaWdodDogKCRndXR0ZXIgLyAyKTtcblxuICBAbWVkaWEgKG1pbi13aWR0aDogJHNjcmVlbi1zbS1taW4pIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICB3aWR0aDogcGVyY2VudGFnZSgoJGNvbHVtbnMgLyAkZ3JpZC1jb2x1bW5zKSk7XG4gIH1cbn1cbkBtaXhpbiBtYWtlLXNtLWNvbHVtbi1vZmZzZXQoJGNvbHVtbnMpIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6ICRzY3JlZW4tc20tbWluKSB7XG4gICAgbWFyZ2luLWxlZnQ6IHBlcmNlbnRhZ2UoKCRjb2x1bW5zIC8gJGdyaWQtY29sdW1ucykpO1xuICB9XG59XG5AbWl4aW4gbWFrZS1zbS1jb2x1bW4tcHVzaCgkY29sdW1ucykge1xuICBAbWVkaWEgKG1pbi13aWR0aDogJHNjcmVlbi1zbS1taW4pIHtcbiAgICBsZWZ0OiBwZXJjZW50YWdlKCgkY29sdW1ucyAvICRncmlkLWNvbHVtbnMpKTtcbiAgfVxufVxuQG1peGluIG1ha2Utc20tY29sdW1uLXB1bGwoJGNvbHVtbnMpIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6ICRzY3JlZW4tc20tbWluKSB7XG4gICAgcmlnaHQ6IHBlcmNlbnRhZ2UoKCRjb2x1bW5zIC8gJGdyaWQtY29sdW1ucykpO1xuICB9XG59XG5cbi8vIEdlbmVyYXRlIHRoZSBtZWRpdW0gY29sdW1uc1xuQG1peGluIG1ha2UtbWQtY29sdW1uKCRjb2x1bW5zLCAkZ3V0dGVyOiAkZ3JpZC1ndXR0ZXItd2lkdGgpIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtaW4taGVpZ2h0OiAxcHg7XG4gIHBhZGRpbmctbGVmdDogICgkZ3V0dGVyIC8gMik7XG4gIHBhZGRpbmctcmlnaHQ6ICgkZ3V0dGVyIC8gMik7XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6ICRzY3JlZW4tbWQtbWluKSB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgd2lkdGg6IHBlcmNlbnRhZ2UoKCRjb2x1bW5zIC8gJGdyaWQtY29sdW1ucykpO1xuICB9XG59XG5AbWl4aW4gbWFrZS1tZC1jb2x1bW4tb2Zmc2V0KCRjb2x1bW5zKSB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAkc2NyZWVuLW1kLW1pbikge1xuICAgIG1hcmdpbi1sZWZ0OiBwZXJjZW50YWdlKCgkY29sdW1ucyAvICRncmlkLWNvbHVtbnMpKTtcbiAgfVxufVxuQG1peGluIG1ha2UtbWQtY29sdW1uLXB1c2goJGNvbHVtbnMpIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6ICRzY3JlZW4tbWQtbWluKSB7XG4gICAgbGVmdDogcGVyY2VudGFnZSgoJGNvbHVtbnMgLyAkZ3JpZC1jb2x1bW5zKSk7XG4gIH1cbn1cbkBtaXhpbiBtYWtlLW1kLWNvbHVtbi1wdWxsKCRjb2x1bW5zKSB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAkc2NyZWVuLW1kLW1pbikge1xuICAgIHJpZ2h0OiBwZXJjZW50YWdlKCgkY29sdW1ucyAvICRncmlkLWNvbHVtbnMpKTtcbiAgfVxufVxuXG4vLyBHZW5lcmF0ZSB0aGUgbGFyZ2UgY29sdW1uc1xuQG1peGluIG1ha2UtbGctY29sdW1uKCRjb2x1bW5zLCAkZ3V0dGVyOiAkZ3JpZC1ndXR0ZXItd2lkdGgpIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtaW4taGVpZ2h0OiAxcHg7XG4gIHBhZGRpbmctbGVmdDogICgkZ3V0dGVyIC8gMik7XG4gIHBhZGRpbmctcmlnaHQ6ICgkZ3V0dGVyIC8gMik7XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6ICRzY3JlZW4tbGctbWluKSB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgd2lkdGg6IHBlcmNlbnRhZ2UoKCRjb2x1bW5zIC8gJGdyaWQtY29sdW1ucykpO1xuICB9XG59XG5AbWl4aW4gbWFrZS1sZy1jb2x1bW4tb2Zmc2V0KCRjb2x1bW5zKSB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAkc2NyZWVuLWxnLW1pbikge1xuICAgIG1hcmdpbi1sZWZ0OiBwZXJjZW50YWdlKCgkY29sdW1ucyAvICRncmlkLWNvbHVtbnMpKTtcbiAgfVxufVxuQG1peGluIG1ha2UtbGctY29sdW1uLXB1c2goJGNvbHVtbnMpIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6ICRzY3JlZW4tbGctbWluKSB7XG4gICAgbGVmdDogcGVyY2VudGFnZSgoJGNvbHVtbnMgLyAkZ3JpZC1jb2x1bW5zKSk7XG4gIH1cbn1cbkBtaXhpbiBtYWtlLWxnLWNvbHVtbi1wdWxsKCRjb2x1bW5zKSB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAkc2NyZWVuLWxnLW1pbikge1xuICAgIHJpZ2h0OiBwZXJjZW50YWdlKCgkY29sdW1ucyAvICRncmlkLWNvbHVtbnMpKTtcbiAgfVxufVxuIiwiJGJvb3RzdHJhcC1zYXNzLWFzc2V0LWhlbHBlcjogZmFsc2UgIWRlZmF1bHQ7XG4vL1xuLy8gVmFyaWFibGVzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cbi8vPT0gQ29sb3JzXG4vL1xuLy8jIyBHcmF5IGFuZCBicmFuZCBjb2xvcnMgZm9yIHVzZSBhY3Jvc3MgQm9vdHN0cmFwLlxuXG4kZ3JheS1iYXNlOiAgICAgICAgICAgICAgIzAwMCAhZGVmYXVsdDtcbiRncmF5LWRhcmtlcjogICAgICAgICAgICBsaWdodGVuKCRncmF5LWJhc2UsIDEzLjUlKSAhZGVmYXVsdDsgLy8gIzIyMlxuJGdyYXktZGFyazogICAgICAgICAgICAgIGxpZ2h0ZW4oJGdyYXktYmFzZSwgMjAlKSAhZGVmYXVsdDsgICAvLyAjMzMzXG4kZ3JheTogICAgICAgICAgICAgICAgICAgbGlnaHRlbigkZ3JheS1iYXNlLCAzMy41JSkgIWRlZmF1bHQ7IC8vICM1NTVcbiRncmF5LWxpZ2h0OiAgICAgICAgICAgICBsaWdodGVuKCRncmF5LWJhc2UsIDQ2LjclKSAhZGVmYXVsdDsgLy8gIzc3N1xuJGdyYXktbGlnaHRlcjogICAgICAgICAgIGxpZ2h0ZW4oJGdyYXktYmFzZSwgOTMuNSUpICFkZWZhdWx0OyAvLyAjZWVlXG5cbiRicmFuZC1wcmltYXJ5OiAgICAgICAgIGRhcmtlbigjNDI4YmNhLCA2LjUlKSAhZGVmYXVsdDsgLy8gIzMzN2FiN1xuJGJyYW5kLXN1Y2Nlc3M6ICAgICAgICAgIzVjYjg1YyAhZGVmYXVsdDtcbiRicmFuZC1pbmZvOiAgICAgICAgICAgICM1YmMwZGUgIWRlZmF1bHQ7XG4kYnJhbmQtd2FybmluZzogICAgICAgICAjZjBhZDRlICFkZWZhdWx0O1xuJGJyYW5kLWRhbmdlcjogICAgICAgICAgI2Q5NTM0ZiAhZGVmYXVsdDtcblxuXG4vLz09IFNjYWZmb2xkaW5nXG4vL1xuLy8jIyBTZXR0aW5ncyBmb3Igc29tZSBvZiB0aGUgbW9zdCBnbG9iYWwgc3R5bGVzLlxuXG4vLyoqIEJhY2tncm91bmQgY29sb3IgZm9yIGA8Ym9keT5gLlxuJGJvZHktYmc6ICAgICAgICAgICAgICAgI2ZmZiAhZGVmYXVsdDtcbi8vKiogR2xvYmFsIHRleHQgY29sb3Igb24gYDxib2R5PmAuXG4kdGV4dC1jb2xvcjogICAgICAgICAgICAkZ3JheS1kYXJrICFkZWZhdWx0O1xuXG4vLyoqIEdsb2JhbCB0ZXh0dWFsIGxpbmsgY29sb3IuXG4kbGluay1jb2xvcjogICAgICAgICAgICAkYnJhbmQtcHJpbWFyeSAhZGVmYXVsdDtcbi8vKiogTGluayBob3ZlciBjb2xvciBzZXQgdmlhIGBkYXJrZW4oKWAgZnVuY3Rpb24uXG4kbGluay1ob3Zlci1jb2xvcjogICAgICBkYXJrZW4oJGxpbmstY29sb3IsIDE1JSkgIWRlZmF1bHQ7XG4vLyoqIExpbmsgaG92ZXIgZGVjb3JhdGlvbi5cbiRsaW5rLWhvdmVyLWRlY29yYXRpb246IHVuZGVybGluZSAhZGVmYXVsdDtcblxuXG4vLz09IFR5cG9ncmFwaHlcbi8vXG4vLyMjIEZvbnQsIGxpbmUtaGVpZ2h0LCBhbmQgY29sb3IgZm9yIGJvZHkgdGV4dCwgaGVhZGluZ3MsIGFuZCBtb3JlLlxuXG4kZm9udC1mYW1pbHktc2Fucy1zZXJpZjogIFwiSGVsdmV0aWNhIE5ldWVcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiAhZGVmYXVsdDtcbiRmb250LWZhbWlseS1zZXJpZjogICAgICAgR2VvcmdpYSwgXCJUaW1lcyBOZXcgUm9tYW5cIiwgVGltZXMsIHNlcmlmICFkZWZhdWx0O1xuLy8qKiBEZWZhdWx0IG1vbm9zcGFjZSBmb250cyBmb3IgYDxjb2RlPmAsIGA8a2JkPmAsIGFuZCBgPHByZT5gLlxuJGZvbnQtZmFtaWx5LW1vbm9zcGFjZTogICBNZW5sbywgTW9uYWNvLCBDb25zb2xhcywgXCJDb3VyaWVyIE5ld1wiLCBtb25vc3BhY2UgIWRlZmF1bHQ7XG4kZm9udC1mYW1pbHktYmFzZTogICAgICAgICRmb250LWZhbWlseS1zYW5zLXNlcmlmICFkZWZhdWx0O1xuXG4kZm9udC1zaXplLWJhc2U6ICAgICAgICAgIDE0cHggIWRlZmF1bHQ7XG4kZm9udC1zaXplLWxhcmdlOiAgICAgICAgIGNlaWwoKCRmb250LXNpemUtYmFzZSAqIDEuMjUpKSAhZGVmYXVsdDsgLy8gfjE4cHhcbiRmb250LXNpemUtc21hbGw6ICAgICAgICAgY2VpbCgoJGZvbnQtc2l6ZS1iYXNlICogMC44NSkpICFkZWZhdWx0OyAvLyB+MTJweFxuXG4kZm9udC1zaXplLWgxOiAgICAgICAgICAgIGZsb29yKCgkZm9udC1zaXplLWJhc2UgKiAyLjYpKSAhZGVmYXVsdDsgLy8gfjM2cHhcbiRmb250LXNpemUtaDI6ICAgICAgICAgICAgZmxvb3IoKCRmb250LXNpemUtYmFzZSAqIDIuMTUpKSAhZGVmYXVsdDsgLy8gfjMwcHhcbiRmb250LXNpemUtaDM6ICAgICAgICAgICAgY2VpbCgoJGZvbnQtc2l6ZS1iYXNlICogMS43KSkgIWRlZmF1bHQ7IC8vIH4yNHB4XG4kZm9udC1zaXplLWg0OiAgICAgICAgICAgIGNlaWwoKCRmb250LXNpemUtYmFzZSAqIDEuMjUpKSAhZGVmYXVsdDsgLy8gfjE4cHhcbiRmb250LXNpemUtaDU6ICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICFkZWZhdWx0O1xuJGZvbnQtc2l6ZS1oNjogICAgICAgICAgICBjZWlsKCgkZm9udC1zaXplLWJhc2UgKiAwLjg1KSkgIWRlZmF1bHQ7IC8vIH4xMnB4XG5cbi8vKiogVW5pdC1sZXNzIGBsaW5lLWhlaWdodGAgZm9yIHVzZSBpbiBjb21wb25lbnRzIGxpa2UgYnV0dG9ucy5cbiRsaW5lLWhlaWdodC1iYXNlOiAgICAgICAgMS40Mjg1NzE0MjkgIWRlZmF1bHQ7IC8vIDIwLzE0XG4vLyoqIENvbXB1dGVkIFwibGluZS1oZWlnaHRcIiAoYGZvbnQtc2l6ZWAgKiBgbGluZS1oZWlnaHRgKSBmb3IgdXNlIHdpdGggYG1hcmdpbmAsIGBwYWRkaW5nYCwgZXRjLlxuJGxpbmUtaGVpZ2h0LWNvbXB1dGVkOiAgICBmbG9vcigoJGZvbnQtc2l6ZS1iYXNlICogJGxpbmUtaGVpZ2h0LWJhc2UpKSAhZGVmYXVsdDsgLy8gfjIwcHhcblxuLy8qKiBCeSBkZWZhdWx0LCB0aGlzIGluaGVyaXRzIGZyb20gdGhlIGA8Ym9keT5gLlxuJGhlYWRpbmdzLWZvbnQtZmFtaWx5OiAgICBpbmhlcml0ICFkZWZhdWx0O1xuJGhlYWRpbmdzLWZvbnQtd2VpZ2h0OiAgICA1MDAgIWRlZmF1bHQ7XG4kaGVhZGluZ3MtbGluZS1oZWlnaHQ6ICAgIDEuMSAhZGVmYXVsdDtcbiRoZWFkaW5ncy1jb2xvcjogICAgICAgICAgaW5oZXJpdCAhZGVmYXVsdDtcblxuXG4vLz09IEljb25vZ3JhcGh5XG4vL1xuLy8jIyBTcGVjaWZ5IGN1c3RvbSBsb2NhdGlvbiBhbmQgZmlsZW5hbWUgb2YgdGhlIGluY2x1ZGVkIEdseXBoaWNvbnMgaWNvbiBmb250LiBVc2VmdWwgZm9yIHRob3NlIGluY2x1ZGluZyBCb290c3RyYXAgdmlhIEJvd2VyLlxuXG4vLyoqIExvYWQgZm9udHMgZnJvbSB0aGlzIGRpcmVjdG9yeS5cblxuLy8gW2NvbnZlcnRlcl0gSWYgJGJvb3RzdHJhcC1zYXNzLWFzc2V0LWhlbHBlciBpZiB1c2VkLCBwcm92aWRlIHBhdGggcmVsYXRpdmUgdG8gdGhlIGFzc2V0cyBsb2FkIHBhdGguXG4vLyBbY29udmVydGVyXSBUaGlzIGlzIGJlY2F1c2Ugc29tZSBhc3NldCBoZWxwZXJzLCBzdWNoIGFzIFNwcm9ja2V0cywgZG8gbm90IHdvcmsgd2l0aCBmaWxlLXJlbGF0aXZlIHBhdGhzLlxuJGljb24tZm9udC1wYXRoOiBpZigkYm9vdHN0cmFwLXNhc3MtYXNzZXQtaGVscGVyLCBcImJvb3RzdHJhcC9cIiwgXCIuLi9mb250cy9ib290c3RyYXAvXCIpICFkZWZhdWx0O1xuXG4vLyoqIEZpbGUgbmFtZSBmb3IgYWxsIGZvbnQgZmlsZXMuXG4kaWNvbi1mb250LW5hbWU6ICAgICAgICAgIFwiZ2x5cGhpY29ucy1oYWxmbGluZ3MtcmVndWxhclwiICFkZWZhdWx0O1xuLy8qKiBFbGVtZW50IElEIHdpdGhpbiBTVkcgaWNvbiBmaWxlLlxuJGljb24tZm9udC1zdmctaWQ6ICAgICAgICBcImdseXBoaWNvbnNfaGFsZmxpbmdzcmVndWxhclwiICFkZWZhdWx0O1xuXG5cbi8vPT0gQ29tcG9uZW50c1xuLy9cbi8vIyMgRGVmaW5lIGNvbW1vbiBwYWRkaW5nIGFuZCBib3JkZXIgcmFkaXVzIHNpemVzIGFuZCBtb3JlLiBWYWx1ZXMgYmFzZWQgb24gMTRweCB0ZXh0IGFuZCAxLjQyOCBsaW5lLWhlaWdodCAofjIwcHggdG8gc3RhcnQpLlxuXG4kcGFkZGluZy1iYXNlLXZlcnRpY2FsOiAgICAgNnB4ICFkZWZhdWx0O1xuJHBhZGRpbmctYmFzZS1ob3Jpem9udGFsOiAgIDEycHggIWRlZmF1bHQ7XG5cbiRwYWRkaW5nLWxhcmdlLXZlcnRpY2FsOiAgICAxMHB4ICFkZWZhdWx0O1xuJHBhZGRpbmctbGFyZ2UtaG9yaXpvbnRhbDogIDE2cHggIWRlZmF1bHQ7XG5cbiRwYWRkaW5nLXNtYWxsLXZlcnRpY2FsOiAgICA1cHggIWRlZmF1bHQ7XG4kcGFkZGluZy1zbWFsbC1ob3Jpem9udGFsOiAgMTBweCAhZGVmYXVsdDtcblxuJHBhZGRpbmcteHMtdmVydGljYWw6ICAgICAgIDFweCAhZGVmYXVsdDtcbiRwYWRkaW5nLXhzLWhvcml6b250YWw6ICAgICA1cHggIWRlZmF1bHQ7XG5cbiRsaW5lLWhlaWdodC1sYXJnZTogICAgICAgICAxLjMzMzMzMzMgIWRlZmF1bHQ7IC8vIGV4dHJhIGRlY2ltYWxzIGZvciBXaW4gOC4xIENocm9tZVxuJGxpbmUtaGVpZ2h0LXNtYWxsOiAgICAgICAgIDEuNSAhZGVmYXVsdDtcblxuJGJvcmRlci1yYWRpdXMtYmFzZTogICAgICAgIDRweCAhZGVmYXVsdDtcbiRib3JkZXItcmFkaXVzLWxhcmdlOiAgICAgICA2cHggIWRlZmF1bHQ7XG4kYm9yZGVyLXJhZGl1cy1zbWFsbDogICAgICAgM3B4ICFkZWZhdWx0O1xuXG4vLyoqIEdsb2JhbCBjb2xvciBmb3IgYWN0aXZlIGl0ZW1zIChlLmcuLCBuYXZzIG9yIGRyb3Bkb3ducykuXG4kY29tcG9uZW50LWFjdGl2ZS1jb2xvcjogICAgI2ZmZiAhZGVmYXVsdDtcbi8vKiogR2xvYmFsIGJhY2tncm91bmQgY29sb3IgZm9yIGFjdGl2ZSBpdGVtcyAoZS5nLiwgbmF2cyBvciBkcm9wZG93bnMpLlxuJGNvbXBvbmVudC1hY3RpdmUtYmc6ICAgICAgICRicmFuZC1wcmltYXJ5ICFkZWZhdWx0O1xuXG4vLyoqIFdpZHRoIG9mIHRoZSBgYm9yZGVyYCBmb3IgZ2VuZXJhdGluZyBjYXJldHMgdGhhdCBpbmRpY2F0ZSBkcm9wZG93bnMuXG4kY2FyZXQtd2lkdGgtYmFzZTogICAgICAgICAgNHB4ICFkZWZhdWx0O1xuLy8qKiBDYXJldHMgaW5jcmVhc2Ugc2xpZ2h0bHkgaW4gc2l6ZSBmb3IgbGFyZ2VyIGNvbXBvbmVudHMuXG4kY2FyZXQtd2lkdGgtbGFyZ2U6ICAgICAgICAgNXB4ICFkZWZhdWx0O1xuXG5cbi8vPT0gVGFibGVzXG4vL1xuLy8jIyBDdXN0b21pemVzIHRoZSBgLnRhYmxlYCBjb21wb25lbnQgd2l0aCBiYXNpYyB2YWx1ZXMsIGVhY2ggdXNlZCBhY3Jvc3MgYWxsIHRhYmxlIHZhcmlhdGlvbnMuXG5cbi8vKiogUGFkZGluZyBmb3IgYDx0aD5gcyBhbmQgYDx0ZD5gcy5cbiR0YWJsZS1jZWxsLXBhZGRpbmc6ICAgICAgICAgICAgOHB4ICFkZWZhdWx0O1xuLy8qKiBQYWRkaW5nIGZvciBjZWxscyBpbiBgLnRhYmxlLWNvbmRlbnNlZGAuXG4kdGFibGUtY29uZGVuc2VkLWNlbGwtcGFkZGluZzogIDVweCAhZGVmYXVsdDtcblxuLy8qKiBEZWZhdWx0IGJhY2tncm91bmQgY29sb3IgdXNlZCBmb3IgYWxsIHRhYmxlcy5cbiR0YWJsZS1iZzogICAgICAgICAgICAgICAgICAgICAgdHJhbnNwYXJlbnQgIWRlZmF1bHQ7XG4vLyoqIEJhY2tncm91bmQgY29sb3IgdXNlZCBmb3IgYC50YWJsZS1zdHJpcGVkYC5cbiR0YWJsZS1iZy1hY2NlbnQ6ICAgICAgICAgICAgICAgI2Y5ZjlmOSAhZGVmYXVsdDtcbi8vKiogQmFja2dyb3VuZCBjb2xvciB1c2VkIGZvciBgLnRhYmxlLWhvdmVyYC5cbiR0YWJsZS1iZy1ob3ZlcjogICAgICAgICAgICAgICAgI2Y1ZjVmNSAhZGVmYXVsdDtcbiR0YWJsZS1iZy1hY3RpdmU6ICAgICAgICAgICAgICAgJHRhYmxlLWJnLWhvdmVyICFkZWZhdWx0O1xuXG4vLyoqIEJvcmRlciBjb2xvciBmb3IgdGFibGUgYW5kIGNlbGwgYm9yZGVycy5cbiR0YWJsZS1ib3JkZXItY29sb3I6ICAgICAgICAgICAgI2RkZCAhZGVmYXVsdDtcblxuXG4vLz09IEJ1dHRvbnNcbi8vXG4vLyMjIEZvciBlYWNoIG9mIEJvb3RzdHJhcCdzIGJ1dHRvbnMsIGRlZmluZSB0ZXh0LCBiYWNrZ3JvdW5kIGFuZCBib3JkZXIgY29sb3IuXG5cbiRidG4tZm9udC13ZWlnaHQ6ICAgICAgICAgICAgICAgIG5vcm1hbCAhZGVmYXVsdDtcblxuJGJ0bi1kZWZhdWx0LWNvbG9yOiAgICAgICAgICAgICAgIzMzMyAhZGVmYXVsdDtcbiRidG4tZGVmYXVsdC1iZzogICAgICAgICAgICAgICAgICNmZmYgIWRlZmF1bHQ7XG4kYnRuLWRlZmF1bHQtYm9yZGVyOiAgICAgICAgICAgICAjY2NjICFkZWZhdWx0O1xuXG4kYnRuLXByaW1hcnktY29sb3I6ICAgICAgICAgICAgICAjZmZmICFkZWZhdWx0O1xuJGJ0bi1wcmltYXJ5LWJnOiAgICAgICAgICAgICAgICAgJGJyYW5kLXByaW1hcnkgIWRlZmF1bHQ7XG4kYnRuLXByaW1hcnktYm9yZGVyOiAgICAgICAgICAgICBkYXJrZW4oJGJ0bi1wcmltYXJ5LWJnLCA1JSkgIWRlZmF1bHQ7XG5cbiRidG4tc3VjY2Vzcy1jb2xvcjogICAgICAgICAgICAgICNmZmYgIWRlZmF1bHQ7XG4kYnRuLXN1Y2Nlc3MtYmc6ICAgICAgICAgICAgICAgICAkYnJhbmQtc3VjY2VzcyAhZGVmYXVsdDtcbiRidG4tc3VjY2Vzcy1ib3JkZXI6ICAgICAgICAgICAgIGRhcmtlbigkYnRuLXN1Y2Nlc3MtYmcsIDUlKSAhZGVmYXVsdDtcblxuJGJ0bi1pbmZvLWNvbG9yOiAgICAgICAgICAgICAgICAgI2ZmZiAhZGVmYXVsdDtcbiRidG4taW5mby1iZzogICAgICAgICAgICAgICAgICAgICRicmFuZC1pbmZvICFkZWZhdWx0O1xuJGJ0bi1pbmZvLWJvcmRlcjogICAgICAgICAgICAgICAgZGFya2VuKCRidG4taW5mby1iZywgNSUpICFkZWZhdWx0O1xuXG4kYnRuLXdhcm5pbmctY29sb3I6ICAgICAgICAgICAgICAjZmZmICFkZWZhdWx0O1xuJGJ0bi13YXJuaW5nLWJnOiAgICAgICAgICAgICAgICAgJGJyYW5kLXdhcm5pbmcgIWRlZmF1bHQ7XG4kYnRuLXdhcm5pbmctYm9yZGVyOiAgICAgICAgICAgICBkYXJrZW4oJGJ0bi13YXJuaW5nLWJnLCA1JSkgIWRlZmF1bHQ7XG5cbiRidG4tZGFuZ2VyLWNvbG9yOiAgICAgICAgICAgICAgICNmZmYgIWRlZmF1bHQ7XG4kYnRuLWRhbmdlci1iZzogICAgICAgICAgICAgICAgICAkYnJhbmQtZGFuZ2VyICFkZWZhdWx0O1xuJGJ0bi1kYW5nZXItYm9yZGVyOiAgICAgICAgICAgICAgZGFya2VuKCRidG4tZGFuZ2VyLWJnLCA1JSkgIWRlZmF1bHQ7XG5cbiRidG4tbGluay1kaXNhYmxlZC1jb2xvcjogICAgICAgICRncmF5LWxpZ2h0ICFkZWZhdWx0O1xuXG4vLyBBbGxvd3MgZm9yIGN1c3RvbWl6aW5nIGJ1dHRvbiByYWRpdXMgaW5kZXBlbmRlbnRseSBmcm9tIGdsb2JhbCBib3JkZXIgcmFkaXVzXG4kYnRuLWJvcmRlci1yYWRpdXMtYmFzZTogICAgICAgICAkYm9yZGVyLXJhZGl1cy1iYXNlICFkZWZhdWx0O1xuJGJ0bi1ib3JkZXItcmFkaXVzLWxhcmdlOiAgICAgICAgJGJvcmRlci1yYWRpdXMtbGFyZ2UgIWRlZmF1bHQ7XG4kYnRuLWJvcmRlci1yYWRpdXMtc21hbGw6ICAgICAgICAkYm9yZGVyLXJhZGl1cy1zbWFsbCAhZGVmYXVsdDtcblxuXG4vLz09IEZvcm1zXG4vL1xuLy8jI1xuXG4vLyoqIGA8aW5wdXQ+YCBiYWNrZ3JvdW5kIGNvbG9yXG4kaW5wdXQtYmc6ICAgICAgICAgICAgICAgICAgICAgICAjZmZmICFkZWZhdWx0O1xuLy8qKiBgPGlucHV0IGRpc2FibGVkPmAgYmFja2dyb3VuZCBjb2xvclxuJGlucHV0LWJnLWRpc2FibGVkOiAgICAgICAgICAgICAgJGdyYXktbGlnaHRlciAhZGVmYXVsdDtcblxuLy8qKiBUZXh0IGNvbG9yIGZvciBgPGlucHV0PmBzXG4kaW5wdXQtY29sb3I6ICAgICAgICAgICAgICAgICAgICAkZ3JheSAhZGVmYXVsdDtcbi8vKiogYDxpbnB1dD5gIGJvcmRlciBjb2xvclxuJGlucHV0LWJvcmRlcjogICAgICAgICAgICAgICAgICAgI2NjYyAhZGVmYXVsdDtcblxuLy8gVE9ETzogUmVuYW1lIGAkaW5wdXQtYm9yZGVyLXJhZGl1c2AgdG8gYCRpbnB1dC1ib3JkZXItcmFkaXVzLWJhc2VgIGluIHY0XG4vLyoqIERlZmF1bHQgYC5mb3JtLWNvbnRyb2xgIGJvcmRlciByYWRpdXNcbi8vIFRoaXMgaGFzIG5vIGVmZmVjdCBvbiBgPHNlbGVjdD5gcyBpbiBzb21lIGJyb3dzZXJzLCBkdWUgdG8gdGhlIGxpbWl0ZWQgc3R5bGFiaWxpdHkgb2YgYDxzZWxlY3Q+YHMgaW4gQ1NTLlxuJGlucHV0LWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgJGJvcmRlci1yYWRpdXMtYmFzZSAhZGVmYXVsdDtcbi8vKiogTGFyZ2UgYC5mb3JtLWNvbnRyb2xgIGJvcmRlciByYWRpdXNcbiRpbnB1dC1ib3JkZXItcmFkaXVzLWxhcmdlOiAgICAgICRib3JkZXItcmFkaXVzLWxhcmdlICFkZWZhdWx0O1xuLy8qKiBTbWFsbCBgLmZvcm0tY29udHJvbGAgYm9yZGVyIHJhZGl1c1xuJGlucHV0LWJvcmRlci1yYWRpdXMtc21hbGw6ICAgICAgJGJvcmRlci1yYWRpdXMtc21hbGwgIWRlZmF1bHQ7XG5cbi8vKiogQm9yZGVyIGNvbG9yIGZvciBpbnB1dHMgb24gZm9jdXNcbiRpbnB1dC1ib3JkZXItZm9jdXM6ICAgICAgICAgICAgICM2NmFmZTkgIWRlZmF1bHQ7XG5cbi8vKiogUGxhY2Vob2xkZXIgdGV4dCBjb2xvclxuJGlucHV0LWNvbG9yLXBsYWNlaG9sZGVyOiAgICAgICAgIzk5OSAhZGVmYXVsdDtcblxuLy8qKiBEZWZhdWx0IGAuZm9ybS1jb250cm9sYCBoZWlnaHRcbiRpbnB1dC1oZWlnaHQtYmFzZTogICAgICAgICAgICAgICgkbGluZS1oZWlnaHQtY29tcHV0ZWQgKyAoJHBhZGRpbmctYmFzZS12ZXJ0aWNhbCAqIDIpICsgMikgIWRlZmF1bHQ7XG4vLyoqIExhcmdlIGAuZm9ybS1jb250cm9sYCBoZWlnaHRcbiRpbnB1dC1oZWlnaHQtbGFyZ2U6ICAgICAgICAgICAgIChjZWlsKCRmb250LXNpemUtbGFyZ2UgKiAkbGluZS1oZWlnaHQtbGFyZ2UpICsgKCRwYWRkaW5nLWxhcmdlLXZlcnRpY2FsICogMikgKyAyKSAhZGVmYXVsdDtcbi8vKiogU21hbGwgYC5mb3JtLWNvbnRyb2xgIGhlaWdodFxuJGlucHV0LWhlaWdodC1zbWFsbDogICAgICAgICAgICAgKGZsb29yKCRmb250LXNpemUtc21hbGwgKiAkbGluZS1oZWlnaHQtc21hbGwpICsgKCRwYWRkaW5nLXNtYWxsLXZlcnRpY2FsICogMikgKyAyKSAhZGVmYXVsdDtcblxuLy8qKiBgLmZvcm0tZ3JvdXBgIG1hcmdpblxuJGZvcm0tZ3JvdXAtbWFyZ2luLWJvdHRvbTogICAgICAgMTVweCAhZGVmYXVsdDtcblxuJGxlZ2VuZC1jb2xvcjogICAgICAgICAgICAgICAgICAgJGdyYXktZGFyayAhZGVmYXVsdDtcbiRsZWdlbmQtYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICNlNWU1ZTUgIWRlZmF1bHQ7XG5cbi8vKiogQmFja2dyb3VuZCBjb2xvciBmb3IgdGV4dHVhbCBpbnB1dCBhZGRvbnNcbiRpbnB1dC1ncm91cC1hZGRvbi1iZzogICAgICAgICAgICRncmF5LWxpZ2h0ZXIgIWRlZmF1bHQ7XG4vLyoqIEJvcmRlciBjb2xvciBmb3IgdGV4dHVhbCBpbnB1dCBhZGRvbnNcbiRpbnB1dC1ncm91cC1hZGRvbi1ib3JkZXItY29sb3I6ICRpbnB1dC1ib3JkZXIgIWRlZmF1bHQ7XG5cbi8vKiogRGlzYWJsZWQgY3Vyc29yIGZvciBmb3JtIGNvbnRyb2xzIGFuZCBidXR0b25zLlxuJGN1cnNvci1kaXNhYmxlZDogICAgICAgICAgICAgICAgbm90LWFsbG93ZWQgIWRlZmF1bHQ7XG5cblxuLy89PSBEcm9wZG93bnNcbi8vXG4vLyMjIERyb3Bkb3duIG1lbnUgY29udGFpbmVyIGFuZCBjb250ZW50cy5cblxuLy8qKiBCYWNrZ3JvdW5kIGZvciB0aGUgZHJvcGRvd24gbWVudS5cbiRkcm9wZG93bi1iZzogICAgICAgICAgICAgICAgICAgICNmZmYgIWRlZmF1bHQ7XG4vLyoqIERyb3Bkb3duIG1lbnUgYGJvcmRlci1jb2xvcmAuXG4kZHJvcGRvd24tYm9yZGVyOiAgICAgICAgICAgICAgICByZ2JhKDAsMCwwLC4xNSkgIWRlZmF1bHQ7XG4vLyoqIERyb3Bkb3duIG1lbnUgYGJvcmRlci1jb2xvcmAgKipmb3IgSUU4KiouXG4kZHJvcGRvd24tZmFsbGJhY2stYm9yZGVyOiAgICAgICAjY2NjICFkZWZhdWx0O1xuLy8qKiBEaXZpZGVyIGNvbG9yIGZvciBiZXR3ZWVuIGRyb3Bkb3duIGl0ZW1zLlxuJGRyb3Bkb3duLWRpdmlkZXItYmc6ICAgICAgICAgICAgI2U1ZTVlNSAhZGVmYXVsdDtcblxuLy8qKiBEcm9wZG93biBsaW5rIHRleHQgY29sb3IuXG4kZHJvcGRvd24tbGluay1jb2xvcjogICAgICAgICAgICAkZ3JheS1kYXJrICFkZWZhdWx0O1xuLy8qKiBIb3ZlciBjb2xvciBmb3IgZHJvcGRvd24gbGlua3MuXG4kZHJvcGRvd24tbGluay1ob3Zlci1jb2xvcjogICAgICBkYXJrZW4oJGdyYXktZGFyaywgNSUpICFkZWZhdWx0O1xuLy8qKiBIb3ZlciBiYWNrZ3JvdW5kIGZvciBkcm9wZG93biBsaW5rcy5cbiRkcm9wZG93bi1saW5rLWhvdmVyLWJnOiAgICAgICAgICNmNWY1ZjUgIWRlZmF1bHQ7XG5cbi8vKiogQWN0aXZlIGRyb3Bkb3duIG1lbnUgaXRlbSB0ZXh0IGNvbG9yLlxuJGRyb3Bkb3duLWxpbmstYWN0aXZlLWNvbG9yOiAgICAgJGNvbXBvbmVudC1hY3RpdmUtY29sb3IgIWRlZmF1bHQ7XG4vLyoqIEFjdGl2ZSBkcm9wZG93biBtZW51IGl0ZW0gYmFja2dyb3VuZCBjb2xvci5cbiRkcm9wZG93bi1saW5rLWFjdGl2ZS1iZzogICAgICAgICRjb21wb25lbnQtYWN0aXZlLWJnICFkZWZhdWx0O1xuXG4vLyoqIERpc2FibGVkIGRyb3Bkb3duIG1lbnUgaXRlbSBiYWNrZ3JvdW5kIGNvbG9yLlxuJGRyb3Bkb3duLWxpbmstZGlzYWJsZWQtY29sb3I6ICAgJGdyYXktbGlnaHQgIWRlZmF1bHQ7XG5cbi8vKiogVGV4dCBjb2xvciBmb3IgaGVhZGVycyB3aXRoaW4gZHJvcGRvd24gbWVudXMuXG4kZHJvcGRvd24taGVhZGVyLWNvbG9yOiAgICAgICAgICAkZ3JheS1saWdodCAhZGVmYXVsdDtcblxuLy8qKiBEZXByZWNhdGVkIGAkZHJvcGRvd24tY2FyZXQtY29sb3JgIGFzIG9mIHYzLjEuMFxuJGRyb3Bkb3duLWNhcmV0LWNvbG9yOiAgICAgICAgICAgIzAwMCAhZGVmYXVsdDtcblxuXG4vLy0tIFotaW5kZXggbWFzdGVyIGxpc3Rcbi8vXG4vLyBXYXJuaW5nOiBBdm9pZCBjdXN0b21pemluZyB0aGVzZSB2YWx1ZXMuIFRoZXkncmUgdXNlZCBmb3IgYSBiaXJkJ3MgZXllIHZpZXdcbi8vIG9mIGNvbXBvbmVudHMgZGVwZW5kZW50IG9uIHRoZSB6LWF4aXMgYW5kIGFyZSBkZXNpZ25lZCB0byBhbGwgd29yayB0b2dldGhlci5cbi8vXG4vLyBOb3RlOiBUaGVzZSB2YXJpYWJsZXMgYXJlIG5vdCBnZW5lcmF0ZWQgaW50byB0aGUgQ3VzdG9taXplci5cblxuJHppbmRleC1uYXZiYXI6ICAgICAgICAgICAgMTAwMCAhZGVmYXVsdDtcbiR6aW5kZXgtZHJvcGRvd246ICAgICAgICAgIDEwMDAgIWRlZmF1bHQ7XG4kemluZGV4LXBvcG92ZXI6ICAgICAgICAgICAxMDYwICFkZWZhdWx0O1xuJHppbmRleC10b29sdGlwOiAgICAgICAgICAgMTA3MCAhZGVmYXVsdDtcbiR6aW5kZXgtbmF2YmFyLWZpeGVkOiAgICAgIDEwMzAgIWRlZmF1bHQ7XG4kemluZGV4LW1vZGFsLWJhY2tncm91bmQ6ICAxMDQwICFkZWZhdWx0O1xuJHppbmRleC1tb2RhbDogICAgICAgICAgICAgMTA1MCAhZGVmYXVsdDtcblxuXG4vLz09IE1lZGlhIHF1ZXJpZXMgYnJlYWtwb2ludHNcbi8vXG4vLyMjIERlZmluZSB0aGUgYnJlYWtwb2ludHMgYXQgd2hpY2ggeW91ciBsYXlvdXQgd2lsbCBjaGFuZ2UsIGFkYXB0aW5nIHRvIGRpZmZlcmVudCBzY3JlZW4gc2l6ZXMuXG5cbi8vIEV4dHJhIHNtYWxsIHNjcmVlbiAvIHBob25lXG4vLyoqIERlcHJlY2F0ZWQgYCRzY3JlZW4teHNgIGFzIG9mIHYzLjAuMVxuJHNjcmVlbi14czogICAgICAgICAgICAgICAgICA0ODBweCAhZGVmYXVsdDtcbi8vKiogRGVwcmVjYXRlZCBgJHNjcmVlbi14cy1taW5gIGFzIG9mIHYzLjIuMFxuJHNjcmVlbi14cy1taW46ICAgICAgICAgICAgICAkc2NyZWVuLXhzICFkZWZhdWx0O1xuLy8qKiBEZXByZWNhdGVkIGAkc2NyZWVuLXBob25lYCBhcyBvZiB2My4wLjFcbiRzY3JlZW4tcGhvbmU6ICAgICAgICAgICAgICAgJHNjcmVlbi14cy1taW4gIWRlZmF1bHQ7XG5cbi8vIFNtYWxsIHNjcmVlbiAvIHRhYmxldFxuLy8qKiBEZXByZWNhdGVkIGAkc2NyZWVuLXNtYCBhcyBvZiB2My4wLjFcbiRzY3JlZW4tc206ICAgICAgICAgICAgICAgICAgNzY4cHggIWRlZmF1bHQ7XG4kc2NyZWVuLXNtLW1pbjogICAgICAgICAgICAgICRzY3JlZW4tc20gIWRlZmF1bHQ7XG4vLyoqIERlcHJlY2F0ZWQgYCRzY3JlZW4tdGFibGV0YCBhcyBvZiB2My4wLjFcbiRzY3JlZW4tdGFibGV0OiAgICAgICAgICAgICAgJHNjcmVlbi1zbS1taW4gIWRlZmF1bHQ7XG5cbi8vIE1lZGl1bSBzY3JlZW4gLyBkZXNrdG9wXG4vLyoqIERlcHJlY2F0ZWQgYCRzY3JlZW4tbWRgIGFzIG9mIHYzLjAuMVxuJHNjcmVlbi1tZDogICAgICAgICAgICAgICAgICA5OTJweCAhZGVmYXVsdDtcbiRzY3JlZW4tbWQtbWluOiAgICAgICAgICAgICAgJHNjcmVlbi1tZCAhZGVmYXVsdDtcbi8vKiogRGVwcmVjYXRlZCBgJHNjcmVlbi1kZXNrdG9wYCBhcyBvZiB2My4wLjFcbiRzY3JlZW4tZGVza3RvcDogICAgICAgICAgICAgJHNjcmVlbi1tZC1taW4gIWRlZmF1bHQ7XG5cbi8vIExhcmdlIHNjcmVlbiAvIHdpZGUgZGVza3RvcFxuLy8qKiBEZXByZWNhdGVkIGAkc2NyZWVuLWxnYCBhcyBvZiB2My4wLjFcbiRzY3JlZW4tbGc6ICAgICAgICAgICAgICAgICAgMTIwMHB4ICFkZWZhdWx0O1xuJHNjcmVlbi1sZy1taW46ICAgICAgICAgICAgICAkc2NyZWVuLWxnICFkZWZhdWx0O1xuLy8qKiBEZXByZWNhdGVkIGAkc2NyZWVuLWxnLWRlc2t0b3BgIGFzIG9mIHYzLjAuMVxuJHNjcmVlbi1sZy1kZXNrdG9wOiAgICAgICAgICAkc2NyZWVuLWxnLW1pbiAhZGVmYXVsdDtcblxuLy8gU28gbWVkaWEgcXVlcmllcyBkb24ndCBvdmVybGFwIHdoZW4gcmVxdWlyZWQsIHByb3ZpZGUgYSBtYXhpbXVtXG4kc2NyZWVuLXhzLW1heDogICAgICAgICAgICAgICgkc2NyZWVuLXNtLW1pbiAtIDEpICFkZWZhdWx0O1xuJHNjcmVlbi1zbS1tYXg6ICAgICAgICAgICAgICAoJHNjcmVlbi1tZC1taW4gLSAxKSAhZGVmYXVsdDtcbiRzY3JlZW4tbWQtbWF4OiAgICAgICAgICAgICAgKCRzY3JlZW4tbGctbWluIC0gMSkgIWRlZmF1bHQ7XG5cblxuLy89PSBHcmlkIHN5c3RlbVxuLy9cbi8vIyMgRGVmaW5lIHlvdXIgY3VzdG9tIHJlc3BvbnNpdmUgZ3JpZC5cblxuLy8qKiBOdW1iZXIgb2YgY29sdW1ucyBpbiB0aGUgZ3JpZC5cbiRncmlkLWNvbHVtbnM6ICAgICAgICAgICAgICAxMiAhZGVmYXVsdDtcbi8vKiogUGFkZGluZyBiZXR3ZWVuIGNvbHVtbnMuIEdldHMgZGl2aWRlZCBpbiBoYWxmIGZvciB0aGUgbGVmdCBhbmQgcmlnaHQuXG4kZ3JpZC1ndXR0ZXItd2lkdGg6ICAgICAgICAgMzBweCAhZGVmYXVsdDtcbi8vIE5hdmJhciBjb2xsYXBzZVxuLy8qKiBQb2ludCBhdCB3aGljaCB0aGUgbmF2YmFyIGJlY29tZXMgdW5jb2xsYXBzZWQuXG4kZ3JpZC1mbG9hdC1icmVha3BvaW50OiAgICAgJHNjcmVlbi1zbS1taW4gIWRlZmF1bHQ7XG4vLyoqIFBvaW50IGF0IHdoaWNoIHRoZSBuYXZiYXIgYmVnaW5zIGNvbGxhcHNpbmcuXG4kZ3JpZC1mbG9hdC1icmVha3BvaW50LW1heDogKCRncmlkLWZsb2F0LWJyZWFrcG9pbnQgLSAxKSAhZGVmYXVsdDtcblxuXG4vLz09IENvbnRhaW5lciBzaXplc1xuLy9cbi8vIyMgRGVmaW5lIHRoZSBtYXhpbXVtIHdpZHRoIG9mIGAuY29udGFpbmVyYCBmb3IgZGlmZmVyZW50IHNjcmVlbiBzaXplcy5cblxuLy8gU21hbGwgc2NyZWVuIC8gdGFibGV0XG4kY29udGFpbmVyLXRhYmxldDogICAgICAgICAgICAgKDcyMHB4ICsgJGdyaWQtZ3V0dGVyLXdpZHRoKSAhZGVmYXVsdDtcbi8vKiogRm9yIGAkc2NyZWVuLXNtLW1pbmAgYW5kIHVwLlxuJGNvbnRhaW5lci1zbTogICAgICAgICAgICAgICAgICRjb250YWluZXItdGFibGV0ICFkZWZhdWx0O1xuXG4vLyBNZWRpdW0gc2NyZWVuIC8gZGVza3RvcFxuJGNvbnRhaW5lci1kZXNrdG9wOiAgICAgICAgICAgICg5NDBweCArICRncmlkLWd1dHRlci13aWR0aCkgIWRlZmF1bHQ7XG4vLyoqIEZvciBgJHNjcmVlbi1tZC1taW5gIGFuZCB1cC5cbiRjb250YWluZXItbWQ6ICAgICAgICAgICAgICAgICAkY29udGFpbmVyLWRlc2t0b3AgIWRlZmF1bHQ7XG5cbi8vIExhcmdlIHNjcmVlbiAvIHdpZGUgZGVza3RvcFxuJGNvbnRhaW5lci1sYXJnZS1kZXNrdG9wOiAgICAgICgxMTQwcHggKyAkZ3JpZC1ndXR0ZXItd2lkdGgpICFkZWZhdWx0O1xuLy8qKiBGb3IgYCRzY3JlZW4tbGctbWluYCBhbmQgdXAuXG4kY29udGFpbmVyLWxnOiAgICAgICAgICAgICAgICAgJGNvbnRhaW5lci1sYXJnZS1kZXNrdG9wICFkZWZhdWx0O1xuXG5cbi8vPT0gTmF2YmFyXG4vL1xuLy8jI1xuXG4vLyBCYXNpY3Mgb2YgYSBuYXZiYXJcbiRuYXZiYXItaGVpZ2h0OiAgICAgICAgICAgICAgICAgICAgNTBweCAhZGVmYXVsdDtcbiRuYXZiYXItbWFyZ2luLWJvdHRvbTogICAgICAgICAgICAgJGxpbmUtaGVpZ2h0LWNvbXB1dGVkICFkZWZhdWx0O1xuJG5hdmJhci1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgICAkYm9yZGVyLXJhZGl1cy1iYXNlICFkZWZhdWx0O1xuJG5hdmJhci1wYWRkaW5nLWhvcml6b250YWw6ICAgICAgICBmbG9vcigoJGdyaWQtZ3V0dGVyLXdpZHRoIC8gMikpICFkZWZhdWx0O1xuJG5hdmJhci1wYWRkaW5nLXZlcnRpY2FsOiAgICAgICAgICAoKCRuYXZiYXItaGVpZ2h0IC0gJGxpbmUtaGVpZ2h0LWNvbXB1dGVkKSAvIDIpICFkZWZhdWx0O1xuJG5hdmJhci1jb2xsYXBzZS1tYXgtaGVpZ2h0OiAgICAgICAzNDBweCAhZGVmYXVsdDtcblxuJG5hdmJhci1kZWZhdWx0LWNvbG9yOiAgICAgICAgICAgICAjNzc3ICFkZWZhdWx0O1xuJG5hdmJhci1kZWZhdWx0LWJnOiAgICAgICAgICAgICAgICAjZjhmOGY4ICFkZWZhdWx0O1xuJG5hdmJhci1kZWZhdWx0LWJvcmRlcjogICAgICAgICAgICBkYXJrZW4oJG5hdmJhci1kZWZhdWx0LWJnLCA2LjUlKSAhZGVmYXVsdDtcblxuLy8gTmF2YmFyIGxpbmtzXG4kbmF2YmFyLWRlZmF1bHQtbGluay1jb2xvcjogICAgICAgICAgICAgICAgIzc3NyAhZGVmYXVsdDtcbiRuYXZiYXItZGVmYXVsdC1saW5rLWhvdmVyLWNvbG9yOiAgICAgICAgICAjMzMzICFkZWZhdWx0O1xuJG5hdmJhci1kZWZhdWx0LWxpbmstaG92ZXItYmc6ICAgICAgICAgICAgIHRyYW5zcGFyZW50ICFkZWZhdWx0O1xuJG5hdmJhci1kZWZhdWx0LWxpbmstYWN0aXZlLWNvbG9yOiAgICAgICAgICM1NTUgIWRlZmF1bHQ7XG4kbmF2YmFyLWRlZmF1bHQtbGluay1hY3RpdmUtYmc6ICAgICAgICAgICAgZGFya2VuKCRuYXZiYXItZGVmYXVsdC1iZywgNi41JSkgIWRlZmF1bHQ7XG4kbmF2YmFyLWRlZmF1bHQtbGluay1kaXNhYmxlZC1jb2xvcjogICAgICAgI2NjYyAhZGVmYXVsdDtcbiRuYXZiYXItZGVmYXVsdC1saW5rLWRpc2FibGVkLWJnOiAgICAgICAgICB0cmFuc3BhcmVudCAhZGVmYXVsdDtcblxuLy8gTmF2YmFyIGJyYW5kIGxhYmVsXG4kbmF2YmFyLWRlZmF1bHQtYnJhbmQtY29sb3I6ICAgICAgICAgICAgICAgJG5hdmJhci1kZWZhdWx0LWxpbmstY29sb3IgIWRlZmF1bHQ7XG4kbmF2YmFyLWRlZmF1bHQtYnJhbmQtaG92ZXItY29sb3I6ICAgICAgICAgZGFya2VuKCRuYXZiYXItZGVmYXVsdC1icmFuZC1jb2xvciwgMTAlKSAhZGVmYXVsdDtcbiRuYXZiYXItZGVmYXVsdC1icmFuZC1ob3Zlci1iZzogICAgICAgICAgICB0cmFuc3BhcmVudCAhZGVmYXVsdDtcblxuLy8gTmF2YmFyIHRvZ2dsZVxuJG5hdmJhci1kZWZhdWx0LXRvZ2dsZS1ob3Zlci1iZzogICAgICAgICAgICNkZGQgIWRlZmF1bHQ7XG4kbmF2YmFyLWRlZmF1bHQtdG9nZ2xlLWljb24tYmFyLWJnOiAgICAgICAgIzg4OCAhZGVmYXVsdDtcbiRuYXZiYXItZGVmYXVsdC10b2dnbGUtYm9yZGVyLWNvbG9yOiAgICAgICAjZGRkICFkZWZhdWx0O1xuXG5cbi8vPT09IEludmVydGVkIG5hdmJhclxuLy8gUmVzZXQgaW52ZXJ0ZWQgbmF2YmFyIGJhc2ljc1xuJG5hdmJhci1pbnZlcnNlLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICBsaWdodGVuKCRncmF5LWxpZ2h0LCAxNSUpICFkZWZhdWx0O1xuJG5hdmJhci1pbnZlcnNlLWJnOiAgICAgICAgICAgICAgICAgICAgICAgICAjMjIyICFkZWZhdWx0O1xuJG5hdmJhci1pbnZlcnNlLWJvcmRlcjogICAgICAgICAgICAgICAgICAgICBkYXJrZW4oJG5hdmJhci1pbnZlcnNlLWJnLCAxMCUpICFkZWZhdWx0O1xuXG4vLyBJbnZlcnRlZCBuYXZiYXIgbGlua3NcbiRuYXZiYXItaW52ZXJzZS1saW5rLWNvbG9yOiAgICAgICAgICAgICAgICAgbGlnaHRlbigkZ3JheS1saWdodCwgMTUlKSAhZGVmYXVsdDtcbiRuYXZiYXItaW52ZXJzZS1saW5rLWhvdmVyLWNvbG9yOiAgICAgICAgICAgI2ZmZiAhZGVmYXVsdDtcbiRuYXZiYXItaW52ZXJzZS1saW5rLWhvdmVyLWJnOiAgICAgICAgICAgICAgdHJhbnNwYXJlbnQgIWRlZmF1bHQ7XG4kbmF2YmFyLWludmVyc2UtbGluay1hY3RpdmUtY29sb3I6ICAgICAgICAgICRuYXZiYXItaW52ZXJzZS1saW5rLWhvdmVyLWNvbG9yICFkZWZhdWx0O1xuJG5hdmJhci1pbnZlcnNlLWxpbmstYWN0aXZlLWJnOiAgICAgICAgICAgICBkYXJrZW4oJG5hdmJhci1pbnZlcnNlLWJnLCAxMCUpICFkZWZhdWx0O1xuJG5hdmJhci1pbnZlcnNlLWxpbmstZGlzYWJsZWQtY29sb3I6ICAgICAgICAjNDQ0ICFkZWZhdWx0O1xuJG5hdmJhci1pbnZlcnNlLWxpbmstZGlzYWJsZWQtYmc6ICAgICAgICAgICB0cmFuc3BhcmVudCAhZGVmYXVsdDtcblxuLy8gSW52ZXJ0ZWQgbmF2YmFyIGJyYW5kIGxhYmVsXG4kbmF2YmFyLWludmVyc2UtYnJhbmQtY29sb3I6ICAgICAgICAgICAgICAgICRuYXZiYXItaW52ZXJzZS1saW5rLWNvbG9yICFkZWZhdWx0O1xuJG5hdmJhci1pbnZlcnNlLWJyYW5kLWhvdmVyLWNvbG9yOiAgICAgICAgICAjZmZmICFkZWZhdWx0O1xuJG5hdmJhci1pbnZlcnNlLWJyYW5kLWhvdmVyLWJnOiAgICAgICAgICAgICB0cmFuc3BhcmVudCAhZGVmYXVsdDtcblxuLy8gSW52ZXJ0ZWQgbmF2YmFyIHRvZ2dsZVxuJG5hdmJhci1pbnZlcnNlLXRvZ2dsZS1ob3Zlci1iZzogICAgICAgICAgICAjMzMzICFkZWZhdWx0O1xuJG5hdmJhci1pbnZlcnNlLXRvZ2dsZS1pY29uLWJhci1iZzogICAgICAgICAjZmZmICFkZWZhdWx0O1xuJG5hdmJhci1pbnZlcnNlLXRvZ2dsZS1ib3JkZXItY29sb3I6ICAgICAgICAjMzMzICFkZWZhdWx0O1xuXG5cbi8vPT0gTmF2c1xuLy9cbi8vIyNcblxuLy89PT0gU2hhcmVkIG5hdiBzdHlsZXNcbiRuYXYtbGluay1wYWRkaW5nOiAgICAgICAgICAgICAgICAgICAgICAgICAgMTBweCAxNXB4ICFkZWZhdWx0O1xuJG5hdi1saW5rLWhvdmVyLWJnOiAgICAgICAgICAgICAgICAgICAgICAgICAkZ3JheS1saWdodGVyICFkZWZhdWx0O1xuXG4kbmF2LWRpc2FibGVkLWxpbmstY29sb3I6ICAgICAgICAgICAgICAgICAgICRncmF5LWxpZ2h0ICFkZWZhdWx0O1xuJG5hdi1kaXNhYmxlZC1saW5rLWhvdmVyLWNvbG9yOiAgICAgICAgICAgICAkZ3JheS1saWdodCAhZGVmYXVsdDtcblxuLy89PSBUYWJzXG4kbmF2LXRhYnMtYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICNkZGQgIWRlZmF1bHQ7XG5cbiRuYXYtdGFicy1saW5rLWhvdmVyLWJvcmRlci1jb2xvcjogICAgICAgICAgJGdyYXktbGlnaHRlciAhZGVmYXVsdDtcblxuJG5hdi10YWJzLWFjdGl2ZS1saW5rLWhvdmVyLWJnOiAgICAgICAgICAgICAkYm9keS1iZyAhZGVmYXVsdDtcbiRuYXYtdGFicy1hY3RpdmUtbGluay1ob3Zlci1jb2xvcjogICAgICAgICAgJGdyYXkgIWRlZmF1bHQ7XG4kbmF2LXRhYnMtYWN0aXZlLWxpbmstaG92ZXItYm9yZGVyLWNvbG9yOiAgICNkZGQgIWRlZmF1bHQ7XG5cbiRuYXYtdGFicy1qdXN0aWZpZWQtbGluay1ib3JkZXItY29sb3I6ICAgICAgICAgICAgI2RkZCAhZGVmYXVsdDtcbiRuYXYtdGFicy1qdXN0aWZpZWQtYWN0aXZlLWxpbmstYm9yZGVyLWNvbG9yOiAgICAgJGJvZHktYmcgIWRlZmF1bHQ7XG5cbi8vPT0gUGlsbHNcbiRuYXYtcGlsbHMtYm9yZGVyLXJhZGl1czogICAgICAgICAgICAgICAgICAgJGJvcmRlci1yYWRpdXMtYmFzZSAhZGVmYXVsdDtcbiRuYXYtcGlsbHMtYWN0aXZlLWxpbmstaG92ZXItYmc6ICAgICAgICAgICAgJGNvbXBvbmVudC1hY3RpdmUtYmcgIWRlZmF1bHQ7XG4kbmF2LXBpbGxzLWFjdGl2ZS1saW5rLWhvdmVyLWNvbG9yOiAgICAgICAgICRjb21wb25lbnQtYWN0aXZlLWNvbG9yICFkZWZhdWx0O1xuXG5cbi8vPT0gUGFnaW5hdGlvblxuLy9cbi8vIyNcblxuJHBhZ2luYXRpb24tY29sb3I6ICAgICAgICAgICAgICAgICAgICAgJGxpbmstY29sb3IgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1iZzogICAgICAgICAgICAgICAgICAgICAgICAjZmZmICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tYm9yZGVyOiAgICAgICAgICAgICAgICAgICAgI2RkZCAhZGVmYXVsdDtcblxuJHBhZ2luYXRpb24taG92ZXItY29sb3I6ICAgICAgICAgICAgICAgJGxpbmstaG92ZXItY29sb3IgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1ob3Zlci1iZzogICAgICAgICAgICAgICAgICAkZ3JheS1saWdodGVyICFkZWZhdWx0O1xuJHBhZ2luYXRpb24taG92ZXItYm9yZGVyOiAgICAgICAgICAgICAgI2RkZCAhZGVmYXVsdDtcblxuJHBhZ2luYXRpb24tYWN0aXZlLWNvbG9yOiAgICAgICAgICAgICAgI2ZmZiAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWFjdGl2ZS1iZzogICAgICAgICAgICAgICAgICRicmFuZC1wcmltYXJ5ICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tYWN0aXZlLWJvcmRlcjogICAgICAgICAgICAgJGJyYW5kLXByaW1hcnkgIWRlZmF1bHQ7XG5cbiRwYWdpbmF0aW9uLWRpc2FibGVkLWNvbG9yOiAgICAgICAgICAgICRncmF5LWxpZ2h0ICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tZGlzYWJsZWQtYmc6ICAgICAgICAgICAgICAgI2ZmZiAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWRpc2FibGVkLWJvcmRlcjogICAgICAgICAgICNkZGQgIWRlZmF1bHQ7XG5cblxuLy89PSBQYWdlclxuLy9cbi8vIyNcblxuJHBhZ2VyLWJnOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHBhZ2luYXRpb24tYmcgIWRlZmF1bHQ7XG4kcGFnZXItYm9yZGVyOiAgICAgICAgICAgICAgICAgICAgICAgICAkcGFnaW5hdGlvbi1ib3JkZXIgIWRlZmF1bHQ7XG4kcGFnZXItYm9yZGVyLXJhZGl1czogICAgICAgICAgICAgICAgICAxNXB4ICFkZWZhdWx0O1xuXG4kcGFnZXItaG92ZXItYmc6ICAgICAgICAgICAgICAgICAgICAgICAkcGFnaW5hdGlvbi1ob3Zlci1iZyAhZGVmYXVsdDtcblxuJHBhZ2VyLWFjdGl2ZS1iZzogICAgICAgICAgICAgICAgICAgICAgJHBhZ2luYXRpb24tYWN0aXZlLWJnICFkZWZhdWx0O1xuJHBhZ2VyLWFjdGl2ZS1jb2xvcjogICAgICAgICAgICAgICAgICAgJHBhZ2luYXRpb24tYWN0aXZlLWNvbG9yICFkZWZhdWx0O1xuXG4kcGFnZXItZGlzYWJsZWQtY29sb3I6ICAgICAgICAgICAgICAgICAkcGFnaW5hdGlvbi1kaXNhYmxlZC1jb2xvciAhZGVmYXVsdDtcblxuXG4vLz09IEp1bWJvdHJvblxuLy9cbi8vIyNcblxuJGp1bWJvdHJvbi1wYWRkaW5nOiAgICAgICAgICAgICAgMzBweCAhZGVmYXVsdDtcbiRqdW1ib3Ryb24tY29sb3I6ICAgICAgICAgICAgICAgIGluaGVyaXQgIWRlZmF1bHQ7XG4kanVtYm90cm9uLWJnOiAgICAgICAgICAgICAgICAgICAkZ3JheS1saWdodGVyICFkZWZhdWx0O1xuJGp1bWJvdHJvbi1oZWFkaW5nLWNvbG9yOiAgICAgICAgaW5oZXJpdCAhZGVmYXVsdDtcbiRqdW1ib3Ryb24tZm9udC1zaXplOiAgICAgICAgICAgIGNlaWwoKCRmb250LXNpemUtYmFzZSAqIDEuNSkpICFkZWZhdWx0O1xuJGp1bWJvdHJvbi1oZWFkaW5nLWZvbnQtc2l6ZTogICAgY2VpbCgoJGZvbnQtc2l6ZS1iYXNlICogNC41KSkgIWRlZmF1bHQ7XG5cblxuLy89PSBGb3JtIHN0YXRlcyBhbmQgYWxlcnRzXG4vL1xuLy8jIyBEZWZpbmUgY29sb3JzIGZvciBmb3JtIGZlZWRiYWNrIHN0YXRlcyBhbmQsIGJ5IGRlZmF1bHQsIGFsZXJ0cy5cblxuJHN0YXRlLXN1Y2Nlc3MtdGV4dDogICAgICAgICAgICAgIzNjNzYzZCAhZGVmYXVsdDtcbiRzdGF0ZS1zdWNjZXNzLWJnOiAgICAgICAgICAgICAgICNkZmYwZDggIWRlZmF1bHQ7XG4kc3RhdGUtc3VjY2Vzcy1ib3JkZXI6ICAgICAgICAgICBkYXJrZW4oYWRqdXN0LWh1ZSgkc3RhdGUtc3VjY2Vzcy1iZywgLTEwKSwgNSUpICFkZWZhdWx0O1xuXG4kc3RhdGUtaW5mby10ZXh0OiAgICAgICAgICAgICAgICAjMzE3MDhmICFkZWZhdWx0O1xuJHN0YXRlLWluZm8tYmc6ICAgICAgICAgICAgICAgICAgI2Q5ZWRmNyAhZGVmYXVsdDtcbiRzdGF0ZS1pbmZvLWJvcmRlcjogICAgICAgICAgICAgIGRhcmtlbihhZGp1c3QtaHVlKCRzdGF0ZS1pbmZvLWJnLCAtMTApLCA3JSkgIWRlZmF1bHQ7XG5cbiRzdGF0ZS13YXJuaW5nLXRleHQ6ICAgICAgICAgICAgICM4YTZkM2IgIWRlZmF1bHQ7XG4kc3RhdGUtd2FybmluZy1iZzogICAgICAgICAgICAgICAjZmNmOGUzICFkZWZhdWx0O1xuJHN0YXRlLXdhcm5pbmctYm9yZGVyOiAgICAgICAgICAgZGFya2VuKGFkanVzdC1odWUoJHN0YXRlLXdhcm5pbmctYmcsIC0xMCksIDUlKSAhZGVmYXVsdDtcblxuJHN0YXRlLWRhbmdlci10ZXh0OiAgICAgICAgICAgICAgI2E5NDQ0MiAhZGVmYXVsdDtcbiRzdGF0ZS1kYW5nZXItYmc6ICAgICAgICAgICAgICAgICNmMmRlZGUgIWRlZmF1bHQ7XG4kc3RhdGUtZGFuZ2VyLWJvcmRlcjogICAgICAgICAgICBkYXJrZW4oYWRqdXN0LWh1ZSgkc3RhdGUtZGFuZ2VyLWJnLCAtMTApLCA1JSkgIWRlZmF1bHQ7XG5cblxuLy89PSBUb29sdGlwc1xuLy9cbi8vIyNcblxuLy8qKiBUb29sdGlwIG1heCB3aWR0aFxuJHRvb2x0aXAtbWF4LXdpZHRoOiAgICAgICAgICAgMjAwcHggIWRlZmF1bHQ7XG4vLyoqIFRvb2x0aXAgdGV4dCBjb2xvclxuJHRvb2x0aXAtY29sb3I6ICAgICAgICAgICAgICAgI2ZmZiAhZGVmYXVsdDtcbi8vKiogVG9vbHRpcCBiYWNrZ3JvdW5kIGNvbG9yXG4kdG9vbHRpcC1iZzogICAgICAgICAgICAgICAgICAjMDAwICFkZWZhdWx0O1xuJHRvb2x0aXAtb3BhY2l0eTogICAgICAgICAgICAgLjkgIWRlZmF1bHQ7XG5cbi8vKiogVG9vbHRpcCBhcnJvdyB3aWR0aFxuJHRvb2x0aXAtYXJyb3ctd2lkdGg6ICAgICAgICAgNXB4ICFkZWZhdWx0O1xuLy8qKiBUb29sdGlwIGFycm93IGNvbG9yXG4kdG9vbHRpcC1hcnJvdy1jb2xvcjogICAgICAgICAkdG9vbHRpcC1iZyAhZGVmYXVsdDtcblxuXG4vLz09IFBvcG92ZXJzXG4vL1xuLy8jI1xuXG4vLyoqIFBvcG92ZXIgYm9keSBiYWNrZ3JvdW5kIGNvbG9yXG4kcG9wb3Zlci1iZzogICAgICAgICAgICAgICAgICAgICAgICAgICNmZmYgIWRlZmF1bHQ7XG4vLyoqIFBvcG92ZXIgbWF4aW11bSB3aWR0aFxuJHBvcG92ZXItbWF4LXdpZHRoOiAgICAgICAgICAgICAgICAgICAyNzZweCAhZGVmYXVsdDtcbi8vKiogUG9wb3ZlciBib3JkZXIgY29sb3JcbiRwb3BvdmVyLWJvcmRlci1jb2xvcjogICAgICAgICAgICAgICAgcmdiYSgwLDAsMCwuMikgIWRlZmF1bHQ7XG4vLyoqIFBvcG92ZXIgZmFsbGJhY2sgYm9yZGVyIGNvbG9yXG4kcG9wb3Zlci1mYWxsYmFjay1ib3JkZXItY29sb3I6ICAgICAgICNjY2MgIWRlZmF1bHQ7XG5cbi8vKiogUG9wb3ZlciB0aXRsZSBiYWNrZ3JvdW5kIGNvbG9yXG4kcG9wb3Zlci10aXRsZS1iZzogICAgICAgICAgICAgICAgICAgIGRhcmtlbigkcG9wb3Zlci1iZywgMyUpICFkZWZhdWx0O1xuXG4vLyoqIFBvcG92ZXIgYXJyb3cgd2lkdGhcbiRwb3BvdmVyLWFycm93LXdpZHRoOiAgICAgICAgICAgICAgICAgMTBweCAhZGVmYXVsdDtcbi8vKiogUG9wb3ZlciBhcnJvdyBjb2xvclxuJHBvcG92ZXItYXJyb3ctY29sb3I6ICAgICAgICAgICAgICAgICAkcG9wb3Zlci1iZyAhZGVmYXVsdDtcblxuLy8qKiBQb3BvdmVyIG91dGVyIGFycm93IHdpZHRoXG4kcG9wb3Zlci1hcnJvdy1vdXRlci13aWR0aDogICAgICAgICAgICgkcG9wb3Zlci1hcnJvdy13aWR0aCArIDEpICFkZWZhdWx0O1xuLy8qKiBQb3BvdmVyIG91dGVyIGFycm93IGNvbG9yXG4kcG9wb3Zlci1hcnJvdy1vdXRlci1jb2xvcjogICAgICAgICAgIGZhZGVfaW4oJHBvcG92ZXItYm9yZGVyLWNvbG9yLCAwLjA1KSAhZGVmYXVsdDtcbi8vKiogUG9wb3ZlciBvdXRlciBhcnJvdyBmYWxsYmFjayBjb2xvclxuJHBvcG92ZXItYXJyb3ctb3V0ZXItZmFsbGJhY2stY29sb3I6ICBkYXJrZW4oJHBvcG92ZXItZmFsbGJhY2stYm9yZGVyLWNvbG9yLCAyMCUpICFkZWZhdWx0O1xuXG5cbi8vPT0gTGFiZWxzXG4vL1xuLy8jI1xuXG4vLyoqIERlZmF1bHQgbGFiZWwgYmFja2dyb3VuZCBjb2xvclxuJGxhYmVsLWRlZmF1bHQtYmc6ICAgICAgICAgICAgJGdyYXktbGlnaHQgIWRlZmF1bHQ7XG4vLyoqIFByaW1hcnkgbGFiZWwgYmFja2dyb3VuZCBjb2xvclxuJGxhYmVsLXByaW1hcnktYmc6ICAgICAgICAgICAgJGJyYW5kLXByaW1hcnkgIWRlZmF1bHQ7XG4vLyoqIFN1Y2Nlc3MgbGFiZWwgYmFja2dyb3VuZCBjb2xvclxuJGxhYmVsLXN1Y2Nlc3MtYmc6ICAgICAgICAgICAgJGJyYW5kLXN1Y2Nlc3MgIWRlZmF1bHQ7XG4vLyoqIEluZm8gbGFiZWwgYmFja2dyb3VuZCBjb2xvclxuJGxhYmVsLWluZm8tYmc6ICAgICAgICAgICAgICAgJGJyYW5kLWluZm8gIWRlZmF1bHQ7XG4vLyoqIFdhcm5pbmcgbGFiZWwgYmFja2dyb3VuZCBjb2xvclxuJGxhYmVsLXdhcm5pbmctYmc6ICAgICAgICAgICAgJGJyYW5kLXdhcm5pbmcgIWRlZmF1bHQ7XG4vLyoqIERhbmdlciBsYWJlbCBiYWNrZ3JvdW5kIGNvbG9yXG4kbGFiZWwtZGFuZ2VyLWJnOiAgICAgICAgICAgICAkYnJhbmQtZGFuZ2VyICFkZWZhdWx0O1xuXG4vLyoqIERlZmF1bHQgbGFiZWwgdGV4dCBjb2xvclxuJGxhYmVsLWNvbG9yOiAgICAgICAgICAgICAgICAgI2ZmZiAhZGVmYXVsdDtcbi8vKiogRGVmYXVsdCB0ZXh0IGNvbG9yIG9mIGEgbGlua2VkIGxhYmVsXG4kbGFiZWwtbGluay1ob3Zlci1jb2xvcjogICAgICAjZmZmICFkZWZhdWx0O1xuXG5cbi8vPT0gTW9kYWxzXG4vL1xuLy8jI1xuXG4vLyoqIFBhZGRpbmcgYXBwbGllZCB0byB0aGUgbW9kYWwgYm9keVxuJG1vZGFsLWlubmVyLXBhZGRpbmc6ICAgICAgICAgMTVweCAhZGVmYXVsdDtcblxuLy8qKiBQYWRkaW5nIGFwcGxpZWQgdG8gdGhlIG1vZGFsIHRpdGxlXG4kbW9kYWwtdGl0bGUtcGFkZGluZzogICAgICAgICAxNXB4ICFkZWZhdWx0O1xuLy8qKiBNb2RhbCB0aXRsZSBsaW5lLWhlaWdodFxuJG1vZGFsLXRpdGxlLWxpbmUtaGVpZ2h0OiAgICAgJGxpbmUtaGVpZ2h0LWJhc2UgIWRlZmF1bHQ7XG5cbi8vKiogQmFja2dyb3VuZCBjb2xvciBvZiBtb2RhbCBjb250ZW50IGFyZWFcbiRtb2RhbC1jb250ZW50LWJnOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgI2ZmZiAhZGVmYXVsdDtcbi8vKiogTW9kYWwgY29udGVudCBib3JkZXIgY29sb3JcbiRtb2RhbC1jb250ZW50LWJvcmRlci1jb2xvcjogICAgICAgICAgICAgICAgICAgcmdiYSgwLDAsMCwuMikgIWRlZmF1bHQ7XG4vLyoqIE1vZGFsIGNvbnRlbnQgYm9yZGVyIGNvbG9yICoqZm9yIElFOCoqXG4kbW9kYWwtY29udGVudC1mYWxsYmFjay1ib3JkZXItY29sb3I6ICAgICAgICAgICM5OTkgIWRlZmF1bHQ7XG5cbi8vKiogTW9kYWwgYmFja2Ryb3AgYmFja2dyb3VuZCBjb2xvclxuJG1vZGFsLWJhY2tkcm9wLWJnOiAgICAgICAgICAgIzAwMCAhZGVmYXVsdDtcbi8vKiogTW9kYWwgYmFja2Ryb3Agb3BhY2l0eVxuJG1vZGFsLWJhY2tkcm9wLW9wYWNpdHk6ICAgICAgLjUgIWRlZmF1bHQ7XG4vLyoqIE1vZGFsIGhlYWRlciBib3JkZXIgY29sb3JcbiRtb2RhbC1oZWFkZXItYm9yZGVyLWNvbG9yOiAgICNlNWU1ZTUgIWRlZmF1bHQ7XG4vLyoqIE1vZGFsIGZvb3RlciBib3JkZXIgY29sb3JcbiRtb2RhbC1mb290ZXItYm9yZGVyLWNvbG9yOiAgICRtb2RhbC1oZWFkZXItYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xuXG4kbW9kYWwtbGc6ICAgICAgICAgICAgICAgICAgICA5MDBweCAhZGVmYXVsdDtcbiRtb2RhbC1tZDogICAgICAgICAgICAgICAgICAgIDYwMHB4ICFkZWZhdWx0O1xuJG1vZGFsLXNtOiAgICAgICAgICAgICAgICAgICAgMzAwcHggIWRlZmF1bHQ7XG5cblxuLy89PSBBbGVydHNcbi8vXG4vLyMjIERlZmluZSBhbGVydCBjb2xvcnMsIGJvcmRlciByYWRpdXMsIGFuZCBwYWRkaW5nLlxuXG4kYWxlcnQtcGFkZGluZzogICAgICAgICAgICAgICAxNXB4ICFkZWZhdWx0O1xuJGFsZXJ0LWJvcmRlci1yYWRpdXM6ICAgICAgICAgJGJvcmRlci1yYWRpdXMtYmFzZSAhZGVmYXVsdDtcbiRhbGVydC1saW5rLWZvbnQtd2VpZ2h0OiAgICAgIGJvbGQgIWRlZmF1bHQ7XG5cbiRhbGVydC1zdWNjZXNzLWJnOiAgICAgICAgICAgICRzdGF0ZS1zdWNjZXNzLWJnICFkZWZhdWx0O1xuJGFsZXJ0LXN1Y2Nlc3MtdGV4dDogICAgICAgICAgJHN0YXRlLXN1Y2Nlc3MtdGV4dCAhZGVmYXVsdDtcbiRhbGVydC1zdWNjZXNzLWJvcmRlcjogICAgICAgICRzdGF0ZS1zdWNjZXNzLWJvcmRlciAhZGVmYXVsdDtcblxuJGFsZXJ0LWluZm8tYmc6ICAgICAgICAgICAgICAgJHN0YXRlLWluZm8tYmcgIWRlZmF1bHQ7XG4kYWxlcnQtaW5mby10ZXh0OiAgICAgICAgICAgICAkc3RhdGUtaW5mby10ZXh0ICFkZWZhdWx0O1xuJGFsZXJ0LWluZm8tYm9yZGVyOiAgICAgICAgICAgJHN0YXRlLWluZm8tYm9yZGVyICFkZWZhdWx0O1xuXG4kYWxlcnQtd2FybmluZy1iZzogICAgICAgICAgICAkc3RhdGUtd2FybmluZy1iZyAhZGVmYXVsdDtcbiRhbGVydC13YXJuaW5nLXRleHQ6ICAgICAgICAgICRzdGF0ZS13YXJuaW5nLXRleHQgIWRlZmF1bHQ7XG4kYWxlcnQtd2FybmluZy1ib3JkZXI6ICAgICAgICAkc3RhdGUtd2FybmluZy1ib3JkZXIgIWRlZmF1bHQ7XG5cbiRhbGVydC1kYW5nZXItYmc6ICAgICAgICAgICAgICRzdGF0ZS1kYW5nZXItYmcgIWRlZmF1bHQ7XG4kYWxlcnQtZGFuZ2VyLXRleHQ6ICAgICAgICAgICAkc3RhdGUtZGFuZ2VyLXRleHQgIWRlZmF1bHQ7XG4kYWxlcnQtZGFuZ2VyLWJvcmRlcjogICAgICAgICAkc3RhdGUtZGFuZ2VyLWJvcmRlciAhZGVmYXVsdDtcblxuXG4vLz09IFByb2dyZXNzIGJhcnNcbi8vXG4vLyMjXG5cbi8vKiogQmFja2dyb3VuZCBjb2xvciBvZiB0aGUgd2hvbGUgcHJvZ3Jlc3MgY29tcG9uZW50XG4kcHJvZ3Jlc3MtYmc6ICAgICAgICAgICAgICAgICAjZjVmNWY1ICFkZWZhdWx0O1xuLy8qKiBQcm9ncmVzcyBiYXIgdGV4dCBjb2xvclxuJHByb2dyZXNzLWJhci1jb2xvcjogICAgICAgICAgI2ZmZiAhZGVmYXVsdDtcbi8vKiogVmFyaWFibGUgZm9yIHNldHRpbmcgcm91bmRlZCBjb3JuZXJzIG9uIHByb2dyZXNzIGJhci5cbiRwcm9ncmVzcy1ib3JkZXItcmFkaXVzOiAgICAgICRib3JkZXItcmFkaXVzLWJhc2UgIWRlZmF1bHQ7XG5cbi8vKiogRGVmYXVsdCBwcm9ncmVzcyBiYXIgY29sb3JcbiRwcm9ncmVzcy1iYXItYmc6ICAgICAgICAgICAgICRicmFuZC1wcmltYXJ5ICFkZWZhdWx0O1xuLy8qKiBTdWNjZXNzIHByb2dyZXNzIGJhciBjb2xvclxuJHByb2dyZXNzLWJhci1zdWNjZXNzLWJnOiAgICAgJGJyYW5kLXN1Y2Nlc3MgIWRlZmF1bHQ7XG4vLyoqIFdhcm5pbmcgcHJvZ3Jlc3MgYmFyIGNvbG9yXG4kcHJvZ3Jlc3MtYmFyLXdhcm5pbmctYmc6ICAgICAkYnJhbmQtd2FybmluZyAhZGVmYXVsdDtcbi8vKiogRGFuZ2VyIHByb2dyZXNzIGJhciBjb2xvclxuJHByb2dyZXNzLWJhci1kYW5nZXItYmc6ICAgICAgJGJyYW5kLWRhbmdlciAhZGVmYXVsdDtcbi8vKiogSW5mbyBwcm9ncmVzcyBiYXIgY29sb3JcbiRwcm9ncmVzcy1iYXItaW5mby1iZzogICAgICAgICRicmFuZC1pbmZvICFkZWZhdWx0O1xuXG5cbi8vPT0gTGlzdCBncm91cFxuLy9cbi8vIyNcblxuLy8qKiBCYWNrZ3JvdW5kIGNvbG9yIG9uIGAubGlzdC1ncm91cC1pdGVtYFxuJGxpc3QtZ3JvdXAtYmc6ICAgICAgICAgICAgICAgICAjZmZmICFkZWZhdWx0O1xuLy8qKiBgLmxpc3QtZ3JvdXAtaXRlbWAgYm9yZGVyIGNvbG9yXG4kbGlzdC1ncm91cC1ib3JkZXI6ICAgICAgICAgICAgICNkZGQgIWRlZmF1bHQ7XG4vLyoqIExpc3QgZ3JvdXAgYm9yZGVyIHJhZGl1c1xuJGxpc3QtZ3JvdXAtYm9yZGVyLXJhZGl1czogICAgICAkYm9yZGVyLXJhZGl1cy1iYXNlICFkZWZhdWx0O1xuXG4vLyoqIEJhY2tncm91bmQgY29sb3Igb2Ygc2luZ2xlIGxpc3QgaXRlbXMgb24gaG92ZXJcbiRsaXN0LWdyb3VwLWhvdmVyLWJnOiAgICAgICAgICAgI2Y1ZjVmNSAhZGVmYXVsdDtcbi8vKiogVGV4dCBjb2xvciBvZiBhY3RpdmUgbGlzdCBpdGVtc1xuJGxpc3QtZ3JvdXAtYWN0aXZlLWNvbG9yOiAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1jb2xvciAhZGVmYXVsdDtcbi8vKiogQmFja2dyb3VuZCBjb2xvciBvZiBhY3RpdmUgbGlzdCBpdGVtc1xuJGxpc3QtZ3JvdXAtYWN0aXZlLWJnOiAgICAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1iZyAhZGVmYXVsdDtcbi8vKiogQm9yZGVyIGNvbG9yIG9mIGFjdGl2ZSBsaXN0IGVsZW1lbnRzXG4kbGlzdC1ncm91cC1hY3RpdmUtYm9yZGVyOiAgICAgICRsaXN0LWdyb3VwLWFjdGl2ZS1iZyAhZGVmYXVsdDtcbi8vKiogVGV4dCBjb2xvciBmb3IgY29udGVudCB3aXRoaW4gYWN0aXZlIGxpc3QgaXRlbXNcbiRsaXN0LWdyb3VwLWFjdGl2ZS10ZXh0LWNvbG9yOiAgbGlnaHRlbigkbGlzdC1ncm91cC1hY3RpdmUtYmcsIDQwJSkgIWRlZmF1bHQ7XG5cbi8vKiogVGV4dCBjb2xvciBvZiBkaXNhYmxlZCBsaXN0IGl0ZW1zXG4kbGlzdC1ncm91cC1kaXNhYmxlZC1jb2xvcjogICAgICAkZ3JheS1saWdodCAhZGVmYXVsdDtcbi8vKiogQmFja2dyb3VuZCBjb2xvciBvZiBkaXNhYmxlZCBsaXN0IGl0ZW1zXG4kbGlzdC1ncm91cC1kaXNhYmxlZC1iZzogICAgICAgICAkZ3JheS1saWdodGVyICFkZWZhdWx0O1xuLy8qKiBUZXh0IGNvbG9yIGZvciBjb250ZW50IHdpdGhpbiBkaXNhYmxlZCBsaXN0IGl0ZW1zXG4kbGlzdC1ncm91cC1kaXNhYmxlZC10ZXh0LWNvbG9yOiAkbGlzdC1ncm91cC1kaXNhYmxlZC1jb2xvciAhZGVmYXVsdDtcblxuJGxpc3QtZ3JvdXAtbGluay1jb2xvcjogICAgICAgICAjNTU1ICFkZWZhdWx0O1xuJGxpc3QtZ3JvdXAtbGluay1ob3Zlci1jb2xvcjogICAkbGlzdC1ncm91cC1saW5rLWNvbG9yICFkZWZhdWx0O1xuJGxpc3QtZ3JvdXAtbGluay1oZWFkaW5nLWNvbG9yOiAjMzMzICFkZWZhdWx0O1xuXG5cbi8vPT0gUGFuZWxzXG4vL1xuLy8jI1xuXG4kcGFuZWwtYmc6ICAgICAgICAgICAgICAgICAgICAjZmZmICFkZWZhdWx0O1xuJHBhbmVsLWJvZHktcGFkZGluZzogICAgICAgICAgMTVweCAhZGVmYXVsdDtcbiRwYW5lbC1oZWFkaW5nLXBhZGRpbmc6ICAgICAgIDEwcHggMTVweCAhZGVmYXVsdDtcbiRwYW5lbC1mb290ZXItcGFkZGluZzogICAgICAgICRwYW5lbC1oZWFkaW5nLXBhZGRpbmcgIWRlZmF1bHQ7XG4kcGFuZWwtYm9yZGVyLXJhZGl1czogICAgICAgICAkYm9yZGVyLXJhZGl1cy1iYXNlICFkZWZhdWx0O1xuXG4vLyoqIEJvcmRlciBjb2xvciBmb3IgZWxlbWVudHMgd2l0aGluIHBhbmVsc1xuJHBhbmVsLWlubmVyLWJvcmRlcjogICAgICAgICAgI2RkZCAhZGVmYXVsdDtcbiRwYW5lbC1mb290ZXItYmc6ICAgICAgICAgICAgICNmNWY1ZjUgIWRlZmF1bHQ7XG5cbiRwYW5lbC1kZWZhdWx0LXRleHQ6ICAgICAgICAgICRncmF5LWRhcmsgIWRlZmF1bHQ7XG4kcGFuZWwtZGVmYXVsdC1ib3JkZXI6ICAgICAgICAjZGRkICFkZWZhdWx0O1xuJHBhbmVsLWRlZmF1bHQtaGVhZGluZy1iZzogICAgI2Y1ZjVmNSAhZGVmYXVsdDtcblxuJHBhbmVsLXByaW1hcnktdGV4dDogICAgICAgICAgI2ZmZiAhZGVmYXVsdDtcbiRwYW5lbC1wcmltYXJ5LWJvcmRlcjogICAgICAgICRicmFuZC1wcmltYXJ5ICFkZWZhdWx0O1xuJHBhbmVsLXByaW1hcnktaGVhZGluZy1iZzogICAgJGJyYW5kLXByaW1hcnkgIWRlZmF1bHQ7XG5cbiRwYW5lbC1zdWNjZXNzLXRleHQ6ICAgICAgICAgICRzdGF0ZS1zdWNjZXNzLXRleHQgIWRlZmF1bHQ7XG4kcGFuZWwtc3VjY2Vzcy1ib3JkZXI6ICAgICAgICAkc3RhdGUtc3VjY2Vzcy1ib3JkZXIgIWRlZmF1bHQ7XG4kcGFuZWwtc3VjY2Vzcy1oZWFkaW5nLWJnOiAgICAkc3RhdGUtc3VjY2Vzcy1iZyAhZGVmYXVsdDtcblxuJHBhbmVsLWluZm8tdGV4dDogICAgICAgICAgICAgJHN0YXRlLWluZm8tdGV4dCAhZGVmYXVsdDtcbiRwYW5lbC1pbmZvLWJvcmRlcjogICAgICAgICAgICRzdGF0ZS1pbmZvLWJvcmRlciAhZGVmYXVsdDtcbiRwYW5lbC1pbmZvLWhlYWRpbmctYmc6ICAgICAgICRzdGF0ZS1pbmZvLWJnICFkZWZhdWx0O1xuXG4kcGFuZWwtd2FybmluZy10ZXh0OiAgICAgICAgICAkc3RhdGUtd2FybmluZy10ZXh0ICFkZWZhdWx0O1xuJHBhbmVsLXdhcm5pbmctYm9yZGVyOiAgICAgICAgJHN0YXRlLXdhcm5pbmctYm9yZGVyICFkZWZhdWx0O1xuJHBhbmVsLXdhcm5pbmctaGVhZGluZy1iZzogICAgJHN0YXRlLXdhcm5pbmctYmcgIWRlZmF1bHQ7XG5cbiRwYW5lbC1kYW5nZXItdGV4dDogICAgICAgICAgICRzdGF0ZS1kYW5nZXItdGV4dCAhZGVmYXVsdDtcbiRwYW5lbC1kYW5nZXItYm9yZGVyOiAgICAgICAgICRzdGF0ZS1kYW5nZXItYm9yZGVyICFkZWZhdWx0O1xuJHBhbmVsLWRhbmdlci1oZWFkaW5nLWJnOiAgICAgJHN0YXRlLWRhbmdlci1iZyAhZGVmYXVsdDtcblxuXG4vLz09IFRodW1ibmFpbHNcbi8vXG4vLyMjXG5cbi8vKiogUGFkZGluZyBhcm91bmQgdGhlIHRodW1ibmFpbCBpbWFnZVxuJHRodW1ibmFpbC1wYWRkaW5nOiAgICAgICAgICAgNHB4ICFkZWZhdWx0O1xuLy8qKiBUaHVtYm5haWwgYmFja2dyb3VuZCBjb2xvclxuJHRodW1ibmFpbC1iZzogICAgICAgICAgICAgICAgJGJvZHktYmcgIWRlZmF1bHQ7XG4vLyoqIFRodW1ibmFpbCBib3JkZXIgY29sb3JcbiR0aHVtYm5haWwtYm9yZGVyOiAgICAgICAgICAgICNkZGQgIWRlZmF1bHQ7XG4vLyoqIFRodW1ibmFpbCBib3JkZXIgcmFkaXVzXG4kdGh1bWJuYWlsLWJvcmRlci1yYWRpdXM6ICAgICAkYm9yZGVyLXJhZGl1cy1iYXNlICFkZWZhdWx0O1xuXG4vLyoqIEN1c3RvbSB0ZXh0IGNvbG9yIGZvciB0aHVtYm5haWwgY2FwdGlvbnNcbiR0aHVtYm5haWwtY2FwdGlvbi1jb2xvcjogICAgICR0ZXh0LWNvbG9yICFkZWZhdWx0O1xuLy8qKiBQYWRkaW5nIGFyb3VuZCB0aGUgdGh1bWJuYWlsIGNhcHRpb25cbiR0aHVtYm5haWwtY2FwdGlvbi1wYWRkaW5nOiAgIDlweCAhZGVmYXVsdDtcblxuXG4vLz09IFdlbGxzXG4vL1xuLy8jI1xuXG4kd2VsbC1iZzogICAgICAgICAgICAgICAgICAgICAjZjVmNWY1ICFkZWZhdWx0O1xuJHdlbGwtYm9yZGVyOiAgICAgICAgICAgICAgICAgZGFya2VuKCR3ZWxsLWJnLCA3JSkgIWRlZmF1bHQ7XG5cblxuLy89PSBCYWRnZXNcbi8vXG4vLyMjXG5cbiRiYWRnZS1jb2xvcjogICAgICAgICAgICAgICAgICNmZmYgIWRlZmF1bHQ7XG4vLyoqIExpbmtlZCBiYWRnZSB0ZXh0IGNvbG9yIG9uIGhvdmVyXG4kYmFkZ2UtbGluay1ob3Zlci1jb2xvcjogICAgICAjZmZmICFkZWZhdWx0O1xuJGJhZGdlLWJnOiAgICAgICAgICAgICAgICAgICAgJGdyYXktbGlnaHQgIWRlZmF1bHQ7XG5cbi8vKiogQmFkZ2UgdGV4dCBjb2xvciBpbiBhY3RpdmUgbmF2IGxpbmtcbiRiYWRnZS1hY3RpdmUtY29sb3I6ICAgICAgICAgICRsaW5rLWNvbG9yICFkZWZhdWx0O1xuLy8qKiBCYWRnZSBiYWNrZ3JvdW5kIGNvbG9yIGluIGFjdGl2ZSBuYXYgbGlua1xuJGJhZGdlLWFjdGl2ZS1iZzogICAgICAgICAgICAgI2ZmZiAhZGVmYXVsdDtcblxuJGJhZGdlLWZvbnQtd2VpZ2h0OiAgICAgICAgICAgYm9sZCAhZGVmYXVsdDtcbiRiYWRnZS1saW5lLWhlaWdodDogICAgICAgICAgIDEgIWRlZmF1bHQ7XG4kYmFkZ2UtYm9yZGVyLXJhZGl1czogICAgICAgICAxMHB4ICFkZWZhdWx0O1xuXG5cbi8vPT0gQnJlYWRjcnVtYnNcbi8vXG4vLyMjXG5cbiRicmVhZGNydW1iLXBhZGRpbmctdmVydGljYWw6ICAgOHB4ICFkZWZhdWx0O1xuJGJyZWFkY3J1bWItcGFkZGluZy1ob3Jpem9udGFsOiAxNXB4ICFkZWZhdWx0O1xuLy8qKiBCcmVhZGNydW1iIGJhY2tncm91bmQgY29sb3JcbiRicmVhZGNydW1iLWJnOiAgICAgICAgICAgICAgICAgI2Y1ZjVmNSAhZGVmYXVsdDtcbi8vKiogQnJlYWRjcnVtYiB0ZXh0IGNvbG9yXG4kYnJlYWRjcnVtYi1jb2xvcjogICAgICAgICAgICAgICNjY2MgIWRlZmF1bHQ7XG4vLyoqIFRleHQgY29sb3Igb2YgY3VycmVudCBwYWdlIGluIHRoZSBicmVhZGNydW1iXG4kYnJlYWRjcnVtYi1hY3RpdmUtY29sb3I6ICAgICAgICRncmF5LWxpZ2h0ICFkZWZhdWx0O1xuLy8qKiBUZXh0dWFsIHNlcGFyYXRvciBmb3IgYmV0d2VlbiBicmVhZGNydW1iIGVsZW1lbnRzXG4kYnJlYWRjcnVtYi1zZXBhcmF0b3I6ICAgICAgICAgIFwiL1wiICFkZWZhdWx0O1xuXG5cbi8vPT0gQ2Fyb3VzZWxcbi8vXG4vLyMjXG5cbiRjYXJvdXNlbC10ZXh0LXNoYWRvdzogICAgICAgICAgICAgICAgICAgICAgICAwIDFweCAycHggcmdiYSgwLDAsMCwuNikgIWRlZmF1bHQ7XG5cbiRjYXJvdXNlbC1jb250cm9sLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAjZmZmICFkZWZhdWx0O1xuJGNhcm91c2VsLWNvbnRyb2wtd2lkdGg6ICAgICAgICAgICAgICAgICAgICAgIDE1JSAhZGVmYXVsdDtcbiRjYXJvdXNlbC1jb250cm9sLW9wYWNpdHk6ICAgICAgICAgICAgICAgICAgICAuNSAhZGVmYXVsdDtcbiRjYXJvdXNlbC1jb250cm9sLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgICAyMHB4ICFkZWZhdWx0O1xuXG4kY2Fyb3VzZWwtaW5kaWNhdG9yLWFjdGl2ZS1iZzogICAgICAgICAgICAgICAgI2ZmZiAhZGVmYXVsdDtcbiRjYXJvdXNlbC1pbmRpY2F0b3ItYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICAjZmZmICFkZWZhdWx0O1xuXG4kY2Fyb3VzZWwtY2FwdGlvbi1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgI2ZmZiAhZGVmYXVsdDtcblxuXG4vLz09IENsb3NlXG4vL1xuLy8jI1xuXG4kY2xvc2UtZm9udC13ZWlnaHQ6ICAgICAgICAgICBib2xkICFkZWZhdWx0O1xuJGNsb3NlLWNvbG9yOiAgICAgICAgICAgICAgICAgIzAwMCAhZGVmYXVsdDtcbiRjbG9zZS10ZXh0LXNoYWRvdzogICAgICAgICAgIDAgMXB4IDAgI2ZmZiAhZGVmYXVsdDtcblxuXG4vLz09IENvZGVcbi8vXG4vLyMjXG5cbiRjb2RlLWNvbG9yOiAgICAgICAgICAgICAgICAgICNjNzI1NGUgIWRlZmF1bHQ7XG4kY29kZS1iZzogICAgICAgICAgICAgICAgICAgICAjZjlmMmY0ICFkZWZhdWx0O1xuXG4ka2JkLWNvbG9yOiAgICAgICAgICAgICAgICAgICAjZmZmICFkZWZhdWx0O1xuJGtiZC1iZzogICAgICAgICAgICAgICAgICAgICAgIzMzMyAhZGVmYXVsdDtcblxuJHByZS1iZzogICAgICAgICAgICAgICAgICAgICAgI2Y1ZjVmNSAhZGVmYXVsdDtcbiRwcmUtY29sb3I6ICAgICAgICAgICAgICAgICAgICRncmF5LWRhcmsgIWRlZmF1bHQ7XG4kcHJlLWJvcmRlci1jb2xvcjogICAgICAgICAgICAjY2NjICFkZWZhdWx0O1xuJHByZS1zY3JvbGxhYmxlLW1heC1oZWlnaHQ6ICAgMzQwcHggIWRlZmF1bHQ7XG5cblxuLy89PSBUeXBlXG4vL1xuLy8jI1xuXG4vLyoqIEhvcml6b250YWwgb2Zmc2V0IGZvciBmb3JtcyBhbmQgbGlzdHMuXG4kY29tcG9uZW50LW9mZnNldC1ob3Jpem9udGFsOiAxODBweCAhZGVmYXVsdDtcbi8vKiogVGV4dCBtdXRlZCBjb2xvclxuJHRleHQtbXV0ZWQ6ICAgICAgICAgICAgICAgICAgJGdyYXktbGlnaHQgIWRlZmF1bHQ7XG4vLyoqIEFiYnJldmlhdGlvbnMgYW5kIGFjcm9ueW1zIGJvcmRlciBjb2xvclxuJGFiYnItYm9yZGVyLWNvbG9yOiAgICAgICAgICAgJGdyYXktbGlnaHQgIWRlZmF1bHQ7XG4vLyoqIEhlYWRpbmdzIHNtYWxsIGNvbG9yXG4kaGVhZGluZ3Mtc21hbGwtY29sb3I6ICAgICAgICAkZ3JheS1saWdodCAhZGVmYXVsdDtcbi8vKiogQmxvY2txdW90ZSBzbWFsbCBjb2xvclxuJGJsb2NrcXVvdGUtc21hbGwtY29sb3I6ICAgICAgJGdyYXktbGlnaHQgIWRlZmF1bHQ7XG4vLyoqIEJsb2NrcXVvdGUgZm9udCBzaXplXG4kYmxvY2txdW90ZS1mb250LXNpemU6ICAgICAgICAoJGZvbnQtc2l6ZS1iYXNlICogMS4yNSkgIWRlZmF1bHQ7XG4vLyoqIEJsb2NrcXVvdGUgYm9yZGVyIGNvbG9yXG4kYmxvY2txdW90ZS1ib3JkZXItY29sb3I6ICAgICAkZ3JheS1saWdodGVyICFkZWZhdWx0O1xuLy8qKiBQYWdlIGhlYWRlciBib3JkZXIgY29sb3JcbiRwYWdlLWhlYWRlci1ib3JkZXItY29sb3I6ICAgICRncmF5LWxpZ2h0ZXIgIWRlZmF1bHQ7XG4vLyoqIFdpZHRoIG9mIGhvcml6b250YWwgZGVzY3JpcHRpb24gbGlzdCB0aXRsZXNcbiRkbC1ob3Jpem9udGFsLW9mZnNldDogICAgICAgICRjb21wb25lbnQtb2Zmc2V0LWhvcml6b250YWwgIWRlZmF1bHQ7XG4vLyoqIFBvaW50IGF0IHdoaWNoIC5kbC1ob3Jpem9udGFsIGJlY29tZXMgaG9yaXpvbnRhbFxuJGRsLWhvcml6b250YWwtYnJlYWtwb2ludDogICAgJGdyaWQtZmxvYXQtYnJlYWtwb2ludCAhZGVmYXVsdDtcbi8vKiogSG9yaXpvbnRhbCBsaW5lIGNvbG9yLlxuJGhyLWJvcmRlcjogICAgICAgICAgICAgICAgICAgJGdyYXktbGlnaHRlciAhZGVmYXVsdDtcbiIsIi8qISBub3JtYWxpemUuY3NzIHYzLjAuMyB8IE1JVCBMaWNlbnNlIHwgZ2l0aHViLmNvbS9uZWNvbGFzL25vcm1hbGl6ZS5jc3MgKi9cblxuLy9cbi8vIDEuIFNldCBkZWZhdWx0IGZvbnQgZmFtaWx5IHRvIHNhbnMtc2VyaWYuXG4vLyAyLiBQcmV2ZW50IGlPUyBhbmQgSUUgdGV4dCBzaXplIGFkanVzdCBhZnRlciBkZXZpY2Ugb3JpZW50YXRpb24gY2hhbmdlLFxuLy8gICAgd2l0aG91dCBkaXNhYmxpbmcgdXNlciB6b29tLlxuLy9cblxuaHRtbCB7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmOyAvLyAxXG4gIC1tcy10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyAvLyAyXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLy8gMlxufVxuXG4vL1xuLy8gUmVtb3ZlIGRlZmF1bHQgbWFyZ2luLlxuLy9cblxuYm9keSB7XG4gIG1hcmdpbjogMDtcbn1cblxuLy8gSFRNTDUgZGlzcGxheSBkZWZpbml0aW9uc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLy9cbi8vIENvcnJlY3QgYGJsb2NrYCBkaXNwbGF5IG5vdCBkZWZpbmVkIGZvciBhbnkgSFRNTDUgZWxlbWVudCBpbiBJRSA4LzkuXG4vLyBDb3JyZWN0IGBibG9ja2AgZGlzcGxheSBub3QgZGVmaW5lZCBmb3IgYGRldGFpbHNgIG9yIGBzdW1tYXJ5YCBpbiBJRSAxMC8xMVxuLy8gYW5kIEZpcmVmb3guXG4vLyBDb3JyZWN0IGBibG9ja2AgZGlzcGxheSBub3QgZGVmaW5lZCBmb3IgYG1haW5gIGluIElFIDExLlxuLy9cblxuYXJ0aWNsZSxcbmFzaWRlLFxuZGV0YWlscyxcbmZpZ2NhcHRpb24sXG5maWd1cmUsXG5mb290ZXIsXG5oZWFkZXIsXG5oZ3JvdXAsXG5tYWluLFxubWVudSxcbm5hdixcbnNlY3Rpb24sXG5zdW1tYXJ5IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi8vXG4vLyAxLiBDb3JyZWN0IGBpbmxpbmUtYmxvY2tgIGRpc3BsYXkgbm90IGRlZmluZWQgaW4gSUUgOC85LlxuLy8gMi4gTm9ybWFsaXplIHZlcnRpY2FsIGFsaWdubWVudCBvZiBgcHJvZ3Jlc3NgIGluIENocm9tZSwgRmlyZWZveCwgYW5kIE9wZXJhLlxuLy9cblxuYXVkaW8sXG5jYW52YXMsXG5wcm9ncmVzcyxcbnZpZGVvIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrOyAvLyAxXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTsgLy8gMlxufVxuXG4vL1xuLy8gUHJldmVudCBtb2Rlcm4gYnJvd3NlcnMgZnJvbSBkaXNwbGF5aW5nIGBhdWRpb2Agd2l0aG91dCBjb250cm9scy5cbi8vIFJlbW92ZSBleGNlc3MgaGVpZ2h0IGluIGlPUyA1IGRldmljZXMuXG4vL1xuXG5hdWRpbzpub3QoW2NvbnRyb2xzXSkge1xuICBkaXNwbGF5OiBub25lO1xuICBoZWlnaHQ6IDA7XG59XG5cbi8vXG4vLyBBZGRyZXNzIGBbaGlkZGVuXWAgc3R5bGluZyBub3QgcHJlc2VudCBpbiBJRSA4LzkvMTAuXG4vLyBIaWRlIHRoZSBgdGVtcGxhdGVgIGVsZW1lbnQgaW4gSUUgOC85LzEwLzExLCBTYWZhcmksIGFuZCBGaXJlZm94IDwgMjIuXG4vL1xuXG5baGlkZGVuXSxcbnRlbXBsYXRlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLy8gTGlua3Ncbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8vXG4vLyBSZW1vdmUgdGhlIGdyYXkgYmFja2dyb3VuZCBjb2xvciBmcm9tIGFjdGl2ZSBsaW5rcyBpbiBJRSAxMC5cbi8vXG5cbmEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLy9cbi8vIEltcHJvdmUgcmVhZGFiaWxpdHkgb2YgZm9jdXNlZCBlbGVtZW50cyB3aGVuIHRoZXkgYXJlIGFsc28gaW4gYW5cbi8vIGFjdGl2ZS9ob3ZlciBzdGF0ZS5cbi8vXG5cbmE6YWN0aXZlLFxuYTpob3ZlciB7XG4gIG91dGxpbmU6IDA7XG59XG5cbi8vIFRleHQtbGV2ZWwgc2VtYW50aWNzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vL1xuLy8gQWRkcmVzcyBzdHlsaW5nIG5vdCBwcmVzZW50IGluIElFIDgvOS8xMC8xMSwgU2FmYXJpLCBhbmQgQ2hyb21lLlxuLy9cblxuYWJiclt0aXRsZV0ge1xuICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkO1xufVxuXG4vL1xuLy8gQWRkcmVzcyBzdHlsZSBzZXQgdG8gYGJvbGRlcmAgaW4gRmlyZWZveCA0KywgU2FmYXJpLCBhbmQgQ2hyb21lLlxuLy9cblxuYixcbnN0cm9uZyB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4vL1xuLy8gQWRkcmVzcyBzdHlsaW5nIG5vdCBwcmVzZW50IGluIFNhZmFyaSBhbmQgQ2hyb21lLlxuLy9cblxuZGZuIHtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG4vL1xuLy8gQWRkcmVzcyB2YXJpYWJsZSBgaDFgIGZvbnQtc2l6ZSBhbmQgbWFyZ2luIHdpdGhpbiBgc2VjdGlvbmAgYW5kIGBhcnRpY2xlYFxuLy8gY29udGV4dHMgaW4gRmlyZWZveCA0KywgU2FmYXJpLCBhbmQgQ2hyb21lLlxuLy9cblxuaDEge1xuICBmb250LXNpemU6IDJlbTtcbiAgbWFyZ2luOiAwLjY3ZW0gMDtcbn1cblxuLy9cbi8vIEFkZHJlc3Mgc3R5bGluZyBub3QgcHJlc2VudCBpbiBJRSA4LzkuXG4vL1xuXG5tYXJrIHtcbiAgYmFja2dyb3VuZDogI2ZmMDtcbiAgY29sb3I6ICMwMDA7XG59XG5cbi8vXG4vLyBBZGRyZXNzIGluY29uc2lzdGVudCBhbmQgdmFyaWFibGUgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cbi8vXG5cbnNtYWxsIHtcbiAgZm9udC1zaXplOiA4MCU7XG59XG5cbi8vXG4vLyBQcmV2ZW50IGBzdWJgIGFuZCBgc3VwYCBhZmZlY3RpbmcgYGxpbmUtaGVpZ2h0YCBpbiBhbGwgYnJvd3NlcnMuXG4vL1xuXG5zdWIsXG5zdXAge1xuICBmb250LXNpemU6IDc1JTtcbiAgbGluZS1oZWlnaHQ6IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xufVxuXG5zdXAge1xuICB0b3A6IC0wLjVlbTtcbn1cblxuc3ViIHtcbiAgYm90dG9tOiAtMC4yNWVtO1xufVxuXG4vLyBFbWJlZGRlZCBjb250ZW50XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vL1xuLy8gUmVtb3ZlIGJvcmRlciB3aGVuIGluc2lkZSBgYWAgZWxlbWVudCBpbiBJRSA4LzkvMTAuXG4vL1xuXG5pbWcge1xuICBib3JkZXI6IDA7XG59XG5cbi8vXG4vLyBDb3JyZWN0IG92ZXJmbG93IG5vdCBoaWRkZW4gaW4gSUUgOS8xMC8xMS5cbi8vXG5cbnN2Zzpub3QoOnJvb3QpIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLy8gR3JvdXBpbmcgY29udGVudFxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLy9cbi8vIEFkZHJlc3MgbWFyZ2luIG5vdCBwcmVzZW50IGluIElFIDgvOSBhbmQgU2FmYXJpLlxuLy9cblxuZmlndXJlIHtcbiAgbWFyZ2luOiAxZW0gNDBweDtcbn1cblxuLy9cbi8vIEFkZHJlc3MgZGlmZmVyZW5jZXMgYmV0d2VlbiBGaXJlZm94IGFuZCBvdGhlciBicm93c2Vycy5cbi8vXG5cbmhyIHtcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XG4gIGhlaWdodDogMDtcbn1cblxuLy9cbi8vIENvbnRhaW4gb3ZlcmZsb3cgaW4gYWxsIGJyb3dzZXJzLlxuLy9cblxucHJlIHtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi8vXG4vLyBBZGRyZXNzIG9kZCBgZW1gLXVuaXQgZm9udCBzaXplIHJlbmRlcmluZyBpbiBhbGwgYnJvd3NlcnMuXG4vL1xuXG5jb2RlLFxua2JkLFxucHJlLFxuc2FtcCB7XG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTtcbiAgZm9udC1zaXplOiAxZW07XG59XG5cbi8vIEZvcm1zXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vL1xuLy8gS25vd24gbGltaXRhdGlvbjogYnkgZGVmYXVsdCwgQ2hyb21lIGFuZCBTYWZhcmkgb24gT1MgWCBhbGxvdyB2ZXJ5IGxpbWl0ZWRcbi8vIHN0eWxpbmcgb2YgYHNlbGVjdGAsIHVubGVzcyBhIGBib3JkZXJgIHByb3BlcnR5IGlzIHNldC5cbi8vXG5cbi8vXG4vLyAxLiBDb3JyZWN0IGNvbG9yIG5vdCBiZWluZyBpbmhlcml0ZWQuXG4vLyAgICBLbm93biBpc3N1ZTogYWZmZWN0cyBjb2xvciBvZiBkaXNhYmxlZCBlbGVtZW50cy5cbi8vIDIuIENvcnJlY3QgZm9udCBwcm9wZXJ0aWVzIG5vdCBiZWluZyBpbmhlcml0ZWQuXG4vLyAzLiBBZGRyZXNzIG1hcmdpbnMgc2V0IGRpZmZlcmVudGx5IGluIEZpcmVmb3ggNCssIFNhZmFyaSwgYW5kIENocm9tZS5cbi8vXG5cbmJ1dHRvbixcbmlucHV0LFxub3B0Z3JvdXAsXG5zZWxlY3QsXG50ZXh0YXJlYSB7XG4gIGNvbG9yOiBpbmhlcml0OyAvLyAxXG4gIGZvbnQ6IGluaGVyaXQ7IC8vIDJcbiAgbWFyZ2luOiAwOyAvLyAzXG59XG5cbi8vXG4vLyBBZGRyZXNzIGBvdmVyZmxvd2Agc2V0IHRvIGBoaWRkZW5gIGluIElFIDgvOS8xMC8xMS5cbi8vXG5cbmJ1dHRvbiB7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xufVxuXG4vL1xuLy8gQWRkcmVzcyBpbmNvbnNpc3RlbnQgYHRleHQtdHJhbnNmb3JtYCBpbmhlcml0YW5jZSBmb3IgYGJ1dHRvbmAgYW5kIGBzZWxlY3RgLlxuLy8gQWxsIG90aGVyIGZvcm0gY29udHJvbCBlbGVtZW50cyBkbyBub3QgaW5oZXJpdCBgdGV4dC10cmFuc2Zvcm1gIHZhbHVlcy5cbi8vIENvcnJlY3QgYGJ1dHRvbmAgc3R5bGUgaW5oZXJpdGFuY2UgaW4gRmlyZWZveCwgSUUgOC85LzEwLzExLCBhbmQgT3BlcmEuXG4vLyBDb3JyZWN0IGBzZWxlY3RgIHN0eWxlIGluaGVyaXRhbmNlIGluIEZpcmVmb3guXG4vL1xuXG5idXR0b24sXG5zZWxlY3Qge1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbn1cblxuLy9cbi8vIDEuIEF2b2lkIHRoZSBXZWJLaXQgYnVnIGluIEFuZHJvaWQgNC4wLiogd2hlcmUgKDIpIGRlc3Ryb3lzIG5hdGl2ZSBgYXVkaW9gXG4vLyAgICBhbmQgYHZpZGVvYCBjb250cm9scy5cbi8vIDIuIENvcnJlY3QgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSBgaW5wdXRgIHR5cGVzIGluIGlPUy5cbi8vIDMuIEltcHJvdmUgdXNhYmlsaXR5IGFuZCBjb25zaXN0ZW5jeSBvZiBjdXJzb3Igc3R5bGUgYmV0d2VlbiBpbWFnZS10eXBlXG4vLyAgICBgaW5wdXRgIGFuZCBvdGhlcnMuXG4vL1xuXG5idXR0b24sXG5odG1sIGlucHV0W3R5cGU9XCJidXR0b25cIl0sIC8vIDFcbmlucHV0W3R5cGU9XCJyZXNldFwiXSxcbmlucHV0W3R5cGU9XCJzdWJtaXRcIl0ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLy8gMlxuICBjdXJzb3I6IHBvaW50ZXI7IC8vIDNcbn1cblxuLy9cbi8vIFJlLXNldCBkZWZhdWx0IGN1cnNvciBmb3IgZGlzYWJsZWQgZWxlbWVudHMuXG4vL1xuXG5idXR0b25bZGlzYWJsZWRdLFxuaHRtbCBpbnB1dFtkaXNhYmxlZF0ge1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59XG5cbi8vXG4vLyBSZW1vdmUgaW5uZXIgcGFkZGluZyBhbmQgYm9yZGVyIGluIEZpcmVmb3ggNCsuXG4vL1xuXG5idXR0b246Oi1tb3otZm9jdXMtaW5uZXIsXG5pbnB1dDo6LW1vei1mb2N1cy1pbm5lciB7XG4gIGJvcmRlcjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuLy9cbi8vIEFkZHJlc3MgRmlyZWZveCA0KyBzZXR0aW5nIGBsaW5lLWhlaWdodGAgb24gYGlucHV0YCB1c2luZyBgIWltcG9ydGFudGAgaW5cbi8vIHRoZSBVQSBzdHlsZXNoZWV0LlxuLy9cblxuaW5wdXQge1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xufVxuXG4vL1xuLy8gSXQncyByZWNvbW1lbmRlZCB0aGF0IHlvdSBkb24ndCBhdHRlbXB0IHRvIHN0eWxlIHRoZXNlIGVsZW1lbnRzLlxuLy8gRmlyZWZveCdzIGltcGxlbWVudGF0aW9uIGRvZXNuJ3QgcmVzcGVjdCBib3gtc2l6aW5nLCBwYWRkaW5nLCBvciB3aWR0aC5cbi8vXG4vLyAxLiBBZGRyZXNzIGJveCBzaXppbmcgc2V0IHRvIGBjb250ZW50LWJveGAgaW4gSUUgOC85LzEwLlxuLy8gMi4gUmVtb3ZlIGV4Y2VzcyBwYWRkaW5nIGluIElFIDgvOS8xMC5cbi8vXG5cbmlucHV0W3R5cGU9XCJjaGVja2JveFwiXSxcbmlucHV0W3R5cGU9XCJyYWRpb1wiXSB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8vIDFcbiAgcGFkZGluZzogMDsgLy8gMlxufVxuXG4vL1xuLy8gRml4IHRoZSBjdXJzb3Igc3R5bGUgZm9yIENocm9tZSdzIGluY3JlbWVudC9kZWNyZW1lbnQgYnV0dG9ucy4gRm9yIGNlcnRhaW5cbi8vIGBmb250LXNpemVgIHZhbHVlcyBvZiB0aGUgYGlucHV0YCwgaXQgY2F1c2VzIHRoZSBjdXJzb3Igc3R5bGUgb2YgdGhlXG4vLyBkZWNyZW1lbnQgYnV0dG9uIHRvIGNoYW5nZSBmcm9tIGBkZWZhdWx0YCB0byBgdGV4dGAuXG4vL1xuXG5pbnB1dFt0eXBlPVwibnVtYmVyXCJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxuaW5wdXRbdHlwZT1cIm51bWJlclwiXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLy9cbi8vIDEuIEFkZHJlc3MgYGFwcGVhcmFuY2VgIHNldCB0byBgc2VhcmNoZmllbGRgIGluIFNhZmFyaSBhbmQgQ2hyb21lLlxuLy8gMi4gQWRkcmVzcyBgYm94LXNpemluZ2Agc2V0IHRvIGBib3JkZXItYm94YCBpbiBTYWZhcmkgYW5kIENocm9tZS5cbi8vXG5cbmlucHV0W3R5cGU9XCJzZWFyY2hcIl0ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDsgLy8gMVxuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDsgLy8yXG59XG5cbi8vXG4vLyBSZW1vdmUgaW5uZXIgcGFkZGluZyBhbmQgc2VhcmNoIGNhbmNlbCBidXR0b24gaW4gU2FmYXJpIGFuZCBDaHJvbWUgb24gT1MgWC5cbi8vIFNhZmFyaSAoYnV0IG5vdCBDaHJvbWUpIGNsaXBzIHRoZSBjYW5jZWwgYnV0dG9uIHdoZW4gdGhlIHNlYXJjaCBpbnB1dCBoYXNcbi8vIHBhZGRpbmcgKGFuZCBgdGV4dGZpZWxkYCBhcHBlYXJhbmNlKS5cbi8vXG5cbmlucHV0W3R5cGU9XCJzZWFyY2hcIl06Oi13ZWJraXQtc2VhcmNoLWNhbmNlbC1idXR0b24sXG5pbnB1dFt0eXBlPVwic2VhcmNoXCJdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xufVxuXG4vL1xuLy8gRGVmaW5lIGNvbnNpc3RlbnQgYm9yZGVyLCBtYXJnaW4sIGFuZCBwYWRkaW5nLlxuLy9cblxuZmllbGRzZXQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjYzBjMGMwO1xuICBtYXJnaW46IDAgMnB4O1xuICBwYWRkaW5nOiAwLjM1ZW0gMC42MjVlbSAwLjc1ZW07XG59XG5cbi8vXG4vLyAxLiBDb3JyZWN0IGBjb2xvcmAgbm90IGJlaW5nIGluaGVyaXRlZCBpbiBJRSA4LzkvMTAvMTEuXG4vLyAyLiBSZW1vdmUgcGFkZGluZyBzbyBwZW9wbGUgYXJlbid0IGNhdWdodCBvdXQgaWYgdGhleSB6ZXJvIG91dCBmaWVsZHNldHMuXG4vL1xuXG5sZWdlbmQge1xuICBib3JkZXI6IDA7IC8vIDFcbiAgcGFkZGluZzogMDsgLy8gMlxufVxuXG4vL1xuLy8gUmVtb3ZlIGRlZmF1bHQgdmVydGljYWwgc2Nyb2xsYmFyIGluIElFIDgvOS8xMC8xMS5cbi8vXG5cbnRleHRhcmVhIHtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi8vXG4vLyBEb24ndCBpbmhlcml0IHRoZSBgZm9udC13ZWlnaHRgIChhcHBsaWVkIGJ5IGEgcnVsZSBhYm92ZSkuXG4vLyBOT1RFOiB0aGUgZGVmYXVsdCBjYW5ub3Qgc2FmZWx5IGJlIGNoYW5nZWQgaW4gQ2hyb21lIGFuZCBTYWZhcmkgb24gT1MgWC5cbi8vXG5cbm9wdGdyb3VwIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi8vIFRhYmxlc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLy9cbi8vIFJlbW92ZSBtb3N0IHNwYWNpbmcgYmV0d2VlbiB0YWJsZSBjZWxscy5cbi8vXG5cbnRhYmxlIHtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XG59XG5cbnRkLFxudGgge1xuICBwYWRkaW5nOiAwO1xufVxuIiwiLyohIFNvdXJjZTogaHR0cHM6Ly9naXRodWIuY29tL2g1YnAvaHRtbDUtYm9pbGVycGxhdGUvYmxvYi9tYXN0ZXIvc3JjL2Nzcy9tYWluLmNzcyAqL1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gUHJpbnQgc3R5bGVzLlxuLy8gSW5saW5lZCB0byBhdm9pZCB0aGUgYWRkaXRpb25hbCBIVFRQIHJlcXVlc3Q6IGg1YnAuY29tL3Jcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbkBtZWRpYSBwcmludCB7XG4gICAgKixcbiAgICAqOmJlZm9yZSxcbiAgICAqOmFmdGVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICAgICAgY29sb3I6ICMwMDAgIWltcG9ydGFudDsgLy8gQmxhY2sgcHJpbnRzIGZhc3RlcjogaDVicC5jb20vc1xuICAgICAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgIHRleHQtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgYSxcbiAgICBhOnZpc2l0ZWQge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICB9XG5cbiAgICBhW2hyZWZdOmFmdGVyIHtcbiAgICAgICAgY29udGVudDogXCIgKFwiIGF0dHIoaHJlZikgXCIpXCI7XG4gICAgfVxuXG4gICAgYWJiclt0aXRsZV06YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiBcIiAoXCIgYXR0cih0aXRsZSkgXCIpXCI7XG4gICAgfVxuXG4gICAgLy8gRG9uJ3Qgc2hvdyBsaW5rcyB0aGF0IGFyZSBmcmFnbWVudCBpZGVudGlmaWVycyxcbiAgICAvLyBvciB1c2UgdGhlIGBqYXZhc2NyaXB0OmAgcHNldWRvIHByb3RvY29sXG4gICAgYVtocmVmXj1cIiNcIl06YWZ0ZXIsXG4gICAgYVtocmVmXj1cImphdmFzY3JpcHQ6XCJdOmFmdGVyIHtcbiAgICAgICAgY29udGVudDogXCJcIjtcbiAgICB9XG5cbiAgICBwcmUsXG4gICAgYmxvY2txdW90ZSB7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM5OTk7XG4gICAgICAgIHBhZ2UtYnJlYWstaW5zaWRlOiBhdm9pZDtcbiAgICB9XG5cbiAgICB0aGVhZCB7XG4gICAgICAgIGRpc3BsYXk6IHRhYmxlLWhlYWRlci1ncm91cDsgLy8gaDVicC5jb20vdFxuICAgIH1cblxuICAgIHRyLFxuICAgIGltZyB7XG4gICAgICAgIHBhZ2UtYnJlYWstaW5zaWRlOiBhdm9pZDtcbiAgICB9XG5cbiAgICBpbWcge1xuICAgICAgICBtYXgtd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICBwLFxuICAgIGgyLFxuICAgIGgzIHtcbiAgICAgICAgb3JwaGFuczogMztcbiAgICAgICAgd2lkb3dzOiAzO1xuICAgIH1cblxuICAgIGgyLFxuICAgIGgzIHtcbiAgICAgICAgcGFnZS1icmVhay1hZnRlcjogYXZvaWQ7XG4gICAgfVxuXG4gICAgLy8gQm9vdHN0cmFwIHNwZWNpZmljIGNoYW5nZXMgc3RhcnRcblxuICAgIC8vIEJvb3RzdHJhcCBjb21wb25lbnRzXG4gICAgLm5hdmJhciB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICAgIC5idG4sXG4gICAgLmRyb3B1cCA+IC5idG4ge1xuICAgICAgICA+IC5jYXJldCB7XG4gICAgICAgICAgICBib3JkZXItdG9wLWNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmxhYmVsIHtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcbiAgICB9XG5cbiAgICAudGFibGUge1xuICAgICAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgdGQsXG4gICAgICAgIHRoIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAudGFibGUtYm9yZGVyZWQge1xuICAgICAgICB0aCxcbiAgICAgICAgdGQge1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RkZCAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gQm9vdHN0cmFwIHNwZWNpZmljIGNoYW5nZXMgZW5kXG59XG4iLCIvL1xuLy8gU2NhZmZvbGRpbmdcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblxuLy8gUmVzZXQgdGhlIGJveC1zaXppbmdcbi8vXG4vLyBIZWFkcyB1cCEgVGhpcyByZXNldCBtYXkgY2F1c2UgY29uZmxpY3RzIHdpdGggc29tZSB0aGlyZC1wYXJ0eSB3aWRnZXRzLlxuLy8gRm9yIHJlY29tbWVuZGF0aW9ucyBvbiByZXNvbHZpbmcgc3VjaCBjb25mbGljdHMsIHNlZVxuLy8gaHR0cDovL2dldGJvb3RzdHJhcC5jb20vZ2V0dGluZy1zdGFydGVkLyN0aGlyZC1ib3gtc2l6aW5nXG4qIHtcbiAgQGluY2x1ZGUgYm94LXNpemluZyhib3JkZXItYm94KTtcbn1cbio6YmVmb3JlLFxuKjphZnRlciB7XG4gIEBpbmNsdWRlIGJveC1zaXppbmcoYm9yZGVyLWJveCk7XG59XG5cblxuLy8gQm9keSByZXNldFxuXG5odG1sIHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHJnYmEoMCwwLDAsMCk7XG59XG5cbmJvZHkge1xuICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5LWJhc2U7XG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1iYXNlO1xuICBsaW5lLWhlaWdodDogJGxpbmUtaGVpZ2h0LWJhc2U7XG4gIGNvbG9yOiAkdGV4dC1jb2xvcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJvZHktYmc7XG59XG5cbi8vIFJlc2V0IGZvbnRzIGZvciByZWxldmFudCBlbGVtZW50c1xuaW5wdXQsXG5idXR0b24sXG5zZWxlY3QsXG50ZXh0YXJlYSB7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICBmb250LXNpemU6IGluaGVyaXQ7XG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xufVxuXG5cbi8vIExpbmtzXG5cbmEge1xuICBjb2xvcjogJGxpbmstY29sb3I7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblxuICAmOmhvdmVyLFxuICAmOmZvY3VzIHtcbiAgICBjb2xvcjogJGxpbmstaG92ZXItY29sb3I7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiAkbGluay1ob3Zlci1kZWNvcmF0aW9uO1xuICB9XG5cbiAgJjpmb2N1cyB7XG4gICAgQGluY2x1ZGUgdGFiLWZvY3VzO1xuICB9XG59XG5cblxuLy8gRmlndXJlc1xuLy9cbi8vIFdlIHJlc2V0IHRoaXMgaGVyZSBiZWNhdXNlIHByZXZpb3VzbHkgTm9ybWFsaXplIGhhZCBubyBgZmlndXJlYCBtYXJnaW5zLiBUaGlzXG4vLyBlbnN1cmVzIHdlIGRvbid0IGJyZWFrIGFueW9uZSdzIHVzZSBvZiB0aGUgZWxlbWVudC5cblxuZmlndXJlIHtcbiAgbWFyZ2luOiAwO1xufVxuXG5cbi8vIEltYWdlc1xuXG5pbWcge1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4vLyBSZXNwb25zaXZlIGltYWdlcyAoZW5zdXJlIGltYWdlcyBkb24ndCBzY2FsZSBiZXlvbmQgdGhlaXIgcGFyZW50cylcbi5pbWctcmVzcG9uc2l2ZSB7XG4gIEBpbmNsdWRlIGltZy1yZXNwb25zaXZlO1xufVxuXG4vLyBSb3VuZGVkIGNvcm5lcnNcbi5pbWctcm91bmRlZCB7XG4gIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzLWxhcmdlO1xufVxuXG4vLyBJbWFnZSB0aHVtYm5haWxzXG4vL1xuLy8gSGVhZHMgdXAhIFRoaXMgaXMgbWl4aW4tZWQgaW50byB0aHVtYm5haWxzLmxlc3MgZm9yIGAudGh1bWJuYWlsYC5cbi5pbWctdGh1bWJuYWlsIHtcbiAgcGFkZGluZzogJHRodW1ibmFpbC1wYWRkaW5nO1xuICBsaW5lLWhlaWdodDogJGxpbmUtaGVpZ2h0LWJhc2U7XG4gIGJhY2tncm91bmQtY29sb3I6ICR0aHVtYm5haWwtYmc7XG4gIGJvcmRlcjogMXB4IHNvbGlkICR0aHVtYm5haWwtYm9yZGVyO1xuICBib3JkZXItcmFkaXVzOiAkdGh1bWJuYWlsLWJvcmRlci1yYWRpdXM7XG4gIEBpbmNsdWRlIHRyYW5zaXRpb24oYWxsIC4ycyBlYXNlLWluLW91dCk7XG5cbiAgLy8gS2VlcCB0aGVtIGF0IG1vc3QgMTAwJSB3aWRlXG4gIEBpbmNsdWRlIGltZy1yZXNwb25zaXZlKGlubGluZS1ibG9jayk7XG59XG5cbi8vIFBlcmZlY3QgY2lyY2xlXG4uaW1nLWNpcmNsZSB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTsgLy8gc2V0IHJhZGl1cyBpbiBwZXJjZW50c1xufVxuXG5cbi8vIEhvcml6b250YWwgcnVsZXNcblxuaHIge1xuICBtYXJnaW4tdG9wOiAgICAkbGluZS1oZWlnaHQtY29tcHV0ZWQ7XG4gIG1hcmdpbi1ib3R0b206ICRsaW5lLWhlaWdodC1jb21wdXRlZDtcbiAgYm9yZGVyOiAwO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgJGhyLWJvcmRlcjtcbn1cblxuXG4vLyBPbmx5IGRpc3BsYXkgY29udGVudCB0byBzY3JlZW4gcmVhZGVyc1xuLy9cbi8vIFNlZTogaHR0cDovL2ExMXlwcm9qZWN0LmNvbS9wb3N0cy9ob3ctdG8taGlkZS1jb250ZW50XG5cbi5zci1vbmx5IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMXB4O1xuICBoZWlnaHQ6IDFweDtcbiAgbWFyZ2luOiAtMXB4O1xuICBwYWRkaW5nOiAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBjbGlwOiByZWN0KDAsMCwwLDApO1xuICBib3JkZXI6IDA7XG59XG5cbi8vIFVzZSBpbiBjb25qdW5jdGlvbiB3aXRoIC5zci1vbmx5IHRvIG9ubHkgZGlzcGxheSBjb250ZW50IHdoZW4gaXQncyBmb2N1c2VkLlxuLy8gVXNlZnVsIGZvciBcIlNraXAgdG8gbWFpbiBjb250ZW50XCIgbGlua3M7IHNlZSBodHRwOi8vd3d3LnczLm9yZy9UUi8yMDEzL05PVEUtV0NBRzIwLVRFQ0hTLTIwMTMwOTA1L0cxXG4vLyBDcmVkaXQ6IEhUTUw1IEJvaWxlcnBsYXRlXG5cbi5zci1vbmx5LWZvY3VzYWJsZSB7XG4gICY6YWN0aXZlLFxuICAmOmZvY3VzIHtcbiAgICBwb3NpdGlvbjogc3RhdGljO1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBtYXJnaW46IDA7XG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gICAgY2xpcDogYXV0bztcbiAgfVxufVxuXG5cbi8vIGlPUyBcImNsaWNrYWJsZSBlbGVtZW50c1wiIGZpeCBmb3Igcm9sZT1cImJ1dHRvblwiXG4vL1xuLy8gRml4ZXMgXCJjbGlja2FiaWxpdHlcIiBpc3N1ZSAoYW5kIG1vcmUgZ2VuZXJhbGx5LCB0aGUgZmlyaW5nIG9mIGV2ZW50cyBzdWNoIGFzIGZvY3VzIGFzIHdlbGwpXG4vLyBmb3IgdHJhZGl0aW9uYWxseSBub24tZm9jdXNhYmxlIGVsZW1lbnRzIHdpdGggcm9sZT1cImJ1dHRvblwiXG4vLyBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvRXZlbnRzL2NsaWNrI1NhZmFyaV9Nb2JpbGVcblxuW3JvbGU9XCJidXR0b25cIl0ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4iLCIvL1xuLy8gVHlwb2dyYXBoeVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXG4vLyBIZWFkaW5nc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LFxuLmgxLCAuaDIsIC5oMywgLmg0LCAuaDUsIC5oNiB7XG4gIGZvbnQtZmFtaWx5OiAkaGVhZGluZ3MtZm9udC1mYW1pbHk7XG4gIGZvbnQtd2VpZ2h0OiAkaGVhZGluZ3MtZm9udC13ZWlnaHQ7XG4gIGxpbmUtaGVpZ2h0OiAkaGVhZGluZ3MtbGluZS1oZWlnaHQ7XG4gIGNvbG9yOiAkaGVhZGluZ3MtY29sb3I7XG5cbiAgc21hbGwsXG4gIC5zbWFsbCB7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBsaW5lLWhlaWdodDogMTtcbiAgICBjb2xvcjogJGhlYWRpbmdzLXNtYWxsLWNvbG9yO1xuICB9XG59XG5cbmgxLCAuaDEsXG5oMiwgLmgyLFxuaDMsIC5oMyB7XG4gIG1hcmdpbi10b3A6ICRsaW5lLWhlaWdodC1jb21wdXRlZDtcbiAgbWFyZ2luLWJvdHRvbTogKCRsaW5lLWhlaWdodC1jb21wdXRlZCAvIDIpO1xuXG4gIHNtYWxsLFxuICAuc21hbGwge1xuICAgIGZvbnQtc2l6ZTogNjUlO1xuICB9XG59XG5oNCwgLmg0LFxuaDUsIC5oNSxcbmg2LCAuaDYge1xuICBtYXJnaW4tdG9wOiAoJGxpbmUtaGVpZ2h0LWNvbXB1dGVkIC8gMik7XG4gIG1hcmdpbi1ib3R0b206ICgkbGluZS1oZWlnaHQtY29tcHV0ZWQgLyAyKTtcblxuICBzbWFsbCxcbiAgLnNtYWxsIHtcbiAgICBmb250LXNpemU6IDc1JTtcbiAgfVxufVxuXG5oMSwgLmgxIHsgZm9udC1zaXplOiAkZm9udC1zaXplLWgxOyB9XG5oMiwgLmgyIHsgZm9udC1zaXplOiAkZm9udC1zaXplLWgyOyB9XG5oMywgLmgzIHsgZm9udC1zaXplOiAkZm9udC1zaXplLWgzOyB9XG5oNCwgLmg0IHsgZm9udC1zaXplOiAkZm9udC1zaXplLWg0OyB9XG5oNSwgLmg1IHsgZm9udC1zaXplOiAkZm9udC1zaXplLWg1OyB9XG5oNiwgLmg2IHsgZm9udC1zaXplOiAkZm9udC1zaXplLWg2OyB9XG5cblxuLy8gQm9keSB0ZXh0XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbnAge1xuICBtYXJnaW46IDAgMCAoJGxpbmUtaGVpZ2h0LWNvbXB1dGVkIC8gMik7XG59XG5cbi5sZWFkIHtcbiAgbWFyZ2luLWJvdHRvbTogJGxpbmUtaGVpZ2h0LWNvbXB1dGVkO1xuICBmb250LXNpemU6IGZsb29yKCgkZm9udC1zaXplLWJhc2UgKiAxLjE1KSk7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6ICRzY3JlZW4tc20tbWluKSB7XG4gICAgZm9udC1zaXplOiAoJGZvbnQtc2l6ZS1iYXNlICogMS41KTtcbiAgfVxufVxuXG5cbi8vIEVtcGhhc2lzICYgbWlzY1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyBFeDogKDEycHggc21hbGwgZm9udCAvIDE0cHggYmFzZSBmb250KSAqIDEwMCUgPSBhYm91dCA4NSVcbnNtYWxsLFxuLnNtYWxsIHtcbiAgZm9udC1zaXplOiBmbG9vcigoMTAwJSAqICRmb250LXNpemUtc21hbGwgLyAkZm9udC1zaXplLWJhc2UpKTtcbn1cblxubWFyayxcbi5tYXJrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHN0YXRlLXdhcm5pbmctYmc7XG4gIHBhZGRpbmc6IC4yZW07XG59XG5cbi8vIEFsaWdubWVudFxuLnRleHQtbGVmdCAgICAgICAgICAgeyB0ZXh0LWFsaWduOiBsZWZ0OyB9XG4udGV4dC1yaWdodCAgICAgICAgICB7IHRleHQtYWxpZ246IHJpZ2h0OyB9XG4udGV4dC1jZW50ZXIgICAgICAgICB7IHRleHQtYWxpZ246IGNlbnRlcjsgfVxuLnRleHQtanVzdGlmeSAgICAgICAgeyB0ZXh0LWFsaWduOiBqdXN0aWZ5OyB9XG4udGV4dC1ub3dyYXAgICAgICAgICB7IHdoaXRlLXNwYWNlOiBub3dyYXA7IH1cblxuLy8gVHJhbnNmb3JtYXRpb25cbi50ZXh0LWxvd2VyY2FzZSAgICAgIHsgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZTsgfVxuLnRleHQtdXBwZXJjYXNlICAgICAgeyB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyB9XG4udGV4dC1jYXBpdGFsaXplICAgICB7IHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplOyB9XG5cbi8vIENvbnRleHR1YWwgY29sb3JzXG4udGV4dC1tdXRlZCB7XG4gIGNvbG9yOiAkdGV4dC1tdXRlZDtcbn1cblxuQGluY2x1ZGUgdGV4dC1lbXBoYXNpcy12YXJpYW50KCcudGV4dC1wcmltYXJ5JywgJGJyYW5kLXByaW1hcnkpO1xuXG5AaW5jbHVkZSB0ZXh0LWVtcGhhc2lzLXZhcmlhbnQoJy50ZXh0LXN1Y2Nlc3MnLCAkc3RhdGUtc3VjY2Vzcy10ZXh0KTtcblxuQGluY2x1ZGUgdGV4dC1lbXBoYXNpcy12YXJpYW50KCcudGV4dC1pbmZvJywgJHN0YXRlLWluZm8tdGV4dCk7XG5cbkBpbmNsdWRlIHRleHQtZW1waGFzaXMtdmFyaWFudCgnLnRleHQtd2FybmluZycsICRzdGF0ZS13YXJuaW5nLXRleHQpO1xuXG5AaW5jbHVkZSB0ZXh0LWVtcGhhc2lzLXZhcmlhbnQoJy50ZXh0LWRhbmdlcicsICRzdGF0ZS1kYW5nZXItdGV4dCk7XG5cbi8vIENvbnRleHR1YWwgYmFja2dyb3VuZHNcbi8vIEZvciBub3cgd2UnbGwgbGVhdmUgdGhlc2UgYWxvbmdzaWRlIHRoZSB0ZXh0IGNsYXNzZXMgdW50aWwgdjQgd2hlbiB3ZSBjYW5cbi8vIHNhZmVseSBzaGlmdCB0aGluZ3MgYXJvdW5kIChwZXIgU2VtVmVyIHJ1bGVzKS5cbi5iZy1wcmltYXJ5IHtcbiAgLy8gR2l2ZW4gdGhlIGNvbnRyYXN0IGhlcmUsIHRoaXMgaXMgdGhlIG9ubHkgY2xhc3MgdG8gaGF2ZSBpdHMgY29sb3IgaW52ZXJ0ZWRcbiAgLy8gYXV0b21hdGljYWxseS5cbiAgY29sb3I6ICNmZmY7XG59XG5AaW5jbHVkZSBiZy12YXJpYW50KCcuYmctcHJpbWFyeScsICRicmFuZC1wcmltYXJ5KTtcblxuQGluY2x1ZGUgYmctdmFyaWFudCgnLmJnLXN1Y2Nlc3MnLCAkc3RhdGUtc3VjY2Vzcy1iZyk7XG5cbkBpbmNsdWRlIGJnLXZhcmlhbnQoJy5iZy1pbmZvJywgJHN0YXRlLWluZm8tYmcpO1xuXG5AaW5jbHVkZSBiZy12YXJpYW50KCcuYmctd2FybmluZycsICRzdGF0ZS13YXJuaW5nLWJnKTtcblxuQGluY2x1ZGUgYmctdmFyaWFudCgnLmJnLWRhbmdlcicsICRzdGF0ZS1kYW5nZXItYmcpO1xuXG5cbi8vIFBhZ2UgaGVhZGVyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi5wYWdlLWhlYWRlciB7XG4gIHBhZGRpbmctYm90dG9tOiAoKCRsaW5lLWhlaWdodC1jb21wdXRlZCAvIDIpIC0gMSk7XG4gIG1hcmdpbjogKCRsaW5lLWhlaWdodC1jb21wdXRlZCAqIDIpIDAgJGxpbmUtaGVpZ2h0LWNvbXB1dGVkO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJHBhZ2UtaGVhZGVyLWJvcmRlci1jb2xvcjtcbn1cblxuXG4vLyBMaXN0c1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyBVbm9yZGVyZWQgYW5kIE9yZGVyZWQgbGlzdHNcbnVsLFxub2wge1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tYm90dG9tOiAoJGxpbmUtaGVpZ2h0LWNvbXB1dGVkIC8gMik7XG4gIHVsLFxuICBvbCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgfVxufVxuXG4vLyBMaXN0IG9wdGlvbnNcblxuLy8gW2NvbnZlcnRlcl0gZXh0cmFjdGVkIGZyb20gYC5saXN0LXVuc3R5bGVkYCBmb3IgbGlic2FzcyBjb21wYXRpYmlsaXR5XG5AbWl4aW4gbGlzdC11bnN0eWxlZCB7XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cbi8vIFtjb252ZXJ0ZXJdIGV4dHJhY3RlZCBhcyBgQG1peGluIGxpc3QtdW5zdHlsZWRgIGZvciBsaWJzYXNzIGNvbXBhdGliaWxpdHlcbi5saXN0LXVuc3R5bGVkIHtcbiAgQGluY2x1ZGUgbGlzdC11bnN0eWxlZDtcbn1cblxuXG4vLyBJbmxpbmUgdHVybnMgbGlzdCBpdGVtcyBpbnRvIGlubGluZS1ibG9ja1xuLmxpc3QtaW5saW5lIHtcbiAgQGluY2x1ZGUgbGlzdC11bnN0eWxlZDtcbiAgbWFyZ2luLWxlZnQ6IC01cHg7XG5cbiAgPiBsaSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBhZGRpbmctbGVmdDogNXB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgfVxufVxuXG4vLyBEZXNjcmlwdGlvbiBMaXN0c1xuZGwge1xuICBtYXJnaW4tdG9wOiAwOyAvLyBSZW1vdmUgYnJvd3NlciBkZWZhdWx0XG4gIG1hcmdpbi1ib3R0b206ICRsaW5lLWhlaWdodC1jb21wdXRlZDtcbn1cbmR0LFxuZGQge1xuICBsaW5lLWhlaWdodDogJGxpbmUtaGVpZ2h0LWJhc2U7XG59XG5kdCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuZGQge1xuICBtYXJnaW4tbGVmdDogMDsgLy8gVW5kbyBicm93c2VyIGRlZmF1bHRcbn1cblxuLy8gSG9yaXpvbnRhbCBkZXNjcmlwdGlvbiBsaXN0c1xuLy9cbi8vIERlZmF1bHRzIHRvIGJlaW5nIHN0YWNrZWQgd2l0aG91dCBhbnkgb2YgdGhlIGJlbG93IHN0eWxlcyBhcHBsaWVkLCB1bnRpbCB0aGVcbi8vIGdyaWQgYnJlYWtwb2ludCBpcyByZWFjaGVkIChkZWZhdWx0IG9mIH43NjhweCkuXG5cbi5kbC1ob3Jpem9udGFsIHtcbiAgZGQge1xuICAgIEBpbmNsdWRlIGNsZWFyZml4OyAvLyBDbGVhciB0aGUgZmxvYXRlZCBgZHRgIGlmIGFuIGVtcHR5IGBkZGAgaXMgcHJlc2VudFxuICB9XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6ICRkbC1ob3Jpem9udGFsLWJyZWFrcG9pbnQpIHtcbiAgICBkdCB7XG4gICAgICBmbG9hdDogbGVmdDtcbiAgICAgIHdpZHRoOiAoJGRsLWhvcml6b250YWwtb2Zmc2V0IC0gMjApO1xuICAgICAgY2xlYXI6IGxlZnQ7XG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgIEBpbmNsdWRlIHRleHQtb3ZlcmZsb3c7XG4gICAgfVxuICAgIGRkIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAkZGwtaG9yaXpvbnRhbC1vZmZzZXQ7XG4gICAgfVxuICB9XG59XG5cblxuLy8gTWlzY1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyBBYmJyZXZpYXRpb25zIGFuZCBhY3Jvbnltc1xuYWJiclt0aXRsZV0sXG4vLyBBZGQgZGF0YS0qIGF0dHJpYnV0ZSB0byBoZWxwIG91dCBvdXIgdG9vbHRpcCBwbHVnaW4sIHBlciBodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvaXNzdWVzLzUyNTdcbmFiYnJbZGF0YS1vcmlnaW5hbC10aXRsZV0ge1xuICBjdXJzb3I6IGhlbHA7XG4gIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQgJGFiYnItYm9yZGVyLWNvbG9yO1xufVxuLmluaXRpYWxpc20ge1xuICBmb250LXNpemU6IDkwJTtcbiAgQGV4dGVuZCAudGV4dC11cHBlcmNhc2U7XG59XG5cbi8vIEJsb2NrcXVvdGVzXG5ibG9ja3F1b3RlIHtcbiAgcGFkZGluZzogKCRsaW5lLWhlaWdodC1jb21wdXRlZCAvIDIpICRsaW5lLWhlaWdodC1jb21wdXRlZDtcbiAgbWFyZ2luOiAwIDAgJGxpbmUtaGVpZ2h0LWNvbXB1dGVkO1xuICBmb250LXNpemU6ICRibG9ja3F1b3RlLWZvbnQtc2l6ZTtcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAkYmxvY2txdW90ZS1ib3JkZXItY29sb3I7XG5cbiAgcCxcbiAgdWwsXG4gIG9sIHtcbiAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICB9XG4gIH1cblxuICAvLyBOb3RlOiBEZXByZWNhdGVkIHNtYWxsIGFuZCAuc21hbGwgYXMgb2YgdjMuMS4wXG4gIC8vIENvbnRleHQ6IGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9pc3N1ZXMvMTE2NjBcbiAgZm9vdGVyLFxuICBzbWFsbCxcbiAgLnNtYWxsIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LXNpemU6IDgwJTsgLy8gYmFjayB0byBkZWZhdWx0IGZvbnQtc2l6ZVxuICAgIGxpbmUtaGVpZ2h0OiAkbGluZS1oZWlnaHQtYmFzZTtcbiAgICBjb2xvcjogJGJsb2NrcXVvdGUtc21hbGwtY29sb3I7XG5cbiAgICAmOmJlZm9yZSB7XG4gICAgICBjb250ZW50OiAnXFwyMDE0IFxcMDBBMCc7IC8vIGVtIGRhc2gsIG5ic3BcbiAgICB9XG4gIH1cbn1cblxuLy8gT3Bwb3NpdGUgYWxpZ25tZW50IG9mIGJsb2NrcXVvdGVcbi8vXG4vLyBIZWFkcyB1cDogYGJsb2NrcXVvdGUucHVsbC1yaWdodGAgaGFzIGJlZW4gZGVwcmVjYXRlZCBhcyBvZiB2My4xLjAuXG4uYmxvY2txdW90ZS1yZXZlcnNlLFxuYmxvY2txdW90ZS5wdWxsLXJpZ2h0IHtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICBib3JkZXItcmlnaHQ6IDVweCBzb2xpZCAkYmxvY2txdW90ZS1ib3JkZXItY29sb3I7XG4gIGJvcmRlci1sZWZ0OiAwO1xuICB0ZXh0LWFsaWduOiByaWdodDtcblxuICAvLyBBY2NvdW50IGZvciBjaXRhdGlvblxuICBmb290ZXIsXG4gIHNtYWxsLFxuICAuc21hbGwge1xuICAgICY6YmVmb3JlIHsgY29udGVudDogJyc7IH1cbiAgICAmOmFmdGVyIHtcbiAgICAgIGNvbnRlbnQ6ICdcXDAwQTAgXFwyMDE0JzsgLy8gbmJzcCwgZW0gZGFzaFxuICAgIH1cbiAgfVxufVxuXG4vLyBBZGRyZXNzZXNcbmFkZHJlc3Mge1xuICBtYXJnaW4tYm90dG9tOiAkbGluZS1oZWlnaHQtY29tcHV0ZWQ7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodC1iYXNlO1xufVxuIiwiLy9cbi8vIENvZGUgKGlubGluZSBhbmQgYmxvY2spXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cbi8vIElubGluZSBhbmQgYmxvY2sgY29kZSBzdHlsZXNcbmNvZGUsXG5rYmQsXG5wcmUsXG5zYW1wIHtcbiAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseS1tb25vc3BhY2U7XG59XG5cbi8vIElubGluZSBjb2RlXG5jb2RlIHtcbiAgcGFkZGluZzogMnB4IDRweDtcbiAgZm9udC1zaXplOiA5MCU7XG4gIGNvbG9yOiAkY29kZS1jb2xvcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvZGUtYmc7XG4gIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzLWJhc2U7XG59XG5cbi8vIFVzZXIgaW5wdXQgdHlwaWNhbGx5IGVudGVyZWQgdmlhIGtleWJvYXJkXG5rYmQge1xuICBwYWRkaW5nOiAycHggNHB4O1xuICBmb250LXNpemU6IDkwJTtcbiAgY29sb3I6ICRrYmQtY29sb3I7XG4gIGJhY2tncm91bmQtY29sb3I6ICRrYmQtYmc7XG4gIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzLXNtYWxsO1xuICBib3gtc2hhZG93OiBpbnNldCAwIC0xcHggMCByZ2JhKDAsMCwwLC4yNSk7XG5cbiAga2JkIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGZvbnQtc2l6ZTogMTAwJTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICB9XG59XG5cbi8vIEJsb2NrcyBvZiBjb2RlXG5wcmUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogKCgkbGluZS1oZWlnaHQtY29tcHV0ZWQgLSAxKSAvIDIpO1xuICBtYXJnaW46IDAgMCAoJGxpbmUtaGVpZ2h0LWNvbXB1dGVkIC8gMik7XG4gIGZvbnQtc2l6ZTogKCRmb250LXNpemUtYmFzZSAtIDEpOyAvLyAxNHB4IHRvIDEzcHhcbiAgbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodC1iYXNlO1xuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgY29sb3I6ICRwcmUtY29sb3I7XG4gIGJhY2tncm91bmQtY29sb3I6ICRwcmUtYmc7XG4gIGJvcmRlcjogMXB4IHNvbGlkICRwcmUtYm9yZGVyLWNvbG9yO1xuICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cy1iYXNlO1xuXG4gIC8vIEFjY291bnQgZm9yIHNvbWUgY29kZSBvdXRwdXRzIHRoYXQgcGxhY2UgY29kZSB0YWdzIGluIHByZSB0YWdzXG4gIGNvZGUge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xuICAgIGNvbG9yOiBpbmhlcml0O1xuICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICB9XG59XG5cbi8vIEVuYWJsZSBzY3JvbGxhYmxlIGJsb2NrcyBvZiBjb2RlXG4ucHJlLXNjcm9sbGFibGUge1xuICBtYXgtaGVpZ2h0OiAkcHJlLXNjcm9sbGFibGUtbWF4LWhlaWdodDtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufVxuIiwiLy9cbi8vIEdyaWQgc3lzdGVtXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cbi8vIENvbnRhaW5lciB3aWR0aHNcbi8vXG4vLyBTZXQgdGhlIGNvbnRhaW5lciB3aWR0aCwgYW5kIG92ZXJyaWRlIGl0IGZvciBmaXhlZCBuYXZiYXJzIGluIG1lZGlhIHF1ZXJpZXMuXG5cbi5jb250YWluZXIge1xuICBAaW5jbHVkZSBjb250YWluZXItZml4ZWQ7XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6ICRzY3JlZW4tc20tbWluKSB7XG4gICAgd2lkdGg6ICRjb250YWluZXItc207XG4gIH1cbiAgQG1lZGlhIChtaW4td2lkdGg6ICRzY3JlZW4tbWQtbWluKSB7XG4gICAgd2lkdGg6ICRjb250YWluZXItbWQ7XG4gIH1cbiAgQG1lZGlhIChtaW4td2lkdGg6ICRzY3JlZW4tbGctbWluKSB7XG4gICAgd2lkdGg6ICRjb250YWluZXItbGc7XG4gIH1cbn1cblxuXG4vLyBGbHVpZCBjb250YWluZXJcbi8vXG4vLyBVdGlsaXplcyB0aGUgbWl4aW4gbWVhbnQgZm9yIGZpeGVkIHdpZHRoIGNvbnRhaW5lcnMsIGJ1dCB3aXRob3V0IGFueSBkZWZpbmVkXG4vLyB3aWR0aCBmb3IgZmx1aWQsIGZ1bGwgd2lkdGggbGF5b3V0cy5cblxuLmNvbnRhaW5lci1mbHVpZCB7XG4gIEBpbmNsdWRlIGNvbnRhaW5lci1maXhlZDtcbn1cblxuXG4vLyBSb3dcbi8vXG4vLyBSb3dzIGNvbnRhaW4gYW5kIGNsZWFyIHRoZSBmbG9hdHMgb2YgeW91ciBjb2x1bW5zLlxuXG4ucm93IHtcbiAgQGluY2x1ZGUgbWFrZS1yb3c7XG59XG5cblxuLy8gQ29sdW1uc1xuLy9cbi8vIENvbW1vbiBzdHlsZXMgZm9yIHNtYWxsIGFuZCBsYXJnZSBncmlkIGNvbHVtbnNcblxuQGluY2x1ZGUgbWFrZS1ncmlkLWNvbHVtbnM7XG5cblxuLy8gRXh0cmEgc21hbGwgZ3JpZFxuLy9cbi8vIENvbHVtbnMsIG9mZnNldHMsIHB1c2hlcywgYW5kIHB1bGxzIGZvciBleHRyYSBzbWFsbCBkZXZpY2VzIGxpa2Vcbi8vIHNtYXJ0cGhvbmVzLlxuXG5AaW5jbHVkZSBtYWtlLWdyaWQoeHMpO1xuXG5cbi8vIFNtYWxsIGdyaWRcbi8vXG4vLyBDb2x1bW5zLCBvZmZzZXRzLCBwdXNoZXMsIGFuZCBwdWxscyBmb3IgdGhlIHNtYWxsIGRldmljZSByYW5nZSwgZnJvbSBwaG9uZXNcbi8vIHRvIHRhYmxldHMuXG5cbkBtZWRpYSAobWluLXdpZHRoOiAkc2NyZWVuLXNtLW1pbikge1xuICBAaW5jbHVkZSBtYWtlLWdyaWQoc20pO1xufVxuXG5cbi8vIE1lZGl1bSBncmlkXG4vL1xuLy8gQ29sdW1ucywgb2Zmc2V0cywgcHVzaGVzLCBhbmQgcHVsbHMgZm9yIHRoZSBkZXNrdG9wIGRldmljZSByYW5nZS5cblxuQG1lZGlhIChtaW4td2lkdGg6ICRzY3JlZW4tbWQtbWluKSB7XG4gIEBpbmNsdWRlIG1ha2UtZ3JpZChtZCk7XG59XG5cblxuLy8gTGFyZ2UgZ3JpZFxuLy9cbi8vIENvbHVtbnMsIG9mZnNldHMsIHB1c2hlcywgYW5kIHB1bGxzIGZvciB0aGUgbGFyZ2UgZGVza3RvcCBkZXZpY2UgcmFuZ2UuXG5cbkBtZWRpYSAobWluLXdpZHRoOiAkc2NyZWVuLWxnLW1pbikge1xuICBAaW5jbHVkZSBtYWtlLWdyaWQobGcpO1xufVxuIiwiLy9cbi8vIFRhYmxlc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXG50YWJsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICR0YWJsZS1iZztcbn1cbmNhcHRpb24ge1xuICBwYWRkaW5nLXRvcDogJHRhYmxlLWNlbGwtcGFkZGluZztcbiAgcGFkZGluZy1ib3R0b206ICR0YWJsZS1jZWxsLXBhZGRpbmc7XG4gIGNvbG9yOiAkdGV4dC1tdXRlZDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbnRoIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuXG4vLyBCYXNlbGluZSBzdHlsZXNcblxuLnRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogJGxpbmUtaGVpZ2h0LWNvbXB1dGVkO1xuICAvLyBDZWxsc1xuICA+IHRoZWFkLFxuICA+IHRib2R5LFxuICA+IHRmb290IHtcbiAgICA+IHRyIHtcbiAgICAgID4gdGgsXG4gICAgICA+IHRkIHtcbiAgICAgICAgcGFkZGluZzogJHRhYmxlLWNlbGwtcGFkZGluZztcbiAgICAgICAgbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodC1iYXNlO1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgJHRhYmxlLWJvcmRlci1jb2xvcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLy8gQm90dG9tIGFsaWduIGZvciBjb2x1bW4gaGVhZGluZ3NcbiAgPiB0aGVhZCA+IHRyID4gdGgge1xuICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICR0YWJsZS1ib3JkZXItY29sb3I7XG4gIH1cbiAgLy8gUmVtb3ZlIHRvcCBib3JkZXIgZnJvbSB0aGVhZCBieSBkZWZhdWx0XG4gID4gY2FwdGlvbiArIHRoZWFkLFxuICA+IGNvbGdyb3VwICsgdGhlYWQsXG4gID4gdGhlYWQ6Zmlyc3QtY2hpbGQge1xuICAgID4gdHI6Zmlyc3QtY2hpbGQge1xuICAgICAgPiB0aCxcbiAgICAgID4gdGQge1xuICAgICAgICBib3JkZXItdG9wOiAwO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAvLyBBY2NvdW50IGZvciBtdWx0aXBsZSB0Ym9keSBpbnN0YW5jZXNcbiAgPiB0Ym9keSArIHRib2R5IHtcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgJHRhYmxlLWJvcmRlci1jb2xvcjtcbiAgfVxuXG4gIC8vIE5lc3RpbmdcbiAgLnRhYmxlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYm9keS1iZztcbiAgfVxufVxuXG5cbi8vIENvbmRlbnNlZCB0YWJsZSB3LyBoYWxmIHBhZGRpbmdcblxuLnRhYmxlLWNvbmRlbnNlZCB7XG4gID4gdGhlYWQsXG4gID4gdGJvZHksXG4gID4gdGZvb3Qge1xuICAgID4gdHIge1xuICAgICAgPiB0aCxcbiAgICAgID4gdGQge1xuICAgICAgICBwYWRkaW5nOiAkdGFibGUtY29uZGVuc2VkLWNlbGwtcGFkZGluZztcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuXG4vLyBCb3JkZXJlZCB2ZXJzaW9uXG4vL1xuLy8gQWRkIGJvcmRlcnMgYWxsIGFyb3VuZCB0aGUgdGFibGUgYW5kIGJldHdlZW4gYWxsIHRoZSBjb2x1bW5zLlxuXG4udGFibGUtYm9yZGVyZWQge1xuICBib3JkZXI6IDFweCBzb2xpZCAkdGFibGUtYm9yZGVyLWNvbG9yO1xuICA+IHRoZWFkLFxuICA+IHRib2R5LFxuICA+IHRmb290IHtcbiAgICA+IHRyIHtcbiAgICAgID4gdGgsXG4gICAgICA+IHRkIHtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJHRhYmxlLWJvcmRlci1jb2xvcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgPiB0aGVhZCA+IHRyIHtcbiAgICA+IHRoLFxuICAgID4gdGQge1xuICAgICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMnB4O1xuICAgIH1cbiAgfVxufVxuXG5cbi8vIFplYnJhLXN0cmlwaW5nXG4vL1xuLy8gRGVmYXVsdCB6ZWJyYS1zdHJpcGUgc3R5bGVzIChhbHRlcm5hdGluZyBncmF5IGFuZCB0cmFuc3BhcmVudCBiYWNrZ3JvdW5kcylcblxuLnRhYmxlLXN0cmlwZWQge1xuICA+IHRib2R5ID4gdHI6bnRoLW9mLXR5cGUob2RkKSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHRhYmxlLWJnLWFjY2VudDtcbiAgfVxufVxuXG5cbi8vIEhvdmVyIGVmZmVjdFxuLy9cbi8vIFBsYWNlZCBoZXJlIHNpbmNlIGl0IGhhcyB0byBjb21lIGFmdGVyIHRoZSBwb3RlbnRpYWwgemVicmEgc3RyaXBpbmdcblxuLnRhYmxlLWhvdmVyIHtcbiAgPiB0Ym9keSA+IHRyOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGFibGUtYmctaG92ZXI7XG4gIH1cbn1cblxuXG4vLyBUYWJsZSBjZWxsIHNpemluZ1xuLy9cbi8vIFJlc2V0IGRlZmF1bHQgdGFibGUgYmVoYXZpb3JcblxudGFibGUgY29sW2NsYXNzKj1cImNvbC1cIl0ge1xuICBwb3NpdGlvbjogc3RhdGljOyAvLyBQcmV2ZW50IGJvcmRlciBoaWRpbmcgaW4gRmlyZWZveCBhbmQgSUU5LTExIChzZWUgaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2lzc3Vlcy8xMTYyMylcbiAgZmxvYXQ6IG5vbmU7XG4gIGRpc3BsYXk6IHRhYmxlLWNvbHVtbjtcbn1cbnRhYmxlIHtcbiAgdGQsXG4gIHRoIHtcbiAgICAmW2NsYXNzKj1cImNvbC1cIl0ge1xuICAgICAgcG9zaXRpb246IHN0YXRpYzsgLy8gUHJldmVudCBib3JkZXIgaGlkaW5nIGluIEZpcmVmb3ggYW5kIElFOS0xMSAoc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9pc3N1ZXMvMTE2MjMpXG4gICAgICBmbG9hdDogbm9uZTtcbiAgICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gICAgfVxuICB9XG59XG5cblxuLy8gVGFibGUgYmFja2dyb3VuZHNcbi8vXG4vLyBFeGFjdCBzZWxlY3RvcnMgYmVsb3cgcmVxdWlyZWQgdG8gb3ZlcnJpZGUgYC50YWJsZS1zdHJpcGVkYCBhbmQgcHJldmVudFxuLy8gaW5oZXJpdGFuY2UgdG8gbmVzdGVkIHRhYmxlcy5cblxuLy8gR2VuZXJhdGUgdGhlIGNvbnRleHR1YWwgdmFyaWFudHNcbkBpbmNsdWRlIHRhYmxlLXJvdy12YXJpYW50KCdhY3RpdmUnLCAkdGFibGUtYmctYWN0aXZlKTtcbkBpbmNsdWRlIHRhYmxlLXJvdy12YXJpYW50KCdzdWNjZXNzJywgJHN0YXRlLXN1Y2Nlc3MtYmcpO1xuQGluY2x1ZGUgdGFibGUtcm93LXZhcmlhbnQoJ2luZm8nLCAkc3RhdGUtaW5mby1iZyk7XG5AaW5jbHVkZSB0YWJsZS1yb3ctdmFyaWFudCgnd2FybmluZycsICRzdGF0ZS13YXJuaW5nLWJnKTtcbkBpbmNsdWRlIHRhYmxlLXJvdy12YXJpYW50KCdkYW5nZXInLCAkc3RhdGUtZGFuZ2VyLWJnKTtcblxuXG4vLyBSZXNwb25zaXZlIHRhYmxlc1xuLy9cbi8vIFdyYXAgeW91ciB0YWJsZXMgaW4gYC50YWJsZS1yZXNwb25zaXZlYCBhbmQgd2UnbGwgbWFrZSB0aGVtIG1vYmlsZSBmcmllbmRseVxuLy8gYnkgZW5hYmxpbmcgaG9yaXpvbnRhbCBzY3JvbGxpbmcuIE9ubHkgYXBwbGllcyA8NzY4cHguIEV2ZXJ5dGhpbmcgYWJvdmUgdGhhdFxuLy8gd2lsbCBkaXNwbGF5IG5vcm1hbGx5LlxuXG4udGFibGUtcmVzcG9uc2l2ZSB7XG4gIG92ZXJmbG93LXg6IGF1dG87XG4gIG1pbi1oZWlnaHQ6IDAuMDElOyAvLyBXb3JrYXJvdW5kIGZvciBJRTkgYnVnIChzZWUgaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2lzc3Vlcy8xNDgzNylcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkc2NyZWVuLXhzLW1heCkge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1ib3R0b206ICgkbGluZS1oZWlnaHQtY29tcHV0ZWQgKiAwLjc1KTtcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XG4gICAgLW1zLW92ZXJmbG93LXN0eWxlOiAtbXMtYXV0b2hpZGluZy1zY3JvbGxiYXI7XG4gICAgYm9yZGVyOiAxcHggc29saWQgJHRhYmxlLWJvcmRlci1jb2xvcjtcblxuICAgIC8vIFRpZ2h0ZW4gdXAgc3BhY2luZ1xuICAgID4gLnRhYmxlIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XG5cbiAgICAgIC8vIEVuc3VyZSB0aGUgY29udGVudCBkb2Vzbid0IHdyYXBcbiAgICAgID4gdGhlYWQsXG4gICAgICA+IHRib2R5LFxuICAgICAgPiB0Zm9vdCB7XG4gICAgICAgID4gdHIge1xuICAgICAgICAgID4gdGgsXG4gICAgICAgICAgPiB0ZCB7XG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFNwZWNpYWwgb3ZlcnJpZGVzIGZvciB0aGUgYm9yZGVyZWQgdGFibGVzXG4gICAgPiAudGFibGUtYm9yZGVyZWQge1xuICAgICAgYm9yZGVyOiAwO1xuXG4gICAgICAvLyBOdWtlIHRoZSBhcHByb3ByaWF0ZSBib3JkZXJzIHNvIHRoYXQgdGhlIHBhcmVudCBjYW4gaGFuZGxlIHRoZW1cbiAgICAgID4gdGhlYWQsXG4gICAgICA+IHRib2R5LFxuICAgICAgPiB0Zm9vdCB7XG4gICAgICAgID4gdHIge1xuICAgICAgICAgID4gdGg6Zmlyc3QtY2hpbGQsXG4gICAgICAgICAgPiB0ZDpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgICBib3JkZXItbGVmdDogMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgPiB0aDpsYXN0LWNoaWxkLFxuICAgICAgICAgID4gdGQ6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICBib3JkZXItcmlnaHQ6IDA7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIE9ubHkgbnVrZSB0aGUgbGFzdCByb3cncyBib3R0b20tYm9yZGVyIGluIGB0Ym9keWAgYW5kIGB0Zm9vdGAgc2luY2VcbiAgICAgIC8vIGNoYW5jZXMgYXJlIHRoZXJlIHdpbGwgYmUgb25seSBvbmUgYHRyYCBpbiBhIGB0aGVhZGAgYW5kIHRoYXQgd291bGRcbiAgICAgIC8vIHJlbW92ZSB0aGUgYm9yZGVyIGFsdG9nZXRoZXIuXG4gICAgICA+IHRib2R5LFxuICAgICAgPiB0Zm9vdCB7XG4gICAgICAgID4gdHI6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgPiB0aCxcbiAgICAgICAgICA+IHRkIHtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDA7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICB9XG4gIH1cbn1cbiIsIi8vXG4vLyBGb3Jtc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXG4vLyBOb3JtYWxpemUgbm9uLWNvbnRyb2xzXG4vL1xuLy8gUmVzdHlsZSBhbmQgYmFzZWxpbmUgbm9uLWNvbnRyb2wgZm9ybSBlbGVtZW50cy5cblxuZmllbGRzZXQge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIGJvcmRlcjogMDtcbiAgLy8gQ2hyb21lIGFuZCBGaXJlZm94IHNldCBhIGBtaW4td2lkdGg6IG1pbi1jb250ZW50O2Agb24gZmllbGRzZXRzLFxuICAvLyBzbyB3ZSByZXNldCB0aGF0IHRvIGVuc3VyZSBpdCBiZWhhdmVzIG1vcmUgbGlrZSBhIHN0YW5kYXJkIGJsb2NrIGVsZW1lbnQuXG4gIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvaXNzdWVzLzEyMzU5LlxuICBtaW4td2lkdGg6IDA7XG59XG5cbmxlZ2VuZCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luLWJvdHRvbTogJGxpbmUtaGVpZ2h0LWNvbXB1dGVkO1xuICBmb250LXNpemU6ICgkZm9udC1zaXplLWJhc2UgKiAxLjUpO1xuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcbiAgY29sb3I6ICRsZWdlbmQtY29sb3I7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRsZWdlbmQtYm9yZGVyLWNvbG9yO1xufVxuXG5sYWJlbCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWF4LXdpZHRoOiAxMDAlOyAvLyBGb3JjZSBJRTggdG8gd3JhcCBsb25nIGNvbnRlbnQgKHNlZSBodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvaXNzdWVzLzEzMTQxKVxuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5cbi8vIE5vcm1hbGl6ZSBmb3JtIGNvbnRyb2xzXG4vL1xuLy8gV2hpbGUgbW9zdCBvZiBvdXIgZm9ybSBzdHlsZXMgcmVxdWlyZSBleHRyYSBjbGFzc2VzLCBzb21lIGJhc2ljIG5vcm1hbGl6YXRpb25cbi8vIGlzIHJlcXVpcmVkIHRvIGVuc3VyZSBvcHRpbXVtIGRpc3BsYXkgd2l0aCBvciB3aXRob3V0IHRob3NlIGNsYXNzZXMgdG8gYmV0dGVyXG4vLyBhZGRyZXNzIGJyb3dzZXIgaW5jb25zaXN0ZW5jaWVzLlxuXG4vLyBPdmVycmlkZSBjb250ZW50LWJveCBpbiBOb3JtYWxpemUgKCogaXNuJ3Qgc3BlY2lmaWMgZW5vdWdoKVxuaW5wdXRbdHlwZT1cInNlYXJjaFwiXSB7XG4gIEBpbmNsdWRlIGJveC1zaXppbmcoYm9yZGVyLWJveCk7XG59XG5cbi8vIFBvc2l0aW9uIHJhZGlvcyBhbmQgY2hlY2tib3hlcyBiZXR0ZXJcbmlucHV0W3R5cGU9XCJyYWRpb1wiXSxcbmlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7XG4gIG1hcmdpbjogNHB4IDAgMDtcbiAgbWFyZ2luLXRvcDogMXB4IFxcOTsgLy8gSUU4LTlcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbn1cblxuaW5wdXRbdHlwZT1cImZpbGVcIl0ge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLy8gTWFrZSByYW5nZSBpbnB1dHMgYmVoYXZlIGxpa2UgdGV4dHVhbCBmb3JtIGNvbnRyb2xzXG5pbnB1dFt0eXBlPVwicmFuZ2VcIl0ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi8vIE1ha2UgbXVsdGlwbGUgc2VsZWN0IGVsZW1lbnRzIGhlaWdodCBub3QgZml4ZWRcbnNlbGVjdFttdWx0aXBsZV0sXG5zZWxlY3Rbc2l6ZV0ge1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi8vIEZvY3VzIGZvciBmaWxlLCByYWRpbywgYW5kIGNoZWNrYm94XG5pbnB1dFt0eXBlPVwiZmlsZVwiXTpmb2N1cyxcbmlucHV0W3R5cGU9XCJyYWRpb1wiXTpmb2N1cyxcbmlucHV0W3R5cGU9XCJjaGVja2JveFwiXTpmb2N1cyB7XG4gIEBpbmNsdWRlIHRhYi1mb2N1cztcbn1cblxuLy8gQWRqdXN0IG91dHB1dCBlbGVtZW50XG5vdXRwdXQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZy10b3A6ICgkcGFkZGluZy1iYXNlLXZlcnRpY2FsICsgMSk7XG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1iYXNlO1xuICBsaW5lLWhlaWdodDogJGxpbmUtaGVpZ2h0LWJhc2U7XG4gIGNvbG9yOiAkaW5wdXQtY29sb3I7XG59XG5cblxuLy8gQ29tbW9uIGZvcm0gY29udHJvbHNcbi8vXG4vLyBTaGFyZWQgc2l6ZSBhbmQgdHlwZSByZXNldHMgZm9yIGZvcm0gY29udHJvbHMuIEFwcGx5IGAuZm9ybS1jb250cm9sYCB0byBhbnlcbi8vIG9mIHRoZSBmb2xsb3dpbmcgZm9ybSBjb250cm9sczpcbi8vXG4vLyBzZWxlY3Rcbi8vIHRleHRhcmVhXG4vLyBpbnB1dFt0eXBlPVwidGV4dFwiXVxuLy8gaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdXG4vLyBpbnB1dFt0eXBlPVwiZGF0ZXRpbWVcIl1cbi8vIGlucHV0W3R5cGU9XCJkYXRldGltZS1sb2NhbFwiXVxuLy8gaW5wdXRbdHlwZT1cImRhdGVcIl1cbi8vIGlucHV0W3R5cGU9XCJtb250aFwiXVxuLy8gaW5wdXRbdHlwZT1cInRpbWVcIl1cbi8vIGlucHV0W3R5cGU9XCJ3ZWVrXCJdXG4vLyBpbnB1dFt0eXBlPVwibnVtYmVyXCJdXG4vLyBpbnB1dFt0eXBlPVwiZW1haWxcIl1cbi8vIGlucHV0W3R5cGU9XCJ1cmxcIl1cbi8vIGlucHV0W3R5cGU9XCJzZWFyY2hcIl1cbi8vIGlucHV0W3R5cGU9XCJ0ZWxcIl1cbi8vIGlucHV0W3R5cGU9XCJjb2xvclwiXVxuXG4uZm9ybS1jb250cm9sIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6ICRpbnB1dC1oZWlnaHQtYmFzZTsgLy8gTWFrZSBpbnB1dHMgYXQgbGVhc3QgdGhlIGhlaWdodCBvZiB0aGVpciBidXR0b24gY291bnRlcnBhcnQgKGJhc2UgbGluZS1oZWlnaHQgKyBwYWRkaW5nICsgYm9yZGVyKVxuICBwYWRkaW5nOiAkcGFkZGluZy1iYXNlLXZlcnRpY2FsICRwYWRkaW5nLWJhc2UtaG9yaXpvbnRhbDtcbiAgZm9udC1zaXplOiAkZm9udC1zaXplLWJhc2U7XG4gIGxpbmUtaGVpZ2h0OiAkbGluZS1oZWlnaHQtYmFzZTtcbiAgY29sb3I6ICRpbnB1dC1jb2xvcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGlucHV0LWJnO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lOyAvLyBSZXNldCB1bnVzdWFsIEZpcmVmb3gtb24tQW5kcm9pZCBkZWZhdWx0IHN0eWxlOyBzZWUgaHR0cHM6Ly9naXRodWIuY29tL25lY29sYXMvbm9ybWFsaXplLmNzcy9pc3N1ZXMvMjE0XG4gIGJvcmRlcjogMXB4IHNvbGlkICRpbnB1dC1ib3JkZXI7XG4gIGJvcmRlci1yYWRpdXM6ICRpbnB1dC1ib3JkZXItcmFkaXVzOyAvLyBOb3RlOiBUaGlzIGhhcyBubyBlZmZlY3Qgb24gPHNlbGVjdD5zIGluIHNvbWUgYnJvd3NlcnMsIGR1ZSB0byB0aGUgbGltaXRlZCBzdHlsYWJpbGl0eSBvZiA8c2VsZWN0PnMgaW4gQ1NTLlxuICBAaW5jbHVkZSBib3gtc2hhZG93KGluc2V0IDAgMXB4IDFweCByZ2JhKDAsMCwwLC4wNzUpKTtcbiAgQGluY2x1ZGUgdHJhbnNpdGlvbihib3JkZXItY29sb3IgZWFzZS1pbi1vdXQgLjE1cywgYm94LXNoYWRvdyBlYXNlLWluLW91dCAuMTVzKTtcblxuICAvLyBDdXN0b21pemUgdGhlIGA6Zm9jdXNgIHN0YXRlIHRvIGltaXRhdGUgbmF0aXZlIFdlYktpdCBzdHlsZXMuXG4gIEBpbmNsdWRlIGZvcm0tY29udHJvbC1mb2N1cztcblxuICAvLyBQbGFjZWhvbGRlclxuICBAaW5jbHVkZSBwbGFjZWhvbGRlcjtcblxuICAvLyBVbnN0eWxlIHRoZSBjYXJldCBvbiBgPHNlbGVjdD5gcyBpbiBJRTEwKy5cbiAgJjo6LW1zLWV4cGFuZCB7XG4gICAgYm9yZGVyOiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICB9XG5cbiAgLy8gRGlzYWJsZWQgYW5kIHJlYWQtb25seSBpbnB1dHNcbiAgLy9cbiAgLy8gSFRNTDUgc2F5cyB0aGF0IGNvbnRyb2xzIHVuZGVyIGEgZmllbGRzZXQgPiBsZWdlbmQ6Zmlyc3QtY2hpbGQgd29uJ3QgYmVcbiAgLy8gZGlzYWJsZWQgaWYgdGhlIGZpZWxkc2V0IGlzIGRpc2FibGVkLiBEdWUgdG8gaW1wbGVtZW50YXRpb24gZGlmZmljdWx0eSwgd2VcbiAgLy8gZG9uJ3QgaG9ub3IgdGhhdCBlZGdlIGNhc2U7IHdlIHN0eWxlIHRoZW0gYXMgZGlzYWJsZWQgYW55d2F5LlxuICAmW2Rpc2FibGVkXSxcbiAgJltyZWFkb25seV0sXG4gIGZpZWxkc2V0W2Rpc2FibGVkXSAmIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkaW5wdXQtYmctZGlzYWJsZWQ7XG4gICAgb3BhY2l0eTogMTsgLy8gaU9TIGZpeCBmb3IgdW5yZWFkYWJsZSBkaXNhYmxlZCBjb250ZW50OyBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2lzc3Vlcy8xMTY1NVxuICB9XG5cbiAgJltkaXNhYmxlZF0sXG4gIGZpZWxkc2V0W2Rpc2FibGVkXSAmIHtcbiAgICBjdXJzb3I6ICRjdXJzb3ItZGlzYWJsZWQ7XG4gIH1cblxuICAvLyBbY29udmVydGVyXSBleHRyYWN0ZWQgdGV4dGFyZWEmIHRvIHRleHRhcmVhLmZvcm0tY29udHJvbFxufVxuXG4vLyBSZXNldCBoZWlnaHQgZm9yIGB0ZXh0YXJlYWBzXG50ZXh0YXJlYS5mb3JtLWNvbnRyb2wge1xuICBoZWlnaHQ6IGF1dG87XG59XG5cblxuLy8gU2VhcmNoIGlucHV0cyBpbiBpT1Ncbi8vXG4vLyBUaGlzIG92ZXJyaWRlcyB0aGUgZXh0cmEgcm91bmRlZCBjb3JuZXJzIG9uIHNlYXJjaCBpbnB1dHMgaW4gaU9TIHNvIHRoYXQgb3VyXG4vLyBgLmZvcm0tY29udHJvbGAgY2xhc3MgY2FuIHByb3Blcmx5IHN0eWxlIHRoZW0uIE5vdGUgdGhhdCB0aGlzIGNhbm5vdCBzaW1wbHlcbi8vIGJlIGFkZGVkIHRvIGAuZm9ybS1jb250cm9sYCBhcyBpdCdzIG5vdCBzcGVjaWZpYyBlbm91Z2guIEZvciBkZXRhaWxzLCBzZWVcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9pc3N1ZXMvMTE1ODYuXG5cbmlucHV0W3R5cGU9XCJzZWFyY2hcIl0ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG59XG5cblxuLy8gU3BlY2lhbCBzdHlsZXMgZm9yIGlPUyB0ZW1wb3JhbCBpbnB1dHNcbi8vXG4vLyBJbiBNb2JpbGUgU2FmYXJpLCBzZXR0aW5nIGBkaXNwbGF5OiBibG9ja2Agb24gdGVtcG9yYWwgaW5wdXRzIGNhdXNlcyB0aGVcbi8vIHRleHQgd2l0aGluIHRoZSBpbnB1dCB0byBiZWNvbWUgdmVydGljYWxseSBtaXNhbGlnbmVkLiBBcyBhIHdvcmthcm91bmQsIHdlXG4vLyBzZXQgYSBwaXhlbCBsaW5lLWhlaWdodCB0aGF0IG1hdGNoZXMgdGhlIGdpdmVuIGhlaWdodCBvZiB0aGUgaW5wdXQsIGJ1dCBvbmx5XG4vLyBmb3IgU2FmYXJpLiBTZWUgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTEzOTg0OFxuLy9cbi8vIE5vdGUgdGhhdCBhcyBvZiA5LjMsIGlPUyBkb2Vzbid0IHN1cHBvcnQgYHdlZWtgLlxuXG5AbWVkaWEgc2NyZWVuIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAwKSB7XG4gIGlucHV0W3R5cGU9XCJkYXRlXCJdLFxuICBpbnB1dFt0eXBlPVwidGltZVwiXSxcbiAgaW5wdXRbdHlwZT1cImRhdGV0aW1lLWxvY2FsXCJdLFxuICBpbnB1dFt0eXBlPVwibW9udGhcIl0ge1xuICAgICYuZm9ybS1jb250cm9sIHtcbiAgICAgIGxpbmUtaGVpZ2h0OiAkaW5wdXQtaGVpZ2h0LWJhc2U7XG4gICAgfVxuXG4gICAgJi5pbnB1dC1zbSxcbiAgICAuaW5wdXQtZ3JvdXAtc20gJiB7XG4gICAgICBsaW5lLWhlaWdodDogJGlucHV0LWhlaWdodC1zbWFsbDtcbiAgICB9XG5cbiAgICAmLmlucHV0LWxnLFxuICAgIC5pbnB1dC1ncm91cC1sZyAmIHtcbiAgICAgIGxpbmUtaGVpZ2h0OiAkaW5wdXQtaGVpZ2h0LWxhcmdlO1xuICAgIH1cbiAgfVxufVxuXG5cbi8vIEZvcm0gZ3JvdXBzXG4vL1xuLy8gRGVzaWduZWQgdG8gaGVscCB3aXRoIHRoZSBvcmdhbml6YXRpb24gYW5kIHNwYWNpbmcgb2YgdmVydGljYWwgZm9ybXMuIEZvclxuLy8gaG9yaXpvbnRhbCBmb3JtcywgdXNlIHRoZSBwcmVkZWZpbmVkIGdyaWQgY2xhc3Nlcy5cblxuLmZvcm0tZ3JvdXAge1xuICBtYXJnaW4tYm90dG9tOiAkZm9ybS1ncm91cC1tYXJnaW4tYm90dG9tO1xufVxuXG5cbi8vIENoZWNrYm94ZXMgYW5kIHJhZGlvc1xuLy9cbi8vIEluZGVudCB0aGUgbGFiZWxzIHRvIHBvc2l0aW9uIHJhZGlvcy9jaGVja2JveGVzIGFzIGhhbmdpbmcgY29udHJvbHMuXG5cbi5yYWRpbyxcbi5jaGVja2JveCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG5cbiAgbGFiZWwge1xuICAgIG1pbi1oZWlnaHQ6ICRsaW5lLWhlaWdodC1jb21wdXRlZDsgLy8gRW5zdXJlIHRoZSBpbnB1dCBkb2Vzbid0IGp1bXAgd2hlbiB0aGVyZSBpcyBubyB0ZXh0XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbn1cbi5yYWRpbyBpbnB1dFt0eXBlPVwicmFkaW9cIl0sXG4ucmFkaW8taW5saW5lIGlucHV0W3R5cGU9XCJyYWRpb1wiXSxcbi5jaGVja2JveCBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0sXG4uY2hlY2tib3gtaW5saW5lIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luLWxlZnQ6IC0yMHB4O1xuICBtYXJnaW4tdG9wOiA0cHggXFw5O1xufVxuXG4ucmFkaW8gKyAucmFkaW8sXG4uY2hlY2tib3ggKyAuY2hlY2tib3gge1xuICBtYXJnaW4tdG9wOiAtNXB4OyAvLyBNb3ZlIHVwIHNpYmxpbmcgcmFkaW9zIG9yIGNoZWNrYm94ZXMgZm9yIHRpZ2h0ZXIgc3BhY2luZ1xufVxuXG4vLyBSYWRpb3MgYW5kIGNoZWNrYm94ZXMgb24gc2FtZSBsaW5lXG4ucmFkaW8taW5saW5lLFxuLmNoZWNrYm94LWlubGluZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5yYWRpby1pbmxpbmUgKyAucmFkaW8taW5saW5lLFxuLmNoZWNrYm94LWlubGluZSArIC5jaGVja2JveC1pbmxpbmUge1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tbGVmdDogMTBweDsgLy8gc3BhY2Ugb3V0IGNvbnNlY3V0aXZlIGlubGluZSBjb250cm9sc1xufVxuXG4vLyBBcHBseSBzYW1lIGRpc2FibGVkIGN1cnNvciB0d2VhayBhcyBmb3IgaW5wdXRzXG4vLyBTb21lIHNwZWNpYWwgY2FyZSBpcyBuZWVkZWQgYmVjYXVzZSA8bGFiZWw+cyBkb24ndCBpbmhlcml0IHRoZWlyIHBhcmVudCdzIGBjdXJzb3JgLlxuLy9cbi8vIE5vdGU6IE5laXRoZXIgcmFkaW9zIG5vciBjaGVja2JveGVzIGNhbiBiZSByZWFkb25seS5cbmlucHV0W3R5cGU9XCJyYWRpb1wiXSxcbmlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7XG4gICZbZGlzYWJsZWRdLFxuICAmLmRpc2FibGVkLFxuICBmaWVsZHNldFtkaXNhYmxlZF0gJiB7XG4gICAgY3Vyc29yOiAkY3Vyc29yLWRpc2FibGVkO1xuICB9XG59XG4vLyBUaGVzZSBjbGFzc2VzIGFyZSB1c2VkIGRpcmVjdGx5IG9uIDxsYWJlbD5zXG4ucmFkaW8taW5saW5lLFxuLmNoZWNrYm94LWlubGluZSB7XG4gICYuZGlzYWJsZWQsXG4gIGZpZWxkc2V0W2Rpc2FibGVkXSAmIHtcbiAgICBjdXJzb3I6ICRjdXJzb3ItZGlzYWJsZWQ7XG4gIH1cbn1cbi8vIFRoZXNlIGNsYXNzZXMgYXJlIHVzZWQgb24gZWxlbWVudHMgd2l0aCA8bGFiZWw+IGRlc2NlbmRhbnRzXG4ucmFkaW8sXG4uY2hlY2tib3gge1xuICAmLmRpc2FibGVkLFxuICBmaWVsZHNldFtkaXNhYmxlZF0gJiB7XG4gICAgbGFiZWwge1xuICAgICAgY3Vyc29yOiAkY3Vyc29yLWRpc2FibGVkO1xuICAgIH1cbiAgfVxufVxuXG5cbi8vIFN0YXRpYyBmb3JtIGNvbnRyb2wgdGV4dFxuLy9cbi8vIEFwcGx5IGNsYXNzIHRvIGEgYHBgIGVsZW1lbnQgdG8gbWFrZSBhbnkgc3RyaW5nIG9mIHRleHQgYWxpZ24gd2l0aCBsYWJlbHMgaW5cbi8vIGEgaG9yaXpvbnRhbCBmb3JtIGxheW91dC5cblxuLmZvcm0tY29udHJvbC1zdGF0aWMge1xuICAvLyBTaXplIGl0IGFwcHJvcHJpYXRlbHkgbmV4dCB0byByZWFsIGZvcm0gY29udHJvbHNcbiAgcGFkZGluZy10b3A6ICgkcGFkZGluZy1iYXNlLXZlcnRpY2FsICsgMSk7XG4gIHBhZGRpbmctYm90dG9tOiAoJHBhZGRpbmctYmFzZS12ZXJ0aWNhbCArIDEpO1xuICAvLyBSZW1vdmUgZGVmYXVsdCBtYXJnaW4gZnJvbSBgcGBcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgbWluLWhlaWdodDogKCRsaW5lLWhlaWdodC1jb21wdXRlZCArICRmb250LXNpemUtYmFzZSk7XG5cbiAgJi5pbnB1dC1sZyxcbiAgJi5pbnB1dC1zbSB7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gIH1cbn1cblxuXG4vLyBGb3JtIGNvbnRyb2wgc2l6aW5nXG4vL1xuLy8gQnVpbGQgb24gYC5mb3JtLWNvbnRyb2xgIHdpdGggbW9kaWZpZXIgY2xhc3NlcyB0byBkZWNyZWFzZSBvciBpbmNyZWFzZSB0aGVcbi8vIGhlaWdodCBhbmQgZm9udC1zaXplIG9mIGZvcm0gY29udHJvbHMuXG4vL1xuLy8gVGhlIGAuZm9ybS1ncm91cC0qIGZvcm0tY29udHJvbGAgdmFyaWF0aW9ucyBhcmUgc2FkbHkgZHVwbGljYXRlZCB0byBhdm9pZCB0aGVcbi8vIGlzc3VlIGRvY3VtZW50ZWQgaW4gaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2lzc3Vlcy8xNTA3NC5cblxuQGluY2x1ZGUgaW5wdXQtc2l6ZSgnLmlucHV0LXNtJywgJGlucHV0LWhlaWdodC1zbWFsbCwgJHBhZGRpbmctc21hbGwtdmVydGljYWwsICRwYWRkaW5nLXNtYWxsLWhvcml6b250YWwsICRmb250LXNpemUtc21hbGwsICRsaW5lLWhlaWdodC1zbWFsbCwgJGlucHV0LWJvcmRlci1yYWRpdXMtc21hbGwpO1xuLmZvcm0tZ3JvdXAtc20ge1xuICAuZm9ybS1jb250cm9sIHtcbiAgICBoZWlnaHQ6ICRpbnB1dC1oZWlnaHQtc21hbGw7XG4gICAgcGFkZGluZzogJHBhZGRpbmctc21hbGwtdmVydGljYWwgJHBhZGRpbmctc21hbGwtaG9yaXpvbnRhbDtcbiAgICBmb250LXNpemU6ICRmb250LXNpemUtc21hbGw7XG4gICAgbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodC1zbWFsbDtcbiAgICBib3JkZXItcmFkaXVzOiAkaW5wdXQtYm9yZGVyLXJhZGl1cy1zbWFsbDtcbiAgfVxuICBzZWxlY3QuZm9ybS1jb250cm9sIHtcbiAgICBoZWlnaHQ6ICRpbnB1dC1oZWlnaHQtc21hbGw7XG4gICAgbGluZS1oZWlnaHQ6ICRpbnB1dC1oZWlnaHQtc21hbGw7XG4gIH1cbiAgdGV4dGFyZWEuZm9ybS1jb250cm9sLFxuICBzZWxlY3RbbXVsdGlwbGVdLmZvcm0tY29udHJvbCB7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICB9XG4gIC5mb3JtLWNvbnRyb2wtc3RhdGljIHtcbiAgICBoZWlnaHQ6ICRpbnB1dC1oZWlnaHQtc21hbGw7XG4gICAgbWluLWhlaWdodDogKCRsaW5lLWhlaWdodC1jb21wdXRlZCArICRmb250LXNpemUtc21hbGwpO1xuICAgIHBhZGRpbmc6ICgkcGFkZGluZy1zbWFsbC12ZXJ0aWNhbCArIDEpICRwYWRkaW5nLXNtYWxsLWhvcml6b250YWw7XG4gICAgZm9udC1zaXplOiAkZm9udC1zaXplLXNtYWxsO1xuICAgIGxpbmUtaGVpZ2h0OiAkbGluZS1oZWlnaHQtc21hbGw7XG4gIH1cbn1cblxuQGluY2x1ZGUgaW5wdXQtc2l6ZSgnLmlucHV0LWxnJywgJGlucHV0LWhlaWdodC1sYXJnZSwgJHBhZGRpbmctbGFyZ2UtdmVydGljYWwsICRwYWRkaW5nLWxhcmdlLWhvcml6b250YWwsICRmb250LXNpemUtbGFyZ2UsICRsaW5lLWhlaWdodC1sYXJnZSwgJGlucHV0LWJvcmRlci1yYWRpdXMtbGFyZ2UpO1xuLmZvcm0tZ3JvdXAtbGcge1xuICAuZm9ybS1jb250cm9sIHtcbiAgICBoZWlnaHQ6ICRpbnB1dC1oZWlnaHQtbGFyZ2U7XG4gICAgcGFkZGluZzogJHBhZGRpbmctbGFyZ2UtdmVydGljYWwgJHBhZGRpbmctbGFyZ2UtaG9yaXpvbnRhbDtcbiAgICBmb250LXNpemU6ICRmb250LXNpemUtbGFyZ2U7XG4gICAgbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodC1sYXJnZTtcbiAgICBib3JkZXItcmFkaXVzOiAkaW5wdXQtYm9yZGVyLXJhZGl1cy1sYXJnZTtcbiAgfVxuICBzZWxlY3QuZm9ybS1jb250cm9sIHtcbiAgICBoZWlnaHQ6ICRpbnB1dC1oZWlnaHQtbGFyZ2U7XG4gICAgbGluZS1oZWlnaHQ6ICRpbnB1dC1oZWlnaHQtbGFyZ2U7XG4gIH1cbiAgdGV4dGFyZWEuZm9ybS1jb250cm9sLFxuICBzZWxlY3RbbXVsdGlwbGVdLmZvcm0tY29udHJvbCB7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICB9XG4gIC5mb3JtLWNvbnRyb2wtc3RhdGljIHtcbiAgICBoZWlnaHQ6ICRpbnB1dC1oZWlnaHQtbGFyZ2U7XG4gICAgbWluLWhlaWdodDogKCRsaW5lLWhlaWdodC1jb21wdXRlZCArICRmb250LXNpemUtbGFyZ2UpO1xuICAgIHBhZGRpbmc6ICgkcGFkZGluZy1sYXJnZS12ZXJ0aWNhbCArIDEpICRwYWRkaW5nLWxhcmdlLWhvcml6b250YWw7XG4gICAgZm9udC1zaXplOiAkZm9udC1zaXplLWxhcmdlO1xuICAgIGxpbmUtaGVpZ2h0OiAkbGluZS1oZWlnaHQtbGFyZ2U7XG4gIH1cbn1cblxuXG4vLyBGb3JtIGNvbnRyb2wgZmVlZGJhY2sgc3RhdGVzXG4vL1xuLy8gQXBwbHkgY29udGV4dHVhbCBhbmQgc2VtYW50aWMgc3RhdGVzIHRvIGluZGl2aWR1YWwgZm9ybSBjb250cm9scy5cblxuLmhhcy1mZWVkYmFjayB7XG4gIC8vIEVuYWJsZSBhYnNvbHV0ZSBwb3NpdGlvbmluZ1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgLy8gRW5zdXJlIGljb25zIGRvbid0IG92ZXJsYXAgdGV4dFxuICAuZm9ybS1jb250cm9sIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAoJGlucHV0LWhlaWdodC1iYXNlICogMS4yNSk7XG4gIH1cbn1cbi8vIEZlZWRiYWNrIGljb24gKHJlcXVpcmVzIC5nbHlwaGljb24gY2xhc3Nlcylcbi5mb3JtLWNvbnRyb2wtZmVlZGJhY2sge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIHotaW5kZXg6IDI7IC8vIEVuc3VyZSBpY29uIGlzIGFib3ZlIGlucHV0IGdyb3Vwc1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6ICRpbnB1dC1oZWlnaHQtYmFzZTtcbiAgaGVpZ2h0OiAkaW5wdXQtaGVpZ2h0LWJhc2U7XG4gIGxpbmUtaGVpZ2h0OiAkaW5wdXQtaGVpZ2h0LWJhc2U7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG4uaW5wdXQtbGcgKyAuZm9ybS1jb250cm9sLWZlZWRiYWNrLFxuLmlucHV0LWdyb3VwLWxnICsgLmZvcm0tY29udHJvbC1mZWVkYmFjayxcbi5mb3JtLWdyb3VwLWxnIC5mb3JtLWNvbnRyb2wgKyAuZm9ybS1jb250cm9sLWZlZWRiYWNrIHtcbiAgd2lkdGg6ICRpbnB1dC1oZWlnaHQtbGFyZ2U7XG4gIGhlaWdodDogJGlucHV0LWhlaWdodC1sYXJnZTtcbiAgbGluZS1oZWlnaHQ6ICRpbnB1dC1oZWlnaHQtbGFyZ2U7XG59XG4uaW5wdXQtc20gKyAuZm9ybS1jb250cm9sLWZlZWRiYWNrLFxuLmlucHV0LWdyb3VwLXNtICsgLmZvcm0tY29udHJvbC1mZWVkYmFjayxcbi5mb3JtLWdyb3VwLXNtIC5mb3JtLWNvbnRyb2wgKyAuZm9ybS1jb250cm9sLWZlZWRiYWNrIHtcbiAgd2lkdGg6ICRpbnB1dC1oZWlnaHQtc21hbGw7XG4gIGhlaWdodDogJGlucHV0LWhlaWdodC1zbWFsbDtcbiAgbGluZS1oZWlnaHQ6ICRpbnB1dC1oZWlnaHQtc21hbGw7XG59XG5cbi8vIEZlZWRiYWNrIHN0YXRlc1xuLmhhcy1zdWNjZXNzIHtcbiAgQGluY2x1ZGUgZm9ybS1jb250cm9sLXZhbGlkYXRpb24oJHN0YXRlLXN1Y2Nlc3MtdGV4dCwgJHN0YXRlLXN1Y2Nlc3MtdGV4dCwgJHN0YXRlLXN1Y2Nlc3MtYmcpO1xufVxuLmhhcy13YXJuaW5nIHtcbiAgQGluY2x1ZGUgZm9ybS1jb250cm9sLXZhbGlkYXRpb24oJHN0YXRlLXdhcm5pbmctdGV4dCwgJHN0YXRlLXdhcm5pbmctdGV4dCwgJHN0YXRlLXdhcm5pbmctYmcpO1xufVxuLmhhcy1lcnJvciB7XG4gIEBpbmNsdWRlIGZvcm0tY29udHJvbC12YWxpZGF0aW9uKCRzdGF0ZS1kYW5nZXItdGV4dCwgJHN0YXRlLWRhbmdlci10ZXh0LCAkc3RhdGUtZGFuZ2VyLWJnKTtcbn1cblxuLy8gUmVwb3NpdGlvbiBmZWVkYmFjayBpY29uIGlmIGlucHV0IGhhcyB2aXNpYmxlIGxhYmVsIGFib3ZlXG4uaGFzLWZlZWRiYWNrIGxhYmVsIHtcblxuICAmIH4gLmZvcm0tY29udHJvbC1mZWVkYmFjayB7XG4gICAgdG9wOiAoJGxpbmUtaGVpZ2h0LWNvbXB1dGVkICsgNSk7IC8vIEhlaWdodCBvZiB0aGUgYGxhYmVsYCBhbmQgaXRzIG1hcmdpblxuICB9XG4gICYuc3Itb25seSB+IC5mb3JtLWNvbnRyb2wtZmVlZGJhY2sge1xuICAgIHRvcDogMDtcbiAgfVxufVxuXG5cbi8vIEhlbHAgdGV4dFxuLy9cbi8vIEFwcGx5IHRvIGFueSBlbGVtZW50IHlvdSB3aXNoIHRvIGNyZWF0ZSBsaWdodCB0ZXh0IGZvciBwbGFjZW1lbnQgaW1tZWRpYXRlbHlcbi8vIGJlbG93IGEgZm9ybSBjb250cm9sLiBVc2UgZm9yIGdlbmVyYWwgaGVscCwgZm9ybWF0dGluZywgb3IgaW5zdHJ1Y3Rpb25hbCB0ZXh0LlxuXG4uaGVscC1ibG9jayB7XG4gIGRpc3BsYXk6IGJsb2NrOyAvLyBhY2NvdW50IGZvciBhbnkgZWxlbWVudCB1c2luZyBoZWxwLWJsb2NrXG4gIG1hcmdpbi10b3A6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgY29sb3I6IGxpZ2h0ZW4oJHRleHQtY29sb3IsIDI1JSk7IC8vIGxpZ2h0ZW4gdGhlIHRleHQgc29tZSBmb3IgY29udHJhc3Rcbn1cblxuXG4vLyBJbmxpbmUgZm9ybXNcbi8vXG4vLyBNYWtlIGZvcm1zIGFwcGVhciBpbmxpbmUoLWJsb2NrKSBieSBhZGRpbmcgdGhlIGAuZm9ybS1pbmxpbmVgIGNsYXNzLiBJbmxpbmVcbi8vIGZvcm1zIGJlZ2luIHN0YWNrZWQgb24gZXh0cmEgc21hbGwgKG1vYmlsZSkgZGV2aWNlcyBhbmQgdGhlbiBnbyBpbmxpbmUgd2hlblxuLy8gdmlld3BvcnRzIHJlYWNoIDw3NjhweC5cbi8vXG4vLyBSZXF1aXJlcyB3cmFwcGluZyBpbnB1dHMgYW5kIGxhYmVscyB3aXRoIGAuZm9ybS1ncm91cGAgZm9yIHByb3BlciBkaXNwbGF5IG9mXG4vLyBkZWZhdWx0IEhUTUwgZm9ybSBjb250cm9scyBhbmQgb3VyIGN1c3RvbSBmb3JtIGNvbnRyb2xzIChlLmcuLCBpbnB1dCBncm91cHMpLlxuLy9cbi8vIEhlYWRzIHVwISBUaGlzIGlzIG1peGluLWVkIGludG8gYC5uYXZiYXItZm9ybWAgaW4gbmF2YmFycy5sZXNzLlxuXG4vLyBbY29udmVydGVyXSBleHRyYWN0ZWQgZnJvbSBgLmZvcm0taW5saW5lYCBmb3IgbGlic2FzcyBjb21wYXRpYmlsaXR5XG5AbWl4aW4gZm9ybS1pbmxpbmUge1xuXG4gIC8vIEtpY2sgaW4gdGhlIGlubGluZVxuICBAbWVkaWEgKG1pbi13aWR0aDogJHNjcmVlbi1zbS1taW4pIHtcbiAgICAvLyBJbmxpbmUtYmxvY2sgYWxsIHRoZSB0aGluZ3MgZm9yIFwiaW5saW5lXCJcbiAgICAuZm9ybS1ncm91cCB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICB9XG5cbiAgICAvLyBJbiBuYXZiYXItZm9ybSwgYWxsb3cgZm9sa3MgdG8gKm5vdCogdXNlIGAuZm9ybS1ncm91cGBcbiAgICAuZm9ybS1jb250cm9sIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIHdpZHRoOiBhdXRvOyAvLyBQcmV2ZW50IGxhYmVscyBmcm9tIHN0YWNraW5nIGFib3ZlIGlucHV0cyBpbiBgLmZvcm0tZ3JvdXBgXG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIH1cblxuICAgIC8vIE1ha2Ugc3RhdGljIGNvbnRyb2xzIGJlaGF2ZSBsaWtlIHJlZ3VsYXIgb25lc1xuICAgIC5mb3JtLWNvbnRyb2wtc3RhdGljIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB9XG5cbiAgICAuaW5wdXQtZ3JvdXAge1xuICAgICAgZGlzcGxheTogaW5saW5lLXRhYmxlO1xuICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcblxuICAgICAgLmlucHV0LWdyb3VwLWFkZG9uLFxuICAgICAgLmlucHV0LWdyb3VwLWJ0bixcbiAgICAgIC5mb3JtLWNvbnRyb2wge1xuICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBJbnB1dCBncm91cHMgbmVlZCB0aGF0IDEwMCUgd2lkdGggdGhvdWdoXG4gICAgLmlucHV0LWdyb3VwID4gLmZvcm0tY29udHJvbCB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICAuY29udHJvbC1sYWJlbCB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICB9XG5cbiAgICAvLyBSZW1vdmUgZGVmYXVsdCBtYXJnaW4gb24gcmFkaW9zL2NoZWNrYm94ZXMgdGhhdCB3ZXJlIHVzZWQgZm9yIHN0YWNraW5nLCBhbmRcbiAgICAvLyB0aGVuIHVuZG8gdGhlIGZsb2F0aW5nIG9mIHJhZGlvcyBhbmQgY2hlY2tib3hlcyB0byBtYXRjaC5cbiAgICAucmFkaW8sXG4gICAgLmNoZWNrYm94IHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcblxuICAgICAgbGFiZWwge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgICB9XG4gICAgfVxuICAgIC5yYWRpbyBpbnB1dFt0eXBlPVwicmFkaW9cIl0sXG4gICAgLmNoZWNrYm94IGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICB9XG5cbiAgICAvLyBSZS1vdmVycmlkZSB0aGUgZmVlZGJhY2sgaWNvbi5cbiAgICAuaGFzLWZlZWRiYWNrIC5mb3JtLWNvbnRyb2wtZmVlZGJhY2sge1xuICAgICAgdG9wOiAwO1xuICAgIH1cbiAgfVxufVxuLy8gW2NvbnZlcnRlcl0gZXh0cmFjdGVkIGFzIGBAbWl4aW4gZm9ybS1pbmxpbmVgIGZvciBsaWJzYXNzIGNvbXBhdGliaWxpdHlcbi5mb3JtLWlubGluZSB7XG4gIEBpbmNsdWRlIGZvcm0taW5saW5lO1xufVxuXG5cblxuLy8gSG9yaXpvbnRhbCBmb3Jtc1xuLy9cbi8vIEhvcml6b250YWwgZm9ybXMgYXJlIGJ1aWx0IG9uIGdyaWQgY2xhc3NlcyBhbmQgYWxsb3cgeW91IHRvIGNyZWF0ZSBmb3JtcyB3aXRoXG4vLyBsYWJlbHMgb24gdGhlIGxlZnQgYW5kIGlucHV0cyBvbiB0aGUgcmlnaHQuXG5cbi5mb3JtLWhvcml6b250YWwge1xuXG4gIC8vIENvbnNpc3RlbnQgdmVydGljYWwgYWxpZ25tZW50IG9mIHJhZGlvcyBhbmQgY2hlY2tib3hlc1xuICAvL1xuICAvLyBMYWJlbHMgYWxzbyBnZXQgc29tZSByZXNldCBzdHlsZXMsIGJ1dCB0aGF0IGlzIHNjb3BlZCB0byBhIG1lZGlhIHF1ZXJ5IGJlbG93LlxuICAucmFkaW8sXG4gIC5jaGVja2JveCxcbiAgLnJhZGlvLWlubGluZSxcbiAgLmNoZWNrYm94LWlubGluZSB7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIHBhZGRpbmctdG9wOiAoJHBhZGRpbmctYmFzZS12ZXJ0aWNhbCArIDEpOyAvLyBEZWZhdWx0IHBhZGRpbmcgcGx1cyBhIGJvcmRlclxuICB9XG4gIC8vIEFjY291bnQgZm9yIHBhZGRpbmcgd2UncmUgYWRkaW5nIHRvIGVuc3VyZSB0aGUgYWxpZ25tZW50IGFuZCBvZiBoZWxwIHRleHRcbiAgLy8gYW5kIG90aGVyIGNvbnRlbnQgYmVsb3cgaXRlbXNcbiAgLnJhZGlvLFxuICAuY2hlY2tib3gge1xuICAgIG1pbi1oZWlnaHQ6ICgkbGluZS1oZWlnaHQtY29tcHV0ZWQgKyAoJHBhZGRpbmctYmFzZS12ZXJ0aWNhbCArIDEpKTtcbiAgfVxuXG4gIC8vIE1ha2UgZm9ybSBncm91cHMgYmVoYXZlIGxpa2Ugcm93c1xuICAuZm9ybS1ncm91cCB7XG4gICAgQGluY2x1ZGUgbWFrZS1yb3c7XG4gIH1cblxuICAvLyBSZXNldCBzcGFjaW5nIGFuZCByaWdodCBhbGlnbiBsYWJlbHMsIGJ1dCBzY29wZSB0byBtZWRpYSBxdWVyaWVzIHNvIHRoYXRcbiAgLy8gbGFiZWxzIG9uIG5hcnJvdyB2aWV3cG9ydHMgc3RhY2sgdGhlIHNhbWUgYXMgYSBkZWZhdWx0IGZvcm0gZXhhbXBsZS5cbiAgQG1lZGlhIChtaW4td2lkdGg6ICRzY3JlZW4tc20tbWluKSB7XG4gICAgLmNvbnRyb2wtbGFiZWwge1xuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgcGFkZGluZy10b3A6ICgkcGFkZGluZy1iYXNlLXZlcnRpY2FsICsgMSk7IC8vIERlZmF1bHQgcGFkZGluZyBwbHVzIGEgYm9yZGVyXG4gICAgfVxuICB9XG5cbiAgLy8gVmFsaWRhdGlvbiBzdGF0ZXNcbiAgLy9cbiAgLy8gUmVwb3NpdGlvbiB0aGUgaWNvbiBiZWNhdXNlIGl0J3Mgbm93IHdpdGhpbiBhIGdyaWQgY29sdW1uIGFuZCBjb2x1bW5zIGhhdmVcbiAgLy8gYHBvc2l0aW9uOiByZWxhdGl2ZTtgIG9uIHRoZW0uIEFsc28gYWNjb3VudHMgZm9yIHRoZSBncmlkIGd1dHRlciBwYWRkaW5nLlxuICAuaGFzLWZlZWRiYWNrIC5mb3JtLWNvbnRyb2wtZmVlZGJhY2sge1xuICAgIHJpZ2h0OiBmbG9vcigoJGdyaWQtZ3V0dGVyLXdpZHRoIC8gMikpO1xuICB9XG5cbiAgLy8gRm9ybSBncm91cCBzaXplc1xuICAvL1xuICAvLyBRdWljayB1dGlsaXR5IGNsYXNzIGZvciBhcHBseWluZyBgLmlucHV0LWxnYCBhbmQgYC5pbnB1dC1zbWAgc3R5bGVzIHRvIHRoZVxuICAvLyBpbnB1dHMgYW5kIGxhYmVscyB3aXRoaW4gYSBgLmZvcm0tZ3JvdXBgLlxuICAuZm9ybS1ncm91cC1sZyB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRzY3JlZW4tc20tbWluKSB7XG4gICAgICAuY29udHJvbC1sYWJlbCB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAoJHBhZGRpbmctbGFyZ2UtdmVydGljYWwgKyAxKTtcbiAgICAgICAgZm9udC1zaXplOiAkZm9udC1zaXplLWxhcmdlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAuZm9ybS1ncm91cC1zbSB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRzY3JlZW4tc20tbWluKSB7XG4gICAgICAuY29udHJvbC1sYWJlbCB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAoJHBhZGRpbmctc21hbGwtdmVydGljYWwgKyAxKTtcbiAgICAgICAgZm9udC1zaXplOiAkZm9udC1zaXplLXNtYWxsO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiLy9cbi8vIEJ1dHRvbnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblxuLy8gQmFzZSBzdHlsZXNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi5idG4ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDA7IC8vIEZvciBpbnB1dC5idG5cbiAgZm9udC13ZWlnaHQ6ICRidG4tZm9udC13ZWlnaHQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTsgLy8gUmVzZXQgdW51c3VhbCBGaXJlZm94LW9uLUFuZHJvaWQgZGVmYXVsdCBzdHlsZTsgc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9uZWNvbGFzL25vcm1hbGl6ZS5jc3MvaXNzdWVzLzIxNFxuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgQGluY2x1ZGUgYnV0dG9uLXNpemUoJHBhZGRpbmctYmFzZS12ZXJ0aWNhbCwgJHBhZGRpbmctYmFzZS1ob3Jpem9udGFsLCAkZm9udC1zaXplLWJhc2UsICRsaW5lLWhlaWdodC1iYXNlLCAkYnRuLWJvcmRlci1yYWRpdXMtYmFzZSk7XG4gIEBpbmNsdWRlIHVzZXItc2VsZWN0KG5vbmUpO1xuXG4gICYsXG4gICY6YWN0aXZlLFxuICAmLmFjdGl2ZSB7XG4gICAgJjpmb2N1cyxcbiAgICAmLmZvY3VzIHtcbiAgICAgIEBpbmNsdWRlIHRhYi1mb2N1cztcbiAgICB9XG4gIH1cblxuICAmOmhvdmVyLFxuICAmOmZvY3VzLFxuICAmLmZvY3VzIHtcbiAgICBjb2xvcjogJGJ0bi1kZWZhdWx0LWNvbG9yO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuXG4gICY6YWN0aXZlLFxuICAmLmFjdGl2ZSB7XG4gICAgb3V0bGluZTogMDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xuICAgIEBpbmNsdWRlIGJveC1zaGFkb3coaW5zZXQgMCAzcHggNXB4IHJnYmEoMCwwLDAsLjEyNSkpO1xuICB9XG5cbiAgJi5kaXNhYmxlZCxcbiAgJltkaXNhYmxlZF0sXG4gIGZpZWxkc2V0W2Rpc2FibGVkXSAmIHtcbiAgICBjdXJzb3I6ICRjdXJzb3ItZGlzYWJsZWQ7XG4gICAgQGluY2x1ZGUgb3BhY2l0eSguNjUpO1xuICAgIEBpbmNsdWRlIGJveC1zaGFkb3cobm9uZSk7XG4gIH1cblxuICAvLyBbY29udmVydGVyXSBleHRyYWN0ZWQgYSYgdG8gYS5idG5cbn1cblxuYS5idG4ge1xuICAmLmRpc2FibGVkLFxuICBmaWVsZHNldFtkaXNhYmxlZF0gJiB7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7IC8vIEZ1dHVyZS1wcm9vZiBkaXNhYmxpbmcgb2YgY2xpY2tzIG9uIGA8YT5gIGVsZW1lbnRzXG4gIH1cbn1cblxuXG4vLyBBbHRlcm5hdGUgYnV0dG9uc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLmJ0bi1kZWZhdWx0IHtcbiAgQGluY2x1ZGUgYnV0dG9uLXZhcmlhbnQoJGJ0bi1kZWZhdWx0LWNvbG9yLCAkYnRuLWRlZmF1bHQtYmcsICRidG4tZGVmYXVsdC1ib3JkZXIpO1xufVxuLmJ0bi1wcmltYXJ5IHtcbiAgQGluY2x1ZGUgYnV0dG9uLXZhcmlhbnQoJGJ0bi1wcmltYXJ5LWNvbG9yLCAkYnRuLXByaW1hcnktYmcsICRidG4tcHJpbWFyeS1ib3JkZXIpO1xufVxuLy8gU3VjY2VzcyBhcHBlYXJzIGFzIGdyZWVuXG4uYnRuLXN1Y2Nlc3Mge1xuICBAaW5jbHVkZSBidXR0b24tdmFyaWFudCgkYnRuLXN1Y2Nlc3MtY29sb3IsICRidG4tc3VjY2Vzcy1iZywgJGJ0bi1zdWNjZXNzLWJvcmRlcik7XG59XG4vLyBJbmZvIGFwcGVhcnMgYXMgYmx1ZS1ncmVlblxuLmJ0bi1pbmZvIHtcbiAgQGluY2x1ZGUgYnV0dG9uLXZhcmlhbnQoJGJ0bi1pbmZvLWNvbG9yLCAkYnRuLWluZm8tYmcsICRidG4taW5mby1ib3JkZXIpO1xufVxuLy8gV2FybmluZyBhcHBlYXJzIGFzIG9yYW5nZVxuLmJ0bi13YXJuaW5nIHtcbiAgQGluY2x1ZGUgYnV0dG9uLXZhcmlhbnQoJGJ0bi13YXJuaW5nLWNvbG9yLCAkYnRuLXdhcm5pbmctYmcsICRidG4td2FybmluZy1ib3JkZXIpO1xufVxuLy8gRGFuZ2VyIGFuZCBlcnJvciBhcHBlYXIgYXMgcmVkXG4uYnRuLWRhbmdlciB7XG4gIEBpbmNsdWRlIGJ1dHRvbi12YXJpYW50KCRidG4tZGFuZ2VyLWNvbG9yLCAkYnRuLWRhbmdlci1iZywgJGJ0bi1kYW5nZXItYm9yZGVyKTtcbn1cblxuXG4vLyBMaW5rIGJ1dHRvbnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gTWFrZSBhIGJ1dHRvbiBsb29rIGFuZCBiZWhhdmUgbGlrZSBhIGxpbmtcbi5idG4tbGluayB7XG4gIGNvbG9yOiAkbGluay1jb2xvcjtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgYm9yZGVyLXJhZGl1czogMDtcblxuICAmLFxuICAmOmFjdGl2ZSxcbiAgJi5hY3RpdmUsXG4gICZbZGlzYWJsZWRdLFxuICBmaWVsZHNldFtkaXNhYmxlZF0gJiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgQGluY2x1ZGUgYm94LXNoYWRvdyhub25lKTtcbiAgfVxuICAmLFxuICAmOmhvdmVyLFxuICAmOmZvY3VzLFxuICAmOmFjdGl2ZSB7XG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgfVxuICAmOmhvdmVyLFxuICAmOmZvY3VzIHtcbiAgICBjb2xvcjogJGxpbmstaG92ZXItY29sb3I7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiAkbGluay1ob3Zlci1kZWNvcmF0aW9uO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICB9XG4gICZbZGlzYWJsZWRdLFxuICBmaWVsZHNldFtkaXNhYmxlZF0gJiB7XG4gICAgJjpob3ZlcixcbiAgICAmOmZvY3VzIHtcbiAgICAgIGNvbG9yOiAkYnRuLWxpbmstZGlzYWJsZWQtY29sb3I7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgfVxuICB9XG59XG5cblxuLy8gQnV0dG9uIFNpemVzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4uYnRuLWxnIHtcbiAgLy8gbGluZS1oZWlnaHQ6IGVuc3VyZSBldmVuLW51bWJlcmVkIGhlaWdodCBvZiBidXR0b24gbmV4dCB0byBsYXJnZSBpbnB1dFxuICBAaW5jbHVkZSBidXR0b24tc2l6ZSgkcGFkZGluZy1sYXJnZS12ZXJ0aWNhbCwgJHBhZGRpbmctbGFyZ2UtaG9yaXpvbnRhbCwgJGZvbnQtc2l6ZS1sYXJnZSwgJGxpbmUtaGVpZ2h0LWxhcmdlLCAkYnRuLWJvcmRlci1yYWRpdXMtbGFyZ2UpO1xufVxuLmJ0bi1zbSB7XG4gIC8vIGxpbmUtaGVpZ2h0OiBlbnN1cmUgcHJvcGVyIGhlaWdodCBvZiBidXR0b24gbmV4dCB0byBzbWFsbCBpbnB1dFxuICBAaW5jbHVkZSBidXR0b24tc2l6ZSgkcGFkZGluZy1zbWFsbC12ZXJ0aWNhbCwgJHBhZGRpbmctc21hbGwtaG9yaXpvbnRhbCwgJGZvbnQtc2l6ZS1zbWFsbCwgJGxpbmUtaGVpZ2h0LXNtYWxsLCAkYnRuLWJvcmRlci1yYWRpdXMtc21hbGwpO1xufVxuLmJ0bi14cyB7XG4gIEBpbmNsdWRlIGJ1dHRvbi1zaXplKCRwYWRkaW5nLXhzLXZlcnRpY2FsLCAkcGFkZGluZy14cy1ob3Jpem9udGFsLCAkZm9udC1zaXplLXNtYWxsLCAkbGluZS1oZWlnaHQtc21hbGwsICRidG4tYm9yZGVyLXJhZGl1cy1zbWFsbCk7XG59XG5cblxuLy8gQmxvY2sgYnV0dG9uXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4uYnRuLWJsb2NrIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4vLyBWZXJ0aWNhbGx5IHNwYWNlIG91dCBtdWx0aXBsZSBibG9jayBidXR0b25zXG4uYnRuLWJsb2NrICsgLmJ0bi1ibG9jayB7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cblxuLy8gU3BlY2lmaWNpdHkgb3ZlcnJpZGVzXG5pbnB1dFt0eXBlPVwic3VibWl0XCJdLFxuaW5wdXRbdHlwZT1cInJlc2V0XCJdLFxuaW5wdXRbdHlwZT1cImJ1dHRvblwiXSB7XG4gICYuYnRuLWJsb2NrIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuIiwiLy9cbi8vIENvbXBvbmVudCBhbmltYXRpb25zXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyBIZWFkcyB1cCFcbi8vXG4vLyBXZSBkb24ndCB1c2UgdGhlIGAub3BhY2l0eSgpYCBtaXhpbiBoZXJlIHNpbmNlIGl0IGNhdXNlcyBhIGJ1ZyB3aXRoIHRleHRcbi8vIGZpZWxkcyBpbiBJRTctOC4gU291cmNlOiBodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvcHVsbC8zNTUyLlxuXG4uZmFkZSB7XG4gIG9wYWNpdHk6IDA7XG4gIEBpbmNsdWRlIHRyYW5zaXRpb24ob3BhY2l0eSAuMTVzIGxpbmVhcik7XG4gICYuaW4ge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cblxuLmNvbGxhcHNlIHtcbiAgZGlzcGxheTogbm9uZTtcblxuICAmLmluICAgICAgeyBkaXNwbGF5OiBibG9jazsgfVxuICAvLyBbY29udmVydGVyXSBleHRyYWN0ZWQgdHImLmluIHRvIHRyLmNvbGxhcHNlLmluXG4gIC8vIFtjb252ZXJ0ZXJdIGV4dHJhY3RlZCB0Ym9keSYuaW4gdG8gdGJvZHkuY29sbGFwc2UuaW5cbn1cblxudHIuY29sbGFwc2UuaW4gICAgeyBkaXNwbGF5OiB0YWJsZS1yb3c7IH1cblxudGJvZHkuY29sbGFwc2UuaW4geyBkaXNwbGF5OiB0YWJsZS1yb3ctZ3JvdXA7IH1cblxuLmNvbGxhcHNpbmcge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgQGluY2x1ZGUgdHJhbnNpdGlvbi1wcm9wZXJ0eShoZWlnaHQsIHZpc2liaWxpdHkpO1xuICBAaW5jbHVkZSB0cmFuc2l0aW9uLWR1cmF0aW9uKC4zNXMpO1xuICBAaW5jbHVkZSB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbihlYXNlKTtcbn1cbiIsIi8vXG4vLyBEcm9wZG93biBtZW51c1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXG4vLyBEcm9wZG93biBhcnJvdy9jYXJldFxuLmNhcmV0IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBtYXJnaW4tbGVmdDogMnB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBib3JkZXItdG9wOiAgICRjYXJldC13aWR0aC1iYXNlIGRhc2hlZDtcbiAgYm9yZGVyLXRvcDogICAkY2FyZXQtd2lkdGgtYmFzZSBzb2xpZCBcXDk7IC8vIElFOFxuICBib3JkZXItcmlnaHQ6ICRjYXJldC13aWR0aC1iYXNlIHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItbGVmdDogICRjYXJldC13aWR0aC1iYXNlIHNvbGlkIHRyYW5zcGFyZW50O1xufVxuXG4vLyBUaGUgZHJvcGRvd24gd3JhcHBlciAoZGl2KVxuLmRyb3B1cCxcbi5kcm9wZG93biB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLy8gUHJldmVudCB0aGUgZm9jdXMgb24gdGhlIGRyb3Bkb3duIHRvZ2dsZSB3aGVuIGNsb3NpbmcgZHJvcGRvd25zXG4uZHJvcGRvd24tdG9nZ2xlOmZvY3VzIHtcbiAgb3V0bGluZTogMDtcbn1cblxuLy8gVGhlIGRyb3Bkb3duIG1lbnUgKHVsKVxuLmRyb3Bkb3duLW1lbnUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTAwJTtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogJHppbmRleC1kcm9wZG93bjtcbiAgZGlzcGxheTogbm9uZTsgLy8gbm9uZSBieSBkZWZhdWx0LCBidXQgYmxvY2sgb24gXCJvcGVuXCIgb2YgdGhlIG1lbnVcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1pbi13aWR0aDogMTYwcHg7XG4gIHBhZGRpbmc6IDVweCAwO1xuICBtYXJnaW46IDJweCAwIDA7IC8vIG92ZXJyaWRlIGRlZmF1bHQgdWxcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgZm9udC1zaXplOiAkZm9udC1zaXplLWJhc2U7XG4gIHRleHQtYWxpZ246IGxlZnQ7IC8vIEVuc3VyZXMgcHJvcGVyIGFsaWdubWVudCBpZiBwYXJlbnQgaGFzIGl0IGNoYW5nZWQgKGUuZy4sIG1vZGFsIGZvb3RlcilcbiAgYmFja2dyb3VuZC1jb2xvcjogJGRyb3Bkb3duLWJnO1xuICBib3JkZXI6IDFweCBzb2xpZCAkZHJvcGRvd24tZmFsbGJhY2stYm9yZGVyOyAvLyBJRTggZmFsbGJhY2tcbiAgYm9yZGVyOiAxcHggc29saWQgJGRyb3Bkb3duLWJvcmRlcjtcbiAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXMtYmFzZTtcbiAgQGluY2x1ZGUgYm94LXNoYWRvdygwIDZweCAxMnB4IHJnYmEoMCwwLDAsLjE3NSkpO1xuICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xuXG4gIC8vIEFsaWducyB0aGUgZHJvcGRvd24gbWVudSB0byByaWdodFxuICAvL1xuICAvLyBEZXByZWNhdGVkIGFzIG9mIDMuMS4wIGluIGZhdm9yIG9mIGAuZHJvcGRvd24tbWVudS1bZGlyXWBcbiAgJi5wdWxsLXJpZ2h0IHtcbiAgICByaWdodDogMDtcbiAgICBsZWZ0OiBhdXRvO1xuICB9XG5cbiAgLy8gRGl2aWRlcnMgKGJhc2ljYWxseSBhbiBocikgd2l0aGluIHRoZSBkcm9wZG93blxuICAuZGl2aWRlciB7XG4gICAgQGluY2x1ZGUgbmF2LWRpdmlkZXIoJGRyb3Bkb3duLWRpdmlkZXItYmcpO1xuICB9XG5cbiAgLy8gTGlua3Mgd2l0aGluIHRoZSBkcm9wZG93biBtZW51XG4gID4gbGkgPiBhIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwYWRkaW5nOiAzcHggMjBweDtcbiAgICBjbGVhcjogYm90aDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGxpbmUtaGVpZ2h0OiAkbGluZS1oZWlnaHQtYmFzZTtcbiAgICBjb2xvcjogJGRyb3Bkb3duLWxpbmstY29sb3I7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDsgLy8gcHJldmVudCBsaW5rcyBmcm9tIHJhbmRvbWx5IGJyZWFraW5nIG9udG8gbmV3IGxpbmVzXG4gIH1cbn1cblxuLy8gSG92ZXIvRm9jdXMgc3RhdGVcbi5kcm9wZG93bi1tZW51ID4gbGkgPiBhIHtcbiAgJjpob3ZlcixcbiAgJjpmb2N1cyB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiAkZHJvcGRvd24tbGluay1ob3Zlci1jb2xvcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZHJvcGRvd24tbGluay1ob3Zlci1iZztcbiAgfVxufVxuXG4vLyBBY3RpdmUgc3RhdGVcbi5kcm9wZG93bi1tZW51ID4gLmFjdGl2ZSA+IGEge1xuICAmLFxuICAmOmhvdmVyLFxuICAmOmZvY3VzIHtcbiAgICBjb2xvcjogJGRyb3Bkb3duLWxpbmstYWN0aXZlLWNvbG9yO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBvdXRsaW5lOiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRkcm9wZG93bi1saW5rLWFjdGl2ZS1iZztcbiAgfVxufVxuXG4vLyBEaXNhYmxlZCBzdGF0ZVxuLy9cbi8vIEdyYXkgb3V0IHRleHQgYW5kIGVuc3VyZSB0aGUgaG92ZXIvZm9jdXMgc3RhdGUgcmVtYWlucyBncmF5XG5cbi5kcm9wZG93bi1tZW51ID4gLmRpc2FibGVkID4gYSB7XG4gICYsXG4gICY6aG92ZXIsXG4gICY6Zm9jdXMge1xuICAgIGNvbG9yOiAkZHJvcGRvd24tbGluay1kaXNhYmxlZC1jb2xvcjtcbiAgfVxuXG4gIC8vIE51a2UgaG92ZXIvZm9jdXMgZWZmZWN0c1xuICAmOmhvdmVyLFxuICAmOmZvY3VzIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTsgLy8gUmVtb3ZlIENTUyBncmFkaWVudFxuICAgIEBpbmNsdWRlIHJlc2V0LWZpbHRlcjtcbiAgICBjdXJzb3I6ICRjdXJzb3ItZGlzYWJsZWQ7XG4gIH1cbn1cblxuLy8gT3BlbiBzdGF0ZSBmb3IgdGhlIGRyb3Bkb3duXG4ub3BlbiB7XG4gIC8vIFNob3cgdGhlIG1lbnVcbiAgPiAuZHJvcGRvd24tbWVudSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cblxuICAvLyBSZW1vdmUgdGhlIG91dGxpbmUgd2hlbiA6Zm9jdXMgaXMgdHJpZ2dlcmVkXG4gID4gYSB7XG4gICAgb3V0bGluZTogMDtcbiAgfVxufVxuXG4vLyBNZW51IHBvc2l0aW9uaW5nXG4vL1xuLy8gQWRkIGV4dHJhIGNsYXNzIHRvIGAuZHJvcGRvd24tbWVudWAgdG8gZmxpcCB0aGUgYWxpZ25tZW50IG9mIHRoZSBkcm9wZG93blxuLy8gbWVudSB3aXRoIHRoZSBwYXJlbnQuXG4uZHJvcGRvd24tbWVudS1yaWdodCB7XG4gIGxlZnQ6IGF1dG87IC8vIFJlc2V0IHRoZSBkZWZhdWx0IGZyb20gYC5kcm9wZG93bi1tZW51YFxuICByaWdodDogMDtcbn1cbi8vIFdpdGggdjMsIHdlIGVuYWJsZWQgYXV0by1mbGlwcGluZyBpZiB5b3UgaGF2ZSBhIGRyb3Bkb3duIHdpdGhpbiBhIHJpZ2h0XG4vLyBhbGlnbmVkIG5hdiBjb21wb25lbnQuIFRvIGVuYWJsZSB0aGUgdW5kb2luZyBvZiB0aGF0LCB3ZSBwcm92aWRlIGFuIG92ZXJyaWRlXG4vLyB0byByZXN0b3JlIHRoZSBkZWZhdWx0IGRyb3Bkb3duIG1lbnUgYWxpZ25tZW50LlxuLy9cbi8vIFRoaXMgaXMgb25seSBmb3IgbGVmdC1hbGlnbmluZyBhIGRyb3Bkb3duIG1lbnUgd2l0aGluIGEgYC5uYXZiYXItcmlnaHRgIG9yXG4vLyBgLnB1bGwtcmlnaHRgIG5hdiBjb21wb25lbnQuXG4uZHJvcGRvd24tbWVudS1sZWZ0IHtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IGF1dG87XG59XG5cbi8vIERyb3Bkb3duIHNlY3Rpb24gaGVhZGVyc1xuLmRyb3Bkb3duLWhlYWRlciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAzcHggMjBweDtcbiAgZm9udC1zaXplOiAkZm9udC1zaXplLXNtYWxsO1xuICBsaW5lLWhlaWdodDogJGxpbmUtaGVpZ2h0LWJhc2U7XG4gIGNvbG9yOiAkZHJvcGRvd24taGVhZGVyLWNvbG9yO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwOyAvLyBhcyB3aXRoID4gbGkgPiBhXG59XG5cbi8vIEJhY2tkcm9wIHRvIGNhdGNoIGJvZHkgY2xpY2tzIG9uIG1vYmlsZSwgZXRjLlxuLmRyb3Bkb3duLWJhY2tkcm9wIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICB0b3A6IDA7XG4gIHotaW5kZXg6ICgkemluZGV4LWRyb3Bkb3duIC0gMTApO1xufVxuXG4vLyBSaWdodCBhbGlnbmVkIGRyb3Bkb3duc1xuLnB1bGwtcmlnaHQgPiAuZHJvcGRvd24tbWVudSB7XG4gIHJpZ2h0OiAwO1xuICBsZWZ0OiBhdXRvO1xufVxuXG4vLyBBbGxvdyBmb3IgZHJvcGRvd25zIHRvIGdvIGJvdHRvbSB1cCAoYWthLCBkcm9wdXAtbWVudSlcbi8vXG4vLyBKdXN0IGFkZCAuZHJvcHVwIGFmdGVyIHRoZSBzdGFuZGFyZCAuZHJvcGRvd24gY2xhc3MgYW5kIHlvdSdyZSBzZXQsIGJyby5cbi8vIFRPRE86IGFic3RyYWN0IHRoaXMgc28gdGhhdCB0aGUgbmF2YmFyIGZpeGVkIHN0eWxlcyBhcmUgbm90IHBsYWNlZCBoZXJlP1xuXG4uZHJvcHVwLFxuLm5hdmJhci1maXhlZC1ib3R0b20gLmRyb3Bkb3duIHtcbiAgLy8gUmV2ZXJzZSB0aGUgY2FyZXRcbiAgLmNhcmV0IHtcbiAgICBib3JkZXItdG9wOiAwO1xuICAgIGJvcmRlci1ib3R0b206ICRjYXJldC13aWR0aC1iYXNlIGRhc2hlZDtcbiAgICBib3JkZXItYm90dG9tOiAkY2FyZXQtd2lkdGgtYmFzZSBzb2xpZCBcXDk7IC8vIElFOFxuICAgIGNvbnRlbnQ6IFwiXCI7XG4gIH1cbiAgLy8gRGlmZmVyZW50IHBvc2l0aW9uaW5nIGZvciBib3R0b20gdXAgbWVudVxuICAuZHJvcGRvd24tbWVudSB7XG4gICAgdG9wOiBhdXRvO1xuICAgIGJvdHRvbTogMTAwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAycHg7XG4gIH1cbn1cblxuXG4vLyBDb21wb25lbnQgYWxpZ25tZW50XG4vL1xuLy8gUmVpdGVyYXRlIHBlciBuYXZiYXIubGVzcyBhbmQgdGhlIG1vZGlmaWVkIGNvbXBvbmVudCBhbGlnbm1lbnQgdGhlcmUuXG5cbkBtZWRpYSAobWluLXdpZHRoOiAkZ3JpZC1mbG9hdC1icmVha3BvaW50KSB7XG4gIC5uYXZiYXItcmlnaHQge1xuICAgIC5kcm9wZG93bi1tZW51IHtcbiAgICAgIHJpZ2h0OiAwOyBsZWZ0OiBhdXRvO1xuICAgIH1cbiAgICAvLyBOZWNlc3NhcnkgZm9yIG92ZXJyaWRlcyBvZiB0aGUgZGVmYXVsdCByaWdodCBhbGlnbmVkIG1lbnUuXG4gICAgLy8gV2lsbCByZW1vdmUgY29tZSB2NCBpbiBhbGwgbGlrZWxpaG9vZC5cbiAgICAuZHJvcGRvd24tbWVudS1sZWZ0IHtcbiAgICAgIGxlZnQ6IDA7IHJpZ2h0OiBhdXRvO1xuICAgIH1cbiAgfVxufVxuIiwiLy9cbi8vIEJ1dHRvbiBncm91cHNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIE1ha2UgdGhlIGRpdiBiZWhhdmUgbGlrZSBhIGJ1dHRvblxuLmJ0bi1ncm91cCxcbi5idG4tZ3JvdXAtdmVydGljYWwge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTsgLy8gbWF0Y2ggLmJ0biBhbGlnbm1lbnQgZ2l2ZW4gZm9udC1zaXplIGhhY2sgYWJvdmVcbiAgPiAuYnRuIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgLy8gQnJpbmcgdGhlIFwiYWN0aXZlXCIgYnV0dG9uIHRvIHRoZSBmcm9udFxuICAgICY6aG92ZXIsXG4gICAgJjpmb2N1cyxcbiAgICAmOmFjdGl2ZSxcbiAgICAmLmFjdGl2ZSB7XG4gICAgICB6LWluZGV4OiAyO1xuICAgIH1cbiAgfVxufVxuXG4vLyBQcmV2ZW50IGRvdWJsZSBib3JkZXJzIHdoZW4gYnV0dG9ucyBhcmUgbmV4dCB0byBlYWNoIG90aGVyXG4uYnRuLWdyb3VwIHtcbiAgLmJ0biArIC5idG4sXG4gIC5idG4gKyAuYnRuLWdyb3VwLFxuICAuYnRuLWdyb3VwICsgLmJ0bixcbiAgLmJ0bi1ncm91cCArIC5idG4tZ3JvdXAge1xuICAgIG1hcmdpbi1sZWZ0OiAtMXB4O1xuICB9XG59XG5cbi8vIE9wdGlvbmFsOiBHcm91cCBtdWx0aXBsZSBidXR0b24gZ3JvdXBzIHRvZ2V0aGVyIGZvciBhIHRvb2xiYXJcbi5idG4tdG9vbGJhciB7XG4gIG1hcmdpbi1sZWZ0OiAtNXB4OyAvLyBPZmZzZXQgdGhlIGZpcnN0IGNoaWxkJ3MgbWFyZ2luXG4gIEBpbmNsdWRlIGNsZWFyZml4O1xuXG4gIC5idG4sXG4gIC5idG4tZ3JvdXAsXG4gIC5pbnB1dC1ncm91cCB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gIH1cbiAgPiAuYnRuLFxuICA+IC5idG4tZ3JvdXAsXG4gID4gLmlucHV0LWdyb3VwIHtcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xuICB9XG59XG5cbi5idG4tZ3JvdXAgPiAuYnRuOm5vdCg6Zmlyc3QtY2hpbGQpOm5vdCg6bGFzdC1jaGlsZCk6bm90KC5kcm9wZG93bi10b2dnbGUpIHtcbiAgYm9yZGVyLXJhZGl1czogMDtcbn1cblxuLy8gU2V0IGNvcm5lcnMgaW5kaXZpZHVhbCBiZWNhdXNlIHNvbWV0aW1lcyBhIHNpbmdsZSBidXR0b24gY2FuIGJlIGluIGEgLmJ0bi1ncm91cCBhbmQgd2UgbmVlZCA6Zmlyc3QtY2hpbGQgYW5kIDpsYXN0LWNoaWxkIHRvIGJvdGggbWF0Y2hcbi5idG4tZ3JvdXAgPiAuYnRuOmZpcnN0LWNoaWxkIHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG4gICY6bm90KDpsYXN0LWNoaWxkKTpub3QoLmRyb3Bkb3duLXRvZ2dsZSkge1xuICAgIEBpbmNsdWRlIGJvcmRlci1yaWdodC1yYWRpdXMoMCk7XG4gIH1cbn1cbi8vIE5lZWQgLmRyb3Bkb3duLXRvZ2dsZSBzaW5jZSA6bGFzdC1jaGlsZCBkb2Vzbid0IGFwcGx5LCBnaXZlbiB0aGF0IGEgLmRyb3Bkb3duLW1lbnUgaXMgdXNlZCBpbW1lZGlhdGVseSBhZnRlciBpdFxuLmJ0bi1ncm91cCA+IC5idG46bGFzdC1jaGlsZDpub3QoOmZpcnN0LWNoaWxkKSxcbi5idG4tZ3JvdXAgPiAuZHJvcGRvd24tdG9nZ2xlOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgQGluY2x1ZGUgYm9yZGVyLWxlZnQtcmFkaXVzKDApO1xufVxuXG4vLyBDdXN0b20gZWRpdHMgZm9yIGluY2x1ZGluZyBidG4tZ3JvdXBzIHdpdGhpbiBidG4tZ3JvdXBzICh1c2VmdWwgZm9yIGluY2x1ZGluZyBkcm9wZG93biBidXR0b25zIHdpdGhpbiBhIGJ0bi1ncm91cClcbi5idG4tZ3JvdXAgPiAuYnRuLWdyb3VwIHtcbiAgZmxvYXQ6IGxlZnQ7XG59XG4uYnRuLWdyb3VwID4gLmJ0bi1ncm91cDpub3QoOmZpcnN0LWNoaWxkKTpub3QoOmxhc3QtY2hpbGQpID4gLmJ0biB7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG59XG4uYnRuLWdyb3VwID4gLmJ0bi1ncm91cDpmaXJzdC1jaGlsZDpub3QoOmxhc3QtY2hpbGQpIHtcbiAgPiAuYnRuOmxhc3QtY2hpbGQsXG4gID4gLmRyb3Bkb3duLXRvZ2dsZSB7XG4gICAgQGluY2x1ZGUgYm9yZGVyLXJpZ2h0LXJhZGl1cygwKTtcbiAgfVxufVxuLmJ0bi1ncm91cCA+IC5idG4tZ3JvdXA6bGFzdC1jaGlsZDpub3QoOmZpcnN0LWNoaWxkKSA+IC5idG46Zmlyc3QtY2hpbGQge1xuICBAaW5jbHVkZSBib3JkZXItbGVmdC1yYWRpdXMoMCk7XG59XG5cbi8vIE9uIGFjdGl2ZSBhbmQgb3BlbiwgZG9uJ3Qgc2hvdyBvdXRsaW5lXG4uYnRuLWdyb3VwIC5kcm9wZG93bi10b2dnbGU6YWN0aXZlLFxuLmJ0bi1ncm91cC5vcGVuIC5kcm9wZG93bi10b2dnbGUge1xuICBvdXRsaW5lOiAwO1xufVxuXG5cbi8vIFNpemluZ1xuLy9cbi8vIFJlbWl4IHRoZSBkZWZhdWx0IGJ1dHRvbiBzaXppbmcgY2xhc3NlcyBpbnRvIG5ldyBvbmVzIGZvciBlYXNpZXIgbWFuaXB1bGF0aW9uLlxuXG4uYnRuLWdyb3VwLXhzID4gLmJ0biB7IEBleHRlbmQgLmJ0bi14czsgfVxuLmJ0bi1ncm91cC1zbSA+IC5idG4geyBAZXh0ZW5kIC5idG4tc207IH1cbi5idG4tZ3JvdXAtbGcgPiAuYnRuIHsgQGV4dGVuZCAuYnRuLWxnOyB9XG5cblxuLy8gU3BsaXQgYnV0dG9uIGRyb3Bkb3duc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyBHaXZlIHRoZSBsaW5lIGJldHdlZW4gYnV0dG9ucyBzb21lIGRlcHRoXG4uYnRuLWdyb3VwID4gLmJ0biArIC5kcm9wZG93bi10b2dnbGUge1xuICBwYWRkaW5nLWxlZnQ6IDhweDtcbiAgcGFkZGluZy1yaWdodDogOHB4O1xufVxuLmJ0bi1ncm91cCA+IC5idG4tbGcgKyAuZHJvcGRvd24tdG9nZ2xlIHtcbiAgcGFkZGluZy1sZWZ0OiAxMnB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxMnB4O1xufVxuXG4vLyBUaGUgY2xpY2thYmxlIGJ1dHRvbiBmb3IgdG9nZ2xpbmcgdGhlIG1lbnVcbi8vIFJlbW92ZSB0aGUgZ3JhZGllbnQgYW5kIHNldCB0aGUgc2FtZSBpbnNldCBzaGFkb3cgYXMgdGhlIDphY3RpdmUgc3RhdGVcbi5idG4tZ3JvdXAub3BlbiAuZHJvcGRvd24tdG9nZ2xlIHtcbiAgQGluY2x1ZGUgYm94LXNoYWRvdyhpbnNldCAwIDNweCA1cHggcmdiYSgwLDAsMCwuMTI1KSk7XG5cbiAgLy8gU2hvdyBubyBzaGFkb3cgZm9yIGAuYnRuLWxpbmtgIHNpbmNlIGl0IGhhcyBubyBvdGhlciBidXR0b24gc3R5bGVzLlxuICAmLmJ0bi1saW5rIHtcbiAgICBAaW5jbHVkZSBib3gtc2hhZG93KG5vbmUpO1xuICB9XG59XG5cblxuLy8gUmVwb3NpdGlvbiB0aGUgY2FyZXRcbi5idG4gLmNhcmV0IHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG59XG4vLyBDYXJldHMgaW4gb3RoZXIgYnV0dG9uIHNpemVzXG4uYnRuLWxnIC5jYXJldCB7XG4gIGJvcmRlci13aWR0aDogJGNhcmV0LXdpZHRoLWxhcmdlICRjYXJldC13aWR0aC1sYXJnZSAwO1xuICBib3JkZXItYm90dG9tLXdpZHRoOiAwO1xufVxuLy8gVXBzaWRlIGRvd24gY2FyZXRzIGZvciAuZHJvcHVwXG4uZHJvcHVwIC5idG4tbGcgLmNhcmV0IHtcbiAgYm9yZGVyLXdpZHRoOiAwICRjYXJldC13aWR0aC1sYXJnZSAkY2FyZXQtd2lkdGgtbGFyZ2U7XG59XG5cblxuLy8gVmVydGljYWwgYnV0dG9uIGdyb3Vwc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4uYnRuLWdyb3VwLXZlcnRpY2FsIHtcbiAgPiAuYnRuLFxuICA+IC5idG4tZ3JvdXAsXG4gID4gLmJ0bi1ncm91cCA+IC5idG4ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZsb2F0OiBub25lO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgfVxuXG4gIC8vIENsZWFyIGZsb2F0cyBzbyBkcm9wZG93biBtZW51cyBjYW4gYmUgcHJvcGVybHkgcGxhY2VkXG4gID4gLmJ0bi1ncm91cCB7XG4gICAgQGluY2x1ZGUgY2xlYXJmaXg7XG4gICAgPiAuYnRuIHtcbiAgICAgIGZsb2F0OiBub25lO1xuICAgIH1cbiAgfVxuXG4gID4gLmJ0biArIC5idG4sXG4gID4gLmJ0biArIC5idG4tZ3JvdXAsXG4gID4gLmJ0bi1ncm91cCArIC5idG4sXG4gID4gLmJ0bi1ncm91cCArIC5idG4tZ3JvdXAge1xuICAgIG1hcmdpbi10b3A6IC0xcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gIH1cbn1cblxuLmJ0bi1ncm91cC12ZXJ0aWNhbCA+IC5idG4ge1xuICAmOm5vdCg6Zmlyc3QtY2hpbGQpOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gIH1cbiAgJjpmaXJzdC1jaGlsZDpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICBAaW5jbHVkZSBib3JkZXItdG9wLXJhZGl1cygkYnRuLWJvcmRlci1yYWRpdXMtYmFzZSk7XG4gICAgQGluY2x1ZGUgYm9yZGVyLWJvdHRvbS1yYWRpdXMoMCk7XG4gIH1cbiAgJjpsYXN0LWNoaWxkOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgICBAaW5jbHVkZSBib3JkZXItdG9wLXJhZGl1cygwKTtcbiAgICBAaW5jbHVkZSBib3JkZXItYm90dG9tLXJhZGl1cygkYnRuLWJvcmRlci1yYWRpdXMtYmFzZSk7XG4gIH1cbn1cbi5idG4tZ3JvdXAtdmVydGljYWwgPiAuYnRuLWdyb3VwOm5vdCg6Zmlyc3QtY2hpbGQpOm5vdCg6bGFzdC1jaGlsZCkgPiAuYnRuIHtcbiAgYm9yZGVyLXJhZGl1czogMDtcbn1cbi5idG4tZ3JvdXAtdmVydGljYWwgPiAuYnRuLWdyb3VwOmZpcnN0LWNoaWxkOm5vdCg6bGFzdC1jaGlsZCkge1xuICA+IC5idG46bGFzdC1jaGlsZCxcbiAgPiAuZHJvcGRvd24tdG9nZ2xlIHtcbiAgICBAaW5jbHVkZSBib3JkZXItYm90dG9tLXJhZGl1cygwKTtcbiAgfVxufVxuLmJ0bi1ncm91cC12ZXJ0aWNhbCA+IC5idG4tZ3JvdXA6bGFzdC1jaGlsZDpub3QoOmZpcnN0LWNoaWxkKSA+IC5idG46Zmlyc3QtY2hpbGQge1xuICBAaW5jbHVkZSBib3JkZXItdG9wLXJhZGl1cygwKTtcbn1cblxuXG4vLyBKdXN0aWZpZWQgYnV0dG9uIGdyb3Vwc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4uYnRuLWdyb3VwLWp1c3RpZmllZCB7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICB3aWR0aDogMTAwJTtcbiAgdGFibGUtbGF5b3V0OiBmaXhlZDtcbiAgYm9yZGVyLWNvbGxhcHNlOiBzZXBhcmF0ZTtcbiAgPiAuYnRuLFxuICA+IC5idG4tZ3JvdXAge1xuICAgIGZsb2F0OiBub25lO1xuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gICAgd2lkdGg6IDElO1xuICB9XG4gID4gLmJ0bi1ncm91cCAuYnRuIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gID4gLmJ0bi1ncm91cCAuZHJvcGRvd24tbWVudSB7XG4gICAgbGVmdDogYXV0bztcbiAgfVxufVxuXG5cbi8vIENoZWNrYm94IGFuZCByYWRpbyBvcHRpb25zXG4vL1xuLy8gSW4gb3JkZXIgdG8gc3VwcG9ydCB0aGUgYnJvd3NlcidzIGZvcm0gdmFsaWRhdGlvbiBmZWVkYmFjaywgcG93ZXJlZCBieSB0aGVcbi8vIGByZXF1aXJlZGAgYXR0cmlidXRlLCB3ZSBoYXZlIHRvIFwiaGlkZVwiIHRoZSBpbnB1dHMgdmlhIGBjbGlwYC4gV2UgY2Fubm90IHVzZVxuLy8gYGRpc3BsYXk6IG5vbmU7YCBvciBgdmlzaWJpbGl0eTogaGlkZGVuO2AgYXMgdGhhdCBhbHNvIGhpZGVzIHRoZSBwb3BvdmVyLlxuLy8gU2ltcGx5IHZpc3VhbGx5IGhpZGluZyB0aGUgaW5wdXRzIHZpYSBgb3BhY2l0eWAgd291bGQgbGVhdmUgdGhlbSBjbGlja2FibGUgaW5cbi8vIGNlcnRhaW4gY2FzZXMgd2hpY2ggaXMgcHJldmVudGVkIGJ5IHVzaW5nIGBjbGlwYCBhbmQgYHBvaW50ZXItZXZlbnRzYC5cbi8vIFRoaXMgd2F5LCB3ZSBlbnN1cmUgYSBET00gZWxlbWVudCBpcyB2aXNpYmxlIHRvIHBvc2l0aW9uIHRoZSBwb3BvdmVyIGZyb20uXG4vL1xuLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9wdWxsLzEyNzk0IGFuZFxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL3B1bGwvMTQ1NTkgZm9yIG1vcmUgaW5mb3JtYXRpb24uXG5cbltkYXRhLXRvZ2dsZT1cImJ1dHRvbnNcIl0ge1xuICA+IC5idG4sXG4gID4gLmJ0bi1ncm91cCA+IC5idG4ge1xuICAgIGlucHV0W3R5cGU9XCJyYWRpb1wiXSxcbiAgICBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0ge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgY2xpcDogcmVjdCgwLDAsMCwwKTtcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIH1cbiAgfVxufVxuIiwiLy9cbi8vIElucHV0IGdyb3Vwc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gQmFzZSBzdHlsZXNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi5pbnB1dC1ncm91cCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgLy8gRm9yIGRyb3Bkb3duc1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgYm9yZGVyLWNvbGxhcHNlOiBzZXBhcmF0ZTsgLy8gcHJldmVudCBpbnB1dCBncm91cHMgZnJvbSBpbmhlcml0aW5nIGJvcmRlciBzdHlsZXMgZnJvbSB0YWJsZSBjZWxscyB3aGVuIHBsYWNlZCB3aXRoaW4gYSB0YWJsZVxuXG4gIC8vIFVuZG8gcGFkZGluZyBhbmQgZmxvYXQgb2YgZ3JpZCBjbGFzc2VzXG4gICZbY2xhc3MqPVwiY29sLVwiXSB7XG4gICAgZmxvYXQ6IG5vbmU7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gIH1cblxuICAuZm9ybS1jb250cm9sIHtcbiAgICAvLyBFbnN1cmUgdGhhdCB0aGUgaW5wdXQgaXMgYWx3YXlzIGFib3ZlIHRoZSAqYXBwZW5kZWQqIGFkZG9uIGJ1dHRvbiBmb3JcbiAgICAvLyBwcm9wZXIgYm9yZGVyIGNvbG9ycy5cbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogMjtcblxuICAgIC8vIElFOSBmdWJhcnMgdGhlIHBsYWNlaG9sZGVyIGF0dHJpYnV0ZSBpbiB0ZXh0IGlucHV0cyBhbmQgdGhlIGFycm93cyBvblxuICAgIC8vIHNlbGVjdCBlbGVtZW50cyBpbiBpbnB1dCBncm91cHMuIFRvIGZpeCBpdCwgd2UgZmxvYXQgdGhlIGlucHV0LiBEZXRhaWxzOlxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9pc3N1ZXMvMTE1NjEjaXNzdWVjb21tZW50LTI4OTM2ODU1XG4gICAgZmxvYXQ6IGxlZnQ7XG5cbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuXG4gICAgJjpmb2N1cyB7XG4gICAgICB6LWluZGV4OiAzO1xuICAgIH1cbiAgfVxufVxuXG4vLyBTaXppbmcgb3B0aW9uc1xuLy9cbi8vIFJlbWl4IHRoZSBkZWZhdWx0IGZvcm0gY29udHJvbCBzaXppbmcgY2xhc3NlcyBpbnRvIG5ldyBvbmVzIGZvciBlYXNpZXJcbi8vIG1hbmlwdWxhdGlvbi5cblxuLmlucHV0LWdyb3VwLWxnID4gLmZvcm0tY29udHJvbCxcbi5pbnB1dC1ncm91cC1sZyA+IC5pbnB1dC1ncm91cC1hZGRvbixcbi5pbnB1dC1ncm91cC1sZyA+IC5pbnB1dC1ncm91cC1idG4gPiAuYnRuIHtcbiAgQGV4dGVuZCAuaW5wdXQtbGc7XG59XG4uaW5wdXQtZ3JvdXAtc20gPiAuZm9ybS1jb250cm9sLFxuLmlucHV0LWdyb3VwLXNtID4gLmlucHV0LWdyb3VwLWFkZG9uLFxuLmlucHV0LWdyb3VwLXNtID4gLmlucHV0LWdyb3VwLWJ0biA+IC5idG4ge1xuICBAZXh0ZW5kIC5pbnB1dC1zbTtcbn1cblxuXG4vLyBEaXNwbGF5IGFzIHRhYmxlLWNlbGxcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi5pbnB1dC1ncm91cC1hZGRvbixcbi5pbnB1dC1ncm91cC1idG4sXG4uaW5wdXQtZ3JvdXAgLmZvcm0tY29udHJvbCB7XG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG5cbiAgJjpub3QoOmZpcnN0LWNoaWxkKTpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICB9XG59XG4vLyBBZGRvbiBhbmQgYWRkb24gd3JhcHBlciBmb3IgYnV0dG9uc1xuLmlucHV0LWdyb3VwLWFkZG9uLFxuLmlucHV0LWdyb3VwLWJ0biB7XG4gIHdpZHRoOiAxJTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTsgLy8gTWF0Y2ggdGhlIGlucHV0c1xufVxuXG4vLyBUZXh0IGlucHV0IGdyb3Vwc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLmlucHV0LWdyb3VwLWFkZG9uIHtcbiAgcGFkZGluZzogJHBhZGRpbmctYmFzZS12ZXJ0aWNhbCAkcGFkZGluZy1iYXNlLWhvcml6b250YWw7XG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1iYXNlO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMTtcbiAgY29sb3I6ICRpbnB1dC1jb2xvcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkaW5wdXQtZ3JvdXAtYWRkb24tYmc7XG4gIGJvcmRlcjogMXB4IHNvbGlkICRpbnB1dC1ncm91cC1hZGRvbi1ib3JkZXItY29sb3I7XG4gIGJvcmRlci1yYWRpdXM6ICRpbnB1dC1ib3JkZXItcmFkaXVzO1xuXG4gIC8vIFNpemluZ1xuICAmLmlucHV0LXNtIHtcbiAgICBwYWRkaW5nOiAkcGFkZGluZy1zbWFsbC12ZXJ0aWNhbCAkcGFkZGluZy1zbWFsbC1ob3Jpem9udGFsO1xuICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1zbWFsbDtcbiAgICBib3JkZXItcmFkaXVzOiAkaW5wdXQtYm9yZGVyLXJhZGl1cy1zbWFsbDtcbiAgfVxuICAmLmlucHV0LWxnIHtcbiAgICBwYWRkaW5nOiAkcGFkZGluZy1sYXJnZS12ZXJ0aWNhbCAkcGFkZGluZy1sYXJnZS1ob3Jpem9udGFsO1xuICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1sYXJnZTtcbiAgICBib3JkZXItcmFkaXVzOiAkaW5wdXQtYm9yZGVyLXJhZGl1cy1sYXJnZTtcbiAgfVxuXG4gIC8vIE51a2UgZGVmYXVsdCBtYXJnaW5zIGZyb20gY2hlY2tib3hlcyBhbmQgcmFkaW9zIHRvIHZlcnRpY2FsbHkgY2VudGVyIHdpdGhpbi5cbiAgaW5wdXRbdHlwZT1cInJhZGlvXCJdLFxuICBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0ge1xuICAgIG1hcmdpbi10b3A6IDA7XG4gIH1cbn1cblxuLy8gUmVzZXQgcm91bmRlZCBjb3JuZXJzXG4uaW5wdXQtZ3JvdXAgLmZvcm0tY29udHJvbDpmaXJzdC1jaGlsZCxcbi5pbnB1dC1ncm91cC1hZGRvbjpmaXJzdC1jaGlsZCxcbi5pbnB1dC1ncm91cC1idG46Zmlyc3QtY2hpbGQgPiAuYnRuLFxuLmlucHV0LWdyb3VwLWJ0bjpmaXJzdC1jaGlsZCA+IC5idG4tZ3JvdXAgPiAuYnRuLFxuLmlucHV0LWdyb3VwLWJ0bjpmaXJzdC1jaGlsZCA+IC5kcm9wZG93bi10b2dnbGUsXG4uaW5wdXQtZ3JvdXAtYnRuOmxhc3QtY2hpbGQgPiAuYnRuOm5vdCg6bGFzdC1jaGlsZCk6bm90KC5kcm9wZG93bi10b2dnbGUpLFxuLmlucHV0LWdyb3VwLWJ0bjpsYXN0LWNoaWxkID4gLmJ0bi1ncm91cDpub3QoOmxhc3QtY2hpbGQpID4gLmJ0biB7XG4gIEBpbmNsdWRlIGJvcmRlci1yaWdodC1yYWRpdXMoMCk7XG59XG4uaW5wdXQtZ3JvdXAtYWRkb246Zmlyc3QtY2hpbGQge1xuICBib3JkZXItcmlnaHQ6IDA7XG59XG4uaW5wdXQtZ3JvdXAgLmZvcm0tY29udHJvbDpsYXN0LWNoaWxkLFxuLmlucHV0LWdyb3VwLWFkZG9uOmxhc3QtY2hpbGQsXG4uaW5wdXQtZ3JvdXAtYnRuOmxhc3QtY2hpbGQgPiAuYnRuLFxuLmlucHV0LWdyb3VwLWJ0bjpsYXN0LWNoaWxkID4gLmJ0bi1ncm91cCA+IC5idG4sXG4uaW5wdXQtZ3JvdXAtYnRuOmxhc3QtY2hpbGQgPiAuZHJvcGRvd24tdG9nZ2xlLFxuLmlucHV0LWdyb3VwLWJ0bjpmaXJzdC1jaGlsZCA+IC5idG46bm90KDpmaXJzdC1jaGlsZCksXG4uaW5wdXQtZ3JvdXAtYnRuOmZpcnN0LWNoaWxkID4gLmJ0bi1ncm91cDpub3QoOmZpcnN0LWNoaWxkKSA+IC5idG4ge1xuICBAaW5jbHVkZSBib3JkZXItbGVmdC1yYWRpdXMoMCk7XG59XG4uaW5wdXQtZ3JvdXAtYWRkb246bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1sZWZ0OiAwO1xufVxuXG4vLyBCdXR0b24gaW5wdXQgZ3JvdXBzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4uaW5wdXQtZ3JvdXAtYnRuIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAvLyBKYW5raWx5IHByZXZlbnQgaW5wdXQgYnV0dG9uIGdyb3VwcyBmcm9tIHdyYXBwaW5nIHdpdGggYHdoaXRlLXNwYWNlYCBhbmRcbiAgLy8gYGZvbnQtc2l6ZWAgaW4gY29tYmluYXRpb24gd2l0aCBgaW5saW5lLWJsb2NrYCBvbiBidXR0b25zLlxuICBmb250LXNpemU6IDA7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG5cbiAgLy8gTmVnYXRpdmUgbWFyZ2luIGZvciBzcGFjaW5nLCBwb3NpdGlvbiBmb3IgYnJpbmdpbmcgaG92ZXJlZC9mb2N1c2VkL2FjdGl2ZWRcbiAgLy8gZWxlbWVudCBhYm92ZSB0aGUgc2libGluZ3MuXG4gID4gLmJ0biB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICsgLmJ0biB7XG4gICAgICBtYXJnaW4tbGVmdDogLTFweDtcbiAgICB9XG4gICAgLy8gQnJpbmcgdGhlIFwiYWN0aXZlXCIgYnV0dG9uIHRvIHRoZSBmcm9udFxuICAgICY6aG92ZXIsXG4gICAgJjpmb2N1cyxcbiAgICAmOmFjdGl2ZSB7XG4gICAgICB6LWluZGV4OiAyO1xuICAgIH1cbiAgfVxuXG4gIC8vIE5lZ2F0aXZlIG1hcmdpbiB0byBvbmx5IGhhdmUgYSAxcHggYm9yZGVyIGJldHdlZW4gdGhlIHR3b1xuICAmOmZpcnN0LWNoaWxkIHtcbiAgICA+IC5idG4sXG4gICAgPiAuYnRuLWdyb3VwIHtcbiAgICAgIG1hcmdpbi1yaWdodDogLTFweDtcbiAgICB9XG4gIH1cbiAgJjpsYXN0LWNoaWxkIHtcbiAgICA+IC5idG4sXG4gICAgPiAuYnRuLWdyb3VwIHtcbiAgICAgIHotaW5kZXg6IDI7XG4gICAgICBtYXJnaW4tbGVmdDogLTFweDtcbiAgICB9XG4gIH1cbn1cbiIsIi8vXG4vLyBOYXZzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cbi8vIEJhc2UgY2xhc3Ncbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi5uYXYge1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBwYWRkaW5nLWxlZnQ6IDA7IC8vIE92ZXJyaWRlIGRlZmF1bHQgdWwvb2xcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgQGluY2x1ZGUgY2xlYXJmaXg7XG5cbiAgPiBsaSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuXG4gICAgPiBhIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgcGFkZGluZzogJG5hdi1saW5rLXBhZGRpbmc7XG4gICAgICAmOmhvdmVyLFxuICAgICAgJjpmb2N1cyB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG5hdi1saW5rLWhvdmVyLWJnO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIERpc2FibGVkIHN0YXRlIHNldHMgdGV4dCB0byBncmF5IGFuZCBudWtlcyBob3Zlci90YWIgZWZmZWN0c1xuICAgICYuZGlzYWJsZWQgPiBhIHtcbiAgICAgIGNvbG9yOiAkbmF2LWRpc2FibGVkLWxpbmstY29sb3I7XG5cbiAgICAgICY6aG92ZXIsXG4gICAgICAmOmZvY3VzIHtcbiAgICAgICAgY29sb3I6ICRuYXYtZGlzYWJsZWQtbGluay1ob3Zlci1jb2xvcjtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgY3Vyc29yOiAkY3Vyc29yLWRpc2FibGVkO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIE9wZW4gZHJvcGRvd25zXG4gIC5vcGVuID4gYSB7XG4gICAgJixcbiAgICAmOmhvdmVyLFxuICAgICY6Zm9jdXMge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG5hdi1saW5rLWhvdmVyLWJnO1xuICAgICAgYm9yZGVyLWNvbG9yOiAkbGluay1jb2xvcjtcbiAgICB9XG4gIH1cblxuICAvLyBOYXYgZGl2aWRlcnMgKGRlcHJlY2F0ZWQgd2l0aCB2My4wLjEpXG4gIC8vXG4gIC8vIFRoaXMgc2hvdWxkIGhhdmUgYmVlbiByZW1vdmVkIGluIHYzIHdpdGggdGhlIGRyb3BwaW5nIG9mIGAubmF2LWxpc3RgLCBidXRcbiAgLy8gd2UgbWlzc2VkIGl0LiBXZSBkb24ndCBjdXJyZW50bHkgc3VwcG9ydCB0aGlzIGFueXdoZXJlLCBidXQgaW4gdGhlIGludGVyZXN0XG4gIC8vIG9mIG1haW50YWluaW5nIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkgaW4gY2FzZSB5b3UgdXNlIGl0LCBpdCdzIGRlcHJlY2F0ZWQuXG4gIC5uYXYtZGl2aWRlciB7XG4gICAgQGluY2x1ZGUgbmF2LWRpdmlkZXI7XG4gIH1cblxuICAvLyBQcmV2ZW50IElFOCBmcm9tIG1pc3BsYWNpbmcgaW1nc1xuICAvL1xuICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2g1YnAvaHRtbDUtYm9pbGVycGxhdGUvaXNzdWVzLzk4NCNpc3N1ZWNvbW1lbnQtMzk4NTk4OVxuICA+IGxpID4gYSA+IGltZyB7XG4gICAgbWF4LXdpZHRoOiBub25lO1xuICB9XG59XG5cblxuLy8gVGFic1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyBHaXZlIHRoZSB0YWJzIHNvbWV0aGluZyB0byBzaXQgb25cbi5uYXYtdGFicyB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkbmF2LXRhYnMtYm9yZGVyLWNvbG9yO1xuICA+IGxpIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICAvLyBNYWtlIHRoZSBsaXN0LWl0ZW1zIG92ZXJsYXkgdGhlIGJvdHRvbSBib3JkZXJcbiAgICBtYXJnaW4tYm90dG9tOiAtMXB4O1xuXG4gICAgLy8gQWN0dWFsIHRhYnMgKGFzIGxpbmtzKVxuICAgID4gYSB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDJweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAkbGluZS1oZWlnaHQtYmFzZTtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXMtYmFzZSAkYm9yZGVyLXJhZGl1cy1iYXNlIDAgMDtcbiAgICAgICY6aG92ZXIge1xuICAgICAgICBib3JkZXItY29sb3I6ICRuYXYtdGFicy1saW5rLWhvdmVyLWJvcmRlci1jb2xvciAkbmF2LXRhYnMtbGluay1ob3Zlci1ib3JkZXItY29sb3IgJG5hdi10YWJzLWJvcmRlci1jb2xvcjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBBY3RpdmUgc3RhdGUsIGFuZCBpdHMgOmhvdmVyIHRvIG92ZXJyaWRlIG5vcm1hbCA6aG92ZXJcbiAgICAmLmFjdGl2ZSA+IGEge1xuICAgICAgJixcbiAgICAgICY6aG92ZXIsXG4gICAgICAmOmZvY3VzIHtcbiAgICAgICAgY29sb3I6ICRuYXYtdGFicy1hY3RpdmUtbGluay1ob3Zlci1jb2xvcjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG5hdi10YWJzLWFjdGl2ZS1saW5rLWhvdmVyLWJnO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkbmF2LXRhYnMtYWN0aXZlLWxpbmstaG92ZXItYm9yZGVyLWNvbG9yO1xuICAgICAgICBib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAvLyBwdWxsaW5nIHRoaXMgaW4gbWFpbmx5IGZvciBsZXNzIHNob3J0aGFuZFxuICAmLm5hdi1qdXN0aWZpZWQge1xuICAgIEBleHRlbmQgLm5hdi1qdXN0aWZpZWQ7XG4gICAgQGV4dGVuZCAubmF2LXRhYnMtanVzdGlmaWVkO1xuICB9XG59XG5cblxuLy8gUGlsbHNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi5uYXYtcGlsbHMge1xuICA+IGxpIHtcbiAgICBmbG9hdDogbGVmdDtcblxuICAgIC8vIExpbmtzIHJlbmRlcmVkIGFzIHBpbGxzXG4gICAgPiBhIHtcbiAgICAgIGJvcmRlci1yYWRpdXM6ICRuYXYtcGlsbHMtYm9yZGVyLXJhZGl1cztcbiAgICB9XG4gICAgKyBsaSB7XG4gICAgICBtYXJnaW4tbGVmdDogMnB4O1xuICAgIH1cblxuICAgIC8vIEFjdGl2ZSBzdGF0ZVxuICAgICYuYWN0aXZlID4gYSB7XG4gICAgICAmLFxuICAgICAgJjpob3ZlcixcbiAgICAgICY6Zm9jdXMge1xuICAgICAgICBjb2xvcjogJG5hdi1waWxscy1hY3RpdmUtbGluay1ob3Zlci1jb2xvcjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG5hdi1waWxscy1hY3RpdmUtbGluay1ob3Zlci1iZztcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuXG4vLyBTdGFja2VkIHBpbGxzXG4ubmF2LXN0YWNrZWQge1xuICA+IGxpIHtcbiAgICBmbG9hdDogbm9uZTtcbiAgICArIGxpIHtcbiAgICAgIG1hcmdpbi10b3A6IDJweDtcbiAgICAgIG1hcmdpbi1sZWZ0OiAwOyAvLyBubyBuZWVkIGZvciB0aGlzIGdhcCBiZXR3ZWVuIG5hdiBpdGVtc1xuICAgIH1cbiAgfVxufVxuXG5cbi8vIE5hdiB2YXJpYXRpb25zXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyBKdXN0aWZpZWQgbmF2IGxpbmtzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi5uYXYtanVzdGlmaWVkIHtcbiAgd2lkdGg6IDEwMCU7XG5cbiAgPiBsaSB7XG4gICAgZmxvYXQ6IG5vbmU7XG4gICAgPiBhIHtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICB9XG4gIH1cblxuICA+IC5kcm9wZG93biAuZHJvcGRvd24tbWVudSB7XG4gICAgdG9wOiBhdXRvO1xuICAgIGxlZnQ6IGF1dG87XG4gIH1cblxuICBAbWVkaWEgKG1pbi13aWR0aDogJHNjcmVlbi1zbS1taW4pIHtcbiAgICA+IGxpIHtcbiAgICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gICAgICB3aWR0aDogMSU7XG4gICAgICA+IGEge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyBNb3ZlIGJvcmRlcnMgdG8gYW5jaG9ycyBpbnN0ZWFkIG9mIGJvdHRvbSBvZiBsaXN0XG4vL1xuLy8gTWl4aW4gZm9yIGFkZGluZyBvbiB0b3AgdGhlIHNoYXJlZCBgLm5hdi1qdXN0aWZpZWRgIHN0eWxlcyBmb3Igb3VyIHRhYnNcbi5uYXYtdGFicy1qdXN0aWZpZWQge1xuICBib3JkZXItYm90dG9tOiAwO1xuXG4gID4gbGkgPiBhIHtcbiAgICAvLyBPdmVycmlkZSBtYXJnaW4gZnJvbSAubmF2LXRhYnNcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXMtYmFzZTtcbiAgfVxuXG4gID4gLmFjdGl2ZSA+IGEsXG4gID4gLmFjdGl2ZSA+IGE6aG92ZXIsXG4gID4gLmFjdGl2ZSA+IGE6Zm9jdXMge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICRuYXYtdGFicy1qdXN0aWZpZWQtbGluay1ib3JkZXItY29sb3I7XG4gIH1cblxuICBAbWVkaWEgKG1pbi13aWR0aDogJHNjcmVlbi1zbS1taW4pIHtcbiAgICA+IGxpID4gYSB7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJG5hdi10YWJzLWp1c3RpZmllZC1saW5rLWJvcmRlci1jb2xvcjtcbiAgICAgIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzLWJhc2UgJGJvcmRlci1yYWRpdXMtYmFzZSAwIDA7XG4gICAgfVxuICAgID4gLmFjdGl2ZSA+IGEsXG4gICAgPiAuYWN0aXZlID4gYTpob3ZlcixcbiAgICA+IC5hY3RpdmUgPiBhOmZvY3VzIHtcbiAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICRuYXYtdGFicy1qdXN0aWZpZWQtYWN0aXZlLWxpbmstYm9yZGVyLWNvbG9yO1xuICAgIH1cbiAgfVxufVxuXG5cbi8vIFRhYmJhYmxlIHRhYnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gSGlkZSB0YWJiYWJsZSBwYW5lcyB0byBzdGFydCwgc2hvdyB0aGVtIHdoZW4gYC5hY3RpdmVgXG4udGFiLWNvbnRlbnQge1xuICA+IC50YWItcGFuZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICA+IC5hY3RpdmUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59XG5cblxuLy8gRHJvcGRvd25zXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIFNwZWNpZmljIGRyb3Bkb3duc1xuLm5hdi10YWJzIC5kcm9wZG93bi1tZW51IHtcbiAgLy8gbWFrZSBkcm9wZG93biBib3JkZXIgb3ZlcmxhcCB0YWIgYm9yZGVyXG4gIG1hcmdpbi10b3A6IC0xcHg7XG4gIC8vIFJlbW92ZSB0aGUgdG9wIHJvdW5kZWQgY29ybmVycyBoZXJlIHNpbmNlIHRoZXJlIGlzIGEgaGFyZCBlZGdlIGFib3ZlIHRoZSBtZW51XG4gIEBpbmNsdWRlIGJvcmRlci10b3AtcmFkaXVzKDApO1xufVxuIiwiLy9cbi8vIE5hdmJhcnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblxuLy8gV3JhcHBlciBhbmQgYmFzZSBjbGFzc1xuLy9cbi8vIFByb3ZpZGUgYSBzdGF0aWMgbmF2YmFyIGZyb20gd2hpY2ggd2UgZXhwYW5kIHRvIGNyZWF0ZSBmdWxsLXdpZHRoLCBmaXhlZCwgYW5kXG4vLyBvdGhlciBuYXZiYXIgdmFyaWF0aW9ucy5cblxuLm5hdmJhciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWluLWhlaWdodDogJG5hdmJhci1oZWlnaHQ7IC8vIEVuc3VyZSBhIG5hdmJhciBhbHdheXMgc2hvd3MgKGUuZy4sIHdpdGhvdXQgYSAubmF2YmFyLWJyYW5kIGluIGNvbGxhcHNlZCBtb2RlKVxuICBtYXJnaW4tYm90dG9tOiAkbmF2YmFyLW1hcmdpbi1ib3R0b207XG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuXG4gIC8vIFByZXZlbnQgZmxvYXRzIGZyb20gYnJlYWtpbmcgdGhlIG5hdmJhclxuICBAaW5jbHVkZSBjbGVhcmZpeDtcblxuICBAbWVkaWEgKG1pbi13aWR0aDogJGdyaWQtZmxvYXQtYnJlYWtwb2ludCkge1xuICAgIGJvcmRlci1yYWRpdXM6ICRuYXZiYXItYm9yZGVyLXJhZGl1cztcbiAgfVxufVxuXG5cbi8vIE5hdmJhciBoZWFkaW5nXG4vL1xuLy8gR3JvdXBzIGAubmF2YmFyLWJyYW5kYCBhbmQgYC5uYXZiYXItdG9nZ2xlYCBpbnRvIGEgc2luZ2xlIGNvbXBvbmVudCBmb3IgZWFzeVxuLy8gc3R5bGluZyBvZiByZXNwb25zaXZlIGFzcGVjdHMuXG5cbi5uYXZiYXItaGVhZGVyIHtcbiAgQGluY2x1ZGUgY2xlYXJmaXg7XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6ICRncmlkLWZsb2F0LWJyZWFrcG9pbnQpIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgfVxufVxuXG5cbi8vIE5hdmJhciBjb2xsYXBzZSAoYm9keSlcbi8vXG4vLyBHcm91cCB5b3VyIG5hdmJhciBjb250ZW50IGludG8gdGhpcyBmb3IgZWFzeSBjb2xsYXBzaW5nIGFuZCBleHBhbmRpbmcgYWNyb3NzXG4vLyB2YXJpb3VzIGRldmljZSBzaXplcy4gQnkgZGVmYXVsdCwgdGhpcyBjb250ZW50IGlzIGNvbGxhcHNlZCB3aGVuIDw3NjhweCwgYnV0XG4vLyB3aWxsIGV4cGFuZCBwYXN0IHRoYXQgZm9yIGEgaG9yaXpvbnRhbCBkaXNwbGF5LlxuLy9cbi8vIFRvIHN0YXJ0IChvbiBtb2JpbGUgZGV2aWNlcykgdGhlIG5hdmJhciBsaW5rcywgZm9ybXMsIGFuZCBidXR0b25zIGFyZSBzdGFja2VkXG4vLyB2ZXJ0aWNhbGx5IGFuZCBpbmNsdWRlIGEgYG1heC1oZWlnaHRgIHRvIG92ZXJmbG93IGluIGNhc2UgeW91IGhhdmUgdG9vIG11Y2hcbi8vIGNvbnRlbnQgZm9yIHRoZSB1c2VyJ3Mgdmlld3BvcnQuXG5cbi5uYXZiYXItY29sbGFwc2Uge1xuICBvdmVyZmxvdy14OiB2aXNpYmxlO1xuICBwYWRkaW5nLXJpZ2h0OiAkbmF2YmFyLXBhZGRpbmctaG9yaXpvbnRhbDtcbiAgcGFkZGluZy1sZWZ0OiAgJG5hdmJhci1wYWRkaW5nLWhvcml6b250YWw7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMCByZ2JhKDI1NSwyNTUsMjU1LC4xKTtcbiAgQGluY2x1ZGUgY2xlYXJmaXg7XG4gIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcblxuICAmLmluIHtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICB9XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6ICRncmlkLWZsb2F0LWJyZWFrcG9pbnQpIHtcbiAgICB3aWR0aDogYXV0bztcbiAgICBib3JkZXItdG9wOiAwO1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG5cbiAgICAmLmNvbGxhcHNlIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gICAgICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAwOyAvLyBPdmVycmlkZSBkZWZhdWx0IHNldHRpbmdcbiAgICAgIG92ZXJmbG93OiB2aXNpYmxlICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgJi5pbiB7XG4gICAgICBvdmVyZmxvdy15OiB2aXNpYmxlO1xuICAgIH1cblxuICAgIC8vIFVuZG8gdGhlIGNvbGxhcHNlIHNpZGUgcGFkZGluZyBmb3IgbmF2YmFycyB3aXRoIGNvbnRhaW5lcnMgdG8gZW5zdXJlXG4gICAgLy8gYWxpZ25tZW50IG9mIHJpZ2h0LWFsaWduZWQgY29udGVudHMuXG4gICAgLm5hdmJhci1maXhlZC10b3AgJixcbiAgICAubmF2YmFyLXN0YXRpYy10b3AgJixcbiAgICAubmF2YmFyLWZpeGVkLWJvdHRvbSAmIHtcbiAgICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gICAgfVxuICB9XG59XG5cbi5uYXZiYXItZml4ZWQtdG9wLFxuLm5hdmJhci1maXhlZC1ib3R0b20ge1xuICAubmF2YmFyLWNvbGxhcHNlIHtcbiAgICBtYXgtaGVpZ2h0OiAkbmF2YmFyLWNvbGxhcHNlLW1heC1oZWlnaHQ7XG5cbiAgICBAbWVkaWEgKG1heC1kZXZpY2Utd2lkdGg6ICRzY3JlZW4teHMtbWluKSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcbiAgICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xuICAgIH1cbiAgfVxufVxuXG5cbi8vIEJvdGggbmF2YmFyIGhlYWRlciBhbmQgY29sbGFwc2Vcbi8vXG4vLyBXaGVuIGEgY29udGFpbmVyIGlzIHByZXNlbnQsIGNoYW5nZSB0aGUgYmVoYXZpb3Igb2YgdGhlIGhlYWRlciBhbmQgY29sbGFwc2UuXG5cbi5jb250YWluZXIsXG4uY29udGFpbmVyLWZsdWlkIHtcbiAgPiAubmF2YmFyLWhlYWRlcixcbiAgPiAubmF2YmFyLWNvbGxhcHNlIHtcbiAgICBtYXJnaW4tcmlnaHQ6IC0kbmF2YmFyLXBhZGRpbmctaG9yaXpvbnRhbDtcbiAgICBtYXJnaW4tbGVmdDogIC0kbmF2YmFyLXBhZGRpbmctaG9yaXpvbnRhbDtcblxuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkZ3JpZC1mbG9hdC1icmVha3BvaW50KSB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgICBtYXJnaW4tbGVmdDogIDA7XG4gICAgfVxuICB9XG59XG5cblxuLy9cbi8vIE5hdmJhciBhbGlnbm1lbnQgb3B0aW9uc1xuLy9cbi8vIERpc3BsYXkgdGhlIG5hdmJhciBhY3Jvc3MgdGhlIGVudGlyZXR5IG9mIHRoZSBwYWdlIG9yIGZpeGVkIGl0IHRvIHRoZSB0b3Agb3Jcbi8vIGJvdHRvbSBvZiB0aGUgcGFnZS5cblxuLy8gU3RhdGljIHRvcCAodW5maXhlZCwgYnV0IDEwMCUgd2lkZSkgbmF2YmFyXG4ubmF2YmFyLXN0YXRpYy10b3Age1xuICB6LWluZGV4OiAkemluZGV4LW5hdmJhcjtcbiAgYm9yZGVyLXdpZHRoOiAwIDAgMXB4O1xuXG4gIEBtZWRpYSAobWluLXdpZHRoOiAkZ3JpZC1mbG9hdC1icmVha3BvaW50KSB7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgfVxufVxuXG4vLyBGaXggdGhlIHRvcC9ib3R0b20gbmF2YmFycyB3aGVuIHNjcmVlbiByZWFsIGVzdGF0ZSBzdXBwb3J0cyBpdFxuLm5hdmJhci1maXhlZC10b3AsXG4ubmF2YmFyLWZpeGVkLWJvdHRvbSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgcmlnaHQ6IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6ICR6aW5kZXgtbmF2YmFyLWZpeGVkO1xuXG4gIC8vIFVuZG8gdGhlIHJvdW5kZWQgY29ybmVyc1xuICBAbWVkaWEgKG1pbi13aWR0aDogJGdyaWQtZmxvYXQtYnJlYWtwb2ludCkge1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gIH1cbn1cbi5uYXZiYXItZml4ZWQtdG9wIHtcbiAgdG9wOiAwO1xuICBib3JkZXItd2lkdGg6IDAgMCAxcHg7XG59XG4ubmF2YmFyLWZpeGVkLWJvdHRvbSB7XG4gIGJvdHRvbTogMDtcbiAgbWFyZ2luLWJvdHRvbTogMDsgLy8gb3ZlcnJpZGUgLm5hdmJhciBkZWZhdWx0c1xuICBib3JkZXItd2lkdGg6IDFweCAwIDA7XG59XG5cblxuLy8gQnJhbmQvcHJvamVjdCBuYW1lXG5cbi5uYXZiYXItYnJhbmQge1xuICBmbG9hdDogbGVmdDtcbiAgcGFkZGluZzogJG5hdmJhci1wYWRkaW5nLXZlcnRpY2FsICRuYXZiYXItcGFkZGluZy1ob3Jpem9udGFsO1xuICBmb250LXNpemU6ICRmb250LXNpemUtbGFyZ2U7XG4gIGxpbmUtaGVpZ2h0OiAkbGluZS1oZWlnaHQtY29tcHV0ZWQ7XG4gIGhlaWdodDogJG5hdmJhci1oZWlnaHQ7XG5cbiAgJjpob3ZlcixcbiAgJjpmb2N1cyB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG5cbiAgPiBpbWcge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6ICRncmlkLWZsb2F0LWJyZWFrcG9pbnQpIHtcbiAgICAubmF2YmFyID4gLmNvbnRhaW5lciAmLFxuICAgIC5uYXZiYXIgPiAuY29udGFpbmVyLWZsdWlkICYge1xuICAgICAgbWFyZ2luLWxlZnQ6IC0kbmF2YmFyLXBhZGRpbmctaG9yaXpvbnRhbDtcbiAgICB9XG4gIH1cbn1cblxuXG4vLyBOYXZiYXIgdG9nZ2xlXG4vL1xuLy8gQ3VzdG9tIGJ1dHRvbiBmb3IgdG9nZ2xpbmcgdGhlIGAubmF2YmFyLWNvbGxhcHNlYCwgcG93ZXJlZCBieSB0aGUgY29sbGFwc2Vcbi8vIEphdmFTY3JpcHQgcGx1Z2luLlxuXG4ubmF2YmFyLXRvZ2dsZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tcmlnaHQ6ICRuYXZiYXItcGFkZGluZy1ob3Jpem9udGFsO1xuICBwYWRkaW5nOiA5cHggMTBweDtcbiAgQGluY2x1ZGUgbmF2YmFyLXZlcnRpY2FsLWFsaWduKDM0cHgpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTsgLy8gUmVzZXQgdW51c3VhbCBGaXJlZm94LW9uLUFuZHJvaWQgZGVmYXVsdCBzdHlsZTsgc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9uZWNvbGFzL25vcm1hbGl6ZS5jc3MvaXNzdWVzLzIxNFxuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXMtYmFzZTtcblxuICAvLyBXZSByZW1vdmUgdGhlIGBvdXRsaW5lYCBoZXJlLCBidXQgbGF0ZXIgY29tcGVuc2F0ZSBieSBhdHRhY2hpbmcgYDpob3ZlcmBcbiAgLy8gc3R5bGVzIHRvIGA6Zm9jdXNgLlxuICAmOmZvY3VzIHtcbiAgICBvdXRsaW5lOiAwO1xuICB9XG5cbiAgLy8gQmFyc1xuICAuaWNvbi1iYXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAyMnB4O1xuICAgIGhlaWdodDogMnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDFweDtcbiAgfVxuICAuaWNvbi1iYXIgKyAuaWNvbi1iYXIge1xuICAgIG1hcmdpbi10b3A6IDRweDtcbiAgfVxuXG4gIEBtZWRpYSAobWluLXdpZHRoOiAkZ3JpZC1mbG9hdC1icmVha3BvaW50KSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuXG5cbi8vIE5hdmJhciBuYXYgbGlua3Ncbi8vXG4vLyBCdWlsZHMgb24gdG9wIG9mIHRoZSBgLm5hdmAgY29tcG9uZW50cyB3aXRoIGl0cyBvd24gbW9kaWZpZXIgY2xhc3MgdG8gbWFrZVxuLy8gdGhlIG5hdiB0aGUgZnVsbCBoZWlnaHQgb2YgdGhlIGhvcml6b250YWwgbmF2IChhYm92ZSA3NjhweCkuXG5cbi5uYXZiYXItbmF2IHtcbiAgbWFyZ2luOiAoJG5hdmJhci1wYWRkaW5nLXZlcnRpY2FsIC8gMikgKC0kbmF2YmFyLXBhZGRpbmctaG9yaXpvbnRhbCk7XG5cbiAgPiBsaSA+IGEge1xuICAgIHBhZGRpbmctdG9wOiAgICAxMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAkbGluZS1oZWlnaHQtY29tcHV0ZWQ7XG4gIH1cblxuICBAbWVkaWEgKG1heC13aWR0aDogJGdyaWQtZmxvYXQtYnJlYWtwb2ludC1tYXgpIHtcbiAgICAvLyBEcm9wZG93bnMgZ2V0IGN1c3RvbSBkaXNwbGF5IHdoZW4gY29sbGFwc2VkXG4gICAgLm9wZW4gLmRyb3Bkb3duLW1lbnUge1xuICAgICAgcG9zaXRpb246IHN0YXRpYztcbiAgICAgIGZsb2F0OiBub25lO1xuICAgICAgd2lkdGg6IGF1dG87XG4gICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICBib3JkZXI6IDA7XG4gICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgPiBsaSA+IGEsXG4gICAgICAuZHJvcGRvd24taGVhZGVyIHtcbiAgICAgICAgcGFkZGluZzogNXB4IDE1cHggNXB4IDI1cHg7XG4gICAgICB9XG4gICAgICA+IGxpID4gYSB7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAkbGluZS1oZWlnaHQtY29tcHV0ZWQ7XG4gICAgICAgICY6aG92ZXIsXG4gICAgICAgICY6Zm9jdXMge1xuICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBVbmNvbGxhcHNlIHRoZSBuYXZcbiAgQG1lZGlhIChtaW4td2lkdGg6ICRncmlkLWZsb2F0LWJyZWFrcG9pbnQpIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBtYXJnaW46IDA7XG5cbiAgICA+IGxpIHtcbiAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgPiBhIHtcbiAgICAgICAgcGFkZGluZy10b3A6ICAgICRuYXZiYXItcGFkZGluZy12ZXJ0aWNhbDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206ICRuYXZiYXItcGFkZGluZy12ZXJ0aWNhbDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuXG4vLyBOYXZiYXIgZm9ybVxuLy9cbi8vIEV4dGVuc2lvbiBvZiB0aGUgYC5mb3JtLWlubGluZWAgd2l0aCBzb21lIGV4dHJhIGZsYXZvciBmb3Igb3B0aW11bSBkaXNwbGF5IGluXG4vLyBvdXIgbmF2YmFycy5cblxuLm5hdmJhci1mb3JtIHtcbiAgbWFyZ2luLWxlZnQ6IC0kbmF2YmFyLXBhZGRpbmctaG9yaXpvbnRhbDtcbiAgbWFyZ2luLXJpZ2h0OiAtJG5hdmJhci1wYWRkaW5nLWhvcml6b250YWw7XG4gIHBhZGRpbmc6IDEwcHggJG5hdmJhci1wYWRkaW5nLWhvcml6b250YWw7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAkc2hhZG93OiBpbnNldCAwIDFweCAwIHJnYmEoMjU1LDI1NSwyNTUsLjEpLCAwIDFweCAwIHJnYmEoMjU1LDI1NSwyNTUsLjEpO1xuICBAaW5jbHVkZSBib3gtc2hhZG93KCRzaGFkb3cpO1xuXG4gIC8vIE1peGluIGJlaGF2aW9yIGZvciBvcHRpbXVtIGRpc3BsYXlcbiAgQGluY2x1ZGUgZm9ybS1pbmxpbmU7XG5cbiAgLmZvcm0tZ3JvdXAge1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkZ3JpZC1mbG9hdC1icmVha3BvaW50LW1heCkge1xuICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuXG4gICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIFZlcnRpY2FsbHkgY2VudGVyIGluIGV4cGFuZGVkLCBob3Jpem9udGFsIG5hdmJhclxuICBAaW5jbHVkZSBuYXZiYXItdmVydGljYWwtYWxpZ24oJGlucHV0LWhlaWdodC1iYXNlKTtcblxuICAvLyBVbmRvIDEwMCUgd2lkdGggZm9yIHB1bGwgY2xhc3Nlc1xuICBAbWVkaWEgKG1pbi13aWR0aDogJGdyaWQtZmxvYXQtYnJlYWtwb2ludCkge1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIGJvcmRlcjogMDtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgcGFkZGluZy10b3A6IDA7XG4gICAgcGFkZGluZy1ib3R0b206IDA7XG4gICAgQGluY2x1ZGUgYm94LXNoYWRvdyhub25lKTtcbiAgfVxufVxuXG5cbi8vIERyb3Bkb3duIG1lbnVzXG5cbi8vIE1lbnUgcG9zaXRpb24gYW5kIG1lbnUgY2FyZXRzXG4ubmF2YmFyLW5hdiA+IGxpID4gLmRyb3Bkb3duLW1lbnUge1xuICBtYXJnaW4tdG9wOiAwO1xuICBAaW5jbHVkZSBib3JkZXItdG9wLXJhZGl1cygwKTtcbn1cbi8vIE1lbnUgcG9zaXRpb24gYW5kIG1lbnUgY2FyZXQgc3VwcG9ydCBmb3IgZHJvcHVwcyB2aWEgZXh0cmEgZHJvcHVwIGNsYXNzXG4ubmF2YmFyLWZpeGVkLWJvdHRvbSAubmF2YmFyLW5hdiA+IGxpID4gLmRyb3Bkb3duLW1lbnUge1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBAaW5jbHVkZSBib3JkZXItdG9wLXJhZGl1cygkbmF2YmFyLWJvcmRlci1yYWRpdXMpO1xuICBAaW5jbHVkZSBib3JkZXItYm90dG9tLXJhZGl1cygwKTtcbn1cblxuXG4vLyBCdXR0b25zIGluIG5hdmJhcnNcbi8vXG4vLyBWZXJ0aWNhbGx5IGNlbnRlciBhIGJ1dHRvbiB3aXRoaW4gYSBuYXZiYXIgKHdoZW4gKm5vdCogaW4gYSBmb3JtKS5cblxuLm5hdmJhci1idG4ge1xuICBAaW5jbHVkZSBuYXZiYXItdmVydGljYWwtYWxpZ24oJGlucHV0LWhlaWdodC1iYXNlKTtcblxuICAmLmJ0bi1zbSB7XG4gICAgQGluY2x1ZGUgbmF2YmFyLXZlcnRpY2FsLWFsaWduKCRpbnB1dC1oZWlnaHQtc21hbGwpO1xuICB9XG4gICYuYnRuLXhzIHtcbiAgICBAaW5jbHVkZSBuYXZiYXItdmVydGljYWwtYWxpZ24oMjIpO1xuICB9XG59XG5cblxuLy8gVGV4dCBpbiBuYXZiYXJzXG4vL1xuLy8gQWRkIGEgY2xhc3MgdG8gbWFrZSBhbnkgZWxlbWVudCBwcm9wZXJseSBhbGlnbiBpdHNlbGYgdmVydGljYWxseSB3aXRoaW4gdGhlIG5hdmJhcnMuXG5cbi5uYXZiYXItdGV4dCB7XG4gIEBpbmNsdWRlIG5hdmJhci12ZXJ0aWNhbC1hbGlnbigkbGluZS1oZWlnaHQtY29tcHV0ZWQpO1xuXG4gIEBtZWRpYSAobWluLXdpZHRoOiAkZ3JpZC1mbG9hdC1icmVha3BvaW50KSB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgbWFyZ2luLWxlZnQ6ICRuYXZiYXItcGFkZGluZy1ob3Jpem9udGFsO1xuICAgIG1hcmdpbi1yaWdodDogJG5hdmJhci1wYWRkaW5nLWhvcml6b250YWw7XG4gIH1cbn1cblxuXG4vLyBDb21wb25lbnQgYWxpZ25tZW50XG4vL1xuLy8gUmVwdXJwb3NlIHRoZSBwdWxsIHV0aWxpdGllcyBhcyB0aGVpciBvd24gbmF2YmFyIHV0aWxpdGllcyB0byBhdm9pZCBzcGVjaWZpY2l0eVxuLy8gaXNzdWVzIHdpdGggcGFyZW50cyBhbmQgY2hhaW5pbmcuIE9ubHkgZG8gdGhpcyB3aGVuIHRoZSBuYXZiYXIgaXMgdW5jb2xsYXBzZWRcbi8vIHRob3VnaCBzbyB0aGF0IG5hdmJhciBjb250ZW50cyBwcm9wZXJseSBzdGFjayBhbmQgYWxpZ24gaW4gbW9iaWxlLlxuLy9cbi8vIERlY2xhcmVkIGFmdGVyIHRoZSBuYXZiYXIgY29tcG9uZW50cyB0byBlbnN1cmUgbW9yZSBzcGVjaWZpY2l0eSBvbiB0aGUgbWFyZ2lucy5cblxuQG1lZGlhIChtaW4td2lkdGg6ICRncmlkLWZsb2F0LWJyZWFrcG9pbnQpIHtcbiAgLm5hdmJhci1sZWZ0IHtcbiAgICBmbG9hdDogbGVmdCAhaW1wb3J0YW50O1xuICB9XG4gIC5uYXZiYXItcmlnaHQge1xuICAgIGZsb2F0OiByaWdodCAhaW1wb3J0YW50O1xuICBtYXJnaW4tcmlnaHQ6IC0kbmF2YmFyLXBhZGRpbmctaG9yaXpvbnRhbDtcblxuICAgIH4gLm5hdmJhci1yaWdodCB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgfVxuICB9XG59XG5cblxuLy8gQWx0ZXJuYXRlIG5hdmJhcnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIERlZmF1bHQgbmF2YmFyXG4ubmF2YmFyLWRlZmF1bHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkbmF2YmFyLWRlZmF1bHQtYmc7XG4gIGJvcmRlci1jb2xvcjogJG5hdmJhci1kZWZhdWx0LWJvcmRlcjtcblxuICAubmF2YmFyLWJyYW5kIHtcbiAgICBjb2xvcjogJG5hdmJhci1kZWZhdWx0LWJyYW5kLWNvbG9yO1xuICAgICY6aG92ZXIsXG4gICAgJjpmb2N1cyB7XG4gICAgICBjb2xvcjogJG5hdmJhci1kZWZhdWx0LWJyYW5kLWhvdmVyLWNvbG9yO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG5hdmJhci1kZWZhdWx0LWJyYW5kLWhvdmVyLWJnO1xuICAgIH1cbiAgfVxuXG4gIC5uYXZiYXItdGV4dCB7XG4gICAgY29sb3I6ICRuYXZiYXItZGVmYXVsdC1jb2xvcjtcbiAgfVxuXG4gIC5uYXZiYXItbmF2IHtcbiAgICA+IGxpID4gYSB7XG4gICAgICBjb2xvcjogJG5hdmJhci1kZWZhdWx0LWxpbmstY29sb3I7XG5cbiAgICAgICY6aG92ZXIsXG4gICAgICAmOmZvY3VzIHtcbiAgICAgICAgY29sb3I6ICRuYXZiYXItZGVmYXVsdC1saW5rLWhvdmVyLWNvbG9yO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbmF2YmFyLWRlZmF1bHQtbGluay1ob3Zlci1iZztcbiAgICAgIH1cbiAgICB9XG4gICAgPiAuYWN0aXZlID4gYSB7XG4gICAgICAmLFxuICAgICAgJjpob3ZlcixcbiAgICAgICY6Zm9jdXMge1xuICAgICAgICBjb2xvcjogJG5hdmJhci1kZWZhdWx0LWxpbmstYWN0aXZlLWNvbG9yO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbmF2YmFyLWRlZmF1bHQtbGluay1hY3RpdmUtYmc7XG4gICAgICB9XG4gICAgfVxuICAgID4gLmRpc2FibGVkID4gYSB7XG4gICAgICAmLFxuICAgICAgJjpob3ZlcixcbiAgICAgICY6Zm9jdXMge1xuICAgICAgICBjb2xvcjogJG5hdmJhci1kZWZhdWx0LWxpbmstZGlzYWJsZWQtY29sb3I7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRuYXZiYXItZGVmYXVsdC1saW5rLWRpc2FibGVkLWJnO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5uYXZiYXItdG9nZ2xlIHtcbiAgICBib3JkZXItY29sb3I6ICRuYXZiYXItZGVmYXVsdC10b2dnbGUtYm9yZGVyLWNvbG9yO1xuICAgICY6aG92ZXIsXG4gICAgJjpmb2N1cyB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbmF2YmFyLWRlZmF1bHQtdG9nZ2xlLWhvdmVyLWJnO1xuICAgIH1cbiAgICAuaWNvbi1iYXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG5hdmJhci1kZWZhdWx0LXRvZ2dsZS1pY29uLWJhci1iZztcbiAgICB9XG4gIH1cblxuICAubmF2YmFyLWNvbGxhcHNlLFxuICAubmF2YmFyLWZvcm0ge1xuICAgIGJvcmRlci1jb2xvcjogJG5hdmJhci1kZWZhdWx0LWJvcmRlcjtcbiAgfVxuXG4gIC8vIERyb3Bkb3duIG1lbnUgaXRlbXNcbiAgLm5hdmJhci1uYXYge1xuICAgIC8vIFJlbW92ZSBiYWNrZ3JvdW5kIGNvbG9yIGZyb20gb3BlbiBkcm9wZG93blxuICAgID4gLm9wZW4gPiBhIHtcbiAgICAgICYsXG4gICAgICAmOmhvdmVyLFxuICAgICAgJjpmb2N1cyB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRuYXZiYXItZGVmYXVsdC1saW5rLWFjdGl2ZS1iZztcbiAgICAgICAgY29sb3I6ICRuYXZiYXItZGVmYXVsdC1saW5rLWFjdGl2ZS1jb2xvcjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogJGdyaWQtZmxvYXQtYnJlYWtwb2ludC1tYXgpIHtcbiAgICAgIC8vIERyb3Bkb3ducyBnZXQgY3VzdG9tIGRpc3BsYXkgd2hlbiBjb2xsYXBzZWRcbiAgICAgIC5vcGVuIC5kcm9wZG93bi1tZW51IHtcbiAgICAgICAgPiBsaSA+IGEge1xuICAgICAgICAgIGNvbG9yOiAkbmF2YmFyLWRlZmF1bHQtbGluay1jb2xvcjtcbiAgICAgICAgICAmOmhvdmVyLFxuICAgICAgICAgICY6Zm9jdXMge1xuICAgICAgICAgICAgY29sb3I6ICRuYXZiYXItZGVmYXVsdC1saW5rLWhvdmVyLWNvbG9yO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG5hdmJhci1kZWZhdWx0LWxpbmstaG92ZXItYmc7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgID4gLmFjdGl2ZSA+IGEge1xuICAgICAgICAgICYsXG4gICAgICAgICAgJjpob3ZlcixcbiAgICAgICAgICAmOmZvY3VzIHtcbiAgICAgICAgICAgIGNvbG9yOiAkbmF2YmFyLWRlZmF1bHQtbGluay1hY3RpdmUtY29sb3I7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbmF2YmFyLWRlZmF1bHQtbGluay1hY3RpdmUtYmc7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgID4gLmRpc2FibGVkID4gYSB7XG4gICAgICAgICAgJixcbiAgICAgICAgICAmOmhvdmVyLFxuICAgICAgICAgICY6Zm9jdXMge1xuICAgICAgICAgICAgY29sb3I6ICRuYXZiYXItZGVmYXVsdC1saW5rLWRpc2FibGVkLWNvbG9yO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG5hdmJhci1kZWZhdWx0LWxpbmstZGlzYWJsZWQtYmc7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cblxuICAvLyBMaW5rcyBpbiBuYXZiYXJzXG4gIC8vXG4gIC8vIEFkZCBhIGNsYXNzIHRvIGVuc3VyZSBsaW5rcyBvdXRzaWRlIHRoZSBuYXZiYXIgbmF2IGFyZSBjb2xvcmVkIGNvcnJlY3RseS5cblxuICAubmF2YmFyLWxpbmsge1xuICAgIGNvbG9yOiAkbmF2YmFyLWRlZmF1bHQtbGluay1jb2xvcjtcbiAgICAmOmhvdmVyIHtcbiAgICAgIGNvbG9yOiAkbmF2YmFyLWRlZmF1bHQtbGluay1ob3Zlci1jb2xvcjtcbiAgICB9XG4gIH1cblxuICAuYnRuLWxpbmsge1xuICAgIGNvbG9yOiAkbmF2YmFyLWRlZmF1bHQtbGluay1jb2xvcjtcbiAgICAmOmhvdmVyLFxuICAgICY6Zm9jdXMge1xuICAgICAgY29sb3I6ICRuYXZiYXItZGVmYXVsdC1saW5rLWhvdmVyLWNvbG9yO1xuICAgIH1cbiAgICAmW2Rpc2FibGVkXSxcbiAgICBmaWVsZHNldFtkaXNhYmxlZF0gJiB7XG4gICAgICAmOmhvdmVyLFxuICAgICAgJjpmb2N1cyB7XG4gICAgICAgIGNvbG9yOiAkbmF2YmFyLWRlZmF1bHQtbGluay1kaXNhYmxlZC1jb2xvcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gSW52ZXJzZSBuYXZiYXJcblxuLm5hdmJhci1pbnZlcnNlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJG5hdmJhci1pbnZlcnNlLWJnO1xuICBib3JkZXItY29sb3I6ICRuYXZiYXItaW52ZXJzZS1ib3JkZXI7XG5cbiAgLm5hdmJhci1icmFuZCB7XG4gICAgY29sb3I6ICRuYXZiYXItaW52ZXJzZS1icmFuZC1jb2xvcjtcbiAgICAmOmhvdmVyLFxuICAgICY6Zm9jdXMge1xuICAgICAgY29sb3I6ICRuYXZiYXItaW52ZXJzZS1icmFuZC1ob3Zlci1jb2xvcjtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRuYXZiYXItaW52ZXJzZS1icmFuZC1ob3Zlci1iZztcbiAgICB9XG4gIH1cblxuICAubmF2YmFyLXRleHQge1xuICAgIGNvbG9yOiAkbmF2YmFyLWludmVyc2UtY29sb3I7XG4gIH1cblxuICAubmF2YmFyLW5hdiB7XG4gICAgPiBsaSA+IGEge1xuICAgICAgY29sb3I6ICRuYXZiYXItaW52ZXJzZS1saW5rLWNvbG9yO1xuXG4gICAgICAmOmhvdmVyLFxuICAgICAgJjpmb2N1cyB7XG4gICAgICAgIGNvbG9yOiAkbmF2YmFyLWludmVyc2UtbGluay1ob3Zlci1jb2xvcjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG5hdmJhci1pbnZlcnNlLWxpbmstaG92ZXItYmc7XG4gICAgICB9XG4gICAgfVxuICAgID4gLmFjdGl2ZSA+IGEge1xuICAgICAgJixcbiAgICAgICY6aG92ZXIsXG4gICAgICAmOmZvY3VzIHtcbiAgICAgICAgY29sb3I6ICRuYXZiYXItaW52ZXJzZS1saW5rLWFjdGl2ZS1jb2xvcjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG5hdmJhci1pbnZlcnNlLWxpbmstYWN0aXZlLWJnO1xuICAgICAgfVxuICAgIH1cbiAgICA+IC5kaXNhYmxlZCA+IGEge1xuICAgICAgJixcbiAgICAgICY6aG92ZXIsXG4gICAgICAmOmZvY3VzIHtcbiAgICAgICAgY29sb3I6ICRuYXZiYXItaW52ZXJzZS1saW5rLWRpc2FibGVkLWNvbG9yO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbmF2YmFyLWludmVyc2UtbGluay1kaXNhYmxlZC1iZztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBEYXJrZW4gdGhlIHJlc3BvbnNpdmUgbmF2IHRvZ2dsZVxuICAubmF2YmFyLXRvZ2dsZSB7XG4gICAgYm9yZGVyLWNvbG9yOiAkbmF2YmFyLWludmVyc2UtdG9nZ2xlLWJvcmRlci1jb2xvcjtcbiAgICAmOmhvdmVyLFxuICAgICY6Zm9jdXMge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG5hdmJhci1pbnZlcnNlLXRvZ2dsZS1ob3Zlci1iZztcbiAgICB9XG4gICAgLmljb24tYmFyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRuYXZiYXItaW52ZXJzZS10b2dnbGUtaWNvbi1iYXItYmc7XG4gICAgfVxuICB9XG5cbiAgLm5hdmJhci1jb2xsYXBzZSxcbiAgLm5hdmJhci1mb3JtIHtcbiAgICBib3JkZXItY29sb3I6IGRhcmtlbigkbmF2YmFyLWludmVyc2UtYmcsIDclKTtcbiAgfVxuXG4gIC8vIERyb3Bkb3duc1xuICAubmF2YmFyLW5hdiB7XG4gICAgPiAub3BlbiA+IGEge1xuICAgICAgJixcbiAgICAgICY6aG92ZXIsXG4gICAgICAmOmZvY3VzIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG5hdmJhci1pbnZlcnNlLWxpbmstYWN0aXZlLWJnO1xuICAgICAgICBjb2xvcjogJG5hdmJhci1pbnZlcnNlLWxpbmstYWN0aXZlLWNvbG9yO1xuICAgICAgfVxuICAgIH1cblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkZ3JpZC1mbG9hdC1icmVha3BvaW50LW1heCkge1xuICAgICAgLy8gRHJvcGRvd25zIGdldCBjdXN0b20gZGlzcGxheVxuICAgICAgLm9wZW4gLmRyb3Bkb3duLW1lbnUge1xuICAgICAgICA+IC5kcm9wZG93bi1oZWFkZXIge1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogJG5hdmJhci1pbnZlcnNlLWJvcmRlcjtcbiAgICAgICAgfVxuICAgICAgICAuZGl2aWRlciB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG5hdmJhci1pbnZlcnNlLWJvcmRlcjtcbiAgICAgICAgfVxuICAgICAgICA+IGxpID4gYSB7XG4gICAgICAgICAgY29sb3I6ICRuYXZiYXItaW52ZXJzZS1saW5rLWNvbG9yO1xuICAgICAgICAgICY6aG92ZXIsXG4gICAgICAgICAgJjpmb2N1cyB7XG4gICAgICAgICAgICBjb2xvcjogJG5hdmJhci1pbnZlcnNlLWxpbmstaG92ZXItY29sb3I7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbmF2YmFyLWludmVyc2UtbGluay1ob3Zlci1iZztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgPiAuYWN0aXZlID4gYSB7XG4gICAgICAgICAgJixcbiAgICAgICAgICAmOmhvdmVyLFxuICAgICAgICAgICY6Zm9jdXMge1xuICAgICAgICAgICAgY29sb3I6ICRuYXZiYXItaW52ZXJzZS1saW5rLWFjdGl2ZS1jb2xvcjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRuYXZiYXItaW52ZXJzZS1saW5rLWFjdGl2ZS1iZztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgPiAuZGlzYWJsZWQgPiBhIHtcbiAgICAgICAgICAmLFxuICAgICAgICAgICY6aG92ZXIsXG4gICAgICAgICAgJjpmb2N1cyB7XG4gICAgICAgICAgICBjb2xvcjogJG5hdmJhci1pbnZlcnNlLWxpbmstZGlzYWJsZWQtY29sb3I7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbmF2YmFyLWludmVyc2UtbGluay1kaXNhYmxlZC1iZztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAubmF2YmFyLWxpbmsge1xuICAgIGNvbG9yOiAkbmF2YmFyLWludmVyc2UtbGluay1jb2xvcjtcbiAgICAmOmhvdmVyIHtcbiAgICAgIGNvbG9yOiAkbmF2YmFyLWludmVyc2UtbGluay1ob3Zlci1jb2xvcjtcbiAgICB9XG4gIH1cblxuICAuYnRuLWxpbmsge1xuICAgIGNvbG9yOiAkbmF2YmFyLWludmVyc2UtbGluay1jb2xvcjtcbiAgICAmOmhvdmVyLFxuICAgICY6Zm9jdXMge1xuICAgICAgY29sb3I6ICRuYXZiYXItaW52ZXJzZS1saW5rLWhvdmVyLWNvbG9yO1xuICAgIH1cbiAgICAmW2Rpc2FibGVkXSxcbiAgICBmaWVsZHNldFtkaXNhYmxlZF0gJiB7XG4gICAgICAmOmhvdmVyLFxuICAgICAgJjpmb2N1cyB7XG4gICAgICAgIGNvbG9yOiAkbmF2YmFyLWludmVyc2UtbGluay1kaXNhYmxlZC1jb2xvcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIi8vXG4vLyBCcmVhZGNydW1ic1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXG4uYnJlYWRjcnVtYiB7XG4gIHBhZGRpbmc6ICRicmVhZGNydW1iLXBhZGRpbmctdmVydGljYWwgJGJyZWFkY3J1bWItcGFkZGluZy1ob3Jpem9udGFsO1xuICBtYXJnaW4tYm90dG9tOiAkbGluZS1oZWlnaHQtY29tcHV0ZWQ7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICRicmVhZGNydW1iLWJnO1xuICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cy1iYXNlO1xuXG4gID4gbGkge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcblxuICAgICsgbGk6YmVmb3JlIHtcbiAgICAgIC8vIFtjb252ZXJ0ZXJdIFdvcmthcm91bmQgZm9yIGh0dHBzOi8vZ2l0aHViLmNvbS9zYXNzL2xpYnNhc3MvaXNzdWVzLzExMTVcbiAgICAgICRuYnNwOiBcIlxcMDBhMFwiO1xuICAgICAgY29udGVudDogXCIjeyRicmVhZGNydW1iLXNlcGFyYXRvcn0jeyRuYnNwfVwiOyAvLyBVbmljb2RlIHNwYWNlIGFkZGVkIHNpbmNlIGlubGluZS1ibG9jayBtZWFucyBub24tY29sbGFwc2luZyB3aGl0ZS1zcGFjZVxuICAgICAgcGFkZGluZzogMCA1cHg7XG4gICAgICBjb2xvcjogJGJyZWFkY3J1bWItY29sb3I7XG4gICAgfVxuICB9XG5cbiAgPiAuYWN0aXZlIHtcbiAgICBjb2xvcjogJGJyZWFkY3J1bWItYWN0aXZlLWNvbG9yO1xuICB9XG59XG4iLCIvL1xuLy8gUGFnaW5hdGlvbiAobXVsdGlwbGUgcGFnZXMpXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLnBhZ2luYXRpb24ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgbWFyZ2luOiAkbGluZS1oZWlnaHQtY29tcHV0ZWQgMDtcbiAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXMtYmFzZTtcblxuICA+IGxpIHtcbiAgICBkaXNwbGF5OiBpbmxpbmU7IC8vIFJlbW92ZSBsaXN0LXN0eWxlIGFuZCBibG9jay1sZXZlbCBkZWZhdWx0c1xuICAgID4gYSxcbiAgICA+IHNwYW4ge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgZmxvYXQ6IGxlZnQ7IC8vIENvbGxhcHNlIHdoaXRlLXNwYWNlXG4gICAgICBwYWRkaW5nOiAkcGFkZGluZy1iYXNlLXZlcnRpY2FsICRwYWRkaW5nLWJhc2UtaG9yaXpvbnRhbDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAkbGluZS1oZWlnaHQtYmFzZTtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIGNvbG9yOiAkcGFnaW5hdGlvbi1jb2xvcjtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwYWdpbmF0aW9uLWJnO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgJHBhZ2luYXRpb24tYm9yZGVyO1xuICAgICAgbWFyZ2luLWxlZnQ6IC0xcHg7XG4gICAgfVxuICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgPiBhLFxuICAgICAgPiBzcGFuIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgICAgIEBpbmNsdWRlIGJvcmRlci1sZWZ0LXJhZGl1cygkYm9yZGVyLXJhZGl1cy1iYXNlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgID4gYSxcbiAgICAgID4gc3BhbiB7XG4gICAgICAgIEBpbmNsdWRlIGJvcmRlci1yaWdodC1yYWRpdXMoJGJvcmRlci1yYWRpdXMtYmFzZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgPiBsaSA+IGEsXG4gID4gbGkgPiBzcGFuIHtcbiAgICAmOmhvdmVyLFxuICAgICY6Zm9jdXMge1xuICAgICAgei1pbmRleDogMjtcbiAgICAgIGNvbG9yOiAkcGFnaW5hdGlvbi1ob3Zlci1jb2xvcjtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwYWdpbmF0aW9uLWhvdmVyLWJnO1xuICAgICAgYm9yZGVyLWNvbG9yOiAkcGFnaW5hdGlvbi1ob3Zlci1ib3JkZXI7XG4gICAgfVxuICB9XG5cbiAgPiAuYWN0aXZlID4gYSxcbiAgPiAuYWN0aXZlID4gc3BhbiB7XG4gICAgJixcbiAgICAmOmhvdmVyLFxuICAgICY6Zm9jdXMge1xuICAgICAgei1pbmRleDogMztcbiAgICAgIGNvbG9yOiAkcGFnaW5hdGlvbi1hY3RpdmUtY29sb3I7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcGFnaW5hdGlvbi1hY3RpdmUtYmc7XG4gICAgICBib3JkZXItY29sb3I6ICRwYWdpbmF0aW9uLWFjdGl2ZS1ib3JkZXI7XG4gICAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgfVxuICB9XG5cbiAgPiAuZGlzYWJsZWQge1xuICAgID4gc3BhbixcbiAgICA+IHNwYW46aG92ZXIsXG4gICAgPiBzcGFuOmZvY3VzLFxuICAgID4gYSxcbiAgICA+IGE6aG92ZXIsXG4gICAgPiBhOmZvY3VzIHtcbiAgICAgIGNvbG9yOiAkcGFnaW5hdGlvbi1kaXNhYmxlZC1jb2xvcjtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwYWdpbmF0aW9uLWRpc2FibGVkLWJnO1xuICAgICAgYm9yZGVyLWNvbG9yOiAkcGFnaW5hdGlvbi1kaXNhYmxlZC1ib3JkZXI7XG4gICAgICBjdXJzb3I6ICRjdXJzb3ItZGlzYWJsZWQ7XG4gICAgfVxuICB9XG59XG5cbi8vIFNpemluZ1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gTGFyZ2Vcbi5wYWdpbmF0aW9uLWxnIHtcbiAgQGluY2x1ZGUgcGFnaW5hdGlvbi1zaXplKCRwYWRkaW5nLWxhcmdlLXZlcnRpY2FsLCAkcGFkZGluZy1sYXJnZS1ob3Jpem9udGFsLCAkZm9udC1zaXplLWxhcmdlLCAkbGluZS1oZWlnaHQtbGFyZ2UsICRib3JkZXItcmFkaXVzLWxhcmdlKTtcbn1cblxuLy8gU21hbGxcbi5wYWdpbmF0aW9uLXNtIHtcbiAgQGluY2x1ZGUgcGFnaW5hdGlvbi1zaXplKCRwYWRkaW5nLXNtYWxsLXZlcnRpY2FsLCAkcGFkZGluZy1zbWFsbC1ob3Jpem9udGFsLCAkZm9udC1zaXplLXNtYWxsLCAkbGluZS1oZWlnaHQtc21hbGwsICRib3JkZXItcmFkaXVzLXNtYWxsKTtcbn1cbiIsIi8vXG4vLyBQYWdlciBwYWdpbmF0aW9uXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cbi5wYWdlciB7XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgbWFyZ2luOiAkbGluZS1oZWlnaHQtY29tcHV0ZWQgMDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBAaW5jbHVkZSBjbGVhcmZpeDtcbiAgbGkge1xuICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICA+IGEsXG4gICAgPiBzcGFuIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIHBhZGRpbmc6IDVweCAxNHB4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHBhZ2VyLWJnO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgJHBhZ2VyLWJvcmRlcjtcbiAgICAgIGJvcmRlci1yYWRpdXM6ICRwYWdlci1ib3JkZXItcmFkaXVzO1xuICAgIH1cblxuICAgID4gYTpob3ZlcixcbiAgICA+IGE6Zm9jdXMge1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHBhZ2VyLWhvdmVyLWJnO1xuICAgIH1cbiAgfVxuXG4gIC5uZXh0IHtcbiAgICA+IGEsXG4gICAgPiBzcGFuIHtcbiAgICAgIGZsb2F0OiByaWdodDtcbiAgICB9XG4gIH1cblxuICAucHJldmlvdXMge1xuICAgID4gYSxcbiAgICA+IHNwYW4ge1xuICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgfVxuICB9XG5cbiAgLmRpc2FibGVkIHtcbiAgICA+IGEsXG4gICAgPiBhOmhvdmVyLFxuICAgID4gYTpmb2N1cyxcbiAgICA+IHNwYW4ge1xuICAgICAgY29sb3I6ICRwYWdlci1kaXNhYmxlZC1jb2xvcjtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwYWdlci1iZztcbiAgICAgIGN1cnNvcjogJGN1cnNvci1kaXNhYmxlZDtcbiAgICB9XG4gIH1cbn1cbiIsIi8vXG4vLyBMYWJlbHNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi5sYWJlbCB7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgcGFkZGluZzogLjJlbSAuNmVtIC4zZW07XG4gIGZvbnQtc2l6ZTogNzUlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIGNvbG9yOiAkbGFiZWwtY29sb3I7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xuICBib3JkZXItcmFkaXVzOiAuMjVlbTtcblxuICAvLyBbY29udmVydGVyXSBleHRyYWN0ZWQgYSYgdG8gYS5sYWJlbFxuXG4gIC8vIEVtcHR5IGxhYmVscyBjb2xsYXBzZSBhdXRvbWF0aWNhbGx5IChub3QgYXZhaWxhYmxlIGluIElFOClcbiAgJjplbXB0eSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC8vIFF1aWNrIGZpeCBmb3IgbGFiZWxzIGluIGJ1dHRvbnNcbiAgLmJ0biAmIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAtMXB4O1xuICB9XG59XG5cbi8vIEFkZCBob3ZlciBlZmZlY3RzLCBidXQgb25seSBmb3IgbGlua3NcbmEubGFiZWwge1xuICAmOmhvdmVyLFxuICAmOmZvY3VzIHtcbiAgICBjb2xvcjogJGxhYmVsLWxpbmstaG92ZXItY29sb3I7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxufVxuXG4vLyBDb2xvcnNcbi8vIENvbnRleHR1YWwgdmFyaWF0aW9ucyAobGlua2VkIGxhYmVscyBnZXQgZGFya2VyIG9uIDpob3ZlcilcblxuLmxhYmVsLWRlZmF1bHQge1xuICBAaW5jbHVkZSBsYWJlbC12YXJpYW50KCRsYWJlbC1kZWZhdWx0LWJnKTtcbn1cblxuLmxhYmVsLXByaW1hcnkge1xuICBAaW5jbHVkZSBsYWJlbC12YXJpYW50KCRsYWJlbC1wcmltYXJ5LWJnKTtcbn1cblxuLmxhYmVsLXN1Y2Nlc3Mge1xuICBAaW5jbHVkZSBsYWJlbC12YXJpYW50KCRsYWJlbC1zdWNjZXNzLWJnKTtcbn1cblxuLmxhYmVsLWluZm8ge1xuICBAaW5jbHVkZSBsYWJlbC12YXJpYW50KCRsYWJlbC1pbmZvLWJnKTtcbn1cblxuLmxhYmVsLXdhcm5pbmcge1xuICBAaW5jbHVkZSBsYWJlbC12YXJpYW50KCRsYWJlbC13YXJuaW5nLWJnKTtcbn1cblxuLmxhYmVsLWRhbmdlciB7XG4gIEBpbmNsdWRlIGxhYmVsLXZhcmlhbnQoJGxhYmVsLWRhbmdlci1iZyk7XG59XG4iLCIvL1xuLy8gQmFkZ2VzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cbi8vIEJhc2UgY2xhc3Ncbi5iYWRnZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWluLXdpZHRoOiAxMHB4O1xuICBwYWRkaW5nOiAzcHggN3B4O1xuICBmb250LXNpemU6ICRmb250LXNpemUtc21hbGw7XG4gIGZvbnQtd2VpZ2h0OiAkYmFkZ2UtZm9udC13ZWlnaHQ7XG4gIGNvbG9yOiAkYmFkZ2UtY29sb3I7XG4gIGxpbmUtaGVpZ2h0OiAkYmFkZ2UtbGluZS1oZWlnaHQ7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJhZGdlLWJnO1xuICBib3JkZXItcmFkaXVzOiAkYmFkZ2UtYm9yZGVyLXJhZGl1cztcblxuICAvLyBFbXB0eSBiYWRnZXMgY29sbGFwc2UgYXV0b21hdGljYWxseSAobm90IGF2YWlsYWJsZSBpbiBJRTgpXG4gICY6ZW1wdHkge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAvLyBRdWljayBmaXggZm9yIGJhZGdlcyBpbiBidXR0b25zXG4gIC5idG4gJiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogLTFweDtcbiAgfVxuXG4gIC5idG4teHMgJixcbiAgLmJ0bi1ncm91cC14cyA+IC5idG4gJiB7XG4gICAgdG9wOiAwO1xuICAgIHBhZGRpbmc6IDFweCA1cHg7XG4gIH1cblxuICAvLyBbY29udmVydGVyXSBleHRyYWN0ZWQgYSYgdG8gYS5iYWRnZVxuXG4gIC8vIEFjY291bnQgZm9yIGJhZGdlcyBpbiBuYXZzXG4gIC5saXN0LWdyb3VwLWl0ZW0uYWN0aXZlID4gJixcbiAgLm5hdi1waWxscyA+IC5hY3RpdmUgPiBhID4gJiB7XG4gICAgY29sb3I6ICRiYWRnZS1hY3RpdmUtY29sb3I7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJhZGdlLWFjdGl2ZS1iZztcbiAgfVxuXG4gIC5saXN0LWdyb3VwLWl0ZW0gPiAmIHtcbiAgICBmbG9hdDogcmlnaHQ7XG4gIH1cblxuICAubGlzdC1ncm91cC1pdGVtID4gJiArICYge1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICB9XG5cbiAgLm5hdi1waWxscyA+IGxpID4gYSA+ICYge1xuICAgIG1hcmdpbi1sZWZ0OiAzcHg7XG4gIH1cbn1cblxuLy8gSG92ZXIgc3RhdGUsIGJ1dCBvbmx5IGZvciBsaW5rc1xuYS5iYWRnZSB7XG4gICY6aG92ZXIsXG4gICY6Zm9jdXMge1xuICAgIGNvbG9yOiAkYmFkZ2UtbGluay1ob3Zlci1jb2xvcjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG59XG4iLCIvL1xuLy8gSnVtYm90cm9uXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cbi5qdW1ib3Ryb24ge1xuICBwYWRkaW5nLXRvcDogICAgJGp1bWJvdHJvbi1wYWRkaW5nO1xuICBwYWRkaW5nLWJvdHRvbTogJGp1bWJvdHJvbi1wYWRkaW5nO1xuICBtYXJnaW4tYm90dG9tOiAkanVtYm90cm9uLXBhZGRpbmc7XG4gIGNvbG9yOiAkanVtYm90cm9uLWNvbG9yO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkanVtYm90cm9uLWJnO1xuXG4gIGgxLFxuICAuaDEge1xuICAgIGNvbG9yOiAkanVtYm90cm9uLWhlYWRpbmctY29sb3I7XG4gIH1cblxuICBwIHtcbiAgICBtYXJnaW4tYm90dG9tOiAoJGp1bWJvdHJvbi1wYWRkaW5nIC8gMik7XG4gICAgZm9udC1zaXplOiAkanVtYm90cm9uLWZvbnQtc2l6ZTtcbiAgICBmb250LXdlaWdodDogMjAwO1xuICB9XG5cbiAgPiBociB7XG4gICAgYm9yZGVyLXRvcC1jb2xvcjogZGFya2VuKCRqdW1ib3Ryb24tYmcsIDEwJSk7XG4gIH1cblxuICAuY29udGFpbmVyICYsXG4gIC5jb250YWluZXItZmx1aWQgJiB7XG4gICAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXMtbGFyZ2U7IC8vIE9ubHkgcm91bmQgY29ybmVycyBhdCBoaWdoZXIgcmVzb2x1dGlvbnMgaWYgY29udGFpbmVkIGluIGEgY29udGFpbmVyXG4gICAgcGFkZGluZy1sZWZ0OiAgKCRncmlkLWd1dHRlci13aWR0aCAvIDIpO1xuICAgIHBhZGRpbmctcmlnaHQ6ICgkZ3JpZC1ndXR0ZXItd2lkdGggLyAyKTtcbiAgfVxuXG4gIC5jb250YWluZXIge1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgfVxuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRzY3JlZW4tc20tbWluKSB7XG4gICAgcGFkZGluZy10b3A6ICAgICgkanVtYm90cm9uLXBhZGRpbmcgKiAxLjYpO1xuICAgIHBhZGRpbmctYm90dG9tOiAoJGp1bWJvdHJvbi1wYWRkaW5nICogMS42KTtcblxuICAgIC5jb250YWluZXIgJixcbiAgICAuY29udGFpbmVyLWZsdWlkICYge1xuICAgICAgcGFkZGluZy1sZWZ0OiAgKCRqdW1ib3Ryb24tcGFkZGluZyAqIDIpO1xuICAgICAgcGFkZGluZy1yaWdodDogKCRqdW1ib3Ryb24tcGFkZGluZyAqIDIpO1xuICAgIH1cblxuICAgIGgxLFxuICAgIC5oMSB7XG4gICAgICBmb250LXNpemU6ICRqdW1ib3Ryb24taGVhZGluZy1mb250LXNpemU7XG4gICAgfVxuICB9XG59XG4iLCIvL1xuLy8gVGh1bWJuYWlsc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXG4vLyBNaXhpbiBhbmQgYWRqdXN0IHRoZSByZWd1bGFyIGltYWdlIGNsYXNzXG4udGh1bWJuYWlsIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6ICR0aHVtYm5haWwtcGFkZGluZztcbiAgbWFyZ2luLWJvdHRvbTogJGxpbmUtaGVpZ2h0LWNvbXB1dGVkO1xuICBsaW5lLWhlaWdodDogJGxpbmUtaGVpZ2h0LWJhc2U7XG4gIGJhY2tncm91bmQtY29sb3I6ICR0aHVtYm5haWwtYmc7XG4gIGJvcmRlcjogMXB4IHNvbGlkICR0aHVtYm5haWwtYm9yZGVyO1xuICBib3JkZXItcmFkaXVzOiAkdGh1bWJuYWlsLWJvcmRlci1yYWRpdXM7XG4gIEBpbmNsdWRlIHRyYW5zaXRpb24oYm9yZGVyIC4ycyBlYXNlLWluLW91dCk7XG5cbiAgPiBpbWcsXG4gIGEgPiBpbWcge1xuICAgIEBpbmNsdWRlIGltZy1yZXNwb25zaXZlO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgfVxuXG4gIC8vIFtjb252ZXJ0ZXJdIGV4dHJhY3RlZCBhJjpob3ZlciwgYSY6Zm9jdXMsIGEmLmFjdGl2ZSB0byBhLnRodW1ibmFpbDpob3ZlciwgYS50aHVtYm5haWw6Zm9jdXMsIGEudGh1bWJuYWlsLmFjdGl2ZVxuXG4gIC8vIEltYWdlIGNhcHRpb25zXG4gIC5jYXB0aW9uIHtcbiAgICBwYWRkaW5nOiAkdGh1bWJuYWlsLWNhcHRpb24tcGFkZGluZztcbiAgICBjb2xvcjogJHRodW1ibmFpbC1jYXB0aW9uLWNvbG9yO1xuICB9XG59XG5cbi8vIEFkZCBhIGhvdmVyIHN0YXRlIGZvciBsaW5rZWQgdmVyc2lvbnMgb25seVxuYS50aHVtYm5haWw6aG92ZXIsXG5hLnRodW1ibmFpbDpmb2N1cyxcbmEudGh1bWJuYWlsLmFjdGl2ZSB7XG4gIGJvcmRlci1jb2xvcjogJGxpbmstY29sb3I7XG59XG4iLCIvL1xuLy8gQWxlcnRzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cbi8vIEJhc2Ugc3R5bGVzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi5hbGVydCB7XG4gIHBhZGRpbmc6ICRhbGVydC1wYWRkaW5nO1xuICBtYXJnaW4tYm90dG9tOiAkbGluZS1oZWlnaHQtY29tcHV0ZWQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiAkYWxlcnQtYm9yZGVyLXJhZGl1cztcblxuICAvLyBIZWFkaW5ncyBmb3IgbGFyZ2VyIGFsZXJ0c1xuICBoNCB7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgICAvLyBTcGVjaWZpZWQgZm9yIHRoZSBoNCB0byBwcmV2ZW50IGNvbmZsaWN0cyBvZiBjaGFuZ2luZyAkaGVhZGluZ3MtY29sb3JcbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgfVxuXG4gIC8vIFByb3ZpZGUgY2xhc3MgZm9yIGxpbmtzIHRoYXQgbWF0Y2ggYWxlcnRzXG4gIC5hbGVydC1saW5rIHtcbiAgICBmb250LXdlaWdodDogJGFsZXJ0LWxpbmstZm9udC13ZWlnaHQ7XG4gIH1cblxuICAvLyBJbXByb3ZlIGFsaWdubWVudCBhbmQgc3BhY2luZyBvZiBpbm5lciBjb250ZW50XG4gID4gcCxcbiAgPiB1bCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgfVxuXG4gID4gcCArIHAge1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgfVxufVxuXG4vLyBEaXNtaXNzaWJsZSBhbGVydHNcbi8vXG4vLyBFeHBhbmQgdGhlIHJpZ2h0IHBhZGRpbmcgYW5kIGFjY291bnQgZm9yIHRoZSBjbG9zZSBidXR0b24ncyBwb3NpdGlvbmluZy5cblxuLmFsZXJ0LWRpc21pc3NhYmxlLCAvLyBUaGUgbWlzc3BlbGxlZCAuYWxlcnQtZGlzbWlzc2FibGUgd2FzIGRlcHJlY2F0ZWQgaW4gMy4yLjAuXG4uYWxlcnQtZGlzbWlzc2libGUge1xuICBwYWRkaW5nLXJpZ2h0OiAoJGFsZXJ0LXBhZGRpbmcgKyAyMCk7XG5cbiAgLy8gQWRqdXN0IGNsb3NlIGxpbmsgcG9zaXRpb25cbiAgLmNsb3NlIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAtMnB4O1xuICAgIHJpZ2h0OiAtMjFweDtcbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgfVxufVxuXG4vLyBBbHRlcm5hdGUgc3R5bGVzXG4vL1xuLy8gR2VuZXJhdGUgY29udGV4dHVhbCBtb2RpZmllciBjbGFzc2VzIGZvciBjb2xvcml6aW5nIHRoZSBhbGVydC5cblxuLmFsZXJ0LXN1Y2Nlc3Mge1xuICBAaW5jbHVkZSBhbGVydC12YXJpYW50KCRhbGVydC1zdWNjZXNzLWJnLCAkYWxlcnQtc3VjY2Vzcy1ib3JkZXIsICRhbGVydC1zdWNjZXNzLXRleHQpO1xufVxuXG4uYWxlcnQtaW5mbyB7XG4gIEBpbmNsdWRlIGFsZXJ0LXZhcmlhbnQoJGFsZXJ0LWluZm8tYmcsICRhbGVydC1pbmZvLWJvcmRlciwgJGFsZXJ0LWluZm8tdGV4dCk7XG59XG5cbi5hbGVydC13YXJuaW5nIHtcbiAgQGluY2x1ZGUgYWxlcnQtdmFyaWFudCgkYWxlcnQtd2FybmluZy1iZywgJGFsZXJ0LXdhcm5pbmctYm9yZGVyLCAkYWxlcnQtd2FybmluZy10ZXh0KTtcbn1cblxuLmFsZXJ0LWRhbmdlciB7XG4gIEBpbmNsdWRlIGFsZXJ0LXZhcmlhbnQoJGFsZXJ0LWRhbmdlci1iZywgJGFsZXJ0LWRhbmdlci1ib3JkZXIsICRhbGVydC1kYW5nZXItdGV4dCk7XG59XG4iLCIvL1xuLy8gUHJvZ3Jlc3MgYmFyc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXG4vLyBCYXIgYW5pbWF0aW9uc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyBXZWJLaXRcbkAtd2Via2l0LWtleWZyYW1lcyBwcm9ncmVzcy1iYXItc3RyaXBlcyB7XG4gIGZyb20gIHsgYmFja2dyb3VuZC1wb3NpdGlvbjogNDBweCAwOyB9XG4gIHRvICAgIHsgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwOyB9XG59XG5cbi8vIFNwZWMgYW5kIElFMTArXG5Aa2V5ZnJhbWVzIHByb2dyZXNzLWJhci1zdHJpcGVzIHtcbiAgZnJvbSAgeyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA0MHB4IDA7IH1cbiAgdG8gICAgeyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDA7IH1cbn1cblxuXG4vLyBCYXIgaXRzZWxmXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIE91dGVyIGNvbnRhaW5lclxuLnByb2dyZXNzIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgaGVpZ2h0OiAkbGluZS1oZWlnaHQtY29tcHV0ZWQ7XG4gIG1hcmdpbi1ib3R0b206ICRsaW5lLWhlaWdodC1jb21wdXRlZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHByb2dyZXNzLWJnO1xuICBib3JkZXItcmFkaXVzOiAkcHJvZ3Jlc3MtYm9yZGVyLXJhZGl1cztcbiAgQGluY2x1ZGUgYm94LXNoYWRvdyhpbnNldCAwIDFweCAycHggcmdiYSgwLDAsMCwuMSkpO1xufVxuXG4vLyBCYXIgb2YgcHJvZ3Jlc3Ncbi5wcm9ncmVzcy1iYXIge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1zbWFsbDtcbiAgbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodC1jb21wdXRlZDtcbiAgY29sb3I6ICRwcm9ncmVzcy1iYXItY29sb3I7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHByb2dyZXNzLWJhci1iZztcbiAgQGluY2x1ZGUgYm94LXNoYWRvdyhpbnNldCAwIC0xcHggMCByZ2JhKDAsMCwwLC4xNSkpO1xuICBAaW5jbHVkZSB0cmFuc2l0aW9uKHdpZHRoIC42cyBlYXNlKTtcbn1cblxuLy8gU3RyaXBlZCBiYXJzXG4vL1xuLy8gYC5wcm9ncmVzcy1zdHJpcGVkIC5wcm9ncmVzcy1iYXJgIGlzIGRlcHJlY2F0ZWQgYXMgb2YgdjMuMi4wIGluIGZhdm9yIG9mIHRoZVxuLy8gYC5wcm9ncmVzcy1iYXItc3RyaXBlZGAgY2xhc3MsIHdoaWNoIHlvdSBqdXN0IGFkZCB0byBhbiBleGlzdGluZ1xuLy8gYC5wcm9ncmVzcy1iYXJgLlxuLnByb2dyZXNzLXN0cmlwZWQgLnByb2dyZXNzLWJhcixcbi5wcm9ncmVzcy1iYXItc3RyaXBlZCB7XG4gIEBpbmNsdWRlIGdyYWRpZW50LXN0cmlwZWQ7XG4gIGJhY2tncm91bmQtc2l6ZTogNDBweCA0MHB4O1xufVxuXG4vLyBDYWxsIGFuaW1hdGlvbiBmb3IgdGhlIGFjdGl2ZSBvbmVcbi8vXG4vLyBgLnByb2dyZXNzLmFjdGl2ZSAucHJvZ3Jlc3MtYmFyYCBpcyBkZXByZWNhdGVkIGFzIG9mIHYzLjIuMCBpbiBmYXZvciBvZiB0aGVcbi8vIGAucHJvZ3Jlc3MtYmFyLmFjdGl2ZWAgYXBwcm9hY2guXG4ucHJvZ3Jlc3MuYWN0aXZlIC5wcm9ncmVzcy1iYXIsXG4ucHJvZ3Jlc3MtYmFyLmFjdGl2ZSB7XG4gIEBpbmNsdWRlIGFuaW1hdGlvbihwcm9ncmVzcy1iYXItc3RyaXBlcyAycyBsaW5lYXIgaW5maW5pdGUpO1xufVxuXG5cbi8vIFZhcmlhdGlvbnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLnByb2dyZXNzLWJhci1zdWNjZXNzIHtcbiAgQGluY2x1ZGUgcHJvZ3Jlc3MtYmFyLXZhcmlhbnQoJHByb2dyZXNzLWJhci1zdWNjZXNzLWJnKTtcbn1cblxuLnByb2dyZXNzLWJhci1pbmZvIHtcbiAgQGluY2x1ZGUgcHJvZ3Jlc3MtYmFyLXZhcmlhbnQoJHByb2dyZXNzLWJhci1pbmZvLWJnKTtcbn1cblxuLnByb2dyZXNzLWJhci13YXJuaW5nIHtcbiAgQGluY2x1ZGUgcHJvZ3Jlc3MtYmFyLXZhcmlhbnQoJHByb2dyZXNzLWJhci13YXJuaW5nLWJnKTtcbn1cblxuLnByb2dyZXNzLWJhci1kYW5nZXIge1xuICBAaW5jbHVkZSBwcm9ncmVzcy1iYXItdmFyaWFudCgkcHJvZ3Jlc3MtYmFyLWRhbmdlci1iZyk7XG59XG4iLCIubWVkaWEge1xuICAvLyBQcm9wZXIgc3BhY2luZyBiZXR3ZWVuIGluc3RhbmNlcyBvZiAubWVkaWFcbiAgbWFyZ2luLXRvcDogMTVweDtcblxuICAmOmZpcnN0LWNoaWxkIHtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICB9XG59XG5cbi5tZWRpYSxcbi5tZWRpYS1ib2R5IHtcbiAgem9vbTogMTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLm1lZGlhLWJvZHkge1xuICB3aWR0aDogMTAwMDBweDtcbn1cblxuLm1lZGlhLW9iamVjdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuXG4gIC8vIEZpeCBjb2xsYXBzZSBpbiB3ZWJraXQgZnJvbSBtYXgtd2lkdGg6IDEwMCUgYW5kIGRpc3BsYXk6IHRhYmxlLWNlbGwuXG4gICYuaW1nLXRodW1ibmFpbCB7XG4gICAgbWF4LXdpZHRoOiBub25lO1xuICB9XG59XG5cbi5tZWRpYS1yaWdodCxcbi5tZWRpYSA+IC5wdWxsLXJpZ2h0IHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG4ubWVkaWEtbGVmdCxcbi5tZWRpYSA+IC5wdWxsLWxlZnQge1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xufVxuXG4ubWVkaWEtbGVmdCxcbi5tZWRpYS1yaWdodCxcbi5tZWRpYS1ib2R5IHtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cblxuLm1lZGlhLW1pZGRsZSB7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5tZWRpYS1ib3R0b20ge1xuICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xufVxuXG4vLyBSZXNldCBtYXJnaW5zIG9uIGhlYWRpbmdzIGZvciB0aWdodGVyIGRlZmF1bHQgc3BhY2luZ1xuLm1lZGlhLWhlYWRpbmcge1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbi8vIE1lZGlhIGxpc3QgdmFyaWF0aW9uXG4vL1xuLy8gVW5kbyBkZWZhdWx0IHVsL29sIHN0eWxlc1xuLm1lZGlhLWxpc3Qge1xuICBwYWRkaW5nLWxlZnQ6IDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG4iLCIvL1xuLy8gTGlzdCBncm91cHNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblxuLy8gQmFzZSBjbGFzc1xuLy9cbi8vIEVhc2lseSB1c2FibGUgb24gPHVsPiwgPG9sPiwgb3IgPGRpdj4uXG5cbi5saXN0LWdyb3VwIHtcbiAgLy8gTm8gbmVlZCB0byBzZXQgbGlzdC1zdHlsZTogbm9uZTsgc2luY2UgLmxpc3QtZ3JvdXAtaXRlbSBpcyBibG9jayBsZXZlbFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDA7IC8vIHJlc2V0IHBhZGRpbmcgYmVjYXVzZSB1bCBhbmQgb2xcbn1cblxuXG4vLyBJbmRpdmlkdWFsIGxpc3QgaXRlbXNcbi8vXG4vLyBVc2Ugb24gYGxpYHMgb3IgYGRpdmBzIHdpdGhpbiB0aGUgYC5saXN0LWdyb3VwYCBwYXJlbnQuXG5cbi5saXN0LWdyb3VwLWl0ZW0ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gIC8vIFBsYWNlIHRoZSBib3JkZXIgb24gdGhlIGxpc3QgaXRlbXMgYW5kIG5lZ2F0aXZlIG1hcmdpbiB1cCBmb3IgYmV0dGVyIHN0eWxpbmdcbiAgbWFyZ2luLWJvdHRvbTogLTFweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGxpc3QtZ3JvdXAtYmc7XG4gIGJvcmRlcjogMXB4IHNvbGlkICRsaXN0LWdyb3VwLWJvcmRlcjtcblxuICAvLyBSb3VuZCB0aGUgZmlyc3QgYW5kIGxhc3QgaXRlbXNcbiAgJjpmaXJzdC1jaGlsZCB7XG4gICAgQGluY2x1ZGUgYm9yZGVyLXRvcC1yYWRpdXMoJGxpc3QtZ3JvdXAtYm9yZGVyLXJhZGl1cyk7XG4gIH1cbiAgJjpsYXN0LWNoaWxkIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIEBpbmNsdWRlIGJvcmRlci1ib3R0b20tcmFkaXVzKCRsaXN0LWdyb3VwLWJvcmRlci1yYWRpdXMpO1xuICB9XG59XG5cblxuLy8gSW50ZXJhY3RpdmUgbGlzdCBpdGVtc1xuLy9cbi8vIFVzZSBhbmNob3Igb3IgYnV0dG9uIGVsZW1lbnRzIGluc3RlYWQgb2YgYGxpYHMgb3IgYGRpdmBzIHRvIGNyZWF0ZSBpbnRlcmFjdGl2ZSBpdGVtcy5cbi8vIEluY2x1ZGVzIGFuIGV4dHJhIGAuYWN0aXZlYCBtb2RpZmllciBjbGFzcyBmb3Igc2hvd2luZyBzZWxlY3RlZCBpdGVtcy5cblxuYS5saXN0LWdyb3VwLWl0ZW0sXG5idXR0b24ubGlzdC1ncm91cC1pdGVtIHtcbiAgY29sb3I6ICRsaXN0LWdyb3VwLWxpbmstY29sb3I7XG5cbiAgLmxpc3QtZ3JvdXAtaXRlbS1oZWFkaW5nIHtcbiAgICBjb2xvcjogJGxpc3QtZ3JvdXAtbGluay1oZWFkaW5nLWNvbG9yO1xuICB9XG5cbiAgLy8gSG92ZXIgc3RhdGVcbiAgJjpob3ZlcixcbiAgJjpmb2N1cyB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiAkbGlzdC1ncm91cC1saW5rLWhvdmVyLWNvbG9yO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRsaXN0LWdyb3VwLWhvdmVyLWJnO1xuICB9XG59XG5cbmJ1dHRvbi5saXN0LWdyb3VwLWl0ZW0ge1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLmxpc3QtZ3JvdXAtaXRlbSB7XG4gIC8vIERpc2FibGVkIHN0YXRlXG4gICYuZGlzYWJsZWQsXG4gICYuZGlzYWJsZWQ6aG92ZXIsXG4gICYuZGlzYWJsZWQ6Zm9jdXMge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRsaXN0LWdyb3VwLWRpc2FibGVkLWJnO1xuICAgIGNvbG9yOiAkbGlzdC1ncm91cC1kaXNhYmxlZC1jb2xvcjtcbiAgICBjdXJzb3I6ICRjdXJzb3ItZGlzYWJsZWQ7XG5cbiAgICAvLyBGb3JjZSBjb2xvciB0byBpbmhlcml0IGZvciBjdXN0b20gY29udGVudFxuICAgIC5saXN0LWdyb3VwLWl0ZW0taGVhZGluZyB7XG4gICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICB9XG4gICAgLmxpc3QtZ3JvdXAtaXRlbS10ZXh0IHtcbiAgICAgIGNvbG9yOiAkbGlzdC1ncm91cC1kaXNhYmxlZC10ZXh0LWNvbG9yO1xuICAgIH1cbiAgfVxuXG4gIC8vIEFjdGl2ZSBjbGFzcyBvbiBpdGVtIGl0c2VsZiwgbm90IHBhcmVudFxuICAmLmFjdGl2ZSxcbiAgJi5hY3RpdmU6aG92ZXIsXG4gICYuYWN0aXZlOmZvY3VzIHtcbiAgICB6LWluZGV4OiAyOyAvLyBQbGFjZSBhY3RpdmUgaXRlbXMgYWJvdmUgdGhlaXIgc2libGluZ3MgZm9yIHByb3BlciBib3JkZXIgc3R5bGluZ1xuICAgIGNvbG9yOiAkbGlzdC1ncm91cC1hY3RpdmUtY29sb3I7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGxpc3QtZ3JvdXAtYWN0aXZlLWJnO1xuICAgIGJvcmRlci1jb2xvcjogJGxpc3QtZ3JvdXAtYWN0aXZlLWJvcmRlcjtcblxuICAgIC8vIEZvcmNlIGNvbG9yIHRvIGluaGVyaXQgZm9yIGN1c3RvbSBjb250ZW50XG4gICAgLmxpc3QtZ3JvdXAtaXRlbS1oZWFkaW5nLFxuICAgIC5saXN0LWdyb3VwLWl0ZW0taGVhZGluZyA+IHNtYWxsLFxuICAgIC5saXN0LWdyb3VwLWl0ZW0taGVhZGluZyA+IC5zbWFsbCB7XG4gICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICB9XG4gICAgLmxpc3QtZ3JvdXAtaXRlbS10ZXh0IHtcbiAgICAgIGNvbG9yOiAkbGlzdC1ncm91cC1hY3RpdmUtdGV4dC1jb2xvcjtcbiAgICB9XG4gIH1cbn1cblxuXG4vLyBDb250ZXh0dWFsIHZhcmlhbnRzXG4vL1xuLy8gQWRkIG1vZGlmaWVyIGNsYXNzZXMgdG8gY2hhbmdlIHRleHQgYW5kIGJhY2tncm91bmQgY29sb3Igb24gaW5kaXZpZHVhbCBpdGVtcy5cbi8vIE9yZ2FuaXphdGlvbmFsbHksIHRoaXMgbXVzdCBjb21lIGFmdGVyIHRoZSBgOmhvdmVyYCBzdGF0ZXMuXG5cbkBpbmNsdWRlIGxpc3QtZ3JvdXAtaXRlbS12YXJpYW50KHN1Y2Nlc3MsICRzdGF0ZS1zdWNjZXNzLWJnLCAkc3RhdGUtc3VjY2Vzcy10ZXh0KTtcbkBpbmNsdWRlIGxpc3QtZ3JvdXAtaXRlbS12YXJpYW50KGluZm8sICRzdGF0ZS1pbmZvLWJnLCAkc3RhdGUtaW5mby10ZXh0KTtcbkBpbmNsdWRlIGxpc3QtZ3JvdXAtaXRlbS12YXJpYW50KHdhcm5pbmcsICRzdGF0ZS13YXJuaW5nLWJnLCAkc3RhdGUtd2FybmluZy10ZXh0KTtcbkBpbmNsdWRlIGxpc3QtZ3JvdXAtaXRlbS12YXJpYW50KGRhbmdlciwgJHN0YXRlLWRhbmdlci1iZywgJHN0YXRlLWRhbmdlci10ZXh0KTtcblxuXG4vLyBDdXN0b20gY29udGVudCBvcHRpb25zXG4vL1xuLy8gRXh0cmEgY2xhc3NlcyBmb3IgY3JlYXRpbmcgd2VsbC1mb3JtYXR0ZWQgY29udGVudCB3aXRoaW4gYC5saXN0LWdyb3VwLWl0ZW1gcy5cblxuLmxpc3QtZ3JvdXAtaXRlbS1oZWFkaW5nIHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuLmxpc3QtZ3JvdXAtaXRlbS10ZXh0IHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgbGluZS1oZWlnaHQ6IDEuMztcbn1cbiIsIi8vXG4vLyBQYW5lbHNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblxuLy8gQmFzZSBjbGFzc1xuLnBhbmVsIHtcbiAgbWFyZ2luLWJvdHRvbTogJGxpbmUtaGVpZ2h0LWNvbXB1dGVkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkcGFuZWwtYmc7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiAkcGFuZWwtYm9yZGVyLXJhZGl1cztcbiAgQGluY2x1ZGUgYm94LXNoYWRvdygwIDFweCAxcHggcmdiYSgwLDAsMCwuMDUpKTtcbn1cblxuLy8gUGFuZWwgY29udGVudHNcbi5wYW5lbC1ib2R5IHtcbiAgcGFkZGluZzogJHBhbmVsLWJvZHktcGFkZGluZztcbiAgQGluY2x1ZGUgY2xlYXJmaXg7XG59XG5cbi8vIE9wdGlvbmFsIGhlYWRpbmdcbi5wYW5lbC1oZWFkaW5nIHtcbiAgcGFkZGluZzogJHBhbmVsLWhlYWRpbmctcGFkZGluZztcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBAaW5jbHVkZSBib3JkZXItdG9wLXJhZGl1cygoJHBhbmVsLWJvcmRlci1yYWRpdXMgLSAxKSk7XG5cbiAgPiAuZHJvcGRvd24gLmRyb3Bkb3duLXRvZ2dsZSB7XG4gICAgY29sb3I6IGluaGVyaXQ7XG4gIH1cbn1cblxuLy8gV2l0aGluIGhlYWRpbmcsIHN0cmlwIGFueSBgaCpgIHRhZyBvZiBpdHMgZGVmYXVsdCBtYXJnaW5zIGZvciBzcGFjaW5nLlxuLnBhbmVsLXRpdGxlIHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgZm9udC1zaXplOiBjZWlsKCgkZm9udC1zaXplLWJhc2UgKiAxLjEyNSkpO1xuICBjb2xvcjogaW5oZXJpdDtcblxuICA+IGEsXG4gID4gc21hbGwsXG4gID4gLnNtYWxsLFxuICA+IHNtYWxsID4gYSxcbiAgPiAuc21hbGwgPiBhIHtcbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgfVxufVxuXG4vLyBPcHRpb25hbCBmb290ZXIgKHN0YXlzIGdyYXkgaW4gZXZlcnkgbW9kaWZpZXIgY2xhc3MpXG4ucGFuZWwtZm9vdGVyIHtcbiAgcGFkZGluZzogJHBhbmVsLWZvb3Rlci1wYWRkaW5nO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkcGFuZWwtZm9vdGVyLWJnO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgJHBhbmVsLWlubmVyLWJvcmRlcjtcbiAgQGluY2x1ZGUgYm9yZGVyLWJvdHRvbS1yYWRpdXMoKCRwYW5lbC1ib3JkZXItcmFkaXVzIC0gMSkpO1xufVxuXG5cbi8vIExpc3QgZ3JvdXBzIGluIHBhbmVsc1xuLy9cbi8vIEJ5IGRlZmF1bHQsIHNwYWNlIG91dCBsaXN0IGdyb3VwIGNvbnRlbnQgZnJvbSBwYW5lbCBoZWFkaW5ncyB0byBhY2NvdW50IGZvclxuLy8gYW55IGtpbmQgb2YgY3VzdG9tIGNvbnRlbnQgYmV0d2VlbiB0aGUgdHdvLlxuXG4ucGFuZWwge1xuICA+IC5saXN0LWdyb3VwLFxuICA+IC5wYW5lbC1jb2xsYXBzZSA+IC5saXN0LWdyb3VwIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuXG4gICAgLmxpc3QtZ3JvdXAtaXRlbSB7XG4gICAgICBib3JkZXItd2lkdGg6IDFweCAwO1xuICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICB9XG5cbiAgICAvLyBBZGQgYm9yZGVyIHRvcCByYWRpdXMgZm9yIGZpcnN0IG9uZVxuICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgLmxpc3QtZ3JvdXAtaXRlbTpmaXJzdC1jaGlsZCB7XG4gICAgICAgIGJvcmRlci10b3A6IDA7XG4gICAgICAgIEBpbmNsdWRlIGJvcmRlci10b3AtcmFkaXVzKCgkcGFuZWwtYm9yZGVyLXJhZGl1cyAtIDEpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBBZGQgYm9yZGVyIGJvdHRvbSByYWRpdXMgZm9yIGxhc3Qgb25lXG4gICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgIC5saXN0LWdyb3VwLWl0ZW06bGFzdC1jaGlsZCB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDA7XG4gICAgICAgIEBpbmNsdWRlIGJvcmRlci1ib3R0b20tcmFkaXVzKCgkcGFuZWwtYm9yZGVyLXJhZGl1cyAtIDEpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgPiAucGFuZWwtaGVhZGluZyArIC5wYW5lbC1jb2xsYXBzZSA+IC5saXN0LWdyb3VwIHtcbiAgICAubGlzdC1ncm91cC1pdGVtOmZpcnN0LWNoaWxkIHtcbiAgICAgIEBpbmNsdWRlIGJvcmRlci10b3AtcmFkaXVzKDApO1xuICAgIH1cbiAgfVxufVxuLy8gQ29sbGFwc2Ugc3BhY2UgYmV0d2VlbiB3aGVuIHRoZXJlJ3Mgbm8gYWRkaXRpb25hbCBjb250ZW50LlxuLnBhbmVsLWhlYWRpbmcgKyAubGlzdC1ncm91cCB7XG4gIC5saXN0LWdyb3VwLWl0ZW06Zmlyc3QtY2hpbGQge1xuICAgIGJvcmRlci10b3Atd2lkdGg6IDA7XG4gIH1cbn1cbi5saXN0LWdyb3VwICsgLnBhbmVsLWZvb3RlciB7XG4gIGJvcmRlci10b3Atd2lkdGg6IDA7XG59XG5cbi8vIFRhYmxlcyBpbiBwYW5lbHNcbi8vXG4vLyBQbGFjZSBhIG5vbi1ib3JkZXJlZCBgLnRhYmxlYCB3aXRoaW4gYSBwYW5lbCAobm90IHdpdGhpbiBhIGAucGFuZWwtYm9keWApIGFuZFxuLy8gd2F0Y2ggaXQgZ28gZnVsbCB3aWR0aC5cblxuLnBhbmVsIHtcbiAgPiAudGFibGUsXG4gID4gLnRhYmxlLXJlc3BvbnNpdmUgPiAudGFibGUsXG4gID4gLnBhbmVsLWNvbGxhcHNlID4gLnRhYmxlIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuXG4gICAgY2FwdGlvbiB7XG4gICAgICBwYWRkaW5nLWxlZnQ6ICRwYW5lbC1ib2R5LXBhZGRpbmc7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiAkcGFuZWwtYm9keS1wYWRkaW5nO1xuICAgIH1cbiAgfVxuICAvLyBBZGQgYm9yZGVyIHRvcCByYWRpdXMgZm9yIGZpcnN0IG9uZVxuICA+IC50YWJsZTpmaXJzdC1jaGlsZCxcbiAgPiAudGFibGUtcmVzcG9uc2l2ZTpmaXJzdC1jaGlsZCA+IC50YWJsZTpmaXJzdC1jaGlsZCB7XG4gICAgQGluY2x1ZGUgYm9yZGVyLXRvcC1yYWRpdXMoKCRwYW5lbC1ib3JkZXItcmFkaXVzIC0gMSkpO1xuXG4gICAgPiB0aGVhZDpmaXJzdC1jaGlsZCxcbiAgICA+IHRib2R5OmZpcnN0LWNoaWxkIHtcbiAgICAgID4gdHI6Zmlyc3QtY2hpbGQge1xuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAoJHBhbmVsLWJvcmRlci1yYWRpdXMgLSAxKTtcbiAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6ICgkcGFuZWwtYm9yZGVyLXJhZGl1cyAtIDEpO1xuXG4gICAgICAgIHRkOmZpcnN0LWNoaWxkLFxuICAgICAgICB0aDpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogKCRwYW5lbC1ib3JkZXItcmFkaXVzIC0gMSk7XG4gICAgICAgIH1cbiAgICAgICAgdGQ6bGFzdC1jaGlsZCxcbiAgICAgICAgdGg6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6ICgkcGFuZWwtYm9yZGVyLXJhZGl1cyAtIDEpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC8vIEFkZCBib3JkZXIgYm90dG9tIHJhZGl1cyBmb3IgbGFzdCBvbmVcbiAgPiAudGFibGU6bGFzdC1jaGlsZCxcbiAgPiAudGFibGUtcmVzcG9uc2l2ZTpsYXN0LWNoaWxkID4gLnRhYmxlOmxhc3QtY2hpbGQge1xuICAgIEBpbmNsdWRlIGJvcmRlci1ib3R0b20tcmFkaXVzKCgkcGFuZWwtYm9yZGVyLXJhZGl1cyAtIDEpKTtcblxuICAgID4gdGJvZHk6bGFzdC1jaGlsZCxcbiAgICA+IHRmb290Omxhc3QtY2hpbGQge1xuICAgICAgPiB0cjpsYXN0LWNoaWxkIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogKCRwYW5lbC1ib3JkZXItcmFkaXVzIC0gMSk7XG4gICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAoJHBhbmVsLWJvcmRlci1yYWRpdXMgLSAxKTtcblxuICAgICAgICB0ZDpmaXJzdC1jaGlsZCxcbiAgICAgICAgdGg6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6ICgkcGFuZWwtYm9yZGVyLXJhZGl1cyAtIDEpO1xuICAgICAgICB9XG4gICAgICAgIHRkOmxhc3QtY2hpbGQsXG4gICAgICAgIHRoOmxhc3QtY2hpbGQge1xuICAgICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAoJHBhbmVsLWJvcmRlci1yYWRpdXMgLSAxKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICA+IC5wYW5lbC1ib2R5ICsgLnRhYmxlLFxuICA+IC5wYW5lbC1ib2R5ICsgLnRhYmxlLXJlc3BvbnNpdmUsXG4gID4gLnRhYmxlICsgLnBhbmVsLWJvZHksXG4gID4gLnRhYmxlLXJlc3BvbnNpdmUgKyAucGFuZWwtYm9keSB7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICR0YWJsZS1ib3JkZXItY29sb3I7XG4gIH1cbiAgPiAudGFibGUgPiB0Ym9keTpmaXJzdC1jaGlsZCA+IHRyOmZpcnN0LWNoaWxkIHRoLFxuICA+IC50YWJsZSA+IHRib2R5OmZpcnN0LWNoaWxkID4gdHI6Zmlyc3QtY2hpbGQgdGQge1xuICAgIGJvcmRlci10b3A6IDA7XG4gIH1cbiAgPiAudGFibGUtYm9yZGVyZWQsXG4gID4gLnRhYmxlLXJlc3BvbnNpdmUgPiAudGFibGUtYm9yZGVyZWQge1xuICAgIGJvcmRlcjogMDtcbiAgICA+IHRoZWFkLFxuICAgID4gdGJvZHksXG4gICAgPiB0Zm9vdCB7XG4gICAgICA+IHRyIHtcbiAgICAgICAgPiB0aDpmaXJzdC1jaGlsZCxcbiAgICAgICAgPiB0ZDpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgYm9yZGVyLWxlZnQ6IDA7XG4gICAgICAgIH1cbiAgICAgICAgPiB0aDpsYXN0LWNoaWxkLFxuICAgICAgICA+IHRkOmxhc3QtY2hpbGQge1xuICAgICAgICAgIGJvcmRlci1yaWdodDogMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICA+IHRoZWFkLFxuICAgID4gdGJvZHkge1xuICAgICAgPiB0cjpmaXJzdC1jaGlsZCB7XG4gICAgICAgID4gdGQsXG4gICAgICAgID4gdGgge1xuICAgICAgICAgIGJvcmRlci1ib3R0b206IDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgPiB0Ym9keSxcbiAgICA+IHRmb290IHtcbiAgICAgID4gdHI6bGFzdC1jaGlsZCB7XG4gICAgICAgID4gdGQsXG4gICAgICAgID4gdGgge1xuICAgICAgICAgIGJvcmRlci1ib3R0b206IDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgPiAudGFibGUtcmVzcG9uc2l2ZSB7XG4gICAgYm9yZGVyOiAwO1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gIH1cbn1cblxuXG4vLyBDb2xsYXBzaWJsZSBwYW5lbHMgKGFrYSwgYWNjb3JkaW9uKVxuLy9cbi8vIFdyYXAgYSBzZXJpZXMgb2YgcGFuZWxzIGluIGAucGFuZWwtZ3JvdXBgIHRvIHR1cm4gdGhlbSBpbnRvIGFuIGFjY29yZGlvbiB3aXRoXG4vLyB0aGUgaGVscCBvZiBvdXIgY29sbGFwc2UgSmF2YVNjcmlwdCBwbHVnaW4uXG5cbi5wYW5lbC1ncm91cCB7XG4gIG1hcmdpbi1ib3R0b206ICRsaW5lLWhlaWdodC1jb21wdXRlZDtcblxuICAvLyBUaWdodGVuIHVwIG1hcmdpbiBzbyBpdCdzIG9ubHkgYmV0d2VlbiBwYW5lbHNcbiAgLnBhbmVsIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIGJvcmRlci1yYWRpdXM6ICRwYW5lbC1ib3JkZXItcmFkaXVzO1xuXG4gICAgKyAucGFuZWwge1xuICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIH1cbiAgfVxuXG4gIC5wYW5lbC1oZWFkaW5nIHtcbiAgICBib3JkZXItYm90dG9tOiAwO1xuXG4gICAgKyAucGFuZWwtY29sbGFwc2UgPiAucGFuZWwtYm9keSxcbiAgICArIC5wYW5lbC1jb2xsYXBzZSA+IC5saXN0LWdyb3VwIHtcbiAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAkcGFuZWwtaW5uZXItYm9yZGVyO1xuICAgIH1cbiAgfVxuXG4gIC5wYW5lbC1mb290ZXIge1xuICAgIGJvcmRlci10b3A6IDA7XG4gICAgKyAucGFuZWwtY29sbGFwc2UgLnBhbmVsLWJvZHkge1xuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRwYW5lbC1pbm5lci1ib3JkZXI7XG4gICAgfVxuICB9XG59XG5cblxuLy8gQ29udGV4dHVhbCB2YXJpYXRpb25zXG4ucGFuZWwtZGVmYXVsdCB7XG4gIEBpbmNsdWRlIHBhbmVsLXZhcmlhbnQoJHBhbmVsLWRlZmF1bHQtYm9yZGVyLCAkcGFuZWwtZGVmYXVsdC10ZXh0LCAkcGFuZWwtZGVmYXVsdC1oZWFkaW5nLWJnLCAkcGFuZWwtZGVmYXVsdC1ib3JkZXIpO1xufVxuLnBhbmVsLXByaW1hcnkge1xuICBAaW5jbHVkZSBwYW5lbC12YXJpYW50KCRwYW5lbC1wcmltYXJ5LWJvcmRlciwgJHBhbmVsLXByaW1hcnktdGV4dCwgJHBhbmVsLXByaW1hcnktaGVhZGluZy1iZywgJHBhbmVsLXByaW1hcnktYm9yZGVyKTtcbn1cbi5wYW5lbC1zdWNjZXNzIHtcbiAgQGluY2x1ZGUgcGFuZWwtdmFyaWFudCgkcGFuZWwtc3VjY2Vzcy1ib3JkZXIsICRwYW5lbC1zdWNjZXNzLXRleHQsICRwYW5lbC1zdWNjZXNzLWhlYWRpbmctYmcsICRwYW5lbC1zdWNjZXNzLWJvcmRlcik7XG59XG4ucGFuZWwtaW5mbyB7XG4gIEBpbmNsdWRlIHBhbmVsLXZhcmlhbnQoJHBhbmVsLWluZm8tYm9yZGVyLCAkcGFuZWwtaW5mby10ZXh0LCAkcGFuZWwtaW5mby1oZWFkaW5nLWJnLCAkcGFuZWwtaW5mby1ib3JkZXIpO1xufVxuLnBhbmVsLXdhcm5pbmcge1xuICBAaW5jbHVkZSBwYW5lbC12YXJpYW50KCRwYW5lbC13YXJuaW5nLWJvcmRlciwgJHBhbmVsLXdhcm5pbmctdGV4dCwgJHBhbmVsLXdhcm5pbmctaGVhZGluZy1iZywgJHBhbmVsLXdhcm5pbmctYm9yZGVyKTtcbn1cbi5wYW5lbC1kYW5nZXIge1xuICBAaW5jbHVkZSBwYW5lbC12YXJpYW50KCRwYW5lbC1kYW5nZXItYm9yZGVyLCAkcGFuZWwtZGFuZ2VyLXRleHQsICRwYW5lbC1kYW5nZXItaGVhZGluZy1iZywgJHBhbmVsLWRhbmdlci1ib3JkZXIpO1xufVxuIiwiLy9cbi8vIFdlbGxzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cbi8vIEJhc2UgY2xhc3Ncbi53ZWxsIHtcbiAgbWluLWhlaWdodDogMjBweDtcbiAgcGFkZGluZzogMTlweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHdlbGwtYmc7XG4gIGJvcmRlcjogMXB4IHNvbGlkICR3ZWxsLWJvcmRlcjtcbiAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXMtYmFzZTtcbiAgQGluY2x1ZGUgYm94LXNoYWRvdyhpbnNldCAwIDFweCAxcHggcmdiYSgwLDAsMCwuMDUpKTtcbiAgYmxvY2txdW90ZSB7XG4gICAgYm9yZGVyLWNvbG9yOiAjZGRkO1xuICAgIGJvcmRlci1jb2xvcjogcmdiYSgwLDAsMCwuMTUpO1xuICB9XG59XG5cbi8vIFNpemVzXG4ud2VsbC1sZyB7XG4gIHBhZGRpbmc6IDI0cHg7XG4gIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzLWxhcmdlO1xufVxuLndlbGwtc20ge1xuICBwYWRkaW5nOiA5cHg7XG4gIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzLXNtYWxsO1xufVxuIiwiLy8gRW1iZWRzIHJlc3BvbnNpdmVcbi8vXG4vLyBDcmVkaXQ6IE5pY29sYXMgR2FsbGFnaGVyIGFuZCBTVUlUIENTUy5cblxuLmVtYmVkLXJlc3BvbnNpdmUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDA7XG4gIHBhZGRpbmc6IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgLmVtYmVkLXJlc3BvbnNpdmUtaXRlbSxcbiAgaWZyYW1lLFxuICBlbWJlZCxcbiAgb2JqZWN0LFxuICB2aWRlbyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyOiAwO1xuICB9XG59XG5cbi8vIE1vZGlmaWVyIGNsYXNzIGZvciAxNjo5IGFzcGVjdCByYXRpb1xuLmVtYmVkLXJlc3BvbnNpdmUtMTZieTkge1xuICBwYWRkaW5nLWJvdHRvbTogNTYuMjUlO1xufVxuXG4vLyBNb2RpZmllciBjbGFzcyBmb3IgNDozIGFzcGVjdCByYXRpb1xuLmVtYmVkLXJlc3BvbnNpdmUtNGJ5MyB7XG4gIHBhZGRpbmctYm90dG9tOiA3NSU7XG59XG4iLCIvL1xuLy8gQ2xvc2UgaWNvbnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblxuLmNsb3NlIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBmb250LXNpemU6ICgkZm9udC1zaXplLWJhc2UgKiAxLjUpO1xuICBmb250LXdlaWdodDogJGNsb3NlLWZvbnQtd2VpZ2h0O1xuICBsaW5lLWhlaWdodDogMTtcbiAgY29sb3I6ICRjbG9zZS1jb2xvcjtcbiAgdGV4dC1zaGFkb3c6ICRjbG9zZS10ZXh0LXNoYWRvdztcbiAgQGluY2x1ZGUgb3BhY2l0eSguMik7XG5cbiAgJjpob3ZlcixcbiAgJjpmb2N1cyB7XG4gICAgY29sb3I6ICRjbG9zZS1jb2xvcjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIEBpbmNsdWRlIG9wYWNpdHkoLjUpO1xuICB9XG5cbiAgLy8gW2NvbnZlcnRlcl0gZXh0cmFjdGVkIGJ1dHRvbiYgdG8gYnV0dG9uLmNsb3NlXG59XG5cbi8vIEFkZGl0aW9uYWwgcHJvcGVydGllcyBmb3IgYnV0dG9uIHZlcnNpb25cbi8vIGlPUyByZXF1aXJlcyB0aGUgYnV0dG9uIGVsZW1lbnQgaW5zdGVhZCBvZiBhbiBhbmNob3IgdGFnLlxuLy8gSWYgeW91IHdhbnQgdGhlIGFuY2hvciB2ZXJzaW9uLCBpdCByZXF1aXJlcyBgaHJlZj1cIiNcImAuXG4vLyBTZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvRXZlbnRzL2NsaWNrI1NhZmFyaV9Nb2JpbGVcbmJ1dHRvbi5jbG9zZSB7XG4gIHBhZGRpbmc6IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMDtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xufVxuIiwiLy9cbi8vIE1vZGFsc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gLm1vZGFsLW9wZW4gICAgICAtIGJvZHkgY2xhc3MgZm9yIGtpbGxpbmcgdGhlIHNjcm9sbFxuLy8gLm1vZGFsICAgICAgICAgICAtIGNvbnRhaW5lciB0byBzY3JvbGwgd2l0aGluXG4vLyAubW9kYWwtZGlhbG9nICAgIC0gcG9zaXRpb25pbmcgc2hlbGwgZm9yIHRoZSBhY3R1YWwgbW9kYWxcbi8vIC5tb2RhbC1jb250ZW50ICAgLSBhY3R1YWwgbW9kYWwgdy8gYmcgYW5kIGNvcm5lcnMgYW5kIHNoaXRcblxuLy8gS2lsbCB0aGUgc2Nyb2xsIG9uIHRoZSBib2R5XG4ubW9kYWwtb3BlbiB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi8vIENvbnRhaW5lciB0aGF0IHRoZSBtb2RhbCBzY3JvbGxzIHdpdGhpblxuLm1vZGFsIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6ICR6aW5kZXgtbW9kYWw7XG4gIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcblxuICAvLyBQcmV2ZW50IENocm9tZSBvbiBXaW5kb3dzIGZyb20gYWRkaW5nIGEgZm9jdXMgb3V0bGluZS4gRm9yIGRldGFpbHMsIHNlZVxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvcHVsbC8xMDk1MS5cbiAgb3V0bGluZTogMDtcblxuICAvLyBXaGVuIGZhZGluZyBpbiB0aGUgbW9kYWwsIGFuaW1hdGUgaXQgdG8gc2xpZGUgZG93blxuICAmLmZhZGUgLm1vZGFsLWRpYWxvZyB7XG4gICAgQGluY2x1ZGUgdHJhbnNsYXRlKDAsIC0yNSUpO1xuICAgIEBpbmNsdWRlIHRyYW5zaXRpb24tdHJhbnNmb3JtKDAuM3MgZWFzZS1vdXQpO1xuICB9XG4gICYuaW4gLm1vZGFsLWRpYWxvZyB7IEBpbmNsdWRlIHRyYW5zbGF0ZSgwLCAwKSB9XG59XG4ubW9kYWwtb3BlbiAubW9kYWwge1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbi8vIFNoZWxsIGRpdiB0byBwb3NpdGlvbiB0aGUgbW9kYWwgd2l0aCBib3R0b20gcGFkZGluZ1xuLm1vZGFsLWRpYWxvZyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IGF1dG87XG4gIG1hcmdpbjogMTBweDtcbn1cblxuLy8gQWN0dWFsIG1vZGFsXG4ubW9kYWwtY29udGVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJG1vZGFsLWNvbnRlbnQtYmc7XG4gIGJvcmRlcjogMXB4IHNvbGlkICRtb2RhbC1jb250ZW50LWZhbGxiYWNrLWJvcmRlci1jb2xvcjsgLy9vbGQgYnJvd3NlcnMgZmFsbGJhY2sgKGllOCBldGMpXG4gIGJvcmRlcjogMXB4IHNvbGlkICRtb2RhbC1jb250ZW50LWJvcmRlci1jb2xvcjtcbiAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXMtbGFyZ2U7XG4gIEBpbmNsdWRlIGJveC1zaGFkb3coMCAzcHggOXB4IHJnYmEoMCwwLDAsLjUpKTtcbiAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcbiAgLy8gUmVtb3ZlIGZvY3VzIG91dGxpbmUgZnJvbSBvcGVuZWQgbW9kYWxcbiAgb3V0bGluZTogMDtcbn1cblxuLy8gTW9kYWwgYmFja2dyb3VuZFxuLm1vZGFsLWJhY2tkcm9wIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6ICR6aW5kZXgtbW9kYWwtYmFja2dyb3VuZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogJG1vZGFsLWJhY2tkcm9wLWJnO1xuICAvLyBGYWRlIGZvciBiYWNrZHJvcFxuICAmLmZhZGUgeyBAaW5jbHVkZSBvcGFjaXR5KDApOyB9XG4gICYuaW4geyBAaW5jbHVkZSBvcGFjaXR5KCRtb2RhbC1iYWNrZHJvcC1vcGFjaXR5KTsgfVxufVxuXG4vLyBNb2RhbCBoZWFkZXJcbi8vIFRvcCBzZWN0aW9uIG9mIHRoZSBtb2RhbCB3LyB0aXRsZSBhbmQgZGlzbWlzc1xuLm1vZGFsLWhlYWRlciB7XG4gIHBhZGRpbmc6ICRtb2RhbC10aXRsZS1wYWRkaW5nO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJG1vZGFsLWhlYWRlci1ib3JkZXItY29sb3I7XG4gIEBpbmNsdWRlIGNsZWFyZml4O1xufVxuLy8gQ2xvc2UgaWNvblxuLm1vZGFsLWhlYWRlciAuY2xvc2Uge1xuICBtYXJnaW4tdG9wOiAtMnB4O1xufVxuXG4vLyBUaXRsZSB0ZXh0IHdpdGhpbiBoZWFkZXJcbi5tb2RhbC10aXRsZSB7XG4gIG1hcmdpbjogMDtcbiAgbGluZS1oZWlnaHQ6ICRtb2RhbC10aXRsZS1saW5lLWhlaWdodDtcbn1cblxuLy8gTW9kYWwgYm9keVxuLy8gV2hlcmUgYWxsIG1vZGFsIGNvbnRlbnQgcmVzaWRlcyAoc2libGluZyBvZiAubW9kYWwtaGVhZGVyIGFuZCAubW9kYWwtZm9vdGVyKVxuLm1vZGFsLWJvZHkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6ICRtb2RhbC1pbm5lci1wYWRkaW5nO1xufVxuXG4vLyBGb290ZXIgKGZvciBhY3Rpb25zKVxuLm1vZGFsLWZvb3RlciB7XG4gIHBhZGRpbmc6ICRtb2RhbC1pbm5lci1wYWRkaW5nO1xuICB0ZXh0LWFsaWduOiByaWdodDsgLy8gcmlnaHQgYWxpZ24gYnV0dG9uc1xuICBib3JkZXItdG9wOiAxcHggc29saWQgJG1vZGFsLWZvb3Rlci1ib3JkZXItY29sb3I7XG4gIEBpbmNsdWRlIGNsZWFyZml4OyAvLyBjbGVhciBpdCBpbiBjYXNlIGZvbGtzIHVzZSAucHVsbC0qIGNsYXNzZXMgb24gYnV0dG9uc1xuXG4gIC8vIFByb3Blcmx5IHNwYWNlIG91dCBidXR0b25zXG4gIC5idG4gKyAuYnRuIHtcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDA7IC8vIGFjY291bnQgZm9yIGlucHV0W3R5cGU9XCJzdWJtaXRcIl0gd2hpY2ggZ2V0cyB0aGUgYm90dG9tIG1hcmdpbiBsaWtlIGFsbCBvdGhlciBpbnB1dHNcbiAgfVxuICAvLyBidXQgb3ZlcnJpZGUgdGhhdCBmb3IgYnV0dG9uIGdyb3Vwc1xuICAuYnRuLWdyb3VwIC5idG4gKyAuYnRuIHtcbiAgICBtYXJnaW4tbGVmdDogLTFweDtcbiAgfVxuICAvLyBhbmQgb3ZlcnJpZGUgaXQgZm9yIGJsb2NrIGJ1dHRvbnMgYXMgd2VsbFxuICAuYnRuLWJsb2NrICsgLmJ0bi1ibG9jayB7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gIH1cbn1cblxuLy8gTWVhc3VyZSBzY3JvbGxiYXIgd2lkdGggZm9yIHBhZGRpbmcgYm9keSBkdXJpbmcgbW9kYWwgc2hvdy9oaWRlXG4ubW9kYWwtc2Nyb2xsYmFyLW1lYXN1cmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTk5OTlweDtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbn1cblxuLy8gU2NhbGUgdXAgdGhlIG1vZGFsXG5AbWVkaWEgKG1pbi13aWR0aDogJHNjcmVlbi1zbS1taW4pIHtcbiAgLy8gQXV0b21hdGljYWxseSBzZXQgbW9kYWwncyB3aWR0aCBmb3IgbGFyZ2VyIHZpZXdwb3J0c1xuICAubW9kYWwtZGlhbG9nIHtcbiAgICB3aWR0aDogJG1vZGFsLW1kO1xuICAgIG1hcmdpbjogMzBweCBhdXRvO1xuICB9XG4gIC5tb2RhbC1jb250ZW50IHtcbiAgICBAaW5jbHVkZSBib3gtc2hhZG93KDAgNXB4IDE1cHggcmdiYSgwLDAsMCwuNSkpO1xuICB9XG5cbiAgLy8gTW9kYWwgc2l6ZXNcbiAgLm1vZGFsLXNtIHsgd2lkdGg6ICRtb2RhbC1zbTsgfVxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogJHNjcmVlbi1tZC1taW4pIHtcbiAgLm1vZGFsLWxnIHsgd2lkdGg6ICRtb2RhbC1sZzsgfVxufVxuIiwiLy9cbi8vIFRvb2x0aXBzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cbi8vIEJhc2UgY2xhc3Ncbi50b29sdGlwIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAkemluZGV4LXRvb2x0aXA7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICAvLyBPdXIgcGFyZW50IGVsZW1lbnQgY2FuIGJlIGFyYml0cmFyeSBzaW5jZSB0b29sdGlwcyBhcmUgYnkgZGVmYXVsdCBpbnNlcnRlZCBhcyBhIHNpYmxpbmcgb2YgdGhlaXIgdGFyZ2V0IGVsZW1lbnQuXG4gIC8vIFNvIHJlc2V0IG91ciBmb250IGFuZCB0ZXh0IHByb3BlcnRpZXMgdG8gYXZvaWQgaW5oZXJpdGluZyB3ZWlyZCB2YWx1ZXMuXG4gIEBpbmNsdWRlIHJlc2V0LXRleHQ7XG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1zbWFsbDtcblxuICBAaW5jbHVkZSBvcGFjaXR5KDApO1xuXG4gICYuaW4gICAgIHsgQGluY2x1ZGUgb3BhY2l0eSgkdG9vbHRpcC1vcGFjaXR5KTsgfVxuICAmLnRvcCAgICB7IG1hcmdpbi10b3A6ICAtM3B4OyBwYWRkaW5nOiAkdG9vbHRpcC1hcnJvdy13aWR0aCAwOyB9XG4gICYucmlnaHQgIHsgbWFyZ2luLWxlZnQ6ICAzcHg7IHBhZGRpbmc6IDAgJHRvb2x0aXAtYXJyb3ctd2lkdGg7IH1cbiAgJi5ib3R0b20geyBtYXJnaW4tdG9wOiAgIDNweDsgcGFkZGluZzogJHRvb2x0aXAtYXJyb3ctd2lkdGggMDsgfVxuICAmLmxlZnQgICB7IG1hcmdpbi1sZWZ0OiAtM3B4OyBwYWRkaW5nOiAwICR0b29sdGlwLWFycm93LXdpZHRoOyB9XG59XG5cbi8vIFdyYXBwZXIgZm9yIHRoZSB0b29sdGlwIGNvbnRlbnRcbi50b29sdGlwLWlubmVyIHtcbiAgbWF4LXdpZHRoOiAkdG9vbHRpcC1tYXgtd2lkdGg7XG4gIHBhZGRpbmc6IDNweCA4cHg7XG4gIGNvbG9yOiAkdG9vbHRpcC1jb2xvcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkdG9vbHRpcC1iZztcbiAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXMtYmFzZTtcbn1cblxuLy8gQXJyb3dzXG4udG9vbHRpcC1hcnJvdyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbn1cbi8vIE5vdGU6IERlcHJlY2F0ZWQgLnRvcC1sZWZ0LCAudG9wLXJpZ2h0LCAuYm90dG9tLWxlZnQsIGFuZCAuYm90dG9tLXJpZ2h0IGFzIG9mIHYzLjMuMVxuLnRvb2x0aXAge1xuICAmLnRvcCAudG9vbHRpcC1hcnJvdyB7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDUwJTtcbiAgICBtYXJnaW4tbGVmdDogLSR0b29sdGlwLWFycm93LXdpZHRoO1xuICAgIGJvcmRlci13aWR0aDogJHRvb2x0aXAtYXJyb3ctd2lkdGggJHRvb2x0aXAtYXJyb3ctd2lkdGggMDtcbiAgICBib3JkZXItdG9wLWNvbG9yOiAkdG9vbHRpcC1hcnJvdy1jb2xvcjtcbiAgfVxuICAmLnRvcC1sZWZ0IC50b29sdGlwLWFycm93IHtcbiAgICBib3R0b206IDA7XG4gICAgcmlnaHQ6ICR0b29sdGlwLWFycm93LXdpZHRoO1xuICAgIG1hcmdpbi1ib3R0b206IC0kdG9vbHRpcC1hcnJvdy13aWR0aDtcbiAgICBib3JkZXItd2lkdGg6ICR0b29sdGlwLWFycm93LXdpZHRoICR0b29sdGlwLWFycm93LXdpZHRoIDA7XG4gICAgYm9yZGVyLXRvcC1jb2xvcjogJHRvb2x0aXAtYXJyb3ctY29sb3I7XG4gIH1cbiAgJi50b3AtcmlnaHQgLnRvb2x0aXAtYXJyb3cge1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAkdG9vbHRpcC1hcnJvdy13aWR0aDtcbiAgICBtYXJnaW4tYm90dG9tOiAtJHRvb2x0aXAtYXJyb3ctd2lkdGg7XG4gICAgYm9yZGVyLXdpZHRoOiAkdG9vbHRpcC1hcnJvdy13aWR0aCAkdG9vbHRpcC1hcnJvdy13aWR0aCAwO1xuICAgIGJvcmRlci10b3AtY29sb3I6ICR0b29sdGlwLWFycm93LWNvbG9yO1xuICB9XG4gICYucmlnaHQgLnRvb2x0aXAtYXJyb3cge1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDA7XG4gICAgbWFyZ2luLXRvcDogLSR0b29sdGlwLWFycm93LXdpZHRoO1xuICAgIGJvcmRlci13aWR0aDogJHRvb2x0aXAtYXJyb3ctd2lkdGggJHRvb2x0aXAtYXJyb3ctd2lkdGggJHRvb2x0aXAtYXJyb3ctd2lkdGggMDtcbiAgICBib3JkZXItcmlnaHQtY29sb3I6ICR0b29sdGlwLWFycm93LWNvbG9yO1xuICB9XG4gICYubGVmdCAudG9vbHRpcC1hcnJvdyB7XG4gICAgdG9wOiA1MCU7XG4gICAgcmlnaHQ6IDA7XG4gICAgbWFyZ2luLXRvcDogLSR0b29sdGlwLWFycm93LXdpZHRoO1xuICAgIGJvcmRlci13aWR0aDogJHRvb2x0aXAtYXJyb3ctd2lkdGggMCAkdG9vbHRpcC1hcnJvdy13aWR0aCAkdG9vbHRpcC1hcnJvdy13aWR0aDtcbiAgICBib3JkZXItbGVmdC1jb2xvcjogJHRvb2x0aXAtYXJyb3ctY29sb3I7XG4gIH1cbiAgJi5ib3R0b20gLnRvb2x0aXAtYXJyb3cge1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiA1MCU7XG4gICAgbWFyZ2luLWxlZnQ6IC0kdG9vbHRpcC1hcnJvdy13aWR0aDtcbiAgICBib3JkZXItd2lkdGg6IDAgJHRvb2x0aXAtYXJyb3ctd2lkdGggJHRvb2x0aXAtYXJyb3ctd2lkdGg7XG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogJHRvb2x0aXAtYXJyb3ctY29sb3I7XG4gIH1cbiAgJi5ib3R0b20tbGVmdCAudG9vbHRpcC1hcnJvdyB7XG4gICAgdG9wOiAwO1xuICAgIHJpZ2h0OiAkdG9vbHRpcC1hcnJvdy13aWR0aDtcbiAgICBtYXJnaW4tdG9wOiAtJHRvb2x0aXAtYXJyb3ctd2lkdGg7XG4gICAgYm9yZGVyLXdpZHRoOiAwICR0b29sdGlwLWFycm93LXdpZHRoICR0b29sdGlwLWFycm93LXdpZHRoO1xuICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICR0b29sdGlwLWFycm93LWNvbG9yO1xuICB9XG4gICYuYm90dG9tLXJpZ2h0IC50b29sdGlwLWFycm93IHtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogJHRvb2x0aXAtYXJyb3ctd2lkdGg7XG4gICAgbWFyZ2luLXRvcDogLSR0b29sdGlwLWFycm93LXdpZHRoO1xuICAgIGJvcmRlci13aWR0aDogMCAkdG9vbHRpcC1hcnJvdy13aWR0aCAkdG9vbHRpcC1hcnJvdy13aWR0aDtcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiAkdG9vbHRpcC1hcnJvdy1jb2xvcjtcbiAgfVxufVxuIiwiLy9cbi8vIFBvcG92ZXJzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cbi5wb3BvdmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6ICR6aW5kZXgtcG9wb3ZlcjtcbiAgZGlzcGxheTogbm9uZTtcbiAgbWF4LXdpZHRoOiAkcG9wb3Zlci1tYXgtd2lkdGg7XG4gIHBhZGRpbmc6IDFweDtcbiAgLy8gT3VyIHBhcmVudCBlbGVtZW50IGNhbiBiZSBhcmJpdHJhcnkgc2luY2UgcG9wb3ZlcnMgYXJlIGJ5IGRlZmF1bHQgaW5zZXJ0ZWQgYXMgYSBzaWJsaW5nIG9mIHRoZWlyIHRhcmdldCBlbGVtZW50LlxuICAvLyBTbyByZXNldCBvdXIgZm9udCBhbmQgdGV4dCBwcm9wZXJ0aWVzIHRvIGF2b2lkIGluaGVyaXRpbmcgd2VpcmQgdmFsdWVzLlxuICBAaW5jbHVkZSByZXNldC10ZXh0O1xuICBmb250LXNpemU6ICRmb250LXNpemUtYmFzZTtcblxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkcG9wb3Zlci1iZztcbiAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcbiAgYm9yZGVyOiAxcHggc29saWQgJHBvcG92ZXItZmFsbGJhY2stYm9yZGVyLWNvbG9yO1xuICBib3JkZXI6IDFweCBzb2xpZCAkcG9wb3Zlci1ib3JkZXItY29sb3I7XG4gIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzLWxhcmdlO1xuICBAaW5jbHVkZSBib3gtc2hhZG93KDAgNXB4IDEwcHggcmdiYSgwLDAsMCwuMikpO1xuXG4gIC8vIE9mZnNldCB0aGUgcG9wb3ZlciB0byBhY2NvdW50IGZvciB0aGUgcG9wb3ZlciBhcnJvd1xuICAmLnRvcCAgICAgeyBtYXJnaW4tdG9wOiAtJHBvcG92ZXItYXJyb3ctd2lkdGg7IH1cbiAgJi5yaWdodCAgIHsgbWFyZ2luLWxlZnQ6ICRwb3BvdmVyLWFycm93LXdpZHRoOyB9XG4gICYuYm90dG9tICB7IG1hcmdpbi10b3A6ICRwb3BvdmVyLWFycm93LXdpZHRoOyB9XG4gICYubGVmdCAgICB7IG1hcmdpbi1sZWZ0OiAtJHBvcG92ZXItYXJyb3ctd2lkdGg7IH1cbn1cblxuLnBvcG92ZXItdGl0bGUge1xuICBtYXJnaW46IDA7IC8vIHJlc2V0IGhlYWRpbmcgbWFyZ2luXG4gIHBhZGRpbmc6IDhweCAxNHB4O1xuICBmb250LXNpemU6ICRmb250LXNpemUtYmFzZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHBvcG92ZXItdGl0bGUtYmc7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBkYXJrZW4oJHBvcG92ZXItdGl0bGUtYmcsIDUlKTtcbiAgYm9yZGVyLXJhZGl1czogKCRib3JkZXItcmFkaXVzLWxhcmdlIC0gMSkgKCRib3JkZXItcmFkaXVzLWxhcmdlIC0gMSkgMCAwO1xufVxuXG4ucG9wb3Zlci1jb250ZW50IHtcbiAgcGFkZGluZzogOXB4IDE0cHg7XG59XG5cbi8vIEFycm93c1xuLy9cbi8vIC5hcnJvdyBpcyBvdXRlciwgLmFycm93OmFmdGVyIGlzIGlubmVyXG5cbi5wb3BvdmVyID4gLmFycm93IHtcbiAgJixcbiAgJjphZnRlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAwO1xuICAgIGhlaWdodDogMDtcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIH1cbn1cbi5wb3BvdmVyID4gLmFycm93IHtcbiAgYm9yZGVyLXdpZHRoOiAkcG9wb3Zlci1hcnJvdy1vdXRlci13aWR0aDtcbn1cbi5wb3BvdmVyID4gLmFycm93OmFmdGVyIHtcbiAgYm9yZGVyLXdpZHRoOiAkcG9wb3Zlci1hcnJvdy13aWR0aDtcbiAgY29udGVudDogXCJcIjtcbn1cblxuLnBvcG92ZXIge1xuICAmLnRvcCA+IC5hcnJvdyB7XG4gICAgbGVmdDogNTAlO1xuICAgIG1hcmdpbi1sZWZ0OiAtJHBvcG92ZXItYXJyb3ctb3V0ZXItd2lkdGg7XG4gICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMDtcbiAgICBib3JkZXItdG9wLWNvbG9yOiAkcG9wb3Zlci1hcnJvdy1vdXRlci1mYWxsYmFjay1jb2xvcjsgLy8gSUU4IGZhbGxiYWNrXG4gICAgYm9yZGVyLXRvcC1jb2xvcjogJHBvcG92ZXItYXJyb3ctb3V0ZXItY29sb3I7XG4gICAgYm90dG9tOiAtJHBvcG92ZXItYXJyb3ctb3V0ZXItd2lkdGg7XG4gICAgJjphZnRlciB7XG4gICAgICBjb250ZW50OiBcIiBcIjtcbiAgICAgIGJvdHRvbTogMXB4O1xuICAgICAgbWFyZ2luLWxlZnQ6IC0kcG9wb3Zlci1hcnJvdy13aWR0aDtcbiAgICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDA7XG4gICAgICBib3JkZXItdG9wLWNvbG9yOiAkcG9wb3Zlci1hcnJvdy1jb2xvcjtcbiAgICB9XG4gIH1cbiAgJi5yaWdodCA+IC5hcnJvdyB7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogLSRwb3BvdmVyLWFycm93LW91dGVyLXdpZHRoO1xuICAgIG1hcmdpbi10b3A6IC0kcG9wb3Zlci1hcnJvdy1vdXRlci13aWR0aDtcbiAgICBib3JkZXItbGVmdC13aWR0aDogMDtcbiAgICBib3JkZXItcmlnaHQtY29sb3I6ICRwb3BvdmVyLWFycm93LW91dGVyLWZhbGxiYWNrLWNvbG9yOyAvLyBJRTggZmFsbGJhY2tcbiAgICBib3JkZXItcmlnaHQtY29sb3I6ICRwb3BvdmVyLWFycm93LW91dGVyLWNvbG9yO1xuICAgICY6YWZ0ZXIge1xuICAgICAgY29udGVudDogXCIgXCI7XG4gICAgICBsZWZ0OiAxcHg7XG4gICAgICBib3R0b206IC0kcG9wb3Zlci1hcnJvdy13aWR0aDtcbiAgICAgIGJvcmRlci1sZWZ0LXdpZHRoOiAwO1xuICAgICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiAkcG9wb3Zlci1hcnJvdy1jb2xvcjtcbiAgICB9XG4gIH1cbiAgJi5ib3R0b20gPiAuYXJyb3cge1xuICAgIGxlZnQ6IDUwJTtcbiAgICBtYXJnaW4tbGVmdDogLSRwb3BvdmVyLWFycm93LW91dGVyLXdpZHRoO1xuICAgIGJvcmRlci10b3Atd2lkdGg6IDA7XG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogJHBvcG92ZXItYXJyb3ctb3V0ZXItZmFsbGJhY2stY29sb3I7IC8vIElFOCBmYWxsYmFja1xuICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICRwb3BvdmVyLWFycm93LW91dGVyLWNvbG9yO1xuICAgIHRvcDogLSRwb3BvdmVyLWFycm93LW91dGVyLXdpZHRoO1xuICAgICY6YWZ0ZXIge1xuICAgICAgY29udGVudDogXCIgXCI7XG4gICAgICB0b3A6IDFweDtcbiAgICAgIG1hcmdpbi1sZWZ0OiAtJHBvcG92ZXItYXJyb3ctd2lkdGg7XG4gICAgICBib3JkZXItdG9wLXdpZHRoOiAwO1xuICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogJHBvcG92ZXItYXJyb3ctY29sb3I7XG4gICAgfVxuICB9XG5cbiAgJi5sZWZ0ID4gLmFycm93IHtcbiAgICB0b3A6IDUwJTtcbiAgICByaWdodDogLSRwb3BvdmVyLWFycm93LW91dGVyLXdpZHRoO1xuICAgIG1hcmdpbi10b3A6IC0kcG9wb3Zlci1hcnJvdy1vdXRlci13aWR0aDtcbiAgICBib3JkZXItcmlnaHQtd2lkdGg6IDA7XG4gICAgYm9yZGVyLWxlZnQtY29sb3I6ICRwb3BvdmVyLWFycm93LW91dGVyLWZhbGxiYWNrLWNvbG9yOyAvLyBJRTggZmFsbGJhY2tcbiAgICBib3JkZXItbGVmdC1jb2xvcjogJHBvcG92ZXItYXJyb3ctb3V0ZXItY29sb3I7XG4gICAgJjphZnRlciB7XG4gICAgICBjb250ZW50OiBcIiBcIjtcbiAgICAgIHJpZ2h0OiAxcHg7XG4gICAgICBib3JkZXItcmlnaHQtd2lkdGg6IDA7XG4gICAgICBib3JkZXItbGVmdC1jb2xvcjogJHBvcG92ZXItYXJyb3ctY29sb3I7XG4gICAgICBib3R0b206IC0kcG9wb3Zlci1hcnJvdy13aWR0aDtcbiAgICB9XG4gIH1cbn1cbiIsIi8vXG4vLyBDYXJvdXNlbFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXG4vLyBXcmFwcGVyIGZvciB0aGUgc2xpZGUgY29udGFpbmVyIGFuZCBpbmRpY2F0b3JzXG4uY2Fyb3VzZWwge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5jYXJvdXNlbC1pbm5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2lkdGg6IDEwMCU7XG5cbiAgPiAuaXRlbSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgQGluY2x1ZGUgdHJhbnNpdGlvbiguNnMgZWFzZS1pbi1vdXQgbGVmdCk7XG5cbiAgICAvLyBBY2NvdW50IGZvciBqYW5raXR1ZGUgb24gaW1hZ2VzXG4gICAgPiBpbWcsXG4gICAgPiBhID4gaW1nIHtcbiAgICAgIEBpbmNsdWRlIGltZy1yZXNwb25zaXZlO1xuICAgICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgfVxuXG4gICAgLy8gV2ViS2l0IENTUzMgdHJhbnNmb3JtcyBmb3Igc3VwcG9ydGVkIGRldmljZXNcbiAgICBAbWVkaWEgYWxsIGFuZCAodHJhbnNmb3JtLTNkKSwgKC13ZWJraXQtdHJhbnNmb3JtLTNkKSB7XG4gICAgICBAaW5jbHVkZSB0cmFuc2l0aW9uLXRyYW5zZm9ybSgwLjZzIGVhc2UtaW4tb3V0KTtcbiAgICAgIEBpbmNsdWRlIGJhY2tmYWNlLXZpc2liaWxpdHkoaGlkZGVuKTtcbiAgICAgIEBpbmNsdWRlIHBlcnNwZWN0aXZlKDEwMDBweCk7XG5cbiAgICAgICYubmV4dCxcbiAgICAgICYuYWN0aXZlLnJpZ2h0IHtcbiAgICAgICAgQGluY2x1ZGUgdHJhbnNsYXRlM2QoMTAwJSwgMCwgMCk7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICB9XG4gICAgICAmLnByZXYsXG4gICAgICAmLmFjdGl2ZS5sZWZ0IHtcbiAgICAgICAgQGluY2x1ZGUgdHJhbnNsYXRlM2QoLTEwMCUsIDAsIDApO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgfVxuICAgICAgJi5uZXh0LmxlZnQsXG4gICAgICAmLnByZXYucmlnaHQsXG4gICAgICAmLmFjdGl2ZSB7XG4gICAgICAgIEBpbmNsdWRlIHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gID4gLmFjdGl2ZSxcbiAgPiAubmV4dCxcbiAgPiAucHJldiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cblxuICA+IC5hY3RpdmUge1xuICAgIGxlZnQ6IDA7XG4gIH1cblxuICA+IC5uZXh0LFxuICA+IC5wcmV2IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgPiAubmV4dCB7XG4gICAgbGVmdDogMTAwJTtcbiAgfVxuICA+IC5wcmV2IHtcbiAgICBsZWZ0OiAtMTAwJTtcbiAgfVxuICA+IC5uZXh0LmxlZnQsXG4gID4gLnByZXYucmlnaHQge1xuICAgIGxlZnQ6IDA7XG4gIH1cblxuICA+IC5hY3RpdmUubGVmdCB7XG4gICAgbGVmdDogLTEwMCU7XG4gIH1cbiAgPiAuYWN0aXZlLnJpZ2h0IHtcbiAgICBsZWZ0OiAxMDAlO1xuICB9XG5cbn1cblxuLy8gTGVmdC9yaWdodCBjb250cm9scyBmb3IgbmF2XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLmNhcm91c2VsLWNvbnRyb2wge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICB3aWR0aDogJGNhcm91c2VsLWNvbnRyb2wtd2lkdGg7XG4gIEBpbmNsdWRlIG9wYWNpdHkoJGNhcm91c2VsLWNvbnRyb2wtb3BhY2l0eSk7XG4gIGZvbnQtc2l6ZTogJGNhcm91c2VsLWNvbnRyb2wtZm9udC1zaXplO1xuICBjb2xvcjogJGNhcm91c2VsLWNvbnRyb2wtY29sb3I7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1zaGFkb3c6ICRjYXJvdXNlbC10ZXh0LXNoYWRvdztcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTsgLy8gRml4IElFOSBjbGljay10aHJ1IGJ1Z1xuICAvLyBXZSBjYW4ndCBoYXZlIHRoaXMgdHJhbnNpdGlvbiBoZXJlIGJlY2F1c2UgV2ViS2l0IGNhbmNlbHMgdGhlIGNhcm91c2VsXG4gIC8vIGFuaW1hdGlvbiBpZiB5b3UgdHJpcCB0aGlzIHdoaWxlIGluIHRoZSBtaWRkbGUgb2YgYW5vdGhlciBhbmltYXRpb24uXG5cbiAgLy8gU2V0IGdyYWRpZW50cyBmb3IgYmFja2dyb3VuZHNcbiAgJi5sZWZ0IHtcbiAgICBAaW5jbHVkZSBncmFkaWVudC1ob3Jpem9udGFsKCRzdGFydC1jb2xvcjogcmdiYSgwLDAsMCwuNSksICRlbmQtY29sb3I6IHJnYmEoMCwwLDAsLjAwMDEpKTtcbiAgfVxuICAmLnJpZ2h0IHtcbiAgICBsZWZ0OiBhdXRvO1xuICAgIHJpZ2h0OiAwO1xuICAgIEBpbmNsdWRlIGdyYWRpZW50LWhvcml6b250YWwoJHN0YXJ0LWNvbG9yOiByZ2JhKDAsMCwwLC4wMDAxKSwgJGVuZC1jb2xvcjogcmdiYSgwLDAsMCwuNSkpO1xuICB9XG5cbiAgLy8gSG92ZXIvZm9jdXMgc3RhdGVcbiAgJjpob3ZlcixcbiAgJjpmb2N1cyB7XG4gICAgb3V0bGluZTogMDtcbiAgICBjb2xvcjogJGNhcm91c2VsLWNvbnRyb2wtY29sb3I7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIEBpbmNsdWRlIG9wYWNpdHkoLjkpO1xuICB9XG5cbiAgLy8gVG9nZ2xlc1xuICAuaWNvbi1wcmV2LFxuICAuaWNvbi1uZXh0LFxuICAuZ2x5cGhpY29uLWNoZXZyb24tbGVmdCxcbiAgLmdseXBoaWNvbi1jaGV2cm9uLXJpZ2h0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbWFyZ2luLXRvcDogLTEwcHg7XG4gICAgei1pbmRleDogNTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIH1cbiAgLmljb24tcHJldixcbiAgLmdseXBoaWNvbi1jaGV2cm9uLWxlZnQge1xuICAgIGxlZnQ6IDUwJTtcbiAgICBtYXJnaW4tbGVmdDogLTEwcHg7XG4gIH1cbiAgLmljb24tbmV4dCxcbiAgLmdseXBoaWNvbi1jaGV2cm9uLXJpZ2h0IHtcbiAgICByaWdodDogNTAlO1xuICAgIG1hcmdpbi1yaWdodDogLTEwcHg7XG4gIH1cbiAgLmljb24tcHJldixcbiAgLmljb24tbmV4dCB7XG4gICAgd2lkdGg6ICAyMHB4O1xuICAgIGhlaWdodDogMjBweDtcbiAgICBsaW5lLWhlaWdodDogMTtcbiAgICBmb250LWZhbWlseTogc2VyaWY7XG4gIH1cblxuXG4gIC5pY29uLXByZXYge1xuICAgICY6YmVmb3JlIHtcbiAgICAgIGNvbnRlbnQ6ICdcXDIwMzknOy8vIFNJTkdMRSBMRUZULVBPSU5USU5HIEFOR0xFIFFVT1RBVElPTiBNQVJLIChVKzIwMzkpXG4gICAgfVxuICB9XG4gIC5pY29uLW5leHQge1xuICAgICY6YmVmb3JlIHtcbiAgICAgIGNvbnRlbnQ6ICdcXDIwM2EnOy8vIFNJTkdMRSBSSUdIVC1QT0lOVElORyBBTkdMRSBRVU9UQVRJT04gTUFSSyAoVSsyMDNBKVxuICAgIH1cbiAgfVxufVxuXG4vLyBPcHRpb25hbCBpbmRpY2F0b3IgcGlwc1xuLy9cbi8vIEFkZCBhbiB1bm9yZGVyZWQgbGlzdCB3aXRoIHRoZSBmb2xsb3dpbmcgY2xhc3MgYW5kIGFkZCBhIGxpc3QgaXRlbSBmb3IgZWFjaFxuLy8gc2xpZGUgeW91ciBjYXJvdXNlbCBob2xkcy5cblxuLmNhcm91c2VsLWluZGljYXRvcnMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMTBweDtcbiAgbGVmdDogNTAlO1xuICB6LWluZGV4OiAxNTtcbiAgd2lkdGg6IDYwJTtcbiAgbWFyZ2luLWxlZnQ6IC0zMCU7XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gIGxpIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6ICAxMHB4O1xuICAgIGhlaWdodDogMTBweDtcbiAgICBtYXJnaW46IDFweDtcbiAgICB0ZXh0LWluZGVudDogLTk5OXB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICRjYXJvdXNlbC1pbmRpY2F0b3ItYm9yZGVyLWNvbG9yO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgLy8gSUU4LTkgaGFjayBmb3IgZXZlbnQgaGFuZGxpbmdcbiAgICAvL1xuICAgIC8vIEludGVybmV0IEV4cGxvcmVyIDgtOSBkb2VzIG5vdCBzdXBwb3J0IGNsaWNrcyBvbiBlbGVtZW50cyB3aXRob3V0IGEgc2V0XG4gICAgLy8gYGJhY2tncm91bmQtY29sb3JgLiBXZSBjYW5ub3QgdXNlIGBmaWx0ZXJgIHNpbmNlIHRoYXQncyBub3Qgdmlld2VkIGFzIGFcbiAgICAvLyBiYWNrZ3JvdW5kIGNvbG9yIGJ5IHRoZSBicm93c2VyLiBUaHVzLCBhIGhhY2sgaXMgbmVlZGVkLlxuICAgIC8vIFNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9FdmVudHMvY2xpY2sjSW50ZXJuZXRfRXhwbG9yZXJcbiAgICAvL1xuICAgIC8vIEZvciBJRTgsIHdlIHNldCBzb2xpZCBibGFjayBhcyBpdCBkb2Vzbid0IHN1cHBvcnQgYHJnYmEoKWAuIEZvciBJRTksIHdlXG4gICAgLy8gc2V0IGFscGhhIHRyYW5zcGFyZW5jeSBmb3IgdGhlIGJlc3QgcmVzdWx0cyBwb3NzaWJsZS5cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwIFxcOTsgLy8gSUU4XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwKTsgLy8gSUU5XG4gIH1cbiAgLmFjdGl2ZSB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHdpZHRoOiAgMTJweDtcbiAgICBoZWlnaHQ6IDEycHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNhcm91c2VsLWluZGljYXRvci1hY3RpdmUtYmc7XG4gIH1cbn1cblxuLy8gT3B0aW9uYWwgY2FwdGlvbnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBIaWRkZW4gYnkgZGVmYXVsdCBmb3Igc21hbGxlciB2aWV3cG9ydHNcbi5jYXJvdXNlbC1jYXB0aW9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAxNSU7XG4gIHJpZ2h0OiAxNSU7XG4gIGJvdHRvbTogMjBweDtcbiAgei1pbmRleDogMTA7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgY29sb3I6ICRjYXJvdXNlbC1jYXB0aW9uLWNvbG9yO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtc2hhZG93OiAkY2Fyb3VzZWwtdGV4dC1zaGFkb3c7XG4gICYgLmJ0biB7XG4gICAgdGV4dC1zaGFkb3c6IG5vbmU7IC8vIE5vIHNoYWRvdyBmb3IgYnV0dG9uIGVsZW1lbnRzIGluIGNhcm91c2VsLWNhcHRpb25cbiAgfVxufVxuXG5cbi8vIFNjYWxlIHVwIGNvbnRyb2xzIGZvciB0YWJsZXRzIGFuZCB1cFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJHNjcmVlbi1zbS1taW4pIHtcblxuICAvLyBTY2FsZSB1cCB0aGUgY29udHJvbHMgYSBzbWlkZ2VcbiAgLmNhcm91c2VsLWNvbnRyb2wge1xuICAgIC5nbHlwaGljb24tY2hldnJvbi1sZWZ0LFxuICAgIC5nbHlwaGljb24tY2hldnJvbi1yaWdodCxcbiAgICAuaWNvbi1wcmV2LFxuICAgIC5pY29uLW5leHQge1xuICAgICAgd2lkdGg6ICgkY2Fyb3VzZWwtY29udHJvbC1mb250LXNpemUgKiAxLjUpO1xuICAgICAgaGVpZ2h0OiAoJGNhcm91c2VsLWNvbnRyb2wtZm9udC1zaXplICogMS41KTtcbiAgICAgIG1hcmdpbi10b3A6ICgkY2Fyb3VzZWwtY29udHJvbC1mb250LXNpemUgLyAtMik7XG4gICAgICBmb250LXNpemU6ICgkY2Fyb3VzZWwtY29udHJvbC1mb250LXNpemUgKiAxLjUpO1xuICAgIH1cbiAgICAuZ2x5cGhpY29uLWNoZXZyb24tbGVmdCxcbiAgICAuaWNvbi1wcmV2IHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAoJGNhcm91c2VsLWNvbnRyb2wtZm9udC1zaXplIC8gLTIpO1xuICAgIH1cbiAgICAuZ2x5cGhpY29uLWNoZXZyb24tcmlnaHQsXG4gICAgLmljb24tbmV4dCB7XG4gICAgICBtYXJnaW4tcmlnaHQ6ICgkY2Fyb3VzZWwtY29udHJvbC1mb250LXNpemUgLyAtMik7XG4gICAgfVxuICB9XG5cbiAgLy8gU2hvdyBhbmQgbGVmdCBhbGlnbiB0aGUgY2FwdGlvbnNcbiAgLmNhcm91c2VsLWNhcHRpb24ge1xuICAgIGxlZnQ6IDIwJTtcbiAgICByaWdodDogMjAlO1xuICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xuICB9XG5cbiAgLy8gTW92ZSB1cCB0aGUgaW5kaWNhdG9yc1xuICAuY2Fyb3VzZWwtaW5kaWNhdG9ycyB7XG4gICAgYm90dG9tOiAyMHB4O1xuICB9XG59XG4iLCIvL1xuLy8gVXRpbGl0eSBjbGFzc2VzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cbi8vIEZsb2F0c1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4uY2xlYXJmaXgge1xuICBAaW5jbHVkZSBjbGVhcmZpeDtcbn1cbi5jZW50ZXItYmxvY2sge1xuICBAaW5jbHVkZSBjZW50ZXItYmxvY2s7XG59XG4ucHVsbC1yaWdodCB7XG4gIGZsb2F0OiByaWdodCAhaW1wb3J0YW50O1xufVxuLnB1bGwtbGVmdCB7XG4gIGZsb2F0OiBsZWZ0ICFpbXBvcnRhbnQ7XG59XG5cblxuLy8gVG9nZ2xpbmcgY29udGVudFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyBOb3RlOiBEZXByZWNhdGVkIC5oaWRlIGluIGZhdm9yIG9mIC5oaWRkZW4gb3IgLnNyLW9ubHkgKGFzIGFwcHJvcHJpYXRlKSBpbiB2My4wLjFcbi5oaWRlIHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuLnNob3cge1xuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xufVxuLmludmlzaWJsZSB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cbi50ZXh0LWhpZGUge1xuICBAaW5jbHVkZSB0ZXh0LWhpZGU7XG59XG5cblxuLy8gSGlkZSBmcm9tIHNjcmVlbnJlYWRlcnMgYW5kIGJyb3dzZXJzXG4vL1xuLy8gQ3JlZGl0OiBIVE1MNSBCb2lsZXJwbGF0ZVxuXG4uaGlkZGVuIHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG5cbi8vIEZvciBBZmZpeCBwbHVnaW5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLmFmZml4IHtcbiAgcG9zaXRpb246IGZpeGVkO1xufVxuIiwiLy9cbi8vIFJlc3BvbnNpdmU6IFV0aWxpdHkgY2xhc3Nlc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXG4vLyBJRTEwIGluIFdpbmRvd3MgKFBob25lKSA4XG4vL1xuLy8gU3VwcG9ydCBmb3IgcmVzcG9uc2l2ZSB2aWV3cyB2aWEgbWVkaWEgcXVlcmllcyBpcyBraW5kIG9mIGJvcmtlZCBpbiBJRTEwLCBmb3Jcbi8vIFN1cmZhY2UvZGVza3RvcCBpbiBzcGxpdCB2aWV3IGFuZCBmb3IgV2luZG93cyBQaG9uZSA4LiBUaGlzIHBhcnRpY3VsYXIgZml4XG4vLyBtdXN0IGJlIGFjY29tcGFuaWVkIGJ5IGEgc25pcHBldCBvZiBKYXZhU2NyaXB0IHRvIHNuaWZmIHRoZSB1c2VyIGFnZW50IGFuZFxuLy8gYXBwbHkgc29tZSBjb25kaXRpb25hbCBDU1MgdG8gKm9ubHkqIHRoZSBTdXJmYWNlL2Rlc2t0b3AgV2luZG93cyA4LiBMb29rIGF0XG4vLyBvdXIgR2V0dGluZyBTdGFydGVkIHBhZ2UgZm9yIG1vcmUgaW5mb3JtYXRpb24gb24gdGhpcyBidWcuXG4vL1xuLy8gRm9yIG1vcmUgaW5mb3JtYXRpb24sIHNlZSB0aGUgZm9sbG93aW5nOlxuLy9cbi8vIElzc3VlOiBodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvaXNzdWVzLzEwNDk3XG4vLyBEb2NzOiBodHRwOi8vZ2V0Ym9vdHN0cmFwLmNvbS9nZXR0aW5nLXN0YXJ0ZWQvI3N1cHBvcnQtaWUxMC13aWR0aFxuLy8gU291cmNlOiBodHRwOi8vdGlta2FkbGVjLmNvbS8yMDEzLzAxL3dpbmRvd3MtcGhvbmUtOC1hbmQtZGV2aWNlLXdpZHRoL1xuLy8gU291cmNlOiBodHRwOi8vdGlta2FkbGVjLmNvbS8yMDEyLzEwL2llMTAtc25hcC1tb2RlLWFuZC1yZXNwb25zaXZlLWRlc2lnbi9cblxuQGF0LXJvb3Qge1xuICBALW1zLXZpZXdwb3J0IHtcbiAgICB3aWR0aDogZGV2aWNlLXdpZHRoO1xuICB9XG59XG5cblxuLy8gVmlzaWJpbGl0eSB1dGlsaXRpZXNcbi8vIE5vdGU6IERlcHJlY2F0ZWQgLnZpc2libGUteHMsIC52aXNpYmxlLXNtLCAudmlzaWJsZS1tZCwgYW5kIC52aXNpYmxlLWxnIGFzIG9mIHYzLjIuMFxuXG5AaW5jbHVkZSByZXNwb25zaXZlLWludmlzaWJpbGl0eSgnLnZpc2libGUteHMnKTtcbkBpbmNsdWRlIHJlc3BvbnNpdmUtaW52aXNpYmlsaXR5KCcudmlzaWJsZS1zbScpO1xuQGluY2x1ZGUgcmVzcG9uc2l2ZS1pbnZpc2liaWxpdHkoJy52aXNpYmxlLW1kJyk7XG5AaW5jbHVkZSByZXNwb25zaXZlLWludmlzaWJpbGl0eSgnLnZpc2libGUtbGcnKTtcblxuLnZpc2libGUteHMtYmxvY2ssXG4udmlzaWJsZS14cy1pbmxpbmUsXG4udmlzaWJsZS14cy1pbmxpbmUtYmxvY2ssXG4udmlzaWJsZS1zbS1ibG9jayxcbi52aXNpYmxlLXNtLWlubGluZSxcbi52aXNpYmxlLXNtLWlubGluZS1ibG9jayxcbi52aXNpYmxlLW1kLWJsb2NrLFxuLnZpc2libGUtbWQtaW5saW5lLFxuLnZpc2libGUtbWQtaW5saW5lLWJsb2NrLFxuLnZpc2libGUtbGctYmxvY2ssXG4udmlzaWJsZS1sZy1pbmxpbmUsXG4udmlzaWJsZS1sZy1pbmxpbmUtYmxvY2sge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAkc2NyZWVuLXhzLW1heCkge1xuICBAaW5jbHVkZSByZXNwb25zaXZlLXZpc2liaWxpdHkoJy52aXNpYmxlLXhzJyk7XG59XG4udmlzaWJsZS14cy1ibG9jayB7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkc2NyZWVuLXhzLW1heCkge1xuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gIH1cbn1cbi52aXNpYmxlLXhzLWlubGluZSB7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkc2NyZWVuLXhzLW1heCkge1xuICAgIGRpc3BsYXk6IGlubGluZSAhaW1wb3J0YW50O1xuICB9XG59XG4udmlzaWJsZS14cy1pbmxpbmUtYmxvY2sge1xuICBAbWVkaWEgKG1heC13aWR0aDogJHNjcmVlbi14cy1tYXgpIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2sgIWltcG9ydGFudDtcbiAgfVxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogJHNjcmVlbi1zbS1taW4pIGFuZCAobWF4LXdpZHRoOiAkc2NyZWVuLXNtLW1heCkge1xuICBAaW5jbHVkZSByZXNwb25zaXZlLXZpc2liaWxpdHkoJy52aXNpYmxlLXNtJyk7XG59XG4udmlzaWJsZS1zbS1ibG9jayB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAkc2NyZWVuLXNtLW1pbikgYW5kIChtYXgtd2lkdGg6ICRzY3JlZW4tc20tbWF4KSB7XG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgfVxufVxuLnZpc2libGUtc20taW5saW5lIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6ICRzY3JlZW4tc20tbWluKSBhbmQgKG1heC13aWR0aDogJHNjcmVlbi1zbS1tYXgpIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUgIWltcG9ydGFudDtcbiAgfVxufVxuLnZpc2libGUtc20taW5saW5lLWJsb2NrIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6ICRzY3JlZW4tc20tbWluKSBhbmQgKG1heC13aWR0aDogJHNjcmVlbi1zbS1tYXgpIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2sgIWltcG9ydGFudDtcbiAgfVxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogJHNjcmVlbi1tZC1taW4pIGFuZCAobWF4LXdpZHRoOiAkc2NyZWVuLW1kLW1heCkge1xuICBAaW5jbHVkZSByZXNwb25zaXZlLXZpc2liaWxpdHkoJy52aXNpYmxlLW1kJyk7XG59XG4udmlzaWJsZS1tZC1ibG9jayB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAkc2NyZWVuLW1kLW1pbikgYW5kIChtYXgtd2lkdGg6ICRzY3JlZW4tbWQtbWF4KSB7XG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgfVxufVxuLnZpc2libGUtbWQtaW5saW5lIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6ICRzY3JlZW4tbWQtbWluKSBhbmQgKG1heC13aWR0aDogJHNjcmVlbi1tZC1tYXgpIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUgIWltcG9ydGFudDtcbiAgfVxufVxuLnZpc2libGUtbWQtaW5saW5lLWJsb2NrIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6ICRzY3JlZW4tbWQtbWluKSBhbmQgKG1heC13aWR0aDogJHNjcmVlbi1tZC1tYXgpIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2sgIWltcG9ydGFudDtcbiAgfVxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogJHNjcmVlbi1sZy1taW4pIHtcbiAgQGluY2x1ZGUgcmVzcG9uc2l2ZS12aXNpYmlsaXR5KCcudmlzaWJsZS1sZycpO1xufVxuLnZpc2libGUtbGctYmxvY2sge1xuICBAbWVkaWEgKG1pbi13aWR0aDogJHNjcmVlbi1sZy1taW4pIHtcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICB9XG59XG4udmlzaWJsZS1sZy1pbmxpbmUge1xuICBAbWVkaWEgKG1pbi13aWR0aDogJHNjcmVlbi1sZy1taW4pIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUgIWltcG9ydGFudDtcbiAgfVxufVxuLnZpc2libGUtbGctaW5saW5lLWJsb2NrIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6ICRzY3JlZW4tbGctbWluKSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6ICRzY3JlZW4teHMtbWF4KSB7XG4gIEBpbmNsdWRlIHJlc3BvbnNpdmUtaW52aXNpYmlsaXR5KCcuaGlkZGVuLXhzJyk7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiAkc2NyZWVuLXNtLW1pbikgYW5kIChtYXgtd2lkdGg6ICRzY3JlZW4tc20tbWF4KSB7XG4gIEBpbmNsdWRlIHJlc3BvbnNpdmUtaW52aXNpYmlsaXR5KCcuaGlkZGVuLXNtJyk7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiAkc2NyZWVuLW1kLW1pbikgYW5kIChtYXgtd2lkdGg6ICRzY3JlZW4tbWQtbWF4KSB7XG4gIEBpbmNsdWRlIHJlc3BvbnNpdmUtaW52aXNpYmlsaXR5KCcuaGlkZGVuLW1kJyk7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiAkc2NyZWVuLWxnLW1pbikge1xuICBAaW5jbHVkZSByZXNwb25zaXZlLWludmlzaWJpbGl0eSgnLmhpZGRlbi1sZycpO1xufVxuXG5cbi8vIFByaW50IHV0aWxpdGllc1xuLy9cbi8vIE1lZGlhIHF1ZXJpZXMgYXJlIHBsYWNlZCBvbiB0aGUgaW5zaWRlIHRvIGJlIG1peGluLWZyaWVuZGx5LlxuXG4vLyBOb3RlOiBEZXByZWNhdGVkIC52aXNpYmxlLXByaW50IGFzIG9mIHYzLjIuMFxuXG5AaW5jbHVkZSByZXNwb25zaXZlLWludmlzaWJpbGl0eSgnLnZpc2libGUtcHJpbnQnKTtcblxuQG1lZGlhIHByaW50IHtcbiAgQGluY2x1ZGUgcmVzcG9uc2l2ZS12aXNpYmlsaXR5KCcudmlzaWJsZS1wcmludCcpO1xufVxuLnZpc2libGUtcHJpbnQtYmxvY2sge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG5cbiAgQG1lZGlhIHByaW50IHtcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICB9XG59XG4udmlzaWJsZS1wcmludC1pbmxpbmUge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG5cbiAgQG1lZGlhIHByaW50IHtcbiAgICBkaXNwbGF5OiBpbmxpbmUgIWltcG9ydGFudDtcbiAgfVxufVxuLnZpc2libGUtcHJpbnQtaW5saW5lLWJsb2NrIHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuXG4gIEBtZWRpYSBwcmludCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuQG1lZGlhIHByaW50IHtcbiAgQGluY2x1ZGUgcmVzcG9uc2l2ZS1pbnZpc2liaWxpdHkoJy5oaWRkZW4tcHJpbnQnKTtcbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FpQ0FBLDRFQUE0RTtBQVE1RSxBQUFBLElBQUksQ0FBQztFQUNILFdBQVcsRUFBRSxVQUFVO0VBQ3ZCLG9CQUFvQixFQUFFLElBQUk7RUFDMUIsd0JBQXdCLEVBQUUsSUFBSSxHQUMvQjs7QUFNRCxBQUFBLElBQUksQ0FBQztFQUNILE1BQU0sRUFBRSxDQUFDLEdBQ1Y7O0FBWUQsQUFBQSxPQUFPO0FBQ1AsQUFBQSxL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 */", ""]);

// exports


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800);", ""]);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900);", ""]);

// module
exports.push([module.i, "@charset \"UTF-8\";\n/* fonts */\n/* typography */\n/* color */\n/* convert pixel to em */\n/* maps and brealpoint */\n/* example usage inline\n.main {\n  width: 100%;\n  @include mq(medium) {\n    width: 60%;\n  }\n  @include mq(large) {\n    width: 70%;\n  }\n}\n*/\n.work {\n  background: #000; }\n\n/* bootstrap override  and default */\nhtml {\n  box-sizing: border-box;\n  font-size: 100%; }\n\nbody {\n  font-size: 1em;\n  line-height: 1.5; }\n\nh1, h2, h3, h4, h5 {\n  line-height: 1.5; }\n\nul, li {\n  margin: 0;\n  padding: 0;\n  list-style: none; }\n\n/**\n * Make all elements from the DOM inherit from the parent box-sizing\n * Since `*` has a specificity of 0, it does not override the `html` value\n * making all elements inheriting from the root box-sizing value\n * See: https://css-tricks.com/inheriting-box-sizing-probably-slightly-better-best-practice/\n */\n*, *::before, *::after {\n  box-sizing: inherit; }\n\n/**\n * Basic styles for links\n */\na {\n  /*color: $brand-color; */\n  text-decoration: none; }\n  a:hover, a:active, a:focus {\n    /* color: $text-color; */\n    text-decoration: underline; }\n\n/*\nlight:300, regular:400, semi-bolf:600,bold:700,extra-bold:800;\n*/\n/*\nthin:100,light:300,regular:400,medium:500,bold:700,black:900;\n*/\np {\n  font-family: \"Roboto\";\n  font-weight: 300; }\n\na {\n  font-family: \"Roboto\";\n  font-weight: 400; }\n\nh1 {\n  font-family: \"Roboto\";\n  font-weight: 700; }\n\nh2 {\n  font-family: \"Open Sans\";\n  font-weight: 300; }\n\nh3 {\n  font-family: \"Open Sans\";\n  font-weight: 300; }\n\nh4 {\n  font-family: \"Roboto\", sans-serif;\n  font-weight: 700; }\n\nh5 {\n  font-family: \"Roboto\", sans-serif;\n  font-weight: 400; }\n\ninput, select, textarea {\n  font-family: \"Open Sans\";\n  font-weight: 300; }\n\n/**\n * Basic typography style for copy text, MAPS\n */\n/*\n  @mixin font-size($fs-map, $fs-breakpoints: $breakpoints) {\n  @each $fs-breakpoint, $fs-font-size in $fs-map {\n    @if $fs-breakpoint == null {\n    \n      font-size: em($fs-font-size);\n    }\n    @else {\n   */\n/* If $fs-font-size is a key that exists in $fs-breakpoints, use the value */\n/*\n      @if map-has-key($fs-breakpoints, $fs-breakpoint) {\n        $fs-breakpoint: map-get($fs-breakpoints, $fs-breakpoint);\n      }\n      @media screen and (min-width: $fs-breakpoint) {\n        font-size: em($fs-font-size);\n      }\n    }\n  }\n}\n\n*/\n/* Utility function for mixin font-size */\n/* breakpoints */\n/*\nNow, what if we want an element to have a font size for a custom breakpoint that doesn’t \nexist in $breakpoints? In the font-sizes map, simply drop in the breakpoint value instead of a \nname as the key, and the mixin will do the work for you:\n*/\np {\n  /* If $fs-font-size is a list, include\n  // both font-size and line-height*/\n  font-size: 0.9375em;\n  /* If $fs-font-size is a key that exists in\n       $fs-breakpoints, use the value */\n  /* If $fs-font-size is a key that exists in\n       $fs-breakpoints, use the value */\n  /* If $fs-font-size is a key that exists in\n       $fs-breakpoints, use the value */ }\n  @media screen and (min-width: 480px) {\n    p {\n      /* If $fs-font-size is a list, include\n  // both font-size and line-height*/\n      font-size: 0.9375em; } }\n  @media screen and (min-width: 700px) {\n    p {\n      /* If $fs-font-size is a list, include\n  // both font-size and line-height*/\n      font-size: 1em; } }\n  @media screen and (min-width: 1024px) {\n    p {\n      /* If $fs-font-size is a list, include\n  // both font-size and line-height*/\n      font-size: 1em; } }\n\nh1, h2, h3, h4, h5 {\n  line-height: 1.5; }\n\n.top-heading {\n  /* If $fs-font-size is a list, include\n  // both font-size and line-height*/\n  font-size: 1.75em;\n  /* If $fs-font-size is a key that exists in\n       $fs-breakpoints, use the value */\n  /* If $fs-font-size is a key that exists in\n       $fs-breakpoints, use the value */\n  /* If $fs-font-size is a key that exists in\n       $fs-breakpoints, use the value */\n  /* If $fs-font-size is a key that exists in\n       $fs-breakpoints, use the value */\n  color: #fcfcfc; }\n  @media screen and (min-width: 480px) {\n    .top-heading {\n      /* If $fs-font-size is a list, include\n  // both font-size and line-height*/\n      font-size: 1.9375em; } }\n  @media screen and (min-width: 700px) {\n    .top-heading {\n      /* If $fs-font-size is a list, include\n  // both font-size and line-height*/\n      font-size: 2.0625em; } }\n  @media screen and (min-width: 1024px) {\n    .top-heading {\n      /* If $fs-font-size is a list, include\n  // both font-size and line-height*/\n      font-size: 3em;\n      line-height: 1.7; } }\n  @media screen and (min-width: 1440px) {\n    .top-heading {\n      /* If $fs-font-size is a list, include\n  // both font-size and line-height*/\n      font-size: 3.75em;\n      line-height: 1.7; } }\n\n.top-sub-heading {\n  /* If $fs-font-size is a list, include\n  // both font-size and line-height*/\n  font-size: 1.125em;\n  /* If $fs-font-size is a key that exists in\n       $fs-breakpoints, use the value */\n  /* If $fs-font-size is a key that exists in\n       $fs-breakpoints, use the value */\n  /* If $fs-font-size is a key that exists in\n       $fs-breakpoints, use the value */\n  /* If $fs-font-size is a key that exists in\n       $fs-breakpoints, use the value */\n  color: #fcfcfc; }\n  @media screen and (min-width: 480px) {\n    .top-sub-heading {\n      /* If $fs-font-size is a list, include\n  // both font-size and line-height*/\n      font-size: 1.3125em; } }\n  @media screen and (min-width: 700px) {\n    .top-sub-heading {\n      /* If $fs-font-size is a list, include\n  // both font-size and line-height*/\n      font-size: 1.4375em; } }\n  @media screen and (min-width: 1024px) {\n    .top-sub-heading {\n      /* If $fs-font-size is a list, include\n  // both font-size and line-height*/\n      font-size: 1.5em; } }\n  @media screen and (min-width: 1440px) {\n    .top-sub-heading {\n      /* If $fs-font-size is a list, include\n  // both font-size and line-height*/\n      font-size: 1.5em;\n      line-height: 1.7; } }\n\n.section-heading, .section-heading-alt {\n  /* If $fs-font-size is a list, include\n  // both font-size and line-height*/\n  font-size: 1.125em;\n  /* If $fs-font-size is a key that exists in\n       $fs-breakpoints, use the value */\n  /* If $fs-font-size is a key that exists in\n       $fs-breakpoints, use the value */\n  /* If $fs-font-size is a key that exists in\n       $fs-breakpoints, use the value */ }\n  @media screen and (min-width: 480px) {\n    .section-heading, .section-heading-alt {\n      /* If $fs-font-size is a list, include\n  // both font-size and line-height*/\n      font-size: 1.3125em; } }\n  @media screen and (min-width: 700px) {\n    .section-heading, .section-heading-alt {\n      /* If $fs-font-size is a list, include\n  // both font-size and line-height*/\n      font-size: 1.4375em; } }\n  @media screen and (min-width: 1024px) {\n    .section-heading, .section-heading-alt {\n      /* If $fs-font-size is a list, include\n  // both font-size and line-height*/\n      font-size: 2.25em; } }\n\n.section-desc {\n  /* If $fs-font-size is a list, include\n  // both font-size and line-height*/\n  font-size: 1.0625em;\n  /* If $fs-font-size is a key that exists in\n       $fs-breakpoints, use the value */\n  /* If $fs-font-size is a key that exists in\n       $fs-breakpoints, use the value */\n  /* If $fs-font-size is a key that exists in\n       $fs-breakpoints, use the value */\n  text-transform: uppercase; }\n  @media screen and (min-width: 480px) {\n    .section-desc {\n      /* If $fs-font-size is a list, include\n  // both font-size and line-height*/\n      font-size: 1.125em; } }\n  @media screen and (min-width: 700px) {\n    .section-desc {\n      /* If $fs-font-size is a list, include\n  // both font-size and line-height*/\n      font-size: 1.1875em; } }\n  @media screen and (min-width: 1024px) {\n    .section-desc {\n      /* If $fs-font-size is a list, include\n  // both font-size and line-height*/\n      font-size: 1.25em; } }\n\n.article-heading {\n  /* If $fs-font-size is a list, include\n  // both font-size and line-height*/\n  font-size: 1.125em;\n  /* If $fs-font-size is a key that exists in\n       $fs-breakpoints, use the value */\n  /* If $fs-font-size is a key that exists in\n       $fs-breakpoints, use the value */\n  /* If $fs-font-size is a key that exists in\n       $fs-breakpoints, use the value */\n  text-transform: uppercase; }\n  @media screen and (min-width: 480px) {\n    .article-heading {\n      /* If $fs-font-size is a list, include\n  // both font-size and line-height*/\n      font-size: 1.3125em; } }\n  @media screen and (min-width: 700px) {\n    .article-heading {\n      /* If $fs-font-size is a list, include\n  // both font-size and line-height*/\n      font-size: 1.4375em; } }\n  @media screen and (min-width: 1024px) {\n    .article-heading {\n      /* If $fs-font-size is a list, include\n  // both font-size and line-height*/\n      font-size: 1.5em; } }\n\n.section-heading-alt {\n  text-transform: uppercase; }\n\n.article-works-heading {\n  /* If $fs-font-size is a list, include\n  // both font-size and line-height*/\n  font-size: 0.6875em;\n  /* If $fs-font-size is a key that exists in\n       $fs-breakpoints, use the value */\n  /* If $fs-font-size is a key that exists in\n       $fs-breakpoints, use the value */\n  /* If $fs-font-size is a key that exists in\n       $fs-breakpoints, use the value */\n  text-transform: uppercase; }\n  @media screen and (min-width: 480px) {\n    .article-works-heading {\n      /* If $fs-font-size is a list, include\n  // both font-size and line-height*/\n      font-size: 0.75em; } }\n  @media screen and (min-width: 700px) {\n    .article-works-heading {\n      /* If $fs-font-size is a list, include\n  // both font-size and line-height*/\n      font-size: 0.8125em; } }\n  @media screen and (min-width: 1024px) {\n    .article-works-heading {\n      /* If $fs-font-size is a list, include\n  // both font-size and line-height*/\n      font-size: 1em; } }\n\n.nav-list--link {\n  /* If $fs-font-size is a list, include\n  // both font-size and line-height*/\n  font-size: 0.6875em;\n  /* If $fs-font-size is a key that exists in\n       $fs-breakpoints, use the value */\n  /* If $fs-font-size is a key that exists in\n       $fs-breakpoints, use the value */\n  /* If $fs-font-size is a key that exists in\n       $fs-breakpoints, use the value */\n  text-transform: uppercase;\n  color: #cacaca; }\n  @media screen and (min-width: 480px) {\n    .nav-list--link {\n      /* If $fs-font-size is a list, include\n  // both font-size and line-height*/\n      font-size: 0.75em; } }\n  @media screen and (min-width: 700px) {\n    .nav-list--link {\n      /* If $fs-font-size is a list, include\n  // both font-size and line-height*/\n      font-size: 0.8125em; } }\n  @media screen and (min-width: 1024px) {\n    .nav-list--link {\n      /* If $fs-font-size is a list, include\n  // both font-size and line-height*/\n      font-size: 1em; } }\n\ninput, select, textarea {\n  /* If $fs-font-size is a list, include\n  // both font-size and line-height*/\n  font-size: 0.6875em;\n  /* If $fs-font-size is a key that exists in\n       $fs-breakpoints, use the value */\n  /* If $fs-font-size is a key that exists in\n       $fs-breakpoints, use the value */\n  /* If $fs-font-size is a key that exists in\n       $fs-breakpoints, use the value */ }\n  @media screen and (min-width: 480px) {\n    input, select, textarea {\n      /* If $fs-font-size is a list, include\n  // both font-size and line-height*/\n      font-size: 0.75em; } }\n  @media screen and (min-width: 700px) {\n    input, select, textarea {\n      /* If $fs-font-size is a list, include\n  // both font-size and line-height*/\n      font-size: 0.8125em; } }\n  @media screen and (min-width: 1024px) {\n    input, select, textarea {\n      /* If $fs-font-size is a list, include\n  // both font-size and line-height*/\n      font-size: 1em; } }\n\n/**\n * Clear inner floats\n */\n.clearfix::after {\n  clear: both;\n  content: '';\n  display: table; }\n\n/**\n * Main content containers\n * 1. Make the container full-width with a maximum width\n * 2. Center it in the viewport\n * 3. Leave some space on the edges, especially valuable on small screens\n */\n.container {\n  max-width: 1180px;\n  /* 1 */\n  margin-left: auto;\n  /* 2 */\n  margin-right: auto;\n  /* 2 */\n  padding-left: 20px;\n  /* 3 */\n  padding-right: 20px;\n  /* 3 */\n  width: 100%;\n  /* 1 */ }\n\n/**\n * Hide text while making it readable for screen readers\n * 1. Needed in WebKit-based browsers because of an implementation bug;\n *    See: https://code.google.com/p/chromium/issues/detail?id=457146\n */\n.hide-text {\n  overflow: hidden;\n  padding: 0;\n  /* 1 */\n  text-indent: 101%;\n  white-space: nowrap; }\n\n/**\n * Hide element while making it readable for screen readers\n * Shamelessly borrowed from HTML5Boilerplate:\n * https://github.com/h5bp/html5-boilerplate/blob/master/src/css/main.css#L119-L133\n */\n.visually-hidden {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px; }\n\n.footer--content {\n  height: 100px;\n  background: #fff000;\n  margin-top: 30px; }\n\n/* maps and brealpoint */\n.section {\n  min-height: 302px;\n  padding-top: 140px;\n  /* If $mq-breakpoint is a key that exists in\n     $mq-breakpoints, get and use the value */ }\n  @media screen and (min-width: 1400px) {\n    .section {\n      min-height: 862px; } }\n\n.section-services {\n  background: #fcfcfc; }\n\n.section-skills {\n  background: #fcfcfc; }\n\n.section-works {\n  background: #fcfcfc; }\n\n.section-contact {\n  background: #fcfcfc; }\n\n.work--pieces {\n  padding-top: 1.25em; }\n\n.work--piece {\n  height: 300px;\n  margin: 0.3125em 0;\n  padding: 0.3125em; }\n\n/* If $mq-breakpoint is a key that exists in\n     $mq-breakpoints, get and use the value */\n@media screen and (min-width: 740px) {\n  .work {\n    background: brown; }\n    .work--piece {\n      background: green; } }\n\n/* If $mq-breakpoint is a key that exists in\n     $mq-breakpoints, get and use the value */\n@media screen and (min-width: 800px) {\n  .work {\n    background: orange; }\n    .work--piece {\n      background: green; } }\n\n/* If $mq-breakpoint is a key that exists in\n     $mq-breakpoints, get and use the value */\n@media screen and (min-width: 1024px) {\n  .work {\n    background: brown; }\n    .work--piece {\n      background: purple; } }\n\n.section-hero {\n  /*background: url(\"/Users/ross/Documents/projects-ross/rossgallego.github.io/assets/src/img/rg-hero.jpg\");*/\n  /*\t background: url(\"../../assets/src/img/rg-hero.jpg\");*/\n  background: url(" + __webpack_require__(21) + ");\n  background-size: 100% 100%;\n  background-repeat: no-repeat; }\n\n.top-heading {\n  /* If $mq-breakpoint is a key that exists in\n     $mq-breakpoints, get and use the value */ }\n  @media screen and (min-width: 1400px) {\n    .top-heading {\n      padding-top: 130px; } }\n\n.main-nav {\n  background: rgba(26, 26, 26, 0.6);\n  left: 0;\n  margin: 0;\n  padding: 25px 0 20px 0;\n  position: fixed;\n  right: 0;\n  top: 0;\n  z-index: 1030;\n  /* If $mq-breakpoint is a key that exists in\n     $mq-breakpoints, get and use the value */ }\n  @media screen and (min-width: 800px) {\n    .main-nav {\n      display: block; } }\n\n.nav-lists {\n  display: none;\n  /* If $mq-breakpoint is a key that exists in\n     $mq-breakpoints, get and use the value */ }\n  @media screen and (min-width: 800px) {\n    .nav-lists {\n      display: block; } }\n\n.nav-list {\n  display: block;\n  float: right;\n  margin: 0;\n  padding: 0; }\n  .nav-list--link {\n    display: block;\n    padding: 18px 20px 0 20px; }\n\n.nav-responsive {\n  display: block;\n  color: #fcfcfc;\n  float: right;\n  /* If $mq-breakpoint is a key that exists in\n     $mq-breakpoints, get and use the value */ }\n  @media screen and (min-width: 800px) {\n    .nav-responsive {\n      display: none; } }\n\n/* responsive */\n/* The Overlay (background) */\n.overlay {\n  /* Height & width depends on how you want to reveal the overlay (see JS below) */\n  height: 100%;\n  width: 0;\n  position: fixed;\n  /* Stay in place */\n  z-index: 1;\n  /* Sit on top */\n  left: 0;\n  top: 0;\n  background-color: black;\n  /* Black fallback color */\n  background-color: rgba(0, 0, 0, 0.9);\n  /* Black w/opacity */\n  overflow-x: hidden;\n  /* Disable horizontal scroll */\n  transition: 0.5s;\n  /* 0.5 second transition effect to slide in or slide down the overlay (height or width, depending on reveal) */\n  z-index: 9998; }\n\n/* Position the content inside the overlay */\n.overlay-content {\n  position: relative;\n  top: 25%;\n  /* 25% from the top */\n  width: 100%;\n  /* 100% width */\n  text-align: center;\n  /* Centered text/links */\n  margin-top: 30px;\n  /* 30px top margin to avoid conflict with the close button on smaller screens */ }\n\n/* The navigation links inside the overlay */\n.overlay a {\n  padding: 8px;\n  text-decoration: none;\n  font-size: 36px;\n  color: #818181;\n  display: block;\n  /* Display block instead of inline */\n  transition: 0.3s;\n  /* Transition effects on hover (color) */ }\n\n/* When you mouse over the navigation links, change their color */\n.overlay a:hover, .overlay a:focus {\n  color: #f1f1f1; }\n\n/* Position the close button (top right corner) */\n.overlay .closebtn {\n  position: absolute;\n  top: 20px;\n  right: 45px;\n  font-size: 60px;\n  z-index: 9999; }\n\n/* When the height of the screen is less than 450 pixels, change the font-size of the links and position the close button again, so they don't overlap */\n@media screen and (max-height: 450px) {\n  .overlay a {\n    font-size: 20px; }\n  .overlay .closebtn {\n    font-size: 40px;\n    top: 15px;\n    right: 35px; } }\n\n.foo {\n  content: key, key2;\n  content: value, value2;\n  content: true;\n  content: value; }\n\n/* page color */\n.bbb-col1 {\n  color: #000; }\n\n.bbb-col2 {\n  color: #ccc; }\n\n.bbb-col3 {\n  color: #ggg; }\n", ""]);

// exports


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/src/style/rg-hero.jpg";

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(19);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(2)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../css-loader/index.js!./../resolve-url-loader/index.js!./../sass-loader/index.js?sourceMap!./lib/bootstrap.styles.loader.js?{\"bootstrapVersion\":3,\"useCustomIconFontPath\":false,\"extractStyles\":false,\"styleLoaders\":[\"style\",\"css\",\"sass\"],\"styles\":[\"mixins\",\"normalize\",\"print\",\"scaffolding\",\"type\",\"code\",\"grid\",\"tables\",\"forms\",\"buttons\",\"component-animations\",\"dropdowns\",\"button-groups\",\"input-groups\",\"navs\",\"navbar\",\"breadcrumbs\",\"pagination\",\"pager\",\"labels\",\"badges\",\"jumbotron\",\"thumbnails\",\"alerts\",\"progress-bars\",\"media\",\"list-group\",\"panels\",\"wells\",\"responsive-embed\",\"close\",\"modals\",\"tooltip\",\"popovers\",\"carousel\",\"utilities\",\"responsive-utilities\"],\"scripts\":[\"transition\",\"alert\",\"button\",\"carousel\",\"collapse\",\"dropdown\",\"modal\",\"tooltip\",\"popover\",\"scrollspy\",\"tab\",\"affix\"],\"configFilePath\":\"/Users/ross/Documents/projects-ross/rossgallego.github.io/.bootstraprc\",\"bootstrapPath\":\"/Users/ross/Documents/projects-ross/rossgallego.github.io/node_modules/bootstrap-sass\",\"bootstrapRelPath\":\"../bootstrap-sass\"}!./no-op.js", function() {
			var newContent = require("!!./../css-loader/index.js!./../resolve-url-loader/index.js!./../sass-loader/index.js?sourceMap!./lib/bootstrap.styles.loader.js?{\"bootstrapVersion\":3,\"useCustomIconFontPath\":false,\"extractStyles\":false,\"styleLoaders\":[\"style\",\"css\",\"sass\"],\"styles\":[\"mixins\",\"normalize\",\"print\",\"scaffolding\",\"type\",\"code\",\"grid\",\"tables\",\"forms\",\"buttons\",\"component-animations\",\"dropdowns\",\"button-groups\",\"input-groups\",\"navs\",\"navbar\",\"breadcrumbs\",\"pagination\",\"pager\",\"labels\",\"badges\",\"jumbotron\",\"thumbnails\",\"alerts\",\"progress-bars\",\"media\",\"list-group\",\"panels\",\"wells\",\"responsive-embed\",\"close\",\"modals\",\"tooltip\",\"popovers\",\"carousel\",\"utilities\",\"responsive-utilities\"],\"scripts\":[\"transition\",\"alert\",\"button\",\"carousel\",\"collapse\",\"dropdown\",\"modal\",\"tooltip\",\"popover\",\"scrollspy\",\"tab\",\"affix\"],\"configFilePath\":\"/Users/ross/Documents/projects-ross/rossgallego.github.io/.bootstraprc\",\"bootstrapPath\":\"/Users/ross/Documents/projects-ross/rossgallego.github.io/node_modules/bootstrap-sass\",\"bootstrapRelPath\":\"../bootstrap-sass\"}!./no-op.js");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(20);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(2)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./main.scss", function() {
			var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./main.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(3);


/***/ })
/******/ ]);