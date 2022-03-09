function maybeTakesAString (value: number | undefined) {

  if(value) {
    return value.length;
  }
  return value.length;
}


function takesNumberOrString(value: number | string) {
  // if (typeof value === "number") {
  //   return value.toFixed();
  // } else {
  //   return value.length;
  // }

  return value.toFixed();
}
