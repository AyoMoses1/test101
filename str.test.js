const { strlen, strReverse } = require('./strlen');

test('verify correct string length', () => {
  expect(strlen('this is')).toBe(7);
});

test('verify incorrect string length', () => {
  expect(strlen('')).toBe('Error: your string does not meet the requirement');
});

test('verify incorrect string length', () => {
  expect(strlen('This is another file')).toBe('Error: your string does not meet the requirement');
});

test('verify string reverse', () => {
  expect(strReverse('this')).toBe('siht');
});