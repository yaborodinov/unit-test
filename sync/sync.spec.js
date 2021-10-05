const Lodash = require('./sync')

describe('Lodash: compact', () => {

  const _ = new Lodash()
  
  test('should be defined', () => {
    // expect(_.compact).toBeDefined()
    expect(_.compact).not.toBeUndefined()
  })

  test('should remove values from array', () => {
    const arr = [false, 45, 0, '', null, 'hello']
    const result = [45, 'hello']
    expect(_.compact(arr)).toEqual(result)
  })

  test('should not contain falsy values', () => {
    const arr = [false, 45, 0, '', null, 'hello']
    expect(_.compact(arr)).not.toContain(false)
    expect(_.compact(arr)).not.toContain(0)
    expect(_.compact(arr)).not.toContain('')
    expect(_.compact(arr)).not.toContain(null)
  })
})
