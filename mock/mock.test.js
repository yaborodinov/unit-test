const { map, forEach } = require('./mock')

describe('map function', () => {
  let array
  let fn

  beforeEach(() => {
    array = [1, 2, 4, 5]
    fn = jest.fn(x => x ** 2)
    map(array, fn)
  })

  test('should call callback', () => {
    expect(fn).toHaveBeenCalled()
    
  })

  test('should call calback 4 times', () => {
    expect(fn).toHaveBeenCalledTimes(4)
    expect(fn.mock.calls.length).toBe(4)
  })

  test('shuld pow 2 each element', () => {
    expect(fn.mock.results[0].value).toBe(1)
    expect(fn.mock.results[1].value).toBe(4)
    expect(fn.mock.results[2].value).toBe(16)
    expect(fn.mock.results[3].value).toBe(25)
  })

  test('should fn work', () => {
    fn
      .mockReturnValueOnce(100)
      .mockReturnValueOnce(200)
      .mockReturnValue('42')
    
    expect(fn()).toBe(100)
    expect(fn()).toEqual(200)
    expect(fn()).toEqual('42')
    expect(fn()).toEqual('42')
  })
})

describe('forEach function', () => {
  const mockCallBack = jest.fn(x => 42 + x)
  forEach([0, 1], mockCallBack)

  test('should calls twice', () => {

    expect(mockCallBack.mock.calls.length).toBe(2)
  })

  test('the first argument of the first call to the function was 0', () => {
    expect(mockCallBack.mock.calls[0][0]).toBe(0)
  })

  test('the first argument of the second call to the function was 1', () => {
    expect(mockCallBack.mock.calls[1][0]).toBe(1)
  })

  test('the return value of the first call to the function was 42', () => {
  expect(mockCallBack.mock.results[0].value).toBe(42)
  })
}) 
