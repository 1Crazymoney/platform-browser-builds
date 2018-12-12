import { AnimationBuilder } from '@angular/animations';
import { AnimationDriver, ɵAnimationEngine as AnimationEngine, ɵAnimationStyleNormalizer as AnimationStyleNormalizer, ɵCssKeyframesDriver as CssKeyframesDriver, ɵNoopAnimationDriver as NoopAnimationDriver, ɵWebAnimationsDriver as WebAnimationsDriver, ɵWebAnimationsStyleNormalizer as WebAnimationsStyleNormalizer, ɵsupportsWebAnimations as supportsWebAnimations } from '@angular/animations/browser';
import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, InjectionToken, NgZone, RendererFactory2 } from '@angular/core';
import { ɵDomRendererFactory2 as DomRendererFactory2 } from '@angular/platform-browser';
import { BrowserAnimationBuilder } from './animation_builder';
import { AnimationRendererFactory } from './animation_renderer';
import * as i0 from "@angular/core";
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
export class InjectableAnimationEngine extends AnimationEngine {
    /**
     * @param {?} doc
     * @param {?} driver
     * @param {?} normalizer
     */
    constructor(doc, driver, normalizer) {
        super(doc.body, driver, normalizer);
    }
}
InjectableAnimationEngine.decorators = [
    { type: Injectable },
];
/** @nocollapse */
InjectableAnimationEngine.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: AnimationDriver },
    { type: AnimationStyleNormalizer }
];
InjectableAnimationEngine.ngInjectableDef = i0.defineInjectable({ token: InjectableAnimationEngine, factory: function InjectableAnimationEngine_Factory(t) { return new (t || InjectableAnimationEngine)(i0.inject(DOCUMENT), i0.inject(AnimationDriver), i0.inject(AnimationStyleNormalizer)); }, providedIn: null });
/*@__PURE__*/ i0.ɵsetClassMetadata(InjectableAnimationEngine, [{
        type: Injectable
    }], [{
        type: undefined,
        decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }]
    }, {
        type: AnimationDriver
    }, {
        type: AnimationStyleNormalizer
    }], null);
/**
 * @return {?}
 */
export function instantiateSupportedAnimationDriver() {
    return supportsWebAnimations() ? new WebAnimationsDriver() : new CssKeyframesDriver();
}
/**
 * @return {?}
 */
export function instantiateDefaultStyleNormalizer() {
    return new WebAnimationsStyleNormalizer();
}
/**
 * @param {?} renderer
 * @param {?} engine
 * @param {?} zone
 * @return {?}
 */
export function instantiateRendererFactory(renderer, engine, zone) {
    return new AnimationRendererFactory(renderer, engine, zone);
}
/** *
 * \@publicApi
  @type {?} */
export const ANIMATION_MODULE_TYPE = new InjectionToken('AnimationModuleType');
/** @type {?} */
const SHARED_ANIMATION_PROVIDERS = [
    { provide: AnimationBuilder, useClass: BrowserAnimationBuilder },
    { provide: AnimationStyleNormalizer, useFactory: instantiateDefaultStyleNormalizer },
    { provide: AnimationEngine, useClass: InjectableAnimationEngine }, {
        provide: RendererFactory2,
        useFactory: instantiateRendererFactory,
        deps: [DomRendererFactory2, AnimationEngine, NgZone]
    }
];
/** *
 * Separate providers from the actual module so that we can do a local modification in Google3 to
 * include them in the BrowserModule.
  @type {?} */
export const BROWSER_ANIMATIONS_PROVIDERS = [
    { provide: AnimationDriver, useFactory: instantiateSupportedAnimationDriver },
    { provide: ANIMATION_MODULE_TYPE, useValue: 'BrowserAnimations' }, ...SHARED_ANIMATION_PROVIDERS
];
/** *
 * Separate providers from the actual module so that we can do a local modification in Google3 to
 * include them in the BrowserTestingModule.
  @type {?} */
export const BROWSER_NOOP_ANIMATIONS_PROVIDERS = [
    { provide: AnimationDriver, useClass: NoopAnimationDriver },
    { provide: ANIMATION_MODULE_TYPE, useValue: 'NoopAnimations' }, ...SHARED_ANIMATION_PROVIDERS
];

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvdmlkZXJzLmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uLyIsInNvdXJjZXMiOlsicGFja2FnZXMvcGxhdGZvcm0tYnJvd3Nlci9hbmltYXRpb25zL3NyYy9wcm92aWRlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUUEsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFDckQsT0FBTyxFQUFDLGVBQWUsRUFBRSxnQkFBZ0IsSUFBSSxlQUFlLEVBQUUseUJBQXlCLElBQUksd0JBQXdCLEVBQUUsbUJBQW1CLElBQUksa0JBQWtCLEVBQUUsb0JBQW9CLElBQUksbUJBQW1CLEVBQUUsb0JBQW9CLElBQUksbUJBQW1CLEVBQUUsNkJBQTZCLElBQUksNEJBQTRCLEVBQUUsc0JBQXNCLElBQUkscUJBQXFCLEVBQUMsTUFBTSw2QkFBNkIsQ0FBQztBQUM3WSxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDekMsT0FBTyxFQUFDLE1BQU0sRUFBRSxVQUFVLEVBQUUsY0FBYyxFQUFFLE1BQU0sRUFBWSxnQkFBZ0IsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNyRyxPQUFPLEVBQUMsb0JBQW9CLElBQUksbUJBQW1CLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUV0RixPQUFPLEVBQUMsdUJBQXVCLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUM1RCxPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQzs7Ozs7Ozs7Ozs7OztBQUc5RCxNQUFNLE9BQU8seUJBQTBCLFNBQVEsZUFBZTs7Ozs7O0lBQzVELFlBQ3NCLEdBQVEsRUFBRSxNQUF1QixFQUFFLFVBQW9DO1FBQzNGLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxVQUFVLENBQUMsQ0FBQztLQUNyQzs7O1lBTEYsVUFBVTs7Ozs0Q0FHSixNQUFNLFNBQUMsUUFBUTtZQVhkLGVBQWU7WUFBb0Usd0JBQXdCOzt5RUFTdEcseUJBQXlCLDRFQUF6Qix5QkFBeUIsWUFFeEIsUUFBUSxhQUFvQixlQUFlLGFBQWMsd0JBQXdCO21DQUZsRix5QkFBeUI7Y0FEckMsVUFBVTs7OztzQkFHSixNQUFNO3VCQUFDLFFBQVE7OztjQUFvQixlQUFlOztjQUFjLHdCQUF3Qjs7Ozs7QUFLL0YsTUFBTSxVQUFVLG1DQUFtQztJQUNqRCxPQUFPLHFCQUFxQixFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksbUJBQW1CLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxrQkFBa0IsRUFBRSxDQUFDO0NBQ3ZGOzs7O0FBRUQsTUFBTSxVQUFVLGlDQUFpQztJQUMvQyxPQUFPLElBQUksNEJBQTRCLEVBQUUsQ0FBQztDQUMzQzs7Ozs7OztBQUVELE1BQU0sVUFBVSwwQkFBMEIsQ0FDdEMsUUFBNkIsRUFBRSxNQUF1QixFQUFFLElBQVk7SUFDdEUsT0FBTyxJQUFJLHdCQUF3QixDQUFDLFFBQVEsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7Q0FDN0Q7Ozs7QUFLRCxhQUFhLHFCQUFxQixHQUM5QixJQUFJLGNBQWMsQ0FBdUMscUJBQXFCLENBQUMsQ0FBQzs7QUFFcEYsTUFBTSwwQkFBMEIsR0FBZTtJQUM3QyxFQUFDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxRQUFRLEVBQUUsdUJBQXVCLEVBQUM7SUFDOUQsRUFBQyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsVUFBVSxFQUFFLGlDQUFpQyxFQUFDO0lBQ2xGLEVBQUMsT0FBTyxFQUFFLGVBQWUsRUFBRSxRQUFRLEVBQUUseUJBQXlCLEVBQUMsRUFBRTtRQUMvRCxPQUFPLEVBQUUsZ0JBQWdCO1FBQ3pCLFVBQVUsRUFBRSwwQkFBMEI7UUFDdEMsSUFBSSxFQUFFLENBQUMsbUJBQW1CLEVBQUUsZUFBZSxFQUFFLE1BQU0sQ0FBQztLQUNyRDtDQUNGLENBQUM7Ozs7O0FBTUYsYUFBYSw0QkFBNEIsR0FBZTtJQUN0RCxFQUFDLE9BQU8sRUFBRSxlQUFlLEVBQUUsVUFBVSxFQUFFLG1DQUFtQyxFQUFDO0lBQzNFLEVBQUMsT0FBTyxFQUFFLHFCQUFxQixFQUFFLFFBQVEsRUFBRSxtQkFBbUIsRUFBQyxFQUFFLEdBQUcsMEJBQTBCO0NBQy9GLENBQUM7Ozs7O0FBTUYsYUFBYSxpQ0FBaUMsR0FBZTtJQUMzRCxFQUFDLE9BQU8sRUFBRSxlQUFlLEVBQUUsUUFBUSxFQUFFLG1CQUFtQixFQUFDO0lBQ3pELEVBQUMsT0FBTyxFQUFFLHFCQUFxQixFQUFFLFFBQVEsRUFBRSxnQkFBZ0IsRUFBQyxFQUFFLEdBQUcsMEJBQTBCO0NBQzVGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7QW5pbWF0aW9uQnVpbGRlcn0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQge0FuaW1hdGlvbkRyaXZlciwgybVBbmltYXRpb25FbmdpbmUgYXMgQW5pbWF0aW9uRW5naW5lLCDJtUFuaW1hdGlvblN0eWxlTm9ybWFsaXplciBhcyBBbmltYXRpb25TdHlsZU5vcm1hbGl6ZXIsIMm1Q3NzS2V5ZnJhbWVzRHJpdmVyIGFzIENzc0tleWZyYW1lc0RyaXZlciwgybVOb29wQW5pbWF0aW9uRHJpdmVyIGFzIE5vb3BBbmltYXRpb25Ecml2ZXIsIMm1V2ViQW5pbWF0aW9uc0RyaXZlciBhcyBXZWJBbmltYXRpb25zRHJpdmVyLCDJtVdlYkFuaW1hdGlvbnNTdHlsZU5vcm1hbGl6ZXIgYXMgV2ViQW5pbWF0aW9uc1N0eWxlTm9ybWFsaXplciwgybVzdXBwb3J0c1dlYkFuaW1hdGlvbnMgYXMgc3VwcG9ydHNXZWJBbmltYXRpb25zfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zL2Jyb3dzZXInO1xuaW1wb3J0IHtET0NVTUVOVH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7SW5qZWN0LCBJbmplY3RhYmxlLCBJbmplY3Rpb25Ub2tlbiwgTmdab25lLCBQcm92aWRlciwgUmVuZGVyZXJGYWN0b3J5Mn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge8m1RG9tUmVuZGVyZXJGYWN0b3J5MiBhcyBEb21SZW5kZXJlckZhY3RvcnkyfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcblxuaW1wb3J0IHtCcm93c2VyQW5pbWF0aW9uQnVpbGRlcn0gZnJvbSAnLi9hbmltYXRpb25fYnVpbGRlcic7XG5pbXBvcnQge0FuaW1hdGlvblJlbmRlcmVyRmFjdG9yeX0gZnJvbSAnLi9hbmltYXRpb25fcmVuZGVyZXInO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSW5qZWN0YWJsZUFuaW1hdGlvbkVuZ2luZSBleHRlbmRzIEFuaW1hdGlvbkVuZ2luZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgICAgQEluamVjdChET0NVTUVOVCkgZG9jOiBhbnksIGRyaXZlcjogQW5pbWF0aW9uRHJpdmVyLCBub3JtYWxpemVyOiBBbmltYXRpb25TdHlsZU5vcm1hbGl6ZXIpIHtcbiAgICBzdXBlcihkb2MuYm9keSwgZHJpdmVyLCBub3JtYWxpemVyKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5zdGFudGlhdGVTdXBwb3J0ZWRBbmltYXRpb25Ecml2ZXIoKSB7XG4gIHJldHVybiBzdXBwb3J0c1dlYkFuaW1hdGlvbnMoKSA/IG5ldyBXZWJBbmltYXRpb25zRHJpdmVyKCkgOiBuZXcgQ3NzS2V5ZnJhbWVzRHJpdmVyKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbnN0YW50aWF0ZURlZmF1bHRTdHlsZU5vcm1hbGl6ZXIoKSB7XG4gIHJldHVybiBuZXcgV2ViQW5pbWF0aW9uc1N0eWxlTm9ybWFsaXplcigpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5zdGFudGlhdGVSZW5kZXJlckZhY3RvcnkoXG4gICAgcmVuZGVyZXI6IERvbVJlbmRlcmVyRmFjdG9yeTIsIGVuZ2luZTogQW5pbWF0aW9uRW5naW5lLCB6b25lOiBOZ1pvbmUpIHtcbiAgcmV0dXJuIG5ldyBBbmltYXRpb25SZW5kZXJlckZhY3RvcnkocmVuZGVyZXIsIGVuZ2luZSwgem9uZSk7XG59XG5cbi8qKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgY29uc3QgQU5JTUFUSU9OX01PRFVMRV9UWVBFID1cbiAgICBuZXcgSW5qZWN0aW9uVG9rZW48J05vb3BBbmltYXRpb25zJ3wnQnJvd3NlckFuaW1hdGlvbnMnPignQW5pbWF0aW9uTW9kdWxlVHlwZScpO1xuXG5jb25zdCBTSEFSRURfQU5JTUFUSU9OX1BST1ZJREVSUzogUHJvdmlkZXJbXSA9IFtcbiAge3Byb3ZpZGU6IEFuaW1hdGlvbkJ1aWxkZXIsIHVzZUNsYXNzOiBCcm93c2VyQW5pbWF0aW9uQnVpbGRlcn0sXG4gIHtwcm92aWRlOiBBbmltYXRpb25TdHlsZU5vcm1hbGl6ZXIsIHVzZUZhY3Rvcnk6IGluc3RhbnRpYXRlRGVmYXVsdFN0eWxlTm9ybWFsaXplcn0sXG4gIHtwcm92aWRlOiBBbmltYXRpb25FbmdpbmUsIHVzZUNsYXNzOiBJbmplY3RhYmxlQW5pbWF0aW9uRW5naW5lfSwge1xuICAgIHByb3ZpZGU6IFJlbmRlcmVyRmFjdG9yeTIsXG4gICAgdXNlRmFjdG9yeTogaW5zdGFudGlhdGVSZW5kZXJlckZhY3RvcnksXG4gICAgZGVwczogW0RvbVJlbmRlcmVyRmFjdG9yeTIsIEFuaW1hdGlvbkVuZ2luZSwgTmdab25lXVxuICB9XG5dO1xuXG4vKipcbiAqIFNlcGFyYXRlIHByb3ZpZGVycyBmcm9tIHRoZSBhY3R1YWwgbW9kdWxlIHNvIHRoYXQgd2UgY2FuIGRvIGEgbG9jYWwgbW9kaWZpY2F0aW9uIGluIEdvb2dsZTMgdG9cbiAqIGluY2x1ZGUgdGhlbSBpbiB0aGUgQnJvd3Nlck1vZHVsZS5cbiAqL1xuZXhwb3J0IGNvbnN0IEJST1dTRVJfQU5JTUFUSU9OU19QUk9WSURFUlM6IFByb3ZpZGVyW10gPSBbXG4gIHtwcm92aWRlOiBBbmltYXRpb25Ecml2ZXIsIHVzZUZhY3Rvcnk6IGluc3RhbnRpYXRlU3VwcG9ydGVkQW5pbWF0aW9uRHJpdmVyfSxcbiAge3Byb3ZpZGU6IEFOSU1BVElPTl9NT0RVTEVfVFlQRSwgdXNlVmFsdWU6ICdCcm93c2VyQW5pbWF0aW9ucyd9LCAuLi5TSEFSRURfQU5JTUFUSU9OX1BST1ZJREVSU1xuXTtcblxuLyoqXG4gKiBTZXBhcmF0ZSBwcm92aWRlcnMgZnJvbSB0aGUgYWN0dWFsIG1vZHVsZSBzbyB0aGF0IHdlIGNhbiBkbyBhIGxvY2FsIG1vZGlmaWNhdGlvbiBpbiBHb29nbGUzIHRvXG4gKiBpbmNsdWRlIHRoZW0gaW4gdGhlIEJyb3dzZXJUZXN0aW5nTW9kdWxlLlxuICovXG5leHBvcnQgY29uc3QgQlJPV1NFUl9OT09QX0FOSU1BVElPTlNfUFJPVklERVJTOiBQcm92aWRlcltdID0gW1xuICB7cHJvdmlkZTogQW5pbWF0aW9uRHJpdmVyLCB1c2VDbGFzczogTm9vcEFuaW1hdGlvbkRyaXZlcn0sXG4gIHtwcm92aWRlOiBBTklNQVRJT05fTU9EVUxFX1RZUEUsIHVzZVZhbHVlOiAnTm9vcEFuaW1hdGlvbnMnfSwgLi4uU0hBUkVEX0FOSU1BVElPTl9QUk9WSURFUlNcbl07XG4iXX0=