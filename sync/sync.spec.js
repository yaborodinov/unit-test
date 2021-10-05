const Lodash = require('./sync')

let _ = new Lodash()

describe('Lodash: compact', () => {

  
  let arr = [false, 45, 0, '', null, 'hello']

  beforeEach(() => {
    arr = [false, 45, 0, '', null, 'hello']
  })

  afterAll(() => {
    _ = new Lodash()
  })


  
  
  test('should be defined', () => {
    // expect(_.compact).toBeDefined()
    expect(_.compact).not.toBeUndefined()
  })

  test('shold working array be  editable', () => {
    arr.push(...['one', 'two'])
    expect(arr).toContain('one')
    expect(arr).toContain('two')
  })

  test('should remove values from array', () => {
    const result = [45, 'hello']
    expect(_.compact(arr)).toEqual(result)
  })

  test('should not contain falsy values', () => {
    expect(_.compact(arr)).not.toContain(false)
    expect(_.compact(arr)).not.toContain(0)
    expect(_.compact(arr)).not.toContain('')
    expect(_.compact(arr)).not.toContain(null)
  })
})


describe('Lodash groupBy', () => {
  test('should be defined', () => {
    expect(_.groupBy).toBeDefined()
    expect(_.groupBy).not.toBeUndefined()
  })
  
  test('should group array items by Math.floor', () => {
    const array = [2.2, 4.3, 34.2, 1.1]
    const result = {
      1: [1.1],
      2: [2.2],
      4: [4.3],
      34: [34.2]
    }
    expect(_.groupBy(array, Math.floor)).toEqual(result)
  })

  test('should group array items by length', () => {
    const array = ['one', 'two', 'three']
    const result = {
      3: ['one', 'two'],
      5: ['three']
    }
    expect(_.groupBy(array, 'length')).toEqual(result)
  })

  test('should not return array', () => {
    expect(_.groupBy([], Math.trunc)).not.toBeInstanceOf(Array)
  })
})
