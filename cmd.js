#!/usr/bin/env node

var http = require('http');
var concat = require('concat-stream');
var tcat = require('./');

var width = 1024;
var height = 600;
if (process.argv[2])
  width = parseInt(process.argv[2]);
if (process.argv[3])
  height = parseInt(process.argv[3]);

process.stdin.pipe(concat(function(data) {
  tcat(data, width, height, function(err) {
    if (err) {
      console.error('error starting thrust', err)
      process.exit(1);
    }
  });
}))
