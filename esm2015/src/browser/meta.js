/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { DOCUMENT, ɵgetDOM as getDOM } from '@angular/common';
import { Inject, Injectable, ɵɵinject } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * Factory to create Meta service.
 */
export function createMeta() {
    return new Meta(ɵɵinject(DOCUMENT));
}
/**
 * A service that can be used to get and add meta tags.
 *
 * @publicApi
 */
export class Meta {
    constructor(_doc) {
        this._doc = _doc;
        this._dom = getDOM();
    }
    addTag(tag, forceCreation = false) {
        if (!tag)
            return null;
        return this._getOrCreateElement(tag, forceCreation);
    }
    addTags(tags, forceCreation = false) {
        if (!tags)
            return [];
        return tags.reduce((result, tag) => {
            if (tag) {
                result.push(this._getOrCreateElement(tag, forceCreation));
            }
            return result;
        }, []);
    }
    getTag(attrSelector) {
        if (!attrSelector)
            return null;
        return this._doc.querySelector(`meta[${attrSelector}]`) || null;
    }
    getTags(attrSelector) {
        if (!attrSelector)
            return [];
        const list /*NodeList*/ = this._doc.querySelectorAll(`meta[${attrSelector}]`);
        return list ? [].slice.call(list) : [];
    }
    updateTag(tag, selector) {
        if (!tag)
            return null;
        selector = selector || this._parseSelector(tag);
        const meta = this.getTag(selector);
        if (meta) {
            return this._setMetaElementAttributes(tag, meta);
        }
        return this._getOrCreateElement(tag, true);
    }
    removeTag(attrSelector) {
        this.removeTagElement(this.getTag(attrSelector));
    }
    removeTagElement(meta) {
        if (meta) {
            this._dom.remove(meta);
        }
    }
    _getOrCreateElement(meta, forceCreation = false) {
        if (!forceCreation) {
            const selector = this._parseSelector(meta);
            const elem = this.getTag(selector);
            // It's allowed to have multiple elements with the same name so it's not enough to
            // just check that element with the same name already present on the page. We also need to
            // check if element has tag attributes
            if (elem && this._containsAttributes(meta, elem))
                return elem;
        }
        const element = this._dom.createElement('meta');
        this._setMetaElementAttributes(meta, element);
        const head = this._doc.getElementsByTagName('head')[0];
        head.appendChild(element);
        return element;
    }
    _setMetaElementAttributes(tag, el) {
        Object.keys(tag).forEach((prop) => el.setAttribute(prop, tag[prop]));
        return el;
    }
    _parseSelector(tag) {
        const attr = tag.name ? 'name' : 'property';
        return `${attr}="${tag[attr]}"`;
    }
    _containsAttributes(tag, elem) {
        return Object.keys(tag).every((key) => elem.getAttribute(key) === tag[key]);
    }
}
Meta.ɵprov = i0.ɵɵdefineInjectable({ factory: createMeta, token: Meta, providedIn: "root" });
Meta.decorators = [
    { type: Injectable, args: [{ providedIn: 'root', useFactory: createMeta, deps: [] },] }
];
Meta.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWV0YS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3BsYXRmb3JtLWJyb3dzZXIvc3JjL2Jyb3dzZXIvbWV0YS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQUMsUUFBUSxFQUE2QixPQUFPLElBQUksTUFBTSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDdkYsT0FBTyxFQUFDLE1BQU0sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDOztBQXNCM0Q7O0dBRUc7QUFDSCxNQUFNLFVBQVUsVUFBVTtJQUN4QixPQUFPLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0FBQ3RDLENBQUM7QUFFRDs7OztHQUlHO0FBRUgsTUFBTSxPQUFPLElBQUk7SUFFZixZQUFzQyxJQUFTO1FBQVQsU0FBSSxHQUFKLElBQUksQ0FBSztRQUM3QyxJQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxNQUFNLENBQUMsR0FBbUIsRUFBRSxnQkFBeUIsS0FBSztRQUN4RCxJQUFJLENBQUMsR0FBRztZQUFFLE9BQU8sSUFBSSxDQUFDO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDLEdBQUcsRUFBRSxhQUFhLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBRUQsT0FBTyxDQUFDLElBQXNCLEVBQUUsZ0JBQXlCLEtBQUs7UUFDNUQsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPLEVBQUUsQ0FBQztRQUNyQixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUF5QixFQUFFLEdBQW1CLEVBQUUsRUFBRTtZQUNwRSxJQUFJLEdBQUcsRUFBRTtnQkFDUCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLEVBQUUsYUFBYSxDQUFDLENBQUMs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LEVBQUUsQ0FBQztJQUNaLENBQUM7SUFFTyxjQUFjLENBQUMsR0FBbUI7UUFDeEMsTUFBTSxJQUFJLEdBQVcsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUM7UUFDcEQsT0FBTyxHQUFHLElBQUksS0FBSyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUNsQyxDQUFDO0lBRU8sbUJBQW1CLENBQUMsR0FBbUIsRUFBRSxJQUFxQjtRQUNwRSxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBVyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3RGLENBQUM7Ozs7WUFsRkYsVUFBVSxTQUFDLEVBQUMsVUFBVSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUM7Ozs0Q0FHbkQsTUFBTSxTQUFDLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtET0NVTUVOVCwgybVEb21BZGFwdGVyIGFzIERvbUFkYXB0ZXIsIMm1Z2V0RE9NIGFzIGdldERPTX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7SW5qZWN0LCBJbmplY3RhYmxlLCDJtcm1aW5qZWN0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgbWV0YSBlbGVtZW50LlxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IHR5cGUgTWV0YURlZmluaXRpb24gPSB7XG4gIGNoYXJzZXQ/OiBzdHJpbmc7XG4gIGNvbnRlbnQ/OiBzdHJpbmc7XG4gIGh0dHBFcXVpdj86IHN0cmluZztcbiAgaWQ/OiBzdHJpbmc7XG4gIGl0ZW1wcm9wPzogc3RyaW5nO1xuICBuYW1lPzogc3RyaW5nO1xuICBwcm9wZXJ0eT86IHN0cmluZztcbiAgc2NoZW1lPzogc3RyaW5nO1xuICB1cmw/OiBzdHJpbmc7XG59JntcbiAgLy8gVE9ETyhJZ29yTWluYXIpOiB0aGlzIHR5cGUgbG9va3Mgd3JvbmdcbiAgW3Byb3A6IHN0cmluZ106IHN0cmluZztcbn07XG5cbi8qKlxuICogRmFjdG9yeSB0byBjcmVhdGUgTWV0YSBzZXJ2aWNlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTWV0YSgpIHtcbiAgcmV0dXJuIG5ldyBNZXRhKMm1ybVpbmplY3QoRE9DVU1FTlQpKTtcbn1cblxuLyoqXG4gKiBBIHNlcnZpY2UgdGhhdCBjYW4gYmUgdXNlZCB0byBnZXQgYW5kIGFkZCBtZXRhIHRhZ3MuXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5ASW5qZWN0YWJsZSh7cHJvdmlkZWRJbjogJ3Jvb3QnLCB1c2VGYWN0b3J5OiBjcmVhdGVNZXRhLCBkZXBzOiBbXX0pXG5leHBvcnQgY2xhc3MgTWV0YSB7XG4gIHByaXZhdGUgX2RvbTogRG9tQWRhcHRlcjtcbiAgY29uc3RydWN0b3IoQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBfZG9jOiBhbnkpIHtcbiAgICB0aGlzLl9kb20gPSBnZXRET00oKTtcbiAgfVxuXG4gIGFkZFRhZyh0YWc6IE1ldGFEZWZpbml0aW9uLCBmb3JjZUNyZWF0aW9uOiBib29sZWFuID0gZmFsc2UpOiBIVE1MTWV0YUVsZW1lbnR8bnVsbCB7XG4gICAgaWYgKCF0YWcpIHJldHVybiBudWxsO1xuICAgIHJldHVybiB0aGlzLl9nZXRPckNyZWF0ZUVsZW1lbnQodGFnLCBmb3JjZUNyZWF0aW9uKTtcbiAgfVxuXG4gIGFkZFRhZ3ModGFnczogTWV0YURlZmluaXRpb25bXSwgZm9yY2VDcmVhdGlvbjogYm9vbGVhbiA9IGZhbHNlKTogSFRNTE1ldGFFbGVtZW50W10ge1xuICAgIGlmICghdGFncykgcmV0dXJuIFtdO1xuICAgIHJldHVybiB0YWdzLnJlZHVjZSgocmVzdWx0OiBIVE1MTWV0YUVsZW1lbnRbXSwgdGFnOiBNZXRhRGVmaW5pdGlvbikgPT4ge1xuICAgICAgaWYgKHRhZykge1xuICAgICAgICByZXN1bHQucHVzaCh0aGlzLl9nZXRPckNyZWF0ZUVsZW1lbnQodGFnLCBmb3JjZUNyZWF0aW9uKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0sIFtdKTtcbiAgfVxuXG4gIGdldFRhZyhhdHRyU2VsZWN0b3I6IHN0cmluZyk6IEhUTUxNZXRhRWxlbWVudHxudWxsIHtcbiAgICBpZiAoIWF0dHJTZWxlY3RvcikgcmV0dXJuIG51bGw7XG4gICAgcmV0dXJuIHRoaXMuX2RvYy5xdWVyeVNlbGVjdG9yKGBtZXRhWyR7YXR0clNlbGVjdG9yfV1gKSB8fCBudWxsO1xuICB9XG5cbiAgZ2V0VGFncyhhdHRyU2VsZWN0b3I6IHN0cmluZyk6IEhUTUxNZXRhRWxlbWVudFtdIHtcbiAgICBpZiAoIWF0dHJTZWxlY3RvcikgcmV0dXJuIFtdO1xuICAgIGNvbnN0IGxpc3QgLypOb2RlTGlzdCovID0gdGhpcy5fZG9jLnF1ZXJ5U2VsZWN0b3JBbGwoYG1ldGFbJHthdHRyU2VsZWN0b3J9XWApO1xuICAgIHJldHVybiBsaXN0ID8gW10uc2xpY2UuY2FsbChsaXN0KSA6IFtdO1xuICB9XG5cbiAgdXBkYXRlVGFnKHRhZzogTWV0YURlZmluaXRpb24sIHNlbGVjdG9yPzogc3RyaW5nKTogSFRNTE1ldGFFbGVtZW50fG51bGwge1xuICAgIGlmICghdGFnKSByZXR1cm4gbnVsbDtcbiAgICBzZWxlY3RvciA9IHNlbGVjdG9yIHx8IHRoaXMuX3BhcnNlU2VsZWN0b3IodGFnKTtcbiAgICBjb25zdCBtZXRhOiBIVE1MTWV0YUVsZW1lbnQgPSB0aGlzLmdldFRhZyhzZWxlY3RvcikhO1xuICAgIGlmIChtZXRhKSB7XG4gICAgICByZXR1cm4gdGhpcy5fc2V0TWV0YUVsZW1lbnRBdHRyaWJ1dGVzKHRhZywgbWV0YSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9nZXRPckNyZWF0ZUVsZW1lbnQodGFnLCB0cnVlKTtcbiAgfVxuXG4gIHJlbW92ZVRhZyhhdHRyU2VsZWN0b3I6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMucmVtb3ZlVGFnRWxlbWVudCh0aGlzLmdldFRhZyhhdHRyU2VsZWN0b3IpISk7XG4gIH1cblxuICByZW1vdmVUYWdFbGVtZW50KG1ldGE6IEhUTUxNZXRhRWxlbWVudCk6IHZvaWQge1xuICAgIGlmIChtZXRhKSB7XG4gICAgICB0aGlzLl9kb20ucmVtb3ZlKG1ldGEpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2dldE9yQ3JlYXRlRWxlbWVudChtZXRhOiBNZXRhRGVmaW5pdGlvbiwgZm9yY2VDcmVhdGlvbjogYm9vbGVhbiA9IGZhbHNlKTpcbiAgICAgIEhUTUxNZXRhRWxlbWVudCB7XG4gICAgaWYgKCFmb3JjZUNyZWF0aW9uKSB7XG4gICAgICBjb25zdCBzZWxlY3Rvcjogc3RyaW5nID0gdGhpcy5fcGFyc2VTZWxlY3RvcihtZXRhKTtcbiAgICAgIGNvbnN0IGVsZW06IEhUTUxNZXRhRWxlbWVudCA9IHRoaXMuZ2V0VGFnKHNlbGVjdG9yKSE7XG4gICAgICAvLyBJdCdzIGFsbG93ZWQgdG8gaGF2ZSBtdWx0aXBsZSBlbGVtZW50cyB3aXRoIHRoZSBzYW1lIG5hbWUgc28gaXQncyBub3QgZW5vdWdoIHRvXG4gICAgICAvLyBqdXN0IGNoZWNrIHRoYXQgZWxlbWVudCB3aXRoIHRoZSBzYW1lIG5hbWUgYWxyZWFkeSBwcmVzZW50IG9uIHRoZSBwYWdlLiBXZSBhbHNvIG5lZWQgdG9cbiAgICAgIC8vIGNoZWNrIGlmIGVsZW1lbnQgaGFzIHRhZyBhdHRyaWJ1dGVzXG4gICAgICBpZiAoZWxlbSAmJiB0aGlzLl9jb250YWluc0F0dHJpYnV0ZXMobWV0YSwgZWxlbSkpIHJldHVybiBlbGVtO1xuICAgIH1cbiAgICBjb25zdCBlbGVtZW50OiBIVE1MTWV0YUVsZW1lbnQgPSB0aGlzLl9kb20uY3JlYXRlRWxlbWVudCgnbWV0YScpIGFzIEhUTUxNZXRhRWxlbWVudDtcbiAgICB0aGlzLl9zZXRNZXRhRWxlbWVudEF0dHJpYnV0ZXMobWV0YSwgZWxlbWVudCk7XG4gICAgY29uc3QgaGVhZCA9IHRoaXMuX2RvYy5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdO1xuICAgIGhlYWQuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cblxuICBwcml2YXRlIF9zZXRNZXRhRWxlbWVudEF0dHJpYnV0ZXModGFnOiBNZXRhRGVmaW5pdGlvbiwgZWw6IEhUTUxNZXRhRWxlbWVudCk6IEhUTUxNZXRhRWxlbWVudCB7XG4gICAgT2JqZWN0LmtleXModGFnKS5mb3JFYWNoKChwcm9wOiBzdHJpbmcpID0+IGVsLnNldEF0dHJpYnV0ZShwcm9wLCB0YWdbcHJvcF0pKTtcbiAgICByZXR1cm4gZWw7XG4gIH1cblxuICBwcml2YXRlIF9wYXJzZVNlbGVjdG9yKHRhZzogTWV0YURlZmluaXRpb24pOiBzdHJpbmcge1xuICAgIGNvbnN0IGF0dHI6IHN0cmluZyA9IHRhZy5uYW1lID8gJ25hbWUnIDogJ3Byb3BlcnR5JztcbiAgICByZXR1cm4gYCR7YXR0cn09XCIke3RhZ1thdHRyXX1cImA7XG4gIH1cblxuICBwcml2YXRlIF9jb250YWluc0F0dHJpYnV0ZXModGFnOiBNZXRhRGVmaW5pdGlvbiwgZWxlbTogSFRNTE1ldGFFbGVtZW50KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHRhZykuZXZlcnkoKGtleTogc3RyaW5nKSA9PiBlbGVtLmdldEF0dHJpYnV0ZShrZXkpID09PSB0YWdba2V5XSk7XG4gIH1cbn1cbiJdfQ==