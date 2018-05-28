// Takes a hexadecimal string and returns an RGBA float array
export default function hexToRGBA(hex: string): number[] {
  let r: number
  let g: number
  let b: number
  let a: number

  if (hex.length <= 4) {
    r = parseInt(hex.slice(0, 1).repeat(2), 16) * 1.0 / 255.0
    g = parseInt(hex.slice(1, 2).repeat(2), 16) * 1.0 / 255.0
    b = parseInt(hex.slice(2, 3).repeat(2), 16) * 1.0 / 255.0
    if (hex.length === 4) {
      a = parseInt(hex.slice(3, 4).repeat(2), 16) * 1.0 / 255.0
    } else {
      a = 1.0
    }
  } else {
    r = parseInt(hex.slice(0, 2), 16) * 1.0 / 255.0
    g = parseInt(hex.slice(2, 4), 16) * 1.0 / 255.0
    b = parseInt(hex.slice(4, 6), 16) * 1.0 / 255.0
    if (hex.length === 8) {
      a = parseInt(hex.slice(6, 8), 16) * 1.0 / 255.0
    } else {
      a = 1.0
    }
  }
  return [r, g, b, a]
}

export let isNumeric = function(obj: object): boolean {
  return !Array.isArray(obj) && obj - parseFloat(obj) + 1 >= 0
}
