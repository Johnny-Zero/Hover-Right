import hexToRGBA from '@color/hex.part'
import hex3ToRGBA from '@color/hex.part'
import hex4ToRGBA from '@color/hex.part'
import hex6ToRGBA from '@color/hex.part'
import hex8ToRGBA from '@color/hex.part'

/**
 * Dummy test
 */
describe('hex.part.ts', () => {
  function genHex(n: number): string {
    let text = ''
    for (let i = 0; i < n; i++) {
      text += '0123456789ABCDEF'.charAt(Math.floor(Math.random() * 16))
    }
    return text
  }

  function isNumber(n: number): boolean {
    return !isNaN(Number(n)) && isFinite(n)
  }

  // let funcs : { [key:string]:Function; } = {}
  let N: number[] = [3, 4, 6, 8]
  let fn: Function[] = [hex3ToRGBA, hex4ToRGBA, hex6ToRGBA, hex8ToRGBA]
  let names: string[] = ['hex3ToRGBA', 'hex4ToRGBA', 'hex6ToRGBA', 'hex8ToRGBA']

  for (let i = 0; i < N.length; i++) {
    describe(names[i], () => {
      it('returns a properly formated array of floats', () => {
        let hex = genHex(N[i])
        let rgba: number[] = fn[i](hex)

        expect(rgba).toBeDefined()
        expect(rgba).toBeArray()
        expect(rgba).toHaveLength(4)
        expect(rgba).toContainOnlyNumbers()

        for (let j = 0; j < rgba.length; j++) {
          // expect(rgba[j]).toBeNumber()
          expect(rgba[j]).toBeGreaterThanOrEqual(0.0)
          expect(rgba[j]).toBeLessThanOrEqual(1.0)
        }
      })
    })
  }
})
