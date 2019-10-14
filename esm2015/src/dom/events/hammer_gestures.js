/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, InjectionToken, NgModule, Optional, ɵConsole as Console } from '@angular/core';
import { EVENT_MANAGER_PLUGINS, EventManagerPlugin } from './event_manager';
import * as i0 from "@angular/core";
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Supported HammerJS recognizer event names.
 * @type {?}
 */
const EVENT_NAMES = {
    // pan
    'pan': true,
    'panstart': true,
    'panmove': true,
    'panend': true,
    'pancancel': true,
    'panleft': true,
    'panright': true,
    'panup': true,
    'pandown': true,
    // pinch
    'pinch': true,
    'pinchstart': true,
    'pinchmove': true,
    'pinchend': true,
    'pinchcancel': true,
    'pinchin': true,
    'pinchout': true,
    // press
    'press': true,
    'pressup': true,
    // rotate
    'rotate': true,
    'rotatestart': true,
    'rotatemove': true,
    'rotateend': true,
    'rotatecancel': true,
    // swipe
    'swipe': true,
    'swipeleft': true,
    'swiperight': true,
    'swipeup': true,
    'swipedown': true,
    // tap
    'tap': true,
};
/**
 * DI token for providing [HammerJS](http://hammerjs.github.io/) support to Angular.
 * @see `HammerGestureConfig`
 *
 * \@ngModule HammerModule
 * \@publicApi
 * @type {?}
 */
export const HAMMER_GESTURE_CONFIG = new InjectionToken('HammerGestureConfig');
/**
 * Injection token used to provide a {\@link HammerLoader} to Angular.
 *
 * \@publicApi
 * @type {?}
 */
export const HAMMER_LOADER = new InjectionToken('HammerLoader');
/**
 * @record
 */
export function HammerInstance() { }
if (false) {
    /**
     * @param {?} eventName
     * @param {?=} callback
     * @return {?}
     */
    HammerInstance.prototype.on = function (eventName, callback) { };
    /**
     * @param {?} eventName
     * @param {?=} callback
     * @return {?}
     */
    HammerInstance.prototype.off = function (eventName, callback) { };
    /**
     * @return {?}
     */
    HammerInstance.prototype.destroy = function () { };
}
/**
 * An injectable [HammerJS Manager](http://hammerjs.github.io/api/#hammer.manager)
 * for gesture recognition. Configures specific event recognition.
 * \@publicApi
 */
export class HammerGestureConfig {
    constructor() {
        /**
         * A set of supported event names for gestures to be used in Angular.
         * Angular supports all built-in recognizers, as listed in
         * [HammerJS documentation](http://hammerjs.github.io/).
         */
        this.events = [];
        /**
         * Maps gesture event names to a set of configuration options
         * that specify overrides to the default values for specific properties.
         *
         * The key is a supported event name to be configured,
         * and the options object contains a set of properties, with override values
         * to be applied to the named recognizer event.
         * For example, to disable recognition of the rotate event, specify
         *  `{"rotate": {"enable": false}}`.
         *
         * Properties that are not present take the HammerJS default values.
         * For information about which properties are supported for which events,
         * and their allowed and default values, see
         * [HammerJS documentation](http://hammerjs.github.io/).
         *
         */
        this.overrides = {};
    }
    /**
     * Creates a [HammerJS Manager](http://hammerjs.github.io/api/#hammer.manager)
     * and attaches it to a given HTML element.
     * @param {?} element The element that will recognize gestures.
     * @return {?} A HammerJS event-manager object.
     */
    buildHammer(element) {
        /** @type {?} */
        const mc = new (/** @type {?} */ (Hammer))(element, this.options);
        mc.get('pinch').set({ enable: true });
        mc.get('rotate').set({ enable: true });
        for (const eventName in this.overrides) {
            mc.get(eventName).set(this.overrides[eventName]);
        }
        return mc;
    }
}
HammerGestureConfig.decorators = [
    { type: Injectable },
];
/** @nocollapse */ HammerGestureConfig.ɵfac = function HammerGestureConfig_Factory(t) { return new (t || HammerGestureConfig)(); };
/** @nocollapse */ HammerGestureConfig.ngInjectableDef = i0.ɵɵdefineInjectable({ token: HammerGestureConfig, factory: function (t) { return HammerGestureConfig.ɵfac(t); }, providedIn: null });
/*@__PURE__*/ i0.ɵsetClassMetadata(HammerGestureConfig, [{
        type: Injectable
    }], null, null);
if (false) {
    /**
     * A set of supported event names for gestures to be used in Angular.
     * Angular supports all built-in recognizers, as listed in
     * [HammerJS documentation](http://hammerjs.github.io/).
     * @type {?}
     */
    HammerGestureConfig.prototype.events;
    /**
     * Maps gesture event names to a set of configuration options
     * that specify overrides to the default values for specific properties.
     *
     * The key is a supported event name to be configured,
     * and the options object contains a set of properties, with override values
     * to be applied to the named recognizer event.
     * For example, to disable recognition of the rotate event, specify
     *  `{"rotate": {"enable": false}}`.
     *
     * Properties that are not present take the HammerJS default values.
     * For information about which properties are supported for which events,
     * and their allowed and default values, see
     * [HammerJS documentation](http://hammerjs.github.io/).
     *
     * @type {?}
     */
    HammerGestureConfig.prototype.overrides;
    /**
     * Properties whose default values can be overridden for a given event.
     * Different sets of properties apply to different events.
     * For information about which properties are supported for which events,
     * and their allowed and default values, see
     * [HammerJS documentation](http://hammerjs.github.io/).
     * @type {?}
     */
    HammerGestureConfig.prototype.options;
}
/**
 * Event plugin that adds Hammer support to an application.
 *
 * \@ngModule HammerModule
 */
export class HammerGesturesPlugin extends EventManagerPlugin {
    /**
     * @param {?} doc
     * @param {?} _config
     * @param {?} console
     * @param {?=} loader
     */
    constructor(doc, _config, console, loader) {
        super(doc);
        this._config = _config;
        this.console = console;
        this.loader = loader;
    }
    /**
     * @param {?} eventName
     * @return {?}
     */
    supports(eventName) {
        if (!EVENT_NAMES.hasOwnProperty(eventName.toLowerCase()) && !this.isCustomEvent(eventName)) {
            return false;
        }
        if (!((/** @type {?} */ (window))).Hammer && !this.loader) {
            this.console.warn(`The "${eventName}" event cannot be bound because Hammer.JS is not ` +
                `loaded and no custom loader has been specified.`);
            return false;
        }
        return true;
    }
    /**
     * @param {?} element
     * @param {?} eventName
     * @param {?} handler
     * @return {?}
     */
    addEventListener(element, eventName, handler) {
        /** @type {?} */
        const zone = this.manager.getZone();
        eventName = eventName.toLowerCase();
        // If Hammer is not present but a loader is specified, we defer adding the event listener
        // until Hammer is loaded.
        if (!((/** @type {?} */ (window))).Hammer && this.loader) {
            // This `addEventListener` method returns a function to remove the added listener.
            // Until Hammer is loaded, the returned function needs to *cancel* the registration rather
            // than remove anything.
            /** @type {?} */
            let cancelRegistration = false;
            /** @type {?} */
            let deregister = (/**
             * @return {?}
             */
            () => { cancelRegistration = true; });
            this.loader()
                .then((/**
             * @return {?}
             */
            () => {
                // If Hammer isn't actually loaded when the custom loader resolves, give up.
                if (!((/** @type {?} */ (window))).Hammer) {
                    this.console.warn(`The custom HAMMER_LOADER completed, but Hammer.JS is not present.`);
                    deregister = (/**
                     * @return {?}
                     */
                    () => { });
                    return;
                }
                if (!cancelRegistration) {
                    // Now that Hammer is loaded and the listener is being loaded for real,
                    // the deregistration function changes from canceling registration to removal.
                    deregister = this.addEventListener(element, eventName, handler);
                }
            }))
                .catch((/**
             * @return {?}
             */
            () => {
                this.console.warn(`The "${eventName}" event cannot be bound because the custom ` +
                    `Hammer.JS loader failed.`);
                deregister = (/**
                 * @return {?}
                 */
                () => { });
            }));
            // Return a function that *executes* `deregister` (and not `deregister` itself) so that we
            // can change the behavior of `deregister` once the listener is added. Using a closure in
            // this way allows us to avoid any additional data structures to track listener removal.
            return (/**
             * @return {?}
             */
            () => { deregister(); });
        }
        return zone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            // Creating the manager bind events, must be done outside of angular
            /** @type {?} */
            const mc = this._config.buildHammer(element);
            /** @type {?} */
            const callback = (/**
             * @param {?} eventObj
             * @return {?}
             */
            function (eventObj) {
                zone.runGuarded((/**
                 * @return {?}
                 */
                function () { handler(eventObj); }));
            });
            mc.on(eventName, callback);
            return (/**
             * @return {?}
             */
            () => {
                mc.off(eventName, callback);
                // destroy mc to prevent memory leak
                if (typeof mc.destroy === 'function') {
                    mc.destroy();
                }
            });
        }));
    }
    /**
     * @param {?} eventName
     * @return {?}
     */
    isCustomEvent(eventName) { return this._config.events.indexOf(eventName) > -1; }
}
HammerGesturesPlugin.decorators = [
    { type: Injectable },
];
/** @nocollapse */
HammerGesturesPlugin.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: HammerGestureConfig, decorators: [{ type: Inject, args: [HAMMER_GESTURE_CONFIG,] }] },
    { type: Console },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [HAMMER_LOADER,] }] }
];
/** @nocollapse */ HammerGesturesPlugin.ɵfac = function HammerGesturesPlugin_Factory(t) { return new (t || HammerGesturesPlugin)(i0.ɵɵinject(DOCUMENT), i0.ɵɵinject(HAMMER_GESTURE_CONFIG), i0.ɵɵinject(i0.ɵConsole), i0.ɵɵinject(HAMMER_LOADER, 8)); };
/** @nocollapse */ HammerGesturesPlugin.ngInjectableDef = i0.ɵɵdefineInjectable({ token: HammerGesturesPlugin, factory: function (t) { return HammerGesturesPlugin.ɵfac(t); }, providedIn: null });
/*@__PURE__*/ i0.ɵsetClassMetadata(HammerGesturesPlugin, [{
        type: Injectable
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }, { type: HammerGestureConfig, decorators: [{
                type: Inject,
                args: [HAMMER_GESTURE_CONFIG]
            }] }, { type: i0.ɵConsole }, { type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [HAMMER_LOADER]
            }] }]; }, null);
if (false) {
    /**
     * @type {?}
     * @private
     */
    HammerGesturesPlugin.prototype._config;
    /**
     * @type {?}
     * @private
     */
    HammerGesturesPlugin.prototype.console;
    /**
     * @type {?}
     * @private
     */
    HammerGesturesPlugin.prototype.loader;
}
/**
 * In Ivy, support for Hammer gestures is optional, so applications must
 * import the `HammerModule` at root to turn on support. This means that
 * Hammer-specific code can be tree-shaken away if not needed.
 * @type {?}
 */
export const HAMMER_PROVIDERS__POST_R3__ = [];
/**
 * In View Engine, support for Hammer gestures is built-in by default.
 * @type {?}
 */
export const HAMMER_PROVIDERS__PRE_R3__ = [
    {
        provide: EVENT_MANAGER_PLUGINS,
        useClass: HammerGesturesPlugin,
        multi: true,
        deps: [DOCUMENT, HAMMER_GESTURE_CONFIG, Console, [new Optional(), HAMMER_LOADER]]
    },
    { provide: HAMMER_GESTURE_CONFIG, useClass: HammerGestureConfig, deps: [] },
];
/** @type {?} */
export const HAMMER_PROVIDERS = HAMMER_PROVIDERS__POST_R3__;
/**
 * Adds support for HammerJS.
 *
 * Import this module at the root of your application so that Angular can work with
 * HammerJS to detect gesture events.
 *
 * Note that applications still need to include the HammerJS script itself. This module
 * simply sets up the coordination layer between HammerJS and Angular's EventManager.
 *
 * \@publicApi
 */
export class HammerModule {
}
HammerModule.decorators = [
    { type: NgModule, args: [{ providers: HAMMER_PROVIDERS__PRE_R3__ },] },
];
/** @nocollapse */ HammerModule.ɵmod = i0.ɵɵdefineNgModule({ type: HammerModule });
/** @nocollapse */ HammerModule.ngInjectorDef = i0.ɵɵdefineInjector({ factory: function HammerModule_Factory(t) { return new (t || HammerModule)(); }, providers: HAMMER_PROVIDERS__PRE_R3__ });
/*@__PURE__*/ i0.ɵsetClassMetadata(HammerModule, [{
        type: NgModule,
        args: [{ providers: HAMMER_PROVIDERS__PRE_R3__ }]
    }], null, null);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFtbWVyX2dlc3R1cmVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvcGxhdGZvcm0tYnJvd3Nlci9zcmMvZG9tL2V2ZW50cy9oYW1tZXJfZ2VzdHVyZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQVFBLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QyxPQUFPLEVBQUMsTUFBTSxFQUFFLFVBQVUsRUFBRSxjQUFjLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBWSxRQUFRLElBQUksT0FBTyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRXBILE9BQU8sRUFBQyxxQkFBcUIsRUFBRSxrQkFBa0IsRUFBQyxNQUFNLGlCQUFpQixDQUFDOzs7Ozs7Ozs7Ozs7O01BT3BFLFdBQVcsR0FBRzs7SUFFbEIsS0FBSyxFQUFFLElBQUk7SUFDWCxVQUFVLEVBQUUsSUFBSTtJQUNoQixTQUFTLEVBQUUsSUFBSTtJQUNmLFFBQVEsRUFBRSxJQUFJO0lBQ2QsV0FBVyxFQUFFLElBQUk7SUFDakIsU0FBUyxFQUFFLElBQUk7SUFDZixVQUFVLEVBQUUsSUFBSTtJQUNoQixPQUFPLEVBQUUsSUFBSTtJQUNiLFNBQVMsRUFBRSxJQUFJOztJQUVmLE9BQU8sRUFBRSxJQUFJO0lBQ2IsWUFBWSxFQUFFLElBQUk7SUFDbEIsV0FBVyxFQUFFLElBQUk7SUFDakIsVUFBVSxFQUFFLElBQUk7SUFDaEIsYUFBYSxFQUFFLElBQUk7SUFDbkIsU0FBUyxFQUFFLElBQUk7SUFDZixVQUFVLEVBQUUsSUFBSTs7SUFFaEIsT0FBTyxFQUFFLElBQUk7SUFDYixTQUFTLEVBQUUsSUFBSTs7SUFFZixRQUFRLEVBQUUsSUFBSTtJQUNkLGFBQWEsRUFBRSxJQUFJO0lBQ25CLFlBQVksRUFBRSxJQUFJO0lBQ2xCLFdBQVcsRUFBRSxJQUFJO0lBQ2pCLGNBQWMsRUFBRSxJQUFJOztJQUVwQixPQUFPLEVB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QzdGLHNDQUFxRTs7Ozs7Ozs7QUFzRjNFLE1BQU0sT0FBTywyQkFBMkIsR0FBRyxFQUFFOzs7OztBQUs3QyxNQUFNLE9BQU8sMEJBQTBCLEdBQWU7SUFDcEQ7UUFDRSxPQUFPLEVBQUUscUJBQXFCO1FBQzlCLFFBQVEsRUFBRSxvQkFBb0I7UUFDOUIsS0FBSyxFQUFFLElBQUk7UUFDWCxJQUFJLEVBQUUsQ0FBQyxRQUFRLEVBQUUscUJBQXFCLEVBQUUsT0FBTyxFQUFFLENBQUMsSUFBSSxRQUFRLEVBQUUsRUFBRSxhQUFhLENBQUMsQ0FBQztLQUNsRjtJQUNELEVBQUMsT0FBTyxFQUFFLHFCQUFxQixFQUFFLFFBQVEsRUFBRSxtQkFBbUIsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFDO0NBQzFFOztBQUVELE1BQU0sT0FBTyxnQkFBZ0IsR0FmaEIsMkJBZTZDOzs7Ozs7Ozs7Ozs7QUFjMUQsTUFBTSxPQUFPLFlBQVk7OztZQUR4QixRQUFRLFNBQUMsRUFBQyxTQUFTLEVBQUUsMEJBQTBCLEVBQUM7O2dEQUNwQyxZQUFZO2dIQUFaLFlBQVksbUJBREgsMEJBQTBCO21DQUNuQyxZQUFZO2NBRHhCLFFBQVE7ZUFBQyxFQUFDLFNBQVMsRUFBRSwwQkFBMEIsRUFBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtET0NVTUVOVH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7SW5qZWN0LCBJbmplY3RhYmxlLCBJbmplY3Rpb25Ub2tlbiwgTmdNb2R1bGUsIE9wdGlvbmFsLCBQcm92aWRlciwgybVDb25zb2xlIGFzIENvbnNvbGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge0VWRU5UX01BTkFHRVJfUExVR0lOUywgRXZlbnRNYW5hZ2VyUGx1Z2lufSBmcm9tICcuL2V2ZW50X21hbmFnZXInO1xuXG5cblxuLyoqXG4gKiBTdXBwb3J0ZWQgSGFtbWVySlMgcmVjb2duaXplciBldmVudCBuYW1lcy5cbiAqL1xuY29uc3QgRVZFTlRfTkFNRVMgPSB7XG4gIC8vIHBhblxuICAncGFuJzogdHJ1ZSxcbiAgJ3BhbnN0YXJ0JzogdHJ1ZSxcbiAgJ3Bhbm1vdmUnOiB0cnVlLFxuICAncGFuZW5kJzogdHJ1ZSxcbiAgJ3BhbmNhbmNlbCc6IHRydWUsXG4gICdwYW5sZWZ0JzogdHJ1ZSxcbiAgJ3BhbnJpZ2h0JzogdHJ1ZSxcbiAgJ3BhbnVwJzogdHJ1ZSxcbiAgJ3BhbmRvd24nOiB0cnVlLFxuICAvLyBwaW5jaFxuICAncGluY2gnOiB0cnVlLFxuICAncGluY2hzdGFydCc6IHRydWUsXG4gICdwaW5jaG1vdmUnOiB0cnVlLFxuICAncGluY2hlbmQnOiB0cnVlLFxuICAncGluY2hjYW5jZWwnOiB0cnVlLFxuICAncGluY2hpbic6IHRydWUsXG4gICdwaW5jaG91dCc6IHRydWUsXG4gIC8vIHByZXNzXG4gICdwcmVzcyc6IHRydWUsXG4gICdwcmVzc3VwJzogdHJ1ZSxcbiAgLy8gcm90YXRlXG4gICdyb3RhdGUnOiB0cnVlLFxuICAncm90YXRlc3RhcnQnOiB0cnVlLFxuICAncm90YXRlbW92ZSc6IHRydWUsXG4gICdyb3RhdGVlbmQnOiB0cnVlLFxuICAncm90YXRlY2FuY2VsJzogdHJ1ZSxcbiAgLy8gc3dpcGVcbiAgJ3N3aXBlJzogdHJ1ZSxcbiAgJ3N3aXBlbGVmdCc6IHRydWUsXG4gICdzd2lwZXJpZ2h0JzogdHJ1ZSxcbiAgJ3N3aXBldXAnOiB0cnVlLFxuICAnc3dpcGVkb3duJzogdHJ1ZSxcbiAgLy8gdGFwXG4gICd0YXAnOiB0cnVlLFxufTtcblxuLyoqXG4gKiBESSB0b2tlbiBmb3IgcHJvdmlkaW5nIFtIYW1tZXJKU10oaHR0cDovL2hhbW1lcmpzLmdpdGh1Yi5pby8pIHN1cHBvcnQgdG8gQW5ndWxhci5cbiAqIEBzZWUgYEhhbW1lckdlc3R1cmVDb25maWdgXG4gKlxuICogQG5nTW9kdWxlIEhhbW1lck1vZHVsZVxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgY29uc3QgSEFNTUVSX0dFU1RVUkVfQ09ORklHID0gbmV3IEluamVjdGlvblRva2VuPEhhbW1lckdlc3R1cmVDb25maWc+KCdIYW1tZXJHZXN0dXJlQ29uZmlnJyk7XG5cblxuLyoqXG4gKiBGdW5jdGlvbiB0aGF0IGxvYWRzIEhhbW1lckpTLCByZXR1cm5pbmcgYSBwcm9taXNlIHRoYXQgaXMgcmVzb2x2ZWQgb25jZSBIYW1tZXJKcyBpcyBsb2FkZWQuXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgdHlwZSBIYW1tZXJMb2FkZXIgPSAoKSA9PiBQcm9taXNlPHZvaWQ+O1xuXG4vKipcbiAqIEluamVjdGlvbiB0b2tlbiB1c2VkIHRvIHByb3ZpZGUgYSB7QGxpbmsgSGFtbWVyTG9hZGVyfSB0byBBbmd1bGFyLlxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGNvbnN0IEhBTU1FUl9MT0FERVIgPSBuZXcgSW5qZWN0aW9uVG9rZW48SGFtbWVyTG9hZGVyPignSGFtbWVyTG9hZGVyJyk7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSGFtbWVySW5zdGFuY2Uge1xuICBvbihldmVudE5hbWU6IHN0cmluZywgY2FsbGJhY2s/OiBGdW5jdGlvbik6IHZvaWQ7XG4gIG9mZihldmVudE5hbWU6IHN0cmluZywgY2FsbGJhY2s/OiBGdW5jdGlvbik6IHZvaWQ7XG4gIGRlc3Ryb3k/KCk6IHZvaWQ7XG59XG5cbi8qKlxuICogQW4gaW5qZWN0YWJsZSBbSGFtbWVySlMgTWFuYWdlcl0oaHR0cDovL2hhbW1lcmpzLmdpdGh1Yi5pby9hcGkvI2hhbW1lci5tYW5hZ2VyKVxuICogZm9yIGdlc3R1cmUgcmVjb2duaXRpb24uIENvbmZpZ3VyZXMgc3BlY2lmaWMgZXZlbnQgcmVjb2duaXRpb24uXG4gKiBAcHVibGljQXBpXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBIYW1tZXJHZXN0dXJlQ29uZmlnIHtcbiAgLyoqXG4gICAqIEEgc2V0IG9mIHN1cHBvcnRlZCBldmVudCBuYW1lcyBmb3IgZ2VzdHVyZXMgdG8gYmUgdXNlZCBpbiBBbmd1bGFyLlxuICAgKiBBbmd1bGFyIHN1cHBvcnRzIGFsbCBidWlsdC1pbiByZWNvZ25pemVycywgYXMgbGlzdGVkIGluXG4gICAqIFtIYW1tZXJKUyBkb2N1bWVudGF0aW9uXShodHRwOi8vaGFtbWVyanMuZ2l0aHViLmlvLykuXG4gICAqL1xuICBldmVudHM6IHN0cmluZ1tdID0gW107XG5cbiAgLyoqXG4gICogTWFwcyBnZXN0dXJlIGV2ZW50IG5hbWVzIHRvIGEgc2V0IG9mIGNvbmZpZ3VyYXRpb24gb3B0aW9uc1xuICAqIHRoYXQgc3BlY2lmeSBvdmVycmlkZXMgdG8gdGhlIGRlZmF1bHQgdmFsdWVzIGZvciBzcGVjaWZpYyBwcm9wZXJ0aWVzLlxuICAqXG4gICogVGhlIGtleSBpcyBhIHN1cHBvcnRlZCBldmVudCBuYW1lIHRvIGJlIGNvbmZpZ3VyZWQsXG4gICogYW5kIHRoZSBvcHRpb25zIG9iamVjdCBjb250YWlucyBhIHNldCBvZiBwcm9wZXJ0aWVzLCB3aXRoIG92ZXJyaWRlIHZhbHVlc1xuICAqIHRvIGJlIGFwcGxpZWQgdG8gdGhlIG5hbWVkIHJlY29nbml6ZXIgZXZlbnQuXG4gICogRm9yIGV4YW1wbGUsIHRvIGRpc2FibGUgcmVjb2duaXRpb24gb2YgdGhlIHJvdGF0ZSBldmVudCwgc3BlY2lmeVxuICAqICBge1wicm90YXRlXCI6IHtcImVuYWJsZVwiOiBmYWxzZX19YC5cbiAgKlxuICAqIFByb3BlcnRpZXMgdGhhdCBhcmUgbm90IHByZXNlbnQgdGFrZSB0aGUgSGFtbWVySlMgZGVmYXVsdCB2YWx1ZXMuXG4gICogRm9yIGluZm9ybWF0aW9uIGFib3V0IHdoaWNoIHByb3BlcnRpZXMgYXJlIHN1cHBvcnRlZCBmb3Igd2hpY2ggZXZlbnRzLFxuICAqIGFuZCB0aGVpciBhbGxvd2VkIGFuZCBkZWZhdWx0IHZhbHVlcywgc2VlXG4gICogW0hhbW1lckpTIGRvY3VtZW50YXRpb25dKGh0dHA6Ly9oYW1tZXJqcy5naXRodWIuaW8vKS5cbiAgKlxuICAqL1xuICBvdmVycmlkZXM6IHtba2V5OiBzdHJpbmddOiBPYmplY3R9ID0ge307XG5cbiAgLyoqXG4gICAqIFByb3BlcnRpZXMgd2hvc2UgZGVmYXVsdCB2YWx1ZXMgY2FuIGJlIG92ZXJyaWRkZW4gZm9yIGEgZ2l2ZW4gZXZlbnQuXG4gICAqIERpZmZlcmVudCBzZXRzIG9mIHByb3BlcnRpZXMgYXBwbHkgdG8gZGlmZmVyZW50IGV2ZW50cy5cbiAgICogRm9yIGluZm9ybWF0aW9uIGFib3V0IHdoaWNoIHByb3BlcnRpZXMgYXJlIHN1cHBvcnRlZCBmb3Igd2hpY2ggZXZlbnRzLFxuICAgKiBhbmQgdGhlaXIgYWxsb3dlZCBhbmQgZGVmYXVsdCB2YWx1ZXMsIHNlZVxuICAgKiBbSGFtbWVySlMgZG9jdW1lbnRhdGlvbl0oaHR0cDovL2hhbW1lcmpzLmdpdGh1Yi5pby8pLlxuICAgKi9cbiAgb3B0aW9ucz86IHtcbiAgICBjc3NQcm9wcz86IGFueTsgZG9tRXZlbnRzPzogYm9vbGVhbjsgZW5hYmxlPzogYm9vbGVhbiB8ICgobWFuYWdlcjogYW55KSA9PiBib29sZWFuKTtcbiAgICBwcmVzZXQ/OiBhbnlbXTtcbiAgICB0b3VjaEFjdGlvbj86IHN0cmluZztcbiAgICByZWNvZ25pemVycz86IGFueVtdO1xuICAgIGlucHV0Q2xhc3M/OiBhbnk7XG4gICAgaW5wdXRUYXJnZXQ/OiBFdmVudFRhcmdldDtcbiAgfTtcblxuICAvKipcbiAgICogQ3JlYXRlcyBhIFtIYW1tZXJKUyBNYW5hZ2VyXShodHRwOi8vaGFtbWVyanMuZ2l0aHViLmlvL2FwaS8jaGFtbWVyLm1hbmFnZXIpXG4gICAqIGFuZCBhdHRhY2hlcyBpdCB0byBhIGdpdmVuIEhUTUwgZWxlbWVudC5cbiAgICogQHBhcmFtIGVsZW1lbnQgVGhlIGVsZW1lbnQgdGhhdCB3aWxsIHJlY29nbml6ZSBnZXN0dXJlcy5cbiAgICogQHJldHVybnMgQSBIYW1tZXJKUyBldmVudC1tYW5hZ2VyIG9iamVjdC5cbiAgICovXG4gIGJ1aWxkSGFtbWVyKGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogSGFtbWVySW5zdGFuY2Uge1xuICAgIGNvbnN0IG1jID0gbmV3IEhhbW1lciAhKGVsZW1lbnQsIHRoaXMub3B0aW9ucyk7XG5cbiAgICBtYy5nZXQoJ3BpbmNoJykuc2V0KHtlbmFibGU6IHRydWV9KTtcbiAgICBtYy5nZXQoJ3JvdGF0ZScpLnNldCh7ZW5hYmxlOiB0cnVlfSk7XG5cbiAgICBmb3IgKGNvbnN0IGV2ZW50TmFtZSBpbiB0aGlzLm92ZXJyaWRlcykge1xuICAgICAgbWMuZ2V0KGV2ZW50TmFtZSkuc2V0KHRoaXMub3ZlcnJpZGVzW2V2ZW50TmFtZV0pO1xuICAgIH1cblxuICAgIHJldHVybiBtYztcbiAgfVxufVxuXG4vKipcbiAqIEV2ZW50IHBsdWdpbiB0aGF0IGFkZHMgSGFtbWVyIHN1cHBvcnQgdG8gYW4gYXBwbGljYXRpb24uXG4gKlxuICogQG5nTW9kdWxlIEhhbW1lck1vZHVsZVxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSGFtbWVyR2VzdHVyZXNQbHVnaW4gZXh0ZW5kcyBFdmVudE1hbmFnZXJQbHVnaW4ge1xuICBjb25zdHJ1Y3RvcihcbiAgICAgIEBJbmplY3QoRE9DVU1FTlQpIGRvYzogYW55LFxuICAgICAgQEluamVjdChIQU1NRVJfR0VTVFVSRV9DT05GSUcpIHByaXZhdGUgX2NvbmZpZzogSGFtbWVyR2VzdHVyZUNvbmZpZywgcHJpdmF0ZSBjb25zb2xlOiBDb25zb2xlLFxuICAgICAgQE9wdGlvbmFsKCkgQEluamVjdChIQU1NRVJfTE9BREVSKSBwcml2YXRlIGxvYWRlcj86IEhhbW1lckxvYWRlcnxudWxsKSB7XG4gICAgc3VwZXIoZG9jKTtcbiAgfVxuXG4gIHN1cHBvcnRzKGV2ZW50TmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgaWYgKCFFVkVOVF9OQU1FUy5oYXNPd25Qcm9wZXJ0eShldmVudE5hbWUudG9Mb3dlckNhc2UoKSkgJiYgIXRoaXMuaXNDdXN0b21FdmVudChldmVudE5hbWUpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKCEod2luZG93IGFzIGFueSkuSGFtbWVyICYmICF0aGlzLmxvYWRlcikge1xuICAgICAgdGhpcy5jb25zb2xlLndhcm4oXG4gICAgICAgICAgYFRoZSBcIiR7ZXZlbnROYW1lfVwiIGV2ZW50IGNhbm5vdCBiZSBib3VuZCBiZWNhdXNlIEhhbW1lci5KUyBpcyBub3QgYCArXG4gICAgICAgICAgYGxvYWRlZCBhbmQgbm8gY3VzdG9tIGxvYWRlciBoYXMgYmVlbiBzcGVjaWZpZWQuYCk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBhZGRFdmVudExpc3RlbmVyKGVsZW1lbnQ6IEhUTUxFbGVtZW50LCBldmVudE5hbWU6IHN0cmluZywgaGFuZGxlcjogRnVuY3Rpb24pOiBGdW5jdGlvbiB7XG4gICAgY29uc3Qgem9uZSA9IHRoaXMubWFuYWdlci5nZXRab25lKCk7XG4gICAgZXZlbnROYW1lID0gZXZlbnROYW1lLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAvLyBJZiBIYW1tZXIgaXMgbm90IHByZXNlbnQgYnV0IGEgbG9hZGVyIGlzIHNwZWNpZmllZCwgd2UgZGVmZXIgYWRkaW5nIHRoZSBldmVudCBsaXN0ZW5lclxuICAgIC8vIHVudGlsIEhhbW1lciBpcyBsb2FkZWQuXG4gICAgaWYgKCEod2luZG93IGFzIGFueSkuSGFtbWVyICYmIHRoaXMubG9hZGVyKSB7XG4gICAgICAvLyBUaGlzIGBhZGRFdmVudExpc3RlbmVyYCBtZXRob2QgcmV0dXJucyBhIGZ1bmN0aW9uIHRvIHJlbW92ZSB0aGUgYWRkZWQgbGlzdGVuZXIuXG4gICAgICAvLyBVbnRpbCBIYW1tZXIgaXMgbG9hZGVkLCB0aGUgcmV0dXJuZWQgZnVuY3Rpb24gbmVlZHMgdG8gKmNhbmNlbCogdGhlIHJlZ2lzdHJhdGlvbiByYXRoZXJcbiAgICAgIC8vIHRoYW4gcmVtb3ZlIGFueXRoaW5nLlxuICAgICAgbGV0IGNhbmNlbFJlZ2lzdHJhdGlvbiA9IGZhbHNlO1xuICAgICAgbGV0IGRlcmVnaXN0ZXI6IEZ1bmN0aW9uID0gKCkgPT4geyBjYW5jZWxSZWdpc3RyYXRpb24gPSB0cnVlOyB9O1xuXG4gICAgICB0aGlzLmxvYWRlcigpXG4gICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgLy8gSWYgSGFtbWVyIGlzbid0IGFjdHVhbGx5IGxvYWRlZCB3aGVuIHRoZSBjdXN0b20gbG9hZGVyIHJlc29sdmVzLCBnaXZlIHVwLlxuICAgICAgICAgICAgaWYgKCEod2luZG93IGFzIGFueSkuSGFtbWVyKSB7XG4gICAgICAgICAgICAgIHRoaXMuY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICAgICAgYFRoZSBjdXN0b20gSEFNTUVSX0xPQURFUiBjb21wbGV0ZWQsIGJ1dCBIYW1tZXIuSlMgaXMgbm90IHByZXNlbnQuYCk7XG4gICAgICAgICAgICAgIGRlcmVnaXN0ZXIgPSAoKSA9PiB7fTtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIWNhbmNlbFJlZ2lzdHJhdGlvbikge1xuICAgICAgICAgICAgICAvLyBOb3cgdGhhdCBIYW1tZXIgaXMgbG9hZGVkIGFuZCB0aGUgbGlzdGVuZXIgaXMgYmVpbmcgbG9hZGVkIGZvciByZWFsLFxuICAgICAgICAgICAgICAvLyB0aGUgZGVyZWdpc3RyYXRpb24gZnVuY3Rpb24gY2hhbmdlcyBmcm9tIGNhbmNlbGluZyByZWdpc3RyYXRpb24gdG8gcmVtb3ZhbC5cbiAgICAgICAgICAgICAgZGVyZWdpc3RlciA9IHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihlbGVtZW50LCBldmVudE5hbWUsIGhhbmRsZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgICAgLmNhdGNoKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICAgIGBUaGUgXCIke2V2ZW50TmFtZX1cIiBldmVudCBjYW5ub3QgYmUgYm91bmQgYmVjYXVzZSB0aGUgY3VzdG9tIGAgK1xuICAgICAgICAgICAgICAgIGBIYW1tZXIuSlMgbG9hZGVyIGZhaWxlZC5gKTtcbiAgICAgICAgICAgIGRlcmVnaXN0ZXIgPSAoKSA9PiB7fTtcbiAgICAgICAgICB9KTtcblxuICAgICAgLy8gUmV0dXJuIGEgZnVuY3Rpb24gdGhhdCAqZXhlY3V0ZXMqIGBkZXJlZ2lzdGVyYCAoYW5kIG5vdCBgZGVyZWdpc3RlcmAgaXRzZWxmKSBzbyB0aGF0IHdlXG4gICAgICAvLyBjYW4gY2hhbmdlIHRoZSBiZWhhdmlvciBvZiBgZGVyZWdpc3RlcmAgb25jZSB0aGUgbGlzdGVuZXIgaXMgYWRkZWQuIFVzaW5nIGEgY2xvc3VyZSBpblxuICAgICAgLy8gdGhpcyB3YXkgYWxsb3dzIHVzIHRvIGF2b2lkIGFueSBhZGRpdGlvbmFsIGRhdGEgc3RydWN0dXJlcyB0byB0cmFjayBsaXN0ZW5lciByZW1vdmFsLlxuICAgICAgcmV0dXJuICgpID0+IHsgZGVyZWdpc3RlcigpOyB9O1xuICAgIH1cblxuICAgIHJldHVybiB6b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgIC8vIENyZWF0aW5nIHRoZSBtYW5hZ2VyIGJpbmQgZXZlbnRzLCBtdXN0IGJlIGRvbmUgb3V0c2lkZSBvZiBhbmd1bGFyXG4gICAgICBjb25zdCBtYyA9IHRoaXMuX2NvbmZpZy5idWlsZEhhbW1lcihlbGVtZW50KTtcbiAgICAgIGNvbnN0IGNhbGxiYWNrID0gZnVuY3Rpb24oZXZlbnRPYmo6IEhhbW1lcklucHV0KSB7XG4gICAgICAgIHpvbmUucnVuR3VhcmRlZChmdW5jdGlvbigpIHsgaGFuZGxlcihldmVudE9iaik7IH0pO1xuICAgICAgfTtcbiAgICAgIG1jLm9uKGV2ZW50TmFtZSwgY2FsbGJhY2spO1xuICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgbWMub2ZmKGV2ZW50TmFtZSwgY2FsbGJhY2spO1xuICAgICAgICAvLyBkZXN0cm95IG1jIHRvIHByZXZlbnQgbWVtb3J5IGxlYWtcbiAgICAgICAgaWYgKHR5cGVvZiBtYy5kZXN0cm95ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgbWMuZGVzdHJveSgpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgaXNDdXN0b21FdmVudChldmVudE5hbWU6IHN0cmluZyk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5fY29uZmlnLmV2ZW50cy5pbmRleE9mKGV2ZW50TmFtZSkgPiAtMTsgfVxufVxuXG4vKipcbiAqIEluIEl2eSwgc3VwcG9ydCBmb3IgSGFtbWVyIGdlc3R1cmVzIGlzIG9wdGlvbmFsLCBzbyBhcHBsaWNhdGlvbnMgbXVzdFxuICogaW1wb3J0IHRoZSBgSGFtbWVyTW9kdWxlYCBhdCByb290IHRvIHR1cm4gb24gc3VwcG9ydC4gVGhpcyBtZWFucyB0aGF0XG4gKiBIYW1tZXItc3BlY2lmaWMgY29kZSBjYW4gYmUgdHJlZS1zaGFrZW4gYXdheSBpZiBub3QgbmVlZGVkLlxuICovXG5leHBvcnQgY29uc3QgSEFNTUVSX1BST1ZJREVSU19fUE9TVF9SM19fID0gW107XG5cbi8qKlxuICogSW4gVmlldyBFbmdpbmUsIHN1cHBvcnQgZm9yIEhhbW1lciBnZXN0dXJlcyBpcyBidWlsdC1pbiBieSBkZWZhdWx0LlxuICovXG5leHBvcnQgY29uc3QgSEFNTUVSX1BST1ZJREVSU19fUFJFX1IzX186IFByb3ZpZGVyW10gPSBbXG4gIHtcbiAgICBwcm92aWRlOiBFVkVOVF9NQU5BR0VSX1BMVUdJTlMsXG4gICAgdXNlQ2xhc3M6IEhhbW1lckdlc3R1cmVzUGx1Z2luLFxuICAgIG11bHRpOiB0cnVlLFxuICAgIGRlcHM6IFtET0NVTUVOVCwgSEFNTUVSX0dFU1RVUkVfQ09ORklHLCBDb25zb2xlLCBbbmV3IE9wdGlvbmFsKCksIEhBTU1FUl9MT0FERVJdXVxuICB9LFxuICB7cHJvdmlkZTogSEFNTUVSX0dFU1RVUkVfQ09ORklHLCB1c2VDbGFzczogSGFtbWVyR2VzdHVyZUNvbmZpZywgZGVwczogW119LFxuXTtcblxuZXhwb3J0IGNvbnN0IEhBTU1FUl9QUk9WSURFUlMgPSBIQU1NRVJfUFJPVklERVJTX19QUkVfUjNfXztcblxuLyoqXG4gKiBBZGRzIHN1cHBvcnQgZm9yIEhhbW1lckpTLlxuICpcbiAqIEltcG9ydCB0aGlzIG1vZHVsZSBhdCB0aGUgcm9vdCBvZiB5b3VyIGFwcGxpY2F0aW9uIHNvIHRoYXQgQW5ndWxhciBjYW4gd29yayB3aXRoXG4gKiBIYW1tZXJKUyB0byBkZXRlY3QgZ2VzdHVyZSBldmVudHMuXG4gKlxuICogTm90ZSB0aGF0IGFwcGxpY2F0aW9ucyBzdGlsbCBuZWVkIHRvIGluY2x1ZGUgdGhlIEhhbW1lckpTIHNjcmlwdCBpdHNlbGYuIFRoaXMgbW9kdWxlXG4gKiBzaW1wbHkgc2V0cyB1cCB0aGUgY29vcmRpbmF0aW9uIGxheWVyIGJldHdlZW4gSGFtbWVySlMgYW5kIEFuZ3VsYXIncyBFdmVudE1hbmFnZXIuXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5ATmdNb2R1bGUoe3Byb3ZpZGVyczogSEFNTUVSX1BST1ZJREVSU19fUFJFX1IzX199KVxuZXhwb3J0IGNsYXNzIEhhbW1lck1vZHVsZSB7XG59XG4iXX0=