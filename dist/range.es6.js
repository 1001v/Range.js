(function(name, definition) {
    if (typeof define === 'function') { // AMD
        define(definition);
    } else if (typeof module !== 'undefined' && module.exports) { // Node
        module.exports = definition();
    } else { // Browser
        var theModule = definition(),
            global = this,
            old = global[name];
        theModule.noConflict = function() {
            global[name] = old;
            return theModule;
        };
        global[name] = theModule;
    }
})('Range', function() {
    class Range {

        constructor(min, max) {
            if (arguments.length !== 2)
                throw new Error('Wrong number of arguments');
            if (typeof(min) !== typeof(max))
                throw new Error('Min and max must be same type');
            if (min > max)
                throw new Error('Max must be greater then min');

            this.min = min, this.max = max;
        }

        _switch(switchValue, stringCallback, numberCallback) {
            switch (typeof(switchValue)) {
                case 'string':
                    return stringCallback(switchValue);
                case 'number':
                    return numberCallback(switchValue);
                default:
                    throw new Error(`Argument value must be ${typeof(this.min)}`);
            }
        }

        _next(value) {
            return this._switch(value, v => String.fromCharCode(v.charCodeAt(0) + 1), v => v + 1);
        }

        // равен ли другому диапазону
        isEqual(other) {
            return this.min === other.min && this.max === other.max;
        }

        // включает ли в себя значение
        includes(value) {
            return this._switch(value, v => v.charCodeAt(0) >= this.min.charCodeAt(0) && v.charCodeAt(0) <= this.max.charCodeAt(0), v => v >= this.min && v <= this.max);
        }

        // сделать строку из диапазона
        toString() {
            return `[${this.min}..${this.max}]`;
        }

        // сделать массив из диапазона
        toArray() {
            let array = []
            for (let tmp = this.min; tmp <= this.max; tmp = this._next(tmp))
                array.push(tmp);
            return array;
        }

        // итерировать диапазон
        forEach(callback) {
            for (let tmp = this.min, index = 0; tmp <= this.max; tmp = this._next(tmp), index++)
                callback(tmp, index, this);
            return this;
        }

        // размер диапазона
        size() {
            return this._switch(this.min, () => this.max.charCodeAt(0) - this.min.charCodeAt(0) + 1, () => this.max - this.min + 1);
        }

        getClass() {
            return 'Range';
        }
    };

    return Range;
});
//# sourceMappingURL=range.es6.js.map
