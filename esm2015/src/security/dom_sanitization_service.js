import { __decorate, __metadata, __param } from "tslib";
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { DOCUMENT } from '@angular/common';
import { forwardRef, Inject, Injectable, Injector, SecurityContext, ɵ_sanitizeHtml as _sanitizeHtml, ɵ_sanitizeUrl as _sanitizeUrl, ɵallowSanitizationBypassAndThrow as allowSanitizationBypassOrThrow, ɵbypassSanitizationTrustHtml as bypassSanitizationTrustHtml, ɵbypassSanitizationTrustResourceUrl as bypassSanitizationTrustResourceUrl, ɵbypassSanitizationTrustScript as bypassSanitizationTrustScript, ɵbypassSanitizationTrustStyle as bypassSanitizationTrustStyle, ɵbypassSanitizationTrustUrl as bypassSanitizationTrustUrl, ɵgetSanitizationBypassType as getSanitizationBypassType, ɵunwrapSafeValue as unwrapSafeValue } from '@angular/core';
import * as i0 from "@angular/core";
export { SecurityContext };
/**
 * DomSanitizer helps preventing Cross Site Scripting Security bugs (XSS) by sanitizing
 * values to be safe to use in the different DOM contexts.
 *
 * For example, when binding a URL in an `<a [href]="someValue">` hyperlink, `someValue` will be
 * sanitized so that an attacker cannot inject e.g. a `javascript:` URL that would execute code on
 * the website.
 *
 * In specific situations, it might be necessary to disable sanitization, for example if the
 * application genuinely needs to produce a `javascript:` style link with a dynamic value in it.
 * Users can bypass security by constructing a value with one of the `bypassSecurityTrust...`
 * methods, and then binding to that value from the template.
 *
 * These situations should be very rare, and extraordinary care must be taken to avoid creating a
 * Cross Site Scripting (XSS) security bug!
 *
 * When using `bypassSecurityTrust...`, make sure to call the method as early as possible and as
 * close as possible to the source of the value, to make it easy to verify no security bug is
 * created by its use.
 *
 * It is not required (and not recommended) to bypass security if the value is safe, e.g. a URL that
 * does not start with a suspicious protocol, or an HTML snippet that does not contain dangerous
 * code. The sanitizer leaves safe values intact.
 *
 * @security Calling any of the `bypassSecurityTrust...` APIs disables Angular's built-in
 * sanitization for the value passed in. Carefully check and audit all values and code paths going
 * into this call. Make sure any user data is appropriately escaped for this security context.
 * For more detail, see the [Security Guide](http://g.co/ng/security).
 *
 * @publicApi
 */
let DomSanitizer = /** @class */ (() => {
    let DomSanitizer = class DomSanitizer {
    };
    DomSanitizer.ɵprov = i0.ɵɵdefineInjectable({ factory: function DomSanitizer_Factory() { return i0.ɵɵinject(DomSanitizerImpl); }, token: DomSanitizer, providedIn: "root" });
    DomSanitizer = __decorate([
        Injectable({ providedIn: 'root', useExisting: forwardRef(() => DomSanitizerImpl) })
    ], DomSanitizer);
    return DomSanitizer;
})();
export { DomSanitizer };
export function domSanitizerImplFactory(injector) {
    return new DomSanitizerImpl(injector.get(DOCUMENT));
}
let DomSanitizerImpl = /** @class */ (() => {
    let DomSanitizerImpl = class DomSanitizerImpl extends DomSanitizer {
        constructor(_doc) {
            super();
            this._doc = _doc;
        }
        sanitize(ctx, value) {
            if (value == null)
                return null;
            switch (ctx) {
                case SecurityContext.NONE:
                    return value;
                case SecurityContext.HTML:
                    if (allowSanitizationBypassOrThrow(value, "HTML" /* Html */)) {
                        return unwrapSafeValue(value);
                    }
                    return _sanitizeHtml(this._doc, String(value));
                case SecurityContext.STYLE:
                    if (allowSanitizationBypassOrThrow(value, "Style" /* Style */)) {
                        return unwrapSafeValue(value);
                    }
                    return value;
                case SecurityContext.SCRIPT:
                    if (allowSanitizationBypassOrThrow(value, "Script" /* Script */)) {
                        return unwrapSafeValue(value);
                    }
                    throw new Error('unsafe value used in a script context');
                case SecurityContext.URL:
                    const type = getSanitizationBypassType(value);
                    if (allowSanitizationBypassOrThrow(value, "URL" /* Url */)) {
                        return unwrapSafeValue(value);
                    }
                    return _sanitizeUrl(String(value));
                case SecurityContext.RESOURCE_URL:
                    if (allowSanitizationBypassOrThrow(value, "ResourceURL" /* ResourceUrl */)) {
                        return unwrapSafeValue(value);
                    }
                    throw new Error('unsafe value used in a resource URL context (see http://g.co/ng/security#xss)');
                default:
                    throw new Error(`Unexpected SecurityContext ${ctx} (see http://g.co/ng/security#xss)`);
            }
        }
        bypassSecurityTrustHtml(value) {
            return bypassSanitizationTrustHtml(value);
        }
        bypassSecurityTrustStyle(value) {
            return bypassSanitizationTrustStyle(value);
        }
        bypassSecurityTrustScript(value) {
            return bypassSanitizationTrustScript(value);
        }
        bypassSecurityTrustUrl(value) {
            return bypassSanitizationTrustUrl(value);
        }
        bypassSecurityTrustResourceUrl(value) {
            return bypassSanitizationTrustResourceUrl(value);
        }
    };
    DomSanitizerImpl.ɵprov = i0.ɵɵdefineInjectable({ factory: function DomSanitizerImpl_Factory() { return domSanitizerImplFactory(i0.ɵɵinject(i0.INJECTOR)); }, token: DomSanitizerImpl, providedIn: "root" });
    DomSanitizerImpl = __decorate([
        Injectable({ providedIn: 'root', useFactory: domSanitizerImplFactory, deps: [Injector] }),
        __param(0, Inject(DOCUMENT)),
        __metadata("design:paramtypes", [Object])
    ], DomSanitizerImpl);
    return DomSanitizerImpl;
})();
export { DomSanitizerImpl };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tX3Nhbml0aXphdGlvbl9zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvcGxhdGZvcm0tYnJvd3Nlci9zcmMvc2VjdXJpdHkvZG9tX3Nhbml0aXphdGlvbl9zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDekMsT0FBTyxFQUFDLFVBQVUsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBYSxlQUFlLEVBQUUsY0FBYyxJQUFJLGFBQWEsRUFBRSxhQUFhLElBQUksWUFBWSxFQUFFLGdDQUFnQyxJQUFJLDhCQUE4QixFQUFFLDRCQUE0QixJQUFJLDJCQUEyQixFQUFFLG1DQUFtQyxJQUFJLGtDQUFrQyxFQUFFLDhCQUE4QixJQUFJLDZCQUE2QixFQUFFLDZCQUE2QixJQUFJLDRCQUE0QixFQUFFLDJCQUEyQixJQUFJLDBCQUEwQixFQUE2QiwwQkFBMEIsSUFBSSx5QkFBeUIsRUFBRSxnQkFBZ0IsSUFBSSxlQUFlLEVBQUMsTUFBTSxlQUFlLENBQUM7O0FBRW5xQixPQUFPLEVBQUMsZUFBZSxFQUFDLENBQUM7QUE4Q3pCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0E4Qkc7QUFFSDtJQUFBLElBQXNCLFlBQVksR0FBbEMsTUFBc0IsWUFBWTtLQXNEakMsQ0FBQTs7SUF0RHFCLFlBQVk7UUFEakMsVUFBVSxDQUFDLEVBQUMsVUFBVSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLGdCQUFnQixDQUFDLEVBQUMsQ0FBQztPQUM1RCxZQUFZLENBc0RqQzt1QkEvSUQ7S0ErSUM7U0F0RHFCLFlBQVk7QUF3RGxDLE1BQU0sVUFBVSx1QkFBdUIsQ0FBQyxRQUFrQjtJQUN4RCxPQUFPLElBQUksZ0JBQWdCLENB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Z0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtET0NVTUVOVH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7Zm9yd2FyZFJlZiwgSW5qZWN0LCBJbmplY3RhYmxlLCBJbmplY3RvciwgU2FuaXRpemVyLCBTZWN1cml0eUNvbnRleHQsIMm1X3Nhbml0aXplSHRtbCBhcyBfc2FuaXRpemVIdG1sLCDJtV9zYW5pdGl6ZVVybCBhcyBfc2FuaXRpemVVcmwsIMm1YWxsb3dTYW5pdGl6YXRpb25CeXBhc3NBbmRUaHJvdyBhcyBhbGxvd1Nhbml0aXphdGlvbkJ5cGFzc09yVGhyb3csIMm1YnlwYXNzU2FuaXRpemF0aW9uVHJ1c3RIdG1sIGFzIGJ5cGFzc1Nhbml0aXphdGlvblRydXN0SHRtbCwgybVieXBhc3NTYW5pdGl6YXRpb25UcnVzdFJlc291cmNlVXJsIGFzIGJ5cGFzc1Nhbml0aXphdGlvblRydXN0UmVzb3VyY2VVcmwsIMm1YnlwYXNzU2FuaXRpemF0aW9uVHJ1c3RTY3JpcHQgYXMgYnlwYXNzU2FuaXRpemF0aW9uVHJ1c3RTY3JpcHQsIMm1YnlwYXNzU2FuaXRpemF0aW9uVHJ1c3RTdHlsZSBhcyBieXBhc3NTYW5pdGl6YXRpb25UcnVzdFN0eWxlLCDJtWJ5cGFzc1Nhbml0aXphdGlvblRydXN0VXJsIGFzIGJ5cGFzc1Nhbml0aXphdGlvblRydXN0VXJsLCDJtUJ5cGFzc1R5cGUgYXMgQnlwYXNzVHlwZSwgybVnZXRTYW5pdGl6YXRpb25CeXBhc3NUeXBlIGFzIGdldFNhbml0aXphdGlvbkJ5cGFzc1R5cGUsIMm1dW53cmFwU2FmZVZhbHVlIGFzIHVud3JhcFNhZmVWYWx1ZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCB7U2VjdXJpdHlDb250ZXh0fTtcblxuXG5cbi8qKlxuICogTWFya2VyIGludGVyZmFjZSBmb3IgYSB2YWx1ZSB0aGF0J3Mgc2FmZSB0byB1c2UgaW4gYSBwYXJ0aWN1bGFyIGNvbnRleHQuXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgaW50ZXJmYWNlIFNhZmVWYWx1ZSB7fVxuXG4vKipcbiAqIE1hcmtlciBpbnRlcmZhY2UgZm9yIGEgdmFsdWUgdGhhdCdzIHNhZmUgdG8gdXNlIGFzIEhUTUwuXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgaW50ZXJmYWNlIFNhZmVIdG1sIGV4dGVuZHMgU2FmZVZhbHVlIHt9XG5cbi8qKlxuICogTWFya2VyIGludGVyZmFjZSBmb3IgYSB2YWx1ZSB0aGF0J3Mgc2FmZSB0byB1c2UgYXMgc3R5bGUgKENTUykuXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgaW50ZXJmYWNlIFNhZmVTdHlsZSBleHRlbmRzIFNhZmVWYWx1ZSB7fVxuXG4vKipcbiAqIE1hcmtlciBpbnRlcmZhY2UgZm9yIGEgdmFsdWUgdGhhdCdzIHNhZmUgdG8gdXNlIGFzIEphdmFTY3JpcHQuXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgaW50ZXJmYWNlIFNhZmVTY3JpcHQgZXh0ZW5kcyBTYWZlVmFsdWUge31cblxuLyoqXG4gKiBNYXJrZXIgaW50ZXJmYWNlIGZvciBhIHZhbHVlIHRoYXQncyBzYWZlIHRvIHVzZSBhcyBhIFVSTCBsaW5raW5nIHRvIGEgZG9jdW1lbnQuXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgaW50ZXJmYWNlIFNhZmVVcmwgZXh0ZW5kcyBTYWZlVmFsdWUge31cblxuLyoqXG4gKiBNYXJrZXIgaW50ZXJmYWNlIGZvciBhIHZhbHVlIHRoYXQncyBzYWZlIHRvIHVzZSBhcyBhIFVSTCB0byBsb2FkIGV4ZWN1dGFibGUgY29kZSBmcm9tLlxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBTYWZlUmVzb3VyY2VVcmwgZXh0ZW5kcyBTYWZlVmFsdWUge31cblxuLyoqXG4gKiBEb21TYW5pdGl6ZXIgaGVscHMgcHJldmVudGluZyBDcm9zcyBTaXRlIFNjcmlwdGluZyBTZWN1cml0eSBidWdzIChYU1MpIGJ5IHNhbml0aXppbmdcbiAqIHZhbHVlcyB0byBiZSBzYWZlIHRvIHVzZSBpbiB0aGUgZGlmZmVyZW50IERPTSBjb250ZXh0cy5cbiAqXG4gKiBGb3IgZXhhbXBsZSwgd2hlbiBiaW5kaW5nIGEgVVJMIGluIGFuIGA8YSBbaHJlZl09XCJzb21lVmFsdWVcIj5gIGh5cGVybGluaywgYHNvbWVWYWx1ZWAgd2lsbCBiZVxuICogc2FuaXRpemVkIHNvIHRoYXQgYW4gYXR0YWNrZXIgY2Fubm90IGluamVjdCBlLmcuIGEgYGphdmFzY3JpcHQ6YCBVUkwgdGhhdCB3b3VsZCBleGVjdXRlIGNvZGUgb25cbiAqIHRoZSB3ZWJzaXRlLlxuICpcbiAqIEluIHNwZWNpZmljIHNpdHVhdGlvbnMsIGl0IG1pZ2h0IGJlIG5lY2Vzc2FyeSB0byBkaXNhYmxlIHNhbml0aXphdGlvbiwgZm9yIGV4YW1wbGUgaWYgdGhlXG4gKiBhcHBsaWNhdGlvbiBnZW51aW5lbHkgbmVlZHMgdG8gcHJvZHVjZSBhIGBqYXZhc2NyaXB0OmAgc3R5bGUgbGluayB3aXRoIGEgZHluYW1pYyB2YWx1ZSBpbiBpdC5cbiAqIFVzZXJzIGNhbiBieXBhc3Mgc2VjdXJpdHkgYnkgY29uc3RydWN0aW5nIGEgdmFsdWUgd2l0aCBvbmUgb2YgdGhlIGBieXBhc3NTZWN1cml0eVRydXN0Li4uYFxuICogbWV0aG9kcywgYW5kIHRoZW4gYmluZGluZyB0byB0aGF0IHZhbHVlIGZyb20gdGhlIHRlbXBsYXRlLlxuICpcbiAqIFRoZXNlIHNpdHVhdGlvbnMgc2hvdWxkIGJlIHZlcnkgcmFyZSwgYW5kIGV4dHJhb3JkaW5hcnkgY2FyZSBtdXN0IGJlIHRha2VuIHRvIGF2b2lkIGNyZWF0aW5nIGFcbiAqIENyb3NzIFNpdGUgU2NyaXB0aW5nIChYU1MpIHNlY3VyaXR5IGJ1ZyFcbiAqXG4gKiBXaGVuIHVzaW5nIGBieXBhc3NTZWN1cml0eVRydXN0Li4uYCwgbWFrZSBzdXJlIHRvIGNhbGwgdGhlIG1ldGhvZCBhcyBlYXJseSBhcyBwb3NzaWJsZSBhbmQgYXNcbiAqIGNsb3NlIGFzIHBvc3NpYmxlIHRvIHRoZSBzb3VyY2Ugb2YgdGhlIHZhbHVlLCB0byBtYWtlIGl0IGVhc3kgdG8gdmVyaWZ5IG5vIHNlY3VyaXR5IGJ1ZyBpc1xuICogY3JlYXRlZCBieSBpdHMgdXNlLlxuICpcbiAqIEl0IGlzIG5vdCByZXF1aXJlZCAoYW5kIG5vdCByZWNvbW1lbmRlZCkgdG8gYnlwYXNzIHNlY3VyaXR5IGlmIHRoZSB2YWx1ZSBpcyBzYWZlLCBlLmcuIGEgVVJMIHRoYXRcbiAqIGRvZXMgbm90IHN0YXJ0IHdpdGggYSBzdXNwaWNpb3VzIHByb3RvY29sLCBvciBhbiBIVE1MIHNuaXBwZXQgdGhhdCBkb2VzIG5vdCBjb250YWluIGRhbmdlcm91c1xuICogY29kZS4gVGhlIHNhbml0aXplciBsZWF2ZXMgc2FmZSB2YWx1ZXMgaW50YWN0LlxuICpcbiAqIEBzZWN1cml0eSBDYWxsaW5nIGFueSBvZiB0aGUgYGJ5cGFzc1NlY3VyaXR5VHJ1c3QuLi5gIEFQSXMgZGlzYWJsZXMgQW5ndWxhcidzIGJ1aWx0LWluXG4gKiBzYW5pdGl6YXRpb24gZm9yIHRoZSB2YWx1ZSBwYXNzZWQgaW4uIENhcmVmdWxseSBjaGVjayBhbmQgYXVkaXQgYWxsIHZhbHVlcyBhbmQgY29kZSBwYXRocyBnb2luZ1xuICogaW50byB0aGlzIGNhbGwuIE1ha2Ugc3VyZSBhbnkgdXNlciBkYXRhIGlzIGFwcHJvcHJpYXRlbHkgZXNjYXBlZCBmb3IgdGhpcyBzZWN1cml0eSBjb250ZXh0LlxuICogRm9yIG1vcmUgZGV0YWlsLCBzZWUgdGhlIFtTZWN1cml0eSBHdWlkZV0oaHR0cDovL2cuY28vbmcvc2VjdXJpdHkpLlxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuQEluamVjdGFibGUoe3Byb3ZpZGVkSW46ICdyb290JywgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRG9tU2FuaXRpemVySW1wbCl9KVxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIERvbVNhbml0aXplciBpbXBsZW1lbnRzIFNhbml0aXplciB7XG4gIC8qKlxuICAgKiBTYW5pdGl6ZXMgYSB2YWx1ZSBmb3IgdXNlIGluIHRoZSBnaXZlbiBTZWN1cml0eUNvbnRleHQuXG4gICAqXG4gICAqIElmIHZhbHVlIGlzIHRydXN0ZWQgZm9yIHRoZSBjb250ZXh0LCB0aGlzIG1ldGhvZCB3aWxsIHVud3JhcCB0aGUgY29udGFpbmVkIHNhZmUgdmFsdWUgYW5kIHVzZVxuICAgKiBpdCBkaXJlY3RseS4gT3RoZXJ3aXNlLCB2YWx1ZSB3aWxsIGJlIHNhbml0aXplZCB0byBiZSBzYWZlIGluIHRoZSBnaXZlbiBjb250ZXh0LCBmb3IgZXhhbXBsZVxuICAgKiBieSByZXBsYWNpbmcgVVJMcyB0aGF0IGhhdmUgYW4gdW5zYWZlIHByb3RvY29sIHBhcnQgKHN1Y2ggYXMgYGphdmFzY3JpcHQ6YCkuIFRoZSBpbXBsZW1lbnRhdGlvblxuICAgKiBpcyByZXNwb25zaWJsZSB0byBtYWtlIHN1cmUgdGhhdCB0aGUgdmFsdWUgY2FuIGRlZmluaXRlbHkgYmUgc2FmZWx5IHVzZWQgaW4gdGhlIGdpdmVuIGNvbnRleHQuXG4gICAqL1xuICBhYnN0cmFjdCBzYW5pdGl6ZShjb250ZXh0OiBTZWN1cml0eUNvbnRleHQsIHZhbHVlOiBTYWZlVmFsdWV8c3RyaW5nfG51bGwpOiBzdHJpbmd8bnVsbDtcblxuICAvKipcbiAgICogQnlwYXNzIHNlY3VyaXR5IGFuZCB0cnVzdCB0aGUgZ2l2ZW4gdmFsdWUgdG8gYmUgc2FmZSBIVE1MLiBPbmx5IHVzZSB0aGlzIHdoZW4gdGhlIGJvdW5kIEhUTUxcbiAgICogaXMgdW5zYWZlIChlLmcuIGNvbnRhaW5zIGA8c2NyaXB0PmAgdGFncykgYW5kIHRoZSBjb2RlIHNob3VsZCBiZSBleGVjdXRlZC4gVGhlIHNhbml0aXplciB3aWxsXG4gICAqIGxlYXZlIHNhZmUgSFRNTCBpbnRhY3QsIHNvIGluIG1vc3Qgc2l0dWF0aW9ucyB0aGlzIG1ldGhvZCBzaG91bGQgbm90IGJlIHVzZWQuXG4gICAqXG4gICAqICoqV0FSTklORzoqKiBjYWxsaW5nIHRoaXMgbWV0aG9kIHdpdGggdW50cnVzdGVkIHVzZXIgZGF0YSBleHBvc2VzIHlvdXIgYXBwbGljYXRpb24gdG8gWFNTXG4gICAqIHNlY3VyaXR5IHJpc2tzIVxuICAgKi9cbiAgYWJzdHJhY3QgYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWwodmFsdWU6IHN0cmluZyk6IFNhZmVIdG1sO1xuXG4gIC8qKlxuICAgKiBCeXBhc3Mgc2VjdXJpdHkgYW5kIHRydXN0IHRoZSBnaXZlbiB2YWx1ZSB0byBiZSBzYWZlIHN0eWxlIHZhbHVlIChDU1MpLlxuICAgKlxuICAgKiAqKldBUk5JTkc6KiogY2FsbGluZyB0aGlzIG1ldGhvZCB3aXRoIHVudHJ1c3RlZCB1c2VyIGRhdGEgZXhwb3NlcyB5b3VyIGFwcGxpY2F0aW9uIHRvIFhTU1xuICAgKiBzZWN1cml0eSByaXNrcyFcbiAgICovXG4gIGFic3RyYWN0IGJ5cGFzc1NlY3VyaXR5VHJ1c3RTdHlsZSh2YWx1ZTogc3RyaW5nKTogU2FmZVN0eWxlO1xuXG4gIC8qKlxuICAgKiBCeXBhc3Mgc2VjdXJpdHkgYW5kIHRydXN0IHRoZSBnaXZlbiB2YWx1ZSB0byBiZSBzYWZlIEphdmFTY3JpcHQuXG4gICAqXG4gICAqICoqV0FSTklORzoqKiBjYWxsaW5nIHRoaXMgbWV0aG9kIHdpdGggdW50cnVzdGVkIHVzZXIgZGF0YSBleHBvc2VzIHlvdXIgYXBwbGljYXRpb24gdG8gWFNTXG4gICAqIHNlY3VyaXR5IHJpc2tzIVxuICAgKi9cbiAgYWJzdHJhY3QgYnlwYXNzU2VjdXJpdHlUcnVzdFNjcmlwdCh2YWx1ZTogc3RyaW5nKTogU2FmZVNjcmlwdDtcblxuICAvKipcbiAgICogQnlwYXNzIHNlY3VyaXR5IGFuZCB0cnVzdCB0aGUgZ2l2ZW4gdmFsdWUgdG8gYmUgYSBzYWZlIHN0eWxlIFVSTCwgaS5lLiBhIHZhbHVlIHRoYXQgY2FuIGJlIHVzZWRcbiAgICogaW4gaHlwZXJsaW5rcyBvciBgPGltZyBzcmM+YC5cbiAgICpcbiAgICogKipXQVJOSU5HOioqIGNhbGxpbmcgdGhpcyBtZXRob2Qgd2l0aCB1bnRydXN0ZWQgdXNlciBkYXRhIGV4cG9zZXMgeW91ciBhcHBsaWNhdGlvbiB0byBYU1NcbiAgICogc2VjdXJpdHkgcmlza3MhXG4gICAqL1xuICBhYnN0cmFjdCBieXBhc3NTZWN1cml0eVRydXN0VXJsKHZhbHVlOiBzdHJpbmcpOiBTYWZlVXJsO1xuXG4gIC8qKlxuICAgKiBCeXBhc3Mgc2VjdXJpdHkgYW5kIHRydXN0IHRoZSBnaXZlbiB2YWx1ZSB0byBiZSBhIHNhZmUgcmVzb3VyY2UgVVJMLCBpLmUuIGEgbG9jYXRpb24gdGhhdCBtYXlcbiAgICogYmUgdXNlZCB0byBsb2FkIGV4ZWN1dGFibGUgY29kZSBmcm9tLCBsaWtlIGA8c2NyaXB0IHNyYz5gLCBvciBgPGlmcmFtZSBzcmM+YC5cbiAgICpcbiAgICogKipXQVJOSU5HOioqIGNhbGxpbmcgdGhpcyBtZXRob2Qgd2l0aCB1bnRydXN0ZWQgdXNlciBkYXRhIGV4cG9zZXMgeW91ciBhcHBsaWNhdGlvbiB0byBYU1NcbiAgICogc2VjdXJpdHkgcmlza3MhXG4gICAqL1xuICBhYnN0cmFjdCBieXBhc3NTZWN1cml0eVRydXN0UmVzb3VyY2VVcmwodmFsdWU6IHN0cmluZyk6IFNhZmVSZXNvdXJjZVVybDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRvbVNhbml0aXplckltcGxGYWN0b3J5KGluamVjdG9yOiBJbmplY3Rvcikge1xuICByZXR1cm4gbmV3IERvbVNhbml0aXplckltcGwoaW5qZWN0b3IuZ2V0KERPQ1VNRU5UKSk7XG59XG5cbkBJbmplY3RhYmxlKHtwcm92aWRlZEluOiAncm9vdCcsIHVzZUZhY3Rvcnk6IGRvbVNhbml0aXplckltcGxGYWN0b3J5LCBkZXBzOiBbSW5qZWN0b3JdfSlcbmV4cG9ydCBjbGFzcyBEb21TYW5pdGl6ZXJJbXBsIGV4dGVuZHMgRG9tU2FuaXRpemVyIHtcbiAgY29uc3RydWN0b3IoQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBfZG9jOiBhbnkpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgc2FuaXRpemUoY3R4OiBTZWN1cml0eUNvbnRleHQsIHZhbHVlOiBTYWZlVmFsdWV8c3RyaW5nfG51bGwpOiBzdHJpbmd8bnVsbCB7XG4gICAgaWYgKHZhbHVlID09IG51bGwpIHJldHVybiBudWxsO1xuICAgIHN3aXRjaCAoY3R4KSB7XG4gICAgICBjYXNlIFNlY3VyaXR5Q29udGV4dC5OT05FOlxuICAgICAgICByZXR1cm4gdmFsdWUgYXMgc3RyaW5nO1xuICAgICAgY2FzZSBTZWN1cml0eUNvbnRleHQuSFRNTDpcbiAgICAgICAgaWYgKGFsbG93U2FuaXRpemF0aW9uQnlwYXNzT3JUaHJvdyh2YWx1ZSwgQnlwYXNzVHlwZS5IdG1sKSkge1xuICAgICAgICAgIHJldHVybiB1bndyYXBTYWZlVmFsdWUodmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBfc2FuaXRpemVIdG1sKHRoaXMuX2RvYywgU3RyaW5nKHZhbHVlKSk7XG4gICAgICBjYXNlIFNlY3VyaXR5Q29udGV4dC5TVFlMRTpcbiAgICAgICAgaWYgKGFsbG93U2FuaXRpemF0aW9uQnlwYXNzT3JUaHJvdyh2YWx1ZSwgQnlwYXNzVHlwZS5TdHlsZSkpIHtcbiAgICAgICAgICByZXR1cm4gdW53cmFwU2FmZVZhbHVlKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsdWUgYXMgc3RyaW5nO1xuICAgICAgY2FzZSBTZWN1cml0eUNvbnRleHQuU0NSSVBUOlxuICAgICAgICBpZiAoYWxsb3dTYW5pdGl6YXRpb25CeXBhc3NPclRocm93KHZhbHVlLCBCeXBhc3NUeXBlLlNjcmlwdCkpIHtcbiAgICAgICAgICByZXR1cm4gdW53cmFwU2FmZVZhbHVlKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3Vuc2FmZSB2YWx1ZSB1c2VkIGluIGEgc2NyaXB0IGNvbnRleHQnKTtcbiAgICAgIGNhc2UgU2VjdXJpdHlDb250ZXh0LlVSTDpcbiAgICAgICAgY29uc3QgdHlwZSA9IGdldFNhbml0aXphdGlvbkJ5cGFzc1R5cGUodmFsdWUpO1xuICAgICAgICBpZiAoYWxsb3dTYW5pdGl6YXRpb25CeXBhc3NPclRocm93KHZhbHVlLCBCeXBhc3NUeXBlLlVybCkpIHtcbiAgICAgICAgICByZXR1cm4gdW53cmFwU2FmZVZhbHVlKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gX3Nhbml0aXplVXJsKFN0cmluZyh2YWx1ZSkpO1xuICAgICAgY2FzZSBTZWN1cml0eUNvbnRleHQuUkVTT1VSQ0VfVVJMOlxuICAgICAgICBpZiAoYWxsb3dTYW5pdGl6YXRpb25CeXBhc3NPclRocm93KHZhbHVlLCBCeXBhc3NUeXBlLlJlc291cmNlVXJsKSkge1xuICAgICAgICAgIHJldHVybiB1bndyYXBTYWZlVmFsdWUodmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgICd1bnNhZmUgdmFsdWUgdXNlZCBpbiBhIHJlc291cmNlIFVSTCBjb250ZXh0IChzZWUgaHR0cDovL2cuY28vbmcvc2VjdXJpdHkjeHNzKScpO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmV4cGVjdGVkIFNlY3VyaXR5Q29udGV4dCAke2N0eH0gKHNlZSBodHRwOi8vZy5jby9uZy9zZWN1cml0eSN4c3MpYCk7XG4gICAgfVxuICB9XG5cbiAgYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWwodmFsdWU6IHN0cmluZyk6IFNhZmVIdG1sIHtcbiAgICByZXR1cm4gYnlwYXNzU2FuaXRpemF0aW9uVHJ1c3RIdG1sKHZhbHVlKTtcbiAgfVxuICBieXBhc3NTZWN1cml0eVRydXN0U3R5bGUodmFsdWU6IHN0cmluZyk6IFNhZmVTdHlsZSB7XG4gICAgcmV0dXJuIGJ5cGFzc1Nhbml0aXphdGlvblRydXN0U3R5bGUodmFsdWUpO1xuICB9XG4gIGJ5cGFzc1NlY3VyaXR5VHJ1c3RTY3JpcHQodmFsdWU6IHN0cmluZyk6IFNhZmVTY3JpcHQge1xuICAgIHJldHVybiBieXBhc3NTYW5pdGl6YXRpb25UcnVzdFNjcmlwdCh2YWx1ZSk7XG4gIH1cbiAgYnlwYXNzU2VjdXJpdHlUcnVzdFVybCh2YWx1ZTogc3RyaW5nKTogU2FmZVVybCB7XG4gICAgcmV0dXJuIGJ5cGFzc1Nhbml0aXphdGlvblRydXN0VXJsKHZhbHVlKTtcbiAgfVxuICBieXBhc3NTZWN1cml0eVRydXN0UmVzb3VyY2VVcmwodmFsdWU6IHN0cmluZyk6IFNhZmVSZXNvdXJjZVVybCB7XG4gICAgcmV0dXJuIGJ5cGFzc1Nhbml0aXphdGlvblRydXN0UmVzb3VyY2VVcmwodmFsdWUpO1xuICB9XG59XG4iXX0=