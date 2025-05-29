function isSameType(value1, value2) {
  const bothNaN = Number.isNaN(value1) && Number.isNaN(value2);
  const oneNaN = Number.isNaN(value1) || Number.isNaN(value2);

  if (bothNaN) return true;
  if (oneNaN) return false;

  return typeof value1 === typeof value2;
}
let value1 = Number(prompt("Enter Start of the Range."));
let value2 = Number(prompt("Enter End Of the Range."));
alert(isSameType(value1, value2));
