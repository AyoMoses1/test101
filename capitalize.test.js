const capitalize = require('./capitalize')

test('capitalize string', () => {
  expect(capitalize("THISISLLS")).toBe("Thisislls")
})

test('check if string is empty', () => {
 expect(capitalize('')).toBe('Empty string is not allowed') 
})