/**
 * @license Angular v10.0.0-next.1+7.sha-9e78f55
 * (c) 2010-2020 Google LLC. https://angular.io/
 * License: MIT
 */

import { NgZone } from '@angular/core';
import { PlatformRef } from '@angular/core';
import { StaticProvider } from '@angular/core';

/**
 * NgModule for testing.
 *
 * @publicApi
 */
export declare class BrowserTestingModule {
}

/**
 * Platform for testing
 *
 * @publicApi
 */
export declare const platformBrowserTesting: (extraProviders?: StaticProvider[] | undefined) => PlatformRef;

export declare function ɵangular_packages_platform_browser_testing_testing_a(): NgZone;

export { }
