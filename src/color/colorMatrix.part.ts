// type Vehicle = Boat | SpaceShip | Wagon

export default class ColorMatrix {
  /* this class does't leave any wiggle room for defining it, for optimization purposes.
       a helper can be used for preparsing user input */

  // [[rx, ry, rz, rw, rt],
  //  [gx, gy, gz, gw, gt],
  //  [bx, by, bz, bw, bt],
  //  [ax, ay, az, aw, at]]

  m: number[][] // this.m

  constructor(m: number[][]) {
    this.m = m
  }

  /* a large amount of boiler-plate follows, to allow simple attribute access to the 
       matrix. this is useful in testing and development, but won't (or shouldn't) be 
       needed in a production environment. these should be optimized away, or they may
       just be removed eventually.
    */

  // row vectors
  get r(): number[] {
    // [rx, ry, rz, rw, rt]
    return this.m[0]
  }

  set r(row: number[]) {
    this.m[0] = row
  }

  get g(): number[] {
    // [gx, gy, gz, gw, gt]
    return this.m[1]
  }

  set g(row: number[]) {
    this.m[1] = row
  }

  get b(): number[] {
    // [bx, by, bz, bw, bt]
    return this.m[2]
  }

  set b(row: number[]) {
    this.m[2] = row
  }

  get a(): number[] {
    // [ax, ay, az, aw, at]
    return this.m[3]
  }

  set a(row: number[]) {
    this.m[3] = row
  }

  // column vectors
  get x(): number[] {
    // [rx, gx, bx, ax]
    return new Array(this.m[0][0], this.m[1][0], this.m[2][0], this.m[3][0])
  }

  set x(col: number[]) {
    this.m[0][0] = col[0]
    this.m[1][0] = col[1]
    this.m[2][0] = col[2]
    this.m[3][0] = col[3]
  }

  get y(): number[] {
    // [ry, gy, by, ay]
    return new Array(this.m[0][1], this.m[1][1], this.m[2][1], this.m[3][1])
  }

  set y(col: number[]) {
    this.m[0][1] = col[0]
    this.m[1][1] = col[1]
    this.m[2][1] = col[2]
    this.m[3][1] = col[3]
  }

  get z(): number[] {
    // [rz, gz, bz, az]
    return new Array(this.m[0][2], this.m[1][2], this.m[2][2], this.m[3][2])
  }

  set z(col: number[]) {
    this.m[0][2] = col[0]
    this.m[1][2] = col[1]
    this.m[2][2] = col[2]
    this.m[3][2] = col[3]
  }

  get w(): number[] {
    // [rw, gw, bw, aw]
    return new Array(this.m[0][3], this.m[1][3], this.m[2][3], this.m[3][3])
  }

  set w(col: number[]) {
    this.m[0][3] = col[0]
    this.m[1][3] = col[1]
    this.m[2][3] = col[2]
    this.m[3][3] = col[3]
  }

  get t(): number[] {
    // [rt, gt, bt, at]
    return new Array(this.m[0][4], this.m[1][4], this.m[2][4], this.m[3][4])
  }

  set t(col: number[]) {
    this.m[0][4] = col[0]
    this.m[1][4] = col[1]
    this.m[2][4] = col[2]
    this.m[3][4] = col[3]
  }

  get rx(): number {
    return this.m[0][0]
  }

  set rx(n: number) {
    this.m[0][0] = n
  }

  get ry(): number {
    return this.m[0][1]
  }

  set ry(n: number) {
    this.m[0][1] = n
  }

  get rz(): number {
    return this.m[0][2]
  }

  set rz(n: number) {
    this.m[0][2] = n
  }

  get rw(): number {
    return this.m[0][3]
  }

  set rw(n: number) {
    this.m[0][3] = n
  }

  get rt(): number {
    return this.m[0][4]
  }

  set rt(n: number) {
    this.m[0][4] = n
  }

  get gx(): number {
    return this.m[1][0]
  }

  set gx(n: number) {
    this.m[1][0] = n
  }

  get gy(): number {
    return this.m[1][1]
  }

  set gy(n: number) {
    this.m[1][1] = n
  }

  get gz(): number {
    return this.m[1][2]
  }

  set gz(n: number) {
    this.m[1][2] = n
  }

  get gw(): number {
    return this.m[1][3]
  }

  set gw(n: number) {
    this.m[1][3] = n
  }

  get gt(): number {
    return this.m[1][4]
  }

  set gt(n: number) {
    this.m[1][4] = n
  }

  get bx(): number {
    return this.m[2][0]
  }

  set bx(n: number) {
    this.m[2][0] = n
  }

  get by(): number {
    return this.m[2][1]
  }

  set by(n: number) {
    this.m[2][1] = n
  }

  get bz(): number {
    return this.m[2][2]
  }

  set bz(n: number) {
    this.m[2][2] = n
  }

  get bw(): number {
    return this.m[2][3]
  }

  set bw(n: number) {
    this.m[2][3] = n
  }

  get bt(): number {
    return this.m[2][4]
  }

  set bt(n: number) {
    this.m[2][4] = n
  }

  get ax(): number {
    return this.m[3][0]
  }

  set ax(n: number) {
    this.m[3][0] = n
  }

  get ay(): number {
    return this.m[3][1]
  }

  set ay(n: number) {
    this.m[3][1] = n
  }

  get az(): number {
    return this.m[3][2]
  }

  set az(n: number) {
    this.m[3][2] = n
  }

  get aw(): number {
    return this.m[3][3]
  }

  set aw(n: number) {
    this.m[3][3] = n
  }

  get at(): number {
    return this.m[3][4]
  }

  set at(n: number) {
    this.m[3][4] = n
  }

  /* permanent matrix manipulation functions */

  combine(N: ColorMatrix): void {
    // combine another color matrix with this one (after)
    // MATHEMAGIC

    this.m = [
      [
        this.m[0][0] * N.m[0][0] +
          this.m[0][1] * N.m[1][0] +
          this.m[0][2] * N.m[2][0] +
          this.m[0][3] * N.m[3][0],
        this.m[0][0] * N.m[0][1] +
          this.m[0][1] * N.m[1][1] +
          this.m[0][2] * N.m[2][1] +
          this.m[0][3] * N.m[1][1],
        this.m[0][0] * N.m[0][2] +
          this.m[0][1] * N.m[1][2] +
          this.m[0][2] * N.m[2][2] +
          this.m[0][3] * N.m[3][2],
        this.m[0][0] * N.m[0][3] +
          this.m[0][1] * N.m[1][3] +
          this.m[0][2] * N.m[2][3] +
          this.m[0][3] * N.m[3][3],
        this.m[0][4] + N.m[0][4]
      ],
      [
        this.m[1][0] * N.m[1][0] +
          this.m[1][1] * N.m[1][0] +
          this.m[1][2] * N.m[2][0] +
          this.m[1][3] * N.m[3][0],
        this.m[1][0] * N.m[1][1] +
          this.m[1][1] * N.m[1][1] +
          this.m[1][2] * N.m[2][1] +
          this.m[1][3] * N.m[1][1],
        this.m[1][0] * N.m[1][2] +
          this.m[1][1] * N.m[1][2] +
          this.m[1][2] * N.m[2][2] +
          this.m[1][3] * N.m[3][2],
        this.m[1][0] * N.m[1][3] +
          this.m[1][1] * N.m[1][3] +
          this.m[1][2] * N.m[2][3] +
          this.m[1][3] * N.m[3][3],
        this.m[1][4] + N.m[1][4]
      ],
      [
        this.m[2][0] * N.m[2][0] +
          this.m[2][1] * N.m[1][0] +
          this.m[2][2] * N.m[2][0] +
          this.m[2][3] * N.m[3][0],
        this.m[2][0] * N.m[2][1] +
          this.m[2][1] * N.m[1][1] +
          this.m[2][2] * N.m[2][1] +
          this.m[2][3] * N.m[1][1],
        this.m[2][0] * N.m[2][2] +
          this.m[2][1] * N.m[1][2] +
          this.m[2][2] * N.m[2][2] +
          this.m[2][3] * N.m[3][2],
        this.m[2][0] * N.m[2][3] +
          this.m[2][1] * N.m[1][3] +
          this.m[2][2] * N.m[2][3] +
          this.m[2][3] * N.m[3][3],
        this.m[2][4] + N.m[2][4]
      ],
      [
        this.m[3][0] * N.m[3][0] +
          this.m[3][1] * N.m[1][0] +
          this.m[3][2] * N.m[2][0] +
          this.m[3][3] * N.m[3][0],
        this.m[3][0] * N.m[3][1] +
          this.m[3][1] * N.m[1][1] +
          this.m[3][2] * N.m[2][1] +
          this.m[3][3] * N.m[1][1],
        this.m[3][0] * N.m[3][2] +
          this.m[3][1] * N.m[1][2] +
          this.m[3][2] * N.m[2][2] +
          this.m[3][3] * N.m[3][2],
        this.m[3][0] * N.m[3][3] +
          this.m[3][1] * N.m[1][3] +
          this.m[3][2] * N.m[2][3] +
          this.m[3][3] * N.m[3][3],
        this.m[3][4] + N.m[3][4]
      ]
    ]
  }

  reset(): void {
    // identity matrix
    this.m = [
      [1, 0, 0, 0, 0],
      [0, 1, 0, 0, 0],
      [0, 0, 1, 0, 0],
      [0, 0, 0, 1, 0]
    ]
  }

  duotone(
    black: number[] = [0, 0, 0],
    white: number[] = [1, 1, 1],
    grey: number = 0
  ): void {
    // set a duotone matrix. ie. where black and white are mapped to new colors
    this.m = [
      [white[0] - black[0], 0, 0, 0, black[0]],
      [0, white[1] - black[1], 0, 0, black[1]],
      [0, 0, white[2] - black[2], 0, black[2]],
      [0, 0, 0, 1, 0]
    ]
  }

  saturation(amount: number = 1.0): void {
    let rW: number = 0.2126
    let gW: number = 0.7152
    let bW: number = 0.0722

    let rS: number = (1.0 - amount) * rW
    let rZ: number = rS + amount
    let gS: number = (1.0 - amount) * gW
    let gZ: number = gS + amount
    let bS: number = (1.0 - amount) * bW
    let bZ: number = bS + amount

    let t: number = rW * this.m[0][4] + gW * this.m[1][4] + bW * this.m[2][4]

    this.m = [
      [
        this.m[0][0] * rZ + this.m[0][1] * rS + this.m[0][2] * rS,
        this.m[0][0] * gS + this.m[0][1] * gZ + this.m[0][2] * gS,
        this.m[0][0] * bS + this.m[0][1] * bS + this.m[0][2] * bZ,
        this.m[0][3],
        this.m[0][4] + t
      ],
      [
        this.m[1][0] * rZ + this.m[1][1] * rS + this.m[1][2] * rS,
        this.m[1][0] * gS + this.m[1][1] * gZ + this.m[1][2] * gS,
        this.m[1][0] * bS + this.m[1][1] * bS + this.m[1][2] * bZ,
        this.m[1][3],
        this.m[1][4] + t
      ],
      [
        this.m[2][0] * rZ + this.m[2][1] * rS + this.m[2][2] * rS,
        this.m[2][0] * gS + this.m[2][1] * gZ + this.m[2][2] * gS,
        this.m[2][0] * bS + this.m[2][1] * bS + this.m[2][2] * bZ,
        this.m[2][3],
        this.m[2][4] + t
      ],
      this.m[3]
    ]
  }

  get string(): string {
    return `${this.m[0][0]} ${this.m[0][1]} ${this.m[0][2]} ${this
      .m[0][3]} ${this.m[0][4]} ${this.m[1][0]} ${this.m[1][1]} ${this
      .m[1][2]} ${this.m[1][3]} ${this.m[1][4]} ${this.m[2][0]} ${this
      .m[2][1]} ${this.m[2][2]} ${this.m[2][3]} ${this.m[2][4]} ${this
      .m[3][0]} ${this.m[3][1]} ${this.m[3][2]} ${this.m[3][3]} ${this.m[3][4]}`
  }

  set string(s: string) {
    let m: string[] = s.split(' ')
    this.m[0][0] = Number(m[0])
    this.m[0][1] = Number(m[1])
    this.m[0][2] = Number(m[2])
    this.m[0][3] = Number(m[3])
    this.m[0][4] = Number(m[4])
    this.m[1][0] = Number(m[5])
    this.m[1][1] = Number(m[6])
    this.m[1][2] = Number(m[7])
    this.m[1][3] = Number(m[8])
    this.m[1][4] = Number(m[9])
    this.m[2][0] = Number(m[10])
    this.m[2][1] = Number(m[11])
    this.m[2][2] = Number(m[12])
    this.m[2][3] = Number(m[13])
    this.m[2][4] = Number(m[14])
    this.m[3][0] = Number(m[15])
    this.m[3][1] = Number(m[16])
    this.m[3][2] = Number(m[17])
    this.m[3][3] = Number(m[18])
    this.m[3][4] = Number(m[19])
  }

  fromSvgNumberList(l: SVGNumberList[]): void {
    this.m = [
      [l[0].value, l[1].value, l[2].value, l[3].value, l[4].value],
      [l[5].value, l[6].value, l[7].value, l[8].value, l[9].value],
      [l[10].value, l[11].value, l[12].value, l[13].value, l[14].value],
      [l[15].value, l[16].value, l[17].value, l[18].value, l[19].value]
    ]
  }

  static svgNumberListToString(v: SVGNumberList): string {
    return `${v[0].value} ${v[1].value} ${v[2].value} ${v[3].value} ${v[4]
      .value} ${v[5].value} ${v[6].value} ${v[7].value} ${v[8].value} ${v[9]
      .value} ${v[10].value} ${v[11].value} ${v[12].value} ${v[13]
      .value} ${v[14].value} ${v[15].value} ${v[16].value} ${v[17]
      .value} ${v[18].value} ${v[19].value}`
  }
}

/*
export class UserColorMatrix {
    let matrix: number[][]; // this.m

    let constructor(m: number[][] |
                       number[]   |
                       number     | = [[1, 0, 0, 0, 0], 
                                       [0, 1, 0, 0, 0], 
                                       [0, 0, 1, 0, 0], 
                                       [0, 0, 0, 1, 0]]) {

        if (typeof m === "string") {
            this.string(m);
        } if (Array.isArray(m)) {

            //[[rx, ry, rz, rw, rt],
            // [gx, gy, gz, gw, gt],
            // [bx, by, bz, bw, bt],
            // [ax, ay, az, aw, at]]
            
            if (matrix.length == 3) {
                if (matrix.every( elem => isNumeric(elem) ) {
                    this.m = [[matrix[0], 0, 0, 0, 0], [0, matrix[1], 0, 0, 0], [0, 0, matrix[2], 0, 0], [0, 0, 0, 1, 0]]
                } else if {

                }
                
            } else {
                this.m = matrix;
            }
        } else {
            throw "Constructor is not a validly formatted array or string."
        }
        }
    }

    */
