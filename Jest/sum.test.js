const { describe, expect, test } = require('@jest/globals');
const { sum } = require('./sum');

describe('sum', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
});
// const sum = require('./sum')

// test('adds 1 + 2 to equal 3',() => 
// {
//     expect(sum(1,2)).toBe(3);
// });

