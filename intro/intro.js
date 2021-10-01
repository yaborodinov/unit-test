function expect(value) {
  return {
    toBe: exp => {
      if (value === exp) {
        console.log('success');
      } else {
        console.error(`value is ${value}, but expectation is ${exp} `);
      }
    }
  }  
}

const sum = (a, b) => a + b

const nativeNull = () => null

module.exports = {sum, nativeNull}

// expect(sum(11, 1)).toBe(22)