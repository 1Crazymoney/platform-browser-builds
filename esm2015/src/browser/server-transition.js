/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { DOCUMENT, ɵgetDOM as getDOM } from '@angular/common';
import { APP_INITIALIZER, ApplicationInitStatus, InjectionToken, Injector } from '@angular/core';
/**
 * An id that identifies a particular application being bootstrapped, that should
 * match across the client/server boundary.
 * @type {?}
 */
export const TRANSITION_ID = new InjectionToken('TRANSITION_ID');
/**
 * @param {?} transitionId
 * @param {?} document
 * @param {?} injector
 * @return {?}
 */
export function appInitializerFactory(transitionId, document, injector) {
    return (/**
     * @return {?}
     */
    () => {
        // Wait for all application initializers to be completed before removing the styles set by
        // the server.
        injector.get(ApplicationInitStatus).donePromise.then((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const dom = getDOM();
            /** @type {?} */
            const styles = Array.prototype.slice.apply(document.querySelectorAll(`style[ng-transition]`));
            styles.filter((/**
             * @param {?} el
             * @return {?}
             */
            el => el.getAttribute('ng-transition') === transitionId))
                .forEach((/**
             * @param {?} el
             * @return {?}
             */
            el => dom.remove(el)));
        }));
    });
}
/** @type {?} */
export const SERVER_TRANSITION_PROVIDERS = [
    {
        provide: APP_INITIALIZER,
        useFactory: appInitializerFactory,
        deps: [TRANSITION_ID, DOCUMENT, Injector],
        multi: true
    },
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLXRyYW5zaXRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9wbGF0Zm9ybS1icm93c2VyL3NyYy9icm93c2VyL3NlcnZlci10cmFuc2l0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFDLFFBQVEsRUFBRSxPQUFPLElBQUksTUFBTSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDNUQsT0FBTyxFQUFDLGVBQWUsRUFBRSxxQkFBcUIsRUFBVSxjQUFjLEVBQUUsUUFBUSxFQUFpQixNQUFNLGVBQWUsQ0FBQzs7Ozs7O0FBTXZILE1BQU0sT0FBTyxhQUFhLEdBQUcsSUFBSSxjQUFjLENBQUMsZUFBZSxDQUFDOzs7Ozs7O0FBRWhFLE1BQU0sVUFBVSxxQkFBcUIsQ0FBQyxZQUFvQixFQUFFLFFBQWEsRUFBRSxRQUFrQjtJQUMzRjs7O0lBQU8sR0FBRyxFQUFFO1FBQ1YsMEZBQTBGO1FBQzFGLGNBQWM7UUFDZCxRQUFRLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUMsV0FBVyxDQUFDLElBQUk7OztRQUFDLEdBQUcsRUFBRTs7a0JBQ2xELEdBQUcsR0FBRyxNQUFNLEVBQUU7O2tCQUNkLE1BQU0sR0FDUixLQUFLLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLHNCQUFzQixDQUFDLENBQUM7WUFDbEYsTUFBTSxDQUFDLE1BQU07Ozs7WUFBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsZUFBZSxDQUFDLEtBQUssWUFBWSxFQUFDO2lCQUNqRSxPQUFPOzs7O1lBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFDLENBQUM7UUFDckMsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDLEVBQUM7QUFDSixDQUFDOztBQUVELE1BQU0sT0FBTywyQkFBMkIsR0FBcUI7SUFDM0Q7UUFDRSxPQUFPLEVBQUUsZUFBZTtRQUN4QixVQUFVLEVBQUUscUJBQXFCO1FBQ2pDLElBQUksRUFBRSxDQUFDLGFBQWEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO1FBQ3pDLEtBQUssRUFBRSxJQUFJO0tBQ1o7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtET0NVTUVOVCwgybVnZXRET00gYXMgZ2V0RE9NfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtBUFBfSU5JVElBTElaRVIsIEFwcGxpY2F0aW9uSW5pdFN0YXR1cywgSW5qZWN0LCBJbmplY3Rpb25Ub2tlbiwgSW5qZWN0b3IsIFN0YXRpY1Byb3ZpZGVyfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBBbiBpZCB0aGF0IGlkZW50aWZpZXMgYSBwYXJ0aWN1bGFyIGFwcGxpY2F0aW9uIGJlaW5nIGJvb3RzdHJhcHBlZCwgdGhhdCBzaG91bGRcbiAqIG1hdGNoIGFjcm9zcyB0aGUgY2xpZW50L3NlcnZlciBib3VuZGFyeS5cbiAqL1xuZXhwb3J0IGNvbnN0IFRSQU5TSVRJT05fSUQgPSBuZXcgSW5qZWN0aW9uVG9rZW4oJ1RSQU5TSVRJT05fSUQnKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGFwcEluaXRpYWxpemVyRmFjdG9yeSh0cmFuc2l0aW9uSWQ6IHN0cmluZywgZG9jdW1lbnQ6IGFueSwgaW5qZWN0b3I6IEluamVjdG9yKSB7XG4gIHJldHVybiAoKSA9PiB7XG4gICAgLy8gV2FpdCBmb3IgYWxsIGFwcGxpY2F0aW9uIGluaXRpYWxpemVycyB0byBiZSBjb21wbGV0ZWQgYmVmb3JlIHJlbW92aW5nIHRoZSBzdHlsZXMgc2V0IGJ5XG4gICAgLy8gdGhlIHNlcnZlci5cbiAgICBpbmplY3Rvci5nZXQoQXBwbGljYXRpb25Jbml0U3RhdHVzKS5kb25lUHJvbWlzZS50aGVuKCgpID0+IHtcbiAgICAgIGNvbnN0IGRvbSA9IGdldERPTSgpO1xuICAgICAgY29uc3Qgc3R5bGVzOiBhbnlbXSA9XG4gICAgICAgICAgQXJyYXkucHJvdG90eXBlLnNsaWNlLmFwcGx5KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYHN0eWxlW25nLXRyYW5zaXRpb25dYCkpO1xuICAgICAgc3R5bGVzLmZpbHRlcihlbCA9PiBlbC5nZXRBdHRyaWJ1dGUoJ25nLXRyYW5zaXRpb24nKSA9PT0gdHJhbnNpdGlvbklkKVxuICAgICAgICAgIC5mb3JFYWNoKGVsID0+IGRvbS5yZW1vdmUoZWwpKTtcbiAgICB9KTtcbiAgfTtcbn1cblxuZXhwb3J0IGNvbnN0IFNFUlZFUl9UUkFOU0lUSU9OX1BST1ZJREVSUzogU3RhdGljUHJvdmlkZXJbXSA9IFtcbiAge1xuICAgIHByb3ZpZGU6IEFQUF9JTklUSUFMSVpFUixcbiAgICB1c2VGYWN0b3J5OiBhcHBJbml0aWFsaXplckZhY3RvcnksXG4gICAgZGVwczogW1RSQU5TSVRJT05fSUQsIERPQ1VNRU5ULCBJbmplY3Rvcl0sXG4gICAgbXVsdGk6IHRydWVcbiAgfSxcbl07XG4iXX0=