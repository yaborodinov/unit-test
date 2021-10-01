const { sum, nativeNull } = require('./intro')

describe('Sum function', () => {
  test('should return sum of two values', () => {
    expect(sum(1, 4)).toBe(5)
    expect(sum(1, 9)).toBe(10)
  })

  test('should return value correctly comparing to other', () => {
    expect(sum(2, 3)).toBeGreaterThan(3)
    expect(sum(2, 3)).toBeGreaterThanOrEqual(5)
    expect(sum(2, 3)).toBeLessThan(10)
    expect(sum(2, 3)).toBeLessThanOrEqual(5)
  })

  test('should sum two floatvalues corrctly', () => {
    expect(sum(0.4, 0.6)).toBeCloseTo(1, 4)
  })
})

describe('nativeNull function', () => {
  test('shold return false value null', () => {
    expect(nativeNull()).toBe(null)
    expect(nativeNull()).toBeNull()
    expect(nativeNull()).toBeFalsy()
    expect(nativeNull()).toBeDefined()
    expect(nativeNull()).not.toBeTruthy()
    expect(nativeNull()).not.toBeUndefined()

  })
})

