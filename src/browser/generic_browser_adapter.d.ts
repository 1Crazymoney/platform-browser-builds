/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { DomAdapter } from '../dom/dom_adapter';
/**
 * Provides DOM operations in any browser environment.
 *
 * @security Tread carefully! Interacting with the DOM directly is dangerous and
 * can introduce XSS risks.
 */
export declare abstract class GenericBrowserDomAdapter extends DomAdapter {
    constructor();
    getDistributedNodes(el: HTMLElement): Node[];
    supportsDOMEvents(): boolean;
}
