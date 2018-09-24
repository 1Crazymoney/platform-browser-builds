/**
 * @license Angular v7.0.0-beta.6+35.sha-82a14dc
 * (c) 2010-2018 Google, Inc. https://angular.io/
 * License: MIT
 */

import { NgZone, ɵglobal, APP_ID, NgModule, PLATFORM_INITIALIZER, createPlatformFactory, platformCore } from '@angular/core';
import { ɵgetDOM, BrowserModule, ɵBrowserDomAdapter, ɵELEMENT_PROBE_PROVIDERS } from '@angular/platform-browser';
import { __decorate } from 'tslib';

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class BrowserDetection {
    get _ua() {
        if (typeof this._overrideUa === 'string') {
            return this._overrideUa;
        }
        return ɵgetDOM() ? ɵgetDOM().getUserAgent() : '';
    }
    static setup() { }
    constructor(ua) { this._overrideUa = ua; }
    get isFirefox() { return this._ua.indexOf('Firefox') > -1; }
    get isAndroid() {
        return this._ua.indexOf('Mozilla/5.0') > -1 && this._ua.indexOf('Android') > -1 &&
            this._ua.indexOf('AppleWebKit') > -1 && this._ua.indexOf('Chrome') == -1 &&
            this._ua.indexOf('IEMobile') == -1;
    }
    get isEdge() { return this._ua.indexOf('Edge') > -1; }
    get isIE() { return this._ua.indexOf('Trident') > -1; }
    get isWebkit() {
        return this._ua.indexOf('AppleWebKit') > -1 && this._ua.indexOf('Edge') == -1 &&
            this._ua.indexOf('IEMobile') == -1;
    }
    get isIOS7() {
        return (this._ua.indexOf('iPhone OS 7') > -1 || this._ua.indexOf('iPad OS 7') > -1) &&
            this._ua.indexOf('IEMobile') == -1;
    }
    get isSlow() { return this.isAndroid || this.isIE || this.isIOS7; }
    // The Intl API is only natively supported in Chrome, Firefox, IE11 and Edge.
    // This detector is needed in tests to make the difference between:
    // 1) IE11/Edge: they have a native Intl API, but with some discrepancies
    // 2) IE9/IE10: they use the polyfill, and so no discrepancies
    get supportsNativeIntlApi() {
        return !!ɵglobal.Intl && ɵglobal.Intl !== ɵglobal.IntlPolyfill;
    }
    get isChromeDesktop() {
        return this._ua.indexOf('Chrome') > -1 && this._ua.indexOf('Mobile Safari') == -1 &&
            this._ua.indexOf('Edge') == -1;
    }
    // "Old Chrome" means Chrome 3X, where there are some discrepancies in the Intl API.
    // Android 4.4 and 5.X have such browsers by default (respectively 30 and 39).
    get isOldChrome() {
        return this._ua.indexOf('Chrome') > -1 && this._ua.indexOf('Chrome/3') > -1 &&
            this._ua.indexOf('Edge') == -1;
    }
    get supportsCustomElements() { return (typeof ɵglobal.customElements !== 'undefined'); }
    get supportsDeprecatedCustomCustomElementsV0() {
        return (typeof document.registerElement !== 'undefined');
    }
    get supportsShadowDom() {
        const testEl = document.createElement('div');
        return (typeof testEl.attachShadow !== 'undefined');
    }
    get supportsDeprecatedShadowDomV0() {
        const testEl = document.createElement('div');
        return (typeof testEl.createShadowRoot !== 'undefined');
    }
}
BrowserDetection.setup();
function createNgZone() {
    return new NgZone({ enableLongStackTrace: true });
}

function initBrowserTests() {
    ɵBrowserDomAdapter.makeCurrent();
    BrowserDetection.setup();
}
const _TEST_BROWSER_PLATFORM_PROVIDERS = [{ provide: PLATFORM_INITIALIZER, useValue: initBrowserTests, multi: true }];
/**
 * Platform for testing
 *
 *
 */
const platformBrowserTesting = createPlatformFactory(platformCore, 'browserTesting', _TEST_BROWSER_PLATFORM_PROVIDERS);
/**
 * NgModule for testing.
 *
 *
 */
let BrowserTestingModule = class BrowserTestingModule {
};
BrowserTestingModule = __decorate([
    NgModule({
        exports: [BrowserModule],
        providers: [
            { provide: APP_ID, useValue: 'a' },
            ɵELEMENT_PROBE_PROVIDERS,
            { provide: NgZone, useFactory: createNgZone },
        ]
    })
], BrowserTestingModule);

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

export { platformBrowserTesting, BrowserTestingModule };
//# sourceMappingURL=testing.js.map
