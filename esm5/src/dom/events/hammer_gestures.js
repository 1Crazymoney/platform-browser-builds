import * as tslib_1 from "tslib";
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, InjectionToken, Optional, ɵConsole as Console } from '@angular/core';
import { EventManagerPlugin } from './event_manager';
import * as i0 from "@angular/core";
/**
 * Supported HammerJS recognizer event names.
 */
var EVENT_NAMES = {
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
 * @publicApi
 */
export var HAMMER_GESTURE_CONFIG = new InjectionToken('HammerGestureConfig');
/**
 * Injection token used to provide a {@link HammerLoader} to Angular.
 *
 * @publicApi
 */
export var HAMMER_LOADER = new InjectionToken('HammerLoader');
/**
 * An injectable [HammerJS Manager](http://hammerjs.github.io/api/#hammer.manager)
 * for gesture recognition. Configures specific event recognition.
 * @publicApi
 */
var HammerGestureConfig = /** @class */ (function () {
    function HammerGestureConfig() {
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
     * @param element The element that will recognize gestures.
     * @returns A HammerJS event-manager object.
     */
    HammerGestureConfig.prototype.buildHammer = function (element) {
        var mc = new Hammer(element, this.options);
        mc.get('pinch').set({ enable: true });
        mc.get('rotate').set({ enable: true });
        for (var eventName in this.overrides) {
            mc.get(eventName).set(this.overrides[eventName]);
        }
        return mc;
    };
    HammerGestureConfig.ngInjectableDef = i0.ΔdefineInjectable({ token: HammerGestureConfig, factory: function HammerGestureConfig_Factory(t) { return new (t || HammerGestureConfig)(); }, providedIn: null });
    return HammerGestureConfig;
}());
export { HammerGestureConfig };
/*@__PURE__*/ i0.ɵsetClassMetadata(HammerGestureConfig, [{
        type: Injectable
    }], null, null);
var HammerGesturesPlugin = /** @class */ (function (_super) {
    tslib_1.__extends(HammerGesturesPlugin, _super);
    function HammerGesturesPlugin(doc, _config, console, loader) {
        var _this = _super.call(this, doc) || this;
        _this._config = _config;
        _this.console = console;
        _this.loader = loader;
        return _this;
    }
    HammerGesturesPlugin.prototype.supports = function (eventName) {
        if (!EVENT_NAMES.hasOwnProperty(eventName.toLowerCase()) && !this.isCustomEvent(eventName)) {
            return false;
        }
        if (!window.Hammer && !this.loader) {
            this.console.warn("The \"" + eventName + "\" event cannot be bound because Hammer.JS is not " +
                "loaded and no custom loader has been specified.");
            return false;
        }
        return true;
    };
    HammerGesturesPlugin.prototype.addEventListener = function (element, eventName, handler) {
        var _this = this;
        var zone = this.manager.getZone();
        eventName = eventName.toLowerCase();
        // If Hammer is not present but a loader is specified, we defer adding the event listener
        // until Hammer is loaded.
        if (!window.Hammer && this.loader) {
            // This `addEventListener` method returns a function to remove the added listener.
            // Until Hammer is loaded, the returned function needs to *cancel* the registration rather
            // than remove anything.
            var cancelRegistration_1 = false;
            var deregister_1 = function () { cancelRegistration_1 = true; };
            this.loader()
                .then(function () {
                // If Hammer isn't actually loaded when the custom loader resolves, give up.
                if (!window.Hammer) {
                    _this.console.warn("The custom HAMMER_LOADER completed, but Hammer.JS is not present.");
                    deregister_1 = function () { };
                    return;
                }
                if (!cancelRegistration_1) {
                    // Now that Hammer is loaded and the listener is being loaded for real,
                    // the deregistration function changes from canceling registration to removal.
                    deregister_1 = _this.addEventListener(element, eventName, handler);
                }
            })
                .catch(function () {
                _this.console.warn("The \"" + eventName + "\" event cannot be bound because the custom " +
                    "Hammer.JS loader failed.");
                deregister_1 = function () { };
            });
            // Return a function that *executes* `deregister` (and not `deregister` itself) so that we
            // can change the behavior of `deregister` once the listener is added. Using a closure in
            // this way allows us to avoid any additional data structures to track listener removal.
            return function () { deregister_1(); };
        }
        return zone.runOutsideAngular(function () {
            // Creating the manager bind events, must be done outside of angular
            var mc = _this._config.buildHammer(element);
            var callback = function (eventObj) {
                zone.runGuarded(function () { handler(eventObj); });
            };
            mc.on(eventName, callback);
            return function () {
                mc.off(eventName, callback);
                // destroy mc to prevent memory leak
                if (typeof mc.destroy === 'function') {
                    mc.destroy();
                }
            };
        });
    };
    HammerGesturesPlugin.prototype.isCustomEvent = function (eventName) { return this._config.events.indexOf(eventName) > -1; };
    HammerGesturesPlugin.ngInjectableDef = i0.ΔdefineInjectable({ token: HammerGesturesPlugin, factory: function HammerGesturesPlugin_Factory(t) { return new (t || HammerGesturesPlugin)(i0.Δinject(DOCUMENT), i0.Δinject(HAMMER_GESTURE_CONFIG), i0.Δinject(i0.ɵConsole), i0.Δinject(HAMMER_LOADER, 8)); }, providedIn: null });
    return HammerGesturesPlugin;
}(EventManagerPlugin));
export { HammerGesturesPlugin };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFtbWVyX2dlc3R1cmVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvcGxhdGZvcm0tYnJvd3Nlci9zcmMvZG9tL2V2ZW50cy9oYW1tZXJfZ2VzdHVyZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QyxPQUFPLEVBQUMsTUFBTSxFQUFFLFVBQVUsRUFBRSxjQUFjLEVBQUUsUUFBUSxFQUFFLFFBQVEsSUFBSSxPQUFPLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFaEcsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0saUJBQWlCLENBQUM7O0FBRW5EOztHQUVHO0FBQ0gsSUFBTSxXQUFXLEdBQUc7SUFDbEIsTUFBTTtJQUNOLEtBQUssRUFBRSxJQUFJO0lBQ1gsVUFBVSxFQUFFLElBQUk7SUFDaEIsU0FBUyxFQUFFLElBQUk7SUFDZixRQUFRLEVBQUUsSUFBSTtJQUNkLFdBQVcsRUFBRSxJQUFJO0lBQ2pCLFNBQVMsRUFBRSxJQUFJO0lBQ2YsVUFBVSxFQUFFLElBQUk7SUFDaEIsT0FBTyxFQUFFLElBQUk7SUFDYixTQUFTLEVBQUUsSUFBSTtJQUNmLFFBQVE7SUFDUixPQUFPLEVBQUUsSUFBSTtJQUNiLFlBQVksRUFBRSxJQUFJO0lBQ2xCLFdBQVcsRUFBRSxJQUFJO0lBQ2pCLFVBQVUsRUFBRSxJQUFJO0lBQ2hCLGFBQWEsRUFBRSxJQUFJO0lBQ25CLFNBQVMsRUFBRSxJQUFJO0lBQ2YsVUFBVSxFQUFFLElBQUk7SUFDaEIsUUFBUTtJQUNSLE9BQU8sRUFBRSxJQUFJO0lBQ2IsU0FBUyxFQUFFLElBQUk7SUFDZixTQUFTO0lBQ1QsUUFBUSxFQUFFLElBQUk7SUFDZCxhQUFhLEVBQUUsSUFBSTtJQUNuQixZQUFZLEVBQUUsSUFBSTtJQUNsQixXQUFXLEVBQUUs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QVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDckQsQ0FBQyxDQUFDO1lBQ0YsRUFBRSxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDM0IsT0FBTztnQkFDTCxFQUFFLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxRQUFRLENBQUMsQ0FBQztnQkFDNUIsb0NBQW9DO2dCQUNwQyxJQUFJLE9BQU8sRUFBRSxDQUFDLE9BQU8sS0FBSyxVQUFVLEVBQUU7b0JBQ3BDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztpQkFDZDtZQUNILENBQUMsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELDRDQUFhLEdBQWIsVUFBYyxTQUFpQixJQUFhLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzt5RUFsRnRGLG9CQUFvQix1RUFBcEIsb0JBQW9CLGFBRW5CLFFBQVEsY0FDUixxQkFBcUIsdUNBQ1QsYUFBYTsrQkE1SnZDO0NBMk9DLEFBcEZELENBQzBDLGtCQUFrQixHQW1GM0Q7U0FuRlksb0JBQW9CO21DQUFwQixvQkFBb0I7Y0FEaEMsVUFBVTs7c0JBR0osTUFBTTt1QkFBQyxRQUFROzBCQUNnQyxtQkFBbUI7c0JBQWxFLE1BQU07dUJBQUMscUJBQXFCOztzQkFDNUIsUUFBUTs7c0JBQUksTUFBTTt1QkFBQyxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge0RPQ1VNRU5UfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtJbmplY3QsIEluamVjdGFibGUsIEluamVjdGlvblRva2VuLCBPcHRpb25hbCwgybVDb25zb2xlIGFzIENvbnNvbGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge0V2ZW50TWFuYWdlclBsdWdpbn0gZnJvbSAnLi9ldmVudF9tYW5hZ2VyJztcblxuLyoqXG4gKiBTdXBwb3J0ZWQgSGFtbWVySlMgcmVjb2duaXplciBldmVudCBuYW1lcy5cbiAqL1xuY29uc3QgRVZFTlRfTkFNRVMgPSB7XG4gIC8vIHBhblxuICAncGFuJzogdHJ1ZSxcbiAgJ3BhbnN0YXJ0JzogdHJ1ZSxcbiAgJ3Bhbm1vdmUnOiB0cnVlLFxuICAncGFuZW5kJzogdHJ1ZSxcbiAgJ3BhbmNhbmNlbCc6IHRydWUsXG4gICdwYW5sZWZ0JzogdHJ1ZSxcbiAgJ3BhbnJpZ2h0JzogdHJ1ZSxcbiAgJ3BhbnVwJzogdHJ1ZSxcbiAgJ3BhbmRvd24nOiB0cnVlLFxuICAvLyBwaW5jaFxuICAncGluY2gnOiB0cnVlLFxuICAncGluY2hzdGFydCc6IHRydWUsXG4gICdwaW5jaG1vdmUnOiB0cnVlLFxuICAncGluY2hlbmQnOiB0cnVlLFxuICAncGluY2hjYW5jZWwnOiB0cnVlLFxuICAncGluY2hpbic6IHRydWUsXG4gICdwaW5jaG91dCc6IHRydWUsXG4gIC8vIHByZXNzXG4gICdwcmVzcyc6IHRydWUsXG4gICdwcmVzc3VwJzogdHJ1ZSxcbiAgLy8gcm90YXRlXG4gICdyb3RhdGUnOiB0cnVlLFxuICAncm90YXRlc3RhcnQnOiB0cnVlLFxuICAncm90YXRlbW92ZSc6IHRydWUsXG4gICdyb3RhdGVlbmQnOiB0cnVlLFxuICAncm90YXRlY2FuY2VsJzogdHJ1ZSxcbiAgLy8gc3dpcGVcbiAgJ3N3aXBlJzogdHJ1ZSxcbiAgJ3N3aXBlbGVmdCc6IHRydWUsXG4gICdzd2lwZXJpZ2h0JzogdHJ1ZSxcbiAgJ3N3aXBldXAnOiB0cnVlLFxuICAnc3dpcGVkb3duJzogdHJ1ZSxcbiAgLy8gdGFwXG4gICd0YXAnOiB0cnVlLFxufTtcblxuLyoqXG4gKiBESSB0b2tlbiBmb3IgcHJvdmlkaW5nIFtIYW1tZXJKU10oaHR0cDovL2hhbW1lcmpzLmdpdGh1Yi5pby8pIHN1cHBvcnQgdG8gQW5ndWxhci5cbiAqIEBzZWUgYEhhbW1lckdlc3R1cmVDb25maWdgXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgY29uc3QgSEFNTUVSX0dFU1RVUkVfQ09ORklHID0gbmV3IEluamVjdGlvblRva2VuPEhhbW1lckdlc3R1cmVDb25maWc+KCdIYW1tZXJHZXN0dXJlQ29uZmlnJyk7XG5cblxuLyoqXG4gKiBGdW5jdGlvbiB0aGF0IGxvYWRzIEhhbW1lckpTLCByZXR1cm5pbmcgYSBwcm9taXNlIHRoYXQgaXMgcmVzb2x2ZWQgb25jZSBIYW1tZXJKcyBpcyBsb2FkZWQuXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgdHlwZSBIYW1tZXJMb2FkZXIgPSAoKSA9PiBQcm9taXNlPHZvaWQ+O1xuXG4vKipcbiAqIEluamVjdGlvbiB0b2tlbiB1c2VkIHRvIHByb3ZpZGUgYSB7QGxpbmsgSGFtbWVyTG9hZGVyfSB0byBBbmd1bGFyLlxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGNvbnN0IEhBTU1FUl9MT0FERVIgPSBuZXcgSW5qZWN0aW9uVG9rZW48SGFtbWVyTG9hZGVyPignSGFtbWVyTG9hZGVyJyk7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSGFtbWVySW5zdGFuY2Uge1xuICBvbihldmVudE5hbWU6IHN0cmluZywgY2FsbGJhY2s/OiBGdW5jdGlvbik6IHZvaWQ7XG4gIG9mZihldmVudE5hbWU6IHN0cmluZywgY2FsbGJhY2s/OiBGdW5jdGlvbik6IHZvaWQ7XG4gIGRlc3Ryb3k/KCk6IHZvaWQ7XG59XG5cbi8qKlxuICogQW4gaW5qZWN0YWJsZSBbSGFtbWVySlMgTWFuYWdlcl0oaHR0cDovL2hhbW1lcmpzLmdpdGh1Yi5pby9hcGkvI2hhbW1lci5tYW5hZ2VyKVxuICogZm9yIGdlc3R1cmUgcmVjb2duaXRpb24uIENvbmZpZ3VyZXMgc3BlY2lmaWMgZXZlbnQgcmVjb2duaXRpb24uXG4gKiBAcHVibGljQXBpXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBIYW1tZXJHZXN0dXJlQ29uZmlnIHtcbiAgLyoqXG4gICAqIEEgc2V0IG9mIHN1cHBvcnRlZCBldmVudCBuYW1lcyBmb3IgZ2VzdHVyZXMgdG8gYmUgdXNlZCBpbiBBbmd1bGFyLlxuICAgKiBBbmd1bGFyIHN1cHBvcnRzIGFsbCBidWlsdC1pbiByZWNvZ25pemVycywgYXMgbGlzdGVkIGluXG4gICAqIFtIYW1tZXJKUyBkb2N1bWVudGF0aW9uXShodHRwOi8vaGFtbWVyanMuZ2l0aHViLmlvLykuXG4gICAqL1xuICBldmVudHM6IHN0cmluZ1tdID0gW107XG5cbiAgLyoqXG4gICogTWFwcyBnZXN0dXJlIGV2ZW50IG5hbWVzIHRvIGEgc2V0IG9mIGNvbmZpZ3VyYXRpb24gb3B0aW9uc1xuICAqIHRoYXQgc3BlY2lmeSBvdmVycmlkZXMgdG8gdGhlIGRlZmF1bHQgdmFsdWVzIGZvciBzcGVjaWZpYyBwcm9wZXJ0aWVzLlxuICAqXG4gICogVGhlIGtleSBpcyBhIHN1cHBvcnRlZCBldmVudCBuYW1lIHRvIGJlIGNvbmZpZ3VyZWQsXG4gICogYW5kIHRoZSBvcHRpb25zIG9iamVjdCBjb250YWlucyBhIHNldCBvZiBwcm9wZXJ0aWVzLCB3aXRoIG92ZXJyaWRlIHZhbHVlc1xuICAqIHRvIGJlIGFwcGxpZWQgdG8gdGhlIG5hbWVkIHJlY29nbml6ZXIgZXZlbnQuXG4gICogRm9yIGV4YW1wbGUsIHRvIGRpc2FibGUgcmVjb2duaXRpb24gb2YgdGhlIHJvdGF0ZSBldmVudCwgc3BlY2lmeVxuICAqICBge1wicm90YXRlXCI6IHtcImVuYWJsZVwiOiBmYWxzZX19YC5cbiAgKlxuICAqIFByb3BlcnRpZXMgdGhhdCBhcmUgbm90IHByZXNlbnQgdGFrZSB0aGUgSGFtbWVySlMgZGVmYXVsdCB2YWx1ZXMuXG4gICogRm9yIGluZm9ybWF0aW9uIGFib3V0IHdoaWNoIHByb3BlcnRpZXMgYXJlIHN1cHBvcnRlZCBmb3Igd2hpY2ggZXZlbnRzLFxuICAqIGFuZCB0aGVpciBhbGxvd2VkIGFuZCBkZWZhdWx0IHZhbHVlcywgc2VlXG4gICogW0hhbW1lckpTIGRvY3VtZW50YXRpb25dKGh0dHA6Ly9oYW1tZXJqcy5naXRodWIuaW8vKS5cbiAgKlxuICAqL1xuICBvdmVycmlkZXM6IHtba2V5OiBzdHJpbmddOiBPYmplY3R9ID0ge307XG5cbiAgLyoqXG4gICAqIFByb3BlcnRpZXMgd2hvc2UgZGVmYXVsdCB2YWx1ZXMgY2FuIGJlIG92ZXJyaWRkZW4gZm9yIGEgZ2l2ZW4gZXZlbnQuXG4gICAqIERpZmZlcmVudCBzZXRzIG9mIHByb3BlcnRpZXMgYXBwbHkgdG8gZGlmZmVyZW50IGV2ZW50cy5cbiAgICogRm9yIGluZm9ybWF0aW9uIGFib3V0IHdoaWNoIHByb3BlcnRpZXMgYXJlIHN1cHBvcnRlZCBmb3Igd2hpY2ggZXZlbnRzLFxuICAgKiBhbmQgdGhlaXIgYWxsb3dlZCBhbmQgZGVmYXVsdCB2YWx1ZXMsIHNlZVxuICAgKiBbSGFtbWVySlMgZG9jdW1lbnRhdGlvbl0oaHR0cDovL2hhbW1lcmpzLmdpdGh1Yi5pby8pLlxuICAgKi9cbiAgb3B0aW9ucz86IHtcbiAgICBjc3NQcm9wcz86IGFueTsgZG9tRXZlbnRzPzogYm9vbGVhbjsgZW5hYmxlPzogYm9vbGVhbiB8ICgobWFuYWdlcjogYW55KSA9PiBib29sZWFuKTtcbiAgICBwcmVzZXQ/OiBhbnlbXTtcbiAgICB0b3VjaEFjdGlvbj86IHN0cmluZztcbiAgICByZWNvZ25pemVycz86IGFueVtdO1xuICAgIGlucHV0Q2xhc3M/OiBhbnk7XG4gICAgaW5wdXRUYXJnZXQ/OiBFdmVudFRhcmdldDtcbiAgfTtcblxuICAvKipcbiAgICogQ3JlYXRlcyBhIFtIYW1tZXJKUyBNYW5hZ2VyXShodHRwOi8vaGFtbWVyanMuZ2l0aHViLmlvL2FwaS8jaGFtbWVyLm1hbmFnZXIpXG4gICAqIGFuZCBhdHRhY2hlcyBpdCB0byBhIGdpdmVuIEhUTUwgZWxlbWVudC5cbiAgICogQHBhcmFtIGVsZW1lbnQgVGhlIGVsZW1lbnQgdGhhdCB3aWxsIHJlY29nbml6ZSBnZXN0dXJlcy5cbiAgICogQHJldHVybnMgQSBIYW1tZXJKUyBldmVudC1tYW5hZ2VyIG9iamVjdC5cbiAgICovXG4gIGJ1aWxkSGFtbWVyKGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogSGFtbWVySW5zdGFuY2Uge1xuICAgIGNvbnN0IG1jID0gbmV3IEhhbW1lciAhKGVsZW1lbnQsIHRoaXMub3B0aW9ucyk7XG5cbiAgICBtYy5nZXQoJ3BpbmNoJykuc2V0KHtlbmFibGU6IHRydWV9KTtcbiAgICBtYy5nZXQoJ3JvdGF0ZScpLnNldCh7ZW5hYmxlOiB0cnVlfSk7XG5cbiAgICBmb3IgKGNvbnN0IGV2ZW50TmFtZSBpbiB0aGlzLm92ZXJyaWRlcykge1xuICAgICAgbWMuZ2V0KGV2ZW50TmFtZSkuc2V0KHRoaXMub3ZlcnJpZGVzW2V2ZW50TmFtZV0pO1xuICAgIH1cblxuICAgIHJldHVybiBtYztcbiAgfVxufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSGFtbWVyR2VzdHVyZXNQbHVnaW4gZXh0ZW5kcyBFdmVudE1hbmFnZXJQbHVnaW4ge1xuICBjb25zdHJ1Y3RvcihcbiAgICAgIEBJbmplY3QoRE9DVU1FTlQpIGRvYzogYW55LFxuICAgICAgQEluamVjdChIQU1NRVJfR0VTVFVSRV9DT05GSUcpIHByaXZhdGUgX2NvbmZpZzogSGFtbWVyR2VzdHVyZUNvbmZpZywgcHJpdmF0ZSBjb25zb2xlOiBDb25zb2xlLFxuICAgICAgQE9wdGlvbmFsKCkgQEluamVjdChIQU1NRVJfTE9BREVSKSBwcml2YXRlIGxvYWRlcj86IEhhbW1lckxvYWRlcnxudWxsKSB7XG4gICAgc3VwZXIoZG9jKTtcbiAgfVxuXG4gIHN1cHBvcnRzKGV2ZW50TmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgaWYgKCFFVkVOVF9OQU1FUy5oYXNPd25Qcm9wZXJ0eShldmVudE5hbWUudG9Mb3dlckNhc2UoKSkgJiYgIXRoaXMuaXNDdXN0b21FdmVudChldmVudE5hbWUpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKCEod2luZG93IGFzIGFueSkuSGFtbWVyICYmICF0aGlzLmxvYWRlcikge1xuICAgICAgdGhpcy5jb25zb2xlLndhcm4oXG4gICAgICAgICAgYFRoZSBcIiR7ZXZlbnROYW1lfVwiIGV2ZW50IGNhbm5vdCBiZSBib3VuZCBiZWNhdXNlIEhhbW1lci5KUyBpcyBub3QgYCArXG4gICAgICAgICAgYGxvYWRlZCBhbmQgbm8gY3VzdG9tIGxvYWRlciBoYXMgYmVlbiBzcGVjaWZpZWQuYCk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBhZGRFdmVudExpc3RlbmVyKGVsZW1lbnQ6IEhUTUxFbGVtZW50LCBldmVudE5hbWU6IHN0cmluZywgaGFuZGxlcjogRnVuY3Rpb24pOiBGdW5jdGlvbiB7XG4gICAgY29uc3Qgem9uZSA9IHRoaXMubWFuYWdlci5nZXRab25lKCk7XG4gICAgZXZlbnROYW1lID0gZXZlbnROYW1lLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAvLyBJZiBIYW1tZXIgaXMgbm90IHByZXNlbnQgYnV0IGEgbG9hZGVyIGlzIHNwZWNpZmllZCwgd2UgZGVmZXIgYWRkaW5nIHRoZSBldmVudCBsaXN0ZW5lclxuICAgIC8vIHVudGlsIEhhbW1lciBpcyBsb2FkZWQuXG4gICAgaWYgKCEod2luZG93IGFzIGFueSkuSGFtbWVyICYmIHRoaXMubG9hZGVyKSB7XG4gICAgICAvLyBUaGlzIGBhZGRFdmVudExpc3RlbmVyYCBtZXRob2QgcmV0dXJucyBhIGZ1bmN0aW9uIHRvIHJlbW92ZSB0aGUgYWRkZWQgbGlzdGVuZXIuXG4gICAgICAvLyBVbnRpbCBIYW1tZXIgaXMgbG9hZGVkLCB0aGUgcmV0dXJuZWQgZnVuY3Rpb24gbmVlZHMgdG8gKmNhbmNlbCogdGhlIHJlZ2lzdHJhdGlvbiByYXRoZXJcbiAgICAgIC8vIHRoYW4gcmVtb3ZlIGFueXRoaW5nLlxuICAgICAgbGV0IGNhbmNlbFJlZ2lzdHJhdGlvbiA9IGZhbHNlO1xuICAgICAgbGV0IGRlcmVnaXN0ZXI6IEZ1bmN0aW9uID0gKCkgPT4geyBjYW5jZWxSZWdpc3RyYXRpb24gPSB0cnVlOyB9O1xuXG4gICAgICB0aGlzLmxvYWRlcigpXG4gICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgLy8gSWYgSGFtbWVyIGlzbid0IGFjdHVhbGx5IGxvYWRlZCB3aGVuIHRoZSBjdXN0b20gbG9hZGVyIHJlc29sdmVzLCBnaXZlIHVwLlxuICAgICAgICAgICAgaWYgKCEod2luZG93IGFzIGFueSkuSGFtbWVyKSB7XG4gICAgICAgICAgICAgIHRoaXMuY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICAgICAgYFRoZSBjdXN0b20gSEFNTUVSX0xPQURFUiBjb21wbGV0ZWQsIGJ1dCBIYW1tZXIuSlMgaXMgbm90IHByZXNlbnQuYCk7XG4gICAgICAgICAgICAgIGRlcmVnaXN0ZXIgPSAoKSA9PiB7fTtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIWNhbmNlbFJlZ2lzdHJhdGlvbikge1xuICAgICAgICAgICAgICAvLyBOb3cgdGhhdCBIYW1tZXIgaXMgbG9hZGVkIGFuZCB0aGUgbGlzdGVuZXIgaXMgYmVpbmcgbG9hZGVkIGZvciByZWFsLFxuICAgICAgICAgICAgICAvLyB0aGUgZGVyZWdpc3RyYXRpb24gZnVuY3Rpb24gY2hhbmdlcyBmcm9tIGNhbmNlbGluZyByZWdpc3RyYXRpb24gdG8gcmVtb3ZhbC5cbiAgICAgICAgICAgICAgZGVyZWdpc3RlciA9IHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihlbGVtZW50LCBldmVudE5hbWUsIGhhbmRsZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgICAgLmNhdGNoKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICAgIGBUaGUgXCIke2V2ZW50TmFtZX1cIiBldmVudCBjYW5ub3QgYmUgYm91bmQgYmVjYXVzZSB0aGUgY3VzdG9tIGAgK1xuICAgICAgICAgICAgICAgIGBIYW1tZXIuSlMgbG9hZGVyIGZhaWxlZC5gKTtcbiAgICAgICAgICAgIGRlcmVnaXN0ZXIgPSAoKSA9PiB7fTtcbiAgICAgICAgICB9KTtcblxuICAgICAgLy8gUmV0dXJuIGEgZnVuY3Rpb24gdGhhdCAqZXhlY3V0ZXMqIGBkZXJlZ2lzdGVyYCAoYW5kIG5vdCBgZGVyZWdpc3RlcmAgaXRzZWxmKSBzbyB0aGF0IHdlXG4gICAgICAvLyBjYW4gY2hhbmdlIHRoZSBiZWhhdmlvciBvZiBgZGVyZWdpc3RlcmAgb25jZSB0aGUgbGlzdGVuZXIgaXMgYWRkZWQuIFVzaW5nIGEgY2xvc3VyZSBpblxuICAgICAgLy8gdGhpcyB3YXkgYWxsb3dzIHVzIHRvIGF2b2lkIGFueSBhZGRpdGlvbmFsIGRhdGEgc3RydWN0dXJlcyB0byB0cmFjayBsaXN0ZW5lciByZW1vdmFsLlxuICAgICAgcmV0dXJuICgpID0+IHsgZGVyZWdpc3RlcigpOyB9O1xuICAgIH1cblxuICAgIHJldHVybiB6b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgIC8vIENyZWF0aW5nIHRoZSBtYW5hZ2VyIGJpbmQgZXZlbnRzLCBtdXN0IGJlIGRvbmUgb3V0c2lkZSBvZiBhbmd1bGFyXG4gICAgICBjb25zdCBtYyA9IHRoaXMuX2NvbmZpZy5idWlsZEhhbW1lcihlbGVtZW50KTtcbiAgICAgIGNvbnN0IGNhbGxiYWNrID0gZnVuY3Rpb24oZXZlbnRPYmo6IEhhbW1lcklucHV0KSB7XG4gICAgICAgIHpvbmUucnVuR3VhcmRlZChmdW5jdGlvbigpIHsgaGFuZGxlcihldmVudE9iaik7IH0pO1xuICAgICAgfTtcbiAgICAgIG1jLm9uKGV2ZW50TmFtZSwgY2FsbGJhY2spO1xuICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgbWMub2ZmKGV2ZW50TmFtZSwgY2FsbGJhY2spO1xuICAgICAgICAvLyBkZXN0cm95IG1jIHRvIHByZXZlbnQgbWVtb3J5IGxlYWtcbiAgICAgICAgaWYgKHR5cGVvZiBtYy5kZXN0cm95ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgbWMuZGVzdHJveSgpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgaXNDdXN0b21FdmVudChldmVudE5hbWU6IHN0cmluZyk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5fY29uZmlnLmV2ZW50cy5pbmRleE9mKGV2ZW50TmFtZSkgPiAtMTsgfVxufVxuIl19