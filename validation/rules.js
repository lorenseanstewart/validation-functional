export function favoriteCarIsFiat({ obj, errorArray = [] }) {
  if (obj.car && obj.car.toLowerCase() === "fiat") {
    return {
      obj,
      errorArray
    };
  } else {
    return {
      obj,
      errorArray: [
        ...errorArray,
        "This person has poor taste in cars. Block 'em.'"
      ]
    };
  }
}

export function milkOrDarkChocolate({ obj, errorArray = [] }) {
  if (obj.chocolateType && obj.chocolateType.toLowerCase() === "milk") {
    return {
      obj,
      errorArray
    };
  } else {
    return {
      obj,
      errorArray: [...errorArray, "This maniac prefers dark chocolate."]
    };
  }
}

export function favoriteAnimal({ obj, errorArray = [] }) {
  if (obj.favoriteAnimal && obj.favoriteAnimal.toLowerCase() === "cats") {
    return {
      obj,
      errorArray
    };
  } else {
    return {
      obj,
      errorArray: [
        ...errorArray,
        "Not a cat lover. Don't let them in the club."
      ]
    };
  }
}
