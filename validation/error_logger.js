function errorLogger({ obj, errorArray = [] }) {
  if (errorArray.length) {
    console.log("Errors:", errorArray);
  } else {
    console.log("Passed validation!");
  }
}

export default errorLogger;
