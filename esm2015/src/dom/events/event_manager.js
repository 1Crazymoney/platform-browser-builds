/**
 * @fileoverview added by tsickle
 * Generated from: packages/platform-browser/src/dom/events/event_manager.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { ɵgetDOM as getDOM } from '@angular/common';
import { Inject, Injectable, InjectionToken, NgZone } from '@angular/core';
/**
 * The injection token for the event-manager plug-in service.
 *
 * \@publicApi
 * @type {?}
 */
export const EVENT_MANAGER_PLUGINS = new InjectionToken('EventManagerPlugins');
/**
 * An injectable service that provides event management for Angular
 * through a browser plug-in.
 *
 * \@publicApi
 */
let EventManager = /** @class */ (() => {
    /**
     * An injectable service that provides event management for Angular
     * through a browser plug-in.
     *
     * \@publicApi
     */
    class EventManager {
        /**
         * Initializes an instance of the event-manager service.
         * @param {?} plugins
         * @param {?} _zone
         */
        constructor(plugins, _zone) {
            this._zone = _zone;
            this._eventNameToPlugin = new Map();
            plugins.forEach((/**
             * @template THIS
             * @this {THIS}
             * @param {?} p
             * @return {THIS}
             */
            p => p.manager = this));
            this._plugins = plugins.slice().reverse();
        }
        /**
         * Registers a handler for a specific element and event.
         *
         * @param {?} element The HTML element to receive event notifications.
         * @param {?} eventName The name of the event to listen for.
         * @param {?} handler A function to call when the notification occurs. Receives the
         * event object as an argument.
         * @return {?} A callback function that can be used to remove the handler.
         */
        addEventListener(element, eventName, handler) {
            /** @type {?} */
            const plugin = this._findPluginFor(eventName);
            return plugin.addEventListener(element, eventName, handler);
        }
        /**
         * Registers a global handler for an event in a target view.
         *
         * @param {?} target A target for global event notifications. One of "window", "document", or "body".
         * @param {?} eventName The name of the event to listen for.
         * @param {?} handler A function to call when the notification occurs. Receives the
         * event object as an argument.
         * @return {?} A callback function that can be used to remove the handler.
         */
        addGlobalEventListener(target, eventName, handler) {
            /** @type {?} */
            const plugin = this._findPluginFor(eventName);
            return plugin.addGlobalEventListener(target, eventName, handler);
        }
        /**
         * Retrieves the compilation zone in which event listeners are registered.
         * @return {?}
         */
        getZone() {
            return this._zone;
        }
        /**
         * \@internal
         * @param {?} eventName
         * @return {?}
         */
        _findPluginFor(eventName) {
            /** @type {?} */
            const plugin = this._eventNameToPlugin.get(eventName);
            if (plugin) {
                return plugin;
            }
            /** @type {?} */
            const plugins = this._plugins;
            for (let i = 0; i < plugins.length; i++) {
                /** @type {?} */
                const plugin = plugins[i];
                if (plugin.supports(eventName)) {
                    this._eventNameToPlugin.set(eventName, plugin);
                    return plugin;
                }
            }
            throw new Error(`No event manager plugin found for event ${eventName}`);
        }
    }
    EventManager.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    EventManager.ctorParameters = () => [
        { type: Array, decorators: [{ type: Inject, args: [EVENT_MANAGER_PLUGINS,] }] },
        { type: NgZone }
    ];
    return EventManager;
})();
export { EventManager };
if (false) {
    /**
     * @type {?}
     * @private
     */
    EventManager.prototype._plugins;
    /**
     * @type {?}
     * @private
     */
    EventManager.prototype._eventNameToPlugin;
    /**
     * @type {?}
     * @private
     */
    EventManager.prototype._zone;
}
/**
 * @abstract
 */
export class EventManagerPlugin {
    /**
     * @param {?} _doc
     */
    constructor(_doc) {
        this._doc = _doc;
    }
    /**
     * @param {?} element
     * @param {?} eventName
     * @param {?} handler
     * @return {?}
     */
    addGlobalEventListener(element, eventName, handler) {
        /** @type {?} */
        const target = getDOM().getGlobalEventTarget(this._doc, element);
        if (!target) {
            throw new Error(`Unsupported event target ${target} for event ${eventName}`);
        }
        return this.addEventListener(target, eventName, handler);
    }
}
if (false) {
    /** @type {?} */
    EventManagerPlugin.prototype.manager;
    /**
     * @type {?}
     * @private
     */
    EventManagerPlugin.prototype._doc;
    /**
     * @abstract
     * @param {?} eventName
     * @return {?}
     */
    EventManagerPlugin.prototype.supports = function (eventName) { };
    /**
     * @abstract
     * @param {?} element
     * @param {?} eventName
     * @param {?} handler
     * @return {?}
     */
    EventManagerPlugin.prototype.addEventListener = function (element, eventName, handler) { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnRfbWFuYWdlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3BsYXRmb3JtLWJyb3dzZXIvc3JjL2RvbS9ldmVudHMvZXZlbnRfbWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUMsT0FBTyxJQUFJLE1BQU0sRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQ2xELE9BQU8sRUFBQyxNQUFNLEVBQUUsVUFBVSxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7QUFPekUsTUFBTSxPQUFPLHFCQUFxQixHQUM5QixJQUFJLGNBQWMsQ0FBdUIscUJBQXFCLENBQUM7Ozs7Ozs7QUFRbkU7Ozs7Ozs7SUFBQSxNQUNhLFlBQVk7Ozs7OztRQU92QixZQUEyQyxPQUE2QixFQUFVLEtBQWE7WUFBYixVQUFLLEdBQUwsS0FBSyxDQUFRO1lBTHZGLHVCQUFrQixHQUFHLElBQUksR0FBRyxFQUE4QixDQUFDO1lBTWpFLE9BQU8sQ0FBQyxPQUFPOzs7Ozs7WUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLEdBQUcsSUFBSSxFQUFDLENBQUM7WUFDdkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDNUMsQ0FBQzs7Ozs7Ozs7OztRQVdELGdCQUFnQixDQUFDLE9BQW9CLEVBQUUsU0FBaUIsRUFBRSxPQUFpQjs7a0JBQ25FLE1BQU0sR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQztZQUM3QyxPQUFPLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQzlELENBQUM7Ozs7Ozs7Ozs7UUFXRCxzQkFBc0IsQ0FBQyxNQUFjLEVBQUUsU0FBaUIsRUFBRSxPQUFpQjs7a0JBQ25FLE1BQU0sR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQztZQUM3QyxPQUFPLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyxNQUFNLEVBQUUsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ25FLENBQUM7Ozs7O1FBS0QsT0FBTztZQUNMLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNwQixDQUFDOzs7Ozs7UUFHRCxjQUFjLENBQUMsU0FBaUI7O2tCQUN4QixNQUFNLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUM7WUFDckQsSUFBSSxNQUFNLEVBQUU7Z0JBQ1YsT0FBTyxNQUFNLENBQUM7YUFDZjs7a0JBRUssT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRO1lBQzdCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFOztzQkFDakMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUM7Z0JBQ3pCLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsRUFBRTtvQkFDOUIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7b0JBQy9DLE9BQU8sTUFBTSxDQUFDO2lCQUNmO2FBQ0Y7WUFDRCxNQUFNLElBQUksS0FBSyxDQUFDLDJDQUEyQyxTQUFTLEVBQUUsQ0FBQyxDQUFDO1FBQzFFLENBQUM7OztnQkFoRUYsVUFBVTs7Ozs0Q0FRSSxNQUFNLFNBQUMscUJBQXFCO2dCQXhCQyxNQUFNOztJQWlGbEQsbUJBQUM7S0FBQTtTQWhFWSxZQUFZOzs7Ozs7SUFDdkIsZ0NBQXVDOzs7OztJQUN2QywwQ0FBbUU7Ozs7O0lBS08sNkJBQXFCOzs7OztBQTJEakcsTUFBTSxPQUFnQixrQkFBa0I7Ozs7SUFDdEMsWUFBb0IsSUFBUztRQUFULFNBQUksR0FBSixJQUFJLENBQUs7SUFBRyxDQUFDOzs7Ozs7O0lBU2pDLHNCQUFzQixDQUFDLE9BQWUsRUFBRSxTQUFpQixFQUFFLE9BQWlCOztjQUNwRSxNQUFNLEdBQWdCLE1BQU0sRUFBRSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDO1FBQzdFLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDWCxNQUFNLElBQUksS0FBSyxDQUFDLDRCQUE0QixNQUFNLGNBQWMsU0FBUyxFQUFFLENBQUMsQ0FBQztTQUM5RTtRQUNELE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDM0QsQ0FBQztDQUNGOzs7SUFiQyxxQ0FBdUI7Ozs7O0lBSFgsa0NBQWlCOzs7Ozs7SUFLN0IsaUVBQThDOzs7Ozs7OztJQUU5QywyRkFBZ0ciLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7ybVnZXRET00gYXMgZ2V0RE9NfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtJbmplY3QsIEluamVjdGFibGUsIEluamVjdGlvblRva2VuLCBOZ1pvbmV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIFRoZSBpbmplY3Rpb24gdG9rZW4gZm9yIHRoZSBldmVudC1tYW5hZ2VyIHBsdWctaW4gc2VydmljZS5cbiAqXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCBjb25zdCBFVkVOVF9NQU5BR0VSX1BMVUdJTlMgPVxuICAgIG5ldyBJbmplY3Rpb25Ub2tlbjxFdmVudE1hbmFnZXJQbHVnaW5bXT4oJ0V2ZW50TWFuYWdlclBsdWdpbnMnKTtcblxuLyoqXG4gKiBBbiBpbmplY3RhYmxlIHNlcnZpY2UgdGhhdCBwcm92aWRlcyBldmVudCBtYW5hZ2VtZW50IGZvciBBbmd1bGFyXG4gKiB0aHJvdWdoIGEgYnJvd3NlciBwbHVnLWluLlxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEV2ZW50TWFuYWdlciB7XG4gIHByaXZhdGUgX3BsdWdpbnM6IEV2ZW50TWFuYWdlclBsdWdpbltdO1xuICBwcml2YXRlIF9ldmVudE5hbWVUb1BsdWdpbiA9IG5ldyBNYXA8c3RyaW5nLCBFdmVudE1hbmFnZXJQbHVnaW4+KCk7XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemVzIGFuIGluc3RhbmNlIG9mIHRoZSBldmVudC1tYW5hZ2VyIHNlcnZpY2UuXG4gICAqL1xuICBjb25zdHJ1Y3RvcihASW5qZWN0KEVWRU5UX01BTkFHRVJfUExVR0lOUykgcGx1Z2luczogRXZlbnRNYW5hZ2VyUGx1Z2luW10sIHByaXZhdGUgX3pvbmU6IE5nWm9uZSkge1xuICAgIHBsdWdpbnMuZm9yRWFjaChwID0+IHAubWFuYWdlciA9IHRoaXMpO1xuICAgIHRoaXMuX3BsdWdpbnMgPSBwbHVnaW5zLnNsaWNlKCkucmV2ZXJzZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVycyBhIGhhbmRsZXIgZm9yIGEgc3BlY2lmaWMgZWxlbWVudCBhbmQgZXZlbnQuXG4gICAqXG4gICAqIEBwYXJhbSBlbGVtZW50IFRoZSBIVE1MIGVsZW1lbnQgdG8gcmVjZWl2ZSBldmVudCBub3RpZmljYXRpb25zLlxuICAgKiBAcGFyYW0gZXZlbnROYW1lIFRoZSBuYW1lIG9mIHRoZSBldmVudCB0byBsaXN0ZW4gZm9yLlxuICAgKiBAcGFyYW0gaGFuZGxlciBBIGZ1bmN0aW9uIHRvIGNhbGwgd2hlbiB0aGUgbm90aWZpY2F0aW9uIG9jY3Vycy4gUmVjZWl2ZXMgdGhlXG4gICAqIGV2ZW50IG9iamVjdCBhcyBhbiBhcmd1bWVudC5cbiAgICogQHJldHVybnMgIEEgY2FsbGJhY2sgZnVuY3Rpb24gdGhhdCBjYW4gYmUgdXNlZCB0byByZW1vdmUgdGhlIGhhbmRsZXIuXG4gICAqL1xuICBhZGRFdmVudExpc3RlbmVyKGVsZW1lbnQ6IEhUTUxFbGVtZW50LCBldmVudE5hbWU6IHN0cmluZywgaGFuZGxlcjogRnVuY3Rpb24pOiBGdW5jdGlvbiB7XG4gICAgY29uc3QgcGx1Z2luID0gdGhpcy5fZmluZFBsdWdpbkZvcihldmVudE5hbWUpO1xuICAgIHJldHVybiBwbHVnaW4uYWRkRXZlbnRMaXN0ZW5lcihlbGVtZW50LCBldmVudE5hbWUsIGhhbmRsZXIpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVycyBhIGdsb2JhbCBoYW5kbGVyIGZvciBhbiBldmVudCBpbiBhIHRhcmdldCB2aWV3LlxuICAgKlxuICAgKiBAcGFyYW0gdGFyZ2V0IEEgdGFyZ2V0IGZvciBnbG9iYWwgZXZlbnQgbm90aWZpY2F0aW9ucy4gT25lIG9mIFwid2luZG93XCIsIFwiZG9jdW1lbnRcIiwgb3IgXCJib2R5XCIuXG4gICAqIEBwYXJhbSBldmVudE5hbWUgVGhlIG5hbWUgb2YgdGhlIGV2ZW50IHRvIGxpc3RlbiBmb3IuXG4gICAqIEBwYXJhbSBoYW5kbGVyIEEgZnVuY3Rpb24gdG8gY2FsbCB3aGVuIHRoZSBub3RpZmljYXRpb24gb2NjdXJzLiBSZWNlaXZlcyB0aGVcbiAgICogZXZlbnQgb2JqZWN0IGFzIGFuIGFyZ3VtZW50LlxuICAgKiBAcmV0dXJucyBBIGNhbGxiYWNrIGZ1bmN0aW9uIHRoYXQgY2FuIGJlIHVzZWQgdG8gcmVtb3ZlIHRoZSBoYW5kbGVyLlxuICAgKi9cbiAgYWRkR2xvYmFsRXZlbnRMaXN0ZW5lcih0YXJnZXQ6IHN0cmluZywgZXZlbnROYW1lOiBzdHJpbmcsIGhhbmRsZXI6IEZ1bmN0aW9uKTogRnVuY3Rpb24ge1xuICAgIGNvbnN0IHBsdWdpbiA9IHRoaXMuX2ZpbmRQbHVnaW5Gb3IoZXZlbnROYW1lKTtcbiAgICByZXR1cm4gcGx1Z2luLmFkZEdsb2JhbEV2ZW50TGlzdGVuZXIodGFyZ2V0LCBldmVudE5hbWUsIGhhbmRsZXIpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHJpZXZlcyB0aGUgY29tcGlsYXRpb24gem9uZSBpbiB3aGljaCBldmVudCBsaXN0ZW5lcnMgYXJlIHJlZ2lzdGVyZWQuXG4gICAqL1xuICBnZXRab25lKCk6IE5nWm9uZSB7XG4gICAgcmV0dXJuIHRoaXMuX3pvbmU7XG4gIH1cblxuICAvKiogQGludGVybmFsICovXG4gIF9maW5kUGx1Z2luRm9yKGV2ZW50TmFtZTogc3RyaW5nKTogRXZlbnRNYW5hZ2VyUGx1Z2luIHtcbiAgICBjb25zdCBwbHVnaW4gPSB0aGlzLl9ldmVudE5hbWVUb1BsdWdpbi5nZXQoZXZlbnROYW1lKTtcbiAgICBpZiAocGx1Z2luKSB7XG4gICAgICByZXR1cm4gcGx1Z2luO1xuICAgIH1cblxuICAgIGNvbnN0IHBsdWdpbnMgPSB0aGlzLl9wbHVnaW5zO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGx1Z2lucy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgcGx1Z2luID0gcGx1Z2luc1tpXTtcbiAgICAgIGlmIChwbHVnaW4uc3VwcG9ydHMoZXZlbnROYW1lKSkge1xuICAgICAgICB0aGlzLl9ldmVudE5hbWVUb1BsdWdpbi5zZXQoZXZlbnROYW1lLCBwbHVnaW4pO1xuICAgICAgICByZXR1cm4gcGx1Z2luO1xuICAgICAgfVxuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoYE5vIGV2ZW50IG1hbmFnZXIgcGx1Z2luIGZvdW5kIGZvciBldmVudCAke2V2ZW50TmFtZX1gKTtcbiAgfVxufVxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgRXZlbnRNYW5hZ2VyUGx1Z2luIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZG9jOiBhbnkpIHt9XG5cbiAgLy8gVE9ETyhpc3N1ZS8yNDU3MSk6IHJlbW92ZSAnIScuXG4gIG1hbmFnZXIhOiBFdmVudE1hbmFnZXI7XG5cbiAgYWJzdHJhY3Qgc3VwcG9ydHMoZXZlbnROYW1lOiBzdHJpbmcpOiBib29sZWFuO1xuXG4gIGFic3RyYWN0IGFkZEV2ZW50TGlzdGVuZXIoZWxlbWVudDogSFRNTEVsZW1lbnQsIGV2ZW50TmFtZTogc3RyaW5nLCBoYW5kbGVyOiBGdW5jdGlvbik6IEZ1bmN0aW9uO1xuXG4gIGFkZEdsb2JhbEV2ZW50TGlzdGVuZXIoZWxlbWVudDogc3RyaW5nLCBldmVudE5hbWU6IHN0cmluZywgaGFuZGxlcjogRnVuY3Rpb24pOiBGdW5jdGlvbiB7XG4gICAgY29uc3QgdGFyZ2V0OiBIVE1MRWxlbWVudCA9IGdldERPTSgpLmdldEdsb2JhbEV2ZW50VGFyZ2V0KHRoaXMuX2RvYywgZWxlbWVudCk7XG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVW5zdXBwb3J0ZWQgZXZlbnQgdGFyZ2V0ICR7dGFyZ2V0fSBmb3IgZXZlbnQgJHtldmVudE5hbWV9YCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmFkZEV2ZW50TGlzdGVuZXIodGFyZ2V0LCBldmVudE5hbWUsIGhhbmRsZXIpO1xuICB9XG59XG4iXX0=