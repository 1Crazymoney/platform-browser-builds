import { AnimationDriver, ɵAnimationEngine as AnimationEngine, ɵAnimationStyleNormalizer as AnimationStyleNormalizer, ɵCssKeyframesDriver as CssKeyframesDriver, ɵWebAnimationsDriver as WebAnimationsDriver, ɵWebAnimationsStyleNormalizer as WebAnimationsStyleNormalizer } from '@angular/animations/browser';
import { InjectionToken, NgZone, Provider } from '@angular/core';
import { ɵDomRendererFactory2 as DomRendererFactory2 } from '@angular/platform-browser';
import { AnimationRendererFactory } from './animation_renderer';
import * as i0 from "@angular/core";
export declare class InjectableAnimationEngine extends AnimationEngine {
    constructor(doc: any, driver: AnimationDriver, normalizer: AnimationStyleNormalizer);
    static ɵfac: i0.ɵɵFactoryDef<InjectableAnimationEngine, never>;
    static ɵprov: i0.ɵɵInjectableDef<InjectableAnimationEngine>;
}
export declare function instantiateSupportedAnimationDriver(): WebAnimationsDriver | CssKeyframesDriver;
export declare function instantiateDefaultStyleNormalizer(): WebAnimationsStyleNormalizer;
export declare function instantiateRendererFactory(renderer: DomRendererFactory2, engine: AnimationEngine, zone: NgZone): AnimationRendererFactory;
/**
 * @publicApi
 */
export declare const ANIMATION_MODULE_TYPE: InjectionToken<"NoopAnimations" | "BrowserAnimations">;
/**
 * Separate providers from the actual module so that we can do a local modification in Google3 to
 * include them in the BrowserModule.
 */
export declare const BROWSER_ANIMATIONS_PROVIDERS: Provider[];
/**
 * Separate providers from the actual module so that we can do a local modification in Google3 to
 * include them in the BrowserTestingModule.
 */
export declare const BROWSER_NOOP_ANIMATIONS_PROVIDERS: Provider[];
