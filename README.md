# testing sourcemap in fusebox

## Installation

```
$ git clone git@github.com:tinchoz49/test-sourcemap-fuse.git
$ cd test-sourcemap-fuse
$ npm install
$ node fuse
```

## Possible error

If you don't use babel or TS, fusebox doesn't generate the sourcemap correctly.

## How to reproduce the `possible bug`

1. Open `http://localhost:4444` in chrome
2. Check the sourcemap tree path in the devtool
