function getArray(items: any[]): any[] {
  return new Array().concat(items)
}

let numArray = getArray([1, 2, 3, 4])
let strArray = getArray(["Obi-Wan", "Qui-Gon", "Yoda"])

strArray.push(1);
