'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function (name, definition) {
    if (typeof define === 'function') {
        // AMD
        define(definition);
    } else if (typeof module !== 'undefined' && module.exports) {
        // Node
        module.exports = definition();
    } else {
        // Browser
        var theModule = definition(),
            global = this || window,
            old = global[name];
        theModule.noConflict = function () {
            global[name] = old;
            return theModule;
        };
        global[name] = theModule;
    }
})('Range', function () {
    var Range = function () {
        function Range(min, max) {
            _classCallCheck(this, Range);

            if (arguments.length !== 2) throw new Error('Wrong number of arguments');
            if ((typeof min === 'undefined' ? 'undefined' : _typeof(min)) !== (typeof max === 'undefined' ? 'undefined' : _typeof(max))) throw new Error('Min and max must be same type');
            if (min > max) throw new Error('Max must be greater then min');

            this.min = min, this.max = max;
        }

        _createClass(Range, [{
            key: '_switch',
            value: function _switch(switchValue, stringCallback, numberCallback) {
                switch (typeof switchValue === 'undefined' ? 'undefined' : _typeof(switchValue)) {
                    case 'string':
                        return stringCallback(switchValue);
                    case 'number':
                        return numberCallback(switchValue);
                    default:
                        throw new Error('Argument value must be ' + _typeof(this.min));
                }
            }
        }, {
            key: '_next',
            value: function _next(value) {
                return this._switch(value, function (v) {
                    return String.fromCharCode(v.charCodeAt(0) + 1);
                }, function (v) {
                    return v + 1;
                });
            }

            // get value from range by index like from array

        }, {
            key: 'get',
            value: function get(index) {
                var _this = this;

                return index < 0 || index >= this.size() ? undefined : this._switch(this.min, function () {
                    return String.fromCharCode(_this.min.charCodeAt(0) + index);
                }, function () {
                    return _this.min + index;
                });
            }

            // get random value from range

        }, {
            key: 'getRandom',
            value: function getRandom() {
                return this.get(Math.floor(Math.random() * (this.size() - 1)));
            }

            // check if this range equal to other range

        }, {
            key: 'isEqual',
            value: function isEqual(other) {
                return this.min === other.min && this.max === other.max;
            }

            // check if range includes a value

        }, {
            key: 'includes',
            value: function includes(value) {
                var _this2 = this;

                return this._switch(value, function (v) {
                    return v.charCodeAt(0) >= _this2.min.charCodeAt(0) && v.charCodeAt(0) <= _this2.max.charCodeAt(0);
                }, function (v) {
                    return v >= _this2.min && v <= _this2.max;
                });
            }

            // make string

        }, {
            key: 'toString',
            value: function toString() {
                return '[' + this.min + '..' + this.max + ']';
            }

            // make array from range

        }, {
            key: 'toArray',
            value: function toArray() {
                var array = [];
                for (var tmp = this.min; tmp <= this.max; tmp = this._next(tmp)) {
                    array.push(tmp);
                }return array;
            }

            // iterate range like array

        }, {
            key: 'forEach',
            value: function forEach(callback) {
                for (var tmp = this.min, index = 0; tmp <= this.max; tmp = this._next(tmp), index++) {
                    callback(tmp, index, this);
                }return this;
            }

            // range size

        }, {
            key: 'size',
            value: function size() {
                var _this3 = this;

                return this._switch(this.min, function () {
                    return _this3.max.charCodeAt(0) - _this3.min.charCodeAt(0) + 1;
                }, function () {
                    return _this3.max - _this3.min + 1;
                });
            }
        }, {
            key: 'getClass',
            value: function getClass() {
                return 'Range';
            }
        }]);

        return Range;
    }();

    ;

    return Range;
});
//# sourceMappingURL=range.es5.js.map
