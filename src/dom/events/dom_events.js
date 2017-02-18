/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '../dom_tokens';
import { EventManagerPlugin } from './event_manager';
var DomEventsPlugin = (function (_super) {
    __extends(DomEventsPlugin, _super);
    /**
     * @param {?} doc
     */
    function DomEventsPlugin(doc) {
        return _super.call(this, doc) || this;
    }
    /**
     * @param {?} eventName
     * @return {?}
     */
    DomEventsPlugin.prototype.supports = function (eventName) { return true; };
    /**
     * @param {?} element
     * @param {?} eventName
     * @param {?} handler
     * @return {?}
     */
    DomEventsPlugin.prototype.addEventListener = function (element, eventName, handler) {
        element.addEventListener(eventName, /** @type {?} */ (handler), false);
        return function () { return element.removeEventListener(eventName, /** @type {?} */ (handler), false); };
    };
    return DomEventsPlugin;
}(EventManagerPlugin));
export { DomEventsPlugin };
DomEventsPlugin.decorators = [
    { type: Injectable },
];
/** @nocollapse */
DomEventsPlugin.ctorParameters = function () { return [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] },] },
]; };
function DomEventsPlugin_tsickle_Closure_declarations() {
    /** @type {?} */
    DomEventsPlugin.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    DomEventsPlugin.ctorParameters;
}
//# sourceMappingURL=dom_events.js.map