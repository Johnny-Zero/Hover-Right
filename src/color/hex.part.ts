let n = 1.0 / 255.0

// hexadecimal string (length 3) to RGBA float array
export function hex3ToRGBA(hex: string): number[] {
  return [
    parseInt(hex.slice(0, 1).repeat(2), 16) * n,
    parseInt(hex.slice(1, 2).repeat(2), 16) * n,
    parseInt(hex.slice(2, 3).repeat(2), 16) * n,
    1.0
  ]
}

// hexadecimal string (length 4) to RGBA float array
export function hex4ToRGBA(hex: string): number[] {
  return [
    parseInt(hex.slice(0, 1).repeat(2), 16) * n,
    parseInt(hex.slice(1, 2).repeat(2), 16) * n,
    parseInt(hex.slice(2, 3).repeat(2), 16) * n,
    parseInt(hex.slice(3, 4).repeat(2), 16) * n
  ]
}

// hexadecimal string (length 6) to RGBA float array
export function hex6ToRGBA(hex: string): number[] {
  return [
    parseInt(hex.slice(0, 2), 16) * n,
    parseInt(hex.slice(2, 4), 16) * n,
    parseInt(hex.slice(4, 6), 16) * n,
    1.0
  ]
}

// hexadecimal string (length 8) to RGBA float array
export function hex8ToRGBA(hex: string): number[] {
  return [
    parseInt(hex.slice(0, 2), 16) * n,
    parseInt(hex.slice(2, 4), 16) * n,
    parseInt(hex.slice(4, 6), 16) * n,
    parseInt(hex.slice(6, 8), 16) * n
  ]
}

// hexadecimal string (length 3/4/6/8) to RGBA float array
export default function hexToRGBA(hex: string): number[] {
  let r: number
  let g: number
  let b: number
  let a: number

  if (hex.length <= 4) {
    r = parseInt(hex.slice(0, 1).repeat(2), 16) * n
    g = parseInt(hex.slice(1, 2).repeat(2), 16) * n
    b = parseInt(hex.slice(2, 3).repeat(2), 16) * n
    if (hex.length === 4) {
      a = parseInt(hex.slice(3, 4).repeat(2), 16) * n
    } else {
      a = 1.0
    }
  } else {
    r = parseInt(hex.slice(0, 2), 16) * n
    g = parseInt(hex.slice(2, 4), 16) * n
    b = parseInt(hex.slice(4, 6), 16) * n
    if (hex.length === 8) {
      a = parseInt(hex.slice(6, 8), 16) * n
    } else {
      a = 1.0
    }
  }
  return [r, g, b, a]
}

// export let isNumeric = function(obj: object): boolean {
//   return !Array.isArray(obj) && obj - parseFloat(obj) + 1 >= 0
// }
