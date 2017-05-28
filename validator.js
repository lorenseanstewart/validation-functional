import pipe from "lodash/fp/flow";
import errorLogger from "./validation/error_logger";
import {
  favoriteCarIsFiat,
  milkOrDarkChocolate,
  favoriteAnimal
} from "./validation/rules";

// create a validator by composing rule functions
const newMemberValidator = pipe(
  favoriteCarIsFiat,
  milkOrDarkChocolate,
  favoriteAnimal,
  errorLogger
);

// dummy data to validate
const newMemberData = {
  car: "Fiat",
  chocolateType: "milk",
  favoriteAnimal: "cats"
};

// testing out the validator!
newMemberValidator({ obj: newMemberData, errorArray: [] });
