import chai from 'chai';
let expect = chai.expect;
import DragBoxSort from '../components/DragBoxSort';

describe.only('The DragBoxSort #reorder method', () => {
  let drag = new DragBoxSort()
  let arr = ['0','1','2','3']

  it('.., can move elements FORWARD from middle element', () => {
    let test = drag.dropReorder(2,0,arr)
    expect(test).to.eql(['2', '0', '1', '3'])
  });

  it('.., can move elements BACKWARD from first element', () => {
    let test = drag.dropReorder(0,2,arr)
    expect(test).to.eql(['1', '2', '0', '3'])
  });

  it('.., can move elements BACKWARD TO last element', () => {
    let test = drag.dropReorder(2,3,arr)
    expect(test).to.eql(['0', '1', '3', '2'])
  });

});