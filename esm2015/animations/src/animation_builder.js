/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { AnimationBuilder, AnimationFactory, sequence } from '@angular/animations';
import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, RendererFactory2, ViewEncapsulation } from '@angular/core';
export class BrowserAnimationBuilder extends AnimationBuilder {
    constructor(rootRenderer, doc) {
        super();
        this._nextAnimationId = 0;
        const typeData = { id: '0', encapsulation: ViewEncapsulation.None, styles: [], data: { animation: [] } };
        this._renderer = rootRenderer.createRenderer(doc.body, typeData);
    }
    build(animation) {
        const id = this._nextAnimationId.toString();
        this._nextAnimationId++;
        const entry = Array.isArray(animation) ? sequence(animation) : animation;
        issueAnimationCommand(this._renderer, null, id, 'register', [entry]);
        return new BrowserAnimationFactory(id, this._renderer);
    }
}
BrowserAnimationBuilder.decorators = [
    { type: Injectable }
];
BrowserAnimationBuilder.ctorParameters = () => [
    { type: RendererFactory2 },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
export class BrowserAnimationFactory extends AnimationFactory {
    constructor(_id, _renderer) {
        super();
        this._id = _id;
        this._renderer = _renderer;
    }
    create(element, options) {
        return new RendererAnimationPlayer(this._id, element, options || {}, this._renderer);
    }
}
export class RendererAnimationPlayer {
    constructor(id, element, options, _renderer) {
        this.id = id;
        this.element = element;
        this._renderer = _renderer;
        this.parentPlayer = null;
        this._started = false;
        this.totalTime = 0;
        this._command('create', options);
    }
    _listen(eventName, callback) {
        return this._renderer.listen(this.element, `@@${this.id}:${eventName}`, callback);
    }
    _command(command, ...args) {
        return issueAnimationCommand(this._renderer, this.element, this.id, command, args);
    }
    onDone(fn) {
        this._listen('done', fn);
    }
    onStart(fn) {
        this._listen('start', fn);
    }
    onDestroy(fn) {
        this._listen('destroy', fn);
    }
    init() {
        this._command('init');
    }
    hasStarted() {
        return this._started;
    }
    play() {
        this._command('play');
        this._started = true;
    }
    pause() {
        this._command('pause');
    }
    restart() {
        this._command('restart');
    }
    finish() {
        this._command('finish');
    }
    destroy() {
        this._command('destroy');
    }
    reset() {
        this._command('reset');
    }
    setPosition(p) {
        this._command('setPosition', p);
    }
    getPosition() {
        var _a, _b;
        return (_b = (_a = this._renderer.engine.players[+this.id]) === null || _a === void 0 ? void 0 : _a.getPosition()) !== null && _b !== void 0 ? _b : 0;
    }
}
function issueAnimationCommand(renderer, element, id, command, args) {
    return renderer.setProperty(element, `@@${id}:${command}`, args);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5pbWF0aW9uX2J1aWxkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9wbGF0Zm9ybS1icm93c2VyL2FuaW1hdGlvbnMvc3JjL2FuaW1hdGlvbl9idWlsZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUNILE9BQU8sRUFBQyxnQkFBZ0IsRUFBRSxnQkFBZ0IsRUFBd0QsUUFBUSxFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFDdkksT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sRUFBQyxNQUFNLEVBQUUsVUFBVSxFQUFFLGdCQUFnQixFQUFpQixpQkFBaUIsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUtyRyxNQUFNLE9BQU8sdUJBQXdCLFNBQVEsZ0JBQWdCO0lBSTNELFlBQVksWUFBOEIsRUFBb0IsR0FBUTtRQUNwRSxLQUFLLEVBQUUsQ0FBQztRQUpGLHFCQUFnQixHQUFHLENBQUMsQ0FBQztRQUszQixNQUFNLFFBQVEsR0FDVixFQUFDLEVBQUUsRUFBRSxHQUFHLEVBQUUsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxFQUFDLFNBQVMsRUFBRSxFQUFFLEVBQUMsRUFDckUsQ0FBQztRQUNsQixJQUFJLENBQUMsU0FBUyxHQUFHLFlBQVksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxRQUFRLENBQXNCLENBQUM7SUFDeEYsQ0FBQztJQUVELEtBQUssQ0FBQyxTQUFnRDtRQUNwRCxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDNUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDeEIsTUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFD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QzFCLENBQUM7SUFFRCxPQUFPO1FBQ0wsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBRUQsS0FBSztRQUNILElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUVELFdBQVcsQ0FBQyxDQUFTO1FBQ25CLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFRCxXQUFXOztRQUNULG1CQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsMENBQUUsV0FBVyxxQ0FBTSxDQUFDLENBQUM7SUFDckUsQ0FBQztDQUdGO0FBRUQsU0FBUyxxQkFBcUIsQ0FDMUIsUUFBMkIsRUFBRSxPQUFZLEVBQUUsRUFBVSxFQUFFLE9BQWUsRUFBRSxJQUFXO0lBQ3JGLE9BQU8sUUFBUSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLElBQUksT0FBTyxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDbkUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuaW1wb3J0IHtBbmltYXRpb25CdWlsZGVyLCBBbmltYXRpb25GYWN0b3J5LCBBbmltYXRpb25NZXRhZGF0YSwgQW5pbWF0aW9uT3B0aW9ucywgQW5pbWF0aW9uUGxheWVyLCBzZXF1ZW5jZX0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQge0RPQ1VNRU5UfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtJbmplY3QsIEluamVjdGFibGUsIFJlbmRlcmVyRmFjdG9yeTIsIFJlbmRlcmVyVHlwZTIsIFZpZXdFbmNhcHN1bGF0aW9ufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtBbmltYXRpb25SZW5kZXJlcn0gZnJvbSAnLi9hbmltYXRpb25fcmVuZGVyZXInO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQnJvd3NlckFuaW1hdGlvbkJ1aWxkZXIgZXh0ZW5kcyBBbmltYXRpb25CdWlsZGVyIHtcbiAgcHJpdmF0ZSBfbmV4dEFuaW1hdGlvbklkID0gMDtcbiAgcHJpdmF0ZSBfcmVuZGVyZXI6IEFuaW1hdGlvblJlbmRlcmVyO1xuXG4gIGNvbnN0cnVjdG9yKHJvb3RSZW5kZXJlcjogUmVuZGVyZXJGYWN0b3J5MiwgQEluamVjdChET0NVTUVOVCkgZG9jOiBhbnkpIHtcbiAgICBzdXBlcigpO1xuICAgIGNvbnN0IHR5cGVEYXRhID1cbiAgICAgICAge2lkOiAnMCcsIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsIHN0eWxlczogW10sIGRhdGE6IHthbmltYXRpb246IFtdfX0gYXNcbiAgICAgICAgUmVuZGVyZXJUeXBlMjtcbiAgICB0aGlzLl9yZW5kZXJlciA9IHJvb3RSZW5kZXJlci5jcmVhdGVSZW5kZXJlcihkb2MuYm9keSwgdHlwZURhdGEpIGFzIEFuaW1hdGlvblJlbmRlcmVyO1xuICB9XG5cbiAgYnVpbGQoYW5pbWF0aW9uOiBBbmltYXRpb25NZXRhZGF0YXxBbmltYXRpb25NZXRhZGF0YVtdKTogQW5pbWF0aW9uRmFjdG9yeSB7XG4gICAgY29uc3QgaWQgPSB0aGlzLl9uZXh0QW5pbWF0aW9uSWQudG9TdHJpbmcoKTtcbiAgICB0aGlzLl9uZXh0QW5pbWF0aW9uSWQrKztcbiAgICBjb25zdCBlbnRyeSA9IEFycmF5LmlzQXJyYXkoYW5pbWF0aW9uKSA/IHNlcXVlbmNlKGFuaW1hdGlvbikgOiBhbmltYXRpb247XG4gICAgaXNzdWVBbmltYXRpb25Db21tYW5kKHRoaXMuX3JlbmRlcmVyLCBudWxsLCBpZCwgJ3JlZ2lzdGVyJywgW2VudHJ5XSk7XG4gICAgcmV0dXJuIG5ldyBCcm93c2VyQW5pbWF0aW9uRmFjdG9yeShpZCwgdGhpcy5fcmVuZGVyZXIpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBCcm93c2VyQW5pbWF0aW9uRmFjdG9yeSBleHRlbmRzIEFuaW1hdGlvbkZhY3Rvcnkge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9pZDogc3RyaW5nLCBwcml2YXRlIF9yZW5kZXJlcjogQW5pbWF0aW9uUmVuZGVyZXIpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgY3JlYXRlKGVsZW1lbnQ6IGFueSwgb3B0aW9ucz86IEFuaW1hdGlvbk9wdGlvbnMpOiBBbmltYXRpb25QbGF5ZXIge1xuICAgIHJldHVybiBuZXcgUmVuZGVyZXJBbmltYXRpb25QbGF5ZXIodGhpcy5faWQsIGVsZW1lbnQsIG9wdGlvbnMgfHwge30sIHRoaXMuX3JlbmRlcmVyKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgUmVuZGVyZXJBbmltYXRpb25QbGF5ZXIgaW1wbGVtZW50cyBBbmltYXRpb25QbGF5ZXIge1xuICBwdWJsaWMgcGFyZW50UGxheWVyOiBBbmltYXRpb25QbGF5ZXJ8bnVsbCA9IG51bGw7XG4gIHByaXZhdGUgX3N0YXJ0ZWQgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICAgIHB1YmxpYyBpZDogc3RyaW5nLCBwdWJsaWMgZWxlbWVudDogYW55LCBvcHRpb25zOiBBbmltYXRpb25PcHRpb25zLFxuICAgICAgcHJpdmF0ZSBfcmVuZGVyZXI6IEFuaW1hdGlvblJlbmRlcmVyKSB7XG4gICAgdGhpcy5fY29tbWFuZCgnY3JlYXRlJywgb3B0aW9ucyk7XG4gIH1cblxuICBwcml2YXRlIF9saXN0ZW4oZXZlbnROYW1lOiBzdHJpbmcsIGNhbGxiYWNrOiAoZXZlbnQ6IGFueSkgPT4gYW55KTogKCkgPT4gdm9pZCB7XG4gICAgcmV0dXJuIHRoaXMuX3JlbmRlcmVyLmxpc3Rlbih0aGlzLmVsZW1lbnQsIGBAQCR7dGhpcy5pZH06JHtldmVudE5hbWV9YCwgY2FsbGJhY2spO1xuICB9XG5cbiAgcHJpdmF0ZSBfY29tbWFuZChjb21tYW5kOiBzdHJpbmcsIC4uLmFyZ3M6IGFueVtdKSB7XG4gICAgcmV0dXJuIGlzc3VlQW5pbWF0aW9uQ29tbWFuZCh0aGlzLl9yZW5kZXJlciwgdGhpcy5lbGVtZW50LCB0aGlzLmlkLCBjb21tYW5kLCBhcmdzKTtcbiAgfVxuXG4gIG9uRG9uZShmbjogKCkgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMuX2xpc3RlbignZG9uZScsIGZuKTtcbiAgfVxuXG4gIG9uU3RhcnQoZm46ICgpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLl9saXN0ZW4oJ3N0YXJ0JywgZm4pO1xuICB9XG5cbiAgb25EZXN0cm95KGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5fbGlzdGVuKCdkZXN0cm95JywgZm4pO1xuICB9XG5cbiAgaW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLl9jb21tYW5kKCdpbml0Jyk7XG4gIH1cblxuICBoYXNTdGFydGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9zdGFydGVkO1xuICB9XG5cbiAgcGxheSgpOiB2b2lkIHtcbiAgICB0aGlzLl9jb21tYW5kKCdwbGF5Jyk7XG4gICAgdGhpcy5fc3RhcnRlZCA9IHRydWU7XG4gIH1cblxuICBwYXVzZSgpOiB2b2lkIHtcbiAgICB0aGlzLl9jb21tYW5kKCdwYXVzZScpO1xuICB9XG5cbiAgcmVzdGFydCgpOiB2b2lkIHtcbiAgICB0aGlzLl9jb21tYW5kKCdyZXN0YXJ0Jyk7XG4gIH1cblxuICBmaW5pc2goKTogdm9pZCB7XG4gICAgdGhpcy5fY29tbWFuZCgnZmluaXNoJyk7XG4gIH1cblxuICBkZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuX2NvbW1hbmQoJ2Rlc3Ryb3knKTtcbiAgfVxuXG4gIHJlc2V0KCk6IHZvaWQge1xuICAgIHRoaXMuX2NvbW1hbmQoJ3Jlc2V0Jyk7XG4gIH1cblxuICBzZXRQb3NpdGlvbihwOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLl9jb21tYW5kKCdzZXRQb3NpdGlvbicsIHApO1xuICB9XG5cbiAgZ2V0UG9zaXRpb24oKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fcmVuZGVyZXIuZW5naW5lLnBsYXllcnNbK3RoaXMuaWRdPy5nZXRQb3NpdGlvbigpID8/IDA7XG4gIH1cblxuICBwdWJsaWMgdG90YWxUaW1lID0gMDtcbn1cblxuZnVuY3Rpb24gaXNzdWVBbmltYXRpb25Db21tYW5kKFxuICAgIHJlbmRlcmVyOiBBbmltYXRpb25SZW5kZXJlciwgZWxlbWVudDogYW55LCBpZDogc3RyaW5nLCBjb21tYW5kOiBzdHJpbmcsIGFyZ3M6IGFueVtdKTogYW55IHtcbiAgcmV0dXJuIHJlbmRlcmVyLnNldFByb3BlcnR5KGVsZW1lbnQsIGBAQCR7aWR9OiR7Y29tbWFuZH1gLCBhcmdzKTtcbn1cbiJdfQ==