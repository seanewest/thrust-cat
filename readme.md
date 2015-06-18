# Thrust-Cat

Pipe html into its own [thrust](https://github.com/breach/thrust) browser window.

```
echo "<h1>hello</h1>" | thrust-cat 640 480
```

This will pop open its own bare-bones browser window with width 640 and height 480.

Specifying the width and height is optional.


## Install

```
npm install seanewest/thrust-cat
```

## API
```js
var tcat = require('thrust-cat');
var width = 300;
var height = 300;
tcat("<h1>hello</h1>", width, height, function(err) {
  if (err) {
    console.err(err);
    process.exit(1);
  }
})
```

## Pipeline Friends

Pipe your JS through an html wrapper with [jstohtml](https://github.com/seanewest/jstohtml)
```
cat index.js | jstohtml | thrust-cat
```

Pipe and Browserify your JS with [browserify](https://github.com/substack/node-browserify)
```
cat index.js | browserify - | jstohtml | thrust-cat
```
