"use strict";
// Copyright ©2025 Quinn A Michaels; All rights reserved. 
// Legal Signature Required For Lawful Use.
// Distributed under VLA:53817191093555119789 LICENSE.md

// Vaisya Deva test file

const {expect} = require('chai')
const VaisyaDeva = require('./index.js');

describe(VaisyaDeva.me.name, () => {
  beforeEach(() => {
    return VaisyaDeva.init()
  });
  it('Check the DEVA Object', () => {
    expect(VaisyaDeva).to.be.an('object');
    expect(VaisyaDeva).to.have.property('agent');
    expect(VaisyaDeva).to.have.property('vars');
    expect(VaisyaDeva).to.have.property('listeners');
    expect(VaisyaDeva).to.have.property('methods');
    expect(VaisyaDeva).to.have.property('modules');
  });
})
