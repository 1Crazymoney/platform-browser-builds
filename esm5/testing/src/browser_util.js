/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { NgZone, ɵglobal as global } from '@angular/core';
import { ɵgetDOM as getDOM } from '@angular/platform-browser';
export var /** @type {?} */ browserDetection;
var BrowserDetection = /** @class */ (function () {
    function BrowserDetection(ua) {
        this._overrideUa = ua;
    }
    Object.defineProperty(BrowserDetection.prototype, "_ua", {
        get: /**
         * @return {?}
         */
        function () {
            if (typeof this._overrideUa === 'string') {
                return this._overrideUa;
            }
            return getDOM() ? getDOM().getUserAgent() : '';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    BrowserDetection.setup = /**
     * @return {?}
     */
    function () { browserDetection = new BrowserDetection(null); };
    Object.defineProperty(BrowserDetection.prototype, "isFirefox", {
        get: /**
         * @return {?}
         */
        function () { return this._ua.indexOf('Firefox') > -1; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BrowserDetection.prototype, "isAndroid", {
        get: /**
         * @return {?}
         */
        function () {
            return this._ua.indexOf('Mozilla/5.0') > -1 && this._ua.indexOf('Android') > -1 &&
                this._ua.indexOf('AppleWebKit') > -1 && this._ua.indexOf('Chrome') == -1 &&
                this._ua.indexOf('IEMobile') == -1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BrowserDetection.prototype, "isEdge", {
        get: /**
         * @return {?}
         */
        function () { return this._ua.indexOf('Edge') > -1; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BrowserDetection.prototype, "isIE", {
        get: /**
         * @return {?}
         */
        function () { return this._ua.indexOf('Trident') > -1; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BrowserDetection.prototype, "isWebkit", {
        get: /**
         * @return {?}
         */
        function () {
            return this._ua.indexOf('AppleWebKit') > -1 && this._ua.indexOf('Edge') == -1 &&
                this._ua.indexOf('IEMobile') == -1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BrowserDetection.prototype, "isIOS7", {
        get: /**
         * @return {?}
         */
        function () {
            return (this._ua.indexOf('iPhone OS 7') > -1 || this._ua.indexOf('iPad OS 7') > -1) &&
                this._ua.indexOf('IEMobile') == -1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BrowserDetection.prototype, "isSlow", {
        get: /**
         * @return {?}
         */
        function () { return this.isAndroid || this.isIE || this.isIOS7; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BrowserDetection.prototype, "supportsNativeIntlApi", {
        // The Intl API is only natively supported in Chrome, Firefox, IE11 and Edge.
        // This detector is needed in tests to make the difference between:
        // 1) IE11/Edge: they have a native Intl API, but with some discrepancies
        // 2) IE9/IE10: they use the polyfill, and so no discrepancies
        get: /**
         * @return {?}
         */
        function () {
            return !!(/** @type {?} */ (global)).Intl && (/** @type {?} */ (global)).Intl !== (/** @type {?} */ (global)).IntlPolyfill;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BrowserDetection.prototype, "isChromeDesktop", {
        get: /**
         * @return {?}
         */
        function () {
            return this._ua.indexOf('Chrome') > -1 && this._ua.indexOf('Mobile Safari') == -1 &&
                this._ua.indexOf('Edge') == -1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BrowserDetection.prototype, "isOldChrome", {
        // "Old Chrome" means Chrome 3X, where there are some discrepancies in the Intl API.
        // Android 4.4 and 5.X have such browsers by default (respectively 30 and 39).
        get: /**
         * @return {?}
         */
        function () {
            return this._ua.indexOf('Chrome') > -1 && this._ua.indexOf('Chrome/3') > -1 &&
                this._ua.indexOf('Edge') == -1;
        },
        enumerable: true,
        configurable: true
    });
    return BrowserDetection;
}());
export { BrowserDetection };
function BrowserDetection_tsickle_Closure_declarations() {
    /** @type {?} */
    BrowserDetection.prototype._overrideUa;
}
BrowserDetection.setup();
/**
 * @param {?} element
 * @param {?} eventType
 * @return {?}
 */
export function dispatchEvent(element, eventType) {
    getDOM().dispatchEvent(element, getDOM().createEvent(eventType));
}
/**
 * @param {?} html
 * @return {?}
 */
export function el(html) {
    return /** @type {?} */ (getDOM().firstChild(getDOM().content(getDOM().createTemplate(html))));
}
/**
 * @param {?} css
 * @return {?}
 */
export function normalizeCSS(css) {
    return css.replace(/\s+/g, ' ')
        .replace(/:\s/g, ':')
        .replace(/'/g, '"')
        .replace(/ }/g, '}')
        .replace(/url\((\"|\s)(.+)(\"|\s)\)(\s*)/g, function () {
        var match = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            match[_i] = arguments[_i];
        }
        return "url(\"" + match[2] + "\")";
    })
        .replace(/\[(.+)=([^"\]]+)\]/g, function () {
        var match = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            match[_i] = arguments[_i];
        }
        return "[" + match[1] + "=\"" + match[2] + "\"]";
    });
}
var /** @type {?} */ _singleTagWhitelist = ['br', 'hr', 'input'];
/**
 * @param {?} el
 * @return {?}
 */
export function stringifyElement(el /** TODO #9100 */) {
    var /** @type {?} */ result = '';
    if (getDOM().isElementNode(el)) {
        var /** @type {?} */ tagName = getDOM().tagName(el).toLowerCase();
        // Opening tag
        result += "<" + tagName;
        // Attributes in an ordered way
        var /** @type {?} */ attributeMap = getDOM().attributeMap(el);
        var /** @type {?} */ keys = Array.from(attributeMap.keys()).sort();
        for (var /** @type {?} */ i = 0; i < keys.length; i++) {
            var /** @type {?} */ key = keys[i];
            var /** @type {?} */ attValue = attributeMap.get(key);
            var /** @type {?} */ lowerCaseKey = key.toLowerCase();
            if (typeof attValue !== 'string') {
                result += " " + lowerCaseKey;
            }
            else {
                result += " " + lowerCaseKey + "=\"" + attValue + "\"";
            }
        }
        result += '>';
        // Children
        var /** @type {?} */ childrenRoot = getDOM().templateAwareRoot(el);
        var /** @type {?} */ children = childrenRoot ? getDOM().childNodes(childrenRoot) : [];
        for (var /** @type {?} */ j = 0; j < children.length; j++) {
            result += stringifyElement(children[j]);
        }
        // Closing tag
        if (_singleTagWhitelist.indexOf(tagName) == -1) {
            result += "</" + tagName + ">";
        }
    }
    else if (getDOM().isCommentNode(el)) {
        result += "<!--" + getDOM().nodeValue(el) + "-->";
    }
    else {
        result += getDOM().getText(el);
    }
    return result;
}
/**
 * @return {?}
 */
export function createNgZone() {
    return new NgZone({ enableLongStackTrace: true });
}
//# sourceMappingURL=browser_util.js.map