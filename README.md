# Range.js

Range.js is an attempt to add ruby-like range class to javascript. Library is written using ES6 (ecmascript 2015), but 
compiled (using babel) to ES5 version is provided as well.

## Installing

### Install using npm:

```
npm i --save Range.js
```

### Or clone this repository:

```
git clone https://github.com/1001v/Range.js.git ./Range.js
```

## Adding to project

You can add Range.js to your node.js project, HTML-code or RequireJS

### NodeJS

Require Range.js ES6:
```

const Range = require('Range.js');
```

Require Range.js ES5:
```

const Range = require('Range.js/dist/range.es5.js');
```

Make Range class global
```

global.Range = Range;
```

### Browser:

Add script tag to your HTML
```
<script src='Range.js/dist/range.es5.js'></script> 
```

## Basic usage

Create your range like this:
```
let min = 0;
let max = 10;
let range = new Range(min, max);
```

Max value must be greater or equal to min value, otherwise an error would be thrown. Min and max values must be the same type
(string or number). You can create a range of any unicode symbols, for example:

```
let range = new Range('a', 'z');
```

The only condition is that charcode is rising from min to max. Note that Range.js doesn't store all range values, so feel free to create 
pretty big ranges.


## Full methods list

###isEqual(other)
Check if this range object is equal to other range object:
```
new Range(1, 5).isEqual(new Range(1, 5)) // true
new Range(1, 5).isEqual(new Range('a', 'z')) // false
```

###includes(value)
Check if range includes a value:
```
new Range(1, 10).includes(5) // true
new Range('A', 'Z').includes(100) // false
```

###toString()
Get string from range:
```

new Range(0, 10).toString() // '[0..10]'
```

###toArray()
Get array of all values, included by range (this one is useful when you want an alphabet array):
```
new Range(5, 10).toArray() // [5, 6, 7, 8, 9, 10]
new Range('a', 'f').toArray() // ['a', 'b', 'c', 'd', 'e', 'f']
```

###forEach(callback)
Iterate your range like array (no array allocs):
```
let range = new Range(5, 10).forEach((value, index, range) => {
    // value contains each value from range
    // index contains value index like in array
    // range contains this range
})
// Note that forEach method returns the range it was called for, unlike Array.prototype.forEach does in vanilla js
range.toString() // '[5..10]'
```

###size()
Get range size:
```
new Range(0, 10).size() // 11
```

###getClass()
Get class name:
```
new Range(0, 10).getClass() // 'Range'
```

## Testing and building
Gulpfile for building and tests for Mocha are provided in this repository.
### Follow this steps to prepare development environment

Clone (or fork and clone optionally) this repository:
```
git clone https://github.com/1001v/Range.js.git ./Range.js
```
Install development dependencies:
```
cd Range.js && npm install
```

### Run tests:
```
npm test
```

### Build:
```
gulp build:all
```

You can check gulpfile for specific build tasks. 

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details