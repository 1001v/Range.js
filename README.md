# Range.js

Range.js is an attempt to add ruby-like range class to javascript. Library is written using ES6 (ecmascript 2015), but 
compiled (using babel) to ES5 version is provided as well.

## Installing

A step by step series of examples that tell you have to get a development env running

###Install using npm:

```
npm i --save Range.js
```

###Or clone this repository:

```
git clone https://github.com/1001v/Range.js.git ./Range.js
```

## Adding to project

You can add Range.js to your node.js project, HTML-code or RequireJS

###NodeJS:

Require Range.js ES6
```

const Range = require('Range.js');
```

Require Range.js ES5
```

const Range = require('Range.js/dist/range.es5.js');
```

Make Range class global
```

global.Range = Range;
```

###Browser:

Add script tag to your HTML
```
<script src='dist/range.es5.js'></script> 
```

##Basic usage

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

The only condition is that charcode is rising from min to max.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details