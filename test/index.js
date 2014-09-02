'use strict';

var should = require('should');// jshint ignore:line

var plato = require('../lib/index');

var gulpMock = {};
var task = null;

gulpMock.task = function(name, description, func) {
  task = func;
};

var configMock = {
  root: __dirname,
  src: ['**/*.js', '!./node_modules/**', '!./docs/**']
};

plato(gulpMock, configMock);

describe('Gulp module plato', function() {
  it('Should return a function', function() {
    plato.should.be.type('function');
  });

  it('Should create a task', function() {
    task.should.be.type('function');
  });

  it('Should run and throw an error', function(cb) {
    try {
      task();
    } catch (e) {
      cb();
    }
  });
});
