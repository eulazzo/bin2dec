const btn = document.getElementById("convert")
const result = document.getElementById("result_field")

btn.addEventListener("click", e => {
  const binValue = document.getElementById("valueInput").value
  if (binValue.length) authentication(binValue);
  e.preventDefault()

})

// if(Number.isInteger(parseInt(binValue)) && isNumber(binValue))
const authentication = binValue => {
  if (!isNaN(binValue)) {
    if (binValue.length > 8) {
      result.value = "Try again! Binary number contains only 8 digits!"
    } else if (!isZeroOrOne(binValue)) {
      result.value = "Try again! Binary number contains only 0 and 1 digits!"
    } else {
      result.value = `${binValue} (bin) = ${convertToDecimal(binValue)} (dec)`;
    }
  } else {
    result.value = `"${binValue}" it's not a number`;
  }
}

// const isNumber = (binValue) => {
//   let onlyNumber = false;
//   for (let i = 0; i < binValue.length; i++) {
//     if (Number.isInteger(parseInt(binValue[i]))) onlyNumber = true
//     else onlyNumber = false
//   }
//   return onlyNumber;
// }

const isZeroOrOne = binValue => {
  let isValid = true;
  const notValidNumbers = [2, 3, 4, 5, 6, 7, 8, 9]
  for (let i = 0; i < binValue.length; i++) {
    if (notValidNumbers.includes(parseInt(binValue[i]))) isValid = false;
  }
  return isValid;
}

const convertToDecimal = binValue => {
  let exponent = binValue.length - 1;
  let binConvertedToDec = 0;
  for (let index = 0; index < binValue.length; index++) {
    binConvertedToDec = binConvertedToDec + parseInt(binValue[index]) * Math.pow(2, exponent)
    exponent--
  }
  return binConvertedToDec
}