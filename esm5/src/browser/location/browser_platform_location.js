import * as tslib_1 from "tslib";
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { DOCUMENT, PlatformLocation } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { getDOM } from '../../dom/dom_adapter';
import { supportsState } from './history';
import * as i0 from "@angular/core";
/**
 * `PlatformLocation` encapsulates all of the direct calls to platform APIs.
 * This class should not be used directly by an application developer. Instead, use
 * {@link Location}.
 */
var BrowserPlatformLocation = /** @class */ (function (_super) {
    tslib_1.__extends(BrowserPlatformLocation, _super);
    function BrowserPlatformLocation(_doc) {
        var _this = _super.call(this) || this;
        _this._doc = _doc;
        _this._init();
        return _this;
    }
    // This is moved to its own method so that `MockPlatformLocationStrategy` can overwrite it
    /** @internal */
    BrowserPlatformLocation.prototype._init = function () {
        this.location = getDOM().getLocation();
        this._history = getDOM().getHistory();
    };
    BrowserPlatformLocation.prototype.getBaseHrefFromDOM = function () { return getDOM().getBaseHref(this._doc); };
    BrowserPlatformLocation.prototype.onPopState = function (fn) {
        getDOM().getGlobalEventTarget(this._doc, 'window').addEventListener('popstate', fn, false);
    };
    BrowserPlatformLocation.prototype.onHashChange = function (fn) {
        getDOM().getGlobalEventTarget(this._doc, 'window').addEventListener('hashchange', fn, false);
    };
    Object.defineProperty(BrowserPlatformLocation.prototype, "href", {
        get: function () { return this.location.href; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BrowserPlatformLocation.prototype, "protocol", {
        get: function () { return this.location.protocol; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BrowserPlatformLocation.prototype, "hostname", {
        get: function () { return this.location.hostname; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BrowserPlatformLocation.prototype, "port", {
        get: function () { return this.location.port; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BrowserPlatformLocation.prototype, "pathname", {
        get: function () { return this.location.pathname; },
        set: function (newPath) { this.location.pathname = newPath; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BrowserPlatformLocation.prototype, "search", {
        get: function () { return this.location.search; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BrowserPlatformLocation.prototype, "hash", {
        get: function () { return this.location.hash; },
        enumerable: true,
        configurable: true
    });
    BrowserPlatformLocation.prototype.pushState = function (state, title, url) {
        if (supportsState()) {
            this._history.pushState(state, title, url);
        }
        else {
            this.location.hash = url;
        }
    };
    BrowserPlatformLocation.prototype.replaceState = function (state, title, url) {
        if (supportsState()) {
            this._history.replaceState(state, title, url);
        }
        else {
            this.location.hash = url;
        }
    };
    BrowserPlatformLocation.prototype.forward = function () { this._history.forward(); };
    BrowserPlatformLocation.prototype.back = function () { this._history.back(); };
    BrowserPlatformLocation.prototype.getState = function () { return this._history.state; };
    BrowserPlatformLocation.ngInjectableDef = i0.ɵɵdefineInjectable({ token: BrowserPlatformLocation, factory: function BrowserPlatformLocation_Factory(t) { return new (t || BrowserPlatformLocation)(i0.ɵɵinject(DOCUMENT)); }, providedIn: null });
    return BrowserPlatformLocation;
}(PlatformLocation));
export { BrowserPlatformLocation };
/*@__PURE__*/ i0.ɵsetClassMetadata(BrowserPlatformLocation, [{
        type: Injectable
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }]; }, null);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJvd3Nlcl9wbGF0Zm9ybV9sb2NhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3BsYXRmb3JtLWJyb3dzZXIvc3JjL2Jyb3dzZXIvbG9jYXRpb24vYnJvd3Nlcl9wbGF0Zm9ybV9sb2NhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFDLFFBQVEsRUFBMEIsZ0JBQWdCLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUNuRixPQUFPLEVBQUMsTUFBTSxFQUFFLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUVqRCxPQUFPLEVBQUMsTUFBTSxFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFFN0MsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLFdBQVcsQ0FBQzs7QUFJeEM7Ozs7R0FJRztBQUNIO0lBQzZDLG1EQUFnQjtJQU0zRCxpQ0FBc0MsSUFBUztRQUEvQyxZQUNFLGlCQUFPLFNBRVI7UUFIcUMsVUFBSSxHQUFKLElBQUksQ0FBSztRQUU3QyxLQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7O0lBQ2YsQ0FBQztJQUVELDBGQUEwRjtJQUMxRixnQkFBZ0I7SUFDaEIsdUNBQUssR0FBTDtRQUNHLElBQTRCLENBQUMsUUFBUSxHQUFHLE1BQU0sRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ2hFLElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxFQUFFLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDeEMsQ0FBQztJQUVELG9EQUFrQixHQUFsQixjQUErQixPQUFPLE1BQU0sRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFHLENBQUMsQ0FBQyxDQUFDO0lBRTFFLDRDQUFVLEdBQVYsVUFBVyxFQUEwQjtRQUNuQyxNQUFNLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLFVBQVUsRUFBRSxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDN0YsQ0FBQztJQUVELDhDQUFZLEdBQVosVUFBYSxFQUEwQjtRQUNyQyxNQUFNLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLFlBQVksRUFBRSxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDL0YsQ0FBQztJQUVELHNCQUFJLHlDQUFJO2FBQVIsY0FBcUIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7OztPQUFBO0lBQ2pELHNCQUFJLDZDQUFRO2FBQVosY0FBeUIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7OztPQUFBO0lBQ3pELHNCQUFJLDZDQUFRO2FBQVosY0FBeUIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7OztPQUFBO0lBQ3pELHNCQUFJLHlDQUFJO2FBQVIsY0FBcUIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7OztPQUFBO0lBQ2pELHNCQUFJLDZDQUFRO2FBQVosY0FBeUIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7YUFHekQsVUFBYSxPQUFlLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQzs7O09BSFY7SUFDekQsc0JBQUksMkNBQU07YUFBVixjQUF1QixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQzs7O09BQUE7SUFDckQsc0JBQUkseUNBQUk7YUFBUixjQUFxQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQzs7O09BQUE7SUFHakQsMkNBQVMsR0FBVCxVQUFVLEtBQVUsRUFBRSxLQUFhLEVBQUUsR0FBVztRQUM5QyxJQUFJLGFBQWEsRUFBRSxFQUFFO1lBQ25CLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDNUM7YUFBTTtZQUNMLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQztTQUMxQjtJQUNILENBQUM7SUFFRCw4Q0FBWSxHQUFaLFVBQWEsS0FBVSxFQUFFLEtBQWEsRUFBRSxHQUFXO1FBQ2pELElBQUksYUFBYSxFQUFFLEVBQUU7WUFDbkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztTQUMvQzthQUFNO1lBQ0wsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO1NBQzFCO0lBQ0gsQ0FBQztJQUVELHlDQUFPLEdBQVAsY0FBa0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFFNUMsc0NBQUksR0FBSixjQUFlLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBRXRDLDBDQUFRLEdBQVIsY0FBc0IsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7NkVBekR4Qyx1QkFBdUIsMEVBQXZCLHVCQUF1QixjQU1kLFFBQVE7a0NBN0I5QjtDQWlGQyxBQTNERCxDQUM2QyxnQkFBZ0IsR0EwRDVEO1NBMURZLHVCQUF1QjttQ0FBdkIsdUJBQXVCO2NBRG5DLFVBQVU7O3NCQU9JLE1BQU07dUJBQUMsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtET0NVTUVOVCwgTG9jYXRpb25DaGFuZ2VMaXN0ZW5lciwgUGxhdGZvcm1Mb2NhdGlvbn0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7SW5qZWN0LCBJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtnZXRET019IGZyb20gJy4uLy4uL2RvbS9kb21fYWRhcHRlcic7XG5cbmltcG9ydCB7c3VwcG9ydHNTdGF0ZX0gZnJvbSAnLi9oaXN0b3J5JztcblxuXG5cbi8qKlxuICogYFBsYXRmb3JtTG9jYXRpb25gIGVuY2Fwc3VsYXRlcyBhbGwgb2YgdGhlIGRpcmVjdCBjYWxscyB0byBwbGF0Zm9ybSBBUElzLlxuICogVGhpcyBjbGFzcyBzaG91bGQgbm90IGJlIHVzZWQgZGlyZWN0bHkgYnkgYW4gYXBwbGljYXRpb24gZGV2ZWxvcGVyLiBJbnN0ZWFkLCB1c2VcbiAqIHtAbGluayBMb2NhdGlvbn0uXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBCcm93c2VyUGxhdGZvcm1Mb2NhdGlvbiBleHRlbmRzIFBsYXRmb3JtTG9jYXRpb24ge1xuICAvLyBUT0RPKGlzc3VlLzI0NTcxKTogcmVtb3ZlICchJy5cbiAgcHVibGljIHJlYWRvbmx5IGxvY2F0aW9uICE6IExvY2F0aW9uO1xuICAvLyBUT0RPKGlzc3VlLzI0NTcxKTogcmVtb3ZlICchJy5cbiAgcHJpdmF0ZSBfaGlzdG9yeSAhOiBIaXN0b3J5O1xuXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgX2RvYzogYW55KSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLl9pbml0KCk7XG4gIH1cblxuICAvLyBUaGlzIGlzIG1vdmVkIHRvIGl0cyBvd24gbWV0aG9kIHNvIHRoYXQgYE1vY2tQbGF0Zm9ybUxvY2F0aW9uU3RyYXRlZ3lgIGNhbiBvdmVyd3JpdGUgaXRcbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBfaW5pdCgpIHtcbiAgICAodGhpcyBhc3tsb2NhdGlvbjogTG9jYXRpb259KS5sb2NhdGlvbiA9IGdldERPTSgpLmdldExvY2F0aW9uKCk7XG4gICAgdGhpcy5faGlzdG9yeSA9IGdldERPTSgpLmdldEhpc3RvcnkoKTtcbiAgfVxuXG4gIGdldEJhc2VIcmVmRnJvbURPTSgpOiBzdHJpbmcgeyByZXR1cm4gZ2V0RE9NKCkuZ2V0QmFzZUhyZWYodGhpcy5fZG9jKSAhOyB9XG5cbiAgb25Qb3BTdGF0ZShmbjogTG9jYXRpb25DaGFuZ2VMaXN0ZW5lcik6IHZvaWQge1xuICAgIGdldERPTSgpLmdldEdsb2JhbEV2ZW50VGFyZ2V0KHRoaXMuX2RvYywgJ3dpbmRvdycpLmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgZm4sIGZhbHNlKTtcbiAgfVxuXG4gIG9uSGFzaENoYW5nZShmbjogTG9jYXRpb25DaGFuZ2VMaXN0ZW5lcik6IHZvaWQge1xuICAgIGdldERPTSgpLmdldEdsb2JhbEV2ZW50VGFyZ2V0KHRoaXMuX2RvYywgJ3dpbmRvdycpLmFkZEV2ZW50TGlzdGVuZXIoJ2hhc2hjaGFuZ2UnLCBmbiwgZmFsc2UpO1xuICB9XG5cbiAgZ2V0IGhyZWYoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMubG9jYXRpb24uaHJlZjsgfVxuICBnZXQgcHJvdG9jb2woKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMubG9jYXRpb24ucHJvdG9jb2w7IH1cbiAgZ2V0IGhvc3RuYW1lKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLmxvY2F0aW9uLmhvc3RuYW1lOyB9XG4gIGdldCBwb3J0KCk6IHN0cmluZyB7IHJldHVybiB0aGlzLmxvY2F0aW9uLnBvcnQ7IH1cbiAgZ2V0IHBhdGhuYW1lKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLmxvY2F0aW9uLnBhdGhuYW1lOyB9XG4gIGdldCBzZWFyY2goKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMubG9jYXRpb24uc2VhcmNoOyB9XG4gIGdldCBoYXNoKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLmxvY2F0aW9uLmhhc2g7IH1cbiAgc2V0IHBhdGhuYW1lKG5ld1BhdGg6IHN0cmluZykgeyB0aGlzLmxvY2F0aW9uLnBhdGhuYW1lID0gbmV3UGF0aDsgfVxuXG4gIHB1c2hTdGF0ZShzdGF0ZTogYW55LCB0aXRsZTogc3RyaW5nLCB1cmw6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmIChzdXBwb3J0c1N0YXRlKCkpIHtcbiAgICAgIHRoaXMuX2hpc3RvcnkucHVzaFN0YXRlKHN0YXRlLCB0aXRsZSwgdXJsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5sb2NhdGlvbi5oYXNoID0gdXJsO1xuICAgIH1cbiAgfVxuXG4gIHJlcGxhY2VTdGF0ZShzdGF0ZTogYW55LCB0aXRsZTogc3RyaW5nLCB1cmw6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmIChzdXBwb3J0c1N0YXRlKCkpIHtcbiAgICAgIHRoaXMuX2hpc3RvcnkucmVwbGFjZVN0YXRlKHN0YXRlLCB0aXRsZSwgdXJsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5sb2NhdGlvbi5oYXNoID0gdXJsO1xuICAgIH1cbiAgfVxuXG4gIGZvcndhcmQoKTogdm9pZCB7IHRoaXMuX2hpc3RvcnkuZm9yd2FyZCgpOyB9XG5cbiAgYmFjaygpOiB2b2lkIHsgdGhpcy5faGlzdG9yeS5iYWNrKCk7IH1cblxuICBnZXRTdGF0ZSgpOiB1bmtub3duIHsgcmV0dXJuIHRoaXMuX2hpc3Rvcnkuc3RhdGU7IH1cbn1cbiJdfQ==