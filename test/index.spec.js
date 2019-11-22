/* global describe, it, before */

import chai from 'chai'
import { parser } from '../lib/mxgraph-validate.js'
import data from './data.js'

chai.expect()

const expect = chai.expect

let lib


describe('========================', () => {
  before(() => {
    lib = new parser(data)
    console.log(lib.getType(3))
  })
  it('check getType', () => {
    expect(lib.getType('3')).to.be.equal('Task')
  })
  it('fn checkEdge', () => {
    expect(lib.checkEdge().length).to.be.equal(1)
  })
})