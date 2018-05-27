import hexToRGBA from '../../src/partials/color'

/**
 * Dummy test
 */
describe('hexToRGBA', () => {
  function genHex(n) {
    var text = ''
    for (var i = 0; i < n; i++)
      text += '0123456789ABCDEF'.charAt(Math.floor(Math.random() * 16))
    return text
  }

  function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n)
  }

  it('returns a properly formated array of floats', () => {
    let hex = genHex(8)
    let rgba: number[] = hexToRGBA(hex)

    expect(rgba).toBeDefined()
    expect(Array.isArray(rgba)).toBe(true)
    expect(rgba).toHaveLength(4)

    let [r, g, b, a] = rgba

    expect(isNumber(r)).toBe(true)
    expect(isNumber(g)).toBe(true)
    expect(isNumber(b)).toBe(true)
    expect(isNumber(a)).toBe(true)
  })
})
