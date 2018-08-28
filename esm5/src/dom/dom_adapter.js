/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var _DOM = null;
export function getDOM() {
    return _DOM;
}
export function setDOM(adapter) {
    _DOM = adapter;
}
export function setRootDomAdapter(adapter) {
    if (!_DOM) {
        _DOM = adapter;
    }
}
/* tslint:disable:requireParameterType */
/**
 * Provides DOM operations in an environment-agnostic way.
 *
 * @security Tread carefully! Interacting with the DOM directly is dangerous and
 * can introduce XSS risks.
 */
var DomAdapter = /** @class */ (function () {
    function DomAdapter() {
        this.resourceLoaderType = null;
    }
    Object.defineProperty(DomAdapter.prototype, "attrToPropMap", {
        /**
         * Maps attribute names to their corresponding property names for cases
         * where attribute name doesn't match property name.
         */
        get: function () { return this._attrToPropMap; },
        set: function (value) { this._attrToPropMap = value; },
        enumerable: true,
        configurable: true
    });
    return DomAdapter;
}());
export { DomAdapter };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tX2FkYXB0ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9wbGF0Zm9ybS1icm93c2VyL3NyYy9kb20vZG9tX2FkYXB0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBSUgsSUFBSSxJQUFJLEdBQWUsSUFBTSxDQUFDO0FBRTlCLE1BQU0sVUFBVSxNQUFNO0lBQ3BCLE9BQU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQztBQUVELE1BQU0sVUFBVSxNQUFNLENBQUMsT0FBbUI7SUFDeEMsSUFBSSxHQUFHLE9BQU8sQ0FBQztBQUNqQixDQUFDO0FBRUQsTUFBTSxVQUFVLGlCQUFpQixDQUFDLE9BQW1CO0lBQ25ELElBQUksQ0FBQyxJQUFJLEVBQUU7UUFDVCxJQUFJLEdBQUcsT0FBTyxDQUFDO0tBQ2hCO0FBQ0gsQ0FBQztBQUVELHlDQUF5QztBQUN6Qzs7Ozs7R0FLRztBQUNIO0lBQUE7UUFDUyx1QkFBa0IsR0FBYyxJQUFNLENBQUM7SUFrSWhELENBQUM7SUFuSEMsc0JBQUkscUNBQWE7UUFKakI7OztXQUdHO2FBQ0gsY0FBK0MsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQzthQUM1RSxVQUFrQixLQUE4QixJQUFJLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQzs7O09BRE47SUFtSDlFLGlCQUFDO0FBQUQsQ0FBQyxBQW5JRCxJQW1JQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtUeXBlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxubGV0IF9ET006IERvbUFkYXB0ZXIgPSBudWxsICE7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRET00oKSB7XG4gIHJldHVybiBfRE9NO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0RE9NKGFkYXB0ZXI6IERvbUFkYXB0ZXIpIHtcbiAgX0RPTSA9IGFkYXB0ZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRSb290RG9tQWRhcHRlcihhZGFwdGVyOiBEb21BZGFwdGVyKSB7XG4gIGlmICghX0RPTSkge1xuICAgIF9ET00gPSBhZGFwdGVyO1xuICB9XG59XG5cbi8qIHRzbGludDpkaXNhYmxlOnJlcXVpcmVQYXJhbWV0ZXJUeXBlICovXG4vKipcbiAqIFByb3ZpZGVzIERPTSBvcGVyYXRpb25zIGluIGFuIGVudmlyb25tZW50LWFnbm9zdGljIHdheS5cbiAqXG4gKiBAc2VjdXJpdHkgVHJlYWQgY2FyZWZ1bGx5ISBJbnRlcmFjdGluZyB3aXRoIHRoZSBET00gZGlyZWN0bHkgaXMgZGFuZ2Vyb3VzIGFuZFxuICogY2FuIGludHJvZHVjZSBYU1Mgcmlza3MuXG4gKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBEb21BZGFwdGVyIHtcbiAgcHVibGljIHJlc291cmNlTG9hZGVyVHlwZTogVHlwZTxhbnk+ID0gbnVsbCAhO1xuICBhYnN0cmFjdCBoYXNQcm9wZXJ0eShlbGVtZW50OiBhbnksIG5hbWU6IHN0cmluZyk6IGJvb2xlYW47XG4gIGFic3RyYWN0IHNldFByb3BlcnR5KGVsOiBFbGVtZW50LCBuYW1lOiBzdHJpbmcsIHZhbHVlOiBhbnkpOiBhbnk7XG4gIGFic3RyYWN0IGdldFByb3BlcnR5KGVsOiBFbGVtZW50LCBuYW1lOiBzdHJpbmcpOiBhbnk7XG4gIGFic3RyYWN0IGludm9rZShlbDogRWxlbWVudCwgbWV0aG9kTmFtZTogc3RyaW5nLCBhcmdzOiBhbnlbXSk6IGFueTtcblxuICBhYnN0cmFjdCBsb2dFcnJvcihlcnJvcjogYW55KTogYW55O1xuICBhYnN0cmFjdCBsb2coZXJyb3I6IGFueSk6IGFueTtcbiAgYWJzdHJhY3QgbG9nR3JvdXAoZXJyb3I6IGFueSk6IGFueTtcbiAgYWJzdHJhY3QgbG9nR3JvdXBFbmQoKTogYW55O1xuXG4gIC8qKlxuICAgKiBNYXBzIGF0dHJpYnV0ZSBuYW1lcyB0byB0aGVpciBjb3JyZXNwb25kaW5nIHByb3BlcnR5IG5hbWVzIGZvciBjYXNlc1xuICAgKiB3aGVyZSBhdHRyaWJ1dGUgbmFtZSBkb2Vzbid0IG1hdGNoIHByb3BlcnR5IG5hbWUuXG4gICAqL1xuICBnZXQgYXR0clRvUHJvcE1hcCgpOiB7W2tleTogc3RyaW5nXTogc3RyaW5nfSB7IHJldHVybiB0aGlzLl9hdHRyVG9Qcm9wTWFwOyB9XG4gIHNldCBhdHRyVG9Qcm9wTWFwKHZhbHVlOiB7W2tleTogc3RyaW5nXTogc3RyaW5nfSkgeyB0aGlzLl9hdHRyVG9Qcm9wTWFwID0gdmFsdWU7IH1cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICAvLyBUT0RPKGlzc3VlLzI0NTcxKTogcmVtb3ZlICchJy5cbiAgX2F0dHJUb1Byb3BNYXAgIToge1trZXk6IHN0cmluZ106IHN0cmluZ307XG5cbiAgYWJzdHJhY3QgY29udGFpbnMobm9kZUE6IGFueSwgbm9kZUI6IGFueSk6IGJvb2xlYW47XG4gIGFic3RyYWN0IHBhcnNlKHRlbXBsYXRlSHRtbDogc3RyaW5nKTogYW55O1xuICBhYnN0cmFjdCBxdWVyeVNlbGVjdG9yKGVsOiBhbnksIHNlbGVjdG9yOiBzdHJpbmcpOiBhbnk7XG4gIGFic3RyYWN0IHF1ZXJ5U2VsZWN0b3JBbGwoZWw6IGFueSwgc2VsZWN0b3I6IHN0cmluZyk6IGFueVtdO1xuICBhYnN0cmFjdCBvbihlbDogYW55LCBldnQ6IGFueSwgbGlzdGVuZXI6IGFueSk6IGFueTtcbiAgYWJzdHJhY3Qgb25BbmRDYW5jZWwoZWw6IGFueSwgZXZ0OiBhbnksIGxpc3RlbmVyOiBhbnkpOiBGdW5jdGlvbjtcbiAgYWJzdHJhY3QgZGlzcGF0Y2hFdmVudChlbDogYW55LCBldnQ6IGFueSk6IGFueTtcbiAgYWJzdHJhY3QgY3JlYXRlTW91c2VFdmVudChldmVudFR5cGU6IGFueSk6IGFueTtcbiAgYWJzdHJhY3QgY3JlYXRlRXZlbnQoZXZlbnRUeXBlOiBzdHJpbmcpOiBhbnk7XG4gIGFic3RyYWN0IHByZXZlbnREZWZhdWx0KGV2dDogYW55KTogYW55O1xuICBhYnN0cmFjdCBpc1ByZXZlbnRlZChldnQ6IGFueSk6IGJvb2xlYW47XG4gIGFic3RyYWN0IGdldElubmVySFRNTChlbDogYW55KTogc3RyaW5nO1xuICAvKiogUmV0dXJucyBjb250ZW50IGlmIGVsIGlzIGEgPHRlbXBsYXRlPiBlbGVtZW50LCBudWxsIG90aGVyd2lzZS4gKi9cbiAgYWJzdHJhY3QgZ2V0VGVtcGxhdGVDb250ZW50KGVsOiBhbnkpOiBhbnk7XG4gIGFic3RyYWN0IGdldE91dGVySFRNTChlbDogYW55KTogc3RyaW5nO1xuICBhYnN0cmFjdCBub2RlTmFtZShub2RlOiBhbnkpOiBzdHJpbmc7XG4gIGFic3RyYWN0IG5vZGVWYWx1ZShub2RlOiBhbnkpOiBzdHJpbmd8bnVsbDtcbiAgYWJzdHJhY3QgdHlwZShub2RlOiBhbnkpOiBzdHJpbmc7XG4gIGFic3RyYWN0IGNvbnRlbnQobm9kZTogYW55KTogYW55O1xuICBhYnN0cmFjdCBmaXJzdENoaWxkKGVsOiBhbnkpOiBOb2RlfG51bGw7XG4gIGFic3RyYWN0IG5leHRTaWJsaW5nKGVsOiBhbnkpOiBOb2RlfG51bGw7XG4gIGFic3RyYWN0IHBhcmVudEVsZW1lbnQoZWw6IGFueSk6IE5vZGV8bnVsbDtcbiAgYWJzdHJhY3QgY2hpbGROb2RlcyhlbDogYW55KTogTm9kZVtdO1xuICBhYnN0cmFjdCBjaGlsZE5vZGVzQXNMaXN0KGVsOiBhbnkpOiBOb2RlW107XG4gIGFic3RyYWN0IGNsZWFyTm9kZXMoZWw6IGFueSk6IGFueTtcbiAgYWJzdHJhY3QgYXBwZW5kQ2hpbGQoZWw6IGFueSwgbm9kZTogYW55KTogYW55O1xuICBhYnN0cmFjdCByZW1vdmVDaGlsZChlbDogYW55LCBub2RlOiBhbnkpOiBhbnk7XG4gIGFic3RyYWN0IHJlcGxhY2VDaGlsZChlbDogYW55LCBuZXdOb2RlOiBhbnksIG9sZE5vZGU6IGFueSk6IGFueTtcbiAgYWJzdHJhY3QgcmVtb3ZlKGVsOiBhbnkpOiBOb2RlO1xuICBhYnN0cmFjdCBpbnNlcnRCZWZvcmUocGFyZW50OiBhbnksIHJlZjogYW55LCBub2RlOiBhbnkpOiBhbnk7XG4gIGFic3RyYWN0IGluc2VydEFsbEJlZm9yZShwYXJlbnQ6IGFueSwgcmVmOiBhbnksIG5vZGVzOiBhbnkpOiBhbnk7XG4gIGFic3RyYWN0IGluc2VydEFmdGVyKHBhcmVudDogYW55LCBlbDogYW55LCBub2RlOiBhbnkpOiBhbnk7XG4gIGFic3RyYWN0IHNldElubmVySFRNTChlbDogYW55LCB2YWx1ZTogYW55KTogYW55O1xuICBhYnN0cmFjdCBnZXRUZXh0KGVsOiBhbnkpOiBzdHJpbmd8bnVsbDtcbiAgYWJzdHJhY3Qgc2V0VGV4dChlbDogYW55LCB2YWx1ZTogc3RyaW5nKTogYW55O1xuICBhYnN0cmFjdCBnZXRWYWx1ZShlbDogYW55KTogc3RyaW5nO1xuICBhYnN0cmFjdCBzZXRWYWx1ZShlbDogYW55LCB2YWx1ZTogc3RyaW5nKTogYW55O1xuICBhYnN0cmFjdCBnZXRDaGVja2VkKGVsOiBhbnkpOiBib29sZWFuO1xuICBhYnN0cmFjdCBzZXRDaGVja2VkKGVsOiBhbnksIHZhbHVlOiBib29sZWFuKTogYW55O1xuICBhYnN0cmFjdCBjcmVhdGVDb21tZW50KHRleHQ6IHN0cmluZyk6IGFueTtcbiAgYWJzdHJhY3QgY3JlYXRlVGVtcGxhdGUoaHRtbDogYW55KTogSFRNTEVsZW1lbnQ7XG4gIGFic3RyYWN0IGNyZWF0ZUVsZW1lbnQodGFnTmFtZTogYW55LCBkb2M/OiBhbnkpOiBIVE1MRWxlbWVudDtcbiAgYWJzdHJhY3QgY3JlYXRlRWxlbWVudE5TKG5zOiBzdHJpbmcsIHRhZ05hbWU6IHN0cmluZywgZG9jPzogYW55KTogRWxlbWVudDtcbiAgYWJzdHJhY3QgY3JlYXRlVGV4dE5vZGUodGV4dDogc3RyaW5nLCBkb2M/OiBhbnkpOiBUZXh0O1xuICBhYnN0cmFjdCBjcmVhdGVTY3JpcHRUYWcoYXR0ck5hbWU6IHN0cmluZywgYXR0clZhbHVlOiBzdHJpbmcsIGRvYz86IGFueSk6IEhUTUxFbGVtZW50O1xuICBhYnN0cmFjdCBjcmVhdGVTdHlsZUVsZW1lbnQoY3NzOiBzdHJpbmcsIGRvYz86IGFueSk6IEhUTUxTdHlsZUVsZW1lbnQ7XG4gIGFic3RyYWN0IGNyZWF0ZVNoYWRvd1Jvb3QoZWw6IGFueSk6IGFueTtcbiAgYWJzdHJhY3QgZ2V0U2hhZG93Um9vdChlbDogYW55KTogYW55O1xuICBhYnN0cmFjdCBnZXRIb3N0KGVsOiBhbnkpOiBhbnk7XG4gIGFic3RyYWN0IGdldERpc3RyaWJ1dGVkTm9kZXMoZWw6IGFueSk6IE5vZGVbXTtcbiAgYWJzdHJhY3QgY2xvbmUgLyo8VCBleHRlbmRzIE5vZGU+Ki8gKG5vZGU6IE5vZGUgLypUKi8pOiBOb2RlIC8qVCovO1xuICBhYnN0cmFjdCBnZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGVsZW1lbnQ6IGFueSwgbmFtZTogc3RyaW5nKTogSFRNTEVsZW1lbnRbXTtcbiAgYWJzdHJhY3QgZ2V0RWxlbWVudHNCeVRhZ05hbWUoZWxlbWVudDogYW55LCBuYW1lOiBzdHJpbmcpOiBIVE1MRWxlbWVudFtdO1xuICBhYnN0cmFjdCBjbGFzc0xpc3QoZWxlbWVudDogYW55KTogYW55W107XG4gIGFic3RyYWN0IGFkZENsYXNzKGVsZW1lbnQ6IGFueSwgY2xhc3NOYW1lOiBzdHJpbmcpOiBhbnk7XG4gIGFic3RyYWN0IHJlbW92ZUNsYXNzKGVsZW1lbnQ6IGFueSwgY2xhc3NOYW1lOiBzdHJpbmcpOiBhbnk7XG4gIGFic3RyYWN0IGhhc0NsYXNzKGVsZW1lbnQ6IGFueSwgY2xhc3NOYW1lOiBzdHJpbmcpOiBib29sZWFuO1xuICBhYnN0cmFjdCBzZXRTdHlsZShlbGVtZW50OiBhbnksIHN0eWxlTmFtZTogc3RyaW5nLCBzdHlsZVZhbHVlOiBzdHJpbmcpOiBhbnk7XG4gIGFic3RyYWN0IHJlbW92ZVN0eWxlKGVsZW1lbnQ6IGFueSwgc3R5bGVOYW1lOiBzdHJpbmcpOiBhbnk7XG4gIGFic3RyYWN0IGdldFN0eWxlKGVsZW1lbnQ6IGFueSwgc3R5bGVOYW1lOiBzdHJpbmcpOiBzdHJpbmc7XG4gIGFic3RyYWN0IGhhc1N0eWxlKGVsZW1lbnQ6IGFueSwgc3R5bGVOYW1lOiBzdHJpbmcsIHN0eWxlVmFsdWU/OiBzdHJpbmcpOiBib29sZWFuO1xuICBhYnN0cmFjdCB0YWdOYW1lKGVsZW1lbnQ6IGFueSk6IHN0cmluZztcbiAgYWJzdHJhY3QgYXR0cmlidXRlTWFwKGVsZW1lbnQ6IGFueSk6IE1hcDxzdHJpbmcsIHN0cmluZz47XG4gIGFic3RyYWN0IGhhc0F0dHJpYnV0ZShlbGVtZW50OiBhbnksIGF0dHJpYnV0ZTogc3RyaW5nKTogYm9vbGVhbjtcbiAgYWJzdHJhY3QgaGFzQXR0cmlidXRlTlMoZWxlbWVudDogYW55LCBuczogc3RyaW5nLCBhdHRyaWJ1dGU6IHN0cmluZyk6IGJvb2xlYW47XG4gIGFic3RyYWN0IGdldEF0dHJpYnV0ZShlbGVtZW50OiBhbnksIGF0dHJpYnV0ZTogc3RyaW5nKTogc3RyaW5nfG51bGw7XG4gIGFic3RyYWN0IGdldEF0dHJpYnV0ZU5TKGVsZW1lbnQ6IGFueSwgbnM6IHN0cmluZywgYXR0cmlidXRlOiBzdHJpbmcpOiBzdHJpbmc7XG4gIGFic3RyYWN0IHNldEF0dHJpYnV0ZShlbGVtZW50OiBhbnksIG5hbWU6IHN0cmluZywgdmFsdWU6IHN0cmluZyk6IGFueTtcbiAgYWJzdHJhY3Qgc2V0QXR0cmlidXRlTlMoZWxlbWVudDogYW55LCBuczogc3RyaW5nLCBuYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiBhbnk7XG4gIGFic3RyYWN0IHJlbW92ZUF0dHJpYnV0ZShlbGVtZW50OiBhbnksIGF0dHJpYnV0ZTogc3RyaW5nKTogYW55O1xuICBhYnN0cmFjdCByZW1vdmVBdHRyaWJ1dGVOUyhlbGVtZW50OiBhbnksIG5zOiBzdHJpbmcsIGF0dHJpYnV0ZTogc3RyaW5nKTogYW55O1xuICBhYnN0cmFjdCB0ZW1wbGF0ZUF3YXJlUm9vdChlbDogYW55KTogYW55O1xuICBhYnN0cmFjdCBjcmVhdGVIdG1sRG9jdW1lbnQoKTogSFRNTERvY3VtZW50O1xuICBhYnN0cmFjdCBnZXREZWZhdWx0RG9jdW1lbnQoKTogRG9jdW1lbnQ7XG4gIGFic3RyYWN0IGdldEJvdW5kaW5nQ2xpZW50UmVjdChlbDogYW55KTogYW55O1xuICBhYnN0cmFjdCBnZXRUaXRsZShkb2M6IERvY3VtZW50KTogc3RyaW5nO1xuICBhYnN0cmFjdCBzZXRUaXRsZShkb2M6IERvY3VtZW50LCBuZXdUaXRsZTogc3RyaW5nKTogYW55O1xuICBhYnN0cmFjdCBlbGVtZW50TWF0Y2hlcyhuOiBhbnksIHNlbGVjdG9yOiBzdHJpbmcpOiBib29sZWFuO1xuICBhYnN0cmFjdCBpc1RlbXBsYXRlRWxlbWVudChlbDogYW55KTogYm9vbGVhbjtcbiAgYWJzdHJhY3QgaXNUZXh0Tm9kZShub2RlOiBhbnkpOiBib29sZWFuO1xuICBhYnN0cmFjdCBpc0NvbW1lbnROb2RlKG5vZGU6IGFueSk6IGJvb2xlYW47XG4gIGFic3RyYWN0IGlzRWxlbWVudE5vZGUobm9kZTogYW55KTogYm9vbGVhbjtcbiAgYWJzdHJhY3QgaGFzU2hhZG93Um9vdChub2RlOiBhbnkpOiBib29sZWFuO1xuICBhYnN0cmFjdCBpc1NoYWRvd1Jvb3Qobm9kZTogYW55KTogYm9vbGVhbjtcbiAgYWJzdHJhY3QgaW1wb3J0SW50b0RvYyAvKjxUIGV4dGVuZHMgTm9kZT4qLyAobm9kZTogTm9kZSAvKlQqLyk6IE5vZGUgLypUKi87XG4gIGFic3RyYWN0IGFkb3B0Tm9kZSAvKjxUIGV4dGVuZHMgTm9kZT4qLyAobm9kZTogTm9kZSAvKlQqLyk6IE5vZGUgLypUKi87XG4gIGFic3RyYWN0IGdldEhyZWYoZWxlbWVudDogYW55KTogc3RyaW5nO1xuICBhYnN0cmFjdCBnZXRFdmVudEtleShldmVudDogYW55KTogc3RyaW5nO1xuICBhYnN0cmFjdCByZXNvbHZlQW5kU2V0SHJlZihlbGVtZW50OiBhbnksIGJhc2VVcmw6IHN0cmluZywgaHJlZjogc3RyaW5nKTogYW55O1xuICBhYnN0cmFjdCBzdXBwb3J0c0RPTUV2ZW50cygpOiBib29sZWFuO1xuICBhYnN0cmFjdCBzdXBwb3J0c05hdGl2ZVNoYWRvd0RPTSgpOiBib29sZWFuO1xuICBhYnN0cmFjdCBnZXRHbG9iYWxFdmVudFRhcmdldChkb2M6IERvY3VtZW50LCB0YXJnZXQ6IHN0cmluZyk6IGFueTtcbiAgYWJzdHJhY3QgZ2V0SGlzdG9yeSgpOiBIaXN0b3J5O1xuICBhYnN0cmFjdCBnZXRMb2NhdGlvbigpOiBMb2NhdGlvbjtcbiAgYWJzdHJhY3QgZ2V0QmFzZUhyZWYoZG9jOiBEb2N1bWVudCk6IHN0cmluZ3xudWxsO1xuICBhYnN0cmFjdCByZXNldEJhc2VFbGVtZW50KCk6IHZvaWQ7XG4gIGFic3RyYWN0IGdldFVzZXJBZ2VudCgpOiBzdHJpbmc7XG4gIGFic3RyYWN0IHNldERhdGEoZWxlbWVudDogYW55LCBuYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiBhbnk7XG4gIGFic3RyYWN0IGdldENvbXB1dGVkU3R5bGUoZWxlbWVudDogYW55KTogYW55O1xuICBhYnN0cmFjdCBnZXREYXRhKGVsZW1lbnQ6IGFueSwgbmFtZTogc3RyaW5nKTogc3RyaW5nfG51bGw7XG4gIGFic3RyYWN0IHN1cHBvcnRzV2ViQW5pbWF0aW9uKCk6IGJvb2xlYW47XG4gIGFic3RyYWN0IHBlcmZvcm1hbmNlTm93KCk6IG51bWJlcjtcbiAgYWJzdHJhY3QgZ2V0QW5pbWF0aW9uUHJlZml4KCk6IHN0cmluZztcbiAgYWJzdHJhY3QgZ2V0VHJhbnNpdGlvbkVuZCgpOiBzdHJpbmc7XG4gIGFic3RyYWN0IHN1cHBvcnRzQW5pbWF0aW9uKCk6IGJvb2xlYW47XG5cbiAgYWJzdHJhY3Qgc3VwcG9ydHNDb29raWVzKCk6IGJvb2xlYW47XG4gIGFic3RyYWN0IGdldENvb2tpZShuYW1lOiBzdHJpbmcpOiBzdHJpbmd8bnVsbDtcbiAgYWJzdHJhY3Qgc2V0Q29va2llKG5hbWU6IHN0cmluZywgdmFsdWU6IHN0cmluZyk6IGFueTtcbn1cbiJdfQ==