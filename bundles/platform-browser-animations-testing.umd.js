/**
 * @license Angular v4.0.0-rc.3-d4205bb
 * (c) 2010-2017 Google, Inc. https://angular.io/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/animations')) :
    typeof define === 'function' && define.amd ? define(['exports', '@angular/animations'], factory) :
    (factory((global.ng = global.ng || {}, global.ng.platformBrowser = global.ng.platformBrowser || {}, global.ng.platformBrowser.testing = global.ng.platformBrowser.testing || {}),global._angular_animations));
}(this, function (exports,_angular_animations) { 'use strict';

    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    /**
     * @experimental Animation support is experimental.
     */
    var MockAnimationDriver = (function () {
        function MockAnimationDriver() {
        }
        MockAnimationDriver.prototype.animate = function (element, keyframes, duration, delay, easing, previousPlayers) {
            if (previousPlayers === void 0) { previousPlayers = []; }
            var player = new MockAnimationPlayer(element, keyframes, duration, delay, easing, previousPlayers);
            MockAnimationDriver.log.push(player);
            return player;
        };
        return MockAnimationDriver;
    }());
    MockAnimationDriver.log = [];
    /**
     * @experimental Animation support is experimental.
     */
    var MockAnimationPlayer = (function (_super) {
        __extends(MockAnimationPlayer, _super);
        function MockAnimationPlayer(element, keyframes, duration, delay, easing, previousPlayers) {
            var _this = _super.call(this) || this;
            _this.element = element;
            _this.keyframes = keyframes;
            _this.duration = duration;
            _this.delay = delay;
            _this.easing = easing;
            _this.previousPlayers = previousPlayers;
            _this.__finished = false;
            _this.previousStyles = {};
            previousPlayers.forEach(function (player) {
                if (player instanceof MockAnimationPlayer) {
                    var styles_1 = player._captureStyles();
                    Object.keys(styles_1).forEach(function (prop) { _this.previousStyles[prop] = styles_1[prop]; });
                }
            });
            return _this;
        }
        MockAnimationPlayer.prototype.finish = function () {
            _super.prototype.finish.call(this);
            this.__finished = true;
        };
        MockAnimationPlayer.prototype.destroy = function () {
            _super.prototype.destroy.call(this);
            this.__finished = true;
        };
        MockAnimationPlayer.prototype._captureStyles = function () {
            var _this = this;
            var captures = {};
            Object.keys(this.previousStyles).forEach(function (prop) {
                captures[prop] = _this.previousStyles[prop];
            });
            if (this.hasStarted()) {
                // when assembling the captured styles, it's important that
                // we build the keyframe styles in the following order:
                // {other styles within keyframes, ... previousStyles }
                this.keyframes.forEach(function (kf) {
                    Object.keys(kf).forEach(function (prop) {
                        if (prop != 'offset') {
                            captures[prop] = _this.__finished ? kf[prop] : _angular_animations.AUTO_STYLE;
                        }
                    });
                });
            }
            return captures;
        };
        return MockAnimationPlayer;
    }(_angular_animations.NoopAnimationPlayer));

    exports.MockAnimationDriver = MockAnimationDriver;
    exports.MockAnimationPlayer = MockAnimationPlayer;

}));