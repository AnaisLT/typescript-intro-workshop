function takesNumberOrString(value) {
    if (typeof value === "number") {
        return value.toFixed();
    }
    else {
        return value.length;
    }
    value.toFixed();
}
