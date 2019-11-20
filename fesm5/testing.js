/**
 * @license Angular v9.0.0-rc.1+186.sha-97fbdab.with-local-changes
 * (c) 2010-2019 Google LLC. https://angular.io/
 * License: MIT
 */

import { ɵglobal, NgZone, PLATFORM_INITIALIZER, createPlatformFactory, platformCore, ɵɵdefineNgModule, ɵɵdefineInjector, APP_ID, ɵɵsetNgModuleScope, ɵsetClassMetadata, NgModule } from '@angular/core';
import { ɵBrowserDomAdapter, ɵELEMENT_PROBE_PROVIDERS, BrowserModule } from '@angular/platform-browser';
import { __values } from 'tslib';
import { ɵgetDOM } from '@angular/common';

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var browserDetection;
var BrowserDetection = /** @class */ (function () {
    function BrowserDetection(ua) {
        this._overrideUa = ua;
    }
    Object.defineProperty(BrowserDetection.prototype, "_ua", {
        get: function () {
            if (typeof this._overrideUa === 'string') {
                return this._overrideUa;
            }
            return ɵgetDOM() ? ɵgetDOM().getUserAgent() : '';
        },
        enumerable: true,
        configurable: true
    });
    BrowserDetection.setup = function () { browserDetection = new BrowserDetection(null); };
    Object.defineProperty(BrowserDetection.prototype, "isFirefox", {
        get: function () { return this._ua.indexOf('Firefox') > -1; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BrowserDetection.prototype, "isAndroid", {
        get: function () {
            return this._ua.indexOf('Mozilla/5.0') > -1 && this._ua.indexOf('Android') > -1 &&
                this._ua.indexOf('AppleWebKit') > -1 && this._ua.indexOf('Chrome') == -1 &&
                this._ua.indexOf('IEMobile') == -1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BrowserDetection.prototype, "isEdge", {
        get: function () { return this._ua.indexOf('Edge') > -1; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BrowserDetection.prototype, "isIE", {
        get: function () { return this._ua.indexOf('Trident') > -1; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BrowserDetection.prototype, "isWebkit", {
        get: function () {
            return this._ua.indexOf('AppleWebKit') > -1 && this._ua.indexOf('Edge') == -1 &&
                this._ua.indexOf('IEMobile') == -1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BrowserDetection.prototype, "isIOS7", {
        get: function () {
            return (this._ua.indexOf('iPhone OS 7') > -1 || this._ua.indexOf('iPad OS 7') > -1) &&
                this._ua.indexOf('IEMobile') == -1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BrowserDetection.prototype, "isSlow", {
        get: function () { return this.isAndroid || this.isIE || this.isIOS7; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BrowserDetection.prototype, "supportsNativeIntlApi", {
        // The Intl API is only natively supported in Chrome, Firefox, IE11 and Edge.
        // This detector is needed in tests to make the difference between:
        // 1) IE11/Edge: they have a native Intl API, but with some discrepancies
        // 2) IE9/IE10: they use the polyfill, and so no discrepancies
        get: function () {
            return !!ɵglobal.Intl && ɵglobal.Intl !== ɵglobal.IntlPolyfill;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BrowserDetection.prototype, "isChromeDesktop", {
        get: function () {
            return this._ua.indexOf('Chrome') > -1 && this._ua.indexOf('Mobile Safari') == -1 &&
                this._ua.indexOf('Edge') == -1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BrowserDetection.prototype, "isOldChrome", {
        // "Old Chrome" means Chrome 3X, where there are some discrepancies in the Intl API.
        // Android 4.4 and 5.X have such browsers by default (respectively 30 and 39).
        get: function () {
            return this._ua.indexOf('Chrome') > -1 && this._ua.indexOf('Chrome/3') > -1 &&
                this._ua.indexOf('Edge') == -1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BrowserDetection.prototype, "supportsCustomElements", {
        get: function () { return (typeof ɵglobal.customElements !== 'undefined'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BrowserDetection.prototype, "supportsDeprecatedCustomCustomElementsV0", {
        get: function () {
            return (typeof document.registerElement !== 'undefined');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BrowserDetection.prototype, "supportsRegExUnicodeFlag", {
        get: function () { return RegExp.prototype.hasOwnProperty('unicode'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BrowserDetection.prototype, "supportsShadowDom", {
        get: function () {
            var testEl = document.createElement('div');
            return (typeof testEl.attachShadow !== 'undefined');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BrowserDetection.prototype, "supportsDeprecatedShadowDomV0", {
        get: function () {
            var testEl = document.createElement('div');
            return (typeof testEl.createShadowRoot !== 'undefined');
        },
        enumerable: true,
        configurable: true
    });
    return BrowserDetection;
}());
BrowserDetection.setup();
function dispatchEvent(element, eventType) {
    var evt = ɵgetDOM().getDefaultDocument().createEvent('Event');
    evt.initEvent(eventType, true, true);
    ɵgetDOM().dispatchEvent(element, evt);
}
function createMouseEvent(eventType) {
    var evt = ɵgetDOM().getDefaultDocument().createEvent('MouseEvent');
    evt.initEvent(eventType, true, true);
    return evt;
}
function el(html) {
    return getContent(createTemplate(html)).firstChild;
}
function normalizeCSS(css) {
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
function getAttributeMap(element) {
    var res = new Map();
    var elAttrs = element.attributes;
    for (var i = 0; i < elAttrs.length; i++) {
        var attrib = elAttrs.item(i);
        res.set(attrib.name, attrib.value);
    }
    return res;
}
var _selfClosingTags = ['br', 'hr', 'input'];
function stringifyElement(el /** TODO #9100 */) {
    var e_1, _a;
    var result = '';
    if (ɵgetDOM().isElementNode(el)) {
        var tagName = el.tagName.toLowerCase();
        // Opening tag
        result += "<" + tagName;
        // Attributes in an ordered way
        var attributeMap = getAttributeMap(el);
        var sortedKeys = Array.from(attributeMap.keys()).sort();
        try {
            for (var sortedKeys_1 = __values(sortedKeys), sortedKeys_1_1 = sortedKeys_1.next(); !sortedKeys_1_1.done; sortedKeys_1_1 = sortedKeys_1.next()) {
                var key = sortedKeys_1_1.value;
                var lowerCaseKey = key.toLowerCase();
                var attValue = attributeMap.get(key);
                if (typeof attValue !== 'string') {
                    result += " " + lowerCaseKey;
                }
                else {
                    // Browsers order style rules differently. Order them alphabetically for consistency.
                    if (lowerCaseKey === 'style') {
                        attValue = attValue.split(/; ?/).filter(function (s) { return !!s; }).sort().map(function (s) { return s + ";"; }).join(' ');
                    }
                    result += " " + lowerCaseKey + "=\"" + attValue + "\"";
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (sortedKeys_1_1 && !sortedKeys_1_1.done && (_a = sortedKeys_1.return)) _a.call(sortedKeys_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        result += '>';
        // Children
        var childrenRoot = templateAwareRoot(el);
        var children = childrenRoot ? childrenRoot.childNodes : [];
        for (var j = 0; j < children.length; j++) {
            result += stringifyElement(children[j]);
        }
        // Closing tag
        if (_selfClosingTags.indexOf(tagName) == -1) {
            result += "</" + tagName + ">";
        }
    }
    else if (isCommentNode(el)) {
        result += "<!--" + el.nodeValue + "-->";
    }
    else {
        result += el.textContent;
    }
    return result;
}
function createNgZone() {
    return new NgZone({ enableLongStackTrace: true, shouldCoalesceEventChangeDetection: false });
}
function isCommentNode(node) {
    return node.nodeType === Node.COMMENT_NODE;
}
function isTextNode(node) {
    return node.nodeType === Node.TEXT_NODE;
}
function getContent(node) {
    if ('content' in node) {
        return node.content;
    }
    else {
        return node;
    }
}
function templateAwareRoot(el) {
    return ɵgetDOM().isElementNode(el) && el.nodeName === 'TEMPLATE' ? getContent(el) : el;
}
function setCookie(name, value) {
    // document.cookie is magical, assigning into it assigns/overrides one cookie value, but does
    // not clear other cookies.
    document.cookie = encodeURIComponent(name) + '=' + encodeURIComponent(value);
}
function supportsWebAnimation() {
    return typeof Element.prototype['animate'] === 'function';
}
function hasStyle(element, styleName, styleValue) {
    var value = element.style[styleName] || '';
    return styleValue ? value == styleValue : value.length > 0;
}
function hasClass(element, className) {
    return element.classList.contains(className);
}
function sortedClassList(element) {
    return Array.prototype.slice.call(element.classList, 0).sort();
}
function createTemplate(html) {
    var t = ɵgetDOM().getDefaultDocument().createElement('template');
    t.innerHTML = html;
    return t;
}
function childNodesAsList(el) {
    var childNodes = el.childNodes;
    var res = [];
    for (var i = 0; i < childNodes.length; i++) {
        res[i] = childNodes[i];
    }
    return res;
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function initBrowserTests() {
    ɵBrowserDomAdapter.makeCurrent();
    BrowserDetection.setup();
}
var _TEST_BROWSER_PLATFORM_PROVIDERS = [{ provide: PLATFORM_INITIALIZER, useValue: initBrowserTests, multi: true }];
/**
 * Platform for testing
 *
 * @publicApi
 */
var platformBrowserTesting = createPlatformFactory(platformCore, 'browserTesting', _TEST_BROWSER_PLATFORM_PROVIDERS);
/**
 * NgModule for testing.
 *
 * @publicApi
 */
var BrowserTestingModule = /** @class */ (function () {
    function BrowserTestingModule() {
    }
    BrowserTestingModule.ɵmod = ɵɵdefineNgModule({ type: BrowserTestingModule });
    BrowserTestingModule.ɵinj = ɵɵdefineInjector({ factory: function BrowserTestingModule_Factory(t) { return new (t || BrowserTestingModule)(); }, providers: [
            { provide: APP_ID, useValue: 'a' },
            ɵELEMENT_PROBE_PROVIDERS,
            { provide: NgZone, useFactory: createNgZone },
        ], imports: [BrowserModule] });
    return BrowserTestingModule;
}());
/*@__PURE__*/ ɵɵsetNgModuleScope(BrowserTestingModule, { exports: [BrowserModule] });
/*@__PURE__*/ ɵsetClassMetadata(BrowserTestingModule, [{
        type: NgModule,
        args: [{
                exports: [BrowserModule],
                providers: [
                    { provide: APP_ID, useValue: 'a' },
                    ɵELEMENT_PROBE_PROVIDERS,
                    { provide: NgZone, useFactory: createNgZone },
                ]
            }]
    }], null, null);

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

export { BrowserTestingModule, platformBrowserTesting };
//# sourceMappingURL=testing.js.map
